define("token-credentials", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information. 



const HeaderConstants = {
  AUTHORIZATION: 'authorization',
  AUTHORIZATION_SCHEME: 'Bearer',
  USER_AGENT: 'user-agent',
  FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
};
const DEFAULT_AUTHORIZATION_SCHEME = 'Bearer';

/**
 * Creates a new TokenCredentials object.
 *
 * @constructor
 * @param {string} token               The token.
 * @param {string} authorizationScheme The authorization scheme.
 */
class TokenCredentials {
  constructor(token, authorizationScheme) {
    if (!token) {
      throw new Error('token cannot be null.');
    }
    this.token = token;
    this.authorizationScheme = authorizationScheme;
    if (!this.authorizationScheme) {
      this.authorizationScheme = DEFAULT_AUTHORIZATION_SCHEME;
    }
  }

  /**
   * Signs a request with the Authentication header.
   *
   * @param {WebResource} The WebResource to be signed.
   * @param {function(error)}  callback  The callback function.
   * @return {undefined}
   */
  signRequest(webResource, callback) {
    webResource.headers[HeaderConstants.AUTHORIZATION] = `${this.authorizationScheme} ${this.token}`;
    return callback(null);
  }
}

module.exports = TokenCredentials;

/***/ })
/******/ ])});;