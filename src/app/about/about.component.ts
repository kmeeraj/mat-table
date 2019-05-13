import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {Observable, of} from 'rxjs';
import {DataSource} from '@angular/cdk/table';
import {MigrationServiceService} from '../service/migration-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AboutComponent implements OnInit {

  dataSource: ExampleDataSource;
  displayedColumns: any;
  expandedElement: any;
  isExpansionDetailRow: any;
  basicData: any;

  constructor(private migrationService: MigrationServiceService) {
    this.migrationService.getJSON().subscribe( dat => {
      this.basicData = dat['errors'][0]['errorList'];
      this.dataSource = new ExampleDataSource(this.basicData);
    });

    // this.displayedColumns = ['position', 'name', 'weight'];
    this.displayedColumns = ['errorType', 'errorcode', 'errortext', 'atTimeStamp'];
    this.isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  }
  ngOnInit() {
  }

}

export interface Element {
  jobname: string;
  errorType: number;
  errorcode: number;
  errortext: string;
}



export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private basicData: any) {
    super();
  }
  connect(): Observable<Element[]> {
    const rows = [];
    this.basicData.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log('in rows');
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
}
