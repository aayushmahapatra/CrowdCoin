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

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContributeForm; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction ContributeForm(param) {\n    var address = param.address;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), value = ref[0], setValue = ref[1];\n    var onSubmit = _asyncToGenerator(C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var campaign, accounts;\n        return C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                case 5:\n                    accounts = _ctx.sent;\n                    _ctx.next = 8;\n                    return campaign.methods.contribute().send({\n                        from: accounts[0],\n                        value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.toWei(value, 'ether')\n                    });\n                case 8:\n                    _ctx.next = 12;\n                    break;\n                case 10:\n                    _ctx.prev = 10;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                10\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        onSubmit: onSubmit,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Amount to Contribute\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        value: value,\n                        onChange: function(e) {\n                            return setValue(e.target.value);\n                        },\n                        label: \"ether\",\n                        labelPosition: \"right\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                primary: true,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Contribute!\"\n            })\n        ]\n    }));\n};\n_s(ContributeForm, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = ContributeForm;\n;\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDeUI7QUFDbkI7QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixRQUFRLENBQUNRLGNBQWMsQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFYQyxPQUFPLEdBQVIsS0FBUyxDQUFSQSxPQUFPOztJQUM3QyxHQUFLLENBQXFCUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QlMsS0FBSyxHQUFjVCxHQUFZLEtBQXhCVSxRQUFRLEdBQUlWLEdBQVk7SUFFdEMsR0FBSyxDQUFDVyxRQUFRLDRLQUFHLFFBQVEsU0FBRkMsQ0FBQyxFQUFJLENBQUM7WUFFckJDLFFBQVEsRUFHTkMsUUFBUTs7OztvQkFKaEJGLENBQUMsQ0FBQ0csY0FBYztvQkFDVkYsUUFBUSxHQUFHUiw4REFBUSxDQUFDRyxPQUFPOzs7MkJBR1JGLHNFQUFvQjs7b0JBQXJDUSxRQUFROzsyQkFDUkQsUUFBUSxDQUFDSyxPQUFPLENBQUNDLFVBQVUsR0FBR0MsSUFBSSxDQUFDLENBQUM7d0JBQ3hDQyxJQUFJLEVBQUVQLFFBQVEsQ0FBQyxDQUFDO3dCQUNoQkwsS0FBSyxFQUFFSCxrRUFBZ0IsQ0FBQ0csS0FBSyxFQUFFLENBQU87b0JBQ3hDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUwsQ0FBQztJQUVELE1BQU0sdUVBQ0hQLG1EQUFJO1FBQUNTLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7a0ZBQ3JCVCx5REFBVTs7Ozs7Ozs7eUZBQ1J1QixDQUFLOzs7Ozs7O2tDQUFDLENBQW9COzt5RkFDMUJ0QixvREFBSzt3QkFDSk0sS0FBSyxFQUFFQSxLQUFLO3dCQUNaaUIsUUFBUSxFQUFFZCxRQUFRLENBQVJBLENBQUM7NEJBQUlGLE1BQU0sQ0FBTkEsUUFBUSxDQUFDRSxDQUFDLENBQUNlLE1BQU0sQ0FBQ2xCLEtBQUs7O3dCQUN0Q2dCLEtBQUssRUFBQyxDQUFPO3dCQUNiRyxhQUFhLEVBQUMsQ0FBTzs7Ozs7Ozs7OztpRkFHeEIzQixxREFBTTtnQkFBQzRCLE9BQU87Ozs7Ozs7MEJBQUMsQ0FBVzs7OztBQUdqQyxDQUFDO0dBaEN1QnRCLGNBQWM7S0FBZEEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzP2UwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJpYnV0ZUZvcm0oe2FkZHJlc3N9KSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCAnZXRoZXInKVxyXG4gICAgICB9KTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRlPC9sYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGxhYmVsPSdldGhlcicgXHJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPSdyaWdodCdcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgIDxCdXR0b24gcHJpbWFyeT5Db250cmlidXRlITwvQnV0dG9uPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJhZGRyZXNzIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uU3VibWl0IiwiZSIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJGaWVsZCIsImxhYmVsIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbFBvc2l0aW9uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});