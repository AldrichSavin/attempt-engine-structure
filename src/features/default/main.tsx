import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";


/**
 * It is responsible for bootstrapping the feature and rendering the App component.
 */
start();

function start() {
    bootstrap("root", <App />);
}

/**
 * 
 * @param target string or HTMLElement
 * @param instance React.ReactElement
 * @returns function to unmount the feature from the DOM tree
 */
function bootstrap(target: HTMLElement | string, instance: React.ReactElement) {
    const root = typeof target === "string"
        ? document.getElementById(target)
        : target;

    if (!root) {
        throw new Error(`Unable to find target element with id: ${target}`);
    }

    const rootApp = ReactDOM.createRoot(root)
    rootApp.render(instance);

    return () => {
        rootApp.unmount();
    }
};
