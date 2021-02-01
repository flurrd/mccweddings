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
}, {
  source: "../static/2-1.jpg"
}
/* 	{ source: "../static/2-2.jpg" },
	{ source: "../static/2-3.jpg" },
	{ source: "../static/2-4.jpg" },
	{ source: "../static/2-5.jpg" },
	{ source: "../static/2-6.jpg" },
	{ source: "../static/2-7.jpg" },
	{ source: "../static/2-8.jpg" },
	{ source: "../static/2-9.jpg" },
	{ source: "../static/3-1.jpg" },
	{ source: "../static/3-2.jpg" },
	{ source: "../static/3-3.jpg" },
	{ source: "../static/3-4.jpg" },
	{ source: "../static/3-5.jpg" },
	{ source: "../static/3-6.jpg" },
	{ source: "../static/3-7.jpg" },
	{ source: "../static/3-8.jpg" },
	{ source: "../static/3-9.jpg" },
	{ source: "../static/4-1.jpg" },
	{ source: "../static/4-2.jpg" }, */
];
function Gallery(props) {
  var root = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var target = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var rootMargin = "0px";
  return __jsx("article", {
    id: "gallery",
    className: "jsx-2166895960" + " " + "content-section gallery-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2166895960" + " " + "content-max-width content-section-gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2166895960" + " " + "rte gallery ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2166895960" + " " + " text-center ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Testamonials & Gallery"), __jsx("div", {
    className: "jsx-2166895960" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, galleryImages.length > 1 && galleryImages.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-2166895960" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2166895960" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-2166895960",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "jsx-2166895960" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, galleryImages1.length > 1 && galleryImages1.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-2166895960" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2166895960" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-2166895960",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2166895960",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RUsiLCJmaWxlIjoiQzpcXG15ZGV2XFxtY2N3ZWRkaW5nc1xcc3JjXFxjb21wb25lbnRzXFxHYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tIFwiLi9ob29rXCI7XG5cbmltcG9ydCBGbG91cmlzaCBmcm9tIFwiLi9GbG91cmlzaFwiO1xuXG5cblxuXG5sZXQgZ2FsbGVyeUltYWdlcyA9IFtcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtMS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS0yLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTMuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtNS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS02LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTguanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtOS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMi0xLmpwZ1wiIH0sXG4vKiBcdHsgc291cmNlOiBcIi4uL3N0YXRpYy8yLTIuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzItMy5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMi00LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8yLTUuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzItNi5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMi03LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8yLTguanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzItOS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy0xLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTIuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzMtMy5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy00LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTUuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzMtNi5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy03LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTguanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzMtOS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvNC0xLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy80LTIuanBnXCIgfSwgKi9cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkocHJvcHMpIHtcblx0Y29uc3Qgcm9vdCA9IHVzZVJlZigpO1xuXHRjb25zdCB0YXJnZXQgPSB1c2VSZWYoKTtcblx0Y29uc3Qgcm9vdE1hcmdpbiA9IFwiMHB4XCI7XG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gZ2FsbGVyeS13cmFwXCIgaWQ9XCJnYWxsZXJ5XCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LW1heC13aWR0aCBjb250ZW50LXNlY3Rpb24tZ2FsbGVyeVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJ0ZSBnYWxsZXJ5IFwiPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgXCI+VGVzdGFtb25pYWxzICYgR2FsbGVyeTwvaDI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2dyaWQtY29udGFpbmVyIHBhZC1iLTJcIj5cblx0XHRcdFx0XHRcdHtnYWxsZXJ5SW1hZ2VzLmxlbmd0aCA+IDEgJiZcblx0XHRcdFx0XHRcdFx0Z2FsbGVyeUltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19ncmlkLWl0ZW1cIiBrZXk9e2ltYWdlLnNvdXJjZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlLnNvdXJjZX0+PC9pbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2dyaWQtY29udGFpbmVyIHBhZC1iLTJcIj5cblx0XHRcdFx0XHRcdHtnYWxsZXJ5SW1hZ2VzMS5sZW5ndGggPiAxICYmXG5cdFx0XHRcdFx0XHRcdGdhbGxlcnlJbWFnZXMxLm1hcCgoaW1hZ2UpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2dyaWQtaXRlbVwiIGtleT17aW1hZ2Uuc291cmNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2Utd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17aW1hZ2Uuc291cmNlfT48L2ltZz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Gallery.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.6b3036e3262e18cbb168.hot-update.js.map