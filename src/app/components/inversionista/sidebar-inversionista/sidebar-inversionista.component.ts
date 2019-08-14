import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-inversionista',
  templateUrl: './sidebar-inversionista.component.html',
  styleUrls: ['./sidebar-inversionista.component.css']
})
export class SidebarInversionistaComponent implements OnInit {

	isVerMas: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  	this.isVerMas = (this.router.url == "/inversionista/verMas");
  }

}
