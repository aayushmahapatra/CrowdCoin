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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ CampaignShow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar __N_SSP = true;\nfunction CampaignShow(param) {\n    var minimumContribution = param.minimumContribution, balance = param.balance, requestsCount = param.requestsCount, approversCount = param.approversCount, manager = param.manager;\n    var _this = this;\n    var showCards = function() {\n        var items = [\n            {\n                header: manager,\n                meta: 'Address of Manager',\n                description: 'The manager created this campaign and can create requests to withdraw money.',\n                style: {\n                    overflowWrap: 'break-word'\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: 'Minimum Contribution (wei)',\n                description: 'You must contribute at least this much wei to become an approver.',\n                style: {\n                    overflowWrap: 'break-word'\n                }\n            }\n        ];\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {\n            items: items,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 29,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n            lineNumber: 33,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Blockchain_Projects\\\\kickstart\\\\pages\\\\campaigns\\\\[address].js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"CampaignShow\"\n            }),\n            showCards()\n        ]\n    }));\n};\n_c = CampaignShow;\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNNOztBQUc3QixRQUFRLENBQUNHLFlBQVksQ0FBQyxLQU1wQyxFQUFFLENBQUM7UUFMRkMsbUJBQW1CLEdBRGdCLEtBTXBDLENBTENBLG1CQUFtQixFQUNuQkMsT0FBTyxHQUY0QixLQU1wQyxDQUpDQSxPQUFPLEVBQ1BDLGFBQWEsR0FIc0IsS0FNcEMsQ0FIQ0EsYUFBYSxFQUNiQyxjQUFjLEdBSnFCLEtBTXBDLENBRkNBLGNBQWMsRUFDZEMsT0FBTyxHQUw0QixLQU1wQyxDQURDQSxPQUFPOztJQUVQLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3ZCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUM7WUFDYixDQUFDO2dCQUNDQyxNQUFNLEVBQUVILE9BQU87Z0JBQ2ZJLElBQUksRUFBRSxDQUFvQjtnQkFDMUJDLFdBQVcsRUFBRSxDQUE4RTtnQkFDM0ZDLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsWUFBWSxFQUFFLENBQVk7Z0JBQUEsQ0FBQztZQUNyQyxDQUFDO1lBQ0QsQ0FBQztnQkFDQ0osTUFBTSxFQUFFUCxtQkFBbUI7Z0JBQzNCUSxJQUFJLEVBQUUsQ0FBNEI7Z0JBQ2xDQyxXQUFXLEVBQUUsQ0FBbUU7Z0JBQ2hGQyxLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLFlBQVksRUFBRSxDQUFZO2dCQUFBLENBQUM7WUFDckMsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLHNFQUFFZCx5REFBVTtZQUFDUyxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7O0lBQ2pDLENBQUM7SUFFRCxNQUFNLHVFQUNIUiwwREFBTTs7Ozs7Ozs7aUZBQ0plLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBWTs7WUFDZlIsU0FBUzs7O0FBR2hCLENBQUM7S0FoQ3VCTixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bYWRkcmVzc10uanM/OGRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW1wYWlnblNob3coe1xyXG4gIG1pbmltdW1Db250cmlidXRpb24sIFxyXG4gIGJhbGFuY2UsIFxyXG4gIHJlcXVlc3RzQ291bnQsIFxyXG4gIGFwcHJvdmVyc0NvdW50LCBcclxuICBtYW5hZ2VyXHJcbn0pIHtcclxuICBjb25zdCBzaG93Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBNYW5hZ2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leS4nLFxyXG4gICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXIuJyxcclxuICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q2FtcGFpZ25TaG93PC9oMz5cclxuICAgICAge3Nob3dDYXJkcygpfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3F1ZXJ5OiB7YWRkcmVzc319KSB7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG5cclxuICByZXR1cm4ge3Byb3BzOiB7XHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcclxuICAgIG1hbmFnZXI6IHN1bW1hcnlbNF1cclxuICB9fTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiTGF5b3V0IiwiQ2FtcGFpZ25TaG93IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwic2hvd0NhcmRzIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsIkdyb3VwIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});