import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

  contactMethods = [
    {id: 1, name: "Email"},
    {id: 2, name: "Cell"},
    {id: 3, name: "Phone"},
    {id: 4, name: "Home"},
    {id: 5, name: "Fax"},
  ];
}
