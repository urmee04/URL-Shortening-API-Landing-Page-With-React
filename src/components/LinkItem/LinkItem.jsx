import { useState } from "react";

// LinkItem component; displays an original URL, shortened URL, and copy-to-clipboard functionality
function LinkItem({ original, short }) {
  // State to track whether the link has been copied
  const [copied, setCopied] = useState(false);

  // Function to copy the shortened link to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(short); //copies short link to clipboard
    setCopied(true); //Show Copied! feedback
    setTimeout(() => setCopied(false), 1500); //reset the copied state after 1.5 seconds
  };

  return (
    <div className="item">
      <div className="link-item-content">
        {/* Original link text */}
        <p className="original-link">{original}</p>

        {/* Shortened link + copy button */}
        <div className="link-actions">
          {/* Shortened link opens in a new tab */}
          <a
            href={short}
            target="_blank"
            rel="noopener noreferrer"
            className="short-link"
          >
            {short}
          </a>

          {/* Copy button with dynamic text and background color */}
          <button
            className="copy-link-btn"
            onClick={handleCopy}
            style={{ backgroundColor: copied ? "#3b3054" : "#2acfcf" }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
