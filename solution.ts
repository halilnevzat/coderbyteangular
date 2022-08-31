// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '' +
    '<div>' +
      '<input type="text" value="firstname" id="firstname">' +
      '<input type="text" value="lastname" id="lastname">' +
      '<button (click)="alert()" >Generate</button>' + 
      '<span id="output">generated username...</span>' +
    '</div>',
  styles: []
})
export class MainAppComponent implements OnInit {
  // code goes here
  ngOnInit() { 
    
    
  }

  alert (){
    var isim = (<HTMLInputElement>document.getElementById("firstname")).value.toLowerCase();
    var soyisim = (<HTMLInputElement>document.getElementById("lastname")).value.toLowerCase();
    var random = Math.floor(Math.random() * 9) + 1;
    var combined
    console.log(isim,soyisim,random);    
    (<HTMLInputElement>document.getElementById("output")).textContent= isim + '_' + soyisim + '_' + random;
  }
}
