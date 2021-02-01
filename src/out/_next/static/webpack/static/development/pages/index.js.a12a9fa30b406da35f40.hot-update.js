webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll */ "../node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\mydev\\mccweddings\\src\\components\\Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;





var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_9__["useViewportScroll"])(),
    scrollY = _useViewportScroll.scrollY;

var Hero =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Hero).call(this, props));
    _this.scrollToTop = _this.scrollToTop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Hero, [{
    key: "scrollToTop",
    value: function scrollToTop() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollToTop();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _jsx, _jsx2, _jsx3;

      var icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)",
          stroke: "aliceblue",
          strokeWidth: "3px"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 0.4)",
          stroke: "aliceblue",
          strokeWidth: "3px"
        }
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx("section", {
        name: "home",
        id: "home",
        className: "jsx-921642511" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-921642511" + " " + "hero__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("img", {
        src: "../static/circle.png",
        className: "jsx-921642511" + " " + "mandala",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-921642511",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-921642511" + " " + "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Celebrant"), __jsx("span", {
        className: "jsx-921642511" + " " + "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Maureen Catherine Crawley"), __jsx("span", {
        className: "jsx-921642511" + " " + "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Celebrating Grace & Love")), __jsx("div", {
        className: "jsx-921642511" + " " + "btn-grp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], (_jsx = {
        className: "btn",
        to: "contact",
        spy: true,
        smooth: true
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "to", "contact"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 68
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), "Book an appointment"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], (_jsx2 = {
        className: "btn",
        to: "servicesandrates",
        spy: true,
        smooth: true
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "to", "servicesandrates"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 72
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), "Services & Rates"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], (_jsx3 = {
        className: "btn",
        to: "gallery",
        spy: true,
        smooth: true
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "to", "gallery"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__source", {
        fileName: _jsxFileName,
        lineNumber: 76
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__self", this), _jsx3), "Testimonials & Gallery")))), __jsx("svg", {
        viewBox: "0 0 800 56.51",
        className: "jsx-921642511" + " " + "svg-divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        className: "jsx-921642511",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1",
        className: "jsx-921642511",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("path", {
        d: "M0,0V56.51H800V0C706.28,18.6,561.93,30.51,400,30.51S93.72,18.6,0,0Z",
        className: "jsx-921642511" + " " + "cls-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "921642511",
        __self: this
      }, ".hero.jsx-921642511{background-size:cover;background-image:url(../static/IMG_9872.jpg);background-position:bottom;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:white;height:calc(100vh - 87px);overflow:hidden;position:relative;padding:2vmax;min-height:500px;}@media screen and (max-width:400px){.hero.jsx-921642511{height:100vh;}}.hero.jsx-921642511 .btn-group.jsx-921642511{max-width:340px;margin-left:auto;margin-right:auto;}.hero.jsx-921642511 .btn.jsx-921642511{font-size:14px;}.svg-divider.jsx-921642511{display:block;background:var(--hero-background-color);z-index:2;bottom:0;width:100%;-webkit-transform:translateY(-98%);-ms-transform:translateY(-98%);transform:translateY(-98%);}.mandala-circle.jsx-921642511{opacity:0.2 !important;max-width:90vh;max-height:90vh;}.hero.jsx-921642511 video.jsx-921642511{opacity:0.7;object-fit:cover;min-height:100vh;}.hero.jsx-921642511 h2.jsx-921642511{background:linear-gradient(90deg,#ff7500,#ff00fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone;-webkit-box-decoration-break:clone;box-decoration-break:clone;display:block;}.intro.jsx-921642511{max-width:1000px;margin-left:auto;margin-right:auto;}.hero__content.jsx-921642511{margin-top:-85px;position:absolute;padding-left:8vw;padding-right:8vw;padding-top:16vw;padding-bottom:8vw;z-index:1;-webkit-transform:translateY(-4vw);-ms-transform:translateY(-4vw);transform:translateY(-4vw);max-width:980px;}.cls-1.jsx-921642511{fill:var(--theme-color-white) !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcSGVyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RlcsQUFRcUMsQUFpQlAsQUFNQyxBQU1ELEFBR0QsQUFVUyxBQVFYLEFBS3NDLEFBU2pDLEFBTUQsQUFZOEIsWUEvQjdCLENBakNqQixDQWV3QyxDQUgxQyxDQU5tQixDQXlDQSxBQU1DLEtBdEUyQixDQTBDOUIsTUFTRSxJQTNCQyxDQXlDQSxDQU1ELEdBNUJELEdBc0MrQixLQTdCakQsSUFHK0IsQ0E5Qi9CLENBeUNBLEFBTW9CLEVBdkNSLEFBV1osVUFWVyxHQWpDa0IsR0F3RVYsR0F0Q04sTUFxQnlCLEtBcEJULEdBc0NSLE9BeEVOLFlBeUVILFNBbEJ5QixDQW1CUixrQ0FsQkEsa0JBdkRSLFNBa0NyQixnQ0F3Q2tCLEdBbEJGLGFBbUJoQixDQWxCQSxtQ0F4RHlCLG1HQUNYLFlBQ2MsMEJBQ1YsZ0JBQ0Usa0JBQ0osY0FDRyxpQkFDbkIiLCJmaWxlIjoiQzpcXG15ZGV2XFxtY2N3ZWRkaW5nc1xcc3JjXFxjb21wb25lbnRzXFxIZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgYXMgU2NMaW5rLCBEaXJlY3RMaW5rLCBFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxTcHksIHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cblxuY2xhc3MgSGVybyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCA9IHRoaXMuc2Nyb2xsVG9Ub3AuYmluZCh0aGlzKTtcblxuICB9O1xuXG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgc2Nyb2xsLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuXG4gIHNjcm9sbFRvKCkge1xuICAgIHNjcm9sbGVyLnNjcm9sbFRvKCdzY3JvbGwtdG8tZWxlbWVudCcsIHtcbiAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICBkZWxheTogMCxcbiAgICAgIHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0J1xuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWNvbiA9IHtcbiAgICAgIGhpZGRlbjoge1xuICAgICAgICBwYXRoTGVuZ3RoOiAwLFxuICAgICAgICBmaWxsOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgc3Ryb2tlOiBcImFsaWNlYmx1ZVwiLFxuICAgICAgICBzdHJva2VXaWR0aDogXCIzcHhcIixcbiAgICAgIH0sXG4gICAgICB2aXNpYmxlOiB7XG4gICAgICAgIHBhdGhMZW5ndGg6IDEsXG4gICAgICAgIGZpbGw6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXCIsXG4gICAgICAgIHN0cm9rZTogXCJhbGljZWJsdWVcIixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IFwiM3B4XCIsXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvXCIgbmFtZT1cImhvbWVcIiBpZD1cImhvbWVcIj5cblxuey8qICAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX2NvbnRlbnRcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYW5kYWxhXCIgc3JjPVwiLi4vc3RhdGljL2NpcmNsZS5wbmdcIj48L2ltZz5cbiAgICAgICAgICA8aDE+XG48c3BhbiBjbGFzc05hbWU9XCJoM1wiPkNlbGVicmFudDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMlwiPk1hdXJlZW4gQ2F0aGVyaW5lIENyYXdsZXk8L3NwYW4+XG4gICAgICAgIFxuICAgIFxuICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMVwiPkNlbGVicmF0aW5nIEdyYWNlICYgTG92ZTwvc3Bhbj5cblxuICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdycFwiPlxuXG4gICAgICAgICAgICAgIDxTY0xpbmsgY2xhc3NOYW1lPVwiYnRuXCIgdG89XCJjb250YWN0XCIgc3B5IHNtb290aCB0bz1cImNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgIEJvb2sgYW4gYXBwb2ludG1lbnRcbiAgICAgICAgICAgICAgICAgIDwvU2NMaW5rPlxuICAgICAgICAgICAgICA8U2NMaW5rIGNsYXNzTmFtZT1cImJ0blwiIHRvPVwic2VydmljZXNhbmRyYXRlc1wiIHNweSBzbW9vdGggdG89XCJzZXJ2aWNlc2FuZHJhdGVzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VydmljZXMgJiBSYXRlc1xuICAgICAgICAgICAgICAgICAgPC9TY0xpbms+XG4gICAgICAgICAgICAgICAgICA8U2NMaW5rIGNsYXNzTmFtZT1cImJ0blwiIHRvPVwiZ2FsbGVyeVwiIHNweSBzbW9vdGggdG89XCJnYWxsZXJ5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlc3RpbW9uaWFscyAmIEdhbGxlcnlcbiAgICAgICAgICAgICAgICAgIDwvU2NMaW5rPlxuXG4gICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctZGl2aWRlclwiIHZpZXdCb3g9XCIwIDAgODAwIDU2LjUxXCI+PGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPjxnIGlkPVwiTGF5ZXJfMS0yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiPjxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0wLDBWNTYuNTFIODAwVjBDNzA2LjI4LDE4LjYsNTYxLjkzLDMwLjUxLDQwMCwzMC41MVM5My43MiwxOC42LDAsMFpcIi8+PC9nPjwvZz48L3N2Zz5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuXG5cblxuICAgICAgICAgICAgLmhlcm8ge1xuXG4gICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvaGVyby1iZy5qcGcpOyAqL1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL0lNR185ODcyLmpwZyk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODdweCk7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnZtYXg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG5cbiAgICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlcm8gLmJ0bi1ncm91cCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZXJvIC5idG4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3ZnLWRpdmlkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taGVyby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05OCUpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5tYW5kYWxhLWNpcmNsZSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwdmg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAuaGVybyB2aWRlbyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2ZmNzUwMCwjZmYwMGZhKTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogY2xvbmU7XG4gICAgICAgICAgICAgIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBjbG9uZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVyb19fY29udGVudCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6LTg1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4dnc7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDh2dztcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2dnc7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4dnc7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZ3KTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuY2xzLTEge2ZpbGw6IHZhcigtLXRoZW1lLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50OyB9XG5cblxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.a12a9fa30b406da35f40.hot-update.js.map