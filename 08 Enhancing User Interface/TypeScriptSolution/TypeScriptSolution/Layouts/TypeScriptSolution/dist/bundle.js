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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/car.ts":
/*!********************!*\
  !*** ./src/car.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("brrrrrm ....");
    };
    return Car;
}());
exports.Car = Car;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
var car_1 = __webpack_require__(/*! ./car */ "./src/car.ts");
var state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
debugger;
var util = new util_1.Util();
util.log();
util.getWebTitle("http://sp2016");
function drivePorsche() {
    var porsche = new car_1.Car();
    porsche.drive();
}
//export method to global namespace - otherwise is is not available for function call
window.drive = drivePorsche;
window.state = new state_1.State();


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
var State = /** @class */ (function () {
    function State() {
        this.util = new util_1.Util();
    }
    State.prototype.init = function () {
        console.log("Initializing State");
    };
    return State;
}());
exports.State = State;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.log = function () {
        console.log("hello word logged from Util");
    };
    Util.prototype.onErr = function (sender, args) {
        console.log("Request failed. " + args.get_message());
        console.log(args.get_stackTrace());
    };
    Util.prototype.getWebTitle = function (url) {
        var context = new SP.ClientContext();
        var web = context.get_web();
        context.load(web);
        context.executeQueryAsync(function () {
            console.log("Successfully loaded web and lists", web.get_title());
        }, this.onErr);
    };
    return Util;
}());
exports.Util = Util;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7SUFBQTtJQUlBLENBQUM7SUFIRyxtQkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsVUFBQztBQUFELENBQUM7QUFKWSxrQkFBRzs7Ozs7Ozs7Ozs7Ozs7O0FDRGhCLGdFQUE2QjtBQUM3Qiw2REFBMkI7QUFDM0IsbUVBQStCO0FBRS9CLFFBQVEsQ0FBQztBQUVULElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVsQztJQUNJLElBQUksT0FBTyxHQUFHLElBQUksU0FBRyxFQUFFLENBQUM7SUFDeEIsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxxRkFBcUY7QUFDL0UsTUFBTyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7QUFFN0IsTUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmxDLGdFQUE4QjtBQUU5QjtJQUlJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFYWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7O0FDRmxCO0lBQUE7SUFrQkEsQ0FBQztJQWpCQyxrQkFBRyxHQUFIO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQkFBSyxHQUFMLFVBQU0sTUFBTSxFQUFFLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQVksR0FBVztRQUNyQixJQUFJLE9BQU8sR0FBcUIsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkQsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFsQlksb0JBQUkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXHJcbmV4cG9ydCBjbGFzcyBDYXJ7XHJcbiAgICBkcml2ZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnJycnJybSAuLi4uXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSAnLi9jYXInXHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcclxuXHJcbmRlYnVnZ2VyO1xyXG5cclxubGV0IHV0aWwgPSBuZXcgVXRpbCgpO1xyXG51dGlsLmxvZygpO1xyXG51dGlsLmdldFdlYlRpdGxlKFwiaHR0cDovL3NwMjAxNlwiKTtcclxuXHJcbmZ1bmN0aW9uIGRyaXZlUG9yc2NoZSgpe1xyXG4gICAgbGV0IHBvcnNjaGUgPSBuZXcgQ2FyKCk7XHJcbiAgICBwb3JzY2hlLmRyaXZlKCk7XHJcbn1cclxuXHJcbi8vZXhwb3J0IG1ldGhvZCB0byBnbG9iYWwgbmFtZXNwYWNlIC0gb3RoZXJ3aXNlIGlzIGlzIG5vdCBhdmFpbGFibGUgZm9yIGZ1bmN0aW9uIGNhbGxcclxuKDxhbnk+d2luZG93KS5kcml2ZSA9IGRyaXZlUG9yc2NoZTtcclxuXHJcbig8YW55PndpbmRvdykuc3RhdGUgPSBuZXcgU3RhdGUoKTsiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRle1xyXG4gICAgXHJcbiAgICB1dGlsIDogVXRpbFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy51dGlsID0gbmV3IFV0aWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7ICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBTdGF0ZVwiKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gIGxvZygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29yZCBsb2dnZWQgZnJvbSBVdGlsXCIpO1xyXG4gIH1cclxuXHJcbiAgb25FcnIoc2VuZGVyLCBhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgZmFpbGVkLiBcIiArIGFyZ3MuZ2V0X21lc3NhZ2UoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhhcmdzLmdldF9zdGFja1RyYWNlKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2ViVGl0bGUodXJsOiBzdHJpbmcpIHtcclxuICAgIGxldCBjb250ZXh0OiBTUC5DbGllbnRDb250ZXh0ID0gbmV3IFNQLkNsaWVudENvbnRleHQoKTtcclxuICAgIGxldCB3ZWI6IFNQLldlYiA9IGNvbnRleHQuZ2V0X3dlYigpO1xyXG4gICAgY29udGV4dC5sb2FkKHdlYik7XHJcbiAgICBjb250ZXh0LmV4ZWN1dGVRdWVyeUFzeW5jKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9hZGVkIHdlYiBhbmQgbGlzdHNcIiwgd2ViLmdldF90aXRsZSgpKTtcclxuICAgIH0sIHRoaXMub25FcnIpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9