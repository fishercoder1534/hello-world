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
}
