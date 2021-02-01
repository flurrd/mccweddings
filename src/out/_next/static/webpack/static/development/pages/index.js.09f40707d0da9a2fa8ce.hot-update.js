webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hook */ "./components/hook.js");
/* harmony import */ var _Flourish__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Flourish */ "./components/Flourish.js");
var _jsxFileName = "C:\\mydev\\mccweddings\\src\\components\\Gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var galleryImages = [{
  source: "../static/1-1.jpg"
}, {
  source: "../static/1-2.jpg"
}, {
  source: "../static/1-3.jpg"
}, {
  source: "../static/1-5.jpg"
}, {
  source: "../static/1-6.jpg"
}, {
  source: "../static/1-8.jpg"
}, {
  source: "../static/1-9.jpg"
}];
var galleryImages1 = [{
  source: "../static/1-1.jpg"
}, {
  source: "../static/1-2.jpg"
}, {
  source: "../static/1-3.jpg"
}, {
  source: "../static/1-5.jpg"
}, {
  source: "../static/1-6.jpg"
}, {
  source: "../static/1-8.jpg"
}, {
  source: "../static/1-9.jpg"
}, {
  source: "../static/2-1.jpg"
}, {
  source: "../static/2-2.jpg"
}];
var galleryImages2 = [{
  source: "../static/3-3.jpg"
}, {
  source: "../static/3-4.jpg"
}, {
  source: "../static/3-5.jpg"
}, {
  source: "../static/3-6.jpg"
}, {
  source: "../static/3-7.jpg"
}, {
  source: "../static/3-8.jpg"
}, {
  source: "../static/3-9.jpg"
}, {
  source: "../static/4-1.jpg"
}, {
  source: "../static/4-2.jpg"
}];
function Gallery(props) {
  var root = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var target = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var rootMargin = "0px";
  return __jsx("article", {
    id: "gallery",
    className: "jsx-2166895960" + " " + "content-section gallery-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2166895960" + " " + "content-max-width content-section-gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2166895960" + " " + "rte gallery ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2166895960" + " " + " text-center ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Testamonials & Gallery"), __jsx("div", {
    className: "jsx-2166895960" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, galleryImages.length > 1 && galleryImages.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-2166895960" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2166895960" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-2166895960",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "jsx-2166895960" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, galleryImages1.length > 1 && galleryImages1.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-2166895960" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2166895960" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-2166895960",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "jsx-2166895960" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, galleryImages2.length > 1 && galleryImages2.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-2166895960" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2166895960" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-2166895960",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2166895960",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRksiLCJmaWxlIjoiQzpcXG15ZGV2XFxtY2N3ZWRkaW5nc1xcc3JjXFxjb21wb25lbnRzXFxHYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tIFwiLi9ob29rXCI7XG5cbmltcG9ydCBGbG91cmlzaCBmcm9tIFwiLi9GbG91cmlzaFwiO1xubGV0IGdhbGxlcnlJbWFnZXMgPSBbXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTEuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtMi5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS0zLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTUuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtNi5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS04LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTkuanBnXCIgfSxcbl07XG5cblxuXG5sZXQgZ2FsbGVyeUltYWdlczEgPSBbXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTEuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtMi5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS0zLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTUuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtNi5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS04LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTkuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzItMS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMi0yLmpwZ1wiIH0sXG5dO1xuXG5sZXQgZ2FsbGVyeUltYWdlczIgPSBbXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTMuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzMtNC5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy01LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTYuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzMtNy5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy04LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTkuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzQtMS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvNC0yLmpwZ1wiIH0sXG5dO1xuXG5cblxuXG5cdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeShwcm9wcykge1xuXHRjb25zdCByb290ID0gdXNlUmVmKCk7XG5cdGNvbnN0IHRhcmdldCA9IHVzZVJlZigpO1xuXHRjb25zdCByb290TWFyZ2luID0gXCIwcHhcIjtcblxuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBnYWxsZXJ5LXdyYXBcIiBpZD1cImdhbGxlcnlcIj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnQtbWF4LXdpZHRoIGNvbnRlbnQtc2VjdGlvbi1nYWxsZXJ5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicnRlIGdhbGxlcnkgXCI+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBcIj5UZXN0YW1vbmlhbHMgJiBHYWxsZXJ5PC9oMj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fZ3JpZC1jb250YWluZXIgcGFkLWItMlwiPlxuXHRcdFx0XHRcdFx0e2dhbGxlcnlJbWFnZXMubGVuZ3RoID4gMSAmJlxuXHRcdFx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2dyaWQtaXRlbVwiIGtleT17aW1hZ2Uuc291cmNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2Utd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17aW1hZ2Uuc291cmNlfT48L2ltZz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fZ3JpZC1jb250YWluZXIgcGFkLWItMlwiPlxuXHRcdFx0XHRcdFx0e2dhbGxlcnlJbWFnZXMxLmxlbmd0aCA+IDEgJiZcblx0XHRcdFx0XHRcdFx0Z2FsbGVyeUltYWdlczEubWFwKChpbWFnZSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fZ3JpZC1pdGVtXCIga2V5PXtpbWFnZS5zb3VyY2V9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpbWFnZS5zb3VyY2V9PjwvaW1nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19ncmlkLWNvbnRhaW5lciBwYWQtYi0yXCI+XG5cdFx0XHRcdFx0XHR7Z2FsbGVyeUltYWdlczIubGVuZ3RoID4gMSAmJlxuXHRcdFx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzMi5tYXAoKGltYWdlKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19ncmlkLWl0ZW1cIiBrZXk9e2ltYWdlLnNvdXJjZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlLnNvdXJjZX0+PC9pbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Gallery.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.09f40707d0da9a2fa8ce.hot-update.js.map