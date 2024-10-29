import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ChangeDetectionStrategy,  signal} from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule, RouterLink],
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
}
