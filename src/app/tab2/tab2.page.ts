import { viewClassName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public showDetails = false;
  view(){
    // this.showDetails = !this.showDetails;
  }
  view2(){
    // this.showDetails = !this.showDetails;
  }
  constructor() {}
    
}

