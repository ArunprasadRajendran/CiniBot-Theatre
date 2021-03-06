import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  orderDetail(status) {
    if (status == 'success') {
      this.router.navigateByUrl('/orderdetailsuccess');
    } else {
      this.router.navigateByUrl('/orderdetailfailed');
    }
  }

}
