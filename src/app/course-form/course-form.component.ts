import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

  categoryList = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Science"},
  ];

}
