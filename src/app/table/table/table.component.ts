/**
 * @author - Shahbaz Shaikh
 * @description - This Component are use for reusable table.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// --------------------------------------------- //

@Component({
  selector: 'shahbaz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //Declear the variable
  private record: any[];
  public key: any[];

  @Input() public heading: any[];
  @Input() set tableRecord(value: any[]) {
    this.record = value;
    this.record.forEach(element => {
      this.key = Object.keys(element);
    });
  }
  // get record list
  get tableRecord() {
    return this.record;
  }

  // Pass the value to the user
  @Output() addClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();
  @Output() editClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // When user Click on add button Go to Add page
  public addRecord() {
    this.addClick.emit();
  }
  // When user Click on delete button delete the record
  public deleteRecord(record: any) {
    this.deleteClick.emit(record);
  }
  // When user Click on edit button user go on edit page
  public editRecord(record: any) {
    this.editClick.emit(record);
  }
}
