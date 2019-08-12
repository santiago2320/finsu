import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-simular-inv',
  templateUrl: './simular-inv.component.html',
  styleUrls: ['./simular-inv.component.css']
})
export class SimularInvComponent implements OnInit {

  minValue: number = 0;
	maxValue: number = 2000000;
	labelValue: string;
	options: Options = {
	  floor: 0,
	  ceil: 4000000,
	  step: 10000,
	  enforceStep: false,
	  enforceRange: false,
	  getSelectionBarColor: (value: number): string => {
	   return '#FC9A0D';
	 },
	 getPointerColor: (value: number): string => {        
	     return '#FC9A0D';
	 }
	};

  constructor() { }

  ngOnInit() {
  	this.actualizarLabel();
  }

  actualizarLabel(){
    this.labelValue="Precio $" + this.maxValue;
  }

}
