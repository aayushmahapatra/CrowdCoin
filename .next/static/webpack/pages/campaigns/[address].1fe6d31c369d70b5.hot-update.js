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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ CampaignShow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar __N_SSP = true;\nfunction CampaignShow(param) {\n    var minimumContribution = param.minimumContribution, balance = param.balance, requestsCount = param.requestsCount, approversCount = param.approversCount, manager = param.manager;\n    var _this = this;\n    var showCards = function() {\n        var items = [\n            {\n                header: manager,\n                meta: 'Address of Manager',\n                description: 'The manager created this campaign and can create requests to withdraw money'\n            }\n        ];\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {\n            items: items,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 22,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            },\n            __self: this,\n            children: \"CampaignShow\"\n        })\n    }));\n};\n_c = CampaignShow;\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNNOztBQUc3QixRQUFRLENBQUNHLFlBQVksQ0FBQyxLQU1wQyxFQUFFLENBQUM7UUFMRkMsbUJBQW1CLEdBRGdCLEtBTXBDLENBTENBLG1CQUFtQixFQUNuQkMsT0FBTyxHQUY0QixLQU1wQyxDQUpDQSxPQUFPLEVBQ1BDLGFBQWEsR0FIc0IsS0FNcEMsQ0FIQ0EsYUFBYSxFQUNiQyxjQUFjLEdBSnFCLEtBTXBDLENBRkNBLGNBQWMsRUFDZEMsT0FBTyxHQUw0QixLQU1wQyxDQURDQSxPQUFPOztJQUVQLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3ZCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUM7WUFDYixDQUFDO2dCQUNDQyxNQUFNLEVBQUVILE9BQU87Z0JBQ2ZJLElBQUksRUFBRSxDQUFvQjtnQkFDMUJDLFdBQVcsRUFBRSxDQUE2RTtZQUM1RixDQUFDO1FBQ0gsQ0FBQztRQUVELE1BQU0sc0VBQUVaLHlEQUFVO1lBQUNTLEtBQUssRUFBRUEsS0FBSzs7Ozs7Ozs7SUFDakMsQ0FBQztJQUVELE1BQU0sc0VBQ0hSLDBEQUFNOzs7Ozs7O3VGQUNKYSxDQUFFOzs7Ozs7O3NCQUFDLENBQVk7OztBQUd0QixDQUFDO0tBeEJ1QlosWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzPzhkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FtcGFpZ25TaG93KHtcclxuICBtaW5pbXVtQ29udHJpYnV0aW9uLCBcclxuICBiYWxhbmNlLCBcclxuICByZXF1ZXN0c0NvdW50LCBcclxuICBhcHByb3ZlcnNDb3VudCwgXHJcbiAgbWFuYWdlclxyXG59KSB7XHJcbiAgY29uc3Qgc2hvd0NhcmRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgbWV0YTogJ0FkZHJlc3Mgb2YgTWFuYWdlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXknXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgzPkNhbXBhaWduU2hvdzwvaDM+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cXVlcnk6IHthZGRyZXNzfX0pIHtcclxuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG4gIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcblxyXG4gIHJldHVybiB7cHJvcHM6IHtcclxuICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXHJcbiAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcclxuICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxyXG4gICAgbWFuYWdlcjogc3VtbWFyeVs0XVxyXG4gIH19O1xyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJMYXlvdXQiLCJDYW1wYWlnblNob3ciLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJzaG93Q2FyZHMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsIkdyb3VwIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});