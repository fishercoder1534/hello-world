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

        <br/>
        <div (click)="onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'" (click)="onSave($event)">Save</button>
        </div>
        <br/>

        <input (keyup)="onKeyUp($event)" />
        <input (keyup.enter)="onKeyUp2()" />
        <input (keyup.enter)="onKeyUp3($event)" />
        <input #email (keyup.enter)="onKeyUp4(email.value)" />

        <input [value]="name" (keyup.enter)="name = $event.target.value; onKeyUp5()" />
        <input [(ngModel)]="name2" (keyup.enter)="onKeyUp6()" />
        <br/>
        <br/>
        {{ course.c_title | uppercase }}<br/>
        {{ course.students | number }}<br/>
        {{ course.rating | number:'1.2-3' }}<br/>
        {{ course.price | currency:'AUD'}}<br/>
        {{ course.releaseDate | date:'shortDate' }}<br/>

        <br/>
        {{ text | summary }}
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    imageUrl;
    colSpan = 2;
    isActive = false;
    name = "This is the default name and could be overwritten.";
    name2 = "Default name2";
    text = `This is a great text`;

    course = {
        c_title: "The Angular Course",
        rating: 4.907654,
        students: 30123,
        price: 190.15,
        releaseDate: new Date(2016, 10, 2),
    }

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
        console.log("ENTER2 was pressed");
    }

    onKeyUp3($event) {
        console.log($event.target.value);
    }

    onKeyUp4(email) {
        console.log(email);
    }

    onKeyUp5() {
        // this shows two-way binding: binding data from component to view, and also from view to component
        console.log(this.name);
    }

    onKeyUp6() {
        console.log(this.name2);
    }
}