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
        className: "jsx-950503556" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-950503556" + " " + "hero__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("img", {
        width: "100px",
        src: "../static/circle.png",
        className: "jsx-950503556" + " " + "mandala",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-950503556",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-950503556" + " " + "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Celebrant"), __jsx("span", {
        className: "jsx-950503556" + " " + "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Maureen Catherine Crawley"), __jsx("span", {
        className: "jsx-950503556" + " " + "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Celebrating Grace & Love")), __jsx("div", {
        className: "jsx-950503556" + " " + "btn-grp",
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
        className: "jsx-950503556" + " " + "svg-divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        className: "jsx-950503556",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1",
        className: "jsx-950503556",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("path", {
        d: "M0,0V56.51H800V0C706.28,18.6,561.93,30.51,400,30.51S93.72,18.6,0,0Z",
        className: "jsx-950503556" + " " + "cls-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "950503556",
        __self: this
      }, ".hero.jsx-950503556{background-size:cover;background-image:url(../static/IMG_9872.jpg);background-position:bottom;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:white;height:calc(100vh - 87px);overflow:hidden;position:relative;padding:2vmax;min-height:500px;}@media screen and (max-width:400px){.hero.jsx-950503556{height:100vh;}}.hero.jsx-950503556 .btn-group.jsx-950503556{max-width:340px;margin-left:auto;margin-right:auto;}.hero.jsx-950503556 .btn.jsx-950503556{font-size:14px;}.svg-divider.jsx-950503556{display:block;background:var(--hero-background-color);z-index:2;bottom:0;width:100%;-webkit-transform:translateY(-98%);-ms-transform:translateY(-98%);transform:translateY(-98%);}.mandala.jsx-950503556{opacity:0.2 !important;width:100px;max-width:100px;}.hero.jsx-950503556 video.jsx-950503556{opacity:0.7;object-fit:cover;min-height:100vh;}.hero.jsx-950503556 h2.jsx-950503556{background:linear-gradient(90deg,#ff7500,#ff00fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone;-webkit-box-decoration-break:clone;box-decoration-break:clone;display:block;}.intro.jsx-950503556{max-width:1000px;margin-left:auto;margin-right:auto;}.hero__content.jsx-950503556{margin-top:-85px;position:absolute;padding-left:8vw;padding-right:8vw;padding-top:16vw;padding-bottom:8vw;z-index:1;-webkit-transform:translateY(-4vw);-ms-transform:translateY(-4vw);transform:translateY(-4vw);max-width:980px;}.cls-1.jsx-950503556{fill:var(--theme-color-white) !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcSGVyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RlcsQUFRcUMsQUFpQlAsQUFNQyxBQU1ELEFBR0QsQUFVUyxBQVNYLEFBS3NDLEFBU2pDLEFBTUQsQUFZOEIsWUEvQjdCLENBbENqQixDQWV3QyxDQUgxQyxDQU5tQixDQTBDQSxBQU1DLEtBdkUyQixDQTBDakMsTUFVSyxJQTVCQyxDQTBDQSxDQXZCRixBQTZCQyxNQVU4QixLQTdCakQsSUFHK0IsQ0EvQi9CLEFBb0JBLENBc0JBLEFBTW9CLEVBeENSLFVBQ0QsR0FqQ2tCLEdBeUVWLEdBdkNOLE1Bc0J5QixLQXJCVCxHQXVDUixPQXpFTixZQTBFSCxTQWxCeUIsQ0FtQlIsa0NBbEJBLGtCQXhEUixTQWtDckIsZ0NBeUNrQixHQWxCRixhQW1CaEIsQ0FsQkEsbUNBekR5QixtR0FDWCxZQUNjLDBCQUNWLGdCQUNFLGtCQUNKLGNBQ0csaUJBQ25CIiwiZmlsZSI6IkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcSGVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBMaW5rIGFzIFNjTGluaywgRGlyZWN0TGluaywgRWxlbWVudCwgRXZlbnRzLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCwgc2Nyb2xsU3B5LCBzY3JvbGxlciB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgeyBzY3JvbGxZIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2Nyb2xsVG9Ub3AgPSB0aGlzLnNjcm9sbFRvVG9wLmJpbmQodGhpcyk7XG5cbiAgfTtcblxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpO1xuICB9XG5cblxuICBzY3JvbGxUbygpIHtcbiAgICBzY3JvbGxlci5zY3JvbGxUbygnc2Nyb2xsLXRvLWVsZW1lbnQnLCB7XG4gICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBzbW9vdGg6ICdlYXNlSW5PdXRRdWFydCdcbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGljb24gPSB7XG4gICAgICBoaWRkZW46IHtcbiAgICAgICAgcGF0aExlbmd0aDogMCxcbiAgICAgICAgZmlsbDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgIHN0cm9rZTogXCJhbGljZWJsdWVcIixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IFwiM3B4XCIsXG4gICAgICB9LFxuICAgICAgdmlzaWJsZToge1xuICAgICAgICBwYXRoTGVuZ3RoOiAxLFxuICAgICAgICBmaWxsOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KVwiLFxuICAgICAgICBzdHJva2U6IFwiYWxpY2VibHVlXCIsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBcIjNweFwiLFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiIG5hbWU9XCJob21lXCIgaWQ9XCJob21lXCI+XG5cbnsvKiAgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX19jb250ZW50XCI+XG4gICAgICAgIDxpbWcgd2lkdGg9XCIxMDBweFwiIGNsYXNzTmFtZT1cIm1hbmRhbGFcIiBzcmM9XCIuLi9zdGF0aWMvY2lyY2xlLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgIDxoMT5cbjxzcGFuIGNsYXNzTmFtZT1cImgzXCI+Q2VsZWJyYW50PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgyXCI+TWF1cmVlbiBDYXRoZXJpbmUgQ3Jhd2xleTwvc3Bhbj5cbiAgICAgICAgXG4gICAgXG4gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgxXCI+Q2VsZWJyYXRpbmcgR3JhY2UgJiBMb3ZlPC9zcGFuPlxuXG4gICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JwXCI+XG5cbiAgICAgICAgICAgICAgPFNjTGluayBjbGFzc05hbWU9XCJidG5cIiB0bz1cImNvbnRhY3RcIiBzcHkgc21vb3RoIHRvPVwiY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgQm9vayBhbiBhcHBvaW50bWVudFxuICAgICAgICAgICAgICAgICAgPC9TY0xpbms+XG4gICAgICAgICAgICAgIDxTY0xpbmsgY2xhc3NOYW1lPVwiYnRuXCIgdG89XCJzZXJ2aWNlc2FuZHJhdGVzXCIgc3B5IHNtb290aCB0bz1cInNlcnZpY2VzYW5kcmF0ZXNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlcyAmIFJhdGVzXG4gICAgICAgICAgICAgICAgICA8L1NjTGluaz5cbiAgICAgICAgICAgICAgICAgIDxTY0xpbmsgY2xhc3NOYW1lPVwiYnRuXCIgdG89XCJnYWxsZXJ5XCIgc3B5IHNtb290aCB0bz1cImdhbGxlcnlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVGVzdGltb25pYWxzICYgR2FsbGVyeVxuICAgICAgICAgICAgICAgICAgPC9TY0xpbms+XG5cbiAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1kaXZpZGVyXCIgdmlld0JveD1cIjAgMCA4MDAgNTYuNTFcIj48ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+PGcgaWQ9XCJMYXllcl8xLTJcIiBkYXRhLW5hbWU9XCJMYXllciAxXCI+PHBhdGggY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTAsMFY1Ni41MUg4MDBWMEM3MDYuMjgsMTguNiw1NjEuOTMsMzAuNTEsNDAwLDMwLjUxUzkzLjcyLDE4LjYsMCwwWlwiLz48L2c+PC9nPjwvc3ZnPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG5cblxuXG4gICAgICAgICAgICAuaGVybyB7XG5cbiAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9oZXJvLWJnLmpwZyk7ICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvSU1HXzk4NzIuanBnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4N3B4KTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAydm1heDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcblxuICAgICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVybyAuYnRuLWdyb3VwIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlcm8gLmJ0biB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdmctZGl2aWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZXJvLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTk4JSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLm1hbmRhbGEge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAuaGVybyB2aWRlbyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2ZmNzUwMCwjZmYwMGZhKTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogY2xvbmU7XG4gICAgICAgICAgICAgIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBjbG9uZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVyb19fY29udGVudCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6LTg1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4dnc7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDh2dztcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2dnc7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4dnc7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHZ3KTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuY2xzLTEge2ZpbGw6IHZhcigtLXRoZW1lLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50OyB9XG5cblxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuXG5cblxuXG5cblxuIl19 */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.d7e07c08122b2d96c6a7.hot-update.js.map