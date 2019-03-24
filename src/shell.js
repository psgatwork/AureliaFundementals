export class Shell {
    constructor() {
        this.shellValue = "parent variable";
    }
    configureRouter(config, router) {
        this.router = router;
        config.title= "New Route Module";
        config.map([
            {route:'', moduleId:'eventSection'}
        ]);
    }
}