import { Component } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass',
    './app.component.css',]
})
export class AppComponent {
  title = 'analisissemanal';
  constructor(
    public layoutService: LayoutService,
  ) {

  }
}
