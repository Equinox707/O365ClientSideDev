var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function basicVariables() {
    debugger;
    var myname = "alexander";
    //Numbers
    var age;
    var weight = 83.12;
    var dogWeight = 25.4;
    var rand = Math.random();
    var numbers = [];
    numbers[0] = 1;
    //numbers.push("two"); // compile-time error
    var isCustomer = false;
    var finished = false;
    //strings
    var dogName = "Giro";
    var otherDogName = "Soi";
    var x = 10;
    var strings = ["hubert", "Sam"];
    strings.push("Hans");
    //strings[1] = 1337; // compile time error
    // Function returning never must have unreachable end point
    function error(message) {
        throw new Error(message);
    }
    // Not much else we can assign to these variables!
    var u = undefined;
    var n = null;
}
function useLetConst() {
    debugger;
    var index = 0;
    var array = ["a", "b", "c"];
    for (var index_1 = 0; index_1 < array.length; index_1++) {
        console.log("Inside for ..." + index_1);
        console.log("Inside for ..." + array[index_1]);
    }
    console.log(index); // 0
    var pi = 3.14;
    //pi = 2;
}
function stringFunctions() {
    debugger;
    var productID = 100;
    var category = "music";
    //string concatenation
    var url = "http://server/" + category + "/" + productID;
    console.log(url);
    //Template Literals using Backticks
    var tl = "http://server/" + category + "/" + productID;
    console.log(tl);
    //startswith
    var str = "To be, or not to be, that is the question.";
    console.log(str.startsWith("To be")); // true
    console.log(str.endsWith("question.")); // true
}
function useEnums() {
    debugger;
    var VoucherStatus;
    (function (VoucherStatus) {
        VoucherStatus[VoucherStatus["draft"] = 0] = "draft";
        VoucherStatus[VoucherStatus["complete"] = 1] = "complete";
        VoucherStatus[VoucherStatus["pending"] = 2] = "pending";
    })(VoucherStatus || (VoucherStatus = {}));
    var n;
    n = VoucherStatus.draft;
    n = VoucherStatus.complete;
    //n = VoucherStatus.unfinished; // compile-time error
    //n = "on the way"; // compile-time error
    if (n === VoucherStatus.complete) {
    }
}
function useVoidAny() {
    debugger;
    function handleClick() {
        console.log("I don't return anything.");
    }
    var likeadelegate = handleClick();
    var notSure = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
}
function introArrays() {
    debugger;
    //declaration using type followed by []
    var customers = ["Alex", "Giro", "Sonja", "Soi", "David"];
    //declaration using generic array type
    var nbrs = [3, 4, 5];
    console.log(customers.length + "Persons in Array");
    customers[2] = "Brunhilde";
    console.log("Person with index 1 is" + customers[1]);
    //for ... of
    var list = [4, 5, 6];
    for (var i in list) {
        console.log(i); // "0", "1", "2", -> index
    }
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var i = list_1[_i];
        console.log(i); // "4", "5", "6"
    }
    var source = [8, 4, 100, -5, 20];
    // array destructuring
    var first = source[0], second = source[1], third = source[2];
    // output: 100, 4, 8
    console.log(third, second, first);
    var myArray = [1, ["hello"], true], a = myArray[0], b = myArray[1], c = myArray[2];
    // output: 1, ['hello']
    console.log(a, b);
}
function arrayHelpers() {
    debugger;
    var fruits = [
        { name: "apples", quantity: 2, price: 3, region: "europe" },
        { name: "bananas", quantity: 0, price: 5, region: "caribean" },
        { name: "cherries", quantity: 5, price: 8, region: "europe" }
    ];
    //remember ECMA Script 5 pattern
    var result = [];
    for (var i = 0; i < fruits.length; i++) {
        var item = fruits[i];
        if (item.quantity < 6) {
            result.push(item);
        }
    }
    console.log("There areas " + result.length + " items in the Array");
    //forEach
    fruits.forEach(function (fruit) {
        fruit.quantity++;
    });
    //find
    var cherry = fruits.find(function (fruit) { return fruit.name === "cherries"; });
    console.log(cherry);
    //filter
    //var cheap = fruits.filter((item) => { return item.price < 6 });
    var cheap = fruits.filter(function (item) { return item.price < 6; });
    console.log(cheap);
    //reduce
    var fruitNames = fruits.reduce(function (prevArray, fruit) {
        prevArray.push({ Name: fruit.name, Price: fruit.price });
        return prevArray;
    }, []);
    console.log(fruitNames);
    //splice
    var dogs = ["whippet", "galgo espanol", "magyar whistler", "magyar agar"];
    dogs.splice(2, 0, "chart polski");
    console.log(dogs);
    dogs.splice(3, 1);
    console.log(dogs);
}
function objectsBasics() {
    debugger;
    var myperson = new Object(); //old style
    var person = { Id: 1, Name: "Alexander" };
    person.dance = function () { console.log("I am dancing"); };
    person.walk = function () { return console.log("I am " + person.Name + " and I'm walking"); };
    person.walk();
}
function enhancedObjectLiterals() {
    debugger;
    //Property value shorthand
    function getCarES5(make, model, value) {
        return {
            make: make,
            model: model,
            value: value
        };
    }
    function getCar(make, model, value) {
        return {
            // with property value shorthand syntax, you can omit the property
            // value if key matches variable name
            make: make,
            model: model,
            value: value
        };
    }
    //Method definition shorthand
    function getBusES5(make, model, value) {
        return {
            depreciate: function () {
                this.value -= 2500;
            }
        };
    }
    function getBus(make, model, value) {
        return {
            // Method definition shorthand syntax omits `function` keyword & colon
            depreciate: function () {
                this.value -= 2500;
            }
        };
    }
}
function destructuring() {
    debugger;
    // object pattern matching
    var _a = { fName: "John", lName: "Doe" }, lName = _a.lName, fName = _a.fName;
    // output: Doe, John
    console.log(lName + ", " + fName);
    var rect = { x: 0, y: 10, width: 15, height: 20 };
    // Destructuring assignment
    var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
    console.log(x, y, width, height); // 0,10,15,20
    // Destructuring using REST Param
    var _b = { w: 1, x: 2, y: 3, z: 4 }, w = _b.w, x = _b.x, remaining = __rest(_b, ["w", "x"]);
    console.log(w, x, remaining); // 1, 2, {y:3,z:4}
}
function restParams() {
    debugger;
    function playLotto(name) {
        var bets = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            bets[_i - 1] = arguments[_i];
        }
        console.log(name + " is playing the following lottery numbers: ");
        bets.forEach(function (nbr) { return console.log(nbr); });
        bets.forEach(function (nbr) { return console.log(nbr); });
        bets.forEach(function (item) {
            console.log(item);
        });
    }
    playLotto("Hannes", 3, 12, 45, 48);
    playLotto("Kurt", 3, 12, 45, 48, 44, 33, 12);
    var shop = new Array();
    shop.category = new Map();
    shop.add = function (categoryName) {
        var products = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            products[_i - 1] = arguments[_i];
        }
        var row = shop.category[categoryName];
        if (row == undefined) {
            shop.category.set(categoryName, new Array());
        }
        products.forEach(function (item) {
            shop.category.get(categoryName).push(item);
        });
    };
    shop.add("fruits", "apple");
    shop.add("dairy", "milk", "cheese", "yoghurt");
    shop.add("pastries", "donuts", "croissants");
    shop.add("cleaning", "soap", "body lotion", "shampoo", "tooth brush");
    console.log("There are the following products in the store", shop);
}
function valref() {
    debugger;
    var person = { Id: 1, Name: "Alexander" };
    var myNumber = 100;
    function passArgs(nbr, pers) {
        nbr += 1;
        pers.Name = "Alex";
    }
    passArgs(myNumber, person);
    console.log("result for myNumber & person:", myNumber, person);
    myNumber = 500;
    person.name = "";
    passArgs(myNumber, __assign({}, person));
    console.log("result for myNumber & person:", myNumber, person);
}
function basicClasses() {
    debugger;
    var Voucher = /** @class */ (function () {
        function Voucher() {
        }
        return Voucher;
    }());
    var v = new Voucher();
    v.ID = 0;
    v.Text = "Demo Voucher";
    console.log("vouchertext is:" + v["Text"]);
    var vouchers = new Array();
    var vM = {
        ID: 1,
        Text: "Media Markt",
        Amount: 22,
        Date: new Date()
    };
    vouchers.push(vM);
    var vA = { ID: 2, Text: "Amazon", Amount: 44, Date: new Date() };
    vouchers.push(vA);
    for (var i = 0; i < vouchers.length; i++) {
        var v_1 = vouchers[i];
        console.log(v_1.Text);
    }
    for (var v_2 in vouchers) {
        if (vouchers.hasOwnProperty(v_2)) {
            console.log(v_2);
        }
    }
    //try changing: let v -> var v ... think why
    for (var _i = 0, vouchers_1 = vouchers; _i < vouchers_1.length; _i++) {
        var v_3 = vouchers_1[_i];
        console.log(v_3.Text);
    }
}
function classesConstructor() {
    debugger;
    var Person = /** @class */ (function () {
        function Person(Name, Alive) {
            this.name = Name;
            this.alive = Alive;
        }
        return Person;
    }());
    var jim = new Person("Jim", true);
    console.log(jim.name + " is alive: " + jim.alive);
    var Bill = /** @class */ (function () {
        function Bill(Text, Paid) {
            if (Text === void 0) { Text = ""; }
            if (Paid === void 0) { Paid = false; }
            this.text = Text;
            this.paid = Paid;
        }
        return Bill;
    }());
    var b1 = new Bill("Car Purchase");
    var b2 = new Bill("Rösti für Freundin", true);
    console.log("b1 with Text: " + b1.text + " was " + b1.paid);
    console.log("b2 with Text: " + b2.text + " was " + b2.paid);
    var Dog = /** @class */ (function () {
        function Dog(name, breed) {
            this.name = name;
            this.breed = breed;
        }
        Dog.prototype.barkName = function () {
            return "Wuff, my name is " + this.name + ", I am a " + this.breed;
        };
        Dog.prototype.sayName = function () {
            return "Wuff, my name is " + name; // + ", I am a " + breed;
        };
        return Dog;
    }());
    var dog = new Dog("Soi", "Whippet");
    console.log(dog.barkName());
    console.log(dog.sayName());
    console.log(dog.breed);
    var Smurf = /** @class */ (function () {
        function Smurf(name) {
            if (name.length < 1) {
                throw new Error("Empty name!");
            }
            this.name = name;
        }
        return Smurf;
    }());
    var smurf = new Smurf("Daniel");
    //smurf.name = "Dan"; // Error! 'name' is read-only.
}
function getSet() {
    debugger;
    var passcode = "secret passcode";
    var Citzien = /** @class */ (function () {
        function Citzien() {
        }
        Object.defineProperty(Citzien.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                this._fullName = "Citizen " + newName;
                console.log("name changed to " + newName);
            },
            enumerable: true,
            configurable: true
        });
        return Citzien;
    }());
    var employee = new Citzien();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
function inheritance() {
    debugger;
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
            this.speed = "with 40 km/h";
        }
        Dog.prototype.move = function (meters) {
            console.log(this.name + " moved " + meters + " meters " + this.speed);
        };
        return Dog;
    }());
    var Sighthound = /** @class */ (function (_super) {
        __extends(Sighthound, _super);
        function Sighthound(name) {
            var _this = _super.call(this, name) || this;
            _this.speed = "with up to 110 km/h";
            return _this;
        }
        Sighthound.prototype.move = function (meters) {
            if (meters === void 0) { meters = 500; }
            console.log("Running ..." + meters + "m. " + this.speed);
            _super.prototype.move.call(this, meters);
        };
        return Sighthound;
    }(Dog));
    var dog = new Dog("Bello");
    dog.move(50);
    var hound = new Sighthound("Soi");
    hound.move();
    hound.move(1000);
    //Protected Properties
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.introduceSelf = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + " department.";
        };
        return Employee;
    }(Person));
    var howard = new Employee("Howard", "Sales");
    console.log(howard.introduceSelf());
    //console.log(howard.name); // error
}
function staticProperties() {
    debugger;
    var Grid = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.sayName = function () {
            return "I am a Grid";
        };
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = point.x - Grid.origin.x;
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    console.log(Grid.origin);
    console.log(Grid.sayName());
    var grid = new Grid(3);
    var p = { x: 10, y: 20 };
    var result = grid.calculateDistanceFromOrigin(p);
    console.log("Grid result:", result);
}
function typedFunctions() {
    debugger;
    var addFunction = function (x, y) {
        return x + y;
    };
    var result = addFunction(10, 20);
    console.log(result);
}
function functionParameters() {
    debugger;
    //optional param
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    console.log(buildName("Bob"));
    console.log(buildName("Giro", "Galgohead"));
    //default param
    function getAddress(street, city) {
        if (city === void 0) { city = "Vienna"; }
        return street + ", " + city;
    }
    console.log(getAddress("Neuwaldegger Straße"));
    console.log(getAddress("Seestraße", "Idolsberg"));
    //rest param
    function buildFruitBucket(fruitType) {
        var fruits = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fruits[_i - 1] = arguments[_i];
        }
        console.log("The following " + fruitType + " are in the bucket " + fruits.join(", "));
    }
    buildFruitBucket("Beeren", "Himbeeren", "Brombeeren", "Goji Beeren");
}
function arrowFunctions() {
    debugger;
    var rectangleFunction = function (width, height) {
        return width * height;
    };
    //Implemented as Lambda or "Arrow" Function
    var rectangleFunctionArrow = function (width, height) {
        return height * width;
    };
    var result = rectangleFunctionArrow(10, 22);
    console.log(result);
}
// Interfaces
function interfacesBasics() {
    debugger;
    var Knight = /** @class */ (function () {
        function Knight() {
            this.weapon = "Battle Axe";
        }
        Knight.prototype.sayName = function () {
            return this.name;
        };
        return Knight;
    }());
    var Robber = /** @class */ (function () {
        function Robber() {
        }
        Robber.prototype.sayName = function () {
            return this.name;
        };
        return Robber;
    }());
    var rob = new Knight();
    rob.name = "Rob Stark";
}
function interfacesNullability() {
    debugger;
    var DeliveryManager = /** @class */ (function () {
        function DeliveryManager() {
        }
        return DeliveryManager;
    }());
}
function interfacesObjectLiterals() {
    debugger;
    var position = { Long: 17.123123, Lat: 12.123123 };
    console.log("We are at position Long: " + position.Long + " Lat: " + position.Lat);
}
function interfacesFunctions() {
    debugger;
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
        //console.log(labelledObj.size);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    var mySearch;
    mySearch = function (source, subString) {
        return false;
    };
    mySearch = function (source, subString) { return false; };
}
function genericFunctions() {
    debugger;
    function concat(arg) {
        var result = "";
        for (var _i = 0, arg_1 = arg; _i < arg_1.length; _i++) {
            var m = arg_1[_i];
            result += m.toString() + ", ";
        }
        return result;
    }
    var stringArr = ["Alex", "Giro", "Soi the Whippet"];
    console.log(concat(stringArr));
    var nbrArr = [100, 201, 322];
    //let nbrArr: Array<number> = [100, 201, 322, "geht nicht weil string"];
    console.log(concat(nbrArr));
}
function genericClassesInterfaces() {
    var Catalog = /** @class */ (function () {
        function Catalog() {
            this.items = new Array();
        }
        Catalog.prototype.addItem = function (newItem) {
            this.items.push(newItem);
        };
        Catalog.prototype.getNewestItem = function () {
            return this.items[this.items.length - 1];
        };
        Catalog.prototype.getAllItems = function () {
            return this.items;
        };
        return Catalog;
    }());
    var cat = new Catalog();
    var v = {
        ID: 1,
        Text: "Media Markt",
        Amount: 22,
        Date: new Date(),
        Paid: false,
        Expense: true
    };
    cat.addItem(v);
}
function genericConstraints() {
    var Catalog = /** @class */ (function () {
        function Catalog() {
            this.items = new Array();
        }
        Catalog.prototype.getAllItems = function () {
            return this.items;
        };
        return Catalog;
    }());
}
function usingPromises() {
    function doAsyncTask(succeed) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Async Task Complete");
                if (succeed) {
                    resolve(JSON.stringify({ Id: 1, Person: "Hugo Wolf" }));
                }
                else {
                    reject("Outcome: Promise rejected");
                }
            }, 1000);
        });
    }
    doAsyncTask(true)
        .then(function (data) {
        return console.log("Date received from Async Task", JSON.parse(data));
    })
        .catch(function (err) { return console.log("Err:", err); });
}
function usingPromises2() {
    var query = "http://sp2016/_api/web/title";
    //Callbacks
    $.ajax({
        type: "GET",
        url: query,
        dataType: "json",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: function (data) {
            console.log(data.d.results);
        },
        error: function (msg) {
            console.log("error calling service", msg);
            console.log(msg);
        }
    });
    //Promises
    $.ajax({
        type: "GET",
        url: query,
        dataType: "json",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        }
    }).then(function (data) {
        console.log(data);
    }).fail(function (err) {
        console.log(err);
    });
}
var ratesQuery = "http://data.fixer.io/api/latest?access_key=6c36c303e33169dd7102897259fc93be";
function usingFetch() {
    fetch(ratesQuery).then(function (response) {
        console.log("Data received from fetch", response);
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
}
function usingFetchAwait() {
    function getRates() {
        return __awaiter(this, void 0, void 0, function () {
            var response, reates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(ratesQuery)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        reates = _a.sent();
                        console.log("Data received using fetch - await", reates);
                        return [2 /*return*/];
                }
            });
        });
    }
    getRates();
}
function postFetch() {
    var body = {
        description: "Fetch API Post example",
        public: true,
        files: {
            "test.js": {
                content: "Abc"
            }
        }
    };
    fetch("https://api.github.com/gists", {
        method: "post",
        body: JSON.stringify(body)
    })
        .then(function (response) {
        console.log("Created Gist", response.json());
    });
}
var SPDemos;
(function (SPDemos) {
    var TopicMM = /** @class */ (function () {
        function TopicMM() {
        }
        return TopicMM;
    }());
    SPDemos.TopicMM = TopicMM;
    var NewsService = /** @class */ (function () {
        function NewsService() {
            this.errorHandler = function (err) {
                console.log("REST error:");
                console.log(err);
            };
            this.hostUrl = decodeURIComponent(this.getQueryStringParameter("SPHostUrl"));
            this.appUrl = decodeURIComponent(this.getQueryStringParameter("SPAppWebUrl"));
            this.queryBase = this.appUrl + "/_api/SP.AppContextSite(@target)/";
            this.queryTarget = "&@target='" + this.hostUrl + "'";
        }
        NewsService.prototype.getQueryStringParameter = function (paramToRetrieve) {
            var params = document.URL.split("?")[1].split("&");
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == paramToRetrieve)
                    return singleParam[1];
            }
        };
        NewsService.prototype.getNews = function () {
            var query = this.queryBase +
                "web/lists/getbytitle('news')/GetItems(query=@v1)?@v1={'ViewXml':'<View><Query></Query></View>'}" +
                this.queryTarget;
            var digest = $("#__REQUESTDIGEST").val();
            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "POST",
                    url: query,
                    dataType: "json",
                    headers: {
                        "accept": "application/json;odata=verbose",
                        "content-type": "application/json;odata=verbose",
                        "X-RequestDigest": digest
                    },
                    success: function (data) {
                        resolve(JSON.stringify(data.d.results));
                    },
                    error: function (msg) {
                        console.log("error calling service", msg);
                        console.log(msg);
                        reject(msg);
                    }
                });
                //var headers = new Headers();
                //headers.set("accept", "application/json;odata=verbose");
                //headers.set("content-type", "application/json;odata=verbose");
                //headers.set("X-RequestDigest", digest);
                //fetch(query,
                //        {
                //            method: "post",
                //            body: JSON.stringify(query),
                //            headers: headers,
                //            credentials: 'same-origin'
                //        }).catch(err => console.log("error calling news list ", err))
                //    .then(response => {
                //        console.log(response);
                //        resolve(JSON.stringify({ Id: 1, Person: "Hugo Wolf" }));
                //    });
            });
        };
        return NewsService;
    }());
    SPDemos.NewsService = NewsService;
})(SPDemos || (SPDemos = {}));
function loadNews() {
    debugger;
    var service = new SPDemos.NewsService();
    service.getNews().then(function (data) {
        console.log("data received from service: ", data);
    });
}
function loadNewsJsom() {
    debugger;
    var ctx = SP.ClientContext.get_current();
    var web = ctx.get_web();
    var lists = web.get_lists();
    var listNews = lists.getByTitle("News");
    var firstNews = listNews.getItemById(1);
    ctx.load(firstNews);
    ctx.executeQueryAsync(function () {
        var mmField = firstNews.get_item("Topic");
        console.log("title of Managed Metadata field is " + mmField.Label);
    }, function (sender, args) {
        console.log("Request failed. " + args.get_message());
    });
}
//# sourceMappingURL=Demo.js.map