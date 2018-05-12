import { mylib } from './mylib'
import { car } from './car'

let lib = new mylib();
lib.log();

function drivePorsche(){
    let porsche = new car();
    porsche.drive();
}


//export method to global namespace
(<any>window).drive = drivePorsche;