/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor() {
    //add sweet alert
  }

  ngOnInit() {
  }
}

function showNotification(from2, align2) {
  const type = ['', 'info', 'success', 'warning', 'danger'];

  const color = Math.floor((Math.random() * 4) + 1);

  $.notify({
    icon: 'notifications',
    message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.'

  }, {
    type: type[color],
    timer: 4000,
    placement: {
      from: from2,
      align: align2
    },
    // eslint-disable-next-line max-len
    template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
      // eslint-disable-next-line max-len
      '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
      '<i class="material-icons" data-notify="icon">notifications</i> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +
      '<div class="progress" data-notify="progressbar">' +
      // eslint-disable-next-line max-len
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
      '</div>' +
      '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}

