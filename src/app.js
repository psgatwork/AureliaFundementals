import { serviceOne } from "serviceOne";
import { inject } from "aurelia-framework";

@inject(serviceOne)
export class App {
    constructor() {
        this.message = "Test 2";
        this.imageurl = "https://img.icons8.com/flat_round/64/000000/stork-with-bundle.png";
    }
}