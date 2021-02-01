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
        className: "jsx-2746505899" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2746505899" + " " + "hero__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("img", {
        width: "100px",
        src: "../static/circle.png",
        className: "jsx-2746505899" + " " + "mandala",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-2746505899",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-2746505899" + " " + "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Celebrant"), __jsx("span", {
        className: "jsx-2746505899" + " " + "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Maureen Catherine Crawley"), __jsx("span", {
        className: "jsx-2746505899" + " " + "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Celebrating Grace & Love")), __jsx("div", {
        className: "jsx-2746505899" + " " + "btn-grp",
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
        className: "jsx-2746505899" + " " + "svg-divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        className: "jsx-2746505899",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1",
        className: "jsx-2746505899",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("path", {
        d: "M0,0V56.51H800V0C706.28,18.6,561.93,30.51,400,30.51S93.72,18.6,0,0Z",
        className: "jsx-2746505899" + " " + "cls-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2746505899",
        __self: this
      }, ".hero.jsx-2746505899{background-size:cover;background-image:url(../static/IMG_9872-alt.jpg);background-position:bottom;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:white;height:calc(100vh - 87px);overflow:hidden;position:relative;padding:2vmax;min-height:500px;}@media screen and (max-width:400px){.hero.jsx-2746505899{height:100vh;}}.hero.jsx-2746505899 .btn-group.jsx-2746505899{max-width:340px;margin-left:auto;margin-right:auto;}.hero.jsx-2746505899 .btn.jsx-2746505899{font-size:14px;}.svg-divider.jsx-2746505899{display:block;background:var(--hero-background-color);z-index:2;bottom:0;width:100%;-webkit-transform:translateY(-98%);-ms-transform:translateY(-98%);transform:translateY(-98%);}.mandala.jsx-2746505899{display:none;width:150px;max-width:150px;}.hero.jsx-2746505899 video.jsx-2746505899{opacity:0.7;object-fit:cover;min-height:100vh;}.hero.jsx-2746505899 h2.jsx-2746505899{background:linear-gradient(90deg,#ff7500,#ff00fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone;-webkit-box-decoration-break:clone;box-decoration-break:clone;display:block;}.intro.jsx-2746505899{max-width:1000px;margin-left:auto;margin-right:auto;}.hero__content.jsx-2746505899{margin-top:-85px;position:absolute;padding-left:8vw;padding-right:8vw;padding-top:16vw;padding-bottom:8vw;z-index:1;-webkit-transform:translateY(-4vw);-ms-transform:translateY(-4vw);transform:translateY(-4vw);max-width:980px;}.cls-1.jsx-2746505899{fill:var(--theme-color-white) !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcSGVyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RlcsQUFRcUMsQUFpQlAsQUFNQyxBQU1ELEFBR0QsQUFVRixBQVNBLEFBS3NDLEFBU2pDLEFBTUQsQUFZOEIsWUEvQjdCLENBbENqQixBQXlCWSxDQVY0QixDQUgxQyxDQU5tQixDQTBDQSxBQU1DLEtBdkUrQixHQTJDakMsSUFTQyxJQTVCQyxDQTBDQSxDQU1ELE1BM0JuQixBQXFDaUQsS0E3QmpELElBRytCLENBL0IvQixDQTBDQSxBQU1vQixFQXhDUixVQUNELE1Bd0NRLENBekVVLEVBa0NoQixNQXNCeUIsS0FyQlQsR0F1Q1IsV0F6RU4sUUEwRUgsU0FsQnlCLENBbUJSLGtDQWxCQSxzQkF4RFIsS0FrQ3JCLGdDQXlDa0IsR0FsQkYsYUFtQmhCLENBbEJBLHVDQXpEeUIsbUdBQ1gsWUFDYywwQkFDVixnQkFDRSxrQkFDSixjQUNHLGlCQUNuQiIsImZpbGUiOiJDOlxcbXlkZXZcXG1jY3dlZGRpbmdzXFxzcmNcXGNvbXBvbmVudHNcXEhlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTGluayBhcyBTY0xpbmssIERpcmVjdExpbmssIEVsZW1lbnQsIEV2ZW50cywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsIHNjcm9sbFNweSwgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IHsgc2Nyb2xsWSB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblxuXG5jbGFzcyBIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNjcm9sbFRvVG9wID0gdGhpcy5zY3JvbGxUb1RvcC5iaW5kKHRoaXMpO1xuXG4gIH07XG5cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKTtcbiAgfVxuXG5cbiAgc2Nyb2xsVG8oKSB7XG4gICAgc2Nyb2xsZXIuc2Nyb2xsVG8oJ3Njcm9sbC10by1lbGVtZW50Jywge1xuICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgIGRlbGF5OiAwLFxuICAgICAgc21vb3RoOiAnZWFzZUluT3V0UXVhcnQnXG4gICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpY29uID0ge1xuICAgICAgaGlkZGVuOiB7XG4gICAgICAgIHBhdGhMZW5ndGg6IDAsXG4gICAgICAgIGZpbGw6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICBzdHJva2U6IFwiYWxpY2VibHVlXCIsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBcIjNweFwiLFxuICAgICAgfSxcbiAgICAgIHZpc2libGU6IHtcbiAgICAgICAgcGF0aExlbmd0aDogMSxcbiAgICAgICAgZmlsbDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClcIixcbiAgICAgICAgc3Ryb2tlOiBcImFsaWNlYmx1ZVwiLFxuICAgICAgICBzdHJva2VXaWR0aDogXCIzcHhcIixcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm9cIiBuYW1lPVwiaG9tZVwiIGlkPVwiaG9tZVwiPlxuXG57LyogICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fY29udGVudFwiPlxuICAgICAgICA8aW1nIHdpZHRoPVwiMTAwcHhcIiBjbGFzc05hbWU9XCJtYW5kYWxhXCIgc3JjPVwiLi4vc3RhdGljL2NpcmNsZS5wbmdcIj48L2ltZz5cbiAgICAgICAgICA8aDE+XG48c3BhbiBjbGFzc05hbWU9XCJoM1wiPkNlbGVicmFudDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMlwiPk1hdXJlZW4gQ2F0aGVyaW5lIENyYXdsZXk8L3NwYW4+XG4gICAgICAgIFxuICAgIFxuICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoMVwiPkNlbGVicmF0aW5nIEdyYWNlICYgTG92ZTwvc3Bhbj5cblxuICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdycFwiPlxuXG4gICAgICAgICAgICAgIDxTY0xpbmsgY2xhc3NOYW1lPVwiYnRuXCIgdG89XCJjb250YWN0XCIgc3B5IHNtb290aCB0bz1cImNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgIEJvb2sgYW4gYXBwb2ludG1lbnRcbiAgICAgICAgICAgICAgICAgIDwvU2NMaW5rPlxuICAgICAgICAgICAgICA8U2NMaW5rIGNsYXNzTmFtZT1cImJ0blwiIHRvPVwic2VydmljZXNhbmRyYXRlc1wiIHNweSBzbW9vdGggdG89XCJzZXJ2aWNlc2FuZHJhdGVzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VydmljZXMgJiBSYXRlc1xuICAgICAgICAgICAgICAgICAgPC9TY0xpbms+XG4gICAgICAgICAgICAgICAgICA8U2NMaW5rIGNsYXNzTmFtZT1cImJ0blwiIHRvPVwiZ2FsbGVyeVwiIHNweSBzbW9vdGggdG89XCJnYWxsZXJ5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlc3RpbW9uaWFscyAmIEdhbGxlcnlcbiAgICAgICAgICAgICAgICAgIDwvU2NMaW5rPlxuXG4gICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctZGl2aWRlclwiIHZpZXdCb3g9XCIwIDAgODAwIDU2LjUxXCI+PGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPjxnIGlkPVwiTGF5ZXJfMS0yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiPjxwYXRoIGNsYXNzTmFtZT1cImNscy0xXCIgZD1cIk0wLDBWNTYuNTFIODAwVjBDNzA2LjI4LDE4LjYsNTYxLjkzLDMwLjUxLDQwMCwzMC41MVM5My43MiwxOC42LDAsMFpcIi8+PC9nPjwvZz48L3N2Zz5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuXG5cblxuICAgICAgICAgICAgLmhlcm8ge1xuXG4gICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvaGVyby1iZy5qcGcpOyAqL1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL0lNR185ODcyLWFsdC5qcGcpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDg3cHgpO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJ2bWF4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuXG4gICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZXJvIC5idG4tZ3JvdXAge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVybyAuYnRuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN2Zy1kaXZpZGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhlcm8tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTglKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAubWFuZGFsYSB7XG4gICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAuaGVybyB2aWRlbyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2ZmNzUwMCwjZmYwMGZhKTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogY2xvbmU7XG4gICAgICAgICAgICAgIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBjbG9uZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVyb19fY29udGVudCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6LTg1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4dnc7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDh2dztcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2dnc7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4dnc7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZ3KTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuY2xzLTEge2ZpbGw6IHZhcigtLXRoZW1lLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50OyB9XG5cblxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.2105a8f32b1af00ccf18.hot-update.js.map