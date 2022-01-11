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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContributeForm; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction ContributeForm(param) {\n    var address = param.address;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), errorMessage = ref1[0], setErrorMessage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var onSubmit = _asyncToGenerator(C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var campaign, accounts;\n        return C_Users_Aayush_Blockchain_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(address);\n                    setLoading(true);\n                    _ctx.prev = 3;\n                    _ctx.next = 6;\n                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                case 6:\n                    accounts = _ctx.sent;\n                    _ctx.next = 9;\n                    return campaign.methods.contribute().send({\n                        from: accounts[0],\n                        value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.toWei(value, 'ether')\n                    });\n                case 9:\n                    router.replace(\"/campaigns/\".concat(address));\n                    _ctx.next = 15;\n                    break;\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](3);\n                    setErrorMessage(_ctx.t0.message);\n                case 15:\n                    setLoading(false);\n                    setValue('');\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                3,\n                12\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n        onSubmit: onSubmit,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Amount to Contribute\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                        value: value,\n                        onChange: function(e) {\n                            return setValue(e.target.value);\n                        },\n                        label: \"ether\",\n                        labelPosition: \"right\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                loading: loading,\n                primary: true,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Contribute!\"\n            })\n        ]\n    }));\n};\n_s(ContributeForm, \"v6lUjKE9qUpkXlvg7ooYKl5oadU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ContributeForm;\n;\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNBO0FBQ3lCO0FBQ25CO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsUUFBUSxDQUFDUyxjQUFjLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBWEMsT0FBTyxHQUFSLEtBQVMsQ0FBUkEsT0FBTzs7SUFDN0MsR0FBSyxDQUFDQyxNQUFNLEdBQUdULHNEQUFTO0lBQ3hCLEdBQUssQ0FBcUJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCVyxLQUFLLEdBQWNYLEdBQVksS0FBeEJZLFFBQVEsR0FBSVosR0FBWTtJQUN0QyxHQUFLLENBQW1DQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1Q2EsWUFBWSxHQUFxQmIsSUFBWSxLQUEvQmMsZUFBZSxHQUFJZCxJQUFZO0lBQ3BELEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDZSxPQUFPLEdBQWdCZixJQUFlLEtBQTdCZ0IsVUFBVSxHQUFJaEIsSUFBZTtJQUU3QyxHQUFLLENBQUNpQixRQUFRLDRLQUFHLFFBQVEsU0FBRkMsQ0FBQyxFQUFJLENBQUM7WUFFckJDLFFBQVEsRUFJTkMsUUFBUTs7OztvQkFMaEJGLENBQUMsQ0FBQ0csY0FBYztvQkFDVkYsUUFBUSxHQUFHYiw4REFBUSxDQUFDRyxPQUFPO29CQUNqQ08sVUFBVSxDQUFDLElBQUk7OzsyQkFHVVQsc0VBQW9COztvQkFBckNhLFFBQVE7OzJCQUNSRCxRQUFRLENBQUNLLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHQyxJQUFJLENBQUMsQ0FBQzt3QkFDeENDLElBQUksRUFBRVAsUUFBUSxDQUFDLENBQUM7d0JBQ2hCVCxLQUFLLEVBQUVKLGtFQUFnQixDQUFDSSxLQUFLLEVBQUUsQ0FBTztvQkFDeEMsQ0FBQzs7b0JBQ0RELE1BQU0sQ0FBQ29CLE9BQU8sQ0FBRSxDQUFXLGFBQVUsT0FBUnJCLE9BQU87Ozs7OztvQkFFcENLLGVBQWUsU0FBT2lCLE9BQU87O29CQUcvQmYsVUFBVSxDQUFDLEtBQUs7b0JBQ2hCSixRQUFRLENBQUMsQ0FBRTs7Ozs7Ozs7Ozs7SUFDYixDQUFDO0lBRUQsTUFBTSx1RUFDSFQsbURBQUk7UUFBQ2MsUUFBUSxFQUFFQSxRQUFROzs7Ozs7OztrRkFDckJkLHlEQUFVOzs7Ozs7Ozt5RkFDUjhCLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBb0I7O3lGQUMxQjdCLG9EQUFLO3dCQUNKTyxLQUFLLEVBQUVBLEtBQUs7d0JBQ1p1QixRQUFRLEVBQUVoQixRQUFRLENBQVJBLENBQUM7NEJBQUlOLE1BQU0sQ0FBTkEsUUFBUSxDQUFDTSxDQUFDLENBQUNpQixNQUFNLENBQUN4QixLQUFLOzt3QkFDdENzQixLQUFLLEVBQUMsQ0FBTzt3QkFDYkcsYUFBYSxFQUFDLENBQU87Ozs7Ozs7Ozs7aUZBR3hCbEMscURBQU07Z0JBQUNhLE9BQU8sRUFBRUEsT0FBTztnQkFBRXNCLE9BQU87Ozs7Ozs7MEJBQUMsQ0FBVzs7OztBQUduRCxDQUFDO0dBeEN1QjdCLGNBQWM7O1FBQ3JCUCxrREFBUzs7O0tBREZPLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9lMDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyaWJ1dGVGb3JtKHthZGRyZXNzfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgJ2V0aGVyJylcclxuICAgICAgfSk7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKGAvY2FtcGFpZ25zLyR7YWRkcmVzc31gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldFZhbHVlKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRlPC9sYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGxhYmVsPSdldGhlcicgXHJcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uPSdyaWdodCdcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gcHJpbWFyeT5Db250cmlidXRlITwvQnV0dG9uPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJhZGRyZXNzIiwicm91dGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJlIiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2UiLCJtZXNzYWdlIiwiRmllbGQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWxQb3NpdGlvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});