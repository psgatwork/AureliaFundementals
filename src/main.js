import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {serviceOne} from 'serviceOne'; // For Register Types

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {

    // Create new instance of service Object
    let serviceInstance = new serviceOne();
    serviceInstance.serviceData.push(23);
    serviceInstance.serviceData.push(23);
    serviceInstance.serviceData.push(23);

    // Aurelia Register Types Explicitly
    aurelia.use.instance("serviceInstance",serviceInstance);

    // Inform to use standered configurations.
    // if not mentioned, have to config everything.
    aurelia.use.standardConfiguration();

    // SetRoot function. this refers to the immidiate component to bind here
    // and to what element it should target to.
    aurelia.start().then(x => x.setRoot("app",document.body));
}