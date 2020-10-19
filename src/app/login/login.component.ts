import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  partA: boolean;
  partB: boolean;
  partC: boolean;
  counter: number;
  @ViewChild('btnSubmit') button: ElementRef;

  constructor() { }
  ngOnCreate():void{
     
  }
  ngOnInit(): void {
    this.partA = true;
    this.partB = false;
    this.partC = false;

  }
  isPartA(): boolean{
    console.log("Part A is: "+ this.partA);
    return this.partA;
  }
  isPartB(): boolean{
    return this.partB;
  }
  isPartC(): boolean{
    return this.partC;
  }
  signIn(): void{
    console.log("Start Clicked")
    this.button.nativeElement.innerHTML = "Sign In";
  }

}
