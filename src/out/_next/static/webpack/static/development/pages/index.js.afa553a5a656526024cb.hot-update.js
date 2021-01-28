webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ContentBlock.js":
/*!************************************!*\
  !*** ./components/ContentBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentBlock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hook */ "./components/hook.js");

var _jsxFileName = "C:\\mydev\\portfolio2020\\src\\components\\ContentBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




function ContentBlock(props) {
  var root = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var target = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var rootMargin = "40px";

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
  return __jsx("div", {
    className: "jsx-3033720036" + " " + "content-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    ref: target,
    className: "jsx-3033720036",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, isThingIntersecting && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h2, {
    initial: {
      opacity: 0,
      x: "100%",
      rotateX: 90,
      height: "3rem"
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      height: "3rem"
    },
    transition: {
      duration: 0.25
    },
    whileHover: {
      rotateX: 180,
      duration: 0.3
    },
    whileTap: {
      rotateX: 180,
      duration: 0.3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3033720036",
    __self: this
  }, ".content-block.jsx-3033720036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:70vh;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxccG9ydGZvbGlvMjAyMFxcc3JjXFxjb21wb25lbnRzXFxDb250ZW50QmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNTLEFBSzBCLDBFQUNVLG1HQUNKLDZGQUNILGdCQUNDLGlCQUNuQiIsImZpbGUiOiJDOlxcbXlkZXZcXHBvcnRmb2xpbzIwMjBcXHNyY1xcY29tcG9uZW50c1xcQ29udGVudEJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSBcIi4vaG9va1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRCbG9jayhwcm9wcykge1xuXG4gIGNvbnN0IHJvb3QgPSB1c2VSZWYoKTtcbiAgY29uc3QgdGFyZ2V0ID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJvb3RNYXJnaW4gPSBcIjQwcHhcIlxuXG4gIGNvbnN0IFtpc1RoaW5nSW50ZXJzZWN0aW5nLCBzZXRUaGluZ0ludGVyc2VjdGluZ10gPSB1c2VTdGF0ZSgpO1xuXG5cbiAgLy8gSGVyZSdzIG91ciBob29rISBMZXQncyBnaXZlIGl0IHNvbWUgY29uZmlndXJhdGlvbi4uLlxuICB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcih7XG4gICAgcm9vdCxcbiAgICB0YXJnZXQsXG4gICAgcm9vdE1hcmdpbixcblxuICAgIC8vIFdoYXQgZG8gd2UgZG8gd2hlbiBpdCBpbnRlcnNlY3RzP1xuICAgIC8vIFRoZSBzaWduYXR1cmUgb2YgdGhpcyBjYWxsYmFjayBpcyAoY29sbGVjdGlvbk9mSW50ZXJzZWN0aW9ucywgb2JzZXJ2ZXJFbGVtZW50KS5cbiAgICBvbkludGVyc2VjdDogKFt7IGlzSW50ZXJzZWN0aW5nIH1dKSA9PiBzZXRUaGluZ0ludGVyc2VjdGluZyhpc0ludGVyc2VjdGluZylcbiAgfSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgXG4gICAgICA8ZGl2ICByZWY9e3RhcmdldH0+XG4gICAgICAgIHtpc1RoaW5nSW50ZXJzZWN0aW5nICYmIDxtb3Rpb24uaDJcbiAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAsIHg6IFwiMTAwJVwiLCByb3RhdGVYOiA5MCwgaGVpZ2h0OiBcIjNyZW1cIn19XG4gICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxLCB4OjAsIHJvdGF0ZVg6IDAsIGhlaWdodDogXCIzcmVtXCJ9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjI1fX1cbiAgICAgICAgd2hpbGVIb3Zlcj17eyByb3RhdGVYOiAxODAsIGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgd2hpbGVUYXA9e3sgcm90YXRlWDogMTgwLCBkdXJhdGlvbjogMC4zIH19PlxuICAgICAgICB7cHJvcHMudGl0bGV9PC9tb3Rpb24uaDI+fVxuXG48L2Rpdj5cblxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuXG4gICAgICAgICAgLmNvbnRlbnQtYmxvY2t7XG4gICAgICBcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNzB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgKTtcblxuXG5cbn1cblxuXG5cbiJdfQ== */\n/*@ sourceURL=C:\\\\mydev\\\\portfolio2020\\\\src\\\\components\\\\ContentBlock.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.afa553a5a656526024cb.hot-update.js.map