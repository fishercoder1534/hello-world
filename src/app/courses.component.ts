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

        <div (click)="onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'" (click)="onSave($event)">Save</button>
        </div>

        <input (keyup)="onKeyUp($event)" />
        <input (keyup.enter)="onKeyUp2()" />
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    imageUrl;
    colSpan = 2;
    isActive = false;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        this.imageUrl = "https://i.ytimg.com/vi/DiOTbkLZeK0/maxresdefault.jpg";
    }

    onSave($event) {
        $event.stopPropagation();//adding this line to stop event bubbling up, remove this line to show event bubbling
        console.log("Button was clicked.", $event)
    }

    onDivClicked() {
        // this is an example to show event bubble, it bubbles up the DOM tree
        console.log("Div was clicked.")
    }

    onKeyUp($event) {
        if ($event.keyCode === 13) {
            console.log("ENTER was pressed");
        }
    }

    onKeyUp2() {
        console.log("ENTER2 was pressed")
    }
}