/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./post_channel.js": "./app/javascript/channels/post_channel.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/consumer.js":
/*!*********************************************!*\
  !*** ./app/javascript/channels/consumer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/actioncable */ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js");
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

/* harmony default export */ __webpack_exports__["default"] = (Object(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__["createConsumer"])());

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/channels/post_channel.js":
/*!*************************************************!*\
  !*** ./app/javascript/channels/post_channel.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumer */ "./app/javascript/channels/consumer.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var elements = {
  postList: '#js-page__home-posts'
};
_consumer__WEBPACK_IMPORTED_MODULE_0__["default"].subscriptions.create("PostChannel", {
  connected: function connected() {
    console.log('connected');
  },
  disconnected: function disconnected() {// Called when the subscription has been terminated by the server
  },
  received: function received(data) {
    console.log('received');

    if (data.status === 'success') {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(elements.postList).prepend(data.post);
    } else {
      console.log(data.message);
    }
  }
});

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js").start();

__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bulma */ "./node_modules/bulma/bulma.sass"); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/***/ }),

/***/ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof2(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  var adapters = {
    logger: self.console,
    WebSocket: self.WebSocket
  };
  var logger = {
    log: function log() {
      if (this.enabled) {
        var _adapters$logger;

        for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }

        messages.push(Date.now());

        (_adapters$logger = adapters.logger).log.apply(_adapters$logger, ["[ActionCable]"].concat(messages));
      }
    }
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var now = function now() {
    return new Date().getTime();
  };

  var secondsSince = function secondsSince(time) {
    return (now() - time) / 1e3;
  };

  var clamp = function clamp(number, min, max) {
    return Math.max(min, Math.min(max, number));
  };

  var ConnectionMonitor = function () {
    function ConnectionMonitor(connection) {
      classCallCheck(this, ConnectionMonitor);
      this.visibilityDidChange = this.visibilityDidChange.bind(this);
      this.connection = connection;
      this.reconnectAttempts = 0;
    }

    ConnectionMonitor.prototype.start = function start() {
      if (!this.isRunning()) {
        this.startedAt = now();
        delete this.stoppedAt;
        this.startPolling();
        addEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms");
      }
    };

    ConnectionMonitor.prototype.stop = function stop() {
      if (this.isRunning()) {
        this.stoppedAt = now();
        this.stopPolling();
        removeEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor stopped");
      }
    };

    ConnectionMonitor.prototype.isRunning = function isRunning() {
      return this.startedAt && !this.stoppedAt;
    };

    ConnectionMonitor.prototype.recordPing = function recordPing() {
      this.pingedAt = now();
    };

    ConnectionMonitor.prototype.recordConnect = function recordConnect() {
      this.reconnectAttempts = 0;
      this.recordPing();
      delete this.disconnectedAt;
      logger.log("ConnectionMonitor recorded connect");
    };

    ConnectionMonitor.prototype.recordDisconnect = function recordDisconnect() {
      this.disconnectedAt = now();
      logger.log("ConnectionMonitor recorded disconnect");
    };

    ConnectionMonitor.prototype.startPolling = function startPolling() {
      this.stopPolling();
      this.poll();
    };

    ConnectionMonitor.prototype.stopPolling = function stopPolling() {
      clearTimeout(this.pollTimeout);
    };

    ConnectionMonitor.prototype.poll = function poll() {
      var _this = this;

      this.pollTimeout = setTimeout(function () {
        _this.reconnectIfStale();

        _this.poll();
      }, this.getPollInterval());
    };

    ConnectionMonitor.prototype.getPollInterval = function getPollInterval() {
      var _constructor$pollInte = this.constructor.pollInterval,
          min = _constructor$pollInte.min,
          max = _constructor$pollInte.max,
          multiplier = _constructor$pollInte.multiplier;
      var interval = multiplier * Math.log(this.reconnectAttempts + 1);
      return Math.round(clamp(interval, min, max) * 1e3);
    };

    ConnectionMonitor.prototype.reconnectIfStale = function reconnectIfStale() {
      if (this.connectionIsStale()) {
        logger.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + secondsSince(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
        this.reconnectAttempts++;

        if (this.disconnectedRecently()) {
          logger.log("ConnectionMonitor skipping reopening recent disconnect");
        } else {
          logger.log("ConnectionMonitor reopening");
          this.connection.reopen();
        }
      }
    };

    ConnectionMonitor.prototype.connectionIsStale = function connectionIsStale() {
      return secondsSince(this.pingedAt ? this.pingedAt : this.startedAt) > this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.disconnectedRecently = function disconnectedRecently() {
      return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.visibilityDidChange = function visibilityDidChange() {
      var _this2 = this;

      if (document.visibilityState === "visible") {
        setTimeout(function () {
          if (_this2.connectionIsStale() || !_this2.connection.isOpen()) {
            logger.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);

            _this2.connection.reopen();
          }
        }, 200);
      }
    };

    return ConnectionMonitor;
  }();

  ConnectionMonitor.pollInterval = {
    min: 3,
    max: 30,
    multiplier: 5
  };
  ConnectionMonitor.staleThreshold = 6;
  var INTERNAL = {
    message_types: {
      welcome: "welcome",
      disconnect: "disconnect",
      ping: "ping",
      confirmation: "confirm_subscription",
      rejection: "reject_subscription"
    },
    disconnect_reasons: {
      unauthorized: "unauthorized",
      invalid_request: "invalid_request",
      server_restart: "server_restart"
    },
    default_mount_path: "/cable",
    protocols: ["actioncable-v1-json", "actioncable-unsupported"]
  };
  var message_types = INTERNAL.message_types,
      protocols = INTERNAL.protocols;
  var supportedProtocols = protocols.slice(0, protocols.length - 1);
  var indexOf = [].indexOf;

  var Connection = function () {
    function Connection(consumer) {
      classCallCheck(this, Connection);
      this.open = this.open.bind(this);
      this.consumer = consumer;
      this.subscriptions = this.consumer.subscriptions;
      this.monitor = new ConnectionMonitor(this);
      this.disconnected = true;
    }

    Connection.prototype.send = function send(data) {
      if (this.isOpen()) {
        this.webSocket.send(JSON.stringify(data));
        return true;
      } else {
        return false;
      }
    };

    Connection.prototype.open = function open() {
      if (this.isActive()) {
        logger.log("Attempted to open WebSocket, but existing socket is " + this.getState());
        return false;
      } else {
        logger.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + protocols);

        if (this.webSocket) {
          this.uninstallEventHandlers();
        }

        this.webSocket = new adapters.WebSocket(this.consumer.url, protocols);
        this.installEventHandlers();
        this.monitor.start();
        return true;
      }
    };

    Connection.prototype.close = function close() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        allowReconnect: true
      },
          allowReconnect = _ref.allowReconnect;

      if (!allowReconnect) {
        this.monitor.stop();
      }

      if (this.isActive()) {
        return this.webSocket.close();
      }
    };

    Connection.prototype.reopen = function reopen() {
      logger.log("Reopening WebSocket, current state is " + this.getState());

      if (this.isActive()) {
        try {
          return this.close();
        } catch (error) {
          logger.log("Failed to reopen WebSocket", error);
        } finally {
          logger.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
          setTimeout(this.open, this.constructor.reopenDelay);
        }
      } else {
        return this.open();
      }
    };

    Connection.prototype.getProtocol = function getProtocol() {
      if (this.webSocket) {
        return this.webSocket.protocol;
      }
    };

    Connection.prototype.isOpen = function isOpen() {
      return this.isState("open");
    };

    Connection.prototype.isActive = function isActive() {
      return this.isState("open", "connecting");
    };

    Connection.prototype.isProtocolSupported = function isProtocolSupported() {
      return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
    };

    Connection.prototype.isState = function isState() {
      for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      return indexOf.call(states, this.getState()) >= 0;
    };

    Connection.prototype.getState = function getState() {
      if (this.webSocket) {
        for (var state in adapters.WebSocket) {
          if (adapters.WebSocket[state] === this.webSocket.readyState) {
            return state.toLowerCase();
          }
        }
      }

      return null;
    };

    Connection.prototype.installEventHandlers = function installEventHandlers() {
      for (var eventName in this.events) {
        var handler = this.events[eventName].bind(this);
        this.webSocket["on" + eventName] = handler;
      }
    };

    Connection.prototype.uninstallEventHandlers = function uninstallEventHandlers() {
      for (var eventName in this.events) {
        this.webSocket["on" + eventName] = function () {};
      }
    };

    return Connection;
  }();

  Connection.reopenDelay = 500;
  Connection.prototype.events = {
    message: function message(event) {
      if (!this.isProtocolSupported()) {
        return;
      }

      var _JSON$parse = JSON.parse(event.data),
          identifier = _JSON$parse.identifier,
          message = _JSON$parse.message,
          reason = _JSON$parse.reason,
          reconnect = _JSON$parse.reconnect,
          type = _JSON$parse.type;

      switch (type) {
        case message_types.welcome:
          this.monitor.recordConnect();
          return this.subscriptions.reload();

        case message_types.disconnect:
          logger.log("Disconnecting. Reason: " + reason);
          return this.close({
            allowReconnect: reconnect
          });

        case message_types.ping:
          return this.monitor.recordPing();

        case message_types.confirmation:
          return this.subscriptions.notify(identifier, "connected");

        case message_types.rejection:
          return this.subscriptions.reject(identifier);

        default:
          return this.subscriptions.notify(identifier, "received", message);
      }
    },
    open: function open() {
      logger.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol");
      this.disconnected = false;

      if (!this.isProtocolSupported()) {
        logger.log("Protocol is unsupported. Stopping monitor and disconnecting.");
        return this.close({
          allowReconnect: false
        });
      }
    },
    close: function close(event) {
      logger.log("WebSocket onclose event");

      if (this.disconnected) {
        return;
      }

      this.disconnected = true;
      this.monitor.recordDisconnect();
      return this.subscriptions.notifyAll("disconnected", {
        willAttemptReconnect: this.monitor.isRunning()
      });
    },
    error: function error() {
      logger.log("WebSocket onerror event");
    }
  };

  var extend = function extend(object, properties) {
    if (properties != null) {
      for (var key in properties) {
        var value = properties[key];
        object[key] = value;
      }
    }

    return object;
  };

  var Subscription = function () {
    function Subscription(consumer) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var mixin = arguments[2];
      classCallCheck(this, Subscription);
      this.consumer = consumer;
      this.identifier = JSON.stringify(params);
      extend(this, mixin);
    }

    Subscription.prototype.perform = function perform(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.action = action;
      return this.send(data);
    };

    Subscription.prototype.send = function send(data) {
      return this.consumer.send({
        command: "message",
        identifier: this.identifier,
        data: JSON.stringify(data)
      });
    };

    Subscription.prototype.unsubscribe = function unsubscribe() {
      return this.consumer.subscriptions.remove(this);
    };

    return Subscription;
  }();

  var Subscriptions = function () {
    function Subscriptions(consumer) {
      classCallCheck(this, Subscriptions);
      this.consumer = consumer;
      this.subscriptions = [];
    }

    Subscriptions.prototype.create = function create(channelName, mixin) {
      var channel = channelName;
      var params = (typeof channel === "undefined" ? "undefined" : _typeof(channel)) === "object" ? channel : {
        channel: channel
      };
      var subscription = new Subscription(this.consumer, params, mixin);
      return this.add(subscription);
    };

    Subscriptions.prototype.add = function add(subscription) {
      this.subscriptions.push(subscription);
      this.consumer.ensureActiveConnection();
      this.notify(subscription, "initialized");
      this.sendCommand(subscription, "subscribe");
      return subscription;
    };

    Subscriptions.prototype.remove = function remove(subscription) {
      this.forget(subscription);

      if (!this.findAll(subscription.identifier).length) {
        this.sendCommand(subscription, "unsubscribe");
      }

      return subscription;
    };

    Subscriptions.prototype.reject = function reject(identifier) {
      var _this = this;

      return this.findAll(identifier).map(function (subscription) {
        _this.forget(subscription);

        _this.notify(subscription, "rejected");

        return subscription;
      });
    };

    Subscriptions.prototype.forget = function forget(subscription) {
      this.subscriptions = this.subscriptions.filter(function (s) {
        return s !== subscription;
      });
      return subscription;
    };

    Subscriptions.prototype.findAll = function findAll(identifier) {
      return this.subscriptions.filter(function (s) {
        return s.identifier === identifier;
      });
    };

    Subscriptions.prototype.reload = function reload() {
      var _this2 = this;

      return this.subscriptions.map(function (subscription) {
        return _this2.sendCommand(subscription, "subscribe");
      });
    };

    Subscriptions.prototype.notifyAll = function notifyAll(callbackName) {
      var _this3 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.subscriptions.map(function (subscription) {
        return _this3.notify.apply(_this3, [subscription, callbackName].concat(args));
      });
    };

    Subscriptions.prototype.notify = function notify(subscription, callbackName) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var subscriptions = void 0;

      if (typeof subscription === "string") {
        subscriptions = this.findAll(subscription);
      } else {
        subscriptions = [subscription];
      }

      return subscriptions.map(function (subscription) {
        return typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : undefined;
      });
    };

    Subscriptions.prototype.sendCommand = function sendCommand(subscription, command) {
      var identifier = subscription.identifier;
      return this.consumer.send({
        command: command,
        identifier: identifier
      });
    };

    return Subscriptions;
  }();

  var Consumer = function () {
    function Consumer(url) {
      classCallCheck(this, Consumer);
      this._url = url;
      this.subscriptions = new Subscriptions(this);
      this.connection = new Connection(this);
    }

    Consumer.prototype.send = function send(data) {
      return this.connection.send(data);
    };

    Consumer.prototype.connect = function connect() {
      return this.connection.open();
    };

    Consumer.prototype.disconnect = function disconnect() {
      return this.connection.close({
        allowReconnect: false
      });
    };

    Consumer.prototype.ensureActiveConnection = function ensureActiveConnection() {
      if (!this.connection.isActive()) {
        return this.connection.open();
      }
    };

    createClass(Consumer, [{
      key: "url",
      get: function get$$1() {
        return createWebSocketURL(this._url);
      }
    }]);
    return Consumer;
  }();

  function createWebSocketURL(url) {
    if (typeof url === "function") {
      url = url();
    }

    if (url && !/^wss?:/i.test(url)) {
      var a = document.createElement("a");
      a.href = url;
      a.href = a.href;
      a.protocol = a.protocol.replace("http", "ws");
      return a.href;
    } else {
      return url;
    }
  }

  function createConsumer() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getConfig("url") || INTERNAL.default_mount_path;
    return new Consumer(url);
  }

  function getConfig(name) {
    var element = document.head.querySelector("meta[name='action-cable-" + name + "']");

    if (element) {
      return element.getAttribute("content");
    }
  }

  exports.Connection = Connection;
  exports.ConnectionMonitor = ConnectionMonitor;
  exports.Consumer = Consumer;
  exports.INTERNAL = INTERNAL;
  exports.Subscription = Subscription;
  exports.Subscriptions = Subscriptions;
  exports.adapters = adapters;
  exports.createWebSocketURL = createWebSocketURL;
  exports.logger = logger;
  exports.createConsumer = createConsumer;
  exports.getConfig = getConfig;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (input.closest('fieldset[disabled]')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/bulma/bulma.sass":
/*!***************************************!*\
  !*** ./node_modules/bulma/bulma.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--7-1!../postcss-loader/src??ref--7-2!../sass-loader/dist/cjs.js??ref--7-3!./bulma.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/bulma/bulma.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/bulma/bulma.sass":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/bulma/bulma.sass ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*! bulma.io v0.7.5 | MIT License | github.com/jgthms/bulma */\n@-webkit-keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n.delete, .modal-close, .is-unselectable, .button, .file, .breadcrumb, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .tabs {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em; }\n.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .list:not(:last-child), .message:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 1.5rem; }\n.delete, .modal-close {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px; }\n.delete::before, .modal-close::before, .delete::after, .modal-close::after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center; }\n.delete::before, .modal-close::before {\n    height: 2px;\n    width: 50%; }\n.delete::after, .modal-close::after {\n    height: 50%;\n    width: 2px; }\n.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {\n    background-color: rgba(10, 10, 10, 0.3); }\n.delete:active, .modal-close:active {\n    background-color: rgba(10, 10, 10, 0.4); }\n.is-small.delete, .is-small.modal-close {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px; }\n.is-medium.delete, .is-medium.modal-close {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px; }\n.is-large.delete, .is-large.modal-close {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px; }\n.button.is-loading::after, .loader, .select.is-loading::after, .control.is-loading::after {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n.is-overlay, .image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio, .modal, .modal-background, .hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n.button, .input, .textarea, .select select, .file-cta,\n.file-name, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top; }\n.button:focus, .input:focus, .textarea:focus, .select select:focus, .file-cta:focus,\n  .file-name:focus, .pagination-previous:focus,\n  .pagination-next:focus,\n  .pagination-link:focus,\n  .pagination-ellipsis:focus, .is-focused.button, .is-focused.input, .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n  .is-focused.file-name, .is-focused.pagination-previous,\n  .is-focused.pagination-next,\n  .is-focused.pagination-link,\n  .is-focused.pagination-ellipsis, .button:active, .input:active, .textarea:active, .select select:active, .file-cta:active,\n  .file-name:active, .pagination-previous:active,\n  .pagination-next:active,\n  .pagination-link:active,\n  .pagination-ellipsis:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active, .is-active.file-cta,\n  .is-active.file-name, .is-active.pagination-previous,\n  .is-active.pagination-next,\n  .is-active.pagination-link,\n  .is-active.pagination-ellipsis {\n    outline: none; }\n.button[disabled], .input[disabled], .textarea[disabled], .select select[disabled], .file-cta[disabled],\n  .file-name[disabled], .pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled],\n  .pagination-ellipsis[disabled],\n  fieldset[disabled] .button,\n  fieldset[disabled] .input,\n  fieldset[disabled] .textarea,\n  fieldset[disabled] .select select,\n  .select fieldset[disabled] select,\n  fieldset[disabled] .file-cta,\n  fieldset[disabled] .file-name,\n  fieldset[disabled] .pagination-previous,\n  fieldset[disabled] .pagination-next,\n  fieldset[disabled] .pagination-link,\n  fieldset[disabled] .pagination-ellipsis {\n    cursor: not-allowed; }\n/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal; }\nul {\n  list-style: none; }\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0; }\nhtml {\n  box-sizing: border-box; }\n*, *::before, *::after {\n  box-sizing: inherit; }\nimg,\nembed,\niframe,\nobject,\nvideo {\n  height: auto;\n  max-width: 100%; }\naudio {\n  max-width: 100%; }\niframe {\n  border: 0; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\ntd:not([align]),\n  th:not([align]) {\n    text-align: left; }\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%; }\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace; }\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5; }\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none; }\na strong {\n    color: currentColor; }\na:hover {\n    color: #363636; }\ncode {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em; }\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0; }\nimg {\n  height: auto;\n  max-width: 100%; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\nsmall {\n  font-size: 0.875em; }\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\nstrong {\n  color: #363636;\n  font-weight: 700; }\nfieldset {\n  border: none; }\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal; }\npre code {\n    background-color: transparent;\n    color: currentColor;\n    font-size: 1em;\n    padding: 0; }\ntable td,\ntable th {\n  vertical-align: top; }\ntable td:not([align]),\n  table th:not([align]) {\n    text-align: left; }\ntable th {\n  color: #363636; }\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table; }\n.is-pulled-left {\n  float: left !important; }\n.is-pulled-right {\n  float: right !important; }\n.is-clipped {\n  overflow: hidden !important; }\n.is-size-1 {\n  font-size: 3rem !important; }\n.is-size-2 {\n  font-size: 2.5rem !important; }\n.is-size-3 {\n  font-size: 2rem !important; }\n.is-size-4 {\n  font-size: 1.5rem !important; }\n.is-size-5 {\n  font-size: 1.25rem !important; }\n.is-size-6 {\n  font-size: 1rem !important; }\n.is-size-7 {\n  font-size: 0.75rem !important; }\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important; }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important; }\n  .is-size-3-mobile {\n    font-size: 2rem !important; }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important; }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important; }\n  .is-size-6-mobile {\n    font-size: 1rem !important; }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important; }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important; }\n  .is-size-3-tablet {\n    font-size: 2rem !important; }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important; }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important; }\n  .is-size-6-tablet {\n    font-size: 1rem !important; }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important; } }\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important; }\n  .is-size-2-touch {\n    font-size: 2.5rem !important; }\n  .is-size-3-touch {\n    font-size: 2rem !important; }\n  .is-size-4-touch {\n    font-size: 1.5rem !important; }\n  .is-size-5-touch {\n    font-size: 1.25rem !important; }\n  .is-size-6-touch {\n    font-size: 1rem !important; }\n  .is-size-7-touch {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important; }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important; }\n  .is-size-3-desktop {\n    font-size: 2rem !important; }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important; }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important; }\n  .is-size-6-desktop {\n    font-size: 1rem !important; }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important; }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important; }\n  .is-size-3-widescreen {\n    font-size: 2rem !important; }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important; }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important; }\n  .is-size-6-widescreen {\n    font-size: 1rem !important; }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important; }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important; }\n  .is-size-3-fullhd {\n    font-size: 2rem !important; }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important; }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important; }\n  .is-size-6-fullhd {\n    font-size: 1rem !important; }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important; } }\n.has-text-centered {\n  text-align: center !important; }\n.has-text-justified {\n  text-align: justify !important; }\n.has-text-left {\n  text-align: left !important; }\n.has-text-right {\n  text-align: right !important; }\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important; } }\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important; } }\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important; } }\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important; } }\n.is-capitalized {\n  text-transform: capitalize !important; }\n.is-lowercase {\n  text-transform: lowercase !important; }\n.is-uppercase {\n  text-transform: uppercase !important; }\n.is-italic {\n  font-style: italic !important; }\n.has-text-white {\n  color: white !important; }\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important; }\n.has-background-white {\n  background-color: white !important; }\n.has-text-black {\n  color: #0a0a0a !important; }\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important; }\n.has-background-black {\n  background-color: #0a0a0a !important; }\n.has-text-light {\n  color: whitesmoke !important; }\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important; }\n.has-background-light {\n  background-color: whitesmoke !important; }\n.has-text-dark {\n  color: #363636 !important; }\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important; }\n.has-background-dark {\n  background-color: #363636 !important; }\n.has-text-primary {\n  color: #00d1b2 !important; }\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important; }\n.has-background-primary {\n  background-color: #00d1b2 !important; }\n.has-text-link {\n  color: #3273dc !important; }\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important; }\n.has-background-link {\n  background-color: #3273dc !important; }\n.has-text-info {\n  color: #209cee !important; }\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0f81cc !important; }\n.has-background-info {\n  background-color: #209cee !important; }\n.has-text-success {\n  color: #23d160 !important; }\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1ca64c !important; }\n.has-background-success {\n  background-color: #23d160 !important; }\n.has-text-warning {\n  color: #ffdd57 !important; }\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important; }\n.has-background-warning {\n  background-color: #ffdd57 !important; }\n.has-text-danger {\n  color: #ff3860 !important; }\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ff0537 !important; }\n.has-background-danger {\n  background-color: #ff3860 !important; }\n.has-text-black-bis {\n  color: #121212 !important; }\n.has-background-black-bis {\n  background-color: #121212 !important; }\n.has-text-black-ter {\n  color: #242424 !important; }\n.has-background-black-ter {\n  background-color: #242424 !important; }\n.has-text-grey-darker {\n  color: #363636 !important; }\n.has-background-grey-darker {\n  background-color: #363636 !important; }\n.has-text-grey-dark {\n  color: #4a4a4a !important; }\n.has-background-grey-dark {\n  background-color: #4a4a4a !important; }\n.has-text-grey {\n  color: #7a7a7a !important; }\n.has-background-grey {\n  background-color: #7a7a7a !important; }\n.has-text-grey-light {\n  color: #b5b5b5 !important; }\n.has-background-grey-light {\n  background-color: #b5b5b5 !important; }\n.has-text-grey-lighter {\n  color: #dbdbdb !important; }\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important; }\n.has-text-white-ter {\n  color: whitesmoke !important; }\n.has-background-white-ter {\n  background-color: whitesmoke !important; }\n.has-text-white-bis {\n  color: #fafafa !important; }\n.has-background-white-bis {\n  background-color: #fafafa !important; }\n.has-text-weight-light {\n  font-weight: 300 !important; }\n.has-text-weight-normal {\n  font-weight: 400 !important; }\n.has-text-weight-medium {\n  font-weight: 500 !important; }\n.has-text-weight-semibold {\n  font-weight: 600 !important; }\n.has-text-weight-bold {\n  font-weight: 700 !important; }\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n.is-family-monospace {\n  font-family: monospace !important; }\n.is-family-code {\n  font-family: monospace !important; }\n.is-block {\n  display: block !important; }\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important; } }\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important; } }\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important; } }\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important; } }\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important; } }\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important; } }\n.is-flex {\n  display: flex !important; }\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important; } }\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important; } }\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important; } }\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important; } }\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important; } }\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important; } }\n.is-inline {\n  display: inline !important; }\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important; } }\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important; } }\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important; } }\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important; } }\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important; } }\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important; } }\n.is-inline-block {\n  display: inline-block !important; }\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important; } }\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important; } }\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important; } }\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important; } }\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important; } }\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important; } }\n.is-inline-flex {\n  display: inline-flex !important; }\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important; } }\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important; } }\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important; } }\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important; } }\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important; } }\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important; } }\n.is-hidden {\n  display: none !important; }\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important; }\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important; } }\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important; } }\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important; } }\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important; } }\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important; } }\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important; } }\n.is-invisible {\n  visibility: hidden !important; }\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important; } }\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important; } }\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important; } }\n.is-marginless {\n  margin: 0 !important; }\n.is-paddingless {\n  padding: 0 !important; }\n.is-radiusless {\n  border-radius: 0 !important; }\n.is-shadowless {\n  box-shadow: none !important; }\n.is-relative {\n  position: relative !important; }\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem; }\na.box:hover, a.box:focus {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc; }\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc; }\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  padding-top: calc(0.375em - 1px);\n  text-align: center;\n  white-space: nowrap; }\n.button strong {\n    color: inherit; }\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n    height: 1.5em;\n    width: 1.5em; }\n.button .icon:first-child:not(:last-child) {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: 0.1875em; }\n.button .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: calc(-0.375em - 1px); }\n.button .icon:first-child:last-child {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: calc(-0.375em - 1px); }\n.button:hover, .button.is-hovered {\n    border-color: #b5b5b5;\n    color: #363636; }\n.button:focus, .button.is-focused {\n    border-color: #3273dc;\n    color: #363636; }\n.button:focus:not(:active), .button.is-focused:not(:active) {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.button:active, .button.is-active {\n    border-color: #4a4a4a;\n    color: #363636; }\n.button.is-text {\n    background-color: transparent;\n    border-color: transparent;\n    color: #4a4a4a;\n    text-decoration: underline; }\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n      background-color: whitesmoke;\n      color: #363636; }\n.button.is-text:active, .button.is-text.is-active {\n      background-color: #e8e8e8;\n      color: #363636; }\n.button.is-text[disabled],\n    fieldset[disabled] .button.is-text {\n      background-color: transparent;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-white {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a; }\n.button.is-white:hover, .button.is-white.is-hovered {\n      background-color: #f9f9f9;\n      border-color: transparent;\n      color: #0a0a0a; }\n.button.is-white:focus, .button.is-white.is-focused {\n      border-color: transparent;\n      color: #0a0a0a; }\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n.button.is-white:active, .button.is-white.is-active {\n      background-color: #f2f2f2;\n      border-color: transparent;\n      color: #0a0a0a; }\n.button.is-white[disabled],\n    fieldset[disabled] .button.is-white {\n      background-color: white;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-white.is-inverted {\n      background-color: #0a0a0a;\n      color: white; }\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n        background-color: black; }\n.button.is-white.is-inverted[disabled],\n      fieldset[disabled] .button.is-white.is-inverted {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        box-shadow: none;\n        color: white; }\n.button.is-white.is-loading::after {\n      border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n.button.is-white.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n        background-color: white;\n        border-color: white;\n        color: #0a0a0a; }\n.button.is-white.is-outlined.is-loading::after {\n        border-color: transparent transparent white white !important; }\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n.button.is-white.is-outlined[disabled],\n      fieldset[disabled] .button.is-white.is-outlined {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white; }\n.button.is-white.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n        background-color: #0a0a0a;\n        color: white; }\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent white white !important; }\n.button.is-white.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-white.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a; }\n.button.is-black {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white; }\n.button.is-black:hover, .button.is-black.is-hovered {\n      background-color: #040404;\n      border-color: transparent;\n      color: white; }\n.button.is-black:focus, .button.is-black.is-focused {\n      border-color: transparent;\n      color: white; }\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n.button.is-black:active, .button.is-black.is-active {\n      background-color: black;\n      border-color: transparent;\n      color: white; }\n.button.is-black[disabled],\n    fieldset[disabled] .button.is-black {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-black.is-inverted {\n      background-color: white;\n      color: #0a0a0a; }\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n.button.is-black.is-inverted[disabled],\n      fieldset[disabled] .button.is-black.is-inverted {\n        background-color: white;\n        border-color: transparent;\n        box-shadow: none;\n        color: #0a0a0a; }\n.button.is-black.is-loading::after {\n      border-color: transparent transparent white white !important; }\n.button.is-black.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n        background-color: #0a0a0a;\n        border-color: #0a0a0a;\n        color: white; }\n.button.is-black.is-outlined.is-loading::after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent white white !important; }\n.button.is-black.is-outlined[disabled],\n      fieldset[disabled] .button.is-black.is-outlined {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a; }\n.button.is-black.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n        background-color: white;\n        color: #0a0a0a; }\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n.button.is-black.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-black.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white; }\n.button.is-light {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636; }\n.button.is-light:hover, .button.is-light.is-hovered {\n      background-color: #eeeeee;\n      border-color: transparent;\n      color: #363636; }\n.button.is-light:focus, .button.is-light.is-focused {\n      border-color: transparent;\n      color: #363636; }\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n.button.is-light:active, .button.is-light.is-active {\n      background-color: #e8e8e8;\n      border-color: transparent;\n      color: #363636; }\n.button.is-light[disabled],\n    fieldset[disabled] .button.is-light {\n      background-color: whitesmoke;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-light.is-inverted {\n      background-color: #363636;\n      color: whitesmoke; }\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n        background-color: #292929; }\n.button.is-light.is-inverted[disabled],\n      fieldset[disabled] .button.is-light.is-inverted {\n        background-color: #363636;\n        border-color: transparent;\n        box-shadow: none;\n        color: whitesmoke; }\n.button.is-light.is-loading::after {\n      border-color: transparent transparent #363636 #363636 !important; }\n.button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke; }\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        color: #363636; }\n.button.is-light.is-outlined.is-loading::after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #363636 #363636 !important; }\n.button.is-light.is-outlined[disabled],\n      fieldset[disabled] .button.is-light.is-outlined {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke; }\n.button.is-light.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636; }\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n        background-color: #363636;\n        color: whitesmoke; }\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n.button.is-light.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-light.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636; }\n.button.is-dark {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke; }\n.button.is-dark:hover, .button.is-dark.is-hovered {\n      background-color: #2f2f2f;\n      border-color: transparent;\n      color: whitesmoke; }\n.button.is-dark:focus, .button.is-dark.is-focused {\n      border-color: transparent;\n      color: whitesmoke; }\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n.button.is-dark:active, .button.is-dark.is-active {\n      background-color: #292929;\n      border-color: transparent;\n      color: whitesmoke; }\n.button.is-dark[disabled],\n    fieldset[disabled] .button.is-dark {\n      background-color: #363636;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-dark.is-inverted {\n      background-color: whitesmoke;\n      color: #363636; }\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n        background-color: #e8e8e8; }\n.button.is-dark.is-inverted[disabled],\n      fieldset[disabled] .button.is-dark.is-inverted {\n        background-color: whitesmoke;\n        border-color: transparent;\n        box-shadow: none;\n        color: #363636; }\n.button.is-dark.is-loading::after {\n      border-color: transparent transparent whitesmoke whitesmoke !important; }\n.button.is-dark.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636; }\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n        background-color: #363636;\n        border-color: #363636;\n        color: whitesmoke; }\n.button.is-dark.is-outlined.is-loading::after {\n        border-color: transparent transparent #363636 #363636 !important; }\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n.button.is-dark.is-outlined[disabled],\n      fieldset[disabled] .button.is-dark.is-outlined {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636; }\n.button.is-dark.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke; }\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n        background-color: whitesmoke;\n        color: #363636; }\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #363636 #363636 !important; }\n.button.is-dark.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke; }\n.button.is-primary {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff; }\n.button.is-primary:hover, .button.is-primary.is-hovered {\n      background-color: #00c4a7;\n      border-color: transparent;\n      color: #fff; }\n.button.is-primary:focus, .button.is-primary.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n.button.is-primary:active, .button.is-primary.is-active {\n      background-color: #00b89c;\n      border-color: transparent;\n      color: #fff; }\n.button.is-primary[disabled],\n    fieldset[disabled] .button.is-primary {\n      background-color: #00d1b2;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-primary.is-inverted {\n      background-color: #fff;\n      color: #00d1b2; }\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n.button.is-primary.is-inverted[disabled],\n      fieldset[disabled] .button.is-primary.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #00d1b2; }\n.button.is-primary.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #00d1b2;\n      color: #00d1b2; }\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n        background-color: #00d1b2;\n        border-color: #00d1b2;\n        color: #fff; }\n.button.is-primary.is-outlined.is-loading::after {\n        border-color: transparent transparent #00d1b2 #00d1b2 !important; }\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n.button.is-primary.is-outlined[disabled],\n      fieldset[disabled] .button.is-primary.is-outlined {\n        background-color: transparent;\n        border-color: #00d1b2;\n        box-shadow: none;\n        color: #00d1b2; }\n.button.is-primary.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #00d1b2; }\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #00d1b2 #00d1b2 !important; }\n.button.is-primary.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n.button.is-link {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff; }\n.button.is-link:hover, .button.is-link.is-hovered {\n      background-color: #276cda;\n      border-color: transparent;\n      color: #fff; }\n.button.is-link:focus, .button.is-link.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.button.is-link:active, .button.is-link.is-active {\n      background-color: #2366d1;\n      border-color: transparent;\n      color: #fff; }\n.button.is-link[disabled],\n    fieldset[disabled] .button.is-link {\n      background-color: #3273dc;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-link.is-inverted {\n      background-color: #fff;\n      color: #3273dc; }\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n.button.is-link.is-inverted[disabled],\n      fieldset[disabled] .button.is-link.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #3273dc; }\n.button.is-link.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-link.is-outlined {\n      background-color: transparent;\n      border-color: #3273dc;\n      color: #3273dc; }\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n        background-color: #3273dc;\n        border-color: #3273dc;\n        color: #fff; }\n.button.is-link.is-outlined.is-loading::after {\n        border-color: transparent transparent #3273dc #3273dc !important; }\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n.button.is-link.is-outlined[disabled],\n      fieldset[disabled] .button.is-link.is-outlined {\n        background-color: transparent;\n        border-color: #3273dc;\n        box-shadow: none;\n        color: #3273dc; }\n.button.is-link.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #3273dc; }\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #3273dc #3273dc !important; }\n.button.is-link.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-link.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n.button.is-info {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff; }\n.button.is-info:hover, .button.is-info.is-hovered {\n      background-color: #1496ed;\n      border-color: transparent;\n      color: #fff; }\n.button.is-info:focus, .button.is-info.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25); }\n.button.is-info:active, .button.is-info.is-active {\n      background-color: #118fe4;\n      border-color: transparent;\n      color: #fff; }\n.button.is-info[disabled],\n    fieldset[disabled] .button.is-info {\n      background-color: #209cee;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-info.is-inverted {\n      background-color: #fff;\n      color: #209cee; }\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n.button.is-info.is-inverted[disabled],\n      fieldset[disabled] .button.is-info.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #209cee; }\n.button.is-info.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-info.is-outlined {\n      background-color: transparent;\n      border-color: #209cee;\n      color: #209cee; }\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n        background-color: #209cee;\n        border-color: #209cee;\n        color: #fff; }\n.button.is-info.is-outlined.is-loading::after {\n        border-color: transparent transparent #209cee #209cee !important; }\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n.button.is-info.is-outlined[disabled],\n      fieldset[disabled] .button.is-info.is-outlined {\n        background-color: transparent;\n        border-color: #209cee;\n        box-shadow: none;\n        color: #209cee; }\n.button.is-info.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #209cee; }\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #209cee #209cee !important; }\n.button.is-info.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-info.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n.button.is-success {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff; }\n.button.is-success:hover, .button.is-success.is-hovered {\n      background-color: #22c65b;\n      border-color: transparent;\n      color: #fff; }\n.button.is-success:focus, .button.is-success.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25); }\n.button.is-success:active, .button.is-success.is-active {\n      background-color: #20bc56;\n      border-color: transparent;\n      color: #fff; }\n.button.is-success[disabled],\n    fieldset[disabled] .button.is-success {\n      background-color: #23d160;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-success.is-inverted {\n      background-color: #fff;\n      color: #23d160; }\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n.button.is-success.is-inverted[disabled],\n      fieldset[disabled] .button.is-success.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #23d160; }\n.button.is-success.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #23d160;\n      color: #23d160; }\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n        background-color: #23d160;\n        border-color: #23d160;\n        color: #fff; }\n.button.is-success.is-outlined.is-loading::after {\n        border-color: transparent transparent #23d160 #23d160 !important; }\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n.button.is-success.is-outlined[disabled],\n      fieldset[disabled] .button.is-success.is-outlined {\n        background-color: transparent;\n        border-color: #23d160;\n        box-shadow: none;\n        color: #23d160; }\n.button.is-success.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #23d160; }\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #23d160 #23d160 !important; }\n.button.is-success.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-success.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n.button.is-warning {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.button.is-warning:hover, .button.is-warning.is-hovered {\n      background-color: #ffdb4a;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning:focus, .button.is-warning.is-focused {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n.button.is-warning:active, .button.is-warning.is-active {\n      background-color: #ffd83d;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning[disabled],\n    fieldset[disabled] .button.is-warning {\n      background-color: #ffdd57;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-warning.is-inverted {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57; }\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n        background-color: rgba(0, 0, 0, 0.7); }\n.button.is-warning.is-inverted[disabled],\n      fieldset[disabled] .button.is-warning.is-inverted {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        box-shadow: none;\n        color: #ffdd57; }\n.button.is-warning.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n.button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #ffdd57;\n      color: #ffdd57; }\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n        background-color: #ffdd57;\n        border-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7); }\n.button.is-warning.is-outlined.is-loading::after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important; }\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n.button.is-warning.is-outlined[disabled],\n      fieldset[disabled] .button.is-warning.is-outlined {\n        background-color: transparent;\n        border-color: #ffdd57;\n        box-shadow: none;\n        color: #ffdd57; }\n.button.is-warning.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57; }\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important; }\n.button.is-warning.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.7); }\n.button.is-danger {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff; }\n.button.is-danger:hover, .button.is-danger.is-hovered {\n      background-color: #ff2b56;\n      border-color: transparent;\n      color: #fff; }\n.button.is-danger:focus, .button.is-danger.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25); }\n.button.is-danger:active, .button.is-danger.is-active {\n      background-color: #ff1f4b;\n      border-color: transparent;\n      color: #fff; }\n.button.is-danger[disabled],\n    fieldset[disabled] .button.is-danger {\n      background-color: #ff3860;\n      border-color: transparent;\n      box-shadow: none; }\n.button.is-danger.is-inverted {\n      background-color: #fff;\n      color: #ff3860; }\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n.button.is-danger.is-inverted[disabled],\n      fieldset[disabled] .button.is-danger.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #ff3860; }\n.button.is-danger.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #ff3860;\n      color: #ff3860; }\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n        background-color: #ff3860;\n        border-color: #ff3860;\n        color: #fff; }\n.button.is-danger.is-outlined.is-loading::after {\n        border-color: transparent transparent #ff3860 #ff3860 !important; }\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n.button.is-danger.is-outlined[disabled],\n      fieldset[disabled] .button.is-danger.is-outlined {\n        background-color: transparent;\n        border-color: #ff3860;\n        box-shadow: none;\n        color: #ff3860; }\n.button.is-danger.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #ff3860; }\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #ff3860 #ff3860 !important; }\n.button.is-danger.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n.button.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n.button.is-normal {\n    font-size: 1rem; }\n.button.is-medium {\n    font-size: 1.25rem; }\n.button.is-large {\n    font-size: 1.5rem; }\n.button[disabled],\n  fieldset[disabled] .button {\n    background-color: white;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5; }\n.button.is-fullwidth {\n    display: flex;\n    width: 100%; }\n.button.is-loading {\n    color: transparent !important;\n    pointer-events: none; }\n.button.is-loading::after {\n      position: absolute;\n      left: calc(50% - (1em / 2));\n      top: calc(50% - (1em / 2));\n      position: absolute !important; }\n.button.is-static {\n    background-color: whitesmoke;\n    border-color: #dbdbdb;\n    color: #7a7a7a;\n    box-shadow: none;\n    pointer-events: none; }\n.button.is-rounded {\n    border-radius: 290486px;\n    padding-left: 1em;\n    padding-right: 1em; }\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n.buttons .button {\n    margin-bottom: 0.5rem; }\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n      margin-right: 0.5rem; }\n.buttons:last-child {\n    margin-bottom: -0.5rem; }\n.buttons:not(:last-child) {\n    margin-bottom: 1rem; }\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n    font-size: 1.25rem; }\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n    font-size: 1.5rem; }\n.buttons.has-addons .button:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n.buttons.has-addons .button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    margin-right: -1px; }\n.buttons.has-addons .button:last-child {\n    margin-right: 0; }\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n    z-index: 2; }\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n    z-index: 3; }\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n      z-index: 4; }\n.buttons.has-addons .button.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1; }\n.buttons.is-centered {\n    justify-content: center; }\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n.buttons.is-right {\n    justify-content: flex-end; }\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto; }\n@media screen and (min-width: 1024px) {\n    .container {\n      max-width: 960px; }\n      .container.is-fluid {\n        margin-left: 32px;\n        margin-right: 32px;\n        max-width: none; } }\n@media screen and (max-width: 1215px) {\n    .container.is-widescreen {\n      max-width: 1152px; } }\n@media screen and (max-width: 1407px) {\n    .container.is-fullhd {\n      max-width: 1344px; } }\n@media screen and (min-width: 1216px) {\n    .container {\n      max-width: 1152px; } }\n@media screen and (min-width: 1408px) {\n    .container {\n      max-width: 1344px; } }\n.content li + li {\n  margin-top: 0.25em; }\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em; }\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125; }\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em; }\n.content h1:not(:first-child) {\n    margin-top: 1em; }\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em; }\n.content h2:not(:first-child) {\n    margin-top: 1.1428em; }\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em; }\n.content h3:not(:first-child) {\n    margin-top: 1.3333em; }\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em; }\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em; }\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em; }\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em; }\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n.content ol:not([type]) {\n    list-style-type: decimal; }\n.content ol:not([type]).is-lower-alpha {\n      list-style-type: lower-alpha; }\n.content ol:not([type]).is-lower-roman {\n      list-style-type: lower-roman; }\n.content ol:not([type]).is-upper-alpha {\n      list-style-type: upper-alpha; }\n.content ol:not([type]).is-upper-roman {\n      list-style-type: upper-roman; }\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n.content ul ul {\n    list-style-type: circle;\n    margin-top: 0.5em; }\n.content ul ul ul {\n      list-style-type: square; }\n.content dd {\n  margin-left: 2em; }\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center; }\n.content figure:not(:first-child) {\n    margin-top: 2em; }\n.content figure:not(:last-child) {\n    margin-bottom: 2em; }\n.content figure img {\n    display: inline-block; }\n.content figure figcaption {\n    font-style: italic; }\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal; }\n.content sup,\n.content sub {\n  font-size: 75%; }\n.content table {\n  width: 100%; }\n.content table td,\n  .content table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n.content table th {\n    color: #363636; }\n.content table th:not([align]) {\n      text-align: left; }\n.content table thead td,\n  .content table thead th {\n    border-width: 0 0 2px;\n    color: #363636; }\n.content table tfoot td,\n  .content table tfoot th {\n    border-width: 2px 0 0;\n    color: #363636; }\n.content table tbody tr:last-child td,\n  .content table tbody tr:last-child th {\n    border-bottom-width: 0; }\n.content .tabs li + li {\n  margin-top: 0; }\n.content.is-small {\n  font-size: 0.75rem; }\n.content.is-medium {\n  font-size: 1.25rem; }\n.content.is-large {\n  font-size: 1.5rem; }\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem; }\n.icon.is-small {\n    height: 1rem;\n    width: 1rem; }\n.icon.is-medium {\n    height: 2rem;\n    width: 2rem; }\n.icon.is-large {\n    height: 3rem;\n    width: 3rem; }\n.image {\n  display: block;\n  position: relative; }\n.image img {\n    display: block;\n    height: auto;\n    width: 100%; }\n.image img.is-rounded {\n      border-radius: 290486px; }\n.image.is-square img,\n  .image.is-square .has-ratio, .image.is-1by1 img,\n  .image.is-1by1 .has-ratio, .image.is-5by4 img,\n  .image.is-5by4 .has-ratio, .image.is-4by3 img,\n  .image.is-4by3 .has-ratio, .image.is-3by2 img,\n  .image.is-3by2 .has-ratio, .image.is-5by3 img,\n  .image.is-5by3 .has-ratio, .image.is-16by9 img,\n  .image.is-16by9 .has-ratio, .image.is-2by1 img,\n  .image.is-2by1 .has-ratio, .image.is-3by1 img,\n  .image.is-3by1 .has-ratio, .image.is-4by5 img,\n  .image.is-4by5 .has-ratio, .image.is-3by4 img,\n  .image.is-3by4 .has-ratio, .image.is-2by3 img,\n  .image.is-2by3 .has-ratio, .image.is-3by5 img,\n  .image.is-3by5 .has-ratio, .image.is-9by16 img,\n  .image.is-9by16 .has-ratio, .image.is-1by2 img,\n  .image.is-1by2 .has-ratio, .image.is-1by3 img,\n  .image.is-1by3 .has-ratio {\n    height: 100%;\n    width: 100%; }\n.image.is-square, .image.is-1by1 {\n    padding-top: 100%; }\n.image.is-5by4 {\n    padding-top: 80%; }\n.image.is-4by3 {\n    padding-top: 75%; }\n.image.is-3by2 {\n    padding-top: 66.6666%; }\n.image.is-5by3 {\n    padding-top: 60%; }\n.image.is-16by9 {\n    padding-top: 56.25%; }\n.image.is-2by1 {\n    padding-top: 50%; }\n.image.is-3by1 {\n    padding-top: 33.3333%; }\n.image.is-4by5 {\n    padding-top: 125%; }\n.image.is-3by4 {\n    padding-top: 133.3333%; }\n.image.is-2by3 {\n    padding-top: 150%; }\n.image.is-3by5 {\n    padding-top: 166.6666%; }\n.image.is-9by16 {\n    padding-top: 177.7777%; }\n.image.is-1by2 {\n    padding-top: 200%; }\n.image.is-1by3 {\n    padding-top: 300%; }\n.image.is-16x16 {\n    height: 16px;\n    width: 16px; }\n.image.is-24x24 {\n    height: 24px;\n    width: 24px; }\n.image.is-32x32 {\n    height: 32px;\n    width: 32px; }\n.image.is-48x48 {\n    height: 48px;\n    width: 48px; }\n.image.is-64x64 {\n    height: 64px;\n    width: 64px; }\n.image.is-96x96 {\n    height: 96px;\n    width: 96px; }\n.image.is-128x128 {\n    height: 128px;\n    width: 128px; }\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative; }\n.notification a:not(.button):not(.dropdown-item) {\n    color: currentColor;\n    text-decoration: underline; }\n.notification strong {\n    color: currentColor; }\n.notification code,\n  .notification pre {\n    background: white; }\n.notification pre code {\n    background: transparent; }\n.notification > .delete {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem; }\n.notification .title,\n  .notification .subtitle,\n  .notification .content {\n    color: currentColor; }\n.notification.is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.notification.is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.notification.is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.notification.is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.notification.is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.notification.is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.notification.is-info {\n    background-color: #209cee;\n    color: #fff; }\n.notification.is-success {\n    background-color: #23d160;\n    color: #fff; }\n.notification.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.notification.is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n.progress::-webkit-progress-bar {\n    background-color: #dbdbdb; }\n.progress::-webkit-progress-value {\n    background-color: #4a4a4a; }\n.progress::-moz-progress-bar {\n    background-color: #4a4a4a; }\n.progress::-ms-fill {\n    background-color: #4a4a4a;\n    border: none; }\n.progress.is-white::-webkit-progress-value {\n    background-color: white; }\n.progress.is-white::-moz-progress-bar {\n    background-color: white; }\n.progress.is-white::-ms-fill {\n    background-color: white; }\n.progress.is-white:indeterminate {\n    background-image: linear-gradient(to right, white 30%, #dbdbdb 30%); }\n.progress.is-black::-webkit-progress-value {\n    background-color: #0a0a0a; }\n.progress.is-black::-moz-progress-bar {\n    background-color: #0a0a0a; }\n.progress.is-black::-ms-fill {\n    background-color: #0a0a0a; }\n.progress.is-black:indeterminate {\n    background-image: linear-gradient(to right, #0a0a0a 30%, #dbdbdb 30%); }\n.progress.is-light::-webkit-progress-value {\n    background-color: whitesmoke; }\n.progress.is-light::-moz-progress-bar {\n    background-color: whitesmoke; }\n.progress.is-light::-ms-fill {\n    background-color: whitesmoke; }\n.progress.is-light:indeterminate {\n    background-image: linear-gradient(to right, whitesmoke 30%, #dbdbdb 30%); }\n.progress.is-dark::-webkit-progress-value {\n    background-color: #363636; }\n.progress.is-dark::-moz-progress-bar {\n    background-color: #363636; }\n.progress.is-dark::-ms-fill {\n    background-color: #363636; }\n.progress.is-dark:indeterminate {\n    background-image: linear-gradient(to right, #363636 30%, #dbdbdb 30%); }\n.progress.is-primary::-webkit-progress-value {\n    background-color: #00d1b2; }\n.progress.is-primary::-moz-progress-bar {\n    background-color: #00d1b2; }\n.progress.is-primary::-ms-fill {\n    background-color: #00d1b2; }\n.progress.is-primary:indeterminate {\n    background-image: linear-gradient(to right, #00d1b2 30%, #dbdbdb 30%); }\n.progress.is-link::-webkit-progress-value {\n    background-color: #3273dc; }\n.progress.is-link::-moz-progress-bar {\n    background-color: #3273dc; }\n.progress.is-link::-ms-fill {\n    background-color: #3273dc; }\n.progress.is-link:indeterminate {\n    background-image: linear-gradient(to right, #3273dc 30%, #dbdbdb 30%); }\n.progress.is-info::-webkit-progress-value {\n    background-color: #209cee; }\n.progress.is-info::-moz-progress-bar {\n    background-color: #209cee; }\n.progress.is-info::-ms-fill {\n    background-color: #209cee; }\n.progress.is-info:indeterminate {\n    background-image: linear-gradient(to right, #209cee 30%, #dbdbdb 30%); }\n.progress.is-success::-webkit-progress-value {\n    background-color: #23d160; }\n.progress.is-success::-moz-progress-bar {\n    background-color: #23d160; }\n.progress.is-success::-ms-fill {\n    background-color: #23d160; }\n.progress.is-success:indeterminate {\n    background-image: linear-gradient(to right, #23d160 30%, #dbdbdb 30%); }\n.progress.is-warning::-webkit-progress-value {\n    background-color: #ffdd57; }\n.progress.is-warning::-moz-progress-bar {\n    background-color: #ffdd57; }\n.progress.is-warning::-ms-fill {\n    background-color: #ffdd57; }\n.progress.is-warning:indeterminate {\n    background-image: linear-gradient(to right, #ffdd57 30%, #dbdbdb 30%); }\n.progress.is-danger::-webkit-progress-value {\n    background-color: #ff3860; }\n.progress.is-danger::-moz-progress-bar {\n    background-color: #ff3860; }\n.progress.is-danger::-ms-fill {\n    background-color: #ff3860; }\n.progress.is-danger:indeterminate {\n    background-image: linear-gradient(to right, #ff3860 30%, #dbdbdb 30%); }\n.progress:indeterminate {\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-name: moveIndeterminate;\n            animation-name: moveIndeterminate;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    background-color: #dbdbdb;\n    background-image: linear-gradient(to right, #4a4a4a 30%, #dbdbdb 30%);\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 150% 150%; }\n.progress:indeterminate::-webkit-progress-bar {\n      background-color: transparent; }\n.progress:indeterminate::-moz-progress-bar {\n      background-color: transparent; }\n.progress.is-small {\n    height: 0.75rem; }\n.progress.is-medium {\n    height: 1.25rem; }\n.progress.is-large {\n    height: 1.5rem; }\n@-webkit-keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0; }\n  to {\n    background-position: -200% 0; } }\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0; }\n  to {\n    background-position: -200% 0; } }\n.table {\n  background-color: white;\n  color: #363636; }\n.table td,\n  .table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n.table td.is-white,\n    .table th.is-white {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a; }\n.table td.is-black,\n    .table th.is-black {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white; }\n.table td.is-light,\n    .table th.is-light {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636; }\n.table td.is-dark,\n    .table th.is-dark {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke; }\n.table td.is-primary,\n    .table th.is-primary {\n      background-color: #00d1b2;\n      border-color: #00d1b2;\n      color: #fff; }\n.table td.is-link,\n    .table th.is-link {\n      background-color: #3273dc;\n      border-color: #3273dc;\n      color: #fff; }\n.table td.is-info,\n    .table th.is-info {\n      background-color: #209cee;\n      border-color: #209cee;\n      color: #fff; }\n.table td.is-success,\n    .table th.is-success {\n      background-color: #23d160;\n      border-color: #23d160;\n      color: #fff; }\n.table td.is-warning,\n    .table th.is-warning {\n      background-color: #ffdd57;\n      border-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7); }\n.table td.is-danger,\n    .table th.is-danger {\n      background-color: #ff3860;\n      border-color: #ff3860;\n      color: #fff; }\n.table td.is-narrow,\n    .table th.is-narrow {\n      white-space: nowrap;\n      width: 1%; }\n.table td.is-selected,\n    .table th.is-selected {\n      background-color: #00d1b2;\n      color: #fff; }\n.table td.is-selected a,\n      .table td.is-selected strong,\n      .table th.is-selected a,\n      .table th.is-selected strong {\n        color: currentColor; }\n.table th {\n    color: #363636; }\n.table th:not([align]) {\n      text-align: left; }\n.table tr.is-selected {\n    background-color: #00d1b2;\n    color: #fff; }\n.table tr.is-selected a,\n    .table tr.is-selected strong {\n      color: currentColor; }\n.table tr.is-selected td,\n    .table tr.is-selected th {\n      border-color: #fff;\n      color: currentColor; }\n.table thead {\n    background-color: transparent; }\n.table thead td,\n    .table thead th {\n      border-width: 0 0 2px;\n      color: #363636; }\n.table tfoot {\n    background-color: transparent; }\n.table tfoot td,\n    .table tfoot th {\n      border-width: 2px 0 0;\n      color: #363636; }\n.table tbody {\n    background-color: transparent; }\n.table tbody tr:last-child td,\n    .table tbody tr:last-child th {\n      border-bottom-width: 0; }\n.table.is-bordered td,\n  .table.is-bordered th {\n    border-width: 1px; }\n.table.is-bordered tr:last-child td,\n  .table.is-bordered tr:last-child th {\n    border-bottom-width: 1px; }\n.table.is-fullwidth {\n    width: 100%; }\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n    background-color: #fafafa; }\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n    background-color: #fafafa; }\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n      background-color: whitesmoke; }\n.table.is-narrow td,\n  .table.is-narrow th {\n    padding: 0.25em 0.5em; }\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n    background-color: #fafafa; }\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%; }\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n.tags .tag {\n    margin-bottom: 0.5rem; }\n.tags .tag:not(:last-child) {\n      margin-right: 0.5rem; }\n.tags:last-child {\n    margin-bottom: -0.5rem; }\n.tags:not(:last-child) {\n    margin-bottom: 1rem; }\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n    font-size: 1rem; }\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n    font-size: 1.25rem; }\n.tags.is-centered {\n    justify-content: center; }\n.tags.is-centered .tag {\n      margin-right: 0.25rem;\n      margin-left: 0.25rem; }\n.tags.is-right {\n    justify-content: flex-end; }\n.tags.is-right .tag:not(:first-child) {\n      margin-left: 0.5rem; }\n.tags.is-right .tag:not(:last-child) {\n      margin-right: 0; }\n.tags.has-addons .tag {\n    margin-right: 0; }\n.tags.has-addons .tag:not(:first-child) {\n      margin-left: 0;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n.tags.has-addons .tag:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n.tag:not(body) .delete {\n    margin-left: 0.25rem;\n    margin-right: -0.375rem; }\n.tag:not(body).is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.tag:not(body).is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.tag:not(body).is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.tag:not(body).is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.tag:not(body).is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.tag:not(body).is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.tag:not(body).is-info {\n    background-color: #209cee;\n    color: #fff; }\n.tag:not(body).is-success {\n    background-color: #23d160;\n    color: #fff; }\n.tag:not(body).is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.tag:not(body).is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.tag:not(body).is-normal {\n    font-size: 0.75rem; }\n.tag:not(body).is-medium {\n    font-size: 1rem; }\n.tag:not(body).is-large {\n    font-size: 1.25rem; }\n.tag:not(body) .icon:first-child:not(:last-child) {\n    margin-left: -0.375em;\n    margin-right: 0.1875em; }\n.tag:not(body) .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: -0.375em; }\n.tag:not(body) .icon:first-child:last-child {\n    margin-left: -0.375em;\n    margin-right: -0.375em; }\n.tag:not(body).is-delete {\n    margin-left: 1px;\n    padding: 0;\n    position: relative;\n    width: 2em; }\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n      background-color: currentColor;\n      content: \"\";\n      display: block;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      transform-origin: center center; }\n.tag:not(body).is-delete::before {\n      height: 1px;\n      width: 50%; }\n.tag:not(body).is-delete::after {\n      height: 50%;\n      width: 1px; }\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n      background-color: #e8e8e8; }\n.tag:not(body).is-delete:active {\n      background-color: #dbdbdb; }\n.tag:not(body).is-rounded {\n    border-radius: 290486px; }\na.tag:hover {\n  text-decoration: underline; }\n.title,\n.subtitle {\n  word-break: break-word; }\n.title em,\n  .title span,\n  .subtitle em,\n  .subtitle span {\n    font-weight: inherit; }\n.title sub,\n  .subtitle sub {\n    font-size: 0.75em; }\n.title sup,\n  .subtitle sup {\n    font-size: 0.75em; }\n.title .tag,\n  .subtitle .tag {\n    vertical-align: middle; }\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125; }\n.title strong {\n    color: inherit;\n    font-weight: inherit; }\n.title + .highlight {\n    margin-top: -0.75rem; }\n.title:not(.is-spaced) + .subtitle {\n    margin-top: -1.25rem; }\n.title.is-1 {\n    font-size: 3rem; }\n.title.is-2 {\n    font-size: 2.5rem; }\n.title.is-3 {\n    font-size: 2rem; }\n.title.is-4 {\n    font-size: 1.5rem; }\n.title.is-5 {\n    font-size: 1.25rem; }\n.title.is-6 {\n    font-size: 1rem; }\n.title.is-7 {\n    font-size: 0.75rem; }\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25; }\n.subtitle strong {\n    color: #363636;\n    font-weight: 600; }\n.subtitle:not(.is-spaced) + .title {\n    margin-top: -1.25rem; }\n.subtitle.is-1 {\n    font-size: 3rem; }\n.subtitle.is-2 {\n    font-size: 2.5rem; }\n.subtitle.is-3 {\n    font-size: 2rem; }\n.subtitle.is-4 {\n    font-size: 1.5rem; }\n.subtitle.is-5 {\n    font-size: 1.25rem; }\n.subtitle.is-6 {\n    font-size: 1rem; }\n.subtitle.is-7 {\n    font-size: 0.75rem; }\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0; }\n.highlight pre {\n    overflow: auto;\n    max-width: 100%; }\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n.input, .textarea, .select select {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636; }\n.input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input:hover, .textarea:hover, .select select:hover, .is-hovered.input, .is-hovered.textarea, .select select.is-hovered {\n    border-color: #b5b5b5; }\n.input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {\n    border-color: #3273dc;\n    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.input[disabled], .textarea[disabled], .select select[disabled],\n  fieldset[disabled] .input,\n  fieldset[disabled] .textarea,\n  fieldset[disabled] .select select,\n  .select fieldset[disabled] select {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #7a7a7a; }\n.input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder,\n    fieldset[disabled] .input::-moz-placeholder,\n    fieldset[disabled] .textarea::-moz-placeholder,\n    fieldset[disabled] .select select::-moz-placeholder,\n    .select fieldset[disabled] select::-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder,\n    fieldset[disabled] .input::-webkit-input-placeholder,\n    fieldset[disabled] .textarea::-webkit-input-placeholder,\n    fieldset[disabled] .select select::-webkit-input-placeholder,\n    .select fieldset[disabled] select::-webkit-input-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder,\n    fieldset[disabled] .input:-moz-placeholder,\n    fieldset[disabled] .textarea:-moz-placeholder,\n    fieldset[disabled] .select select:-moz-placeholder,\n    .select fieldset[disabled] select:-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder,\n    fieldset[disabled] .input:-ms-input-placeholder,\n    fieldset[disabled] .textarea:-ms-input-placeholder,\n    fieldset[disabled] .select select:-ms-input-placeholder,\n    .select fieldset[disabled] select:-ms-input-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input, .textarea {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%; }\n.input[readonly], .textarea[readonly] {\n    box-shadow: none; }\n.is-white.input, .is-white.textarea {\n    border-color: white; }\n.is-white.input:focus, .is-white.textarea:focus, .is-white.is-focused.input, .is-white.is-focused.textarea, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n.is-black.input, .is-black.textarea {\n    border-color: #0a0a0a; }\n.is-black.input:focus, .is-black.textarea:focus, .is-black.is-focused.input, .is-black.is-focused.textarea, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n.is-light.input, .is-light.textarea {\n    border-color: whitesmoke; }\n.is-light.input:focus, .is-light.textarea:focus, .is-light.is-focused.input, .is-light.is-focused.textarea, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n.is-dark.input, .is-dark.textarea {\n    border-color: #363636; }\n.is-dark.input:focus, .is-dark.textarea:focus, .is-dark.is-focused.input, .is-dark.is-focused.textarea, .is-dark.input:active, .is-dark.textarea:active, .is-dark.is-active.input, .is-dark.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n.is-primary.input, .is-primary.textarea {\n    border-color: #00d1b2; }\n.is-primary.input:focus, .is-primary.textarea:focus, .is-primary.is-focused.input, .is-primary.is-focused.textarea, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n.is-link.input, .is-link.textarea {\n    border-color: #3273dc; }\n.is-link.input:focus, .is-link.textarea:focus, .is-link.is-focused.input, .is-link.is-focused.textarea, .is-link.input:active, .is-link.textarea:active, .is-link.is-active.input, .is-link.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.is-info.input, .is-info.textarea {\n    border-color: #209cee; }\n.is-info.input:focus, .is-info.textarea:focus, .is-info.is-focused.input, .is-info.is-focused.textarea, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25); }\n.is-success.input, .is-success.textarea {\n    border-color: #23d160; }\n.is-success.input:focus, .is-success.textarea:focus, .is-success.is-focused.input, .is-success.is-focused.textarea, .is-success.input:active, .is-success.textarea:active, .is-success.is-active.input, .is-success.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25); }\n.is-warning.input, .is-warning.textarea {\n    border-color: #ffdd57; }\n.is-warning.input:focus, .is-warning.textarea:focus, .is-warning.is-focused.input, .is-warning.is-focused.textarea, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n.is-danger.input, .is-danger.textarea {\n    border-color: #ff3860; }\n.is-danger.input:focus, .is-danger.textarea:focus, .is-danger.is-focused.input, .is-danger.is-focused.textarea, .is-danger.input:active, .is-danger.textarea:active, .is-danger.is-active.input, .is-danger.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25); }\n.is-small.input, .is-small.textarea {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n.is-medium.input, .is-medium.textarea {\n    font-size: 1.25rem; }\n.is-large.input, .is-large.textarea {\n    font-size: 1.5rem; }\n.is-fullwidth.input, .is-fullwidth.textarea {\n    display: block;\n    width: 100%; }\n.is-inline.input, .is-inline.textarea {\n    display: inline;\n    width: auto; }\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em; }\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0; }\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical; }\n.textarea:not([rows]) {\n    max-height: 600px;\n    min-height: 120px; }\n.textarea[rows] {\n    height: auto;\n    height: initial; }\n.textarea.has-fixed-size {\n    resize: none; }\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative; }\n.checkbox input, .radio input {\n    cursor: pointer; }\n.checkbox:hover, .radio:hover {\n    color: #363636; }\n.checkbox[disabled], .radio[disabled],\n  fieldset[disabled] .checkbox,\n  fieldset[disabled] .radio {\n    color: #7a7a7a;\n    cursor: not-allowed; }\n.radio + .radio {\n  margin-left: 0.5em; }\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top; }\n.select:not(.is-multiple) {\n    height: 2.25em; }\n.select:not(.is-multiple):not(.is-loading)::after {\n    border-color: #3273dc;\n    right: 1.125em;\n    z-index: 4; }\n.select.is-rounded select {\n    border-radius: 290486px;\n    padding-left: 1em; }\n.select select {\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none; }\n.select select::-ms-expand {\n      display: none; }\n.select select[disabled]:hover,\n    fieldset[disabled] .select select:hover {\n      border-color: whitesmoke; }\n.select select:not([multiple]) {\n      padding-right: 2.5em; }\n.select select[multiple] {\n      height: auto;\n      padding: 0; }\n.select select[multiple] option {\n        padding: 0.5em 1em; }\n.select:not(.is-multiple):not(.is-loading):hover::after {\n    border-color: #363636; }\n.select.is-white:not(:hover)::after {\n    border-color: white; }\n.select.is-white select {\n    border-color: white; }\n.select.is-white select:hover, .select.is-white select.is-hovered {\n      border-color: #f2f2f2; }\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n.select.is-black:not(:hover)::after {\n    border-color: #0a0a0a; }\n.select.is-black select {\n    border-color: #0a0a0a; }\n.select.is-black select:hover, .select.is-black select.is-hovered {\n      border-color: black; }\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n.select.is-light:not(:hover)::after {\n    border-color: whitesmoke; }\n.select.is-light select {\n    border-color: whitesmoke; }\n.select.is-light select:hover, .select.is-light select.is-hovered {\n      border-color: #e8e8e8; }\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n.select.is-dark:not(:hover)::after {\n    border-color: #363636; }\n.select.is-dark select {\n    border-color: #363636; }\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n      border-color: #292929; }\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n.select.is-primary:not(:hover)::after {\n    border-color: #00d1b2; }\n.select.is-primary select {\n    border-color: #00d1b2; }\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n      border-color: #00b89c; }\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n.select.is-link:not(:hover)::after {\n    border-color: #3273dc; }\n.select.is-link select {\n    border-color: #3273dc; }\n.select.is-link select:hover, .select.is-link select.is-hovered {\n      border-color: #2366d1; }\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.select.is-info:not(:hover)::after {\n    border-color: #209cee; }\n.select.is-info select {\n    border-color: #209cee; }\n.select.is-info select:hover, .select.is-info select.is-hovered {\n      border-color: #118fe4; }\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25); }\n.select.is-success:not(:hover)::after {\n    border-color: #23d160; }\n.select.is-success select {\n    border-color: #23d160; }\n.select.is-success select:hover, .select.is-success select.is-hovered {\n      border-color: #20bc56; }\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25); }\n.select.is-warning:not(:hover)::after {\n    border-color: #ffdd57; }\n.select.is-warning select {\n    border-color: #ffdd57; }\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n      border-color: #ffd83d; }\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n.select.is-danger:not(:hover)::after {\n    border-color: #ff3860; }\n.select.is-danger select {\n    border-color: #ff3860; }\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n      border-color: #ff1f4b; }\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25); }\n.select.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n.select.is-medium {\n    font-size: 1.25rem; }\n.select.is-large {\n    font-size: 1.5rem; }\n.select.is-disabled::after {\n    border-color: #7a7a7a; }\n.select.is-fullwidth {\n    width: 100%; }\n.select.is-fullwidth select {\n      width: 100%; }\n.select.is-loading::after {\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none; }\n.select.is-loading.is-small:after {\n    font-size: 0.75rem; }\n.select.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n.select.is-loading.is-large:after {\n    font-size: 1.5rem; }\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative; }\n.file.is-white .file-cta {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a; }\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n    background-color: #f9f9f9;\n    border-color: transparent;\n    color: #0a0a0a; }\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n    color: #0a0a0a; }\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n    background-color: #f2f2f2;\n    border-color: transparent;\n    color: #0a0a0a; }\n.file.is-black .file-cta {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white; }\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n    background-color: #040404;\n    border-color: transparent;\n    color: white; }\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n    color: white; }\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n    background-color: black;\n    border-color: transparent;\n    color: white; }\n.file.is-light .file-cta {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636; }\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n    background-color: #eeeeee;\n    border-color: transparent;\n    color: #363636; }\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n    color: #363636; }\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n    background-color: #e8e8e8;\n    border-color: transparent;\n    color: #363636; }\n.file.is-dark .file-cta {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke; }\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n    background-color: #2f2f2f;\n    border-color: transparent;\n    color: whitesmoke; }\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n    color: whitesmoke; }\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n    background-color: #292929;\n    border-color: transparent;\n    color: whitesmoke; }\n.file.is-primary .file-cta {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff; }\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n    background-color: #00c4a7;\n    border-color: transparent;\n    color: #fff; }\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n    color: #fff; }\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n    background-color: #00b89c;\n    border-color: transparent;\n    color: #fff; }\n.file.is-link .file-cta {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff; }\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n    background-color: #276cda;\n    border-color: transparent;\n    color: #fff; }\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n    color: #fff; }\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n    background-color: #2366d1;\n    border-color: transparent;\n    color: #fff; }\n.file.is-info .file-cta {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff; }\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n    background-color: #1496ed;\n    border-color: transparent;\n    color: #fff; }\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n    color: #fff; }\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n    background-color: #118fe4;\n    border-color: transparent;\n    color: #fff; }\n.file.is-success .file-cta {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff; }\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n    background-color: #22c65b;\n    border-color: transparent;\n    color: #fff; }\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n    color: #fff; }\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n    background-color: #20bc56;\n    border-color: transparent;\n    color: #fff; }\n.file.is-warning .file-cta {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n    background-color: #ffdb4a;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n    background-color: #ffd83d;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-danger .file-cta {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff; }\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n    background-color: #ff2b56;\n    border-color: transparent;\n    color: #fff; }\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n    color: #fff; }\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n    background-color: #ff1f4b;\n    border-color: transparent;\n    color: #fff; }\n.file.is-small {\n    font-size: 0.75rem; }\n.file.is-medium {\n    font-size: 1.25rem; }\n.file.is-medium .file-icon .fa {\n      font-size: 21px; }\n.file.is-large {\n    font-size: 1.5rem; }\n.file.is-large .file-icon .fa {\n      font-size: 28px; }\n.file.has-name .file-cta {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n.file.has-name .file-name {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n.file.has-name.is-empty .file-cta {\n    border-radius: 4px; }\n.file.has-name.is-empty .file-name {\n    display: none; }\n.file.is-boxed .file-label {\n    flex-direction: column; }\n.file.is-boxed .file-cta {\n    flex-direction: column;\n    height: auto;\n    padding: 1em 3em; }\n.file.is-boxed .file-name {\n    border-width: 0 1px 1px; }\n.file.is-boxed .file-icon {\n    height: 1.5em;\n    width: 1.5em; }\n.file.is-boxed .file-icon .fa {\n      font-size: 21px; }\n.file.is-boxed.is-small .file-icon .fa {\n    font-size: 14px; }\n.file.is-boxed.is-medium .file-icon .fa {\n    font-size: 28px; }\n.file.is-boxed.is-large .file-icon .fa {\n    font-size: 35px; }\n.file.is-boxed.has-name .file-cta {\n    border-radius: 4px 4px 0 0; }\n.file.is-boxed.has-name .file-name {\n    border-radius: 0 0 4px 4px;\n    border-width: 0 1px 1px; }\n.file.is-centered {\n    justify-content: center; }\n.file.is-fullwidth .file-label {\n    width: 100%; }\n.file.is-fullwidth .file-name {\n    flex-grow: 1;\n    max-width: none; }\n.file.is-right {\n    justify-content: flex-end; }\n.file.is-right .file-cta {\n      border-radius: 0 4px 4px 0; }\n.file.is-right .file-name {\n      border-radius: 4px 0 0 4px;\n      border-width: 1px 0 1px 1px;\n      order: -1; }\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative; }\n.file-label:hover .file-cta {\n    background-color: #eeeeee;\n    color: #363636; }\n.file-label:hover .file-name {\n    border-color: #d5d5d5; }\n.file-label:active .file-cta {\n    background-color: #e8e8e8;\n    color: #363636; }\n.file-label:active .file-name {\n    border-color: #cfcfcf; }\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap; }\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a; }\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis; }\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em; }\n.file-icon .fa {\n    font-size: 14px; }\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700; }\n.label:not(:last-child) {\n    margin-bottom: 0.5em; }\n.label.is-small {\n    font-size: 0.75rem; }\n.label.is-medium {\n    font-size: 1.25rem; }\n.label.is-large {\n    font-size: 1.5rem; }\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem; }\n.help.is-white {\n    color: white; }\n.help.is-black {\n    color: #0a0a0a; }\n.help.is-light {\n    color: whitesmoke; }\n.help.is-dark {\n    color: #363636; }\n.help.is-primary {\n    color: #00d1b2; }\n.help.is-link {\n    color: #3273dc; }\n.help.is-info {\n    color: #209cee; }\n.help.is-success {\n    color: #23d160; }\n.help.is-warning {\n    color: #ffdd57; }\n.help.is-danger {\n    color: #ff3860; }\n.field:not(:last-child) {\n  margin-bottom: 0.75rem; }\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start; }\n.field.has-addons .control:not(:last-child) {\n    margin-right: -1px; }\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n  .field.has-addons .control:not(:first-child):not(:last-child) .input,\n  .field.has-addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0; }\n.field.has-addons .control:first-child:not(:only-child) .button,\n  .field.has-addons .control:first-child:not(:only-child) .input,\n  .field.has-addons .control:first-child:not(:only-child) .select select {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n.field.has-addons .control:last-child:not(:only-child) .button,\n  .field.has-addons .control:last-child:not(:only-child) .input,\n  .field.has-addons .control:last-child:not(:only-child) .select select {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n  .field.has-addons .control .input:not([disabled]):hover,\n  .field.has-addons .control .input:not([disabled]).is-hovered,\n  .field.has-addons .control .select select:not([disabled]):hover,\n  .field.has-addons .control .select select:not([disabled]).is-hovered {\n    z-index: 2; }\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n  .field.has-addons .control .input:not([disabled]):focus,\n  .field.has-addons .control .input:not([disabled]).is-focused,\n  .field.has-addons .control .input:not([disabled]):active,\n  .field.has-addons .control .input:not([disabled]).is-active,\n  .field.has-addons .control .select select:not([disabled]):focus,\n  .field.has-addons .control .select select:not([disabled]).is-focused,\n  .field.has-addons .control .select select:not([disabled]):active,\n  .field.has-addons .control .select select:not([disabled]).is-active {\n    z-index: 3; }\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n    .field.has-addons .control .input:not([disabled]):focus:hover,\n    .field.has-addons .control .input:not([disabled]).is-focused:hover,\n    .field.has-addons .control .input:not([disabled]):active:hover,\n    .field.has-addons .control .input:not([disabled]).is-active:hover,\n    .field.has-addons .control .select select:not([disabled]):focus:hover,\n    .field.has-addons .control .select select:not([disabled]).is-focused:hover,\n    .field.has-addons .control .select select:not([disabled]):active:hover,\n    .field.has-addons .control .select select:not([disabled]).is-active:hover {\n      z-index: 4; }\n.field.has-addons .control.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1; }\n.field.has-addons.has-addons-centered {\n    justify-content: center; }\n.field.has-addons.has-addons-right {\n    justify-content: flex-end; }\n.field.has-addons.has-addons-fullwidth .control {\n    flex-grow: 1;\n    flex-shrink: 0; }\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start; }\n.field.is-grouped > .control {\n    flex-shrink: 0; }\n.field.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem; }\n.field.is-grouped > .control.is-expanded {\n      flex-grow: 1;\n      flex-shrink: 1; }\n.field.is-grouped.is-grouped-centered {\n    justify-content: center; }\n.field.is-grouped.is-grouped-right {\n    justify-content: flex-end; }\n.field.is-grouped.is-grouped-multiline {\n    flex-wrap: wrap; }\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n      margin-bottom: 0.75rem; }\n.field.is-grouped.is-grouped-multiline:last-child {\n      margin-bottom: -0.75rem; }\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n      margin-bottom: 0; }\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex; } }\n.field-label .label {\n  font-size: inherit; }\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem; } }\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right; }\n    .field-label.is-small {\n      font-size: 0.75rem;\n      padding-top: 0.375em; }\n    .field-label.is-normal {\n      padding-top: 0.375em; }\n    .field-label.is-medium {\n      font-size: 1.25rem;\n      padding-top: 0.375em; }\n    .field-label.is-large {\n      font-size: 1.5rem;\n      padding-top: 0.375em; } }\n.field-body .field .field {\n  margin-bottom: 0; }\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1; }\n    .field-body .field {\n      margin-bottom: 0; }\n    .field-body > .field {\n      flex-shrink: 1; }\n      .field-body > .field:not(.is-narrow) {\n        flex-grow: 1; }\n      .field-body > .field:not(:last-child) {\n        margin-right: 0.75rem; } }\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: left; }\n.control.has-icons-left .input:focus ~ .icon,\n  .control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n  .control.has-icons-right .select:focus ~ .icon {\n    color: #7a7a7a; }\n.control.has-icons-left .input.is-small ~ .icon,\n  .control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n  .control.has-icons-right .select.is-small ~ .icon {\n    font-size: 0.75rem; }\n.control.has-icons-left .input.is-medium ~ .icon,\n  .control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n  .control.has-icons-right .select.is-medium ~ .icon {\n    font-size: 1.25rem; }\n.control.has-icons-left .input.is-large ~ .icon,\n  .control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n  .control.has-icons-right .select.is-large ~ .icon {\n    font-size: 1.5rem; }\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4; }\n.control.has-icons-left .input,\n  .control.has-icons-left .select select {\n    padding-left: 2.25em; }\n.control.has-icons-left .icon.is-left {\n    left: 0; }\n.control.has-icons-right .input,\n  .control.has-icons-right .select select {\n    padding-right: 2.25em; }\n.control.has-icons-right .icon.is-right {\n    right: 0; }\n.control.is-loading::after {\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n    z-index: 4; }\n.control.is-loading.is-small:after {\n    font-size: 0.75rem; }\n.control.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n.control.is-loading.is-large:after {\n    font-size: 1.5rem; }\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap; }\n.breadcrumb a {\n    align-items: center;\n    color: #3273dc;\n    display: flex;\n    justify-content: center;\n    padding: 0 0.75em; }\n.breadcrumb a:hover {\n      color: #363636; }\n.breadcrumb li {\n    align-items: center;\n    display: flex; }\n.breadcrumb li:first-child a {\n      padding-left: 0; }\n.breadcrumb li.is-active a {\n      color: #363636;\n      cursor: default;\n      pointer-events: none; }\n.breadcrumb li + li::before {\n      color: #b5b5b5;\n      content: \"\\0002f\"; }\n.breadcrumb ul,\n  .breadcrumb ol {\n    align-items: flex-start;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start; }\n.breadcrumb .icon:first-child {\n    margin-right: 0.5em; }\n.breadcrumb .icon:last-child {\n    margin-left: 0.5em; }\n.breadcrumb.is-centered ol,\n  .breadcrumb.is-centered ul {\n    justify-content: center; }\n.breadcrumb.is-right ol,\n  .breadcrumb.is-right ul {\n    justify-content: flex-end; }\n.breadcrumb.is-small {\n    font-size: 0.75rem; }\n.breadcrumb.is-medium {\n    font-size: 1.25rem; }\n.breadcrumb.is-large {\n    font-size: 1.5rem; }\n.breadcrumb.has-arrow-separator li + li::before {\n    content: \"\\02192\"; }\n.breadcrumb.has-bullet-separator li + li::before {\n    content: \"\\02022\"; }\n.breadcrumb.has-dot-separator li + li::before {\n    content: \"\\000b7\"; }\n.breadcrumb.has-succeeds-separator li + li::before {\n    content: \"\\0227B\"; }\n.card {\n  background-color: white;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative; }\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: flex; }\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem; }\n.card-header-title.is-centered {\n    justify-content: center; }\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem; }\n.card-image {\n  display: block;\n  position: relative; }\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem; }\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #dbdbdb;\n  align-items: stretch;\n  display: flex; }\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem; }\n.card-footer-item:not(:last-child) {\n    border-right: 1px solid #dbdbdb; }\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem; }\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top; }\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n    display: block; }\n.dropdown.is-right .dropdown-menu {\n    left: auto;\n    right: 0; }\n.dropdown.is-up .dropdown-menu {\n    bottom: 100%;\n    padding-bottom: 4px;\n    padding-top: 0;\n    padding-top: initial;\n    top: auto; }\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20; }\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative; }\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: left;\n  white-space: nowrap;\n  width: 100%; }\na.dropdown-item:hover,\n  button.dropdown-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a; }\na.dropdown-item.is-active,\n  button.dropdown-item.is-active {\n    background-color: #3273dc;\n    color: #fff; }\n.dropdown-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0; }\n.level {\n  align-items: center;\n  justify-content: space-between; }\n.level code {\n    border-radius: 4px; }\n.level img {\n    display: inline-block;\n    vertical-align: top; }\n.level.is-mobile {\n    display: flex; }\n.level.is-mobile .level-left,\n    .level.is-mobile .level-right {\n      display: flex; }\n.level.is-mobile .level-left + .level-right {\n      margin-top: 0; }\n.level.is-mobile .level-item:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem; }\n.level.is-mobile .level-item:not(.is-narrow) {\n      flex-grow: 1; }\n@media screen and (min-width: 769px), print {\n    .level {\n      display: flex; }\n      .level > .level-item:not(.is-narrow) {\n        flex-grow: 1; } }\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center; }\n.level-item .title,\n  .level-item .subtitle {\n    margin-bottom: 0; }\n@media screen and (max-width: 768px) {\n    .level-item:not(:last-child) {\n      margin-bottom: 0.75rem; } }\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0; }\n.level-left .level-item.is-flexible,\n  .level-right .level-item.is-flexible {\n    flex-grow: 1; }\n@media screen and (min-width: 769px), print {\n    .level-left .level-item:not(:last-child),\n    .level-right .level-item:not(:last-child) {\n      margin-right: 0.75rem; } }\n.level-left {\n  align-items: center;\n  justify-content: flex-start; }\n@media screen and (max-width: 768px) {\n    .level-left + .level-right {\n      margin-top: 1.5rem; } }\n@media screen and (min-width: 769px), print {\n    .level-left {\n      display: flex; } }\n.level-right {\n  align-items: center;\n  justify-content: flex-end; }\n@media screen and (min-width: 769px), print {\n    .level-right {\n      display: flex; } }\n.list {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1); }\n.list-item {\n  display: block;\n  padding: 0.5em 1em; }\n.list-item:not(a) {\n    color: #4a4a4a; }\n.list-item:first-child {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px; }\n.list-item:last-child {\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px; }\n.list-item:not(:last-child) {\n    border-bottom: 1px solid #dbdbdb; }\n.list-item.is-active {\n    background-color: #3273dc;\n    color: #fff; }\na.list-item {\n  background-color: whitesmoke;\n  cursor: pointer; }\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: left; }\n.media .content:not(:last-child) {\n    margin-bottom: 0.75rem; }\n.media .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    display: flex;\n    padding-top: 0.75rem; }\n.media .media .content:not(:last-child),\n    .media .media .control:not(:last-child) {\n      margin-bottom: 0.5rem; }\n.media .media .media {\n      padding-top: 0.5rem; }\n.media .media .media + .media {\n        margin-top: 0.5rem; }\n.media + .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem; }\n.media.is-large + .media {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem; }\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0; }\n.media-left {\n  margin-right: 1rem; }\n.media-right {\n  margin-left: 1rem; }\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: left; }\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto; } }\n.menu {\n  font-size: 1rem; }\n.menu.is-small {\n    font-size: 0.75rem; }\n.menu.is-medium {\n    font-size: 1.25rem; }\n.menu.is-large {\n    font-size: 1.5rem; }\n.menu-list {\n  line-height: 1.25; }\n.menu-list a {\n    border-radius: 2px;\n    color: #4a4a4a;\n    display: block;\n    padding: 0.5em 0.75em; }\n.menu-list a:hover {\n      background-color: whitesmoke;\n      color: #363636; }\n.menu-list a.is-active {\n      background-color: #3273dc;\n      color: #fff; }\n.menu-list li ul {\n    border-left: 1px solid #dbdbdb;\n    margin: 0.75em;\n    padding-left: 0.75em; }\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase; }\n.menu-label:not(:first-child) {\n    margin-top: 1em; }\n.menu-label:not(:last-child) {\n    margin-bottom: 1em; }\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem; }\n.message strong {\n    color: currentColor; }\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n    color: currentColor;\n    text-decoration: underline; }\n.message.is-small {\n    font-size: 0.75rem; }\n.message.is-medium {\n    font-size: 1.25rem; }\n.message.is-large {\n    font-size: 1.5rem; }\n.message.is-white {\n    background-color: white; }\n.message.is-white .message-header {\n      background-color: white;\n      color: #0a0a0a; }\n.message.is-white .message-body {\n      border-color: white;\n      color: #4d4d4d; }\n.message.is-black {\n    background-color: #fafafa; }\n.message.is-black .message-header {\n      background-color: #0a0a0a;\n      color: white; }\n.message.is-black .message-body {\n      border-color: #0a0a0a;\n      color: #090909; }\n.message.is-light {\n    background-color: #fafafa; }\n.message.is-light .message-header {\n      background-color: whitesmoke;\n      color: #363636; }\n.message.is-light .message-body {\n      border-color: whitesmoke;\n      color: #505050; }\n.message.is-dark {\n    background-color: #fafafa; }\n.message.is-dark .message-header {\n      background-color: #363636;\n      color: whitesmoke; }\n.message.is-dark .message-body {\n      border-color: #363636;\n      color: #2a2a2a; }\n.message.is-primary {\n    background-color: #f5fffd; }\n.message.is-primary .message-header {\n      background-color: #00d1b2;\n      color: #fff; }\n.message.is-primary .message-body {\n      border-color: #00d1b2;\n      color: #021310; }\n.message.is-link {\n    background-color: #f6f9fe; }\n.message.is-link .message-header {\n      background-color: #3273dc;\n      color: #fff; }\n.message.is-link .message-body {\n      border-color: #3273dc;\n      color: #22509a; }\n.message.is-info {\n    background-color: #f6fbfe; }\n.message.is-info .message-header {\n      background-color: #209cee;\n      color: #fff; }\n.message.is-info .message-body {\n      border-color: #209cee;\n      color: #12537e; }\n.message.is-success {\n    background-color: #f6fef9; }\n.message.is-success .message-header {\n      background-color: #23d160;\n      color: #fff; }\n.message.is-success .message-body {\n      border-color: #23d160;\n      color: #0e301a; }\n.message.is-warning {\n    background-color: #fffdf5; }\n.message.is-warning .message-header {\n      background-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7); }\n.message.is-warning .message-body {\n      border-color: #ffdd57;\n      color: #3b3108; }\n.message.is-danger {\n    background-color: #fff5f7; }\n.message.is-danger .message-header {\n      background-color: #ff3860;\n      color: #fff; }\n.message.is-danger .message-body {\n      border-color: #ff3860;\n      color: #cd0930; }\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative; }\n.message-header .delete {\n    flex-grow: 0;\n    flex-shrink: 0;\n    margin-left: 0.75em; }\n.message-header + .message-body {\n    border-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em; }\n.message-body code,\n  .message-body pre {\n    background-color: white; }\n.message-body pre code {\n    background-color: transparent; }\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40; }\n.modal.is-active {\n    display: flex; }\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86); }\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%; }\n@media screen and (min-width: 769px), print {\n    .modal-content,\n    .modal-card {\n      margin: 0 auto;\n      max-height: calc(100vh - 40px);\n      width: 640px; } }\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px; }\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible; }\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative; }\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px; }\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1; }\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb; }\n.modal-card-foot .button:not(:last-child) {\n    margin-right: 0.5em; }\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px; }\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30; }\n.navbar.is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.navbar.is-white .navbar-brand > .navbar-item,\n    .navbar.is-white .navbar-brand .navbar-link {\n      color: #0a0a0a; }\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-white .navbar-brand .navbar-link:focus,\n    .navbar.is-white .navbar-brand .navbar-link:hover,\n    .navbar.is-white .navbar-brand .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a; }\n.navbar.is-white .navbar-brand .navbar-link::after {\n      border-color: #0a0a0a; }\n.navbar.is-white .navbar-burger {\n      color: #0a0a0a; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-white .navbar-start > .navbar-item,\n      .navbar.is-white .navbar-start .navbar-link,\n      .navbar.is-white .navbar-end > .navbar-item,\n      .navbar.is-white .navbar-end .navbar-link {\n        color: #0a0a0a; }\n      .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n      .navbar.is-white .navbar-start .navbar-link:focus,\n      .navbar.is-white .navbar-start .navbar-link:hover,\n      .navbar.is-white .navbar-start .navbar-link.is-active,\n      .navbar.is-white .navbar-end > a.navbar-item:focus,\n      .navbar.is-white .navbar-end > a.navbar-item:hover,\n      .navbar.is-white .navbar-end > a.navbar-item.is-active,\n      .navbar.is-white .navbar-end .navbar-link:focus,\n      .navbar.is-white .navbar-end .navbar-link:hover,\n      .navbar.is-white .navbar-end .navbar-link.is-active {\n        background-color: #f2f2f2;\n        color: #0a0a0a; }\n      .navbar.is-white .navbar-start .navbar-link::after,\n      .navbar.is-white .navbar-end .navbar-link::after {\n        border-color: #0a0a0a; }\n      .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #f2f2f2;\n        color: #0a0a0a; }\n      .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n        background-color: white;\n        color: #0a0a0a; } }\n.navbar.is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.navbar.is-black .navbar-brand > .navbar-item,\n    .navbar.is-black .navbar-brand .navbar-link {\n      color: white; }\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-black .navbar-brand .navbar-link:focus,\n    .navbar.is-black .navbar-brand .navbar-link:hover,\n    .navbar.is-black .navbar-brand .navbar-link.is-active {\n      background-color: black;\n      color: white; }\n.navbar.is-black .navbar-brand .navbar-link::after {\n      border-color: white; }\n.navbar.is-black .navbar-burger {\n      color: white; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-black .navbar-start > .navbar-item,\n      .navbar.is-black .navbar-start .navbar-link,\n      .navbar.is-black .navbar-end > .navbar-item,\n      .navbar.is-black .navbar-end .navbar-link {\n        color: white; }\n      .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n      .navbar.is-black .navbar-start .navbar-link:focus,\n      .navbar.is-black .navbar-start .navbar-link:hover,\n      .navbar.is-black .navbar-start .navbar-link.is-active,\n      .navbar.is-black .navbar-end > a.navbar-item:focus,\n      .navbar.is-black .navbar-end > a.navbar-item:hover,\n      .navbar.is-black .navbar-end > a.navbar-item.is-active,\n      .navbar.is-black .navbar-end .navbar-link:focus,\n      .navbar.is-black .navbar-end .navbar-link:hover,\n      .navbar.is-black .navbar-end .navbar-link.is-active {\n        background-color: black;\n        color: white; }\n      .navbar.is-black .navbar-start .navbar-link::after,\n      .navbar.is-black .navbar-end .navbar-link::after {\n        border-color: white; }\n      .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: black;\n        color: white; }\n      .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n        background-color: #0a0a0a;\n        color: white; } }\n.navbar.is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.navbar.is-light .navbar-brand > .navbar-item,\n    .navbar.is-light .navbar-brand .navbar-link {\n      color: #363636; }\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-light .navbar-brand .navbar-link:focus,\n    .navbar.is-light .navbar-brand .navbar-link:hover,\n    .navbar.is-light .navbar-brand .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636; }\n.navbar.is-light .navbar-brand .navbar-link::after {\n      border-color: #363636; }\n.navbar.is-light .navbar-burger {\n      color: #363636; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-light .navbar-start > .navbar-item,\n      .navbar.is-light .navbar-start .navbar-link,\n      .navbar.is-light .navbar-end > .navbar-item,\n      .navbar.is-light .navbar-end .navbar-link {\n        color: #363636; }\n      .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n      .navbar.is-light .navbar-start .navbar-link:focus,\n      .navbar.is-light .navbar-start .navbar-link:hover,\n      .navbar.is-light .navbar-start .navbar-link.is-active,\n      .navbar.is-light .navbar-end > a.navbar-item:focus,\n      .navbar.is-light .navbar-end > a.navbar-item:hover,\n      .navbar.is-light .navbar-end > a.navbar-item.is-active,\n      .navbar.is-light .navbar-end .navbar-link:focus,\n      .navbar.is-light .navbar-end .navbar-link:hover,\n      .navbar.is-light .navbar-end .navbar-link.is-active {\n        background-color: #e8e8e8;\n        color: #363636; }\n      .navbar.is-light .navbar-start .navbar-link::after,\n      .navbar.is-light .navbar-end .navbar-link::after {\n        border-color: #363636; }\n      .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #e8e8e8;\n        color: #363636; }\n      .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #363636; } }\n.navbar.is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.navbar.is-dark .navbar-brand > .navbar-item,\n    .navbar.is-dark .navbar-brand .navbar-link {\n      color: whitesmoke; }\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-dark .navbar-brand .navbar-link:focus,\n    .navbar.is-dark .navbar-brand .navbar-link:hover,\n    .navbar.is-dark .navbar-brand .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke; }\n.navbar.is-dark .navbar-brand .navbar-link::after {\n      border-color: whitesmoke; }\n.navbar.is-dark .navbar-burger {\n      color: whitesmoke; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-dark .navbar-start > .navbar-item,\n      .navbar.is-dark .navbar-start .navbar-link,\n      .navbar.is-dark .navbar-end > .navbar-item,\n      .navbar.is-dark .navbar-end .navbar-link {\n        color: whitesmoke; }\n      .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-start .navbar-link:focus,\n      .navbar.is-dark .navbar-start .navbar-link:hover,\n      .navbar.is-dark .navbar-start .navbar-link.is-active,\n      .navbar.is-dark .navbar-end > a.navbar-item:focus,\n      .navbar.is-dark .navbar-end > a.navbar-item:hover,\n      .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-end .navbar-link:focus,\n      .navbar.is-dark .navbar-end .navbar-link:hover,\n      .navbar.is-dark .navbar-end .navbar-link.is-active {\n        background-color: #292929;\n        color: whitesmoke; }\n      .navbar.is-dark .navbar-start .navbar-link::after,\n      .navbar.is-dark .navbar-end .navbar-link::after {\n        border-color: whitesmoke; }\n      .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #292929;\n        color: whitesmoke; }\n      .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n        background-color: #363636;\n        color: whitesmoke; } }\n.navbar.is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.navbar.is-primary .navbar-brand > .navbar-item,\n    .navbar.is-primary .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-primary .navbar-brand .navbar-link:focus,\n    .navbar.is-primary .navbar-brand .navbar-link:hover,\n    .navbar.is-primary .navbar-brand .navbar-link.is-active {\n      background-color: #00b89c;\n      color: #fff; }\n.navbar.is-primary .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n.navbar.is-primary .navbar-burger {\n      color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-primary .navbar-start > .navbar-item,\n      .navbar.is-primary .navbar-start .navbar-link,\n      .navbar.is-primary .navbar-end > .navbar-item,\n      .navbar.is-primary .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-start .navbar-link:focus,\n      .navbar.is-primary .navbar-start .navbar-link:hover,\n      .navbar.is-primary .navbar-start .navbar-link.is-active,\n      .navbar.is-primary .navbar-end > a.navbar-item:focus,\n      .navbar.is-primary .navbar-end > a.navbar-item:hover,\n      .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-end .navbar-link:focus,\n      .navbar.is-primary .navbar-end .navbar-link:hover,\n      .navbar.is-primary .navbar-end .navbar-link.is-active {\n        background-color: #00b89c;\n        color: #fff; }\n      .navbar.is-primary .navbar-start .navbar-link::after,\n      .navbar.is-primary .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #00b89c;\n        color: #fff; }\n      .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n        background-color: #00d1b2;\n        color: #fff; } }\n.navbar.is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.navbar.is-link .navbar-brand > .navbar-item,\n    .navbar.is-link .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-link .navbar-brand .navbar-link:focus,\n    .navbar.is-link .navbar-brand .navbar-link:hover,\n    .navbar.is-link .navbar-brand .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff; }\n.navbar.is-link .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n.navbar.is-link .navbar-burger {\n      color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-link .navbar-start > .navbar-item,\n      .navbar.is-link .navbar-start .navbar-link,\n      .navbar.is-link .navbar-end > .navbar-item,\n      .navbar.is-link .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n      .navbar.is-link .navbar-start .navbar-link:focus,\n      .navbar.is-link .navbar-start .navbar-link:hover,\n      .navbar.is-link .navbar-start .navbar-link.is-active,\n      .navbar.is-link .navbar-end > a.navbar-item:focus,\n      .navbar.is-link .navbar-end > a.navbar-item:hover,\n      .navbar.is-link .navbar-end > a.navbar-item.is-active,\n      .navbar.is-link .navbar-end .navbar-link:focus,\n      .navbar.is-link .navbar-end .navbar-link:hover,\n      .navbar.is-link .navbar-end .navbar-link.is-active {\n        background-color: #2366d1;\n        color: #fff; }\n      .navbar.is-link .navbar-start .navbar-link::after,\n      .navbar.is-link .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #2366d1;\n        color: #fff; }\n      .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n        background-color: #3273dc;\n        color: #fff; } }\n.navbar.is-info {\n    background-color: #209cee;\n    color: #fff; }\n.navbar.is-info .navbar-brand > .navbar-item,\n    .navbar.is-info .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-info .navbar-brand .navbar-link:focus,\n    .navbar.is-info .navbar-brand .navbar-link:hover,\n    .navbar.is-info .navbar-brand .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff; }\n.navbar.is-info .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n.navbar.is-info .navbar-burger {\n      color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-info .navbar-start > .navbar-item,\n      .navbar.is-info .navbar-start .navbar-link,\n      .navbar.is-info .navbar-end > .navbar-item,\n      .navbar.is-info .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n      .navbar.is-info .navbar-start .navbar-link:focus,\n      .navbar.is-info .navbar-start .navbar-link:hover,\n      .navbar.is-info .navbar-start .navbar-link.is-active,\n      .navbar.is-info .navbar-end > a.navbar-item:focus,\n      .navbar.is-info .navbar-end > a.navbar-item:hover,\n      .navbar.is-info .navbar-end > a.navbar-item.is-active,\n      .navbar.is-info .navbar-end .navbar-link:focus,\n      .navbar.is-info .navbar-end .navbar-link:hover,\n      .navbar.is-info .navbar-end .navbar-link.is-active {\n        background-color: #118fe4;\n        color: #fff; }\n      .navbar.is-info .navbar-start .navbar-link::after,\n      .navbar.is-info .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #118fe4;\n        color: #fff; }\n      .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n        background-color: #209cee;\n        color: #fff; } }\n.navbar.is-success {\n    background-color: #23d160;\n    color: #fff; }\n.navbar.is-success .navbar-brand > .navbar-item,\n    .navbar.is-success .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-success .navbar-brand .navbar-link:focus,\n    .navbar.is-success .navbar-brand .navbar-link:hover,\n    .navbar.is-success .navbar-brand .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff; }\n.navbar.is-success .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n.navbar.is-success .navbar-burger {\n      color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-success .navbar-start > .navbar-item,\n      .navbar.is-success .navbar-start .navbar-link,\n      .navbar.is-success .navbar-end > .navbar-item,\n      .navbar.is-success .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n      .navbar.is-success .navbar-start .navbar-link:focus,\n      .navbar.is-success .navbar-start .navbar-link:hover,\n      .navbar.is-success .navbar-start .navbar-link.is-active,\n      .navbar.is-success .navbar-end > a.navbar-item:focus,\n      .navbar.is-success .navbar-end > a.navbar-item:hover,\n      .navbar.is-success .navbar-end > a.navbar-item.is-active,\n      .navbar.is-success .navbar-end .navbar-link:focus,\n      .navbar.is-success .navbar-end .navbar-link:hover,\n      .navbar.is-success .navbar-end .navbar-link.is-active {\n        background-color: #20bc56;\n        color: #fff; }\n      .navbar.is-success .navbar-start .navbar-link::after,\n      .navbar.is-success .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #20bc56;\n        color: #fff; }\n      .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n        background-color: #23d160;\n        color: #fff; } }\n.navbar.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.navbar.is-warning .navbar-brand > .navbar-item,\n    .navbar.is-warning .navbar-brand .navbar-link {\n      color: rgba(0, 0, 0, 0.7); }\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-warning .navbar-brand .navbar-link:focus,\n    .navbar.is-warning .navbar-brand .navbar-link:hover,\n    .navbar.is-warning .navbar-brand .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7); }\n.navbar.is-warning .navbar-brand .navbar-link::after {\n      border-color: rgba(0, 0, 0, 0.7); }\n.navbar.is-warning .navbar-burger {\n      color: rgba(0, 0, 0, 0.7); }\n@media screen and (min-width: 1024px) {\n      .navbar.is-warning .navbar-start > .navbar-item,\n      .navbar.is-warning .navbar-start .navbar-link,\n      .navbar.is-warning .navbar-end > .navbar-item,\n      .navbar.is-warning .navbar-end .navbar-link {\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-start .navbar-link:focus,\n      .navbar.is-warning .navbar-start .navbar-link:hover,\n      .navbar.is-warning .navbar-start .navbar-link.is-active,\n      .navbar.is-warning .navbar-end > a.navbar-item:focus,\n      .navbar.is-warning .navbar-end > a.navbar-item:hover,\n      .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-end .navbar-link:focus,\n      .navbar.is-warning .navbar-end .navbar-link:hover,\n      .navbar.is-warning .navbar-end .navbar-link.is-active {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-start .navbar-link::after,\n      .navbar.is-warning .navbar-end .navbar-link::after {\n        border-color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7); } }\n.navbar.is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.navbar.is-danger .navbar-brand > .navbar-item,\n    .navbar.is-danger .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-danger .navbar-brand .navbar-link:focus,\n    .navbar.is-danger .navbar-brand .navbar-link:hover,\n    .navbar.is-danger .navbar-brand .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff; }\n.navbar.is-danger .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n.navbar.is-danger .navbar-burger {\n      color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-danger .navbar-start > .navbar-item,\n      .navbar.is-danger .navbar-start .navbar-link,\n      .navbar.is-danger .navbar-end > .navbar-item,\n      .navbar.is-danger .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-start .navbar-link:focus,\n      .navbar.is-danger .navbar-start .navbar-link:hover,\n      .navbar.is-danger .navbar-start .navbar-link.is-active,\n      .navbar.is-danger .navbar-end > a.navbar-item:focus,\n      .navbar.is-danger .navbar-end > a.navbar-item:hover,\n      .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-end .navbar-link:focus,\n      .navbar.is-danger .navbar-end .navbar-link:hover,\n      .navbar.is-danger .navbar-end .navbar-link.is-active {\n        background-color: #ff1f4b;\n        color: #fff; }\n      .navbar.is-danger .navbar-start .navbar-link::after,\n      .navbar.is-danger .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n      .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ff1f4b;\n        color: #fff; }\n      .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ff3860;\n        color: #fff; } }\n.navbar > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%; }\n.navbar.has-shadow {\n    box-shadow: 0 2px 0 0 whitesmoke; }\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n.navbar.is-fixed-bottom {\n    bottom: 0; }\n.navbar.is-fixed-bottom.has-shadow {\n      box-shadow: 0 -2px 0 0 whitesmoke; }\n.navbar.is-fixed-top {\n    top: 0; }\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem; }\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem; }\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem; }\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent; }\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden; }\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto; }\n.navbar-burger span {\n    background-color: currentColor;\n    display: block;\n    height: 1px;\n    left: calc(50% - 8px);\n    position: absolute;\n    transform-origin: center;\n    transition-duration: 86ms;\n    transition-property: background-color, opacity, transform;\n    transition-timing-function: ease-out;\n    width: 16px; }\n.navbar-burger span:nth-child(1) {\n      top: calc(50% - 6px); }\n.navbar-burger span:nth-child(2) {\n      top: calc(50% - 1px); }\n.navbar-burger span:nth-child(3) {\n      top: calc(50% + 4px); }\n.navbar-burger:hover {\n    background-color: rgba(0, 0, 0, 0.05); }\n.navbar-burger.is-active span:nth-child(1) {\n    transform: translateY(5px) rotate(45deg); }\n.navbar-burger.is-active span:nth-child(2) {\n    opacity: 0; }\n.navbar-burger.is-active span:nth-child(3) {\n    transform: translateY(-5px) rotate(-45deg); }\n.navbar-menu {\n  display: none; }\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative; }\n.navbar-item .icon:only-child,\n  .navbar-link .icon:only-child {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem; }\na.navbar-item,\n.navbar-link {\n  cursor: pointer; }\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n  .navbar-link:focus,\n  .navbar-link:focus-within,\n  .navbar-link:hover,\n  .navbar-link.is-active {\n    background-color: #fafafa;\n    color: #3273dc; }\n.navbar-item {\n  display: block;\n  flex-grow: 0;\n  flex-shrink: 0; }\n.navbar-item img {\n    max-height: 1.75rem; }\n.navbar-item.has-dropdown {\n    padding: 0; }\n.navbar-item.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1; }\n.navbar-item.is-tab {\n    border-bottom: 1px solid transparent;\n    min-height: 3.25rem;\n    padding-bottom: calc(0.5rem - 1px); }\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n      background-color: transparent;\n      border-bottom-color: #3273dc; }\n.navbar-item.is-tab.is-active {\n      background-color: transparent;\n      border-bottom-color: #3273dc;\n      border-bottom-style: solid;\n      border-bottom-width: 3px;\n      color: #3273dc;\n      padding-bottom: calc(0.5rem - 3px); }\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1; }\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em; }\n.navbar-link:not(.is-arrowless)::after {\n    border-color: #3273dc;\n    margin-top: -0.375em;\n    right: 1.125em; }\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n.navbar-dropdown .navbar-item {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0; }\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block; }\n  .navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex; }\n  .navbar-link::after {\n    display: none; }\n  .navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0; }\n    .navbar-menu.is-active {\n      display: block; }\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0; }\n    .navbar.is-fixed-bottom-touch.has-shadow {\n      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1); }\n  .navbar.is-fixed-top-touch {\n    top: 0; }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto; }\n  html.has-navbar-fixed-top-touch,\n  body.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem; }\n  html.has-navbar-fixed-bottom-touch,\n  body.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem; } }\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex; }\n  .navbar {\n    min-height: 3.25rem; }\n    .navbar.is-spaced {\n      padding: 1rem 2rem; }\n      .navbar.is-spaced .navbar-start,\n      .navbar.is-spaced .navbar-end {\n        align-items: center; }\n      .navbar.is-spaced a.navbar-item,\n      .navbar.is-spaced .navbar-link {\n        border-radius: 4px; }\n    .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n    .navbar.is-transparent .navbar-link:focus,\n    .navbar.is-transparent .navbar-link:hover,\n    .navbar.is-transparent .navbar-link.is-active {\n      background-color: transparent !important; }\n    .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n      background-color: transparent !important; }\n    .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n      background-color: whitesmoke;\n      color: #0a0a0a; }\n    .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n      background-color: whitesmoke;\n      color: #3273dc; }\n  .navbar-burger {\n    display: none; }\n  .navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex; }\n  .navbar-item {\n    display: flex; }\n    .navbar-item.has-dropdown {\n      align-items: stretch; }\n    .navbar-item.has-dropdown-up .navbar-link::after {\n      transform: rotate(135deg) translate(0.25em, -0.25em); }\n    .navbar-item.has-dropdown-up .navbar-dropdown {\n      border-bottom: 2px solid #dbdbdb;\n      border-radius: 6px 6px 0 0;\n      border-top: none;\n      bottom: 100%;\n      box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n      top: auto; }\n    .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n      display: block; }\n      .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n        opacity: 1;\n        pointer-events: auto;\n        transform: translateY(0); }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0; }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto; }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto; }\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20; }\n    .navbar-dropdown .navbar-item {\n      padding: 0.375rem 1rem;\n      white-space: nowrap; }\n    .navbar-dropdown a.navbar-item {\n      padding-right: 3rem; }\n      .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n        background-color: whitesmoke;\n        color: #0a0a0a; }\n      .navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #3273dc; }\n    .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n      border-radius: 6px;\n      border-top: none;\n      box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n      display: block;\n      opacity: 0;\n      pointer-events: none;\n      top: calc(100% + (-4px));\n      transform: translateY(-5px);\n      transition-duration: 86ms;\n      transition-property: opacity, transform; }\n    .navbar-dropdown.is-right {\n      left: auto;\n      right: 0; }\n  .navbar-divider {\n    display: block; }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -.75rem; }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -.75rem; }\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0; }\n    .navbar.is-fixed-bottom-desktop.has-shadow {\n      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1); }\n  .navbar.is-fixed-top-desktop {\n    top: 0; }\n  html.has-navbar-fixed-top-desktop,\n  body.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem; }\n  html.has-navbar-fixed-bottom-desktop,\n  body.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem; }\n  html.has-spaced-navbar-fixed-top,\n  body.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem; }\n  html.has-spaced-navbar-fixed-bottom,\n  body.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem; }\n  a.navbar-item.is-active,\n  .navbar-link.is-active {\n    color: #0a0a0a; }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n  .navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent; }\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa; } }\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem); }\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem; }\n.pagination.is-small {\n    font-size: 0.75rem; }\n.pagination.is-medium {\n    font-size: 1.25rem; }\n.pagination.is-large {\n    font-size: 1.5rem; }\n.pagination.is-rounded .pagination-previous,\n  .pagination.is-rounded .pagination-next {\n    padding-left: 1em;\n    padding-right: 1em;\n    border-radius: 290486px; }\n.pagination.is-rounded .pagination-link {\n    border-radius: 290486px; }\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center; }\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.25em; }\n.pagination-previous:hover,\n  .pagination-next:hover,\n  .pagination-link:hover {\n    border-color: #b5b5b5;\n    color: #363636; }\n.pagination-previous:focus,\n  .pagination-next:focus,\n  .pagination-link:focus {\n    border-color: #3273dc; }\n.pagination-previous:active,\n  .pagination-next:active,\n  .pagination-link:active {\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2); }\n.pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled] {\n    background-color: #dbdbdb;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    color: #7a7a7a;\n    opacity: 0.5; }\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff; }\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none; }\n.pagination-list {\n  flex-wrap: wrap; }\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap; }\n  .pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1; }\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1; } }\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1; }\n  .pagination-previous {\n    order: 2; }\n  .pagination-next {\n    order: 3; }\n  .pagination {\n    justify-content: space-between; }\n    .pagination.is-centered .pagination-previous {\n      order: 1; }\n    .pagination.is-centered .pagination-list {\n      justify-content: center;\n      order: 2; }\n    .pagination.is-centered .pagination-next {\n      order: 3; }\n    .pagination.is-right .pagination-previous {\n      order: 1; }\n    .pagination.is-right .pagination-next {\n      order: 2; }\n    .pagination.is-right .pagination-list {\n      justify-content: flex-end;\n      order: 3; } }\n.panel {\n  font-size: 1rem; }\n.panel:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.panel-heading,\n.panel-tabs,\n.panel-block {\n  border-bottom: 1px solid #dbdbdb;\n  border-left: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb; }\n.panel-heading:first-child,\n  .panel-tabs:first-child,\n  .panel-block:first-child {\n    border-top: 1px solid #dbdbdb; }\n.panel-heading {\n  background-color: whitesmoke;\n  border-radius: 4px 4px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 300;\n  line-height: 1.25;\n  padding: 0.5em 0.75em; }\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center; }\n.panel-tabs a {\n    border-bottom: 1px solid #dbdbdb;\n    margin-bottom: -1px;\n    padding: 0.5em; }\n.panel-tabs a.is-active {\n      border-bottom-color: #4a4a4a;\n      color: #363636; }\n.panel-list a {\n  color: #4a4a4a; }\n.panel-list a:hover {\n    color: #3273dc; }\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em; }\n.panel-block input[type=\"checkbox\"] {\n    margin-right: 0.75em; }\n.panel-block > .control {\n    flex-grow: 1;\n    flex-shrink: 1;\n    width: 100%; }\n.panel-block.is-wrapped {\n    flex-wrap: wrap; }\n.panel-block.is-active {\n    border-left-color: #3273dc;\n    color: #363636; }\n.panel-block.is-active .panel-icon {\n      color: #3273dc; }\na.panel-block,\nlabel.panel-block {\n  cursor: pointer; }\na.panel-block:hover,\n  label.panel-block:hover {\n    background-color: whitesmoke; }\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em; }\n.panel-icon .fa {\n    font-size: inherit;\n    line-height: inherit; }\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n.tabs a {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    color: #4a4a4a;\n    display: flex;\n    justify-content: center;\n    margin-bottom: -1px;\n    padding: 0.5em 1em;\n    vertical-align: top; }\n.tabs a:hover {\n      border-bottom-color: #363636;\n      color: #363636; }\n.tabs li {\n    display: block; }\n.tabs li.is-active a {\n      border-bottom-color: #3273dc;\n      color: #3273dc; }\n.tabs ul {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    justify-content: flex-start; }\n.tabs ul.is-left {\n      padding-right: 0.75em; }\n.tabs ul.is-center {\n      flex: none;\n      justify-content: center;\n      padding-left: 0.75em;\n      padding-right: 0.75em; }\n.tabs ul.is-right {\n      justify-content: flex-end;\n      padding-left: 0.75em; }\n.tabs .icon:first-child {\n    margin-right: 0.5em; }\n.tabs .icon:last-child {\n    margin-left: 0.5em; }\n.tabs.is-centered ul {\n    justify-content: center; }\n.tabs.is-right ul {\n    justify-content: flex-end; }\n.tabs.is-boxed a {\n    border: 1px solid transparent;\n    border-radius: 4px 4px 0 0; }\n.tabs.is-boxed a:hover {\n      background-color: whitesmoke;\n      border-bottom-color: #dbdbdb; }\n.tabs.is-boxed li.is-active a {\n    background-color: white;\n    border-color: #dbdbdb;\n    border-bottom-color: transparent !important; }\n.tabs.is-fullwidth li {\n    flex-grow: 1;\n    flex-shrink: 0; }\n.tabs.is-toggle a {\n    border-color: #dbdbdb;\n    border-style: solid;\n    border-width: 1px;\n    margin-bottom: 0;\n    position: relative; }\n.tabs.is-toggle a:hover {\n      background-color: whitesmoke;\n      border-color: #b5b5b5;\n      z-index: 2; }\n.tabs.is-toggle li + li {\n    margin-left: -1px; }\n.tabs.is-toggle li:first-child a {\n    border-radius: 4px 0 0 4px; }\n.tabs.is-toggle li:last-child a {\n    border-radius: 0 4px 4px 0; }\n.tabs.is-toggle li.is-active a {\n    background-color: #3273dc;\n    border-color: #3273dc;\n    color: #fff;\n    z-index: 1; }\n.tabs.is-toggle ul {\n    border-bottom: none; }\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n    border-bottom-left-radius: 290486px;\n    border-top-left-radius: 290486px;\n    padding-left: 1.25em; }\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n    border-bottom-right-radius: 290486px;\n    border-top-right-radius: 290486px;\n    padding-right: 1.25em; }\n.tabs.is-small {\n    font-size: 0.75rem; }\n.tabs.is-medium {\n    font-size: 1.25rem; }\n.tabs.is-large {\n    font-size: 1.5rem; }\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem; }\n.columns.is-mobile > .column.is-narrow {\n    flex: none; }\n.columns.is-mobile > .column.is-full {\n    flex: none;\n    width: 100%; }\n.columns.is-mobile > .column.is-three-quarters {\n    flex: none;\n    width: 75%; }\n.columns.is-mobile > .column.is-two-thirds {\n    flex: none;\n    width: 66.6666%; }\n.columns.is-mobile > .column.is-half {\n    flex: none;\n    width: 50%; }\n.columns.is-mobile > .column.is-one-third {\n    flex: none;\n    width: 33.3333%; }\n.columns.is-mobile > .column.is-one-quarter {\n    flex: none;\n    width: 25%; }\n.columns.is-mobile > .column.is-one-fifth {\n    flex: none;\n    width: 20%; }\n.columns.is-mobile > .column.is-two-fifths {\n    flex: none;\n    width: 40%; }\n.columns.is-mobile > .column.is-three-fifths {\n    flex: none;\n    width: 60%; }\n.columns.is-mobile > .column.is-four-fifths {\n    flex: none;\n    width: 80%; }\n.columns.is-mobile > .column.is-offset-three-quarters {\n    margin-left: 75%; }\n.columns.is-mobile > .column.is-offset-two-thirds {\n    margin-left: 66.6666%; }\n.columns.is-mobile > .column.is-offset-half {\n    margin-left: 50%; }\n.columns.is-mobile > .column.is-offset-one-third {\n    margin-left: 33.3333%; }\n.columns.is-mobile > .column.is-offset-one-quarter {\n    margin-left: 25%; }\n.columns.is-mobile > .column.is-offset-one-fifth {\n    margin-left: 20%; }\n.columns.is-mobile > .column.is-offset-two-fifths {\n    margin-left: 40%; }\n.columns.is-mobile > .column.is-offset-three-fifths {\n    margin-left: 60%; }\n.columns.is-mobile > .column.is-offset-four-fifths {\n    margin-left: 80%; }\n.columns.is-mobile > .column.is-0 {\n    flex: none;\n    width: 0%; }\n.columns.is-mobile > .column.is-offset-0 {\n    margin-left: 0%; }\n.columns.is-mobile > .column.is-1 {\n    flex: none;\n    width: 8.33333%; }\n.columns.is-mobile > .column.is-offset-1 {\n    margin-left: 8.33333%; }\n.columns.is-mobile > .column.is-2 {\n    flex: none;\n    width: 16.66667%; }\n.columns.is-mobile > .column.is-offset-2 {\n    margin-left: 16.66667%; }\n.columns.is-mobile > .column.is-3 {\n    flex: none;\n    width: 25%; }\n.columns.is-mobile > .column.is-offset-3 {\n    margin-left: 25%; }\n.columns.is-mobile > .column.is-4 {\n    flex: none;\n    width: 33.33333%; }\n.columns.is-mobile > .column.is-offset-4 {\n    margin-left: 33.33333%; }\n.columns.is-mobile > .column.is-5 {\n    flex: none;\n    width: 41.66667%; }\n.columns.is-mobile > .column.is-offset-5 {\n    margin-left: 41.66667%; }\n.columns.is-mobile > .column.is-6 {\n    flex: none;\n    width: 50%; }\n.columns.is-mobile > .column.is-offset-6 {\n    margin-left: 50%; }\n.columns.is-mobile > .column.is-7 {\n    flex: none;\n    width: 58.33333%; }\n.columns.is-mobile > .column.is-offset-7 {\n    margin-left: 58.33333%; }\n.columns.is-mobile > .column.is-8 {\n    flex: none;\n    width: 66.66667%; }\n.columns.is-mobile > .column.is-offset-8 {\n    margin-left: 66.66667%; }\n.columns.is-mobile > .column.is-9 {\n    flex: none;\n    width: 75%; }\n.columns.is-mobile > .column.is-offset-9 {\n    margin-left: 75%; }\n.columns.is-mobile > .column.is-10 {\n    flex: none;\n    width: 83.33333%; }\n.columns.is-mobile > .column.is-offset-10 {\n    margin-left: 83.33333%; }\n.columns.is-mobile > .column.is-11 {\n    flex: none;\n    width: 91.66667%; }\n.columns.is-mobile > .column.is-offset-11 {\n    margin-left: 91.66667%; }\n.columns.is-mobile > .column.is-12 {\n    flex: none;\n    width: 100%; }\n.columns.is-mobile > .column.is-offset-12 {\n    margin-left: 100%; }\n@media screen and (max-width: 768px) {\n    .column.is-narrow-mobile {\n      flex: none; }\n    .column.is-full-mobile {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-mobile {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-mobile {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-mobile {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-mobile {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-mobile {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-mobile {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-mobile {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-mobile {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-mobile {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-mobile {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-mobile {\n      margin-left: 50%; }\n    .column.is-offset-one-third-mobile {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-mobile {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-mobile {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-mobile {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-mobile {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-mobile {\n      margin-left: 80%; }\n    .column.is-0-mobile {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-mobile {\n      margin-left: 0%; }\n    .column.is-1-mobile {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-mobile {\n      margin-left: 8.33333%; }\n    .column.is-2-mobile {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-mobile {\n      margin-left: 16.66667%; }\n    .column.is-3-mobile {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-mobile {\n      margin-left: 25%; }\n    .column.is-4-mobile {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-mobile {\n      margin-left: 33.33333%; }\n    .column.is-5-mobile {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-mobile {\n      margin-left: 41.66667%; }\n    .column.is-6-mobile {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-mobile {\n      margin-left: 50%; }\n    .column.is-7-mobile {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-mobile {\n      margin-left: 58.33333%; }\n    .column.is-8-mobile {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-mobile {\n      margin-left: 66.66667%; }\n    .column.is-9-mobile {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-mobile {\n      margin-left: 75%; }\n    .column.is-10-mobile {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-mobile {\n      margin-left: 83.33333%; }\n    .column.is-11-mobile {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-mobile {\n      margin-left: 91.66667%; }\n    .column.is-12-mobile {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-mobile {\n      margin-left: 100%; } }\n@media screen and (min-width: 769px), print {\n    .column.is-narrow, .column.is-narrow-tablet {\n      flex: none; }\n    .column.is-full, .column.is-full-tablet {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters, .column.is-three-quarters-tablet {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds, .column.is-two-thirds-tablet {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half, .column.is-half-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third, .column.is-one-third-tablet {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter, .column.is-one-quarter-tablet {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth, .column.is-one-fifth-tablet {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths, .column.is-two-fifths-tablet {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths, .column.is-three-fifths-tablet {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths, .column.is-four-fifths-tablet {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%; }\n    .column.is-offset-half, .column.is-offset-half-tablet {\n      margin-left: 50%; }\n    .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n      margin-left: 80%; }\n    .column.is-0, .column.is-0-tablet {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0, .column.is-offset-0-tablet {\n      margin-left: 0%; }\n    .column.is-1, .column.is-1-tablet {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1, .column.is-offset-1-tablet {\n      margin-left: 8.33333%; }\n    .column.is-2, .column.is-2-tablet {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2, .column.is-offset-2-tablet {\n      margin-left: 16.66667%; }\n    .column.is-3, .column.is-3-tablet {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3, .column.is-offset-3-tablet {\n      margin-left: 25%; }\n    .column.is-4, .column.is-4-tablet {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4, .column.is-offset-4-tablet {\n      margin-left: 33.33333%; }\n    .column.is-5, .column.is-5-tablet {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5, .column.is-offset-5-tablet {\n      margin-left: 41.66667%; }\n    .column.is-6, .column.is-6-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6, .column.is-offset-6-tablet {\n      margin-left: 50%; }\n    .column.is-7, .column.is-7-tablet {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7, .column.is-offset-7-tablet {\n      margin-left: 58.33333%; }\n    .column.is-8, .column.is-8-tablet {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8, .column.is-offset-8-tablet {\n      margin-left: 66.66667%; }\n    .column.is-9, .column.is-9-tablet {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9, .column.is-offset-9-tablet {\n      margin-left: 75%; }\n    .column.is-10, .column.is-10-tablet {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10, .column.is-offset-10-tablet {\n      margin-left: 83.33333%; }\n    .column.is-11, .column.is-11-tablet {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11, .column.is-offset-11-tablet {\n      margin-left: 91.66667%; }\n    .column.is-12, .column.is-12-tablet {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12, .column.is-offset-12-tablet {\n      margin-left: 100%; } }\n@media screen and (max-width: 1023px) {\n    .column.is-narrow-touch {\n      flex: none; }\n    .column.is-full-touch {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-touch {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-touch {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-touch {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-touch {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-touch {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-touch {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-touch {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-touch {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-touch {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-touch {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-touch {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-touch {\n      margin-left: 50%; }\n    .column.is-offset-one-third-touch {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-touch {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-touch {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-touch {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-touch {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-touch {\n      margin-left: 80%; }\n    .column.is-0-touch {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-touch {\n      margin-left: 0%; }\n    .column.is-1-touch {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-touch {\n      margin-left: 8.33333%; }\n    .column.is-2-touch {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-touch {\n      margin-left: 16.66667%; }\n    .column.is-3-touch {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-touch {\n      margin-left: 25%; }\n    .column.is-4-touch {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-touch {\n      margin-left: 33.33333%; }\n    .column.is-5-touch {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-touch {\n      margin-left: 41.66667%; }\n    .column.is-6-touch {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-touch {\n      margin-left: 50%; }\n    .column.is-7-touch {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-touch {\n      margin-left: 58.33333%; }\n    .column.is-8-touch {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-touch {\n      margin-left: 66.66667%; }\n    .column.is-9-touch {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-touch {\n      margin-left: 75%; }\n    .column.is-10-touch {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-touch {\n      margin-left: 83.33333%; }\n    .column.is-11-touch {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-touch {\n      margin-left: 91.66667%; }\n    .column.is-12-touch {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-touch {\n      margin-left: 100%; } }\n@media screen and (min-width: 1024px) {\n    .column.is-narrow-desktop {\n      flex: none; }\n    .column.is-full-desktop {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-desktop {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-desktop {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-desktop {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-desktop {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-desktop {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-desktop {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-desktop {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-desktop {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-desktop {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-desktop {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-desktop {\n      margin-left: 50%; }\n    .column.is-offset-one-third-desktop {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-desktop {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-desktop {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-desktop {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-desktop {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-desktop {\n      margin-left: 80%; }\n    .column.is-0-desktop {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-desktop {\n      margin-left: 0%; }\n    .column.is-1-desktop {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-desktop {\n      margin-left: 8.33333%; }\n    .column.is-2-desktop {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-desktop {\n      margin-left: 16.66667%; }\n    .column.is-3-desktop {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-desktop {\n      margin-left: 25%; }\n    .column.is-4-desktop {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-desktop {\n      margin-left: 33.33333%; }\n    .column.is-5-desktop {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-desktop {\n      margin-left: 41.66667%; }\n    .column.is-6-desktop {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-desktop {\n      margin-left: 50%; }\n    .column.is-7-desktop {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-desktop {\n      margin-left: 58.33333%; }\n    .column.is-8-desktop {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-desktop {\n      margin-left: 66.66667%; }\n    .column.is-9-desktop {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-desktop {\n      margin-left: 75%; }\n    .column.is-10-desktop {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-desktop {\n      margin-left: 83.33333%; }\n    .column.is-11-desktop {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-desktop {\n      margin-left: 91.66667%; }\n    .column.is-12-desktop {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-desktop {\n      margin-left: 100%; } }\n@media screen and (min-width: 1216px) {\n    .column.is-narrow-widescreen {\n      flex: none; }\n    .column.is-full-widescreen {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-widescreen {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-widescreen {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-widescreen {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-widescreen {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-widescreen {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-widescreen {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-widescreen {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-widescreen {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-widescreen {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-widescreen {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-widescreen {\n      margin-left: 50%; }\n    .column.is-offset-one-third-widescreen {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-widescreen {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-widescreen {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-widescreen {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-widescreen {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-widescreen {\n      margin-left: 80%; }\n    .column.is-0-widescreen {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-widescreen {\n      margin-left: 0%; }\n    .column.is-1-widescreen {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-widescreen {\n      margin-left: 8.33333%; }\n    .column.is-2-widescreen {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-widescreen {\n      margin-left: 16.66667%; }\n    .column.is-3-widescreen {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-widescreen {\n      margin-left: 25%; }\n    .column.is-4-widescreen {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-widescreen {\n      margin-left: 33.33333%; }\n    .column.is-5-widescreen {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-widescreen {\n      margin-left: 41.66667%; }\n    .column.is-6-widescreen {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-widescreen {\n      margin-left: 50%; }\n    .column.is-7-widescreen {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-widescreen {\n      margin-left: 58.33333%; }\n    .column.is-8-widescreen {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-widescreen {\n      margin-left: 66.66667%; }\n    .column.is-9-widescreen {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-widescreen {\n      margin-left: 75%; }\n    .column.is-10-widescreen {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-widescreen {\n      margin-left: 83.33333%; }\n    .column.is-11-widescreen {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-widescreen {\n      margin-left: 91.66667%; }\n    .column.is-12-widescreen {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-widescreen {\n      margin-left: 100%; } }\n@media screen and (min-width: 1408px) {\n    .column.is-narrow-fullhd {\n      flex: none; }\n    .column.is-full-fullhd {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-fullhd {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-fullhd {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-fullhd {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-fullhd {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-fullhd {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-fullhd {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-fullhd {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-fullhd {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-fullhd {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-fullhd {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-fullhd {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-fullhd {\n      margin-left: 50%; }\n    .column.is-offset-one-third-fullhd {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-fullhd {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-fullhd {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-fullhd {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-fullhd {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-fullhd {\n      margin-left: 80%; }\n    .column.is-0-fullhd {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-fullhd {\n      margin-left: 0%; }\n    .column.is-1-fullhd {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-fullhd {\n      margin-left: 8.33333%; }\n    .column.is-2-fullhd {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-fullhd {\n      margin-left: 16.66667%; }\n    .column.is-3-fullhd {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-fullhd {\n      margin-left: 25%; }\n    .column.is-4-fullhd {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-fullhd {\n      margin-left: 33.33333%; }\n    .column.is-5-fullhd {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-fullhd {\n      margin-left: 41.66667%; }\n    .column.is-6-fullhd {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-fullhd {\n      margin-left: 50%; }\n    .column.is-7-fullhd {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-fullhd {\n      margin-left: 58.33333%; }\n    .column.is-8-fullhd {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-fullhd {\n      margin-left: 66.66667%; }\n    .column.is-9-fullhd {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-fullhd {\n      margin-left: 75%; }\n    .column.is-10-fullhd {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-fullhd {\n      margin-left: 83.33333%; }\n    .column.is-11-fullhd {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-fullhd {\n      margin-left: 91.66667%; }\n    .column.is-12-fullhd {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-fullhd {\n      margin-left: 100%; } }\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem; }\n.columns:last-child {\n    margin-bottom: -0.75rem; }\n.columns:not(:last-child) {\n    margin-bottom: calc(1.5rem - 0.75rem); }\n.columns.is-centered {\n    justify-content: center; }\n.columns.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0; }\n.columns.is-gapless > .column {\n      margin: 0;\n      padding: 0 !important; }\n.columns.is-gapless:not(:last-child) {\n      margin-bottom: 1.5rem; }\n.columns.is-gapless:last-child {\n      margin-bottom: 0; }\n.columns.is-mobile {\n    display: flex; }\n.columns.is-multiline {\n    flex-wrap: wrap; }\n.columns.is-vcentered {\n    align-items: center; }\n@media screen and (min-width: 769px), print {\n    .columns:not(.is-desktop) {\n      display: flex; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-desktop {\n      display: flex; } }\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap)); }\n.columns.is-variable .column {\n    padding-left: var(--columnGap);\n    padding-right: var(--columnGap); }\n.columns.is-variable.is-0 {\n    --columnGap: 0rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-0-mobile {\n      --columnGap: 0rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-0-tablet {\n      --columnGap: 0rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-0-tablet-only {\n      --columnGap: 0rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-0-touch {\n      --columnGap: 0rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-0-desktop {\n      --columnGap: 0rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-0-desktop-only {\n      --columnGap: 0rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-0-widescreen {\n      --columnGap: 0rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-0-widescreen-only {\n      --columnGap: 0rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-0-fullhd {\n      --columnGap: 0rem; } }\n.columns.is-variable.is-1 {\n    --columnGap: 0.25rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-1-mobile {\n      --columnGap: 0.25rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-1-tablet {\n      --columnGap: 0.25rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-1-tablet-only {\n      --columnGap: 0.25rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-1-touch {\n      --columnGap: 0.25rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-1-desktop {\n      --columnGap: 0.25rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-1-desktop-only {\n      --columnGap: 0.25rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-1-widescreen {\n      --columnGap: 0.25rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-1-widescreen-only {\n      --columnGap: 0.25rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-1-fullhd {\n      --columnGap: 0.25rem; } }\n.columns.is-variable.is-2 {\n    --columnGap: 0.5rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-2-mobile {\n      --columnGap: 0.5rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-2-tablet {\n      --columnGap: 0.5rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-2-tablet-only {\n      --columnGap: 0.5rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-2-touch {\n      --columnGap: 0.5rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-2-desktop {\n      --columnGap: 0.5rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-2-desktop-only {\n      --columnGap: 0.5rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-2-widescreen {\n      --columnGap: 0.5rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-2-widescreen-only {\n      --columnGap: 0.5rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-2-fullhd {\n      --columnGap: 0.5rem; } }\n.columns.is-variable.is-3 {\n    --columnGap: 0.75rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-3-mobile {\n      --columnGap: 0.75rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-3-tablet {\n      --columnGap: 0.75rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-3-tablet-only {\n      --columnGap: 0.75rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-3-touch {\n      --columnGap: 0.75rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-3-desktop {\n      --columnGap: 0.75rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-3-desktop-only {\n      --columnGap: 0.75rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-3-widescreen {\n      --columnGap: 0.75rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-3-widescreen-only {\n      --columnGap: 0.75rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-3-fullhd {\n      --columnGap: 0.75rem; } }\n.columns.is-variable.is-4 {\n    --columnGap: 1rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-4-mobile {\n      --columnGap: 1rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-4-tablet {\n      --columnGap: 1rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-4-tablet-only {\n      --columnGap: 1rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-4-touch {\n      --columnGap: 1rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-4-desktop {\n      --columnGap: 1rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-4-desktop-only {\n      --columnGap: 1rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-4-widescreen {\n      --columnGap: 1rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-4-widescreen-only {\n      --columnGap: 1rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-4-fullhd {\n      --columnGap: 1rem; } }\n.columns.is-variable.is-5 {\n    --columnGap: 1.25rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-5-mobile {\n      --columnGap: 1.25rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-5-tablet {\n      --columnGap: 1.25rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-5-tablet-only {\n      --columnGap: 1.25rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-5-touch {\n      --columnGap: 1.25rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-5-desktop {\n      --columnGap: 1.25rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-5-desktop-only {\n      --columnGap: 1.25rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-5-widescreen {\n      --columnGap: 1.25rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-5-widescreen-only {\n      --columnGap: 1.25rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-5-fullhd {\n      --columnGap: 1.25rem; } }\n.columns.is-variable.is-6 {\n    --columnGap: 1.5rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-6-mobile {\n      --columnGap: 1.5rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-6-tablet {\n      --columnGap: 1.5rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-6-tablet-only {\n      --columnGap: 1.5rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-6-touch {\n      --columnGap: 1.5rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-6-desktop {\n      --columnGap: 1.5rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-6-desktop-only {\n      --columnGap: 1.5rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-6-widescreen {\n      --columnGap: 1.5rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-6-widescreen-only {\n      --columnGap: 1.5rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-6-fullhd {\n      --columnGap: 1.5rem; } }\n.columns.is-variable.is-7 {\n    --columnGap: 1.75rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-7-mobile {\n      --columnGap: 1.75rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-7-tablet {\n      --columnGap: 1.75rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-7-tablet-only {\n      --columnGap: 1.75rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-7-touch {\n      --columnGap: 1.75rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-7-desktop {\n      --columnGap: 1.75rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-7-desktop-only {\n      --columnGap: 1.75rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-7-widescreen {\n      --columnGap: 1.75rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-7-widescreen-only {\n      --columnGap: 1.75rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-7-fullhd {\n      --columnGap: 1.75rem; } }\n.columns.is-variable.is-8 {\n    --columnGap: 2rem; }\n@media screen and (max-width: 768px) {\n    .columns.is-variable.is-8-mobile {\n      --columnGap: 2rem; } }\n@media screen and (min-width: 769px), print {\n    .columns.is-variable.is-8-tablet {\n      --columnGap: 2rem; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-8-tablet-only {\n      --columnGap: 2rem; } }\n@media screen and (max-width: 1023px) {\n    .columns.is-variable.is-8-touch {\n      --columnGap: 2rem; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-variable.is-8-desktop {\n      --columnGap: 2rem; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-8-desktop-only {\n      --columnGap: 2rem; } }\n@media screen and (min-width: 1216px) {\n    .columns.is-variable.is-8-widescreen {\n      --columnGap: 2rem; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-8-widescreen-only {\n      --columnGap: 2rem; } }\n@media screen and (min-width: 1408px) {\n    .columns.is-variable.is-8-fullhd {\n      --columnGap: 2rem; } }\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content; }\n.tile.is-ancestor {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n    margin-top: -0.75rem; }\n.tile.is-ancestor:last-child {\n      margin-bottom: -0.75rem; }\n.tile.is-ancestor:not(:last-child) {\n      margin-bottom: 0.75rem; }\n.tile.is-child {\n    margin: 0 !important; }\n.tile.is-parent {\n    padding: 0.75rem; }\n.tile.is-vertical {\n    flex-direction: column; }\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n      margin-bottom: 1.5rem !important; }\n@media screen and (min-width: 769px), print {\n    .tile:not(.is-child) {\n      display: flex; }\n    .tile.is-1 {\n      flex: none;\n      width: 8.33333%; }\n    .tile.is-2 {\n      flex: none;\n      width: 16.66667%; }\n    .tile.is-3 {\n      flex: none;\n      width: 25%; }\n    .tile.is-4 {\n      flex: none;\n      width: 33.33333%; }\n    .tile.is-5 {\n      flex: none;\n      width: 41.66667%; }\n    .tile.is-6 {\n      flex: none;\n      width: 50%; }\n    .tile.is-7 {\n      flex: none;\n      width: 58.33333%; }\n    .tile.is-8 {\n      flex: none;\n      width: 66.66667%; }\n    .tile.is-9 {\n      flex: none;\n      width: 75%; }\n    .tile.is-10 {\n      flex: none;\n      width: 83.33333%; }\n    .tile.is-11 {\n      flex: none;\n      width: 91.66667%; }\n    .tile.is-12 {\n      flex: none;\n      width: 100%; } }\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n.hero .navbar {\n    background: none; }\n.hero .tabs ul {\n    border-bottom: none; }\n.hero.is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-white strong {\n      color: inherit; }\n.hero.is-white .title {\n      color: #0a0a0a; }\n.hero.is-white .subtitle {\n      color: rgba(10, 10, 10, 0.9); }\n.hero.is-white .subtitle a:not(.button),\n      .hero.is-white .subtitle strong {\n        color: #0a0a0a; }\n@media screen and (max-width: 1023px) {\n      .hero.is-white .navbar-menu {\n        background-color: white; } }\n.hero.is-white .navbar-item,\n    .hero.is-white .navbar-link {\n      color: rgba(10, 10, 10, 0.7); }\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n    .hero.is-white .navbar-link:hover,\n    .hero.is-white .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a; }\n.hero.is-white .tabs a {\n      color: #0a0a0a;\n      opacity: 0.9; }\n.hero.is-white .tabs a:hover {\n        opacity: 1; }\n.hero.is-white .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n      color: #0a0a0a; }\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white; }\n.hero.is-white.is-bold {\n      background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-white.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%); } }\n.hero.is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-black strong {\n      color: inherit; }\n.hero.is-black .title {\n      color: white; }\n.hero.is-black .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-black .subtitle a:not(.button),\n      .hero.is-black .subtitle strong {\n        color: white; }\n@media screen and (max-width: 1023px) {\n      .hero.is-black .navbar-menu {\n        background-color: #0a0a0a; } }\n.hero.is-black .navbar-item,\n    .hero.is-black .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n    .hero.is-black .navbar-link:hover,\n    .hero.is-black .navbar-link.is-active {\n      background-color: black;\n      color: white; }\n.hero.is-black .tabs a {\n      color: white;\n      opacity: 0.9; }\n.hero.is-black .tabs a:hover {\n        opacity: 1; }\n.hero.is-black .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n      color: white; }\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a; }\n.hero.is-black.is-bold {\n      background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-black.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); } }\n.hero.is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-light strong {\n      color: inherit; }\n.hero.is-light .title {\n      color: #363636; }\n.hero.is-light .subtitle {\n      color: rgba(54, 54, 54, 0.9); }\n.hero.is-light .subtitle a:not(.button),\n      .hero.is-light .subtitle strong {\n        color: #363636; }\n@media screen and (max-width: 1023px) {\n      .hero.is-light .navbar-menu {\n        background-color: whitesmoke; } }\n.hero.is-light .navbar-item,\n    .hero.is-light .navbar-link {\n      color: rgba(54, 54, 54, 0.7); }\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n    .hero.is-light .navbar-link:hover,\n    .hero.is-light .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636; }\n.hero.is-light .tabs a {\n      color: #363636;\n      opacity: 0.9; }\n.hero.is-light .tabs a:hover {\n        opacity: 1; }\n.hero.is-light .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n      color: #363636; }\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke; }\n.hero.is-light.is-bold {\n      background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-light.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); } }\n.hero.is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-dark strong {\n      color: inherit; }\n.hero.is-dark .title {\n      color: whitesmoke; }\n.hero.is-dark .subtitle {\n      color: rgba(245, 245, 245, 0.9); }\n.hero.is-dark .subtitle a:not(.button),\n      .hero.is-dark .subtitle strong {\n        color: whitesmoke; }\n@media screen and (max-width: 1023px) {\n      .hero.is-dark .navbar-menu {\n        background-color: #363636; } }\n.hero.is-dark .navbar-item,\n    .hero.is-dark .navbar-link {\n      color: rgba(245, 245, 245, 0.7); }\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n    .hero.is-dark .navbar-link:hover,\n    .hero.is-dark .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke; }\n.hero.is-dark .tabs a {\n      color: whitesmoke;\n      opacity: 0.9; }\n.hero.is-dark .tabs a:hover {\n        opacity: 1; }\n.hero.is-dark .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n      color: whitesmoke; }\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636; }\n.hero.is-dark.is-bold {\n      background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-dark.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); } }\n.hero.is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-primary strong {\n      color: inherit; }\n.hero.is-primary .title {\n      color: #fff; }\n.hero.is-primary .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-primary .subtitle a:not(.button),\n      .hero.is-primary .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-primary .navbar-menu {\n        background-color: #00d1b2; } }\n.hero.is-primary .navbar-item,\n    .hero.is-primary .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n    .hero.is-primary .navbar-link:hover,\n    .hero.is-primary .navbar-link.is-active {\n      background-color: #00b89c;\n      color: #fff; }\n.hero.is-primary .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-primary .tabs a:hover {\n        opacity: 1; }\n.hero.is-primary .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #00d1b2; }\n.hero.is-primary.is-bold {\n      background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-primary.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%); } }\n.hero.is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-link strong {\n      color: inherit; }\n.hero.is-link .title {\n      color: #fff; }\n.hero.is-link .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-link .subtitle a:not(.button),\n      .hero.is-link .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-link .navbar-menu {\n        background-color: #3273dc; } }\n.hero.is-link .navbar-item,\n    .hero.is-link .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n    .hero.is-link .navbar-link:hover,\n    .hero.is-link .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff; }\n.hero.is-link .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-link .tabs a:hover {\n        opacity: 1; }\n.hero.is-link .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #3273dc; }\n.hero.is-link.is-bold {\n      background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-link.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%); } }\n.hero.is-info {\n    background-color: #209cee;\n    color: #fff; }\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-info strong {\n      color: inherit; }\n.hero.is-info .title {\n      color: #fff; }\n.hero.is-info .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-info .subtitle a:not(.button),\n      .hero.is-info .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-info .navbar-menu {\n        background-color: #209cee; } }\n.hero.is-info .navbar-item,\n    .hero.is-info .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n    .hero.is-info .navbar-link:hover,\n    .hero.is-info .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff; }\n.hero.is-info .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-info .tabs a:hover {\n        opacity: 1; }\n.hero.is-info .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #209cee; }\n.hero.is-info.is-bold {\n      background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-info.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%); } }\n.hero.is-success {\n    background-color: #23d160;\n    color: #fff; }\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-success strong {\n      color: inherit; }\n.hero.is-success .title {\n      color: #fff; }\n.hero.is-success .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-success .subtitle a:not(.button),\n      .hero.is-success .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-success .navbar-menu {\n        background-color: #23d160; } }\n.hero.is-success .navbar-item,\n    .hero.is-success .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n    .hero.is-success .navbar-link:hover,\n    .hero.is-success .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff; }\n.hero.is-success .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-success .tabs a:hover {\n        opacity: 1; }\n.hero.is-success .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #23d160; }\n.hero.is-success.is-bold {\n      background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-success.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%); } }\n.hero.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-warning strong {\n      color: inherit; }\n.hero.is-warning .title {\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning .subtitle {\n      color: rgba(0, 0, 0, 0.9); }\n.hero.is-warning .subtitle a:not(.button),\n      .hero.is-warning .subtitle strong {\n        color: rgba(0, 0, 0, 0.7); }\n@media screen and (max-width: 1023px) {\n      .hero.is-warning .navbar-menu {\n        background-color: #ffdd57; } }\n.hero.is-warning .navbar-item,\n    .hero.is-warning .navbar-link {\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n    .hero.is-warning .navbar-link:hover,\n    .hero.is-warning .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning .tabs a {\n      color: rgba(0, 0, 0, 0.7);\n      opacity: 0.9; }\n.hero.is-warning .tabs a:hover {\n        opacity: 1; }\n.hero.is-warning .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57; }\n.hero.is-warning.is-bold {\n      background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-warning.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%); } }\n.hero.is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n    .hero.is-danger strong {\n      color: inherit; }\n.hero.is-danger .title {\n      color: #fff; }\n.hero.is-danger .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-danger .subtitle a:not(.button),\n      .hero.is-danger .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-danger .navbar-menu {\n        background-color: #ff3860; } }\n.hero.is-danger .navbar-item,\n    .hero.is-danger .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n    .hero.is-danger .navbar-link:hover,\n    .hero.is-danger .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff; }\n.hero.is-danger .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-danger .tabs a:hover {\n        opacity: 1; }\n.hero.is-danger .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #ff3860; }\n.hero.is-danger.is-bold {\n      background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-danger.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%); } }\n.hero.is-small .hero-body {\n    padding-bottom: 1.5rem;\n    padding-top: 1.5rem; }\n@media screen and (min-width: 769px), print {\n    .hero.is-medium .hero-body {\n      padding-bottom: 9rem;\n      padding-top: 9rem; } }\n@media screen and (min-width: 769px), print {\n    .hero.is-large .hero-body {\n      padding-bottom: 18rem;\n      padding-top: 18rem; } }\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n    align-items: center;\n    display: flex; }\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n      flex-grow: 1;\n      flex-shrink: 1; }\n.hero.is-halfheight {\n    min-height: 50vh; }\n.hero.is-fullheight {\n    min-height: 100vh; }\n.hero-video {\n  overflow: hidden; }\n.hero-video video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0); }\n.hero-video.is-transparent {\n    opacity: 0.3; }\n@media screen and (max-width: 768px) {\n    .hero-video {\n      display: none; } }\n.hero-buttons {\n  margin-top: 1.5rem; }\n@media screen and (max-width: 768px) {\n    .hero-buttons .button {\n      display: flex; }\n      .hero-buttons .button:not(:last-child) {\n        margin-bottom: 0.75rem; } }\n@media screen and (min-width: 769px), print {\n    .hero-buttons {\n      display: flex;\n      justify-content: center; }\n      .hero-buttons .button:not(:last-child) {\n        margin-right: 1.5rem; } }\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0; }\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem; }\n.section {\n  padding: 3rem 1.5rem; }\n@media screen and (min-width: 1024px) {\n    .section.is-medium {\n      padding: 9rem 1.5rem; }\n    .section.is-large {\n      padding: 18rem 1.5rem; } }\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem; }\n", "",{"version":3,"sources":["/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/bulma.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/utilities/animations.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/utilities/mixins.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/utilities/initial-variables.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/utilities/controls.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/base/minireset.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/base/generic.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/base/helpers.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/box.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/button.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/utilities/functions.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/container.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/content.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/icon.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/image.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/notification.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/progress.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/table.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/tag.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/title.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/elements/other.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/form/shared.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/form/input-textarea.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/form/checkbox-radio.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/form/select.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/form/file.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/form/tools.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/breadcrumb.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/card.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/dropdown.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/level.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/list.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/media.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/menu.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/message.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/modal.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/navbar.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/pagination.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/panel.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/components/tabs.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/grid/columns.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/grid/tiles.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/layout/hero.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/layout/section.sass","/Users/dthtien/Workspace/youtube_shared/node_modules/bulma/sass/layout/footer.sass"],"names":[],"mappings":"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9DtC;EKgEE;IACE,yBAA+B,EAAA,EAAG;AL7DtC;EK+DE;IACE,yBAA+B,EAAA,EAAG;AL5DtC;EK8DE;IACE,yBAA+B,EAAA,EAAG;AL1DpC;EK4DA;IACE,yBAA+B,EAAA,EAAG;ALnDpC;EKqDA;IACE,yBAA+B,EAAA,EAAG;ALjDpC;EKmDA;IACE,yBAA+B,EAAA,EAAG;AL1CpC;EK4CA;IACE,yBAA+B,EAAA,EAAG;AA5BtC;EACE,wBAA+B,EAAA;ALhEjC;EKkEE;IACE,wBAA+B,EAAA,EAAG;AL/DtC;EKiEE;IACE,wBAA+B,EAAA,EAAG;AL9DtC;EKgEE;IACE,wBAA+B,EAAA,EAAG;AL7DtC;EK+DE;IACE,wBAA+B,EAAA,EAAG;AL5DtC;EK8DE;IACE,wBAA+B,EAAA,EAAG;AL1DpC;EK4DA;IACE,wBAA+B,EAAA,EAAG;ALnDpC;EKqDA;IACE,wBAA+B,EAAA,EAAG;ALjDpC;EKmDA;IACE,wBAA+B,EAAA,EAAG;AL1CpC;EK4CA;IACE,wBAA+B,EAAA,EAAG;AA5BtC;EACE,0BAA+B,EAAA;ALhEjC;EKkEE;IACE,0BAA+B,EAAA,EAAG;AL/DtC;EKiEE;IACE,0BAA+B,EAAA,EAAG;AL9DtC;EKgEE;IACE,0BAA+B,EAAA,EAAG;AL7DtC;EK+DE;IACE,0BAA+B,EAAA,EAAG;AL5DtC;EK8DE;IACE,0BAA+B,EAAA,EAAG;AL1DpC;EK4DA;IACE,0BAA+B,EAAA,EAAG;ALnDpC;EKqDA;IACE,0BAA+B,EAAA,EAAG;ALjDpC;EKmDA;IACE,0BAA+B,EAAA,EAAG;AL1CpC;EK4CA;IACE,0BAA+B,EAAA,EAAG;AA5BtC;EACE,gCAA+B,EAAA;ALhEjC;EKkEE;IACE,gCAA+B,EAAA,EAAG;AL/DtC;EKiEE;IACE,gCAA+B,EAAA,EAAG;AL9DtC;EKgEE;IACE,gCAA+B,EAAA,EAAG;AL7DtC;EK+DE;IACE,gCAA+B,EAAA,EAAG;AL5DtC;EK8DE;IACE,gCAA+B,EAAA,EAAG;AL1DpC;EK4DA;IACE,gCAA+B,EAAA,EAAG;ALnDpC;EKqDA;IACE,gCAA+B,EAAA,EAAG;ALjDpC;EKm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","file":"bulma.sass","sourcesContent":["@charset \"utf-8\";\n/*! bulma.io v0.7.5 | MIT License | github.com/jgthms/bulma */\n@import \"sass/utilities/_all\";\n@import \"sass/base/_all\";\n@import \"sass/elements/_all\";\n@import \"sass/form/_all\";\n@import \"sass/components/_all\";\n@import \"sass/grid/_all\";\n@import \"sass/layout/_all\";\n","@keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n","@import \"initial-variables\";\n\n@mixin clearfix {\n  &::after {\n    clear: both;\n    content: \" \";\n    display: table; } }\n\n@mixin center($width, $height: 0) {\n  position: absolute;\n  @if $height != 0 {\n    left: calc(50% - (#{$width} / 2));\n    top: calc(50% - (#{$height} / 2)); }\n  @else {\n    left: calc(50% - (#{$width} / 2));\n    top: calc(50% - (#{$width} / 2)); } }\n\n@mixin fa($size, $dimensions) {\n  display: inline-block;\n  font-size: $size;\n  height: $dimensions;\n  line-height: $dimensions;\n  text-align: center;\n  vertical-align: top;\n  width: $dimensions; }\n\n@mixin hamburger($dimensions) {\n  cursor: pointer;\n  display: block;\n  height: $dimensions;\n  position: relative;\n  width: $dimensions;\n  span {\n    background-color: currentColor;\n    display: block;\n    height: 1px;\n    left: calc(50% - 8px);\n    position: absolute;\n    transform-origin: center;\n    transition-duration: $speed;\n    transition-property: background-color, opacity, transform;\n    transition-timing-function: $easing;\n    width: 16px;\n    &:nth-child(1) {\n      top: calc(50% - 6px); }\n    &:nth-child(2) {\n      top: calc(50% - 1px); }\n    &:nth-child(3) {\n      top: calc(50% + 4px); } }\n  &:hover {\n    background-color: rgba(black, 0.05); }\n  // Modifers\n  &.is-active {\n    span {\n      &:nth-child(1) {\n        transform: translateY(5px) rotate(45deg); }\n      &:nth-child(2) {\n        opacity: 0; }\n      &:nth-child(3) {\n        transform: translateY(-5px) rotate(-45deg); } } } }\n\n@mixin overflow-touch {\n  -webkit-overflow-scrolling: touch; }\n\n@mixin placeholder {\n  $placeholders: ':-moz' ':-webkit-input' '-moz' '-ms-input';\n  @each $placeholder in $placeholders {\n    &:#{$placeholder}-placeholder {\n      @content; } } }\n\n// Responsiveness\n\n@mixin from($device) {\n  @media screen and (min-width: $device) {\n    @content; } }\n\n@mixin until($device) {\n  @media screen and (max-width: $device - 1px) {\n    @content; } }\n\n@mixin mobile {\n  @media screen and (max-width: $tablet - 1px) {\n    @content; } }\n\n@mixin tablet {\n  @media screen and (min-width: $tablet), print {\n    @content; } }\n\n@mixin tablet-only {\n  @media screen and (min-width: $tablet) and (max-width: $desktop - 1px) {\n    @content; } }\n\n@mixin touch {\n  @media screen and (max-width: $desktop - 1px) {\n    @content; } }\n\n@mixin desktop {\n  @media screen and (min-width: $desktop) {\n    @content; } }\n\n@mixin desktop-only {\n  @if $widescreen-enabled {\n    @media screen and (min-width: $desktop) and (max-width: $widescreen - 1px) {\n      @content; } } }\n\n@mixin until-widescreen {\n  @if $widescreen-enabled {\n    @media screen and (max-width: $widescreen - 1px) {\n      @content; } } }\n\n@mixin widescreen {\n  @if $widescreen-enabled {\n    @media screen and (min-width: $widescreen) {\n      @content; } } }\n\n@mixin widescreen-only {\n  @if $widescreen-enabled and $fullhd-enabled {\n    @media screen and (min-width: $widescreen) and (max-width: $fullhd - 1px) {\n      @content; } } }\n\n@mixin until-fullhd {\n  @if $fullhd-enabled {\n    @media screen and (max-width: $fullhd - 1px) {\n      @content; } } }\n\n@mixin fullhd {\n  @if $fullhd-enabled {\n    @media screen and (min-width: $fullhd) {\n      @content; } } }\n\n// Placeholders\n\n@mixin unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n%unselectable {\n  @include unselectable; }\n\n@mixin arrow($color: transparent) {\n  border: 3px solid $color;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em; }\n\n%arrow {\n  @include arrow; }\n\n@mixin block($spacing: $block-spacing) {\n  &:not(:last-child) {\n    margin-bottom: $spacing; } }\n\n%block {\n  @include block; }\n\n@mixin delete {\n  @extend %unselectable;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba($black, 0.2);\n  border: none;\n  border-radius: $radius-rounded;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n  &::before,\n  &::after {\n    background-color: $white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center; }\n  &::before {\n    height: 2px;\n    width: 50%; }\n  &::after {\n    height: 50%;\n    width: 2px; }\n  &:hover,\n  &:focus {\n    background-color: rgba($black, 0.3); }\n  &:active {\n    background-color: rgba($black, 0.4); }\n  // Sizes\n  &.is-small {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px; }\n  &.is-medium {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px; }\n  &.is-large {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px; } }\n\n%delete {\n  @include delete; }\n\n@mixin loader {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid $grey-lighter;\n  border-radius: $radius-rounded;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n\n%loader {\n  @include loader; }\n\n@mixin overlay($offset: 0) {\n  bottom: $offset;\n  left: $offset;\n  position: absolute;\n  right: $offset;\n  top: $offset; }\n\n%overlay {\n  @include overlay; }\n","// Colors\n\n$black:        hsl(0, 0%, 4%) !default;\n$black-bis:    hsl(0, 0%, 7%) !default;\n$black-ter:    hsl(0, 0%, 14%) !default;\n\n$grey-darker:  hsl(0, 0%, 21%) !default;\n$grey-dark:    hsl(0, 0%, 29%) !default;\n$grey:         hsl(0, 0%, 48%) !default;\n$grey-light:   hsl(0, 0%, 71%) !default;\n$grey-lighter: hsl(0, 0%, 86%) !default;\n\n$white-ter:    hsl(0, 0%, 96%) !default;\n$white-bis:    hsl(0, 0%, 98%) !default;\n$white:        hsl(0, 0%, 100%) !default;\n\n$orange:       hsl(14,  100%, 53%) !default;\n$yellow:       hsl(48,  100%, 67%) !default;\n$green:        hsl(141, 71%,  48%) !default;\n$turquoise:    hsl(171, 100%, 41%) !default;\n$cyan:         hsl(204, 86%,  53%) !default;\n$blue:         hsl(217, 71%,  53%) !default;\n$purple:       hsl(271, 100%, 71%) !default;\n$red:          hsl(348, 100%, 61%) !default;\n\n// Typography\n\n$family-sans-serif: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !default;\n$family-monospace: monospace !default;\n$render-mode: optimizeLegibility !default;\n\n$size-1: 3rem !default;\n$size-2: 2.5rem !default;\n$size-3: 2rem !default;\n$size-4: 1.5rem !default;\n$size-5: 1.25rem !default;\n$size-6: 1rem !default;\n$size-7: 0.75rem !default;\n\n$weight-light: 300 !default;\n$weight-normal: 400 !default;\n$weight-medium: 500 !default;\n$weight-semibold: 600 !default;\n$weight-bold: 700 !default;\n\n// Spacing\n\n$block-spacing: 1.5rem !default;\n\n// Responsiveness\n\n// The container horizontal gap, which acts as the offset for breakpoints\n$gap: 32px !default;\n// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16\n$tablet: 769px !default;\n// 960px container + 4rem\n$desktop: 960px + (2 * $gap) !default;\n// 1152px container + 4rem\n$widescreen: 1152px + (2 * $gap) !default;\n$widescreen-enabled: true !default;\n// 1344px container + 4rem\n$fullhd: 1344px + (2 * $gap) !default;\n$fullhd-enabled: true !default;\n\n// Miscellaneous\n\n$easing: ease-out !default;\n$radius-small: 2px !default;\n$radius: 4px !default;\n$radius-large: 6px !default;\n$radius-rounded: 290486px !default;\n$speed: 86ms !default;\n\n// Flags\n\n$variable-columns: true !default;\n","$control-radius: $radius !default;\n$control-radius-small: $radius-small !default;\n\n$control-border-width: 1px !default;\n\n$control-height: 2.25em !default;\n$control-line-height: 1.5 !default;\n\n$control-padding-vertical: calc(0.375em - #{$control-border-width}) !default;\n$control-padding-horizontal: calc(0.625em - #{$control-border-width}) !default;\n\n@mixin control {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: $control-border-width solid transparent;\n  border-radius: $control-radius;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: $size-normal;\n  height: $control-height;\n  justify-content: flex-start;\n  line-height: $control-line-height;\n  padding-bottom: $control-padding-vertical;\n  padding-left: $control-padding-horizontal;\n  padding-right: $control-padding-horizontal;\n  padding-top: $control-padding-vertical;\n  position: relative;\n  vertical-align: top;\n  // States\n  &:focus,\n  &.is-focused,\n  &:active,\n  &.is-active {\n    outline: none; }\n  &[disabled],\n  fieldset[disabled] & {\n    cursor: not-allowed; } }\n\n%control {\n  @include control; }\n\n// The controls sizes use mixins so they can be used at different breakpoints\n@mixin control-small {\n  border-radius: $control-radius-small;\n  font-size: $size-small; }\n@mixin control-medium {\n  font-size: $size-medium; }\n@mixin control-large {\n  font-size: $size-large; }\n","/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */\n// Blocks\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0; }\n\n// Headings\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal; }\n\n// List\nul {\n  list-style: none; }\n\n// Form\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0; }\n\n// Box sizing\nhtml {\n  box-sizing: border-box; }\n\n* {\n  &,\n  &::before,\n  &::after {\n    box-sizing: inherit; } }\n\n// Media\nimg,\nembed,\niframe,\nobject,\nvideo {\n  height: auto;\n  max-width: 100%; }\n\naudio {\n  max-width: 100%; }\n\n// Iframe\niframe {\n  border: 0; }\n\n// Table\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0;\n  &:not([align]) {\n    text-align: left; } }\n","$body-background-color: $white !default;\n$body-size: 16px !default;\n$body-min-width: 300px !default;\n$body-rendering: optimizeLegibility !default;\n$body-family: $family-primary !default;\n$body-overflow-x: hidden !default;\n$body-overflow-y: scroll !default;\n\n$body-color: $text !default;\n$body-font-size: 1em !default;\n$body-weight: $weight-normal !default;\n$body-line-height: 1.5 !default;\n\n$code-family: $family-code !default;\n$code-padding: 0.25em 0.5em 0.25em !default;\n$code-weight: normal !default;\n$code-size: 0.875em !default;\n\n$small-font-size: 0.875em !default;\n\n$hr-background-color: $background !default;\n$hr-height: 2px !default;\n$hr-margin: 1.5rem 0 !default;\n\n$strong-color: $text-strong !default;\n$strong-weight: $weight-bold !default;\n\n$pre-font-size: 0.875em !default;\n$pre-padding: 1.25rem 1.5rem !default;\n$pre-code-font-size: 1em !default;\n\nhtml {\n  background-color: $body-background-color;\n  font-size: $body-size;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: $body-min-width;\n  overflow-x: $body-overflow-x;\n  overflow-y: $body-overflow-y;\n  text-rendering: $body-rendering;\n  text-size-adjust: 100%; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: $body-family; }\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: $code-family; }\n\nbody {\n  color: $body-color;\n  font-size: $body-font-size;\n  font-weight: $body-weight;\n  line-height: $body-line-height; }\n\n// Inline\n\na {\n  color: $link;\n  cursor: pointer;\n  text-decoration: none;\n  strong {\n    color: currentColor; }\n  &:hover {\n    color: $link-hover; } }\n\ncode {\n  background-color: $code-background;\n  color: $code;\n  font-size: $code-size;\n  font-weight: $code-weight;\n  padding: $code-padding; }\n\nhr {\n  background-color: $hr-background-color;\n  border: none;\n  display: block;\n  height: $hr-height;\n  margin: $hr-margin; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nsmall {\n  font-size: $small-font-size; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: $strong-color;\n  font-weight: $strong-weight; }\n\n// Block\n\nfieldset {\n  border: none; }\n\npre {\n  @include overflow-touch;\n  background-color: $pre-background;\n  color: $pre;\n  font-size: $pre-font-size;\n  overflow-x: auto;\n  padding: $pre-padding;\n  white-space: pre;\n  word-wrap: normal;\n  code {\n    background-color: transparent;\n    color: currentColor;\n    font-size: $pre-code-font-size;\n    padding: 0; } }\n\ntable {\n  td,\n  th {\n    vertical-align: top;\n    &:not([align]) {\n      text-align: left; } }\n  th {\n    color: $text-strong; } }\n","// Float\n\n.is-clearfix {\n  @include clearfix; }\n\n.is-pulled-left {\n  float: left !important; }\n\n.is-pulled-right {\n  float: right !important; }\n\n// Overflow\n\n.is-clipped {\n  overflow: hidden !important; }\n\n// Overlay\n\n.is-overlay {\n  @extend %overlay; }\n\n// Typography\n\n@mixin typography-size($target:'') {\n  @each $size in $sizes {\n    $i: index($sizes, $size);\n    .is-size-#{$i}#{if($target == '', '', '-' + $target)} {\n      font-size: $size !important; } } }\n\n@include typography-size();\n\n@include mobile {\n  @include typography-size('mobile'); }\n\n@include tablet {\n  @include typography-size('tablet'); }\n\n@include touch {\n  @include typography-size('touch'); }\n\n@include desktop {\n  @include typography-size('desktop'); }\n\n@include widescreen {\n  @include typography-size('widescreen'); }\n\n@include fullhd {\n  @include typography-size('fullhd'); }\n\n$alignments: ('centered': 'center', 'justified': 'justify', 'left': 'left', 'right': 'right');\n\n@each $alignment, $text-align in $alignments {\n  .has-text-#{$alignment} {\n    text-align: #{$text-align} !important; } }\n\n@each $alignment, $text-align in $alignments {\n  @include mobile {\n    .has-text-#{$alignment}-mobile {\n      text-align: #{$text-align} !important; } }\n  @include tablet {\n    .has-text-#{$alignment}-tablet {\n      text-align: #{$text-align} !important; } }\n  @include tablet-only {\n    .has-text-#{$alignment}-tablet-only {\n      text-align: #{$text-align} !important; } }\n  @include touch {\n    .has-text-#{$alignment}-touch {\n      text-align: #{$text-align} !important; } }\n  @include desktop {\n    .has-text-#{$alignment}-desktop {\n      text-align: #{$text-align} !important; } }\n  @include desktop-only {\n    .has-text-#{$alignment}-desktop-only {\n      text-align: #{$text-align} !important; } }\n  @include widescreen {\n    .has-text-#{$alignment}-widescreen {\n      text-align: #{$text-align} !important; } }\n  @include widescreen-only {\n    .has-text-#{$alignment}-widescreen-only {\n      text-align: #{$text-align} !important; } }\n  @include fullhd {\n    .has-text-#{$alignment}-fullhd {\n      text-align: #{$text-align} !important; } } }\n\n.is-capitalized {\n  text-transform: capitalize !important; }\n\n.is-lowercase {\n  text-transform: lowercase !important; }\n\n.is-uppercase {\n  text-transform: uppercase !important; }\n\n.is-italic {\n  font-style: italic !important; }\n\n@each $name, $pair in $colors {\n  $color: nth($pair, 1);\n  .has-text-#{$name} {\n    color: $color !important; }\n  a.has-text-#{$name} {\n    &:hover,\n    &:focus {\n      color: darken($color, 10%) !important; } }\n  .has-background-#{$name} {\n    background-color: $color !important; } }\n\n@each $name, $shade in $shades {\n  .has-text-#{$name} {\n    color: $shade !important; }\n  .has-background-#{$name} {\n    background-color: $shade !important; } }\n\n.has-text-weight-light {\n  font-weight: $weight-light !important; }\n.has-text-weight-normal {\n  font-weight: $weight-normal !important; }\n.has-text-weight-medium {\n  font-weight: $weight-medium !important; }\n.has-text-weight-semibold {\n  font-weight: $weight-semibold !important; }\n.has-text-weight-bold {\n  font-weight: $weight-bold !important; }\n\n.is-family-primary {\n  font-family: $family-primary !important; }\n\n.is-family-secondary {\n  font-family: $family-secondary !important; }\n\n.is-family-sans-serif {\n  font-family: $family-sans-serif !important; }\n\n.is-family-monospace {\n  font-family: $family-monospace !important; }\n\n.is-family-code {\n  font-family: $family-code !important; }\n\n// Visibility\n\n$displays: 'block' 'flex' 'inline' 'inline-block' 'inline-flex';\n\n@each $display in $displays {\n  .is-#{$display} {\n    display: #{$display} !important; }\n  @include mobile {\n    .is-#{$display}-mobile {\n      display: #{$display} !important; } }\n  @include tablet {\n    .is-#{$display}-tablet {\n      display: #{$display} !important; } }\n  @include tablet-only {\n    .is-#{$display}-tablet-only {\n      display: #{$display} !important; } }\n  @include touch {\n    .is-#{$display}-touch {\n      display: #{$display} !important; } }\n  @include desktop {\n    .is-#{$display}-desktop {\n      display: #{$display} !important; } }\n  @include desktop-only {\n    .is-#{$display}-desktop-only {\n      display: #{$display} !important; } }\n  @include widescreen {\n    .is-#{$display}-widescreen {\n      display: #{$display} !important; } }\n  @include widescreen-only {\n    .is-#{$display}-widescreen-only {\n      display: #{$display} !important; } }\n  @include fullhd {\n    .is-#{$display}-fullhd {\n      display: #{$display} !important; } } }\n\n.is-hidden {\n  display: none !important; }\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important; }\n\n@include mobile {\n  .is-hidden-mobile {\n    display: none !important; } }\n\n@include tablet {\n  .is-hidden-tablet {\n    display: none !important; } }\n\n@include tablet-only {\n  .is-hidden-tablet-only {\n    display: none !important; } }\n\n@include touch {\n  .is-hidden-touch {\n    display: none !important; } }\n\n@include desktop {\n  .is-hidden-desktop {\n    display: none !important; } }\n\n@include desktop-only {\n  .is-hidden-desktop-only {\n    display: none !important; } }\n\n@include widescreen {\n  .is-hidden-widescreen {\n    display: none !important; } }\n\n@include widescreen-only {\n  .is-hidden-widescreen-only {\n    display: none !important; } }\n\n@include fullhd {\n  .is-hidden-fullhd {\n    display: none !important; } }\n\n.is-invisible {\n  visibility: hidden !important; }\n\n@include mobile {\n  .is-invisible-mobile {\n    visibility: hidden !important; } }\n\n@include tablet {\n  .is-invisible-tablet {\n    visibility: hidden !important; } }\n\n@include tablet-only {\n  .is-invisible-tablet-only {\n    visibility: hidden !important; } }\n\n@include touch {\n  .is-invisible-touch {\n    visibility: hidden !important; } }\n\n@include desktop {\n  .is-invisible-desktop {\n    visibility: hidden !important; } }\n\n@include desktop-only {\n  .is-invisible-desktop-only {\n    visibility: hidden !important; } }\n\n@include widescreen {\n  .is-invisible-widescreen {\n    visibility: hidden !important; } }\n\n@include widescreen-only {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important; } }\n\n@include fullhd {\n  .is-invisible-fullhd {\n    visibility: hidden !important; } }\n\n// Other\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-paddingless {\n  padding: 0 !important; }\n\n.is-radiusless {\n  border-radius: 0 !important; }\n\n.is-shadowless {\n  box-shadow: none !important; }\n\n.is-unselectable {\n  @extend %unselectable; }\n\n.is-relative {\n  position: relative !important; }\n","$box-color: $text !default;\n$box-background-color: $white !default;\n$box-radius: $radius-large !default;\n$box-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1) !default;\n$box-padding: 1.25rem !default;\n\n$box-link-hover-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px $link !default;\n$box-link-active-shadow: inset 0 1px 2px rgba($black, 0.2), 0 0 0 1px $link !default;\n\n.box {\n  @extend %block;\n  background-color: $box-background-color;\n  border-radius: $box-radius;\n  box-shadow: $box-shadow;\n  color: $box-color;\n  display: block;\n  padding: $box-padding; }\n\na.box {\n  &:hover,\n  &:focus {\n    box-shadow: $box-link-hover-shadow; }\n  &:active {\n    box-shadow: $box-link-active-shadow; } }\n","$button-color: $grey-darker !default;\n$button-background-color: $white !default;\n$button-family: false !default;\n\n$button-border-color: $grey-lighter !default;\n$button-border-width: $control-border-width !default;\n\n$button-padding-vertical: calc(0.375em - #{$button-border-width}) !default;\n$button-padding-horizontal: 0.75em !default;\n\n$button-hover-color: $link-hover !default;\n$button-hover-border-color: $link-hover-border !default;\n\n$button-focus-color: $link-focus !default;\n$button-focus-border-color: $link-focus-border !default;\n$button-focus-box-shadow-size: 0 0 0 0.125em !default;\n$button-focus-box-shadow-color: rgba($link, 0.25) !default;\n\n$button-active-color: $link-active !default;\n$button-active-border-color: $link-active-border !default;\n\n$button-text-color: $text !default;\n$button-text-hover-background-color: $background !default;\n$button-text-hover-color: $text-strong !default;\n\n$button-disabled-background-color: $white !default;\n$button-disabled-border-color: $grey-lighter !default;\n$button-disabled-shadow: none !default;\n$button-disabled-opacity: 0.5 !default;\n\n$button-static-color: $grey !default;\n$button-static-background-color: $white-ter !default;\n$button-static-border-color: $grey-lighter !default;\n\n// The button sizes use mixins so they can be used at different breakpoints\n@mixin button-small {\n  border-radius: $radius-small;\n  font-size: $size-small; }\n@mixin button-normal {\n  font-size: $size-normal; }\n@mixin button-medium {\n  font-size: $size-medium; }\n@mixin button-large {\n  font-size: $size-large; }\n\n.button {\n  @extend %control;\n  @extend %unselectable;\n  background-color: $button-background-color;\n  border-color: $button-border-color;\n  border-width: $button-border-width;\n  color: $button-color;\n  cursor: pointer;\n  @if $button-family {\n    font-family: $button-family; }\n  justify-content: center;\n  padding-bottom: $button-padding-vertical;\n  padding-left: $button-padding-horizontal;\n  padding-right: $button-padding-horizontal;\n  padding-top: $button-padding-vertical;\n  text-align: center;\n  white-space: nowrap;\n  strong {\n    color: inherit; }\n  .icon {\n    &,\n    &.is-small,\n    &.is-medium,\n    &.is-large {\n      height: 1.5em;\n      width: 1.5em; }\n    &:first-child:not(:last-child) {\n      margin-left: calc(-0.375em - #{$button-border-width});\n      margin-right: 0.1875em; }\n    &:last-child:not(:first-child) {\n      margin-left: 0.1875em;\n      margin-right: calc(-0.375em - #{$button-border-width}); }\n    &:first-child:last-child {\n      margin-left: calc(-0.375em - #{$button-border-width});\n      margin-right: calc(-0.375em - #{$button-border-width}); } }\n  // States\n  &:hover,\n  &.is-hovered {\n    border-color: $button-hover-border-color;\n    color: $button-hover-color; }\n  &:focus,\n  &.is-focused {\n    border-color: $button-focus-border-color;\n    color: $button-focus-color;\n    &:not(:active) {\n      box-shadow: $button-focus-box-shadow-size $button-focus-box-shadow-color; } }\n  &:active,\n  &.is-active {\n    border-color: $button-active-border-color;\n    color: $button-active-color; }\n  // Colors\n  &.is-text {\n    background-color: transparent;\n    border-color: transparent;\n    color: $button-text-color;\n    text-decoration: underline;\n    &:hover,\n    &.is-hovered,\n    &:focus,\n    &.is-focused {\n      background-color: $button-text-hover-background-color;\n      color: $button-text-hover-color; }\n    &:active,\n    &.is-active {\n      background-color: darken($button-text-hover-background-color, 5%);\n      color: $button-text-hover-color; }\n    &[disabled],\n    fieldset[disabled] & {\n      background-color: transparent;\n      border-color: transparent;\n      box-shadow: none; } }\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      border-color: transparent;\n      color: $color-invert;\n      &:hover,\n      &.is-hovered {\n        background-color: darken($color, 2.5%);\n        border-color: transparent;\n        color: $color-invert; }\n      &:focus,\n      &.is-focused {\n        border-color: transparent;\n        color: $color-invert;\n        &:not(:active) {\n          box-shadow: $button-focus-box-shadow-size rgba($color, 0.25); } }\n      &:active,\n      &.is-active {\n        background-color: darken($color, 5%);\n        border-color: transparent;\n        color: $color-invert; }\n      &[disabled],\n      fieldset[disabled] & {\n        background-color: $color;\n        border-color: transparent;\n        box-shadow: none; }\n      &.is-inverted {\n        background-color: $color-invert;\n        color: $color;\n        &:hover,\n        &.is-hovered {\n          background-color: darken($color-invert, 5%); }\n        &[disabled],\n        fieldset[disabled] & {\n          background-color: $color-invert;\n          border-color: transparent;\n          box-shadow: none;\n          color: $color; } }\n      &.is-loading {\n        &::after {\n          border-color: transparent transparent $color-invert $color-invert !important; } }\n      &.is-outlined {\n        background-color: transparent;\n        border-color: $color;\n        color: $color;\n        &:hover,\n        &.is-hovered,\n        &:focus,\n        &.is-focused {\n          background-color: $color;\n          border-color: $color;\n          color: $color-invert; }\n        &.is-loading {\n          &::after {\n            border-color: transparent transparent $color $color !important; }\n          &:hover,\n          &.is-hovered,\n          &:focus,\n          &.is-focused {\n            &::after {\n              border-color: transparent transparent $color-invert $color-invert !important; } } }\n        &[disabled],\n        fieldset[disabled] & {\n          background-color: transparent;\n          border-color: $color;\n          box-shadow: none;\n          color: $color; } }\n      &.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: $color-invert;\n        color: $color-invert;\n        &:hover,\n        &.is-hovered,\n        &:focus,\n        &.is-focused {\n          background-color: $color-invert;\n          color: $color; }\n        &.is-loading {\n          &:hover,\n          &.is-hovered,\n          &:focus,\n          &.is-focused {\n            &::after {\n              border-color: transparent transparent $color $color !important; } } }\n        &[disabled],\n        fieldset[disabled] & {\n          background-color: transparent;\n          border-color: $color-invert;\n          box-shadow: none;\n          color: $color-invert; } } } }\n  // Sizes\n  &.is-small {\n    @include button-small; }\n  &.is-normal {\n    @include button-normal; }\n  &.is-medium {\n    @include button-medium; }\n  &.is-large {\n    @include button-large; }\n  // Modifiers\n  &[disabled],\n  fieldset[disabled] & {\n    background-color: $button-disabled-background-color;\n    border-color: $button-disabled-border-color;\n    box-shadow: $button-disabled-shadow;\n    opacity: $button-disabled-opacity; }\n  &.is-fullwidth {\n    display: flex;\n    width: 100%; }\n  &.is-loading {\n    color: transparent !important;\n    pointer-events: none;\n    &::after {\n      @extend %loader;\n      @include center(1em);\n      position: absolute !important; } }\n  &.is-static {\n    background-color: $button-static-background-color;\n    border-color: $button-static-border-color;\n    color: $button-static-color;\n    box-shadow: none;\n    pointer-events: none; }\n  &.is-rounded {\n    border-radius: $radius-rounded;\n    padding-left: 1em;\n    padding-right: 1em; } }\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  .button {\n    margin-bottom: 0.5rem;\n    &:not(:last-child):not(.is-fullwidth) {\n      margin-right: 0.5rem; } }\n  &:last-child {\n    margin-bottom: -0.5rem; }\n  &:not(:last-child) {\n    margin-bottom: 1rem; }\n  // Sizes\n  &.are-small {\n    .button:not(.is-normal):not(.is-medium):not(.is-large) {\n      @include button-small; } }\n  &.are-medium {\n    .button:not(.is-small):not(.is-normal):not(.is-large) {\n      @include button-medium; } }\n  &.are-large {\n    .button:not(.is-small):not(.is-normal):not(.is-medium) {\n      @include button-large; } }\n  &.has-addons {\n    .button {\n      &:not(:first-child) {\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0; }\n      &:not(:last-child) {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n        margin-right: -1px; }\n      &:last-child {\n        margin-right: 0; }\n      &:hover,\n      &.is-hovered {\n        z-index: 2; }\n      &:focus,\n      &.is-focused,\n      &:active,\n      &.is-active,\n      &.is-selected {\n        z-index: 3;\n        &:hover {\n          z-index: 4; } }\n      &.is-expanded {\n        flex-grow: 1;\n        flex-shrink: 1; } } }\n  &.is-centered {\n    justify-content: center;\n    &:not(.has-addons) {\n      .button:not(.is-fullwidth) {\n        margin-left: 0.25rem;\n        margin-right: 0.25rem; } } }\n  &.is-right {\n    justify-content: flex-end;\n    &:not(.has-addons) {\n      .button:not(.is-fullwidth) {\n        margin-left: 0.25rem;\n        margin-right: 0.25rem; } } } }\n","@function mergeColorMaps($bulma-colors, $custom-colors) {\n  // we return at least bulma hardcoded colors\n  $merged-colors: $bulma-colors;\n\n  // we want a map as input\n  @if type-of($custom-colors) == 'map' {\n    @each $name, $components in $custom-colors {\n      // color name should be a string and colors pair a list with at least one element\n      @if type-of($name) == 'string' and (type-of($components) == 'list' or type-of($components) == 'color') and length($components) >= 1 {\n        $color-base: null;\n\n        // the param can either be a single color\n        // or a list of 2 colors\n        @if type-of($components) == 'color' {\n          $color-base: $components; }\n        @else if type-of($components) == 'list' {\n          $color-base: nth($components, 1); }\n\n        $color-invert: null;\n        // is an inverted color provided in the list\n        @if length($components) > 1 {\n          $color-invert: nth($components, 2); }\n\n        // we only want a color as base color\n        @if type-of($color-base) == 'color' {\n          // if inverted color is not provided or is not a color we compute it\n          @if type-of($color-invert) != 'color' {\n            $color-invert: findColorInvert($color-base); }\n\n          // we merge this colors elements as map with bulma colors (we can override them this way, no multiple definition for the same name)\n          $merged-colors: map_merge($merged-colors, ($name: ($color-base, $color-invert))); } } } }\n\n  @return $merged-colors; }\n\n@function powerNumber($number, $exp) {\n  $value: 1;\n  @if $exp > 0 {\n    @for $i from 1 through $exp {\n      $value: $value * $number; } }\n  @else if $exp < 0 {\n    @for $i from 1 through -$exp {\n      $value: $value / $number; } }\n  @return $value; }\n\n@function colorLuminance($color) {\n  $color-rgb: ('red': red($color),'green': green($color),'blue': blue($color));\n  @each $name, $value in $color-rgb {\n    $adjusted: 0;\n    $value: $value / 255;\n    @if $value < 0.03928 {\n      $value: $value / 12.92; }\n    @else {\n      $value: ($value + .055) / 1.055;\n      $value: powerNumber($value, 2); }\n    $color-rgb: map-merge($color-rgb, ($name: $value)); }\n  @return (map-get($color-rgb, 'red') * .2126) + (map-get($color-rgb, 'green') * .7152) + (map-get($color-rgb, 'blue') * .0722); }\n\n@function findColorInvert($color) {\n  @if (colorLuminance($color) > 0.55) {\n    @return rgba(#000, 0.7); }\n  @else {\n    @return #fff; } }\n","$container-offset: (2 * $gap) !default;\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n  @include desktop {\n    max-width: $desktop - $container-offset;\n    &.is-fluid {\n      margin-left: $gap;\n      margin-right: $gap;\n      max-width: none; } }\n  @include until-widescreen {\n    &.is-widescreen {\n      max-width: $widescreen - $container-offset; } }\n  @include until-fullhd {\n    &.is-fullhd {\n      max-width: $fullhd - $container-offset; } }\n  @include widescreen {\n    max-width: $widescreen - $container-offset; }\n  @include fullhd {\n    max-width: $fullhd - $container-offset; } }\n","$content-heading-color: $text-strong !default;\n$content-heading-weight: $weight-semibold !default;\n$content-heading-line-height: 1.125 !default;\n\n$content-blockquote-background-color: $background !default;\n$content-blockquote-border-left: 5px solid $border !default;\n$content-blockquote-padding: 1.25em 1.5em !default;\n\n$content-pre-padding: 1.25em 1.5em !default;\n\n$content-table-cell-border: 1px solid $border !default;\n$content-table-cell-border-width: 0 0 1px !default;\n$content-table-cell-padding: 0.5em 0.75em !default;\n$content-table-cell-heading-color: $text-strong !default;\n$content-table-head-cell-border-width: 0 0 2px !default;\n$content-table-head-cell-color: $text-strong !default;\n$content-table-foot-cell-border-width: 2px 0 0 !default;\n$content-table-foot-cell-color: $text-strong !default;\n\n.content {\n  @extend %block;\n  // Inline\n  li + li {\n    margin-top: 0.25em; }\n  // Block\n  p,\n  dl,\n  ol,\n  ul,\n  blockquote,\n  pre,\n  table {\n    &:not(:last-child) {\n      margin-bottom: 1em; } }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: $content-heading-color;\n    font-weight: $content-heading-weight;\n    line-height: $content-heading-line-height; }\n  h1 {\n    font-size: 2em;\n    margin-bottom: 0.5em;\n    &:not(:first-child) {\n      margin-top: 1em; } }\n  h2 {\n    font-size: 1.75em;\n    margin-bottom: 0.5714em;\n    &:not(:first-child) {\n      margin-top: 1.1428em; } }\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0.6666em;\n    &:not(:first-child) {\n      margin-top: 1.3333em; } }\n  h4 {\n    font-size: 1.25em;\n    margin-bottom: 0.8em; }\n  h5 {\n    font-size: 1.125em;\n    margin-bottom: 0.8888em; }\n  h6 {\n    font-size: 1em;\n    margin-bottom: 1em; }\n  blockquote {\n    background-color: $content-blockquote-background-color;\n    border-left: $content-blockquote-border-left;\n    padding: $content-blockquote-padding; }\n  ol {\n    list-style-position: outside;\n    margin-left: 2em;\n    margin-top: 1em;\n    &:not([type]) {\n      list-style-type: decimal;\n      &.is-lower-alpha {\n        list-style-type: lower-alpha; }\n      &.is-lower-roman {\n        list-style-type: lower-roman; }\n      &.is-upper-alpha {\n        list-style-type: upper-alpha; }\n      &.is-upper-roman {\n        list-style-type: upper-roman; } } }\n  ul {\n    list-style: disc outside;\n    margin-left: 2em;\n    margin-top: 1em;\n    ul {\n      list-style-type: circle;\n      margin-top: 0.5em;\n      ul {\n        list-style-type: square; } } }\n  dd {\n    margin-left: 2em; }\n  figure {\n    margin-left: 2em;\n    margin-right: 2em;\n    text-align: center;\n    &:not(:first-child) {\n      margin-top: 2em; }\n    &:not(:last-child) {\n      margin-bottom: 2em; }\n    img {\n      display: inline-block; }\n    figcaption {\n      font-style: italic; } }\n  pre {\n    @include overflow-touch;\n    overflow-x: auto;\n    padding: $content-pre-padding;\n    white-space: pre;\n    word-wrap: normal; }\n  sup,\n  sub {\n    font-size: 75%; }\n  table {\n    width: 100%;\n    td,\n    th {\n      border: $content-table-cell-border;\n      border-width: $content-table-cell-border-width;\n      padding: $content-table-cell-padding;\n      vertical-align: top; }\n    th {\n      color: $content-table-cell-heading-color;\n      &:not([align]) {\n        text-align: left; } }\n    thead {\n      td,\n      th {\n        border-width: $content-table-head-cell-border-width;\n        color: $content-table-head-cell-color; } }\n    tfoot {\n      td,\n      th {\n        border-width: $content-table-foot-cell-border-width;\n        color: $content-table-foot-cell-color; } }\n    tbody {\n      tr {\n        &:last-child {\n          td,\n          th {\n            border-bottom-width: 0; } } } } }\n  .tabs {\n    li + li {\n      margin-top: 0; } }\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium; }\n  &.is-large {\n    font-size: $size-large; } }\n","$icon-dimensions: 1.5rem !default;\n$icon-dimensions-small: 1rem !default;\n$icon-dimensions-medium: 2rem !default;\n$icon-dimensions-large: 3rem !default;\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: $icon-dimensions;\n  width: $icon-dimensions;\n  // Sizes\n  &.is-small {\n    height: $icon-dimensions-small;\n    width: $icon-dimensions-small; }\n  &.is-medium {\n    height: $icon-dimensions-medium;\n    width: $icon-dimensions-medium; }\n  &.is-large {\n    height: $icon-dimensions-large;\n    width: $icon-dimensions-large; } }\n","$dimensions: 16 24 32 48 64 96 128 !default;\n\n.image {\n  display: block;\n  position: relative;\n  img {\n    display: block;\n    height: auto;\n    width: 100%;\n    &.is-rounded {\n      border-radius: $radius-rounded; } }\n  // Ratio\n  &.is-square,\n  &.is-1by1,\n  &.is-5by4,\n  &.is-4by3,\n  &.is-3by2,\n  &.is-5by3,\n  &.is-16by9,\n  &.is-2by1,\n  &.is-3by1,\n  &.is-4by5,\n  &.is-3by4,\n  &.is-2by3,\n  &.is-3by5,\n  &.is-9by16,\n  &.is-1by2,\n  &.is-1by3 {\n    img,\n    .has-ratio {\n      @extend %overlay;\n      height: 100%;\n      width: 100%; } }\n  &.is-square,\n  &.is-1by1 {\n    padding-top: 100%; }\n  &.is-5by4 {\n    padding-top: 80%; }\n  &.is-4by3 {\n    padding-top: 75%; }\n  &.is-3by2 {\n    padding-top: 66.6666%; }\n  &.is-5by3 {\n    padding-top: 60%; }\n  &.is-16by9 {\n    padding-top: 56.25%; }\n  &.is-2by1 {\n    padding-top: 50%; }\n  &.is-3by1 {\n    padding-top: 33.3333%; }\n  &.is-4by5 {\n    padding-top: 125%; }\n  &.is-3by4 {\n    padding-top: 133.3333%; }\n  &.is-2by3 {\n    padding-top: 150%; }\n  &.is-3by5 {\n    padding-top: 166.6666%; }\n  &.is-9by16 {\n    padding-top: 177.7777%; }\n  &.is-1by2 {\n    padding-top: 200%; }\n  &.is-1by3 {\n    padding-top: 300%; }\n  // Sizes\n  @each $dimension in $dimensions {\n    &.is-#{$dimension}x#{$dimension} {\n      height: $dimension * 1px;\n      width: $dimension * 1px; } } }\n","$notification-background-color: $background !default;\n$notification-radius: $radius !default;\n$notification-padding: 1.25rem 2.5rem 1.25rem 1.5rem !default;\n\n.notification {\n  @extend %block;\n  background-color: $notification-background-color;\n  border-radius: $notification-radius;\n  padding: $notification-padding;\n  position: relative;\n  a:not(.button):not(.dropdown-item) {\n    color: currentColor;\n    text-decoration: underline; }\n  strong {\n    color: currentColor; }\n  code,\n  pre {\n    background: $white; }\n  pre code {\n    background: transparent; }\n  & > .delete {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem; }\n  .title,\n  .subtitle,\n  .content {\n    color: currentColor; }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      color: $color-invert; } } }\n","$progress-bar-background-color: $border !default;\n$progress-value-background-color: $text !default;\n$progress-border-radius: $radius-rounded !default;\n\n$progress-indeterminate-duration: 1.5s !default;\n\n.progress {\n  @extend %block;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: $progress-border-radius;\n  display: block;\n  height: $size-normal;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n  &::-webkit-progress-bar {\n    background-color: $progress-bar-background-color; }\n  &::-webkit-progress-value {\n    background-color: $progress-value-background-color; }\n  &::-moz-progress-bar {\n    background-color: $progress-value-background-color; }\n  &::-ms-fill {\n    background-color: $progress-value-background-color;\n    border: none; }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    &.is-#{$name} {\n      &::-webkit-progress-value {\n        background-color: $color; }\n      &::-moz-progress-bar {\n        background-color: $color; }\n      &::-ms-fill {\n        background-color: $color; }\n      &:indeterminate {\n        background-image: linear-gradient(to right, $color 30%, $progress-bar-background-color 30%); } } }\n\n  &:indeterminate {\n    animation-duration: $progress-indeterminate-duration;\n    animation-iteration-count: infinite;\n    animation-name: moveIndeterminate;\n    animation-timing-function: linear;\n    background-color: $progress-bar-background-color;\n    background-image: linear-gradient(to right, $text 30%, $progress-bar-background-color 30%);\n    background-position: top left;\n    background-repeat: no-repeat;\n    background-size: 150% 150%;\n    &::-webkit-progress-bar {\n      background-color: transparent; }\n    &::-moz-progress-bar {\n      background-color: transparent; } }\n\n  // Sizes\n  &.is-small {\n    height: $size-small; }\n  &.is-medium {\n    height: $size-medium; }\n  &.is-large {\n    height: $size-large; } }\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0; }\n  to {\n    background-position: -200% 0; } }\n","$table-color: $grey-darker !default;\n$table-background-color: $white !default;\n\n$table-cell-border: 1px solid $grey-lighter !default;\n$table-cell-border-width: 0 0 1px !default;\n$table-cell-padding: 0.5em 0.75em !default;\n$table-cell-heading-color: $text-strong !default;\n\n$table-head-cell-border-width: 0 0 2px !default;\n$table-head-cell-color: $text-strong !default;\n$table-foot-cell-border-width: 2px 0 0 !default;\n$table-foot-cell-color: $text-strong !default;\n\n$table-head-background-color: transparent !default;\n$table-body-background-color: transparent !default;\n$table-foot-background-color: transparent !default;\n\n$table-row-hover-background-color: $white-bis !default;\n\n$table-row-active-background-color: $primary !default;\n$table-row-active-color: $primary-invert !default;\n\n$table-striped-row-even-background-color: $white-bis !default;\n$table-striped-row-even-hover-background-color: $white-ter !default;\n\n.table {\n  @extend %block;\n  background-color: $table-background-color;\n  color: $table-color;\n  td,\n  th {\n    border: $table-cell-border;\n    border-width: $table-cell-border-width;\n    padding: $table-cell-padding;\n    vertical-align: top;\n    // Colors\n    @each $name, $pair in $colors {\n      $color: nth($pair, 1);\n      $color-invert: nth($pair, 2);\n      &.is-#{$name} {\n        background-color: $color;\n        border-color: $color;\n        color: $color-invert; } }\n    // Modifiers\n    &.is-narrow {\n      white-space: nowrap;\n      width: 1%; }\n    &.is-selected {\n      background-color: $table-row-active-background-color;\n      color: $table-row-active-color;\n      a,\n      strong {\n        color: currentColor; } } }\n  th {\n    color: $table-cell-heading-color;\n    &:not([align]) {\n      text-align: left; } }\n  tr {\n    &.is-selected {\n      background-color: $table-row-active-background-color;\n      color: $table-row-active-color;\n      a,\n      strong {\n        color: currentColor; }\n      td,\n      th {\n        border-color: $table-row-active-color;\n        color: currentColor; } } }\n  thead {\n    background-color: $table-head-background-color;\n    td,\n    th {\n      border-width: $table-head-cell-border-width;\n      color: $table-head-cell-color; } }\n  tfoot {\n    background-color: $table-foot-background-color;\n    td,\n    th {\n      border-width: $table-foot-cell-border-width;\n      color: $table-foot-cell-color; } }\n  tbody {\n    background-color: $table-body-background-color;\n    tr {\n      &:last-child {\n        td,\n        th {\n          border-bottom-width: 0; } } } }\n  // Modifiers\n  &.is-bordered {\n    td,\n    th {\n      border-width: 1px; }\n    tr {\n      &:last-child {\n        td,\n        th {\n          border-bottom-width: 1px; } } } }\n  &.is-fullwidth {\n    width: 100%; }\n  &.is-hoverable {\n    tbody {\n      tr:not(.is-selected) {\n        &:hover {\n          background-color: $table-row-hover-background-color; } } }\n    &.is-striped {\n      tbody {\n        tr:not(.is-selected) {\n          &:hover {\n            background-color: $table-row-hover-background-color;\n            &:nth-child(even) {\n              background-color: $table-striped-row-even-hover-background-color; } } } } } }\n  &.is-narrow {\n    td,\n    th {\n      padding: 0.25em 0.5em; } }\n  &.is-striped {\n    tbody {\n      tr:not(.is-selected) {\n        &:nth-child(even) {\n          background-color: $table-striped-row-even-background-color; } } } } }\n\n.table-container {\n  @extend %block;\n  @include overflow-touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%; }\n","$tag-background-color: $background !default;\n$tag-color: $text !default;\n$tag-radius: $radius !default;\n$tag-delete-margin: 1px !default;\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  .tag {\n    margin-bottom: 0.5rem;\n    &:not(:last-child) {\n      margin-right: 0.5rem; } }\n  &:last-child {\n    margin-bottom: -0.5rem; }\n  &:not(:last-child) {\n    margin-bottom: 1rem; }\n  // Sizes\n  &.are-medium {\n    .tag:not(.is-normal):not(.is-large) {\n      font-size: $size-normal; } }\n  &.are-large {\n    .tag:not(.is-normal):not(.is-medium) {\n      font-size: $size-medium; } }\n  &.is-centered {\n    justify-content: center;\n    .tag {\n      margin-right: 0.25rem;\n      margin-left: 0.25rem; } }\n  &.is-right {\n    justify-content: flex-end;\n    .tag {\n      &:not(:first-child) {\n        margin-left: 0.5rem; }\n      &:not(:last-child) {\n        margin-right: 0; } } }\n  &.has-addons {\n    .tag {\n      margin-right: 0;\n      &:not(:first-child) {\n        margin-left: 0;\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0; }\n      &:not(:last-child) {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0; } } } }\n\n.tag:not(body) {\n  align-items: center;\n  background-color: $tag-background-color;\n  border-radius: $tag-radius;\n  color: $tag-color;\n  display: inline-flex;\n  font-size: $size-small;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n  .delete {\n    margin-left: 0.25rem;\n    margin-right: -0.375rem; }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      color: $color-invert; } }\n  // Sizes\n  &.is-normal {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-normal; }\n  &.is-large {\n    font-size: $size-medium; }\n  .icon {\n    &:first-child:not(:last-child) {\n      margin-left: -0.375em;\n      margin-right: 0.1875em; }\n    &:last-child:not(:first-child) {\n      margin-left: 0.1875em;\n      margin-right: -0.375em; }\n    &:first-child:last-child {\n      margin-left: -0.375em;\n      margin-right: -0.375em; } }\n  // Modifiers\n  &.is-delete {\n    margin-left: $tag-delete-margin;\n    padding: 0;\n    position: relative;\n    width: 2em;\n    &::before,\n    &::after {\n      background-color: currentColor;\n      content: \"\";\n      display: block;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      transform-origin: center center; }\n    &::before {\n      height: 1px;\n      width: 50%; }\n    &::after {\n      height: 50%;\n      width: 1px; }\n    &:hover,\n    &:focus {\n      background-color: darken($tag-background-color, 5%); }\n    &:active {\n      background-color: darken($tag-background-color, 10%); } }\n  &.is-rounded {\n    border-radius: $radius-rounded; } }\n\na.tag {\n  &:hover {\n    text-decoration: underline; } }\n","$title-color: $grey-darker !default;\n$title-family: false !default;\n$title-size: $size-3 !default;\n$title-weight: $weight-semibold !default;\n$title-line-height: 1.125 !default;\n$title-strong-color: inherit !default;\n$title-strong-weight: inherit !default;\n$title-sub-size: 0.75em !default;\n$title-sup-size: 0.75em !default;\n\n$subtitle-color: $grey-dark !default;\n$subtitle-family: false !default;\n$subtitle-size: $size-5 !default;\n$subtitle-weight: $weight-normal !default;\n$subtitle-line-height: 1.25 !default;\n$subtitle-strong-color: $grey-darker !default;\n$subtitle-strong-weight: $weight-semibold !default;\n$subtitle-negative-margin: -1.25rem !default;\n\n.title,\n.subtitle {\n  @extend %block;\n  word-break: break-word;\n  em,\n  span {\n    font-weight: inherit; }\n  sub {\n    font-size: $title-sub-size; }\n  sup {\n    font-size: $title-sup-size; }\n  .tag {\n    vertical-align: middle; } }\n\n.title {\n  color: $title-color;\n  @if $title-family {\n    font-family: $title-family; }\n  font-size: $title-size;\n  font-weight: $title-weight;\n  line-height: $title-line-height;\n  strong {\n    color: $title-strong-color;\n    font-weight: $title-strong-weight; }\n  & + .highlight {\n    margin-top: -0.75rem; }\n  &:not(.is-spaced) + .subtitle {\n    margin-top: $subtitle-negative-margin; }\n  // Sizes\n  @each $size in $sizes {\n    $i: index($sizes, $size);\n    &.is-#{$i} {\n      font-size: $size; } } }\n\n.subtitle {\n  color: $subtitle-color;\n  @if $subtitle-family {\n    font-family: $subtitle-family; }\n  font-size: $subtitle-size;\n  font-weight: $subtitle-weight;\n  line-height: $subtitle-line-height;\n  strong {\n    color: $subtitle-strong-color;\n    font-weight: $subtitle-strong-weight; }\n  &:not(.is-spaced) + .title {\n    margin-top: $subtitle-negative-margin; }\n  // Sizes\n  @each $size in $sizes {\n    $i: index($sizes, $size);\n    &.is-#{$i} {\n      font-size: $size; } } }\n",".block {\n  @extend %block; }\n\n.delete {\n  @extend %delete; }\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n\n.highlight {\n  @extend %block;\n  font-weight: $weight-normal;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n  pre {\n    overflow: auto;\n    max-width: 100%; } }\n\n.loader {\n  @extend %loader; }\n\n.number {\n  align-items: center;\n  background-color: $background;\n  border-radius: $radius-rounded;\n  display: inline-flex;\n  font-size: $size-medium;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n","$input-color: $grey-darker !default;\n$input-background-color: $white !default;\n$input-border-color: $grey-lighter !default;\n$input-height: $control-height !default;\n$input-shadow: inset 0 1px 2px rgba($black, 0.1) !default;\n$input-placeholder-color: rgba($input-color, 0.3) !default;\n\n$input-hover-color: $grey-darker !default;\n$input-hover-border-color: $grey-light !default;\n\n$input-focus-color: $grey-darker !default;\n$input-focus-border-color: $link !default;\n$input-focus-box-shadow-size: 0 0 0 0.125em !default;\n$input-focus-box-shadow-color: rgba($link, 0.25) !default;\n\n$input-disabled-color: $text-light !default;\n$input-disabled-background-color: $background !default;\n$input-disabled-border-color: $background !default;\n$input-disabled-placeholder-color: rgba($input-disabled-color, 0.3) !default;\n\n$input-arrow: $link !default;\n\n$input-icon-color: $grey-lighter !default;\n$input-icon-active-color: $grey !default;\n\n$input-radius: $radius !default;\n\n@mixin input {\n  @extend %control;\n  background-color: $input-background-color;\n  border-color: $input-border-color;\n  border-radius: $input-radius;\n  color: $input-color;\n  @include placeholder {\n    color: $input-placeholder-color; }\n  &:hover,\n  &.is-hovered {\n    border-color: $input-hover-border-color; }\n  &:focus,\n  &.is-focused,\n  &:active,\n  &.is-active {\n    border-color: $input-focus-border-color;\n    box-shadow: $input-focus-box-shadow-size $input-focus-box-shadow-color; }\n  &[disabled],\n  fieldset[disabled] & {\n    background-color: $input-disabled-background-color;\n    border-color: $input-disabled-border-color;\n    box-shadow: none;\n    color: $input-disabled-color;\n    @include placeholder {\n      color: $input-disabled-placeholder-color; } } }\n\n%input {\n  @include input; }\n","%input-textarea {\n  @extend %input;\n  box-shadow: $input-shadow;\n  max-width: 100%;\n  width: 100%;\n  &[readonly] {\n    box-shadow: none; }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    &.is-#{$name} {\n      border-color: $color;\n      &:focus,\n      &.is-focused,\n      &:active,\n      &.is-active {\n        box-shadow: $input-focus-box-shadow-size rgba($color, 0.25); } } }\n  // Sizes\n  &.is-small {\n    @include control-small; }\n  &.is-medium {\n    @include control-medium; }\n  &.is-large {\n    @include control-large; }\n  // Modifiers\n  &.is-fullwidth {\n    display: block;\n    width: 100%; }\n  &.is-inline {\n    display: inline;\n    width: auto; } }\n\n.input {\n  @extend %input-textarea;\n  &.is-rounded {\n    border-radius: $radius-rounded;\n    padding-left: 1em;\n    padding-right: 1em; }\n  &.is-static {\n    background-color: transparent;\n    border-color: transparent;\n    box-shadow: none;\n    padding-left: 0;\n    padding-right: 0; } }\n\n.textarea {\n  @extend %input-textarea;\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical;\n  &:not([rows]) {\n    max-height: 600px;\n    min-height: 120px; }\n  &[rows] {\n    height: initial; }\n  // Modifiers\n  &.has-fixed-size {\n    resize: none; } }\n","%checkbox-radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n  input {\n    cursor: pointer; }\n  &:hover {\n    color: $input-hover-color; }\n  &[disabled],\n  fieldset[disabled] & {\n    color: $input-disabled-color;\n    cursor: not-allowed; } }\n\n.checkbox {\n  @extend %checkbox-radio; }\n\n.radio {\n  @extend %checkbox-radio;\n  & + .radio {\n    margin-left: 0.5em; } }\n",".select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n  &:not(.is-multiple) {\n    height: $input-height; }\n  &:not(.is-multiple):not(.is-loading) {\n    &::after {\n      @extend %arrow;\n      border-color: $input-arrow;\n      right: 1.125em;\n      z-index: 4; } }\n  &.is-rounded {\n    select {\n      border-radius: $radius-rounded;\n      padding-left: 1em; } }\n  select {\n    @extend %input;\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none;\n    &::-ms-expand {\n      display: none; }\n    &[disabled]:hover,\n    fieldset[disabled] &:hover {\n      border-color: $input-disabled-border-color; }\n    &:not([multiple]) {\n      padding-right: 2.5em; }\n    &[multiple] {\n      height: auto;\n      padding: 0;\n      option {\n        padding: 0.5em 1em; } } }\n  // States\n  &:not(.is-multiple):not(.is-loading):hover {\n    &::after {\n      border-color: $input-hover-color; } }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    &.is-#{$name} {\n      &:not(:hover)::after {\n        border-color: $color; }\n      select {\n        border-color: $color;\n        &:hover,\n        &.is-hovered {\n          border-color: darken($color, 5%); }\n        &:focus,\n        &.is-focused,\n        &:active,\n        &.is-active {\n          box-shadow: $input-focus-box-shadow-size rgba($color, 0.25); } } } }\n  // Sizes\n  &.is-small {\n    @include control-small; }\n  &.is-medium {\n    @include control-medium; }\n  &.is-large {\n    @include control-large; }\n  // Modifiers\n  &.is-disabled {\n    &::after {\n      border-color: $input-disabled-color; } }\n  &.is-fullwidth {\n    width: 100%;\n    select {\n      width: 100%; } }\n  &.is-loading {\n    &::after {\n      @extend %loader;\n      margin-top: 0;\n      position: absolute;\n      right: 0.625em;\n      top: 0.625em;\n      transform: none; }\n    &.is-small:after {\n      font-size: $size-small; }\n    &.is-medium:after {\n      font-size: $size-medium; }\n    &.is-large:after {\n      font-size: $size-large; } } }\n","$file-border-color: $border !default;\n$file-radius: $radius !default;\n\n$file-cta-background-color: $white-ter !default;\n$file-cta-color: $grey-dark !default;\n$file-cta-hover-color: $grey-darker !default;\n$file-cta-active-color: $grey-darker !default;\n\n$file-name-border-color: $border !default;\n$file-name-border-style: solid !default;\n$file-name-border-width: 1px 1px 1px 0 !default;\n$file-name-max-width: 16em !default;\n\n.file {\n  @extend %unselectable;\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      .file-cta {\n        background-color: $color;\n        border-color: transparent;\n        color: $color-invert; }\n      &:hover,\n      &.is-hovered {\n        .file-cta {\n          background-color: darken($color, 2.5%);\n          border-color: transparent;\n          color: $color-invert; } }\n      &:focus,\n      &.is-focused {\n        .file-cta {\n          border-color: transparent;\n          box-shadow: 0 0 0.5em rgba($color, 0.25);\n          color: $color-invert; } }\n      &:active,\n      &.is-active {\n        .file-cta {\n          background-color: darken($color, 5%);\n          border-color: transparent;\n          color: $color-invert; } } } }\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium;\n    .file-icon {\n      .fa {\n        font-size: 21px; } } }\n  &.is-large {\n    font-size: $size-large;\n    .file-icon {\n      .fa {\n        font-size: 28px; } } }\n  // Modifiers\n  &.has-name {\n    .file-cta {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n    .file-name {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n    &.is-empty {\n      .file-cta {\n        border-radius: $file-radius; }\n      .file-name {\n        display: none; } } }\n  &.is-boxed {\n    .file-label {\n      flex-direction: column; }\n    .file-cta {\n      flex-direction: column;\n      height: auto;\n      padding: 1em 3em; }\n    .file-name {\n      border-width: 0 1px 1px; }\n    .file-icon {\n      height: 1.5em;\n      width: 1.5em;\n      .fa {\n        font-size: 21px; } }\n    &.is-small {\n      .file-icon .fa {\n        font-size: 14px; } }\n    &.is-medium {\n      .file-icon .fa {\n        font-size: 28px; } }\n    &.is-large {\n      .file-icon .fa {\n        font-size: 35px; } }\n    &.has-name {\n      .file-cta {\n        border-radius: $file-radius $file-radius 0 0; }\n      .file-name {\n        border-radius: 0 0 $file-radius $file-radius;\n        border-width: 0 1px 1px; } } }\n  &.is-centered {\n    justify-content: center; }\n  &.is-fullwidth {\n    .file-label {\n      width: 100%; }\n    .file-name {\n      flex-grow: 1;\n      max-width: none; } }\n  &.is-right {\n    justify-content: flex-end;\n    .file-cta {\n      border-radius: 0 $file-radius $file-radius 0; }\n    .file-name {\n      border-radius: $file-radius 0 0 $file-radius;\n      border-width: 1px 0 1px 1px;\n      order: -1; } } }\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n  &:hover {\n    .file-cta {\n      background-color: darken($file-cta-background-color, 2.5%);\n      color: $file-cta-hover-color; }\n    .file-name {\n      border-color: darken($file-name-border-color, 2.5%); } }\n  &:active {\n    .file-cta {\n      background-color: darken($file-cta-background-color, 5%);\n      color: $file-cta-active-color; }\n    .file-name {\n      border-color: darken($file-name-border-color, 5%); } } }\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.file-cta,\n.file-name {\n  @extend %control;\n  border-color: $file-border-color;\n  border-radius: $file-radius;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap; }\n\n.file-cta {\n  background-color: $file-cta-background-color;\n  color: $file-cta-color; }\n\n.file-name {\n  border-color: $file-name-border-color;\n  border-style: $file-name-border-style;\n  border-width: $file-name-border-width;\n  display: block;\n  max-width: $file-name-max-width;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis; }\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n  .fa {\n    font-size: 14px; } }\n","$label-color: $grey-darker !default;\n$label-weight: $weight-bold !default;\n\n$help-size: $size-small !default;\n\n.label {\n  color: $label-color;\n  display: block;\n  font-size: $size-normal;\n  font-weight: $label-weight;\n  &:not(:last-child) {\n    margin-bottom: 0.5em; }\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium; }\n  &.is-large {\n    font-size: $size-large; } }\n\n.help {\n  display: block;\n  font-size: $help-size;\n  margin-top: 0.25rem;\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    &.is-#{$name} {\n      color: $color; } } }\n\n// Containers\n\n.field {\n  &:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  // Modifiers\n  &.has-addons {\n    display: flex;\n    justify-content: flex-start;\n    .control {\n      &:not(:last-child) {\n        margin-right: -1px; }\n      &:not(:first-child):not(:last-child) {\n        .button,\n        .input,\n        .select select {\n          border-radius: 0; } }\n      &:first-child:not(:only-child) {\n        .button,\n        .input,\n        .select select {\n          border-bottom-right-radius: 0;\n          border-top-right-radius: 0; } }\n      &:last-child:not(:only-child) {\n        .button,\n        .input,\n        .select select {\n          border-bottom-left-radius: 0;\n          border-top-left-radius: 0; } }\n      .button,\n      .input,\n      .select select {\n        &:not([disabled]) {\n          &:hover,\n          &.is-hovered {\n            z-index: 2; }\n          &:focus,\n          &.is-focused,\n          &:active,\n          &.is-active {\n            z-index: 3;\n            &:hover {\n              z-index: 4; } } } }\n      &.is-expanded {\n        flex-grow: 1;\n        flex-shrink: 1; } }\n    &.has-addons-centered {\n      justify-content: center; }\n    &.has-addons-right {\n      justify-content: flex-end; }\n    &.has-addons-fullwidth {\n      .control {\n        flex-grow: 1;\n        flex-shrink: 0; } } }\n  &.is-grouped {\n    display: flex;\n    justify-content: flex-start;\n    & > .control {\n      flex-shrink: 0;\n      &:not(:last-child) {\n        margin-bottom: 0;\n        margin-right: 0.75rem; }\n      &.is-expanded {\n        flex-grow: 1;\n        flex-shrink: 1; } }\n    &.is-grouped-centered {\n      justify-content: center; }\n    &.is-grouped-right {\n      justify-content: flex-end; }\n    &.is-grouped-multiline {\n      flex-wrap: wrap;\n      & > .control {\n        &:last-child,\n        &:not(:last-child) {\n          margin-bottom: 0.75rem; } }\n      &:last-child {\n        margin-bottom: -0.75rem; }\n      &:not(:last-child) {\n        margin-bottom: 0; } } }\n  &.is-horizontal {\n    @include tablet {\n      display: flex; } } }\n\n.field-label {\n  .label {\n    font-size: inherit; }\n  @include mobile {\n    margin-bottom: 0.5rem; }\n  @include tablet {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n    &.is-small {\n      font-size: $size-small;\n      padding-top: 0.375em; }\n    &.is-normal {\n      padding-top: 0.375em; }\n    &.is-medium {\n      font-size: $size-medium;\n      padding-top: 0.375em; }\n    &.is-large {\n      font-size: $size-large;\n      padding-top: 0.375em; } } }\n\n.field-body {\n  .field .field {\n    margin-bottom: 0; }\n  @include tablet {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n    .field {\n      margin-bottom: 0; }\n    & > .field {\n      flex-shrink: 1;\n      &:not(.is-narrow) {\n        flex-grow: 1; }\n      &:not(:last-child) {\n        margin-right: 0.75rem; } } } }\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: $size-normal;\n  position: relative;\n  text-align: left;\n  // Modifiers\n  &.has-icons-left,\n  &.has-icons-right {\n    .input,\n    .select {\n      &:focus {\n        & ~ .icon {\n          color: $input-icon-active-color; } }\n      &.is-small ~ .icon {\n        font-size: $size-small; }\n      &.is-medium ~ .icon {\n        font-size: $size-medium; }\n      &.is-large ~ .icon {\n        font-size: $size-large; } }\n    .icon {\n      color: $input-icon-color;\n      height: $input-height;\n      pointer-events: none;\n      position: absolute;\n      top: 0;\n      width: $input-height;\n      z-index: 4; } }\n  &.has-icons-left {\n    .input,\n    .select select {\n      padding-left: $input-height; }\n    .icon.is-left {\n      left: 0; } }\n  &.has-icons-right {\n    .input,\n    .select select {\n      padding-right: $input-height; }\n    .icon.is-right {\n      right: 0; } }\n  &.is-loading {\n    &::after {\n      @extend %loader;\n      position: absolute !important;\n      right: 0.625em;\n      top: 0.625em;\n      z-index: 4; }\n    &.is-small:after {\n      font-size: $size-small; }\n    &.is-medium:after {\n      font-size: $size-medium; }\n    &.is-large:after {\n      font-size: $size-large; } } }\n","$breadcrumb-item-color: $link !default;\n$breadcrumb-item-hover-color: $link-hover !default;\n$breadcrumb-item-active-color: $text-strong !default;\n\n$breadcrumb-item-padding-vertical: 0 !default;\n$breadcrumb-item-padding-horizontal: 0.75em !default;\n\n$breadcrumb-item-separator-color: $grey-light !default;\n\n.breadcrumb {\n  @extend %block;\n  @extend %unselectable;\n  font-size: $size-normal;\n  white-space: nowrap;\n  a {\n    align-items: center;\n    color: $breadcrumb-item-color;\n    display: flex;\n    justify-content: center;\n    padding: $breadcrumb-item-padding-vertical $breadcrumb-item-padding-horizontal;\n    &:hover {\n      color: $breadcrumb-item-hover-color; } }\n  li {\n    align-items: center;\n    display: flex;\n    &:first-child a {\n      padding-left: 0; }\n    &.is-active {\n      a {\n        color: $breadcrumb-item-active-color;\n        cursor: default;\n        pointer-events: none; } }\n    & + li::before {\n      color: $breadcrumb-item-separator-color;\n      content: \"\\0002f\"; } }\n  ul,\n  ol {\n    align-items: flex-start;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start; }\n  .icon {\n    &:first-child {\n      margin-right: 0.5em; }\n    &:last-child {\n      margin-left: 0.5em; } }\n  // Alignment\n  &.is-centered {\n    ol,\n    ul {\n      justify-content: center; } }\n  &.is-right {\n    ol,\n    ul {\n      justify-content: flex-end; } }\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium; }\n  &.is-large {\n    font-size: $size-large; }\n  // Styles\n  &.has-arrow-separator {\n    li + li::before {\n      content: \"\\02192\"; } }\n  &.has-bullet-separator {\n    li + li::before {\n      content: \"\\02022\"; } }\n  &.has-dot-separator {\n    li + li::before {\n      content: \"\\000b7\"; } }\n  &.has-succeeds-separator {\n    li + li::before {\n      content: \"\\0227B\"; } } }\n","$card-color: $text !default;\n$card-background-color: $white !default;\n$card-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1) !default;\n\n$card-header-background-color: transparent !default;\n$card-header-color: $text-strong !default;\n$card-header-padding: 0.75rem !default;\n$card-header-shadow: 0 1px 2px rgba($black, 0.1) !default;\n$card-header-weight: $weight-bold !default;\n\n$card-content-background-color: transparent !default;\n$card-content-padding: 1.5rem !default;\n\n$card-footer-background-color: transparent !default;\n$card-footer-border-top: 1px solid $border !default;\n$card-footer-padding: 0.75rem !default;\n\n$card-media-margin: $block-spacing !default;\n\n.card {\n  background-color: $card-background-color;\n  box-shadow: $card-shadow;\n  color: $card-color;\n  max-width: 100%;\n  position: relative; }\n\n.card-header {\n  background-color: $card-header-background-color;\n  align-items: stretch;\n  box-shadow: $card-header-shadow;\n  display: flex; }\n\n.card-header-title {\n  align-items: center;\n  color: $card-header-color;\n  display: flex;\n  flex-grow: 1;\n  font-weight: $card-header-weight;\n  padding: $card-header-padding;\n  &.is-centered {\n    justify-content: center; } }\n\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: $card-header-padding; }\n\n.card-image {\n  display: block;\n  position: relative; }\n\n.card-content {\n  background-color: $card-content-background-color;\n  padding: $card-content-padding; }\n\n.card-footer {\n  background-color: $card-footer-background-color;\n  border-top: $card-footer-border-top;\n  align-items: stretch;\n  display: flex; }\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: $card-footer-padding;\n  &:not(:last-child) {\n    border-right: $card-footer-border-top; } }\n\n// Combinations\n\n.card {\n  .media:not(:last-child) {\n    margin-bottom: $card-media-margin; } }\n","$dropdown-menu-min-width: 12rem !default;\n\n$dropdown-content-background-color: $white !default;\n$dropdown-content-arrow: $link !default;\n$dropdown-content-offset: 4px !default;\n$dropdown-content-padding-bottom: 0.5rem !default;\n$dropdown-content-padding-top: 0.5rem !default;\n$dropdown-content-radius: $radius !default;\n$dropdown-content-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1) !default;\n$dropdown-content-z: 20 !default;\n\n$dropdown-item-color: $grey-dark !default;\n$dropdown-item-hover-color: $black !default;\n$dropdown-item-hover-background-color: $background !default;\n$dropdown-item-active-color: $link-invert !default;\n$dropdown-item-active-background-color: $link !default;\n\n$dropdown-divider-background-color: $border !default;\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n  &.is-active,\n  &.is-hoverable:hover {\n    .dropdown-menu {\n      display: block; } }\n  &.is-right {\n    .dropdown-menu {\n      left: auto;\n      right: 0; } }\n  &.is-up {\n    .dropdown-menu {\n      bottom: 100%;\n      padding-bottom: $dropdown-content-offset;\n      padding-top: initial;\n      top: auto; } } }\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: $dropdown-menu-min-width;\n  padding-top: $dropdown-content-offset;\n  position: absolute;\n  top: 100%;\n  z-index: $dropdown-content-z; }\n\n.dropdown-content {\n  background-color: $dropdown-content-background-color;\n  border-radius: $dropdown-content-radius;\n  box-shadow: $dropdown-content-shadow;\n  padding-bottom: $dropdown-content-padding-bottom;\n  padding-top: $dropdown-content-padding-top; }\n\n.dropdown-item {\n  color: $dropdown-item-color;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative; }\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: left;\n  white-space: nowrap;\n  width: 100%;\n  &:hover {\n    background-color: $dropdown-item-hover-background-color;\n    color: $dropdown-item-hover-color; }\n  &.is-active {\n    background-color: $dropdown-item-active-background-color;\n    color: $dropdown-item-active-color; } }\n\n.dropdown-divider {\n  background-color: $dropdown-divider-background-color;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0; }\n","$level-item-spacing: ($block-spacing / 2) !default;\n\n.level {\n  @extend %block;\n  align-items: center;\n  justify-content: space-between;\n  code {\n    border-radius: $radius; }\n  img {\n    display: inline-block;\n    vertical-align: top; }\n  // Modifiers\n  &.is-mobile {\n    display: flex;\n    .level-left,\n    .level-right {\n      display: flex; }\n    .level-left + .level-right {\n      margin-top: 0; }\n    .level-item {\n      &:not(:last-child) {\n        margin-bottom: 0;\n        margin-right: $level-item-spacing; }\n      &:not(.is-narrow) {\n        flex-grow: 1; } } }\n  // Responsiveness\n  @include tablet {\n    display: flex;\n    & > .level-item {\n      &:not(.is-narrow) {\n        flex-grow: 1; } } } }\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n  .title,\n  .subtitle {\n    margin-bottom: 0; }\n  // Responsiveness\n  @include mobile {\n    &:not(:last-child) {\n      margin-bottom: $level-item-spacing; } } }\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  .level-item {\n    // Modifiers\n    &.is-flexible {\n      flex-grow: 1; }\n    // Responsiveness\n    @include tablet {\n      &:not(:last-child) {\n        margin-right: $level-item-spacing; } } } }\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n  // Responsiveness\n  @include mobile {\n    & + .level-right {\n      margin-top: 1.5rem; } }\n  @include tablet {\n    display: flex; } }\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n  // Responsiveness\n  @include tablet {\n    display: flex; } }\n","$list-background-color: $white !default;\n$list-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1) !default;\n$list-radius: $radius !default;\n\n$list-item-border: 1px solid $border !default;\n$list-item-color: $text !default;\n$list-item-active-background-color: $link !default;\n$list-item-active-color: $link-invert !default;\n$list-item-hover-background-color: $background !default;\n\n.list {\n  @extend %block;\n  background-color: $list-background-color;\n  border-radius: $list-radius;\n  box-shadow: $list-shadow;\n  // &.is-hoverable > .list-item:hover:not(.is-active)\n  //   background-color: $list-item-hover-background-color\n }  //   cursor: pointer\n\n.list-item {\n  display: block;\n  padding: 0.5em 1em;\n  &:not(a) {\n    color: $list-item-color; }\n  &:first-child {\n    border-top-left-radius: $list-radius;\n    border-top-right-radius: $list-radius; }\n  &:last-child {\n    border-bottom-left-radius: $list-radius;\n    border-bottom-right-radius: $list-radius; }\n  &:not(:last-child) {\n    border-bottom: $list-item-border; }\n  &.is-active {\n    background-color: $list-item-active-background-color;\n    color: $list-item-active-color; } }\n\na.list-item {\n  background-color: $list-item-hover-background-color;\n  cursor: pointer; }\n",".media {\n  align-items: flex-start;\n  display: flex;\n  text-align: left;\n  .content:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  .media {\n    border-top: 1px solid rgba($border, 0.5);\n    display: flex;\n    padding-top: 0.75rem;\n    .content:not(:last-child),\n    .control:not(:last-child) {\n      margin-bottom: 0.5rem; }\n    .media {\n      padding-top: 0.5rem;\n      & + .media {\n        margin-top: 0.5rem; } } }\n  & + .media {\n    border-top: 1px solid rgba($border, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem; }\n  // Sizes\n  &.is-large {\n    & + .media {\n      margin-top: 1.5rem;\n      padding-top: 1.5rem; } } }\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.media-left {\n  margin-right: 1rem; }\n\n.media-right {\n  margin-left: 1rem; }\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: left; }\n\n@include mobile {\n  .media-content {\n    overflow-x: auto; } }\n","$menu-item-color: $text !default;\n$menu-item-radius: $radius-small !default;\n$menu-item-hover-color: $text-strong !default;\n$menu-item-hover-background-color: $background !default;\n$menu-item-active-color: $link-invert !default;\n$menu-item-active-background-color: $link !default;\n\n$menu-list-border-left: 1px solid $border !default;\n$menu-list-line-height: 1.25 !default;\n$menu-list-link-padding: 0.5em 0.75em !default;\n$menu-nested-list-margin: 0.75em !default;\n$menu-nested-list-padding-left: 0.75em !default;\n\n$menu-label-color: $text-light !default;\n$menu-label-font-size: 0.75em !default;\n$menu-label-letter-spacing: 0.1em !default;\n$menu-label-spacing: 1em !default;\n\n.menu {\n  font-size: $size-normal;\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium; }\n  &.is-large {\n    font-size: $size-large; } }\n\n.menu-list {\n  line-height: $menu-list-line-height;\n  a {\n    border-radius: $menu-item-radius;\n    color: $menu-item-color;\n    display: block;\n    padding: $menu-list-link-padding;\n    &:hover {\n      background-color: $menu-item-hover-background-color;\n      color: $menu-item-hover-color; }\n    // Modifiers\n    &.is-active {\n      background-color: $menu-item-active-background-color;\n      color: $menu-item-active-color; } }\n  li {\n    ul {\n      border-left: $menu-list-border-left;\n      margin: $menu-nested-list-margin;\n      padding-left: $menu-nested-list-padding-left; } } }\n\n.menu-label {\n  color: $menu-label-color;\n  font-size: $menu-label-font-size;\n  letter-spacing: $menu-label-letter-spacing;\n  text-transform: uppercase;\n  &:not(:first-child) {\n    margin-top: $menu-label-spacing; }\n  &:not(:last-child) {\n    margin-bottom: $menu-label-spacing; } }\n","$message-background-color: $background !default;\n$message-radius: $radius !default;\n\n$message-header-background-color: $text !default;\n$message-header-color: $text-invert !default;\n$message-header-weight: $weight-bold !default;\n$message-header-padding: 0.75em 1em !default;\n$message-header-radius: $radius !default;\n\n$message-body-border-color: $border !default;\n$message-body-border-width: 0 0 0 4px !default;\n$message-body-color: $text !default;\n$message-body-padding: 1.25em 1.5em !default;\n$message-body-radius: $radius !default;\n\n$message-body-pre-background-color: $white !default;\n$message-body-pre-code-background-color: transparent !default;\n\n$message-header-body-border-width: 0 !default;\n$message-colors: $colors !default;\n\n.message {\n  @extend %block;\n  background-color: $message-background-color;\n  border-radius: $message-radius;\n  font-size: $size-normal;\n  strong {\n    color: currentColor; }\n  a:not(.button):not(.tag):not(.dropdown-item) {\n    color: currentColor;\n    text-decoration: underline; }\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium; }\n  &.is-large {\n    font-size: $size-large; }\n  // Colors\n  @each $name, $pair in $message-colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    $color-lightning: max((100% - lightness($color)) - 2%, 0%);\n    $color-luminance: colorLuminance($color);\n    $darken-percentage: $color-luminance * 70%;\n    $desaturate-percentage: $color-luminance * 30%;\n    &.is-#{$name} {\n      background-color: lighten($color, $color-lightning);\n      .message-header {\n        background-color: $color;\n        color: $color-invert; }\n      .message-body {\n        border-color: $color;\n        color: desaturate(darken($color, $darken-percentage), $desaturate-percentage); } } } }\n\n.message-header {\n  align-items: center;\n  background-color: $message-header-background-color;\n  border-radius: $message-header-radius $message-header-radius 0 0;\n  color: $message-header-color;\n  display: flex;\n  font-weight: $message-header-weight;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: $message-header-padding;\n  position: relative;\n  .delete {\n    flex-grow: 0;\n    flex-shrink: 0;\n    margin-left: 0.75em; }\n  & + .message-body {\n    border-width: $message-header-body-border-width;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; } }\n\n.message-body {\n  border-color: $message-body-border-color;\n  border-radius: $message-body-radius;\n  border-style: solid;\n  border-width: $message-body-border-width;\n  color: $message-body-color;\n  padding: $message-body-padding;\n  code,\n  pre {\n    background-color: $message-body-pre-background-color; }\n  pre code {\n    background-color: $message-body-pre-code-background-color; } }\n","$modal-z: 40 !default;\n\n$modal-background-background-color: rgba($black, 0.86) !default;\n\n$modal-content-width: 640px !default;\n$modal-content-margin-mobile: 20px !default;\n$modal-content-spacing-mobile: 160px !default;\n$modal-content-spacing-tablet: 40px !default;\n\n$modal-close-dimensions: 40px !default;\n$modal-close-right: 20px !default;\n$modal-close-top: 20px !default;\n\n$modal-card-spacing: 40px !default;\n\n$modal-card-head-background-color: $background !default;\n$modal-card-head-border-bottom: 1px solid $border !default;\n$modal-card-head-padding: 20px !default;\n$modal-card-head-radius: $radius-large !default;\n\n$modal-card-title-color: $text-strong !default;\n$modal-card-title-line-height: 1 !default;\n$modal-card-title-size: $size-4 !default;\n\n$modal-card-foot-radius: $radius-large !default;\n$modal-card-foot-border-top: 1px solid $border !default;\n\n$modal-card-body-background-color: $white !default;\n$modal-card-body-padding: 20px !default;\n\n.modal {\n  @extend %overlay;\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: $modal-z;\n  // Modifiers\n  &.is-active {\n    display: flex; } }\n\n.modal-background {\n  @extend %overlay;\n  background-color: $modal-background-background-color; }\n\n.modal-content,\n.modal-card {\n  margin: 0 $modal-content-margin-mobile;\n  max-height: calc(100vh - #{$modal-content-spacing-mobile});\n  overflow: auto;\n  position: relative;\n  width: 100%;\n  // Responsiveness\n  @include tablet {\n    margin: 0 auto;\n    max-height: calc(100vh - #{$modal-content-spacing-tablet});\n    width: $modal-content-width; } }\n\n.modal-close {\n  @extend %delete;\n  background: none;\n  height: $modal-close-dimensions;\n  position: fixed;\n  right: $modal-close-right;\n  top: $modal-close-top;\n  width: $modal-close-dimensions; }\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - #{$modal-card-spacing});\n  overflow: hidden;\n  -ms-overflow-y: visible; }\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: $modal-card-head-background-color;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: $modal-card-head-padding;\n  position: relative; }\n\n.modal-card-head {\n  border-bottom: $modal-card-head-border-bottom;\n  border-top-left-radius: $modal-card-head-radius;\n  border-top-right-radius: $modal-card-head-radius; }\n\n.modal-card-title {\n  color: $modal-card-title-color;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: $modal-card-title-size;\n  line-height: $modal-card-title-line-height; }\n\n.modal-card-foot {\n  border-bottom-left-radius: $modal-card-foot-radius;\n  border-bottom-right-radius: $modal-card-foot-radius;\n  border-top: $modal-card-foot-border-top;\n  .button {\n    &:not(:last-child) {\n      margin-right: 0.5em; } } }\n\n.modal-card-body {\n  @include overflow-touch;\n  background-color: $modal-card-body-background-color;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: $modal-card-body-padding; }\n","$navbar-background-color: $white !default;\n$navbar-box-shadow-size: 0 2px 0 0 !default;\n$navbar-box-shadow-color: $background !default;\n$navbar-height: 3.25rem !default;\n$navbar-padding-vertical: 1rem !default;\n$navbar-padding-horizontal: 2rem !default;\n$navbar-z: 30 !default;\n$navbar-fixed-z: 30 !default;\n\n$navbar-item-color: $grey-dark !default;\n$navbar-item-hover-color: $link !default;\n$navbar-item-hover-background-color: $white-bis !default;\n$navbar-item-active-color: $black !default;\n$navbar-item-active-background-color: transparent !default;\n$navbar-item-img-max-height: 1.75rem !default;\n\n$navbar-burger-color: $navbar-item-color !default;\n\n$navbar-tab-hover-background-color: transparent !default;\n$navbar-tab-hover-border-bottom-color: $link !default;\n$navbar-tab-active-color: $link !default;\n$navbar-tab-active-background-color: transparent !default;\n$navbar-tab-active-border-bottom-color: $link !default;\n$navbar-tab-active-border-bottom-style: solid !default;\n$navbar-tab-active-border-bottom-width: 3px !default;\n\n$navbar-dropdown-background-color: $white !default;\n$navbar-dropdown-border-top: 2px solid $border !default;\n$navbar-dropdown-offset: -4px !default;\n$navbar-dropdown-arrow: $link !default;\n$navbar-dropdown-radius: $radius-large !default;\n$navbar-dropdown-z: 20 !default;\n\n$navbar-dropdown-boxed-radius: $radius-large !default;\n$navbar-dropdown-boxed-shadow: 0 8px 8px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1) !default;\n\n$navbar-dropdown-item-hover-color: $black !default;\n$navbar-dropdown-item-hover-background-color: $background !default;\n$navbar-dropdown-item-active-color: $link !default;\n$navbar-dropdown-item-active-background-color: $background !default;\n\n$navbar-divider-background-color: $background !default;\n$navbar-divider-height: 2px !default;\n\n$navbar-bottom-box-shadow-size: 0 -2px 0 0 !default;\n\n$navbar-breakpoint: $desktop !default;\n\n@mixin navbar-fixed {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: $navbar-fixed-z; }\n\n.navbar {\n  background-color: $navbar-background-color;\n  min-height: $navbar-height;\n  position: relative;\n  z-index: $navbar-z;\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      color: $color-invert;\n      .navbar-brand {\n        & > .navbar-item,\n        .navbar-link {\n          color: $color-invert; }\n        & > a.navbar-item,\n        .navbar-link {\n          &:focus,\n          &:hover,\n          &.is-active {\n            background-color: darken($color, 5%);\n            color: $color-invert; } }\n        .navbar-link {\n          &::after {\n            border-color: $color-invert; } } }\n      .navbar-burger {\n        color: $color-invert; }\n      @include from($navbar-breakpoint) {\n        .navbar-start,\n        .navbar-end {\n          & > .navbar-item,\n          .navbar-link {\n            color: $color-invert; }\n          & > a.navbar-item,\n          .navbar-link {\n            &:focus,\n            &:hover,\n            &.is-active {\n              background-color: darken($color, 5%);\n              color: $color-invert; } }\n          .navbar-link {\n            &::after {\n              border-color: $color-invert; } } }\n        .navbar-item.has-dropdown:focus .navbar-link,\n        .navbar-item.has-dropdown:hover .navbar-link,\n        .navbar-item.has-dropdown.is-active .navbar-link {\n          background-color: darken($color, 5%);\n          color: $color-invert; }\n        .navbar-dropdown {\n          a.navbar-item {\n            &.is-active {\n              background-color: $color;\n              color: $color-invert; } } } } } }\n  & > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: $navbar-height;\n    width: 100%; }\n  &.has-shadow {\n    box-shadow: $navbar-box-shadow-size $navbar-box-shadow-color; }\n  &.is-fixed-bottom,\n  &.is-fixed-top {\n    @include navbar-fixed; }\n  &.is-fixed-bottom {\n    bottom: 0;\n    &.has-shadow {\n      box-shadow: $navbar-bottom-box-shadow-size $navbar-box-shadow-color; } }\n  &.is-fixed-top {\n    top: 0; } }\n\nhtml,\nbody {\n  &.has-navbar-fixed-top {\n    padding-top: $navbar-height; }\n  &.has-navbar-fixed-bottom {\n    padding-bottom: $navbar-height; } }\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: $navbar-height; }\n\n.navbar-brand {\n  a.navbar-item {\n    &:focus,\n    &:hover {\n      background-color: transparent; } } }\n\n.navbar-tabs {\n  @include overflow-touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.navbar-burger {\n  color: $navbar-burger-color;\n  @include hamburger($navbar-height);\n  margin-left: auto; }\n\n.navbar-menu {\n  display: none; }\n\n.navbar-item,\n.navbar-link {\n  color: $navbar-item-color;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n  .icon {\n    &:only-child {\n      margin-left: -0.25rem;\n      margin-right: -0.25rem; } } }\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n  &:focus,\n  &:focus-within,\n  &:hover,\n  &.is-active {\n    background-color: $navbar-item-hover-background-color;\n    color: $navbar-item-hover-color; } }\n\n.navbar-item {\n  display: block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  img {\n    max-height: $navbar-item-img-max-height; }\n  &.has-dropdown {\n    padding: 0; }\n  &.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1; }\n  &.is-tab {\n    border-bottom: 1px solid transparent;\n    min-height: $navbar-height;\n    padding-bottom: calc(0.5rem - 1px);\n    &:focus,\n    &:hover {\n      background-color: $navbar-tab-hover-background-color;\n      border-bottom-color: $navbar-tab-hover-border-bottom-color; }\n    &.is-active {\n      background-color: $navbar-tab-active-background-color;\n      border-bottom-color: $navbar-tab-active-border-bottom-color;\n      border-bottom-style: $navbar-tab-active-border-bottom-style;\n      border-bottom-width: $navbar-tab-active-border-bottom-width;\n      color: $navbar-tab-active-color;\n      padding-bottom: calc(0.5rem - #{$navbar-tab-active-border-bottom-width}); } } }\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1; }\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n  &::after {\n    @extend %arrow;\n    border-color: $navbar-dropdown-arrow;\n    margin-top: -0.375em;\n    right: 1.125em; } }\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n  .navbar-item {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; } }\n\n.navbar-divider {\n  background-color: $navbar-divider-background-color;\n  border: none;\n  display: none;\n  height: $navbar-divider-height;\n  margin: 0.5rem 0; }\n\n@include until($navbar-breakpoint) {\n  .navbar > .container {\n    display: block; }\n  .navbar-brand,\n  .navbar-tabs {\n    .navbar-item {\n      align-items: center;\n      display: flex; } }\n  .navbar-link {\n    &::after {\n      display: none; } }\n  .navbar-menu {\n    background-color: $navbar-background-color;\n    box-shadow: 0 8px 16px rgba($black, 0.1);\n    padding: 0.5rem 0;\n    &.is-active {\n      display: block; } }\n  // Fixed navbar\n  .navbar {\n    &.is-fixed-bottom-touch,\n    &.is-fixed-top-touch {\n      @include navbar-fixed; }\n    &.is-fixed-bottom-touch {\n      bottom: 0;\n      &.has-shadow {\n        box-shadow: 0 -2px 3px rgba($black, 0.1); } }\n    &.is-fixed-top-touch {\n      top: 0; }\n    &.is-fixed-top,\n    &.is-fixed-top-touch {\n      .navbar-menu {\n        @include overflow-touch;\n        max-height: calc(100vh - #{$navbar-height});\n        overflow: auto; } } }\n  html,\n  body {\n    &.has-navbar-fixed-top-touch {\n      padding-top: $navbar-height; }\n    &.has-navbar-fixed-bottom-touch {\n      padding-bottom: $navbar-height; } } }\n\n@include from($navbar-breakpoint) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex; }\n  .navbar {\n    min-height: $navbar-height;\n    &.is-spaced {\n      padding: $navbar-padding-vertical $navbar-padding-horizontal;\n      .navbar-start,\n      .navbar-end {\n        align-items: center; }\n      a.navbar-item,\n      .navbar-link {\n        border-radius: $radius; } }\n    &.is-transparent {\n      a.navbar-item,\n      .navbar-link {\n        &:focus,\n        &:hover,\n        &.is-active {\n          background-color: transparent !important; } }\n      .navbar-item.has-dropdown {\n        &.is-active,\n        &.is-hoverable:focus,\n        &.is-hoverable:focus-within,\n        &.is-hoverable:hover {\n          .navbar-link {\n            background-color: transparent !important; } } }\n      .navbar-dropdown {\n        a.navbar-item {\n          &:focus,\n          &:hover {\n            background-color: $navbar-dropdown-item-hover-background-color;\n            color: $navbar-dropdown-item-hover-color; }\n          &.is-active {\n            background-color: $navbar-dropdown-item-active-background-color;\n            color: $navbar-dropdown-item-active-color; } } } } }\n  .navbar-burger {\n    display: none; }\n  .navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex; }\n  .navbar-item {\n    display: flex;\n    &.has-dropdown {\n      align-items: stretch; }\n    &.has-dropdown-up {\n      .navbar-link::after {\n        transform: rotate(135deg) translate(0.25em, -0.25em); }\n      .navbar-dropdown {\n        border-bottom: $navbar-dropdown-border-top;\n        border-radius: $navbar-dropdown-radius $navbar-dropdown-radius 0 0;\n        border-top: none;\n        bottom: 100%;\n        box-shadow: 0 -8px 8px rgba($black, 0.1);\n        top: auto; } }\n    &.is-active,\n    &.is-hoverable:focus,\n    &.is-hoverable:focus-within,\n    &.is-hoverable:hover {\n      .navbar-dropdown {\n        display: block;\n        .navbar.is-spaced &,\n        &.is-boxed {\n          opacity: 1;\n          pointer-events: auto;\n          transform: translateY(0); } } } }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0; }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto; }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto; }\n  .navbar-dropdown {\n    background-color: $navbar-dropdown-background-color;\n    border-bottom-left-radius: $navbar-dropdown-radius;\n    border-bottom-right-radius: $navbar-dropdown-radius;\n    border-top: $navbar-dropdown-border-top;\n    box-shadow: 0 8px 8px rgba($black, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: $navbar-dropdown-z;\n    .navbar-item {\n      padding: 0.375rem 1rem;\n      white-space: nowrap; }\n    a.navbar-item {\n      padding-right: 3rem;\n      &:focus,\n      &:hover {\n        background-color: $navbar-dropdown-item-hover-background-color;\n        color: $navbar-dropdown-item-hover-color; }\n      &.is-active {\n        background-color: $navbar-dropdown-item-active-background-color;\n        color: $navbar-dropdown-item-active-color; } }\n    .navbar.is-spaced &,\n    &.is-boxed {\n      border-radius: $navbar-dropdown-boxed-radius;\n      border-top: none;\n      box-shadow: $navbar-dropdown-boxed-shadow;\n      display: block;\n      opacity: 0;\n      pointer-events: none;\n      top: calc(100% + (#{$navbar-dropdown-offset}));\n      transform: translateY(-5px);\n      transition-duration: $speed;\n      transition-property: opacity, transform; }\n    &.is-right {\n      left: auto;\n      right: 0; } }\n  .navbar-divider {\n    display: block; }\n  .navbar > .container,\n  .container > .navbar {\n    .navbar-brand {\n      margin-left: -.75rem; }\n    .navbar-menu {\n      margin-right: -.75rem; } }\n  // Fixed navbar\n  .navbar {\n    &.is-fixed-bottom-desktop,\n    &.is-fixed-top-desktop {\n      @include navbar-fixed; }\n    &.is-fixed-bottom-desktop {\n      bottom: 0;\n      &.has-shadow {\n        box-shadow: 0 -2px 3px rgba($black, 0.1); } }\n    &.is-fixed-top-desktop {\n      top: 0; } }\n  html,\n  body {\n    &.has-navbar-fixed-top-desktop {\n      padding-top: $navbar-height; }\n    &.has-navbar-fixed-bottom-desktop {\n      padding-bottom: $navbar-height; }\n    &.has-spaced-navbar-fixed-top {\n      padding-top: $navbar-height + ($navbar-padding-vertical * 2); }\n    &.has-spaced-navbar-fixed-bottom {\n      padding-bottom: $navbar-height + ($navbar-padding-vertical * 2); } }\n  // Hover/Active states\n  a.navbar-item,\n  .navbar-link {\n    &.is-active {\n      color: $navbar-item-active-color; }\n    &.is-active:not(:focus):not(:hover) {\n      background-color: $navbar-item-active-background-color; } }\n  .navbar-item.has-dropdown {\n    &:focus,\n    &:hover,\n    &.is-active {\n      .navbar-link {\n        background-color: $navbar-item-hover-background-color; } } } }\n\n// Combination\n\n.hero {\n  &.is-fullheight-with-navbar {\n    min-height: calc(100vh - #{$navbar-height}); } }\n","$pagination-color: $grey-darker !default;\n$pagination-border-color: $grey-lighter !default;\n$pagination-margin: -0.25rem !default;\n$pagination-min-width: $control-height !default;\n\n$pagination-item-font-size: 1em !default;\n$pagination-item-margin: 0.25rem !default;\n$pagination-item-padding-left: 0.5em !default;\n$pagination-item-padding-right: 0.5em !default;\n\n$pagination-hover-color: $link-hover !default;\n$pagination-hover-border-color: $link-hover-border !default;\n\n$pagination-focus-color: $link-focus !default;\n$pagination-focus-border-color: $link-focus-border !default;\n\n$pagination-active-color: $link-active !default;\n$pagination-active-border-color: $link-active-border !default;\n\n$pagination-disabled-color: $grey !default;\n$pagination-disabled-background-color: $grey-lighter !default;\n$pagination-disabled-border-color: $grey-lighter !default;\n\n$pagination-current-color: $link-invert !default;\n$pagination-current-background-color: $link !default;\n$pagination-current-border-color: $link !default;\n\n$pagination-ellipsis-color: $grey-light !default;\n\n$pagination-shadow-inset: inset 0 1px 2px rgba($black, 0.2);\n\n.pagination {\n  font-size: $size-normal;\n  margin: $pagination-margin;\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium; }\n  &.is-large {\n    font-size: $size-large; }\n  &.is-rounded {\n    .pagination-previous,\n    .pagination-next {\n      padding-left: 1em;\n      padding-right: 1em;\n      border-radius: $radius-rounded; }\n    .pagination-link {\n      border-radius: $radius-rounded; } } }\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  @extend %control;\n  @extend %unselectable;\n  font-size: $pagination-item-font-size;\n  justify-content: center;\n  margin: $pagination-item-margin;\n  padding-left: $pagination-item-padding-left;\n  padding-right: $pagination-item-padding-right;\n  text-align: center; }\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: $pagination-border-color;\n  color: $pagination-color;\n  min-width: $pagination-min-width;\n  &:hover {\n    border-color: $pagination-hover-border-color;\n    color: $pagination-hover-color; }\n  &:focus {\n    border-color: $pagination-focus-border-color; }\n  &:active {\n    box-shadow: $pagination-shadow-inset; }\n  &[disabled] {\n    background-color: $pagination-disabled-background-color;\n    border-color: $pagination-disabled-border-color;\n    box-shadow: none;\n    color: $pagination-disabled-color;\n    opacity: 0.5; } }\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n\n.pagination-link {\n  &.is-current {\n    background-color: $pagination-current-background-color;\n    border-color: $pagination-current-border-color;\n    color: $pagination-current-color; } }\n\n.pagination-ellipsis {\n  color: $pagination-ellipsis-color;\n  pointer-events: none; }\n\n.pagination-list {\n  flex-wrap: wrap; }\n\n@include mobile {\n  .pagination {\n    flex-wrap: wrap; }\n  .pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1; }\n  .pagination-list {\n    li {\n      flex-grow: 1;\n      flex-shrink: 1; } } }\n\n@include tablet {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1; }\n  .pagination-previous {\n    order: 2; }\n  .pagination-next {\n    order: 3; }\n  .pagination {\n    justify-content: space-between;\n    &.is-centered {\n      .pagination-previous {\n        order: 1; }\n      .pagination-list {\n        justify-content: center;\n        order: 2; }\n      .pagination-next {\n        order: 3; } }\n    &.is-right {\n      .pagination-previous {\n        order: 1; }\n      .pagination-next {\n        order: 2; }\n      .pagination-list {\n        justify-content: flex-end;\n        order: 3; } } } }\n","$panel-margin: $block-spacing !default;\n$panel-item-border: 1px solid $border !default;\n\n$panel-heading-background-color: $background !default;\n$panel-heading-color: $text-strong !default;\n$panel-heading-line-height: 1.25 !default;\n$panel-heading-padding: 0.5em 0.75em !default;\n$panel-heading-radius: $radius !default;\n$panel-heading-size: 1.25em !default;\n$panel-heading-weight: $weight-light !default;\n\n$panel-tabs-font-size: 0.875em !default;\n$panel-tab-border-bottom: 1px solid $border !default;\n$panel-tab-active-border-bottom-color: $link-active-border !default;\n$panel-tab-active-color: $link-active !default;\n\n$panel-list-item-color: $text !default;\n$panel-list-item-hover-color: $link !default;\n\n$panel-block-color: $text-strong !default;\n$panel-block-hover-background-color: $background !default;\n$panel-block-active-border-left-color: $link !default;\n$panel-block-active-color: $link-active !default;\n$panel-block-active-icon-color: $link !default;\n\n$panel-icon-color: $text-light !default;\n\n.panel {\n  font-size: $size-normal;\n  &:not(:last-child) {\n    margin-bottom: $panel-margin; } }\n\n.panel-heading,\n.panel-tabs,\n.panel-block {\n  border-bottom: $panel-item-border;\n  border-left: $panel-item-border;\n  border-right: $panel-item-border;\n  &:first-child {\n    border-top: $panel-item-border; } }\n\n.panel-heading {\n  background-color: $panel-heading-background-color;\n  border-radius: $panel-heading-radius $panel-heading-radius 0 0;\n  color: $panel-heading-color;\n  font-size: $panel-heading-size;\n  font-weight: $panel-heading-weight;\n  line-height: $panel-heading-line-height;\n  padding: $panel-heading-padding; }\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: $panel-tabs-font-size;\n  justify-content: center;\n  a {\n    border-bottom: $panel-tab-border-bottom;\n    margin-bottom: -1px;\n    padding: 0.5em;\n    // Modifiers\n    &.is-active {\n      border-bottom-color: $panel-tab-active-border-bottom-color;\n      color: $panel-tab-active-color; } } }\n\n.panel-list {\n  a {\n    color: $panel-list-item-color;\n    &:hover {\n      color: $panel-list-item-hover-color; } } }\n\n.panel-block {\n  align-items: center;\n  color: $panel-block-color;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n  input[type=\"checkbox\"] {\n    margin-right: 0.75em; }\n  & > .control {\n    flex-grow: 1;\n    flex-shrink: 1;\n    width: 100%; }\n  &.is-wrapped {\n    flex-wrap: wrap; }\n  &.is-active {\n    border-left-color: $panel-block-active-border-left-color;\n    color: $panel-block-active-color;\n    .panel-icon {\n      color: $panel-block-active-icon-color; } } }\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n  &:hover {\n    background-color: $panel-block-hover-background-color; } }\n\n.panel-icon {\n  @include fa(14px, 1em);\n  color: $panel-icon-color;\n  margin-right: 0.75em;\n  .fa {\n    font-size: inherit;\n    line-height: inherit; } }\n","$tabs-border-bottom-color: $border !default;\n$tabs-border-bottom-style: solid !default;\n$tabs-border-bottom-width: 1px !default;\n$tabs-link-color: $text !default;\n$tabs-link-hover-border-bottom-color: $text-strong !default;\n$tabs-link-hover-color: $text-strong !default;\n$tabs-link-active-border-bottom-color: $link !default;\n$tabs-link-active-color: $link !default;\n$tabs-link-padding: 0.5em 1em !default;\n\n$tabs-boxed-link-radius: $radius !default;\n$tabs-boxed-link-hover-background-color: $background !default;\n$tabs-boxed-link-hover-border-bottom-color: $border !default;\n\n$tabs-boxed-link-active-background-color: $white !default;\n$tabs-boxed-link-active-border-color: $border !default;\n$tabs-boxed-link-active-border-bottom-color: transparent !default;\n\n$tabs-toggle-link-border-color: $border !default;\n$tabs-toggle-link-border-style: solid !default;\n$tabs-toggle-link-border-width: 1px !default;\n$tabs-toggle-link-hover-background-color: $background !default;\n$tabs-toggle-link-hover-border-color: $border-hover !default;\n$tabs-toggle-link-radius: $radius !default;\n$tabs-toggle-link-active-background-color: $link !default;\n$tabs-toggle-link-active-border-color: $link !default;\n$tabs-toggle-link-active-color: $link-invert !default;\n\n.tabs {\n  @extend %block;\n  @include overflow-touch;\n  @extend %unselectable;\n  align-items: stretch;\n  display: flex;\n  font-size: $size-normal;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n  a {\n    align-items: center;\n    border-bottom-color: $tabs-border-bottom-color;\n    border-bottom-style: $tabs-border-bottom-style;\n    border-bottom-width: $tabs-border-bottom-width;\n    color: $tabs-link-color;\n    display: flex;\n    justify-content: center;\n    margin-bottom: -#{$tabs-border-bottom-width};\n    padding: $tabs-link-padding;\n    vertical-align: top;\n    &:hover {\n      border-bottom-color: $tabs-link-hover-border-bottom-color;\n      color: $tabs-link-hover-color; } }\n  li {\n    display: block;\n    &.is-active {\n      a {\n        border-bottom-color: $tabs-link-active-border-bottom-color;\n        color: $tabs-link-active-color; } } }\n  ul {\n    align-items: center;\n    border-bottom-color: $tabs-border-bottom-color;\n    border-bottom-style: $tabs-border-bottom-style;\n    border-bottom-width: $tabs-border-bottom-width;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    justify-content: flex-start;\n    &.is-left {\n      padding-right: 0.75em; }\n    &.is-center {\n      flex: none;\n      justify-content: center;\n      padding-left: 0.75em;\n      padding-right: 0.75em; }\n    &.is-right {\n      justify-content: flex-end;\n      padding-left: 0.75em; } }\n  .icon {\n    &:first-child {\n      margin-right: 0.5em; }\n    &:last-child {\n      margin-left: 0.5em; } }\n  // Alignment\n  &.is-centered {\n    ul {\n      justify-content: center; } }\n  &.is-right {\n    ul {\n      justify-content: flex-end; } }\n  // Styles\n  &.is-boxed {\n    a {\n      border: 1px solid transparent;\n      border-radius: $tabs-boxed-link-radius $tabs-boxed-link-radius 0 0;\n      &:hover {\n        background-color: $tabs-boxed-link-hover-background-color;\n        border-bottom-color: $tabs-boxed-link-hover-border-bottom-color; } }\n    li {\n      &.is-active {\n        a {\n          background-color: $tabs-boxed-link-active-background-color;\n          border-color: $tabs-boxed-link-active-border-color;\n          border-bottom-color: $tabs-boxed-link-active-border-bottom-color !important; } } } }\n  &.is-fullwidth {\n    li {\n      flex-grow: 1;\n      flex-shrink: 0; } }\n  &.is-toggle {\n    a {\n      border-color: $tabs-toggle-link-border-color;\n      border-style: $tabs-toggle-link-border-style;\n      border-width: $tabs-toggle-link-border-width;\n      margin-bottom: 0;\n      position: relative;\n      &:hover {\n        background-color: $tabs-toggle-link-hover-background-color;\n        border-color: $tabs-toggle-link-hover-border-color;\n        z-index: 2; } }\n    li {\n      & + li {\n        margin-left: -#{$tabs-toggle-link-border-width}; }\n      &:first-child a {\n        border-radius: $tabs-toggle-link-radius 0 0 $tabs-toggle-link-radius; }\n      &:last-child a {\n        border-radius: 0 $tabs-toggle-link-radius $tabs-toggle-link-radius 0; }\n      &.is-active {\n        a {\n          background-color: $tabs-toggle-link-active-background-color;\n          border-color: $tabs-toggle-link-active-border-color;\n          color: $tabs-toggle-link-active-color;\n          z-index: 1; } } }\n    ul {\n      border-bottom: none; }\n    &.is-toggle-rounded {\n      li {\n        &:first-child a {\n          border-bottom-left-radius: $radius-rounded;\n          border-top-left-radius: $radius-rounded;\n          padding-left: 1.25em; }\n        &:last-child a {\n          border-bottom-right-radius: $radius-rounded;\n          border-top-right-radius: $radius-rounded;\n          padding-right: 1.25em; } } } }\n  // Sizes\n  &.is-small {\n    font-size: $size-small; }\n  &.is-medium {\n    font-size: $size-medium; }\n  &.is-large {\n    font-size: $size-large; } }\n","$column-gap: 0.75rem !default;\n\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: $column-gap;\n  .columns.is-mobile > &.is-narrow {\n    flex: none; }\n  .columns.is-mobile > &.is-full {\n    flex: none;\n    width: 100%; }\n  .columns.is-mobile > &.is-three-quarters {\n    flex: none;\n    width: 75%; }\n  .columns.is-mobile > &.is-two-thirds {\n    flex: none;\n    width: 66.6666%; }\n  .columns.is-mobile > &.is-half {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > &.is-one-third {\n    flex: none;\n    width: 33.3333%; }\n  .columns.is-mobile > &.is-one-quarter {\n    flex: none;\n    width: 25%; }\n  .columns.is-mobile > &.is-one-fifth {\n    flex: none;\n    width: 20%; }\n  .columns.is-mobile > &.is-two-fifths {\n    flex: none;\n    width: 40%; }\n  .columns.is-mobile > &.is-three-fifths {\n    flex: none;\n    width: 60%; }\n  .columns.is-mobile > &.is-four-fifths {\n    flex: none;\n    width: 80%; }\n  .columns.is-mobile > &.is-offset-three-quarters {\n    margin-left: 75%; }\n  .columns.is-mobile > &.is-offset-two-thirds {\n    margin-left: 66.6666%; }\n  .columns.is-mobile > &.is-offset-half {\n    margin-left: 50%; }\n  .columns.is-mobile > &.is-offset-one-third {\n    margin-left: 33.3333%; }\n  .columns.is-mobile > &.is-offset-one-quarter {\n    margin-left: 25%; }\n  .columns.is-mobile > &.is-offset-one-fifth {\n    margin-left: 20%; }\n  .columns.is-mobile > &.is-offset-two-fifths {\n    margin-left: 40%; }\n  .columns.is-mobile > &.is-offset-three-fifths {\n    margin-left: 60%; }\n  .columns.is-mobile > &.is-offset-four-fifths {\n    margin-left: 80%; }\n  @for $i from 0 through 12 {\n    .columns.is-mobile > &.is-#{$i} {\n      flex: none;\n      width: percentage($i / 12); }\n    .columns.is-mobile > &.is-offset-#{$i} {\n      margin-left: percentage($i / 12); } }\n  @include mobile {\n    &.is-narrow-mobile {\n      flex: none; }\n    &.is-full-mobile {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-mobile {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-mobile {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-mobile {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-mobile {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-mobile {\n      flex: none;\n      width: 25%; }\n    &.is-one-fifth-mobile {\n      flex: none;\n      width: 20%; }\n    &.is-two-fifths-mobile {\n      flex: none;\n      width: 40%; }\n    &.is-three-fifths-mobile {\n      flex: none;\n      width: 60%; }\n    &.is-four-fifths-mobile {\n      flex: none;\n      width: 80%; }\n    &.is-offset-three-quarters-mobile {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%; }\n    &.is-offset-half-mobile {\n      margin-left: 50%; }\n    &.is-offset-one-third-mobile {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-mobile {\n      margin-left: 25%; }\n    &.is-offset-one-fifth-mobile {\n      margin-left: 20%; }\n    &.is-offset-two-fifths-mobile {\n      margin-left: 40%; }\n    &.is-offset-three-fifths-mobile {\n      margin-left: 60%; }\n    &.is-offset-four-fifths-mobile {\n      margin-left: 80%; }\n    @for $i from 0 through 12 {\n      &.is-#{$i}-mobile {\n        flex: none;\n        width: percentage($i / 12); }\n      &.is-offset-#{$i}-mobile {\n        margin-left: percentage($i / 12); } } }\n  @include tablet {\n    &.is-narrow,\n    &.is-narrow-tablet {\n      flex: none; }\n    &.is-full,\n    &.is-full-tablet {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters,\n    &.is-three-quarters-tablet {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds,\n    &.is-two-thirds-tablet {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half,\n    &.is-half-tablet {\n      flex: none;\n      width: 50%; }\n    &.is-one-third,\n    &.is-one-third-tablet {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter,\n    &.is-one-quarter-tablet {\n      flex: none;\n      width: 25%; }\n    &.is-one-fifth,\n    &.is-one-fifth-tablet {\n      flex: none;\n      width: 20%; }\n    &.is-two-fifths,\n    &.is-two-fifths-tablet {\n      flex: none;\n      width: 40%; }\n    &.is-three-fifths,\n    &.is-three-fifths-tablet {\n      flex: none;\n      width: 60%; }\n    &.is-four-fifths,\n    &.is-four-fifths-tablet {\n      flex: none;\n      width: 80%; }\n    &.is-offset-three-quarters,\n    &.is-offset-three-quarters-tablet {\n      margin-left: 75%; }\n    &.is-offset-two-thirds,\n    &.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%; }\n    &.is-offset-half,\n    &.is-offset-half-tablet {\n      margin-left: 50%; }\n    &.is-offset-one-third,\n    &.is-offset-one-third-tablet {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter,\n    &.is-offset-one-quarter-tablet {\n      margin-left: 25%; }\n    &.is-offset-one-fifth,\n    &.is-offset-one-fifth-tablet {\n      margin-left: 20%; }\n    &.is-offset-two-fifths,\n    &.is-offset-two-fifths-tablet {\n      margin-left: 40%; }\n    &.is-offset-three-fifths,\n    &.is-offset-three-fifths-tablet {\n      margin-left: 60%; }\n    &.is-offset-four-fifths,\n    &.is-offset-four-fifths-tablet {\n      margin-left: 80%; }\n    @for $i from 0 through 12 {\n      &.is-#{$i},\n      &.is-#{$i}-tablet {\n        flex: none;\n        width: percentage($i / 12); }\n      &.is-offset-#{$i},\n      &.is-offset-#{$i}-tablet {\n        margin-left: percentage($i / 12); } } }\n  @include touch {\n    &.is-narrow-touch {\n      flex: none; }\n    &.is-full-touch {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-touch {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-touch {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-touch {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-touch {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-touch {\n      flex: none;\n      width: 25%; }\n    &.is-one-fifth-touch {\n      flex: none;\n      width: 20%; }\n    &.is-two-fifths-touch {\n      flex: none;\n      width: 40%; }\n    &.is-three-fifths-touch {\n      flex: none;\n      width: 60%; }\n    &.is-four-fifths-touch {\n      flex: none;\n      width: 80%; }\n    &.is-offset-three-quarters-touch {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-touch {\n      margin-left: 66.6666%; }\n    &.is-offset-half-touch {\n      margin-left: 50%; }\n    &.is-offset-one-third-touch {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-touch {\n      margin-left: 25%; }\n    &.is-offset-one-fifth-touch {\n      margin-left: 20%; }\n    &.is-offset-two-fifths-touch {\n      margin-left: 40%; }\n    &.is-offset-three-fifths-touch {\n      margin-left: 60%; }\n    &.is-offset-four-fifths-touch {\n      margin-left: 80%; }\n    @for $i from 0 through 12 {\n      &.is-#{$i}-touch {\n        flex: none;\n        width: percentage($i / 12); }\n      &.is-offset-#{$i}-touch {\n        margin-left: percentage($i / 12); } } }\n  @include desktop {\n    &.is-narrow-desktop {\n      flex: none; }\n    &.is-full-desktop {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-desktop {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-desktop {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-desktop {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-desktop {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-desktop {\n      flex: none;\n      width: 25%; }\n    &.is-one-fifth-desktop {\n      flex: none;\n      width: 20%; }\n    &.is-two-fifths-desktop {\n      flex: none;\n      width: 40%; }\n    &.is-three-fifths-desktop {\n      flex: none;\n      width: 60%; }\n    &.is-four-fifths-desktop {\n      flex: none;\n      width: 80%; }\n    &.is-offset-three-quarters-desktop {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%; }\n    &.is-offset-half-desktop {\n      margin-left: 50%; }\n    &.is-offset-one-third-desktop {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-desktop {\n      margin-left: 25%; }\n    &.is-offset-one-fifth-desktop {\n      margin-left: 20%; }\n    &.is-offset-two-fifths-desktop {\n      margin-left: 40%; }\n    &.is-offset-three-fifths-desktop {\n      margin-left: 60%; }\n    &.is-offset-four-fifths-desktop {\n      margin-left: 80%; }\n    @for $i from 0 through 12 {\n      &.is-#{$i}-desktop {\n        flex: none;\n        width: percentage($i / 12); }\n      &.is-offset-#{$i}-desktop {\n        margin-left: percentage($i / 12); } } }\n  @include widescreen {\n    &.is-narrow-widescreen {\n      flex: none; }\n    &.is-full-widescreen {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-widescreen {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-widescreen {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-widescreen {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-widescreen {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-widescreen {\n      flex: none;\n      width: 25%; }\n    &.is-one-fifth-widescreen {\n      flex: none;\n      width: 20%; }\n    &.is-two-fifths-widescreen {\n      flex: none;\n      width: 40%; }\n    &.is-three-fifths-widescreen {\n      flex: none;\n      width: 60%; }\n    &.is-four-fifths-widescreen {\n      flex: none;\n      width: 80%; }\n    &.is-offset-three-quarters-widescreen {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%; }\n    &.is-offset-half-widescreen {\n      margin-left: 50%; }\n    &.is-offset-one-third-widescreen {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-widescreen {\n      margin-left: 25%; }\n    &.is-offset-one-fifth-widescreen {\n      margin-left: 20%; }\n    &.is-offset-two-fifths-widescreen {\n      margin-left: 40%; }\n    &.is-offset-three-fifths-widescreen {\n      margin-left: 60%; }\n    &.is-offset-four-fifths-widescreen {\n      margin-left: 80%; }\n    @for $i from 0 through 12 {\n      &.is-#{$i}-widescreen {\n        flex: none;\n        width: percentage($i / 12); }\n      &.is-offset-#{$i}-widescreen {\n        margin-left: percentage($i / 12); } } }\n  @include fullhd {\n    &.is-narrow-fullhd {\n      flex: none; }\n    &.is-full-fullhd {\n      flex: none;\n      width: 100%; }\n    &.is-three-quarters-fullhd {\n      flex: none;\n      width: 75%; }\n    &.is-two-thirds-fullhd {\n      flex: none;\n      width: 66.6666%; }\n    &.is-half-fullhd {\n      flex: none;\n      width: 50%; }\n    &.is-one-third-fullhd {\n      flex: none;\n      width: 33.3333%; }\n    &.is-one-quarter-fullhd {\n      flex: none;\n      width: 25%; }\n    &.is-one-fifth-fullhd {\n      flex: none;\n      width: 20%; }\n    &.is-two-fifths-fullhd {\n      flex: none;\n      width: 40%; }\n    &.is-three-fifths-fullhd {\n      flex: none;\n      width: 60%; }\n    &.is-four-fifths-fullhd {\n      flex: none;\n      width: 80%; }\n    &.is-offset-three-quarters-fullhd {\n      margin-left: 75%; }\n    &.is-offset-two-thirds-fullhd {\n      margin-left: 66.6666%; }\n    &.is-offset-half-fullhd {\n      margin-left: 50%; }\n    &.is-offset-one-third-fullhd {\n      margin-left: 33.3333%; }\n    &.is-offset-one-quarter-fullhd {\n      margin-left: 25%; }\n    &.is-offset-one-fifth-fullhd {\n      margin-left: 20%; }\n    &.is-offset-two-fifths-fullhd {\n      margin-left: 40%; }\n    &.is-offset-three-fifths-fullhd {\n      margin-left: 60%; }\n    &.is-offset-four-fifths-fullhd {\n      margin-left: 80%; }\n    @for $i from 0 through 12 {\n      &.is-#{$i}-fullhd {\n        flex: none;\n        width: percentage($i / 12); }\n      &.is-offset-#{$i}-fullhd {\n        margin-left: percentage($i / 12); } } } }\n\n.columns {\n  margin-left: (-$column-gap);\n  margin-right: (-$column-gap);\n  margin-top: (-$column-gap);\n  &:last-child {\n    margin-bottom: (-$column-gap); }\n  &:not(:last-child) {\n    margin-bottom: calc(1.5rem - #{$column-gap}); }\n  // Modifiers\n  &.is-centered {\n    justify-content: center; }\n  &.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    & > .column {\n      margin: 0;\n      padding: 0 !important; }\n    &:not(:last-child) {\n      margin-bottom: 1.5rem; }\n    &:last-child {\n      margin-bottom: 0; } }\n  &.is-mobile {\n    display: flex; }\n  &.is-multiline {\n    flex-wrap: wrap; }\n  &.is-vcentered {\n    align-items: center; }\n  // Responsiveness\n  @include tablet {\n    &:not(.is-desktop) {\n      display: flex; } }\n  @include desktop {\n    // Modifiers\n    &.is-desktop {\n      display: flex; } } }\n\n@if $variable-columns {\n  .columns.is-variable {\n    --columnGap: 0.75rem;\n    margin-left: calc(-1 * var(--columnGap));\n    margin-right: calc(-1 * var(--columnGap));\n    .column {\n      padding-left: var(--columnGap);\n      padding-right: var(--columnGap); }\n    @for $i from 0 through 8 {\n      &.is-#{$i} {\n        --columnGap: #{$i * 0.25rem}; }\n      @include mobile {\n        &.is-#{$i}-mobile {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include tablet {\n        &.is-#{$i}-tablet {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include tablet-only {\n        &.is-#{$i}-tablet-only {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include touch {\n        &.is-#{$i}-touch {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include desktop {\n        &.is-#{$i}-desktop {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include desktop-only {\n        &.is-#{$i}-desktop-only {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include widescreen {\n        &.is-#{$i}-widescreen {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include widescreen-only {\n        &.is-#{$i}-widescreen-only {\n          --columnGap: #{$i * 0.25rem}; } }\n      @include fullhd {\n        &.is-#{$i}-fullhd {\n          --columnGap: #{$i * 0.25rem}; } } } } }\n","$tile-spacing: 0.75rem !default;\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n  // Modifiers\n  &.is-ancestor {\n    margin-left: $tile-spacing * -1;\n    margin-right: $tile-spacing * -1;\n    margin-top: $tile-spacing * -1;\n    &:last-child {\n      margin-bottom: $tile-spacing * -1; }\n    &:not(:last-child) {\n      margin-bottom: $tile-spacing; } }\n  &.is-child {\n    margin: 0 !important; }\n  &.is-parent {\n    padding: $tile-spacing; }\n  &.is-vertical {\n    flex-direction: column;\n    & > .tile.is-child:not(:last-child) {\n      margin-bottom: 1.5rem !important; } }\n  // Responsiveness\n  @include tablet {\n    &:not(.is-child) {\n      display: flex; }\n    @for $i from 1 through 12 {\n      &.is-#{$i} {\n        flex: none;\n        width: ($i / 12) * 100%; } } } }\n","// Main container\n\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .navbar {\n    background: none; }\n  .tabs {\n    ul {\n      border-bottom: none; } }\n  // Colors\n  @each $name, $pair in $colors {\n    $color: nth($pair, 1);\n    $color-invert: nth($pair, 2);\n    &.is-#{$name} {\n      background-color: $color;\n      color: $color-invert;\n      a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n      strong {\n        color: inherit; }\n      .title {\n        color: $color-invert; }\n      .subtitle {\n        color: rgba($color-invert, 0.9);\n        a:not(.button),\n        strong {\n          color: $color-invert; } }\n      .navbar-menu {\n        @include touch {\n          background-color: $color; } }\n      .navbar-item,\n      .navbar-link {\n        color: rgba($color-invert, 0.7); }\n      a.navbar-item,\n      .navbar-link {\n        &:hover,\n        &.is-active {\n          background-color: darken($color, 5%);\n          color: $color-invert; } }\n      .tabs {\n        a {\n          color: $color-invert;\n          opacity: 0.9;\n          &:hover {\n            opacity: 1; } }\n        li {\n          &.is-active a {\n            opacity: 1; } }\n        &.is-boxed,\n        &.is-toggle {\n          a {\n            color: $color-invert;\n            &:hover {\n              background-color: rgba($black, 0.1); } }\n          li.is-active a {\n            &,\n            &:hover {\n              background-color: $color-invert;\n              border-color: $color-invert;\n              color: $color; } } } }\n      // Modifiers\n      &.is-bold {\n        $gradient-top-left: darken(saturate(adjust-hue($color, -10deg), 10%), 10%);\n        $gradient-bottom-right: lighten(saturate(adjust-hue($color, 10deg), 5%), 5%);\n        background-image: linear-gradient(141deg, $gradient-top-left 0%, $color 71%, $gradient-bottom-right 100%);\n        @include mobile {\n          .navbar-menu {\n            background-image: linear-gradient(141deg, $gradient-top-left 0%, $color 71%, $gradient-bottom-right 100%); } } } } }\n  // Sizes\n  &.is-small {\n    .hero-body {\n      padding-bottom: 1.5rem;\n      padding-top: 1.5rem; } }\n  &.is-medium {\n    @include tablet {\n      .hero-body {\n        padding-bottom: 9rem;\n        padding-top: 9rem; } } }\n  &.is-large {\n    @include tablet {\n      .hero-body {\n        padding-bottom: 18rem;\n        padding-top: 18rem; } } }\n  &.is-halfheight,\n  &.is-fullheight,\n  &.is-fullheight-with-navbar {\n    .hero-body {\n      align-items: center;\n      display: flex;\n      & > .container {\n        flex-grow: 1;\n        flex-shrink: 1; } } }\n  &.is-halfheight {\n    min-height: 50vh; }\n  &.is-fullheight {\n    min-height: 100vh; } }\n\n// Components\n\n.hero-video {\n  @extend %overlay;\n  overflow: hidden;\n  video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0); }\n  // Modifiers\n  &.is-transparent {\n    opacity: 0.3; }\n  // Responsiveness\n  @include mobile {\n    display: none; } }\n\n.hero-buttons {\n  margin-top: 1.5rem;\n  // Responsiveness\n  @include mobile {\n    .button {\n      display: flex;\n      &:not(:last-child) {\n        margin-bottom: 0.75rem; } } }\n  @include tablet {\n    display: flex;\n    justify-content: center;\n    .button:not(:last-child) {\n      margin-right: 1.5rem; } } }\n\n// Containers\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem; }\n","$section-padding: 3rem 1.5rem !default;\n$section-padding-medium: 9rem 1.5rem !default;\n$section-padding-large: 18rem 1.5rem !default;\n\n.section {\n  padding: $section-padding;\n  // Responsiveness\n  @include desktop {\n    // Sizes\n    &.is-medium {\n      padding: $section-padding-medium; }\n    &.is-large {\n      padding: $section-padding-large; } } }\n","$footer-background-color: $white-bis !default;\n$footer-color: false !default;\n$footer-padding: 3rem 1.5rem 6rem !default;\n\n.footer {\n  background-color: $footer-background-color;\n  padding: $footer-padding;\n  @if $footer-color {\n    color: $footer-color; } }\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.4.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a global context
    globalEval: function globalEval(code, options) {
      DOMEval(code, {
        nonce: options && options.nonce
      });
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // Support: Android <=4.0 only
    trim: function trim(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.4
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2019-04-08
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function funescape(_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"

      return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
      String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && rdescend.test(selector)) {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(","); // Expand context for sibling selectors

              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)


      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document


        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }

          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function CHILD(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (typeof elem.contentDocument !== "undefined") {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  var swap = function swap(elem, options, callback, args) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  }; // Support: IE <=9 only

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      // Make a writable jQuery.Event from the native event object
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;

      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  });
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    // Support: IE 9-11 only
    // Also use offsetWidth/offsetHeight for when box sizing is unreliable
    // We use getClientRects() to check for hidden/disconnected.
    // In those cases, the computed value can be trusted to be border-box


    if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = Date.now();
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url, options) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  }); // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=application-fb4ce53db19c8117ab8f.js.map