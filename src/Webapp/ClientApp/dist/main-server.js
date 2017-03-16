(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("domain-task");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-decorators");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* unused harmony export GETUSER_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GETUSER_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducer; });
var _this = this;



var GETUSER_REQUEST = 'GetUserRequestAction';
var GETUSER_RECEIVED = 'GetUserReceivedAction';
var DefaultUserModel = {
    isAuthenticated: false,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    phoneNumber: undefined,
    userId: undefined
};
var actionCreators = {
    getUser: function getUser() {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var fetchTask;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/account/getuser', {
                                    credentials: 'include',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }).then(function (response) {
                                    return response.json();
                                }).then(function (userModel) {
                                    dispatch({ type: GETUSER_RECEIVED, payload: userModel });
                                });

                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["addTask"])(fetchTask);
                                dispatch({ type: GETUSER_REQUEST });

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};
var reducer = function reducer(state, action) {
    switch (action.type) {
        case GETUSER_REQUEST:
            return state;
        case GETUSER_RECEIVED:
            return action.payload;
        default:
            var exhaustiveCheck = action;
    }
    return state || DefaultUserModel;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__(7);
/* unused harmony export LOGIN_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_SUCCESS; });
/* unused harmony export LOGIN_INVALID */
/* unused harmony export LOGIN_ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var _this = this;





var LOGIN_REQUEST = 'LoginRequestAction';
var LOGIN_SUCCESS = 'LoginSuccessAction';
var LOGIN_INVALID = 'LoginInvalidAction';
var LOGIN_ERROR = 'LoginErrorAction';
var DefaultLoginState = {
    authenticating: false,
    authenticated: false
};
var actionCreators = {
    login: function login(loginInput) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var xsrf, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                dispatch({ type: LOGIN_REQUEST });
                                xsrf = getState().session.xsrfToken;
                                _context.next = 4;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/account/login', {
                                    method: 'POST',
                                    credentials: 'include',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'X-XSRF-TOKEN': xsrf
                                    },
                                    body: JSON.stringify(loginInput)
                                });

                            case 4:
                                response = _context.sent;

                                if (response.ok) {
                                    dispatch({ type: LOGIN_SUCCESS });
                                    dispatch(__WEBPACK_IMPORTED_MODULE_3__User__["b" /* actionCreators */].getUser());
                                    __WEBPACK_IMPORTED_MODULE_2_react_router__["browserHistory"].push('/');
                                } else {
                                    dispatch({ type: LOGIN_ERROR });
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};
var reducer = function reducer(state, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { authenticating: true, authenticated: false };
        case LOGIN_ERROR:
            return { authenticating: false, authenticated: false };
        case LOGIN_SUCCESS:
            return { authenticating: false, authenticated: true };
        case LOGIN_INVALID:
            return { authenticating: false, authenticated: false };
        default:
            var exhaustiveCheck = action;
    }
    return state || DefaultLoginState;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* unused harmony export TOKEN_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOKEN_RECEIVED; });
/* unused harmony export TOKEN_ERROR */
/* unused harmony export actionCreators */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var _this = this;



var TOKEN_REQUEST = 'TokenRequestAction';
var TOKEN_RECEIVED = 'TokenReceivedAction';
var TOKEN_ERROR = 'TokenErrorAction';
var DefaultAuthState = {
    requesting: false
};
var actionCreators = {
    getToken: function getToken() {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var xsrf, response, result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                dispatch({ type: TOKEN_REQUEST });
                                xsrf = getState().session.xsrfToken;
                                _context.next = 4;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/connect/token', {
                                    method: 'POST',
                                    credentials: 'include',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'X-XSRF-TOKEN': xsrf
                                    },
                                    body: ""
                                });

                            case 4:
                                response = _context.sent;

                                if (!response.ok) {
                                    _context.next = 12;
                                    break;
                                }

                                _context.next = 8;
                                return response.json();

                            case 8:
                                result = _context.sent;

                                dispatch({ type: TOKEN_RECEIVED, payload: result });
                                _context.next = 13;
                                break;

                            case 12:
                                dispatch({ type: TOKEN_ERROR });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};
var reducer = function reducer(state, action) {
    switch (action.type) {
        case TOKEN_REQUEST:
            return Object.assign({}, state, { requesting: true });
        case TOKEN_RECEIVED:
            return { requesting: false, accessToken: action.payload.accessToken };
        case TOKEN_ERROR:
            return Object.assign({}, state, { requesting: false });
        default:
            var exhaustiveCheck = action;
    }
    return state || DefaultAuthState;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT_SESSION; });
/* unused harmony export actionCreators */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var _this = this;



function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
var INIT_SESSION = 'InitConfigAction';

var actionCreators = {
    initialize: function initialize(settings) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var xsrfToken, id;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                xsrfToken = document.getElementById('xsrf-token').dataset['xsrfToken'];
                                id = document.getElementById('session').dataset['id'];

                                dispatch({ type: INIT_SESSION, payload: settings || { xsrfToken: xsrfToken, id: id } });

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};

var DefaultSettings = { xsrfToken: undefined, id: undefined };
var reducer = function reducer(state, action) {
    switch (action.type) {
        case INIT_SESSION:
            return action.payload;
        default:
            break;
    }
    return state || DefaultSettings;
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
var _this = this;




var actionCreators = {
    submitContactForm: function submitContactForm(form) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var response, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                dispatch({ type: 'SUBMIT_CONTACT_FORM', payload: form });
                                _context.next = 3;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/contact', {
                                    method: 'POST',
                                    body: JSON.stringify(form),
                                    headers: new Headers({
                                        'Content-Type': 'application/json'
                                    })
                                });

                            case 3:
                                response = _context.sent;
                                _context.next = 6;
                                return response.json();

                            case 6:
                                data = _context.sent;

                                if (data.result.status === "OK") dispatch({ type: 'CONTACT_FORM_RECIEVED', payload: { result: data.message } });else dispatch({ type: 'CONTACT_FORM_ERROR', payload: { form: form, result: data.message } });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};

var unloadedState = { isSubmitting: false, submitted: false, form: {} };
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'SUBMIT_CONTACT_FORM':
            return {
                form: action.payload,
                isSubmitting: true,
                submitted: false
            };
        case 'CONTACT_FORM_RECIEVED':
            return {
                form: { firstName: '', lastName: '', email: '', phone: '', message: '' },
                isSubmitting: false,
                submitted: true,
                result: action.payload.result
            };
        case 'CONTACT_FORM_ERROR':
            return {
                form: action.payload.form,
                isSubmitting: false,
                submitted: true,
                result: action.payload.result
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_Counter__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
var _this = this;




var DefaultCounterState = {
    count: 0,
    started: false,
    transitioning: false
};

var REQUEST_COUNTER = 'RequestCounterAction';
var RECEIVE_COUNTER = 'ReceiveCounterAction';

function postActionToServer(action, xsrfToken) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/action', {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-XSRF-TOKEN': xsrfToken
                            },
                            body: JSON.stringify(action)
                        });

                    case 2:
                        response = _context.sent;
                        return _context.abrupt('return', response);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}
var actionCreators = {
    request: function request() {
        return function (dispatch, getState) {
            dispatch({ type: REQUEST_COUNTER });
            var state = getState();
            var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/counterstate?id=' + state.session.id, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                dispatch({ type: RECEIVE_COUNTER, payload: data });
            }).catch(function (error) {
                console.log('server has no initial counter data');
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["addTask"])(fetchTask);
        };
    },
    increment: function increment() {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var state, response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["a" /* INCREMENT_COUNTER */] });
                                state = getState();
                                _context2.next = 4;
                                return postActionToServer({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["a" /* INCREMENT_COUNTER */] }, state.session.xsrfToken);

                            case 4:
                                response = _context2.sent;

                                console.log(response);

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        };
    },
    decrement: function decrement() {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var state, response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["b" /* DECREMENT_COUNTER */] });
                                state = getState();
                                _context3.next = 4;
                                return postActionToServer({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["b" /* DECREMENT_COUNTER */] }, state.session.xsrfToken);

                            case 4:
                                response = _context3.sent;

                                console.log(response);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        };
    },
    start: function start() {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                var state, response;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["c" /* START_COUNTER */] });
                                state = getState();
                                _context4.next = 4;
                                return postActionToServer({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["c" /* START_COUNTER */] }, state.session.xsrfToken);

                            case 4:
                                response = _context4.sent;

                                console.log(response);

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        };
    },
    stop: function stop() {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
                var state, response;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["d" /* STOP_COUNTER */] });
                                state = getState();
                                _context5.next = 4;
                                return postActionToServer({ type: __WEBPACK_IMPORTED_MODULE_2__server_Counter__["d" /* STOP_COUNTER */] }, state.session.xsrfToken);

                            case 4:
                                response = _context5.sent;

                                console.log(response);

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));
        };
    }
};

var reducer = function reducer(state, action) {
    switch (action.type) {
        case REQUEST_COUNTER:
            return Object.assign({}, state, { transitioning: true });
        case RECEIVE_COUNTER:
            return Object.assign({}, DefaultCounterState, action.payload);
        case __WEBPACK_IMPORTED_MODULE_2__server_Counter__["a" /* INCREMENT_COUNTER */]:
            return Object.assign({}, state, { count: state.count + 1 });
        case __WEBPACK_IMPORTED_MODULE_2__server_Counter__["b" /* DECREMENT_COUNTER */]:
            return Object.assign({}, state, { count: state.count - 1 });
        case __WEBPACK_IMPORTED_MODULE_2__server_Counter__["c" /* START_COUNTER */]:
            return Object.assign({}, state, { transitioning: true });
        case __WEBPACK_IMPORTED_MODULE_2__server_Counter__["e" /* COUNTER_STARTED */]:
            return Object.assign({}, state, { transitioning: false, started: true });
        case __WEBPACK_IMPORTED_MODULE_2__server_Counter__["d" /* STOP_COUNTER */]:
            return Object.assign({}, state, { transitioning: true });
        case __WEBPACK_IMPORTED_MODULE_2__server_Counter__["f" /* COUNTER_STOPPED */]:
            return Object.assign({}, state, { transitioning: false, started: false });
        default:
            var exhaustiveCheck = action;
    }

    return state || DefaultCounterState;
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
var _this = this;




var actionCreators = {
    submitEmail: function submitEmail(form) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var response, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                dispatch({ type: 'SUBMIT_EMAIL' });
                                _context.next = 3;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/subscribe', {
                                    method: 'POST',
                                    body: 'email=' + form.email,
                                    headers: new Headers({
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    })
                                });

                            case 3:
                                response = _context.sent;
                                _context.next = 6;
                                return response.json();

                            case 6:
                                data = _context.sent;

                                dispatch({ type: 'EMAIL_SUBMITTED', message: data.message });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};

var unloadedState = { isSubmitting: false, submitted: false };
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'SUBMIT_EMAIL':
            return {
                isSubmitting: true,
                submitted: false
            };
        case 'EMAIL_SUBMITTED':
            return {
                isSubmitting: false,
                submitted: true,
                message: action.message
            };
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* unused harmony export REGISTER_REQUEST */
/* unused harmony export REGISTER_SUCCESS */
/* unused harmony export REGISTER_ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
var _this = this;




var REGISTER_REQUEST = 'RegisterRequestAction';
var REGISTER_SUCCESS = 'RegisterSuccessAction';
var REGISTER_ERROR = 'RegisterErrorAction';
var DefaultRegisterState = {
    requesting: false,
    registered: false,
    errors: {}
};
var actionCreators = {
    register: function register(registerModel) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var xsrf, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                dispatch({ type: REGISTER_REQUEST });
                                xsrf = getState().session.xsrfToken;
                                _context.next = 4;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/account/register', {
                                    method: 'POST',
                                    credentials: 'include',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'X-XSRF-TOKEN': xsrf
                                    },
                                    body: JSON.stringify(registerModel)
                                });

                            case 4:
                                response = _context.sent;

                                if (response.ok) {
                                    dispatch({ type: REGISTER_SUCCESS, payload: registerModel });
                                    __WEBPACK_IMPORTED_MODULE_2_react_router__["browserHistory"].push('/');
                                } else {
                                    dispatch({ type: REGISTER_ERROR });
                                }
                                console.log('register result', response);

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};
var reducer = function reducer(state, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { requesting: true, registered: false, errors: {} };
        case REGISTER_ERROR:
            return { requesting: false, registered: false, errors: {} };
        case REGISTER_SUCCESS:
            return { requesting: false, registered: false, errors: {} };
        default:
            var exhaustiveCheck = action;
    }
    return state || DefaultRegisterState;
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });


var actionCreators = {
    requestWeatherForecasts: function requestWeatherForecasts(startDateIndex) {
        return function (dispatch, getState) {
            if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
                var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["fetch"])('/api/SampleData/WeatherForecasts?startDateIndex=' + startDateIndex).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
                dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
            }
        };
    }
};

var unloadedState = { startDateIndex: null, forecasts: [], isLoading: false };
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'REQUEST_WEATHER_FORECASTS':
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case 'RECEIVE_WEATHER_FORECASTS':
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: action.forecasts,
                    isLoading: false
                };
            }
            break;
        default:
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(35);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;




function configureStore(initialState) {
    var windowIfDefined = typeof window === 'undefined' ? null : window;

    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a), devToolsExtension ? devToolsExtension() : function (f) {
        return f;
    })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);

    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);

    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Contact__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FetchData__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Login__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Register__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Counter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_User__ = __webpack_require__(29);










/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/login', components: { body: __WEBPACK_IMPORTED_MODULE_6__components_Login__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/register', components: { body: __WEBPACK_IMPORTED_MODULE_7__components_Register__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/contact', components: { body: __WEBPACK_IMPORTED_MODULE_4__components_Contact__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/counter', components: { body: __WEBPACK_IMPORTED_MODULE_8__components_Counter__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/user', components: { body: __WEBPACK_IMPORTED_MODULE_9__components_User__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
        { path: '/fetchdata', components: { body: __WEBPACK_IMPORTED_MODULE_5__components_FetchData__["a" /* default */] } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '(:startDateIndex)' })
    )
);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_decorators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_Contact__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
};

var Contact = function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact(props) {
        _classCallCheck(this, Contact);

        var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

        _this.state = Object.assign({}, initialForm, props.form);
        return _this;
    }

    _createClass(Contact, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.state !== nextProps.form) this.setState(nextProps.form);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'submit',
        value: function submit(event) {
            this.props.submitContactForm(this.state);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Grid"],
                null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'h1',
                    null,
                    'Contact us'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Row"],
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                        { md: 6 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Well"],
                            { bsSize: 'sm' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Form"],
                                { horizontal: true, onSubmit: this.submit },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    'fieldset',
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        'legend',
                                        { className: 'text-center header' },
                                        'Contact'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                                            { md: 10, mdOffset: 1 },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { name: 'firstName', type: 'text', onChange: this.handleChange, value: this.state.firstName, placeholder: 'First name' })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                                            { md: 10, mdOffset: 1 },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { name: 'lastName', type: 'text', onChange: this.handleChange, value: this.state.lastName, placeholder: 'Last name' })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                                            { md: 10, mdOffset: 1 },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { name: 'email', type: 'text', onChange: this.handleChange, value: this.state.email, placeholder: 'Email' })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                                            { md: 10, mdOffset: 1 },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { name: 'phone', type: 'text', onChange: this.handleChange, value: this.state.phone, placeholder: 'Phone' })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                                            { md: 10, mdOffset: 1 },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { componentClass: 'textarea', name: 'message', rows: 7, onChange: this.handleChange, value: this.props.form.message, placeholder: 'Enter a message here. We\'ll get back to you within two business days' })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                                            { md: 11, className: 'text-center' },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Button"],
                                                { type: 'submit', bsSize: 'lg', bsStyle: 'primary', disabled: this.props.isSubmitting },
                                                this.props.isSubmitting ? "Spinner" : "Send"
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('hr', null),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                                            { md: 11, className: 'text-center' },
                                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"].Static,
                                                null,
                                                this.props.submitted ? this.props.result : ""
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                        { md: 6 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Panel"],
                            { header: __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    'h3',
                                    null,
                                    'Adres'
                                ) },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                'div',
                                { className: 'text-center header' },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    'div',
                                    null,
                                    'Street address',
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('br', null),
                                    'City',
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('br', null),
                                    'Country',
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('br', null),
                                    'Email',
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('br', null)
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('hr', null),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    'div',
                                    { id: 'map1', className: 'map' },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        'a',
                                        { href: 'https://www.google.nl/maps/dir//Your%020Address' },
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { className: 'img-responsive', src: '/images/Map.png' })
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'h2',
                    null,
                    'This demo was built by'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'h4',
                    null,
                    'Maarten Sikkema'
                )
            );
        }
    }]);

    return Contact;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Contact.prototype, "handleChange", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Contact.prototype, "submit", null);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.contact;
}, __WEBPACK_IMPORTED_MODULE_5__store_Contact__["b" /* actionCreators */])(Contact);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_Counter__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.request();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Counter'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This is an example of a React component. It is connected real-time to the server: start the timer to view server-initiated updates, use "increment" to change the value clientside. Refresh the page to see that the value is also rendered serverside.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'Current count: ',
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'strong',
                        null,
                        this.props.count
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { className: 'btn btn-default', onClick: function onClick() {
                            _this2.props.increment();
                        } },
                    'Increment'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { className: 'btn btn-default', onClick: function onClick() {
                            _this2.props.decrement();
                        } },
                    'Decrement'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { className: 'btn btn-default', disabled: this.props.started, onClick: function onClick() {
                            _this2.props.start();
                        } },
                    'Start'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { className: 'btn btn-default', disabled: !this.props.started, onClick: function onClick() {
                            _this2.props.stop();
                        } },
                    'Stop'
                )
            );
        }
    }]);

    return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state.counter;
}, __WEBPACK_IMPORTED_MODULE_2__store_Counter__["b" /* actionCreators */])(Counter);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FetchData = function (_React$Component) {
    _inherits(FetchData, _React$Component);

    function FetchData() {
        _classCallCheck(this, FetchData);

        return _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).apply(this, arguments));
    }

    _createClass(FetchData, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var startDateIndex = parseInt(this.props.params.startDateIndex) || 0;
            this.props.requestWeatherForecasts(startDateIndex);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;
            this.props.requestWeatherForecasts(startDateIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Weather forecast'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This component demonstrates fetching data from the server and working with URL parameters.'
                ),
                this.renderForecastsTable(),
                this.renderPagination()
            );
        }
    }, {
        key: 'renderForecastsTable',
        value: function renderForecastsTable() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'table',
                { className: 'table' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'tr',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Date'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (C)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (F)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Summary'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'tbody',
                    null,
                    this.props.forecasts.map(function (forecast) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'tr',
                            { key: forecast.dateFormatted },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.dateFormatted
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureC
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureF
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.summary
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var prevStartDateIndex = this.props.startDateIndex - 5;
            var nextStartDateIndex = this.props.startDateIndex + 5;
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'p',
                { className: 'clearfix text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-left', to: '/fetchdata/' + prevStartDateIndex },
                    'Previous'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-right', to: '/fetchdata/' + nextStartDateIndex },
                    'Next'
                ),
                this.props.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'span',
                    null,
                    'Loading...'
                ) : []
            );
        }
    }]);

    return FetchData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.weatherForecasts;
}, __WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__["b" /* actionCreators */])(FetchData);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_decorators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_Footer__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

        _this.state = {
            email: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Footer, [{
        key: 'getValidationState',
        value: function getValidationState() {
            var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return emailRegex.test(this.state.email) ? "success" : null;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ email: e.target.value });
        }
    }, {
        key: 'submitEmail',
        value: function submitEmail(event) {
            this.props.submitEmail(this.state);
            event.preventDefault();
        }
    }, {
        key: 'submitDisabled',
        value: function submitDisabled() {
            return this.props.isSubmitting || this.getValidationState() !== "success";
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                'footer',
                null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'div',
                    { className: 'container' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { className: 'row' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'h1',
                            null,
                            'Share the vision!'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('div', { className: 'header-deveider' }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'p',
                            { className: 'wow fadeInUp' },
                            'Footer text here.'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { className: 'row' },
                        this.props.submitted ? __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { className: 'subscription-message' },
                            this.props.message
                        ) : __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Form"],
                            { inline: true, onSubmit: this.submitEmail },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                                { controlId: 'formBasicText', validationState: this.getValidationState() },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { type: 'text', value: this.state.email, placeholder: 'Enter your email address', onChange: this.handleChange }),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"].Feedback, null)
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Button"],
                                { type: 'submit', disabled: this.submitDisabled() },
                                'Keep me informed'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { className: 'row', id: 'share' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'ul',
                            { className: 'socials-links' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    'a',
                                    { href: 'https://www.facebook.com/YourFbPage' },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-facebook-square' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    'a',
                                    { href: 'https://twitter.com/YourTwitterHandle' },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-twitter-square' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    'a',
                                    { href: 'https://nl.linkedin.com/in/YourLinkedInProfile' },
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-linkedin-square' })
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'p',
                            { className: 'copyright' },
                            '\xA9 2016 MIT Licenced'
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Footer.prototype, "getValidationState", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Footer.prototype, "handleChange", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Footer.prototype, "submitEmail", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Footer.prototype, "submitDisabled", null);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.footer;
}, __WEBPACK_IMPORTED_MODULE_5__store_Footer__["b" /* actionCreators */])(Footer);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_scroll_effect__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_fullscreen__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'container-fluid' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_3__lib_fullscreen__["a" /* default */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'row', id: 'hero' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'container' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { id: 'tagline' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_2__lib_scroll_effect__["a" /* default */],
                                    { animate: 'bounceIn' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'h1',
                                        { className: 'home-intro-text' },
                                        'Demo!'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'h1',
                                        { className: 'home-intro-text' },
                                        '...React, Redux, Orleans and Dotnet'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'h3',
                                        { className: 'home-intro-text' },
                                        'Introducing the ',
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_1_react_scroll__["Link"],
                                            { to: 'demo', href: '#', smooth: true, duration: 700, offset: -50 },
                                            'RROD'
                                        ),
                                        ' stack'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'down-link' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_scroll__["Link"],
                                    { to: 'demo', href: '#', className: 'icon-link', smooth: true, duration: 700, offset: -50 },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('i', { className: 'fa fa-arrow-circle-down custom' })
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_scroll__["Element"], { name: 'demo' }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'row', id: 'footer' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], null)
                )
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Home;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__NavMenu__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__["a" /* default */],
                    { pathname: typeof window !== 'undefined' ? window.location.pathname : '', children: this.props.body },
                    this.props.body
                )
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_decorators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_Login__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

        _this.state = {
            userName: '',
            password: ''
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(Object.assign({}, this.state, _defineProperty({}, e.target.name, e.target.value)));
        }
    }, {
        key: 'login',
        value: function login(event) {
            this.props.login({ email: this.state.userName, password: this.state.password, rememberLogin: true, returnUrl: '/' });
            event.preventDefault();
        }
    }, {
        key: 'getValidationState',
        value: function getValidationState() {
            return null;
        }
    }, {
        key: 'renderLoggedIn',
        value: function renderLoggedIn() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Grid"],
                null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'h1',
                    null,
                    'U bent ingelogd!'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'form',
                    { action: '~/account', method: 'post' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'button',
                        { className: 'btn btn-lg btn-warning', type: 'submit' },
                        'Query the resource controller'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'a',
                    { className: 'btn btn-lg btn-danger', href: '/signout' },
                    'Sign out'
                )
            );
        }
    }, {
        key: 'renderAnonymous',
        value: function renderAnonymous() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Grid"],
                { className: 'omb_login' },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'h3',
                    { className: 'omb_authTitle' },
                    'Login of ',
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
                        { to: '/Register' },
                        'Registreer'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Row"],
                    { className: 'omb_socialButtons' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"],
                        { xs: 4, sm: 2, smOffset: 3 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
                            { to: '#', className: 'btn btn-lg btn-block omb_btn-facebook' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-facebook visible-xs' }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                'span',
                                { className: 'hidden-xs' },
                                'Facebook'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"],
                        { xs: 4, sm: 2 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
                            { to: '#', className: 'btn btn-lg btn-block omb_btn-twitter' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-twitter visible-xs' }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                'span',
                                { className: 'hidden-xs' },
                                'Twitter'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"],
                        { xs: 4, sm: 2 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
                            { to: '#', className: 'btn btn-lg btn-block omb_btn-google' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-google-plus visible-xs' }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                'span',
                                { className: 'hidden-xs' },
                                'Google+'
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Row"],
                    { className: 'omb_loginOr' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"],
                        { xs: 12, sm: 6, smOffset: 3 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('hr', { className: 'omb_hrOr' }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'span',
                            { className: 'omb_spanOr' },
                            'of'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Row"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"],
                        { xs: 12, sm: 6, smOffset: 3 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Form"],
                            { className: 'omb_loginForm', onSubmit: this.login, autoComplete: 'off' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormGroup"],
                                { validationState: this.getValidationState() },
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["InputGroup"],
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["InputGroup"].Addon,
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-user' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"], { name: 'userName', type: 'text', onChange: this.handleChange, placeholder: 'Login Naam' })
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"].Feedback, null)
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormGroup"],
                                null,
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["InputGroup"],
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["InputGroup"].Addon,
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('i', { className: 'fa fa-lock' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"], { name: 'password', type: 'password', onChange: this.handleChange, placeholder: 'Password' })
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"].Feedback, null)
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Button"],
                                { className: 'btn btn-lg btn-primary btn-block', type: 'submit' },
                                'Inloggen'
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Row"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"],
                        { xs: 12, sm: 3, smOffset: 3 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormGroup"],
                            null,
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Checkbox"],
                                null,
                                'Onthou mij'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["Col"],
                        { xs: 12, sm: 3 },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'p',
                            { className: 'omb_forgotPwd' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
                                { to: '#' },
                                'Password vergeten?'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.authenticated) return this.renderLoggedIn();else return this.renderAnonymous();
        }
    }]);

    return Login;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_4_core_decorators__["autobind"]], Login.prototype, "handleChange", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_4_core_decorators__["autobind"]], Login.prototype, "login", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_4_core_decorators__["autobind"]], Login.prototype, "getValidationState", null);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state) {
    return state.login;
}, __WEBPACK_IMPORTED_MODULE_6__store_Login__["c" /* actionCreators */])(Login);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var logo = __webpack_require__(36);

var NavMenu = function (_React$Component) {
    _inherits(NavMenu, _React$Component);

    function NavMenu() {
        _classCallCheck(this, NavMenu);

        return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).apply(this, arguments));
    }

    _createClass(NavMenu, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"],
                { fixedTop: true },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Header,
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Brand,
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { className: 'navbar-brand', to: '/' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: logo, alt: 'RROD Logo' }),
                            'RROD'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Toggle, null)
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Collapse,
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Nav"],
                        { pullRight: true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                            { to: '/contact' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["NavItem"],
                                { eventKey: 1 },
                                'Contact'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                            { to: '/counter' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["NavItem"],
                                { eventKey: 3 },
                                'Counter'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["NavDropdown"],
                            { eventKey: 2, title: 'Login', id: 'nav-dropdown' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/login' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { disabled: this.props.isAuthenticated, eventKey: 2.1 },
                                    'Login'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/register' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { disabled: this.props.isAuthenticated, eventKey: 2.2 },
                                    'Register'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/user' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { eventKey: 2.3 },
                                    'User Profile'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"], { divider: true }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/logout' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { disabled: !this.props.isAuthenticated, eventKey: 2.4 },
                                    'Logout'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return { isAuthenticated: state.login.authenticated, roles: [] };
}, {})(NavMenu);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_decorators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_Register__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Register = function (_React$Component) {
    _inherits(Register, _React$Component);

    function Register() {
        _classCallCheck(this, Register);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this));

        _this.state = {
            userName: '',
            password: ''
        };
        return _this;
    }

    _createClass(Register, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(Object.assign({}, this.state, _defineProperty({}, e.target.name, e.target.value)));
        }
    }, {
        key: 'register',
        value: function register(event) {
            this.props.register({ email: this.state.userName, password: this.state.password, confirmPassword: this.state.password });
            event.preventDefault();
        }
    }, {
        key: 'getValidationState',
        value: function getValidationState() {
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Grid"],
                null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'h1',
                    null,
                    'Register new account'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('hr', null),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Form"],
                    { horizontal: true, onSubmit: this.register, autoComplete: 'on' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                        { name: 'userName', validationState: this.getValidationState() },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                            { componentClass: __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["ControlLabel"], sm: 2 },
                            'Email'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                            { sm: 10 },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { name: 'userName', type: 'text', onChange: this.handleChange, placeholder: 'Email' }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"].Feedback, null)
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                        { name: 'password' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                            { componentClass: __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["ControlLabel"], sm: 2 },
                            'Password'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                            { sm: 10 },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"], { name: 'password', type: 'password', onChange: this.handleChange, placeholder: 'Password' })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormControl"].Feedback, null)
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["FormGroup"],
                        null,
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Col"],
                            { smOffset: 2, sm: 10 },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Button"],
                                { className: 'btn btn-primary', type: 'submit' },
                                'Register'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Register;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Register.prototype, "handleChange", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Register.prototype, "register", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_3_core_decorators__["autobind"]], Register.prototype, "getValidationState", null);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.register;
}, __WEBPACK_IMPORTED_MODULE_5__store_Register__["b" /* actionCreators */])(Register);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_User__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var User = function (_React$Component) {
    _inherits(User, _React$Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getUser();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'User'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This component demonstrates fetching data from the server and working with URL parameters.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'is authenticated: ',
                    this.props.isAuthenticated ? 'Yes!' : ':-('
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'email: ',
                    this.props.email
                )
            );
        }
    }]);

    return User;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state.user;
}, __WEBPACK_IMPORTED_MODULE_2__store_User__["b" /* actionCreators */])(User);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var getDimensions = function getDimensions() {
    return { height: window.innerHeight - 50 + 'px' };
};

var FullScreen = function (_React$Component) {
    _inherits(FullScreen, _React$Component);

    function FullScreen(props) {
        _classCallCheck(this, FullScreen);

        var _this = _possibleConstructorReturn(this, (FullScreen.__proto__ || Object.getPrototypeOf(FullScreen)).call(this, props));

        _this.state = { height: '100vh' };
        _this.handleResize = _this.handleResize.bind(_this);
        return _this;
    }

    _createClass(FullScreen, [{
        key: 'handleResize',
        value: function handleResize() {
            this.setState(getDimensions());
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'render',
        value: function render() {
            var child = __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children), { style: { height: this.state.height } });

            return child;
        }
    }]);

    return FullScreen;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = FullScreen;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);


var willEnter = function willEnter() {
    return {
        opacity: 0,
        scale: 0.97
    };
};
var willLeave = function willLeave() {
    return {
        opacity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(0),
        scale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(1.00)
    };
};
var getStyles = function getStyles() {
    return {
        opacity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(1),
        scale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(1)
    };
};
var RouteTransition = function RouteTransition(_ref) {
    var child = _ref.children,
        pathname = _ref.pathname;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        __WEBPACK_IMPORTED_MODULE_1_react_motion__["TransitionMotion"],
        { styles: [{
                key: pathname,
                style: getStyles(),
                data: { child: child }
            }], willEnter: willEnter, willLeave: willLeave },
        function (interpolated) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                interpolated.map(function (_ref2) {
                    var key = _ref2.key,
                        style = _ref2.style,
                        data = _ref2.data;
                    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { key: key + '-transition', style: Object.assign({}, styles.wrapper, { opacity: style.opacity, transform: 'scale(' + style.scale + ')' }) },
                        data.child
                    );
                })
            );
        }
    );
};
var styles = {
    wrapper: {
        position: 'absolute',
        width: '100%'
    }
};
/* harmony default export */ __webpack_exports__["a"] = RouteTransition;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_decorators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_decorators__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







;

var ScrollEffect = function (_React$Component) {
    _inherits(ScrollEffect, _React$Component);

    function ScrollEffect() {
        _classCallCheck(this, ScrollEffect);

        var _this = _possibleConstructorReturn(this, (ScrollEffect.__proto__ || Object.getPrototypeOf(ScrollEffect)).call(this));

        _this.state = {
            animated: false
        };
        return _this;
    }

    _createClass(ScrollEffect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleScroll(undefined);
            this.scrollHandler = __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default()(this.handleScroll.bind(this), 200, { trailing: true });
            window.addEventListener('scroll', this.scrollHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.scrollHandler.cancel();
            window.removeEventListener('scroll', this.scrollHandler);
        }
    }, {
        key: 'singleAnimate',
        value: function singleAnimate() {
            var _this2 = this;

            setTimeout(function () {
                _this2.props.callback();
            }, (this.props.duration | 1) * 1000);
        }
    }, {
        key: 'queueAnimate',
        value: function queueAnimate() {
            var _this3 = this;

            var element = __WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"](this);
            var checkClass = function checkClass(el) {
                return el.className === _this3.props.queueClass;
            };
            var number = 0;
            var setClass = function setClass(el) {
                el.style.visibility = "hidden";
                setTimeout(function () {
                    el.style.visibility = "visible";
                    el.className = el.className + ' animated ' + _this3.props.animate;
                }, number * (_this3.props.queueDuration * 1000));
                number++;
            };
            var findClass = function findClass(element) {
                Array.prototype.forEach.call(element.childNodes, function (child) {
                    findClass(child);
                    if (checkClass(child)) {
                        setClass(child);
                    }
                });
            };

            findClass(element);

            setTimeout(function () {
                _this3.props.callback();
            }, this.props.duration * 1000 * number);
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(e) {
            if (!this.state.animated) {
                var element = __WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"](this);
                var elementPositionY = element.getBoundingClientRect().top + document.body.scrollTop,
                    scrollPositionY = window.scrollY,
                    windowHeight = window.innerHeight;
                if (scrollPositionY + windowHeight * .95 >= elementPositionY + this.props.offset * 1) {
                    this.setState({
                        animated: true
                    });
                    this.props.queueClass == "" && this.singleAnimate();
                    this.props.queueClass !== "" && this.queueAnimate();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state;

            var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(_defineProperty({
                'animated': true
            }, props.animate, state.animated && props.queueClass === ""));
            classes += ' ' + props.className;
            var style = state.animated ? {} : {};
            if (props.duration !== undefined) {
                style.WebkitAnimationDuration = props.duration + 's';
                style.AnimationDuration = props.duration + 's';
            }
            return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](
                'div',
                { className: classes, style: style },
                props.children
            );
        }
    }]);

    return ScrollEffect;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = ScrollEffect;

ScrollEffect.defaultProps = {
    animate: "fadeInUp",
    offset: 0,
    className: "",
    duration: 1,
    queueDuration: 1,
    queueClass: "",
    callback: function callback() {}
};
__WEBPACK_IMPORTED_MODULE_1_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_5_core_decorators__["autobind"]], ScrollEffect.prototype, "handleScroll", null);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return START_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return COUNTER_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STOP_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COUNTER_STOPPED; });

var INCREMENT_COUNTER = 'IncrementCounterAction';
var DECREMENT_COUNTER = 'DecrementCounterAction';
var START_COUNTER = 'StartCounterAction';
var COUNTER_STARTED = 'CounterStartedAction';
var STOP_COUNTER = 'StopCounterAction';
var COUNTER_STOPPED = 'CounterStoppedAction';

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* unused harmony export actionCreators */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
var _this = this;


var DefaultState = {
    connected: false
};
var actionCreators = {
    startListener: function startListener() {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var uri, socket;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                uri = (window.location.protocol === "http:" ? "ws://" : "wss://") + window.location.host + "/actions";
                                socket = new WebSocket(uri);

                                socket.onopen = function (e) {
                                    console.log("opened " + uri);
                                    dispatch({ type: 'CONNECTED' });
                                };
                                socket.onclose = function (e) {
                                    console.log("closed");
                                    dispatch({ type: 'DISCONNECTED' });
                                    socket = null;
                                };
                                socket.onmessage = function (e) {
                                    console.log("Received: " + e.data);
                                    var action = JSON.parse(e.data);
                                    if (action && action.type) {
                                        dispatch(action);
                                    } else {
                                        console.log('websocket received unknown data!');
                                    }
                                };
                                socket.onerror = function (e) {
                                    if (e.error) console.log("Error: " + e.error);
                                };

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'CONNECTED':
            return { connected: true };
        case 'DISCONNECTED':
            return { connected: false };
        default:
            var exhaustiveCheck = action;
    }
    return state || DefaultState;
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Counter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Contact__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Session__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WebsocketConnection__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Login__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__User__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Register__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Auth__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });











var reducers = {
    session: __WEBPACK_IMPORTED_MODULE_4__Session__["b" /* reducer */],
    connection: __WEBPACK_IMPORTED_MODULE_5__WebsocketConnection__["a" /* reducer */],
    auth: __WEBPACK_IMPORTED_MODULE_9__Auth__["b" /* reducer */],
    user: __WEBPACK_IMPORTED_MODULE_7__User__["c" /* reducer */],
    login: __WEBPACK_IMPORTED_MODULE_6__Login__["b" /* reducer */],
    register: __WEBPACK_IMPORTED_MODULE_8__Register__["a" /* reducer */],
    counter: __WEBPACK_IMPORTED_MODULE_1__Counter__["a" /* reducer */],
    footer: __WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* reducer */],
    contact: __WEBPACK_IMPORTED_MODULE_3__Contact__["a" /* reducer */],
    weatherForecasts: __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__["a" /* reducer */]
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB3aWR0aD0iOW1tIiBoZWlnaHQ9IjltbSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSI+DQogIDxkZXNjPlJST0QgTG9nbzwvZGVzYz4NCiAgPCEtLSBTaG93IG91dGxpbmUgb2YgY2FudmFzIHVzaW5nICdyZWN0JyBlbGVtZW50IC0tPg0KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEyIiAgLz4NCjwvc3ZnPg=="

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configureStore__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_User__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_Login__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_Auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_Session__ = __webpack_require__(10);












/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* default */], location: params.location }, function (error, redirectLocation, renderProps) {
            if (error) {
                throw error;
            }

            if (redirectLocation) {
                resolve({ redirectUrl: redirectLocation.pathname });
                return;
            }

            if (!renderProps) {
                throw new Error('The location \'' + params.url + '\' doesn\'t match any route configured in react-router.');
            }

            var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__configureStore__["a" /* default */])();
            store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_10__store_Session__["a" /* INIT_SESSION */], payload: { xsrfToken: params.data.xsrfToken, id: params.data.sessionId } });
            if (params.data.isAuthenticated) {
                store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__store_Login__["a" /* LOGIN_SUCCESS */] });
                store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_9__store_Auth__["a" /* TOKEN_RECEIVED */], payload: { accessToken: params.data.accessToken } });
                store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__store_User__["a" /* GETUSER_RECEIVED */], payload: params.data.userModel });
            }
            var app = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router__["RouterContext"], renderProps)
            );

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);

            params.domainTasks.then(function () {
                resolve({
                    html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                    globals: { initialReduxState: store.getState() }
                });
            }, reject);
        });
    });
});

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQyNTlhN2I0MmY5ODZhZjI0ZDAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0c2xpYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG9tYWluLXRhc2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvVXNlci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvTG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NvbnRhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvUmVnaXN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImFzcG5ldC1wcmVyZW5kZXJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Vc2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGliL2Z1bGxzY3JlZW4udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xpYi9zY3JvbGwtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc2VydmVyL0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYnNvY2tldENvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9pbWFnZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxrQzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBTXRDLElBQXFCLGtCQUEwQjtBQUMvQyxJQUFzQixtQkFBMkI7QUFFeEQsSUFBc0I7QUFDSCxxQkFBTztBQUNqQixXQUFXO0FBQ1AsZUFBVztBQUNaLGNBQVc7QUFDUixpQkFBVztBQUNoQixZQUNSO0FBUGtDO0FBd0I5QixJQUFxQjtBQUVoQjtBQUFFLHlCQUFrRCxVQUFVO0FBQXpCO0FBQ3hDOzs7OztBQUFhLHNIQUEyQjtBQUNyQixpREFBVztBQUNmO0FBQ1csd0RBRXBCO0FBSFc7QUFGeUIsaUNBQXJCLEVBTVo7QUFBUywyQ0FBWSxTQUE4QjttQ0FDbkQsS0FBVTtBQUNQLDZDQUFDLEVBQU0sTUFBa0Isa0JBQVMsU0FDMUM7QUFBRzs7QUFFQSw0R0FBWTtBQUNYLHlDQUFDLEVBQU0sTUFFckI7Ozs7Ozs7Ozs7O0FBakI0QixDQUF2QjtBQW9CRCxJQUFjLFVBQXVCLGlCQUFpQixPQUFxQjtBQUN0RSxZQUFPLE9BQVE7QUFDbEIsYUFBb0I7QUFDVixtQkFBTztBQUNqQixhQUFxQjtBQUNYLG1CQUFPLE9BQVM7QUFDMUI7QUFDSSxnQkFBcUIsa0JBQzVCOztBQUVLLFdBQU0sU0FDaEI7QUFBRSxDQVhLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckQ2QjtBQUlVO0FBQ3lFO0FBRWhILElBQW1CLGdCQUF3QjtBQUMzQyxJQUFtQixnQkFBd0I7QUFDM0MsSUFBbUIsZ0JBQXdCO0FBQzNDLElBQWlCLGNBQXNCO0FBTzlDLElBQXVCO0FBQ0wsb0JBQU87QUFDUixtQkFDaEI7QUFIcUM7QUErQmhDLElBQXFCO0FBRWxCLDBCQUE4QjtBQUE1Qix5QkFBNkUsVUFBVTtBQUF6Qjs7Ozs7O0FBQ3pELHlDQUFDLEVBQU0sTUFFZjtBQUFRLHVDQUFhLFdBQVEsUUFDN0I7O2lIQUFxRDtBQUMzQyw0Q0FBUTtBQUNILGlEQUFXO0FBQ2Y7QUFDVyx3REFBb0I7QUFDcEIsd0RBQ2pCO0FBSFE7QUFJTCwwQ0FBTSxLQUFVLFVBQ3JCO0FBUm9ELGlDQUFuQjs7O0FBQVg7O0FBVXRCLG9DQUFTLFNBQUksSUFBRTtBQUNOLDZDQUFDLEVBQU0sTUFBbUI7QUFFMUIsNkNBQW1CLDhEQUFtQjtBQUVoQyxpR0FBSyxLQUN2QjtBQUFNLHVDQUNvQjtBQUNkLDZDQUFDLEVBQU0sTUFDbkI7QUFFTjs7Ozs7Ozs7Ozs7QUEzQjRCLENBQXZCO0FBOEJELElBQWMsVUFBd0IsaUJBQWtCLE9BQXFCO0FBQ3hFLFlBQU8sT0FBUTtBQUNsQixhQUFrQjtBQUNSLG1CQUFDLEVBQWdCLGdCQUFNLE1BQWUsZUFBVTtBQUMxRCxhQUFnQjtBQUNOLG1CQUFDLEVBQWdCLGdCQUFPLE9BQWUsZUFBVTtBQUMzRCxhQUFrQjtBQUNSLG1CQUFDLEVBQWdCLGdCQUFPLE9BQWUsZUFBUztBQUMxRCxhQUFrQjtBQUNSLG1CQUFDLEVBQWdCLGdCQUFPLE9BQWUsZUFBVTtBQUMzRDtBQUNJLGdCQUFxQixrQkFDNUI7O0FBRUssV0FBTSxTQUNoQjtBQUFFLENBZkssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFNkI7QUFJN0IsSUFBbUIsZ0JBQXdCO0FBQzNDLElBQW9CLGlCQUF5QjtBQUM3QyxJQUFpQixjQUFzQjtBQVM5QyxJQUFzQjtBQUNSLGdCQUNiO0FBRm1DO0FBMEI5QixJQUFxQjtBQUVmO0FBQUUseUJBQWtELFVBQVU7QUFBekI7Ozs7OztBQUNqQyx5Q0FBQyxFQUFNLE1BRWY7QUFBUSx1Q0FBYSxXQUFRLFFBQzdCOztpSEFBcUQ7QUFDM0MsNENBQVE7QUFDSCxpREFBVztBQUNmO0FBQ1csd0RBQW9CO0FBQ3BCLHdEQUNqQjtBQUhRO0FBSUwsMENBR0w7QUFWb0QsaUNBQW5COzs7QUFBWDs7cUNBVWIsU0FDUjs7Ozs7O3VDQUE2QyxTQUFROzs7QUFBdEI7O0FBQ3ZCLHlDQUFDLEVBQU0sTUFBZ0IsZ0JBQVMsU0FHbEI7Ozs7O0FBQ2QseUNBQUMsRUFBTSxNQUd6Qjs7Ozs7Ozs7Ozs7QUF6QjRCLENBQXZCO0FBNEJELElBQWMsVUFBdUIsaUJBQWlCLE9BQXFCO0FBQ3RFLFlBQU8sT0FBUTtBQUNsQixhQUFrQjtBQUNSLHFDQUFXLFNBQVksWUFBUztBQUMxQyxhQUFtQjtBQUNULG1CQUFDLEVBQVksWUFBTyxPQUFhLGFBQVEsT0FBUSxRQUFlO0FBQzFFLGFBQWdCO0FBQ04scUNBQVcsU0FBWSxZQUFVO0FBQzNDO0FBQ0ksZ0JBQXFCLGtCQUM1Qjs7QUFFSyxXQUFNLFNBQ2hCO0FBQUUsQ0FiSyxDOzs7Ozs7Ozs7Ozs7OztBQ2hFZ0U7O0FBRXZFO0FBQ1Usa0RBQStDLFFBQVEsU0FBRSxVQUFXO0FBQ3RFLFlBQUssSUFBTyxLQUFTLFdBQUssS0FBSTtZQUFHLElBQUksS0FBTyxNQUFPLElBQUUsSUFBTSxNQUFRO0FBQzdELGVBQUUsRUFBUyxTQUNyQjtBQUNKLEtBSmlEO0FBSWhEO0FBRU0sSUFBa0IsZUFvQjJFOztBQUU5RixJQUFxQjtBQUViLG9DQUEyQjtBQUF6Qix5QkFBMEUsVUFBVTtBQUF6QjtBQUVuRTs7Ozs7QUFBYSw0Q0FBVyxTQUFlLGVBQWMsY0FBUSxRQUM3RDtBQUFNLHFDQUFXLFNBQWUsZUFBVyxXQUFRLFFBQU87O0FBQ2xELHlDQUFDLEVBQU0sTUFBYyxjQUFTLFNBQVUsWUFBSSxFQUFXLFdBQVcsV0FBSSxJQU11Qzs7Ozs7Ozs7Ozs7QUFaL0YsQ0FBdkI7O0FBY1AsSUFBcUIsa0JBQWtCLEVBQVcsV0FBVyxXQUFJLElBQWM7QUFFekUsSUFBYyxVQUEyQixpQkFBcUIsT0FBcUI7QUFDOUUsWUFBTyxPQUFRO0FBQ2xCLGFBQWlCO0FBQ1AsbUJBQU8sT0FBUztBQUdtQjtBQUVoRDs7QUFDSyxXQUFNLFNBQ2hCO0FBQUUsQ0FWSyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTZGOztBQUU5RixJQUFxQjtBQUVOLGtEQUFvQjtBQUFsQix5QkFBbUUsVUFBVTtBQUF6Qjs7Ozs7O0FBQzNELHlDQUFDLEVBQU0sTUFBdUIsdUJBQVMsU0FDL0M7O2lIQUFxQztBQUMzQiw0Q0FBUTtBQUNWLDBDQUFNLEtBQVUsVUFBTTtBQUNuQixpREFBYTtBQUNGLHdEQUd0QjtBQUp5QixxQ0FBWjtBQUgwQixpQ0FBYjs7O0FBQVg7O3VDQU9VLFNBQVE7OztBQUF0Qjs7QUFDUixvQ0FBSyxLQUFPLE9BQU8sV0FBVSxNQUNwQixTQUFDLEVBQU0sTUFBeUIseUJBQVMsU0FBRSxFQUFRLFFBQU0sS0FDakUsa0JBQ1EsU0FBQyxFQUFNLE1BQXNCLHNCQUFTLFNBQUUsRUFBTSxNQUFNLE1BQVEsUUFBTSxLQUt1Qzs7Ozs7Ozs7Ozs7QUFwQi9GLENBQXZCOztBQXNCUCxJQUFtQixnQkFBaUIsRUFBYyxjQUFPLE9BQVcsV0FBTyxPQUFNLE1BQU87QUFFbEYsSUFBYyxVQUEwQixpQkFBb0IsT0FBcUI7QUFDNUUsWUFBTyxPQUFRO0FBQ2xCLGFBQTBCO0FBQ2hCO0FBQ0Usc0JBQVEsT0FBUTtBQUNSLDhCQUFNO0FBQ1QsMkJBQ1g7QUFKSztBQUtYLGFBRXFDO0FBQzNCO0FBQ0Usc0JBQUUsRUFBVyxXQUFJLElBQVUsVUFBSSxJQUFPLE9BQUksSUFBTyxPQUFJLElBQVMsU0FBTTtBQUM1RCw4QkFBTztBQUNWLDJCQUFNO0FBQ1Qsd0JBQVEsT0FBUSxRQUN4QjtBQUxLO0FBTVgsYUFFcUM7QUFDM0I7QUFDRSxzQkFBUSxPQUFRLFFBQUs7QUFDYiw4QkFBTztBQUNWLDJCQUFNO0FBQ1Qsd0JBQVEsT0FBUSxRQUN4QjtBQUxLO0FBT3FHO0FBQzVHLGdCQUFxQixrQkFDNUI7O0FBRUssV0FBTSxTQUNoQjtBQUFFLENBaENLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVzQztBQUdEO0FBUzVDLElBQXVCO0FBQ2QsV0FBRztBQUNELGFBQU87QUFDRCxtQkFPd0Y7QUFWakU7O0FBV3hDLElBQXFCLGtCQUEwQjtBQUMvQyxJQUFxQixrQkFrQitFOztBQUVwRyw0QkFBNkMsUUFBbUI7O0FBQzVEOzs7Ozs7eUdBQW9DO0FBQzFCLG9DQUFRO0FBQ0gseUNBQVc7QUFDZjtBQUNXLGdEQUFvQjtBQUNwQixnREFDakI7QUFIUTtBQUlMLGtDQUFNLEtBQVUsVUFFbEI7QUFUZ0MseUJBQVo7OztBQUFYO3lEQVVsQjs7Ozs7Ozs7O0FBQUE7QUFFSyxJQUFxQjtBQUNoQjtBQUFFLGVBQW1DLFVBQVMsVUFBVTtBQUNuRCxxQkFBQyxFQUFNLE1BQXFCO0FBQ3BDLGdCQUFTLFFBQWM7QUFDdkIsZ0JBQWEsc0ZBQTRCLHNCQUFRLE1BQVEsUUFBRztBQUN6Qyw2QkFBVztBQUNmO0FBQ1csb0NBRXBCO0FBSFc7QUFGNkMsYUFBekMsRUFNWjtBQUFTLHVCQUFZLFNBQWlDO2VBQ3RELEtBQUs7QUFDRSx5QkFBQyxFQUFNLE1BQWlCLGlCQUFTLFNBQzdDO0FBQUUsZUFDSSxNQUFDLFVBQU07QUFDRix3QkFBSSxJQUNmO0FBQUc7QUFFQSx3RkFDWDtBQUFDOztBQUNRO0FBQUUseUJBQWtELFVBQVU7QUFBekI7Ozs7OztBQUNsQyx5Q0FBQyxFQUFNLE1BQVEsMEVBQ3ZCO0FBQVMsd0NBQ1Q7O3VDQUF1QyxtQkFBQyxFQUFNLE1BQVEsMEVBQW9CLElBQU8sTUFBUSxRQUFZOzs7QUFBdEY7O0FBQ1Isd0NBQUksSUFDZDs7Ozs7Ozs7Ozs7QUFDUTtBQUFFLHlCQUFrRCxVQUFVO0FBQXpCOzs7Ozs7QUFDbEMseUNBQUMsRUFBTSxNQUFRLDBFQUN2QjtBQUFTLHdDQUNUOzt1Q0FBdUMsbUJBQUMsRUFBTSxNQUFRLDBFQUFvQixJQUFPLE1BQVEsUUFBWTs7O0FBQXRGOztBQUNSLHdDQUFJLElBQ2Q7Ozs7Ozs7Ozs7O0FBQ0k7QUFBRSx5QkFBa0QsVUFBVTtBQUF6Qjs7Ozs7O0FBQzlCLHlDQUFDLEVBQU0sTUFBUSxzRUFDdkI7QUFBUyx3Q0FDVDs7dUNBQXVDLG1CQUFDLEVBQU0sTUFBUSxzRUFBZ0IsSUFBTyxNQUFRLFFBQVk7OztBQUFsRjs7QUFDUix3Q0FBSSxJQUNkOzs7Ozs7Ozs7OztBQUNHO0FBQUUseUJBQWtELFVBQVU7QUFBekI7Ozs7OztBQUM3Qix5Q0FBQyxFQUFNLE1BQVEscUVBQ3ZCO0FBQVMsd0NBQ1Q7O3VDQUF1QyxtQkFBQyxFQUFNLE1BQVEscUVBQWUsSUFBTyxNQUFRLFFBQVk7OztBQUFqRjs7QUFDUix3Q0FBSSxJQUswRzs7Ozs7Ozs7Ozs7QUEvQy9GLENBQXZCOztBQWlERCxJQUFjLFVBQTBCLGlCQUFvQixPQUFxQjtBQUM1RSxZQUFPLE9BQVE7QUFDbEIsYUFBb0I7QUFDVixxQ0FBVyxTQUFlLGVBQVM7QUFDN0MsYUFBb0I7QUFDVixxQ0FBeUIscUJBQVcsT0FBVztBQUN6RCxhQUFXLDBFQUFrQjtBQUNuQixxQ0FBVyxTQUFPLE9BQU8sTUFBTSxRQUFPO0FBQ2hELGFBQVcsMEVBQWtCO0FBQ25CLHFDQUFXLFNBQU8sT0FBTyxNQUFNLFFBQU87QUFDaEQsYUFBVyxzRUFBYztBQUNmLHFDQUFXLFNBQWUsZUFBUztBQUM3QyxhQUFXLHdFQUFnQjtBQUNqQixxQ0FBVyxTQUFlLGVBQU8sT0FBUyxTQUFTO0FBQzdELGFBQVcscUVBQWE7QUFDZCxxQ0FBVyxTQUFlLGVBQVM7QUFDN0MsYUFBVyx3RUFBZ0I7QUFDakIscUNBQVcsU0FBZSxlQUFPLE9BQVMsU0FBVTtBQUVrRDtBQUM1RyxnQkFBcUIsa0JBSXNCOzs7QUFDN0MsV0FBTSxTQUNoQjtBQUFFLENBMUJLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RTZGOztBQUU5RixJQUFxQjtBQUVaLHNDQUFrQjtBQUFoQix5QkFBaUUsVUFBVTtBQUF6Qjs7Ozs7O0FBQ25ELHlDQUFDLEVBQU0sTUFDZjs7aUhBQXVDO0FBQzdCLDRDQUFRO0FBQ1YsMENBQVUsV0FBTyxLQUFNO0FBQ3BCLGlEQUFhO0FBQ0Ysd0RBR3RCO0FBSnlCLHFDQUFaO0FBSDRCLGlDQUFmOzs7QUFBWDs7dUNBT1UsU0FBUTs7O0FBQXRCOztBQUNILHlDQUFDLEVBQU0sTUFBbUIsbUJBQVMsU0FBTSxLQUtvRTs7Ozs7Ozs7Ozs7QUFqQi9GLENBQXZCOztBQW1CUCxJQUFtQixnQkFBZ0IsRUFBYyxjQUFPLE9BQVcsV0FBVTtBQUV2RSxJQUFjLFVBQXlCLGlCQUFtQixPQUFxQjtBQUMxRSxZQUFPLE9BQVE7QUFDbEIsYUFBbUI7QUFDVDtBQUNVLDhCQUFNO0FBQ1QsMkJBQ1g7QUFISztBQUlYLGFBRXFDO0FBQzNCO0FBQ1UsOEJBQU87QUFDViwyQkFBTTtBQUNSLHlCQUFRLE9BQ2pCO0FBSks7QUFNcUc7QUFDNUcsZ0JBQXFCLGtCQUM1Qjs7QUFFSyxXQUFNLFNBQ2hCO0FBQUUsQ0FyQkssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0Q2QjtBQUtVO0FBRXZDLElBQXNCLG1CQUEyQjtBQUNqRCxJQUFzQixtQkFBMkI7QUFDakQsSUFBb0IsaUJBQXlCO0FBUXBELElBQTBCO0FBQ1osZ0JBQU87QUFDUCxnQkFBTztBQUNYLFlBQ1Q7QUFKMkM7QUFzQnRDLElBQXFCO0FBRWYsZ0NBQW1DO0FBQWpDLHlCQUFrRixVQUFVO0FBQXpCOzs7Ozs7QUFDakUseUNBQUMsRUFBTSxNQUNmO0FBQVEsdUNBQWEsV0FBUSxRQUM3Qjs7aUhBQXdEO0FBQzlDLDRDQUFRO0FBQ0gsaURBQVc7QUFDZjtBQUNXLHdEQUFvQjtBQUNwQix3REFDakI7QUFIUTtBQUlMLDBDQUFNLEtBQVUsVUFDckI7QUFSdUQsaUNBQXRCOzs7QUFBWDs7QUFVdEIsb0NBQVMsU0FBSSxJQUFFO0FBQ04sNkNBQUMsRUFBTSxNQUFrQixrQkFBUyxTQUFtQjtBQUMvQyxpR0FBSyxLQUN2QjtBQUFNLHVDQUFFO0FBQ0ksNkNBQUMsRUFBTSxNQUNuQjtBQUFDO0FBRU0sd0NBQUksSUFBa0IsbUJBRW5DOzs7Ozs7Ozs7OztBQXhCNEIsQ0FBdkI7QUEyQkQsSUFBYyxVQUEyQixpQkFBcUIsT0FBcUI7QUFDOUUsWUFBTyxPQUFRO0FBQ2xCLGFBQXFCO0FBQ1gsbUJBQUMsRUFBWSxZQUFNLE1BQVksWUFBTyxPQUFRLFFBQU87QUFDL0QsYUFBbUI7QUFDVCxtQkFBQyxFQUFZLFlBQU8sT0FBWSxZQUFPLE9BQVEsUUFBTztBQUNoRSxhQUFxQjtBQUNYLG1CQUFDLEVBQVksWUFBTyxPQUFZLFlBQU8sT0FBUSxRQUFPO0FBQ2hFO0FBQ0ksZ0JBQXFCLGtCQUM1Qjs7QUFFSyxXQUFNLFNBQ2hCO0FBQUUsQ0FiSyxDOzs7Ozs7Ozs7OztBQ3pCNkY7O0FBRTlGLElBQXFCO0FBQ0EsOERBQXlCO0FBQXZCLGVBQXlELFVBQVMsVUFBVSxVQUNWO0FBQ3BGLGdCQUFlLG1CQUFlLFdBQWlCLGlCQUFnQixnQkFBRTtBQUNoRSxvQkFBYSwySUFBNkUsZ0JBQ2pGO0FBQVMsMkJBQVksU0FBc0M7aUJBRDlDLEVBRWIsS0FBSztBQUNFLDZCQUFDLEVBQU0sTUFBNkIsNkJBQWdCLGdCQUFnQixnQkFBVyxXQUMzRjtBQUFHO0FBRUEsNEZBQTBFO0FBQ3pFLHlCQUFDLEVBQU0sTUFBNkIsNkJBQWdCLGdCQUNoRTtBQUNKO0FBSXlIOztBQWpCL0YsQ0FBdkI7O0FBbUJQLElBQW1CLGdCQUEwQixFQUFnQixnQkFBTSxNQUFXLFdBQUksSUFBVyxXQUFVO0FBRWpHLElBQWMsVUFBbUMsaUJBQTZCLE9BQXFCO0FBQzlGLFlBQU8sT0FBUTtBQUNsQixhQUFnQztBQUN0QjtBQUNZLGdDQUFRLE9BQWU7QUFDNUIsMkJBQU8sTUFBVTtBQUNqQiwyQkFDWDtBQUpLO0FBS1gsYUFFcUM7QUFDOUIsZ0JBQU8sT0FBZSxtQkFBVSxNQUFnQixnQkFBRTtBQUMzQztBQUNZLG9DQUFRLE9BQWU7QUFDNUIsK0JBQVEsT0FBVTtBQUNsQiwrQkFFakI7QUFMVztBQUtWO0FBQ0s7QUFFc0c7QUFDNUcsZ0JBQXFCLGtCQUM1Qjs7QUFFSyxXQUFNLFNBQ2hCO0FBQUUsQ0F6QkssQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVxRztBQUM1RTtBQUNtQjtBQUNFO0FBR3ZDLHdCQUF3RCxjQUNnQztBQUNsRyxRQUFxQixrQkFBRyxPQUFhLFdBQWdCLGNBQU8sT0FDbEI7O0FBQzFDLFFBQXVCLG9CQUFrQixtQkFBbUIsZ0JBQWlEO0FBQzdHLFFBQStCLGtHQUNaLDhFQUFPLHNEQUNMLG9CQUFzQjtBQUFJLGVBQzlDO0tBSHdDLEVBSzBCOztBQUNuRSxRQUFpQixjQUFtQixpQkFBVztBQUMvQyxRQUFXLFFBQTRCLDBCQUFZLGFBRUU7O0FBQ2xELFFBQU8sS0FBSyxFQUFFO0FBQ1AsZUFBSSxJQUFPLE9BQVUsV0FBRTtBQUN6QixnQkFBcUIsa0JBQVUsUUFBNkI7QUFDdkQsa0JBQWUsZUFBaUIsaUJBQWdCLGdCQUN6RDtBQUNKO0FBQUM7QUFFSyxXQUNWO0FBQUM7QUFFRCwwQkFBcUM7QUFDM0IsV0FBZ0IsOEVBQXlCLE9BQU8sT0FBRyxJQUFhLGFBQUUsRUFBUyxTQUNyRjtBQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzhCO0FBQzJCO0FBQ2I7QUFDUjtBQUNNO0FBQ0k7QUFDUjtBQUNNO0FBQ0Y7QUFDTjt3REFFckM7QUFBcUI7QUFBTixNQUFpQixXQUM1QjtBQUFBLHlEQUFNLHVEQUFLLE1BQUksS0FBWSxZQUFDLEVBQU0sTUFDbEM7QUFBQSx5REFBTSx1REFBSyxNQUFTLFVBQVksWUFBQyxFQUFNLE1BQ3ZDO0FBQUEseURBQU0sdURBQUssTUFBWSxhQUFZLFlBQUMsRUFBTSxNQUMxQztBQUFBLHlEQUFNLHVEQUFLLE1BQVcsWUFBWSxZQUFDLEVBQU0sTUFDekM7QUFBQSx5REFBTSx1REFBSyxNQUFXLFlBQVksWUFBQyxFQUFNLE1BQ3pDO0FBQUEseURBQU0sdURBQUssTUFBUSxTQUFZLFlBQUMsRUFBTSxNQUN0QztBQUFBO0FBQU07VUFBSyxNQUFhLGNBQVksWUFBQyxFQUFNLE1BQ3ZDO0FBQUEsNkRBQU0sdURBQUssTUFJbUI7Ozs7QUFDbkMsSUFBTyxLQUFLLEVBQUU7QUFDUCxXQUFJLElBQ2Q7QUFBQyxDOzs7Ozs7QUMxQkQsZ0Q7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNPO0FBQ0s7QUFDOEY7QUFFeEY7QUFLakQsSUFBaUI7QUFDSixlQUFJO0FBQ0wsY0FBSTtBQUNQLFdBQUk7QUFDSixXQUFJO0FBQ0YsYUFHWDtBQVI4Qzs7SUFRaEM7OztBQUVWLHFCQUErQjtBQUN0Qjs7c0hBQVE7O0FBQ1QsY0FBTSwwQkFBbUIsYUFBVSxNQUMzQzs7QUFHeUI7Ozs7a0RBQXdCO0FBQzFDLGdCQUFLLEtBQU0sVUFBYyxVQUFNLE1BQzFCLEtBQVMsU0FBVSxVQUMvQjtBQUdZOzs7cUNBQU87QUFDWCxpQkFBWSw2QkFBRSxFQUFPLE9BQU0sTUFBRyxFQUFPLE9BQzdDO0FBR007OzsrQkFBNkI7QUFDM0IsaUJBQU0sTUFBa0Isa0JBQUssS0FBUTtBQUNwQyxrQkFDVDtBQUVhOzs7O0FBQ0g7QUFDRjtBQURHO0FBRUg7Ozs7O0FBQUE7QUFBSTtzQkFBVSxXQUNWO0FBQUE7QUFBSTswQkFBSSxJQUNKO0FBQUE7QUFBSzs4QkFBTyxRQUNSO0FBQUE7QUFBSztrQ0FBVyxrQkFBVSxVQUFLLEtBQzNCO0FBQ0k7OztBQUFPOzswQ0FBVSxXQUNqQjs7O0FBQUE7QUFDSTs7QUFBQTtBQUFJOzhDQUFJLElBQUksSUFBVSxVQUNsQjtBQUFBLGlHQUFZLGdFQUFLLE1BQVksYUFBSyxNQUFPLFFBQVUsVUFBSyxLQUFjLGNBQU8sT0FBSyxLQUFNLE1BQVcsV0FBWSxhQUd2SDs7O0FBQUE7QUFDSTs7QUFBQTtBQUFJOzhDQUFJLElBQUksSUFBVSxVQUNsQjtBQUFBLGlHQUFZLGdFQUFLLE1BQVcsWUFBSyxNQUFPLFFBQVUsVUFBSyxLQUFjLGNBQU8sT0FBSyxLQUFNLE1BQVUsVUFBWSxhQUlySDs7O0FBQUE7QUFDSTs7QUFBQTtBQUFJOzhDQUFJLElBQUksSUFBVSxVQUNsQjtBQUFBLGlHQUFZLGdFQUFLLE1BQVEsU0FBSyxNQUFPLFFBQVUsVUFBSyxLQUFjLGNBQU8sT0FBSyxLQUFNLE1BQU8sT0FBWSxhQUkvRzs7O0FBQUE7QUFDSTs7QUFBQTtBQUFJOzhDQUFJLElBQUksSUFBVSxVQUNsQjtBQUFBLGlHQUFZLGdFQUFLLE1BQVEsU0FBSyxNQUFPLFFBQVUsVUFBSyxLQUFjLGNBQU8sT0FBSyxLQUFNLE1BQU8sT0FBWSxhQUkvRzs7O0FBQUE7QUFDSTs7QUFBQTtBQUFJOzhDQUFJLElBQUksSUFBVSxVQUNsQjtBQUFBLGlHQUFZLGdFQUFlLGdCQUFXLFlBQUssTUFBVSxXQUFNLE1BQUcsR0FBVSxVQUFLLEtBQWMsY0FBTyxPQUFLLEtBQU0sTUFBSyxLQUFTLFNBQVksYUFJL0k7OztBQUFBO0FBQ0k7O0FBQUE7QUFBSTs4Q0FBSSxJQUFJLElBQVUsV0FDbEI7QUFBQTtBQUFPO2tEQUFLLE1BQVMsVUFBTyxRQUFLLE1BQVEsU0FBVSxXQUFVLFVBQUssS0FBTSxNQUFlO0FBQUsscURBQU0sTUFBYSxlQUFZLFlBR25JOzs7O0FBQ0E7QUFBQTtBQUNJOztBQUFBO0FBQUk7OENBQUksSUFBSSxJQUFVLFdBQ2xCO0FBQUE7QUFBWSw2R0FBUTs7QUFBSyxxREFBTSxNQUFVLFlBQU8sS0FBTSxNQUFPLFNBUXJGOzs7Ozs7OztBQUFBO0FBQUk7MEJBQUksSUFDSjtBQUFBO0FBQU07OEJBQVE7QUFFVjs7OztBQUFJOztrQ0FBVSxXQUNWO0FBQ0k7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFSjs7QUFDQTtBQUFJOztzQ0FBRyxJQUFPLFFBQVUsV0FDcEI7QUFBRTs7MENBQUssTUFDSDtBQUFJLHNHQUFVLFdBQWlCLGtCQUFJLEtBTzNEOzs7Ozs7O0FBQ0E7Ozs7O0FBR1I7Ozs7OztBQUNIOzs7O0VBdkcwQixnREFBa0Q7O0FBY3pFLG1EQURTLCtGQUdSO0FBR0QsbURBRFMseUZBSVI7QUFtRkwsOElBQzRCO0FBQXhCLFdBQWtDLE1BQWlGO0NBRGpHLEVBRU4sc0VBQ2YsRUFBVSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIb0I7QUFFTztBQU90Qzs7SUFBYzs7Ozs7Ozs7Ozs7NkNBRTJCO0FBQzdCLGlCQUFNLE1BQ2Q7QUFRYTs7Ozs7O0FBQ0g7QUFBSztrQkFBVSxXQUNqQjtBQUVBOzs7OztBQUtBOzs7OztBQUFHOzs7O0FBQXVCOzs7QUFBTSw2QkFBTSxNQUV0Qzs7O0FBQU87O3NCQUFVLFdBQWtCLG1CQUFTLFNBQUM7QUFBWSxtQ0FBTSxNQUFhO0FBQzVFOzs7QUFBTzs7c0JBQVUsV0FBa0IsbUJBQVMsU0FBQztBQUFZLG1DQUFNLE1BQWE7QUFDNUU7OztBQUFPOztzQkFBVSxXQUFrQixtQkFBVSxVQUFLLEtBQU0sTUFBUyxTQUFTLFNBQUM7QUFBWSxtQ0FBTSxNQUFTO0FBQ3RHOzs7QUFBTzs7c0JBQVUsV0FBa0IsbUJBQVUsVUFBQyxDQUFLLEtBQU0sTUFBUyxTQUFTLFNBQUM7QUFBWSxtQ0FBTSxNQUFRO0FBRTlHOzs7O0FBRzZDOzs7O0VBL0J0QixnREFDTDs7QUErQnRCLDhJQUM0QjtBQUF4QixXQUFrQyxNQUFpRjtDQURqRyxFQUVOLHNFQUNmLEVBRTBCOztBQUN4QixJQUFPLEtBQUssRUFBRTtBQUNULFdBQUksSUFDWjtBQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDhCO0FBQ0s7QUFDRTtBQVV0Qzs7SUFBZ0I7Ozs7Ozs7Ozs7OzZDQUV5RDtBQUNqRSxnQkFBa0IsaUJBQVcsU0FBSyxLQUFNLE1BQU8sT0FBZ0IsbUJBQU07QUFDakUsaUJBQU0sTUFBd0Isd0JBQ3RDO0FBRXlCOzs7a0RBQWdDLFdBQ2M7QUFDbkUsZ0JBQWtCLGlCQUFXLFNBQVUsVUFBTyxPQUFnQixtQkFBTTtBQUNoRSxpQkFBTSxNQUF3Qix3QkFDdEM7QUFFYTs7OztBQUNIO0FBQ0Y7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQU0scUJBQ047QUFBTSxxQkFFZDs7QUFFNEI7Ozs7QUFDbEI7QUFBTztrQkFBVSxXQUNuQjtBQUNJOzs7QUFDSTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBR1I7Ozs7Ozs7QUFDQTs7O0FBQUsseUJBQU0sTUFBVSxVQUFJO0FBQVM7QUFDM0I7OEJBQUssS0FBVSxTQUNkO0FBQUk7OztBQUFVLHlDQUNkOztBQUFJOzs7QUFBVSx5Q0FDZDs7QUFBSTs7O0FBQVUseUNBQ2Q7O0FBQUk7OztBQUFVLHlDQUs5Qjs7Ozs7O0FBRXdCOzs7O0FBQ3BCLGdCQUFzQixxQkFBTyxLQUFNLE1BQWUsaUJBQUs7QUFDdkQsZ0JBQXNCLHFCQUFPLEtBQU0sTUFBZSxpQkFBSztBQUVqRDtBQUFHO2tCQUFVLFdBQ2Y7QUFBQTtBQUFLO3NCQUFVLFdBQTRCLDZCQUFNLG9CQUNqRDs7O0FBQUE7QUFBSztzQkFBVSxXQUE2Qiw4QkFBTSxvQkFDbEQ7OztBQUFNLHFCQUFNLE1BQVU7QUFBMEI7OztvQkFFeEQ7O0FBQ0g7Ozs7RUF2RDRCLGdEQUNQOztBQXdEdEIsOElBQzRCO0FBQXhCLFdBQWtDLE1BQTBGO0NBRDFHLEVBRUcsK0VBQ3hCLEVBQVksVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVrQjtBQUNPO0FBQ0s7QUFDcUQ7QUFPaEc7O0lBQWE7OztBQUVUO0FBQ1k7Ozs7QUFDSixjQUFNO0FBQ0QsbUJBQ1A7QUFGVztBQUdULGNBQWEsZUFBTyxNQUFhLGFBQ3pDOztBQUdrQjs7Ozs7QUFDZCxnQkFBYyxhQUEwSTtBQUNsSixtQkFBVyxXQUFLLEtBQUssS0FBTSxNQUFPLFNBQVksWUFDeEQ7QUFHWTs7O3FDQUFPO0FBQ1gsaUJBQVMsU0FBQyxFQUFPLE9BQUcsRUFBTyxPQUNuQztBQUdXOzs7b0NBQThCO0FBQ2pDLGlCQUFNLE1BQVksWUFBSyxLQUFRO0FBQzlCLGtCQUNUO0FBR2M7Ozs7QUFDSixtQkFBSyxLQUFNLE1BQWEsZ0JBQVEsS0FBcUIseUJBQy9EO0FBRWE7Ozs7QUFDSDtBQUNGOztBQUFJOztzQkFBVSxXQUNWO0FBQUk7OzBCQUFVLFdBQ1Y7QUFDQTs7Ozs7QUFBSSxzRkFBVSxXQUNkO0FBQUU7OzhCQUFVLFdBS2hCOzs7O0FBQUk7OzBCQUFVLFdBQ2Q7QUFDUSw2QkFBTSxNQUFVO0FBRVo7OEJBQVUsV0FBd0I7QUFBSyxpQ0FBTSxNQUFlOztBQUUzRDtBQUFMLDhCQUFZLGNBQVUsVUFBSyxLQUMzQjtBQUFBO0FBQVU7a0NBQ0csV0FBZ0IsaUJBQ1QsaUJBQUssS0FFckI7QUFBQSxxRkFBWSxnRUFDSixNQUFPLFFBQ0wsT0FBTSxLQUFNLE1BQVEsT0FDZixhQUEyQiw0QkFDN0IsVUFBTSxLQUVuQjtBQUFBLHFGQUFZLDZEQUVoQjs7QUFBQTtBQUFPO2tDQUFLLE1BQVMsVUFBVSxVQUFNLEtBSzdDOzs7OztBQUFJOzswQkFBVSxXQUFNLE9BQUcsSUFDbkI7QUFBRzs7OEJBQVUsV0FDTDtBQUFHOzs7QUFBRzs7c0NBQUssTUFBc0M7QUFBRyxnR0FBVSxXQUM5RDs7O0FBQUc7OztBQUFHOztzQ0FBSyxNQUF3QztBQUFHLGdHQUFVLFdBQ2hFOzs7QUFBRzs7O0FBQUc7O3NDQUFLLE1BQWlEO0FBQUcsZ0dBQVUsV0FFakY7Ozs7QUFBRTs7OEJBQVUsV0FNNUI7Ozs7OztBQUNIOzs7O0VBaEZ5QixnREFBOEM7O0FBV3BFLG1EQURTLG9HQUlSO0FBR0QsbURBRFMsOEZBR1I7QUFHRCxtREFEUyw2RkFJUjtBQUdELG1EQURTLGdHQUdSO0FBb0RMLDhJQUM0QjtBQUF4QixXQUFrQyxNQUFnRjtDQURoRyxFQUVQLHFFQUNkLEVBQVMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GcUI7QUFDUTtBQUNTO0FBQ0w7QUFHN0I7O0lBQVk7Ozs7Ozs7Ozs7OztBQUVWO0FBQUs7a0JBQVUsV0FDbkI7QUFBQTtBQUNJOztBQUFJOzswQkFBVSxXQUFNLE9BQUcsSUFDbkI7QUFBSTs7OEJBQVUsV0FDVjtBQUFJOztrQ0FBRyxJQUNIO0FBQUE7QUFBYTtzQ0FBUSxTQUNqQjtBQUFHOzswQ0FBVSxXQUNiOzs7QUFBRzs7MENBQVUsV0FDVDs7O0FBQUc7OzBDQUFVLFdBQW1COztBQUFnQjtBQUFPLDhGQUFLOzhDQUFHLElBQU8sUUFBSyxNQUFJLEtBQVEsUUFBTSxNQUFVLFVBQUssS0FBUSxRQUFDLENBSWpJOzs7Ozs7O0FBQUk7O2tDQUFVLFdBQ1Y7QUFBQTtBQUFPLHNGQUFLO3NDQUFHLElBQU8sUUFBSyxNQUFJLEtBQVUsV0FBWSxhQUFRLFFBQU0sTUFBVSxVQUFLLEtBQVEsUUFBQyxDQUFJO0FBQUksZ0dBQVUsV0FLN0g7Ozs7OztBQUFBLHFFQUFPLHFEQUFRLElBQUssTUFDcEI7QUFBSTs7c0JBQVUsV0FBTSxPQUFHLElBQ25CO0FBQUEseUVBR1o7OztBQUNIOzs7O0VBMUJzQyxnREFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQYztBQUNDO0FBQ3NCO0FBTWhELElBQWM7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0Y7O0FBQUEscUVBQ0E7QUFBQTtBQUFnQjtzQkFBVSxVQUFDLE9BQWEsV0FBZ0IsY0FBUyxPQUFTLFNBQVMsV0FBTyxJQUFVLFVBQUssS0FBTSxNQUMxRztBQUFNLHlCQUFNLE1BR3pCOzs7QUFrQkM7Ozs7RUEzQjRCLGdEQUVoQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmM7QUFFSztBQUNFO0FBQ0s7QUFDbUY7QUFXOUg7O0lBQVk7OztBQUVSO0FBQ1k7Ozs7QUFDSixjQUFNO0FBQ0Usc0JBQUk7QUFDSixzQkFFaEI7QUFKaUI7O0FBT0w7Ozs7cUNBQU87QUFDWCxpQkFBUywyQkFBVSxLQUFRLDJCQUFFLEVBQU8sT0FBTSxNQUFHLEVBQU8sT0FDNUQ7QUFHYTs7OzhCQUE2QjtBQUNsQyxpQkFBTSxNQUFNLE1BQUMsRUFBTyxPQUFNLEtBQU0sTUFBUyxVQUFVLFVBQU0sS0FBTSxNQUFTLFVBQWUsZUFBTSxNQUFXLFdBQVM7QUFDaEgsa0JBQ1Q7QUFHa0I7Ozs7QUFDUixtQkFDVjtBQUVxQjs7OztBQUNYO0FBQ0Y7QUFERztBQUdIOzs7OztBQUFLOztzQkFBTyxRQUFZLGFBQU8sUUFDM0I7QUFBTzs7MEJBQVUsV0FBeUIsMEJBQUssTUFHbkQ7Ozs7QUFBRTs7c0JBQVUsV0FBd0IseUJBQUssTUFFakQ7Ozs7QUFFc0I7Ozs7QUFDWjtBQUFNO0FBQUwsa0JBQWUsV0FDbEI7QUFBRzs7c0JBQVUsV0FBaUI7O0FBQVM7QUFBSzswQkFBSSxJQUNoRDs7OztBQUFBO0FBQUk7c0JBQVUsV0FDVjtBQUFBO0FBQUk7MEJBQUksSUFBRyxHQUFJLElBQUcsR0FBVSxVQUN4QjtBQUFBO0FBQUs7OEJBQUcsSUFBSSxLQUFVLFdBQ2xCO0FBQUUsd0ZBQVUsV0FDWjtBQUFLOztrQ0FBVSxXQUd2Qjs7Ozs7QUFBQTtBQUFJOzBCQUFJLElBQUcsR0FBSSxJQUNYO0FBQUE7QUFBSzs4QkFBRyxJQUFJLEtBQVUsV0FDbEI7QUFBRSx3RkFBVSxXQUNaO0FBQUs7O2tDQUFVLFdBR3ZCOzs7OztBQUFBO0FBQUk7MEJBQUksSUFBRyxHQUFJLElBQ1g7QUFBQTtBQUFLOzhCQUFHLElBQUksS0FBVSxXQUNsQjtBQUFFLHdGQUFVLFdBQ1o7QUFBSzs7a0NBQVUsV0FLM0I7Ozs7OztBQUFBO0FBQUk7c0JBQVUsV0FDVjtBQUFBO0FBQUk7MEJBQUksSUFBSSxJQUFJLElBQUcsR0FBVSxVQUN6QjtBQUFHLHFGQUFVLFdBQ2I7QUFBSzs7OEJBQVUsV0FJdkI7Ozs7O0FBQUE7QUFDSTs7QUFBQTtBQUFJOzBCQUFJLElBQUksSUFBSSxJQUFHLEdBQVUsVUFDekI7QUFBQTtBQUFLOzhCQUFVLFdBQWdCLGlCQUFVLFVBQUssS0FBTyxPQUFhLGNBQzlEO0FBQUE7QUFBVTtrQ0FBaUIsaUJBQUssS0FDNUI7QUFBQTtBQUNJOztBQUFBO0FBQVcsb0dBQU07O0FBQUcsb0dBQVUsV0FDOUI7O0FBQUEseUZBQVksZ0VBQUssTUFBVyxZQUFLLE1BQU8sUUFBVSxVQUFLLEtBQWMsY0FBWSxhQUVyRjs7QUFBQSxxRkFBWSw2REFHaEI7O0FBQUE7QUFDSTs7QUFBQTtBQUNJOztBQUFBO0FBQVcsb0dBQU07O0FBQUcsb0dBQVUsV0FDOUI7O0FBQUEseUZBQVksZ0VBQUssTUFBVyxZQUFLLE1BQVcsWUFBVSxVQUFLLEtBQWMsY0FBWSxhQUV6Rjs7QUFBQSxxRkFBWSw2REFHaEI7O0FBQUE7QUFBTztrQ0FBVSxXQUFtQyxvQ0FBSyxNQUtyRTs7Ozs7O0FBQUE7QUFDSTs7QUFBQTtBQUFJOzBCQUFJLElBQUksSUFBSSxJQUFHLEdBQVUsVUFDekI7QUFBQTtBQUNJOztBQUFBO0FBR1I7Ozs7OztBQUFBO0FBQUk7MEJBQUksSUFBSSxJQUFJLElBQ1o7QUFBRTs7OEJBQVUsV0FDUjtBQUFBO0FBQUs7a0NBQUcsSUFLNUI7Ozs7Ozs7QUFFYTs7OztBQUNOLGdCQUFLLEtBQU0sTUFBZSxlQUNuQixPQUFLLEtBQ1gsc0JBQ00sT0FBSyxLQUNuQjtBQUNIOzs7O0VBbEh3QixnREFBa0M7O0FBV3ZELG1EQURTLDZGQUdSO0FBR0QsbURBRFMsc0ZBSVI7QUFHRCxtREFEUyxtR0ErRm9DOztBQUNqRCw4SUFDNEI7QUFBeEIsV0FBa0MsTUFBK0U7Q0FEL0YsRUFFUixvRUFDYixFQUFRLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SXNCO0FBQ0s7QUFDRTtBQUV3QztBQUN2QjtBQUV2RCxJQUFVLE9BQVUsb0JBT3BCOztJQUFjOzs7Ozs7Ozs7Ozs7QUFFQTtBQUFRO0FBQVAsa0JBQWlCLFVBQ3BCO0FBQUE7QUFBTyw0RUFDSDs7QUFBQTtBQUFPLGdGQUNIOztBQUFBO0FBQUs7OEJBQVUsV0FBZSxnQkFBSSxJQUFLO0FBQUssMEZBQUssS0FBUSxNQUFJLEtBRWpFOzs7O0FBQUEseUVBQU8sd0RBRVg7O0FBQUE7QUFBTyw0RUFDSDs7QUFBQTtBQUFJOzBCQUNBO0FBQUE7QUFBYzs4QkFBRyxJQUNiO0FBQUE7QUFBUTtrQ0FBVSxVQUV0Qjs7OztBQUFBO0FBQWM7OEJBQUcsSUFDYjtBQUFBO0FBQVE7a0NBQVUsVUFFdEI7Ozs7QUFBQTtBQUFZOzhCQUFVLFVBQUcsR0FBTSxPQUFRLFNBQUcsSUFDdEM7QUFBQTtBQUFjO2tDQUFHLElBQ2I7QUFBQTtBQUFTO3NDQUFVLFVBQUssS0FBTSxNQUFpQixpQkFBVSxVQUU3RDs7OztBQUFBO0FBQWM7a0NBQUcsSUFDYjtBQUFBO0FBQVM7c0NBQVUsVUFBSyxLQUFNLE1BQWlCLGlCQUFVLFVBRTdEOzs7O0FBQUE7QUFBYztrQ0FBRyxJQUNiO0FBQUE7QUFBUztzQ0FBVSxVQUV2Qjs7OztBQUFBLGlGQUFTLDZEQUNUO0FBQUE7QUFBYztrQ0FBRyxJQUNiO0FBQUE7QUFBUztzQ0FBVSxVQUFDLENBQUssS0FBTSxNQUFpQixpQkFBVSxVQU1sRjs7Ozs7Ozs7QUFDSDs7OztFQXBDMEIsZ0RBQ1Y7O0FBcUNqQixvSUFDSSxVQUF3QjtBQUFhLFdBQUMsRUFBaUIsaUJBQU8sTUFBTSxNQUFjLGVBQU8sT0FBUTtBQUEwRSxDQUR6SixFQUdyQixJQUFVLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRvQjtBQUdPO0FBQ0s7QUFDaUc7QUFXNUk7O0lBQWU7OztBQUVYO0FBQ1k7Ozs7QUFDSixjQUFNO0FBQ0Usc0JBQUk7QUFDSixzQkFFaEI7QUFKaUI7O0FBT0w7Ozs7cUNBQU87QUFDWCxpQkFBUywyQkFBVSxLQUFRLDJCQUFFLEVBQU8sT0FBTSxNQUFHLEVBQU8sT0FDNUQ7QUFHZ0I7OztpQ0FBNkI7QUFDckMsaUJBQU0sTUFBUyxTQUFDLEVBQU8sT0FBTSxLQUFNLE1BQVMsVUFBVSxVQUFNLEtBQU0sTUFBUyxVQUFpQixpQkFBTSxLQUFNLE1BQWE7QUFDcEgsa0JBQ1Q7QUFHa0I7Ozs7QUFDUixtQkFDVjtBQUVhOzs7O0FBQ0g7QUFDRjtBQURHO0FBRUg7Ozs7O0FBQ0E7QUFBQTtBQUFLO3NCQUFXLGtCQUFVLFVBQUssS0FBVSxVQUFhLGNBQ2xEO0FBQUE7QUFBVTswQkFBSyxNQUFXLFlBQWlCLGlCQUFLLEtBQzVDO0FBQUE7QUFBSTs4QkFBZ0IsZ0JBQWMsK0RBQUksSUFHdEM7OztBQUFBO0FBQUk7OEJBQUksSUFDSjtBQUFBLGlGQUFZLGdFQUFLLE1BQVcsWUFBSyxNQUFPLFFBQVUsVUFBSyxLQUFjLGNBQVksYUFDakY7QUFBQSxpRkFBWSw2REFJcEI7OztBQUFBO0FBQVU7MEJBQUssTUFDWDtBQUFBO0FBQUk7OEJBQWdCLGdCQUFjLCtEQUFJLElBR3RDOzs7QUFBQTtBQUFJOzhCQUFJLElBQ0o7QUFBQSxpRkFBWSxnRUFBSyxNQUFXLFlBQUssTUFBVyxZQUFVLFVBQUssS0FBYyxjQUFZLGFBRXpGOztBQUFBLDZFQUFZLDZEQUdoQjs7QUFBQTtBQUNJOztBQUFBO0FBQUk7OEJBQVUsVUFBRyxHQUFJLElBQ2pCO0FBQUE7QUFBTztrQ0FBVSxXQUFrQixtQkFBSyxNQUs1RDs7Ozs7OztBQUNIOzs7O0VBM0QyQixnREFBd0M7O0FBV2hFLG1EQURTLGdHQUdSO0FBR0QsbURBRFMsNEZBSVI7QUFHRCxtREFEUyxzR0F3Q29DOztBQUNqRCw4SUFDNEI7QUFBeEIsV0FBa0MsTUFBa0Y7Q0FEbEcsRUFFTCx1RUFDaEIsRUFBVyxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGbUI7QUFFTztBQU10Qzs7SUFBVzs7Ozs7Ozs7Ozs7NkNBSVAsQ0FDaUI7Ozs0Q0FDb0Q7QUFDN0QsaUJBQU0sTUFDZDtBQUVhOzs7O0FBQ0g7QUFDRjs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFBcUI7Ozs7QUFBSyx5QkFBTSxNQUFnQixrQkFBUyxTQUN6RDs7QUFBVTs7OztBQUFLLHlCQUFNLE1BRTdCOzs7QUFDSDs7OztFQWxCdUIsZ0RBQ0Y7O0FBbUJ0Qiw4SUFDNEI7QUFBeEIsV0FBa0MsTUFBOEU7Q0FEOUYsRUFFVCxtRUFDWixFQUFPLE07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0J1QjtBQU8vQixJQUFpQjtBQUFTLFdBQUMsRUFBUSxRQUFRLE9BQVksY0FBSyxLQUU5Qzs7O0lBQWtCOzs7QUFDNUIsd0JBQWlCO0FBQ1I7OzRIQUFROztBQUNULGNBQU0sUUFBRyxFQUFRLFFBQVk7QUFDN0IsY0FBYSxlQUFPLE1BQWEsYUFDekM7O0FBRVk7Ozs7O0FBQ0osaUJBQVMsU0FDakI7QUFFaUI7Ozs7QUFDVCxpQkFBZ0I7QUFDZCxtQkFBaUIsaUJBQVMsVUFBTSxLQUMxQztBQUVvQjs7OztBQUNWLG1CQUFvQixvQkFBUyxVQUFNLEtBQzdDO0FBRU07Ozs7QUFDRixnQkFBVyxRQUFRLG1EQUFhLENBQU0sK0NBQVMsQ0FBSyxLQUFLLEtBQU0sTUFBVSxXQUFFLEVBQU8sT0FBRSxFQUFRLFFBQU0sS0FBTSxNQUM1RTs7QUFDdEIsbUJBQ1Y7QUFFSDs7OztFQTFCNEMsZ0RBQTRCOzs7Ozs7Ozs7Ozs7O0FDVDFDO0FBQ3lCO0FBRXhELElBQWU7QUFBUztBQUNiLGlCQUFHO0FBQ0wsZUFDTjtBQUhzQjs7QUFLekIsSUFBZTtBQUFTO0FBQ2IsaUJBQVEsNEVBQUc7QUFDYixlQUFRLDRFQUNkO0FBSHNCOztBQUt6QixJQUFlO0FBQVM7QUFDYixpQkFBUSw0RUFBRztBQUNiLGVBQVEsNEVBQ2Q7QUFIc0I7O0FBS3pCLElBQXFCO0FBQUksUUFBaUIsYUFBUDtRQUF3Qjs7QUFDdEM7QUFBakIsVUFDVztBQUNBLHFCQUFVO0FBQ1IsdUJBQWE7QUFDZCxzQkFBRSxFQUNQO0FBSk0sYUFBRCxHQUtFLFdBQVcsV0FDWCxXQUVWO0FBQUMsa0JBQWE7O0FBRU47O0FBQWEsNkJBQUk7QUFBRSx3QkFBSzt3QkFBTzt3QkFBUTs7QUFDL0I7MEJBQ0ssS0FBb0IscUJBQ25CLE9BQU8sT0FBTyxPQUFHLElBQVEsT0FBUSxTQUFFLEVBQVMsU0FBTyxNQUFRLFNBQWEsc0JBQWMsTUFFeEc7QUFBSyw2QkFNZjs7Ozs7OztBQUVGLElBQVU7QUFDQztBQUNLLGtCQUFZO0FBQ2YsZUFFWDtBQUpXO0FBREE7QUFPYix3REFBK0IsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ087QUFDRjtBQUVVOztBQXNCaEM7O0lBQW9COzs7QUFDOUI7QUFDWTs7OztBQUNKLGNBQU07QUFDRSxzQkFFaEI7QUFIaUI7O0FBaUJPOzs7OztBQUNoQixpQkFBYSxhQUFZO0FBQ3pCLGlCQUFjLGdCQUFXLHdEQUFLLEtBQWEsYUFBSyxLQUFNLE9BQUssS0FBRSxFQUFVLFVBQVU7QUFDL0UsbUJBQWlCLGlCQUFTLFVBQU0sS0FDMUM7QUFFMkI7Ozs7QUFDbkIsaUJBQWMsY0FBVTtBQUN0QixtQkFBb0Isb0JBQVMsVUFBTSxLQUM3QztBQUVhOzs7O0FBQ0s7O0FBQ0osdUJBQUM7QUFDSCx1QkFBTSxNQUNkO0FBQUMsZUFBRSxDQUFLLEtBQU0sTUFBUyxXQUFLLEtBQ2hDO0FBRVk7Ozs7OztBQUNSLGdCQUFXLFVBQVcsc0RBQVksQ0FBTztBQUN6QyxnQkFBYyxhQUFHLG9CQUFHO0FBQ1YsdUJBQUcsR0FBVSxjQUFTLE9BQU0sTUFDdEM7QUFBRTtBQUNGLGdCQUFVLFNBQUs7QUFDZixnQkFBWSxXQUFHLGtCQUFHO0FBQ1osbUJBQU0sTUFBVyxhQUFZO0FBQ3JCLDJCQUFDO0FBQ0wsdUJBQU0sTUFBVyxhQUFhO0FBQzlCLHVCQUFVLFlBQUssR0FBVSxZQUFlLGVBQU8sT0FBTSxNQUMzRDtBQUFDLG1CQUFXLFVBQUssT0FBTSxNQUFjLGdCQUFVO0FBRW5EO0FBQUU7QUFDRixnQkFBYSxZQUFHLG1CQUFRO0FBQ2Ysc0JBQVUsVUFBUSxRQUFLLEtBQVEsUUFBVyxZQUFFLFVBQWU7QUFDbkQsOEJBQVE7QUFDZCx3QkFBVyxXQUFRLFFBQUU7QUFDWixpQ0FDWjtBQUNKO0FBQ0o7QUFDd0I7O0FBQ2Ysc0JBRUs7O0FBQ0osdUJBQUM7QUFDSCx1QkFBTSxNQUNkO0FBQUMsZUFBTSxLQUFNLE1BQVMsV0FBTyxPQUNqQztBQUdZOzs7cUNBQUU7QUFDUCxnQkFBQyxDQUFLLEtBQU0sTUFBVSxVQUFFO0FBQ3ZCLG9CQUFXLFVBQVcsc0RBQVksQ0FBTztBQUN6QyxvQkFBb0IsbUJBQVUsUUFBd0Isd0JBQUksTUFBVyxTQUFLLEtBQVU7b0JBQ2pFLGtCQUFTLE9BQVE7b0JBQ3BCLGVBQVMsT0FBYTtBQUNuQyxvQkFBZ0Isa0JBQWUsZUFBTSxPQUFvQixtQkFBTyxLQUFNLE1BQU8sU0FBSyxHQUFFO0FBQy9FLHlCQUFTO0FBQ0Qsa0NBQ1Q7QUFGVztBQUdWLHlCQUFNLE1BQVcsY0FBTSxNQUFRLEtBQWlCO0FBQ2hELHlCQUFNLE1BQVcsZUFBTyxNQUFRLEtBQ3hDO0FBQ0o7QUFDSjtBQUVhOzs7O0FBQ0gsZ0JBQ0csUUFDQTtnQkFBUjs7QUFFRCxnQkFBVztBQUNHLDRCQUNWO0FBRnFCLGVBRWYsTUFBUyxTQUFPLE1BQVMsWUFBUyxNQUFXLGVBQ3BEO0FBQ0ksdUJBQU8sTUFBUSxNQUFXO0FBQ2pDLGdCQUFTLFFBQWEsTUFBUyxXQUFLLEtBRWxDO0FBQ0MsZ0JBQU0sTUFBUyxhQUFlLFdBQUU7QUFDMUIsc0JBQXdCLDBCQUFRLE1BQVMsV0FBTztBQUNoRCxzQkFBa0Isb0JBQVEsTUFBUyxXQUM1QztBQUFDO0FBQ0s7QUFBSztrQkFBVyxXQUFTLFNBQU8sT0FBUTtBQUFNLHNCQUN4RDs7QUFBQzs7OztFQXhHMEMsZ0RBQWdEOzs7O0FBUTdFLGFBQVk7QUFDZixhQUFZO0FBQ2IsWUFBRztBQUNBLGVBQUk7QUFDTCxjQUFHO0FBQ0UsbUJBQUc7QUFDTixnQkFBSTtBQUNOLGNBQUUsb0JBQVEsQ0FDcEI7QUFSOEM7QUE4RGhELG1EQURTLG9HQStDVCxNOzs7Ozs7Ozs7Ozs7OztBQzNJRyxJQUF1QixvQkFBNEI7QUFDbkQsSUFBdUIsb0JBQTRCO0FBQ25ELElBQW1CLGdCQUF3QjtBQUMzQyxJQUFxQixrQkFBMEI7QUFDL0MsSUFBa0IsZUFBdUI7QUFDekMsSUFBcUIsa0JBQTBCLHVCOzs7Ozs7Ozs7Ozs7OztBQ090RCxJQUFrQjtBQUNMLGVBQ1o7QUFGb0I7QUFNZixJQUFxQjtBQUVWO0FBQUUseUJBQWtELFVBQVU7QUFBekI7QUFFOUM7Ozs7O0FBQU8sc0NBQUcsQ0FBTyxPQUFTLFNBQVMsYUFBWSxVQUFVLFVBQVksWUFBUyxPQUFTLFNBQUssT0FDNUY7QUFBVSx5Q0FBRyxJQUFhLFVBQU07O0FBQzFCLHVDQUFPLFNBQUcsVUFBVztBQUNoQiw0Q0FBSSxJQUFVLFlBQVE7QUFDckIsNkNBQUMsRUFBTSxNQUNuQjtBQUFFO0FBQ0ksdUNBQVEsVUFBRyxVQUFXO0FBQ2pCLDRDQUFJLElBQVc7QUFDZCw2Q0FBQyxFQUFNLE1BQW9CO0FBQzdCLDZDQUNWO0FBQUU7QUFFSSx1Q0FBVSxZQUFHLFVBQVc7QUFDbkIsNENBQUksSUFBYSxlQUFJLEVBQU87QUFDbkMsd0NBQVUsU0FBTyxLQUFNLE1BQUUsRUFBTztBQUM3Qix3Q0FBTyxVQUFVLE9BQU0sTUFBRTtBQUNoQixpREFDWjtBQUFNLDJDQUFFO0FBQ0csZ0RBQUksSUFDZjtBQUNKO0FBQUU7QUFFSSx1Q0FBUSxVQUFHLFVBQXVCO0FBQ2pDLHdDQUFFLEVBQU8sT0FDRCxRQUFJLElBQVUsWUFBSSxFQUNqQztBQUVOOzs7Ozs7Ozs7OztBQS9CNEIsQ0FBdkI7QUFpQ0QsSUFBYyxVQUE2QixpQkFBdUIsT0FBcUI7QUFDbEYsWUFBTyxPQUFRO0FBQ2xCLGFBQWdCO0FBQ04sbUJBQUMsRUFBVyxXQUFTO0FBQy9CLGFBQW1CO0FBQ1QsbUJBQUMsRUFBVyxXQUFVO0FBRWdGO0FBQzVHLGdCQUFxQixrQkFDNUI7O0FBRUssV0FBTSxTQUNoQjtBQUFFLENBWkssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERnRDtBQUNsQjtBQUNGO0FBQ0U7QUFDQTtBQUNlO0FBQ25CO0FBQ0Y7QUFDUTtBQW1CcUI7O0FBQ3RELElBQWU7QUFDVixhQUFTLHlEQUFRO0FBQ2QsZ0JBQVkscUVBQVE7QUFDMUIsVUFBTSxzREFBUTtBQUNkLFVBQU0sc0RBQVE7QUFDYixXQUFPLHVEQUFRO0FBQ1osY0FBVSwwREFBUTtBQUNuQixhQUFTLHlEQUFRO0FBQ2xCLFlBQVEsd0RBQVE7QUFDZixhQUFTLHlEQUFRO0FBQ1Isc0JBQWtCLGtFQUNwQztBQVhzQixDQUFqQixDOzs7Ozs7QUM1QlAscUNBQXFDLG9aOzs7Ozs7QUNBckMsdUM7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSxzQzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ1E7QUFFK0I7O0FBQ2xCO0FBRXFCO0FBQzNDO0FBQ2dCO0FBQ0U7QUFDRjtBQUNBO0FBQ0M7QUFFL0MsK0pBQTBDO0FBQ2hDLGVBQVksUUFBZSxVQUFRLFNBQVEsUUFDdUI7QUFDL0QsbUZBQUMsRUFBUSxrRUFBVSxVQUFRLE9BQVcsWUFBRSxVQUFNLE9BQWtCLGtCQUFrQjtBQUNoRixnQkFBTyxPQUFFO0FBQ1Isc0JBQ0o7QUFFb0Y7O0FBQ2pGLGdCQUFrQixrQkFBRTtBQUNaLHdCQUFDLEVBQWEsYUFBa0IsaUJBQWE7QUFFeEQ7QUFFOEQ7O0FBQzNELGdCQUFDLENBQWEsYUFBRTtBQUNmLHNCQUFNLElBQVUsMEJBQXdCLE9BQzVDO0FBRXVDOztBQUN2QyxnQkFBVyxRQUFvQjtBQUMxQixrQkFBUyxTQUFDLEVBQU0sTUFBYyx1RUFBUyxTQUFFLEVBQVcsV0FBUSxPQUFLLEtBQVUsV0FBSSxJQUFRLE9BQUssS0FBZ0I7QUFFOUcsZ0JBQU8sT0FBSyxLQUFpQixpQkFBRTtBQUN6QixzQkFBUyxTQUFDLEVBQU0sTUFBbUI7QUFDbkMsc0JBQVMsU0FBQyxFQUFNLE1BQWdCLHFFQUFTLFNBQUUsRUFBYSxhQUFRLE9BQUssS0FBa0I7QUFDdkYsc0JBQVMsU0FBQyxFQUFNLE1BQWtCLHVFQUFTLFNBQVEsT0FBSyxLQUNqRTtBQUFDO0FBRUQsZ0JBQVk7QUFDQztBQUFULGtCQUFnQixPQUNaO0FBQUEscUVBQWUsNkRBSWtFOzs7QUFDM0Usb0dBR3VGOztBQUMvRixtQkFBWSxZQUFLLEtBQUM7QUFDYjtBQUNDLDBCQUFnQix3RkFBSztBQUNsQiw2QkFBRSxFQUFtQixtQkFBTyxNQUUzQztBQUpZO0FBSVgsZUFDTDtBQUNKO0FBQ0osS0EvQ1c7QUErQ1IsQ0FoRGdDLEUiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzQyNTlhN2I0MmY5ODZhZjI0ZDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0c2xpYlwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb21haW4tdGFza1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRvbWFpbi10YXNrXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1kZWNvcmF0b3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1kZWNvcmF0b3JzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2gsIGFkZFRhc2sgfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJy4uL3NlcnZlci9Vc2VyTW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBTZXJ2ZXIgZnJvbSAnLi4vc2VydmVyL1VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVFVTRVJfUkVRVUVTVCA9ICdHZXRVc2VyUmVxdWVzdEFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBHRVRVU0VSX1JFQ0VJVkVEID0gJ0dldFVzZXJSZWNlaXZlZEFjdGlvbic7XHJcblxyXG5jb25zdCBEZWZhdWx0VXNlck1vZGVsOiBVc2VyTW9kZWwgPSB7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgZW1haWw6IHVuZGVmaW5lZCxcclxuICAgIGZpcnN0TmFtZTogdW5kZWZpbmVkLFxyXG4gICAgbGFzdE5hbWU6IHVuZGVmaW5lZCxcclxuICAgIHBob25lTnVtYmVyOiB1bmRlZmluZWQsXHJcbiAgICB1c2VySWQ6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXRVc2VyUmVxdWVzdEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnR2V0VXNlclJlcXVlc3RBY3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldFVzZXJSZWNlaXZlZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnR2V0VXNlclJlY2VpdmVkQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IFVzZXJNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IHsgVXNlck1vZGVsIH07XHJcblxyXG5cclxuLy8gVE9ETyBpbXBvcnQgU3VjY2VzcyBhbmQgSW52YWxpZCBhY3Rpb25zIGZyb20gc2VydmVyIGFuZCBoYW5kbGUgdGhlbVxyXG50eXBlIEtub3duQWN0aW9uID0gR2V0VXNlclJlcXVlc3RBY3Rpb24gfCBHZXRVc2VyUmVjZWl2ZWRBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcblxyXG4gICAgZ2V0VXNlcjogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKCcvYWNjb3VudC9nZXR1c2VyJywge1xyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFVzZXJNb2RlbD4pXHJcbiAgICAgICAgICAgIC50aGVuKHVzZXJNb2RlbCA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUVVNFUl9SRUNFSVZFRCwgcGF5bG9hZDogdXNlck1vZGVsIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUVVNFUl9SRVFVRVNUIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFVzZXJNb2RlbD4gPSAoc3RhdGU6IFVzZXJNb2RlbCwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgR0VUVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgY2FzZSBHRVRVU0VSX1JFQ0VJVkVEOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgRGVmYXVsdFVzZXJNb2RlbDtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1VzZXIudHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgTG9naW5JbnB1dE1vZGVsIH0gZnJvbSAnLi4vc2VydmVyL0xvZ2luSW5wdXRNb2RlbCc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgdXNlckFjdGlvbkNyZWF0b3JzLCBHZXRVc2VyUmVjZWl2ZWRBY3Rpb24sIEdldFVzZXJSZXF1ZXN0QWN0aW9uLCBVc2VyTW9kZWwgfSAgZnJvbSAnLi9Vc2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9SRVFVRVNUID0gJ0xvZ2luUmVxdWVzdEFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ0xvZ2luU3VjY2Vzc0FjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9JTlZBTElEID0gJ0xvZ2luSW52YWxpZEFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9FUlJPUiA9ICdMb2dpbkVycm9yQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5TdGF0ZSB7XHJcbiAgICBhdXRoZW50aWNhdGluZzogYm9vbGVhbjtcclxuICAgIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IERlZmF1bHRMb2dpblN0YXRlOiBMb2dpblN0YXRlID0ge1xyXG4gICAgYXV0aGVudGljYXRpbmc6IGZhbHNlLFxyXG4gICAgYXV0aGVudGljYXRlZDogZmFsc2VcclxufVxyXG5cclxuaW50ZXJmYWNlIExvZ2luUmVxdWVzdEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnTG9naW5SZXF1ZXN0QWN0aW9uJztcclxufVxyXG5cclxuaW50ZXJmYWNlIExvZ2luRXJyb3JBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0xvZ2luRXJyb3JBY3Rpb24nO1xyXG59XHJcblxyXG4vLyBUT0RPOiBtb3ZlIHRvIHNlcnZlclxyXG5pbnRlcmZhY2UgTG9naW5TdWNjZXNzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdMb2dpblN1Y2Nlc3NBY3Rpb24nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9naW5JbnZhbGlkQWN0aW9uIHtcclxuICAgIHR5cGU6ICdMb2dpbkludmFsaWRBY3Rpb24nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aGVudGljYXRlZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQXV0aGVudGljYXRlZEFjdGlvbic7XHJcbiAgICBpZFRva2VuOiBhbnk7XHJcbiAgICBhdXRoVG9rZW46IHN0cmluZztcclxufVxyXG5cclxuLy8gVE9ETyBpbXBvcnQgU3VjY2VzcyBhbmQgSW52YWxpZCBhY3Rpb25zIGZyb20gc2VydmVyIGFuZCBoYW5kbGUgdGhlbVxyXG50eXBlIEtub3duQWN0aW9uID0gTG9naW5SZXF1ZXN0QWN0aW9uIHwgTG9naW5FcnJvckFjdGlvbiB8IExvZ2luU3VjY2Vzc0FjdGlvbiB8IExvZ2luSW52YWxpZEFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuXHJcbiAgICBsb2dpbjogKGxvZ2luSW5wdXQ6IExvZ2luSW5wdXRNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBMT0dJTl9SRVFVRVNUIH0pO1xyXG5cclxuICAgICAgICB2YXIgeHNyZiA9IGdldFN0YXRlKCkuc2Vzc2lvbi54c3JmVG9rZW47XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvYWNjb3VudC9sb2dpbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogeHNyZlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsb2dpbklucHV0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBMT0dJTl9TVUNDRVNTIH0pO1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbkNyZWF0b3JzLmdldFVzZXIoKSBhcyBhbnkpO1xyXG5cclxuICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGRpc3BsYXkgZXJyb3JcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBMT0dJTl9FUlJPUiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8TG9naW5TdGF0ZT4gPSAoc3RhdGU6IExvZ2luU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGF1dGhlbnRpY2F0aW5nOiB0cnVlLCBhdXRoZW50aWNhdGVkOiBmYWxzZSB9O1xyXG4gICAgICAgIGNhc2UgTE9HSU5fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGF1dGhlbnRpY2F0aW5nOiBmYWxzZSwgYXV0aGVudGljYXRlZDogZmFsc2UgfTtcclxuICAgICAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGF1dGhlbnRpY2F0aW5nOiBmYWxzZSwgYXV0aGVudGljYXRlZDogdHJ1ZSB9O1xyXG4gICAgICAgIGNhc2UgTE9HSU5fSU5WQUxJRDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgYXV0aGVudGljYXRpbmc6IGZhbHNlLCBhdXRoZW50aWNhdGVkOiBmYWxzZSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IERlZmF1bHRMb2dpblN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvTG9naW4udHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRVFVRVNUID0gJ1Rva2VuUmVxdWVzdEFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRUNFSVZFRCA9ICdUb2tlblJlY2VpdmVkQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX0VSUk9SID0gJ1Rva2VuRXJyb3JBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoU3RhdGUge1xyXG4gICAgcmVxdWVzdGluZzogYm9vbGVhbjtcclxuICAgIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xyXG4gICAgcmVmcmVzaFRva2VuPzogc3RyaW5nO1xyXG4gICAgZXhwaXJlcz86IERhdGVcclxufVxyXG5cclxuY29uc3QgRGVmYXVsdEF1dGhTdGF0ZTogQXV0aFN0YXRlID0ge1xyXG4gICAgcmVxdWVzdGluZzogZmFsc2VcclxufVxyXG5cclxuaW50ZXJmYWNlIFRva2VuUmVxdWVzdEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVG9rZW5SZXF1ZXN0QWN0aW9uJztcclxufVxyXG5cclxuaW50ZXJmYWNlIFRva2VuRXJyb3JBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1Rva2VuRXJyb3JBY3Rpb24nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVG9rZW5SZXN1bHRNb2RlbCB7XHJcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgcmVmcmVzaFRva2VuOiBzdHJpbmc7XHJcbiAgICBleHBpcmVzOiBEYXRlXHJcbn1cclxuXHJcbmludGVyZmFjZSBUb2tlblJlY2VpdmVkQWN0aW9uIHtcclxuICAgIHR5cGU6ICdUb2tlblJlY2VpdmVkQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IFRva2VuUmVzdWx0TW9kZWxcclxufVxyXG5cclxuLy8gVE9ETyBpbXBvcnQgU3VjY2VzcyBhbmQgSW52YWxpZCBhY3Rpb25zIGZyb20gc2VydmVyIGFuZCBoYW5kbGUgdGhlbVxyXG50eXBlIEtub3duQWN0aW9uID0gVG9rZW5SZXF1ZXN0QWN0aW9uIHwgVG9rZW5SZWNlaXZlZEFjdGlvbiB8IFRva2VuRXJyb3JBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcblxyXG4gICAgZ2V0VG9rZW46ICgpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVE9LRU5fUkVRVUVTVCB9KTtcclxuXHJcbiAgICAgICAgdmFyIHhzcmYgPSBnZXRTdGF0ZSgpLnNlc3Npb24ueHNyZlRva2VuO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2Nvbm5lY3QvdG9rZW4nLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ1gtWFNSRi1UT0tFTic6IHhzcmZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdDogVG9rZW5SZXN1bHRNb2RlbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUT0tFTl9SRUNFSVZFRCwgcGF5bG9hZDogcmVzdWx0IH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBkaXNwbGF5IGVycm9yXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVE9LRU5fRVJST1IgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPEF1dGhTdGF0ZT4gPSAoc3RhdGU6IEF1dGhTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVE9LRU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlcXVlc3Rpbmc6IHRydWUgfTtcclxuICAgICAgICBjYXNlIFRPS0VOX1JFQ0VJVkVEOlxyXG4gICAgICAgICAgICByZXR1cm4geyByZXF1ZXN0aW5nOiBmYWxzZSwgYWNjZXNzVG9rZW46IGFjdGlvbi5wYXlsb2FkLmFjY2Vzc1Rva2VuIH07XHJcbiAgICAgICAgY2FzZSBUT0tFTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlcXVlc3Rpbmc6IGZhbHNlIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgRGVmYXVsdEF1dGhTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0F1dGgudHMiLCJpbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5mdW5jdGlvbiBndWlkKCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJTklUX1NFU1NJT04gPSAnSW5pdENvbmZpZ0FjdGlvbidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NTdGF0ZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgeHNyZlRva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbml0Q29uZmlnQWN0aW9uIHtcclxuICAgIHR5cGU6ICdJbml0Q29uZmlnQWN0aW9uJ1xyXG4gICAgcGF5bG9hZDogU2V0dGluZ3NTdGF0ZVxyXG59XHJcbi8vaW50ZXJmYWNlIENvbmZpZ0FjdGlvbjIge1xyXG4vLyAgICB0eXBlOiAnSU5JVF9DT05GSUcyJ1xyXG4vLyAgICBwYXlsb2FkOiBTZXR0aW5nc1N0YXRlXHJcbi8vfVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEluaXRDb25maWdBY3Rpb247XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTiBDUkVBVE9SUyAtIFRoZXNlIGFyZSBmdW5jdGlvbnMgZXhwb3NlZCB0byBVSSBjb21wb25lbnRzIHRoYXQgd2lsbCB0cmlnZ2VyIGEgc3RhdGUgdHJhbnNpdGlvbi5cclxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG5cclxuICAgIGluaXRpYWxpemU6IChzZXR0aW5ncz86IFNldHRpbmdzU3RhdGUpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vIHZhciBzYXZlZCA9IENvb2tpZXMuZ2V0SlNPTignc2V0dGluZ3MnKTtcclxuICAgICAgICB2YXIgeHNyZlRva2VuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3hzcmYtdG9rZW4nKS5kYXRhc2V0Wyd4c3JmVG9rZW4nXTtcclxuICAgICAgICB2YXIgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vzc2lvbicpLmRhdGFzZXRbJ2lkJ107XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBJTklUX1NFU1NJT04sIHBheWxvYWQ6IHNldHRpbmdzIHx8IHsgeHNyZlRva2VuOiB4c3JmVG9rZW4sIGlkOiBpZCB9IH0pO1xyXG4gICAgICAgIC8vIENvb2tpZXMuc2V0KCdzZXR0aW5ncycsIGdldFN0YXRlKCkuc2V0dGluZ3MsIHsgZXhwaXJlczogMzY1IH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5cclxuY29uc3QgRGVmYXVsdFNldHRpbmdzOiBTZXR0aW5nc1N0YXRlID0geyB4c3JmVG9rZW46IHVuZGVmaW5lZCwgaWQ6IHVuZGVmaW5lZCB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U2V0dGluZ3NTdGF0ZT4gPSAoc3RhdGU6IFNldHRpbmdzU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIElOSVRfU0VTU0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICAvLyBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZSB8fCBEZWZhdWx0U2V0dGluZ3M7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9TZXNzaW9uLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTVEFURSAtIFRoaXMgZGVmaW5lcyB0aGUgdHlwZSBvZiBkYXRhIG1haW50YWluZWQgaW4gdGhlIFJlZHV4IHN0b3JlLlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0U3RhdGUge1xyXG4gICAgZm9ybTogQ29udGFjdEZvcm07XHJcbiAgICBpc1N1Ym1pdHRpbmc6IGJvb2xlYW47XHJcbiAgICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgICByZXN1bHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdEZvcm0ge1xyXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICBlbWFpbD86IHN0cmluZztcclxuICAgIHBob25lPzogc3RyaW5nO1xyXG4gICAgbWVzc2FnZT86IHN0cmluZztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcblxyXG5pbnRlcmZhY2UgU3VibWl0Q29udGFjdEZvcm1BY3Rpb24ge1xyXG4gICAgdHlwZTogJ1NVQk1JVF9DT05UQUNUX0ZPUk0nXHJcbiAgICBwYXlsb2FkOiBDb250YWN0Rm9ybVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29udGFjdEZvcm1SZWNpZXZlZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQ09OVEFDVF9GT1JNX1JFQ0lFVkVEJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICByZXN1bHQ6IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIENvbnRhY3RGb3JtRXJyb3JBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0NPTlRBQ1RfRk9STV9FUlJPUicsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgZm9ybTogQ29udGFjdEZvcm0sXHJcbiAgICAgICAgcmVzdWx0OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBTdWJtaXRDb250YWN0Rm9ybUFjdGlvbiB8IENvbnRhY3RGb3JtUmVjaWV2ZWRBY3Rpb24gfCBDb250YWN0Rm9ybUVycm9yQWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuXHJcbiAgICBzdWJtaXRDb250YWN0Rm9ybTogKGZvcm06IENvbnRhY3RGb3JtKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVUJNSVRfQ09OVEFDVF9GT1JNJywgcGF5bG9hZDogZm9ybSB9KTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2NvbnRhY3QnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKSxcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdC5zdGF0dXMgPT09IFwiT0tcIilcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ09OVEFDVF9GT1JNX1JFQ0lFVkVEJywgcGF5bG9hZDogeyByZXN1bHQ6IGRhdGEubWVzc2FnZSB9IH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ09OVEFDVF9GT1JNX0VSUk9SJywgcGF5bG9hZDogeyBmb3JtOiBmb3JtLCByZXN1bHQ6IGRhdGEubWVzc2FnZSB9IH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogQ29udGFjdFN0YXRlID0geyBpc1N1Ym1pdHRpbmc6IGZhbHNlLCBzdWJtaXR0ZWQ6IGZhbHNlLCBmb3JtOiB7fSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Q29udGFjdFN0YXRlPiA9IChzdGF0ZTogQ29udGFjdFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU1VCTUlUX0NPTlRBQ1RfRk9STSc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdHRlZDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdDT05UQUNUX0ZPUk1fUkVDSUVWRUQnOlxyXG4gICAgICAgICAgICAvLyBPbmx5IGFjY2VwdCB0aGUgaW5jb21pbmcgZGF0YSBpZiBpdCBtYXRjaGVzIHRoZSBtb3N0IHJlY2VudCByZXF1ZXN0LiBUaGlzIGVuc3VyZXMgd2UgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdXQtb2Ytb3JkZXIgcmVzcG9uc2VzLlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybTogeyBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycsIGVtYWlsOiAnJywgcGhvbmU6ICcnLCBtZXNzYWdlOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdHRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdDogYWN0aW9uLnBheWxvYWQucmVzdWx0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnQ09OVEFDVF9GT1JNX0VSUk9SJzpcclxuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGhlIGluY29taW5nIGRhdGEgaWYgaXQgbWF0Y2hlcyB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdC4gVGhpcyBlbnN1cmVzIHdlIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3V0LW9mLW9yZGVyIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZvcm06IGFjdGlvbi5wYXlsb2FkLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBhY3Rpb24ucGF5bG9hZC5yZXN1bHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0NvbnRhY3QudHMiLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuaW1wb3J0ICogYXMgU2VydmVyIGZyb20gJy4uL3NlcnZlci9Db3VudGVyJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGF0ZSBleHRlbmRzIFNlcnZlci5Db3VudGVyU3RhdGUge1xyXG4gICAgdHJhbnNpdGlvbmluZzogYm9vbGVhbjtcclxufVxyXG5cclxudmFyIERlZmF1bHRDb3VudGVyU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcclxuICAgIGNvdW50OiAwLFxyXG4gICAgc3RhcnRlZDogZmFsc2UsXHJcbiAgICB0cmFuc2l0aW9uaW5nOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG4vLyBVc2UgQHR5cGVOYW1lIGFuZCBpc0FjdGlvblR5cGUgZm9yIHR5cGUgZGV0ZWN0aW9uIHRoYXQgd29ya3MgZXZlbiBhZnRlciBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi5cclxuY29uc3QgUkVRVUVTVF9DT1VOVEVSID0gJ1JlcXVlc3RDb3VudGVyQWN0aW9uJztcclxuY29uc3QgUkVDRUlWRV9DT1VOVEVSID0gJ1JlY2VpdmVDb3VudGVyQWN0aW9uJztcclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0Q291bnRlckFjdGlvbiB7IHR5cGU6ICdSZXF1ZXN0Q291bnRlckFjdGlvbicgfVxyXG5pbnRlcmZhY2UgUmVjZWl2ZUNvdW50ZXJBY3Rpb24geyB0eXBlOiAnUmVjZWl2ZUNvdW50ZXJBY3Rpb24nLCBwYXlsb2FkOiBTZXJ2ZXIuQ291bnRlclN0YXRlIH1cclxuXHJcbi8vaW50ZXJmYWNlIEluY3JlbWVudENvdW50QWN0aW9uIHsgdHlwZTogJ0lOQ1JFTUVOVF9DT1VOVCcgfVxyXG4vL2ludGVyZmFjZSBEZWNyZW1lbnRDb3VudEFjdGlvbiB7IHR5cGU6ICdERUNSRU1FTlRfQ09VTlQnIH1cclxuLy9pbnRlcmZhY2UgU3RhcnRDb3VudGVyQWN0aW9uIHsgdHlwZTogJ1NUQVJUX0NPVU5URVInIH1cclxuLy9pbnRlcmZhY2UgQ291bnRlclN0YXJ0ZWRBY3Rpb24geyB0eXBlOiAnQ09VTlRFUl9TVEFSVEVEJyB9XHJcbi8vaW50ZXJmYWNlIFN0b3BDb3VudGVyQWN0aW9uIHsgdHlwZTogJ1NUT1BfQ09VTlRFUicgfVxyXG4vL2ludGVyZmFjZSBDb3VudGVyU3RvcHBlZEFjdGlvbiB7IHR5cGU6ICdDT1VOVEVSX1NUT1BQRUQnIH1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBSZXF1ZXN0Q291bnRlckFjdGlvbiB8IFJlY2VpdmVDb3VudGVyQWN0aW9uIHwgU2VydmVyLkNvdW50ZXJTdGFydGVkQWN0aW9uIHwgU2VydmVyLkNvdW50ZXJTdG9wcGVkQWN0aW9uIHwgU2VydmVyLkRlY3JlbWVudENvdW50ZXJBY3Rpb24gfCBTZXJ2ZXIuSW5jcmVtZW50Q291bnRlckFjdGlvbiB8IFNlcnZlci5TdGFydENvdW50ZXJBY3Rpb24gfCBTZXJ2ZXIuU3RvcENvdW50ZXJBY3Rpb247XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTiBDUkVBVE9SUyAtIFRoZXNlIGFyZSBmdW5jdGlvbnMgZXhwb3NlZCB0byBVSSBjb21wb25lbnRzIHRoYXQgd2lsbCB0cmlnZ2VyIGEgc3RhdGUgdHJhbnNpdGlvbi5cclxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcG9zdEFjdGlvblRvU2VydmVyKGFjdGlvbjogYW55LCB4c3JmVG9rZW46IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hY3Rpb24nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdYLVhTUkYtVE9LRU4nOiB4c3JmVG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFjdGlvbilcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICByZXF1ZXN0OiAoKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFUVVFU1RfQ09VTlRFUiB9KTtcclxuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgIGxldCBmZXRjaFRhc2sgPSBmZXRjaCgnL2NvdW50ZXJzdGF0ZT9pZD0nICsgc3RhdGUuc2Vzc2lvbi5pZCwge1xyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPENvdW50ZXJTdGF0ZT4pXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRUNFSVZFX0NPVU5URVIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgaGFzIG5vIGluaXRpYWwgY291bnRlciBkYXRhJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRUYXNrKGZldGNoVGFzayk7IC8vIEVuc3VyZSBzZXJ2ZXItc2lkZSBwcmVyZW5kZXJpbmcgd2FpdHMgZm9yIHRoaXMgdG8gY29tcGxldGVcclxuICAgIH0sXHJcbiAgICBpbmNyZW1lbnQ6ICgpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU2VydmVyLklOQ1JFTUVOVF9DT1VOVEVSIH0pO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcG9zdEFjdGlvblRvU2VydmVyKHsgdHlwZTogU2VydmVyLklOQ1JFTUVOVF9DT1VOVEVSIH0sIHN0YXRlLnNlc3Npb24ueHNyZlRva2VuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9LFxyXG4gICAgZGVjcmVtZW50OiAoKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNlcnZlci5ERUNSRU1FTlRfQ09VTlRFUiB9KTtcclxuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHBvc3RBY3Rpb25Ub1NlcnZlcih7IHR5cGU6IFNlcnZlci5ERUNSRU1FTlRfQ09VTlRFUiB9LCBzdGF0ZS5zZXNzaW9uLnhzcmZUb2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0OiAoKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNlcnZlci5TVEFSVF9DT1VOVEVSIH0pO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcG9zdEFjdGlvblRvU2VydmVyKHsgdHlwZTogU2VydmVyLlNUQVJUX0NPVU5URVIgfSwgc3RhdGUuc2Vzc2lvbi54c3JmVG9rZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgICBzdG9wOiAoKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNlcnZlci5TVE9QX0NPVU5URVIgfSk7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBwb3N0QWN0aW9uVG9TZXJ2ZXIoeyB0eXBlOiBTZXJ2ZXIuU1RPUF9DT1VOVEVSIH0sIHN0YXRlLnNlc3Npb24ueHNyZlRva2VuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDb3VudGVyU3RhdGU+ID0gKHN0YXRlOiBDb3VudGVyU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFJFUVVFU1RfQ09VTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRyYW5zaXRpb25pbmc6IHRydWUgfTtcclxuICAgICAgICBjYXNlIFJFQ0VJVkVfQ09VTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uRGVmYXVsdENvdW50ZXJTdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIFNlcnZlci5JTkNSRU1FTlRfQ09VTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfTtcclxuICAgICAgICBjYXNlIFNlcnZlci5ERUNSRU1FTlRfQ09VTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdW50OiBzdGF0ZS5jb3VudCAtIDEgfTtcclxuICAgICAgICBjYXNlIFNlcnZlci5TVEFSVF9DT1VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdHJhbnNpdGlvbmluZzogdHJ1ZSB9O1xyXG4gICAgICAgIGNhc2UgU2VydmVyLkNPVU5URVJfU1RBUlRFRDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRyYW5zaXRpb25pbmc6IGZhbHNlLCBzdGFydGVkOiB0cnVlIH07XHJcbiAgICAgICAgY2FzZSBTZXJ2ZXIuU1RPUF9DT1VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdHJhbnNpdGlvbmluZzogdHJ1ZSB9O1xyXG4gICAgICAgIGNhc2UgU2VydmVyLkNPVU5URVJfU1RPUFBFRDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRyYW5zaXRpb25pbmc6IGZhbHNlLCBzdGFydGVkOiBmYWxzZSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgRGVmYXVsdENvdW50ZXJTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0NvdW50ZXIudHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlclN0YXRlIHtcclxuICAgIGlzU3VibWl0dGluZzogYm9vbGVhbjtcclxuICAgIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxGb3JtIHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTlMgLSBUaGVzZSBhcmUgc2VyaWFsaXphYmxlIChoZW5jZSByZXBsYXlhYmxlKSBkZXNjcmlwdGlvbnMgb2Ygc3RhdGUgdHJhbnNpdGlvbnMuXHJcbi8vIFRoZXkgZG8gbm90IHRoZW1zZWx2ZXMgaGF2ZSBhbnkgc2lkZS1lZmZlY3RzOyB0aGV5IGp1c3QgZGVzY3JpYmUgc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgdG8gaGFwcGVuLlxyXG5cclxuaW50ZXJmYWNlIFN1Ym1pdEVtYWlsQWN0aW9uIHtcclxuICAgIHR5cGU6ICdTVUJNSVRfRU1BSUwnXHJcbn1cclxuXHJcbmludGVyZmFjZSBFbWFpbFN1Ym1pdHRlZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnRU1BSUxfU1VCTUlUVEVEJyxcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuLy8gRGVjbGFyZSBhICdkaXNjcmltaW5hdGVkIHVuaW9uJyB0eXBlLiBUaGlzIGd1YXJhbnRlZXMgdGhhdCBhbGwgcmVmZXJlbmNlcyB0byAndHlwZScgcHJvcGVydGllcyBjb250YWluIG9uZSBvZiB0aGVcclxuLy8gZGVjbGFyZWQgdHlwZSBzdHJpbmdzIChhbmQgbm90IGFueSBvdGhlciBhcmJpdHJhcnkgc3RyaW5nKS5cclxudHlwZSBLbm93bkFjdGlvbiA9IFN1Ym1pdEVtYWlsQWN0aW9uIHwgRW1haWxTdWJtaXR0ZWRBY3Rpb247XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFDVElPTiBDUkVBVE9SUyAtIFRoZXNlIGFyZSBmdW5jdGlvbnMgZXhwb3NlZCB0byBVSSBjb21wb25lbnRzIHRoYXQgd2lsbCB0cmlnZ2VyIGEgc3RhdGUgdHJhbnNpdGlvbi5cclxuLy8gVGhleSBkb24ndCBkaXJlY3RseSBtdXRhdGUgc3RhdGUsIGJ1dCB0aGV5IGNhbiBoYXZlIGV4dGVybmFsIHNpZGUtZWZmZWN0cyAoc3VjaCBhcyBsb2FkaW5nIGRhdGEpLlxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG5cclxuICAgIHN1Ym1pdEVtYWlsOiAoZm9ybTogRW1haWxGb3JtKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVUJNSVRfRU1BSUwnIH0pO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvc3Vic2NyaWJlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogJ2VtYWlsPScgKyBmb3JtLmVtYWlsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdFTUFJTF9TVUJNSVRURUQnLCBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJFRFVDRVIgLSBGb3IgYSBnaXZlbiBzdGF0ZSBhbmQgYWN0aW9uLCByZXR1cm5zIHRoZSBuZXcgc3RhdGUuIFRvIHN1cHBvcnQgdGltZSB0cmF2ZWwsIHRoaXMgbXVzdCBub3QgbXV0YXRlIHRoZSBvbGQgc3RhdGUuXHJcblxyXG5jb25zdCB1bmxvYWRlZFN0YXRlOiBGb290ZXJTdGF0ZSA9IHsgaXNTdWJtaXR0aW5nOiBmYWxzZSwgc3VibWl0dGVkOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Rm9vdGVyU3RhdGU+ID0gKHN0YXRlOiBGb290ZXJTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NVQk1JVF9FTUFJTCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXR0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnRU1BSUxfU1VCTUlUVEVEJzpcclxuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGhlIGluY29taW5nIGRhdGEgaWYgaXQgbWF0Y2hlcyB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdC4gVGhpcyBlbnN1cmVzIHdlIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3V0LW9mLW9yZGVyIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXR0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCB1bmxvYWRlZFN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvRm9vdGVyLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyVmlld01vZGVsIH0gZnJvbSAnLi4vc2VydmVyL1JlZ2lzdGVyVmlld01vZGVsJztcclxuaW1wb3J0ICogYXMgU2VydmVyIGZyb20gJy4uL3NlcnZlci9Vc2VyJztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1JFUVVFU1QgPSAnUmVnaXN0ZXJSZXF1ZXN0QWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSAnUmVnaXN0ZXJTdWNjZXNzQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0VSUk9SID0gJ1JlZ2lzdGVyRXJyb3JBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlclN0YXRlIHtcclxuICAgIHJlcXVlc3Rpbmc6IGJvb2xlYW47XHJcbiAgICByZWdpc3RlcmVkOiBib29sZWFuO1xyXG4gICAgZXJyb3JzOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IERlZmF1bHRSZWdpc3RlclN0YXRlOiBSZWdpc3RlclN0YXRlID0ge1xyXG4gICAgcmVxdWVzdGluZzogZmFsc2UsXHJcbiAgICByZWdpc3RlcmVkOiBmYWxzZSxcclxuICAgIGVycm9yczoge31cclxufVxyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyUmVxdWVzdEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUmVnaXN0ZXJSZXF1ZXN0QWN0aW9uJztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyRXJyb3JBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JlZ2lzdGVyRXJyb3JBY3Rpb24nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXJTdWNjZXNzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSZWdpc3RlclN1Y2Nlc3NBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogUmVnaXN0ZXJWaWV3TW9kZWw7XHJcbn1cclxuXHJcbi8vIFRPRE8gaW1wb3J0IFN1Y2Nlc3MgYW5kIEludmFsaWQgYWN0aW9ucyBmcm9tIHNlcnZlciBhbmQgaGFuZGxlIHRoZW1cclxudHlwZSBLbm93bkFjdGlvbiA9IFJlZ2lzdGVyUmVxdWVzdEFjdGlvbiB8IFJlZ2lzdGVyRXJyb3JBY3Rpb24gfCBSZWdpc3RlclN1Y2Nlc3NBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcblxyXG4gICAgcmVnaXN0ZXI6IChyZWdpc3Rlck1vZGVsOiBSZWdpc3RlclZpZXdNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRUdJU1RFUl9SRVFVRVNUIH0pO1xyXG4gICAgICAgIGxldCB4c3JmID0gZ2V0U3RhdGUoKS5zZXNzaW9uLnhzcmZUb2tlbjtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9hY2NvdW50L3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdYLVhTUkYtVE9LRU4nOiB4c3JmXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdGVyTW9kZWwpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFR0lTVEVSX1NVQ0NFU1MsIHBheWxvYWQ6IHJlZ2lzdGVyTW9kZWwgfSk7XHJcbiAgICAgICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFR0lTVEVSX0VSUk9SIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyIHJlc3VsdCcsIHJlc3BvbnNlKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxSZWdpc3RlclN0YXRlPiA9IChzdGF0ZTogUmVnaXN0ZXJTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgUkVHSVNURVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVxdWVzdGluZzogdHJ1ZSwgcmVnaXN0ZXJlZDogZmFsc2UsIGVycm9yczoge30gfTtcclxuICAgICAgICBjYXNlIFJFR0lTVEVSX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4geyByZXF1ZXN0aW5nOiBmYWxzZSwgcmVnaXN0ZXJlZDogZmFsc2UsIGVycm9yczoge30gfTtcclxuICAgICAgICBjYXNlIFJFR0lTVEVSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlcXVlc3Rpbmc6IGZhbHNlLCByZWdpc3RlcmVkOiBmYWxzZSwgZXJyb3JzOiB7fSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IERlZmF1bHRSZWdpc3RlclN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvUmVnaXN0ZXIudHMiLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG4gICAgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLFxyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJyxcclxuICAgIHN0YXJ0RGF0ZUluZGV4OiBudW1iZXI7XHJcbiAgICBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdXHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB8IFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzOiAoc3RhcnREYXRlSW5kZXg6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gT25seSBsb2FkIGRhdGEgaWYgaXQncyBzb21ldGhpbmcgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIChhbmQgYXJlIG5vdCBhbHJlYWR5IGxvYWRpbmcpXHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZUluZGV4ICE9PSBnZXRTdGF0ZSgpLndlYXRoZXJGb3JlY2FzdHMuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGAvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cz9zdGFydERhdGVJbmRleD0ke3N0YXJ0RGF0ZUluZGV4fWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxXZWF0aGVyRm9yZWNhc3RbXT4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJywgc3RhcnREYXRlSW5kZXg6IHN0YXJ0RGF0ZUluZGV4LCBmb3JlY2FzdHM6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFkZFRhc2soZmV0Y2hUYXNrKTsgLy8gRW5zdXJlIHNlcnZlci1zaWRlIHByZXJlbmRlcmluZyB3YWl0cyBmb3IgdGhpcyB0byBjb21wbGV0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVFVRVNUX1dFQVRIRVJfRk9SRUNBU1RTJywgc3RhcnREYXRlSW5kZXg6IHN0YXJ0RGF0ZUluZGV4IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUkVEVUNFUiAtIEZvciBhIGdpdmVuIHN0YXRlIGFuZCBhY3Rpb24sIHJldHVybnMgdGhlIG5ldyBzdGF0ZS4gVG8gc3VwcG9ydCB0aW1lIHRyYXZlbCwgdGhpcyBtdXN0IG5vdCBtdXRhdGUgdGhlIG9sZCBzdGF0ZS5cclxuXHJcbmNvbnN0IHVubG9hZGVkU3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSA9IHsgc3RhcnREYXRlSW5kZXg6IG51bGwsIGZvcmVjYXN0czogW10sIGlzTG9hZGluZzogZmFsc2UgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFdlYXRoZXJGb3JlY2FzdHNTdGF0ZT4gPSAoc3RhdGU6IFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgIGZvcmVjYXN0czogc3RhdGUuZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnUkVDRUlWRV9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWNjZXB0IHRoZSBpbmNvbWluZyBkYXRhIGlmIGl0IG1hdGNoZXMgdGhlIG1vc3QgcmVjZW50IHJlcXVlc3QuIFRoaXMgZW5zdXJlcyB3ZSBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG91dC1vZi1vcmRlciByZXNwb25zZXMuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhcnREYXRlSW5kZXggPT09IHN0YXRlLnN0YXJ0RGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUluZGV4OiBhY3Rpb24uc3RhcnREYXRlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBhY3Rpb24uZm9yZWNhc3RzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHVubG9hZGVkU3RhdGU7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIEFwcFN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBBcHBTdG9yZT4oJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBIaXN0b3J5QmFzZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0JztcclxuaW1wb3J0IEZldGNoRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvRmV0Y2hEYXRhJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXInO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvbXBvbmVudHMvQ291bnRlcic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy9Vc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IDxSb3V0ZSBjb21wb25lbnQ9eyBMYXlvdXQgfT5cclxuICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnRzPXt7IGJvZHk6IEhvbWUgfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGNvbXBvbmVudHM9e3sgYm9keTogTG9naW4gfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvcmVnaXN0ZXInIGNvbXBvbmVudHM9e3sgYm9keTogUmVnaXN0ZXIgfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvY29udGFjdCcgY29tcG9uZW50cz17eyBib2R5OiBDb250YWN0IH19IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2NvdW50ZXInIGNvbXBvbmVudHM9e3sgYm9keTogQ291bnRlciB9fSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy91c2VyJyBjb21wb25lbnRzPXt7IGJvZHk6IFVzZXIgfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvZmV0Y2hkYXRhJyBjb21wb25lbnRzPXt7IGJvZHk6IEZldGNoRGF0YSB9fT5cclxuICAgICAgICA8Um91dGUgcGF0aD0nKDpzdGFydERhdGVJbmRleCknIC8+IHsgLyogT3B0aW9uYWwgcm91dGUgc2VnbWVudCB0aGF0IGRvZXMgbm90IGFmZmVjdCBOYXZNZW51IGhpZ2hsaWdodGluZyAqLyB9XHJcbiAgICA8L1JvdXRlPlxyXG48L1JvdXRlPjtcclxuXHJcbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMudHN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzcG5ldC1wcmVyZW5kZXJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJ2NvcmUtZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IEdyaWQsIFJvdywgQ29sLCBXZWxsLCBQYW5lbCwgUGFuZWxHcm91cCwgQnV0dG9uLCBGb3JtR3JvdXAsIEZvcm0sIENvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2wsIEhlbHBCbG9jayB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENvbnRhY3RTdG9yZSBmcm9tICcuLi9zdG9yZS9Db250YWN0JztcclxuXHJcblxyXG50eXBlIENvbnRhY3RQcm9wcyA9IENvbnRhY3RTdG9yZS5Db250YWN0U3RhdGUgJiB0eXBlb2YgQ29udGFjdFN0b3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY29uc3QgaW5pdGlhbEZvcm06IENvbnRhY3RTdG9yZS5Db250YWN0Rm9ybSA9IHtcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwaG9uZTogJycsXHJcbiAgICBtZXNzYWdlOiAnJ1xyXG59XHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvbnRhY3RQcm9wcywgQ29udGFjdFN0b3JlLkNvbnRhY3RGb3JtPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IENvbnRhY3RQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi5pbml0aWFsRm9ybSwgLi4ucHJvcHMuZm9ybSB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogQ29udGFjdFByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IG5leHRQcm9wcy5mb3JtKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRQcm9wcy5mb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIEBhdXRvYmluZFxyXG4gICAgaGFuZGxlQ2hhbmdlKGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBhdXRvYmluZFxyXG4gICAgc3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8Rm9ybT4pIHtcclxuICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdENvbnRhY3RGb3JtKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEdyaWQ+XHJcbiAgICAgICAgICAgIDxoMT5Db250YWN0IHVzPC9oMT5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxXZWxsIGJzU2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGhvcml6b250YWwgb25TdWJtaXQ9e3RoaXMuc3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGhlYWRlclwiPkNvbnRhY3Q8L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMH0gbWRPZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJmaXJzdE5hbWVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3ROYW1lfSBwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMH0gbWRPZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJsYXN0TmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0TmFtZX0gcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTB9IG1kT2Zmc2V0PXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTB9IG1kT2Zmc2V0PXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwicGhvbmVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUucGhvbmV9IHBsYWNlaG9sZGVyPVwiUGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTB9IG1kT2Zmc2V0PXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCIgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPXs3fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLmZvcm0ubWVzc2FnZX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIG1lc3NhZ2UgaGVyZS4gV2UnbGwgZ2V0IGJhY2sgdG8geW91IHdpdGhpbiB0d28gYnVzaW5lc3MgZGF5c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGJzU2l6ZT1cImxnXCIgYnNTdHlsZT1cInByaW1hcnlcIiBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc1N1Ym1pdHRpbmd9Pnt0aGlzLnByb3BzLmlzU3VibWl0dGluZyA/IFwiU3Bpbm5lclwiIDogXCJTZW5kXCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezExfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sLlN0YXRpYz57dGhpcy5wcm9wcy5zdWJtaXR0ZWQgPyB0aGlzLnByb3BzLnJlc3VsdCA6IFwiXCJ9PC9Gb3JtQ29udHJvbC5TdGF0aWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L1dlbGw+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWRyZXM8L2gzPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmVldCBhZGRyZXNzPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdW50cnk8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXAxXCIgY2xhc3NOYW1lPVwibWFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5ubC9tYXBzL2Rpci8vWW91ciUwMjBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9Jy9pbWFnZXMvTWFwLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPGgyPlRoaXMgZGVtbyB3YXMgYnVpbHQgYnk8L2gyPlxyXG4gICAgICAgICAgICA8aDQ+TWFhcnRlbiBTaWtrZW1hPC9oND5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5jb250YWN0LCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgQ29udGFjdFN0b3JlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoQ29udGFjdCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0NvbnRhY3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXJTdG9yZSBmcm9tICcuLi9zdG9yZS9Db3VudGVyJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuLi9zdG9yZS9XZWF0aGVyRm9yZWNhc3RzJztcclxuXHJcbnR5cGUgQ291bnRlclByb3BzID0gQ291bnRlclN0b3JlLkNvdW50ZXJTdGF0ZSAmIHR5cGVvZiBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvdW50ZXJQcm9wcywgdm9pZD4ge1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIC8vIGZldGNoIGN1cnJlbnQgZGF0YSBmcm9tIHNlcnZlclxyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IENvdW50ZXJQcm9wcykge1xyXG4gICAgLy8gICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIGluY29taW5nIHByb3BzIChlLmcuLCByb3V0ZSBwYXJhbXMpIGNoYW5nZVxyXG4gICAgLy8gICAgdGhpcy5wcm9wcy5yZXF1ZXN0KCk7XHJcbiAgICAvL31cclxuXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPkNvdW50ZXI8L2gxPlxyXG5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgYSBSZWFjdCBjb21wb25lbnQuIEl0IGlzIGNvbm5lY3RlZCByZWFsLXRpbWUgdG8gdGhlIHNlcnZlcjogc3RhcnQgdGhlIHRpbWVyIHRvIHZpZXcgc2VydmVyLWluaXRpYXRlZCB1cGRhdGVzLCB1c2UgXCJpbmNyZW1lbnRcIiB0byBjaGFuZ2UgdGhlIHZhbHVlIGNsaWVudHNpZGUuXHJcbiAgICAgICAgICAgICAgICBSZWZyZXNoIHRoZSBwYWdlIHRvIHNlZSB0aGF0IHRoZSB2YWx1ZSBpcyBhbHNvIHJlbmRlcmVkIHNlcnZlcnNpZGUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+eyB0aGlzLnByb3BzLmNvdW50IH08L3N0cm9uZz48L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5pbmNyZW1lbnQoKSB9fT5JbmNyZW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuZGVjcmVtZW50KCkgfX0+RGVjcmVtZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGlzYWJsZWQ9e3RoaXMucHJvcHMuc3RhcnRlZH0gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLnN0YXJ0KCkgfX0+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkaXNhYmxlZD17IXRoaXMucHJvcHMuc3RhcnRlZH0gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLnN0b3AoKSB9fT5TdG9wPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBDb3VudGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShDb3VudGVyKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQ291bnRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0c1N0YXRlIGZyb20gJy4uL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG5cclxuLy8gQXQgcnVudGltZSwgUmVkdXggd2lsbCBtZXJnZSB0b2dldGhlci4uLlxyXG50eXBlIFdlYXRoZXJGb3JlY2FzdFByb3BzID1cclxuICAgIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5XZWF0aGVyRm9yZWNhc3RzU3RhdGUgICAgIC8vIC4uLiBzdGF0ZSB3ZSd2ZSByZXF1ZXN0ZWQgZnJvbSB0aGUgUmVkdXggc3RvcmVcclxuICAgICYgdHlwZW9mIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZS5hY3Rpb25DcmVhdG9ycyAgIC8vIC4uLiBwbHVzIGFjdGlvbiBjcmVhdG9ycyB3ZSd2ZSByZXF1ZXN0ZWRcclxuICAgICYgeyBwYXJhbXM6IHsgc3RhcnREYXRlSW5kZXg6IHN0cmluZyB9IH07ICAgICAgIC8vIC4uLiBwbHVzIGluY29taW5nIHJvdXRpbmcgcGFyYW1ldGVyc1xyXG5cclxuY2xhc3MgRmV0Y2hEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdlYXRoZXJGb3JlY2FzdFByb3BzLCB2b2lkPiB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgYWRkZWQgdG8gdGhlIHBhZ2VcclxuICAgICAgICBsZXQgc3RhcnREYXRlSW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzKHN0YXJ0RGF0ZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogV2VhdGhlckZvcmVjYXN0UHJvcHMpIHtcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gaW5jb21pbmcgcHJvcHMgKGUuZy4sIHJvdXRlIHBhcmFtcykgY2hhbmdlXHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUluZGV4ID0gcGFyc2VJbnQobmV4dFByb3BzLnBhcmFtcy5zdGFydERhdGVJbmRleCkgfHwgMDtcclxuICAgICAgICB0aGlzLnByb3BzLnJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzKHN0YXJ0RGF0ZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgd29ya2luZyB3aXRoIFVSTCBwYXJhbWV0ZXJzLjwvcD5cclxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZvcmVjYXN0c1RhYmxlKCkgfVxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyUGFnaW5hdGlvbigpIH1cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJGb3JlY2FzdHNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZm9yZWNhc3RzLm1hcChmb3JlY2FzdCA9PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3Quc3VtbWFyeSB9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJQYWdpbmF0aW9uKCkge1xyXG4gICAgICAgIGxldCBwcmV2U3RhcnREYXRlSW5kZXggPSB0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4IC0gNTtcclxuICAgICAgICBsZXQgbmV4dFN0YXJ0RGF0ZUluZGV4ID0gdGhpcy5wcm9wcy5zdGFydERhdGVJbmRleCArIDU7XHJcblxyXG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NsZWFyZml4IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgcHVsbC1sZWZ0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IHByZXZTdGFydERhdGVJbmRleCB9YCB9PlByZXZpb3VzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0JyB0bz17IGAvZmV0Y2hkYXRhLyR7IG5leHRTdGFydERhdGVJbmRleCB9YCB9Pk5leHQ8L0xpbms+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0xvYWRpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IFtdIH1cclxuICAgICAgICA8L3A+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS53ZWF0aGVyRm9yZWNhc3RzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoRmV0Y2hEYXRhKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tICdjb3JlLWRlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm1Hcm91cCwgRm9ybSwgQ29udHJvbExhYmVsLCBGb3JtQ29udHJvbCwgSGVscEJsb2NrIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgRm9vdGVyU3RhdGUgZnJvbSAnLi4vc3RvcmUvRm9vdGVyJztcclxuXHJcblxyXG50eXBlIEZvb3RlclByb3BzID0gRm9vdGVyU3RhdGUuRm9vdGVyU3RhdGUgJiB0eXBlb2YgRm9vdGVyU3RhdGUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Rm9vdGVyUHJvcHMsIEZvb3RlclN0YXRlLkVtYWlsRm9ybT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGF1dG9iaW5kXHJcbiAgICBnZXRWYWxpZGF0aW9uU3RhdGUoKTogXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIiB7XHJcbiAgICAgICAgdmFyIGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XHJcbiAgICAgICAgcmV0dXJuIGVtYWlsUmVnZXgudGVzdCh0aGlzLnN0YXRlLmVtYWlsKSA/IFwic3VjY2Vzc1wiIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBAYXV0b2JpbmRcclxuICAgIGhhbmRsZUNoYW5nZShlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBhdXRvYmluZFxyXG4gICAgc3VibWl0RW1haWwoZXZlbnQgOiBSZWFjdC5Gb3JtRXZlbnQ8Rm9ybT4pIHtcclxuICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdEVtYWlsKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGF1dG9iaW5kXHJcbiAgICBzdWJtaXREaXNhYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1N1Ym1pdHRpbmcgfHwgdGhpcy5nZXRWYWxpZGF0aW9uU3RhdGUoKSAhPT0gXCJzdWNjZXNzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlNoYXJlIHRoZSB2aXNpb24hPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1kZXZlaWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb290ZXIgdGV4dCBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXR0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaXB0aW9uLW1lc3NhZ2VcIj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEVtYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwiZm9ybUJhc2ljVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU3RhdGU9e3RoaXMuZ2V0VmFsaWRhdGlvblN0YXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmVtYWlsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbC5GZWVkYmFjayAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyB0aGlzLnN1Ym1pdERpc2FibGVkKCkgfT5LZWVwIG1lIGluZm9ybWVkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cInNoYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbHMtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1lvdXJGYlBhZ2VcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmVcIj48L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vWW91clR3aXR0ZXJIYW5kbGVcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyLXNxdWFyZVwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9ubC5saW5rZWRpbi5jb20vaW4vWW91ckxpbmtlZEluUHJvZmlsZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluLXNxdWFyZVwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDCqSAyMDE2IE1JVCBMaWNlbmNlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUuZm9vdGVyLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgRm9vdGVyU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShGb290ZXIpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Gb290ZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tICcuLi9saWIvc2Nyb2xsLWVmZmVjdCc7XHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2xpYi9mdWxsc2NyZWVuJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHZvaWQsIHZvaWQ+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPEZ1bGxzY3JlZW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiaGVyb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWdsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsRWZmZWN0IGFuaW1hdGU9XCJib3VuY2VJblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lLWludHJvLXRleHRcIj5EZW1vITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhvbWUtaW50cm8tdGV4dFwiPi4uLlJlYWN0LCBSZWR1eCwgT3JsZWFucyBhbmQgRG90bmV0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhvbWUtaW50cm8tdGV4dFwiPkludHJvZHVjaW5nIHRoZSA8U2Nyb2xsLkxpbmsgdG89XCJkZW1vXCIgaHJlZj1cIiNcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs3MDB9IG9mZnNldD17LTUwfT5SUk9EPC9TY3JvbGwuTGluaz4gc3RhY2s8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxFZmZlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3duLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGwuTGluayB0bz1cImRlbW9cIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImljb24tbGlua1wiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezcwMH0gb2Zmc2V0PXstNTB9ID48aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1jaXJjbGUtZG93biBjdXN0b21cIiA+PC9pPjwvU2Nyb2xsLkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRnVsbHNjcmVlbj5cclxuICAgICAgICAgICAgPFNjcm9sbC5FbGVtZW50IG5hbWU9XCJkZW1vXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZNZW51IGZyb20gJy4vTmF2TWVudSc7XHJcbmltcG9ydCBSb3V0ZVRyYW5zaXRpb24gZnJvbSAnLi4vbGliL3JvdXRlLXRyYW5zaXRpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgICBib2R5OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgdm9pZD4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXZNZW51IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVRyYW5zaXRpb24gcGF0aG5hbWU9e3R5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIDogJycgfSBjaGlsZHJlbj17dGhpcy5wcm9wcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuYm9keSAvKiBjdXJyZW50IHJvdXRlIGNvbXBvbmVudCAqLyB9XHJcbiAgICAgICAgICAgIDwvUm91dGVUcmFuc2l0aW9uPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3Qgc3R5bGVzOiBhbnkgPSB7fVxyXG5cclxuLy8gc3R5bGVzLmZpbGwgPSB7XHJcbi8vICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuLy8gICAgIGxlZnQ6IDAsXHJcbi8vICAgICByaWdodDogMCxcclxuLy8gICAgIHRvcDogMCxcclxuLy8gICAgIGJvdHRvbTogMFxyXG4vLyB9O1xyXG5cclxuLy8gc3R5bGVzLmNvbnRlbnQgPSBPYmplY3QuYXNzaWduKHt9LFxyXG4vLyAgICAgc3R5bGVzLmZpbGwsIHtcclxuLy8gICAgICAgICB0b3A6ICc1MHB4JyxcclxuLy8gICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbi8vICAgICB9XHJcbi8vICk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJ2NvcmUtZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IEdyaWQsIENvbCwgUm93LCBCdXR0b24sIENoZWNrYm94LCBGb3JtLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBMb2dpblN0b3JlIGZyb20gJy4uL3N0b3JlL0xvZ2luJztcclxuXHJcbnR5cGUgTG9naW5Qcm9wcyA9IExvZ2luU3RvcmUuTG9naW5TdGF0ZSAmIHR5cGVvZiBMb2dpblN0b3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuaW50ZXJmYWNlIExvZ2luU3RhdGUge1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExvZ2luUHJvcHMsIExvZ2luU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBAYXV0b2JpbmRcclxuICAgIGhhbmRsZUNoYW5nZShlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAYXV0b2JpbmRcclxuICAgIHByaXZhdGUgbG9naW4oZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxGb3JtPikge1xyXG4gICAgICAgIHRoaXMucHJvcHMubG9naW4oeyBlbWFpbDogdGhpcy5zdGF0ZS51c2VyTmFtZSwgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsIHJlbWVtYmVyTG9naW46IHRydWUsIHJldHVyblVybDogJy8nIH0pO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGF1dG9iaW5kXHJcbiAgICBnZXRWYWxpZGF0aW9uU3RhdGUoKTogXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIiB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckxvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiA8R3JpZD5cclxuICAgICAgICAgICAgPGgxPlUgYmVudCBpbmdlbG9nZCE8L2gxPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwifi9hY2NvdW50XCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi13YXJuaW5nXCIgdHlwZT1cInN1Ym1pdFwiPlF1ZXJ5IHRoZSByZXNvdXJjZSBjb250cm9sbGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWRhbmdlclwiIGhyZWY9XCIvc2lnbm91dFwiPlNpZ24gb3V0PC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyQW5vbnltb3VzKCkge1xyXG4gICAgICAgIHJldHVybiA8R3JpZCBjbGFzc05hbWU9XCJvbWJfbG9naW5cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm9tYl9hdXRoVGl0bGVcIj5Mb2dpbiBvZiA8TGluayB0bz17Jy9SZWdpc3Rlcid9PlJlZ2lzdHJlZXI8L0xpbms+PC9oMz5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJvbWJfc29jaWFsQnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17NH0gc209ezJ9IHNtT2Zmc2V0PXszfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2sgb21iX2J0bi1mYWNlYm9va1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vayB2aXNpYmxlLXhzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5GYWNlYm9vazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9IHNtPXsyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2sgb21iX2J0bi10d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXIgdmlzaWJsZS14c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+VHdpdHRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9IHNtPXsyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2sgb21iX2J0bi1nb29nbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ29vZ2xlLXBsdXMgdmlzaWJsZS14c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+R29vZ2xlKzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm9tYl9sb2dpbk9yXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9IHNtT2Zmc2V0PXszfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm9tYl9ock9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbWJfc3Bhbk9yXCI+b2Y8L3NwYW4+XHJcblx0XHRcdCAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fSBzbU9mZnNldD17M30gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm9tYl9sb2dpbkZvcm1cIiBvblN1Ym1pdD17dGhpcy5sb2dpbn0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgdmFsaWRhdGlvblN0YXRlPXt0aGlzLmdldFZhbGlkYXRpb25TdGF0ZSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLkFkZG9uPjxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIiAvPjwvSW5wdXRHcm91cC5BZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiTG9naW4gTmFhbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wuRmVlZGJhY2sgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQWRkb24+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIC8+PC9JbnB1dEdyb3VwLkFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sLkZlZWRiYWNrIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIj5JbmxvZ2dlbjwvQnV0dG9uPlxyXG4gICAgXHRcdFx0XHQ8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXszfSBzbU9mZnNldD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94Pk9udGhvdSBtaWo8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgXHRcdFx0PC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9tYl9mb3Jnb3RQd2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIjXCI+UGFzc3dvcmQgdmVyZ2V0ZW4/PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cdCAgICBcclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJMb2dnZWRJbigpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQW5vbnltb3VzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUubG9naW4sIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBMb2dpblN0b3JlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXJvdXRlci1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgbG9nbyA9IHJlcXVpcmUoJy4uL2ltYWdlcy9sb2dvLnN2ZycpIGFzIHN0cmluZztcclxuXHJcbmludGVyZmFjZSBOYXZNZW51UHJvcHMge1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gICAgcm9sZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdk1lbnVQcm9wcywgdm9pZD4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPE5hdmJhciBmaXhlZFRvcD17dHJ1ZX0+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdmJhci1icmFuZCcgdG89eycvJ30+PGltZyBzcmM9eyBsb2dvIH0gYWx0PVwiUlJPRCBMb2dvXCIgLz5SUk9EPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSAvPlxyXG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8TmF2IHB1bGxSaWdodD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfT5Db250YWN0PC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXszfT5Db3VudGVyPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezJ9IHRpdGxlPVwiTG9naW5cIiBpZD1cIm5hdi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuMX0+TG9naW48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi4yfT5SZWdpc3RlcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsyLjN9PlVzZXIgUHJvZmlsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9nb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuNH0+TG9nb3V0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHsgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZS5sb2dpbi5hdXRoZW50aWNhdGVkLCByb2xlczogW10gfTsgfSwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIHt9ICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoTmF2TWVudSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJ2NvcmUtZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IEdyaWQsIENvbCwgUm93LCBCdXR0b24sIENoZWNrYm94LCBGb3JtLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24sIENvbnRyb2xMYWJlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFJlZ2lzdGVyU3RvcmUgZnJvbSAnLi4vc3RvcmUvUmVnaXN0ZXInO1xyXG5cclxudHlwZSBSZWdpc3RlclByb3BzID0gUmVnaXN0ZXJTdG9yZS5SZWdpc3RlclN0YXRlICYgdHlwZW9mIFJlZ2lzdGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXJTdGF0ZSB7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UmVnaXN0ZXJQcm9wcywgUmVnaXN0ZXJTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIEBhdXRvYmluZFxyXG4gICAgaGFuZGxlQ2hhbmdlKGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBhdXRvYmluZFxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcihldmVudDogUmVhY3QuRm9ybUV2ZW50PEZvcm0+KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZWdpc3Rlcih7IGVtYWlsOiB0aGlzLnN0YXRlLnVzZXJOYW1lLCBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCwgY29uZmlybVBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkIH0pO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGF1dG9iaW5kXHJcbiAgICBnZXRWYWxpZGF0aW9uU3RhdGUoKTogXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIiB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEdyaWQ+XHJcbiAgICAgICAgICAgIDxoMT5SZWdpc3RlciBuZXcgYWNjb3VudDwvaDE+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxGb3JtIGhvcml6b250YWwgb25TdWJtaXQ9e3RoaXMucmVnaXN0ZXJ9IGF1dG9Db21wbGV0ZT1cIm9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIG5hbWU9XCJ1c2VyTmFtZVwiIHZhbGlkYXRpb25TdGF0ZT17dGhpcy5nZXRWYWxpZGF0aW9uU3RhdGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjb21wb25lbnRDbGFzcz17Q29udHJvbExhYmVsfSBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wuRmVlZGJhY2sgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjb21wb25lbnRDbGFzcz17Q29udHJvbExhYmVsfSBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wuRmVlZGJhY2sgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbU9mZnNldD17Mn0gc209ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9HcmlkPjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlciwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIFJlZ2lzdGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShSZWdpc3Rlcik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL1JlZ2lzdGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBVc2VyU3RhdGUgZnJvbSAnLi4vc3RvcmUvVXNlcic7XHJcblxyXG50eXBlIFVzZXJQcm9wcyA9IFVzZXJTdGF0ZS5Vc2VyTW9kZWwgJiB0eXBlb2YgVXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzICBcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb3BzLCB2b2lkPiB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgcnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgYWRkZWQgdG8gdGhlIHBhZ2VcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmdldFVzZXIoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IGFkZGVkIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPlVzZXI8L2gxPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHdvcmtpbmcgd2l0aCBVUkwgcGFyYW1ldGVycy48L3A+XHJcbiAgICAgICAgICAgIDxwPmlzIGF1dGhlbnRpY2F0ZWQ6IHt0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZCA/ICdZZXMhJyA6ICc6LSgnIH08L3A+XHJcbiAgICAgICAgICAgIDxwPmVtYWlsOiB7dGhpcy5wcm9wcy5lbWFpbH08L3A+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS51c2VyLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgVXNlclN0YXRlLmFjdGlvbkNyZWF0b3JzICAgICAgICAgICAgICAgICAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoVXNlcik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL1VzZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmludGVyZmFjZSBEaW1lbnNpb25zIHtcclxuICAgIGhlaWdodDogc3RyaW5nXHJcbn1cclxuXHJcbnZhciBnZXREaW1lbnNpb25zID0gKCkgPT4gKHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MCArICdweCcgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHZvaWQsIERpbWVuc2lvbnM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGhlaWdodDogJzEwMHZoJyB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXREaW1lbnNpb25zKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7IHN0eWxlOiB7IGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgfSB9KTtcclxuICAgICAgICAvL3JldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJhbnNpdGlvbk1vdGlvbiwgc3ByaW5nIH0gZnJvbSAncmVhY3QtbW90aW9uJztcclxuXHJcbmNvbnN0IHdpbGxFbnRlciA9ICgpID0+ICh7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgc2NhbGU6IDAuOTdcclxufSk7XHJcblxyXG5jb25zdCB3aWxsTGVhdmUgPSAoKSA9PiAoe1xyXG4gICAgb3BhY2l0eTogc3ByaW5nKDApLFxyXG4gICAgc2NhbGU6IHNwcmluZygxLjAwKVxyXG59KTtcclxuXHJcbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XHJcbiAgICBvcGFjaXR5OiBzcHJpbmcoMSksXHJcbiAgICBzY2FsZTogc3ByaW5nKDEpXHJcbn0pO1xyXG5cclxuY29uc3QgUm91dGVUcmFuc2l0aW9uID0gKHsgY2hpbGRyZW46IGNoaWxkLCBwYXRobmFtZSB9KSA9PiAoXHJcbiAgICA8VHJhbnNpdGlvbk1vdGlvblxyXG4gICAgICAgIHN0eWxlcz17W3tcclxuICAgICAgICAgICAga2V5OiBwYXRobmFtZSxcclxuICAgICAgICAgICAgc3R5bGU6IGdldFN0eWxlcygpLFxyXG4gICAgICAgICAgICBkYXRhOiB7IGNoaWxkIH1cclxuICAgICAgICB9XX1cclxuICAgICAgICB3aWxsRW50ZXI9e3dpbGxFbnRlcn1cclxuICAgICAgICB3aWxsTGVhdmU9e3dpbGxMZWF2ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgeyhpbnRlcnBvbGF0ZWQpID0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW50ZXJwb2xhdGVkLm1hcCgoeyBrZXksIHN0eWxlLCBkYXRhIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2tleX0tdHJhbnNpdGlvbmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMud3JhcHBlciwgeyBvcGFjaXR5OiBzdHlsZS5vcGFjaXR5LCB0cmFuc2Zvcm06IGBzY2FsZSgke3N0eWxlLnNjYWxlfSlgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEuY2hpbGR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICA8L1RyYW5zaXRpb25Nb3Rpb24gPlxyXG4pO1xyXG5cclxudmFyIHN0eWxlcyA9IHtcclxuICAgIHdyYXBwZXI6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVRyYW5zaXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJ2NvcmUtZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IGRlYm91bmNlLCBDYW5jZWxhYmxlIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmludGVyZmFjZSBTY3JvbGxFZmZlY3RTdGF0ZSB7XHJcbiAgICBhbmltYXRlZDogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNjcm9sbEVmZmVjdFByb3BzIHtcclxuICAgIGFuaW1hdGU/OiBzdHJpbmc7XHJcbiAgICBvZmZzZXQ/OiBudW1iZXI7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBkdXJhdGlvbj86IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIHF1ZXVlRHVyYXRpb24/OiBudW1iZXI7XHJcbiAgICBxdWV1ZUNsYXNzPzogc3RyaW5nO1xyXG4gICAgY2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuLy92YXIgY2FuVXNlRE9NID0gISEoXHJcbi8vICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbi8vICAgIHdpbmRvdy5kb2N1bWVudCAmJlxyXG4vLyAgICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxyXG4vLyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxFZmZlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2Nyb2xsRWZmZWN0UHJvcHMsIFNjcm9sbEVmZmVjdFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBTY3JvbGxFZmZlY3RQcm9wcyA9IHtcclxuICAgICAgICBhbmltYXRlOiBcImZhZGVJblVwXCIsXHJcbiAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICBxdWV1ZUR1cmF0aW9uOiAxLFxyXG4gICAgICAgIHF1ZXVlQ2xhc3M6IFwiXCIsXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzY3JvbGxIYW5kbGVyOiBFdmVudExpc3RlbmVyICYgQ2FuY2VsYWJsZTtcclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwodW5kZWZpbmVkKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBkZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpLCAyMDAsIHsgdHJhaWxpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5jYW5jZWwoKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzaW5nbGVBbmltYXRlKCkge1xyXG4gICAgICAgIC8qIGNhbGxiYWNrICovXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2soKTtcclxuICAgICAgICB9LCAodGhpcy5wcm9wcy5kdXJhdGlvbiB8IDEpICogMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWVBbmltYXRlKCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgbGV0IGNoZWNrQ2xhc3MgPSAoZWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTmFtZSA9PT0gdGhpcy5wcm9wcy5xdWV1ZUNsYXNzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHNldENsYXNzID0gKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSArICcgYW5pbWF0ZWQgJyArIHRoaXMucHJvcHMuYW5pbWF0ZTtcclxuICAgICAgICAgICAgfSwgbnVtYmVyICogKHRoaXMucHJvcHMucXVldWVEdXJhdGlvbiAqIDEwMDApKTtcclxuICAgICAgICAgICAgbnVtYmVyKys7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgZmluZENsYXNzID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbGVtZW50LmNoaWxkTm9kZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZmluZENsYXNzKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0NsYXNzKGNoaWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENsYXNzKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKiBmaW5kIHF1ZXVlIGNsYXNzZXMgKi9cclxuICAgICAgICBmaW5kQ2xhc3MoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8qIGNhbGxiYWNrICovXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2soKTtcclxuICAgICAgICB9LCB0aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCAqIG51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgQGF1dG9iaW5kXHJcbiAgICBoYW5kbGVTY3JvbGwoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hbmltYXRlZCkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uWSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQb3NpdGlvblkgPSB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uWSArIHdpbmRvd0hlaWdodCAqIC45NSA+PSBlbGVtZW50UG9zaXRpb25ZICsgdGhpcy5wcm9wcy5vZmZzZXQgKiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1ZXVlQ2xhc3MgPT0gXCJcIiAmJiB0aGlzLnNpbmdsZUFuaW1hdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVldWVDbGFzcyAhPT0gXCJcIiAmJiB0aGlzLnF1ZXVlQW5pbWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBwcm9wcywgc3RhdGVcclxuICAgICAgICB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgJ2FuaW1hdGVkJzogdHJ1ZSxcclxuICAgICAgICAgICAgW3Byb3BzLmFuaW1hdGVdOiBzdGF0ZS5hbmltYXRlZCAmJiBwcm9wcy5xdWV1ZUNsYXNzID09PSBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2xhc3NlcyArPSAnICcgKyBwcm9wcy5jbGFzc05hbWU7XHJcbiAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSBzdGF0ZS5hbmltYXRlZCA/IHt9IDoge1xyXG4gICAgICAgIC8vICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHByb3BzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3R5bGUuV2Via2l0QW5pbWF0aW9uRHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbiArICdzJztcclxuICAgICAgICAgICAgc3R5bGUuQW5pbWF0aW9uRHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbiArICdzJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuLy9sZXQgdGhyb3R0bGUgPSAoZGVsYXksIGNhbGxiYWNrKSA9PiB7XHJcbi8vICAgIGxldCBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuLy8gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbi8vICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4vLyAgICAgICAgaWYgKCh0aW1lIC0gcHJldmlvdXNDYWxsKSA+PSBkZWxheSkge1xyXG4vLyAgICAgICAgICAgIHByZXZpb3VzQ2FsbCA9IHRpbWU7XHJcbi8vICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgIH07XHJcbi8vfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbGliL3Njcm9sbC1lZmZlY3QudHN4IiwiLy8gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBmcm9tIHRlbXBsYXRlIFwiUmVkdXgudHN0XCIgdXNpbmcgdHlwZXdyaXRlclxyXG4vLyBpdCBnZW5lcmF0ZXMgaW50ZXJmYWNlIGRlY2xhcmF0aW9ucyBmb3IgQWN0aW9ucyBhbmQgU3RhdGUgdGhhdCBhcmUgaW1wbGVtZW50ZWQgc2VydmVyLXNpZGVcclxuXHJcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfQ09VTlRFUiA9ICdJbmNyZW1lbnRDb3VudGVyQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9DT1VOVEVSID0gJ0RlY3JlbWVudENvdW50ZXJBY3Rpb24nO1xyXG5leHBvcnQgY29uc3QgU1RBUlRfQ09VTlRFUiA9ICdTdGFydENvdW50ZXJBY3Rpb24nO1xyXG5leHBvcnQgY29uc3QgQ09VTlRFUl9TVEFSVEVEID0gJ0NvdW50ZXJTdGFydGVkQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFNUT1BfQ09VTlRFUiA9ICdTdG9wQ291bnRlckFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBDT1VOVEVSX1NUT1BQRUQgPSAnQ291bnRlclN0b3BwZWRBY3Rpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5jcmVtZW50Q291bnRlckFjdGlvbiB7IFxyXG5cdHR5cGU6ICdJbmNyZW1lbnRDb3VudGVyQWN0aW9uJzsgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVjcmVtZW50Q291bnRlckFjdGlvbiB7IFxyXG5cdHR5cGU6ICdEZWNyZW1lbnRDb3VudGVyQWN0aW9uJzsgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnRDb3VudGVyQWN0aW9uIHsgXHJcblx0dHlwZTogJ1N0YXJ0Q291bnRlckFjdGlvbic7IFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGFydGVkQWN0aW9uIHsgXHJcblx0dHlwZTogJ0NvdW50ZXJTdGFydGVkQWN0aW9uJzsgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RvcENvdW50ZXJBY3Rpb24geyBcclxuXHR0eXBlOiAnU3RvcENvdW50ZXJBY3Rpb24nOyBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RvcHBlZEFjdGlvbiB7IFxyXG5cdHR5cGU6ICdDb3VudGVyU3RvcHBlZEFjdGlvbic7IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xyXG5cdGNvdW50OiBudW1iZXI7XHJcblx0c3RhcnRlZDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc2VydmVyL0NvdW50ZXIudHMiLCJpbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0ZWRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0NPTk5FQ1RFRCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaXNjb25uZWN0ZWRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0RJU0NPTk5FQ1RFRCdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0aW9uU3RhdGUge1xyXG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBEZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBjb25uZWN0ZWQ6IGZhbHNlXHJcbn1cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBDb25uZWN0ZWRBY3Rpb24gfCBEaXNjb25uZWN0ZWRBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcblxyXG4gICAgc3RhcnRMaXN0ZW5lcjogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciB1cmkgPSAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHA6XCIgPyBcIndzOi8vXCIgOiBcIndzczovL1wiKSArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgXCIvYWN0aW9uc1wiO1xyXG4gICAgICAgIHZhciBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVyaSk7XHJcbiAgICAgICAgc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbmVkIFwiICsgdXJpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ09OTkVDVEVEJyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZWRcIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RJU0NPTk5FQ1RFRCcgfSk7XHJcbiAgICAgICAgICAgIHNvY2tldCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQ6IFwiICsgZS5kYXRhKTtcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgcmVjZWl2ZWQgdW5rbm93biBkYXRhIScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlOiBFcnJvckV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlLmVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLmVycm9yKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Q29ubmVjdGlvblN0YXRlPiA9IChzdGF0ZTogQ29ubmVjdGlvblN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQ09OTkVDVEVEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgY29ubmVjdGVkOiB0cnVlIH07XHJcbiAgICAgICAgY2FzZSAnRElTQ09OTkVDVEVEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgY29ubmVjdGVkOiBmYWxzZSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZSB8fCBEZWZhdWx0U3RhdGU7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1dlYnNvY2tldENvbm5lY3Rpb24udHMiLCJpbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzIGZyb20gJy4vV2VhdGhlckZvcmVjYXN0cyc7XHJcbmltcG9ydCAqIGFzIENvdW50ZXIgZnJvbSAnLi9Db3VudGVyJztcclxuaW1wb3J0ICogYXMgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0ICogYXMgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xyXG5pbXBvcnQgKiBhcyBTZXNzaW9uIGZyb20gJy4vU2Vzc2lvbic7XHJcbmltcG9ydCAqIGFzIENvbm5lY3Rpb24gZnJvbSAnLi9XZWJzb2NrZXRDb25uZWN0aW9uJztcclxuaW1wb3J0ICogYXMgTG9naW4gZnJvbSAnLi9Mb2dpbic7XHJcbmltcG9ydCAqIGFzIFVzZXIgZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0ICogYXMgUmVnaXN0ZXIgZnJvbSAnLi9SZWdpc3Rlcic7XHJcbmltcG9ydCAqIGFzIEF1dGggZnJvbSAnLi9BdXRoJztcclxuXHJcbi8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgICBzZXNzaW9uOiBTZXNzaW9uLlNldHRpbmdzU3RhdGUsXHJcbiAgICBjb25uZWN0aW9uOiBDb25uZWN0aW9uLkNvbm5lY3Rpb25TdGF0ZSxcclxuICAgIGF1dGg6IEF1dGguQXV0aFN0YXRlLFxyXG4gICAgdXNlcjogVXNlci5Vc2VyTW9kZWwsXHJcbiAgICBsb2dpbjogTG9naW4uTG9naW5TdGF0ZSxcclxuICAgIHJlZ2lzdGVyOiBSZWdpc3Rlci5SZWdpc3RlclN0YXRlLFxyXG4gICAgY291bnRlcjogQ291bnRlci5Db3VudGVyU3RhdGUsXHJcbiAgICBmb290ZXI6IEZvb3Rlci5Gb290ZXJTdGF0ZSxcclxuICAgIGNvbnRhY3Q6IENvbnRhY3QuQ29udGFjdFN0YXRlLFxyXG4gICAgd2VhdGhlckZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0cy5XZWF0aGVyRm9yZWNhc3RzU3RhdGVcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBzZXNzaW9uOiBTZXNzaW9uLnJlZHVjZXIsXHJcbiAgICBjb25uZWN0aW9uOiBDb25uZWN0aW9uLnJlZHVjZXIsXHJcbiAgICBhdXRoOiBBdXRoLnJlZHVjZXIsXHJcbiAgICB1c2VyOiBVc2VyLnJlZHVjZXIsXHJcbiAgICBsb2dpbjogTG9naW4ucmVkdWNlcixcclxuICAgIHJlZ2lzdGVyOiBSZWdpc3Rlci5yZWR1Y2VyLFxyXG4gICAgY291bnRlcjogQ291bnRlci5yZWR1Y2VyLFxyXG4gICAgZm9vdGVyOiBGb290ZXIucmVkdWNlcixcclxuICAgIGNvbnRhY3Q6IENvbnRhY3QucmVkdWNlcixcclxuICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHMucmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LDc3dS9QSE4yWnlCM2FXUjBhRDBpT1cxdElpQm9aV2xuYUhROUlqbHRiU0lnZG1sbGQwSnZlRDBpTUNBd0lERXdNQ0F4TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2RtVnljMmx2YmowaU1TNHlJaUJpWVhObFVISnZabWxzWlQwaWRHbHVlU0krRFFvZ0lEeGtaWE5qUGxKU1QwUWdURzluYnp3dlpHVnpZejROQ2lBZ1BDRXRMU0JUYUc5M0lHOTFkR3hwYm1VZ2IyWWdZMkZ1ZG1GeklIVnphVzVuSUNkeVpXTjBKeUJsYkdWdFpXNTBJQzB0UGcwS0lDQThZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnWm1sc2JEMGlkMmhwZEdVaUlITjBjbTlyWlQwaWNtVmtJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXlJaUFnTHo0TkNqd3ZjM1puUGc9PVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvaW1hZ2VzL2xvZ28uc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xhc3NuYW1lc1wiXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZGVib3VuY2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvZGVib3VuY2VcIlxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LW1vdGlvblwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCJcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG4vLyBpbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdwcmVhY3QtcmVuZGVyLXRvLXN0cmluZyc7XHJcbmltcG9ydCB7IG1hdGNoLCBSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IGNyZWF0ZU1lbW9yeUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgR0VUVVNFUl9SRUNFSVZFRCB9IGZyb20gJy4vc3RvcmUvVXNlcic7XHJcbmltcG9ydCB7IExPR0lOX1NVQ0NFU1MgfSBmcm9tICcuL3N0b3JlL0xvZ2luJztcclxuaW1wb3J0IHsgVE9LRU5fUkVDRUlWRUQgfSBmcm9tICcuL3N0b3JlL0F1dGgnO1xyXG5pbXBvcnQgeyBJTklUX1NFU1NJT04gfSBmcm9tICcuL3N0b3JlL1Nlc3Npb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIG1hdGNoKHsgcm91dGVzLCBsb2NhdGlvbjogcGFyYW1zLmxvY2F0aW9uIH0sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcmVkaXJlY3RMb2NhdGlvbi5wYXRobmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0IG1hdGNoIGFueSByb3V0ZSwgcmVuZGVyUHJvcHMgd2lsbCBiZSB1bmRlZmluZWRcclxuICAgICAgICAgICAgaWYgKCFyZW5kZXJQcm9wcykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbG9jYXRpb24gJyR7IHBhcmFtcy51cmwgfScgZG9lc24ndCBtYXRjaCBhbnkgcm91dGUgY29uZmlndXJlZCBpbiByZWFjdC1yb3V0ZXIuYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogSU5JVF9TRVNTSU9OLCBwYXlsb2FkOiB7IHhzcmZUb2tlbjogcGFyYW1zLmRhdGEueHNyZlRva2VuLCBpZDogcGFyYW1zLmRhdGEuc2Vzc2lvbklkIH0gfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLmRhdGEuaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IExPR0lOX1NVQ0NFU1MgfSk7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFRPS0VOX1JFQ0VJVkVELCBwYXlsb2FkOiB7IGFjY2Vzc1Rva2VuOiBwYXJhbXMuZGF0YS5hY2Nlc3NUb2tlbiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBHRVRVU0VSX1JFQ0VJVkVELCBwYXlsb2FkOiBwYXJhbXMuZGF0YS51c2VyTW9kZWwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW4gaW5pdGlhbCByZW5kZXIgdGhhdCB3aWxsIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giXSwic291cmNlUm9vdCI6IiJ9