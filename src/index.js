// import dependencies
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// import our App component
import App from "./components/App.jsx";

// render our App component
ReactDOM.render(<App />, document.getElementById("root"));

// Register a service worker for caching
registerServiceWorker();
