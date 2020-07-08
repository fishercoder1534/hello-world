import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: "A great post!",
    isFavorite: true,
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  }

  courses = [1, 2];

  viewMode = 'else';

  tutorials = [
    { id: 1, name: "tutorial1" },
    { id: 2, name: "tutorial2" },
    { id: 3, name: "tutorial3" },
  ];

  onAdd() {
    this.tutorials.push({id: 4, name: "tutorial5"});
  }

  onRemove(tutorial) {
    let index = this.tutorials.indexOf(tutorial);
    this.tutorials.splice(index, 1);
  }

  onUpdate(tutorial) {
    tutorial.name = "UPDATED";
  }

  languages;

  loadLanguages() {
    this.languages = [
      {id: 1, name: "English"},
      {id: 2, name: "German"},
      {id: 3, name: "Japanese"},
    ];
  }

  trackLanguage(index, language) {
    return language ? language.id : undefined;
  }
}
