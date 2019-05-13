import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-system-component',
  templateUrl: './system-component.component.html',
  styleUrls: ['./system-component.component.scss']
})
export class SystemComponentComponent implements OnInit {

  @Input()
  diagnostics: Diagnostics[];

  displayedColumns: string[] = ['analyzer', 'diagnostic'];
  dataSource: any;
  constructor() { }

  ngOnInit() {
    console.log('Diagnostics');
    console.log(this.diagnostics);
    this.dataSource = this.diagnostics;
  }
}

export interface Diagnostics {
  analyzer: string;
  diagnostic: string;
}
