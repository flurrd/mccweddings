webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/NavMotion.js":
/*!*********************************!*\
  !*** ./components/NavMotion.js ***!
  \*********************************/
/*! exports provided: NavMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMotion", function() { return NavMotion; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "../node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\mydev\\portfolio2020\\src\\components\\NavMotion.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var variants = {
  open: {
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: 10000,
    width: "320px",
    height: "100%",
    opacity: 1,
    x: 0
  },
  closed: {
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: 10000,
    width: 0,
    height: "100%",
    opacity: 1,
    x: "100%"
  }
};
var navLinks = [{
  title: 'home'
}, {
  title: 'projects'
}, {
  title: 'about'
}, {
  title: 'contact'
}];
var container = {
  closed: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.1
    }
  }
};
var item = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: "-50%"
  }
};

var Path = function Path(props) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].path, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    fill: "transparent",
    strokeWidth: "3",
    stroke: "#fff",
    strokeLinecap: "round"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

var NavMotion = function NavMotion() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return __jsx("div", {
    className: "jsx-384550421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-384550421" + " " + "logo-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-384550421" + " " + "img-switcha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: "../static/me-crop-alt.png",
    className: "jsx-384550421" + " " + "avatar-home-link bottom-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("img", {
    src: "../static/me-crop.png",
    className: "jsx-384550421" + " " + "avatar-home-link top-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))), __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "jsx-384550421" + " " + "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    className: "jsx-384550421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(Path, {
    animate: isOpen ? "open" : "closed",
    initial: "closed",
    variants: {
      closed: {
        d: "M 2 2.5 L 20 2.5"
      },
      open: {
        d: "M 3 16.5 L 17 2.5"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(Path, {
    animate: isOpen ? "open" : "closed",
    d: "M 2 9.423 L 20 9.423",
    initial: "closed",
    variants: {
      closed: {
        opacity: 1
      },
      open: {
        opacity: 0
      }
    },
    transition: {
      duration: 0.1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(Path, {
    initial: "closed",
    animate: isOpen ? "open" : "closed",
    variants: {
      closed: {
        d: "M 2 16.346 L 20 16.346"
      },
      open: {
        d: "M 3 2.5 L 17 16.346"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-384550421" + " " + "motion-nav nav-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, isOpen && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].nav, {
    animate: isOpen ? "open" : "closed",
    variants: variants,
    className: "nav",
    initial: "closed",
    role: "navigation",
    "aria-label": "main navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "nav-links",
    variants: container,
    initial: "closed",
    animate: isOpen ? "open" : "closed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, navLinks.length > 1 && navLinks.map(function (navLink) {
    var _jsx;

    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      className: "nav-link-wrap",
      variants: item,
      key: navLink.title,
      whileHover: {
        scale: 1.1
      },
      whileTap: {
        scale: 0.9
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], (_jsx = {
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      },
      className: "nav__link",
      to: navLink.title,
      spy: true,
      smooth: true
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "to", navLink.title), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 124
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), navLink.title));
  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].svg, {
    className: "content-svg",
    x: "0px",
    y: "0px",
    initial: {
      width: "50",
      opacity: 0
    },
    animate: {
      width: "1000",
      opacity: 1
    },
    viewBox: "0 0 200 200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("circle", {
    fill: "rgba(200,200,0,1)",
    cx: "100",
    cy: "100",
    r: "100",
    className: "jsx-384550421",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "384550421",
    __self: this
  }, ".logo-wrap{top:1.5rem;left:1.5rem;position:fixed;z-index:100000;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.img-switcha{width:80px;height:80px;position:relative;border-radius:50%;border:2px solid white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all 0.6s;transition:all 0.6s;}.img-switcha img{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.6s;transition:all 0.6s;}.top-img.img{opacity:1;}.bottom-img{opacity:1;mix-blend-mode:screen;}.logo-wrap:hover .top-img{opacity:0;}.logo-wrap:hover .img-switcha{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-color:var(--theme-color-accent);background:var(--theme-color-accent);}.nav{position:fixed;color:var(--theme-color-nav-links);background:var(--theme-color-nav-background);color:white;}.nav-link-wrap{cursor:pointer;}.nav-links a{color:var(--theme-color-nav-links);font-size:30px;display:block;margin:1.5em;text-transform:uppercase;}.nav-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;}.hamburger{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100000;cursor:pointer;height:50px;width:50px;background:var(--theme-color-accent);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hamburger:hover{background:var(--theme-color-accent-light);}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.avatar-home-link{width:80px;}.content-svg{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxccG9ydGZvbGlvMjAyMFxcc3JjXFxjb21wb25lbnRzXFxOYXZNb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUpTLEFBR3dCLEFBV0EsQUFVQSxBQVNELEFBSUEsQUFLQSxBQUlXLEFBTU4sQUFPQSxBQUlvQixBQVF0QixBQVNGLEFBa0JnQyxBQUtoQyxBQUlELEFBR0EsQUFJQyxBQUlELEFBR0EsQUFJQyxBQUdBLFVBOUZiLEFBSXdCLEFBS3hCLEFBaUVGLEFBR0EsQUFRRSxBQUdBLENBdEhjLEFBV0EsQUFVQSxBQXdEQyxBQXVCQyxBQVdBLEFBV2hCLEFBR2UsSUE1RXNCLEFBT3JDLFFBdkRpQixBQVdHLEFBVUEsQ0F3REgsQUFnREEsQ0F6Qm5CLEFBV0UsT0E3RUEsR0F5QmlCLEdBMURBLENBNkVILEFBZ0RBLEVBbEhNLEFBVVosRUF3RVYsSUF2RVcsR0EwQnNDLEFBVy9CLENBbUJELEFBZ0RBLEVBN0hELENBc0JRLEtBWEcsS0FnRFYsQUFtQkQsQUFnREEsQ0E3SEMsU0FnRVUsQ0F6QmdCLENBdUN4QixBQWdESCxDQW5FYSxLQWhETixNQW9ISixHQWhEQSxJQWhDSCxPQXpCZCxBQXNDQSxDQW9FQSxHQWhEYyxDQWhDZCxPQVJ1QyxJQXlDMUIsV0FDMEIsVUFqRmxCLFlBV0MsQUE2QnRCLGVBMENvQixPQWxCQyxXQW1CTixlQXZFZixpQ0FYaUIsZUFDakIsV0FrRnlCLFFBbkJELDhFQUNYLFdBQ0MsRUFrQk8sVUFqQnJCLG1GQWtCRiIsImZpbGUiOiJDOlxcbXlkZXZcXHBvcnRmb2xpbzIwMjBcXHNyY1xcY29tcG9uZW50c1xcTmF2TW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IExpbmsgYXMgU2NMaW5rLCBEaXJlY3RMaW5rLCBFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxTcHksIHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuY29uc3QgdmFyaWFudHMgPSB7XG4gIG9wZW46IHsgdG9wOiAwLCByaWdodDogMCwgcG9zaXRpb246IFwiZml4ZWRcIiwgekluZGV4OiAxMDAwMCwgd2lkdGg6IFwiMzIwcHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb3BhY2l0eTogMSwgeDogMCB9LFxuICBjbG9zZWQ6IHsgdG9wOiAwLCByaWdodDogMCwgcG9zaXRpb246IFwiZml4ZWRcIiwgekluZGV4OiAxMDAwMCwgd2lkdGg6IDAsIGhlaWdodDogXCIxMDAlXCIsIG9wYWNpdHk6IDEsIHg6IFwiMTAwJVwiIH0sXG59XG5sZXQgbmF2TGlua3MgPSBbXG4gIHsgdGl0bGU6ICdob21lJyB9LFxuICB7IHRpdGxlOiAncHJvamVjdHMnIH0sXG4gIHsgdGl0bGU6ICdhYm91dCcgfSxcbiAgeyB0aXRsZTogJ2NvbnRhY3QnIH1cbl1cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAgfSxcbiAgb3Blbjoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuMSxcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGl0ZW0gPSB7XG4gIG9wZW46IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeDogXCItNTAlXCIgfVxufVxuXG5jb25zdCBQYXRoID0gcHJvcHMgPT4gKFxuICA8bW90aW9uLnBhdGhcbiAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTmF2TW90aW9uID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBcIj5cbiAgICAgICAgICB7LyogICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibG9nb1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTgyIDU3M1wiPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk05MS0wLjRoODkuMWwxMTEuNCwyOTAuNUw0MDMuOS0wLjRoODlsODAuNiw0MTYuNmgtODguNGwtNTEuNS0yNjMuMUwzMzEuNSw0MTYuMmgtODAuNkwxNDkuOCwxNTMuMUw5Nyw0MTYuMkg3LjhMOTEtMC40elwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwiI2ZmZlwiIGN4PVwiMTg5LjdcIiBjeT1cIjUzMi43XCIgcj1cIjQwLjJcIiAvPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9XCIjZmZmXCIgY3g9XCIzOTUuNVwiIGN5PVwiNTMyLjdcIiByPVwiNDAuMlwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4+TWFyY3VzIEhhbGw8L3NwYW4+ICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctc3dpdGNoYVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXItaG9tZS1saW5rIGJvdHRvbS1pbWdcIiBzcmM9XCIuLi9zdGF0aWMvbWUtY3JvcC1hbHQucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhci1ob21lLWxpbmsgdG9wLWltZ1wiIHNyYz1cIi4uL3N0YXRpYy9tZS1jcm9wLnBuZ1wiPjwvaW1nPlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG4gICAgICAgICAgPFBhdGggYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBjbG9zZWQ6IHsgZDogXCJNIDIgMi41IEwgMjAgMi41XCIgfSxcbiAgICAgICAgICAgICAgb3BlbjogeyBkOiBcIk0gMyAxNi41IEwgMTcgMi41XCIgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYXRoXG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBkPVwiTSAyIDkuNDIzIEwgMjAgOS40MjNcIlxuICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBjbG9zZWQ6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgICBvcGVuOiB7IG9wYWNpdHk6IDAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhdGhcbiAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgY2xvc2VkOiB7IGQ6IFwiTSAyIDE2LjM0NiBMIDIwIDE2LjM0NlwiIH0sXG4gICAgICAgICAgICAgIG9wZW46IHsgZDogXCJNIDMgMi41IEwgMTcgMTYuMzQ2XCIgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdGlvbi1uYXYgbmF2LXdyYXBcIj5cbiAgICAgIHtpc09wZW4gJiYgICAgICAgXG4gICAgICA8bW90aW9uLm5hdlxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgY2xhc3NOYW1lPVwibmF2XCJcbiAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgICAgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiXG4gICAgPlxuICAgICBcbiAgICAgICAgXG4gICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgdmFyaWFudHM9e2NvbnRhaW5lcn0gaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9PlxuXG4gICAgICAgICAgICB7bmF2TGlua3MubGVuZ3RoID4gMSAmJiBuYXZMaW5rcy5tYXAobmF2TGluayA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rLXdyYXBcIiB2YXJpYW50cz17aXRlbX0ga2V5PXtuYXZMaW5rLnRpdGxlfSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19PlxuICAgICAgICAgICAgICAgIDxTY0xpbmsgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfSBjbGFzc05hbWU9XCJuYXZfX2xpbmtcIiB0bz17bmF2TGluay50aXRsZX0gc3B5IHNtb290aCB0bz17bmF2TGluay50aXRsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bmF2TGluay50aXRsZX1cbiAgICAgICAgICAgICAgICA8L1NjTGluaz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2ID5cblxuXG5cbiAgICAgICAgICAgICkpfVxuXG5cblxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24ubmF2PlxuIH1cbiAgICAgICAgPG1vdGlvbi5zdmcgY2xhc3NOYW1lPVwiY29udGVudC1zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiXG4gICAgICAgICAgaW5pdGlhbD17e3dpZHRoOiBcIjUwXCIsIG9wYWNpdHk6MH19XG4gICAgICAgICAgYW5pbWF0ZT17e3dpZHRoOiBcIjEwMDBcIiwgb3BhY2l0eTogMX19XG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwicmdiYSgyMDAsMjAwLDAsMSlcIiBjeD1cIjEwMFwiIGN5PVwiMTAwXCIgcj1cIjEwMFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uc3ZnPlxuXG5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmxvZ28td3JhcCB7XG4gICAgICAgICAgICB0b3A6IDEuNXJlbTtcbiAgICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWctc3dpdGNoYSB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWctc3dpdGNoYSBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvcC1pbWcuaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJvdHRvbS1pbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28td3JhcDpob3ZlciAudG9wLWltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLXdyYXA6aG92ZXIgLmltZy1zd2l0Y2hhIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItbmF2LWxpbmtzKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLW5hdi1iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpbmstd3JhcCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saW5rcyBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1uYXYtbGlua3MpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDEuNWVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICB0b3A6IDEuNXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYW1idXJnZXI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50LWxpZ2h0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmhhbWJ1cmdlciBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuaGFtYnVyZ2VyIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmhhbWJ1cmdlciBzdmcubWVudS0tb3BlbiBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAgIC5oYW1idXJnZXIgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYW1idXJnZXIgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhhbWJ1cmdlciBzdmcubWVudS0tb3BlbiBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF2YXRhci1ob21lLWxpbmsge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50LXN2ZyB7XG4gICAgICAgICAgICB0b3A6IDEuNXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZNb3Rpb247XG4iXX0= */\n/*@ sourceURL=C:\\\\mydev\\\\portfolio2020\\\\src\\\\components\\\\NavMotion.js */"));
};
/* harmony default export */ __webpack_exports__["default"] = (NavMotion);

/***/ })

})
//# sourceMappingURL=_app.js.7db8b512bad6b0aab790.hot-update.js.map