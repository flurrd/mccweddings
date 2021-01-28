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
var cicleBg = {
  closed: {
    "top": "0",
    "right": "0",
    "width": "0",
    "height": "0",
    "transformOrgin": "0 center"
  },
  open: {
    "top": "0",
    "right": "0",
    "width": "200vw",
    "height": "200vw",
    "transformOrgin": "0 center"
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
    className: "jsx-2697495533",
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
    className: "jsx-2697495533" + " " + "logo-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2697495533" + " " + "img-switcha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("img", {
    src: "../static/me-crop-alt.png",
    className: "jsx-2697495533" + " " + "avatar-home-link bottom-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("img", {
    src: "../static/me-crop.png",
    className: "jsx-2697495533" + " " + "avatar-home-link top-img",
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
      duration: 0.5
    },
    animate: isOpen ? "open" : "closed",
    viewBox: "0 0 200 200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("circle", {
    fill: "rgba(200,200,0,1)",
    cx: "100",
    cy: "100",
    r: "100",
    className: "jsx-2697495533",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "jsx-2697495533" + " " + "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    className: "jsx-2697495533",
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
    className: "jsx-2697495533" + " " + "motion-nav nav-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
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
      lineNumber: 132
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
        lineNumber: 136
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
      lineNumber: 138
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), navLink.title));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2697495533",
    __self: this
  }, ".logo-wrap{top:1.5rem;left:1.5rem;position:fixed;z-index:100000;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.img-switcha{width:80px;height:80px;position:relative;border-radius:50%;border:2px solid white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all 0.6s;transition:all 0.6s;}.img-switcha img{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.6s;transition:all 0.6s;}.top-img.img{opacity:1;}.bottom-img{opacity:1;mix-blend-mode:screen;}.logo-wrap:hover .top-img{opacity:0;}.logo-wrap:hover .img-switcha{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-color:var(--theme-color-accent);background:var(--theme-color-accent);}.nav{position:fixed;color:var(--theme-color-nav-links);background:var(--theme-color-nav-background);color:white;}.nav-link-wrap{cursor:pointer;}.nav-links a{color:var(--theme-color-nav-links);font-size:30px;display:block;margin:1.5em;text-transform:uppercase;}.nav-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;}.hamburger{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100000;cursor:pointer;height:50px;width:50px;background:var(--theme-color-accent);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hamburger:hover{background:var(--theme-color-accent-light);}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.avatar-home-link{width:80px;}.content-svg{position:fixed;border:none;outline:none;color:white;z-index:100;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxccG9ydGZvbGlvMjAyMFxcc3JjXFxjb21wb25lbnRzXFxOYXZNb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0tTLEFBR3dCLEFBV0EsQUFVQSxBQVNELEFBSUEsQUFLQSxBQUlXLEFBTU4sQUFPQSxBQUlvQixBQVF0QixBQVNGLEFBa0JnQyxBQUtoQyxBQUlELEFBR0EsQUFJQyxBQUlELEFBR0EsQUFJQyxBQUdJLFVBOUZqQixBQUl3QixBQUt4QixBQWlFRixBQUdBLEFBUUUsQUFHQSxDQXRIYyxBQVdBLEFBVUEsQUF3REMsQUF1QkMsQUFXQSxBQVdoQixJQXpFcUMsQUFPckMsQUFxRWMsUUE1SEcsQUFXRyxBQVVBLENBd0RILENBdUJuQixBQVdFLEVBY2UsS0EzRmYsR0F5QmlCLEdBMURBLENBNkVILENBZ0RBLENBbEhNLEFBVVosRUF3RVYsSUF2RVcsR0EwQnNDLEFBVy9CLENBbUJELENBZ0RELENBN0hBLENBc0JRLEtBWEcsS0FnRFYsQUFtQkQsQUFnREcsQ0E3SEYsU0FnRVUsQ0F6QmdCLENBdUN4QixDQW5CVSxFQW1FM0IsR0FuSHFCLFNBb0VKLElBaENILE9BekJkLEFBc0NBLElBb0JjLENBaENkLE9BUnVDLElBeUMxQixXQUMwQixVQWpGbEIsWUFXQyxBQTZCdEIsZUEwQ29CLE9BbEJDLFdBbUJOLGVBdkVmLGlDQVhpQixlQUNqQixXQWtGeUIsUUFuQkQsOEVBQ1gsV0FDQyxFQWtCTyxVQWpCckIsbUZBa0JGIiwiZmlsZSI6IkM6XFxteWRldlxccG9ydGZvbGlvMjAyMFxcc3JjXFxjb21wb25lbnRzXFxOYXZNb3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTGluayBhcyBTY0xpbmssIERpcmVjdExpbmssIEVsZW1lbnQsIEV2ZW50cywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsIHNjcm9sbFNweSwgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5cblxuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgb3BlbjogeyB0b3A6IDAsIHJpZ2h0OiAwLCBwb3NpdGlvbjogXCJmaXhlZFwiLCB6SW5kZXg6IDEwMDAwLCB3aWR0aDogXCIzMjBweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvcGFjaXR5OiAxLCB4OiAwIH0sXG4gIGNsb3NlZDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBwb3NpdGlvbjogXCJmaXhlZFwiLCB6SW5kZXg6IDEwMDAwLCB3aWR0aDogMCwgaGVpZ2h0OiBcIjEwMCVcIiwgb3BhY2l0eTogMSwgeDogXCIxMDAlXCIgfSxcbn1cblxuY29uc3QgY2ljbGVCZyA9IHtcbiAgY2xvc2VkOiB7XCJ0b3BcIjpcIjBcIixcInJpZ2h0XCI6XCIwXCIsXCJ3aWR0aFwiOlwiMFwiLFwiaGVpZ2h0XCI6XCIwXCIsXCJ0cmFuc2Zvcm1PcmdpblwiOlwiMCBjZW50ZXJcIn0sXG4gIG9wZW46e1widG9wXCI6XCIwXCIsXCJyaWdodFwiOlwiMFwiLFwid2lkdGhcIjpcIjIwMHZ3XCIsXCJoZWlnaHRcIjpcIjIwMHZ3XCIsXCJ0cmFuc2Zvcm1PcmdpblwiOlwiMCBjZW50ZXJcIn1cbn1cblxubGV0IG5hdkxpbmtzID0gW1xuICB7IHRpdGxlOiAnaG9tZScgfSxcbiAgeyB0aXRsZTogJ3Byb2plY3RzJyB9LFxuICB7IHRpdGxlOiAnYWJvdXQnIH0sXG4gIHsgdGl0bGU6ICdjb250YWN0JyB9XG5dXG5jb25zdCBjb250YWluZXIgPSB7XG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwIH0sXG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiAwLjEsXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBpdGVtID0ge1xuICBvcGVuOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHg6IFwiLTUwJVwiIH1cbn1cblxuY29uc3QgUGF0aCA9IHByb3BzID0+IChcbiAgPG1vdGlvbi5wYXRoXG4gICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgIHN0cm9rZT1cIiNmZmZcIlxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5hdk1vdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuXG4gICAgICA8TGluayBocmVmPVwiL1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwXCI+XG4gICAgICAgICAgey8qICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImxvZ29cIiB4PVwiMHB4XCIgeT1cIjBweFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU4MiA1NzNcIj5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNOTEtMC40aDg5LjFsMTExLjQsMjkwLjVMNDAzLjktMC40aDg5bDgwLjYsNDE2LjZoLTg4LjRsLTUxLjUtMjYzLjFMMzMxLjUsNDE2LjJoLTgwLjZMMTQ5LjgsMTUzLjFMOTcsNDE2LjJINy44TDkxLTAuNHpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD1cIiNmZmZcIiBjeD1cIjE4OS43XCIgY3k9XCI1MzIuN1wiIHI9XCI0MC4yXCIgLz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwiI2ZmZlwiIGN4PVwiMzk1LjVcIiBjeT1cIjUzMi43XCIgcj1cIjQwLjJcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuPk1hcmN1cyBIYWxsPC9zcGFuPiAqL31cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXN3aXRjaGFcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyLWhvbWUtbGluayBib3R0b20taW1nXCIgc3JjPVwiLi4vc3RhdGljL21lLWNyb3AtYWx0LnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXItaG9tZS1saW5rIHRvcC1pbWdcIiBzcmM9XCIuLi9zdGF0aWMvbWUtY3JvcC5wbmdcIj48L2ltZz5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgPC9MaW5rPlxuICAgICAgPG1vdGlvbi5zdmcgY2xhc3NOYW1lPVwiY29udGVudC1zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiXG4gICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiIHZhcmlhbnRzPXtjaWNsZUJnfSAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41fX1cbiAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwicmdiYSgyMDAsMjAwLDAsMSlcIiBjeD1cIjEwMFwiIGN5PVwiMTAwXCIgcj1cIjEwMFwiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uc3ZnPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cbiAgICAgICAgICA8UGF0aCBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIGNsb3NlZDogeyBkOiBcIk0gMiAyLjUgTCAyMCAyLjVcIiB9LFxuICAgICAgICAgICAgICBvcGVuOiB7IGQ6IFwiTSAzIDE2LjUgTCAxNyAyLjVcIiB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhdGhcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgIGQ9XCJNIDIgOS40MjMgTCAyMCA5LjQyM1wiXG4gICAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIGNsb3NlZDogeyBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICAgIG9wZW46IHsgb3BhY2l0eTogMCB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGF0aFxuICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBjbG9zZWQ6IHsgZDogXCJNIDIgMTYuMzQ2IEwgMjAgMTYuMzQ2XCIgfSxcbiAgICAgICAgICAgICAgb3BlbjogeyBkOiBcIk0gMyAyLjUgTCAxNyAxNi4zNDZcIiB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90aW9uLW5hdiBuYXYtd3JhcFwiPlxuICAgICAge2lzT3BlbiAmJiAgICAgICBcbiAgICAgIDxtb3Rpb24ubmF2XG4gICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICBjbGFzc05hbWU9XCJuYXZcIlxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICBhcmlhLWxhYmVsPVwibWFpbiBuYXZpZ2F0aW9uXCJcbiAgICA+XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIiB2YXJpYW50cz17Y29udGFpbmVyfSBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0+XG5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5sZW5ndGggPiAxICYmIG5hdkxpbmtzLm1hcChuYXZMaW5rID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibmF2LWxpbmstd3JhcFwiIHZhcmlhbnRzPXtpdGVtfSBrZXk9e25hdkxpbmsudGl0bGV9IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX0+XG4gICAgICAgICAgICAgICAgPFNjTGluayBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9IGNsYXNzTmFtZT1cIm5hdl9fbGlua1wiIHRvPXtuYXZMaW5rLnRpdGxlfSBzcHkgc21vb3RoIHRvPXtuYXZMaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtuYXZMaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvU2NMaW5rPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXYgPlxuXG5cblxuICAgICAgICAgICAgKSl9XG5cblxuXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5uYXY+XG4gfVxuXG5cbiAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAubG9nby13cmFwIHtcbiAgICAgICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICAgICAgbGVmdDogMS41cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1zd2l0Y2hhIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1zd2l0Y2hhIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9wLWltZy5pbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm90dG9tLWltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nby13cmFwOmhvdmVyIC50b3AtaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28td3JhcDpob3ZlciAuaW1nLXN3aXRjaGEge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1uYXYtbGlua3MpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItbmF2LWJhY2tncm91bmQpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGluay13cmFwIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpbmtzIGEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLW5hdi1saW5rcyk7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMS41ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIHRvcDogMS41cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhbWJ1cmdlcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci1hY2NlbnQtbGlnaHQpO1xuICAgICAgICB9XG5cblxuICAgICAgICAuaGFtYnVyZ2VyIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5oYW1idXJnZXIgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuaGFtYnVyZ2VyIHN2Zy5tZW51LS1vcGVuIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgICAgLmhhbWJ1cmdlciBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhhbWJ1cmdlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHN2Zy5tZW51LS1vcGVuIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXZhdGFyLWhvbWUtbGluayB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtc3ZnIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdk1vdGlvbjtcbiJdfQ== */\n/*@ sourceURL=C:\\\\mydev\\\\portfolio2020\\\\src\\\\components\\\\NavMotion.js */"));
};
/* harmony default export */ __webpack_exports__["default"] = (NavMotion);

/***/ })

})
//# sourceMappingURL=_app.js.46c37165a3725439188b.hot-update.js.map