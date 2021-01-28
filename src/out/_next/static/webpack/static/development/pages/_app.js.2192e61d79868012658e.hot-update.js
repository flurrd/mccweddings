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
    width: "100%",
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
var cicleBg = {
  closed: {
    "width": "20",
    "height": "20",
    "transformOrgin": "0 center",
    "right": "-50%",
    "top": "-50%"
  },
  open: {
    "width": "500vw",
    "height": "500vw",
    "transformOrgin": "0 center",
    "right": "-50%",
    "top": "-50%"
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
      lineNumber: 41
    },
    __self: this
  }));
};

var NavMotion = function NavMotion() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return __jsx("div", {
    className: "jsx-2512520647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2512520647" + " " + "logo-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2512520647" + " " + "img-switcha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("img", {
    src: "../static/me-crop-alt.png",
    className: "jsx-2512520647" + " " + "avatar-home-link bottom-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("img", {
    src: "../static/me-crop.png",
    className: "jsx-2512520647" + " " + "avatar-home-link top-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].svg, {
    className: "content-svg",
    x: "0px",
    y: "0px",
    initial: "closed",
    variants: cicleBg,
    transition: {
      duration: 1
    },
    animate: isOpen ? "open" : "closed",
    viewBox: "0 0 200 200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("circle", {
    fill: "rgba(255,255,255,1)",
    cx: "100",
    cy: "100",
    r: "100",
    className: "jsx-2512520647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "jsx-2512520647" + " " + "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    className: "jsx-2512520647",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
      lineNumber: 92
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
      lineNumber: 99
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
      lineNumber: 109
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2512520647" + " " + "motion-nav nav-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].nav, {
    animate: isOpen ? "open" : "closed",
    variants: variants,
    className: "nav",
    initial: "closed",
    role: "navigation",
    "aria-label": "main navigation",
    transition: {
      duration: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "nav-links",
    variants: container,
    initial: "closed",
    animate: isOpen ? "open" : "closed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
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
        lineNumber: 137
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
      lineNumber: 139
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), navLink.title));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2512520647",
    __self: this
  }, ".logo-wrap{top:1.5rem;left:1.5rem;position:fixed;z-index:100000;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.img-switcha{width:80px;height:80px;position:relative;border-radius:50%;border:2px solid white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all 0.6s;transition:all 0.6s;}.img-switcha img{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.6s;transition:all 0.6s;}.top-img.img{opacity:1;}.bottom-img{opacity:1;mix-blend-mode:screen;}.logo-wrap:hover .top-img{opacity:0;}.logo-wrap:hover .img-switcha{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-color:var(--theme-color-accent);background:var(--theme-color-accent);}.nav{position:fixed;color:var(--theme-color-nav-links);color:white;}.nav-link-wrap{cursor:pointer;}.nav-links a{color:var(--theme-color-nav-links);font-size:30px;display:block;margin:1.5em;text-transform:uppercase;}.nav-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;}.hamburger{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100000;cursor:pointer;height:50px;width:50px;background:var(--theme-color-accent);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hamburger:hover{background:var(--theme-color-accent-light);}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.avatar-home-link{width:80px;}.content-svg{position:fixed;border:none;outline:none;color:white;z-index:100;cursor:pointer;top:-100%;right:-100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxccG9ydGZvbGlvMjAyMFxcc3JjXFxjb21wb25lbnRzXFxOYXZNb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0tTLEFBR3dCLEFBV0EsQUFVQSxBQVNELEFBSUEsQUFLQSxBQUlXLEFBTU4sQUFPQSxBQUlvQixBQVF0QixBQVNGLEFBa0JnQyxBQUtoQyxBQUlELEFBR0EsQUFJQyxBQUlELEFBR0EsQUFJQyxBQUdJLFVBOUZqQixBQUl3QixBQUt4QixBQWlFRixBQUdBLEFBUUUsQUFHQSxDQXRIYyxBQVdBLEFBVUEsQUF3REMsQUF1QkMsQUFXQSxBQVdoQixJQXpFcUMsQUFPckMsQUFxRWMsUUE1SEcsQUFXRyxBQVVBLENBd0RILENBdUJuQixBQVdFLEVBY2UsS0EzRmYsR0F5QmlCLEdBMURBLENBNkVILENBZ0RBLENBbEhNLEFBVVosRUF3RVYsSUF2RVcsR0EyQkssQUFVRSxDQW1CRCxDQWdERCxDQTdIQSxDQXNCUSxLQVhHLEdBc0N6QixFQVVlLEFBbUJELEFBZ0RHLENBN0hGLFNBZ0VVLENBekJnQixDQXVDeEIsQ0FuQlUsRUFtRWYsR0FuSFMsT0FvSFAsRUFoREcsVUFpRGpCLENBMUdBLEFBc0NBLElBb0JjLFFBeEN5QixJQXlDMUIsV0FDMEIsVUFqRmxCLFlBV0MsQUE2QnRCLGVBMENvQixPQWxCQyxXQW1CTixlQXZFZixpQ0FYaUIsZUFDakIsV0FrRnlCLFFBbkJELDhFQUNYLFdBQ0MsRUFrQk8sVUFqQnJCLG1GQWtCRiIsImZpbGUiOiJDOlxcbXlkZXZcXHBvcnRmb2xpbzIwMjBcXHNyY1xcY29tcG9uZW50c1xcTmF2TW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IExpbmsgYXMgU2NMaW5rLCBEaXJlY3RMaW5rLCBFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxTcHksIHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuXG5cblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIG9wZW46IHsgdG9wOiAwLCByaWdodDogMCwgcG9zaXRpb246IFwiZml4ZWRcIiwgekluZGV4OiAxMDAwMCwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvcGFjaXR5OiAxLCB4OiAwIH0sXG4gIGNsb3NlZDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBwb3NpdGlvbjogXCJmaXhlZFwiLCB6SW5kZXg6IDEwMDAwLCB3aWR0aDogMCwgaGVpZ2h0OiBcIjEwMCVcIiwgb3BhY2l0eTogMSwgeDogXCIxMDAlXCIgfSxcbn1cblxuY29uc3QgY2ljbGVCZyA9IHtcbiAgY2xvc2VkOiB7XCJ3aWR0aFwiOlwiMjBcIixcImhlaWdodFwiOlwiMjBcIixcInRyYW5zZm9ybU9yZ2luXCI6XCIwIGNlbnRlclwiLCBcInJpZ2h0XCI6XCItNTAlXCIsXCJ0b3BcIjpcIi01MCVcIn0sXG4gIG9wZW46e1wid2lkdGhcIjpcIjUwMHZ3XCIsXCJoZWlnaHRcIjpcIjUwMHZ3XCIsXCJ0cmFuc2Zvcm1PcmdpblwiOlwiMCBjZW50ZXJcIiwgXCJyaWdodFwiOlwiLTUwJVwiLFwidG9wXCI6XCItNTAlXCJ9XG59XG5cbmxldCBuYXZMaW5rcyA9IFtcbiAgeyB0aXRsZTogJ2hvbWUnIH0sXG4gIHsgdGl0bGU6ICdwcm9qZWN0cycgfSxcbiAgeyB0aXRsZTogJ2Fib3V0JyB9LFxuICB7IHRpdGxlOiAnY29udGFjdCcgfVxuXVxuY29uc3QgY29udGFpbmVyID0ge1xuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCB9LFxuICBvcGVuOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC4xLFxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjFcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaXRlbSA9IHtcbiAgb3BlbjogeyBvcGFjaXR5OiAxLCB4OiAwIH0sXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB4OiBcIi01MCVcIiB9XG59XG5cbmNvbnN0IFBhdGggPSBwcm9wcyA9PiAoXG4gIDxtb3Rpb24ucGF0aFxuICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgc3Ryb2tlV2lkdGg9XCIzXCJcbiAgICBzdHJva2U9XCIjZmZmXCJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOYXZNb3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cblxuICAgICAgPExpbmsgaHJlZj1cIi9cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcFwiPlxuICAgICAgICAgIHsvKiAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJsb2dvXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1ODIgNTczXCI+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTkxLTAuNGg4OS4xbDExMS40LDI5MC41TDQwMy45LTAuNGg4OWw4MC42LDQxNi42aC04OC40bC01MS41LTI2My4xTDMzMS41LDQxNi4yaC04MC42TDE0OS44LDE1My4xTDk3LDQxNi4ySDcuOEw5MS0wLjR6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9XCIjZmZmXCIgY3g9XCIxODkuN1wiIGN5PVwiNTMyLjdcIiByPVwiNDAuMlwiIC8+XG4gICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD1cIiNmZmZcIiBjeD1cIjM5NS41XCIgY3k9XCI1MzIuN1wiIHI9XCI0MC4yXCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3Bhbj5NYXJjdXMgSGFsbDwvc3Bhbj4gKi99XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1zd2l0Y2hhXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhci1ob21lLWxpbmsgYm90dG9tLWltZ1wiIHNyYz1cIi4uL3N0YXRpYy9tZS1jcm9wLWFsdC5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyLWhvbWUtbGluayB0b3AtaW1nXCIgc3JjPVwiLi4vc3RhdGljL21lLWNyb3AucG5nXCI+PC9pbWc+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxtb3Rpb24uc3ZnIGNsYXNzTmFtZT1cImNvbnRlbnQtc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIiB2YXJpYW50cz17Y2ljbGVCZ30gIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDF9fVxuICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9XCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIgY3g9XCIxMDBcIiBjeT1cIjEwMFwiIHI9XCIxMDBcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLnN2Zz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG4gICAgICAgICAgPFBhdGggYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBjbG9zZWQ6IHsgZDogXCJNIDIgMi41IEwgMjAgMi41XCIgfSxcbiAgICAgICAgICAgICAgb3BlbjogeyBkOiBcIk0gMyAxNi41IEwgMTcgMi41XCIgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYXRoXG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBkPVwiTSAyIDkuNDIzIEwgMjAgOS40MjNcIlxuICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBjbG9zZWQ6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgICBvcGVuOiB7IG9wYWNpdHk6IDAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhdGhcbiAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgY2xvc2VkOiB7IGQ6IFwiTSAyIDE2LjM0NiBMIDIwIDE2LjM0NlwiIH0sXG4gICAgICAgICAgICAgIG9wZW46IHsgZDogXCJNIDMgMi41IEwgMTcgMTYuMzQ2XCIgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdGlvbi1uYXYgbmF2LXdyYXBcIj5cbiAgICAgIFxuICAgICAgPG1vdGlvbi5uYXZcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIGNsYXNzTmFtZT1cIm5hdlwiXG4gICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIlxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41fX1cbiAgICA+XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiB2YXJpYW50cz17Y29udGFpbmVyfSBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0+XG5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5sZW5ndGggPiAxICYmIG5hdkxpbmtzLm1hcChuYXZMaW5rID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibmF2LWxpbmstd3JhcFwiIHZhcmlhbnRzPXtpdGVtfSBrZXk9e25hdkxpbmsudGl0bGV9IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX0+XG4gICAgICAgICAgICAgICAgPFNjTGluayBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9IGNsYXNzTmFtZT1cIm5hdl9fbGlua1wiIHRvPXtuYXZMaW5rLnRpdGxlfSBzcHkgc21vb3RoIHRvPXtuYXZMaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtuYXZMaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvU2NMaW5rPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXYgPlxuXG5cblxuICAgICAgICAgICAgKSl9XG5cblxuXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5uYXY+XG4gXG5cbiAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAubG9nby13cmFwIHtcbiAgICAgICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICAgICAgbGVmdDogMS41cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1zd2l0Y2hhIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1zd2l0Y2hhIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9wLWltZy5pbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm90dG9tLWltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nby13cmFwOmhvdmVyIC50b3AtaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28td3JhcDpob3ZlciAuaW1nLXN3aXRjaGEge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1uYXYtbGlua3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saW5rLXdyYXAge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlua3MgYSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItbmF2LWxpbmtzKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgdG9wOiAxLjVyZW07XG4gICAgICAgICAgICByaWdodDogMS41cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFtYnVyZ2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudC1saWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5oYW1idXJnZXIgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhhbWJ1cmdlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5oYW1idXJnZXIgc3ZnLm1lbnUtLW9wZW4gcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgICAuaGFtYnVyZ2VyIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYW1idXJnZXIgc3ZnLm1lbnUtLW9wZW4gcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdmF0YXItaG9tZS1saW5rIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1zdmcge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRvcDogLTEwMCU7XG4gICAgICAgICAgICByaWdodDogLTEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdk1vdGlvbjtcbiJdfQ== */\n/*@ sourceURL=C:\\\\mydev\\\\portfolio2020\\\\src\\\\components\\\\NavMotion.js */"));
};
/* harmony default export */ __webpack_exports__["default"] = (NavMotion);

/***/ })

})
//# sourceMappingURL=_app.js.2192e61d79868012658e.hot-update.js.map