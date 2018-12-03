/**
 * @author - Shahabz shaikh
 * @description - This table module are fetures module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ----------------------------------------------- //
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
