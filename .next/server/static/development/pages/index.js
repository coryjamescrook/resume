module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/Hero.js":
/*!***********************!*\
  !*** ./pages/Hero.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coryrevesz/git-projects/resume/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map