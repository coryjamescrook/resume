((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./content/index.js":
/*!**************************!*\
  !*** ./content/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = {
  hero: {
    heading: "Cory Crook",
    subHeading: "Dev Resume"
  },
  bio: {
    heading: 'Bio',
    subHeading: null,
    image: null,
    blurb: '<p>I am a focused professional with a background in media, business management, project management, and most recently - web development.</p><p>I am constantly learning:<br/>Learning to be a better developer. Learning to be a more effective leader. Learning how to brew the perfect craft beer.</p>'
  },
  experience: {
    heading: 'Experience',
    subHeading: null,
    jobs: [{
      company: 'Akira Health',
      title: 'Full Stack Developer',
      dates: 'Jan 2018 - Present',
      duties: ['ReactJS', 'Redux', 'Javascript', 'Typescript', 'Ruby', 'Sequel', 'PostgreSQL']
    }, {
      company: 'Toronto Sound',
      title: 'Managing Partner / CFO',
      dates: 'Jan 2015 - Dec 2017',
      duties: ['Project Management', 'Accounts Supervision', 'Budgeting', 'Estimates', 'Financial Management', 'Scheduling']
    }, {
      company: 'Toronto Sound',
      title: 'Project Manager',
      dates: 'Apr 2013 - Jan 2015',
      duties: ['Quality Assurance', 'Revision Management', 'Accounts Supervision', 'Project Supervision', 'Estimates']
    }, {
      company: 'Metalworks Institute',
      title: 'Media Producer',
      dates: 'Oct 2012 - Apr 2013',
      duties: ['Media Planning', 'Media Management', 'Web Maintenance', 'Video Production', 'Team Scheduling']
    }]
  },
  skills: {
    heading: 'Skills',
    stack: [{
      skill: 'Javascript',
      level: 4
    }, {
      skill: 'Typescript',
      level: 4
    }, {
      skill: 'CSS & SASS',
      level: 3
    }, {
      skill: 'ExpressJS',
      level: 3
    }, {
      skill: 'ReactJS',
      level: 4
    }, {
      skill: 'React Native',
      level: 3
    }, {
      skill: 'Ruby',
      level: 4
    }, {
      skill: 'RESTful',
      level: 4
    }, {
      skill: 'PostgreSQL',
      level: 3
    }, {
      skill: 'MongoDB',
      level: 4
    }, {
      skill: 'C#',
      level: 3
    }, {
      skill: 'Android (Java)',
      level: 1
    }, {
      skill: 'PHP',
      level: 2
    }, {
      skill: 'Project Management',
      level: 5
    }, {
      skill: 'Team Leadership',
      level: 4
    }]
  },
  contact: {
    heading: 'Contact Me',
    subHeading: 'Want to get in touch?',
    email: 'coryjamescrook@gmail.com',
    github: 'https://github.com/coryjamescrook',
    linkedIn: 'www.linkedin.com/in/coryjamescrook'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (content);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcoryrevesz%2Fgit-projects%2Fresume%2Fpages%2Findex.js!./":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcoryrevesz%2Fgit-projects%2Fresume%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/Hero.js":
/*!***********************!*\
  !*** ./pages/Hero.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/coryrevesz/git-projects/resume/pages/Hero.js";


function Hero(_ref) {
  var heading = _ref.heading,
      subHeading = _ref.subHeading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, subHeading));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content */ "./content/index.js");
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero */ "./pages/Hero.js");
var _jsxFileName = "/Users/coryrevesz/git-projects/resume/pages/index.js";




function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: _content__WEBPACK_IMPORTED_MODULE_1__["default"].hero.heading,
    subHeading: _content__WEBPACK_IMPORTED_MODULE_1__["default"].hero.subHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcoryrevesz%2Fgit-projects%2Fresume%2Fpages%2Findex.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcoryrevesz%2Fgit-projects%2Fresume%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcoryrevesz%2Fgit-projects%2Fresume%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_1aef2d0bbc0d334d831c":
/*!*******************************************!*\
  !*** external "dll_1aef2d0bbc0d334d831c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_1aef2d0bbc0d334d831c;

/***/ })

},[[0,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map