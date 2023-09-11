import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  User_Name: string = '';
  User_Age: string = '';
  User_Email: string = '';
  User_Password: string = '';
}
