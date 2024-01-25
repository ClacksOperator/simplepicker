var SimplePicker =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!***************************************************!*\
  !*** multi ./lib/simplepicker.css ./lib/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib/simplepicker.css */"iyB0");
module.exports = __webpack_require__(/*! ./lib/index.ts */"TYVf");


/***/ }),

/***/ "0DyV":
/*!**************************!*\
  !*** ./lib/date-util.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
exports.monthTracker = {
    years: {}
};
exports.months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
exports.days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
function fill(arr, upto) {
    var temp = [];
    arr = temp.concat(arr);
    for (var i = 0; i < upto; i++) {
        arr[i] = undefined;
    }
    return arr;
}
// builds the calender for one month given a date
// which is end, start or in middle of the month
function scrapeMonth(date) {
    var originalDate = new Date(date.getTime());
    var year = date.getFullYear();
    var month = date.getMonth();
    var data = {
        date: originalDate,
        month: undefined
    };
    exports.monthTracker.current = new Date(date.getTime());
    exports.monthTracker.current.setDate(1);
    exports.monthTracker.years[year] = exports.monthTracker.years[year] || {};
    if (exports.monthTracker.years[year][month] !== undefined) {
        data.month = exports.monthTracker.years[year][month];
        return data;
    }
    date = new Date(date.getTime());
    date.setDate(1);
    exports.monthTracker.years[year][month] = [];
    var tracker = exports.monthTracker.years[year][month];
    var rowTracker = 0;
    while (date.getMonth() === month) {
        var _date = date.getDate();
        var day = date.getDay();
        if (_date === 1) {
            tracker[rowTracker] = fill([], day);
        }
        tracker[rowTracker] = tracker[rowTracker] || [];
        tracker[rowTracker][day] = _date;
        if (day === 6) {
            rowTracker++;
        }
        date.setDate(date.getDate() + 1);
    }
    var lastRow = 5;
    if (tracker[5] === undefined) {
        lastRow = 4;
        tracker[5] = fill([], 7);
    }
    var lastRowLength = tracker[lastRow].length;
    if (lastRowLength < 7) {
        var filled = tracker[lastRow].concat(fill([], 7 - lastRowLength));
        tracker[lastRow] = filled;
    }
    data.month = tracker;
    return data;
}
exports.scrapeMonth = scrapeMonth;
function scrapePreviousMonth() {
    var date = exports.monthTracker.current;
    if (!date) {
        throw Error('scrapePrevoisMonth called without setting monthTracker.current!');
    }
    date.setMonth(date.getMonth() - 1);
    return scrapeMonth(date);
}
exports.scrapePreviousMonth = scrapePreviousMonth;
function scrapeNextMonth() {
    var date = exports.monthTracker.current;
    if (!date) {
        throw Error('scrapePrevoisMonth called without setting monthTracker.current!');
    }
    date.setMonth(date.getMonth() + 1);
    return scrapeMonth(date);
}
exports.scrapeNextMonth = scrapeNextMonth;
var dateEndings = {
    st: [1, 21, 31],
    nd: [2, 22],
    rd: [3, 23]
};
function getDisplayDate(_date) {
    var date = _date.getDate();
    if (dateEndings.st.indexOf(date) !== -1) {
        return date + 'st';
    }
    if (dateEndings.nd.indexOf(date) !== -1) {
        return date + 'nd';
    }
    if (dateEndings.rd.indexOf(date) !== -1) {
        return date + 'rd';
    }
    return date + 'th';
}
exports.getDisplayDate = getDisplayDate;
function formatTimeFromInputElement(input) {
    var timeString = '';
    var _a = input.split(':'), hour = _a[0], minute = _a[1];
    hour = +hour;
    var isPM = hour >= 12;
    if (isPM && hour > 12) {
        hour = hour - 12;
    }
    if (!isPM && hour === 0) {
        hour = 12;
    }
    timeString += hour < 10 ? '0' + hour : hour;
    timeString += ':' + minute + ' ';
    timeString += isPM ? 'PM' : 'AM';
    return timeString;
}
exports.formatTimeFromInputElement = formatTimeFromInputElement;


/***/ }),

/***/ "TYVf":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dateUtil = __webpack_require__(/*! ./date-util */ "0DyV");
var template_1 = __webpack_require__(/*! ./template */ "ht6X");
var validListeners = [
    'submit',
    'close',
];
var today = new Date();
var weekHeaderRow = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
var SimplePicker = /** @class */ (function () {
    function SimplePicker(arg1, arg2) {
        this._validOnListeners = validListeners;
        var el = undefined;
        var opts = arg2;
        if (typeof arg1 === 'string') {
            var element = document.querySelector(arg1);
            if (element !== null) {
                el = element;
            }
            else {
                throw new Error('Invalid selector passed to SimplePicker!');
            }
        }
        else if (arg1 instanceof HTMLElement) {
            el = arg1;
        }
        else if (typeof arg1 === 'object') {
            opts = arg1;
        }
        if (!el) {
            el = document.querySelector('body');
        }
        if (!opts) {
            opts = {};
        }
        this.$htmlTemplate = template_1.htmlTemplate;
        if (opts.globalization) {
            this.globalize(opts.globalization);
        }
        else {
            this.$monthNames = dateUtil.months;
            this.$dayNames = dateUtil.days;
        }
        this.selectedDate = new Date();
        this.injectTemplate(el);
        this.init(el, opts);
        this.initListeners();
        this._eventHandlers = {};
    }
    // We use $, $$ as helper method to conviently select
    // element we need for simplepicker.
    // Also, Limit the query to the wrapper class to avoid
    // selecting elements on the other instance.
    SimplePicker.prototype.initElMethod = function (el) {
        this.$ = function (sel) { return el.querySelector(sel); };
        this.$$ = function (sel) { return el.querySelectorAll(sel); };
    };
    SimplePicker.prototype.init = function (el, opts) {
        this.$simplepickerWrapper = el.querySelector('.simplepicker-wrapper');
        this.initElMethod(this.$simplepickerWrapper);
        var _a = this, $ = _a.$, $$ = _a.$$;
        this.$simplepicker = $('.simpilepicker-date-picker');
        this.$trs = $$('.simplepicker-calender tbody tr');
        this.$tds = $$('.simplepicker-calender tbody td');
        this.$headerMonthAndYear = $('.simplepicker-month-and-year');
        this.$monthAndYear = $('.simplepicker-selected-date');
        this.$date = $('.simplepicker-date');
        this.$day = $('.simplepicker-day-header');
        this.$time = $('.simplepicker-time');
        this.$timeInput = $('.simplepicker-time-section input');
        this.$timeSectionIcon = $('.simplepicker-icon-time');
        this.$cancel = $('.simplepicker-cancel-btn');
        this.$ok = $('.simplepicker-ok-btn');
        this.$displayDateElements = [
            this.$day,
            this.$headerMonthAndYear,
            this.$date
        ];
        this.$time.classList.add('simplepicker-fade');
        this.render(dateUtil.scrapeMonth(today));
        opts = opts || {};
        this.opts = opts;
        this.reset(opts.selectedDate || today);
        if (opts.zIndex !== undefined) {
            this.$simplepickerWrapper.style.zIndex = opts.zIndex.toString();
        }
        if (opts.disableTimeSection) {
            this.disableTimeSection();
        }
        if (opts.compactMode) {
            this.compactMode();
        }
    };
    // Reset by selecting current date.
    SimplePicker.prototype.reset = function (newDate) {
        var date = newDate || new Date();
        this.render(dateUtil.scrapeMonth(date));
        // The timeFull variable below will be formatted as HH:mm:ss.
        // Using regular experssion we remove the :ss parts.
        var timeFull = date.toTimeString().split(" ")[0];
        var time = timeFull.replace(/\:\d\d$/, "");
        this.$timeInput.value = time;
        this.$time.innerText = dateUtil.formatTimeFromInputElement(time);
        var dateString = date.getDate().toString();
        var $dateEl = this.findElementWithDate(dateString);
        if (!$dateEl.classList.contains('active')) {
            this.selectDateElement($dateEl);
            this.updateDateComponents(date);
        }
    };
    SimplePicker.prototype.compactMode = function () {
        var $date = this.$date;
        $date.style.display = 'none';
    };
    SimplePicker.prototype.disableTimeSection = function () {
        var $timeSectionIcon = this.$timeSectionIcon;
        $timeSectionIcon.style.visibility = 'hidden';
    };
    SimplePicker.prototype.enableTimeSection = function () {
        var $timeSectionIcon = this.$timeSectionIcon;
        $timeSectionIcon.style.visibility = 'visible';
    };
    SimplePicker.prototype.injectTemplate = function (el) {
        var $template = document.createElement('template');
        $template.innerHTML = this.$htmlTemplate;
        el.appendChild($template.content.cloneNode(true));
    };
    SimplePicker.prototype.clearRows = function () {
        this.$tds.forEach(function (td) {
            td.innerHTML = '';
            td.classList.remove('active');
        });
    };
    SimplePicker.prototype.updateDateComponents = function (date) {
        var day = this.$dayNames[date.getDay()];
        var month = this.$monthNames[date.getMonth()];
        var year = date.getFullYear();
        var monthAndYear = month + ' ' + year;
        this.$headerMonthAndYear.innerHTML = monthAndYear;
        this.$monthAndYear.innerHTML = monthAndYear;
        this.$day.innerHTML = day;
        this.$date.innerHTML = dateUtil.getDisplayDate(date);
    };
    SimplePicker.prototype.render = function (data) {
        var _a = this, $$ = _a.$$, $trs = _a.$trs;
        var month = data.month, date = data.date;
        this.clearRows();
        month.forEach(function (week, index) {
            var $tds = $trs[index].children;
            week.forEach(function (day, index) {
                var td = $tds[index];
                if (!day) {
                    td.setAttribute('data-empty', '');
                    return;
                }
                td.removeAttribute('data-empty');
                td.innerHTML = day;
            });
        });
        var $lastRowDates = $$('table tbody tr:last-child td');
        var lasRowIsEmpty = true;
        $lastRowDates.forEach(function (date) {
            if (date.dataset.empty === undefined) {
                lasRowIsEmpty = false;
            }
        });
        // hide last row if it's empty to avoid
        // extra spacing due to last row
        var $lastRow = $lastRowDates[0].parentElement;
        if (lasRowIsEmpty && $lastRow) {
            $lastRow.style.display = 'none';
        }
        else {
            $lastRow.style.display = 'table-row';
        }
        this.updateDateComponents(date);
    };
    SimplePicker.prototype.updateSelectedDate = function (el) {
        var _a = this, $monthAndYear = _a.$monthAndYear, $time = _a.$time, $date = _a.$date;
        var day;
        if (el) {
            day = el.innerHTML.trim();
        }
        else {
            day = this.$date.innerHTML.replace(/[a-z]+/, '');
        }
        var _b = $monthAndYear.innerHTML.split(' '), monthName = _b[0], year = _b[1];
        var month = this.$monthNames.indexOf(monthName);
        var timeComponents = $time.innerHTML.split(':');
        var hours = +timeComponents[0];
        var _c = timeComponents[1].split(' '), minutes = _c[0], meridium = _c[1];
        if (meridium === 'AM' && hours == 12) {
            hours = 0;
        }
        if (meridium === 'PM' && hours < 12) {
            hours += 12;
        }
        var date = new Date(+year, +month, +day, +hours, +minutes);
        this.selectedDate = date;
        var _date = day + ' ';
        _date += $monthAndYear.innerHTML.trim() + ' ';
        _date += $time.innerHTML.trim();
        this.readableDate = _date.replace(/^\d+/, date.getDate().toString());
    };
    SimplePicker.prototype.selectDateElement = function (el) {
        var alreadyActive = this.$('.simplepicker-calender tbody .active');
        el.classList.add('active');
        if (alreadyActive) {
            alreadyActive.classList.remove('active');
        }
        this.updateSelectedDate(el);
        this.updateDateComponents(this.selectedDate);
    };
    SimplePicker.prototype.findElementWithDate = function (date, returnLastIfNotFound) {
        if (returnLastIfNotFound === void 0) { returnLastIfNotFound = false; }
        var $tds = this.$tds;
        var el, lastTd;
        $tds.forEach(function (td) {
            var content = td.innerHTML.trim();
            if (content === date) {
                el = td;
            }
            if (content !== '') {
                lastTd = td;
            }
        });
        if (el === undefined && returnLastIfNotFound) {
            el = lastTd;
        }
        return el;
    };
    SimplePicker.prototype.handleIconButtonClick = function (el) {
        var $ = this.$;
        var baseClass = 'simplepicker-icon-';
        var nextIcon = baseClass + 'next';
        var previousIcon = baseClass + 'previous';
        var calenderIcon = baseClass + 'calender';
        var timeIcon = baseClass + 'time';
        if (el.classList.contains(calenderIcon)) {
            var $timeIcon = $('.' + timeIcon);
            var $timeSection = $('.simplepicker-time-section');
            var $calenderSection = $('.simplepicker-calender-section');
            $calenderSection.style.display = 'block';
            $timeSection.style.display = 'none';
            $timeIcon.classList.remove('active');
            el.classList.add('active');
            this.toogleDisplayFade();
            return;
        }
        if (el.classList.contains(timeIcon)) {
            var $calenderIcon = $('.' + calenderIcon);
            var $calenderSection = $('.simplepicker-calender-section');
            var $timeSection = $('.simplepicker-time-section');
            $timeSection.style.display = 'block';
            $calenderSection.style.display = 'none';
            $calenderIcon.classList.remove('active');
            el.classList.add('active');
            this.toogleDisplayFade();
            return;
        }
        var selectedDate;
        var $active = $('.simplepicker-calender td.active');
        if ($active) {
            selectedDate = $active.innerHTML.trim();
        }
        if (el.classList.contains(nextIcon)) {
            this.render(dateUtil.scrapeNextMonth());
        }
        if (el.classList.contains(previousIcon)) {
            this.render(dateUtil.scrapePreviousMonth());
        }
        if (selectedDate) {
            var $dateTd = this.findElementWithDate(selectedDate, true);
            this.selectDateElement($dateTd);
        }
    };
    SimplePicker.prototype.initListeners = function () {
        var _a = this, $simplepicker = _a.$simplepicker, $timeInput = _a.$timeInput, $ok = _a.$ok, $cancel = _a.$cancel, $simplepickerWrapper = _a.$simplepickerWrapper;
        var _this = this;
        $simplepicker.addEventListener('click', function (e) {
            var target = e.target;
            var tagName = target.tagName.toLowerCase();
            e.stopPropagation();
            if (tagName === 'td') {
                _this.selectDateElement(target);
                return;
            }
            if (tagName === 'button' &&
                target.classList.contains('simplepicker-icon')) {
                _this.handleIconButtonClick(target);
                return;
            }
        });
        $timeInput.addEventListener('input', function (e) {
            if (e.target.value === '') {
                return;
            }
            var formattedTime = dateUtil.formatTimeFromInputElement(e.target.value);
            _this.$time.innerHTML = formattedTime;
            _this.updateSelectedDate();
        });
        $ok.addEventListener('click', function () {
            _this.close();
            _this.callEvent('submit', function (func) {
                func(_this.selectedDate, _this.readableDate);
            });
        });
        function close() {
            _this.close();
            _this.callEvent('close', function (f) { f(); });
        }
        ;
        $cancel.addEventListener('click', close);
        $simplepickerWrapper.addEventListener('click', close);
    };
    SimplePicker.prototype.callEvent = function (event, dispatcher) {
        var listeners = this._eventHandlers[event] || [];
        listeners.forEach(function (func) {
            dispatcher(func);
        });
    };
    SimplePicker.prototype.open = function () {
        this.$simplepickerWrapper.classList.add('active');
    };
    // can be called by user or by click the cancel btn.
    SimplePicker.prototype.close = function () {
        this.$simplepickerWrapper.classList.remove('active');
    };
    SimplePicker.prototype.on = function (event, handler) {
        var _a = this, _validOnListeners = _a._validOnListeners, _eventHandlers = _a._eventHandlers;
        if (!_validOnListeners.includes(event)) {
            throw new Error('Not a valid event!');
        }
        _eventHandlers[event] = _eventHandlers[event] || [];
        _eventHandlers[event].push(handler);
    };
    SimplePicker.prototype.toogleDisplayFade = function () {
        this.$time.classList.toggle('simplepicker-fade');
        this.$displayDateElements.forEach(function ($el) {
            $el.classList.toggle('simplepicker-fade');
        });
    };
    SimplePicker.prototype.globalize = function (globalization) {
        if (globalization.months && globalization.months.length === 12) {
            this.$monthNames = globalization.months;
        }
        else {
            this.$monthNames = dateUtil.months;
        }
        if (globalization.days && globalization.days.length === 7) {
            this.$dayNames = globalization.days;
        }
        else {
            this.$dayNames = dateUtil.days;
        }
        if (globalization.shortDays && globalization.shortDays.length === 7) {
            var headerRow = "<tr><th>" + globalization.shortDays[0] + "</th>" +
                ("<th>" + globalization.shortDays[1] + "</th>") +
                ("<th>" + globalization.shortDays[2] + "</th>") +
                ("<th>" + globalization.shortDays[3] + "</th>") +
                ("<th>" + globalization.shortDays[4] + "</th>") +
                ("<th>" + globalization.shortDays[5] + "</th>") +
                ("<th>" + globalization.shortDays[6] + "</th></tr>");
            this.$htmlTemplate = this.$htmlTemplate.replace(weekHeaderRow, headerRow);
        }
        if (globalization.cancel && globalization.cancel.length > 0) {
            var templateCancel = "<button type=\"button\" class=\"simplepicker-cancel-btn simplepicker-btn\" title=\"Cancel\">Cancel</button>";
            var cancelButton = "<button type=\"button\" class=\"simplepicker-cancel-btn simplepicker-btn\" title=\"Cancel\">" + globalization.cancel + "</button>";
            this.$htmlTemplate = this.$htmlTemplate.replace(templateCancel, cancelButton);
        }
        if (globalization.ok && globalization.ok.length > 0) {
            var templateOk = "<button type=\"button\" class=\"simplepicker-ok-btn simplepicker-btn\" title=\"OK\">OK</button>";
            var okButton = "<button type=\"button\" class=\"simplepicker-ok-btn simplepicker-btn\" title=\"OK\">" + globalization.ok + "</button>";
            this.$htmlTemplate = this.$htmlTemplate.replace(templateOk, okButton);
        }
    };
    return SimplePicker;
}());
module.exports = SimplePicker;


/***/ }),

/***/ "ht6X":
/*!*************************!*\
  !*** ./lib/template.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function repeat(str, times) {
    var repeated = '';
    for (var i = 1; i <= times; i++) {
        repeated += str;
    }
    return repeated;
}
exports.htmlTemplate = "\n<div class=\"simplepicker-wrapper\">\n  <div class=\"simpilepicker-date-picker\">\n    <div class=\"simplepicker-day-header\"></div>\n      <div class=\"simplepicker-date-section\">\n        <div class=\"simplepicker-month-and-year\"></div>\n        <div class=\"simplepicker-date\"></div>\n        <div class=\"simplepicker-select-pane\">\n          <button type=\"button\" class=\"simplepicker-icon simplepicker-icon-calender active\" title=\"Select date from calendar!\"></button>\n          <div class=\"simplepicker-time\">12:00 PM</div>\n          <button type=\"button\" class=\"simplepicker-icon simplepicker-icon-time\" title=\"Select time\"></button>\n        </div>\n      </div>\n      <div class=\"simplepicker-picker-section\">\n        <div class=\"simplepicker-calender-section\">\n          <div class=\"simplepicker-month-switcher simplepicker-select-pane\">\n            <button type=\"button\" class=\"simplepicker-icon simplepicker-icon-previous\"></button>\n            <div class=\"simplepicker-selected-date\"></div>\n            <button type=\"button\" class=\"simplepicker-icon simplepicker-icon-next\"></button>\n          </div>\n          <div class=\"simplepicker-calender\">\n            <table>\n              <thead>\n                <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n              </thead>\n              <tbody>\n                " + repeat('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>', 6) + "\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"simplepicker-time-section\">\n          <input type=\"time\" value=\"12:00\" autofocus=\"false\">\n        </div>\n      </div>\n      <div class=\"simplepicker-bottom-part\">\n        <button type=\"button\" class=\"simplepicker-cancel-btn simplepicker-btn\" title=\"Cancel\">Cancel</button>\n        <button type=\"button\" class=\"simplepicker-ok-btn simplepicker-btn\" title=\"OK\">OK</button>\n      </div>\n  </div>\n</div>\n";


/***/ }),

/***/ "iyB0":
/*!******************************!*\
  !*** ./lib/simplepicker.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=simplepicker.js.map