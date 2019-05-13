import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-minirow',
  templateUrl: './minirow.component.html',
  styleUrls: ['./minirow.component.scss']
})
export class MinirowComponent implements OnInit {

  @Input()
  recovery: any;

  @Input()
  systemData: any;

  constructor() { }

  ngOnInit() {
    console.log('recovey plan');
    console.log(this.recovery.systemDiagnostic[0].report);
    console.log(this.recovery);
  }

}
