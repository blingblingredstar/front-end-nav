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
})({"d6sW":[function(require,module,exports) {
var getState = function getState() {
  var defaultState = [{
    logo: {
      type: 'String',
      content: '哔'
    },
    url: 'https://www.bilibili.com/',
    name: '哔哩哔哩'
  }, {
    logo: {
      type: 'String',
      content: '知'
    },
    url: 'https://www.zhihu.com/',
    name: '知乎'
  }, {
    logo: {
      type: 'String',
      content: 'B'
    },
    url: 'https://www.bilibili.com/',
    name: 'bilibili.com'
  }, {
    logo: {
      type: 'String',
      content: 'B'
    },
    url: 'https://www.bilibili.com/',
    name: 'bilibili.com'
  }, {
    logo: {
      type: 'String',
      content: 'B'
    },
    url: 'https://www.bilibili.com/',
    name: 'bilibili.com'
  }];
  var state = JSON.parse(localStorage.getItem('state'));

  if (Array.isArray(state)) {
    return state;
  } else {
    return defaultState;
  }
};

var setState = function setState(newState) {
  localStorage.setItem('state', JSON.stringify(newState));
  render(newState);
};

var render = function render(state) {
  $('.site-list').find('li:not(.site-add)').remove();
  var $siteAdd = $('.site-add');
  state.forEach(function (item, index) {
    var $li = $("<li class=\"site-item\" data-index=\"".concat(index, "\">\n        <a href=\"").concat(item.url, "\">\n          <div class=\"site-logo\">\n            ").concat(item.logo.type === 'String' ? item.logo.content : "<img src=\"".concat(item.logo.content, "\" alt=\"").concat(item.name, "\" class=\"site-logo-img\"/>"), "\n          </div>\n          <div class=\"site-name\">").concat(item.name, "</div>\n        </a>\n        <div class=\"site-item-close\">\n          <svg\n            t=\"1572014249855\"\n            class=\"icon\"\n            viewBox=\"0 0 1024 1024\"\n            version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            p-id=\"2878\"\n       \n          >\n            <path\n              d=\"M515.236 491.069l-136.96-136.96a17.092 17.092 0 1 0-24.18 24.155l136.961 136.972-136.96 136.972a17.092 17.092 0 1 0 24.167 24.167l136.972-136.96 136.972 136.96a17.092 17.092 0 1 0 24.167-24.156l-136.96-136.983 136.96-136.96a17.092 17.092 0 1 0-24.167-24.168l-136.96 136.96z\"\n              p-id=\"2879\"\n            ></path>\n          </svg>\n        </div>\n      </li>"));
    $li.insertBefore($siteAdd);
  });
  $('.site-item-close').on('click', deleteSite);
};

var showModal = function showModal() {
  // 锁定页面位置，禁止滚动
  var tops = $(document).scrollTop();
  $(document).bind('scroll', function () {
    $(document).scrollTop(tops);
  }); //

  $('.modal-form');
  $('.modal').css('margin-top', window.pageYOffset + 'px').removeClass('closed');
};

var closeModal = function closeModal() {
  $(document).unbind('scroll');
  $('.modal').addClass('closed');
};

var addSite = function addSite() {
  showModal();
  $('.modal-btn').on('click', function (e) {
    e.stopPropagation();
    var url = $('.modal-input-url').val();
    var name = $('.modal-input-name').val();
    var newItem = {
      logo: {
        type: 'String',
        content: name[0].toLocaleUpperCase()
      },
      url: url,
      name: name
    };
    var state = getState();
    var newState = state.concat([newItem]);
    setState(newState);
    $('.modal-input-url').val('');
    $('.modal-input-name').val('');
    closeModal();
  });
  $('.modal-close').on('click', closeModal);
};

function deleteSite() {
  var index = $(this).parent().data('index');
  var state = getState();
  state.splice(index, 1);
  setState(state);
}

$('.site-add').on('click', addSite);
render(getState());
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.9cd5c7af.js.map