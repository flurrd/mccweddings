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
    className: "jsx-4147454115" + " " + "content-section gallery-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-4147454115" + " " + "content-max-width content-section-gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4147454115" + " " + "rte gallery ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-4147454115" + " " + " text-center ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Testamonials & Gallery"), __jsx("div", {
    className: "jsx-4147454115" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, galleryImages.length > 1 && galleryImages.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-4147454115" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4147454115" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-4147454115",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })));
  })), __jsx("article", {
    id: "testamonial",
    className: "jsx-4147454115" + " " + "content-section testamonial-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-4147454115" + " " + "content-max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4147454115" + " " + "rte  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("blockquote", {
    className: "jsx-4147454115" + " " + "blockquote-testamonial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("em", {
    className: "jsx-4147454115",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4147454115",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\"We were so impressed by the way you asked questions and listened with empathy to draw out the essence of Pat and to reflect that in your delivery with such a soft and caring nature. It was as if you had known her all your life."), __jsx("p", {
    className: "jsx-4147454115",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "It\u2019s a special gift you have. We were so lucky to find you. We also recognize the amount of effort that you put into crafting and delivering the words for the service. It was the most beautiful service to honour Pat... You are indeed at the height of your profession, and I thank you for being there for us.\u201D"), __jsx("p", {
    className: "jsx-4147454115",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, " - Warren Anthes")))))), __jsx("div", {
    className: "jsx-4147454115" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, galleryImages1.length > 1 && galleryImages1.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-4147454115" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4147454115" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-4147454115",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "jsx-4147454115" + " " + "gallery__grid-container pad-b-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, galleryImages2.length > 1 && galleryImages2.map(function (image) {
    return __jsx("div", {
      key: image.source,
      className: "jsx-4147454115" + " " + "gallery__grid-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4147454115" + " " + "gallery__image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("img", {
      src: image.source,
      className: "jsx-4147454115",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4147454115",
    __self: this
  }, ".testamonial-section.jsx-4147454115{background-image:url(../static/hero-bg.jpg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2UsQUFHa0QsNENBQzdDIiwiZmlsZSI6IkM6XFxteWRldlxcbWNjd2VkZGluZ3NcXHNyY1xcY29tcG9uZW50c1xcR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSBcIi4vaG9va1wiO1xuXG5pbXBvcnQgRmxvdXJpc2ggZnJvbSBcIi4vRmxvdXJpc2hcIjtcbmxldCBnYWxsZXJ5SW1hZ2VzID0gW1xuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS0xLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTIuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtMy5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS01LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTYuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtOC5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS05LmpwZ1wiIH0sXG5dO1xuXG5cblxubGV0IGdhbGxlcnlJbWFnZXMxID0gW1xuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS0xLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTIuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtMy5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS01LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8xLTYuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzEtOC5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMS05LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8yLTEuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzItMi5qcGdcIiB9LFxuXTtcblxubGV0IGdhbGxlcnlJbWFnZXMyID0gW1xuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy0zLmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTQuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzMtNS5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy02LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy8zLTcuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzMtOC5qcGdcIiB9LFxuXHR7IHNvdXJjZTogXCIuLi9zdGF0aWMvMy05LmpwZ1wiIH0sXG5cdHsgc291cmNlOiBcIi4uL3N0YXRpYy80LTEuanBnXCIgfSxcblx0eyBzb3VyY2U6IFwiLi4vc3RhdGljLzQtMi5qcGdcIiB9LFxuXTtcblxuXG5cblxuXHRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkocHJvcHMpIHtcblx0Y29uc3Qgcm9vdCA9IHVzZVJlZigpO1xuXHRjb25zdCB0YXJnZXQgPSB1c2VSZWYoKTtcblx0Y29uc3Qgcm9vdE1hcmdpbiA9IFwiMHB4XCI7XG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gZ2FsbGVyeS13cmFwXCIgaWQ9XCJnYWxsZXJ5XCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LW1heC13aWR0aCBjb250ZW50LXNlY3Rpb24tZ2FsbGVyeVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJ0ZSBnYWxsZXJ5IFwiPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgXCI+VGVzdGFtb25pYWxzICYgR2FsbGVyeTwvaDI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2dyaWQtY29udGFpbmVyIHBhZC1iLTJcIj5cblx0XHRcdFx0XHRcdHtnYWxsZXJ5SW1hZ2VzLmxlbmd0aCA+IDEgJiZcblx0XHRcdFx0XHRcdFx0Z2FsbGVyeUltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19ncmlkLWl0ZW1cIiBrZXk9e2ltYWdlLnNvdXJjZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlLnNvdXJjZX0+PC9pbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIHRlc3RhbW9uaWFsLXNlY3Rpb25cIiBpZD1cInRlc3RhbW9uaWFsXCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LW1heC13aWR0aFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJ0ZSAgXCI+XG5cdFx0XHRcdFx0PGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwiYmxvY2txdW90ZS10ZXN0YW1vbmlhbFwiPlxuXHRcdFx0XHRcdFx0PGVtPlx0XG5cdFx0XHRcdFx0XHQ8cD5cIldlIHdlcmUgc28gaW1wcmVzc2VkIGJ5IHRoZSB3YXkgeW91IGFza2VkIHF1ZXN0aW9ucyBhbmQgbGlzdGVuZWQgd2l0aCBlbXBhdGh5IHRvIGRyYXcgb3V0IHRoZSBlc3NlbmNlIG9mIFBhdCBhbmQgdG8gcmVmbGVjdCB0aGF0IGluIHlvdXIgZGVsaXZlcnkgd2l0aCBzdWNoIGEgc29mdCBhbmQgY2FyaW5nIG5hdHVyZS4gSXQgd2FzIGFzIGlmIHlvdSBoYWQga25vd24gaGVyIGFsbCB5b3VyIGxpZmUuPC9wPlxuXHRcdFx0XHRcdFx0PHA+SXTigJlzIGEgc3BlY2lhbCBnaWZ0IHlvdSBoYXZlLiBXZSB3ZXJlIHNvIGx1Y2t5IHRvIGZpbmQgeW91LiBXZSBhbHNvIHJlY29nbml6ZSB0aGUgYW1vdW50IG9mIGVmZm9ydCB0aGF0IHlvdSBwdXQgaW50byBjcmFmdGluZyBhbmQgZGVsaXZlcmluZyB0aGUgd29yZHMgZm9yIHRoZSBzZXJ2aWNlLiBJdCB3YXMgdGhlIG1vc3QgYmVhdXRpZnVsIHNlcnZpY2UgdG8gaG9ub3VyIFBhdC4uLiBZb3UgYXJlIGluZGVlZCBhdCB0aGUgaGVpZ2h0IG9mIHlvdXIgcHJvZmVzc2lvbiwgYW5kIEkgdGhhbmsgeW91IGZvciBiZWluZyB0aGVyZSBmb3IgdXMu4oCdPC9wPlxuXHRcdFx0XHRcdFx0PHA+IC0gV2FycmVuIEFudGhlczwvcD5cblx0XHRcdFx0XHRcdDwvZW0+XG5cdFx0XHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFxuXHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2dyaWQtY29udGFpbmVyIHBhZC1iLTJcIj5cblx0XHRcdFx0XHRcdHtnYWxsZXJ5SW1hZ2VzMS5sZW5ndGggPiAxICYmXG5cdFx0XHRcdFx0XHRcdGdhbGxlcnlJbWFnZXMxLm1hcCgoaW1hZ2UpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlfX2dyaWQtaXRlbVwiIGtleT17aW1hZ2Uuc291cmNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2Utd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17aW1hZ2Uuc291cmNlfT48L2ltZz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fZ3JpZC1jb250YWluZXIgcGFkLWItMlwiPlxuXHRcdFx0XHRcdFx0e2dhbGxlcnlJbWFnZXMyLmxlbmd0aCA+IDEgJiZcblx0XHRcdFx0XHRcdFx0Z2FsbGVyeUltYWdlczIubWFwKChpbWFnZSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fZ3JpZC1pdGVtXCIga2V5PXtpbWFnZS5zb3VyY2V9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpbWFnZS5zb3VyY2V9PjwvaW1nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQudGVzdGFtb25pYWwtc2VjdGlvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9oZXJvLWJnLmpwZyk7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2FydGljbGU+XG5cdCk7XG59XG4iXX0= */\n/*@ sourceURL=C:\\\\mydev\\\\mccweddings\\\\src\\\\components\\\\Gallery.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f275a6d982a359b4f3fd.hot-update.js.map