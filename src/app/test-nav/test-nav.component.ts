import { Component, inject, HostListener, TemplateRef   } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TestComponentComponent } from '../test-component/test-component.component';
import { TestFormComponent } from '../test-form/test-form.component';                              
import { TestDashboardComponent } from '../test-dashboard/test-dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-nav',
  templateUrl: './test-nav.component.html',
  styleUrl: './test-nav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    TestComponentComponent,
    TestFormComponent,
    TestDashboardComponent,
    DragDropModule,
    NgbDatepickerModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class TestNavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    isDarkTheme = false;
  isDragging = false;

  // Start of drag operation
  @HostListener('mousedown')
  @HostListener('touchstart')
  onDragStart() {
    this.isDragging = false; // Reset isDragging at the start of a potential click
  }

  // Detecting the movement for drag
  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  onDragMove(event: MouseEvent | TouchEvent) {
    this.isDragging = true; // Set to true as soon as we detect movement
  }

  // End of the click/drag operation
  @HostListener('mouseup')
  @HostListener('touchend')
  onDragEnd() {
    // No action on drag release; isDragging will prevent toggle if it was a drag
  }

  toggleTheme() {
    if (this.isDragging) {
      // Prevent click event if it was actually a drag
      console.log('Drag detected, click canceled');
      return;
    }
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }
  private modalService = inject(NgbModal);
	closeResult = '';
  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  navbarColor: string = '#1976d2'; // Default color (primary color)

  // Change the parameter type to Event
  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const color = input.value; // Get the value (the selected color)
    
    // Update the CSS variable for the navbar background color
    document.documentElement.style.setProperty('--navbar-background-color', color);
  }

  saveColor(modal: any) {
    // Optionally, close the modal and perform other actions here
    modal.close('Save click');
  }
}
