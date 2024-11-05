import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TestComponentDataSource, TestComponentItem } from './test-component-datasource';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-component',
  templateUrl: './device-management.component.html',
  styleUrl: './device-management.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class DeviceManagementComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TestComponentItem>;
  dataSource = new TestComponentDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
