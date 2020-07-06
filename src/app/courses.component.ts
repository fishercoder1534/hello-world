import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img src="{{ imageUrl }}"/>
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    imageUrl;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.imageUrl = "https://i.ytimg.com/vi/DiOTbkLZeK0/maxresdefault.jpg";
    }
}