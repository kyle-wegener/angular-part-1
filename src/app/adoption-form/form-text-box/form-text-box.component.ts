import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-text-box',
  templateUrl: './form-text-box.component.html',
  styleUrls: ['./form-text-box.component.css']
})
export class FormTextBoxComponent implements OnInit {

  @Input() myDisplay: string;
  @Input() myName: string;

  constructor() { }

  ngOnInit() {
  }

}
