import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2, Inject  } from '@angular/core';
import {ChangeDetectionStrategy,  signal} from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule, RouterLink, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavBarComponent {
  productsDropdown: boolean = false;

  showProducts(){
    this.productsDropdown = true;
  }

  hideProducts(){
    this.productsDropdown = false;
  }

  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }
}
