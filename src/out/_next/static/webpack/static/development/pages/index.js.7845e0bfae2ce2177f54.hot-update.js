webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hook */ "./components/hook.js");
/* harmony import */ var _components_Flourish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Flourish */ "./components/Flourish.js");

var _jsxFileName = "C:\\mydev\\mccweddings\\src\\components\\Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





function Intro(props) {
  var root = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var target = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var rootMargin = "0px";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      isThingIntersecting = _useState[0],
      setThingIntersecting = _useState[1]; // Here's our hook! Let's give it some configuration...


  Object(_hook__WEBPACK_IMPORTED_MODULE_5__["useIntersectionObserver"])({
    root: root,
    target: target,
    rootMargin: rootMargin,
    // What do we do when it intersects?
    // The signature of this callback is (collectionOfIntersections, observerElement).
    onIntersect: function onIntersect(_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
          isIntersecting = _ref2[0].isIntersecting;

      return setThingIntersecting(isIntersecting);
    }
  });
  return __jsx("article", {
    ref: target,
    id: "about",
    className: "jsx-3337308770" + " " + "content-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-3337308770" + " " + "content-max-width content-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: "../static/profile.png",
    className: "jsx-3337308770" + " " + "profile-img mar-l-auto mar-r-auto d-inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3337308770" + " " + "rte intro mar-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3337308770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "It is my wish to make your day special"), __jsx("p", {
    className: "jsx-3337308770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "I offer a warm, compassionate and professional service to my clients. My promise is to make your wedding day or life celebration memorable, hearfteft, sacred and authentic."), __jsx("p", {
    className: "jsx-3337308770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Primarily working on the Central Coast and Lake Macquarie areas. "), __jsx("p", {
    className: "jsx-3337308770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "There are many beautiful venues to choose from and if you are finding it hard to choose, feel free to get in touch for some fabulous recommendations for your ceremony."), __jsx("p", {
    className: "jsx-3337308770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("strong", {
    className: "jsx-3337308770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("em", {
    className: "jsx-3337308770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Contact me via phone, email or the form below."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3337308770",
    __self: this
  }, ".profile-img.jsx-3337308770{width:66%;max-width:300px;margin-top:2rem;}.content-intro.jsx-3337308770{padding-top:0;padding-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcSW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENXLEFBTWUsQUFPSSxVQU5FLElBT0ksWUFMSixRQU1qQixRQUxBIiwiZmlsZSI6IkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcSW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gXCIuL2hvb2tcIjtcblxuaW1wb3J0IEZsb3VyaXNoIGZyb20gXCIuLi9jb21wb25lbnRzL0Zsb3VyaXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvKHByb3BzKSB7XG5cdGNvbnN0IHJvb3QgPSB1c2VSZWYoKTtcblx0Y29uc3QgdGFyZ2V0ID0gdXNlUmVmKCk7XG5cdGNvbnN0IHJvb3RNYXJnaW4gPSBcIjBweFwiO1xuXHRjb25zdCBbaXNUaGluZ0ludGVyc2VjdGluZywgc2V0VGhpbmdJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoKTtcblxuXHQvLyBIZXJlJ3Mgb3VyIGhvb2shIExldCdzIGdpdmUgaXQgc29tZSBjb25maWd1cmF0aW9uLi4uXG5cdHVzZUludGVyc2VjdGlvbk9ic2VydmVyKHtcblx0XHRyb290LFxuXHRcdHRhcmdldCxcblx0XHRyb290TWFyZ2luLFxuXG5cdFx0Ly8gV2hhdCBkbyB3ZSBkbyB3aGVuIGl0IGludGVyc2VjdHM/XG5cdFx0Ly8gVGhlIHNpZ25hdHVyZSBvZiB0aGlzIGNhbGxiYWNrIGlzIChjb2xsZWN0aW9uT2ZJbnRlcnNlY3Rpb25zLCBvYnNlcnZlckVsZW1lbnQpLlxuXHRcdG9uSW50ZXJzZWN0OiAoW3sgaXNJbnRlcnNlY3RpbmcgfV0pID0+IHNldFRoaW5nSW50ZXJzZWN0aW5nKGlzSW50ZXJzZWN0aW5nKSxcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb25cIiByZWY9e3RhcmdldH0gaWQ9XCJhYm91dFwiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1tYXgtd2lkdGggY29udGVudC1pbnRyb1wiPlxuXHRcdFx0XHR7LyogPEZsb3VyaXNoPjwvRmxvdXJpc2g+ICovfVxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWcgbWFyLWwtYXV0byBtYXItci1hdXRvIGQtaW5saW5lLWJsb2NrXCIgc3JjPVwiLi4vc3RhdGljL3Byb2ZpbGUucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydGUgaW50cm8gbWFyLXQtM1wiPlxuXHRcdFx0XHRcdDxoMj5JdCBpcyBteSB3aXNoIHRvIG1ha2UgeW91ciBkYXkgc3BlY2lhbDwvaDI+XG5cblx0XHRcdFx0XHQ8cD5JIG9mZmVyIGEgd2FybSwgY29tcGFzc2lvbmF0ZSBhbmQgcHJvZmVzc2lvbmFsIHNlcnZpY2UgdG8gbXkgY2xpZW50cy4gTXkgcHJvbWlzZSBpcyB0byBtYWtlIHlvdXIgd2VkZGluZyBkYXkgb3IgbGlmZSBjZWxlYnJhdGlvbiBtZW1vcmFibGUsIGhlYXJmdGVmdCwgc2FjcmVkIGFuZCBhdXRoZW50aWMuPC9wPlxuXG5cdFx0XHRcdFx0PHA+UHJpbWFyaWx5IHdvcmtpbmcgb24gdGhlIENlbnRyYWwgQ29hc3QgYW5kIExha2UgTWFjcXVhcmllIGFyZWFzLiA8L3A+XG5cdFx0XHRcdFx0PHA+VGhlcmUgYXJlIG1hbnkgYmVhdXRpZnVsIHZlbnVlcyB0byBjaG9vc2UgZnJvbSBhbmQgaWYgeW91IGFyZSBmaW5kaW5nIGl0IGhhcmQgdG8gY2hvb3NlLCBmZWVsIGZyZWUgdG8gZ2V0IGluIHRvdWNoIGZvciBzb21lIGZhYnVsb3VzIHJlY29tbWVuZGF0aW9ucyBmb3IgeW91ciBjZXJlbW9ueS48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz48ZW0+Q29udGFjdCBtZSB2aWEgcGhvbmUsIGVtYWlsIG9yIHRoZSBmb3JtIGJlbG93LjwvZW0+PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuXG5cblxuICAgICAgICAgICAgLnByb2ZpbGUtaW1nIHtcblx0XHRcdFx0d2lkdGg6IDY2JTtcblx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcblx0XHRcdFx0LyogZmlsdGVyOiBncmF5c2NhbGUoMSk7ICovXG5cdFx0XHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC5jb250ZW50LWludHJvIHtcblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXHRcdFx0fVxuXG5cblxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPiAgIFxuXHRcdDwvYXJ0aWNsZT5cblxuXG5cdCk7XG59XG4iXX0= */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Intro.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.7845e0bfae2ce2177f54.hot-update.js.map