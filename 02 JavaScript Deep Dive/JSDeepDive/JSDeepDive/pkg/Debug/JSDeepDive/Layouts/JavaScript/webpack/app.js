import {login} from "./login"
import {Utils} from "./utils"


debugger;
login('admin', 'pwd');

let u = new Utils();
u.log("all loaded and executed!");

console.log(u.getUsers());
