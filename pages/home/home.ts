import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {cubaan} from './npmlist'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  
  constructor(
    public navCtrl: NavController,
    public word:any) {
  this.word = cubaan.word
  }

}



