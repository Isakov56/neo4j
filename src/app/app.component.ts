import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { TestNavComponent } from './test-nav/test-nav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'neo4j';
}
