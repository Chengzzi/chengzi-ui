(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chengzi-ui"] = factory(require("vue"));
	else
		root["chengzi-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "343d");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00f2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_group_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bdad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_group_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_group_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_group_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "01f5":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("648a");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "03b3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0e44":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("88dd");
var anObject = __webpack_require__("a013");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("01f5")(Function.call, __webpack_require__("acb9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "0eb5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7b01")('asyncIterator');


/***/ }),

/***/ "0ff6":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("8b37");


/***/ }),

/***/ "1280":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
   Velocity jQuery Shim
*************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

;(function (window) {
    /***************
         Setup
    ***************/

    /* If jQuery is already loaded, there's no point in loading this shim. */
    if (window.jQuery) {
        return;
    }

    /* jQuery base. */
    var $ = function (selector, context) {
        return new $.fn.init(selector, context);
    };

    /********************
       Private Methods
    ********************/

    /* jQuery */
    $.isWindow = function (obj) {
        /* jshint eqeqeq: false */
        return obj != null && obj == obj.window;
    };

    /* jQuery */
    $.type = function (obj) {
        if (obj == null) {
            return obj + "";
        }

        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    };

    /* jQuery */
    $.isArray = Array.isArray || function (obj) {
        return $.type(obj) === "array";
    };

    /* jQuery */
    function isArraylike (obj) {
        var length = obj.length,
            type = $.type(obj);

        if (type === "function" || $.isWindow(obj)) {
            return false;
        }

        if (obj.nodeType === 1 && length) {
            return true;
        }

        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
    }

    /***************
       $ Methods
    ***************/

    /* jQuery: Support removed for IE<9. */
    $.isPlainObject = function (obj) {
        var key;

        if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
            return false;
        }

        try {
            if (obj.constructor &&
                !hasOwn.call(obj, "constructor") &&
                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            return false;
        }

        for (key in obj) {}

        return key === undefined || hasOwn.call(obj, key);
    };

    /* jQuery */
    $.each = function(obj, callback, args) {
        var value,
            i = 0,
            length = obj.length,
            isArray = isArraylike(obj);

        if (args) {
            if (isArray) {
                for (; i < length; i++) {
                    value = callback.apply(obj[i], args);

                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.apply(obj[i], args);

                    if (value === false) {
                        break;
                    }
                }
            }

        } else {
            if (isArray) {
                for (; i < length; i++) {
                    value = callback.call(obj[i], i, obj[i]);

                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.call(obj[i], i, obj[i]);

                    if (value === false) {
                        break;
                    }
                }
            }
        }

        return obj;
    };

    /* Custom */
    $.data = function (node, key, value) {
        /* $.getData() */
        if (value === undefined) {
            var id = node[$.expando],
                store = id && cache[id];

            if (key === undefined) {
                return store;
            } else if (store) {
                if (key in store) {
                    return store[key];
                }
            }
        /* $.setData() */
        } else if (key !== undefined) {
            var id = node[$.expando] || (node[$.expando] = ++$.uuid);

            cache[id] = cache[id] || {};
            cache[id][key] = value;

            return value;
        }
    };

    /* Custom */
    $.removeData = function (node, keys) {
        var id = node[$.expando],
            store = id && cache[id];

        if (store) {
            $.each(keys, function(_, key) {
                delete store[key];
            });
        }
    };

    /* jQuery */
    $.extend = function () {
        var src, copyIsArray, copy, name, options, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === "boolean") {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if (typeof target !== "object" && $.type(target) !== "function") {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && $.isArray(src) ? src : [];

                        } else {
                            clone = src && $.isPlainObject(src) ? src : {};
                        }

                        target[name] = $.extend(deep, clone, copy);

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    };

    /* jQuery 1.4.3 */
    $.queue = function (elem, type, data) {
        function $makeArray (arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    /* $.merge */
                    (function(first, second) {
                        var len = +second.length,
                            j = 0,
                            i = first.length;

                        while (j < len) {
                            first[i++] = second[j++];
                        }

                        if (len !== len) {
                            while (second[j] !== undefined) {
                                first[i++] = second[j++];
                            }
                        }

                        first.length = i;

                        return first;
                    })(ret, typeof arr === "string" ? [arr] : arr);
                } else {
                    [].push.call(ret, arr);
                }
            }

            return ret;
        }

        if (!elem) {
            return;
        }

        type = (type || "fx") + "queue";

        var q = $.data(elem, type);

        if (!data) {
            return q || [];
        }

        if (!q || $.isArray(data)) {
            q = $.data(elem, type, $makeArray(data));
        } else {
            q.push(data);
        }

        return q;
    };

    /* jQuery 1.4.3 */
    $.dequeue = function (elems, type) {
        /* Custom: Embed element iteration. */
        $.each(elems.nodeType ? [ elems ] : elems, function(i, elem) {
            type = type || "fx";

            var queue = $.queue(elem, type),
                fn = queue.shift();

            if (fn === "inprogress") {
                fn = queue.shift();
            }

            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                fn.call(elem, function() {
                    $.dequeue(elem, type);
                });
            }
        });
    };

    /******************
       $.fn Methods
    ******************/

    /* jQuery */
    $.fn = $.prototype = {
        init: function (selector) {
            /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
            if (selector.nodeType) {
                this[0] = selector;

                return this;
            } else {
                throw new Error("Not a DOM node.");
            }
        },

        offset: function () {
            /* jQuery altered code: Dropped disconnected DOM node checking. */
            var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };

            return {
                top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),
                left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)
            };
        },

        position: function () {
            /* jQuery */
            function offsetParent() {
                var offsetParent = this.offsetParent || document;

                while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }

                return offsetParent || document;
            }

            /* Zepto */
            var elem = this[0],
                offsetParent = offsetParent.apply(elem),
                offset = this.offset(),
                parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()

            offset.top -= parseFloat(elem.style.marginTop) || 0;
            offset.left -= parseFloat(elem.style.marginLeft) || 0;

            if (offsetParent.style) {
                parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0
                parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
            }

            return {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left
            };
        }
    };

    /**********************
       Private Variables
    **********************/

    /* For $.data() */
    var cache = {};
    $.expando = "velocity" + (new Date().getTime());
    $.uuid = 0;

    /* For $.queue() */
    var class2type = {},
        hasOwn = class2type.hasOwnProperty,
        toString = class2type.toString;

    var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
    for (var i = 0; i < types.length; i++) {
        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
    }

    /* Makes $(node) possible, without having to call init. */
    $.fn.init.prototype = $.fn;

    /* Globalize Velocity onto the window, and assign its Utilities property. */
    window.Velocity = { Utilities: $ };
})(window);

/******************
    Velocity.js
******************/

;(function (factory) {
    /* CommonJS module. */
    if ( true && typeof module.exports === "object") {
        module.exports = factory();
    /* AMD module. */
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /* Browser globals. */
    } else {}
}(function() {
return function (global, window, document, undefined) {

    /***************
        Summary
    ***************/

    /*
    - CSS: CSS stack that works independently from the rest of Velocity.
    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
    - completeCall(): Handles the cleanup process for each Velocity call.
    */

    /*********************
       Helper Functions
    *********************/

    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
    var IE = (function() {
        if (document.documentMode) {
            return document.documentMode;
        } else {
            for (var i = 7; i > 4; i--) {
                var div = document.createElement("div");

                div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

                if (div.getElementsByTagName("span").length) {
                    div = null;

                    return i;
                }
            }
        }

        return undefined;
    })();

    /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
    var rAFShim = (function() {
        var timeLast = 0;

        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
            var timeCurrent = (new Date()).getTime(),
                timeDelta;

            /* Dynamically set delay on a per-tick basis to match 60fps. */
            /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
            timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
            timeLast = timeCurrent + timeDelta;

            return setTimeout(function() { callback(timeCurrent + timeDelta); }, timeDelta);
        };
    })();

    /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
    function compactSparseArray (array) {
        var index = -1,
            length = array ? array.length : 0,
            result = [];

        while (++index < length) {
            var value = array[index];

            if (value) {
                result.push(value);
            }
        }

        return result;
    }

    function sanitizeElements (elements) {
        /* Unwrap jQuery/Zepto objects. */
        if (Type.isWrapped(elements)) {
            elements = [].slice.call(elements);
        /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
        } else if (Type.isNode(elements)) {
            elements = [ elements ];
        }

        return elements;
    }

    var Type = {
        isString: function (variable) {
            return (typeof variable === "string");
        },
        isArray: Array.isArray || function (variable) {
            return Object.prototype.toString.call(variable) === "[object Array]";
        },
        isFunction: function (variable) {
            return Object.prototype.toString.call(variable) === "[object Function]";
        },
        isNode: function (variable) {
            return variable && variable.nodeType;
        },
        /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
        isNodeList: function (variable) {
            return typeof variable === "object" &&
                /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
                variable.length !== undefined &&
                (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
        },
        /* Determine if variable is a wrapped jQuery or Zepto element. */
        isWrapped: function (variable) {
            return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
        },
        isSVG: function (variable) {
            return window.SVGElement && (variable instanceof window.SVGElement);
        },
        isEmptyObject: function (variable) {
            for (var name in variable) {
                return false;
            }

            return true;
        }
    };

    /*****************
       Dependencies
    *****************/

    var $,
        isJQuery = false;

    if (global.fn && global.fn.jquery) {
        $ = global;
        isJQuery = true;
    } else {
        $ = window.Velocity.Utilities;
    }

    if (IE <= 8 && !isJQuery) {
        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    } else if (IE <= 7) {
        /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
        jQuery.fn.velocity = jQuery.fn.animate;

        /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
        return;
    }

    /*****************
        Constants
    *****************/

    var DURATION_DEFAULT = 400,
        EASING_DEFAULT = "swing";

    /*************
        State
    *************/

    var Velocity = {
        /* Container for page-wide Velocity state data. */
        State: {
            /* Detect mobile devices to determine if mobileHA should be turned on. */
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            isChrome: window.chrome,
            isFirefox: /Firefox/i.test(navigator.userAgent),
            /* Create a cached element for re-use when checking for CSS property prefixes. */
            prefixElement: document.createElement("div"),
            /* Cache every prefix match to avoid repeating lookups. */
            prefixMatches: {},
            /* Cache the anchor used for animating window scrolling. */
            scrollAnchor: null,
            /* Cache the browser-specific property names associated with the scroll anchor. */
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            /* Keep track of whether our RAF tick is running. */
            isTicking: false,
            /* Container for every in-progress call to Velocity. */
            calls: []
        },
        /* Velocity's custom CSS stack. Made global for unit testing. */
        CSS: { /* Defined below. */ },
        /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
        Utilities: $,
        /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
        Redirects: { /* Manually registered by the user. */ },
        Easings: { /* Defined below. */ },
        /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
        Promise: window.Promise,
        /* Velocity option defaults, which can be overriden by the user. */
        defaults: {
            queue: "",
            duration: DURATION_DEFAULT,
            easing: EASING_DEFAULT,
            begin: undefined,
            complete: undefined,
            progress: undefined,
            display: undefined,
            visibility: undefined,
            loop: false,
            delay: false,
            mobileHA: true,
            /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
            _cacheValues: true
        },
        /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
        init: function (element) {
            $.data(element, "velocity", {
                /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
                isSVG: Type.isSVG(element),
                /* Keep track of whether the element is currently being animated by Velocity.
                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
                isAnimating: false,
                /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
                computedStyle: null,
                /* Tween data is cached for each animation on the element so that data can be passed across calls --
                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */
                tweensContainer: null,
                /* The full root property values of each CSS hook being animated on this element are cached so that:
                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
                rootPropertyValueCache: {},
                /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
                transformCache: {}
            });
        },
        /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
        hook: null, /* Defined below. */
        /* Velocity-wide animation time remapping for testing purposes. */
        mock: false,
        version: { major: 1, minor: 2, patch: 2 },
        /* Set to 1 or 2 (most verbose) to output debug info to console. */
        debug: false
    };

    /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
    if (window.pageYOffset !== undefined) {
        Velocity.State.scrollAnchor = window;
        Velocity.State.scrollPropertyLeft = "pageXOffset";
        Velocity.State.scrollPropertyTop = "pageYOffset";
    } else {
        Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
        Velocity.State.scrollPropertyLeft = "scrollLeft";
        Velocity.State.scrollPropertyTop = "scrollTop";
    }

    /* Shorthand alias for jQuery's $.data() utility. */
    function Data (element) {
        /* Hardcode a reference to the plugin name. */
        var response = $.data(element, "velocity");

        /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
        return response === null ? undefined : response;
    };

    /**************
        Easing
    **************/

    /* Step easing generator. */
    function generateStep (steps) {
        return function (p) {
            return Math.round(p * steps) * (1 / steps);
        };
    }

    /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    function generateBezier (mX1, mY1, mX2, mY2) {
        var NEWTON_ITERATIONS = 4,
            NEWTON_MIN_SLOPE = 0.001,
            SUBDIVISION_PRECISION = 0.0000001,
            SUBDIVISION_MAX_ITERATIONS = 10,
            kSplineTableSize = 11,
            kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
            float32ArraySupported = "Float32Array" in window;

        /* Must contain four arguments. */
        if (arguments.length !== 4) {
            return false;
        }

        /* Arguments must be numbers. */
        for (var i = 0; i < 4; ++i) {
            if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
                return false;
            }
        }

        /* X values must be in the [0, 1] range. */
        mX1 = Math.min(mX1, 1);
        mX2 = Math.min(mX2, 1);
        mX1 = Math.max(mX1, 0);
        mX2 = Math.max(mX2, 0);

        var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

        function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
        function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
        function C (aA1)      { return 3.0 * aA1; }

        function calcBezier (aT, aA1, aA2) {
            return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
        }

        function getSlope (aT, aA1, aA2) {
            return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
        }

        function newtonRaphsonIterate (aX, aGuessT) {
            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
                var currentSlope = getSlope(aGuessT, mX1, mX2);

                if (currentSlope === 0.0) return aGuessT;

                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                aGuessT -= currentX / currentSlope;
            }

            return aGuessT;
        }

        function calcSampleValues () {
            for (var i = 0; i < kSplineTableSize; ++i) {
                mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
        }

        function binarySubdivide (aX, aA, aB) {
            var currentX, currentT, i = 0;

            do {
                currentT = aA + (aB - aA) / 2.0;
                currentX = calcBezier(currentT, mX1, mX2) - aX;
                if (currentX > 0.0) {
                  aB = currentT;
                } else {
                  aA = currentT;
                }
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

            return currentT;
        }

        function getTForX (aX) {
            var intervalStart = 0.0,
                currentSample = 1,
                lastSample = kSplineTableSize - 1;

            for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += kSampleStepSize;
            }

            --currentSample;

            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]),
                guessForT = intervalStart + dist * kSampleStepSize,
                initialSlope = getSlope(guessForT, mX1, mX2);

            if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT);
            } else if (initialSlope == 0.0) {
                return guessForT;
            } else {
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
            }
        }

        var _precomputed = false;

        function precompute() {
            _precomputed = true;
            if (mX1 != mY1 || mX2 != mY2) calcSampleValues();
        }

        var f = function (aX) {
            if (!_precomputed) precompute();
            if (mX1 === mY1 && mX2 === mY2) return aX;
            if (aX === 0) return 0;
            if (aX === 1) return 1;

            return calcBezier(getTForX(aX), mY1, mY2);
        };

        f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };

        var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
        f.toString = function () { return str; };

        return f;
    }

    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
    var generateSpringRK4 = (function () {
        function springAccelerationForState (state) {
            return (-state.tension * state.x) - (state.friction * state.v);
        }

        function springEvaluateStateWithDerivative (initialState, dt, derivative) {
            var state = {
                x: initialState.x + derivative.dx * dt,
                v: initialState.v + derivative.dv * dt,
                tension: initialState.tension,
                friction: initialState.friction
            };

            return { dx: state.v, dv: springAccelerationForState(state) };
        }

        function springIntegrateState (state, dt) {
            var a = {
                    dx: state.v,
                    dv: springAccelerationForState(state)
                },
                b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
                c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
                d = springEvaluateStateWithDerivative(state, dt, c),
                dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
                dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

            state.x = state.x + dxdt * dt;
            state.v = state.v + dvdt * dt;

            return state;
        }

        return function springRK4Factory (tension, friction, duration) {

            var initState = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                },
                path = [0],
                time_lapsed = 0,
                tolerance = 1 / 10000,
                DT = 16 / 1000,
                have_duration, dt, last_state;

            tension = parseFloat(tension) || 500;
            friction = parseFloat(friction) || 20;
            duration = duration || null;

            initState.tension = tension;
            initState.friction = friction;

            have_duration = duration !== null;

            /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
            if (have_duration) {
                /* Run the simulation without a duration. */
                time_lapsed = springRK4Factory(tension, friction);
                /* Compute the adjusted time delta. */
                dt = time_lapsed / duration * DT;
            } else {
                dt = DT;
            }

            while (true) {
                /* Next/step function .*/
                last_state = springIntegrateState(last_state || initState, dt);
                /* Store the position. */
                path.push(1 + last_state.x);
                time_lapsed += 16;
                /* If the change threshold is reached, break. */
                if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
                    break;
                }
            }

            /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
               computed path and returns a snapshot of the position according to a given percentComplete. */
            return !have_duration ? time_lapsed : function(percentComplete) { return path[ (percentComplete * (path.length - 1)) | 0 ]; };
        };
    }());

    /* jQuery easings. */
    Velocity.Easings = {
        linear: function(p) { return p; },
        swing: function(p) { return 0.5 - Math.cos( p * Math.PI ) / 2 },
        /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
        spring: function(p) { return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6)); }
    };

    /* CSS3 and Robert Penner easings. */
    $.each(
        [
            [ "ease", [ 0.25, 0.1, 0.25, 1.0 ] ],
            [ "ease-in", [ 0.42, 0.0, 1.00, 1.0 ] ],
            [ "ease-out", [ 0.00, 0.0, 0.58, 1.0 ] ],
            [ "ease-in-out", [ 0.42, 0.0, 0.58, 1.0 ] ],
            [ "easeInSine", [ 0.47, 0, 0.745, 0.715 ] ],
            [ "easeOutSine", [ 0.39, 0.575, 0.565, 1 ] ],
            [ "easeInOutSine", [ 0.445, 0.05, 0.55, 0.95 ] ],
            [ "easeInQuad", [ 0.55, 0.085, 0.68, 0.53 ] ],
            [ "easeOutQuad", [ 0.25, 0.46, 0.45, 0.94 ] ],
            [ "easeInOutQuad", [ 0.455, 0.03, 0.515, 0.955 ] ],
            [ "easeInCubic", [ 0.55, 0.055, 0.675, 0.19 ] ],
            [ "easeOutCubic", [ 0.215, 0.61, 0.355, 1 ] ],
            [ "easeInOutCubic", [ 0.645, 0.045, 0.355, 1 ] ],
            [ "easeInQuart", [ 0.895, 0.03, 0.685, 0.22 ] ],
            [ "easeOutQuart", [ 0.165, 0.84, 0.44, 1 ] ],
            [ "easeInOutQuart", [ 0.77, 0, 0.175, 1 ] ],
            [ "easeInQuint", [ 0.755, 0.05, 0.855, 0.06 ] ],
            [ "easeOutQuint", [ 0.23, 1, 0.32, 1 ] ],
            [ "easeInOutQuint", [ 0.86, 0, 0.07, 1 ] ],
            [ "easeInExpo", [ 0.95, 0.05, 0.795, 0.035 ] ],
            [ "easeOutExpo", [ 0.19, 1, 0.22, 1 ] ],
            [ "easeInOutExpo", [ 1, 0, 0, 1 ] ],
            [ "easeInCirc", [ 0.6, 0.04, 0.98, 0.335 ] ],
            [ "easeOutCirc", [ 0.075, 0.82, 0.165, 1 ] ],
            [ "easeInOutCirc", [ 0.785, 0.135, 0.15, 0.86 ] ]
        ], function(i, easingArray) {
            Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
        });

    /* Determine the appropriate easing type given an easing input. */
    function getEasing(value, duration) {
        var easing = value;

        /* The easing option can either be a string that references a pre-registered easing,
           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
        if (Type.isString(value)) {
            /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
            if (!Velocity.Easings[value]) {
                easing = false;
            }
        } else if (Type.isArray(value) && value.length === 1) {
            easing = generateStep.apply(null, value);
        } else if (Type.isArray(value) && value.length === 2) {
            /* springRK4 must be passed the animation's duration. */
            /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
               function generated with default tension and friction values. */
            easing = generateSpringRK4.apply(null, value.concat([ duration ]));
        } else if (Type.isArray(value) && value.length === 4) {
            /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
            easing = generateBezier.apply(null, value);
        } else {
            easing = false;
        }

        /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
           if the Velocity-wide default has been incorrectly modified. */
        if (easing === false) {
            if (Velocity.Easings[Velocity.defaults.easing]) {
                easing = Velocity.defaults.easing;
            } else {
                easing = EASING_DEFAULT;
            }
        }

        return easing;
    }

    /*****************
        CSS Stack
    *****************/

    /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
    /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
    var CSS = Velocity.CSS = {

        /*************
            RegEx
        *************/

        RegEx: {
            isHex: /^#([A-f\d]{3}){1,2}$/i,
            /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
        },

        /************
            Lists
        ************/

        Lists: {
            colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
            transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
            transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
        },

        /************
            Hooks
        ************/

        /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
        /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
        Hooks: {
            /********************
                Registration
            ********************/

            /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
            /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
            templates: {
                "textShadow": [ "Color X Y Blur", "black 0px 0px 0px" ],
                "boxShadow": [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
                "clip": [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
                "backgroundPosition": [ "X Y", "0% 0%" ],
                "transformOrigin": [ "X Y Z", "50% 50% 0px" ],
                "perspectiveOrigin": [ "X Y", "50% 50%" ]
            },

            /* A "registered" hook is one that has been converted from its template form into a live,
               tweenable property. It contains data to associate it with its root property. */
            registered: {
                /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
                   which consists of the subproperty's name, the associated root property's name,
                   and the subproperty's position in the root's value. */
            },
            /* Convert the templates into individual hooks then append them to the registered object above. */
            register: function () {
                /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
                   currently set to "transparent" default to their respective template below when color-animated,
                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
                   which is almost always set closer to black than white. */
                for (var i = 0; i < CSS.Lists.colors.length; i++) {
                    var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
                    CSS.Hooks.templates[CSS.Lists.colors[i]] = [ "Red Green Blue Alpha", rgbComponents ];
                }

                var rootProperty,
                    hookTemplate,
                    hookNames;

                /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
                   Thus, we re-arrange the templates accordingly. */
                if (IE) {
                    for (rootProperty in CSS.Hooks.templates) {
                        hookTemplate = CSS.Hooks.templates[rootProperty];
                        hookNames = hookTemplate[0].split(" ");

                        var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

                        if (hookNames[0] === "Color") {
                            /* Reposition both the hook's name and its default value to the end of their respective strings. */
                            hookNames.push(hookNames.shift());
                            defaultValues.push(defaultValues.shift());

                            /* Replace the existing template for the hook's root property. */
                            CSS.Hooks.templates[rootProperty] = [ hookNames.join(" "), defaultValues.join(" ") ];
                        }
                    }
                }

                /* Hook registration. */
                for (rootProperty in CSS.Hooks.templates) {
                    hookTemplate = CSS.Hooks.templates[rootProperty];
                    hookNames = hookTemplate[0].split(" ");

                    for (var i in hookNames) {
                        var fullHookName = rootProperty + hookNames[i],
                            hookPosition = i;

                        /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
                           and the hook's position in its template's default value string. */
                        CSS.Hooks.registered[fullHookName] = [ rootProperty, hookPosition ];
                    }
                }
            },

            /*****************************
               Injection and Extraction
            *****************************/

            /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
            /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
            getRoot: function (property) {
                var hookData = CSS.Hooks.registered[property];

                if (hookData) {
                    return hookData[0];
                } else {
                    /* If there was no hook match, return the property name untouched. */
                    return property;
                }
            },
            /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
               the targeted hook can be injected or extracted at its standard position. */
            cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
                /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
                if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
                    rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
                }

                /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
                   default to the root's default value as defined in CSS.Hooks.templates. */
                /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
                if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                }

                return rootPropertyValue;
            },
            /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
            extractValue: function (fullHookName, rootPropertyValue) {
                var hookData = CSS.Hooks.registered[fullHookName];

                if (hookData) {
                    var hookRoot = hookData[0],
                        hookPosition = hookData[1];

                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

                    /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
                    return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
                } else {
                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
                    return rootPropertyValue;
                }
            },
            /* Inject the hook's value into its root property's value. This is used to piece back together the root property
               once Velocity has updated one of its individually hooked values through tweening. */
            injectValue: function (fullHookName, hookValue, rootPropertyValue) {
                var hookData = CSS.Hooks.registered[fullHookName];

                if (hookData) {
                    var hookRoot = hookData[0],
                        hookPosition = hookData[1],
                        rootPropertyValueParts,
                        rootPropertyValueUpdated;

                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

                    /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
                       then reconstruct the rootPropertyValue string. */
                    rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
                    rootPropertyValueParts[hookPosition] = hookValue;
                    rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

                    return rootPropertyValueUpdated;
                } else {
                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
                    return rootPropertyValue;
                }
            }
        },

        /*******************
           Normalizations
        *******************/

        /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
        Normalizations: {
            /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
               the targeted element (which may need to be queried), and the targeted property value. */
            registered: {
                clip: function (type, element, propertyValue) {
                    switch (type) {
                        case "name":
                            return "clip";
                        /* Clip needs to be unwrapped and stripped of its commas during extraction. */
                        case "extract":
                            var extracted;

                            /* If Velocity also extracted this value, skip extraction. */
                            if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                extracted = propertyValue;
                            } else {
                                /* Remove the "rect()" wrapper. */
                                extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

                                /* Strip off commas. */
                                extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
                            }

                            return extracted;
                        /* Clip needs to be re-wrapped during injection. */
                        case "inject":
                            return "rect(" + propertyValue + ")";
                    }
                },

                blur: function(type, element, propertyValue) {
                    switch (type) {
                        case "name":
                            return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
                        case "extract":
                            var extracted = parseFloat(propertyValue);

                            /* If extracted is NaN, meaning the value isn't already extracted. */
                            if (!(extracted || extracted === 0)) {
                                var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

                                /* If the filter string had a blur component, return just the blur value and unit type. */
                                if (blurComponent) {
                                    extracted = blurComponent[1];
                                /* If the component doesn't exist, default blur to 0. */
                                } else {
                                    extracted = 0;
                                }
                            }

                            return extracted;
                        /* Blur needs to be re-wrapped during injection. */
                        case "inject":
                            /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
                            if (!parseFloat(propertyValue)) {
                                return "none";
                            } else {
                                return "blur(" + propertyValue + ")";
                            }
                    }
                },

                /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
                opacity: function (type, element, propertyValue) {
                    if (IE <= 8) {
                        switch (type) {
                            case "name":
                                return "filter";
                            case "extract":
                                /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
                                var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

                                if (extracted) {
                                    /* Convert to decimal value. */
                                    propertyValue = extracted[1] / 100;
                                } else {
                                    /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
                                    propertyValue = 1;
                                }

                                return propertyValue;
                            case "inject":
                                /* Opacified elements are required to have their zoom property set to a non-zero value. */
                                element.style.zoom = 1;

                                /* Setting the filter property on elements with certain font property combinations can result in a
                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
                                if (parseFloat(propertyValue) >= 1) {
                                    return "";
                                } else {
                                  /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
                                  return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
                                }
                        }
                    /* With all other browsers, normalization is not required; return the same values that were passed in. */
                    } else {
                        switch (type) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return propertyValue;
                            case "inject":
                                return propertyValue;
                        }
                    }
                }
            },

            /*****************************
                Batched Registrations
            *****************************/

            /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
            register: function () {

                /*****************
                    Transforms
                *****************/

                /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
                   so that they can be referenced in a properties map by their individual names. */
                /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
                   once when multiple transform subproperties are being animated simultaneously. */
                /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
                   from being normalized for these browsers so that tweening skips these properties altogether
                   (since it will ignore them as being unsupported by the browser.) */
                if (!(IE <= 9) && !Velocity.State.isGingerbread) {
                    /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
                    CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
                }

                for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
                    /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
                    (function() {
                        var transformName = CSS.Lists.transformsBase[i];

                        CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
                            switch (type) {
                                /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
                                case "name":
                                    return "transform";
                                /* Transform values are cached onto a per-element transformCache object. */
                                case "extract":
                                    /* If this transform has yet to be assigned a value, return its null value. */
                                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                                        /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
                                        return /^scale/i.test(transformName) ? 1 : 0;
                                    /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
                                    } else {
                                        return Data(element).transformCache[transformName].replace(/[()]/g, "");
                                    }
                                case "inject":
                                    var invalid = false;

                                    /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
                                    /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
                                    switch (transformName.substr(0, transformName.length - 1)) {
                                        /* Whitelist unit types for each transform. */
                                        case "translate":
                                            invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
                                            break;
                                        /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
                                        case "scal":
                                        case "scale":
                                            /* Chrome on Android has a bug in which scaled elements blur if their initial scale
                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
                                            if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
                                                propertyValue = 1;
                                            }

                                            invalid = !/(\d)$/i.test(propertyValue);
                                            break;
                                        case "skew":
                                            invalid = !/(deg|\d)$/i.test(propertyValue);
                                            break;
                                        case "rotate":
                                            invalid = !/(deg|\d)$/i.test(propertyValue);
                                            break;
                                    }

                                    if (!invalid) {
                                        /* As per the CSS spec, wrap the value in parentheses. */
                                        Data(element).transformCache[transformName] = "(" + propertyValue + ")";
                                    }

                                    /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
                                    return Data(element).transformCache[transformName];
                            }
                        };
                    })();
                }

                /*************
                    Colors
                *************/

                /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
                for (var i = 0; i < CSS.Lists.colors.length; i++) {
                    /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
                       (Otherwise, all functions would take the final for loop's colorName.) */
                    (function () {
                        var colorName = CSS.Lists.colors[i];

                        /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
                        CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
                            switch (type) {
                                case "name":
                                    return colorName;
                                /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
                                case "extract":
                                    var extracted;

                                    /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
                                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                        extracted = propertyValue;
                                    } else {
                                        var converted,
                                            colorNames = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };

                                        /* Convert color names to rgb. */
                                        if (/^[A-z]+$/i.test(propertyValue)) {
                                            if (colorNames[propertyValue] !== undefined) {
                                                converted = colorNames[propertyValue]
                                            } else {
                                                /* If an unmatched color name is provided, default to black. */
                                                converted = colorNames.black;
                                            }
                                        /* Convert hex values to rgb. */
                                        } else if (CSS.RegEx.isHex.test(propertyValue)) {
                                            converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
                                        /* If the provided color doesn't match any of the accepted color formats, default to black. */
                                        } else if (!(/^rgba?\(/i.test(propertyValue))) {
                                            converted = colorNames.black;
                                        }

                                        /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
                                           repeated spaces (in case the value included spaces to begin with). */
                                        extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                    }

                                    /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
                                    if (!(IE <= 8) && extracted.split(" ").length === 3) {
                                        extracted += " 1";
                                    }

                                    return extracted;
                                case "inject":
                                    /* If this is IE<=8 and an alpha component exists, strip it off. */
                                    if (IE <= 8) {
                                        if (propertyValue.split(" ").length === 4) {
                                            propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
                                        }
                                    /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
                                    } else if (propertyValue.split(" ").length === 3) {
                                        propertyValue += " 1";
                                    }

                                    /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
                                       on all values but the fourth (R, G, and B only accept whole numbers). */
                                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }
                        };
                    })();
                }
            }
        },

        /************************
           CSS Property Names
        ************************/

        Names: {
            /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
               Camelcasing is used to normalize property names between and across calls. */
            camelCase: function (property) {
                return property.replace(/-(\w)/g, function (match, subMatch) {
                    return subMatch.toUpperCase();
                });
            },

            /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
            SVGAttribute: function (property) {
                var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

                /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
                if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
                    SVGAttributes += "|transform";
                }

                return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
            },

            /* Determine whether a property should be set with a vendor prefix. */
            /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
               If the property is not at all supported by the browser, return a false flag. */
            prefixCheck: function (property) {
                /* If this property has already been checked, return the cached value. */
                if (Velocity.State.prefixMatches[property]) {
                    return [ Velocity.State.prefixMatches[property], true ];
                } else {
                    var vendors = [ "", "Webkit", "Moz", "ms", "O" ];

                    for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
                        var propertyPrefixed;

                        if (i === 0) {
                            propertyPrefixed = property;
                        } else {
                            /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
                            propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) { return match.toUpperCase(); });
                        }

                        /* Check if the browser supports this property as prefixed. */
                        if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
                            /* Cache the match. */
                            Velocity.State.prefixMatches[property] = propertyPrefixed;

                            return [ propertyPrefixed, true ];
                        }
                    }

                    /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
                    return [ property, false ];
                }
            }
        },

        /************************
           CSS Property Values
        ************************/

        Values: {
            /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
            hexToRgb: function (hex) {
                var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                    rgbParts;

                hex = hex.replace(shortformRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                });

                rgbParts = longformRegex.exec(hex);

                return rgbParts ? [ parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16) ] : [ 0, 0, 0 ];
            },

            isCSSNullValue: function (value) {
                /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
                   Thus, we check for both falsiness and these special strings. */
                /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
                /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
                return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
            },

            /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
            getUnitType: function (property) {
                if (/^(rotate|skew)/i.test(property)) {
                    return "deg";
                } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
                    /* The above properties are unitless. */
                    return "";
                } else {
                    /* Default to px for all other properties. */
                    return "px";
                }
            },

            /* HTML elements default to an associated display type when they're not set to display:none. */
            /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
            getDisplayType: function (element) {
                var tagName = element && element.tagName.toString().toLowerCase();

                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
                    return "inline";
                } else if (/^(li)$/i.test(tagName)) {
                    return "list-item";
                } else if (/^(tr)$/i.test(tagName)) {
                    return "table-row";
                } else if (/^(table)$/i.test(tagName)) {
                    return "table";
                } else if (/^(tbody)$/i.test(tagName)) {
                    return "table-row-group";
                /* Default to "block" when no match is found. */
                } else {
                    return "block";
                }
            },

            /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
            addClass: function (element, className) {
                if (element.classList) {
                    element.classList.add(className);
                } else {
                    element.className += (element.className.length ? " " : "") + className;
                }
            },

            removeClass: function (element, className) {
                if (element.classList) {
                    element.classList.remove(className);
                } else {
                    element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                }
            }
        },

        /****************************
           Style Getting & Setting
        ****************************/

        /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
        getPropertyValue: function (element, property, rootPropertyValue, forceStyleLookup) {
            /* Get an element's computed property value. */
            /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
            function computePropertyValue (element, property) {
                /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
                   We subtract border and padding to get the sum of interior + scrollbar. */
                var computedValue = 0;

                /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
                if (IE <= 8) {
                    computedValue = $.css(element, property); /* GET */
                /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
                   associated element so that it does not need to be refetched upon every GET. */
                } else {
                    /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
                       toggle display to the element type's default value. */
                    var toggleDisplay = false;

                    if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
                        toggleDisplay = true;
                        CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
                    }

                    function revertDisplay () {
                        if (toggleDisplay) {
                            CSS.setPropertyValue(element, "display", "none");
                        }
                    }

                    if (!forceStyleLookup) {
                        if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                            var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
                            revertDisplay();

                            return contentBoxHeight;
                        } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                            var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
                            revertDisplay();

                            return contentBoxWidth;
                        }
                    }

                    var computedStyle;

                    /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
                    if (Data(element) === undefined) {
                        computedStyle = window.getComputedStyle(element, null); /* GET */
                    /* If the computedStyle object has yet to be cached, do so now. */
                    } else if (!Data(element).computedStyle) {
                        computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
                    /* If computedStyle is cached, use it. */
                    } else {
                        computedStyle = Data(element).computedStyle;
                    }

                    /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
                    if (property === "borderColor") {
                        property = "borderTopColor";
                    }

                    /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
                    if (IE === 9 && property === "filter") {
                        computedValue = computedStyle.getPropertyValue(property); /* GET */
                    } else {
                        computedValue = computedStyle[property];
                    }

                    /* Fall back to the property's style value (if defined) when computedValue returns nothing,
                       which can happen when the element hasn't been painted. */
                    if (computedValue === "" || computedValue === null) {
                        computedValue = element.style[property];
                    }

                    revertDisplay();
                }

                /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
                   effect as being set to 0, so no conversion is necessary.) */
                /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
                if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
                    var position = computePropertyValue(element, "position"); /* GET */

                    /* For absolute positioning, jQuery's $.position() only returns values for top and left;
                       right and bottom will have their "auto" value reverted to 0. */
                    /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
                       Not a big deal since we're currently in a GET batch anyway. */
                    if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
                        /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
                        computedValue = $(element).position()[property] + "px"; /* GET */
                    }
                }

                return computedValue;
            }

            var propertyValue;

            /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
            if (CSS.Hooks.registered[property]) {
                var hook = property,
                    hookRoot = CSS.Hooks.getRoot(hook);

                /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
                   query the DOM for the root property's value. */
                if (rootPropertyValue === undefined) {
                    /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
                    rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
                }

                /* If this root has a normalization registered, peform the associated normalization extraction. */
                if (CSS.Normalizations.registered[hookRoot]) {
                    rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
                }

                /* Extract the hook's value. */
                propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

            /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
               normalize the property's name and value, and handle the special case of transforms. */
            /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
               numerical and therefore do not require normalization extraction. */
            } else if (CSS.Normalizations.registered[property]) {
                var normalizedPropertyName,
                    normalizedPropertyValue;

                normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

                /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
                if (normalizedPropertyName !== "transform") {
                    normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

                    /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
                    if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
                        normalizedPropertyValue = CSS.Hooks.templates[property][1];
                    }
                }

                propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
            }

            /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
            if (!/^[\d-]/.test(propertyValue)) {
                /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
                   their HTML attribute values instead of their CSS style values. */
                if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
                    /* Since the height/width attribute values must be set manually, they don't reflect computed values.
                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
                    if (/^(height|width)$/i.test(property)) {
                        /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
                        try {
                            propertyValue = element.getBBox()[property];
                        } catch (error) {
                            propertyValue = 0;
                        }
                    /* Otherwise, access the attribute value directly. */
                    } else {
                        propertyValue = element.getAttribute(property);
                    }
                } else {
                    propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
                }
            }

            /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
               convert CSS null-values to an integer of value 0. */
            if (CSS.Values.isCSSNullValue(propertyValue)) {
                propertyValue = 0;
            }

            if (Velocity.debug >= 2) console.log("Get " + property + ": " + propertyValue);

            return propertyValue;
        },

        /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
        setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
            var propertyName = property;

            /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
            if (property === "scroll") {
                /* If a container option is present, scroll the container instead of the browser window. */
                if (scrollData.container) {
                    scrollData.container["scroll" + scrollData.direction] = propertyValue;
                /* Otherwise, Velocity defaults to scrolling the browser window. */
                } else {
                    if (scrollData.direction === "Left") {
                        window.scrollTo(propertyValue, scrollData.alternateValue);
                    } else {
                        window.scrollTo(scrollData.alternateValue, propertyValue);
                    }
                }
            } else {
                /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
                   Thus, for now, we merely cache transforms being SET. */
                if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
                    /* Perform a normalization injection. */
                    /* Note: The normalization logic handles the transformCache updating. */
                    CSS.Normalizations.registered[property]("inject", element, propertyValue);

                    propertyName = "transform";
                    propertyValue = Data(element).transformCache[property];
                } else {
                    /* Inject hooks. */
                    if (CSS.Hooks.registered[property]) {
                        var hookName = property,
                            hookRoot = CSS.Hooks.getRoot(property);

                        /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
                        rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

                        propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
                        property = hookRoot;
                    }

                    /* Normalize names and values. */
                    if (CSS.Normalizations.registered[property]) {
                        propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
                        property = CSS.Normalizations.registered[property]("name", element);
                    }

                    /* Assign the appropriate vendor prefix before performing an official style update. */
                    propertyName = CSS.Names.prefixCheck(property)[0];

                    /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
                       Try/catch is avoided for other browsers since it incurs a performance overhead. */
                    if (IE <= 8) {
                        try {
                            element.style[propertyName] = propertyValue;
                        } catch (error) { if (Velocity.debug) console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]"); }
                    /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
                    /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
                    } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
                        /* Note: For SVG attributes, vendor-prefixed property names are never used. */
                        /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
                        element.setAttribute(property, propertyValue);
                    } else {
                        element.style[propertyName] = propertyValue;
                    }

                    if (Velocity.debug >= 2) console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
                }
            }

            /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
            return [ propertyName, propertyValue ];
        },

        /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
        /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
        flushTransformCache: function(element) {
            var transformString = "";

            /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
            if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
                /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
                function getTransformFloat (transformProperty) {
                    return parseFloat(CSS.getPropertyValue(element, transformProperty));
                }

                /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
                var SVGTransforms = {
                    translate: [ getTransformFloat("translateX"), getTransformFloat("translateY") ],
                    skewX: [ getTransformFloat("skewX") ], skewY: [ getTransformFloat("skewY") ],
                    /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
                       (this behavior mimics the result of animating all these properties at once on HTML elements). */
                    scale: getTransformFloat("scale") !== 1 ? [ getTransformFloat("scale"), getTransformFloat("scale") ] : [ getTransformFloat("scaleX"), getTransformFloat("scaleY") ],
                    /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
                       defining the rotation's origin point. We ignore the origin values (default them to 0). */
                    rotate: [ getTransformFloat("rotateZ"), 0, 0 ]
                };

                /* Iterate through the transform properties in the user-defined property map order.
                   (This mimics the behavior of non-SVG transform animation.) */
                $.each(Data(element).transformCache, function(transformName) {
                    /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
                       properties so that they match up with SVG's accepted transform properties. */
                    if (/^translate/i.test(transformName)) {
                        transformName = "translate";
                    } else if (/^scale/i.test(transformName)) {
                        transformName = "scale";
                    } else if (/^rotate/i.test(transformName)) {
                        transformName = "rotate";
                    }

                    /* Check that we haven't yet deleted the property from the SVGTransforms container. */
                    if (SVGTransforms[transformName]) {
                        /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
                        transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

                        /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
                           re-insert the same master property if we encounter another one of its axis-specific properties. */
                        delete SVGTransforms[transformName];
                    }
                });
            } else {
                var transformValue,
                    perspective;

                /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
                $.each(Data(element).transformCache, function(transformName) {
                    transformValue = Data(element).transformCache[transformName];

                    /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
                    if (transformName === "transformPerspective") {
                        perspective = transformValue;
                        return true;
                    }

                    /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
                    if (IE === 9 && transformName === "rotateZ") {
                        transformName = "rotate";
                    }

                    transformString += transformName + transformValue + " ";
                });

                /* If present, set the perspective subproperty first. */
                if (perspective) {
                    transformString = "perspective" + perspective + " " + transformString;
                }
            }

            CSS.setPropertyValue(element, "transform", transformString);
        }
    };

    /* Register hooks and normalizations. */
    CSS.Hooks.register();
    CSS.Normalizations.register();

    /* Allow hook setting in the same fashion as jQuery's $.css(). */
    Velocity.hook = function (elements, arg2, arg3) {
        var value = undefined;

        elements = sanitizeElements(elements);

        $.each(elements, function(i, element) {
            /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
            if (Data(element) === undefined) {
                Velocity.init(element);
            }

            /* Get property value. If an element set was passed in, only return the value for the first element. */
            if (arg3 === undefined) {
                if (value === undefined) {
                    value = Velocity.CSS.getPropertyValue(element, arg2);
                }
            /* Set property value. */
            } else {
                /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
                var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);

                /* Transform properties don't automatically set. They have to be flushed to the DOM. */
                if (adjustedSet[0] === "transform") {
                    Velocity.CSS.flushTransformCache(element);
                }

                value = adjustedSet;
            }
        });

        return value;
    };

    /*****************
        Animation
    *****************/

    var animate = function() {

        /******************
            Call Chain
        ******************/

        /* Logic for determining what to return to the call stack when exiting out of Velocity. */
        function getChain () {
            /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
               default to null instead of returning the targeted elements so that utility function's return value is standardized. */
            if (isUtility) {
                return promiseData.promise || null;
            /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
            } else {
                return elementsWrapped;
            }
        }

        /*************************
           Arguments Assignment
        *************************/

        /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
           objects are defined on a container object that's passed in as Velocity's sole argument. */
        /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
        var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
            /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
            isUtility,
            /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
            elementsWrapped,
            argumentIndex;

        var elements,
            propertiesMap,
            options;

        /* Detect jQuery/Zepto elements being animated via the $.fn method. */
        if (Type.isWrapped(this)) {
            isUtility = false;

            argumentIndex = 0;
            elements = this;
            elementsWrapped = this;
        /* Otherwise, raw elements are being animated via the utility function. */
        } else {
            isUtility = true;

            argumentIndex = 1;
            elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
        }

        elements = sanitizeElements(elements);

        if (!elements) {
            return;
        }

        if (syntacticSugar) {
            propertiesMap = arguments[0].properties || arguments[0].p;
            options = arguments[0].options || arguments[0].o;
        } else {
            propertiesMap = arguments[argumentIndex];
            options = arguments[argumentIndex + 1];
        }

        /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
           single raw DOM element is passed in (which doesn't contain a length property). */
        var elementsLength = elements.length,
            elementsIndex = 0;

        /***************************
            Argument Overloading
        ***************************/

        /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
           Overloading is detected by checking for the absence of an object being passed into options. */
        /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
        if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
            /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
            var startingArgumentPosition = argumentIndex + 1;

            options = {};

            /* Iterate through all options arguments */
            for (var i = startingArgumentPosition; i < arguments.length; i++) {
                /* Treat a number as a duration. Parse it out. */
                /* Note: The following RegEx will return true if passed an array with a number as its first item.
                   Thus, arrays are skipped from this check. */
                if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
                    options.duration = arguments[i];
                /* Treat strings and arrays as easings. */
                } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
                    options.easing = arguments[i];
                /* Treat a function as a complete callback. */
                } else if (Type.isFunction(arguments[i])) {
                    options.complete = arguments[i];
                }
            }
        }

        /***************
            Promises
        ***************/

        var promiseData = {
                promise: null,
                resolver: null,
                rejecter: null
            };

        /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
        /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
           grouped together for the purposes of resolving and rejecting a promise. */
        if (isUtility && Velocity.Promise) {
            promiseData.promise = new Velocity.Promise(function (resolve, reject) {
                promiseData.resolver = resolve;
                promiseData.rejecter = reject;
            });
        }

        /*********************
           Action Detection
        *********************/

        /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
        var action;

        switch (propertiesMap) {
            case "scroll":
                action = "scroll";
                break;

            case "reverse":
                action = "reverse";
                break;

            case "finish":
            case "finishAll":
            case "stop":
                /*******************
                    Action: Stop
                *******************/

                /* Clear the currently-active delay on each targeted element. */
                $.each(elements, function(i, element) {
                    if (Data(element) && Data(element).delayTimer) {
                        /* Stop the timer from triggering its cached next() function. */
                        clearTimeout(Data(element).delayTimer.setTimeout);

                        /* Manually call the next() function so that the subsequent queue items can progress. */
                        if (Data(element).delayTimer.next) {
                            Data(element).delayTimer.next();
                        }

                        delete Data(element).delayTimer;
                    }

                    /* If we want to finish everything in the queue, we have to iterate through it
                       and call each function. This will make them active calls below, which will
                       cause them to be applied via the duration setting. */
                    if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
                        /* Iterate through the items in the element's queue. */
                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                            /* The queue array can contain an "inprogress" string, which we skip. */
                            if (Type.isFunction(item)) {
                                item();
                            }
                        });

                        /* Clearing the $.queue() array is achieved by resetting it to []. */
                        $.queue(element, Type.isString(options) ? options : "", []);
                    }
                });

                var callsToStop = [];

                /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
                   is stopped, the next item in its animation queue is immediately triggered. */
                /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
                   or a custom queue string can be passed in. */
                /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
                   regardless of the element's current queue state. */

                /* Iterate through every active call. */
                $.each(Velocity.State.calls, function(i, activeCall) {
                    /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
                    if (activeCall) {
                        /* Iterate through the active call's targeted elements. */
                        $.each(activeCall[1], function(k, activeElement) {
                            /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
                               clear calls associated with the relevant queue. */
                            /* Call stopping logic works as follows:
                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
                               - options === undefined --> stop current queue:"" call and all queue:false calls.
                               - options === false --> stop only queue:false calls.
                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
                            var queueName = (options === undefined) ? "" : options;

                            if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
                                return true;
                            }

                            /* Iterate through the calls targeted by the stop command. */
                            $.each(elements, function(l, element) {
                                /* Check that this call was applied to the target element. */
                                if (element === activeElement) {
                                    /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
                                       due to the queue-clearing above. */
                                    if (options === true || Type.isString(options)) {
                                        /* Iterate through the items in the element's queue. */
                                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                                            /* The queue array can contain an "inprogress" string, which we skip. */
                                            if (Type.isFunction(item)) {
                                                /* Pass the item's callback a flag indicating that we want to abort from the queue call.
                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */
                                                item(null, true);
                                            }
                                        });

                                        /* Clearing the $.queue() array is achieved by resetting it to []. */
                                        $.queue(element, Type.isString(options) ? options : "", []);
                                    }

                                    if (propertiesMap === "stop") {
                                        /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
                                           changed to reflect the final value that the elements were actually tweened to. */
                                        /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
                                           object. Also, queue:false animations can't be reversed. */
                                        if (Data(element) && Data(element).tweensContainer && queueName !== false) {
                                            $.each(Data(element).tweensContainer, function(m, activeTween) {
                                                activeTween.endValue = activeTween.currentValue;
                                            });
                                        }

                                        callsToStop.push(i);
                                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
                                        /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
                                        they finish upon the next rAf tick then proceed with normal call completion logic. */
                                        activeCall[2].duration = 1;
                                    }
                                }
                            });
                        });
                    }
                });

                /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */
                if (propertiesMap === "stop") {
                    $.each(callsToStop, function(i, j) {
                        completeCall(j, true);
                    });

                    if (promiseData.promise) {
                        /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
                        promiseData.resolver(elements);
                    }
                }

                /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
                return getChain();

            default:
                /* Treat a non-empty plain object as a literal properties map. */
                if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
                    action = "start";

                /****************
                    Redirects
                ****************/

                /* Check if a string matches a registered redirect (see Redirects above). */
                } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
                    var opts = $.extend({}, options),
                        durationOriginal = opts.duration,
                        delayOriginal = opts.delay || 0;

                    /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
                    if (opts.backwards === true) {
                        elements = $.extend(true, [], elements).reverse();
                    }

                    /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
                    $.each(elements, function(elementIndex, element) {
                        /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
                        if (parseFloat(opts.stagger)) {
                            opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
                        } else if (Type.isFunction(opts.stagger)) {
                            opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
                        }

                        /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
                           the duration of each element's animation, using floors to prevent producing very short durations. */
                        if (opts.drag) {
                            /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
                            opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

                            /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
                            opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex/elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
                        }

                        /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
                           reduce the opts checking logic required inside the redirect. */
                        Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
                    });

                    /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
                       (The performance overhead up to this point is virtually non-existant.) */
                    /* Note: The jQuery call chain is kept intact by returning the complete element set. */
                    return getChain();
                } else {
                    var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

                    if (promiseData.promise) {
                        promiseData.rejecter(new Error(abortError));
                    } else {
                        console.log(abortError);
                    }

                    return getChain();
                }
        }

        /**************************
            Call-Wide Variables
        **************************/

        /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
           conversion metrics across Velocity animations that are not immediately consecutively chained. */
        var callUnitConversionData = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null
            };

        /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
           Velocity.State.calls array that is processed during animation ticking. */
        var call = [];

        /************************
           Element Processing
        ************************/

        /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
        */

        function processElement () {

            /*************************
               Part I: Pre-Queueing
            *************************/

            /***************************
               Element-Wide Variables
            ***************************/

            var element = this,
                /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
                opts = $.extend({}, Velocity.defaults, options),
                /* A container for the processed data associated with each property in the propertyMap.
                   (Each property in the map produces its own "tween".) */
                tweensContainer = {},
                elementUnitConversionData;

            /******************
               Element Init
            ******************/

            if (Data(element) === undefined) {
                Velocity.init(element);
            }

            /******************
               Option: Delay
            ******************/

            /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
            /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
            if (parseFloat(opts.delay) && opts.queue !== false) {
                $.queue(element, opts.queue, function(next) {
                    /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
                    Velocity.velocityQueueEntryFlag = true;

                    /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
                    Data(element).delayTimer = {
                        setTimeout: setTimeout(next, parseFloat(opts.delay)),
                        next: next
                    };
                });
            }

            /*********************
               Option: Duration
            *********************/

            /* Support for jQuery's named durations. */
            switch (opts.duration.toString().toLowerCase()) {
                case "fast":
                    opts.duration = 200;
                    break;

                case "normal":
                    opts.duration = DURATION_DEFAULT;
                    break;

                case "slow":
                    opts.duration = 600;
                    break;

                default:
                    /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
                    opts.duration = parseFloat(opts.duration) || 1;
            }

            /************************
               Global Option: Mock
            ************************/

            if (Velocity.mock !== false) {
                /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */
                if (Velocity.mock === true) {
                    opts.duration = opts.delay = 1;
                } else {
                    opts.duration *= parseFloat(Velocity.mock) || 1;
                    opts.delay *= parseFloat(Velocity.mock) || 1;
                }
            }

            /*******************
               Option: Easing
            *******************/

            opts.easing = getEasing(opts.easing, opts.duration);

            /**********************
               Option: Callbacks
            **********************/

            /* Callbacks must functions. Otherwise, default to null. */
            if (opts.begin && !Type.isFunction(opts.begin)) {
                opts.begin = null;
            }

            if (opts.progress && !Type.isFunction(opts.progress)) {
                opts.progress = null;
            }

            if (opts.complete && !Type.isFunction(opts.complete)) {
                opts.complete = null;
            }

            /*********************************
               Option: Display & Visibility
            *********************************/

            /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
            /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
            if (opts.display !== undefined && opts.display !== null) {
                opts.display = opts.display.toString().toLowerCase();

                /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
                if (opts.display === "auto") {
                    opts.display = Velocity.CSS.Values.getDisplayType(element);
                }
            }

            if (opts.visibility !== undefined && opts.visibility !== null) {
                opts.visibility = opts.visibility.toString().toLowerCase();
            }

            /**********************
               Option: mobileHA
            **********************/

            /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
               on animating elements. HA is removed from the element at the completion of its animation. */
            /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
            /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
            opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

            /***********************
               Part II: Queueing
            ***********************/

            /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
            /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
            function buildQueue (next) {

                /*******************
                   Option: Begin
                *******************/

                /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
                if (opts.begin && elementsIndex === 0) {
                    /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
                    try {
                        opts.begin.call(elements, elements);
                    } catch (error) {
                        setTimeout(function() { throw error; }, 1);
                    }
                }

                /*****************************************
                   Tween Data Construction (for Scroll)
                *****************************************/

                /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
                if (action === "scroll") {
                    /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
                    var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
                        scrollOffset = parseFloat(opts.offset) || 0,
                        scrollPositionCurrent,
                        scrollPositionCurrentAlternate,
                        scrollPositionEnd;

                    /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
                    if (opts.container) {
                        /* Ensure that either a jQuery object or a raw DOM element was passed in. */
                        if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
                            /* Extract the raw DOM element from the jQuery wrapper. */
                            opts.container = opts.container[0] || opts.container;
                            /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
                               (due to the user's natural interaction with the page). */
                            scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

                            /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
                               the scroll container's current scroll position. */
                            scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
                        /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
                        } else {
                            opts.container = null;
                        }
                    } else {
                        /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
                           the appropriate cached property names (which differ based on browser type). */
                        scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
                        /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
                        scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

                        /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
                           and therefore end values do not need to be compounded onto current values. */
                        scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
                    }

                    /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
                    tweensContainer = {
                        scroll: {
                            rootPropertyValue: false,
                            startValue: scrollPositionCurrent,
                            currentValue: scrollPositionCurrent,
                            endValue: scrollPositionEnd,
                            unitType: "",
                            easing: opts.easing,
                            scrollData: {
                                container: opts.container,
                                direction: scrollDirection,
                                alternateValue: scrollPositionCurrentAlternate
                            }
                        },
                        element: element
                    };

                    if (Velocity.debug) console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);

                /******************************************
                   Tween Data Construction (for Reverse)
                ******************************************/

                /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
                /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
                /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
                   as reverting to the element's values as they were prior to the previous *Velocity* call. */
                } else if (action === "reverse") {
                    /* Abort if there is no prior animation data to reverse to. */
                    if (!Data(element).tweensContainer) {
                        /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
                        $.dequeue(element, opts.queue);

                        return;
                    } else {
                        /*********************
                           Options Parsing
                        *********************/

                        /* If the element was hidden via the display option in the previous call,
                           revert display to "auto" prior to reversal so that the element is visible again. */
                        if (Data(element).opts.display === "none") {
                            Data(element).opts.display = "auto";
                        }

                        if (Data(element).opts.visibility === "hidden") {
                            Data(element).opts.visibility = "visible";
                        }

                        /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */
                        Data(element).opts.loop = false;
                        Data(element).opts.begin = null;
                        Data(element).opts.complete = null;

                        /* Since we're extending an opts object that has already been extended with the defaults options object,
                           we remove non-explicitly-defined properties that are auto-assigned values. */
                        if (!options.easing) {
                            delete opts.easing;
                        }

                        if (!options.duration) {
                            delete opts.duration;
                        }

                        /* The opts object used for reversal is an extension of the options object optionally passed into this
                           reverse call plus the options used in the previous Velocity call. */
                        opts = $.extend({}, Data(element).opts, opts);

                        /*************************************
                           Tweens Container Reconstruction
                        *************************************/

                        /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
                        var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);

                        /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
                        for (var lastTween in lastTweensContainer) {
                            /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
                            if (lastTween !== "element") {
                                var lastStartValue = lastTweensContainer[lastTween].startValue;

                                lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                                lastTweensContainer[lastTween].endValue = lastStartValue;

                                /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
                                if (!Type.isEmptyObject(options)) {
                                    lastTweensContainer[lastTween].easing = opts.easing;
                                }

                                if (Velocity.debug) console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
                            }
                        }

                        tweensContainer = lastTweensContainer;
                    }

                /*****************************************
                   Tween Data Construction (for Start)
                *****************************************/

                } else if (action === "start") {

                    /*************************
                        Value Transferring
                    *************************/

                    /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
                       while the element was in the process of being animated by Velocity, then this current call is safe to use
                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
                       process whenever possible in order to avoid requerying the DOM. */
                    /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
                       then the DOM is queried for the element's current values as a last resort. */
                    /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
                    var lastTweensContainer;

                    /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
                       to transfer over end values to use as start values. If it's set to true and there is a previous
                       Velocity call to pull values from, do so. */
                    if (Data(element).tweensContainer && Data(element).isAnimating === true) {
                        lastTweensContainer = Data(element).tweensContainer;
                    }

                    /***************************
                       Tween Data Calculation
                    ***************************/

                    /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
                    /* Property map values can either take the form of 1) a single value representing the end value,
                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
                    function parsePropertyValue (valueData, skipResolvingEasing) {
                        var endValue = undefined,
                            easing = undefined,
                            startValue = undefined;

                        /* Handle the array format, which can be structured as one of three potential overloads:
                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
                        if (Type.isArray(valueData)) {
                            /* endValue is always the first item in the array. Don't bother validating endValue's value now
                               since the ensuing property cycling logic does that. */
                            endValue = valueData[0];

                            /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
                               start value since easings can only be non-hex strings or arrays. */
                            if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                                startValue = valueData[1];
                            /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
                            } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
                                easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

                                /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
                                if (valueData[2] !== undefined) {
                                    startValue = valueData[2];
                                }
                            }
                        /* Handle the single-value format. */
                        } else {
                            endValue = valueData;
                        }

                        /* Default to the call's easing if a per-property easing type was not defined. */
                        if (!skipResolvingEasing) {
                            easing = easing || opts.easing;
                        }

                        /* If functions were passed in as values, pass the function the current element as its context,
                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */
                        if (Type.isFunction(endValue)) {
                            endValue = endValue.call(element, elementsIndex, elementsLength);
                        }

                        if (Type.isFunction(startValue)) {
                            startValue = startValue.call(element, elementsIndex, elementsLength);
                        }

                        /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
                        return [ endValue || 0, easing, startValue ];
                    }

                    /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
                    $.each(propertiesMap, function(property, value) {
                        /* Find shorthand color properties that have been passed a hex string. */
                        if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
                            /* Parse the value data for each shorthand. */
                            var valueData = parsePropertyValue(value, true),
                                endValue = valueData[0],
                                easing = valueData[1],
                                startValue = valueData[2];

                            if (CSS.RegEx.isHex.test(endValue)) {
                                /* Convert the hex strings into their RGB component arrays. */
                                var colorComponents = [ "Red", "Green", "Blue" ],
                                    endValueRGB = CSS.Values.hexToRgb(endValue),
                                    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

                                /* Inject the RGB component tweens into propertiesMap. */
                                for (var i = 0; i < colorComponents.length; i++) {
                                    var dataArray = [ endValueRGB[i] ];

                                    if (easing) {
                                        dataArray.push(easing);
                                    }

                                    if (startValueRGB !== undefined) {
                                        dataArray.push(startValueRGB[i]);
                                    }

                                    propertiesMap[property + colorComponents[i]] = dataArray;
                                }

                                /* Remove the intermediary shorthand property entry now that we've processed it. */
                                delete propertiesMap[property];
                            }
                        }
                    });

                    /* Create a tween out of each property, and append its associated data to tweensContainer. */
                    for (var property in propertiesMap) {

                        /**************************
                           Start Value Sourcing
                        **************************/

                        /* Parse out endValue, easing, and startValue from the property's data. */
                        var valueData = parsePropertyValue(propertiesMap[property]),
                            endValue = valueData[0],
                            easing = valueData[1],
                            startValue = valueData[2];

                        /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
                           we force the property to its camelCase styling to normalize it for manipulation. */
                        property = CSS.Names.camelCase(property);

                        /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
                        var rootProperty = CSS.Hooks.getRoot(property),
                            rootPropertyValue = false;

                        /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
                        /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */
                        if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
                            if (Velocity.debug) console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");

                            continue;
                        }

                        /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
                        if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                            startValue = 0;
                        }

                        /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
                           for all of the current call's properties that were *also* animated in the previous call. */
                        /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
                        if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
                            if (startValue === undefined) {
                                startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
                            }

                            /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
                            rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
                        /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
                        } else {
                            /* Handle hooked properties. */
                            if (CSS.Hooks.registered[property]) {
                               if (startValue === undefined) {
                                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
                                    /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
                                       getPropertyValue() will extract the hook from rootPropertyValue. */
                                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
                                /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
                                   just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
                                   root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
                                } else {
                                    /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
                                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                                }
                            /* Handle non-hooked properties that haven't already been defined via forcefeeding. */
                            } else if (startValue === undefined) {
                                startValue = CSS.getPropertyValue(element, property); /* GET */
                            }
                        }

                        /**************************
                           Value Data Extraction
                        **************************/

                        var separatedValue,
                            endValueUnitType,
                            startValueUnitType,
                            operator = false;

                        /* Separates a property value into its numeric value and its unit type. */
                        function separateValue (property, value) {
                            var unitType,
                                numericValue;

                            numericValue = (value || "0")
                                .toString()
                                .toLowerCase()
                                /* Match the unit type at the end of the value. */
                                .replace(/[%A-z]+$/, function(match) {
                                    /* Grab the unit type. */
                                    unitType = match;

                                    /* Strip the unit type off of value. */
                                    return "";
                                });

                            /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
                            if (!unitType) {
                                unitType = CSS.Values.getUnitType(property);
                            }

                            return [ numericValue, unitType ];
                        }

                        /* Separate startValue. */
                        separatedValue = separateValue(property, startValue);
                        startValue = separatedValue[0];
                        startValueUnitType = separatedValue[1];

                        /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
                        separatedValue = separateValue(property, endValue);
                        endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
                            operator = subMatch;

                            /* Strip the operator off of the value. */
                            return "";
                        });
                        endValueUnitType = separatedValue[1];

                        /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
                        startValue = parseFloat(startValue) || 0;
                        endValue = parseFloat(endValue) || 0;

                        /***************************************
                           Property-Specific Value Conversion
                        ***************************************/

                        /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
                        if (endValueUnitType === "%") {
                            /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
                               which is identical to the em unit's behavior, so we piggyback off of that. */
                            if (/^(fontSize|lineHeight)$/.test(property)) {
                                /* Convert % into an em decimal value. */
                                endValue = endValue / 100;
                                endValueUnitType = "em";
                            /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
                            } else if (/^scale/.test(property)) {
                                endValue = endValue / 100;
                                endValueUnitType = "";
                            /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
                            } else if (/(Red|Green|Blue)$/i.test(property)) {
                                endValue = (endValue / 100) * 255;
                                endValueUnitType = "";
                            }
                        }

                        /***************************
                           Unit Ratio Calculation
                        ***************************/

                        /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
                        /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
                           setting values with the target unit type then comparing the returned pixel value. */
                        /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
                           of batching the SETs and GETs together upfront outweights the potential overhead
                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
                        /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
                        function calculateUnitRatios () {

                            /************************
                                Same Ratio Checks
                            ************************/

                            /* The properties below are used to determine whether the element differs sufficiently from this call's
                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
                               this is done to minimize DOM querying. */
                            var sameRatioIndicators = {
                                    myParent: element.parentNode || document.body, /* GET */
                                    position: CSS.getPropertyValue(element, "position"), /* GET */
                                    fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
                                },
                                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
                                samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
                                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
                                sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

                            /* Store these ratio indicators call-wide for the next element to compare against. */
                            callUnitConversionData.lastParent = sameRatioIndicators.myParent;
                            callUnitConversionData.lastPosition = sameRatioIndicators.position;
                            callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

                            /***************************
                               Element-Specific Units
                            ***************************/

                            /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
                            var measurement = 100,
                                unitRatios = {};

                            if (!sameEmRatio || !samePercentRatio) {
                                var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

                                Velocity.init(dummy);
                                sameRatioIndicators.myParent.appendChild(dummy);

                                /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
                                /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
                                $.each([ "overflow", "overflowX", "overflowY" ], function(i, property) {
                                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
                                });
                                Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
                                Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
                                Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

                                /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
                                $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(i, property) {
                                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
                                });
                                /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
                                Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

                                /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
                                unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

                                sameRatioIndicators.myParent.removeChild(dummy);
                            } else {
                                unitRatios.emToPx = callUnitConversionData.lastEmToPx;
                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
                            }

                            /***************************
                               Element-Agnostic Units
                            ***************************/

                            /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
                               so we calculate it now. */
                            if (callUnitConversionData.remToPx === null) {
                                /* Default to browsers' default fontSize of 16px in the case of 0. */
                                callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
                            }

                            /* Similarly, viewport units are %-relative to the window's inner dimensions. */
                            if (callUnitConversionData.vwToPx === null) {
                                callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
                                callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
                            }

                            unitRatios.remToPx = callUnitConversionData.remToPx;
                            unitRatios.vwToPx = callUnitConversionData.vwToPx;
                            unitRatios.vhToPx = callUnitConversionData.vhToPx;

                            if (Velocity.debug >= 1) console.log("Unit ratios: " + JSON.stringify(unitRatios), element);

                            return unitRatios;
                        }

                        /********************
                           Unit Conversion
                        ********************/

                        /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
                        if (/[\/*]/.test(operator)) {
                            endValueUnitType = startValueUnitType;
                        /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
                        /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
                        } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
                            /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
                            /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
                               which remains past the point of the animation's completion. */
                            if (endValue === 0) {
                                endValueUnitType = startValueUnitType;
                            } else {
                                /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
                                elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

                                /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
                                /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
                                var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

                                /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
                                switch (startValueUnitType) {
                                    case "%":
                                        /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
                                        startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                        break;

                                    case "px":
                                        /* px acts as our midpoint in the unit conversion process; do nothing. */
                                        break;

                                    default:
                                        startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
                                }

                                /* Invert the px ratios to convert into to the target unit. */
                                switch (endValueUnitType) {
                                    case "%":
                                        startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                        break;

                                    case "px":
                                        /* startValue is already in px, do nothing; we're done. */
                                        break;

                                    default:
                                        startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
                                }
                            }
                        }

                        /*********************
                           Relative Values
                        *********************/

                        /* Operator logic must be performed last since it requires unit-normalized start and end values. */
                        /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
                           50 points is added on top of the current % value. */
                        switch (operator) {
                            case "+":
                                endValue = startValue + endValue;
                                break;

                            case "-":
                                endValue = startValue - endValue;
                                break;

                            case "*":
                                endValue = startValue * endValue;
                                break;

                            case "/":
                                endValue = startValue / endValue;
                                break;
                        }

                        /**************************
                           tweensContainer Push
                        **************************/

                        /* Construct the per-property tween object, and push it to the element's tweensContainer. */
                        tweensContainer[property] = {
                            rootPropertyValue: rootPropertyValue,
                            startValue: startValue,
                            currentValue: startValue,
                            endValue: endValue,
                            unitType: endValueUnitType,
                            easing: easing
                        };

                        if (Velocity.debug) console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
                    }

                    /* Along with its property data, store a reference to the element itself onto tweensContainer. */
                    tweensContainer.element = element;
                }

                /*****************
                    Call Push
                *****************/

                /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
                if (tweensContainer.element) {
                    /* Apply the "velocity-animating" indicator class. */
                    CSS.Values.addClass(element, "velocity-animating");

                    /* The call array houses the tweensContainers for each element being animated in the current call. */
                    call.push(tweensContainer);

                    /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
                    if (opts.queue === "") {
                        Data(element).tweensContainer = tweensContainer;
                        Data(element).opts = opts;
                    }

                    /* Switch on the element's animating flag. */
                    Data(element).isAnimating = true;

                    /* Once the final element in this call's element set has been processed, push the call array onto
                       Velocity.State.calls for the animation tick to immediately begin processing. */
                    if (elementsIndex === elementsLength - 1) {
                        /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
                           Anything on this call container is subjected to tick() processing. */
                        Velocity.State.calls.push([ call, elements, opts, null, promiseData.resolver ]);

                        /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
                        if (Velocity.State.isTicking === false) {
                            Velocity.State.isTicking = true;

                            /* Start the tick loop. */
                            tick();
                        }
                    } else {
                        elementsIndex++;
                    }
                }
            }

            /* When the queue option is set to false, the call skips the element's queue and fires immediately. */
            if (opts.queue === false) {
                /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
                   we manually inject the delay property here with an explicit setTimeout. */
                if (opts.delay) {
                    setTimeout(buildQueue, opts.delay);
                } else {
                    buildQueue();
                }
            /* Otherwise, the call undergoes element queueing as normal. */
            /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
            } else {
                $.queue(element, opts.queue, function(next, clearQueue) {
                    /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
                       so it's fine if this is repeatedly triggered for each element in the associated call.) */
                    if (clearQueue === true) {
                        if (promiseData.promise) {
                            promiseData.resolver(elements);
                        }

                        /* Do not continue with animation queueing. */
                        return true;
                    }

                    /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
                       See completeCall() for further details. */
                    Velocity.velocityQueueEntryFlag = true;

                    buildQueue(next);
                });
            }

            /*********************
                Auto-Dequeuing
            *********************/

            /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
            /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
            /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
            if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
                $.dequeue(element);
            }
        }

        /**************************
           Element Set Iteration
        **************************/

        /* If the "nodeType" property exists on the elements variable, we're animating a single element.
           Place it in an array so that $.each() can iterate over it. */
        $.each(elements, function(i, element) {
            /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
            if (Type.isNode(element)) {
                processElement.call(element);
            }
        });

        /******************
           Option: Loop
        ******************/

        /* The loop option accepts an integer indicating how many times the element should loop between the values in the
           current call's properties map and the element's property values prior to this call. */
        /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
        var opts = $.extend({}, Velocity.defaults, options),
            reverseCallsCount;

        opts.loop = parseInt(opts.loop);
        reverseCallsCount = (opts.loop * 2) - 1;

        if (opts.loop) {
            /* Double the loop count to convert it into its appropriate number of "reverse" calls.
               Subtract 1 from the resulting value since the current call is included in the total alternation count. */
            for (var x = 0; x < reverseCallsCount; x++) {
                /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
                var reverseOptions = {
                    delay: opts.delay,
                    progress: opts.progress
                };

                /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
                if (x === reverseCallsCount - 1) {
                    reverseOptions.display = opts.display;
                    reverseOptions.visibility = opts.visibility;
                    reverseOptions.complete = opts.complete;
                }

                animate(elements, "reverse", reverseOptions);
            }
        }

        /***************
            Chaining
        ***************/

        /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
        return getChain();
    };

    /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
    Velocity = $.extend(animate, Velocity);
    /* For legacy support, also expose the literal animate method. */
    Velocity.animate = animate;

    /**************
        Timing
    **************/

    /* Ticker function. */
    var ticker = window.requestAnimationFrame || rAFShim;

    /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
       devices to avoid wasting battery power on inactive tabs. */
    /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
    if (!Velocity.State.isMobile && document.hidden !== undefined) {
        document.addEventListener("visibilitychange", function() {
            /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
            if (document.hidden) {
                ticker = function(callback) {
                    /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
                    return setTimeout(function() { callback(true) }, 16);
                };

                /* The rAF loop has been paused by the browser, so we manually restart the tick. */
                tick();
            } else {
                ticker = window.requestAnimationFrame || rAFShim;
            }
        });
    }

    /************
        Tick
    ************/

    /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
    function tick (timestamp) {
        /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
        if (timestamp) {
            /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
            var timeCurrent = (new Date).getTime();

            /********************
               Call Iteration
            ********************/

            var callsLength = Velocity.State.calls.length;

            /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
            if (callsLength > 10000) {
                Velocity.State.calls = compactSparseArray(Velocity.State.calls);
            }

            /* Iterate through each active call. */
            for (var i = 0; i < callsLength; i++) {
                /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
                if (!Velocity.State.calls[i]) {
                    continue;
                }

                /************************
                   Call-Wide Variables
                ************************/

                var callContainer = Velocity.State.calls[i],
                    call = callContainer[0],
                    opts = callContainer[2],
                    timeStart = callContainer[3],
                    firstTick = !!timeStart,
                    tweenDummyValue = null;

                /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
                   We assign timeStart now so that its value is as close to the real animation start time as possible.
                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
                   between that time and now would cause the first few frames of the tween to be skipped since
                   percentComplete is calculated relative to timeStart.) */
                /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
                   same style value as the element's current value. */
                if (!timeStart) {
                    timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
                }

                /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
                   Accordingly, we ensure that percentComplete does not exceed 1. */
                var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);

                /**********************
                   Element Iteration
                **********************/

                /* For every call, iterate through each of the elements in its set. */
                for (var j = 0, callLength = call.length; j < callLength; j++) {
                    var tweensContainer = call[j],
                        element = tweensContainer.element;

                    /* Check to see if this element has been deleted midway through the animation by checking for the
                       continued existence of its data cache. If it's gone, skip animating this element. */
                    if (!Data(element)) {
                        continue;
                    }

                    var transformPropertyExists = false;

                    /**********************************
                       Display & Visibility Toggling
                    **********************************/

                    /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
                    if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
                        if (opts.display === "flex") {
                            var flexValues = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];

                            $.each(flexValues, function(i, flexValue) {
                                CSS.setPropertyValue(element, "display", flexValue);
                            });
                        }

                        CSS.setPropertyValue(element, "display", opts.display);
                    }

                    /* Same goes with the visibility option, but its "none" equivalent is "hidden". */
                    if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                        CSS.setPropertyValue(element, "visibility", opts.visibility);
                    }

                    /************************
                       Property Iteration
                    ************************/

                    /* For every element, iterate through each property. */
                    for (var property in tweensContainer) {
                        /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
                        if (property !== "element") {
                            var tween = tweensContainer[property],
                                currentValue,
                                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
                                easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

                            /******************************
                               Current Value Calculation
                            ******************************/

                            /* If this is the last tick pass (if we've reached 100% completion for this tween),
                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
                            if (percentComplete === 1) {
                                currentValue = tween.endValue;
                            /* Otherwise, calculate currentValue based on the current delta from startValue. */
                            } else {
                                var tweenDelta = tween.endValue - tween.startValue;
                                currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

                                /* If no value change is occurring, don't proceed with DOM updating. */
                                if (!firstTick && (currentValue === tween.currentValue)) {
                                    continue;
                                }
                            }

                            tween.currentValue = currentValue;

                            /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
                               it can be passed into the progress callback. */
                            if (property === "tween") {
                                tweenDummyValue = currentValue;
                            } else {
                                /******************
                                   Hooks: Part I
                                ******************/

                                /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
                                if (CSS.Hooks.registered[property]) {
                                    var hookRoot = CSS.Hooks.getRoot(property),
                                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

                                    if (rootPropertyValueCache) {
                                        tween.rootPropertyValue = rootPropertyValueCache;
                                    }
                                }

                                /*****************
                                    DOM Update
                                *****************/

                                /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
                                /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
                                var adjustedSetData = CSS.setPropertyValue(element, /* SET */
                                                                           property,
                                                                           tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
                                                                           tween.rootPropertyValue,
                                                                           tween.scrollData);

                                /*******************
                                   Hooks: Part II
                                *******************/

                                /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
                                if (CSS.Hooks.registered[property]) {
                                    /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
                                    if (CSS.Normalizations.registered[hookRoot]) {
                                        Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
                                    } else {
                                        Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
                                    }
                                }

                                /***************
                                   Transforms
                                ***************/

                                /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
                                if (adjustedSetData[0] === "transform") {
                                    transformPropertyExists = true;
                                }

                            }
                        }
                    }

                    /****************
                        mobileHA
                    ****************/

                    /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
                    if (opts.mobileHA) {
                        /* Don't set the null transform hack if we've already done so. */
                        if (Data(element).transformCache.translate3d === undefined) {
                            /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
                            Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

                            transformPropertyExists = true;
                        }
                    }

                    if (transformPropertyExists) {
                        CSS.flushTransformCache(element);
                    }
                }

                /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
                if (opts.display !== undefined && opts.display !== "none") {
                    Velocity.State.calls[i][2].display = false;
                }
                if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                    Velocity.State.calls[i][2].visibility = false;
                }

                /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
                if (opts.progress) {
                    opts.progress.call(callContainer[1],
                                       callContainer[1],
                                       percentComplete,
                                       Math.max(0, (timeStart + opts.duration) - timeCurrent),
                                       timeStart,
                                       tweenDummyValue);
                }

                /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
                if (percentComplete === 1) {
                    completeCall(i);
                }
            }
        }

        /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
        if (Velocity.State.isTicking) {
            ticker(tick);
        }
    }

    /**********************
        Call Completion
    **********************/

    /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
    function completeCall (callIndex, isStopped) {
        /* Ensure the call exists. */
        if (!Velocity.State.calls[callIndex]) {
            return false;
        }

        /* Pull the metadata from the call. */
        var call = Velocity.State.calls[callIndex][0],
            elements = Velocity.State.calls[callIndex][1],
            opts = Velocity.State.calls[callIndex][2],
            resolver = Velocity.State.calls[callIndex][4];

        var remainingCallsExist = false;

        /*************************
           Element Finalization
        *************************/

        for (var i = 0, callLength = call.length; i < callLength; i++) {
            var element = call[i].element;

            /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
            /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
            /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
            if (!isStopped && !opts.loop) {
                if (opts.display === "none") {
                    CSS.setPropertyValue(element, "display", opts.display);
                }

                if (opts.visibility === "hidden") {
                    CSS.setPropertyValue(element, "visibility", opts.visibility);
                }
            }

            /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
            if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
                /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
                if (Data(element)) {
                    Data(element).isAnimating = false;
                    /* Clear the element's rootPropertyValueCache, which will become stale. */
                    Data(element).rootPropertyValueCache = {};

                    var transformHAPropertyExists = false;
                    /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
                    $.each(CSS.Lists.transforms3D, function(i, transformName) {
                        var defaultValue = /^scale/.test(transformName) ? 1 : 0,
                            currentValue = Data(element).transformCache[transformName];

                        if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                            transformHAPropertyExists = true;

                            delete Data(element).transformCache[transformName];
                        }
                    });

                    /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
                    if (opts.mobileHA) {
                        transformHAPropertyExists = true;
                        delete Data(element).transformCache.translate3d;
                    }

                    /* Flush the subproperty removals to the DOM. */
                    if (transformHAPropertyExists) {
                        CSS.flushTransformCache(element);
                    }

                    /* Remove the "velocity-animating" indicator class. */
                    CSS.Values.removeClass(element, "velocity-animating");
                }
            }

            /*********************
               Option: Complete
            *********************/

            /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
            /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
            if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
                /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
                try {
                    opts.complete.call(elements, elements);
                } catch (error) {
                    setTimeout(function() { throw error; }, 1);
                }
            }

            /**********************
               Promise Resolving
            **********************/

            /* Note: Infinite loops don't return promises. */
            if (resolver && opts.loop !== true) {
                resolver(elements);
            }

            /****************************
               Option: Loop (Infinite)
            ****************************/

            if (Data(element) && opts.loop === true && !isStopped) {
                /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
                $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {
                    if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {
                        tweenContainer.endValue = 0;
                        tweenContainer.startValue = 360;
                    }

                    if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
                        tweenContainer.endValue = 0;
                        tweenContainer.startValue = 100;
                    }
                });

                Velocity(element, "reverse", { loop: true, delay: opts.delay });
            }

            /***************
               Dequeueing
            ***************/

            /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
            if (opts.queue !== false) {
                $.dequeue(element, opts.queue);
            }
        }

        /************************
           Calls Array Cleanup
        ************************/

        /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
        Velocity.State.calls[callIndex] = false;

        /* Iterate through the calls array to determine if this was the final in-progress animation.
           If so, set a flag to end ticking and clear the calls array. */
        for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
            if (Velocity.State.calls[j] !== false) {
                remainingCallsExist = true;

                break;
            }
        }

        if (remainingCallsExist === false) {
            /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
            Velocity.State.isTicking = false;

            /* Clear the calls array so that its length is reset. */
            delete Velocity.State.calls;
            Velocity.State.calls = [];
        }
    }

    /******************
        Frameworks
    ******************/

    /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
    global.Velocity = Velocity;

    if (global !== window) {
        /* Assign the element function to Velocity's core animate() method. */
        global.fn.velocity = animate;
        /* Assign the object function's defaults to Velocity's global defaults object. */
        global.fn.velocity.defaults = Velocity.defaults;
    }

    /***********************
       Packaged Redirects
    ***********************/

    /* slideUp, slideDown */
    $.each([ "Down", "Up" ], function(i, direction) {
        Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
            var opts = $.extend({}, options),
                begin = opts.begin,
                complete = opts.complete,
                computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                inlineValues = {};

            if (opts.display === undefined) {
                /* Show the element before slideDown begins and hide the element after slideUp completes. */
                /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
                opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
            }

            opts.begin = function() {
                /* If the user passed in a begin callback, fire it now. */
                begin && begin.call(elements, elements);

                /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
                for (var property in computedValues) {
                    inlineValues[property] = element.style[property];

                    /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
                       use forcefeeding to start from computed values and animate down to 0. */
                    var propertyValue = Velocity.CSS.getPropertyValue(element, property);
                    computedValues[property] = (direction === "Down") ? [ propertyValue, 0 ] : [ 0, propertyValue ];
                }

                /* Force vertical overflow content to clip so that sliding works as expected. */
                inlineValues.overflow = element.style.overflow;
                element.style.overflow = "hidden";
            }

            opts.complete = function() {
                /* Reset element to its pre-slide inline values once its slide animation is complete. */
                for (var property in inlineValues) {
                    element.style[property] = inlineValues[property];
                }

                /* If the user passed in a complete callback, fire it now. */
                complete && complete.call(elements, elements);
                promiseData && promiseData.resolver(elements);
            };

            Velocity(element, computedValues, opts);
        };
    });

    /* fadeIn, fadeOut */
    $.each([ "In", "Out" ], function(i, direction) {
        Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
            var opts = $.extend({}, options),
                propertiesMap = { opacity: (direction === "In") ? 1 : 0 },
                originalComplete = opts.complete;

            /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
               callbacks by firing them only when the final element has been reached. */
            if (elementsIndex !== elementsSize - 1) {
                opts.complete = opts.begin = null;
            } else {
                opts.complete = function() {
                    if (originalComplete) {
                        originalComplete.call(elements, elements);
                    }

                    promiseData && promiseData.resolver(elements);
                }
            }

            /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
            /* Note: We allow users to pass in "null" to skip display setting altogether. */
            if (opts.display === undefined) {
                opts.display = (direction === "In" ? "auto" : "none");
            }

            Velocity(this, propertiesMap, opts);
        };
    });

    return Velocity;
}((window.jQuery || window.Zepto || window), window, document);
}));

/******************
   Known Issues
******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */

/***/ }),

/***/ "14fc":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "16c8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "172a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "197e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "19cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1f98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("f425");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "21c4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "22e9":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("88dd");
var cof = __webpack_require__("94ac");
var MATCH = __webpack_require__("8b37")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "265a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3754").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "265c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_2755e62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6a75");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_2755e62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_2755e62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_2755e62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "294a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2c1b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2f03":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var defined = __webpack_require__("f01a");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "31bc":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("cfc7");
var gOPS = __webpack_require__("f7c1");
var pIE = __webpack_require__("d217");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "343d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.9.0@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/lib/chengziUI/node_modules/_velocity-animate@1.2.3@velocity-animate/velocity.js
var velocity = __webpack_require__("1280");

// EXTERNAL MODULE: ./src/lib/chengziUI/lib/iconFont/iconfont.js
var iconfont = __webpack_require__("d286");

// EXTERNAL MODULE: ./src/lib/chengziUI/lib/iconFont/iconfont.css
var iconFont_iconfont = __webpack_require__("b6f5");

// EXTERNAL MODULE: ./src/lib/chengziUI/css/commmon.css
var commmon = __webpack_require__("a424");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/button/button.vue?vue&type=template&id=a9328bde&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"cz-button",class:_vm.classes,attrs:{"disabled":_vm.disabled,"type":_vm.nativeType},on:{"click":_vm.clickFun}},[(_vm.icon)?_c('cz-icon',{attrs:{"name":_vm.icon}}):_vm._e(),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/button/button.vue?vue&type=template&id=a9328bde&scoped=true&

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("f301");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("df99");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/button/button.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  props: {
    icon: {},
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    iPosition: {
      type: String,
      default: "left",
      validator: function validator(value) {
        return ["left", "right"].includes(value);
      }
    },
    type: {
      type: String,
      validator: function validator(value) {
        return ["success", "guide", "plain", "danger"].includes(value);
      }
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ["large", "small", "mini"].includes(value);
      }
    },
    nativeType: {
      type: String,
      default: "button",
      validator: function validator(value) {
        return ["button", "submit", "reset"].includes(value);
      }
    }
  },
  methods: {
    clickFun: function clickFun() {
      this.$emit('click');
    }
  },
  created: function created() {},
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "".concat(this.type), this.type), _defineProperty(_ref, "".concat(this.size), this.size), _defineProperty(_ref, "disabled", this.disabled), _defineProperty(_ref, "round", this.round), _defineProperty(_ref, "".concat(this.iPosition), this.iPosition), _ref;
    },
    styles: function styles() {
      return {
        background: this.backgroundColor || null
      };
    }
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/button/button.vue?vue&type=style&index=0&id=a9328bde&scoped=true&lang=css&
var buttonvue_type_style_index_0_id_a9328bde_scoped_true_lang_css_ = __webpack_require__("cc91");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/chengziUI/template/button/button.vue






/* normalize component */

var component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a9328bde",
  null
  
)

/* harmony default export */ var button_button = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/button/button-group.vue?vue&type=template&id=1c09d64c&
var button_groupvue_type_template_id_1c09d64c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-button-group"},[_vm._t("default")],2)}
var button_groupvue_type_template_id_1c09d64c_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/button/button-group.vue?vue&type=template&id=1c09d64c&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("0eb5");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("a4c5");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("f763");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/button/button-group.vue?vue&type=script&lang=js&



//
//
//
//
//
/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  props: {},
  mounted: function mounted() {
    this.inspect();
  },
  methods: {
    inspect: function inspect() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.$el.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var node = _step.value;
          var nodeName = node.nodeName.toLowerCase();

          if (nodeName != "button") {
            console.warn("请在cz-button-group中使用cz-button");
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/button/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/button/button-group.vue?vue&type=style&index=0&lang=css&
var button_groupvue_type_style_index_0_lang_css_ = __webpack_require__("00f2");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/button/button-group.vue






/* normalize component */

var button_group_component = normalizeComponent(
  button_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_1c09d64c_render,
  button_groupvue_type_template_id_1c09d64c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/icon/icon.vue?vue&type=template&id=5ce9d015&scoped=true&
var iconvue_type_template_id_5ce9d015_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.name.includes('color'))?_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.name),expression:"name"}],class:_vm.classes}):_c('svg',{directives:[{name:"show",rawName:"v-show",value:(_vm.name),expression:"name"}],class:_vm.classes},[_c('use',{attrs:{"xlink:href":("#i-" + _vm.name)}})])}
var iconvue_type_template_id_5ce9d015_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/icon/icon.vue?vue&type=template&id=5ce9d015&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7364");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/icon/icon.vue?vue&type=script&lang=js&




//
//
//
//
//
//
/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: "cz-icon",
  props: {
    name: {},
    size: {
      type: String,
      validator: function validator(val) {
        return ["small", "large", "logo"].includes(val);
      }
    }
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {
        icon: true,
        colorfont: this.name.includes("color"),
        iconfont: !this.name.includes("color")
      }, _defineProperty(_ref, "i-".concat(this.name), !this.name.includes("color")), _defineProperty(_ref, "".concat(this.size), true), _ref;
    }
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/icon/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icon_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/icon/icon.vue?vue&type=style&index=0&id=5ce9d015&scoped=true&lang=css&
var iconvue_type_style_index_0_id_5ce9d015_scoped_true_lang_css_ = __webpack_require__("c5b0");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/icon/icon.vue






/* normalize component */

var icon_component = normalizeComponent(
  icon_iconvue_type_script_lang_js_,
  iconvue_type_template_id_5ce9d015_scoped_true_render,
  iconvue_type_template_id_5ce9d015_scoped_true_staticRenderFns,
  false,
  null,
  "5ce9d015",
  null
  
)

/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/grid/row.vue?vue&type=template&id=1c31c2e2&scoped=true&
var rowvue_type_template_id_1c31c2e2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-row",class:_vm.rowClass,style:(_vm.rowStyle)},[_vm._t("default")],2)}
var rowvue_type_template_id_1c31c2e2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/grid/row.vue?vue&type=template&id=1c31c2e2&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("d4d5");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/grid/row.vue?vue&type=script&lang=js&





//
//
//
//
//
/* harmony default export */ var rowvue_type_script_lang_js_ = ({
  //输出
  name: "cz-row",
  data: function data() {
    return {};
  },
  props: {
    gutter: {
      type: [String, Number]
    },
    align: {
      type: [String],
      validator: function validator(val) {
        return ["center", "left", "right"].includes(val);
      }
    },
    alignY: {
      type: [String],
      validator: function validator(val) {
        return ["center", "top", "bottom"].includes(val);
      }
    }
  },
  watch: {},
  computed: {
    rowStyle: function rowStyle() {
      var gutter = this.gutter;
      var rowStyle = {
        "margin-left": -gutter / 2 + 'px',
        "margin-right": -gutter / 2 + 'px'
      };
      return rowStyle;
    },
    rowClass: function rowClass() {
      var _rowClass;

      var align = this.align,
          alignY = this.alignY;
      var rowClass = (_rowClass = {}, _defineProperty(_rowClass, "align-".concat(align), align), _defineProperty(_rowClass, "alignY-".concat(alignY), alignY), _rowClass);
      return rowClass;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$children.forEach(function (vm) {
      // vm 是子组件的vue对象
      vm.gutter = _this.gutter; //箭头函数使得this指向父作用域 ,改变子组件的data
    });
  },
  created: function created() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/grid/row.vue?vue&type=script&lang=js&
 /* harmony default export */ var grid_rowvue_type_script_lang_js_ = (rowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/grid/row.vue?vue&type=style&index=0&id=1c31c2e2&scoped=true&lang=css&
var rowvue_type_style_index_0_id_1c31c2e2_scoped_true_lang_css_ = __webpack_require__("9d8a");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/grid/row.vue






/* normalize component */

var row_component = normalizeComponent(
  grid_rowvue_type_script_lang_js_,
  rowvue_type_template_id_1c31c2e2_scoped_true_render,
  rowvue_type_template_id_1c31c2e2_scoped_true_staticRenderFns,
  false,
  null,
  "1c31c2e2",
  null
  
)

/* harmony default export */ var row = (row_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/grid/col.vue?vue&type=template&id=7a9bbdc9&
var colvue_type_template_id_7a9bbdc9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-col",class:_vm.colClass,style:(_vm.colStyle)},[_vm._t("default")],2)}
var colvue_type_template_id_7a9bbdc9_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/grid/col.vue?vue&type=template&id=7a9bbdc9&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/grid/col.vue?vue&type=script&lang=js&

//
//
//
//
//
/* harmony default export */ var colvue_type_script_lang_js_ = ({
  //输出
  name: "cz-col",
  data: function data() {
    return {
      gutter: 0
    };
  },
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    }
  },
  computed: {
    //computed 旗下的值不能在data先里定义
    colStyle: function colStyle() {
      var gutter = this.gutter; //绑定this的属性

      var colStyle = {
        padding: '0 ' + gutter / 2 + 'px'
      };
      return colStyle;
    },
    colClass: function colClass() {
      var span = this.span,
          offset = this.offset; //绑定this

      var colClass = [span && "col-".concat(span), offset && "offset-".concat(offset)];
      return colClass;
    }
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {} //传元素属性值

});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/grid/col.vue?vue&type=script&lang=js&
 /* harmony default export */ var grid_colvue_type_script_lang_js_ = (colvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/grid/col.vue?vue&type=style&index=0&lang=scss&
var colvue_type_style_index_0_lang_scss_ = __webpack_require__("e256");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/grid/col.vue






/* normalize component */

var col_component = normalizeComponent(
  grid_colvue_type_script_lang_js_,
  colvue_type_template_id_7a9bbdc9_render,
  colvue_type_template_id_7a9bbdc9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var col = (col_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/popover/popover.vue?vue&type=template&id=2755e62e&scoped=true&
var popovervue_type_template_id_2755e62e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"cz-popover"},_vm.eventType),[_c('transition',{attrs:{"name":"content"}},[_c('div',_vm._g({directives:[{name:"show",rawName:"v-show",value:(_vm.popShow),expression:"popShow"}],ref:"popContent",staticClass:"pop-content",class:_vm.classes},_vm.contentHover),[_vm._t("content")],2)]),_c('span',{ref:"popTrigger"},[_vm._t("default")],2)],1)}
var popovervue_type_template_id_2755e62e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/popover/popover.vue?vue&type=template&id=2755e62e&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/popover/popover.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var popovervue_type_script_lang_js_ = ({
  //输出
  name: "cz-popover",
  props: {
    trigger: {
      default: "click",
      type: String,
      validator: function validator(value) {
        //输入值合法检查
        return value === "click" || value === "hover";
      }
    },
    position: {
      default: "top",
      type: String,
      validator: function validator(value) {
        //输入值合法检查
        return ["top", "left", "right", "bottom"].includes(value);
      }
    },
    type: {
      default: "light",
      type: String,
      validator: function validator(value) {
        //输入值合法检查
        return value === "light" || value === "dark";
      }
    }
  },
  data: function data() {
    return {
      hoverTimeout: null,
      popShow: false,
      eventclick: {
        click: this.popClick
      },
      eventhover: {
        mouseover: this.hoverOpen,
        mouseout: this.hoverClose
      }
    };
  },
  computed: {
    eventType: function eventType() {
      return this["event".concat(this.trigger)];
    },
    contentHover: function contentHover() {
      if (this.trigger == "hover") {
        return this.eventhover;
      } else {
        return null;
      }
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "position-".concat(this.position), true), _defineProperty(_ref, "".concat(this.type), true), _ref;
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  destroyed: function destroyed() {
    //在组件关闭时候消除监听，避免内存泄露
    document.body.removeEventListener("click", this.documentClick);
  },
  methods: {
    positionContent: function positionContent() {
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          width = _this$$el$getBounding.width,
          height = _this$$el$getBounding.height,
          left = _this$$el$getBounding.left,
          top = _this$$el$getBounding.top;

      document.body.appendChild(this.$refs.popContent); //获取元素的位置，可用减去父元素的绝对位置来获取相对位置

      var _this$$refs$popConten = this.$refs.popContent.getBoundingClientRect(),
          height2 = _this$$refs$popConten.height,
          width2 = _this$$refs$popConten.width;

      var positions = {
        top: {
          top: top + window.scrollY - height2 - 5,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX - width2 - 5
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width + 5
        },
        bottom: {
          top: top + window.scrollY + height + 5,
          left: left + window.scrollX
        }
      };
      this.$refs.popContent.style.left = positions[this.position].left + "px";
      this.$refs.popContent.style.top = positions[this.position].top + "px";
    },
    popClick: function popClick(e) {
      //contains用于检查是否包含后代node
      if (this.$refs.popTrigger.contains(e.target)) {
        if (this.popShow) {
          this.clickClose();
        } else {
          this.clickOpen();
        }
      }
    },
    documentClick: function documentClick(e) {
      var flag = !this.$refs.popContent.contains(e.target) && !this.$refs.popTrigger.contains(e.target);

      if (flag) {
        this.clickClose();
      }
    },
    clickClose: function clickClose() {
      this.popShow = false;
      this.$emit("close");
      document.body.removeEventListener("click", this.documentClick);
    },
    hoverClose: function hoverClose() {
      var _this = this;

      this.hoverTimeout = setTimeout(function () {
        _this.popShow = false;

        _this.$emit("close");
      }, 200);
    },
    clickOpen: function clickOpen() {
      var _this2 = this;

      this.popShow = true;
      this.$emit("open");
      this.$nextTick(function () {
        _this2.positionContent();
      });
      document.body.addEventListener("click", this.documentClick);
    },
    hoverOpen: function hoverOpen() {
      var _this3 = this;

      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
      }

      this.popShow = true;
      this.$emit("open");
      this.$nextTick(function () {
        _this3.positionContent();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/popover/popover.vue?vue&type=script&lang=js&
 /* harmony default export */ var popover_popovervue_type_script_lang_js_ = (popovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/popover/popover.vue?vue&type=style&index=0&id=2755e62e&scoped=true&lang=css&
var popovervue_type_style_index_0_id_2755e62e_scoped_true_lang_css_ = __webpack_require__("265c");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/popover/popover.vue






/* normalize component */

var popover_component = normalizeComponent(
  popover_popovervue_type_script_lang_js_,
  popovervue_type_template_id_2755e62e_scoped_true_render,
  popovervue_type_template_id_2755e62e_scoped_true_staticRenderFns,
  false,
  null,
  "2755e62e",
  null
  
)

/* harmony default export */ var popover = (popover_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/container.vue?vue&type=template&id=47d9c82a&scoped=true&
var containervue_type_template_id_47d9c82a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-container",class:_vm.containerClass},[_vm._t("default")],2)}
var containervue_type_template_id_47d9c82a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/container.vue?vue&type=template&id=47d9c82a&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/container.vue?vue&type=script&lang=js&



//
//
//
//
//
/* harmony default export */ var containervue_type_script_lang_js_ = ({
  //输出
  name: "cz-container",
  data: function data() {
    return {
      containerClass: {
        hasSider: false
      }
    };
  },
  props: {
    title: {
      default: "title",
      type: String
    }
  },
  computed: {},
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    this.$children.forEach(function (vm) {
      var typeList = ["cz-sider", "cz-header", "cz-body", "cz-footer", "cz-container"];

      if (!typeList.includes(vm.$options.name)) {
        console.warn("container的子组件只能是cz-sider,cz-header,cz-body,cz-footer,cz-container中的一种");
      }

      if (vm.$options.name == "cz-sider") {
        _this.containerClass.hasSider = true;
      }
    });
  },
  methods: {
    clickme: function clickme(childData) {}
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/container.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_containervue_type_script_lang_js_ = (containervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/layout/container.vue?vue&type=style&index=0&id=47d9c82a&scoped=true&lang=css&
var containervue_type_style_index_0_id_47d9c82a_scoped_true_lang_css_ = __webpack_require__("46e8");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/container.vue






/* normalize component */

var container_component = normalizeComponent(
  layout_containervue_type_script_lang_js_,
  containervue_type_template_id_47d9c82a_scoped_true_render,
  containervue_type_template_id_47d9c82a_scoped_true_staticRenderFns,
  false,
  null,
  "47d9c82a",
  null
  
)

/* harmony default export */ var container = (container_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/header.vue?vue&type=template&id=2541c6ee&scoped=true&
var headervue_type_template_id_2541c6ee_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-header"},[_vm._t("left",null,{"username":_vm.user.name,"user":_vm.user.password}),_vm._t("right"),_vm._t("default")],2)}
var headervue_type_template_id_2541c6ee_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/header.vue?vue&type=template&id=2541c6ee&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var headervue_type_script_lang_js_ = ({
  //输出
  name: "cz-header",
  data: function data() {
    return {
      user: {
        name: "chengzzi",
        password: "123456"
      }
    };
  },
  props: {
    title: {
      default: "",
      type: String
    },
    name: {}
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {} //传元素属性值

});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/header.vue





/* normalize component */

var header_component = normalizeComponent(
  layout_headervue_type_script_lang_js_,
  headervue_type_template_id_2541c6ee_scoped_true_render,
  headervue_type_template_id_2541c6ee_scoped_true_staticRenderFns,
  false,
  null,
  "2541c6ee",
  null
  
)

/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/body.vue?vue&type=template&id=0b044434&scoped=true&
var bodyvue_type_template_id_0b044434_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-body"},[_vm._t("default")],2)}
var bodyvue_type_template_id_0b044434_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/body.vue?vue&type=template&id=0b044434&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/body.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var bodyvue_type_script_lang_js_ = ({
  //输出
  name: "cz-body",
  data: function data() {
    return {};
  },
  props: {
    title: {
      default: "",
      type: String
    }
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {} //传元素属性值

});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/body.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_bodyvue_type_script_lang_js_ = (bodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/layout/body.vue?vue&type=style&index=0&id=0b044434&scoped=true&lang=css&
var bodyvue_type_style_index_0_id_0b044434_scoped_true_lang_css_ = __webpack_require__("7777");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/body.vue






/* normalize component */

var body_component = normalizeComponent(
  layout_bodyvue_type_script_lang_js_,
  bodyvue_type_template_id_0b044434_scoped_true_render,
  bodyvue_type_template_id_0b044434_scoped_true_staticRenderFns,
  false,
  null,
  "0b044434",
  null
  
)

/* harmony default export */ var body = (body_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/sider.vue?vue&type=template&id=3136b763&scoped=true&
var sidervue_type_template_id_3136b763_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-sider"},[_vm._t("default")],2)}
var sidervue_type_template_id_3136b763_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/sider.vue?vue&type=template&id=3136b763&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/sider.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var sidervue_type_script_lang_js_ = ({
  //输出
  name: "cz-sider",
  data: function data() {
    return {};
  },
  props: {
    title: {
      default: "",
      type: String
    }
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {} //传元素属性值

});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/sider.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_sidervue_type_script_lang_js_ = (sidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/sider.vue





/* normalize component */

var sider_component = normalizeComponent(
  layout_sidervue_type_script_lang_js_,
  sidervue_type_template_id_3136b763_scoped_true_render,
  sidervue_type_template_id_3136b763_scoped_true_staticRenderFns,
  false,
  null,
  "3136b763",
  null
  
)

/* harmony default export */ var sider = (sider_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/footer.vue?vue&type=template&id=588d436f&scoped=true&
var footervue_type_template_id_588d436f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-footer"},[_vm._t("default")],2)}
var footervue_type_template_id_588d436f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/footer.vue?vue&type=template&id=588d436f&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/layout/footer.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  //输出
  name: "cz-footer",
  data: function data() {
    return {};
  },
  props: {
    title: {
      default: "",
      type: String
    }
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {} //传元素属性值

});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/chengziUI/template/layout/footer.vue





/* normalize component */

var footer_component = normalizeComponent(
  layout_footervue_type_script_lang_js_,
  footervue_type_template_id_588d436f_scoped_true_render,
  footervue_type_template_id_588d436f_scoped_true_staticRenderFns,
  false,
  null,
  "588d436f",
  null
  
)

/* harmony default export */ var footer = (footer_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tabs.vue?vue&type=template&id=63394e73&scoped=true&
var tabsvue_type_template_id_63394e73_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-tabs",class:_vm.classes},[_vm._t("default")],2)}
var tabsvue_type_template_id_63394e73_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tabs.vue?vue&type=template&id=63394e73&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tabs.vue?vue&type=script&lang=js&




//
//
//
//
//
//

/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
  //输出
  name: "cz-tabs",
  data: function data() {
    return {
      eventBus: new external_commonjs_vue_commonjs2_vue_root_Vue_default.a()
    };
  },
  provide: function provide() {
    return {
      // tabs组件提供了一个事件中心
      eventBus: this.eventBus
    };
  },
  props: {
    value: {},
    type: {
      type: String,
      validator: function validator(value) {
        return ["default", "card"].includes(value);
      }
    }
  },
  computed: {
    classes: function classes() {
      return {
        "cz-tabs-card": this.type == "card"
      };
    }
  },
  watch: {},
  created: function created() {
    var _this = this;

    this.eventBus.$on("update:activeName", function (data, el) {
      //此处可替换成input，不需要:activeName.sync="active"
      // this.$emit("update:activeName",data);
      _this.$emit("input", data);
    });
    this.eventBus.$on("tab-click", function (data) {
      _this.$emit("tab-click", data);
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$children.forEach(function (vm) {
      if (vm.$options.name == "cz-tab-head") {
        var hasValidName = false;
        vm.$children.forEach(function (vm1) {
          if (vm1.name == _this2.value) {
            _this2.eventBus.$emit("update:activeName", _this2.value, vm1.$el);

            hasValidName = true;
          }
        });

        if (!hasValidName) {
          _this2.eventBus.$emit("update:activeName", vm.$children[0].name, vm.$children[0].$el);
        }
      }
    }); // this.eventBus.$emit("update:activeName",this.value);
    // this.eventBus.$emit("update:type",this.type);
  },
  methods: {
    openTab: function openTab(name) {
      var _this3 = this;

      if (!name) return;
      this.$children.forEach(function (vm) {
        if (vm.$options.name == "cz-tab-head") {
          vm.$children.forEach(function (vm1) {
            if (vm1.name == name) {
              _this3.eventBus.$emit("update:activeName", name, vm1.$el);
            }
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/tabs/tabs.vue?vue&type=style&index=0&id=63394e73&scoped=true&lang=css&
var tabsvue_type_style_index_0_id_63394e73_scoped_true_lang_css_ = __webpack_require__("9aac");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tabs.vue






/* normalize component */

var tabs_component = normalizeComponent(
  tabs_tabsvue_type_script_lang_js_,
  tabsvue_type_template_id_63394e73_scoped_true_render,
  tabsvue_type_template_id_63394e73_scoped_true_staticRenderFns,
  false,
  null,
  "63394e73",
  null
  
)

/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-body.vue?vue&type=template&id=65c7a979&scoped=true&
var tab_bodyvue_type_template_id_65c7a979_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-tab-body"},[_vm._t("default")],2)}
var tab_bodyvue_type_template_id_65c7a979_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-body.vue?vue&type=template&id=65c7a979&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-body.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var tab_bodyvue_type_script_lang_js_ = ({
  //输出
  name: "cz-tab-body",
  data: function data() {
    return {};
  },
  provide: function provide() {
    return {};
  },
  props: {
    value: {}
  },
  computed: {},
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-body.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tab_bodyvue_type_script_lang_js_ = (tab_bodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/tabs/tab-body.vue?vue&type=style&index=0&id=65c7a979&scoped=true&lang=css&
var tab_bodyvue_type_style_index_0_id_65c7a979_scoped_true_lang_css_ = __webpack_require__("7807");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-body.vue






/* normalize component */

var tab_body_component = normalizeComponent(
  tabs_tab_bodyvue_type_script_lang_js_,
  tab_bodyvue_type_template_id_65c7a979_scoped_true_render,
  tab_bodyvue_type_template_id_65c7a979_scoped_true_staticRenderFns,
  false,
  null,
  "65c7a979",
  null
  
)

/* harmony default export */ var tab_body = (tab_body_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-pane.vue?vue&type=template&id=d422da70&scoped=true&
var tab_panevue_type_template_id_d422da70_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.active)?_c('div',{staticClass:"cz-tab-pane",class:_vm.classes},[_vm._t("default")],2):_vm._e()}
var tab_panevue_type_template_id_d422da70_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-pane.vue?vue&type=template&id=d422da70&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-pane.vue?vue&type=script&lang=js&

//
//
//
//
//
/* harmony default export */ var tab_panevue_type_script_lang_js_ = ({
  name: "cz-tab-pane",
  data: function data() {
    return {
      activeName: "",
      active: false
    };
  },
  inject: ["eventBus"],
  props: {
    name: {
      default: "",
      type: String,
      required: true
    }
  },
  methods: {},
  created: function created() {
    var _this = this;

    //注入的eventBus对象，监听派发的getActive事件
    this.eventBus.$on("update:activeName", function (data) {
      _this.activeName = data;
      _this.active = _this.name === data;
    });
  },
  mounted: function mounted() {},
  computed: {
    classes: function classes() {
      return {
        active: this.active
      };
    }
  },
  watch: {
    activeName: function activeName(val) {
      this.active = val == this.name;
    }
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-pane.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tab_panevue_type_script_lang_js_ = (tab_panevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-pane.vue





/* normalize component */

var tab_pane_component = normalizeComponent(
  tabs_tab_panevue_type_script_lang_js_,
  tab_panevue_type_template_id_d422da70_scoped_true_render,
  tab_panevue_type_template_id_d422da70_scoped_true_staticRenderFns,
  false,
  null,
  "d422da70",
  null
  
)

/* harmony default export */ var tab_pane = (tab_pane_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-head.vue?vue&type=template&id=3ec66dca&scoped=true&
var tab_headvue_type_template_id_3ec66dca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-tab-head"},[_vm._t("default"),_c('div',{staticClass:"extra"},[_vm._t("extra")],2),_c('div',{staticClass:"boder-bottom"}),_c('div',{ref:"line",staticClass:"line"})],2)}
var tab_headvue_type_template_id_3ec66dca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-head.vue?vue&type=template&id=3ec66dca&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-head.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tab_headvue_type_script_lang_js_ = ({
  //输出
  name: "cz-tab-head",
  data: function data() {
    return {};
  },
  inject: ["eventBus"],
  created: function created() {
    var _this = this;

    this.eventBus.$on("update:activeName", function (data, el) {
      if (el) {
        var _data = el.getBoundingClientRect();

        var tabHeadData = _this.$el.getBoundingClientRect();

        var left = _data.left - tabHeadData.left;
        _this.$refs.line.style.width = _data.width + "px";
        _this.$refs.line.style.left = left + "px";
      }
    });
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-head.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tab_headvue_type_script_lang_js_ = (tab_headvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/tabs/tab-head.vue?vue&type=style&index=0&id=3ec66dca&scoped=true&lang=css&
var tab_headvue_type_style_index_0_id_3ec66dca_scoped_true_lang_css_ = __webpack_require__("e0e4");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-head.vue






/* normalize component */

var tab_head_component = normalizeComponent(
  tabs_tab_headvue_type_script_lang_js_,
  tab_headvue_type_template_id_3ec66dca_scoped_true_render,
  tab_headvue_type_template_id_3ec66dca_scoped_true_staticRenderFns,
  false,
  null,
  "3ec66dca",
  null
  
)

/* harmony default export */ var tab_head = (tab_head_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-item.vue?vue&type=template&id=782a6c75&scoped=true&
var tab_itemvue_type_template_id_782a6c75_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-tab-item",class:_vm.classes,on:{"click":_vm.tabClick}},[_vm._t("default")],2)}
var tab_itemvue_type_template_id_782a6c75_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-item.vue?vue&type=template&id=782a6c75&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/tabs/tab-item.vue?vue&type=script&lang=js&

//
//
//
//
//
/* harmony default export */ var tab_itemvue_type_script_lang_js_ = ({
  //输出
  name: "cz-tab-item",
  data: function data() {
    return {
      activeName: ""
    };
  },
  inject: ["eventBus"],
  props: {
    name: {
      default: "",
      type: String,
      required: true
    }
  },
  computed: {
    classes: function classes() {
      return {
        active: this.activeName == this.name
      };
    }
  },
  watch: {},
  created: function created() {
    var _this = this;

    this.eventBus.$on("update:activeName", function (data) {
      _this.activeName = data;
    });
  },
  mounted: function mounted() {},
  methods: {
    tabClick: function tabClick() {
      if (this.activeName != this.name) {
        this.eventBus.$emit("update:activeName", this.name, this.$el);
        this.eventBus.$emit("tab-click", this);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tab_itemvue_type_script_lang_js_ = (tab_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/tabs/tab-item.vue?vue&type=style&index=0&id=782a6c75&scoped=true&lang=css&
var tab_itemvue_type_style_index_0_id_782a6c75_scoped_true_lang_css_ = __webpack_require__("9dda");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/tabs/tab-item.vue






/* normalize component */

var tab_item_component = normalizeComponent(
  tabs_tab_itemvue_type_script_lang_js_,
  tab_itemvue_type_template_id_782a6c75_scoped_true_render,
  tab_itemvue_type_template_id_782a6c75_scoped_true_staticRenderFns,
  false,
  null,
  "782a6c75",
  null
  
)

/* harmony default export */ var tab_item = (tab_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/input/input.vue?vue&type=template&id=1e3db833&scoped=true&
var inputvue_type_template_id_1e3db833_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-input",class:_vm.classes,style:(_vm.inputStyle)},[(_vm.type=='text')?_c('div',{staticClass:"input-icon"},[_c('cz-icon',{attrs:{"name":_vm.icon}})],1):_vm._e(),(_vm.type=='text')?_c('input',{ref:"text",attrs:{"maxlength":_vm.maxlength,"minlength":_vm.maxlength,"disabled":_vm.disabled,"readonly":_vm.readonly,"placeholder":_vm.placeholder,"name":_vm.name,"type":"text"},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)},"change":function($event){return _vm.$emit('change', $event.target.value)},"focus":function($event){return _vm.$emit('focus', $event)},"blur":function($event){return _vm.$emit('blur', $event)}}}):_vm._e(),(_vm.type=='textarea')?_c('textarea',{ref:"textarea",attrs:{"maxlength":_vm.maxlength,"minlength":_vm.maxlength,"disabled":_vm.disabled,"readonly":_vm.readonly,"placeholder":_vm.placeholder,"name":_vm.name,"rows":_vm.rows},domProps:{"value":_vm.value},on:{"input":function($event){_vm.resize();_vm.$emit('input', $event.target.value)},"change":function($event){return _vm.$emit('change', $event.target.value)},"focus":function($event){return _vm.$emit('focus', $event)},"blur":function($event){return _vm.$emit('blur', $event)}}}):_vm._e()])}
var inputvue_type_template_id_1e3db833_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/input/input.vue?vue&type=template&id=1e3db833&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("34a3");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/input/input.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  //输出
  name: "cz-input",
  data: function data() {
    return {
      propOne: "propOne"
    };
  },
  props: {
    value: {},
    name: {
      type: String
    },
    type: {
      default: "text",
      type: String,
      validator: function validator(value) {
        //输入值合法检查
        return value === "text" || value === "textarea";
      }
    },
    icon: {
      default: "",
      type: String
    },
    maxlength: {
      type: [Number, String]
    },
    rows: {
      default: "2",
      type: String
    },
    minlength: {
      type: [Number, String]
    },
    iPosition: {
      default: "left",
      type: String,
      validator: function validator(value) {
        //输入值合法检查
        return value === "left" || value === "right";
      }
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ["large", "small", "mini"].includes(value);
      }
    },
    borderStyle: {
      type: String,
      validator: function validator(value) {
        //输入值合法检查
        return ["green", "blue", "none"].includes(value);
      }
    },
    placeholder: {
      default: "",
      type: String
    },
    width: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
      validator: function validator(value) {
        if (_typeof(value) === "object") {
          if (typeof value.minRows !== "number" || typeof value.maxRows !== "number") {
            console.error('minRows、minRows的值为数字');
            return false;
          } else if (!value.minRows >= 1) {
            console.error('minRows值不能小于1');
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    focus: function focus() {
      this.$refs[this.type].focus();
    },
    resize: function resize() {
      var el = this.$refs.textarea;

      if (el && this.autosize) {
        if (_typeof(this.autosize) === "object") {
          var maxH = this.autosize.maxRows * Number(getComputedStyle(el).lineHeight.replace("px", ""));
          if (el.scrollHeight - 6 > maxH) return;
        }

        el.style.height = 'auto';
        el.style.height = el.scrollHeight - 6 + 'px';
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var el = this.$refs.textarea;

    if (el && _typeof(this.autosize) === "object") {
      var minH = this.autosize.minRows * Number(getComputedStyle(el).lineHeight.replace("px", "")) + "px";
      el.style.minHeight = minH;
    }
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "".concat(this.size), this.size && this.type == 'text'), _defineProperty(_ref, "".concat(this.type), true), _defineProperty(_ref, "i-position-".concat(this.iPosition), this.icon), _defineProperty(_ref, "border-".concat(this.borderStyle), this.borderStyle), _defineProperty(_ref, "readonly", this.readonly), _ref;
    },
    inputStyle: function inputStyle() {
      return {
        width: this.width ? this.width + "px" : "100%"
      };
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/input/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/input/input.vue?vue&type=style&index=0&id=1e3db833&scoped=true&lang=css&
var inputvue_type_style_index_0_id_1e3db833_scoped_true_lang_css_ = __webpack_require__("b591");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/input/input.vue






/* normalize component */

var input_component = normalizeComponent(
  input_inputvue_type_script_lang_js_,
  inputvue_type_template_id_1e3db833_scoped_true_render,
  inputvue_type_template_id_1e3db833_scoped_true_staticRenderFns,
  false,
  null,
  "1e3db833",
  null
  
)

/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/collapse/collapse.vue?vue&type=template&id=8fc4c3f8&scoped=true&
var collapsevue_type_template_id_8fc4c3f8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-collapse"},[_vm._t("default")],2)}
var collapsevue_type_template_id_8fc4c3f8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/collapse/collapse.vue?vue&type=template&id=8fc4c3f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/collapse/collapse.vue?vue&type=script&lang=js&

//
//
//
//
//

/* harmony default export */ var collapsevue_type_script_lang_js_ = ({
  //输出
  name: "cz-collapse",
  props: {
    title: {
      default: "",
      type: String
    },
    accordion: {
      default: false,
      type: Boolean
    },
    value: {
      type: Array
    }
  },
  data: function data() {
    return {
      eventBus: new external_commonjs_vue_commonjs2_vue_root_Vue_default.a(),
      myValue: null
    };
  },
  provide: function provide() {
    return {
      // tabs组件提供了一个事件中心
      eventBus: this.eventBus
    };
  },
  methods: {
    sendBus: function sendBus(value) {
      this.$emit("input", value);
      this.$emit("change", value);
      this.eventBus.$emit("update:activeName", value);
    }
  },
  //传元素属性值
  created: function created() {
    var _this = this;

    this.eventBus.$on("update:addName", function (data) {
      var value = _toConsumableArray(_this.value);

      if (_this.accordion) {
        value = [data];
      } else {
        value.push(data);
      }

      _this.sendBus(value);
    });
    this.eventBus.$on("update:removeName", function (data) {
      var value = _toConsumableArray(_this.value);

      if (_this.accordion) {
        value = [];
      } else {
        value.splice(value.indexOf(data), 1);
      }

      _this.sendBus(value);
    });
  },
  mounted: function mounted() {
    if (Array.isArray(this.value)) {
      this.eventBus.$emit("update:activeName", this.value);
    } else {
      console.error("组件collapse的value必须为Array");
    }
  },
  computed: {},
  watch: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/collapse/collapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var collapse_collapsevue_type_script_lang_js_ = (collapsevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/collapse/collapse.vue?vue&type=style&index=0&id=8fc4c3f8&scoped=true&lang=css&
var collapsevue_type_style_index_0_id_8fc4c3f8_scoped_true_lang_css_ = __webpack_require__("b3aa");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/collapse/collapse.vue






/* normalize component */

var collapse_component = normalizeComponent(
  collapse_collapsevue_type_script_lang_js_,
  collapsevue_type_template_id_8fc4c3f8_scoped_true_render,
  collapsevue_type_template_id_8fc4c3f8_scoped_true_staticRenderFns,
  false,
  null,
  "8fc4c3f8",
  null
  
)

/* harmony default export */ var collapse = (collapse_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/collapse/collapse-item.vue?vue&type=template&id=ef979cf4&scoped=true&
var collapse_itemvue_type_template_id_ef979cf4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-collapse-item",class:_vm.classes},[_c('div',{staticClass:"collapse-head",on:{"click":_vm.headClick}},[_c('div',{staticClass:"head-title"},[_vm._v(_vm._s(_vm.title))]),_c('div',{staticClass:"head-arrow",class:{active:_vm.active}},[_c('cz-icon',{attrs:{"name":"right"}})],1)]),_c('transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',{staticClass:"collapse-content-wrap"},[_c('div',{staticClass:"collapse-content"},[_vm._t("default")],2)]):_vm._e()])],1)}
var collapse_itemvue_type_template_id_ef979cf4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/collapse/collapse-item.vue?vue&type=template&id=ef979cf4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/collapse/collapse-item.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var collapse_itemvue_type_script_lang_js_ = ({
  //输出
  name: "cz-collapse-item",
  props: {
    title: {
      default: "",
      type: String
    },
    name: {}
  },
  data: function data() {
    return {
      active: false
    };
  },
  inject: ["eventBus"],
  methods: {
    headClick: function headClick() {
      this.sendHandle();
    },
    sendHandle: function sendHandle() {
      if (this.active) {
        this.eventBus.$emit("update:removeName", this.name);
      } else {
        this.eventBus.$emit("update:addName", this.name);
      }
    },
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      var endWidth = window.getComputedStyle(el).height;
      el.style.height = '0px';
      Velocity(el, {
        height: endWidth,
        opacity: 1
      }, {
        duration: 300
      }, {
        complete: done
      });
    },
    leave: function leave(el, done) {
      Velocity(el, {
        height: 0,
        opacity: 0
      }, {
        duration: 300
      }, {
        complete: done
      });
    }
  },
  created: function created() {
    var _this = this;

    this.eventBus.$on("update:activeName", function (data) {
      if (data.indexOf(_this.name) > -1) {
        _this.active = true;
      } else {
        _this.active = false;
      }
    });
  },
  mounted: function mounted() {},
  computed: {
    classes: function classes() {
      return {
        active: this.active
      };
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/collapse/collapse-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var collapse_collapse_itemvue_type_script_lang_js_ = (collapse_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/collapse/collapse-item.vue?vue&type=style&index=0&id=ef979cf4&scoped=true&lang=css&
var collapse_itemvue_type_style_index_0_id_ef979cf4_scoped_true_lang_css_ = __webpack_require__("37c7");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/collapse/collapse-item.vue






/* normalize component */

var collapse_item_component = normalizeComponent(
  collapse_collapse_itemvue_type_script_lang_js_,
  collapse_itemvue_type_template_id_ef979cf4_scoped_true_render,
  collapse_itemvue_type_template_id_ef979cf4_scoped_true_staticRenderFns,
  false,
  null,
  "ef979cf4",
  null
  
)

/* harmony default export */ var collapse_item = (collapse_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/nav/nav.vue?vue&type=template&id=fe234678&scoped=true&
var navvue_type_template_id_fe234678_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-nav",class:_vm.classes,style:(_vm.styles)},[_vm._t("default"),(this.mode =='horizontal')?_c('div',{ref:"line",staticClass:"line"}):_vm._e()],2)}
var navvue_type_template_id_fe234678_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav.vue?vue&type=template&id=fe234678&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/nav/nav.vue?vue&type=script&lang=js&




//
//
//
//
//
//

/* harmony default export */ var navvue_type_script_lang_js_ = ({
  //输出
  name: "cz-nav",
  data: function data() {
    return {
      eventBus: new external_commonjs_vue_commonjs2_vue_root_Vue_default.a()
    };
  },
  provide: function provide() {
    return {
      // tabs组件提供了一个事件中心
      eventBus: this.eventBus
    };
  },
  props: {
    mode: {
      default: "vertical",
      type: String
    },
    defaultActive: {
      default: "",
      type: String
    },
    defaultOpeneds: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    textColor: {
      default: "",
      type: String
    },
    backgroundColor: {
      default: "",
      type: String
    },
    activeTextColor: {
      default: "",
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    router: {
      default: false,
      type: Boolean
    },
    trigger: {
      default: "hover",
      type: String
    }
  },
  methods: {
    openSub: function openSub(name) {
      this.$children.forEach(function (vm) {
        if (vm.$options.name == 'cz-nav-subitem' && names.includes(vm.name)) {
          vm.spread = true;
        }
      });
    },
    closeSub: function closeSub(names) {
      this.$children.forEach(function (vm) {
        console.log(vm.name);
        console.log(vm.$options.name);

        if (vm.$options.name == 'cz-nav-subitem' && names.includes(vm.name)) {
          vm.spread = false;
        }
      });
    }
  },
  created: function created() {
    var _this = this;

    this.eventBus.$on("update:activeName", function (data, el, first) {
      //不是第一次更新，则传递事件函数
      if (!first) _this.$emit("select", data);

      if (el && _this.$refs.line) {
        // active下划线
        var _data = el.getBoundingClientRect();

        var tabHeadData = _this.$el.getBoundingClientRect();

        var left = _data.left - tabHeadData.left;
        _this.$refs.line.style.width = _data.width + "px";
        _this.$refs.line.style.left = left + "px";
      }
    });
    this.eventBus.$on("open:subitem", function (data) {
      _this.$emit("open", data);
    });
    this.eventBus.$on("close:subitem", function (data) {
      _this.$emit("close", data);
    });
  },
  mounted: function mounted() {
    var params = {
      mode: this.mode,
      defaultActive: this.defaultActive,
      defaultOpeneds: this.defaultOpeneds,
      textColor: this.textColor,
      backgroundColor: this.backgroundColor,
      activeTextColor: this.activeTextColor,
      multiple: this.multiple,
      router: this.router,
      trigger: this.trigger
    };
    this.eventBus.$emit("init:params", params, true);
  },
  computed: {
    classes: function classes() {
      return {
        vertical: this.mode == "vertical",
        horizontal: this.mode == "horizontal"
      };
    },
    styles: function styles() {
      return {
        background: this.backgroundColor || null
      };
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_navvue_type_script_lang_js_ = (navvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/nav/nav.vue?vue&type=style&index=0&id=fe234678&scoped=true&lang=css&
var navvue_type_style_index_0_id_fe234678_scoped_true_lang_css_ = __webpack_require__("ee3f");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav.vue






/* normalize component */

var nav_component = normalizeComponent(
  nav_navvue_type_script_lang_js_,
  navvue_type_template_id_fe234678_scoped_true_render,
  navvue_type_template_id_fe234678_scoped_true_staticRenderFns,
  false,
  null,
  "fe234678",
  null
  
)

/* harmony default export */ var nav = (nav_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/nav/nav-item.vue?vue&type=template&id=25a1f990&scoped=true&
var nav_itemvue_type_template_id_25a1f990_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-nav-item",class:_vm.classes,style:(_vm.styles),on:{"click":_vm.itemClick,"mouseenter":_vm.hoverMouseEvent,"mouseleave":_vm.hoverMouseEvent}},[_vm._t("default")],2)}
var nav_itemvue_type_template_id_25a1f990_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav-item.vue?vue&type=template&id=25a1f990&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/nav/nav-item.vue?vue&type=script&lang=js&

//
//
//
//
//
/* harmony default export */ var nav_itemvue_type_script_lang_js_ = ({
  //输出
  name: "cz-nav-item",
  data: function data() {
    return {
      activeName: "",
      hover: false,
      textColor: null,
      activeTextColor: null,
      router: false
    };
  },
  inject: ["eventBus"],
  props: {
    name: {
      default: "",
      type: String
    },
    route: {
      default: "",
      type: String
    }
  },
  methods: {
    itemClick: function itemClick() {
      this.eventBus.$emit("close:child", this.$parent.name);

      if (this.activeName != this.name) {
        var el = this.$el;

        if (this.$parent.$options.name == "cz-nav-subitem") {
          el = this.$parent.$el;
        }

        this.eventBus.$emit("update:activeName", this.name, el);
      }

      if (this.route && this.router) this.$router.push({
        path: this.route
      });
    },
    hoverMouseEvent: function hoverMouseEvent(e) {
      if (e.type == "mouseenter") {
        this.hover = true;
      } else if (e.type == "mouseleave") {
        this.hover = false;
      }
    }
  },
  created: function created() {
    var _this = this;

    this.eventBus.$on("update:activeName", function (data) {
      _this.activeName = data;
    });
    this.eventBus.$on("init:params", function (data) {
      _this.activeName = data.defaultActive;
      _this.textColor = data.textColor;
      _this.activeTextColor = data.activeTextColor;
      _this.router = data.router;

      if (_this.activeName == _this.name) {
        var el = _this.$el;

        if (_this.$parent.$options.name == "cz-nav-subitem") {
          el = _this.$parent.$el;
        } // 第一次触发函数


        _this.eventBus.$emit("update:activeName", _this.activeName, el, true);
      }
    });
  },
  mounted: function mounted() {},
  computed: {
    classes: function classes() {
      return {
        active: this.active
      };
    },
    active: function active() {
      return this.activeName == this.name;
    },
    styles: function styles() {
      var color = null;

      if (this.active) {
        if (this.activeTextColor) {
          color = this.activeTextColor;
        }
      } else if (this.textColor) {
        color = this.textColor;
      }

      if (this.hover) color = this.activeTextColor || "#FF9500";
      return {
        'color': color
      };
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_nav_itemvue_type_script_lang_js_ = (nav_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/nav/nav-item.vue?vue&type=style&index=0&id=25a1f990&scoped=true&lang=css&
var nav_itemvue_type_style_index_0_id_25a1f990_scoped_true_lang_css_ = __webpack_require__("70d0");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav-item.vue






/* normalize component */

var nav_item_component = normalizeComponent(
  nav_nav_itemvue_type_script_lang_js_,
  nav_itemvue_type_template_id_25a1f990_scoped_true_render,
  nav_itemvue_type_template_id_25a1f990_scoped_true_staticRenderFns,
  false,
  null,
  "25a1f990",
  null
  
)

/* harmony default export */ var nav_item = (nav_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/nav/nav-subitem.vue?vue&type=template&id=138217ac&scoped=true&
var nav_subitemvue_type_template_id_138217ac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-nav-subitem",class:_vm.classes,on:{"mouseenter":_vm.subMouseEvent,"mouseleave":_vm.subMouseEvent}},[_c('div',{staticClass:"title",style:(_vm.styles),on:{"click":_vm.subClick,"mouseenter":_vm.hoverMouseEvent,"mouseleave":_vm.hoverMouseEvent}},[_vm._t("title"),_c('div',{staticClass:"title-arrow",class:{active:_vm.spread}},[_c('cz-icon',{attrs:{"size":"small","name":"right"}})],1)],2),_c('transition',{attrs:{"appear":"","css":false,"name":_vm.mode},on:{"appear":_vm.appear,"appear-cancelled":_vm.appearCancelled,"before-enter":_vm.beforeEnter,"enter":_vm.enter,"before-leave":_vm.beforeLeave,"leave":_vm.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.spread),expression:"spread"}],ref:"childItem",staticClass:"childItem"},[_vm._t("default")],2)])],1)}
var nav_subitemvue_type_template_id_138217ac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav-subitem.vue?vue&type=template&id=138217ac&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/nav/nav-subitem.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nav_subitemvue_type_script_lang_js_ = ({
  //输出
  name: "cz-nav-subitem",
  data: function data() {
    return {
      childrenNames: [],
      activeName: "",
      spread: true,
      hover: false,
      mode: null,
      trigger: null,
      multiple: null,
      textColor: null,
      activeTextColor: null,
      defaultOpeneds: [],
      childHeight: null,
      firstClose: true
    };
  },
  inject: ["eventBus"],
  props: {
    name: {}
  },
  methods: {
    subClick: function subClick() {
      if (this.trigger == "click") {
        if (this.spread) {
          this.closeChild();
        } else {
          this.openChild();
        }

        this.eventBus.$emit("close:child", this.name);
      }
    },
    subMouseEvent: function subMouseEvent(e) {
      var _this = this;

      if (this.trigger == "hover") {
        if (e.type == "mouseenter") {
          clearTimeout(this.leaveTimer);
          this.openChild();
        } else if (e.type == "mouseleave") {
          this.leaveTimer = setTimeout(function () {
            _this.closeChild();
          }, 200);
        }
      }
    },
    hoverMouseEvent: function hoverMouseEvent(e) {
      if (e.type == "mouseenter") {
        this.hover = true;
      } else if (e.type == "mouseleave") {
        this.hover = false;
      }
    },
    openChild: function openChild() {
      this.spread = true;
      this.eventBus.$emit("open:subitem", this.name);
    },
    closeChild: function closeChild() {
      this.spread = false;
      this.eventBus.$emit("close:subitem", this.name);
    },
    appear: function appear(el, done) {
      this.childHeight = window.getComputedStyle(el).height;
      el.style.opacity = 1;
    },
    appearCancelled: function appearCancelled(el) {},
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      Velocity(el, {
        height: this.childHeight,
        opacity: 1
      }, {
        duration: 300
      }, {
        complete: done
      }, "linear");
    },
    beforeLeave: function beforeLeave(el) {
      this.childHeight = window.getComputedStyle(el).height;
    },
    leave: function leave(el, done) {
      if (this.firstClose) {
        this.firstClose = false;
        done();
      }

      Velocity(el, {
        height: 0,
        opacity: 0
      }, {
        duration: 300
      }, {
        complete: done
      }, "linear");
    }
  },
  created: function created() {
    var _this2 = this;

    this.eventBus.$on("update:activeName", function (data) {
      _this2.activeName = data;
    });
    this.eventBus.$on("close:child", function (data) {
      if (!_this2.multiple && _this2.spread && _this2.name != data) {
        // 不是多选的时候并且本选项卡展开的话，关闭本选项卡
        _this2.spread = false;
      }
    });
    this.eventBus.$on("init:params", function (data) {
      _this2.mode = data.mode;
      _this2.multiple = data.multiple;
      _this2.defaultOpeneds = data.defaultOpeneds;
      _this2.activeName = data.defaultActive;
      _this2.textColor = data.textColor;
      _this2.activeTextColor = data.activeTextColor;

      if (_this2.defaultOpeneds.includes(_this2.name)) {
        _this2.spread = true;
        _this2.firstClose = false;
      }

      if (data.mode == "horizontal" && data.trigger == "hover") {
        _this2.trigger = "hover";
      } else {
        _this2.trigger = "click";
      }
    });
  },
  mounted: function mounted() {
    var _this3 = this;

    this.spread = false; // this.childHeight = window.getComputedStyle(this.$refs.childItem).height;

    this.$children.forEach(function (vm) {
      if (vm.$options.name != "cz-icon") _this3.childrenNames.push(vm.name);
    });
  },
  computed: {
    classes: function classes() {
      return {
        active: this.active,
        vertical: this.mode == "vertical",
        horizontal: this.mode == "horizontal"
      };
    },
    active: function active() {
      return this.childrenNames.includes(this.activeName);
    },
    styles: function styles() {
      var color = null; // if(this.active){
      //     if(this.activeTextColor){
      //         // color = this.activeTextColor;
      //     }
      // }

      if (this.textColor) color = this.textColor;
      if (this.hover) color = this.activeTextColor || "#FF9500";
      return {
        'color': color
      };
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav-subitem.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_nav_subitemvue_type_script_lang_js_ = (nav_subitemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/nav/nav-subitem.vue?vue&type=style&index=0&id=138217ac&scoped=true&lang=css&
var nav_subitemvue_type_style_index_0_id_138217ac_scoped_true_lang_css_ = __webpack_require__("9168");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/nav/nav-subitem.vue






/* normalize component */

var nav_subitem_component = normalizeComponent(
  nav_nav_subitemvue_type_script_lang_js_,
  nav_subitemvue_type_template_id_138217ac_scoped_true_render,
  nav_subitemvue_type_template_id_138217ac_scoped_true_staticRenderFns,
  false,
  null,
  "138217ac",
  null
  
)

/* harmony default export */ var nav_subitem = (nav_subitem_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/counter/counter.vue?vue&type=template&id=b66d5104&
var countervue_type_template_id_b66d5104_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-counter",class:_vm.classes},[_c('input',{ref:"input",staticClass:"counterInput",attrs:{"name":_vm.name,"readonly":!_vm.inputted,"type":"text"},domProps:{"value":_vm.myValue},on:{"change":function($event){return _vm.counter($event.target.value)}}}),_c('span',{staticClass:"counterBtn add",on:{"click":function($event){return _vm.calculate('add')}}},[_vm._v("+")]),_c('span',{staticClass:"counterBtn sub",on:{"click":function($event){return _vm.calculate('sub')}}},[_vm._v("-")])])}
var countervue_type_template_id_b66d5104_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/counter/counter.vue?vue&type=template&id=b66d5104&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/counter/counter.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var countervue_type_script_lang_js_ = ({
  //输出
  name: "cz-counter",
  data: function data() {
    return {
      myValue: 0
    };
  },
  props: {
    value: {},
    name: {
      type: String
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    inputted: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ["large", "small", "mini"].includes(value);
      }
    }
  },
  methods: {
    calculate: function calculate(type) {
      if (type === "add") {
        this.counter(this.myValue + this.step);
      } else if (type === "sub") {
        this.counter(this.myValue - this.step);
      }
    },
    counter: function counter(value) {
      if (this.validator(value)) {
        if (this.myValue != Number(value)) {
          this.$emit('change', Number(value));
        }

        this.$emit('input', Number(value));
        this.myValue = Number(value);
      } else {
        if (Number(value) < this.min) {
          this.$refs.input.value = this.min;
          this.counter(this.min);
        } else if (Number(value) > this.max) {
          this.$refs.input.value = this.max;
          this.counter(this.max);
        } else {
          this.$refs.input.value = this.myValue;
        }
      }
    },
    validator: function validator(num) {
      if (Number(num) === Number(num)) {
        if (num >= this.min && num <= this.max) {
          return true;
        }
      }

      return false;
    }
  },
  computed: {
    classes: function classes() {
      return _defineProperty({}, "".concat(this.size), this.size);
    }
  },
  watch: {
    value: function value(val) {
      if (this.validator(val)) {
        this.myValue = Number(val);
      }
    }
  },
  created: function created() {
    if (this.validator(this.value)) {
      this.myValue = Number(this.value);
    } else {
      this.myValue = this.min;
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/counter/counter.vue?vue&type=script&lang=js&
 /* harmony default export */ var counter_countervue_type_script_lang_js_ = (countervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/counter/counter.vue?vue&type=style&index=0&lang=css&
var countervue_type_style_index_0_lang_css_ = __webpack_require__("ae89");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/counter/counter.vue






/* normalize component */

var counter_component = normalizeComponent(
  counter_countervue_type_script_lang_js_,
  countervue_type_template_id_b66d5104_render,
  countervue_type_template_id_b66d5104_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var counter = (counter_component.exports);
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"575328b0-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/notify/notify.vue?vue&type=template&id=122cc9d4&scoped=true&
var notifyvue_type_template_id_122cc9d4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cz-notify",class:_vm.classes,on:{"click":_vm.click}},[(_vm.type||_vm.iconName)?_c('div',{staticClass:"notify-icon"},[_c('cz-icon',{attrs:{"size":"large","name":_vm.myIconName}})],1):_vm._e(),_c('div',{staticClass:"main-wrap"},[_c('div',{staticClass:"title"},[_c('b',[_vm._v(_vm._s(_vm.title))])]),(_vm.htmlMessage)?_c('div',{staticClass:"message",domProps:{"innerHTML":_vm._s(_vm.message)}}):_c('div',{staticClass:"message"},[_vm._v(_vm._s(_vm.message))])]),_c('div',{staticClass:"closeBtn",on:{"click":_vm.close}},[_c('cz-icon',{attrs:{"size":"small","name":"guanbi1"}})],1)])}
var notifyvue_type_template_id_122cc9d4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/chengziUI/template/notify/notify.vue?vue&type=template&id=122cc9d4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/lib/chengziUI/template/notify/notify.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var notifyvue_type_script_lang_js_ = ({
  //输出
  name: "cz-notify",
  data: function data() {
    return {
      number: null,
      myIconName: "info"
    };
  },
  props: {
    n_id: {
      default: 1,
      type: Number
    },
    type: {
      type: String,
      validator: function validator(val) {
        return ["error", "warning", "info", "success"].includes(val);
      }
    },
    iconName: {
      type: String
    },
    onClose: {
      default: function _default() {
        return null;
      },
      type: Function
    },
    onClick: {
      default: function _default() {
        return null;
      },
      type: Function
    },
    message: {
      default: "这是一条消息",
      type: String
    },
    title: {
      default: "提示",
      type: String
    },
    htmlMessage: {
      default: false,
      type: Boolean
    },
    closeDelay: {
      default: 2500,
      type: Number,
      validator: function validator(val) {
        return val >= 0;
      }
    },
    offset: {
      default: 20,
      type: Number
    },
    position: {
      default: "top-right",
      type: String,
      validator: function validator(val) {
        return ["top-right", "top-left", "bottom-right", "bottom-left"].includes(val);
      }
    }
  },
  methods: {
    close: function close() {
      this.$emit("close", this);
      if (this.onClose) this.onClose(this);
      this.$el.remove();
      this.$destroy();
    },
    click: function click() {
      if (this.onClick) this.onClick(this);
    },
    updatePosition: function updatePosition(h) {
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          top = _this$$el$getBounding.top;

      if (this.position.includes("top")) {
        this.$el.style.top = top - Math.ceil(h) - 10 + "px";
      } else if (this.position.includes("bottom")) {
        this.$el.style.top = top + Math.ceil(h) + 10 + "px";
      }
    },
    setPosition: function setPosition() {
      var _this = this;

      var brothers = document.body.getElementsByClassName("position-".concat(this.position));
      var lastNotify = brothers[brothers.length - 1];
      var data = null;
      lastNotify && (data = lastNotify.getBoundingClientRect());

      if (this.position.includes("top")) {
        this.$el.style.top = this.offset + "px";

        if (lastNotify) {
          // 如果有前一个通知
          this.$el.style.top = data.top + Math.ceil(data.height) + 10 + "px";
        }
      } else if (this.position.includes("bottom")) {
        this.$el.style.bottom = this.offset + "px";

        if (lastNotify) {
          // 如果有前一个通知
          this.$nextTick(function () {
            var _this$$el$getBounding2 = _this.$el.getBoundingClientRect(),
                height = _this$$el$getBounding2.height;

            _this.$el.style.bottom = "auto";
            _this.$el.style.top = data.top - Math.ceil(height) - 10 + "px";
          });
        }
      }
    }
  },
  created: function created() {
    if (this.iconName) this.myIconName = this.iconName;
    if (this.type) this.myIconName = this.type == "info" ? "info" : "color-".concat(this.type);
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.closeDelay !== 0) setTimeout(function () {
      _this2.close();
    }, this.closeDelay);
    this.setPosition();
  },
  computed: {
    classes: function classes() {
      return ["position-".concat(this.position)];
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./src/lib/chengziUI/template/notify/notify.vue?vue&type=script&lang=js&
 /* harmony default export */ var notify_notifyvue_type_script_lang_js_ = (notifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/chengziUI/template/notify/notify.vue?vue&type=style&index=0&id=122cc9d4&scoped=true&lang=css&
var notifyvue_type_style_index_0_id_122cc9d4_scoped_true_lang_css_ = __webpack_require__("7c79");

// CONCATENATED MODULE: ./src/lib/chengziUI/template/notify/notify.vue






/* normalize component */

var notify_component = normalizeComponent(
  notify_notifyvue_type_script_lang_js_,
  notifyvue_type_template_id_122cc9d4_scoped_true_render,
  notifyvue_type_template_id_122cc9d4_scoped_true_staticRenderFns,
  false,
  null,
  "122cc9d4",
  null
  
)

/* harmony default export */ var notify_notify = (notify_component.exports);
// CONCATENATED MODULE: ./src/lib/chengziUI/template/notify/notifyPlugin.js


var n_id = 1;
var notifys = {
  "top-right": {},
  "top-left": {},
  "bottom-right": {},
  "bottom-left": {}
};

var onClose = function onClose(vm) {
  for (var i in notifys[vm.position]) {
    var item = notifys[vm.position][i];

    if (item && item.n_id > vm.n_id) {
      var _vm$$el$getBoundingCl = vm.$el.getBoundingClientRect(),
          height = _vm$$el$getBoundingCl.height;

      item.updatePosition(height);
    }
  }

  delete notifys[vm.position][vm.n_id];
};

var notifyPlugin_notifyPlugin = function notifyPlugin(Vue) {
  return function (options) {
    //注册组件
    var constructor = Vue.extend(notify_notify); // Notify 也就vue文件相当于一些配置项
    //生成组件

    var notify = new constructor({
      // 传入props
      propsData: _objectSpread({
        n_id: n_id
      }, options)
    });
    n_id += 1; //挂载组件

    notify.$mount();
    notify.$on("close", onClose);
    notifys[notify.position][notify._uid] = notify; //添加dom

    document.body.appendChild(notify.$el);
  };
};

/* harmony default export */ var notify_notifyPlugin = (notifyPlugin_notifyPlugin);
// CONCATENATED MODULE: ./src/lib/chengziUI/index.js




























var chengziUI = {
  install: function install(Vue) {
    Vue.component('cz-icon', icon);
    Vue.component('cz-button', button_button);
    Vue.component('cz-button-group', button_group);
    Vue.component('cz-input', input);
    Vue.component('cz-row', row);
    Vue.component('cz-col', col);
    Vue.component('cz-popover', popover);
    Vue.component('cz-container', container);
    Vue.component('cz-body', body);
    Vue.component('cz-header', header);
    Vue.component('cz-sider', sider);
    Vue.component('cz-footer', footer);
    Vue.component('cz-tabs', tabs);
    Vue.component('cz-tab-body', tab_body);
    Vue.component('cz-tab-pane', tab_pane);
    Vue.component('cz-tab-head', tab_head);
    Vue.component('cz-tab-item', tab_item);
    Vue.component('cz-collapse', collapse);
    Vue.component('cz-collapse-item', collapse_item);
    Vue.component('cz-nav', nav);
    Vue.component('cz-nav-item', nav_item);
    Vue.component('cz-nav-subitem', nav_subitem);
    Vue.component('cz-counter', counter);
    Vue.prototype.$czNotify = notify_notifyPlugin(Vue);
  }
};
/* harmony default export */ var lib_chengziUI = (chengziUI);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.9.0@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib_chengziUI);



/***/ }),

/***/ "34a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a013");
var toObject = __webpack_require__("db4b");
var toLength = __webpack_require__("b146");
var toInteger = __webpack_require__("c481");
var advanceStringIndex = __webpack_require__("b0f4");
var regExpExec = __webpack_require__("35dd");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("629c")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "35dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("4819");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "3754":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "37c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_item_vue_vue_type_style_index_0_id_ef979cf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2c1b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_item_vue_vue_type_style_index_0_id_ef979cf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_item_vue_vue_type_style_index_0_id_ef979cf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_item_vue_vue_type_style_index_0_id_ef979cf4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3a59":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("1f98");
__webpack_require__("b2f5")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "3a68":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6462");
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3cc6":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("9d01")('meta');
var isObject = __webpack_require__("88dd");
var has = __webpack_require__("03b3");
var setDesc = __webpack_require__("ddf7").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("b6f1")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "448e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var setPrototypeOf = __webpack_require__("0e44").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "46e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_style_index_0_id_47d9c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("551b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_style_index_0_id_47d9c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_style_index_0_id_47d9c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_style_index_0_id_47d9c82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4713":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("03b3");
var toObject = __webpack_require__("db4b");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "47d0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4819":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("94ac");
var TAG = __webpack_require__("8b37")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "5325":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("88dd");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "539d":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("b2f5");
var defined = __webpack_require__("f01a");
var fails = __webpack_require__("b6f1");
var spaces = __webpack_require__("c9ea");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "551b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "568a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("dad2") && !__webpack_require__("b6f1")(function () {
  return Object.defineProperty(__webpack_require__("e3e0")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "5fe5":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "629c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3a59");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var fails = __webpack_require__("b6f1");
var defined = __webpack_require__("f01a");
var wks = __webpack_require__("8b37");
var regexpExec = __webpack_require__("1f98");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "6408":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "644a":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("8b37")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("743d")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "6462":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("94ac");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "648a":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "6594":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("ddf7").f;
var has = __webpack_require__("03b3");
var TAG = __webpack_require__("8b37")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "6a75":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "70d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_item_vue_vue_type_style_index_0_id_25a1f990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("16c8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_item_vue_vue_type_style_index_0_id_25a1f990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_item_vue_vue_type_style_index_0_id_25a1f990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_item_vue_vue_type_style_index_0_id_25a1f990_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a7b8");
var descriptor = __webpack_require__("7dea");
var setToStringTag = __webpack_require__("6594");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("743d")(IteratorPrototype, __webpack_require__("8b37")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "7364":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("dad2") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "743d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var createDesc = __webpack_require__("7dea");
module.exports = __webpack_require__("dad2") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "7555":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7656":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ca2b");
var $export = __webpack_require__("b2f5");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var $iterCreate = __webpack_require__("7266");
var setToStringTag = __webpack_require__("6594");
var getPrototypeOf = __webpack_require__("4713");
var ITERATOR = __webpack_require__("8b37")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "7777":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_0b044434_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7555");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_0b044434_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_0b044434_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_style_index_0_id_0b044434_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7793":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("3a68");
var gOPN = __webpack_require__("a891").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "7807":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_body_vue_vue_type_style_index_0_id_65c7a979_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("47d0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_body_vue_vue_type_style_index_0_id_65c7a979_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_body_vue_vue_type_style_index_0_id_65c7a979_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_body_vue_vue_type_style_index_0_id_65c7a979_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7b01":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var core = __webpack_require__("a4cc");
var LIBRARY = __webpack_require__("ca2b");
var wksExt = __webpack_require__("0ff6");
var defineProperty = __webpack_require__("ddf7").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "7c79":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_notify_vue_vue_type_style_index_0_id_122cc9d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("19cb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_notify_vue_vue_type_style_index_0_id_122cc9d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_notify_vue_vue_type_style_index_0_id_122cc9d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_notify_vue_vue_type_style_index_0_id_122cc9d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7dd9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7dea":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "88dd":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8b37":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("adbd")('wks');
var uid = __webpack_require__("9d01");
var Symbol = __webpack_require__("3754").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "8bb8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9168":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_subitem_vue_vue_type_style_index_0_id_138217ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7dd9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_subitem_vue_vue_type_style_index_0_id_138217ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_subitem_vue_vue_type_style_index_0_id_138217ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_subitem_vue_vue_type_style_index_0_id_138217ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "91a1":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("22e9");
var defined = __webpack_require__("f01a");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "94ac":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "984f":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("8b37")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "9aac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_63394e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("21c4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_63394e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_63394e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_style_index_0_id_63394e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9d01":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "9d8a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_style_index_0_id_1c31c2e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e084");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_style_index_0_id_1c31c2e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_style_index_0_id_1c31c2e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_style_index_0_id_1c31c2e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9dda":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_id_782a6c75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e9e8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_id_782a6c75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_id_782a6c75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_item_vue_vue_type_style_index_0_id_782a6c75_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9f58":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("3a68");
var toLength = __webpack_require__("b146");
var toAbsoluteIndex = __webpack_require__("5fe5");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "9f75":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a013":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "a424":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a4c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("3754");
var has = __webpack_require__("03b3");
var DESCRIPTORS = __webpack_require__("dad2");
var $export = __webpack_require__("b2f5");
var redefine = __webpack_require__("e5ef");
var META = __webpack_require__("3cc6").KEY;
var $fails = __webpack_require__("b6f1");
var shared = __webpack_require__("adbd");
var setToStringTag = __webpack_require__("6594");
var uid = __webpack_require__("9d01");
var wks = __webpack_require__("8b37");
var wksExt = __webpack_require__("0ff6");
var wksDefine = __webpack_require__("7b01");
var enumKeys = __webpack_require__("31bc");
var isArray = __webpack_require__("b5b8");
var anObject = __webpack_require__("a013");
var isObject = __webpack_require__("88dd");
var toObject = __webpack_require__("db4b");
var toIObject = __webpack_require__("3a68");
var toPrimitive = __webpack_require__("5325");
var createDesc = __webpack_require__("7dea");
var _create = __webpack_require__("a7b8");
var gOPNExt = __webpack_require__("7793");
var $GOPD = __webpack_require__("acb9");
var $GOPS = __webpack_require__("f7c1");
var $DP = __webpack_require__("ddf7");
var $keys = __webpack_require__("cfc7");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("a891").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("d217").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("ca2b")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("743d")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "a4cc":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a7b8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("a013");
var dPs = __webpack_require__("bf29");
var enumBugKeys = __webpack_require__("b4e0");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("e3e0")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("265a").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a891":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("fb6d");
var hiddenKeys = __webpack_require__("b4e0").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "acb9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d217");
var createDesc = __webpack_require__("7dea");
var toIObject = __webpack_require__("3a68");
var toPrimitive = __webpack_require__("5325");
var has = __webpack_require__("03b3");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("dad2") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "adbd":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a4cc");
var global = __webpack_require__("3754");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("ca2b") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "ae89":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_counter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9f75");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_counter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_counter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_counter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b0f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("2f03")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "b146":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("c481");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b2f5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var core = __webpack_require__("a4cc");
var hide = __webpack_require__("743d");
var redefine = __webpack_require__("e5ef");
var ctx = __webpack_require__("01f5");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "b3aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_vue_vue_type_style_index_0_id_8fc4c3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("448e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_vue_vue_type_style_index_0_id_8fc4c3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_vue_vue_type_style_index_0_id_8fc4c3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_collapse_vue_vue_type_style_index_0_id_8fc4c3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b4e0":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "b591":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1e3db833_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6408");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1e3db833_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1e3db833_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1e3db833_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b5b8":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("94ac");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "b6f1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "b6f5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bdad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bf29":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var anObject = __webpack_require__("a013");
var getKeys = __webpack_require__("cfc7");

module.exports = __webpack_require__("dad2") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "c481":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c5b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_5ce9d015_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fbe7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_5ce9d015_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_5ce9d015_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_5ce9d015_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c9ea":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ca2b":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "cc91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_a9328bde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("294a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_a9328bde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_a9328bde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_a9328bde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cfc7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("fb6d");
var enumBugKeys = __webpack_require__("b4e0");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "d217":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d286":
/***/ (function(module, exports) {

!function (s) {
  var c,
      i = '<svg><symbol id="i-danxuanfill" viewBox="0 0 1024 1024"><path d="M512 65.983389c-245.919634 0-446.016611 200.095256-446.016611 446.016611 0 245.952318 200.064292 446.016611 446.016611 446.016611S958.016611 757.952318 958.016611 512C958.016611 266.080366 757.952318 65.983389 512 65.983389zM512 672.00086c-88.223841 0-160.00086-71.775299-160.00086-160.00086s71.775299-159.99914 160.00086-159.99914 160.00086 71.775299 160.00086 159.99914S600.223841 672.00086 512 672.00086z"  ></path></symbol><symbol id="i-danxuan" viewBox="0 0 1024 1024"><path d="M512 65.983389c-245.919634 0-446.016611 200.095256-446.016611 446.016611 0 245.952318 200.064292 446.016611 446.016611 446.016611S958.016611 757.952318 958.016611 512C958.016611 266.080366 757.952318 65.983389 512 65.983389zM512 894.016611c-210.655557 0-382.016611-171.392017-382.016611-382.016611 0-210.655557 171.359333-382.016611 382.016611-382.016611 210.624593 0 382.016611 171.359333 382.016611 382.016611C894.016611 722.624593 722.624593 894.016611 512 894.016611z"  ></path><path d="M512 352.00086c-88.223841 0-160.00086 71.775299-160.00086 159.99914s71.775299 160.00086 160.00086 160.00086 160.00086-71.775299 160.00086-160.00086S600.223841 352.00086 512 352.00086z"  ></path></symbol><symbol id="i-xuanzhong1fill" viewBox="0 0 1024 1024"><path d="M832 96.00086l-640 0c-52.9288 0-96.00086 43.07206-96.00086 96.00086l0 640c0 52.92708 43.07206 95.99914 96.00086 95.99914l640 0c52.92708 0 95.99914-43.07206 95.99914-95.99914l0-640C928.00086 139.0712 884.9288 96.00086 832 96.00086zM727.231286 438.432254 471.00766 697.439161c-0.063647 0.063647-0.192662 0.096331-0.25631 0.192662-0.096331 0.063647-0.096331 0.192662-0.192662 0.25631-2.048757 1.983389-4.575729 3.19957-6.944443 4.544765-1.183497 0.672598-2.143368 1.696116-3.392232 2.176052-3.839484 1.536138-7.904314 2.33603-11.967424 2.33603-4.095794 0-8.224271-0.799892-12.096439-2.399677-1.279828-0.543583-2.303346-1.632469-3.519527-2.303346-2.368714-1.343475-4.832039-2.528692-6.880796-4.544765-0.063647-0.063647-0.096331-0.192662-0.159978-0.25631-0.063647-0.096331-0.192662-0.096331-0.25631-0.192662l-126.016611-129.503454c-12.320065-12.672705-12.032791-32.928047 0.639914-45.248112 12.672705-12.287381 32.895364-12.063755 45.248112 0.639914l103.26354 106.112189 233.279613-235.808305c12.416396-12.576374 32.704421-12.672705 45.248112-0.25631C739.520387 405.631501 739.647682 425.888563 727.231286 438.432254z"  ></path></symbol><symbol id="i-xuanzhong1" viewBox="0 0 1024 1024"><path d="M726.976697 393.184142c-12.54369-12.447359-32.831716-12.320065-45.248112 0.25631L448.447252 629.248757l-103.26354-106.112189c-12.352748-12.703669-32.60809-12.927295-45.248112-0.639914-12.672705 12.320065-12.959978 32.60809-0.639914 45.248112l126.016611 129.503454c0.063647 0.096331 0.192662 0.096331 0.25631 0.192662 0.063647 0.063647 0.096331 0.192662 0.159978 0.25631 2.016073 1.983389 4.512082 3.19957 6.880796 4.544765 1.247144 0.672598 2.239699 1.792447 3.519527 2.303346 3.872168 1.599785 8.000645 2.399677 12.096439 2.399677 4.06483 0 8.12794-0.799892 11.967424-2.33603 1.247144-0.512619 2.208735-1.536138 3.392232-2.176052 2.399677-1.343475 4.895686-2.528692 6.944443-4.544765 0.063647-0.063647 0.096331-0.192662 0.192662-0.25631 0.063647-0.096331 0.159978-0.127295 0.25631-0.192662l256.223626-259.008628C739.647682 425.888563 739.520387 405.631501 726.976697 393.184142z"  ></path><path d="M832 928.00086l-640 0c-52.9288 0-96.00086-43.07206-96.00086-95.99914l0-640c0-52.9288 43.07206-96.00086 96.00086-96.00086l640 0c52.92708 0 95.99914 43.07206 95.99914 96.00086l0 640C928.00086 884.9288 884.9288 928.00086 832 928.00086zM192 160.00086c-17.632039 0-32.00086 14.368821-32.00086 32.00086l0 640c0 17.664722 14.368821 31.99914 32.00086 31.99914l640 0c17.664722 0 31.99914-14.336138 31.99914-31.99914l0-640c0-17.632039-14.336138-32.00086-31.99914-32.00086L192 160.00086z"  ></path></symbol><symbol id="i-guanbi1" viewBox="0 0 1024 1024"><path d="M557.311759 513.248864l265.280473-263.904314c12.54369-12.480043 12.607338-32.704421 0.127295-45.248112-12.512727-12.576374-32.704421-12.607338-45.248112-0.127295L512.127295 467.904421 249.088241 204.063755c-12.447359-12.480043-32.704421-12.54369-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.280796l262.975407 263.775299-265.151458 263.744335c-12.54369 12.480043-12.607338 32.704421-0.127295 45.248112 6.239161 6.271845 14.463432 9.440452 22.687703 9.440452 8.160624 0 16.319527-3.103239 22.560409-9.311437l265.216826-263.807983 265.440452 266.240344c6.239161 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.311759 513.248864z"  ></path></symbol><symbol id="i-guanbi2fill" viewBox="0 0 1024 1024"><path d="M512 64c-247.00852 0-448 200.960516-448 448S264.960516 960 512 960c247.00852 0 448-200.960516 448-448S759.039484 64 512 64zM694.752211 649.984034c12.480043 12.54369 12.447359 32.768069-0.063647 45.248112-6.239161 6.208198-14.399785 9.34412-22.591372 9.34412-8.224271 0-16.415858-3.135923-22.65674-9.407768l-137.60043-138.016718-138.047682 136.576912c-6.239161 6.14455-14.368821 9.247789-22.496761 9.247789-8.255235 0-16.479505-3.168606-22.751351-9.504099-12.416396-12.576374-12.320065-32.800753 0.25631-45.248112l137.887703-136.384249-137.376804-137.824056c-12.480043-12.512727-12.447359-32.768069 0.063647-45.248112 12.512727-12.512727 32.735385-12.447359 45.248112 0.063647l137.567746 137.984034 138.047682-136.575192c12.54369-12.447359 32.831716-12.320065 45.248112 0.25631 12.447359 12.576374 12.320065 32.831716-0.25631 45.248112L557.344443 512.127295 694.752211 649.984034z"  ></path></symbol><symbol id="i-guanbi2" viewBox="0 0 1024 1024"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z"  ></path><path d="M557.05545 513.376159l138.367639-136.864185c12.576374-12.416396 12.672705-32.671738 0.25631-45.248112s-32.704421-12.672705-45.248112-0.25631l-138.560301 137.024163-136.447897-136.864185c-12.512727-12.512727-32.735385-12.576374-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112l136.255235 136.671523-137.376804 135.904314c-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112 6.271845 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789l137.567746-136.064292 138.687596 139.136568c6.240882 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.05545 513.376159z"  ></path></symbol><symbol id="i-jiahao" viewBox="0 0 1024 1024"><path d="M512 958.016611c-119.648434 0-232.1288-46.367961-316.736783-130.559656-84.640667-84.255342-131.263217-196.255772-131.263217-315.455235 0-119.168499 46.624271-231.199892 131.232254-315.424271 84.607983-84.191695 197.088348-130.559656 316.736783-130.559656s232.1288 46.367961 316.704099 130.559656c84.67163 84.224378 131.263217 196.255772 131.263217 315.391587 0.032684 119.199462-46.591587 231.232576-131.263217 315.455235C744.1288 911.615966 631.648434 958.016611 512 958.016611zM512 129.983389c-102.623626 0-199.071738 39.743475-271.583282 111.936783-72.480581 72.12794-112.416718 168.063432-112.416718 270.079828s39.903454 197.951888 112.384034 270.047144c72.511544 72.191587 168.959656 111.936783 271.583282 111.936783 102.592662 0 199.071738-39.743475 271.583282-111.936783 72.480581-72.160624 112.416718-168.063432 112.384034-270.079828 0-102.016396-39.903454-197.919204-112.384034-270.016181C711.071738 169.759548 614.592662 129.983389 512 129.983389z"  ></path><path d="M736.00086 480.00086 544.00086 480.00086 544.00086 288.00086c0-17.664722-14.336138-32.00086-32.00086-32.00086s-32.00086 14.336138-32.00086 32.00086l0 192L288.00086 480.00086c-17.664722 0-32.00086 14.336138-32.00086 32.00086s14.336138 32.00086 32.00086 32.00086l192 0 0 192c0 17.695686 14.336138 32.00086 32.00086 32.00086s32.00086-14.303454 32.00086-32.00086L544.00258 544.00086l192 0c17.695686 0 32.00086-14.336138 32.00086-32.00086S753.696546 480.00086 736.00086 480.00086z"  ></path></symbol><symbol id="i-jiahao1" viewBox="0 0 1024 1024"><path d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"  ></path></symbol><symbol id="i-jiahao2fill" viewBox="0 0 1024 1024"><path d="M828.704099 196.575729C744.096116 112.384034 631.648434 66.016073 512 66.016073s-232.1288 46.367961-316.736783 130.559656C110.624271 280.800108 64 392.831501 64 512c0 119.199462 46.624271 231.199892 131.232254 315.424271 84.607983 84.191695 197.088348 130.559656 316.736783 130.559656s232.1288-46.367961 316.704099-130.559656c84.67163-84.255342 131.295901-196.288456 131.263217-315.455235C959.967316 392.800538 913.375729 280.800108 828.704099 196.575729zM736.00086 544.00086 544.00086 544.00086l0 192c0 17.695686-14.336138 32.00086-32.00086 32.00086s-32.00086-14.303454-32.00086-32.00086L479.99914 544.00086 288.00086 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l192 0L480.00086 288.00086c0-17.664722 14.336138-32.00086 32.00086-32.00086s32.00086 14.336138 32.00086 32.00086l0 192 192 0c17.695686 0 32.00086 14.336138 32.00086 32.00086S753.696546 544.00086 736.00086 544.00086z"  ></path></symbol><symbol id="i-jianhao" viewBox="0 0 1024 1024"><path d="M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"  ></path></symbol><symbol id="i-tishifill" viewBox="0 0 1024 1024"><path d="M512 65.983389c-245.952318 0-446.016611 200.064292-446.016611 446.016611S266.047682 958.016611 512 958.016611 958.016611 757.952318 958.016611 512 757.952318 65.983389 512 65.983389zM544.00086 736.00086c0 17.695686-14.303454 32.00086-32.00086 32.00086s-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.695686 14.303454-32.00086 32.00086-32.00086 17.695686 0 32.00086 14.303454 32.00086 32.00086L544.00086 736.00086zM512 352.00086c-26.496224 0-48.00043-21.53689-48.00043-48.00043 0-26.527187 21.504206-48.00043 48.00043-48.00043s48.00043 21.471523 48.00043 48.00043C560.00043 330.46397 538.496224 352.00086 512 352.00086z"  ></path></symbol><symbol id="i-tishi" viewBox="0 0 1024 1024"><path d="M512 958.016611c-245.919634 0-446.016611-200.064292-446.016611-446.016611 0-245.919634 200.095256-446.016611 446.016611-446.016611 245.952318 0 446.016611 200.064292 446.016611 446.016611S757.952318 958.016611 512 958.016611zM512 129.983389c-210.655557 0-382.016611 171.359333-382.016611 382.016611 0 210.624593 171.359333 382.016611 382.016611 382.016611 210.624593 0 382.016611-171.359333 382.016611-382.016611S722.624593 129.983389 512 129.983389z"  ></path><path d="M463.99957 304.00043c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043-21.490445-48.00043-48.00043-48.00043S463.99957 277.490445 463.99957 304.00043z"  ></path><path d="M512 768c-17.664722 0-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.664722 14.336138-32.00086 32.00086-32.00086s32.00086 14.336138 32.00086 32.00086l0 287.99914C544.00086 753.696546 529.664722 768 512 768z"  ></path></symbol><symbol id="i-wenhaofill" viewBox="0 0 1024 1024"><path d="M512 64c-247.039484 0-448 200.960516-448 448S264.960516 960 512 960 960 759.039484 960 512 759.039484 64 512 64zM512 832.352641c-26.496224 0-48.00043-21.504206-48.00043-48.00043 0-26.496224 21.504206-48.00043 48.00043-48.00043s48.00043 21.504206 48.00043 48.00043S538.496224 832.352641 512 832.352641zM600.576482 505.184572c-27.839699 27.808735-56.575622 56.544658-56.575622 82.368284l0 54.112297c0 17.664722-14.336138 32.00086-32.00086 32.00086s-32.00086-14.336138-32.00086-32.00086l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.887273 52.67249-52.639806 52.67249-73.984034 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385C672.00086 433.791157 635.680581 470.080473 600.576482 505.184572z"  ></path></symbol><symbol id="i-wenhao" viewBox="0 0 1024 1024"><path d="M463.99957 784.352211c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957 757.842226 463.99957 784.352211z"  ></path><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z"  ></path><path d="M512 673.695256c-17.664722 0-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.919957 52.67249-52.67249 52.67249-74.016718 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385c0 47.904099-36.32028 84.191695-71.424378 119.295794-27.839699 27.776052-56.575622 56.511974-56.575622 82.3356l0 54.112297C544.00086 659.328155 529.664722 673.695256 512 673.695256z"  ></path></symbol><symbol id="i-xuanze" viewBox="0 0 1024 1024"><path d="M887.904744 298.20852c-12.863647-12.063755-33.151673-11.487488-45.215428 1.408843L415.935493 753.983819 182.815858 524.287381c-12.607338-12.416396-32.8644-12.287381-45.280796 0.319957-12.416396 12.576374-12.256417 32.8644 0.352641 45.248112l256.479935 252.671415c0.096331 0.096331 0.223626 0.127295 0.319957 0.223626s0.127295 0.223626 0.223626 0.319957c2.016073 1.919742 4.448434 3.008628 6.784464 4.288456 1.152533 0.672598 2.143368 1.663432 3.359548 2.143368 3.775837 1.47249 7.775299 2.239699 11.743798 2.239699 4.192125 0 8.384249-0.832576 12.287381-2.496009 1.312512-0.543583 2.33603-1.663432 3.552211-2.368714 2.399677-1.408843 4.895686-2.59234 6.944443-4.67206 0.096331-0.096331 0.127295-0.25631 0.223626-0.352641 0.063647-0.096331 0.192662-0.127295 0.287273-0.223626L889.277463 343.420508C901.439269 330.591265 900.768391 310.335923 887.904744 298.20852z"  ></path></symbol><symbol id="i-weixuanzhong" viewBox="0 0 1024 1024"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128z"  ></path></symbol><symbol id="i-xuanzhongfill" viewBox="0 0 1024 1024"><path d="M512 65.983389c-245.919634 0-446.016611 200.095256-446.016611 446.016611 0 245.952318 200.064292 446.016611 446.016611 446.016611S958.016611 757.952318 958.016611 512C958.016611 266.080366 757.952318 65.983389 512 65.983389zM727.231286 438.432254 471.00766 697.439161c-0.063647 0.063647-0.192662 0.096331-0.25631 0.192662-0.096331 0.063647-0.096331 0.192662-0.192662 0.25631-2.048757 1.983389-4.575729 3.19957-6.944443 4.544765-1.183497 0.672598-2.143368 1.696116-3.392232 2.176052-3.839484 1.536138-7.904314 2.33603-11.967424 2.33603-4.095794 0-8.224271-0.799892-12.096439-2.399677-1.279828-0.543583-2.303346-1.632469-3.519527-2.303346-2.368714-1.343475-4.832039-2.528692-6.880796-4.544765-0.063647-0.063647-0.096331-0.192662-0.159978-0.25631-0.063647-0.096331-0.192662-0.096331-0.25631-0.192662l-126.016611-129.503454c-12.320065-12.672705-12.032791-32.928047 0.639914-45.248112 12.672705-12.287381 32.895364-12.063755 45.248112 0.639914l103.26354 106.112189 233.279613-235.839269c12.416396-12.576374 32.704421-12.703669 45.248112-0.25631C739.520387 405.600538 739.647682 425.85588 727.231286 438.432254z"  ></path></symbol><symbol id="i-xuanzhong" viewBox="0 0 1024 1024"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z"  ></path><path d="M726.976697 393.184142c-12.54369-12.447359-32.831716-12.320065-45.248112 0.25631l-233.279613 235.839269-103.26354-106.112189c-12.352748-12.703669-32.60809-12.927295-45.248112-0.639914-12.672705 12.320065-12.959978 32.60809-0.639914 45.248112l126.016611 129.503454c0.063647 0.096331 0.192662 0.096331 0.25631 0.192662 0.063647 0.063647 0.096331 0.192662 0.159978 0.25631 2.016073 1.983389 4.512082 3.19957 6.880796 4.544765 1.247144 0.672598 2.239699 1.792447 3.519527 2.303346 3.872168 1.599785 8.000645 2.399677 12.096439 2.399677 4.06483 0 8.12794-0.799892 11.967424-2.33603 1.247144-0.512619 2.208735-1.536138 3.392232-2.176052 2.399677-1.343475 4.895686-2.528692 6.944443-4.544765 0.063647-0.063647 0.096331-0.192662 0.192662-0.25631 0.063647-0.096331 0.159978-0.127295 0.25631-0.192662l256.223626-259.008628C739.647682 425.85588 739.520387 405.600538 726.976697 393.184142z"  ></path></symbol><symbol id="i-biaoxingfill" viewBox="0 0 1024 1024"><path d="M957.258525 404.23316c-3.78431-11.352931-13.589115-19.609609-25.458088-21.501764l-270.406182-41.799429L540.640349 82.394759c-5.332437-11.180917-16.513355-18.40551-28.898371-18.40551 0 0 0 0 0 0-12.385016 0-23.565933 7.052579-28.898371 18.40551l-121.78599 258.021166L90.135394 381.183269c-11.868974 1.720141-21.673778 9.976818-25.630102 21.32975s-1.032085 23.909961 7.396607 32.510667L268.342012 637.140265 221.38216 921.995632c-2.064169 12.040988 3.096254 24.25399 13.073072 31.306568 9.976818 7.052579 23.221905 7.740635 33.88678 1.892155L510.193852 822.227448l241.335797 133.826978c4.816395 2.580212 10.148833 3.956325 15.48127 3.956325 0.172014 0 0.516042 0 0.688056 0 17.717453 0 31.994625-14.277171 31.994625-31.994625 0-3.956325-0.688056-7.740635-2.064169-11.352931l-44.895683-278.662859 196.956157-201.256509C958.118596 428.143121 961.042836 415.586091 957.258525 404.23316z"  ></path></symbol><symbol id="i-biaoxing" viewBox="0 0 1024 1024"><path d="M767.010919 959.838737c-5.332437 0-10.664875-1.376113-15.48127-3.956325l-241.335797-133.826978-241.851839 132.966907c-10.664875 5.84848-23.909961 5.160423-33.88678-1.892155-9.976818-7.052579-15.137242-19.26558-13.073072-31.306568L268.342012 637.140265 71.901898 435.023686c-8.256677-8.428691-11.180917-20.985721-7.396607-32.166639 3.612296-11.352931 13.245087-19.609609 24.942046-21.673778l154.984714-26.662187c17.545439-2.92424 34.058794 8.77272 36.983034 26.146145s-8.77272 33.88678-26.146145 36.983034l-95.123803 16.341341 165.30556 170.121955c7.052579 7.224593 10.320847 17.545439 8.600706 27.522258l-38.875189 235.659331 199.536368-109.745003c9.63279-5.332437 21.32975-5.332437 30.96254 0l199.19234 110.433059-38.015118-235.831346c-1.548127-9.976818 1.548127-20.297665 8.77272-27.522258l164.617504-168.2298L634.732068 401.652948c-10.492861-1.548127-19.609609-8.428691-24.081975-18.061482L511.397951 171.15404l-100.112212 211.74937c-7.568621 15.997312-26.662187 22.877877-42.659499 15.309256-15.997312-7.568621-22.877877-26.662187-15.309256-42.659499l129.182597-273.502436c5.332437-11.180917 16.513355-18.40551 28.898371-18.40551 0 0 0 0 0 0 12.385016 0 23.737947 7.224593 28.898371 18.40551l120.753906 258.537208 270.406182 41.799429c11.868974 1.892155 21.673778 10.148833 25.458088 21.501764 3.78431 11.352931 0.860071 23.909961-7.568621 32.510667l-196.956157 201.256509 45.927768 284.855367c1.892155 12.040988-3.268268 24.25399-13.245087 31.306568C779.911977 957.946582 773.547455 959.838737 767.010919 959.838737z"  ></path></symbol><symbol id="i-chexiao" viewBox="0 0 1024 1024"><path d="M570.015428 96.00086l-6.208198 0c-157.215858 0-275.80809 112.480366-275.80809 261.631931l0 122.368069 0 64 0 242.720065-104.959656-106.112189c-12.416396-12.576374-32.671738-12.672705-45.248112-0.25631-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112l158.495686 160.25545c6.239161 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789 0.032684-0.032684 0.032684-0.063647 0.063647-0.096331 0.032684-0.032684 0.063647-0.032684 0.096331-0.063647l159.359226-158.911974c12.512727-12.480043 12.54369-32.735385 0.063647-45.248112-12.480043-12.576374-32.735385-12.512727-45.248112-0.063647l-103.616181 103.296224L351.99742 544.00086l0-64 0-122.368069c0-112.671308 91.07249-197.631931 211.80809-197.631931l6.208198 0c116.576159 0 197.984572 81.279398 197.984572 197.631931l0 506.368069c0 17.695686 14.303454 32.00086 32.00086 32.00086s32.00086-14.303454 32.00086-32.00086L832 357.632791C832 206.016181 721.824701 96.00086 570.015428 96.00086z"  ></path></symbol><symbol id="i-dingdan" viewBox="0 0 1024 1024"><path d="M800.037628 928.016126 223.962372 928.016126c-52.980346 0-95.983874-43.003528-95.983874-95.983874l0-639.892491c0-52.980346 43.003528-95.983874 95.983874-95.983874l575.903242 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 639.892491C896.021502 884.840585 852.84596 928.016126 800.037628 928.016126zM223.962372 159.973123c-17.545439 0-31.994625 14.449185-31.994625 31.994625l0 639.892491c0 17.717453 14.449185 31.994625 31.994625 31.994625l575.903242 0c17.717453 0 31.994625-14.277171 31.994625-31.994625l0-639.892491c0-17.545439-14.277171-31.994625-31.994625-31.994625L223.962372 159.973123z"  ></path><path d="M640.924576 544.768688 287.779607 544.768688c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l353.144969 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C672.9192 530.491517 658.642029 544.768688 640.924576 544.768688z"  ></path><path d="M734.84428 735.532337l-447.236687 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l447.236687 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S752.561734 735.532337 734.84428 735.532337z"  ></path><path d="M255.784982 305.325046c0 26.490173 21.501764 47.991937 47.991937 47.991937s47.991937-21.501764 47.991937-47.991937-21.501764-47.991937-47.991937-47.991937S255.784982 278.834873 255.784982 305.325046z"  ></path><path d="M463.061986 305.325046c0 26.490173 21.501764 47.991937 47.991937 47.991937s47.991937-21.501764 47.991937-47.991937-21.501764-47.991937-47.991937-47.991937S463.061986 278.834873 463.061986 305.325046z"  ></path><path d="M671.199059 305.325046c0 26.490173 21.501764 47.991937 47.991937 47.991937s47.991937-21.501764 47.991937-47.991937-21.501764-47.991937-47.991937-47.991937S671.199059 278.834873 671.199059 305.325046z"  ></path></symbol><symbol id="i-fankui" viewBox="0 0 1024 1024"><path d="M800.037628 960.010751 223.962372 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874l0-639.892491c0-52.980346 43.003528-95.983874 95.983874-95.983874l447.924744 0c17.717453 0 31.994625 14.277171 31.994625 31.994625s-14.277171 31.994625-31.994625 31.994625L223.962372 192.139761c-17.545439 0-31.994625 14.449185-31.994625 31.994625l0 639.892491c0 17.717453 14.449185 31.994625 31.994625 31.994625l575.903242 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L831.860239 351.94087c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 511.913993C896.021502 916.835209 852.84596 960.010751 800.037628 960.010751z"  ></path><path d="M612.026205 447.924744c-8.256677 0-16.341341-3.096254-22.705863-9.460776-12.55703-12.55703-12.55703-32.682681 0-45.239711L907.374433 75.34218c12.55703-12.55703 32.682681-12.55703 45.239711 0s12.55703 32.682681 0 45.239711L634.560054 438.635982C628.367546 444.82849 620.110868 447.924744 612.026205 447.924744z"  ></path><path d="M479.919368 447.924744 287.951621 447.924744c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625L479.919368 383.935495c17.717453 0 31.994625 14.277171 31.994625 31.994625C511.913993 433.647573 497.636822 447.924744 479.919368 447.924744z"  ></path><path d="M672.05913 639.892491 287.951621 639.892491c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l383.935495 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S689.604569 639.892491 672.05913 639.892491z"  ></path></symbol><symbol id="i-fenxiang" viewBox="0 0 1024 1024"><path d="M768.73106 703.537712c-35.606921 0-67.945574 14.793214-91.167479 38.359147l-309.109357-171.670082c9.116748-17.545439 14.621199-37.155048 14.621199-58.312783 0-12.55703-2.408198-24.426004-5.676466-35.950949l304.63699-189.215522c22.705863 20.469679 52.464304 33.198723 85.146985 33.198723 70.525785 0 127.978498-57.452713 127.978498-127.978498S837.708718 63.989249 767.182933 63.989249s-127.978498 57.452713-127.978498 127.978498c0 14.621199 2.92424 28.382328 7.396607 41.455401L344.716278 420.746514c-23.049891-22.705863-54.700487-36.983034-89.791366-36.983034-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498c25.630102 0 49.540064-7.740635 69.493701-20.813707l321.150344 178.378633c-3.096254 11.008903-5.160423 22.18982-5.160423 34.058794 0 70.525785 57.452713 127.978498 127.978498 127.978498s127.978498-57.452713 127.978498-127.978498S839.256845 703.537712 768.73106 703.537712zM767.182933 127.978498c35.262893 0 63.989249 28.726356 63.989249 63.989249s-28.726356 63.989249-63.989249 63.989249-63.989249-28.726356-63.989249-63.989249S731.92004 127.978498 767.182933 127.978498zM191.107677 511.913993c0-35.262893 28.726356-63.989249 63.989249-63.989249s63.989249 28.726356 63.989249 63.989249-28.726356 63.989249-63.989249 63.989249S191.107677 547.176886 191.107677 511.913993zM768.73106 895.505459c-35.262893 0-63.989249-28.726356-63.989249-63.989249s28.726356-63.989249 63.989249-63.989249 63.989249 28.726356 63.989249 63.989249C832.720309 866.951117 803.993953 895.505459 768.73106 895.505459z"  ></path></symbol><symbol id="i-gengduo" viewBox="0 0 1024 1024"><path d="M223.962372 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S276.942718 607.897867 223.962372 607.897867z"  ></path><path d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867z"  ></path><path d="M800.037628 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S852.84596 607.897867 800.037628 607.897867z"  ></path></symbol><symbol id="i-gonglve" viewBox="0 0 1024 1024"><path d="M447.924744 928.016126c-1.204099 0-2.408198-0.172014-3.440282-0.172014L157.908953 896.021502c-51.948261-1.032085-93.919704-43.691584-93.919704-95.983874L63.989249 191.967747c0-52.980346 43.175542-95.983874 95.983874-95.983874 1.204099 0 2.408198 0.172014 3.440282 0.172014l286.575508 31.82261c51.948261 1.032085 93.919704 43.691584 93.919704 95.983874l0 607.897867C543.908618 884.840585 500.90509 928.016126 447.924744 928.016126zM158.424996 159.973123c-17.029397 0.860071-30.446498 14.793214-30.446498 31.994625l0 607.897867c0 17.717453 14.449185 31.994625 31.994625 31.994625 1.204099 0 2.408198 0.172014 3.440282 0.172014l286.059466 31.82261c17.029397-0.860071 30.446498-14.793214 30.446498-31.994625L479.919368 223.962372c0-17.545439-14.449185-31.994625-31.994625-31.994625-1.204099 0-2.408198-0.172014-3.440282-0.172014L158.424996 159.973123z"  ></path><path d="M609.101965 924.231816c-16.169326 0-29.930455-12.040988-31.82261-28.554342-2.064169-17.545439 10.664875-33.370737 28.382328-35.262893l254.752898-28.382328c1.204099-0.172014 2.236183-0.172014 3.440282-0.172014 17.717453 0 31.994625-14.277171 31.994625-31.994625L895.849488 191.967747c0-17.201411-13.589115-31.134554-30.446498-31.994625l-253.032757 28.0383c-17.201411 2.064169-33.370737-10.664875-35.262893-28.382328-2.064169-17.545439 10.664875-33.370737 28.382328-35.262893l255.096926-28.382328c1.032085-0.172014 2.236183-0.172014 3.440282-0.172014 52.980346 0 95.983874 43.175542 95.983874 95.983874L960.010751 799.865614c0 52.29229-41.971443 94.951789-93.919704 95.983874l-253.204771 28.210314C611.510163 924.231816 610.306064 924.231816 609.101965 924.231816z"  ></path><path d="M408.01747 357.961364l-208.137074 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C440.012095 343.512179 425.734924 357.961364 408.01747 357.961364z"  ></path><path d="M407.845456 542.532505 199.536368 542.532505c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C439.840081 528.255333 425.562909 542.532505 407.845456 542.532505z"  ></path><path d="M408.01747 726.415589l-208.137074 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C440.012095 712.138418 425.734924 726.415589 408.01747 726.415589z"  ></path><path d="M823.947589 358.821435 615.810516 358.821435c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C855.942214 344.544263 841.665043 358.821435 823.947589 358.821435z"  ></path><path d="M823.947589 543.564589l-208.137074 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C855.942214 529.115404 841.493029 543.564589 823.947589 543.564589z"  ></path><path d="M823.947589 727.447673 615.810516 727.447673c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S841.665043 727.447673 823.947589 727.447673z"  ></path></symbol><symbol id="i-liuyanfill" viewBox="0 0 1024 1024"><path d="M832.032253 127.978498l-639.892491 0c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 511.913993c0 52.980346 43.003528 95.983874 95.983874 95.983874l210.717285 0 86.695112 86.695112c6.192508 6.192508 14.449185 9.460776 22.705863 9.460776s16.341341-3.096254 22.705863-9.460776l86.695112-86.695112 210.717285 0c52.980346 0 95.983874-43.003528 95.983874-95.983874L928.360155 223.962372C928.016126 170.982026 884.840585 127.978498 832.032253 127.978498zM335.943558 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937 47.991937 21.501764 47.991937 47.991937S362.433731 511.913993 335.943558 511.913993zM527.911305 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937 47.991937 21.501764 47.991937 47.991937S554.401478 511.913993 527.911305 511.913993zM720.051067 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937c26.490173 0 47.991937 21.501764 47.991937 47.991937S746.369226 511.913993 720.051067 511.913993z"  ></path></symbol><symbol id="i-liuyan" viewBox="0 0 1024 1024"><path d="M511.913993 928.016126c-8.256677 0-16.341341-3.096254-22.705863-9.460776l-95.983874-95.983874c-12.55703-12.55703-12.55703-32.682681 0-45.239711s32.682681-12.55703 45.239711 0l73.450025 73.450025 73.450025-73.450025c6.020494-6.020494 14.105157-9.460776 22.705863-9.460776l223.962372 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L864.026877 223.962372c0-17.545439-14.277171-31.994625-31.994625-31.994625l-639.892491 0c-17.545439 0-31.994625 14.449185-31.994625 31.994625l0 511.913993c0 17.717453 14.449185 31.994625 31.994625 31.994625l95.983874 0c17.717453 0 31.994625 14.277171 31.994625 31.994625s-14.277171 31.994625-31.994625 31.994625l-95.983874 0c-52.980346 0-95.983874-43.003528-95.983874-95.983874L96.155888 223.962372c0-52.980346 43.003528-95.983874 95.983874-95.983874l639.892491 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 511.913993c0 52.980346-43.003528 95.983874-95.983874 95.983874L621.142953 831.860239 534.619856 918.55535C528.427348 924.747858 520.17067 928.016126 511.913993 928.016126z"  ></path><path d="M335.943558 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937 47.991937 21.501764 47.991937 47.991937S362.433731 511.913993 335.943558 511.913993z"  ></path><path d="M527.911305 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937 47.991937 21.501764 47.991937 47.991937S554.401478 511.913993 527.911305 511.913993z"  ></path><path d="M720.051067 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937c26.490173 0 47.991937 21.501764 47.991937 47.991937S746.369226 511.913993 720.051067 511.913993z"  ></path></symbol><symbol id="i-pengyoufill" viewBox="0 0 1024 1024"><path d="M518.966571 653.825634l0-6.70855c89.791366-64.161263 89.447337-175.282379 89.275323-265.589787l0-13.589115c0-130.730724-78.782463-208.653116-210.717285-208.653116l-6.70855 0c-126.602385 0-196.2681 74.138082-196.2681 208.653116 0 67.945574 0 205.728876 103.552495 279.178901l0 5.332437c-120.065849 17.029397-232.735092 66.225433-232.735092 144.663867 0 109.056946 107.680833 162.037292 329.062993 162.037292 283.30724 0 342.824122-88.071225 342.824122-162.037292C737.252478 713.170502 598.437091 669.13489 518.966571 653.825634z"  ></path><path d="M929.564253 767.698975c-17.545439 0-31.82261-14.277171-31.994625-31.82261-0.344028-23.393919-101.660339-88.415253-197.300185-99.768184-16.169326-1.892155-28.210314-15.653284-28.210314-31.82261l0-66.225433c0-9.804804 4.472367-18.921552 12.040988-24.942046 54.012431-43.175542 94.951789-137.26726 94.951789-218.801949 0-109.917017-74.310096-132.966907-136.579204-132.966907-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625c123.678145 0 200.568453 75.514195 200.568453 197.128171 0 94.779775-44.207626 200.396439-106.992777 258.365194l0 24.598018c91.855535 19.609609 225.682513 83.942886 225.682513 158.59701 0 17.545439-14.277171 31.650596-31.82261 31.82261C929.736267 767.698975 929.736267 767.698975 929.564253 767.698975z"  ></path></symbol><symbol id="i-pengyou" viewBox="0 0 1024 1024"><path d="M401.30892 960.182765c-226.542584 0-336.631614-52.980346-336.631614-162.209306 0-76.718293 114.389384-127.118428 229.982866-144.663867l0-6.536536c-86.351083-66.053418-97.876029-184.055098-97.876029-281.071057 0-132.106837 77.750378-211.061314 208.137074-211.061314l6.880564 0c130.386696 0 208.137074 78.954477 208.137074 211.061314 0 97.015958-11.524945 214.845624-97.876029 281.071057l0 6.536536c115.593482 17.545439 229.982866 67.77356 229.982866 144.663867C752.045691 872.11154 691.152696 960.182765 401.30892 960.182765zM404.921216 218.801949c-95.639845 0-144.147825 49.540064-144.147825 147.072065 0 91.339493 9.804804 190.763649 83.082815 237.379473 9.288762 5.84848 14.793214 15.997312 14.793214 27.006215l0 51.260205c0 16.341341-12.385016 30.102469-28.554342 31.82261-121.097934 12.729044-201.428523 59.344868-201.428523 84.630942 0 65.193348 91.683521 98.220057 272.642365 98.220057 182.162943 0 286.747522-35.778935 286.747522-98.220057 0-25.286074-80.33059-71.901898-201.428523-84.630942-16.341341-1.720141-28.554342-15.48127-28.554342-31.82261l0-51.260205c0-11.008903 5.676466-21.157736 14.793214-27.006215 73.105997-46.615824 83.082815-146.211994 83.082815-237.379473 0-97.532001-48.507979-147.072065-144.147825-147.072065L404.921216 218.801949 404.921216 218.801949z"  ></path><path d="M899.117756 763.742651c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-24.426004-91.167479-83.942886-196.956157-95.123803-16.341341-1.720141-28.726356-15.48127-28.726356-31.82261L641.440618 538.404166c0-11.008903 5.676466-21.157736 14.793214-27.006215 82.738787-52.636318 91.683521-169.777927 91.683521-217.769864 0-110.433059-74.654124-133.654964-137.26726-133.654964-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625c124.194188 0 201.256509 75.686209 201.256509 197.644213 0 55.732572-10.664875 188.699479-106.476734 261.289434l0 22.18982c102.176382 18.577524 225.682513 79.986561 225.682513 154.640685C931.284394 749.46548 916.835209 763.742651 899.117756 763.742651z"  ></path></symbol><symbol id="i-qingchu" viewBox="0 0 1024 1024"><path d="M452.225097 146.90005l-340.587939 340.587939c-13.073072 13.073072-34.058794 13.073072-47.131866 0-13.073072-13.073072-12.901058-34.058794 0-47.131866l340.587939-340.587939c13.073072-13.073072 34.058794-13.073072 47.131866 0C465.298169 112.841257 465.298169 133.826978 452.225097 146.90005L452.225097 146.90005z"  ></path><path d="M924.231816 618.734756l-340.587939 340.587939c-13.073072 13.073072-34.058794 13.073072-47.131866 0-13.073072-13.073072-12.901058-34.058794 0-47.131866l340.587939-340.587939c13.073072-13.073072 34.058794-13.073072 47.131866 0C937.304888 584.675962 937.132874 605.833697 924.231816 618.734756L924.231816 618.734756z"  ></path><path d="M451.193012 620.798925l-103.036452 103.036452c-13.073072 13.073072-34.058794 13.073072-47.131866 0-13.073072-13.073072-12.901058-34.058794 0-47.131866l103.036452-103.036452c13.073072-13.073072 34.058794-13.073072 47.131866 0C464.266084 586.740131 464.266084 607.897867 451.193012 620.798925L451.193012 620.798925z"  ></path><path d="M298.444482 524.987065l-74.654124 74.654124c-13.073072 13.073072-34.058794 13.073072-47.131866 0-13.073072-13.073072-12.901058-34.058794 0-47.131866l74.654124-74.654124c13.073072-13.073072 34.058794-13.073072 47.131866 0C311.34554 490.928271 311.34554 512.086007 298.444482 524.987065L298.444482 524.987065z"  ></path><path d="M545.28473 771.999328l-74.654124 74.654124c-13.073072 13.073072-34.058794 13.073072-47.131866 0-13.073072-13.073072-12.901058-34.058794 0-47.131866l74.654124-74.654124c13.073072-13.073072 34.058794-13.073072 47.131866 0C558.357803 737.940534 558.357803 758.926256 545.28473 771.999328L545.28473 771.999328z"  ></path><path d="M536.339997 959.322694 64.505291 487.660003c-13.073072-13.073072-13.073072-34.058794 0-47.131866 13.073072-13.073072 34.058794-12.901058 47.131866 0l471.834705 471.834705c13.073072 13.073072 13.073072 34.058794 0 47.131866C570.398791 972.395767 549.413069 972.395767 536.339997 959.322694L536.339997 959.322694z"  ></path><path d="M732.264069 763.570637 260.429363 291.735931c-13.073072-13.073072-13.073072-34.058794 0-47.131866 13.073072-13.073072 34.058794-12.901058 47.131866 0L779.223921 716.43877c13.073072 13.073072 13.073072 34.058794 0 47.131866C766.322862 776.643709 745.165127 776.471695 732.264069 763.570637L732.264069 763.570637z"  ></path><path d="M912.362842 219.490005l-107.680833-107.852847c-13.073072-13.073072-13.073072-34.058794 0-47.131866 13.073072-13.073072 34.058794-12.901058 47.131866 0l107.680833 107.852847c13.073072 13.073072 13.073072 34.058794 0 47.131866C946.421636 232.563077 925.263901 232.563077 912.362842 219.490005L912.362842 219.490005z"  ></path><path d="M587.256173 328.718965 405.437259 146.90005c-13.073072-13.073072-13.073072-34.058794 0-47.131866 13.073072-13.073072 34.058794-12.901058 47.131866 0l181.990929 181.990929c13.073072 13.073072 13.073072 34.058794 0 47.131866C621.486981 341.792038 600.329246 341.792038 587.256173 328.718965L587.256173 328.718965z"  ></path><path d="M877.09995 618.562741 695.281035 436.743827c-13.073072-13.073072-13.073072-34.058794 0-47.131866 13.073072-13.073072 34.058794-12.901058 47.131866 0l181.990929 181.990929c13.073072 13.073072 13.073072 34.058794 0 47.131866C911.330758 631.635814 890.173022 631.635814 877.09995 618.562741L877.09995 618.562741z"  ></path><path d="M959.322694 219.490005 742.240887 436.571813c-13.073072 13.073072-34.058794 13.073072-47.131866 0-13.073072-13.073072-12.901058-34.058794 0-47.131866l217.081807-217.081807c13.073072-13.073072 34.058794-13.073072 47.131866 0C972.395767 185.259197 972.395767 206.416933 959.322694 219.490005L959.322694 219.490005z"  ></path><path d="M851.641861 111.637158 634.38804 328.718965c-13.073072 13.073072-34.058794 13.073072-47.131866 0-13.073072-13.073072-12.901058-34.058794 0-47.131866L804.509995 64.505291c13.073072-13.073072 34.058794-13.073072 47.131866 0C864.714934 77.578364 864.54292 98.564085 851.641861 111.637158L851.641861 111.637158z"  ></path></symbol><symbol id="i-saoma" viewBox="0 0 1024 1024"><path d="M928.016126 543.908618 95.983874 543.908618c-17.717453 0-31.994625-14.277171-31.994625-31.994625S78.26642 479.919368 95.983874 479.919368l832.032253 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S945.73358 543.908618 928.016126 543.908618z"  ></path><path d="M832.032253 928.016126 639.892491 928.016126c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l191.967747 0c17.717453 0 31.994625-14.277171 31.994625-31.994625l0-159.973123c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 159.973123C928.016126 884.840585 884.840585 928.016126 832.032253 928.016126z"  ></path><path d="M351.94087 928.016126l-159.973123 0c-52.980346 0-95.983874-43.003528-95.983874-95.983874l0-159.973123c0-17.717453 14.277171-31.994625 31.994625-31.994625S159.973123 654.341676 159.973123 672.05913l0 159.973123c0 17.717453 14.449185 31.994625 31.994625 31.994625l159.973123 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C383.935495 913.738955 369.658324 928.016126 351.94087 928.016126z"  ></path><path d="M127.978498 383.935495c-17.717453 0-31.994625-14.277171-31.994625-31.994625l0-159.973123c0-52.980346 43.003528-95.983874 95.983874-95.983874l159.973123 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S369.658324 159.973123 351.94087 159.973123l-159.973123 0c-17.545439 0-31.994625 14.449185-31.994625 31.994625l0 159.973123C159.973123 369.658324 145.695952 383.935495 127.978498 383.935495z"  ></path><path d="M896.021502 383.935495c-17.717453 0-31.994625-14.277171-31.994625-31.994625l0-159.973123c0-17.545439-14.277171-31.994625-31.994625-31.994625L639.892491 159.973123c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l191.967747 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 159.973123C928.016126 369.658324 913.738955 383.935495 896.021502 383.935495z"  ></path></symbol><symbol id="i-shanchu" viewBox="0 0 1024 1024"><path d="M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z"  ></path><path d="M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z"  ></path><path d="M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z"  ></path><path d="M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867zM511.913993 479.919368c-17.545439 0-31.994625 14.449185-31.994625 31.994625s14.449185 31.994625 31.994625 31.994625 31.994625-14.449185 31.994625-31.994625S529.631446 479.919368 511.913993 479.919368z"  ></path><path d="M630.947757 960.010751c-9.976818 0-19.781623-4.816395-25.802117-13.073072L531.695616 846.309424c-13.589115 0.860071-25.974131 0.860071-39.563245 0l-73.450025 100.456241c-7.912649 10.836889-21.673778 15.653284-34.574836 11.868974-34.574836-9.804804-67.429531-23.393919-97.704015-40.251302-11.69696-6.536536-18.061482-19.609609-15.997312-32.854695l19.26558-123.334117c-9.804804-8.77272-19.093566-18.061482-27.866286-27.866286l-123.334117 19.26558c-13.073072 2.064169-26.318159-4.300353-32.854695-15.997312-16.857383-30.446498-30.446498-63.301193-40.251302-97.876029-3.612296-12.901058 1.032085-26.662187 11.868974-34.574836l100.456241-73.450025c-0.516042-6.880564-0.688056-13.417101-0.688056-19.781623s0.172014-12.901058 0.688056-19.781623l-100.456241-73.450025c-10.836889-7.912649-15.653284-21.673778-11.868974-34.574836 9.804804-34.574836 23.393919-67.429531 40.251302-97.704015 6.536536-11.69696 19.781623-18.061482 32.854695-15.997312l123.334117 19.26558c8.77272-9.804804 18.061482-19.093566 27.866286-27.866286l-19.26558-123.334117c-2.064169-13.245087 4.300353-26.318159 16.169326-32.854695 30.446498-16.857383 63.301193-30.446498 97.704015-40.251302 12.901058-3.612296 26.662187 1.032085 34.574836 11.868974l73.450025 100.456241c13.589115-0.860071 25.802117-0.860071 39.563245 0l73.450025-100.456241c7.912649-10.836889 21.673778-15.48127 34.574836-11.868974 34.402822 9.804804 67.257517 23.393919 97.704015 40.251302 11.69696 6.536536 18.061482 19.609609 15.997312 32.854695l-19.26558 123.334117c9.804804 8.77272 19.093566 18.061482 27.866286 27.694272l123.334117-19.26558c13.073072-2.064169 26.318159 4.300353 32.854695 15.997312 16.857383 30.446498 30.446498 63.301193 40.423316 97.876029 3.612296 12.901058-1.032085 26.662187-11.868974 34.574836L846.309424 492.13237c0.516042 6.880564 0.688056 13.417101 0.688056 19.781623 0 6.364522-0.172014 12.901058-0.688056 19.781623l100.456241 73.450025c10.836889 7.912649 15.48127 21.673778 11.868974 34.574836-9.804804 34.574836-23.393919 67.429531-40.423316 97.876029-6.536536 11.69696-19.437594 18.061482-32.854695 15.997312L762.194524 734.500252c-8.600706 9.804804-18.061482 19.093566-27.866286 27.694272l19.26558 123.334117c2.064169 13.245087-4.300353 26.318159-15.997312 32.854695-30.274483 16.857383-63.129179 30.446498-97.704015 40.251302C636.968251 959.494709 634.044011 960.010751 630.947757 960.010751zM337.147657 872.627583c13.933143 6.70855 28.554342 12.729044 43.51957 17.889467l70.525785-96.499916c6.70855-9.288762 18.061482-14.277171 29.414413-12.901058 20.641693 2.408198 42.143457 2.408198 62.613136 0 11.868974-1.376113 22.705863 3.612296 29.414413 12.901058l70.525785 96.499916c14.965228-5.160423 29.586427-11.180917 43.51957-17.889467l-18.40551-118.345708c-1.720141-11.352931 2.752226-22.877877 11.69696-29.930455 16.341341-13.073072 31.306568-27.866286 44.207626-44.207626 7.224593-8.944734 18.40551-13.589115 29.930455-11.69696l118.345708 18.40551c6.70855-13.933143 12.729044-28.554342 17.889467-43.51957l-96.499916-70.525785c-9.288762-6.70855-14.277171-18.061482-12.901058-29.414413 1.204099-10.320847 1.892155-20.641693 1.892155-31.306568s-0.688056-20.985721-1.892155-31.306568c-1.376113-11.352931 3.612296-22.705863 12.901058-29.414413l96.499916-70.525785c-5.160423-14.965228-11.180917-29.586427-17.889467-43.51957l-118.345708 18.40551c-11.352931 1.720141-22.877877-2.752226-29.930455-11.69696-12.901058-16.169326-27.694272-31.134554-44.207626-44.207626-8.944734-7.224593-13.417101-18.577524-11.69696-29.930455L686.852343 151.372417c-13.933143-6.70855-28.554342-12.729044-43.51957-17.889467l-70.525785 96.499916c-6.70855 9.288762-17.717453 14.449185-29.414413 12.901058-20.469679-2.408198-41.971443-2.408198-62.613136 0-11.524945 1.376113-22.705863-3.612296-29.586427-12.901058l-70.525785-96.499916c-14.965228 5.160423-29.586427 11.180917-43.51957 17.889467l18.40551 118.345708c1.720141 11.352931-2.752226 22.877877-11.69696 29.930455-16.341341 12.901058-31.134554 27.866286-44.207626 44.207626-7.224593 8.944734-18.577524 13.417101-29.930455 11.69696L151.372417 337.147657c-6.70855 13.933143-12.729044 28.554342-17.889467 43.51957l96.499916 70.525785c9.288762 6.70855 14.277171 18.061482 12.901058 29.586427-1.204099 10.148833-1.892155 20.641693-1.892155 31.134554 0 10.664875 0.688056 20.985721 1.892155 31.306568 1.376113 11.524945-3.612296 22.705863-12.901058 29.586427l-96.499916 70.525785c5.160423 14.965228 11.180917 29.586427 17.889467 43.51957l118.345708-18.40551c11.352931-1.720141 22.877877 2.752226 29.930455 11.69696 12.901058 16.341341 27.694272 31.134554 44.207626 44.207626 8.944734 7.224593 13.589115 18.577524 11.69696 29.930455L337.147657 872.627583z"  ></path></symbol><symbol id="i-shenfen" viewBox="0 0 1024 1024"><path d="M209.513187 890.861078c-62.613136 0-113.529313-50.916177-113.529313-113.529313L95.983874 278.834873c0-62.613136 50.916177-113.529313 113.529313-113.529313L832.548295 165.30556c62.613136 0 113.529313 50.916177 113.529313 113.529313l0 498.496892c0 62.613136-50.916177 113.529313-113.529313 113.529313L209.513187 890.861078zM209.513187 226.198555c-28.898371 0-52.636318 23.565933-52.636318 52.636318l0 498.496892c0 28.898371 23.565933 52.636318 52.636318 52.636318L832.548295 829.968083c28.898371 0 52.636318-23.565933 52.636318-52.636318L885.184613 278.834873c0-28.898371-23.565933-52.636318-52.636318-52.636318L209.513187 226.198555zM791.092894 703.88174c-16.857383 0-30.446498-13.761129-30.446498-30.446498 0-51.948261-42.143457-94.091718-94.091718-94.091718s-94.091718 42.143457-94.091718 94.091718c0 16.857383-13.761129 30.446498-30.446498 30.446498-16.857383 0-30.446498-13.761129-30.446498-30.446498 0-53.15236 27.350244-102.176382 72.417941-130.55871-19.781623-20.985721-30.790526-48.507979-30.790526-77.234336 0-62.613136 50.916177-113.529313 113.529313-113.529313s113.529313 50.916177 113.529313 113.529313c0 28.726356-11.180917 56.0766-30.790526 77.234336 44.895683 28.382328 72.417941 77.234336 72.417941 130.55871C821.711406 690.120611 807.950277 703.88174 791.092894 703.88174zM666.554678 413.177893c-28.898371 0-52.636318 23.565933-52.636318 52.636318s23.565933 52.636318 52.636318 52.636318c29.070385 0 52.636318-23.565933 52.636318-52.636318S695.453049 413.177893 666.554678 413.177893z"  ></path><path d="M434.507643 413.86595 248.216361 413.86595c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l186.291282 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C466.502268 399.588779 452.225097 413.86595 434.507643 413.86595z"  ></path><path d="M434.507643 559.90593 248.216361 559.90593c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l186.291282 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S452.225097 559.90593 434.507643 559.90593z"  ></path><path d="M434.507643 704.397783 248.216361 704.397783c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l186.291282 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S452.225097 704.397783 434.507643 704.397783z"  ></path></symbol><symbol id="i-shizhongfill" viewBox="0 0 1024 1024"><path d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM671.199059 575.903242 480.263397 575.903242c-17.717453 0-32.166639-14.449185-32.166639-32.166639L448.096758 289.15572c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 222.930287 159.285066 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S688.916513 575.903242 671.199059 575.903242z"  ></path></symbol><symbol id="i-shizhong" viewBox="0 0 1024 1024"><path d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM511.913993 895.677474c-211.577356 0-383.763481-172.186125-383.763481-383.763481 0-211.577356 172.014111-383.763481 383.763481-383.763481s383.763481 172.014111 383.763481 383.763481S723.491349 895.677474 511.913993 895.677474z"  ></path><path d="M672.05913 511.913993l-159.973123 0L512.086007 288.123635c0-17.717453-14.277171-32.166639-31.994625-32.166639-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 255.956996c0 17.717453 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 32.166639-14.277171 32.166639-31.994625C704.053754 526.191164 689.604569 511.913993 672.05913 511.913993z"  ></path></symbol><symbol id="i-shouyefill" viewBox="0 0 1024 1024"><path d="M982.028557 404.405174 573.32303 83.942886c-34.918864-27.694272-89.619352-27.694272-124.538216 0L43.175542 404.577188c-13.933143 11.008903-16.169326 31.134554-5.332437 44.895683s31.134554 16.169326 44.895683 5.332437l13.073072-10.320847 0 387.547791c0 54.872501 56.936671 95.983874 107.852847 95.983874l639.892491 0c50.22812 0 84.1149-38.531161 84.1149-95.983874L927.672098 443.452377l14.449185 11.352931c5.84848 4.644381 12.729044 6.880564 19.781623 6.880564 9.460776 0 18.921552-4.128339 25.286074-12.213002C998.369898 435.539728 995.789686 415.414077 982.028557 404.405174zM607.897867 797.113388l0 66.741475-63.989249 0-63.989249 0-63.989249 0 0-66.741475 0-112.325214c0-37.155048 30.102469-77.234336 95.983874-77.234336 66.053418 0 95.983874 40.079288 95.983874 77.234336L607.897867 797.113388 607.897867 797.113388z"  ></path></symbol><symbol id="i-shouye" viewBox="0 0 1024 1024"><path d="M979.792374 404.577188 574.183101 83.942886c-34.918864-27.694272-89.619352-27.694272-124.538216 0L44.207626 404.577188c-13.933143 11.008903-16.169326 31.134554-5.332437 44.895683s30.618512 16.169326 44.551655 5.332437l12.55703-10.320847 0 387.547791c0 54.872501 57.968755 95.983874 108.712918 95.983874l639.892491 0c50.22812 0 83.254829-38.531161 83.254829-95.983874L927.844112 445.860575l11.69696 8.944734c5.84848 4.644381 13.073072 6.880564 20.125651 6.880564 9.460776 0 18.921552-4.128339 25.286074-12.213002C995.9617 435.711742 993.725517 415.586091 979.792374 404.577188zM479.919368 864.026877 479.919368 686.508315c0-8.77272 15.997312-13.245087 31.994625-13.245087s31.994625 4.472367 31.994625 13.245087l0 177.346548L479.919368 864.026877 479.919368 864.026877zM864.026877 832.032253c0 21.157736-5.84848 31.994625-19.26558 31.994625L608.585923 864.026877c0-0.516042-0.688056-0.860071-0.688056-1.376113L607.897867 686.508315c0-37.155048-29.930455-77.234336-95.983874-77.234336s-95.983874 40.079288-95.983874 77.234336l0 176.142449c0 0.516042 0.860071 0.860071 0.860071 1.376113L204.868806 864.026877c-20.125651 0-44.723669-17.373425-44.723669-31.994625L160.145137 393.740299 488.864102 134.171006c11.868974-9.288762 33.198723-9.288762 44.895683 0l330.095078 261.11742L863.854863 832.032253z"  ></path></symbol><symbol id="i-sousuo" viewBox="0 0 1024 1024"><path d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z"  ></path></symbol><symbol id="i-sousuoleimufill" viewBox="0 0 1024 1024"><path d="M288.467663 288.811692 83.082815 288.811692c-18.921552 0-34.230808-15.309256-34.230808-34.058794s15.309256-34.058794 34.230808-34.058794l205.212834 0c18.921552 0 34.230808 15.309256 34.230808 34.058794S307.217201 288.811692 288.467663 288.811692L288.467663 288.811692zM280.038972 625.959348 83.082815 625.959348c-18.921552 0-34.230808-15.309256-34.230808-34.058794 0-18.749538 15.309256-34.058794 34.230808-34.058794l196.956157 0c18.921552 0 34.230808 15.309256 34.230808 34.058794C314.26978 610.650092 298.960524 625.959348 280.038972 625.959348L280.038972 625.959348zM239.615656 457.041492l-156.532841 0c-18.921552 0-34.230808-15.309256-34.230808-34.230808 0-18.921552 15.309256-34.230808 34.230808-34.230808l156.532841 0c18.921552 0 34.230808 15.309256 34.230808 34.230808C273.846464 441.732236 258.537208 457.041492 239.615656 457.041492L239.615656 457.041492zM459.965732 801.069713l-376.710902 0c-18.921552 0-34.230808-15.309256-34.230808-34.230808S64.333277 732.780111 83.254829 732.780111l376.710902 0c18.921552 0 34.230808 15.309256 34.230808 34.230808C494.19654 785.760457 478.887284 801.069713 459.965732 801.069713L459.965732 801.069713z"  ></path><path d="M420.746514 426.078952c0-115.765496 94.435747-210.029229 210.545271-210.029229s210.545271 94.091718 210.545271 210.029229S747.40131 636.108181 631.291786 636.108181 420.746514 541.844448 420.746514 426.078952L420.746514 426.078952 420.746514 426.078952zM967.751386 816.206954l-147.416093-192.48379c52.29229-49.884092 85.146985-119.893835 85.146985-197.472199 0-150.684361-122.990089-273.330422-274.190492-273.330422s-274.190492 122.646061-274.190492 273.330422 122.990089 273.330422 274.190492 273.330422c48.679993 0 94.263733-12.901058 133.998992-35.090879l147.932135 193.171846c6.70855 8.77272 17.029397 13.589115 27.178229 13.589115 7.224593 0 14.621199-2.236183 20.641693-7.052579C976.352091 852.501932 979.104317 831.000168 967.751386 816.206954L967.751386 816.206954 967.751386 816.206954zM778.707878 424.874853c0 81.018646-65.70939 146.556022-146.556022 146.556022s-146.556022-65.70939-146.556022-146.556022 65.70939-146.556022 146.556022-146.556022S778.707878 344.028221 778.707878 424.874853z"  ></path></symbol><symbol id="i-sousuoleimu" viewBox="0 0 1024 1024"><path d="M967.9234 816.206954l-147.416093-192.48379c52.29229-49.884092 85.146985-119.721821 85.146985-197.472199 0-150.684361-122.990089-273.330422-274.018478-273.330422-151.200403 0-274.018478 122.646061-274.018478 273.330422s122.990089 273.330422 274.018478 273.330422c48.679993 0 94.263733-12.901058 133.998992-35.090879l147.932135 193.171846c6.70855 8.77272 16.857383 13.417101 27.350244 13.417101 7.224593 0 14.621199-2.236183 20.641693-7.052579C976.524105 852.501932 979.448345 831.172182 967.9234 816.206954L967.9234 816.206954zM421.090543 426.250966c0-115.765496 94.435747-209.857215 210.545271-209.857215s210.545271 94.091718 210.545271 209.857215-94.435747 209.857215-210.545271 209.857215S421.090543 542.016462 421.090543 426.250966L421.090543 426.250966zM288.467663 288.811692 83.254829 288.811692c-18.921552 0-34.230808-15.309256-34.230808-34.058794s15.309256-34.058794 34.230808-34.058794l205.212834 0c18.921552 0 34.230808 15.309256 34.230808 34.058794C322.698471 273.502436 307.389216 288.811692 288.467663 288.811692L288.467663 288.811692zM280.210986 626.131362 83.254829 626.131362c-18.921552 0-34.230808-15.309256-34.230808-34.058794s15.309256-34.058794 34.230808-34.058794l196.956157 0c18.921552 0 34.230808 15.309256 34.230808 34.058794C314.441794 610.822107 299.132538 626.131362 280.210986 626.131362L280.210986 626.131362zM239.78767 457.041492l-156.532841 0c-18.921552 0-34.230808-15.309256-34.230808-34.230808 0-18.921552 15.309256-34.230808 34.230808-34.230808l156.532841 0c18.921552 0 34.230808 15.309256 34.230808 34.230808C273.846464 441.732236 258.537208 457.041492 239.78767 457.041492L239.78767 457.041492zM460.137746 801.241727 83.254829 801.241727c-18.921552 0-34.230808-15.309256-34.230808-34.230808s15.309256-34.230808 34.230808-34.230808l376.882916 0c18.921552 0 34.230808 15.309256 34.230808 34.230808C494.368554 785.932471 479.059298 801.241727 460.137746 801.241727L460.137746 801.241727z"  ></path></symbol><symbol id="i-wodefill" viewBox="0 0 1024 1024"><path d="M877.443978 872.455569c0 0-162.897363-82.738787-237.723501-88.071225l0-23.737947c119.721821-50.916177 195.064001-174.93835 195.064001-319.946246 0-190.075592-145.867966-344.544263-325.106669-344.544263s-325.106669 154.640685-325.106669 344.544263c0 146.728036 77.40635 271.954309 199.536368 321.666387l0 22.017806-1.548127 0c-69.493701 3.440282-235.315303 87.727196-235.315303 87.727196S125.570301 890.345036 127.978498 904.106165c2.408198 13.761129 14.793214 23.909961 29.070385 23.909961L423.154712 928.016126l177.346548 0 265.933815 0c14.277171 0 26.318159-9.804804 29.070385-23.393919C898.257685 891.033093 877.443978 872.455569 877.443978 872.455569z"  ></path></symbol><symbol id="i-wode" viewBox="0 0 1024 1024"><path d="M159.973123 928.016126c-10.664875 0-20.985721-5.332437-27.178229-14.965228-9.460776-14.965228-4.988409-34.74685 9.976818-44.207626 5.504452-3.440282 136.579204-85.491013 240.647741-90.651436l0.516042 0L383.935495 760.302369c-120.409877-49.884092-199.708382-175.626407-199.708382-320.462288 0-189.55955 145.867966-343.856207 325.278683-343.856207s325.278683 154.124643 325.278683 343.856207c0 144.663867-75.858223 267.137914-195.064001 318.398119l0 20.297665c104.756593 9.460776 234.799261 86.695112 240.475727 89.96338 15.137242 9.116748 20.125651 28.726356 11.008903 43.863598-9.116748 15.137242-28.726356 20.125651-43.863598 11.008903-1.204099-0.688056-126.258357-74.826138-214.157568-81.362674l-25.458088 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625l0-73.966068c0-13.589115 8.600706-25.802117 21.673778-30.274483 105.44465-36.294977 173.390223-140.707542 173.390223-266.277843C770.967243 285.543423 653.825634 159.973123 509.67781 159.973123c-144.147825 0-261.289434 125.570301-261.289434 279.866958 0 125.742315 71.385856 233.251134 177.518562 267.653956 13.245087 4.300353 22.18982 16.513355 22.18982 30.446498l0 72.245926c0 17.717453-14.277171 31.994625-31.994625 31.994625l-30.96254 0c-85.835041 4.300353-206.760961 79.986561-207.96506 80.846632C171.842096 926.295985 165.821603 928.016126 159.973123 928.016126z"  ></path></symbol><symbol id="i-xihuanfill" viewBox="0 0 1024 1024"><path d="M736.048379 127.978498c-65.881404 0-128.494541 24.942046-176.314463 70.525785-4.644381 4.300353-28.726356 28.726356-47.30388 47.647909l-47.30388-47.131866c-47.819923-45.755753-110.605073-71.041828-177.00252-71.041828-141.223585 0-255.956996 114.905426-255.956996 255.956996 0 82.394759 41.111372 144.319839 76.546279 182.506971l316.849992 320.11826c25.11406 25.11406 52.980346 41.455401 86.695112 41.455401 33.714766 0 61.581052-16.341341 86.695112-41.455401l316.677977-319.946246 2.236183-2.408198c38.187133-47.647909 74.310096-92.715606 74.310096-180.098774C992.005375 242.883924 877.09995 127.978498 736.048379 127.978498z"  ></path></symbol><symbol id="i-xihuan" viewBox="0 0 1024 1024"><path d="M511.913993 928.016126c-28.898371 0-57.968755-12.729044-86.695112-41.455401L106.30472 564.034268C68.117588 516.38636 31.994625 471.318663 31.994625 383.935495c0-141.223585 114.905426-255.956996 255.956996-255.956996 53.15236 0 104.068537 16.169326 147.244079 46.615824 14.449185 10.148833 17.889467 30.102469 7.740635 44.551655-10.148833 14.449185-30.102469 17.889467-44.551655 7.740635-32.338653-22.877877-70.525785-34.918864-110.433059-34.918864-105.960692 0-191.967747 86.179069-191.967747 191.967747 0 61.409037 20.297665 90.135394 59.172854 138.643373l315.645893 318.742147c15.997312 15.997312 28.898371 22.361834 41.283387 22.533848 12.729044 0.172014 24.942046-6.192508 41.455401-22.705863l316.677977-319.946246c25.974131-28.210314 57.968755-75.858223 57.968755-137.439274 0-105.960692-86.179069-191.967747-191.967747-191.967747-47.991937 0-94.091718 17.889467-129.526625 50.22812l-133.998992 134.171006c-12.55703 12.55703-32.682681 12.55703-45.239711 0s-12.55703-32.682681 0-45.239711l135.031077-135.203091c48.335965-44.207626 109.745003-67.945574 173.734252-67.945574 141.223585 0 255.956996 114.905426 255.956996 255.956996 0 82.394759-41.111372 144.319839-75.686209 181.646901L598.781119 886.388712C569.882748 915.287082 540.984378 928.016126 511.913993 928.016126z"  ></path></symbol><symbol id="i-xinxifill" viewBox="0 0 1024 1024"><path d="M511.913993 67.085503C264.90173 67.085503 63.989249 239.443642 63.989249 451.193012c0 116.453553 62.957164 226.026541 174.07828 301.368722l84.1149 51.948261c-3.612296 23.565933-18.749538 74.48211-33.370737 115.93751-4.300353 12.040988-0.860071 25.458088 8.428691 34.230808 6.020494 5.504452 13.761129 8.428691 21.673778 8.428691 4.472367 0 8.77272-0.860071 13.073072-2.752226 36.466991-16.169326 147.416093-68.977658 187.49538-125.398287 243.571981-3.440282 440.356123-174.422308 440.356123-383.935495C960.010751 239.443642 759.09827 67.085503 511.913993 67.085503zM580.203595 543.908618 384.967579 543.908618c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l195.236015 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S597.921048 543.908618 580.203595 543.908618zM640.924576 415.930119 384.967579 415.930119c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l255.956996 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C672.9192 401.652948 658.642029 415.930119 640.924576 415.930119z"  ></path></symbol><symbol id="i-xinxi" viewBox="0 0 1024 1024"><path d="M639.892491 415.930119 383.935495 415.930119c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625L639.892491 351.94087c17.717453 0 31.994625 14.277171 31.994625 31.994625S657.609945 415.930119 639.892491 415.930119z"  ></path><path d="M579.17151 543.908618 383.935495 543.908618c-17.717453 0-31.994625-14.277171-31.994625-31.994625S366.390055 479.919368 383.935495 479.919368l195.236015 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S596.888964 543.908618 579.17151 543.908618z"  ></path><path d="M962.246934 447.924744c0-211.74937-200.912481-383.935495-447.924744-383.935495S66.225433 236.175374 66.225433 447.924744c0 116.453553 62.957164 226.026541 172.874181 300.680665 14.621199 9.976818 34.574836 6.192508 44.379641-8.428691 9.976818-14.621199 6.192508-34.574836-8.428691-44.379641-92.027549-62.441122-144.835881-152.74853-144.835881-247.700319 0-176.486477 172.186125-319.946246 383.935495-319.946246s383.935495 143.631782 383.935495 319.946246-172.186125 319.946246-383.935495 319.946246c-2.064169 0-3.612296 0.688056-5.504452 1.204099-15.137242-2.752226-30.446498 5.160423-35.778935 20.125651-6.192508 17.373425-46.44381 46.615824-94.091718 73.794053 17.373425-58.140769 9.116748-70.697799 3.440282-78.954477-6.70855-9.976818-17.889467-15.997312-29.930455-15.997312-17.717453 0-31.994625 14.277171-31.994625 31.994625 0 5.84848 1.548127 11.180917 4.300353 15.997312-3.268268 18.233496-17.201411 60.892995-33.026709 99.768184-4.988409 12.040988-2.064169 25.974131 7.396607 35.090879 6.020494 5.84848 14.105157 8.944734 22.18982 8.944734 4.300353 0 8.77272-0.860071 13.073072-2.752226 36.466991-16.341341 147.588107-69.149672 187.667395-125.570301C765.290778 828.075928 962.246934 657.609945 962.246934 447.924744z"  ></path></symbol><symbol id="i-zhengli" viewBox="0 0 1024 1024"><path d="M332.256417 162.431501c-12.000108-4.992017-25.727295-2.239699-34.880473 6.944443L105.375944 361.375944c-12.512727 12.512727-12.512727 32.735385 0 45.248112s32.735385 12.512727 45.248112 0l137.376804-137.376804 0 530.751888c0 17.695686 14.336138 32.00086 31.99914 32.00086s31.99914-14.303454 31.99914-32.00086L351.99914 192C352.00086 179.072705 344.191157 167.392555 332.256417 162.431501z"  ></path><path d="M918.624056 617.375944c-12.512727-12.512727-32.735385-12.512727-45.248112 0l-105.375944 105.375944L768 192c0-17.664722-14.303454-32.00086-32.00086-32.00086s-32.00086 14.336138-32.00086 32.00086l0 608.00086c0 12.927295 7.775299 24.640129 19.744443 29.568499 3.968499 1.663432 8.12794 2.432361 12.256417 2.432361 8.320602 0 16.512189-3.263217 22.624056-9.376804l160.00086-160.00086C931.136783 650.111329 931.136783 629.888671 918.624056 617.375944z"  ></path></symbol><symbol id="i-zuobiaofill" viewBox="0 0 1024 1024"><path d="M511.913993 63.989249C317.882076 63.989249 159.973123 221.898203 159.973123 415.930119c0 187.323366 315.473879 519.998656 328.890979 534.103813 6.020494 6.364522 14.449185 9.976818 23.221905 9.976818 0.172014 0 0.516042 0 0.688056 0 8.944734 0 17.545439-4.128339 23.393919-11.008903l109.22896-125.054258c145.179909-177.690576 218.629934-314.957836 218.629934-407.845456C864.026877 221.898203 706.117924 63.989249 511.913993 63.989249zM511.913993 575.903242c-88.415253 0-159.973123-71.55787-159.973123-159.973123s71.55787-159.973123 159.973123-159.973123 159.973123 71.55787 159.973123 159.973123S600.329246 575.903242 511.913993 575.903242z"  ></path></symbol><symbol id="i-zuobiao" viewBox="0 0 1024 1024"><path d="M511.913993 607.897867c-105.960692 0-191.967747-86.179069-191.967747-191.967747s86.179069-191.967747 191.967747-191.967747 191.967747 86.179069 191.967747 191.967747S617.874685 607.897867 511.913993 607.897867zM511.913993 287.951621c-70.525785 0-127.978498 57.452713-127.978498 127.978498s57.452713 127.978498 127.978498 127.978498 127.978498-57.452713 127.978498-127.978498S582.611792 287.951621 511.913993 287.951621z"  ></path><path d="M511.913993 960.010751c-7.912649 0-15.825298-2.92424-22.017806-8.77272-12.729044-12.213002-13.245087-32.510667-1.032085-45.239711 86.523098-90.651436 311.173526-355.553166 311.173526-489.896187 0-158.769024-129.182597-287.951621-287.951621-287.951621-158.769024 0-287.951621 129.182597-287.951621 287.951621 0 75.686209 72.589955 206.072904 204.180749 367.42214 11.180917 13.761129 9.116748 33.88678-4.472367 45.067697-13.761129 11.180917-33.88678 9.116748-45.067697-4.472367C233.595162 646.084999 159.973123 508.989753 159.973123 415.930119 159.973123 221.898203 317.882076 63.989249 511.913993 63.989249S864.026877 221.898203 864.026877 415.930119c0 187.323366-315.473879 519.998656-328.890979 534.103813C528.771376 956.570469 520.514698 960.010751 511.913993 960.010751z"  ></path></symbol><symbol id="i-dibu" viewBox="0 0 1024 1024"><path d="M792.855154 465.805779c-6.240882-6.208198-14.368821-9.311437-22.560409-9.311437s-16.446822 3.168606-22.687703 9.440452L539.696922 673.674614 539.696922 108.393173c0-17.695686-14.336138-31.99914-32.00086-31.99914s-32.00086 14.303454-32.00086 31.99914l0 563.712619L269.455396 465.941675c-6.271845-6.208198-14.432469-9.34412-22.624056-9.34412-8.224271 0-16.417578 3.135923-22.65674 9.407768-12.511007 12.512727-12.480043 32.768069 0.032684 45.248112l259.328585 259.125601c3.264938 3.263217 7.104421 5.599247 11.136568 7.135385 3.999462 1.792447 8.351566 2.879613 13.023626 2.879613 1.119849 0 2.07972-0.543583 3.19957-0.639914 8.287918 0.063647 16.60852-3.008628 22.976697-9.407768L792.982449 511.053891C805.462492 498.542884 805.429808 478.254858 792.855154 465.805779z"  ></path><path d="M892.561322 875.531353c0 17.664722-14.303454 32.00086-31.99914 32.00086L156.562183 907.532213c-17.664722 0-32.00086-14.334417-32.00086-31.99914 0-17.664722 14.336138-32.00086 32.00086-32.00086l704 0C878.257869 843.532213 892.561322 857.866631 892.561322 875.531353z"  ></path></symbol><symbol id="i-dingbu" viewBox="0 0 1024 1024"><path d="M796.422846 524.478323 537.312727 265.185862c-6.368176-6.39914-14.688778-9.471415-22.976697-9.407768-1.119849-0.096331-2.07972-0.639914-3.19957-0.639914-4.67206 0-9.024163 1.087166-13.023626 2.879613-4.032146 1.536138-7.87163 3.872168-11.136568 7.135385L227.647682 524.27706c-12.512727 12.480043-12.54369 32.735385-0.032684 45.248112 6.239161 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.624056-9.34412L479.1356 363.426421l0 563.712619c0 17.695686 14.336138 31.99914 32.00086 31.99914s32.00086-14.303454 32.00086-31.99914L543.13732 361.8576l207.91012 207.73982c6.240882 6.271845 14.496116 9.440452 22.687703 9.440452s16.319527-3.103239 22.560409-9.311437C808.870206 557.277355 808.902889 536.989329 796.422846 524.478323z"  ></path><path d="M864.00258 192 160.00258 192c-17.664722 0-32.00086-14.336138-32.00086-32.00086S142.337858 128 160.00258 128l704 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.698266 192 864.00258 192z"  ></path></symbol><symbol id="i-xiangshang1" viewBox="0 0 1024 1024"><path d="M325.456471 862.280661"  ></path><path d="M882.057788 862.280661"  ></path><path d="M236.028491 877.160382"  ></path><path d="M960.132455 877.160382"  ></path><path d="M63.683483 788.736998"  ></path><path d="M958.469023 788.736998"  ></path><path d="M64.77753 858.792098"  ></path><path d="M861.417121 738.727375c41.604731 0 65.233383-54.963795 34.928639-85.258218L547.071415 304.191372c-20.029996-20.031716-49.822121-20.031716-69.853837 0L127.955275 653.469157c-31.085714 31.073673-5.136514 85.258218 35.441258 85.258218L861.417121 738.727375 861.417121 738.727375z"  ></path><path d="M959.523505 858.792098"  ></path></symbol><symbol id="i-xiangshang2" viewBox="0 0 1024 1024"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128z"  ></path><path d="M694.463217 458.367639l-158.495686-160.25545c-9.34412-9.471415-23.167639-11.840129-34.784142-7.135385-0.736245 0.287273-1.312512 0.992555-2.016073 1.343475-2.975944 1.47249-5.951888 3.072275-8.447897 5.5356-0.032684 0.032684-0.032684 0.063647-0.063647 0.096331-0.032684 0.032684-0.063647 0.032684-0.096331 0.063647l-159.359226 158.911974c-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112 6.239161 6.271845 14.463432 9.407768 22.65674 9.407768 8.160624 0 16.352211-3.103239 22.591372-9.34412l103.616181-103.296224 0 305.056632c0 17.695686 14.336138 31.99914 32.00086 31.99914s32.00086-14.303454 32.00086-31.99914L544.00258 397.247252l104.959656 106.112189c6.239161 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.072275 22.496761-9.247789C706.783282 491.199355 706.912297 470.944013 694.463217 458.367639z"  ></path></symbol><symbol id="i-xiangxia1" viewBox="0 0 1024 1024"><path d="M325.456471 862.280661"  ></path><path d="M882.057788 862.280661"  ></path><path d="M236.028491 877.160382"  ></path><path d="M960.132455 877.160382"  ></path><path d="M63.683483 788.736998"  ></path><path d="M958.469023 788.736998"  ></path><path d="M64.77753 858.792098"  ></path><path d="M163.396533 289.168875c-40.577772 0-66.525252 54.184545-35.441258 85.258218L477.217578 723.704878c20.031716 20.031716 49.823841 20.031716 69.853837 0l349.274345-349.277785c30.304744-30.294423 6.677812-85.258218-34.928639-85.258218L163.396533 289.168875 163.396533 289.168875z"  ></path><path d="M959.523505 858.792098"  ></path></symbol><symbol id="i-xiangxia2" viewBox="0 0 1024 1024"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128z"  ></path><path d="M694.559548 522.144013c-12.54369-12.607338-33.375299-12.640022-45.951673-0.063647l-104.608735 103.903454L543.99914 319.327402c0-17.759333-14.208843-32.160839-32.00086-32.160839-17.759333 0-32.00086 14.399785-32.00086 32.160839l0 308.319849-105.215966-106.688456c-12.480043-12.607338-32.704421-12.736353-45.311759-0.25631-12.640022 12.512727-12.672705 32.895364-0.192662 45.504421l159.359226 161.055342c6.271845 6.335493 14.592447 9.567746 22.880366 9.567746 8.160624 0 16.383174-3.168606 22.624056-9.311437 0.032684-0.063647 0.032684-0.063647 0.063647-0.127295 0.032684 0 0.063647 0 0.096331-0.063647l160.191802-159.679183C707.072275 555.104744 707.103239 534.720387 694.559548 522.144013z"  ></path></symbol><symbol id="i-xiangyou2" viewBox="0 0 1024 1024"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128z"  ></path><path d="M732.959548 501.152426c-0.032684-0.127295-0.192662-0.25631-0.25631-0.383604-1.536138-3.615858-3.648542-7.071738-6.591802-10.047682-0.032684-0.032684-0.063647-0.032684-0.096331-0.063647-0.032684-0.032684-0.032684-0.063647-0.063647-0.096331l-158.911974-159.359226c-12.480043-12.480043-32.704421-12.576374-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112l103.328907 103.616181L320 480.00258c-17.664722 0-31.99914 14.336138-31.99914 32.00086s14.336138 32.00086 31.99914 32.00086l306.752748 0-106.112189 104.959656c-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112 6.239161 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789l160.25545-158.495686C735.328262 526.592447 737.72794 512.767209 732.959548 501.152426z"  ></path></symbol><symbol id="i-xiangzuo2" viewBox="0 0 1024 1024"><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128z"  ></path><path d="M290.367854 524.352748c0.032684 0.127295 0.192662 0.25631 0.25631 0.383604 1.536138 3.615858 3.648542 7.071738 6.591802 10.047682 0.032684 0.032684 0.063647 0.032684 0.096331 0.063647s0.032684 0.063647 0.063647 0.096331l158.911974 159.359226c12.480043 12.512727 32.704421 12.576374 45.248112 0.063647 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112l-103.327187-103.616181 305.056632 0c17.664722 0 31.99914-14.336138 31.99914-32.00086s-14.336138-32.00086-31.99914-32.00086L396.576374 481.500874l106.112189-104.959656c12.576374-12.447359 12.672705-32.671738 0.25631-45.248112-6.240882-6.335493-14.496116-9.504099-22.751351-9.504099-8.12794 0-16.25588 3.103239-22.496761 9.247789l-160.25545 158.495686C288.00086 498.912727 285.632146 512.703561 290.367854 524.352748z"  ></path></symbol><symbol id="i-xiangji1fill" viewBox="0 0 1024 1024"><path d="M860.414581 207.449017 509.333781 207.449017c0-52.808332-43.003528-95.81186-95.81186-95.81186l-63.817235 0c-52.808332 0-95.81186 43.003528-95.81186 95.81186L158.424996 207.449017c-52.808332 0-95.81186 43.003528-95.81186 95.81186l0 510.53788c0 52.808332 43.003528 95.81186 95.81186 95.81186l701.989585 0c52.808332 0 95.81186-43.003528 95.81186-95.81186L956.22644 303.260877C956.054426 250.452545 913.050899 207.449017 860.414581 207.449017zM509.333781 749.981522c-105.616664 0-191.451705-85.835041-191.451705-191.451705s85.835041-191.451705 191.451705-191.451705 191.451705 85.835041 191.451705 191.451705S614.950445 749.981522 509.333781 749.981522zM812.422644 430.895347c-26.490173 0-47.819923-21.501764-47.819923-47.819923s21.501764-47.819923 47.819923-47.819923c26.490173 0 47.819923 21.501764 47.819923 47.819923S838.912817 430.895347 812.422644 430.895347z"  ></path></symbol><symbol id="i-xiangji1" viewBox="0 0 1024 1024"><path d="M509.505795 749.981522c-105.616664 0-191.451705-85.835041-191.451705-191.451705s85.835041-191.451705 191.451705-191.451705 191.451705 85.835041 191.451705 191.451705S615.122459 749.981522 509.505795 749.981522zM509.505795 430.895347c-70.353771 0-127.63447 57.280699-127.63447 127.63447s57.280699 127.63447 127.63447 127.63447 127.63447-57.280699 127.63447-127.63447S579.859567 430.895347 509.505795 430.895347z"  ></path><path d="M860.586595 909.610616 158.424996 909.610616c-52.808332 0-95.81186-43.003528-95.81186-95.81186L62.613136 303.260877c0-52.808332 43.003528-95.81186 95.81186-95.81186l95.81186 0c17.545439 0 31.994625 14.277171 31.994625 31.994625 0 17.717453-14.277171 31.994625-31.994625 31.994625L158.424996 271.438266c-17.545439 0-31.994625 14.277171-31.994625 31.994625l0 510.53788c0 17.545439 14.277171 31.994625 31.994625 31.994625l701.989585 0c17.545439 0 31.994625-14.277171 31.994625-31.994625L892.409205 303.260877c0-17.545439-14.277171-31.994625-31.994625-31.994625l-350.908785 0c-17.545439 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l351.0808 0c52.808332 0 95.81186 43.003528 95.81186 95.81186L956.398455 813.626743C956.22644 866.607089 913.222913 909.610616 860.586595 909.610616z"  ></path><path d="M764.774735 351.252814c0 26.490173 21.501764 47.819923 47.819923 47.819923 26.490173 0 47.819923-21.501764 47.819923-47.819923s-21.501764-47.819923-47.819923-47.819923C786.276499 303.260877 764.774735 324.762641 764.774735 351.252814z"  ></path><path d="M477.683185 143.803796c0 17.545439-14.277171 31.994625-31.994625 31.994625l-127.63447 0c-17.545439 0-31.994625-14.277171-31.994625-31.994625l0 0c0-17.545439 14.277171-31.994625 31.994625-31.994625l127.63447 0C463.234 111.809172 477.683185 126.086343 477.683185 143.803796L477.683185 143.803796z"  ></path></symbol><symbol id="i-jiazai" viewBox="0 0 1024 1024"><path d="M515.698303 969.127499c-97.187972 0-191.279691-31.134554-270.406182-90.479422-96.67193-72.245926-159.45708-178.206619-176.658492-297.928439s13.245087-238.9276 85.663027-335.59953C304.120947 45.239711 588.288258 4.644381 787.99664 154.124643c83.770872 62.78515 143.459768 153.092558 168.2298 254.580884 4.300353 17.373425-6.364522 34.918864-23.737947 39.047203-17.373425 4.128339-34.918864-6.364522-39.047203-23.737947-21.157736-86.867126-72.417941-164.44549-144.147825-218.285906C578.139425 77.750378 334.395431 112.669242 206.244919 283.823282c-62.097094 82.910801-88.243239 185.087183-73.450025 287.607593s68.461616 193.34386 151.372417 255.440954c171.326054 128.322526 414.898035 93.403662 543.220561-77.922392 33.542752-44.895683 56.592642-95.123803 68.289602-149.308248 3.78431-17.373425 21.157736-28.554342 38.359147-24.770032 17.373425 3.78431 28.554342 20.985721 24.770032 38.359147-13.761129 63.473207-40.59533 122.130018-79.814547 174.422308-72.417941 96.67193-178.378633 159.45708-298.100454 176.658492C559.217873 967.579372 537.372081 969.127499 515.698303 969.127499z"  ></path></symbol><symbol id="i-shuaxin" viewBox="0 0 1024 1024"><path d="M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z"  ></path></symbol><symbol id="i-wifi" viewBox="0 0 1024 1024"><path d="M242.883924 608.413909c-8.084663 0-16.169326-2.92424-22.361834-9.116748-12.729044-12.385016-12.901058-32.510667-0.688056-45.239711 77.922392-80.158576 182.334957-124.194188 294.144129-124.194188 109.400974 0 212.265412 42.487485 289.843776 119.721821 12.55703 12.55703 12.55703 32.682681 0 45.239711-12.385016 12.55703-32.682681 12.55703-45.239711 0-65.365362-65.193348-152.232488-101.144297-244.604065-101.144297-94.435747 0-182.506971 37.155048-248.216361 104.756593C259.397279 605.145641 251.140601 608.413909 242.883924 608.413909z"  ></path><path d="M96.155888 445.860575c-8.084663 0-16.341341-3.096254-22.533848-9.288762-12.55703-12.385016-12.55703-32.682681-0.172014-45.239711 117.313623-118.345708 273.846464-183.539056 440.528137-183.539056 164.44549 0 319.258189 63.645221 436.227784 179.238703 12.55703 12.385016 12.729044 32.682681 0.172014 45.239711-12.385016 12.55703-32.682681 12.729044-45.239711 0.344028-104.928607-103.552495-243.916009-160.661179-391.332101-160.661179-149.480262 0-289.843776 58.484798-395.116412 164.617504C112.669242 442.764321 104.412565 445.860575 96.155888 445.860575z"  ></path><path d="M509.849824 816.03494c-7.912649 0-15.653284-2.92424-21.673778-8.600706L393.052243 719.018982c-12.55703-11.69696-13.761129-31.306568-2.408198-44.379641 30.274483-35.090879 73.794053-55.216529 119.377793-55.216529 47.647909 0 92.543591 21.673778 122.990089 59.516882 10.664875 13.417101 8.944734 32.854695-3.956325 44.207626l-98.048043 84.802956C524.643037 813.454729 517.24643 816.03494 509.849824 816.03494zM462.545943 696.657148l47.819923 44.551655 49.36805-42.659499C531.179573 679.799765 492.13237 679.111708 462.545943 696.657148z"  ></path></symbol><symbol id="i-yonghufill" viewBox="0 0 1024 1024"><path d="M631.119772 619.422812l0.344028-16.685369c79.298505-55.388544 117.829666-153.092558 117.829666-297.756425 0-139.503444-87.211154-222.758273-233.423148-222.758273l-7.912649 0c-146.03998 0-233.423148 83.254829-233.423148 222.758273 0 143.975811 38.875189 241.679825 118.86175 297.412397l0 16.857383c-133.138922 17.889467-266.621871 70.869814-266.621871 151.88846 0 113.357299 129.526625 170.810012 385.139593 170.810012s385.139593-57.452713 385.139593-170.810012C897.053586 690.292626 763.914665 637.31228 631.119772 619.422812z"  ></path></symbol><symbol id="i-yonghu" viewBox="0 0 1024 1024"><path d="M511.913993 941.605241c-255.612968 0-385.311608-57.452713-385.311608-170.810012 0-80.846632 133.654964-133.998992 266.621871-151.88846L393.224257 602.049387c-79.986561-55.904586-118.86175-153.436587-118.86175-297.240383 0-139.33143 87.211154-222.586259 233.423148-222.586259l7.912649 0c146.211994 0 233.423148 83.254829 233.423148 222.586259 0 54.184445 0 214.67361-117.829666 297.412397l-0.344028 16.685369c132.966907 18.061482 266.105829 71.041828 266.105829 151.716445C897.225601 884.152528 767.526961 941.605241 511.913993 941.605241zM507.957668 141.567613c-79.470519 0-174.250294 28.382328-174.250294 163.241391 0 129.698639 34.230808 213.469511 104.584579 255.784982 8.944734 5.332437 14.277171 14.965228 14.277171 25.286074l0 59.344868c0 15.309256-11.524945 28.0383-26.662187 29.414413-144.319839 14.449185-239.959684 67.429531-239.959684 95.983874 0 92.199563 177.346548 111.637158 325.966739 111.637158 148.792206 0 325.966739-19.26558 325.966739-111.637158 0-28.726356-95.639845-81.534688-239.959684-95.983874-15.48127-1.548127-27.006215-14.621199-26.662187-30.102469l1.376113-59.344868c0.172014-10.148833 5.676466-19.437594 14.277171-24.770032 70.525785-42.487485 103.208466-123.678145 103.208466-255.784982 0-135.031077-94.779775-163.241391-174.250294-163.241391L507.957668 141.567613 507.957668 141.567613z"  ></path></symbol><symbol id="i-salefill" viewBox="0 0 1024 1024"><path d="M960.354779 579.17151c0-29.242399-11.524945-57.108685-31.478582-76.374265L616.326558 183.539056c-70.697799-69.321687-121.613976-119.377793-208.997144-119.377793l-142.083655 0C92.543591 64.161263 63.473207 127.63447 63.473207 270.062154l0 154.296657c0 79.642533 15.48127 103.208466 76.202251 161.865278l352.456912 343.168151c39.391231 38.015118 114.045355 38.015118 153.436587 0.172014l283.651268-274.53452C949.001848 635.936167 960.354779 608.241895 960.354779 579.17151zM410.08164 321.494373c0 56.764656-46.44381 103.036452-103.552495 103.036452S202.97665 378.259029 202.97665 321.494373s46.44381-103.036452 103.552495-103.036452S410.08164 264.729716 410.08164 321.494373z"  ></path></symbol><symbol id="i-sale" viewBox="0 0 1024 1024"><path d="M410.425668 318.398119c0 56.936671-46.44381 103.38048-103.38048 103.38048s-103.38048-46.44381-103.38048-103.38048 46.44381-103.38048 103.38048-103.38048S410.425668 261.461448 410.425668 318.398119zM341.448009 318.398119c0-19.093566-15.48127-34.402822-34.402822-34.402822s-34.402822 15.48127-34.402822 34.402822c0 18.921552 15.48127 34.402822 34.402822 34.402822C325.966739 352.972955 341.448009 337.491685 341.448009 318.398119z"  ></path><path d="M616.154544 183.71107l312.377625 317.19402c19.953637 19.437594 31.478582 47.30388 31.478582 76.718293 0 29.242399-11.352931 56.936671-31.134554 76.030237L645.568957 929.564253c-39.219217 38.015118-113.873341 38.187133-153.264572-0.172014L140.1915 585.01999c-60.720981-59.00084-76.202251-82.566773-76.202251-162.553334l0-151.544431c0-142.943726 29.070385-206.760961 201.256509-206.760961l142.083655 0C494.712582 63.989249 545.628759 114.217369 616.154544 183.71107zM597.57702 880.024189l283.30724-275.738619c6.536536-6.364522 10.148833-15.997312 10.148833-26.662187 0-10.836889-3.78431-20.813707-11.180917-27.866286L596.372921 260.945406 567.646565 232.907106c-70.181757-69.321687-103.724509-99.940198-160.489165-99.940198l-142.083655 0c-123.334117 0-132.278851 19.093566-132.278851 137.783303l0 151.544431c0 54.528473 1.548127 61.065009 55.388544 113.185285l352.112884 344.544263c6.880564 6.70855 17.201411 10.492861 28.554342 10.492861C580.203595 890.51705 590.696456 886.73274 597.57702 880.024189z"  ></path></symbol><symbol id="i-bangzhuzhongxin" viewBox="0 0 1024 1024"><path d="M891.033093 98.392071 649.86931 98.392071c-56.248614 0-106.30472 27.178229-137.783303 68.977658-31.478582-41.799429-81.534688-68.977658-137.783303-68.977658L132.966907 98.392071c-38.015118 0-68.977658 30.96254-68.977658 68.977658l0 637.484294c0 38.015118 30.96254 68.977658 68.977658 68.977658l253.376785 0c33.88678 33.026709 78.782463 51.604233 125.742315 51.604233s91.855535-18.577524 125.742315-51.604233L891.033093 873.831682c38.015118 0 68.977658-30.96254 68.977658-68.977658L960.010751 167.36973C960.010751 129.354611 929.048211 98.392071 891.033093 98.392071zM891.033093 804.854023 622.863094 804.854023c-9.976818 0-19.609609 4.300353-26.146145 12.040988-21.501764 25.11406-52.464304 39.563245-84.630942 39.563245-32.166639 0-63.129179-14.449185-84.630942-39.563245-6.536536-7.740635-16.169326-12.040988-26.146145-12.040988l-268.342012 0L132.966907 167.36973l241.163783 0c56.936671 0 103.38048 46.44381 103.38048 103.38048l0 292.94003c0 19.093566 15.48127 34.402822 34.402822 34.402822 19.093566 0 34.402822-15.48127 34.402822-34.402822L546.316815 270.75021c0-56.936671 46.44381-103.38048 103.38048-103.38048L891.033093 167.36973 891.033093 804.854023z"  ></path></symbol><symbol id="i-caidan" viewBox="0 0 1024 1024"><path d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z"  ></path><path d="M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z"  ></path><path d="M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z"  ></path></symbol><symbol id="i-zantongfill" viewBox="0 0 1024 1024"><path d="M864.198891 383.935495l-189.215522 0c13.761129-31.994625 29.586427-114.733412 20.297665-189.731564C688.056442 134.171006 652.965564 88.071225 601.705359 70.697799c-38.015118-12.901058-78.26642-6.70855-99.940198 15.48127-25.802117 26.318159-37.843104 75.858223-50.744163 128.322526-8.428691 34.402822-17.029397 69.837729-27.866286 88.243239-31.134554 52.980346-96.67193 81.362674-109.572988 81.362674l-89.619352 0c-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 447.924744c0 17.717453 14.277171 31.994625 31.994625 31.994625l86.523098 0c26.834201 0 126.430371 63.989249 241.851839 63.989249l215.877709 0c35.606921 0 96.843944-13.761129 119.721821-51.776247 23.049891-38.531161 71.901898-388.75189 71.901898-427.455065C959.838737 427.111036 907.546447 383.935495 864.198891 383.935495z"  ></path><path d="M95.983874 384.107509c-17.717453 0-31.994625 14.277171-31.994625 31.994625l0 447.924744c0 17.717453 14.277171 31.994625 31.994625 31.994625s31.994625-14.277171 31.994625-31.994625L127.978498 416.102133C127.978498 398.38468 113.701327 384.107509 95.983874 384.107509z"  ></path></symbol><symbol id="i-zantong" viewBox="0 0 1024 1024"><path d="M95.983874 896.021502c-17.717453 0-31.994625-14.277171-31.994625-31.994625L63.989249 415.930119c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 447.924744C127.978498 881.744331 113.701327 896.021502 95.983874 896.021502z"  ></path><path d="M864.198891 383.935495 674.811356 383.935495c13.761129-31.994625 29.586427-114.733412 20.469679-190.075592C688.056442 133.998992 652.793549 88.071225 601.533345 70.525785c-38.015118-12.901058-78.26642-6.536536-99.940198 15.48127-25.802117 26.318159-37.843104 75.858223-50.744163 128.322526-8.428691 34.230808-17.029397 69.837729-27.866286 88.243239-31.134554 52.980346-96.327902 77.062322-109.400974 81.362674l-89.791366 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625l0 447.924744c0 17.717453 14.277171 31.994625 31.994625 31.994625l86.523098 0c26.834201 14.449185 126.430371 63.989249 241.851839 63.989249l215.877709 0c35.606921 0 96.843944-13.761129 119.721821-51.776247 23.049891-38.531161 71.901898-388.75189 71.901898-427.455065C959.838737 427.283051 907.546447 383.935495 864.198891 383.935495zM833.236351 875.207794c-4.816395 8.084663-36.466991 20.641693-64.84932 20.641693L552.337309 895.849488c-114.217369 0-215.189652-63.989249-216.221737-63.989249l0 0c-4.816395 0-10.148833 0-16.169326 0l-63.989249 0L255.956996 447.924744l63.989249 0c2.580212 0 4.988409-0.860071 7.396607-1.548127 0.516042-0.172014 1.032085 0 1.548127-0.172014 0.172014-0.172014 0.860071-0.344028 1.720141-0.516042 0.860071-0.344028 1.720141-0.344028 2.580212-0.860071 19.437594-6.364522 102.52041-37.327062 145.179909-109.917017 15.48127-26.318159 24.942046-64.84932 34.74685-105.44465 9.116748-37.843104 20.641693-84.974971 34.058794-98.564085 3.096254-2.580212 18.061482-6.020494 36.81102 1.376113 15.309256 6.020494 41.971443 23.049891 47.647909 69.665715 12.55703 102.52041-31.478582 200.052411-31.82261 201.084495-4.644381 9.976818-3.78431 21.157736 2.064169 30.274483 5.84848 9.116748 15.997312 14.449185 26.834201 14.449185l235.315303 0c8.77272 0 31.650596 14.965228 31.650596 32.854695C895.849488 523.438938 846.481438 844.933311 833.236351 875.207794z"  ></path></symbol><symbol id="i-up" viewBox="0 0 1024 1024"><path d="M511.609097 961.619254"  ></path><path d="M511.906879 361.240391l381.287983 381.270587c14.808264 14.785751 38.796608 14.785751 53.562916 0 14.807241-14.788821 14.807241-38.776142 0-53.584406L538.527167 280.700053c-14.790868-14.788821-38.777165-14.788821-53.585429 0-1.020236 1.01512-1.976004 2.099824-2.843768 3.206018L76.246545 689.712471c-14.788821 14.808264-14.788821 38.795585 0 53.607942 14.808264 14.762215 38.796608 14.762215 53.585429 0L511.906879 361.240391 511.906879 361.240391 511.906879 361.240391zM511.906879 361.240391"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M511.609097 961.619254"  ></path><path d="M360.749204 511.010463 360.749204 511.010463l382.080022-382.074905c14.762215-14.788821 14.762215-38.777165 0-53.585429-14.812357-14.788821-38.799678-14.788821-53.607942 0L283.415908 481.201553c-1.107217 0.867764-2.190899 1.824555-3.206018 2.843768-14.788821 14.808264-14.788821 38.795585 0 53.585429l408.226518 408.230612c14.808264 14.807241 38.795585 14.807241 53.584406 0 14.785751-14.767332 14.785751-38.754652 0-53.562916L360.749204 511.010463 360.749204 511.010463zM360.749204 511.010463"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M450.56 820.48c4.48 4.48 10.88 7.04 16.64 8.96C471.04 831.36 475.52 832 480 832s8.96-0.64 12.8-2.56c6.4-1.28 12.16-3.84 16.64-8.96l313.6-313.6c14.08-14.08 14.08-35.84 0-49.92-14.08-14.08-35.84-14.08-49.92 0L512 718.08 512 160C512 142.08 497.92 128 480 128 462.08 128 448 142.08 448 160l0 558.08L186.88 456.96c-14.08-14.08-35.84-14.08-49.92 0-14.08 14.08-14.08 35.84 0 49.92L450.56 820.48zM864 896l-768 0C78.08 896 64 910.08 64 928 64 945.92 78.08 960 96 960l768 0c17.92 0 32-14.08 32-32C896 910.08 881.92 896 864 896z"  ></path></symbol><symbol id="i-fenlei" viewBox="0 0 1024 1024"><path d="M362.644092 55.263492 172.292063 55.263492c-61.042681 0-110.526984 49.484303-110.526984 110.526984l0 190.713228c0 61.042681 49.484303 110.526984 110.526984 110.526984L379.259259 467.030688l94.273016 0 0-94.273016L473.532275 165.790476C473.532275 104.747795 423.686772 55.263492 362.644092 55.263492zM403.459612 334.831746 403.459612 397.319224 341.333333 397.319224 204.438801 397.319224c-40.454321 0-72.962257-32.869136-72.962257-72.962257L131.476543 198.298413c0-40.454321 32.869136-72.962257 72.962257-72.962257l126.058554 0c40.454321 0 72.962257 32.869136 72.962257 72.962257L403.459612 334.831746z"  ></path><path d="M855.681129 467.030688c61.042681 0 110.526984-49.484303 110.526984-110.526984L966.208113 165.790476c0-61.042681-49.484303-110.526984-110.526984-110.526984l-190.713228 0c-61.042681 0-110.526984 49.484303-110.526984 110.526984l0 206.967196 0 94.273016 94.273016 0L855.681129 467.030688zM624.51358 334.831746 624.51358 198.298413c0-40.454321 32.869136-72.962257 72.962257-72.962257L823.534392 125.336155c40.454321 0 72.962257 32.869136 72.962257 72.962257l0 126.058554c0 40.454321-32.869136 72.962257-72.962257 72.962257l-136.894533 0-62.126279 0L624.51358 334.831746z"  ></path><path d="M172.292063 548.300529c-61.042681 0-110.526984 49.484303-110.526984 110.526984l0 190.713228c0 61.042681 49.484303 110.526984 110.526984 110.526984l190.713228 0c61.042681 0 110.526984-49.484303 110.526984-110.526984l0-206.967196 0-94.273016L379.259259 548.300529 172.292063 548.300529zM403.459612 680.499471l0 136.894533c0 40.454321-32.869136 72.962257-72.962257 72.962257L204.438801 890.356261c-40.454321 0-72.962257-32.869136-72.962257-72.962257l0-126.058554c0-40.454321 32.869136-72.962257 72.962257-72.962257l136.894533 0 62.126279 0L403.459612 680.499471z"  ></path><path d="M855.681129 548.300529l-206.967196 0-94.273016 0 0 94.273016 0 206.967196c0 61.042681 49.484303 110.526984 110.526984 110.526984l190.713228 0c61.042681 0 110.526984-49.484303 110.526984-110.526984l0-190.713228C966.569312 597.784832 916.72381 548.300529 855.681129 548.300529zM896.496649 817.032804c0 40.454321-32.869136 72.962257-72.962257 72.962257l-126.058554 0c-40.454321 0-72.962257-32.869136-72.962257-72.962257l0-136.894533 0-62.126279 62.126279 0L823.534392 618.011993c40.454321 0 72.962257 32.869136 72.962257 72.962257L896.496649 817.032804z"  ></path></symbol><symbol id="i-erweima" viewBox="0 0 1024 1024"><path d="M149.897707 387.566843l154.232099 0c49.484303 0 89.577425-40.093122 89.577425-89.577425L393.707231 143.757319C393.707231 94.273016 353.614109 54.179894 304.491005 54.179894L149.897707 54.179894c-49.484303 0-89.577425 40.093122-89.577425 89.577425l0 154.232099C60.320282 347.473721 100.774603 387.566843 149.897707 387.566843zM136.533333 143.757319c0-7.223986 6.140388-13.364374 13.364374-13.364374l154.232099 0c7.223986 0 13.364374 6.140388 13.364374 13.364374l0 154.232099c0 7.223986-6.140388 13.364374-13.364374 13.364374L149.897707 311.353792c-7.223986 0-13.364374-6.140388-13.364374-13.364374L136.533333 143.757319z"  ></path><path d="M304.491005 628.486772 149.897707 628.486772c-49.484303 0-89.577425 40.093122-89.577425 89.577425l0 154.232099c0 49.484303 40.093122 89.577425 89.577425 89.577425l154.232099 0c49.484303 0 89.577425-40.093122 89.577425-89.577425l0-154.232099C393.707231 668.579894 353.614109 628.486772 304.491005 628.486772zM317.49418 872.296296c0 7.223986-6.140388 13.364374-13.364374 13.364374L149.897707 885.66067c-7.223986 0-13.364374-6.140388-13.364374-13.364374l0-154.232099c0-7.223986 6.140388-13.364374 13.364374-13.364374l154.232099 0c7.223986 0 13.364374 6.140388 13.364374 13.364374L317.49418 872.296296z"  ></path><path d="M878.797884 54.179894l-154.232099 0c-49.484303 0-89.577425 40.093122-89.577425 89.577425l0 154.232099c0 49.484303 40.093122 89.577425 89.577425 89.577425l154.232099 0c49.484303 0 89.577425-40.093122 89.577425-89.577425L968.375309 143.757319C968.014109 94.273016 927.920988 54.179894 878.797884 54.179894zM891.801058 297.989418c0 7.223986-6.140388 13.364374-13.364374 13.364374l-154.232099 0c-7.223986 0-13.364374-6.140388-13.364374-13.364374L710.840212 143.757319c0-7.223986 6.140388-13.364374 13.364374-13.364374l154.232099 0c7.223986 0 13.364374 6.140388 13.364374 13.364374L891.801058 297.989418z"  ></path><path d="M673.997884 552.273721c19.865961 0 36.119929-15.892769 35.75873-36.119929 0-19.865961-15.892769-36.119929-36.119929-36.119929l-126.058554 0L547.578131 338.443739c0-19.865961-15.892769-36.119929-36.119929-35.75873-19.865961 0-36.119929 15.892769-36.119929 36.119929L475.338272 480.395062 96.440212 480.395062c-19.865961 0-36.119929 15.892769-36.119929 36.119929 0 19.865961 15.892769 36.119929 36.119929 36.119929l379.620459 0 0 169.04127c0 19.865961 15.892769 36.119929 36.119929 36.119929s36.119929-15.892769 36.119929-36.119929l0-169.04127L673.997884 552.634921z"  ></path><path d="M932.255379 552.273721c19.865961 0 36.119929-15.892769 35.75873-36.119929 0-19.865961-15.892769-36.119929-36.119929-36.119929l-79.825044 0c-19.865961 0-36.119929 15.892769-36.119929 36.119929 0 19.865961 15.892769 36.119929 36.119929 36.119929L932.255379 552.273721z"  ></path><path d="M511.8194 166.874074c19.865961 0 36.119929-15.892769 36.119929-36.119929L547.93933 88.855026c0-19.865961-15.892769-36.119929-36.119929-35.75873-19.865961 0-36.119929 15.892769-36.119929 36.119929l0 41.899118C476.06067 150.620106 491.953439 166.874074 511.8194 166.874074z"  ></path><path d="M511.8194 849.179541c-19.865961 0-36.119929 15.892769-36.119929 36.119929l0 41.899118c0 19.865961 15.892769 36.119929 36.119929 36.119929s36.119929-15.892769 36.119929-36.119929l0-42.260317C547.93933 865.07231 531.685362 849.179541 511.8194 849.179541z"  ></path><path d="M892.884656 871.573898c0 7.223986-6.140388 13.003175-13.003175 13.003175l-38.648325 0 0 75.129453 38.648325 0c48.761905 0 88.493827-39.731922 88.493827-88.493827l0-43.705115-75.129453 0L893.245855 871.573898z"  ></path><path d="M879.520282 631.015168l-152.426102 0c-48.761905 0-88.493827 39.731922-88.493827 88.493827l0 152.426102c0 48.761905 39.731922 88.493827 88.493827 88.493827l38.648325 0L765.742504 884.938272l-38.648325 0c-7.223986 0-13.003175-6.140388-13.003175-13.003175l0-152.426102c0-7.223986 6.140388-13.003175 13.003175-13.003175l152.426102 0c7.223986 0 13.003175 6.140388 13.003175 13.003175l0 33.591534L968.014109 753.100529l0-33.591534C968.014109 670.74709 928.282187 631.015168 879.520282 631.015168z"  ></path></symbol><symbol id="i-others" viewBox="0 0 1024 1024"><path d="M188.20055 382.300318c-70.198151 0-127.308206 57.110054-127.308206 127.311818 0 70.198151 57.110054 127.311818 127.308206 127.311818s127.308206-57.113667 127.308206-127.311818C315.508756 439.410372 258.398702 382.300318 188.20055 382.300318zM188.20055 441.801849c37.389402 0 67.806675 30.417272 67.806675 67.806675 0 37.38579-30.417272 67.803062-67.806675 67.803062s-67.806675-30.417272-67.806675-67.803062C120.393876 472.222733 150.811148 441.801849 188.20055 441.801849z"  ></path><path d="M840.01524 382.300318c-70.201764 0-127.311818 57.110054-127.311818 127.311818 0 70.198151 57.113667 127.311818 127.311818 127.311818s127.308206-57.113667 127.308206-127.311818C967.323446 439.410372 910.213392 382.300318 840.01524 382.300318zM840.01524 441.801849c37.389402 0 67.806675 30.417272 67.806675 67.806675 0 37.38579-30.417272 67.803062-67.806675 67.803062s-67.806675-30.417272-67.806675-67.803062S802.625838 441.801849 840.01524 441.801849z"  ></path><path d="M515.46439 382.300318c-70.198151 0-127.308206 57.110054-127.308206 127.311818 0 70.198151 57.110054 127.311818 127.308206 127.311818s127.308206-57.113667 127.308206-127.311818C642.772596 439.410372 585.658929 382.300318 515.46439 382.300318zM515.46439 441.801849c37.389402 0 67.806675 30.417272 67.806675 67.806675 0 37.38579-30.417272 67.803062-67.806675 67.803062s-67.806675-30.417272-67.806675-67.803062C447.657715 472.222733 478.074988 441.801849 515.46439 441.801849z"  ></path></symbol><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M512 958.017C266.08 958.017 65.983 757.952 65.983 512 65.983 266.08 266.08 65.983 512 65.983c245.952 0 446.017 200.065 446.017 446.017S757.952 958.017 512 958.017z m0-828.034c-210.656 0-382.017 171.36-382.017 382.017 0 210.625 171.36 382.017 382.017 382.017 210.625 0 382.017-171.36 382.017-382.017S722.625 129.983 512 129.983z" fill="" ></path><path d="M464 304c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48zM512 768c-17.665 0-32-14.303-32-32V448c0-17.665 14.335-32 32-32s32 14.335 32 32v288c0 17.697-14.335 32-32 32z" fill="" ></path></symbol><symbol id="i-color-error" viewBox="0 0 1024 1024"><path d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m269.397333 781.482667a41.813333 41.813333 0 0 1-58.88-0.085334L512 570.624 301.397333 781.482667a41.642667 41.642667 0 0 1-58.794666-58.88L452.864 512 242.517333 301.397333a41.642667 41.642667 0 0 1 58.88-58.794666L512 453.461333l210.517333-210.773333a41.642667 41.642667 0 0 1 58.965334 58.794667L571.050667 512l210.346666 210.602667a41.557333 41.557333 0 0 1 0 58.88z" fill="#F04134" ></path></symbol><symbol id="i-color-chengzi" viewBox="0 0 1024 1024"><path d="M339.6 237.7c-31 0-58.5-3.6-82-10.6-84.4-25.3-110.3-93.1-111.4-96-2.3-6.3-0.7-13.3 4-18 1.9-1.9 47-45.5 111.7-45.5 14 0 28 2.1 41.6 6.2C385.6 98.4 453.1 195.4 456 199.5c3.2 4.6 3.9 10.5 1.9 15.7-2 5.2-6.4 9.1-11.9 10.5-2 0.4-50.3 12-106.4 12zM183.3 129.8c3.1 5.4 7.6 12.3 14 19.8 18.2 21.4 41.8 36.5 70.1 45 20.3 6.1 44.5 9.1 72.2 9.1 27.7 0 53.8-3.1 72.1-6.1-23.3-28.3-68.8-76.5-117.9-91.2-10.5-3.1-21.2-4.7-31.9-4.7-35.6 0-64.5 17.6-78.6 28.1z" fill="#EF4848" ></path><path d="M518.4 354.1h-60.7c-10.9 0-19.8-8.9-19.8-19.8V130.1c0-10.9 8.9-19.8 19.8-19.8h60.7c10.9 0 19.8 8.9 19.8 19.8v204.1c0 11-8.8 19.9-19.8 19.9z m-46.4-34h32.3V144.4H472v175.7z" fill="#EF4848" ></path><path d="M179.6 588.3a356.1 344 0 1 0 712.2 0 356.1 344 0 1 0-712.2 0Z" fill="#FFDA00" ></path><path d="M488.3 956.2c-51.2 0-100.9-9.7-147.7-28.8-45.2-18.5-85.9-45-120.8-78.7-35-33.8-62.4-73.1-81.6-117-19.9-45.5-30-93.7-30-143.5s10.1-98.1 30-143.5c19.2-43.8 46.7-83.2 81.6-117 34.9-33.7 75.5-60.2 120.8-78.7 46.8-19.1 96.5-28.8 147.7-28.8 51.2 0 100.9 9.7 147.7 28.8 45.2 18.5 85.9 45 120.8 78.7 35 33.8 62.4 73.1 81.6 117 19.9 45.5 30 93.7 30 143.5s-10.1 98.1-30 143.5c-19.2 43.8-46.7 83.2-81.6 117-34.9 33.7-75.5 60.2-120.8 78.7-46.8 19.2-96.5 28.8-147.7 28.8z m0-687.9c-183.1 0-332.1 143.5-332.1 320s149 320 332.1 320c183.1 0 332.1-143.5 332.1-320s-149-320-332.1-320z" fill="#EF4848" ></path><path d="M223.6 576.4m-28.5 0a28.5 28.5 0 1 0 57 0 28.5 28.5 0 1 0-57 0Z" fill="#EF4848" ></path><path d="M318.3 570.6m-27.3 0a27.3 27.3 0 1 0 54.6 0 27.3 27.3 0 1 0-54.6 0Z" fill="#EF4848" ></path><path d="M276.2 466.2m-27.9 0a27.9 27.9 0 1 0 55.8 0 27.9 27.9 0 1 0-55.8 0Z" fill="#EF4848" ></path><path d="M278.9 703.7m-29.7 0a29.7 29.7 0 1 0 59.4 0 29.7 29.7 0 1 0-59.4 0Z" fill="#EF4848" ></path><path d="M342.5 771.1m-26.1 0a26.1 26.1 0 1 0 52.2 0 26.1 26.1 0 1 0-52.2 0Z" fill="#EF4848" ></path><path d="M359.6 663.1m-28.5 0a28.5 28.5 0 1 0 57 0 28.5 28.5 0 1 0-57 0Z" fill="#EF4848" ></path></symbol><symbol id="i-chengzi" viewBox="0 0 1024 1024"><path d="M630.85 83.23c-2.68 0.41-66.15 10.54-105 59.49-35.28 44.46-28.58 106.65-28.28 109.28l2.18 19 19.07-1.32c3-0.21 73.79-5.73 111.78-61.32 28-40.92 23.4-104.21 23.19-106.88L652.12 80z m-33.28 102.55c-16.11 23.57-42 34.67-60.27 39.78 1.23-16.82 5.72-40.13 19.89-58 16.28-20.52 39.37-32.12 56.51-38.34-1.36 18.26-5.53 41.05-16.13 56.56z"  ></path><path d="M515.37 949.83a327 327 0 1 0-231.23-95.77 324.86 324.86 0 0 0 231.23 95.77zM312.43 419.89a287 287 0 1 1-84.06 202.94 285.14 285.14 0 0 1 84.06-202.94z"  ></path><path d="M430.09 813.39a30.24 30.24 0 1 0-30.24-30.23 30.26 30.26 0 0 0 30.24 30.23z m0-40a9.77 9.77 0 1 1-9.77 9.77 9.78 9.78 0 0 1 9.77-9.77zM607.46 813.39a30.24 30.24 0 1 0-30.23-30.23 30.26 30.26 0 0 0 30.23 30.23z m0-40a9.77 9.77 0 1 1-9.76 9.77 9.78 9.78 0 0 1 9.76-9.77zM518.78 861.15a30.24 30.24 0 1 0-30.24-30.24 30.27 30.27 0 0 0 30.24 30.24z m0-40a9.77 9.77 0 1 1-9.77 9.76 9.77 9.77 0 0 1 9.77-9.76z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M834.7648 736.3584a5.632 5.632 0 1 0 11.264 0 5.632 5.632 0 0 0-11.264 0z m-124.16 128.1024a11.1616 11.1616 0 1 0 22.3744 0 11.1616 11.1616 0 0 0-22.3744 0z m-167.3216 65.8944a16.7936 16.7936 0 1 0 33.6384 0 16.7936 16.7936 0 0 0-33.6384 0zM363.1616 921.6a22.3744 22.3744 0 1 0 44.7488 0 22.3744 22.3744 0 0 0-44.7488 0z m-159.744-82.0224a28.0064 28.0064 0 1 0 55.9616 0 28.0064 28.0064 0 0 0-56.0128 0zM92.672 700.16a33.6384 33.6384 0 1 0 67.2256 0 33.6384 33.6384 0 0 0-67.2256 0zM51.2 528.9984a39.168 39.168 0 1 0 78.336 0 39.168 39.168 0 0 0-78.336 0z m34.1504-170.0864a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 0 0-89.6 0zM187.904 221.7984a50.432 50.432 0 1 0 100.864 0 50.432 50.432 0 0 0-100.864 0zM338.432 143.36a55.9616 55.9616 0 1 0 111.9232 0 55.9616 55.9616 0 0 0-111.9744 0z m169.0112-4.9152a61.5936 61.5936 0 1 0 123.2384 0 61.5936 61.5936 0 0 0-123.2384 0z m154.7776 69.632a67.1744 67.1744 0 1 0 134.3488 0 67.1744 67.1744 0 0 0-134.3488 0z m110.0288 130.816a72.8064 72.8064 0 1 0 145.5616 0 72.8064 72.8064 0 0 0-145.5616 0z m43.7248 169.472a78.3872 78.3872 0 1 0 156.8256 0 78.3872 78.3872 0 0 0-156.8256 0z" fill="" ></path></symbol><symbol id="i-upload" viewBox="0 0 1024 1024"><path d="M576.112 98.152l-32.164-34.284-31.849 34.284-0.055 605.606h64.013z"  ></path><path d="M512.112 98.228L301.011 308.926l45.19 45.138 211.101-210.699z"  ></path><path d="M530.879 143.366l207.905 207.502 45.19-45.138L576.068 98.228zM192.037 831.721H897.5v63.677H192.037zM128.025 640.277h64.012v255.675h-64.012z"  ></path><path d="M895.96 639.965h64.072v255.426H895.96z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M663.25 512.99L281.17 895.064c-14.761 14.79-14.761 38.778 0 53.586 14.813 14.789 38.8 14.789 53.609 0l405.805-405.852a35.131 35.131 0 0 0 3.206-2.843c14.789-14.809 14.789-38.796 0-53.586L335.564 78.14c-14.809-14.808-38.796-14.808-53.585 0-14.786 14.767-14.786 38.754 0 53.563L663.251 512.99z m0 0"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M512.093 662.76L130.805 281.489c-14.808-14.786-38.796-14.786-53.563 0-14.807 14.789-14.807 38.776 0 53.584L485.472 743.3c14.792 14.789 38.778 14.789 53.586 0a35.114 35.114 0 0 0 2.844-3.206l405.851-405.806c14.79-14.809 14.79-38.796 0-53.608-14.808-14.763-38.796-14.763-53.585 0L512.093 662.76z m0 0"  ></path></symbol><symbol id="i-color-success" viewBox="0 0 1024 1024"><path d="M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m-50.432-326.101333L310.613333 504.32a32 32 0 0 0-45.226666 45.226667l174.72 174.762666a32.341333 32.341333 0 0 0 0.341333 0.341334l0.256 0.213333a32 32 0 0 0 50.048-6.144l337.450667-379.605333a32 32 0 1 0-47.872-42.496l-318.762667 358.613333z" fill="#52C41A" ></path></symbol><symbol id="i-color-warning" viewBox="0 0 1024 1024"><path d="M554.112 163.392a64 64 0 0 0-114.432 0l-304.896 609.792A64 64 0 0 0 192 865.792h609.792a64 64 0 0 0 57.216-92.608L554.112 163.392z m57.28-28.608l304.896 609.792a128 128 0 0 1-114.56 185.216H192a128 128 0 0 1-114.496-185.216l304.896-609.792a128 128 0 0 1 228.992 0z" fill="#EFAC1C" ></path><path d="M512 768m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#EFAC1C" ></path><path d="M512.128 287.808a57.92 57.92 0 0 1 57.664 62.72L545.408 640a34.816 34.816 0 0 1-34.688 31.872A34.56 34.56 0 0 1 476.16 640l-22.272-289.28a58.304 58.304 0 0 1 58.24-62.848z" fill="#EFAC1C" ></path></symbol></svg>',
      l = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");

  if (l && !s.__iconfont__svg__cssinject__) {
    s.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (c) {
      console && console.log(c);
    }
  }

  !function (c) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(c, 0);else {
        var l = function l() {
          document.removeEventListener("DOMContentLoaded", l, !1), c();
        };

        document.addEventListener("DOMContentLoaded", l, !1);
      }
    } else document.attachEvent && (t = c, h = s.document, p = !1, (_i = function i() {
      try {
        h.documentElement.doScroll("left");
      } catch (c) {
        return void setTimeout(_i, 50);
      }

      a();
    })(), h.onreadystatechange = function () {
      "complete" == h.readyState && (h.onreadystatechange = null, a());
    });

    function a() {
      p || (p = !0, t());
    }

    var t, h, p, _i;
  }(function () {
    var c, l, a, t, h, p;
    (c = document.createElement("div")).innerHTML = i, i = null, (l = c.getElementsByTagName("svg")[0]) && (l.setAttribute("aria-hidden", "true"), l.style.position = "absolute", l.style.width = 0, l.style.height = 0, l.style.overflow = "hidden", a = l, (t = document.body).firstChild ? (h = a, (p = t.firstChild).parentNode.insertBefore(h, p)) : t.appendChild(a));
  });
}(window);

/***/ }),

/***/ "d4d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var has = __webpack_require__("03b3");
var cof = __webpack_require__("94ac");
var inheritIfRequired = __webpack_require__("44de");
var toPrimitive = __webpack_require__("5325");
var fails = __webpack_require__("b6f1");
var gOPN = __webpack_require__("a891").f;
var gOPD = __webpack_require__("acb9").f;
var dP = __webpack_require__("ddf7").f;
var $trim = __webpack_require__("539d").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("a7b8")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("dad2") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("e5ef")(global, NUMBER, $Number);
}


/***/ }),

/***/ "dac5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("644a");
var step = __webpack_require__("e650");
var Iterators = __webpack_require__("14fc");
var toIObject = __webpack_require__("3a68");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("7656")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "dad2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("b6f1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "daf2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("adbd")('native-function-to-string', Function.toString);


/***/ }),

/***/ "db4b":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "ddf7":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var toPrimitive = __webpack_require__("5325");
var dP = Object.defineProperty;

exports.f = __webpack_require__("dad2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "df99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("b2f5");
var context = __webpack_require__("91a1");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("984f")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "dfab":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("adbd")('keys');
var uid = __webpack_require__("9d01");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "e084":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e0e4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_head_vue_vue_type_style_index_0_id_3ec66dca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("172a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_head_vue_vue_type_style_index_0_id_3ec66dca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_head_vue_vue_type_style_index_0_id_3ec66dca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_tab_head_vue_vue_type_style_index_0_id_3ec66dca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e256":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("197e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e3e0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var document = __webpack_require__("3754").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "e5ef":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var has = __webpack_require__("03b3");
var SRC = __webpack_require__("9d01")('src');
var $toString = __webpack_require__("daf2");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("a4cc").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "e650":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "e9e8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ee3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_fe234678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bb8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_fe234678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_fe234678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_fe234678_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f01a":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "f301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("b2f5");
var $includes = __webpack_require__("9f58")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("644a")('includes');


/***/ }),

/***/ "f425":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("a013");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "f763":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("dac5");
var getKeys = __webpack_require__("cfc7");
var redefine = __webpack_require__("e5ef");
var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var wks = __webpack_require__("8b37");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "f7c1":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "fb6d":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("03b3");
var toIObject = __webpack_require__("3a68");
var arrayIndexOf = __webpack_require__("9f58")(false);
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "fbe7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=chengzi-ui.umd.js.map