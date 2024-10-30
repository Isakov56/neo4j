import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { TestComponentComponent } from '../../../test-component/test-component.component';
import { TestFormComponent } from '../../../test-form/test-form.component';
import { TestNavComponent } from '../../../test-nav/test-nav.component';
import { TestDashboardComponent } from '../../../test-dashboard/test-dashboard.component';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [MatButtonModule, TestComponentComponent, TestFormComponent, TestNavComponent, TestDashboardComponent],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {

}
