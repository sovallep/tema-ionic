import { Component, OnInit } from '@angular/core';

export interface Post {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AboutMe: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PostalCode: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Country: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  City: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Adress: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LastName: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FistName: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  email: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Username: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  post: Post = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    AboutMe: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    PostalCode: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Country: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    City: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Adress: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    LastName: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    FistName: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    email: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Username: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
