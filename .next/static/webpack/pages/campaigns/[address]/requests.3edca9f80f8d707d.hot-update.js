"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/requests",{

/***/ "./pages/campaigns/[address]/requests/index.js":
/*!*****************************************************!*\
  !*** ./pages/campaigns/[address]/requests/index.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ RequestIndex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/RequestRow */ \"./components/RequestRow.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction RequestIndex(param) {\n    var address = param.address, requests = param.requests, requestCount = param.requestCount;\n    var _this = this;\n    var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Header, Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Body;\n    var showRow = function() {\n        var _this1 = _this;\n        return requests.map(function(request, index) {\n            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 14\n                },\n                __self: _this1\n            }));\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Request List\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/campaigns/\".concat(address, \"/requests/new\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        primary: true,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Add Requests\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Header, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"ID\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Description\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Amount\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Recipient\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Approval Count\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Approve\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderCell, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\requests\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Finalize\"\n                            })\n                        ]\n                    })\n                })\n            })\n        ]\n    }));\n};\n_c = RequestIndex;\nvar _c;\n$RefreshReg$(_c, \"RequestIndex\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNtQjtBQUNHO0FBRVE7O0FBRTNDLFFBQVEsQ0FBQ00sWUFBWSxDQUFDLEtBQWlDLEVBQUUsQ0FBQztRQUFuQ0MsT0FBTyxHQUFSLEtBQWlDLENBQWhDQSxPQUFPLEVBQUVDLFFBQVEsR0FBbEIsS0FBaUMsQ0FBdkJBLFFBQVEsRUFBRUMsWUFBWSxHQUFoQyxLQUFpQyxDQUFiQSxZQUFZOztJQUNuRSxHQUFLLENBQUVDLE1BQU0sR0FBMkJQLDJEQUEzQixFQUFFUSxHQUFHLEdBQXNCUix3REFBdEIsRUFBRVMsVUFBVSxHQUFVVCwrREFBVixFQUFFVSxJQUFJLEdBQUlWLHlEQUFKO0lBRXBDLEdBQUssQ0FBQ1csT0FBTyxHQUFHLFFBQVEsR0FBRixDQUFDOztRQUNyQixNQUFNLENBQUNOLFFBQVEsQ0FBQ08sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFFQyxLQUFLLEVBQUssQ0FBQztZQUN2QyxNQUFNLHNFQUFFWiw4REFBVTs7Ozs7Ozs7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHVFQUNIRCwwREFBTTs7Ozs7Ozs7aUZBQ0pjLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBWTs7aUZBQ2ZqQixrREFBSTtnQkFBQ2tCLElBQUksRUFBRyxDQUFXLGFBQVUsTUFBYSxDQUFyQlosT0FBTyxFQUFDLENBQWE7Ozs7Ozs7K0ZBQzVDYSxDQUFDOzs7Ozs7O21HQUNDbEIscURBQU07d0JBQUNtQixPQUFPOzs7Ozs7O2tDQUFDLENBQVk7Ozs7aUZBRy9CbEIsb0RBQUs7Ozs7Ozs7K0ZBQ0hPLE1BQU07Ozs7Ozs7b0dBQ0pDLEdBQUc7Ozs7Ozs7O2lHQUNEQyxVQUFVOzs7Ozs7OzBDQUFDLENBQUU7O2lHQUNiQSxVQUFVOzs7Ozs7OzBDQUFDLENBQVc7O2lHQUN0QkEsVUFBVTs7Ozs7OzswQ0FBQyxDQUFNOztpR0FDakJBLFVBQVU7Ozs7Ozs7MENBQUMsQ0FBUzs7aUdBQ3BCQSxVQUFVOzs7Ozs7OzBDQUFDLENBQWM7O2lHQUN6QkEsVUFBVTs7Ozs7OzswQ0FBQyxDQUFPOztpR0FDbEJBLFVBQVU7Ozs7Ozs7MENBQUMsQ0FBUTs7Ozs7Ozs7QUFNaEMsQ0FBQztLQWhDdUJOLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS9yZXF1ZXN0cy9pbmRleC5qcz8yOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7QnV0dG9uLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcXVlc3RJbmRleCh7YWRkcmVzcywgcmVxdWVzdHMsIHJlcXVlc3RDb3VudH0pIHtcclxuICBjb25zdCB7SGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHl9ID0gVGFibGU7XHJcblxyXG4gIGNvbnN0IHNob3dSb3cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gPFJlcXVlc3RSb3cgLz5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+UmVxdWVzdCBMaXN0PC9oMz5cclxuICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvJHthZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdHM8L0J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPFRhYmxlPlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeToge2FkZHJlc3N9fSkge1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG5cclxuICBjb25zdCByZXF1ZXN0cyA9ICBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKClcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtwcm9wczoge2FkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnR9fTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiVGFibGUiLCJMYXlvdXQiLCJSZXF1ZXN0Um93IiwiUmVxdWVzdEluZGV4IiwiYWRkcmVzcyIsInJlcXVlc3RzIiwicmVxdWVzdENvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJzaG93Um93IiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiaDMiLCJocmVmIiwiYSIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests/index.js\n");

/***/ })

});