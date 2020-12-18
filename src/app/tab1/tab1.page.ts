import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
 
export class Tab1Page {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public showDetails = false;
  view(){
    this.showDetails = !this.showDetails;
  }
  view2(){
    this.showDetails = !this.showDetails;
  }
  constructor() {}

  
}

