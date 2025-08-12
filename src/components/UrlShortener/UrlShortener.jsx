import { useState } from "react";
import LinkItem from "../LinkItem/LinkItem";
import { useAppContext } from "../../context/AppContext";

function UrlShortener() {
  const [urlInput, setUrlInput] = useState(""); //input field state
  const [error, setError] = useState(""); //error message state
  const { shortenedLinks, addShortenedLink, apiKey, isLoading, setIsLoading } =
    useAppContext(); //app context state and methods

  //validate URL function
  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  // Shorten URL function
  const shortenUrl = async () => {
    let userURL = urlInput.trim(); //trim input URL
    //check if URL is empty
    if (!userURL) {
      setError("Please add a link");
      return;
    }

    if (!userURL.startsWith("http://") && !userURL.startsWith("https://")) {
      userURL = `https://${userURL}`;
    }

    if (!isValidURL(userURL)) {
      setError("Please enter a valid URL");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      //Bitly API URL
      const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: userURL }),
      });
      //check if response is OK
      if (res.ok) {
        const data = await res.json();
        const newLink = { original: userURL, short: data.link };
        addShortenedLink(newLink); //add shortened link to app context
        setUrlInput(""); // Clear input field
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="url-background-container"
        aria-label="URL shortener section"
      >
        <div className="container">
          <div className="url-container">
            <input
              type="text"
              id="url-input"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Shorten a link here..."
              aria-label="URL input field"
              className={error ? "error" : ""}
              onKeyDown={(e) => e.key === "Enter" && shortenUrl()}
              disabled={isLoading}
            />
            <button
              id="activate-btn"
              onClick={shortenUrl}
              aria-label="Shorten the entered URL"
              disabled={isLoading}
            >
              {isLoading ? "Shortening..." : "Shorten It!"}
            </button>
            {error && (
              <p id="error-message" className="error-message" role="alert">
                {error}
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        <div id="link-history">
          {shortenedLinks.map((link, index) => (
            <LinkItem key={index} original={link.original} short={link.short} />
          ))}
        </div>
      </div>
    </>
  );
}

export default UrlShortener;
