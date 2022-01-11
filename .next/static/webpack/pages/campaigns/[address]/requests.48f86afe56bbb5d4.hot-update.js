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

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RequestRow; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction RequestRow(param) {\n    var id = param.id, request = param.request, address = param.address, approversCount = param.approversCount;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell;\n    var onApprove = _asyncToGenerator(C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var campaign, accounts;\n        return C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(address);\n                    _ctx.next = 3;\n                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n                case 3:\n                    accounts = _ctx.sent;\n                    _ctx.next = 6;\n                    return campaign.methods.approveRequest(id).send({\n                        from: accounts[0]\n                    });\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Row, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: id\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: request.description\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(request.value, 'ether')\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: address\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Cell, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    request.approvalCount,\n                    \"/\",\n                    approversCount\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    basic: true,\n                    color: \"green\",\n                    onClick: onApprove,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Approve\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Cell, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_c = RequestRow;\n;\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNzQjtBQUNaO0FBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixRQUFRLENBQUNLLFVBQVUsQ0FBQyxLQUFzQyxFQUFFLENBQUM7UUFBeENDLEVBQUUsR0FBSCxLQUFzQyxDQUFyQ0EsRUFBRSxFQUFFQyxPQUFPLEdBQVosS0FBc0MsQ0FBakNBLE9BQU8sRUFBRUMsT0FBTyxHQUFyQixLQUFzQyxDQUF4QkEsT0FBTyxFQUFFQyxjQUFjLEdBQXJDLEtBQXNDLENBQWZBLGNBQWM7SUFDdEUsR0FBSyxDQUFFQyxHQUFHLEdBQVVSLHdEQUFWLEVBQUVTLElBQUksR0FBSVQseURBQUo7SUFFaEIsR0FBSyxDQUFDVSxTQUFTLDRLQUFHLFFBQVEsV0FBSSxDQUFDO1lBQ3ZCQyxRQUFRLEVBRVJDLFFBQVE7Ozs7b0JBRlJELFFBQVEsR0FBR1QsOERBQVEsQ0FBQ0ksT0FBTzs7MkJBRVZMLHNFQUFvQjs7b0JBQXJDVyxRQUFROzsyQkFDUkQsUUFBUSxDQUFDSSxPQUFPLENBQUNDLGNBQWMsQ0FBQ1osRUFBRSxFQUFFYSxJQUFJLENBQUMsQ0FBQzt3QkFDOUNDLElBQUksRUFBRU4sUUFBUSxDQUFDLENBQUM7b0JBQ2xCLENBQUM7Ozs7OztJQUNILENBQUM7SUFFRCxNQUFNLHVFQUNISixHQUFHOzs7Ozs7OztpRkFDREMsSUFBSTs7Ozs7OzswQkFBRUwsRUFBRTs7aUZBQ1JLLElBQUk7Ozs7Ozs7MEJBQUVKLE9BQU8sQ0FBQ2MsV0FBVzs7aUZBQ3pCVixJQUFJOzs7Ozs7OzBCQUFFUixvRUFBa0IsQ0FBQ0ksT0FBTyxDQUFDaUIsS0FBSyxFQUFFLENBQU87O2lGQUMvQ2IsSUFBSTs7Ozs7OzswQkFBRUgsT0FBTzs7a0ZBQ2JHLElBQUk7Ozs7Ozs7O29CQUFFSixPQUFPLENBQUNrQixhQUFhO29CQUFDLENBQUM7b0JBQUNoQixjQUFjOzs7aUZBQzVDRSxJQUFJOzs7Ozs7OytGQUNGVixxREFBTTtvQkFBQ3lCLEtBQUs7b0JBQUNDLEtBQUssRUFBQyxDQUFPO29CQUFDQyxPQUFPLEVBQUVoQixTQUFTOzs7Ozs7OzhCQUFFLENBQU87OztpRkFFeERELElBQUk7Ozs7Ozs7Ozs7QUFHWCxDQUFDO0tBekJ1Qk4sVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgVGFibGV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0Um93KHtpZCwgcmVxdWVzdCwgYWRkcmVzcywgYXBwcm92ZXJzQ291bnR9KSB7XHJcbiAgY29uc3Qge1JvdywgQ2VsbH0gPSBUYWJsZTtcclxuXHJcbiAgY29uc3Qgb25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdChpZCkuc2VuZCh7XHJcbiAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENlbGw+e2lkfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsICdldGhlcicpfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e2FkZHJlc3N9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cmVxdWVzdC5hcHByb3ZhbENvdW50fS97YXBwcm92ZXJzQ291bnR9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbicgb25DbGljaz17b25BcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgICAgPENlbGw+e308L0NlbGw+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJUYWJsZSIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJpZCIsInJlcXVlc3QiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJSb3ciLCJDZWxsIiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0Iiwic2VuZCIsImZyb20iLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwiYXBwcm92YWxDb3VudCIsImJhc2ljIiwiY29sb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});