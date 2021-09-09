/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/burger/burger.js":
/*!*************************************!*\
  !*** ./components/burger/burger.js ***!
  \*************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Burger = /*#__PURE__*/function () {
  function Burger(_ref) {
    var btnMenu = _ref.btnMenu,
        button = _ref.button,
        close = _ref.close,
        navList = _ref.navList,
        headerButtons = _ref.headerButtons;

    _classCallCheck(this, Burger);

    this.btnMenu = btnMenu;
    this.button = button;
    this.close = close;
    this.navList = navList;
    this.headerButtons = headerButtons;
    this.toggleMenu();
    this.hideMenu();
  }

  _createClass(Burger, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this = this;

      this.button.addEventListener("click", function (e) {
        e.stopPropagation();

        _this.btnMenu.forEach(function (item) {
          item.classList.toggle("active");
        });
      });
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      var close = this.close;
      var btnMenu = this.button;
      var menu = this.navList;
      var btns = this.headerButtons;
      document.addEventListener("click", function (e) {
        var target = e.target;
        var its_menu = target == menu || menu.contains(target);
        var its_btnMenu = target == btnMenu;
        var menu_is_active = menu.classList.contains("active");

        if (!its_menu && !its_btnMenu && menu_is_active) {
          close.classList.remove("active");
          menu.classList.remove("active");
          btns.classList.remove("active");
        }
      });
    }
  }]);

  return Burger;
}();

var burger = new Burger({
  btnMenu: document.querySelectorAll(".nav__list, .burger span, .header-btns"),
  button: document.querySelector(".burger"),
  close: document.querySelector(".burger span"),
  navList: document.querySelector(".nav__list"),
  headerButtons: document.querySelector(".header-btns")
});

/***/ }),

/***/ "./components/calendare/calendar.js":
/*!******************************************!*\
  !*** ./components/calendare/calendar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
$(function () {
  $(".dropdown-date__range_from").datepicker({
    minDate: new Date(),
    range: true,
    offset: 10,
    multipleDatesSeparator: "-",
    classes: "dropdown-date",
    clearButton: true,
    prevHtml: "<div class=\"arrow_prew\"></div>",
    nextHtml: "<div class=\"arrow_next\"></div>",
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>"
    },
    language: {
      today: "Применить"
    },
    onRenderCell: function onRenderCell(date, cellType) {
      if (cellType == "day") {
        return {
          html: "".concat(date.getDate(), "<div class=\"bg-selected\"><span></span></div>")
        };
      }
    },
    onSelect: function onSelect(fd, d, picker) {
      $(".dropdown-date__range_from").val(fd.split("-")[0]);
      $(".dropdown-date__range_to").val(fd.split("-")[1]);
    }
  });
  $(".datepicker").find(".datepicker--button").click(function () {
    if (this.dataset.action === "today") {
      $(this).parents(".dropdown-date").hide();
    }
  });
  $(".dropdown-date__range_to").click(function () {
    $(".datepicker").show();
    $(this).parents(".dropdown-date").find(".dropdown-date__range_from").data("datepicker").show();
  });
  $(".dropdown-date__range_from").click(function () {
    $(".datepicker").show();
  });
  $('.datepicker-here').datepicker({
    minDate: new Date(),
    offset: 10,
    multipleDatesSeparator: "-",
    classes: "dropdown-date",
    clearButton: true,
    prevHtml: "<div class=\"arrow_prew\"></div>",
    nextHtml: "<div class=\"arrow_next\"></div>",
    todayButton: true,
    navTitles: {
      days: "<h2>MM yyyy</h2>"
    },
    language: {
      today: "Применить"
    },
    onRenderCell: function onRenderCell(date, cellType) {
      if (cellType == "day") {
        return {
          html: "".concat(date.getDate(), "<div class=\"bg-selected\"><span></span></div>")
        };
      }
    }
  });
  $(".datepicker").find(".datepicker--button").click(function () {
    if (this.dataset.action === "today") {
      $(this).parents(".dropdown-date").hide();
    }
  });
  $(".datepicker-here").click(function () {
    $(".datepicker").show();
  });
  $('.datepicker--cells').click(function () {
    $("[data-action=clear]").addClass('open');
  });
  $("[data-action=clear]").click(function () {
    $("[data-action=clear]").removeClass('open');
  });
}());

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./components/dropdown/dropdown.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/quantity */ "./js/quantity.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Dropdown = /*#__PURE__*/function () {
  function Dropdown(_ref) {
    var drop = _ref.drop,
        dropDownBtn = _ref.dropDownBtn,
        dropDownList = _ref.dropDownList;

    _classCallCheck(this, Dropdown);

    this.drop = drop;
    this.dropDownBtn = dropDownBtn;
    this.dropDownList = dropDownList;
    this.addEventListeners();
    this.show();
  }

  _createClass(Dropdown, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      if (this.dropDownBtn) {
        this.dropDownBtn.addEventListener("click", this.open.bind(this));
      }

      document.addEventListener("click", this.close.bind(this));
    }
  }, {
    key: "show",
    value: function show() {
      function quantity(n, text_forms) {
        text_forms = text_forms.split(",");
        n = Math.abs(n) % 100;
        var n1 = n % 10;

        if (n > 10 && n < 20) {
          return text_forms[2];
        }

        if (n1 > 1 && n1 < 5) {
          return text_forms[1];
        }

        if (n1 == 1) {
          return text_forms[0];
        }

        return text_forms[2];
      }

      this.drop.forEach(function (dropDownWrapper) {
        var dropDownList = dropDownWrapper.querySelector(".dropdown__list");
        var dropDownListItems = dropDownList.querySelectorAll(".dropdown__list-item");
        dropDownListItems.forEach(function (listItem) {
          listItem.addEventListener("click", function (e) {
            e.stopPropagation();

            var printValue = function printValue(obj) {
              var list = _toConsumableArray(obj.querySelectorAll(".counter__value"));

              list = list.map(function (el) {
                var word = quantity(el.value, el.dataset.value);
                return "".concat(el.value, " ").concat(word);
              });
              obj.querySelector(".dropdown__input").value = list.join(", ");
            };

            printValue(dropDownWrapper);
          });
        });
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.dropDownList.classList.toggle("dropdown__list_active");
      this.dropDownBtn.classList.toggle("dropdown__button_active");
    }
  }, {
    key: "close",
    value: function close(e) {
      if (e.target !== this.dropDownBtn && this.dropDownList) {
        this.dropDownBtn.classList.remove("dropdown__button_active");
        this.dropDownList.classList.remove("dropdown__list_active");
      }
    }
  }]);

  return Dropdown;
}();

var dropdown = new Dropdown({
  drop: document.querySelectorAll(".dropdown"),
  dropDownBtn: document.querySelector('[data-btn="btn"]'),
  dropDownList: document.querySelector('[data-list="list"]')
});

/***/ }),

/***/ "./components/guest-dropdown/drop-guest.js":
/*!*************************************************!*\
  !*** ./components/guest-dropdown/drop-guest.js ***!
  \*************************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownGuest = /*#__PURE__*/function () {
  function DropdownGuest(buttons) {
    _classCallCheck(this, DropdownGuest);

    this.buttons = buttons;
    this.open();
  }

  _createClass(DropdownGuest, [{
    key: "open",
    value: function open() {
      this.buttons.forEach(function (el) {
        var dropDownBtn = el.querySelector(".dropdown__button");
        var dropDownList = el.querySelector(".dropdown__list");
        var btnApply = el.querySelector(".apply");
        var btnClear = el.querySelector(".clear");
        dropDownBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          dropDownList.classList.toggle("dropdown__list_active");
          this.classList.remove("dropdown__button_active");
        });
        btnApply.addEventListener("click", function (e) {
          dropDownList.classList.remove("dropdown__list_active");
        });
        var btnMenu = document.querySelector(".dropdown__button");
        var menu = el.querySelector(".guest__list");
        document.addEventListener("click", function (e) {
          var target = e.target;
          var its_menu = target == menu || menu.contains(target);
          var its_btnMenu = target == btnMenu;
          var menu_is_active = menu.classList.contains("dropdown__list_active");

          if (!its_menu && !its_btnMenu && menu_is_active) {
            dropDownList.classList.remove("dropdown__list_active");
          }
        });
      });
    }
  }]);

  return DropdownGuest;
}();

var dropdown = new DropdownGuest(document.querySelectorAll(".dropdown-guest"));

/***/ }),

/***/ "./components/guest-dropdown/guest-counter.js":
/*!****************************************************!*\
  !*** ./components/guest-dropdown/guest-counter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/quantity */ "./js/quantity.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GuestCounter = /*#__PURE__*/function () {
  function GuestCounter(_ref) {
    var dropdownguest = _ref.dropdownguest,
        btnsGuest = _ref.btnsGuest,
        btnClear = _ref.btnClear,
        btnApply = _ref.btnApply,
        input = _ref.input,
        inputs = _ref.inputs,
        list = _ref.list;

    _classCallCheck(this, GuestCounter);

    this.dropdownguest = dropdownguest;
    this.btnsGuest = btnsGuest;
    this.btnClear = btnClear;
    this.btnApply = btnApply;
    this.input = input;
    this.inputs = inputs;
    this.list = list;
    this.counter();
  }

  _createClass(GuestCounter, [{
    key: "counter",
    value: function counter() {
      var dropdownguest = this.dropdownguest;
      var btnClear = this.btnClear;
      var btnApply = this.btnApply;
      var input = this.input;
      var inputs = this.inputs;
      var list = this.list;
      var clear = this.clear;
      var showValue = this.showValue;

      if (dropdownguest) {
        btnClear.style.opacity = "0";
        this.btnsGuest.forEach(function (btn) {
          btn.addEventListener("click", function () {
            var direction = this.dataset.direction;
            var inpGuest = this.parentElement.querySelector(".guest__counter");
            var currentValue = +inpGuest.value;
            var newValue;

            if (direction === "minus") {
              newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            } else if (direction === "plus") {
              newValue = currentValue + 1 < 9 ? currentValue + 1 : 9;
            }

            inpGuest.value = newValue;
            var sum = 0;
            inputs.forEach(function (i) {
              sum += parseInt(i.value);
            });
            btnClear.addEventListener("click", function () {
              inpGuest.value = 0;
              input.value = "Сколько гостей";
              sum = 0;
              btnClear.style.opacity = "0";
            });
            clear(sum, btnClear);
            btnApply.addEventListener("click", function (e) {
              input.value = sum + " " + (0,_js_quantity__WEBPACK_IMPORTED_MODULE_0__.default)(sum, list.dataset.value);
              showValue(dropdownguest, input);
            });
          });
        });
      }
    }
  }, {
    key: "showValue",
    value: function showValue(obj, input) {
      var list = _toConsumableArray(obj.querySelectorAll(".guest__counter_baby"));

      list = list.map(function (el) {
        var word = (0,_js_quantity__WEBPACK_IMPORTED_MODULE_0__.default)(el.value, el.dataset.value);
        return "".concat(el.value, " ").concat(word);
      });

      if (list > "1") {
        obj.querySelector(".guest__input").value = input.value + ", " + list.join(", ");
      }
    }
  }, {
    key: "clear",
    value: function clear(sum, btnClear) {
      if (sum == 0 || sum < 1) {
        btnClear.style.opacity = "0";
      } else {
        btnClear.style.opacity = "1";
      }
    }
  }]);

  return GuestCounter;
}();

var guestCounter = new GuestCounter({
  dropdownguest: document.querySelector(".dropdown-guest"),
  btnsGuest: document.querySelectorAll(".counter__btn-guest"),
  btnClear: document.querySelector(".clear"),
  btnApply: document.querySelector(".apply"),
  input: document.querySelector(".dropdown__input-guest"),
  inputs: document.querySelectorAll(".guest__counter"),
  list: document.querySelector(".dropdown__list-item")
});

/***/ }),

/***/ "./components/like/like.js":
/*!*********************************!*\
  !*** ./components/like/like.js ***!
  \*********************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Like = /*#__PURE__*/function () {
  function Like(btnLikes) {
    _classCallCheck(this, Like);

    this.btnLikes = btnLikes;
    this.counter();
  }

  _createClass(Like, [{
    key: "counter",
    value: function counter() {
      this.btnLikes.forEach(function (item) {
        var like = true,
            likeCount = item.querySelector('.like-elements__counter').textContent;
        item.addEventListener('click', function () {
          this.classList.toggle('like-elements__like_active');
          likeCount = like ? ++likeCount : --likeCount;
          like = !like;
          item.querySelector('.like-elements__counter').textContent = likeCount;
        });
      });
    }
  }]);

  return Like;
}();

var like = new Like(document.querySelectorAll('.like-elements__like'));

/***/ }),

/***/ "./components/list-checkbox/list-checkbox.js":
/*!***************************************************!*\
  !*** ./components/list-checkbox/list-checkbox.js ***!
  \***************************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListCheckbox = /*#__PURE__*/function () {
  function ListCheckbox(_ref) {
    var checkList = _ref.checkList,
        checkTitle = _ref.checkTitle;

    _classCallCheck(this, ListCheckbox);

    this.checkList = checkList;
    this.checkTitle = checkTitle;
    this.check();
  }

  _createClass(ListCheckbox, [{
    key: "check",
    value: function check() {
      var _this = this;

      if (this.checkList) {
        this.checkTitle.addEventListener('click', function () {
          _this.checkTitle.classList.toggle('list-checkbox__title_active');

          _this.checkList.classList.toggle('list-checkbox__list_active');
        });
        var checkList = this.checkList;
        var checkTitle = this.checkTitle;
        document.addEventListener('click', function (e) {
          var target = e.target;
          var its_menu = target == checkList || checkList.contains(target);
          var its_btnMenu = target == checkTitle;
          var menu_is_active = checkList.classList.contains('list-checkbox__list_active');

          if (!its_menu && !its_btnMenu && menu_is_active) {
            checkTitle.classList.remove('list-checkbox__title_active');
            checkList.classList.remove('list-checkbox__list_active');
          }
        });
      }
    }
  }]);

  return ListCheckbox;
}();

var listCheckbox = new ListCheckbox({
  checkList: document.querySelector('.list-checkbox__list'),
  checkTitle: document.querySelector('.list-checkbox__title')
});

/***/ }),

/***/ "./components/range/range-slider.js":
/*!******************************************!*\
  !*** ./components/range/range-slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "../node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wnumb */ "../node_modules/wnumb/wNumb.js");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_1__);



(function () {
  var rangeElements = document.querySelector('.range-elements');

  if (rangeElements) {
    var keypressSlider = document.querySelector(".slider-keypress");
    var input0 = document.querySelector(".input-with-keypress-0");
    var input1 = document.querySelector(".input-with-keypress-1");
    var inputs = [input0, input1];
    nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(keypressSlider, {
      start: [5000, 10000],
      connect: true,
      step: 1000,
      range: {
        min: [0],
        max: [15000]
      },
      format: wnumb__WEBPACK_IMPORTED_MODULE_1___default()({
        decimals: 0,
        thousand: ' ',
        suffix: '₽'
      })
    });
    keypressSlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = values[handle];

      function setSliderHandle(i, value) {
        var r = [null, null];
        r[i] = value;
        keypressSlider.noUiSlider.set(r);
      }

      inputs.forEach(function (input, handle) {
        input.addEventListener("change", function () {
          setSliderHandle(handle, this.value);
        });
        input.addEventListener("keydown", function (e) {
          var values = keypressSlider.noUiSlider.get();
          var value = Number(values[handle]);
          var steps = keypressSlider.noUiSlider.steps();
          var step = steps[handle];
          var position;

          switch (e.which) {
            case 13:
              setSliderHandle(handle, this.value);
              break;

            case 38:
              position = step[1];

              if (position === false) {
                position = 1;
              }

              if (position !== null) {
                setSliderHandle(handle, value + position);
              }

              break;

            case 40:
              position = step[0];

              if (position === false) {
                position = 1;
              }

              if (position !== null) {
                setSliderHandle(handle, value - position);
              }

              break;
          }
        });
      });
    });
  }
})();

/***/ }),

/***/ "./components/rating/rating.js":
/*!*************************************!*\
  !*** ./components/rating/rating.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
$(function () {
  $('.rate-elements__rating').barrating({
    theme: 'css-stars'
  });
  $('.rate-elements__rating').barrating('set', 5);
  $('.rate-elements__rating2').barrating({
    theme: 'css-stars'
  });
  $('.rate-elements__rating2').barrating('set', 4);
});

/***/ }),

/***/ "./components/room/rooms.js":
/*!**********************************!*\
  !*** ./components/room/rooms.js ***!
  \**********************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rooms = /*#__PURE__*/function () {
  function Rooms(buttons) {
    _classCallCheck(this, Rooms);

    this.buttons = buttons;
    this.input = 0;
    this.counter();
  }

  _createClass(Rooms, [{
    key: "counter",
    value: function counter() {
      this.buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var direction = this.dataset.direction;
          this.input = this.parentElement.querySelector('.counter__value');
          var currentValue = +this.input.value;

          if (direction === 'minus') {
            this.input.value = currentValue - 1 > 0 ? currentValue - 1 : 0;
          } else if (direction === 'plus') {
            this.input.value = currentValue + 1 < 9 ? currentValue + 1 : 9;
          }
        });
      });
    }
  }]);

  return Rooms;
}();

var counter = new Rooms(document.querySelectorAll('.counter__btn'));

/***/ }),

/***/ "./components/submenu/submenu.js":
/*!***************************************!*\
  !*** ./components/submenu/submenu.js ***!
  \***************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SubMenu = /*#__PURE__*/function () {
  function SubMenu(navLink) {
    _classCallCheck(this, SubMenu);

    this.navLink = navLink;
    this.show();
  }

  _createClass(SubMenu, [{
    key: "show",
    value: function show() {
      var _this = this;

      this.navLink.forEach(function (item) {
        item.addEventListener('mouseover', function (e) {
          var el = e.currentTarget;

          if (el.classList.contains('nav__link_active')) {
            el.classList.remove('nav__link_active');
            el.nextElementSibling.classList.remove('submenu__list_active');
          } else {
            _this.navLink.forEach(function (e) {
              e.classList.remove('nav__link_active');
              e.nextElementSibling.classList.remove('submenu__list_active');
            });

            el.classList.add('nav__link_active');
            el.nextElementSibling.classList.add('submenu__list_active');
          }

          document.addEventListener('click', function (e) {
            if (e.target !== el) {
              el.classList.remove('nav__link_active');
              el.nextElementSibling.classList.remove('submenu__list_active');
            }
          });
        });
      });
    }
  }]);

  return SubMenu;
}();

var subMenu = new SubMenu(document.querySelectorAll('.nav__link_dropdown'));

/***/ }),

/***/ "./components/swiper/swiper.js":
/*!*************************************!*\
  !*** ./components/swiper/swiper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ "../node_modules/swiper/esm/components/pagination/pagination.js");


swiper_core__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper_core__WEBPACK_IMPORTED_MODULE_1__.default, swiper_core__WEBPACK_IMPORTED_MODULE_2__.default]);

(function () {
  var swiper = new swiper_core__WEBPACK_IMPORTED_MODULE_0__.default('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var swiper2 = new swiper_core__WEBPACK_IMPORTED_MODULE_0__.default('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true
    }
  });
})();

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nouislider_distribute_nouislider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/nouislider/distribute/nouislider.js */ "../node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var _node_modules_nouislider_distribute_nouislider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nouislider_distribute_nouislider_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_range_range_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/range/range-slider */ "./components/range/range-slider.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _pug_pages_index_pug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pug/pages/index.pug */ "./pug/pages/index.pug");
/* harmony import */ var _pug_pages_index_pug__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pug_pages_index_pug__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_like_like__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/like/like */ "./components/like/like.js");
/* harmony import */ var _components_like_like__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_like_like__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_rating_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/rating/rating */ "./components/rating/rating.js");
/* harmony import */ var _components_rating_rating__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_rating_rating__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/air-datepicker/dist/js/datepicker */ "../node_modules/air-datepicker/dist/js/datepicker.js");
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_jquery_bar_rating_dist_jquery_barrating_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js */ "../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js");
/* harmony import */ var _node_modules_jquery_bar_rating_dist_jquery_barrating_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_bar_rating_dist_jquery_barrating_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_submenu_submenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/submenu/submenu */ "./components/submenu/submenu.js");
/* harmony import */ var _components_submenu_submenu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_submenu_submenu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/dropdown/dropdown.js */ "./components/dropdown/dropdown.js");
/* harmony import */ var _components_guest_dropdown_drop_guest_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/guest-dropdown/drop-guest.js */ "./components/guest-dropdown/drop-guest.js");
/* harmony import */ var _components_guest_dropdown_drop_guest_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_guest_dropdown_drop_guest_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_room_rooms_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/room/rooms.js */ "./components/room/rooms.js");
/* harmony import */ var _components_room_rooms_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_room_rooms_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_guest_dropdown_guest_counter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/guest-dropdown/guest-counter.js */ "./components/guest-dropdown/guest-counter.js");
/* harmony import */ var _components_list_checkbox_list_checkbox_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/list-checkbox/list-checkbox.js */ "./components/list-checkbox/list-checkbox.js");
/* harmony import */ var _components_list_checkbox_list_checkbox_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_list_checkbox_list_checkbox_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_calendare_calendar_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/calendare/calendar.js */ "./components/calendare/calendar.js");
/* harmony import */ var _components_calendare_calendar_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_calendare_calendar_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_swiper_swiper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/swiper/swiper.js */ "./components/swiper/swiper.js");
/* harmony import */ var _components_burger_burger_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/burger/burger.js */ "./components/burger/burger.js");
/* harmony import */ var _components_burger_burger_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger_js__WEBPACK_IMPORTED_MODULE_18__);
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}






window.$ = __webpack_provided_window_dot_jQuery = (jquery__WEBPACK_IMPORTED_MODULE_3___default());

 // import "../pug/pages/sign-in.pug";
// import "../pug/pages/sign-up.pug";
// import "../pug/pages/headers-footers.pug";
// import "../pug/pages/form-elements.pug";
// import "../pug/pages/cards.pug";
// import "../pug/pages/search-room.pug";
















/***/ }),

/***/ "./js/quantity.js":
/*!************************!*\
  !*** ./js/quantity.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function quantity(n, text_forms) {
  text_forms = text_forms.split(",");
  n = Math.abs(n) % 100;
  var n1 = n % 10;

  if (n > 10 && n < 20) {
    return text_forms[2];
  }

  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }

  if (n1 == 1) {
    return text_forms[0];
  }

  return text_forms[2];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quantity);

/***/ }),

/***/ "./img/arrow-down.svg":
/*!****************************!*\
  !*** ./img/arrow-down.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/arrow-down.svg");

/***/ }),

/***/ "./img/arrow-forward.svg":
/*!*******************************!*\
  !*** ./img/arrow-forward.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/arrow-forward.svg");

/***/ }),

/***/ "./img/arrow-left.svg":
/*!****************************!*\
  !*** ./img/arrow-left.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/arrow-left.svg");

/***/ }),

/***/ "./img/arrow-right.svg":
/*!*****************************!*\
  !*** ./img/arrow-right.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/arrow-right.svg");

/***/ }),

/***/ "./img/arrow_forward-white.svg":
/*!*************************************!*\
  !*** ./img/arrow_forward-white.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/arrow_forward-white.svg");

/***/ }),

/***/ "./img/author-2.png":
/*!**************************!*\
  !*** ./img/author-2.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/author-2.png");

/***/ }),

/***/ "./img/author.png":
/*!************************!*\
  !*** ./img/author.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/author.png");

/***/ }),

/***/ "./img/card-10.png":
/*!*************************!*\
  !*** ./img/card-10.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-10.png");

/***/ }),

/***/ "./img/card-11.png":
/*!*************************!*\
  !*** ./img/card-11.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-11.png");

/***/ }),

/***/ "./img/card-2.png":
/*!************************!*\
  !*** ./img/card-2.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-2.png");

/***/ }),

/***/ "./img/card-3.png":
/*!************************!*\
  !*** ./img/card-3.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-3.png");

/***/ }),

/***/ "./img/card-4.png":
/*!************************!*\
  !*** ./img/card-4.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-4.png");

/***/ }),

/***/ "./img/card-5.png":
/*!************************!*\
  !*** ./img/card-5.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-5.png");

/***/ }),

/***/ "./img/card-6.png":
/*!************************!*\
  !*** ./img/card-6.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-6.png");

/***/ }),

/***/ "./img/card-7.png":
/*!************************!*\
  !*** ./img/card-7.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-7.png");

/***/ }),

/***/ "./img/card-8.png":
/*!************************!*\
  !*** ./img/card-8.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-8.png");

/***/ }),

/***/ "./img/card-9.png":
/*!************************!*\
  !*** ./img/card-9.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card-9.png");

/***/ }),

/***/ "./img/card.jpg":
/*!**********************!*\
  !*** ./img/card.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/card.jpg");

/***/ }),

/***/ "./img/check.svg":
/*!***********************!*\
  !*** ./img/check.svg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/check.svg");

/***/ }),

/***/ "./img/comfort.svg":
/*!*************************!*\
  !*** ./img/comfort.svg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/comfort.svg");

/***/ }),

/***/ "./img/convenience.svg":
/*!*****************************!*\
  !*** ./img/convenience.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/convenience.svg");

/***/ }),

/***/ "./img/cosiness.svg":
/*!**************************!*\
  !*** ./img/cosiness.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/cosiness.svg");

/***/ }),

/***/ "./img/dislike.svg":
/*!*************************!*\
  !*** ./img/dislike.svg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/dislike.svg");

/***/ }),

/***/ "./img/dots.svg":
/*!**********************!*\
  !*** ./img/dots.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/dots.svg");

/***/ }),

/***/ "./img/fc.svg":
/*!********************!*\
  !*** ./img/fc.svg ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/fc.svg");

/***/ }),

/***/ "./img/in.svg":
/*!********************!*\
  !*** ./img/in.svg ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/in.svg");

/***/ }),

/***/ "./img/landing.jpg":
/*!*************************!*\
  !*** ./img/landing.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/landing.jpg");

/***/ }),

/***/ "./img/left.svg":
/*!**********************!*\
  !*** ./img/left.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/left.svg");

/***/ }),

/***/ "./img/like.svg":
/*!**********************!*\
  !*** ./img/like.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/like.svg");

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/logo.svg");

/***/ }),

/***/ "./img/logo__ulkit.svg":
/*!*****************************!*\
  !*** ./img/logo__ulkit.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/logo__ulkit.svg");

/***/ }),

/***/ "./img/luxe-2.png":
/*!************************!*\
  !*** ./img/luxe-2.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/luxe-2.png");

/***/ }),

/***/ "./img/luxe-3.png":
/*!************************!*\
  !*** ./img/luxe-3.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/luxe-3.png");

/***/ }),

/***/ "./img/luxe-4.png":
/*!************************!*\
  !*** ./img/luxe-4.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/luxe-4.png");

/***/ }),

/***/ "./img/luxe.jpg":
/*!**********************!*\
  !*** ./img/luxe.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/luxe.jpg");

/***/ }),

/***/ "./img/plus.svg":
/*!**********************!*\
  !*** ./img/plus.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/plus.svg");

/***/ }),

/***/ "./img/remove.svg":
/*!************************!*\
  !*** ./img/remove.svg ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/remove.svg");

/***/ }),

/***/ "./img/right.svg":
/*!***********************!*\
  !*** ./img/right.svg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/right.svg");

/***/ }),

/***/ "./img/room-1.jpg":
/*!************************!*\
  !*** ./img/room-1.jpg ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/room-1.jpg");

/***/ }),

/***/ "./img/room-2.jpg":
/*!************************!*\
  !*** ./img/room-2.jpg ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/room-2.jpg");

/***/ }),

/***/ "./img/room-3.jpg":
/*!************************!*\
  !*** ./img/room-3.jpg ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/room-3.jpg");

/***/ }),

/***/ "./img/sign-in.jpg":
/*!*************************!*\
  !*** ./img/sign-in.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/sign-in.jpg");

/***/ }),

/***/ "./img/star.svg":
/*!**********************!*\
  !*** ./img/star.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/star.svg");

/***/ }),

/***/ "./img/star_border.svg":
/*!*****************************!*\
  !*** ./img/star_border.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/star_border.svg");

/***/ }),

/***/ "./img/tw.svg":
/*!********************!*\
  !*** ./img/tw.svg ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/tw.svg");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./pug/pages/index.pug":
/*!*****************************!*\
  !*** ./pug/pages/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (pug_indent) {
      var pug_indent = [];





























































































































pug_mixins["dropdownCounter"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var item = $$obj[pug_index3];
const {subtitle, list } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\"\u003E" + (pug.escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"counter__value\""+" type=\"number\" value=\"2\""+pug.attr("data-value", `${list}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"plus\"\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var item = $$obj[pug_index3];
const {subtitle, list } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\"\u003E" + (pug.escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"counter__value\""+" type=\"number\" value=\"2\""+pug.attr("data-value", `${list}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"plus\"\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

};
pug_mixins["radio"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var item = $$obj[pug_index4];
const { id, checked, gender} = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\""+pug.attr("checked", true, true, true)) + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\"") + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var item = $$obj[pug_index4];
const { id, checked, gender} = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\""+pug.attr("checked", true, true, true)) + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\"") + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
    }
  }
}).call(this);

};






































































































































































pug_mixins["header"] = pug_interp = function(status, navigations){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cheader class=\"header\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container header__container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E\u003Ca href=\"\u002F\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/logo.svg */ "./img/logo.svg").default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cnav class=\"nav\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"nav__list\"\u003E";
// iterate navigations
;(function(){
  var $$obj = navigations;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var nav = $$obj[pug_index7];
if (nav.submenu) {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item submenu\"\u003E\u003Ca class=\"nav__link nav__link_dropdown\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003Csvg width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"submenu__list\"\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var item = $$obj[pug_index8];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var item = $$obj[pug_index8];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item\"\u003E\u003Ca class=\"nav__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var nav = $$obj[pug_index7];
if (nav.submenu) {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item submenu\"\u003E\u003Ca class=\"nav__link nav__link_dropdown\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003Csvg width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"submenu__list\"\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var item = $$obj[pug_index9];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var item = $$obj[pug_index9];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item\"\u003E\u003Ca class=\"nav__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fnav\u003E";
if (status === 'non-authorized') {
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__btns header-btns\"\u003E";
pug_indent.push("      ");
pug_mixins["buttonBorder"]({
            classes: 'header-btns_border',
            href: '/sign-in.html',
            text: 'войти',
            buttonClass: 'header-btns__signin'
          });
pug_indent.pop();
pug_indent.push("      ");
pug_mixins["buttonPrimary"]({
            href: '/sign-up.html',
            classes: 'header-btns__signup',
            text: 'зарегистрироваться'
          });
pug_indent.pop();
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else
if (status === 'authorized') {
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__user\"\u003E\u003Ca class=\"header__user-link\" href=\"\u002F\"\u003EЮлий Цезарь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fheader\u003E";
};
pug_mixins["footer"] = pug_interp = function(navigations = []){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cfooter\u003E\u003C\u002Ffooter\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container footer__container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-logo logo\"\u003E\u003Ca href=\"\u002F\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/logo.svg */ "./img/logo.svg").default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer__inner footer-inner\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer__logo logo\"\u003E\u003Ca href=\"\u002F\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/logo.svg */ "./img/logo.svg").default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"footer-inner__text\"\u003EБронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»\u003C\u002Fp\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
// iterate navigations
;(function(){
  var $$obj = navigations;
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var nav = $$obj[pug_index10];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"footer-inner__list\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item footer-inner__item_title\"\u003E\u003Ca class=\"footer-inner__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var item = $$obj[pug_index11];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var item = $$obj[pug_index11];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var nav = $$obj[pug_index10];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"footer-inner__list\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item footer-inner__item_title\"\u003E\u003Ca class=\"footer-inner__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var item = $$obj[pug_index12];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var item = $$obj[pug_index12];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__item_title\"\u003E\u003Ca href=\"\u002F\"\u003EПодписка\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"footer-inner__text\"\u003EПолучайте специальные предложения и новости сервиса\u003C\u002Fp\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform class=\"footer-inner__email\" action=\"\u002F\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput type=\"email\" placeholder=\"Email\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"footer-inner__btn btn-reset\" type=\"submit\"\u003E\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_indent.push("  ");
pug_mixins["copy"]('Copyright © 2018 Toxin отель. Все права зачищены.');
pug_indent.pop();
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["copy"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer__copy footer-copy\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container footer-copy__container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"footer-copy__text\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"footer-copy__socials copy-socials\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"copy-socials__item\"\u003E\u003Ca class=\"copy-socials__link\" href=\"\u002F\"\u003E\u003Csvg width=\"24\" height=\"20\" viewBox=\"0 0 24 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"12\" y1=\"0\" x2=\"12\" y2=\"24\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"copy-socials__item\"\u003E\u003Ca class=\"copy-socials__link\" href=\"\u002F\"\u003E\u003Csvg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19.25 0.5H2.75C1.48438 0.5 0.5 1.53125 0.5 2.75V19.25C0.5 20.5156 1.48438 21.5 2.75 21.5H9.17188V14.375H6.21875V11H9.17188V8.46875C9.17188 5.5625 10.9062 3.92188 13.5312 3.92188C14.8438 3.92188 16.1562 4.15625 16.1562 4.15625V7.01562H14.7031C13.25 7.01562 12.7812 7.90625 12.7812 8.84375V11H16.0156L15.5 14.375H12.7812V21.5H19.25C20.4688 21.5 21.5 20.5156 21.5 19.25V2.75C21.5 1.53125 20.4688 0.5 19.25 0.5Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"11\" y1=\"1\" x2=\"11\" y2=\"25\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"copy-socials__item\"\u003E\u003Ca class=\"copy-socials__link\" href=\"\u002F\"\u003E\u003Csvg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M11 5.60938C8 5.60938 5.60938 8.04688 5.60938 11C5.60938 14 8 16.3906 11 16.3906C13.9531 16.3906 16.3906 14 16.3906 11C16.3906 8.04688 13.9531 5.60938 11 5.60938ZM11 14.5156C9.07812 14.5156 7.48438 12.9688 7.48438 11C7.48438 9.07812 9.03125 7.53125 11 7.53125C12.9219 7.53125 14.4688 9.07812 14.4688 11C14.4688 12.9688 12.9219 14.5156 11 14.5156ZM17.8438 5.42188C17.8438 4.71875 17.2812 4.15625 16.5781 4.15625C15.875 4.15625 15.3125 4.71875 15.3125 5.42188C15.3125 6.125 15.875 6.6875 16.5781 6.6875C17.2812 6.6875 17.8438 6.125 17.8438 5.42188ZM21.4062 6.6875C21.3125 5 20.9375 3.5 19.7188 2.28125C18.5 1.0625 17 0.6875 15.3125 0.59375C13.5781 0.5 8.375 0.5 6.64062 0.59375C4.95312 0.6875 3.5 1.0625 2.23438 2.28125C1.01562 3.5 0.640625 5 0.546875 6.6875C0.453125 8.42188 0.453125 13.625 0.546875 15.3594C0.640625 17.0469 1.01562 18.5 2.23438 19.7656C3.5 20.9844 4.95312 21.3594 6.64062 21.4531C8.375 21.5469 13.5781 21.5469 15.3125 21.4531C17 21.3594 18.5 20.9844 19.7188 19.7656C20.9375 18.5 21.3125 17.0469 21.4062 15.3594C21.5 13.625 21.5 8.42188 21.4062 6.6875ZM19.1562 17.1875C18.8281 18.125 18.0781 18.8281 17.1875 19.2031C15.7812 19.7656 12.5 19.625 11 19.625C9.45312 19.625 6.17188 19.7656 4.8125 19.2031C3.875 18.8281 3.17188 18.125 2.79688 17.1875C2.23438 15.8281 2.375 12.5469 2.375 11C2.375 9.5 2.23438 6.21875 2.79688 4.8125C3.17188 3.92188 3.875 3.21875 4.8125 2.84375C6.17188 2.28125 9.45312 2.42188 11 2.42188C12.5 2.42188 15.7812 2.28125 17.1875 2.84375C18.0781 3.17188 18.7812 3.92188 19.1562 4.8125C19.7188 6.21875 19.5781 9.5 19.5781 11C19.5781 12.5469 19.7188 15.8281 19.1562 17.1875Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"11\" y1=\"1\" x2=\"11\" y2=\"25\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};








































































































pug_mixins["checkbox"] = pug_interp = function(title, items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"checkbox-elements__title elements-title\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var item = $$obj[pug_index15];
const { id, text, checked } = item;
if (checked) {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var item = $$obj[pug_index15];
const { id, text, checked } = item;
if (checked) {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["toggle"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
        var item = $$obj[pug_index16];
const { id, checked, text, classes } = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index16 in $$obj) {
      $$l++;
      var item = $$obj[pug_index16];
const { id, checked, text, classes } = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

};
pug_mixins["like"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var item = $$obj[pug_index17];
const { counter, classes, buttonClasses } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["like-elements__like",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["like-elements__btn-like","btn-reset",buttonClasses], [false,false,true]), false, true)) + "\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"like-elements__counter\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var item = $$obj[pug_index17];
const { counter, classes, buttonClasses } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["like-elements__like",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["like-elements__btn-like","btn-reset",buttonClasses], [false,false,true]), false, true)) + "\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"like-elements__counter\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
pug_mixins["rating"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index18 = 0, $$l = $$obj.length; pug_index18 < $$l; pug_index18++) {
        var item = $$obj[pug_index18];
const { classes, selectClass } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["rate-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cselect" + (pug.attr("class", pug.classes([selectClass], [true]), false, true)) + "\u003E";
// iterate [1, 2, 3, 4, 5]
;(function(){
  var $$obj = [1, 2, 3, 4, 5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index19 = 0, $$l = $$obj.length; pug_index19 < $$l; pug_index19++) {
        var value = $$obj[pug_index19];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index19 in $$obj) {
      $$l++;
      var value = $$obj[pug_index19];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fselect\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index18 in $$obj) {
      $$l++;
      var item = $$obj[pug_index18];
const { classes, selectClass } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["rate-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cselect" + (pug.attr("class", pug.classes([selectClass], [true]), false, true)) + "\u003E";
// iterate [1, 2, 3, 4, 5]
;(function(){
  var $$obj = [1, 2, 3, 4, 5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index20 = 0, $$l = $$obj.length; pug_index20 < $$l; pug_index20++) {
        var value = $$obj[pug_index20];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index20 in $$obj) {
      $$l++;
      var value = $$obj[pug_index20];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fselect\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
































































pug_mixins["rangeSlider"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index21 = 0, $$l = $$obj.length; pug_index21 < $$l; pug_index21++) {
        var item = $$obj[pug_index21];
const { title, classRange, classTitle, span } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["range-elements",classRange], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3" + (pug.attr("class", pug.classes(["range-elements__title","elements-title",classTitle], [false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"range-elements__wrapper\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-0\" type=\"text\"\u003E\u003Cspan\u003E-\u003C\u002Fspan\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-1\" type=\"text\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"slider-keypress\"\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = span) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index21 in $$obj) {
      $$l++;
      var item = $$obj[pug_index21];
const { title, classRange, classTitle, span } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["range-elements",classRange], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3" + (pug.attr("class", pug.classes(["range-elements__title","elements-title",classTitle], [false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"range-elements__wrapper\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-0\" type=\"text\"\u003E\u003Cspan\u003E-\u003C\u002Fspan\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-1\" type=\"text\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"slider-keypress\"\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = span) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
pug_mixins["buttonPrimary"] = pug_interp = function({href, classes, text}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform" + (pug.attr("action", href, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["btn-reset",classes], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E";
};
pug_mixins["buttonBorder"] = pug_interp = function({classes, href, text, buttonClass}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([classes], [true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform" + (pug.attr("action", href, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes([buttonClass,"btn-reset"], [true,false]), false, true)+" type=\"submit\"") + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["buttonLink"] = pug_interp = function({text, href}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"button-elements__link link-primary\""+pug.attr("href", href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
pug_mixins["buttonDefault"] = pug_interp = function({href, classes, text}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform" + (pug.attr("action", href, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["button-elements__default","btn-reset","btn-default",classes], [false,false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E";
};
pug_mixins["pagination"] = pug_interp = function({title, list, text}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"pagination-elements\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"pagination-elements__title elements-title\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"pagination-elements__list\"\u003E";
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index22 = 0, $$l = $$obj.length; pug_index22 < $$l; pug_index22++) {
        var item = $$obj[pug_index22];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"pagination-elements__item\"\u003E\u003Ca" + (pug.attr("class", pug.classes([item.class,"pagination-elements__link"], [true,false]), false, true)+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.link) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index22 in $$obj) {
      $$l++;
      var item = $$obj[pug_index22];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"pagination-elements__item\"\u003E\u003Ca" + (pug.attr("class", pug.classes([item.class,"pagination-elements__link"], [true,false]), false, true)+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.link) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"pagination-elements__text\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};













































































































pug_mixins["guest"] = pug_interp = function({title, list}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"form-elements__dropdown search-rooms__guest\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"elements-title range-elements__title\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"dropdown-guest\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"dropdown__button guest__btn btn-reset\" value=\"\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"dropdown__input-guest guest__input\" type=\"text\" value=\"Сколько гостей\" readonly\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"dropdown__list guest__list\"\u003E";
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index23 = 0, $$l = $$obj.length; pug_index23 < $$l; pug_index23++) {
        var item = $$obj[pug_index23];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\" data-value=\"гость,гостя,гостей\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter guest__counters\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (pug.attr("class", pug.classes([item.class,"guest__counter"], [true,false]), false, true)+" type=\"number\" value=\"0\""+pug.attr("data-value", `${item.list}`, true, true)+pug.attr("readonly", true, true, true)) + "\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"plus\"\u003E\u003Cspan\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index23 in $$obj) {
      $$l++;
      var item = $$obj[pug_index23];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\" data-value=\"гость,гостя,гостей\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter guest__counters\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (pug.attr("class", pug.classes([item.class,"guest__counter"], [true,false]), false, true)+" type=\"number\" value=\"0\""+pug.attr("data-value", `${item.list}`, true, true)+pug.attr("readonly", true, true, true)) + "\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"plus\"\u003E\u003Cspan\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"guest__btns\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"clear guest__clear btn-reset\"\u003Eочистить\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"apply guest__apply btn-reset\"\u003Eприменить\u003C\u002Fbutton\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["search-rooms"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms__title\"\u003EНайдём номера под ваши пожелания\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"dropdown-date search-rooms__date\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms__dropdown\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"search-rooms__text\"\u003Eприбытие\u003C\u002Fp\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"dropdown-date__range dropdown-date__range_from search-rooms__input\" type=\"text\" placeholder=\"ДД.ММ.ГГГГ\" readonly\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms__dropdown\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"search-rooms__text\"\u003Eвыезд\u003C\u002Fp\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"dropdown-date__range dropdown-date__range_to search-rooms__input\" type=\"text\" placeholder=\"ДД.ММ.ГГГГ\" readonly\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"form-elements__dropdown\"\u003E";
pug_indent.push("    ");
pug_mixins["guest"]({
        title: 'гости',
        list: [
          {
            title: 'взрослые',
            list: [
              'взрослый',
              'взрослых',
              'взрослых'
            ]
          },
          {
            title: 'дети',
            list: [
              'ребенок',
              'ребенка',
              'детей'
            ]
          },
          {
            title: 'младенцы',
            list: [
              'младенец',
              'младенца',
              'младенцев'
            ],
            class: 'guest__counter_baby'
          }
        ]
      });
pug_indent.pop();
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_indent.push("  ");
pug_mixins["buttonDefault"]({
      href: '/search-room.html',
      classes: 'search-rooms__btn',
      text: 'подобрать номер'
    });
pug_indent.pop();
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};





























































































































pug_mixins["card"] = pug_interp = function(list){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index25 = 0, $$l = $$obj.length; pug_index25 < $$l; pug_index25++) {
        var item = $$obj[pug_index25];
const { type, number, text, price, counter, test, slides, swipperArrowHidden } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-wrapper\"\u003E";
// iterate slides
;(function(){
  var $$obj = slides;
  if ('number' == typeof $$obj.length) {
      for (var pug_index26 = 0, $$l = $$obj.length; pug_index26 < $$l; pug_index26++) {
        var item = $$obj[pug_index26];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index26 in $$obj) {
      $$l++;
      var item = $$obj[pug_index26];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-pagination\"\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-next",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-prev",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__title luxe-title\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"luxe-title__left\"\u003E\u003Cspan\u003E№\u003C\u002Fspan\u003E" + (pug.escape(null == (pug_interp = number) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"luxe-title__right\"\u003E" + (pug.escape(null == (pug_interp = price) ? "" : pug_interp)) + "\u003Cspan\u003Eв сутки\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__reviews\"\u003E";
if (type === 'luxe') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating'
            }
          ]);
pug_indent.pop();
}
else
if (type === 'normal') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating2'
            }
          ]);
pug_indent.pop();
}
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__text\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003Cspan\u003EОтзывов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index25 in $$obj) {
      $$l++;
      var item = $$obj[pug_index25];
const { type, number, text, price, counter, test, slides, swipperArrowHidden } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-wrapper\"\u003E";
// iterate slides
;(function(){
  var $$obj = slides;
  if ('number' == typeof $$obj.length) {
      for (var pug_index27 = 0, $$l = $$obj.length; pug_index27 < $$l; pug_index27++) {
        var item = $$obj[pug_index27];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index27 in $$obj) {
      $$l++;
      var item = $$obj[pug_index27];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-pagination\"\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-next",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-prev",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__title luxe-title\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"luxe-title__left\"\u003E\u003Cspan\u003E№\u003C\u002Fspan\u003E" + (pug.escape(null == (pug_interp = number) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"luxe-title__right\"\u003E" + (pug.escape(null == (pug_interp = price) ? "" : pug_interp)) + "\u003Cspan\u003Eв сутки\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__reviews\"\u003E";
if (type === 'luxe') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating'
            }
          ]);
pug_indent.pop();
}
else
if (type === 'normal') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating2'
            }
          ]);
pug_indent.pop();
}
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__text\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003Cspan\u003EОтзывов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};






const title = 'Landing';
const pageClass = '';





























































































































pug_mixins["dropdownCounter"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index31 = 0, $$l = $$obj.length; pug_index31 < $$l; pug_index31++) {
        var item = $$obj[pug_index31];
const {subtitle, list } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\"\u003E" + (pug.escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"counter__value\""+" type=\"number\" value=\"2\""+pug.attr("data-value", `${list}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"plus\"\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index31 in $$obj) {
      $$l++;
      var item = $$obj[pug_index31];
const {subtitle, list } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\"\u003E" + (pug.escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"counter__value\""+" type=\"number\" value=\"2\""+pug.attr("data-value", `${list}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn btn-reset\" data-direction=\"plus\"\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

};
pug_mixins["radio"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index32 = 0, $$l = $$obj.length; pug_index32 < $$l; pug_index32++) {
        var item = $$obj[pug_index32];
const { id, checked, gender} = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\""+pug.attr("checked", true, true, true)) + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\"") + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index32 in $$obj) {
      $$l++;
      var item = $$obj[pug_index32];
const { id, checked, gender} = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\""+pug.attr("checked", true, true, true)) + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"radio-elements__input\""+" type=\"radio\""+pug.attr("id", `radio-${id}`, true, true)+" name=\"gender\"") + "\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"radio-elements__label\""+pug.attr("for", `radio-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = gender) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
}
    }
  }
}).call(this);

};






































































































































































pug_mixins["header"] = pug_interp = function(status, navigations){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cheader class=\"header\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container header__container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E\u003Ca href=\"\u002F\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/logo.svg */ "./img/logo.svg").default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cnav class=\"nav\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"nav__list\"\u003E";
// iterate navigations
;(function(){
  var $$obj = navigations;
  if ('number' == typeof $$obj.length) {
      for (var pug_index35 = 0, $$l = $$obj.length; pug_index35 < $$l; pug_index35++) {
        var nav = $$obj[pug_index35];
if (nav.submenu) {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item submenu\"\u003E\u003Ca class=\"nav__link nav__link_dropdown\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003Csvg width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"submenu__list\"\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index36 = 0, $$l = $$obj.length; pug_index36 < $$l; pug_index36++) {
        var item = $$obj[pug_index36];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index36 in $$obj) {
      $$l++;
      var item = $$obj[pug_index36];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item\"\u003E\u003Ca class=\"nav__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index35 in $$obj) {
      $$l++;
      var nav = $$obj[pug_index35];
if (nav.submenu) {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item submenu\"\u003E\u003Ca class=\"nav__link nav__link_dropdown\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003Csvg width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"submenu__list\"\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index37 = 0, $$l = $$obj.length; pug_index37 < $$l; pug_index37++) {
        var item = $$obj[pug_index37];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index37 in $$obj) {
      $$l++;
      var item = $$obj[pug_index37];
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca class=\"submenu__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"nav__item\"\u003E\u003Ca class=\"nav__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fnav\u003E";
if (status === 'non-authorized') {
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__btns header-btns\"\u003E";
pug_indent.push("      ");
pug_mixins["buttonBorder"]({
            classes: 'header-btns_border',
            href: '/sign-in.html',
            text: 'войти',
            buttonClass: 'header-btns__signin'
          });
pug_indent.pop();
pug_indent.push("      ");
pug_mixins["buttonPrimary"]({
            href: '/sign-up.html',
            classes: 'header-btns__signup',
            text: 'зарегистрироваться'
          });
pug_indent.pop();
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else
if (status === 'authorized') {
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__user\"\u003E\u003Ca class=\"header__user-link\" href=\"\u002F\"\u003EЮлий Цезарь\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fheader\u003E";
};
pug_mixins["footer"] = pug_interp = function(navigations = []){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cfooter\u003E\u003C\u002Ffooter\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container footer__container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-logo logo\"\u003E\u003Ca href=\"\u002F\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/logo.svg */ "./img/logo.svg").default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer__inner footer-inner\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer__logo logo\"\u003E\u003Ca href=\"\u002F\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../../img/logo.svg */ "./img/logo.svg").default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"footer-inner__text\"\u003EБронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»\u003C\u002Fp\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
// iterate navigations
;(function(){
  var $$obj = navigations;
  if ('number' == typeof $$obj.length) {
      for (var pug_index38 = 0, $$l = $$obj.length; pug_index38 < $$l; pug_index38++) {
        var nav = $$obj[pug_index38];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"footer-inner__list\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item footer-inner__item_title\"\u003E\u003Ca class=\"footer-inner__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index39 = 0, $$l = $$obj.length; pug_index39 < $$l; pug_index39++) {
        var item = $$obj[pug_index39];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index39 in $$obj) {
      $$l++;
      var item = $$obj[pug_index39];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index38 in $$obj) {
      $$l++;
      var nav = $$obj[pug_index38];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"footer-inner__list\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item footer-inner__item_title\"\u003E\u003Ca class=\"footer-inner__link\" href=\"\u002F\"\u003E" + (pug.escape(null == (pug_interp = nav.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
// iterate nav.items
;(function(){
  var $$obj = nav.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index40 = 0, $$l = $$obj.length; pug_index40 < $$l; pug_index40++) {
        var item = $$obj[pug_index40];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index40 in $$obj) {
      $$l++;
      var item = $$obj[pug_index40];
pug_html = pug_html + "\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"footer-inner__item\"\u003E\u003Ca" + (" class=\"footer-inner__link\""+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__items\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer-inner__item_title\"\u003E\u003Ca href=\"\u002F\"\u003EПодписка\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"footer-inner__text\"\u003EПолучайте специальные предложения и новости сервиса\u003C\u002Fp\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform class=\"footer-inner__email\" action=\"\u002F\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput type=\"email\" placeholder=\"Email\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"footer-inner__btn btn-reset\" type=\"submit\"\u003E\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_indent.push("  ");
pug_mixins["copy"]('Copyright © 2018 Toxin отель. Все права зачищены.');
pug_indent.pop();
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["copy"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"footer__copy footer-copy\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container footer-copy__container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"footer-copy__text\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"footer-copy__socials copy-socials\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"copy-socials__item\"\u003E\u003Ca class=\"copy-socials__link\" href=\"\u002F\"\u003E\u003Csvg width=\"24\" height=\"20\" viewBox=\"0 0 24 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"12\" y1=\"0\" x2=\"12\" y2=\"24\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"copy-socials__item\"\u003E\u003Ca class=\"copy-socials__link\" href=\"\u002F\"\u003E\u003Csvg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19.25 0.5H2.75C1.48438 0.5 0.5 1.53125 0.5 2.75V19.25C0.5 20.5156 1.48438 21.5 2.75 21.5H9.17188V14.375H6.21875V11H9.17188V8.46875C9.17188 5.5625 10.9062 3.92188 13.5312 3.92188C14.8438 3.92188 16.1562 4.15625 16.1562 4.15625V7.01562H14.7031C13.25 7.01562 12.7812 7.90625 12.7812 8.84375V11H16.0156L15.5 14.375H12.7812V21.5H19.25C20.4688 21.5 21.5 20.5156 21.5 19.25V2.75C21.5 1.53125 20.4688 0.5 19.25 0.5Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"11\" y1=\"1\" x2=\"11\" y2=\"25\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"copy-socials__item\"\u003E\u003Ca class=\"copy-socials__link\" href=\"\u002F\"\u003E\u003Csvg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M11 5.60938C8 5.60938 5.60938 8.04688 5.60938 11C5.60938 14 8 16.3906 11 16.3906C13.9531 16.3906 16.3906 14 16.3906 11C16.3906 8.04688 13.9531 5.60938 11 5.60938ZM11 14.5156C9.07812 14.5156 7.48438 12.9688 7.48438 11C7.48438 9.07812 9.03125 7.53125 11 7.53125C12.9219 7.53125 14.4688 9.07812 14.4688 11C14.4688 12.9688 12.9219 14.5156 11 14.5156ZM17.8438 5.42188C17.8438 4.71875 17.2812 4.15625 16.5781 4.15625C15.875 4.15625 15.3125 4.71875 15.3125 5.42188C15.3125 6.125 15.875 6.6875 16.5781 6.6875C17.2812 6.6875 17.8438 6.125 17.8438 5.42188ZM21.4062 6.6875C21.3125 5 20.9375 3.5 19.7188 2.28125C18.5 1.0625 17 0.6875 15.3125 0.59375C13.5781 0.5 8.375 0.5 6.64062 0.59375C4.95312 0.6875 3.5 1.0625 2.23438 2.28125C1.01562 3.5 0.640625 5 0.546875 6.6875C0.453125 8.42188 0.453125 13.625 0.546875 15.3594C0.640625 17.0469 1.01562 18.5 2.23438 19.7656C3.5 20.9844 4.95312 21.3594 6.64062 21.4531C8.375 21.5469 13.5781 21.5469 15.3125 21.4531C17 21.3594 18.5 20.9844 19.7188 19.7656C20.9375 18.5 21.3125 17.0469 21.4062 15.3594C21.5 13.625 21.5 8.42188 21.4062 6.6875ZM19.1562 17.1875C18.8281 18.125 18.0781 18.8281 17.1875 19.2031C15.7812 19.7656 12.5 19.625 11 19.625C9.45312 19.625 6.17188 19.7656 4.8125 19.2031C3.875 18.8281 3.17188 18.125 2.79688 17.1875C2.23438 15.8281 2.375 12.5469 2.375 11C2.375 9.5 2.23438 6.21875 2.79688 4.8125C3.17188 3.92188 3.875 3.21875 4.8125 2.84375C6.17188 2.28125 9.45312 2.42188 11 2.42188C12.5 2.42188 15.7812 2.28125 17.1875 2.84375C18.0781 3.17188 18.7812 3.92188 19.1562 4.8125C19.7188 6.21875 19.5781 9.5 19.5781 11C19.5781 12.5469 19.7188 15.8281 19.1562 17.1875Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"11\" y1=\"1\" x2=\"11\" y2=\"25\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};








































































































pug_mixins["checkbox"] = pug_interp = function(title, items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"checkbox-elements__title elements-title\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index43 = 0, $$l = $$obj.length; pug_index43 < $$l; pug_index43++) {
        var item = $$obj[pug_index43];
const { id, text, checked } = item;
if (checked) {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index43 in $$obj) {
      $$l++;
      var item = $$obj[pug_index43];
const { id, text, checked } = item;
if (checked) {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"checkbox-elements__item\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"checkbox-elements__input\""+" type=\"checkbox\""+pug.attr("id", `checkbox-${id}`, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"checkbox-elements__label\""+pug.attr("for", `checkbox-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["toggle"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index44 = 0, $$l = $$obj.length; pug_index44 < $$l; pug_index44++) {
        var item = $$obj[pug_index44];
const { id, checked, text, classes } = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index44 in $$obj) {
      $$l++;
      var item = $$obj[pug_index44];
const { id, checked, text, classes } = item;
if (checked) {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)+pug.attr("checked", true, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["toggle-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"toggle-elements__input\""+" type=\"checkbox\""+pug.attr("id", `toggle-${id}`, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel" + (" class=\"toggle-elements__label\""+pug.attr("for", `toggle-${id}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

};
pug_mixins["like"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index45 = 0, $$l = $$obj.length; pug_index45 < $$l; pug_index45++) {
        var item = $$obj[pug_index45];
const { counter, classes, buttonClasses } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["like-elements__like",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["like-elements__btn-like","btn-reset",buttonClasses], [false,false,true]), false, true)) + "\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"like-elements__counter\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index45 in $$obj) {
      $$l++;
      var item = $$obj[pug_index45];
const { counter, classes, buttonClasses } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["like-elements__like",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["like-elements__btn-like","btn-reset",buttonClasses], [false,false,true]), false, true)) + "\u003E\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"like-elements__counter\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
pug_mixins["rating"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index46 = 0, $$l = $$obj.length; pug_index46 < $$l; pug_index46++) {
        var item = $$obj[pug_index46];
const { classes, selectClass } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["rate-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cselect" + (pug.attr("class", pug.classes([selectClass], [true]), false, true)) + "\u003E";
// iterate [1, 2, 3, 4, 5]
;(function(){
  var $$obj = [1, 2, 3, 4, 5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index47 = 0, $$l = $$obj.length; pug_index47 < $$l; pug_index47++) {
        var value = $$obj[pug_index47];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index47 in $$obj) {
      $$l++;
      var value = $$obj[pug_index47];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fselect\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index46 in $$obj) {
      $$l++;
      var item = $$obj[pug_index46];
const { classes, selectClass } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["rate-elements__item",classes], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cselect" + (pug.attr("class", pug.classes([selectClass], [true]), false, true)) + "\u003E";
// iterate [1, 2, 3, 4, 5]
;(function(){
  var $$obj = [1, 2, 3, 4, 5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index48 = 0, $$l = $$obj.length; pug_index48 < $$l; pug_index48++) {
        var value = $$obj[pug_index48];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index48 in $$obj) {
      $$l++;
      var value = $$obj[pug_index48];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Coption" + (pug.attr("value", `${value}`, true, true)) + "\u003E\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fselect\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
































































pug_mixins["rangeSlider"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index49 = 0, $$l = $$obj.length; pug_index49 < $$l; pug_index49++) {
        var item = $$obj[pug_index49];
const { title, classRange, classTitle, span } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["range-elements",classRange], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3" + (pug.attr("class", pug.classes(["range-elements__title","elements-title",classTitle], [false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"range-elements__wrapper\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-0\" type=\"text\"\u003E\u003Cspan\u003E-\u003C\u002Fspan\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-1\" type=\"text\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"slider-keypress\"\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = span) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index49 in $$obj) {
      $$l++;
      var item = $$obj[pug_index49];
const { title, classRange, classTitle, span } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["range-elements",classRange], [false,true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3" + (pug.attr("class", pug.classes(["range-elements__title","elements-title",classTitle], [false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"range-elements__wrapper\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-0\" type=\"text\"\u003E\u003Cspan\u003E-\u003C\u002Fspan\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"input-with-keypress-1\" type=\"text\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"slider-keypress\"\u003E\u003C\u002Fdiv\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = span) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
pug_mixins["buttonPrimary"] = pug_interp = function({href, classes, text}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform" + (pug.attr("action", href, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["btn-reset",classes], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E";
};
pug_mixins["buttonBorder"] = pug_interp = function({classes, href, text, buttonClass}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([classes], [true]), false, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform" + (pug.attr("action", href, true, true)) + "\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes([buttonClass,"btn-reset"], [true,false]), false, true)+" type=\"submit\"") + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["buttonLink"] = pug_interp = function({text, href}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"button-elements__link link-primary\""+pug.attr("href", href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
pug_mixins["buttonDefault"] = pug_interp = function({href, classes, text}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform" + (pug.attr("action", href, true, true)) + "\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton" + (pug.attr("class", pug.classes(["button-elements__default","btn-reset","btn-default",classes], [false,false,false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E";
};
pug_mixins["pagination"] = pug_interp = function({title, list, text}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"pagination-elements\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"pagination-elements__title elements-title\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"pagination-elements__list\"\u003E";
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index50 = 0, $$l = $$obj.length; pug_index50 < $$l; pug_index50++) {
        var item = $$obj[pug_index50];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"pagination-elements__item\"\u003E\u003Ca" + (pug.attr("class", pug.classes([item.class,"pagination-elements__link"], [true,false]), false, true)+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.link) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index50 in $$obj) {
      $$l++;
      var item = $$obj[pug_index50];
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"pagination-elements__item\"\u003E\u003Ca" + (pug.attr("class", pug.classes([item.class,"pagination-elements__link"], [true,false]), false, true)+pug.attr("href", `${item.href}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.link) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"pagination-elements__text\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};













































































































pug_mixins["guest"] = pug_interp = function({title, list}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"form-elements__dropdown search-rooms__guest\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"elements-title range-elements__title\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"dropdown-guest\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"dropdown__button guest__btn btn-reset\" value=\"\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"dropdown__input-guest guest__input\" type=\"text\" value=\"Сколько гостей\" readonly\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"dropdown__list guest__list\"\u003E";
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index51 = 0, $$l = $$obj.length; pug_index51 < $$l; pug_index51++) {
        var item = $$obj[pug_index51];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\" data-value=\"гость,гостя,гостей\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter guest__counters\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (pug.attr("class", pug.classes([item.class,"guest__counter"], [true,false]), false, true)+" type=\"number\" value=\"0\""+pug.attr("data-value", `${item.list}`, true, true)+pug.attr("readonly", true, true, true)) + "\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"plus\"\u003E\u003Cspan\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index51 in $$obj) {
      $$l++;
      var item = $$obj[pug_index51];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"dropdown__list-item\" data-value=\"гость,гостя,гостей\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"counter guest__counters\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"minus\"\u003E\u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cg\u003E\n\t\t\u003Crect y=\"128\" width=\"298.667\" height=\"42.667\"\u002F\u003E\n\t\u003C\u002Fg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003Cg\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fbutton\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (pug.attr("class", pug.classes([item.class,"guest__counter"], [true,false]), false, true)+" type=\"number\" value=\"0\""+pug.attr("data-value", `${item.list}`, true, true)+pug.attr("readonly", true, true, true)) + "\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"counter__btn-guest guest__counter-btn btn-reset\" data-direction=\"plus\"\u003E\u003Cspan\u003E\u003Csvg height=\"469.33333pt\" viewBox=\"0 0 469.33333 469.33333\" width=\"469.33333pt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"guest__btns\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"clear guest__clear btn-reset\"\u003Eочистить\u003C\u002Fbutton\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cbutton class=\"apply guest__apply btn-reset\"\u003Eприменить\u003C\u002Fbutton\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["search-rooms"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms__title\"\u003EНайдём номера под ваши пожелания\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"dropdown-date search-rooms__date\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms__dropdown\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"search-rooms__text\"\u003Eприбытие\u003C\u002Fp\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"dropdown-date__range dropdown-date__range_from search-rooms__input\" type=\"text\" placeholder=\"ДД.ММ.ГГГГ\" readonly\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"search-rooms__dropdown\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"search-rooms__text\"\u003Eвыезд\u003C\u002Fp\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"dropdown-date__range dropdown-date__range_to search-rooms__input\" type=\"text\" placeholder=\"ДД.ММ.ГГГГ\" readonly\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"form-elements__dropdown\"\u003E";
pug_indent.push("    ");
pug_mixins["guest"]({
        title: 'гости',
        list: [
          {
            title: 'взрослые',
            list: [
              'взрослый',
              'взрослых',
              'взрослых'
            ]
          },
          {
            title: 'дети',
            list: [
              'ребенок',
              'ребенка',
              'детей'
            ]
          },
          {
            title: 'младенцы',
            list: [
              'младенец',
              'младенца',
              'младенцев'
            ],
            class: 'guest__counter_baby'
          }
        ]
      });
pug_indent.pop();
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_indent.push("  ");
pug_mixins["buttonDefault"]({
      href: '/search-room.html',
      classes: 'search-rooms__btn',
      text: 'подобрать номер'
    });
pug_indent.pop();
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};





























































































































pug_mixins["card"] = pug_interp = function(list){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index53 = 0, $$l = $$obj.length; pug_index53 < $$l; pug_index53++) {
        var item = $$obj[pug_index53];
const { type, number, text, price, counter, test, slides, swipperArrowHidden } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-wrapper\"\u003E";
// iterate slides
;(function(){
  var $$obj = slides;
  if ('number' == typeof $$obj.length) {
      for (var pug_index54 = 0, $$l = $$obj.length; pug_index54 < $$l; pug_index54++) {
        var item = $$obj[pug_index54];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index54 in $$obj) {
      $$l++;
      var item = $$obj[pug_index54];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-pagination\"\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-next",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-prev",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__title luxe-title\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"luxe-title__left\"\u003E\u003Cspan\u003E№\u003C\u002Fspan\u003E" + (pug.escape(null == (pug_interp = number) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"luxe-title__right\"\u003E" + (pug.escape(null == (pug_interp = price) ? "" : pug_interp)) + "\u003Cspan\u003Eв сутки\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__reviews\"\u003E";
if (type === 'luxe') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating'
            }
          ]);
pug_indent.pop();
}
else
if (type === 'normal') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating2'
            }
          ]);
pug_indent.pop();
}
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__text\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003Cspan\u003EОтзывов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index53 in $$obj) {
      $$l++;
      var item = $$obj[pug_index53];
const { type, number, text, price, counter, test, slides, swipperArrowHidden } = item;
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-container\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-wrapper\"\u003E";
// iterate slides
;(function(){
  var $$obj = slides;
  if ('number' == typeof $$obj.length) {
      for (var pug_index55 = 0, $$l = $$obj.length; pug_index55 < $$l; pug_index55++) {
        var item = $$obj[pug_index55];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index55 in $$obj) {
      $$l++;
      var item = $$obj[pug_index55];
pug_html = pug_html + "\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-slide\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__("./img sync recursive ^\\.\\/.*$")(`./${item.image}`).default, true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"swiper-pagination\"\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-next",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-button-prev",swipperArrowHidden], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__title luxe-title\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"luxe-title__left\"\u003E\u003Cspan\u003E№\u003C\u002Fspan\u003E" + (pug.escape(null == (pug_interp = number) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"luxe-title__right\"\u003E" + (pug.escape(null == (pug_interp = price) ? "" : pug_interp)) + "\u003Cspan\u003Eв сутки\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__reviews\"\u003E";
if (type === 'luxe') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating'
            }
          ]);
pug_indent.pop();
}
else
if (type === 'normal') {
pug_indent.push("    ");
pug_mixins["rating"]([
            {
              classes: 'card-luxe__rating',
              selectClass: 'rate-elements__rating2'
            }
          ]);
pug_indent.pop();
}
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"card-luxe__text\"\u003E" + (pug.escape(null == (pug_interp = counter) ? "" : pug_interp)) + "\u003Cspan\u003EОтзывов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};






pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ru\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Clink rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image\u002Fx-icon\"\u003E\n    \u003Ctitle\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody" + (pug.attr("class", pug.classes([pageClass], [true]), false, true)) + "\u003E\n    \u003Cdiv class=\"burger\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"site-container\"\u003E";
pug_indent.push("      ");
pug_mixins["header"]('non-authorized', [
        {
          name: 'О нас'
        },
        {
          submenu: true,
          name: 'Услуги',
          items: [
            {
              name: 'link 1'
            },
            {
              name: 'link 2'
            },
            {
              name: 'link 3'
            }
          ]
        },
        {
          name: 'Вакансии'
        },
        {
          name: 'Новости'
        },
        {
          submenu: true,
          name: 'Соглашения',
          items: [
            {
              name: 'link 1'
            },
            {
              name: 'link 2'
            },
            {
              name: 'link 3'
            }
          ]
        },
      ]);
pug_indent.pop();
pug_html = pug_html + "\n      \u003Cdiv class=\"main\"\u003E\n        \u003Csection class=\"landing\"\u003E\n          \u003Cdiv class=\"container landing__container\"\u003E";
pug_indent.push("            ");
pug_mixins["search-rooms"]();
pug_indent.pop();
pug_html = pug_html + "\n            \u003Cdiv class=\"landing__description\"\u003E\n              \u003Cp class=\"landing__text\"\u003EЛучшие номера для вашей работы, отдыха и просто вдохновения\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n      \u003C\u002Fdiv\u003E";
pug_indent.push("      ");
pug_mixins["footer"]([
        {
          title: 'навигация',
          items: [
            {
              title: 'О нас',
              href: '/'
            },
            {
              title: 'Новости',
              href: '/'
            },
            {
              title: 'Служба поддержки',
              href: '/'
            },
            {
              title: 'Услуги',
              href: '/'
            }
          ]
        },
        {
          title: 'О нас',
          items: [
            {
              title: 'О сервисе',
              href: '/'
            },
            {
              title: 'Наша команда',
              href: '/'
            },
            {
              title: 'Вакансии',
              href: '/'
            },
            {
              title: 'Инвесторы',
              href: '/'
            }
          ]
        },
        {
          title: 'Служба поддержки',
          items: [
            {
              title: 'Соглашения',
              href: '/'
            },
            {
              title: 'Сообщества',
              href: '/'
            },
            {
              title: 'Связь с нами',
              href: '/'
            }
          ]
        },
      ]);
pug_indent.pop();
pug_html = pug_html + "\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";
    }.call(this, "pug_indent" in locals_for_with ?
        locals_for_with.pug_indent :
        typeof pug_indent !== 'undefined' ? pug_indent : undefined));
    ;;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./img sync recursive ^\\.\\/.*$":
/*!****************************!*\
  !*** ./img/ sync ^\.\/.*$ ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow-down.svg": "./img/arrow-down.svg",
	"./arrow-forward.svg": "./img/arrow-forward.svg",
	"./arrow-left.svg": "./img/arrow-left.svg",
	"./arrow-right.svg": "./img/arrow-right.svg",
	"./arrow_forward-white.svg": "./img/arrow_forward-white.svg",
	"./author-2.png": "./img/author-2.png",
	"./author.png": "./img/author.png",
	"./card-10.png": "./img/card-10.png",
	"./card-11.png": "./img/card-11.png",
	"./card-2.png": "./img/card-2.png",
	"./card-3.png": "./img/card-3.png",
	"./card-4.png": "./img/card-4.png",
	"./card-5.png": "./img/card-5.png",
	"./card-6.png": "./img/card-6.png",
	"./card-7.png": "./img/card-7.png",
	"./card-8.png": "./img/card-8.png",
	"./card-9.png": "./img/card-9.png",
	"./card.jpg": "./img/card.jpg",
	"./check.svg": "./img/check.svg",
	"./comfort.svg": "./img/comfort.svg",
	"./convenience.svg": "./img/convenience.svg",
	"./cosiness.svg": "./img/cosiness.svg",
	"./dislike.svg": "./img/dislike.svg",
	"./dots.svg": "./img/dots.svg",
	"./fc.svg": "./img/fc.svg",
	"./in.svg": "./img/in.svg",
	"./landing.jpg": "./img/landing.jpg",
	"./left.svg": "./img/left.svg",
	"./like.svg": "./img/like.svg",
	"./logo.svg": "./img/logo.svg",
	"./logo__ulkit.svg": "./img/logo__ulkit.svg",
	"./luxe-2.png": "./img/luxe-2.png",
	"./luxe-3.png": "./img/luxe-3.png",
	"./luxe-4.png": "./img/luxe-4.png",
	"./luxe.jpg": "./img/luxe.jpg",
	"./plus.svg": "./img/plus.svg",
	"./remove.svg": "./img/remove.svg",
	"./right.svg": "./img/right.svg",
	"./room-1.jpg": "./img/room-1.jpg",
	"./room-2.jpg": "./img/room-2.jpg",
	"./room-3.jpg": "./img/room-3.jpg",
	"./sign-in.jpg": "./img/sign-in.jpg",
	"./star.svg": "./img/star.svg",
	"./star_border.svg": "./img/star_border.svg",
	"./tw.svg": "./img/tw.svg"
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
webpackContext.id = "./img sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "?16ca":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_air-datepicker_dist_js_datepicker_js-node_modules_focus-visible_dist_foc-89fc5d"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map