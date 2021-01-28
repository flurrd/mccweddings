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
    "width": "30",
    "height": "30"
  },
  open: {
    "width": "200vw",
    "height": "200vw"
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
    className: "jsx-239414056",
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
    className: "jsx-239414056" + " " + "logo-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-239414056" + " " + "img-switcha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("img", {
    src: "../static/me-crop-alt.png",
    className: "jsx-239414056" + " " + "avatar-home-link bottom-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("img", {
    src: "../static/me-crop.png",
    className: "jsx-239414056" + " " + "avatar-home-link top-img",
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
    className: "jsx-239414056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "jsx-239414056" + " " + "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    className: "jsx-239414056",
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
    className: "jsx-239414056" + " " + "motion-nav nav-wrap",
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
    id: "239414056",
    __self: this
  }, ".logo-wrap{top:1.5rem;left:1.5rem;position:fixed;z-index:100000;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.img-switcha{width:80px;height:80px;position:relative;border-radius:50%;border:2px solid white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all 0.6s;transition:all 0.6s;}.img-switcha img{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.6s;transition:all 0.6s;}.top-img.img{opacity:1;}.bottom-img{opacity:1;mix-blend-mode:screen;}.logo-wrap:hover .top-img{opacity:0;}.logo-wrap:hover .img-switcha{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-color:var(--theme-color-accent);background:var(--theme-color-accent);}.nav{position:fixed;color:var(--theme-color-nav-links);color:white;}.nav-link-wrap{cursor:pointer;}.nav-links a{color:var(--theme-color-white);font-size:30px;display:block;margin:1.5em;text-transform:uppercase;}.nav-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;}.hamburger{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100000;cursor:pointer;height:50px;width:50px;background:var(--theme-color-accent);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hamburger:hover{background:var(--theme-color-accent-light);}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.avatar-home-link{width:80px;}.content-svg{position:fixed;border:none;outline:none;color:white;z-index:100;cursor:pointer;top:-100%;right:-100%;}.content-svg circle{fill:var(--theme-color-accent);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxccG9ydGZvbGlvMjAyMFxcc3JjXFxjb21wb25lbnRzXFxOYXZNb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0tTLEFBR3dCLEFBV0EsQUFVQSxBQVNELEFBSUEsQUFLQSxBQUlXLEFBTU4sQUFPQSxBQUlnQixBQVFsQixBQVNGLEFBa0JnQyxBQUtoQyxBQUlELEFBR0EsQUFJQyxBQUlELEFBR0EsQUFJQyxBQUdJLEFBWWdCLFVBMUdqQyxBQUl3QixBQUt4QixBQWlFRixBQUdBLEFBUUUsQUFHQSxDQXRIYyxBQVdBLEFBVUEsQUF3REMsQUF1QkMsQUFXQSxBQVdoQixJQXpFcUMsQUFPckMsQUFxRWMsUUE1SEcsQUFXRyxBQVVBLENBd0RILENBdUJuQixBQVdFLEVBY2UsSUFsRUUsQUE2RWpCLENBdEdBLE1BakNpQixDQTZFSCxDQWdEQSxDQWxITSxBQVVaLEVBd0VWLEdBbENrQixDQXJDUCxHQTJCSyxDQTZCQyxDQWdERCxDQTdIQSxDQXNCUSxLQVhHLENBZ0RWLEVBVmYsRUE2QmMsQUFnREcsQ0E3SEYsUUEyRFksQ0FLRixDQXpCZ0IsQ0F1Q3hCLEdBZ0RMLEdBbkhTLE9Bb0hQLEVBaERHLE9BbkJqQixHQW9FQSxDQTFHQSxJQTBEYyxRQXhDeUIsSUF5QzFCLFdBQzBCLFVBakZsQixZQVdDLEFBNkJ0QixlQTBDb0IsT0FsQkMsV0FtQk4sZUF2RWYsaUNBWGlCLGVBQ2pCLFdBa0Z5QixRQW5CRCw4RUFDWCxXQUNDLEVBa0JPLFVBakJyQixtRkFrQkYiLCJmaWxlIjoiQzpcXG15ZGV2XFxwb3J0Zm9saW8yMDIwXFxzcmNcXGNvbXBvbmVudHNcXE5hdk1vdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFNjTGluaywgRGlyZWN0TGluaywgRWxlbWVudCwgRXZlbnRzLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCwgc2Nyb2xsU3B5LCBzY3JvbGxlciB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcblxuXG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBvcGVuOiB7IHRvcDogMCwgcmlnaHQ6IDAsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHpJbmRleDogMTAwMDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb3BhY2l0eTogMSwgeDogMCB9LFxuICBjbG9zZWQ6IHsgdG9wOiAwLCByaWdodDogMCwgcG9zaXRpb246IFwiZml4ZWRcIiwgekluZGV4OiAxMDAwMCwgd2lkdGg6IDAsIGhlaWdodDogXCIxMDAlXCIsIG9wYWNpdHk6IDEsIHg6IFwiMTAwJVwiIH0sXG59XG5cbmNvbnN0IGNpY2xlQmcgPSB7XG4gIGNsb3NlZDoge1wid2lkdGhcIjpcIjMwXCIsXCJoZWlnaHRcIjpcIjMwXCJ9LFxuICBvcGVuOntcIndpZHRoXCI6XCIyMDB2d1wiLFwiaGVpZ2h0XCI6XCIyMDB2d1wifVxufVxuXG5sZXQgbmF2TGlua3MgPSBbXG4gIHsgdGl0bGU6ICdob21lJyB9LFxuICB7IHRpdGxlOiAncHJvamVjdHMnIH0sXG4gIHsgdGl0bGU6ICdhYm91dCcgfSxcbiAgeyB0aXRsZTogJ2NvbnRhY3QnIH1cbl1cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAgfSxcbiAgb3Blbjoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuMSxcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGl0ZW0gPSB7XG4gIG9wZW46IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeDogXCItNTAlXCIgfVxufVxuXG5jb25zdCBQYXRoID0gcHJvcHMgPT4gKFxuICA8bW90aW9uLnBhdGhcbiAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTmF2TW90aW9uID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBcIj5cbiAgICAgICAgICB7LyogICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibG9nb1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTgyIDU3M1wiPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk05MS0wLjRoODkuMWwxMTEuNCwyOTAuNUw0MDMuOS0wLjRoODlsODAuNiw0MTYuNmgtODguNGwtNTEuNS0yNjMuMUwzMzEuNSw0MTYuMmgtODAuNkwxNDkuOCwxNTMuMUw5Nyw0MTYuMkg3LjhMOTEtMC40elwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwiI2ZmZlwiIGN4PVwiMTg5LjdcIiBjeT1cIjUzMi43XCIgcj1cIjQwLjJcIiAvPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9XCIjZmZmXCIgY3g9XCIzOTUuNVwiIGN5PVwiNTMyLjdcIiByPVwiNDAuMlwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4+TWFyY3VzIEhhbGw8L3NwYW4+ICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctc3dpdGNoYVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXItaG9tZS1saW5rIGJvdHRvbS1pbWdcIiBzcmM9XCIuLi9zdGF0aWMvbWUtY3JvcC1hbHQucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhci1ob21lLWxpbmsgdG9wLWltZ1wiIHNyYz1cIi4uL3N0YXRpYy9tZS1jcm9wLnBuZ1wiPjwvaW1nPlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8L0xpbms+XG4gICAgICA8bW90aW9uLnN2ZyBjbGFzc05hbWU9XCJjb250ZW50LXN2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCIgdmFyaWFudHM9e2NpY2xlQmd9ICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxfX1cbiAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwicmdiYSgyNTUsMjU1LDI1NSwxKVwiIGN4PVwiMTAwXCIgY3k9XCIxMDBcIiByPVwiMTAwXCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5zdmc+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgICAgIDxQYXRoIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgY2xvc2VkOiB7IGQ6IFwiTSAyIDIuNSBMIDIwIDIuNVwiIH0sXG4gICAgICAgICAgICAgIG9wZW46IHsgZDogXCJNIDMgMTYuNSBMIDE3IDIuNVwiIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGF0aFxuICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgZD1cIk0gMiA5LjQyMyBMIDIwIDkuNDIzXCJcbiAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgY2xvc2VkOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgICAgb3BlbjogeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjEgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYXRoXG4gICAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIGNsb3NlZDogeyBkOiBcIk0gMiAxNi4zNDYgTCAyMCAxNi4zNDZcIiB9LFxuICAgICAgICAgICAgICBvcGVuOiB7IGQ6IFwiTSAzIDIuNSBMIDE3IDE2LjM0NlwiIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3Rpb24tbmF2IG5hdi13cmFwXCI+XG4gICAgICBcbiAgICAgIDxtb3Rpb24ubmF2XG4gICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICBjbGFzc05hbWU9XCJuYXZcIlxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICBhcmlhLWxhYmVsPVwibWFpbiBuYXZpZ2F0aW9uXCJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNX19XG4gICAgPlxuICAgICBcbiAgICAgICAgXG4gICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCIgdmFyaWFudHM9e2NvbnRhaW5lcn0gaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9PlxuXG4gICAgICAgICAgICB7bmF2TGlua3MubGVuZ3RoID4gMSAmJiBuYXZMaW5rcy5tYXAobmF2TGluayA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rLXdyYXBcIiB2YXJpYW50cz17aXRlbX0ga2V5PXtuYXZMaW5rLnRpdGxlfSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19PlxuICAgICAgICAgICAgICAgIDxTY0xpbmsgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfSBjbGFzc05hbWU9XCJuYXZfX2xpbmtcIiB0bz17bmF2TGluay50aXRsZX0gc3B5IHNtb290aCB0bz17bmF2TGluay50aXRsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bmF2TGluay50aXRsZX1cbiAgICAgICAgICAgICAgICA8L1NjTGluaz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2ID5cblxuXG5cbiAgICAgICAgICAgICkpfVxuXG5cblxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24ubmF2PlxuIFxuXG4gICAgICA8L2Rpdj5cblxuXG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmxvZ28td3JhcCB7XG4gICAgICAgICAgICB0b3A6IDEuNXJlbTtcbiAgICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWctc3dpdGNoYSB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWctc3dpdGNoYSBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvcC1pbWcuaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJvdHRvbS1pbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28td3JhcDpob3ZlciAudG9wLWltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLXdyYXA6aG92ZXIgLmltZy1zd2l0Y2hhIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItbmF2LWxpbmtzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGluay13cmFwIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpbmtzIGEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgdG9wOiAxLjVyZW07XG4gICAgICAgICAgICByaWdodDogMS41cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFtYnVyZ2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudC1saWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5oYW1idXJnZXIgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhhbWJ1cmdlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5oYW1idXJnZXIgc3ZnLm1lbnUtLW9wZW4gcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgICAuaGFtYnVyZ2VyIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYW1idXJnZXIgc3ZnLm1lbnUtLW9wZW4gcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdmF0YXItaG9tZS1saW5rIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1zdmcge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRvcDogLTEwMCU7XG4gICAgICAgICAgICByaWdodDogLTEwMCU7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAuY29udGVudC1zdmcgY2lyY2xlIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdk1vdGlvbjtcbiJdfQ== */\n/*@ sourceURL=C:\\\\mydev\\\\portfolio2020\\\\src\\\\components\\\\NavMotion.js */"));
};
/* harmony default export */ __webpack_exports__["default"] = (NavMotion);

/***/ })

})
//# sourceMappingURL=_app.js.ada8bd3b20fb69b47b5d.hot-update.js.map