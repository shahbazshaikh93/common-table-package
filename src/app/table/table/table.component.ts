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
  public record;
  public key;
  @Input() public heading: any[];
  @Input() set tableRecord(value) {
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
  @Output() addButton = new EventEmitter();
  @Output() deleteButton = new EventEmitter();
  @Output() editButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // When user Click on add button Go to Add page
  public addRecord() {
    this.addButton.emit();
  }
  // When user Click on delete button delete the record
  public deleteRecord(id: any) {
    this.deleteButton.emit(id);
  }
  // When user Click on edit button user go on edit page
  public editRecord(id: any) {
    this.editButton.emit(id);
  }
}
