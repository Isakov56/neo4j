import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, GetStartedComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
