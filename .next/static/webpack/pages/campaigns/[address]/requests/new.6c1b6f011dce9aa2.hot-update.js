"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/requests/new",{

/***/ "./pages/campaigns/[address]/requests/new.js":
/*!***************************************************!*\
  !*** ./pages/campaigns/[address]/requests/new.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ RequestNew; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction RequestNew(param) {\n    var address = param.address;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), description = ref1[0], setDescription = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), recipient = ref2[0], setRecipient = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Description\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Value in Ether\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Recipient\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\new.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(RequestNew, \"PJaafpXrelngrKpAuo0CislQ5rY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = RequestNew;\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDQTtBQUNUO0FBQ2tDO0FBQ1Y7QUFDUjs7O0FBRTdCLFFBQVEsQ0FBQ1UsVUFBVSxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVhDLE9BQU8sR0FBUixLQUFTLENBQVJBLE9BQU87O0lBQ3pDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUztJQUN4QixHQUFLLENBQXFCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QlksS0FBSyxHQUFjWixHQUFZLEtBQXhCYSxRQUFRLEdBQUliLEdBQVk7SUFDdEMsR0FBSyxDQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBMUNjLFdBQVcsR0FBb0JkLElBQVksS0FBOUJlLGNBQWMsR0FBSWYsSUFBWTtJQUNsRCxHQUFLLENBQTZCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUF0Q2dCLFNBQVMsR0FBa0JoQixJQUFZLEtBQTVCaUIsWUFBWSxHQUFJakIsSUFBWTtJQUU5QyxNQUFNLHVFQUNISSxtREFBSTs7Ozs7Ozs7a0ZBQ0ZBLHlEQUFVOzs7Ozs7Ozt5RkFDUmUsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFXOzt5RkFDakJkLG9EQUFLOzs7Ozs7Ozs7O2tGQUVQRCx5REFBVTs7Ozs7Ozs7eUZBQ1JlLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBYzs7eUZBQ3BCZCxvREFBSzs7Ozs7Ozs7OztrRkFFUEQseURBQVU7Ozs7Ozs7O3lGQUNSZSxDQUFLOzs7Ozs7O2tDQUFDLENBQVM7O3lGQUNmZCxvREFBSzs7Ozs7Ozs7Ozs7O0FBSWQsQ0FBQztHQXRCdUJJLFVBQVU7O1FBQ2pCUixrREFBUzs7O0tBREZRLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS9yZXF1ZXN0cy9uZXcuanM/MTM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0J1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0TmV3KHthZGRyZXNzfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZWNpcGllbnQsIHNldFJlY2lwaWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybT5cclxuICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8bGFiZWw+VmFsdWUgaW4gRXRoZXI8L2xhYmVsPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3F1ZXJ5OiB7YWRkcmVzc319KSB7XHJcbiAgcmV0dXJuIHtwcm9wczoge2FkZHJlc3N9fTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxpbmsiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUmVxdWVzdE5ldyIsImFkZHJlc3MiLCJyb3V0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsInNldFJlY2lwaWVudCIsIkZpZWxkIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/new.js\n");

/***/ })

});