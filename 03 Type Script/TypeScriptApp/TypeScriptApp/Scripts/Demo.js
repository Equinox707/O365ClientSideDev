"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
Object.defineProperty(exports, "__esModule", { value: true });
function basicVariables() {
    debugger;
    var myname = "alex";
    //Numbers
    var age;
    var weight = 83.12;
    var dogWeight = 25.4;
    // dogWeight = "heavy"
    var rand = Math.random();
    var numbers = [];
    var myNumArray = new Array();
    numbers[0] = 1;
    // numbers.push("two"); // compile-time error
    let notSure = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
    var isCustomer = false;
    var finished = false;
    //strings
    var dogName = "Giro";
    var otherDogName = "Soi";
    var myString = "ten";
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
    for (let index = 0; index < array.length; index++) {
        console.log("Inside for ..." + index);
        console.log("Inside for ..." + array[index]);
    }
    console.log(index); // 0
    const pi = 3.14;
    //pi = 2;
    const person = { name: "john", age: 22 };
    person.name = "franz";
}
function stringFunctions() {
    debugger;
    var productID = 100;
    var category = "music";
    //string concatenation
    var url = "http://server/" + category + "/" + productID;
    console.log(url);
    //Template Literals using Backticks
    var tl = `http://server/${category}/${productID}`;
    console.log(tl);
    //startswith
    var str = "To be, or not to be, that is the question.";
    console.log(str.startsWith("To be")); // true
    console.log(str.endsWith("question.")); // true       
}
function useVoidAny() {
    debugger;
    function handleClick() {
        var g = "I don't return anything.";
        console.log(g);
    }
    //let nonsens: void = 10; //Conversion error
    let nonsens = undefined;
    let likeadelegate = handleClick();
    //execute it
    likeadelegate;
}
function useEnums() {
    debugger;
    let Happyness;
    (function (Happyness) {
        Happyness[Happyness["happy"] = 2] = "happy";
        Happyness[Happyness["unhappy"] = 4] = "unhappy";
        Happyness[Happyness["ok"] = 6] = "ok";
    })(Happyness || (Happyness = {}));
    let isHappy = Happyness.happy;
    let Sex;
    (function (Sex) {
        Sex["male"] = "m";
        Sex["female"] = "f";
        Sex["undefined"] = "u";
    })(Sex || (Sex = {}));
    let VoucherStatus;
    (function (VoucherStatus) {
        VoucherStatus[VoucherStatus["draft"] = 0] = "draft";
        VoucherStatus[VoucherStatus["complete"] = 1] = "complete";
        VoucherStatus[VoucherStatus["pending"] = 2] = "pending";
    })(VoucherStatus || (VoucherStatus = {}));
    var status;
    status = VoucherStatus.draft;
    status = VoucherStatus.complete;
    //status = VoucherStatus.unfinished; // compile-time error
    //status = "on the way"; // compile-time error
    if (status === VoucherStatus.complete) {
    }
    class Voucher {
    }
    function handleVoucher(v, status) {
        switch (status) {
            case VoucherStatus.complete:
                console.log(`got voucher ${v}: will pay`);
                break;
            case VoucherStatus.draft:
                console.log(`got voucher ${v}: will save to O365`);
                break;
            case VoucherStatus.pending:
                console.log(`got voucher ${v}: will call the accountant`);
                break;
            default:
                console.log("...");
                break;
        }
    }
    handleVoucher({ ID: 1, Text: "Media Markt", Amount: 22, Date: new Date() }, status);
}
function useTypings() {
    //using jQuery
    let myArray = ["Angular", "React", "SPFx"];
    console.log("myArray is an Array: ", $.isArray(myArray));
}
function introArrays() {
    debugger;
    //declaration using type followed by []
    var customers = ["Alex", "Giro", "Sonja", "Soi", "David"];
    //declaration using generic array type
    let nbrs = [3, 4, 5];
    console.log(customers.length + "Persons in Array");
    customers[2] = "Brunhilde";
    console.log("Person with index 1 is" + customers[1]);
    //for ... of
    let list = [4, 5, 6];
    for (let i in list) {
        console.log(i); // "0", "1", "2", -> index
    }
    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }
    // array destructuring
    let arrNbr = [8, 4, 100, -5, 20];
    let [first, second, third] = arrNbr;
    console.log(third, second, first); // output: 100, 4, 8
    let myArray = [1, ["hello"], true], [a, b, c] = myArray;
    // output: 1, ['hello']
    console.log(a, b);
}
function arrayHelpers() {
    debugger;
    var fruits = [
        { name: "apples", quantity: 2, price: 3, region: "europe" },
        { name: "bananas", quantity: 0, price: 5, region: "caribean" },
        { name: "cherries", quantity: 5, price: 8, region: "europe" }
    ]; //-> Json Objects from REST call
    //remember ECMA Script 5 pattern
    var result = [];
    for (var i = 0; i < fruits.length; i++) {
        var item = fruits[i];
        if (item.quantity < 5) {
            result.push(item);
        }
    }
    console.log(`There areas ${result.length} items in the Array`);
    //forEach
    fruits.forEach(function (fruit) {
        fruit.quantity++;
    });
    fruits.forEach((item) => {
        item.quantity++;
    });
    fruits.forEach(item => item.quantity++);
    //find -> returns first item
    var cherry = fruits.find(function (fruit) {
        return fruit.name === "cherries";
    });
    console.log(cherry);
    //filter -> returns array
    var cheap = fruits.filter(function (item) {
        return item.price < 6;
    });
    console.log(cheap);
    //map -> shape arr
    var names = fruits.map(function (item) {
        return item.name;
    });
    //reduce:  You want to find a cumulative or concatenated value based on elements across the array
    var rockets = [
        { country: "Russia", launches: 32 },
        { country: "US", launches: 23 },
        { country: "China", launches: 16 },
        { country: "Europe(ESA)", launches: 7 },
        { country: "India", launches: 4 },
        { country: "Japan", launches: 3 }
    ];
    var launches = rockets.reduce(function (prevVal, elem) {
        return prevVal + elem.launches;
    }, 0);
    launches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); //same as above
    console.log("launche so far: ", launches);
    //splice
    var dogs = ["whippet", "galgo espanol", "magyar whistler", "magyar agar"];
    dogs.splice(2, 0, "chart polski");
    console.log(dogs); //["whippet", "galgo espanol", "chart polski", "magyar whistler", "magyar agar"]
    dogs.splice(3, 1);
    console.log(dogs); //["whippet", "galgo espanol", "chart polski", "magyar agar"]
}
//-> C# Dictionary
function maps() {
    debugger;
    var myMap = new Map();
    var keyString = "a string";
    var keyObj = {};
    var keyFunc = function () {
        console.log("function in map array");
    };
    // setting the values
    myMap.set("stringContent", keyString);
    myMap.set("objContent", keyObj);
    myMap.set("functionContent", keyFunc());
    console.log("Map size: " + myMap.size); // 3
    // getting the values
    myMap.get("stringContent"); // "value associated with 'stringContent'"
    myMap.get("objContent");
    myMap.get("functionContent");
    myMap.delete("stringContent");
    myMap.clear();
}
//-> Indexed Array ... Somehow Generic List
function sets() {
    debugger;
    var mySet = new Set();
    mySet.add(1);
    mySet.add("some text");
    var o = { a: 1, b: 2 };
    mySet.add(o);
    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(Math.sqrt(25)); // true
    mySet.has("Some Text".toLowerCase()); // true
    mySet.has(o); // true
    var size = mySet.size; // 4
    mySet.delete(5); // removes 5 fro
}
function restParams() {
    debugger;
    function playLotto(name, ...bets) {
        console.log(`${name} is playing the following lottery numbers: `);
        bets.forEach((nbr) => console.log(nbr));
    }
    playLotto("Hannes", 3, 12, 45, 48);
    playLotto("Hugo", 3, 12, 45, 48, 55, 22);
    var shop = new Array();
    shop.category = new Map();
    shop.add = function (categoryName, ...products) {
        var row = shop.category[categoryName];
        if (row == undefined) {
            shop.category.set(categoryName, new Array());
        }
        products.forEach(item => {
            shop.category.get(categoryName).push(item);
        });
    };
    shop.add("fruits", "apple");
    shop.add("dairy", "milk", "cheese", "yoghurt");
    shop.add("pastries", "donuts", "croissants");
    shop.add("cleaning", "soap", "body lotion", "shampoo", "tooth brush");
    console.log("There are the following products in the store", shop);
}
function spreadOperator() {
    console.log(Math.max(3, 5, 1)); // 5
    let arr = [3, 5, 1];
    //console.log( Math.max(arr) ); // NaN
    console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)
    let arr1 = [1, -2, 3, 90];
    let arr2 = [8, 3, -8, 1];
    console.log("Maximum is", Math.max(1, ...arr1, 2, ...arr2, 25)); // 90
    //Sample from Above
    function playLotto(name, ...bets) {
        console.log(`${name} is playing the following lottery numbers: `);
        bets.forEach((nbr) => console.log(nbr));
    }
    playLotto("Hannes", 3, 12, 45, 48);
    let numbers = [3, 12, 45, 48];
    //calling a function with ...rest param using ...spread
    playLotto("Hannes", ...numbers);
}
function typedFunctions() {
    debugger;
    //C# delegate ... variable that contains a function
    let addFunction = function (x, y) {
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
    function getAddress(street, city = "Vienna") {
        return `${street}, ${city}`;
    }
    console.log(getAddress("Neuwaldegger Straße"));
    console.log(getAddress("Seestraße", "Idolsberg"));
    //rest param
    function buildFruitBucket(fruitType, ...fruits) {
        console.log("The following " + fruitType + " are in the bucket " + fruits.join(", "));
    }
    buildFruitBucket("Beeren", "Himbeeren", "Brombeeren", "Goji Beeren");
}
function returnValue() {
    function twoReturns() {
        return ["abc", "cde"];
    }
    console.log("result of function with two returns: ", twoReturns());
}
function arrowFunctions() {
    debugger;
    var rectangleFunction = function (width, height) {
        return width * height;
    };
    //Implemented as Lambda or "Arrow" Function
    var rectangleFunctionArrow = (width, height) => height * width;
    let result = rectangleFunctionArrow(10, 22);
    console.log(result);
}
function functionOverloads() {
    debugger;
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
        else {
            return null;
        }
    }
    let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    let pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
function generatorFunction() {
    debugger;
    function* getColors() {
        //Code to be executed in between
        yield "green";
        //Code to be executed in between
        yield "red";
        //Code to be executed in between
        yield "blue";
    }
    const colorGenerator = getColors();
    debugger;
    console.log(colorGenerator.next());
    console.log(colorGenerator.next());
    console.log(colorGenerator.next());
    //practical usage many time together with for ... of
    const arrColor = [];
    let cols = getColors();
    for (let col of Array.from(cols)) { //Array.from casts IterableIterator<string> to Array<string>
        arrColor.push(col);
    }
    console.log(arrColor);
}
function objectsBasics() {
    debugger;
    let myperson = new Object(); //old style
    let person = { Id: 1, Name: "Alexander" };
    person.dance = function () { console.log("I am dancing"); };
    person.walk = () => console.log(`I am ${person.Name} and I'm walking`);
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
            make,
            model,
            value
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
            depreciate() {
                this.value -= 2500;
            }
        };
    }
}
function destructuring() {
    debugger;
    // object pattern matching
    let { lName, fName } = { fName: "John", lName: "Doe" };
    // output: Doe, John
    console.log(lName + ", " + fName);
    var rect = { x: 0, y: 10, width: 15, height: 20 };
    // Destructuring assignment
    var { x, y, width, height } = rect;
    console.log(x, y, width, height); // 0,10,15,20
    // Destructuring using REST Param
    var _a = { w: 1, x: 2, y: 3, z: 4 }, { w, x } = _a, remaining = __rest(_a, ["w", "x"]);
    console.log(w, x, remaining); // 1, 2, {y:3,z:4}
}
function valref() {
    debugger;
    let person = { Id: 1, Name: "Alexander" };
    let myNumber = 100;
    function passArgs(nbr, pers) {
        nbr += 1;
        pers.Name = "Alex";
    }
    passArgs(myNumber, person);
    console.log("result for myNumber & person:", myNumber, person);
    myNumber = 500;
    person.name = "";
    passArgs(myNumber, Object.assign({}, person));
    console.log("result for myNumber & person:", myNumber, person);
}
function basicClasses() {
    debugger;
    class Voucher {
    }
    let v = new Voucher();
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
        let v = vouchers[i];
        console.log(v.Text);
    }
    for (let v in vouchers) {
        if (vouchers.hasOwnProperty(v)) {
            console.log(v);
        }
    }
    //try changing: let v -> var v ... think why
    for (let v of vouchers) {
        console.log(v.Text);
    }
}
function classesConstructor() {
    debugger;
    class Person {
        constructor(Name, Alive) {
            this.name = Name;
            this.alive = Alive;
        }
    }
    let jim = new Person("Jim", true);
    console.log(jim.name + " is alive: " + jim.alive);
    class Bill {
        constructor(Text = "", Paid = false) {
            this.text = Text;
            this.paid = Paid;
        }
    }
    var b1 = new Bill("Car Purchase");
    var b2 = new Bill("Rösti für Freundin", true);
    console.log("b1 with Text: " + b1.text + " was " + b1.paid);
    console.log("b2 with Text: " + b2.text + " was " + b2.paid);
    class Dog {
        constructor(name, breed) {
            this.name = name;
            this.breed = breed;
        }
        barkName() {
            return "Wuff, my name is " + this.name + ", I am a " + this.breed;
        }
        sayName() {
            return "Wuff, my name is " + name; // + ", I am a " + breed;
        }
    }
    let dog = new Dog("Soi", "Whippet");
    console.log(dog.barkName());
    console.log(dog.sayName());
    console.log(dog.breed);
    class Smurf {
        constructor(name) {
            if (name.length < 1) {
                throw new Error("Empty name!");
            }
            this.name = name;
        }
    }
    var smurf = new Smurf("Daniel");
    //smurf.name = "Dan"; // Error! 'name' is read-only.
}
function getSet() {
    debugger;
    let passcode = "secret passcode";
    class Citzien {
        get fullName() {
            return this._fullName;
        }
        set fullName(newName) {
            this._fullName = `Citizen ${newName}`;
            console.log("name changed to " + newName);
        }
    }
    let employee = new Citzien();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
function inheritance() {
    debugger;
    class Dog {
        constructor(name) {
            this.name = name;
            this.speed = "with 40 km/h";
        }
        move(meters) {
            console.log(this.name + " moved " + meters + " meters " + this.speed);
        }
    }
    class Sighthound extends Dog {
        constructor(name) {
            super(name);
            this.speed = "with up to 110 km/h";
        }
        move(meters = 500) {
            console.log("Running ..." + meters + "m. " + this.speed);
            super.move(meters);
        }
    }
    var dog = new Dog("Bello");
    dog.move(50);
    var hound = new Sighthound("Soi");
    hound.move();
    hound.move(1000);
    //Protected Properties
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name); //base c#
            this.department = department;
        }
        introduceSelf() {
            return `Hello, my name is ${this.name} and I work in ${this.department} department.`;
        }
    }
    let howard = new Employee("Howard", "Sales");
    console.log(howard.introduceSelf());
    //console.log(howard.name); // error
}
function staticProperties() {
    debugger;
    class Grid {
        constructor(scale) {
            this.scale = scale;
        }
        static sayName() {
            return "I am a Grid";
        }
        calculateDistanceFromOrigin(point) {
            var xDist = point.x - Grid.origin.x;
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }
    Grid.origin = { x: 0, y: 0 };
    console.log(Grid.origin);
    console.log(Grid.sayName());
    var grid = new Grid(3);
    var p = { x: 10, y: 20 };
    var result = grid.calculateDistanceFromOrigin(p);
    console.log("Grid result:", result);
}
// Interfaces
function interfacesBasics() {
    debugger;
    class Knight {
        constructor() {
            this.weapon = "Battle Axe";
        }
        sayName() {
            return this.name;
        }
    }
    class Robber {
        sayName() {
            return this.name;
        }
    }
    let rob = new Knight();
    rob.name = "Rob Stark";
}
function interfacesNullability() {
    debugger;
    class DeliveryManager {
    }
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
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    var mySearch;
    mySearch = function (source, subString) {
        return false;
    };
    mySearch = (source, subString) => false;
}
function genericFunctions() {
    debugger;
    function concat(arg) {
        let result = "";
        for (var m of arg) {
            result += m.toString() + ", ";
        }
        return result;
    }
    let stringArr = ["Alex", "Giro", "Soi the Whippet"];
    console.log(concat(stringArr));
    let nbrArr = [100, 201, 322];
    //let nbrArr: Array<number> = [100, 201, 322, "geht nicht weil string"];
    console.log(concat(nbrArr));
}
function genericClassesInterfaces() {
    class Catalog {
        constructor() {
            this.items = new Array();
        }
        addItem(newItem) {
            this.items.push(newItem);
        }
        getNewestItem() {
            return this.items[this.items.length - 1];
        }
        getAllItems() {
            return this.items;
        }
    }
    let cat = new Catalog();
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
    class Catalog {
        constructor() {
            this.items = new Array();
        }
        getAllItems() {
            return this.items;
        }
    }
}
function usingPromises() {
    function doAsyncTask(succeed) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
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
        .then(data => console.log("Date received from Async Task", JSON.parse(data)))
        .catch(err => console.log("Err:", err));
}
function usingFetch() {
    fetch("https://api.fixer.io/latest").then(data => console.log("Data received from fetch", data));
}
function usingFetchAwait() {
    function getRates() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch("https://api.fixer.io/latest");
            let reates = yield response.json();
            console.log("Data received using fetch - await", reates);
        });
    }
    getRates();
}
function postFetch() {
    const body = {
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
        .then(response => {
        console.log("Created Gist", response.json());
    });
}
var SPDemos;
(function (SPDemos) {
    class TopicMM {
    }
    SPDemos.TopicMM = TopicMM;
    class NewsService {
        constructor() {
            this.errorHandler = err => {
                console.log("REST error:");
                console.log(err);
            };
            this.hostUrl = decodeURIComponent(this.getQueryStringParameter("SPHostUrl"));
            this.appUrl = decodeURIComponent(this.getQueryStringParameter("SPAppWebUrl"));
            this.queryBase = this.appUrl + "/_api/SP.AppContextSite(@target)/";
            this.queryTarget = `&@target='${this.hostUrl}'`;
        }
        getQueryStringParameter(paramToRetrieve) {
            const params = document.URL.split("?")[1].split("&");
            for (let i = 0; i < params.length; i = i + 1) {
                const singleParam = params[i].split("=");
                if (singleParam[0] == paramToRetrieve)
                    return singleParam[1];
            }
        }
        getNews() {
            var query = this.queryBase +
                "web/lists/getbytitle('news')/GetItems(query=@v1)?@v1={'ViewXml':'<View><Query></Query></View>'}" +
                this.queryTarget;
            var digest = $("#__REQUESTDIGEST").val();
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: "POST",
                    url: query,
                    dataType: "json",
                    headers: {
                        "accept": "application/json;odata=verbose",
                        "content-type": "application/json;odata=verbose",
                        "X-RequestDigest": digest
                    },
                    success(data) {
                        resolve(JSON.stringify(data.d.results));
                    },
                    error(msg) {
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
        }
    }
    SPDemos.NewsService = NewsService;
})(SPDemos || (SPDemos = {}));
function loadNews() {
    debugger;
    const service = new SPDemos.NewsService();
    service.getNews().then(data => {
        console.log("data received from service: ", data);
    });
}
function loadNewsJsom() {
    debugger;
    const ctx = SP.ClientContext.get_current();
    const web = ctx.get_web();
    const lists = web.get_lists();
    const listNews = lists.getByTitle("News");
    var firstNews = listNews.getItemById(1);
    ctx.load(firstNews);
    ctx.executeQueryAsync(() => {
        var mmField = firstNews.get_item("Topic");
        console.log(`title of Managed Metadata field is ${mmField.Label}`);
    }, (sender, args) => {
        console.log(`Request failed. ${args.get_message()}`);
    });
}
//# sourceMappingURL=Demo.js.map