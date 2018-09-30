import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ApplicationProvider } from '../../providers/application/application';
import { Location } from '../../models/location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  locations : any;
  public serachKey: string;
  constructor(public navCtrl: NavController, private appService : ApplicationProvider) {

  }

  onInput(key)
  {
    this.locations = this.appService.GetLocations(this.serachKey)
         .subscribe( locations => this.locations = locations);
  }
  onCancel(event)
  {}

  viewLocation()
  {
    console.log('logged');
    alert('view location');
  }
}
