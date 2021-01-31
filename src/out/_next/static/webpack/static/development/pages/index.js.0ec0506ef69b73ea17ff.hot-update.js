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
    className: "jsx-4179265418" + " " + "content-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-4179265418" + " " + "content-max-width content-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: "../static/profile.png",
    className: "jsx-4179265418" + " " + "profile-img mar-l-auto mar-r-auto d-inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4179265418" + " " + "rte intro mar-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-4179265418",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "It is my wish to make your day special"), __jsx("p", {
    className: "jsx-4179265418",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "I offer a warm, compassionate and professional service to my clients. My promise is to make your wedding day or life celebration memorable, hearfteft, sacred and authentic."), __jsx("p", {
    className: "jsx-4179265418",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Primarily working on the Central Coast and Lake Macquarie areas. "), __jsx("p", {
    className: "jsx-4179265418",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "There are many beautiful venues to choose from and if you are finding it hard to choose, feel free to get in touch for some fabulous recommendations for your ceremony."), __jsx("p", {
    className: "jsx-4179265418",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("strong", {
    className: "jsx-4179265418",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "I'm available via phone, email or via the form below.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4179265418",
    __self: this
  }, ".profile-img.jsx-4179265418{width:66%;max-width:300px;-webkit-filter:grayscale(1);filter:grayscale(1);}.content-intro.jsx-4179265418{padding-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcSW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENXLEFBTWUsQUFNSSxVQUxFLElBTWpCLFlBTHFCLGdEQUNyQiIsImZpbGUiOiJDOlxcbXlkZXZcXG1jY3dlZGRpbmdzXFxzcmNcXGNvbXBvbmVudHNcXEludHJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tIFwiLi9ob29rXCI7XG5cbmltcG9ydCBGbG91cmlzaCBmcm9tIFwiLi4vY29tcG9uZW50cy9GbG91cmlzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRybyhwcm9wcykge1xuXHRjb25zdCByb290ID0gdXNlUmVmKCk7XG5cdGNvbnN0IHRhcmdldCA9IHVzZVJlZigpO1xuXHRjb25zdCByb290TWFyZ2luID0gXCIwcHhcIjtcblx0Y29uc3QgW2lzVGhpbmdJbnRlcnNlY3RpbmcsIHNldFRoaW5nSW50ZXJzZWN0aW5nXSA9IHVzZVN0YXRlKCk7XG5cblx0Ly8gSGVyZSdzIG91ciBob29rISBMZXQncyBnaXZlIGl0IHNvbWUgY29uZmlndXJhdGlvbi4uLlxuXHR1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcih7XG5cdFx0cm9vdCxcblx0XHR0YXJnZXQsXG5cdFx0cm9vdE1hcmdpbixcblxuXHRcdC8vIFdoYXQgZG8gd2UgZG8gd2hlbiBpdCBpbnRlcnNlY3RzP1xuXHRcdC8vIFRoZSBzaWduYXR1cmUgb2YgdGhpcyBjYWxsYmFjayBpcyAoY29sbGVjdGlvbk9mSW50ZXJzZWN0aW9ucywgb2JzZXJ2ZXJFbGVtZW50KS5cblx0XHRvbkludGVyc2VjdDogKFt7IGlzSW50ZXJzZWN0aW5nIH1dKSA9PiBzZXRUaGluZ0ludGVyc2VjdGluZyhpc0ludGVyc2VjdGluZyksXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uXCIgcmVmPXt0YXJnZXR9IGlkPVwiYWJvdXRcIj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnQtbWF4LXdpZHRoIGNvbnRlbnQtaW50cm9cIj5cblx0XHRcdFx0ey8qIDxGbG91cmlzaD48L0Zsb3VyaXNoPiAqL31cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGUtaW1nIG1hci1sLWF1dG8gbWFyLXItYXV0byBkLWlubGluZS1ibG9ja1wiIHNyYz1cIi4uL3N0YXRpYy9wcm9maWxlLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnRlIGludHJvIG1hci10LTNcIj5cblx0XHRcdFx0XHQ8aDI+SXQgaXMgbXkgd2lzaCB0byBtYWtlIHlvdXIgZGF5IHNwZWNpYWw8L2gyPlxuXG5cdFx0XHRcdFx0PHA+SSBvZmZlciBhIHdhcm0sIGNvbXBhc3Npb25hdGUgYW5kIHByb2Zlc3Npb25hbCBzZXJ2aWNlIHRvIG15IGNsaWVudHMuIE15IHByb21pc2UgaXMgdG8gbWFrZSB5b3VyIHdlZGRpbmcgZGF5IG9yIGxpZmUgY2VsZWJyYXRpb24gbWVtb3JhYmxlLCBoZWFyZnRlZnQsIHNhY3JlZCBhbmQgYXV0aGVudGljLjwvcD5cblxuXHRcdFx0XHRcdDxwPlByaW1hcmlseSB3b3JraW5nIG9uIHRoZSBDZW50cmFsIENvYXN0IGFuZCBMYWtlIE1hY3F1YXJpZSBhcmVhcy4gPC9wPlxuXHRcdFx0XHRcdDxwPlRoZXJlIGFyZSBtYW55IGJlYXV0aWZ1bCB2ZW51ZXMgdG8gY2hvb3NlIGZyb20gYW5kIGlmIHlvdSBhcmUgZmluZGluZyBpdCBoYXJkIHRvIGNob29zZSwgZmVlbCBmcmVlIHRvIGdldCBpbiB0b3VjaCBmb3Igc29tZSBmYWJ1bG91cyByZWNvbW1lbmRhdGlvbnMgZm9yIHlvdXIgY2VyZW1vbnkuPC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+SSdtIGF2YWlsYWJsZSB2aWEgcGhvbmUsIGVtYWlsIG9yIHZpYSB0aGUgZm9ybSBiZWxvdy48L3N0cm9uZz48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG5cblxuXG4gICAgICAgICAgICAucHJvZmlsZS1pbWcge1xuXHRcdFx0XHR3aWR0aDogNjYlO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0LmNvbnRlbnQtaW50cm8ge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcblx0XHRcdH1cblxuXG5cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT4gICBcblx0XHQ8L2FydGljbGU+XG5cblxuXHQpO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Intro.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.0ec0506ef69b73ea17ff.hot-update.js.map