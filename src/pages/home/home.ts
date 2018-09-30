import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public serachKey: string;
  constructor(public navCtrl: NavController) {

  }

  onInput(event)
  {}
  onCancel(event)
  {}

  viewLocation()
  {
    console.log('logged');
    alert('view location');
  }
}
