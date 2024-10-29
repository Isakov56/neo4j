import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import {ChangeDetectionStrategy,  signal} from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

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

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const themeClass = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    
    // Remove existing theme class and add the new one
    this.renderer.removeClass(document.body, this.isDarkTheme ? 'light-theme' : 'dark-theme');
    this.renderer.addClass(document.body, themeClass);
  }
}
