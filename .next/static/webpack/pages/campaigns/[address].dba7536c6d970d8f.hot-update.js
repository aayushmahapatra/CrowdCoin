"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]",{

/***/ "./pages/campaigns/[address].js":
/*!**************************************!*\
  !*** ./pages/campaigns/[address].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ CampaignShow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction CampaignShow(param) {\n    var minimumContribution = param.minimumContribution, balance = param.balance, requestsCount = param.requestsCount, approversCount = param.approversCount, manager = param.manager;\n    var _this = this;\n    var showCards = function() {\n        var items = [\n            {\n                header: manager,\n                meta: 'Address of Manager',\n                description: 'The manager created this campaign and can create requests to withdraw money.',\n                style: {\n                    overflowWrap: 'break-word'\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: 'Minimum Contribution (wei)',\n                description: 'You must contribute at least this much wei to become an approver.'\n            },\n            {\n                header: requestsCount,\n                meta: 'Number of Requests',\n                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.'\n            },\n            {\n                header: approversCount,\n                meta: 'Number of Approvers',\n                description: 'Number of people who have already donated to this campaign.'\n            },\n            {\n                header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(balance, 'ether'),\n                meta: 'Campaign Balance (ether)',\n                description: 'The balance is how much money this campaign has left to spend.'\n            }\n        ];\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card.Group, {\n            items: items,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 45,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n            lineNumber: 49,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"CampaignShow\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {\n                        width: 10,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: showCards()\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {\n                        width: 6,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = CampaignShow;\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNtQjtBQUNBO0FBRU47QUFDc0I7O0FBRTdDLFFBQVEsQ0FBQ00sWUFBWSxDQUFDLEtBTXBDLEVBQUUsQ0FBQztRQUxGQyxtQkFBbUIsR0FEZ0IsS0FNcEMsQ0FMQ0EsbUJBQW1CLEVBQ25CQyxPQUFPLEdBRjRCLEtBTXBDLENBSkNBLE9BQU8sRUFDUEMsYUFBYSxHQUhzQixLQU1wQyxDQUhDQSxhQUFhLEVBQ2JDLGNBQWMsR0FKcUIsS0FNcEMsQ0FGQ0EsY0FBYyxFQUNkQyxPQUFPLEdBTDRCLEtBTXBDLENBRENBLE9BQU87O0lBRVAsR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDdkIsR0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztZQUNiLENBQUM7Z0JBQ0NDLE1BQU0sRUFBRUgsT0FBTztnQkFDZkksSUFBSSxFQUFFLENBQW9CO2dCQUMxQkMsV0FBVyxFQUFFLENBQThFO2dCQUMzRkMsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxZQUFZLEVBQUUsQ0FBWTtnQkFBQSxDQUFDO1lBQ3JDLENBQUM7WUFDRCxDQUFDO2dCQUNDSixNQUFNLEVBQUVQLG1CQUFtQjtnQkFDM0JRLElBQUksRUFBRSxDQUE0QjtnQkFDbENDLFdBQVcsRUFBRSxDQUFtRTtZQUNsRixDQUFDO1lBQ0QsQ0FBQztnQkFDQ0YsTUFBTSxFQUFFTCxhQUFhO2dCQUNyQk0sSUFBSSxFQUFFLENBQW9CO2dCQUMxQkMsV0FBVyxFQUFFLENBQThGO1lBQzdHLENBQUM7WUFDRCxDQUFDO2dCQUNDRixNQUFNLEVBQUVKLGNBQWM7Z0JBQ3RCSyxJQUFJLEVBQUUsQ0FBcUI7Z0JBQzNCQyxXQUFXLEVBQUUsQ0FBNkQ7WUFDNUUsQ0FBQztZQUNELENBQUM7Z0JBQ0NGLE1BQU0sRUFBRVYsb0VBQWtCLENBQUNJLE9BQU8sRUFBRSxDQUFPO2dCQUMzQ08sSUFBSSxFQUFFLENBQTBCO2dCQUNoQ0MsV0FBVyxFQUFFLENBQWdFO1lBQy9FLENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTSxzRUFBRWYseURBQVU7WUFBQ1ksS0FBSyxFQUFFQSxLQUFLOzs7Ozs7OztJQUNqQyxDQUFDO0lBRUQsTUFBTSx1RUFDSFYsMERBQU07Ozs7Ozs7O2lGQUNKbUIsQ0FBRTs7Ozs7OzswQkFBQyxDQUFZOztrRkFDZnBCLG1EQUFJOzs7Ozs7Ozt5RkFDRkEsMERBQVc7d0JBQUNzQixLQUFLLEVBQUUsRUFBRTs7Ozs7OztrQ0FDbkJaLFNBQVM7O3lGQUVYViwwREFBVzt3QkFBQ3NCLEtBQUssRUFBRSxDQUFDOzs7Ozs7O3VHQUNsQm5CLGtFQUFjOzs7Ozs7Ozs7Ozs7O0FBS3pCLENBQUM7S0FyRHVCQyxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bYWRkcmVzc10uanM/OGRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQsIEdyaWR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW1wYWlnblNob3coe1xyXG4gIG1pbmltdW1Db250cmlidXRpb24sIFxyXG4gIGJhbGFuY2UsIFxyXG4gIHJlcXVlc3RzQ291bnQsIFxyXG4gIGFwcHJvdmVyc0NvdW50LCBcclxuICBtYW5hZ2VyXHJcbn0pIHtcclxuICBjb25zdCBzaG93Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBNYW5hZ2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leS4nLFxyXG4gICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXIuJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVycy4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgQXBwcm92ZXJzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24uJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgJ2V0aGVyJyksXHJcbiAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSBpcyBob3cgbXVjaCBtb25leSB0aGlzIGNhbXBhaWduIGhhcyBsZWZ0IHRvIHNwZW5kLidcclxuICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgzPkNhbXBhaWduU2hvdzwvaDM+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAge3Nob3dDYXJkcygpfVxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuICAgICAgICAgIDxDb250cmlidXRlRm9ybSAvPlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeToge2FkZHJlc3N9fSkge1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuXHJcbiAgcmV0dXJuIHtwcm9wczoge1xyXG4gICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgIGJhbGFuY2U6IHN1bW1hcnlbMV0sXHJcbiAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcbiAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdXHJcbiAgfX07XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnblNob3ciLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJzaG93Q2FyZHMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiR3JvdXAiLCJoMyIsIkNvbHVtbiIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});