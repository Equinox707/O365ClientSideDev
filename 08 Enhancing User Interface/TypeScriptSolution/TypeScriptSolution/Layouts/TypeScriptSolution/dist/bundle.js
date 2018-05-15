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

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\Classes\\O365ClientSideDev\\08 Enhancing User Interface\\TypeScriptSolution\\TypeScriptSolution\\node_modules\\es6-promise\\dist\\es6-promise.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\Classes\\O365ClientSideDev\\08 Enhancing User Interface\\TypeScriptSolution\\TypeScriptSolution\\node_modules\\jquery\\dist\\jquery.js'");

/***/ }),

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
var util = new util_1.SPUtil();
util.log();
util_1.SPUtil.getWebTitleCSOM("http://sp2016").then(function (data) {
    return console.log("Web Title received by CSOM is: " + data);
});
util_1.SPUtil.getWebTitleREST("http://sp2016");
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
        this.util = new util_1.SPUtil();
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
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var SPUtil = /** @class */ (function () {
    function SPUtil() {
    }
    SPUtil.prototype.log = function () {
        console.log("hello word logged from SPUtil");
    };
    SPUtil.getWebTitleCSOM = function (url) {
        console.log("Executing CSOM");
        //wrapping call in Promise - not necessary but nicer to use
        return new es6_promise_1.Promise(function (resolve, reject) {
            var context = new SP.ClientContext(url);
            var web = context.get_web();
            context.load(web);
            context.executeQueryAsync(function () {
                resolve(web.get_title());
            }, function (sender, args) {
                console.log("Request failed. " + args.get_message());
                reject("Err happened - see console for details");
            });
        });
    };
    SPUtil.getWebTitleREST = function (url) {
        console.log("executing rest");
        var qry = url + "/_api/web/title";
        $.ajax({
            type: "GET",
            url: qry,
            dataType: "json",
            headers: {
                accept: "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose"
            }
        })
            .then(function (data) {
            console.log("Web Title received by REST is: " + data.d.response);
        })
            .fail(function (err) {
            console.log(err);
        });
    };
    SPUtil.getWebTitlePnPJS = function (url) { };
    return SPUtil;
}());
exports.SPUtil = SPUtil;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0lBQUE7SUFJQSxDQUFDO0lBSEcsbUJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDO0FBSlksa0JBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ0RoQixnRUFBZ0M7QUFDaEMsNkRBQTRCO0FBQzVCLG1FQUFnQztBQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLGFBQU0sRUFBRSxDQUFDO0FBQ3hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVYLGFBQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7SUFDL0MsY0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBa0MsSUFBTSxDQUFDO0FBQXJELENBQXFELENBQ3RELENBQUM7QUFFRixhQUFNLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXhDO0lBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztJQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUVELHFGQUFxRjtBQUMvRSxNQUFPLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztBQUU3QixNQUFPLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JCbEMsZ0VBQWdDO0FBRWhDO0lBR0U7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDO0FBVlksc0JBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQiw2R0FBc0M7QUFDdEMsa0ZBQTRCO0FBRTVCO0lBQUE7SUE4Q0EsQ0FBQztJQTdDQyxvQkFBRyxHQUFIO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxzQkFBZSxHQUF0QixVQUF1QixHQUFXO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QiwyREFBMkQ7UUFDM0QsT0FBTyxJQUFJLHFCQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxJQUFJLE9BQU8sR0FBcUIsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkI7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLENBQUMsRUFDRCxVQUFDLE1BQU0sRUFBRSxJQUFJO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sc0JBQWUsR0FBdEIsVUFBdUIsR0FBVztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixDQUFDO1FBRWxDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBRSxHQUFHO1lBQ1IsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxnQ0FBZ0M7Z0JBQ3hDLGNBQWMsRUFBRSxnQ0FBZ0M7YUFDakQ7U0FDRixDQUFDO2FBQ0MsSUFBSSxDQUFDLGNBQUk7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFrQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxhQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx1QkFBZ0IsR0FBdkIsVUFBd0IsR0FBVyxJQUFHLENBQUM7SUFDekMsYUFBQztBQUFELENBQUM7QUE5Q1ksd0JBQU0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXHJcbmV4cG9ydCBjbGFzcyBDYXJ7XHJcbiAgICBkcml2ZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnJycnJybSAuLi4uXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU1BVdGlsIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxubGV0IHV0aWwgPSBuZXcgU1BVdGlsKCk7XHJcbnV0aWwubG9nKCk7XHJcblxyXG5TUFV0aWwuZ2V0V2ViVGl0bGVDU09NKFwiaHR0cDovL3NwMjAxNlwiKS50aGVuKGRhdGEgPT5cclxuICBjb25zb2xlLmxvZyhgV2ViIFRpdGxlIHJlY2VpdmVkIGJ5IENTT00gaXM6ICR7ZGF0YX1gKVxyXG4pO1xyXG5cclxuU1BVdGlsLmdldFdlYlRpdGxlUkVTVChcImh0dHA6Ly9zcDIwMTZcIik7XHJcblxyXG5mdW5jdGlvbiBkcml2ZVBvcnNjaGUoKSB7XHJcbiAgbGV0IHBvcnNjaGUgPSBuZXcgQ2FyKCk7XHJcbiAgcG9yc2NoZS5kcml2ZSgpO1xyXG59XHJcblxyXG4vL2V4cG9ydCBtZXRob2QgdG8gZ2xvYmFsIG5hbWVzcGFjZSAtIG90aGVyd2lzZSBpcyBpcyBub3QgYXZhaWxhYmxlIGZvciBmdW5jdGlvbiBjYWxsXHJcbig8YW55PndpbmRvdykuZHJpdmUgPSBkcml2ZVBvcnNjaGU7XHJcblxyXG4oPGFueT53aW5kb3cpLnN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiIsImltcG9ydCB7IFNQVXRpbCB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XHJcbiAgdXRpbDogU1BVdGlsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXRpbCA9IG5ldyBTUFV0aWwoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBTdGF0ZVwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gXCJlczYtcHJvbWlzZVwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTUFV0aWwge1xyXG4gIGxvZygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29yZCBsb2dnZWQgZnJvbSBTUFV0aWxcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0V2ViVGl0bGVDU09NKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXhlY3V0aW5nIENTT01cIik7XHJcbiAgICAvL3dyYXBwaW5nIGNhbGwgaW4gUHJvbWlzZSAtIG5vdCBuZWNlc3NhcnkgYnV0IG5pY2VyIHRvIHVzZVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgY29udGV4dDogU1AuQ2xpZW50Q29udGV4dCA9IG5ldyBTUC5DbGllbnRDb250ZXh0KHVybCk7XHJcbiAgICAgIGxldCB3ZWI6IFNQLldlYiA9IGNvbnRleHQuZ2V0X3dlYigpO1xyXG4gICAgICBjb250ZXh0LmxvYWQod2ViKTtcclxuICAgICAgY29udGV4dC5leGVjdXRlUXVlcnlBc3luYyhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHdlYi5nZXRfdGl0bGUoKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoc2VuZGVyLCBhcmdzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgZmFpbGVkLiBcIiArIGFyZ3MuZ2V0X21lc3NhZ2UoKSk7XHJcbiAgICAgICAgICByZWplY3QoXCJFcnIgaGFwcGVuZWQgLSBzZWUgY29uc29sZSBmb3IgZGV0YWlsc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRXZWJUaXRsZVJFU1QodXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXhlY3V0aW5nIHJlc3RcIik7XHJcbiAgICBsZXQgcXJ5ID0gdXJsICsgXCIvX2FwaS93ZWIvdGl0bGVcIjtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IHFyeSxcclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb247b2RhdGE9dmVyYm9zZVwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtvZGF0YT12ZXJib3NlXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFdlYiBUaXRsZSByZWNlaXZlZCBieSBSRVNUIGlzOiAke2RhdGEuZC5yZXNwb25zZX1gKTtcclxuICAgICAgfSlcclxuICAgICAgLmZhaWwoZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRXZWJUaXRsZVBuUEpTKHVybDogc3RyaW5nKSB7fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=