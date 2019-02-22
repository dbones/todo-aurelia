import { PLATFORM } from "aurelia-framework";

export class App {
  
  configureRouter(config) {
    config.title = 'Aurelia Todo example';
    config.map([
      { route: ['', 'home','todo'], name: 'home', moduleId: PLATFORM.moduleName('views/todo') },
      { route: ['about'], name: 'about', moduleId: PLATFORM.moduleName('views/about') }
    ]);
  }

}
