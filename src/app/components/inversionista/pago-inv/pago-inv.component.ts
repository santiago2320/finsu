import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pago-inv',
  templateUrl: './pago-inv.component.html',
  styleUrls: ['./pago-inv.component.css']
})
export class PagoInvComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { size: 'lg',centered: true });
  }

}
