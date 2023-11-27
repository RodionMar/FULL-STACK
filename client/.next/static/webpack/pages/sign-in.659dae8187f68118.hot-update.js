"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign-in",{

/***/ "./components/SignIn/SignIn.tsx":
/*!**************************************!*\
  !*** ./components/SignIn/SignIn.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_GOOD_DEEDS_LOGO_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/images/GOOD-DEEDS-LOGO.png */ \"./public/images/GOOD-DEEDS-LOGO.png\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _utils_schemas_loginValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/schemas/loginValidation */ \"./components/SignIn/utils/schemas/loginValidation.ts\");\n// ========================== next ===========================\n\nvar _s = $RefreshSig$();\n\n\n//========================== images ===========================\n\n//========================== react =========================== \n\n\n//========================== schemas =========================== \n\nconst SignIn = (param)=>{\n    let { handleRedirectToSignUp, handleSignIn, fetchErrors } = param;\n    var _errors_email, _errors_password;\n    _s();\n    const { register, handleSubmit, formState: { errors, isValid } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        mode: \"onChange\",\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(_utils_schemas_loginValidation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n    });\n    const onSubmit = (data)=>{\n        // handleGetData(data)\n        // handleClick()\n        // console.log(data);\n        handleSignIn(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center min-h-screen gap-y-2.5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            className: \"bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"w-28 mx-auto\",\n                    src: _public_images_GOOD_DEEDS_LOGO_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"Good Deeds Image\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold text-center mb-6\",\n                    children: \"Sign In\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-8 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"username\",\n                            children: \"E-mail\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"email\",\n                            type: \"email\",\n                            placeholder: \"Enter your e-mail\",\n                            ...register(\"email\"),\n                            \"data-testid\": \"email-stub\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\".concat(errors.email ? \"text-red-500 absolute top-16 left-0\" : \"hidden\"),\n                            children: (_errors_email = errors.email) === null || _errors_email === void 0 ? void 0 : _errors_email.message\n                        }, void 0, false, {\n                            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-10 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"password\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"password\",\n                            type: \"password\",\n                            placeholder: \"Enter your password\",\n                            ...register(\"password\"),\n                            \"data-testid\": \"pawword-stub\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\".concat(errors.password ? \"text-red-500 absolute top-16 left-0\" : \"hidden\"),\n                            children: (_errors_password = errors.password) === null || _errors_password === void 0 ? void 0 : _errors_password.message\n                        }, void 0, false, {\n                            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mb-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full \".concat(isValid ? \"opacity-100 hover:cursor-pointer hover:bg-blue-700\" : \"opacity-60 hover:cursor-default\"),\n                        type: \"submit\",\n                        \"data-testid\": \"signin-button\",\n                        disabled: !isValid,\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm text-center\",\n                    children: [\n                        \"Don't have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/signup\",\n                            onClick: handleRedirectToSignUp,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-blue-500 hover:underline\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                fetchErrors === undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-red-500 absolute bottom-16 left-0\",\n                    \"data-testid\": \"error-stub\",\n                    children: \"Укщкк\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\VSC\\\\FULL-STACK\\\\client\\\\components\\\\SignIn\\\\SignIn.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignIn, \"RNxyZlW9TjUhRSu3ZzpzXqn2Qhw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi9TaWduSW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsOERBQThEOzs7QUFDL0I7QUFDRjtBQUU3QiwrREFBK0Q7QUFDRTtBQUVqRSwrREFBK0Q7QUFDTjtBQUNIO0FBR3RELGlFQUFpRTtBQUNIO0FBYzlELE1BQU1NLFNBQTJCO1FBQUMsRUFDaENDLHNCQUFzQixFQUN0QkMsWUFBWSxFQUNaQyxXQUFXLEVBQ1o7UUFpQ1lDLGVBZ0JBQTs7SUEvQ1gsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFSCxNQUFNLEVBQUVJLE9BQU8sRUFBRSxFQUFFLEdBQUdYLHdEQUFPQSxDQUFrQjtRQUMxRlksTUFBTTtRQUNOQyxVQUFVWixvRUFBV0EsQ0FBQ0Msc0VBQWVBO0lBQ3ZDO0lBRUEsTUFBTVksV0FBMkMsQ0FBQ0M7UUFDaEQsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckJWLGFBQWFVO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0M7WUFBS0osVUFBVUwsYUFBYUs7WUFBV0csV0FBVTs7OEJBQ2hELDhEQUFDcEIsbURBQUtBO29CQUFDb0IsV0FBVTtvQkFBZUUsS0FBS3BCLDBFQUFjQTtvQkFBRXFCLEtBQUk7Ozs7Ozs4QkFDekQsOERBQUNDO29CQUFHSixXQUFVOzhCQUFzQzs7Ozs7OzhCQUNwRCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBTUwsV0FBVTs0QkFBNkNNLFNBQVE7c0NBQVc7Ozs7OztzQ0FHakYsOERBQUNDOzRCQUNDUCxXQUFVOzRCQUNWUSxJQUFHOzRCQUNIQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNYLEdBQUduQixTQUFTLFFBQVE7NEJBQ3JCb0IsZUFBWTs7Ozs7O3NDQUVkLDhEQUFDQzs0QkFBS1osV0FBVyxHQUFtRSxPQUFoRVYsT0FBT3VCLEtBQUssR0FBRyx3Q0FBd0M7dUNBQ3hFdkIsZ0JBQUFBLE9BQU91QixLQUFLLGNBQVp2QixvQ0FBQUEsY0FBY3dCLE9BQU87Ozs7Ozs7Ozs7Ozs4QkFHMUIsOERBQUNmO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQU1MLFdBQVU7NEJBQTZDTSxTQUFRO3NDQUFXOzs7Ozs7c0NBR2pGLDhEQUFDQzs0QkFDQ1AsV0FBVTs0QkFDVlEsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWCxHQUFHbkIsU0FBUyxXQUFXOzRCQUN4Qm9CLGVBQVk7Ozs7OztzQ0FFZCw4REFBQ0M7NEJBQUtaLFdBQVcsR0FBc0UsT0FBbkVWLE9BQU95QixRQUFRLEdBQUcsd0NBQXdDO3VDQUMzRXpCLG1CQUFBQSxPQUFPeUIsUUFBUSxjQUFmekIsdUNBQUFBLGlCQUFpQndCLE9BQU87Ozs7Ozs7Ozs7Ozs4QkFHN0IsOERBQUNmO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDZ0I7d0JBQ0NoQixXQUFXLHFHQUF3TSxPQUFuR04sVUFBVSx1REFBdUQ7d0JBQ2pMZSxNQUFLO3dCQUNMRSxlQUFZO3dCQUNaTSxVQUFVLENBQUN2QjtrQ0FDWjs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNLO29CQUFJQyxXQUFVOzt3QkFBc0I7d0JBQ1o7c0NBQ3ZCLDhEQUFDbkIsa0RBQUlBOzRCQUFDcUMsTUFBSzs0QkFBVUMsU0FBU2hDO3NDQUM1Qiw0RUFBQ3lCO2dDQUFLWixXQUFVOzBDQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR25EWCxnQkFBZ0IrQiwyQkFDYiw4REFBQ1I7b0JBQ0NaLFdBQVU7b0JBQ1ZXLGVBQVk7OEJBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2I7R0FyRk16Qjs7UUFNK0RILG9EQUFPQTs7O0tBTnRFRztBQXVGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ25Jbi9TaWduSW4udHN4P2RiMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gbmV4dCA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT0gaW1hZ2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgR29vZERlZWRzSW1hZ2UgZnJvbSBcIkAvcHVibGljL2ltYWdlcy9HT09ELURFRURTLUxPR08ucG5nXCI7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09IHJlYWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PSBcclxuaW1wb3J0IHsgU3VibWl0SGFuZGxlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBzY2hlbWFzID09PT09PT09PT09PT09PT09PT09PT09PT09PSBcclxuaW1wb3J0IExvZ2luRm9ybVNjaGVtYSBmcm9tIFwiLi91dGlscy9zY2hlbWFzL2xvZ2luVmFsaWRhdGlvblwiO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBpbnRlcmZhY2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PSBcclxuaW50ZXJmYWNlIElTaWduSW5Gb3JtRGF0YSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBJU2lnbkluUHJvcHMge1xyXG4gIGhhbmRsZVJlZGlyZWN0VG9TaWduVXA6ICgpID0+IHZvaWQ7XHJcbiAgaGFuZGxlU2lnbkluOiAoZGF0YTogSVNpZ25JbkZvcm1EYXRhKSA9PiB2b2lkO1xyXG4gIGZldGNoRXJyb3JzOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5cclxuY29uc3QgU2lnbkluOiBGQzxJU2lnbkluUHJvcHM+ID0gKHtcclxuICBoYW5kbGVSZWRpcmVjdFRvU2lnblVwLFxyXG4gIGhhbmRsZVNpZ25JbixcclxuICBmZXRjaEVycm9yc1xyXG59KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycywgaXNWYWxpZCB9IH0gPSB1c2VGb3JtPElTaWduSW5Gb3JtRGF0YT4oe1xyXG4gICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihMb2dpbkZvcm1TY2hlbWEpXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPElTaWduSW5Gb3JtRGF0YT4gPSAoZGF0YTogSVNpZ25JbkZvcm1EYXRhKSA9PiB7XHJcbiAgICAvLyBoYW5kbGVHZXREYXRhKGRhdGEpXHJcbiAgICAvLyBoYW5kbGVDbGljaygpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGhhbmRsZVNpZ25JbihkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gZ2FwLXktMi41XCI+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LXhsIHJvdW5kZWQgcHgtOCBwdC02IHBiLTggbWItNCB3LWZ1bGwgbWF4LXctc20gcmVsYXRpdmVcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwidy0yOCBteC1hdXRvXCIgc3JjPXtHb29kRGVlZHNJbWFnZX0gYWx0PVwiR29vZCBEZWVkcyBJbWFnZVwiIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi02XCI+U2lnbiBJbjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgIEUtbWFpbFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZS1tYWlsXCJcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIil9XHJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZW1haWwtc3R1YlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtlcnJvcnMuZW1haWwgPyAndGV4dC1yZWQtNTAwIGFic29sdXRlIHRvcC0xNiBsZWZ0LTAnIDogJ2hpZGRlbid9YH0+XHJcbiAgICAgICAgICAgIHtlcnJvcnMuZW1haWw/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJwYXd3b3JkLXN0dWJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7ZXJyb3JzLnBhc3N3b3JkID8gJ3RleHQtcmVkLTUwMCBhYnNvbHV0ZSB0b3AtMTYgbGVmdC0wJyA6ICdoaWRkZW4nfWB9PlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsICR7aXNWYWxpZCA/IFwib3BhY2l0eS0xMDAgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctYmx1ZS03MDBcIiA6IFwib3BhY2l0eS02MCBob3ZlcjpjdXJzb3ItZGVmYXVsdFwifWB9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cInNpZ25pbi1idXR0b25cIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWlzVmFsaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIG9uQ2xpY2s9e2hhbmRsZVJlZGlyZWN0VG9TaWduVXB9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiPlNpZ24gVXA8L3NwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2ZldGNoRXJyb3JzID09PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgYWJzb2x1dGUgYm90dG9tLTE2IGxlZnQtMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJlcnJvci1zdHViXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgINCj0LrRidC60LpcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluOyJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJHb29kRGVlZHNJbWFnZSIsInVzZUZvcm0iLCJ5dXBSZXNvbHZlciIsIkxvZ2luRm9ybVNjaGVtYSIsIlNpZ25JbiIsImhhbmRsZVJlZGlyZWN0VG9TaWduVXAiLCJoYW5kbGVTaWduSW4iLCJmZXRjaEVycm9ycyIsImVycm9ycyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiaXNWYWxpZCIsIm1vZGUiLCJyZXNvbHZlciIsIm9uU3VibWl0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJzcmMiLCJhbHQiLCJoMSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkYXRhLXRlc3RpZCIsInNwYW4iLCJlbWFpbCIsIm1lc3NhZ2UiLCJwYXNzd29yZCIsImJ1dHRvbiIsImRpc2FibGVkIiwiaHJlZiIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignIn/SignIn.tsx\n"));

/***/ })

});