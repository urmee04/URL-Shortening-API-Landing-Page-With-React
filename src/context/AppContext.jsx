import { createContext, useState, useContext } from "react";

//create the context object for global state sharing
const AppContext = createContext();

//context Provider component to wrap the app
export function AppProvider({ children }) {
  //state to store all shortened links
  const [shortenedLinks, setShortenedLinks] = useState([]);

  // API key for the URL shortening
  const [apiKey] = useState("db70f8460a21849ff4715f1325cc5fb312a714ba");

  // Loading state for API requests
  const [isLoading, setIsLoading] = useState(false);

  // Theme state (light or dark mode)
  const [theme, setTheme] = useState("light");

  // Function to add a new shortened link and store it in localStorage
  const addShortenedLink = (newLink) => {
    setShortenedLinks((prev) => {
      const updatedLinks = [newLink, ...prev]; // Always based on latest state
      localStorage.setItem("shortenedLinks", JSON.stringify(updatedLinks));
      return updatedLinks;
    });
  };

  return (
    // Provide all states and functions to any component that consumes this context
    <AppContext.Provider
      value={{
        shortenedLinks,
        addShortenedLink,
        apiKey,
        isLoading,
        setIsLoading,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for using the AppContext easily
export const useAppContext = () => useContext(AppContext);
