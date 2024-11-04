import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-buttons',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatListModule, MatToolbarModule, FormsModule, RouterModule],
  templateUrl: './test-buttons.component.html',
  styleUrl: './test-buttons.component.scss'
})
export class TestButtonsComponent {
  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<any>): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  navbarColor: string = '#1976d2'; // Default color (primary color)
  darkTheme: string = ''

  // Change the parameter type to Event
  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const color = input.value; // Get the value (the selected color)
    
    const isDarkMode = document.body.classList.contains('theme-dark');

  
    document.documentElement.style.setProperty('--navbar-background-color', color);
  
  }

  saveColor(modal: any) {
    // Optionally, close the modal and perform other actions here
    modal.close('Save click');
  }
}
