/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./chatbot/ActionProvider.js":
/*!***********************************!*\
  !*** ./chatbot/ActionProvider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ActionProvider {\n    constructor(createChatbotMessage, setStateFunc, createClientMessage){\n        this.createChatbotMessage = createChatbotMessage;\n        this.setState = setStateFunc;\n        this.createClientMessage = createClientMessage;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGF0Ym90L0FjdGlvblByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7TUFBTUEsY0FBYztnQkFDTkMsb0JBQW9CLEVBQUVDLFlBQVksRUFBRUMsbUJBQW1CLENBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUNGLG9CQUFvQixHQUFHQSxvQkFBb0I7UUFDaEQsSUFBSSxDQUFDRyxRQUFRLEdBQUdGLFlBQVk7UUFDNUIsSUFBSSxDQUFDQyxtQkFBbUIsR0FBR0EsbUJBQW1CO0lBQ2hELENBQUM7O0FBR0gsaUVBQWVILGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NoYXRib3QvQWN0aW9uUHJvdmlkZXIuanM/ODkxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBY3Rpb25Qcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKGNyZWF0ZUNoYXRib3RNZXNzYWdlLCBzZXRTdGF0ZUZ1bmMsIGNyZWF0ZUNsaWVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmNyZWF0ZUNoYXRib3RNZXNzYWdlID0gY3JlYXRlQ2hhdGJvdE1lc3NhZ2U7XG4gICAgdGhpcy5zZXRTdGF0ZSA9IHNldFN0YXRlRnVuYztcbiAgICB0aGlzLmNyZWF0ZUNsaWVudE1lc3NhZ2UgPSBjcmVhdGVDbGllbnRNZXNzYWdlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvblByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbIkFjdGlvblByb3ZpZGVyIiwiY3JlYXRlQ2hhdGJvdE1lc3NhZ2UiLCJzZXRTdGF0ZUZ1bmMiLCJjcmVhdGVDbGllbnRNZXNzYWdlIiwic2V0U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./chatbot/ActionProvider.js\n");

/***/ }),

/***/ "./chatbot/Messageparser.js":
/*!**********************************!*\
  !*** ./chatbot/Messageparser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MessageParser {\n    constructor(actionProvider, state){\n        this.actionProvider = actionProvider;\n        this.state = state;\n    }\n    parse(message) {\n        if (message.includes(\"hello\")) {\n            console.log(\"hi\");\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageParser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGF0Ym90L01lc3NhZ2VwYXJzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztNQUFNQSxhQUFhO2dCQUNMQyxjQUFjLEVBQUVDLEtBQUssQ0FBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQ0QsY0FBYyxHQUFHQSxjQUFjO1FBQ3BDLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ3BCLENBQUM7SUFFREMsS0FBSyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUNkLEVBQUUsRUFBRUEsT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBTyxTQUFHLENBQUM7WUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUk7UUFDbEIsQ0FBQztJQUNILENBQUM7O0FBR0gsaUVBQWVQLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NoYXRib3QvTWVzc2FnZXBhcnNlci5qcz9iNGM5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1lc3NhZ2VQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihhY3Rpb25Qcm92aWRlciwgc3RhdGUpIHtcbiAgICB0aGlzLmFjdGlvblByb3ZpZGVyID0gYWN0aW9uUHJvdmlkZXI7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgcGFyc2UobWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKFwiaGVsbG9cIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VQYXJzZXI7XG4iXSwibmFtZXMiOlsiTWVzc2FnZVBhcnNlciIsImFjdGlvblByb3ZpZGVyIiwic3RhdGUiLCJwYXJzZSIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./chatbot/Messageparser.js\n");

/***/ }),

/***/ "./chatbot/config.js":
/*!***************************!*\
  !*** ./chatbot/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-chatbot-kit */ \"react-chatbot-kit\");\n/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_chatbot_kit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    initialMessages: [\n        (0,react_chatbot_kit__WEBPACK_IMPORTED_MODULE_0__.createChatBotMessage)(`Hello world`)\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jaGF0Ym90L2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFFeEQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNkQyxlQUFlLEVBQUUsQ0FBQ0Y7UUFBQUEsdUVBQW9CLEVBQUUsV0FBVztJQUFFLENBQUM7QUFDeEQsQ0FBQztBQUVELGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jaGF0Ym90L2NvbmZpZy5qcz84NWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNoYXRCb3RNZXNzYWdlIH0gZnJvbSBcInJlYWN0LWNoYXRib3Qta2l0XCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbE1lc3NhZ2VzOiBbY3JlYXRlQ2hhdEJvdE1lc3NhZ2UoYEhlbGxvIHdvcmxkYCldLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNoYXRCb3RNZXNzYWdlIiwiY29uZmlnIiwiaW5pdGlhbE1lc3NhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./chatbot/config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chatbot-kit */ \"react-chatbot-kit\");\n/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chatbot_kit__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_chatbot_kit_build_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chatbot-kit/build/main.css */ \"./node_modules/react-chatbot-kit/build/main.css\");\n/* harmony import */ var react_chatbot_kit_build_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chatbot_kit_build_main_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chatbot_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chatbot/config.js */ \"./chatbot/config.js\");\n/* harmony import */ var _chatbot_Messageparser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chatbot/Messageparser.js */ \"./chatbot/Messageparser.js\");\n/* harmony import */ var _chatbot_ActionProvider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chatbot/ActionProvider.js */ \"./chatbot/ActionProvider.js\");\n\n\n\n\n\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/omizrahi/Developer/pabs_research/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_chatbot_kit__WEBPACK_IMPORTED_MODULE_2___default()), {\n            config: _chatbot_config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            messageParser: _chatbot_Messageparser_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            actionProvider: _chatbot_ActionProvider_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            __source: {\n                fileName: \"/Users/omizrahi/Developer/pabs_research/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1c7QUFDRTtBQUVBO0FBQ2M7QUFDRTtBQUUxQyxRQUFRLENBQUNLLElBQUksR0FBRyxDQUFDO0lBQzlCLE1BQU0sc0VBQ0hDLENBQUc7Ozs7Ozs7dUZBQ0RMLDBEQUFPO1lBQ05DLE1BQU0sRUFBRUEsMERBQU07WUFDZEssYUFBYSxFQUFFSixpRUFBYTtZQUM1QkssY0FBYyxFQUFFSixrRUFBYzs7Ozs7Ozs7O0FBSXRDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDaGF0Ym90IGZyb20gXCJyZWFjdC1jaGF0Ym90LWtpdFwiO1xuaW1wb3J0IFwicmVhY3QtY2hhdGJvdC1raXQvYnVpbGQvbWFpbi5jc3NcIjtcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY2hhdGJvdC9jb25maWcuanNcIjtcbmltcG9ydCBNZXNzYWdlUGFyc2VyIGZyb20gXCIuLi9jaGF0Ym90L01lc3NhZ2VwYXJzZXIuanNcIjtcbmltcG9ydCBBY3Rpb25Qcm92aWRlciBmcm9tIFwiLi4vY2hhdGJvdC9BY3Rpb25Qcm92aWRlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2hhdGJvdFxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgbWVzc2FnZVBhcnNlcj17TWVzc2FnZVBhcnNlcn1cbiAgICAgICAgYWN0aW9uUHJvdmlkZXI9e0FjdGlvblByb3ZpZGVyfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQ2hhdGJvdCIsImNvbmZpZyIsIk1lc3NhZ2VQYXJzZXIiLCJBY3Rpb25Qcm92aWRlciIsIkhvbWUiLCJkaXYiLCJtZXNzYWdlUGFyc2VyIiwiYWN0aW9uUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/react-chatbot-kit/build/main.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-chatbot-kit/build/main.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-chatbot-kit":
/*!************************************!*\
  !*** external "react-chatbot-kit" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-chatbot-kit");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();