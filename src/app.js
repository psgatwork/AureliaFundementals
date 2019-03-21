//import { serviceOne } from "serviceOne";
import { inject } from "aurelia-framework";

@inject("serviceInstance")
export class App {
    // Inject ServiceOne to viewModel of app
    //static inject = [serviceOne];
    constructor(serviceOne) {
        
        // Use Property of injected service
        serviceOne.serviceData.push("one");

        // Log the service
        console.log("from app");
        console.log(serviceOne.serviceData)
        
        this.message = "Test 2";
        this.imageurl = "https://img.icons8.com/flat_round/64/000000/stork-with-bundle.png";
    }
}