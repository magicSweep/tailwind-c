"use strict";
exports.__esModule = true;
exports.merge = exports.mergeDeep = exports.applyTheme = void 0;
var themes_1 = require("./themes");
var applyTheme = function (theme) {
    if (typeof window === "undefined")
        return;
    var themeObject = themes_1.mapTheme(themes_1.themes[theme]);
    if (!themeObject)
        return;
    var root = document.documentElement;
    Object.keys(themeObject).forEach(function (property) {
        if (property === "name") {
            return;
        }
        //@ts-ignore
        root.style.setProperty(property, themeObject[property]);
    });
};
exports.applyTheme = applyTheme;
function mergeDeep(target, source) {
    var isObject = function (obj) { return obj && typeof obj === "object"; };
    if (!isObject(target) || !isObject(source)) {
        throw new Error("Target and source must be an object...");
    }
    Object.keys(source).forEach(function (key) {
        var targetValue = target[key];
        var sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}
exports.mergeDeep = mergeDeep;
var keys = [];
function merge(ourConfig, mainConfig, currKey) {
    var isObject = function (obj) { return obj && typeof obj === "object"; };
    if (!isObject(ourConfig) || !isObject(mainConfig)) {
        throw new Error("Target and source must be an object...");
    }
    if (currKey)
        keys.push(currKey);
    Object.keys(mainConfig).forEach(function (key) {
        var ourConfigValue = ourConfig[key];
        var mainConfigValue = mainConfig[key];
        if (!isObject(mainConfigValue) || Array.isArray(mainConfigValue)) {
            if (ourConfigValue !== undefined)
                throw new Error("Possible overriding key - " + (keys.length === 0 ? key : keys.join(".") + "." + key) + " | value - " + ourConfigValue);
            else
                ourConfig[key] = mainConfigValue;
        }
        else {
            if (ourConfigValue === undefined)
                ourConfig[key] = mainConfigValue;
            else
                ourConfig[key] = merge(Object.assign({}, ourConfigValue), mainConfigValue, key);
        }
        /*  if (Array.isArray(ourConfigValue) && Array.isArray(mainConfigValue)) {
            ourConfig[key] = ourConfigValue.concat(mainConfigValue);
          } else if (isObject(ourConfigValue) && isObject(mainConfigValue)) {
            ourConfig[key] = mergeDeep(Object.assign({}, ourConfigValue), mainConfigValue);
          } else {
            ourConfig[key] = mainConfigValue;
          } */
    });
    keys = [];
    return ourConfig;
}
exports.merge = merge;
