"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var dom_element_to_react_1 = require("dom-element-to-react");
var ReactDOM = require("react-dom");
var rehydratableToReactElement = function (el, rehydrators, options) { return __awaiter(_this, void 0, void 0, function () {
    var rehydratorSelector, rehydratorName, rehydrator;
    var _this = this;
    return __generator(this, function (_a) {
        rehydratorSelector = Object.keys(options.allSelectors).find(function (selector) {
            return el.matches(selector);
        });
        if (!rehydratorSelector) {
            throw new Error("No rehydrator selector matched the element.");
        }
        rehydratorName = options.allSelectors[rehydratorSelector];
        if (!rehydratorName) {
            throw new Error("Rehydrator name is missing from element.");
        }
        rehydrator = rehydrators[rehydratorName];
        if (!rehydrator) {
            throw new Error("No rehydrator found for type " + rehydratorName);
        }
        return [2 /*return*/, rehydrator(el, function (children) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, rehydrateChildren(children, rehydrators, options)];
                    case 1: return [2 /*return*/, (_a.sent()).rehydrated];
                }
            }); }); }, options.extra)];
    });
}); };
exports.rehydratableToReactElement = rehydratableToReactElement;
var createCustomHandler = function (rehydrators, options) { return function (node) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // This function will run on _every_ node that domElementToReact encounters.
        // Make sure to keep the conditional highly performant.
        if (node.nodeType === Node.ELEMENT_NODE &&
            node.matches(options.compoundSelector)) {
            return [2 /*return*/, rehydratableToReactElement(node, rehydrators, options)];
        }
        return [2 /*return*/, false];
    });
}); }; };
var createReactRoot = function (el) {
    var container = document.createElement("div");
    if (el.parentNode) {
        el.parentNode.replaceChild(container, el);
    }
    container.appendChild(el);
    container.classList.add("rehydration-root");
    return container;
};
var rehydrateChildren = function (el, rehydrators, options) { return __awaiter(_this, void 0, void 0, function () {
    var container, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                container = createReactRoot(el);
                _a = {
                    container: container
                };
                return [4 /*yield*/, dom_element_to_react_1.default(container, createCustomHandler(rehydrators, options))];
            case 1: return [2 /*return*/, (_a.rehydrated = _b.sent(),
                    _a)];
        }
    });
}); };
exports.rehydrateChildren = rehydrateChildren;
var render = function (_a) {
    var rehydrated = _a.rehydrated, root = _a.root;
    if (!rehydrated || !root) {
        return;
    }
    // Unmount; it's possible that this was rehydrated previously.
    ReactDOM.unmountComponentAtNode(root);
    ReactDOM.render(rehydrated, root);
};
var defaultGetQuerySelector = function (key) {
    return "[data-rehydratable*=\"" + key + "\"]";
};
var createQuerySelectors = function (rehydratableIds, getQuerySelector) {
    if (getQuerySelector === void 0) { getQuerySelector = defaultGetQuerySelector; }
    var allSelectors = rehydratableIds.reduce(function (acc, key) {
        var _a;
        return (__assign({}, acc, (_a = {}, _a[getQuerySelector(key)] = key, _a)));
    }, {});
    var compoundSelector = Object.keys(allSelectors).reduce(function (acc, selector) { return "" + (acc ? acc + ", " : "") + selector; }, "");
    return {
        allSelectors: allSelectors,
        compoundSelector: compoundSelector
    };
};
exports.default = (function (container, rehydrators, options) { return __awaiter(_this, void 0, void 0, function () {
    var _a, allSelectors, compoundSelector, loadedOptions, roots, renders, _loop_1, _i, roots_1, root;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = createQuerySelectors(Object.keys(rehydrators), options.getQuerySelector), allSelectors = _a.allSelectors, compoundSelector = _a.compoundSelector;
                loadedOptions = {
                    allSelectors: allSelectors,
                    compoundSelector: compoundSelector,
                    extra: options.extra
                };
                roots = Array.from(container.querySelectorAll(compoundSelector)).reduce(function (acc, root) {
                    // filter roots that are contained within other roots
                    if (!acc.some(function (r) { return r.contains(root); })) {
                        acc.push(root);
                    }
                    return acc;
                }, []);
                renders = [];
                _loop_1 = function (root) {
                    // It's possible that this root was detached by a previous render in this loop
                    if (container.contains(root)) {
                        renders.push(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, rootContainer, rehydrated, e_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, rehydrateChildren(root, rehydrators, loadedOptions)];
                                    case 1:
                                        _a = _b.sent(), rootContainer = _a.container, rehydrated = _a.rehydrated;
                                        return [2 /*return*/, { root: rootContainer, rehydrated: rehydrated }];
                                    case 2:
                                        e_1 = _b.sent();
                                        /* tslint:disable-next-line no-console */
                                        console.error("Rehydration failure", e_1);
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/, {}];
                                }
                            });
                        }); });
                    }
                };
                for (_i = 0, roots_1 = roots; _i < roots_1.length; _i++) {
                    root = roots_1[_i];
                    _loop_1(root);
                }
                return [4 /*yield*/, Promise.all(renders.map(function (r) { return r().then(render); }))];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=rehydrator.js.map