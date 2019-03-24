export class Shell {
    constructor() {
        this.shellValue = "parent variable";
    }
    configureRouter(config, router) {
        this.router = router;
        config.title = "New Route Module";
        config.map([
            { route: ['', 'eventSection'], moduleId: 'Events/eventSection', name:'Events N', title:'Events T', nav: true},
            { route: ['Jobs'], moduleId: 'Jobs/job', name:'Jobs N', title:'Jobs T', nav: true},
            { route: ['Discussion'], moduleId: 'Discussion/discussion', name:'Discussion N', title:'Discussion T', nav: true}
        ]);
    }
}