import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-comprador',
  templateUrl: './sidebar-comprador.component.html',
  styleUrls: ['./sidebar-comprador.component.css']
})
export class SidebarCompradorComponent implements OnInit {

	isVerMas: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  	this.isVerMas = (this.router.url == "/comprador/verMas");
  }

}
