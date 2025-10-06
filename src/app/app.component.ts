import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trip-bag-client';
}
