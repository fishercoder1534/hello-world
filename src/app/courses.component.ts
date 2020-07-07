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
        <img [src]="imageUrl" />       //this is property binding, the effect is the same as the line above it

        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>

        <button class="btn btn-primary">Save</button>
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    imageUrl;
    colSpan = 2;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.imageUrl = "https://i.ytimg.com/vi/DiOTbkLZeK0/maxresdefault.jpg";
    }
}