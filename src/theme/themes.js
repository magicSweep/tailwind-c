"use strict";
exports.__esModule = true;
exports.mapTheme = exports.themes = void 0;
exports.themes = {
    light: {
        primary: "#1976d2",
        secondary: "rgb(220, 0, 78)",
        paper: "#fff",
        white: "#fff",
        disabled: "rgba(0, 0, 0, 0.38)",
        title: "rgba(0, 0, 0, 0.87)",
        body: "rgba(0, 0, 0, 0.54)",
        error: "#f44336",
        info: "#2196f3",
        warning: "#ff9800",
        success: "#4caf50"
    },
    dark: {
        primary: "#1976d2",
        secondary: "rgb(220, 0, 78)",
        paper: "#303030",
        white: "rgba(255, 255, 255, 0.87)",
        disabled: "rgba(255, 255, 255, 0.5)",
        title: "rgba(255, 255, 255, 0.87)",
        body: "rgba(255, 255, 255, 0.7)",
        error: "#f44336",
        info: "#2196f3",
        warning: "#ff9800",
        success: "#4caf50"
    }
};
var mapTheme = function (themeVariables) { return ({
    "--color-primary": themeVariables.primary,
    "--color-secondary": themeVariables.secondary,
    "--color-paper": themeVariables.paper,
    "--color-title": themeVariables.title,
    "--color-text": themeVariables.body,
    "--color-disabled": themeVariables.disabled,
    "--color-white": themeVariables.white,
    "--color-error": themeVariables.error,
    "--color-info": themeVariables.info,
    "--color-warning": themeVariables.warning,
    "--color-success": themeVariables.success
}); };
exports.mapTheme = mapTheme;
