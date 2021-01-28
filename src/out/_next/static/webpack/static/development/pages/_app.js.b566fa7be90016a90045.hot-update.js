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
    className: "jsx-1733471361",
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
    className: "jsx-1733471361" + " " + "logo-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1733471361" + " " + "img-switcha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: "../static/me-crop-alt.png",
    className: "jsx-1733471361" + " " + "avatar-home-link bottom-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("img", {
    src: "../static/me-crop.png",
    className: "jsx-1733471361" + " " + "avatar-home-link top-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))), __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "jsx-1733471361" + " " + "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    className: "jsx-1733471361",
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
    className: "jsx-1733471361" + " " + "motion-nav nav-wrap",
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
    className: "jsx-1733471361",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1733471361",
    __self: this
  }, ".logo-wrap{top:1.5rem;left:1.5rem;position:fixed;z-index:100000;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.img-switcha{width:80px;height:80px;position:relative;border-radius:50%;border:2px solid white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all 0.6s;transition:all 0.6s;}.img-switcha img{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.6s;transition:all 0.6s;}.top-img.img{opacity:1;}.bottom-img{opacity:1;mix-blend-mode:screen;}.logo-wrap:hover .top-img{opacity:0;}.logo-wrap:hover .img-switcha{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-color:var(--theme-color-accent);background:var(--theme-color-accent);}.nav{position:fixed;color:var(--theme-color-nav-links);background:var(--theme-color-nav-background);color:white;}.nav-link-wrap{cursor:pointer;}.nav-links a{color:var(--theme-color-nav-links);font-size:30px;display:block;margin:1.5em;text-transform:uppercase;}.nav-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;}.hamburger{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100000;cursor:pointer;height:50px;width:50px;background:var(--theme-color-accent);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hamburger:hover{background:var(--theme-color-accent-light);}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.hamburger svg{width:15px;line-height:0;}.hamburger svg path{fill:#fff;}.hamburger svg.menu--open path{fill:#fff;}.avatar-home-link{width:80px;}.content-svg{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100;cursor:pointer;height:50px;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxccG9ydGZvbGlvMjAyMFxcc3JjXFxjb21wb25lbnRzXFxOYXZNb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUpTLEFBR3dCLEFBV0EsQUFVQSxBQVNELEFBSUEsQUFLQSxBQUlXLEFBTU4sQUFPQSxBQUlvQixBQVF0QixBQVNGLEFBa0JnQyxBQUtoQyxBQUlELEFBR0EsQUFJQyxBQUlELEFBR0EsQUFJQyxBQUdBLFVBOUZiLEFBSXdCLEFBS3hCLEFBaUVGLEFBR0EsQUFRRSxBQUdBLENBdEhjLEFBV0EsQUFVQSxBQXdEQyxBQXVCQyxBQVdBLEFBV2hCLEFBR2UsSUE1RXNCLEFBT3JDLFFBdkRpQixBQVdHLEFBVUEsQ0F3REgsQUFnREEsQ0F6Qm5CLEFBV0UsT0E3RUEsR0F5QmlCLEdBMURBLENBNkVILEFBZ0RBLEVBbEhNLEFBVVosRUF3RVYsSUF2RVcsR0EwQnNDLEFBVy9CLENBbUJELEFBZ0RBLEVBN0hELENBc0JRLEtBWEcsS0FnRFYsQUFtQkQsQUFnREEsQ0E3SEMsU0FnRVUsQ0F6QmdCLENBdUN4QixBQWdESCxDQW5FYSxLQWhETixNQW9ISixHQWhEQSxJQWhDSCxPQXpCZCxBQXNDQSxDQW9FYyxHQWhEQSxDQWhDZCxPQVJ1QyxDQXlGMUIsR0FoREEsUUFpRGIsR0FoRHVDLFVBakZsQixZQVdDLEFBNkJ0QixlQTBDb0IsT0FsQkMsV0FtQk4sZUF2RWYsaUNBWGlCLGVBQ2pCLFdBa0Z5QixRQW5CRCw4RUFDWCxXQUNDLEVBa0JPLFVBakJyQixtRkFrQkYiLCJmaWxlIjoiQzpcXG15ZGV2XFxwb3J0Zm9saW8yMDIwXFxzcmNcXGNvbXBvbmVudHNcXE5hdk1vdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFNjTGluaywgRGlyZWN0TGluaywgRWxlbWVudCwgRXZlbnRzLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCwgc2Nyb2xsU3B5LCBzY3JvbGxlciB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcbmNvbnN0IHZhcmlhbnRzID0ge1xuICBvcGVuOiB7IHRvcDogMCwgcmlnaHQ6IDAsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHpJbmRleDogMTAwMDAsIHdpZHRoOiBcIjMyMHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgY2xvc2VkOiB7IHRvcDogMCwgcmlnaHQ6IDAsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHpJbmRleDogMTAwMDAsIHdpZHRoOiAwLCBoZWlnaHQ6IFwiMTAwJVwiLCBvcGFjaXR5OiAxLCB4OiBcIjEwMCVcIiB9LFxufVxubGV0IG5hdkxpbmtzID0gW1xuICB7IHRpdGxlOiAnaG9tZScgfSxcbiAgeyB0aXRsZTogJ3Byb2plY3RzJyB9LFxuICB7IHRpdGxlOiAnYWJvdXQnIH0sXG4gIHsgdGl0bGU6ICdjb250YWN0JyB9XG5dXG5jb25zdCBjb250YWluZXIgPSB7XG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwIH0sXG4gIG9wZW46IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiAwLjEsXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBpdGVtID0ge1xuICBvcGVuOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHg6IFwiLTUwJVwiIH1cbn1cblxuY29uc3QgUGF0aCA9IHByb3BzID0+IChcbiAgPG1vdGlvbi5wYXRoXG4gICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgIHN0cm9rZT1cIiNmZmZcIlxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5hdk1vdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuXG4gICAgICA8TGluayBocmVmPVwiL1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwXCI+XG4gICAgICAgICAgey8qICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImxvZ29cIiB4PVwiMHB4XCIgeT1cIjBweFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU4MiA1NzNcIj5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNOTEtMC40aDg5LjFsMTExLjQsMjkwLjVMNDAzLjktMC40aDg5bDgwLjYsNDE2LjZoLTg4LjRsLTUxLjUtMjYzLjFMMzMxLjUsNDE2LjJoLTgwLjZMMTQ5LjgsMTUzLjFMOTcsNDE2LjJINy44TDkxLTAuNHpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD1cIiNmZmZcIiBjeD1cIjE4OS43XCIgY3k9XCI1MzIuN1wiIHI9XCI0MC4yXCIgLz5cbiAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwiI2ZmZlwiIGN4PVwiMzk1LjVcIiBjeT1cIjUzMi43XCIgcj1cIjQwLjJcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuPk1hcmN1cyBIYWxsPC9zcGFuPiAqL31cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXN3aXRjaGFcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyLWhvbWUtbGluayBib3R0b20taW1nXCIgc3JjPVwiLi4vc3RhdGljL21lLWNyb3AtYWx0LnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXItaG9tZS1saW5rIHRvcC1pbWdcIiBzcmM9XCIuLi9zdGF0aWMvbWUtY3JvcC5wbmdcIj48L2ltZz5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgICAgIDxQYXRoIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgY2xvc2VkOiB7IGQ6IFwiTSAyIDIuNSBMIDIwIDIuNVwiIH0sXG4gICAgICAgICAgICAgIG9wZW46IHsgZDogXCJNIDMgMTYuNSBMIDE3IDIuNVwiIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGF0aFxuICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgZD1cIk0gMiA5LjQyMyBMIDIwIDkuNDIzXCJcbiAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgY2xvc2VkOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgICAgb3BlbjogeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjEgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYXRoXG4gICAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIGNsb3NlZDogeyBkOiBcIk0gMiAxNi4zNDYgTCAyMCAxNi4zNDZcIiB9LFxuICAgICAgICAgICAgICBvcGVuOiB7IGQ6IFwiTSAzIDIuNSBMIDE3IDE2LjM0NlwiIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3Rpb24tbmF2IG5hdi13cmFwXCI+XG4gICAgICB7aXNPcGVuICYmICAgICAgIFxuICAgICAgPG1vdGlvbi5uYXZcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIGNsYXNzTmFtZT1cIm5hdlwiXG4gICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIlxuICAgID5cbiAgICAgXG4gICAgICAgIFxuICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiIHZhcmlhbnRzPXtjb250YWluZXJ9IGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifT5cblxuICAgICAgICAgICAge25hdkxpbmtzLmxlbmd0aCA+IDEgJiYgbmF2TGlua3MubWFwKG5hdkxpbmsgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJuYXYtbGluay13cmFwXCIgdmFyaWFudHM9e2l0ZW19IGtleT17bmF2TGluay50aXRsZX0gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fT5cbiAgICAgICAgICAgICAgICA8U2NMaW5rIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0gY2xhc3NOYW1lPVwibmF2X19saW5rXCIgdG89e25hdkxpbmsudGl0bGV9IHNweSBzbW9vdGggdG89e25hdkxpbmsudGl0bGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge25hdkxpbmsudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9TY0xpbms+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdiA+XG5cblxuXG4gICAgICAgICAgICApKX1cblxuXG5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLm5hdj5cbiB9XG4gICAgICAgIDxtb3Rpb24uc3ZnIGNsYXNzTmFtZT1cImNvbnRlbnQtc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgICAgIGluaXRpYWw9e3t3aWR0aDogXCI1MFwiLCBvcGFjaXR5OjB9fVxuICAgICAgICAgIGFuaW1hdGU9e3t3aWR0aDogXCIxMDAwXCIsIG9wYWNpdHk6IDF9fVxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDAgMjAwXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD1cInJnYmEoMjAwLDIwMCwwLDEpXCIgY3g9XCIxMDBcIiBjeT1cIjEwMFwiIHI9XCIxMDBcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLnN2Zz5cblxuXG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5sb2dvLXdyYXAge1xuICAgICAgICAgICAgdG9wOiAxLjVyZW07XG4gICAgICAgICAgICBsZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1nLXN3aXRjaGEge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1nLXN3aXRjaGEgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b3AtaW1nLmltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ib3R0b20taW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLXdyYXA6aG92ZXIgLnRvcC1pbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nby13cmFwOmhvdmVyIC5pbWctc3dpdGNoYSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLW5hdi1saW5rcyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvci1uYXYtYmFja2dyb3VuZCk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saW5rLXdyYXAge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlua3MgYSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItbmF2LWxpbmtzKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgdG9wOiAxLjVyZW07XG4gICAgICAgICAgICByaWdodDogMS41cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3ItYWNjZW50KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFtYnVyZ2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWNvbG9yLWFjY2VudC1saWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5oYW1idXJnZXIgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhhbWJ1cmdlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5oYW1idXJnZXIgc3ZnLm1lbnUtLW9wZW4gcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgICAuaGFtYnVyZ2VyIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFtYnVyZ2VyIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYW1idXJnZXIgc3ZnLm1lbnUtLW9wZW4gcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdmF0YXItaG9tZS1saW5rIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1zdmcge1xuICAgICAgICAgICAgdG9wOiAxLjVyZW07XG4gICAgICAgICAgICByaWdodDogMS41cmVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZNb3Rpb247XG4iXX0= */\n/*@ sourceURL=C:\\\\mydev\\\\portfolio2020\\\\src\\\\components\\\\NavMotion.js */"));
};
/* harmony default export */ __webpack_exports__["default"] = (NavMotion);

/***/ })

})
//# sourceMappingURL=_app.js.b566fa7be90016a90045.hot-update.js.map