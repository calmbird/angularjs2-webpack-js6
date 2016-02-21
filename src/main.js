import 'reflect-metadata';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {testFunction} from './test.js';

testFunction('aaa');

@Component({
  selector: 'app',
  template: '<p>{{ message }}</p>'
})

class egghead{
  constructor() {
    this.message = 'cbaaaasaas';
  }
}

bootstrap(egghead);