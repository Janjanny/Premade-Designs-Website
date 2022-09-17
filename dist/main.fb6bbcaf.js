// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\T Shirt Design Website\\src\\assets\\Backgrounds\\bg-1.png":[["bg-1.9af5762f.png","assets/Backgrounds/bg-1.png"],"assets/Backgrounds/bg-1.png"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\T Shirt Design Website\\src\\assets\\Backgrounds\\bg-2.png":[["bg-2.0d8c0843.png","assets/Backgrounds/bg-2.png"],"assets/Backgrounds/bg-2.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/carousel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = carousel;

function carousel() {
  var root = document.documentElement;
  var elementDisplay = 7;
  var content = document.querySelector(".carousel__list");

  for (var i = 0; i < elementDisplay; i++) {
    content.appendChild(content.children[i].cloneNode(true));
  }
}
},{}],"js/carouselDesign.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = carouselDesign;

function carouselDesign() {
  var track = document.querySelector('.carousel2__container__track');
  var slides = Array.from(track.children);
  var nextButton = document.querySelector('.carousel2__button--right');
  var prevButton = document.querySelector('.carousel2__button--left');
  var dotsNav = document.querySelector('.carousel2__nav');
  var dots = Array.from(dotsNav.children); //get the size of the slide

  var slideSize = slides[0].getBoundingClientRect(); //get the width

  var slideWidth = slideSize.width; //get the height

  var slideHeight = slideSize.height; //arrange the slides next to one another
  // slides[0].style.left = `${slideWidth * 0}px`;
  // slides[1].style.left = `${slideWidth * 1}px`;

  var setSlidePosition = function setSlidePosition(slide, index) {
    slide.style.left = "".concat(slideWidth * index, "px");
  }; //iterate the slides and assign the function


  slides.forEach(setSlidePosition); //move slide function

  var moveToSlide = function moveToSlide(track, currentSlide, targetSlide) {
    //move to next slide
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; //update the class

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }; //update the dots


  var updateDots = function updateDots(currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  }; //hiding the arrow buttons


  var hideShowArrows = function hideShowArrows(slides, nextButton, prevButton, targetIndex) {
    //for hiding the button
    if (targetIndex === 0) {
      prevButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove('is-hidden');
      nextButton.classList.add('is-hidden');
    } else {
      nextButton.classList.add('is-hidden');
      prevButton.classList.add('is-hidden');
    }
  }; //when click left, move slides to the left


  prevButton.addEventListener('click', function (e) {
    var currentSlide = track.querySelector('.current-slide');
    var prevSlide = currentSlide.previousElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide');
    var prevDot = currentDot.previousElementSibling;
    var prevIndex = slides.findIndex(function (slide) {
      return slide === prevSlide;
    });
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot); //arrow functions

    hideShowArrows(slides, nextButton, prevButton, prevIndex);
  }); // when click right, move slides to the right

  nextButton.addEventListener('click', function (e) {
    //keep track of the slide
    var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide');
    var nextDot = currentDot.nextElementSibling;
    var nextIndex = slides.findIndex(function (slide) {
      return slide === nextSlide;
    }); //pass args to move function

    moveToSlide(track, currentSlide, nextSlide); //update the dots

    updateDots(currentDot, nextDot); //arrow functions

    hideShowArrows(slides, nextButton, prevButton, nextIndex);
  }); //update the nav indicators

  dotsNav.addEventListener('click', function (e) {
    //what indicator was clicked on
    //focus only the buttons
    var targetDot = e.target.closest('button'); //check if null = stop the function

    if (!targetDot) return;
    var currentSlide = track.querySelector('.current-slide');
    var currentDot = dotsNav.querySelector('.current-slide'); //return the index number

    var targetIndex = dots.findIndex(function (dot) {
      return dot === targetDot;
    }); // console.log(targetIndex);

    var targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot); //arrow functions

    hideShowArrows(slides, nextButton, prevButton, targetIndex);
  });
}
},{}],"js/carouselDesignAlt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = carouselDesignAlt;

function carouselDesignAlt() {
  var track = document.querySelector('.carousel3__container__track');
  var slides = Array.from(track.children);
  var nextButton = document.querySelector('.carousel3__button--right');
  var prevButton = document.querySelector('.carousel3__button--left');
  var dotsNav = document.querySelector('.carousel3__nav');
  var dots = Array.from(dotsNav.children); //get the size of the slide

  var slideSize = slides[0].getBoundingClientRect(); //get the width

  var slideWidth = slideSize.width; //get the height

  var slideHeight = slideSize.height; //arrange the slides next to one another
  // slides[0].style.left = `${slideWidth * 0}px`;
  // slides[1].style.left = `${slideWidth * 1}px`;

  var setSlidePosition = function setSlidePosition(slide, index) {
    slide.style.left = "".concat(slideWidth * index, "px");
  }; //iterate the slides and assign the function


  slides.forEach(setSlidePosition); //move slide function

  var moveToSlide = function moveToSlide(track, currentSlide, targetSlide) {
    //move to next slide
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; //update the class

    currentSlide.classList.remove('current-slide2');
    targetSlide.classList.add('current-slide2');
  }; //update the dots


  var updateDots = function updateDots(currentDot, targetDot) {
    currentDot.classList.remove('current-slide2');
    targetDot.classList.add('current-slide2');
  }; //hiding the arrow buttons


  var hideShowArrows = function hideShowArrows(slides, nextButton, prevButton, targetIndex) {
    //for hiding the button
    if (targetIndex === 0) {
      prevButton.classList.add('is-hidden2');
      nextButton.classList.remove('is-hidden2');
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove('is-hidden2');
      nextButton.classList.add('is-hidden2');
    } else {
      nextButton.classList.add('is-hidden2');
      prevButton.classList.add('is-hidden2');
    }
  }; //when click left, move slides to the left


  prevButton.addEventListener('click', function (e) {
    var currentSlide = track.querySelector('.current-slide2');
    var prevSlide = currentSlide.previousElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide2');
    var prevDot = currentDot.previousElementSibling;
    var prevIndex = slides.findIndex(function (slide) {
      return slide === prevSlide;
    });
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot); //arrow functions

    hideShowArrows(slides, nextButton, prevButton, prevIndex);
  }); // when click right, move slides to the right

  nextButton.addEventListener('click', function (e) {
    //keep track of the slide
    var currentSlide = track.querySelector('.current-slide2');
    var nextSlide = currentSlide.nextElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide2');
    var nextDot = currentDot.nextElementSibling;
    var nextIndex = slides.findIndex(function (slide) {
      return slide === nextSlide;
    }); //pass args to move function

    moveToSlide(track, currentSlide, nextSlide); //update the dots

    updateDots(currentDot, nextDot); //arrow functions

    hideShowArrows(slides, nextButton, prevButton, nextIndex);
  }); //update the nav indicators

  dotsNav.addEventListener('click', function (e) {
    //what indicator was clicked on
    //focus only the buttons
    var targetDot = e.target.closest('button'); //check if null = stop the function

    if (!targetDot) return;
    var currentSlide = track.querySelector('.current-slide2');
    var currentDot = dotsNav.querySelector('.current-slide2'); //return the index number

    var targetIndex = dots.findIndex(function (dot) {
      return dot === targetDot;
    }); // console.log(targetIndex);

    var targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot); //arrow functions

    hideShowArrows(slides, nextButton, prevButton, targetIndex);
  });
}
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./../scss/main.scss");

var _carousel = _interopRequireDefault(require("./carousel"));

var _carouselDesign = _interopRequireDefault(require("./carouselDesign"));

var _carouselDesignAlt = _interopRequireDefault(require("./carouselDesignAlt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _carousel.default)();
(0, _carouselDesign.default)();
(0, _carouselDesignAlt.default)();
},{"./../scss/main.scss":"scss/main.scss","./carousel":"js/carousel.js","./carouselDesign":"js/carouselDesign.js","./carouselDesignAlt":"js/carouselDesignAlt.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54384" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map