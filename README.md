### Project: React Development - URL Shortening API Landing Page

This project aims to create a landing page that integrates with the [bitlyAPI](https://dev.bitly.com/) to shorten URLs, featuring a list of shortened links and the ability to copy them to the clipboard.

#### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if the `input` field is empty

---

#### Live Demo Link

- [URL Shortening API Landing Page](https://url-shortening-api-landing-page-react.netlify.app/)

---

#### Cloning the Repository

1. To clone this repository, open terminal or command prompt and run the following command:

```bash
git clone https://github.com/urmee04/URL-Shortening-API-Landing-Page-With-React.git
cd url-shortening-api-landing-page-react
npm install
npm run dev
```

#### Development Process Reflection

Building this URL shortening application was an enriching experience that strengthened my skills in React, responsive design, and state management. I started by structuring the layout with a clean, user-friendly interface, ensuring the header, hero section, and URL input were intuitive. The development process followed a component-based architecture, making the code modular and reusable.

#### Challenges Faced

**Styling Inconsistencies** The header looked different in React compared to plain HTML/CSS due to incorrect nesting of elements and missing font imports.

**Responsive Design** Ensuring the mobile menu worked smoothly required careful media query adjustments and state management for toggling.

**URL Shortening Logic** Handling API calls, error states, and displaying shortened links dynamically was initially tricky.

##### Solutions Implemented

- Fixed Styling Issues by restructuring the header component, properly importing fonts, and verifying class names matched CSS selectors.

- Optimized Mobile UX by using a menuOpen state to toggle the navigation and refining media queries for different screen sizes.

- Implemented API Integration with error handling to ensure smooth URL shortening and user feedback.

#### Potential Improvements

- **Performance Optimization** Implement lazy loading for components, images and optimize API calls.
- **Add User Authentication** To save shortened URLs and analytics tracking.
- **Bulk URL Shortening** Allow users to upload a CSV/Excel file to shorten multiple URLs at once.

Overall, this project deepened my understanding of React’s component lifecycle, responsive design principles, and API integration. Moving forward, I aim to refine performance while expanding functionality.

#### Resources

- [Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G)

- [react.dev useState](https://react.dev/reference/react/useState)

- [React Tutorial Bangla](https://www.youtube.com/watch?v=9IdczKQNg3o&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8)

- [ReactJS Tutorial](https://www.tutorialspoint.com/reactjs/reactjs_state_management.htm)
