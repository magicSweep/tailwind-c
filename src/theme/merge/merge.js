"use strict";
exports.__esModule = true;
exports.mergeConfig = exports.merge = void 0;
var helper_1 = require("./helper");
var pathToConfig = "./../../tailwind.config";
var mainConf = require(pathToConfig);
var merge = function (config) {
    return exports.mergeConfig(config, mainConf);
};
exports.merge = merge;
var mergeConfig = function (ourConfig, mainConfig) {
    var _a = ourConfig.theme, ourExtend = _a.extend, ourVariants = _a.variants;
    var _b = mainConfig.theme, mainExtend = _b.extend, mainVariants = _b.variants;
    var extend = helper_1.merge(ourExtend, mainExtend);
    var variants = helper_1.merge(ourVariants, mainVariants);
    ourConfig.theme.extend = extend;
    ourConfig.theme.variants = variants;
    return ourConfig;
};
exports.mergeConfig = mergeConfig;
