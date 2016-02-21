import 'reflect-metadata';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'app',
  template: '<p>{{ message }}</p>'
})
class egghead{
  constructor() {
    this.message = 'cba';
  }
}

bootstrap(egghead);