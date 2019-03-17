import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {

    // Inform to use standered configurations.
    // if not mentioned, have to config everything.
    aurelia.use.standardConfiguration();

    // SetRoot function. this refers to the immidiate component to bind here
    // and to what element it should target to.
    aurelia.start().then(x => x.setRoot("app",document.body));
}