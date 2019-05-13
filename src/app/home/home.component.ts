import { Component, OnInit } from '@angular/core';
import {MigrationServiceService} from '../service/migration-service.service';
import {ITdDataTableColumn} from '@covalent/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';
import {MigrationDataSource} from '../datasource/migration-data-source';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
  trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
    ],
})
export class HomeComponent implements OnInit {

  basicData: Element[];
  displayedColumns = [ 'errorType', 'errorcode', 'errortext', 'atTimeStamp'];
  isExpansionDetailRow: any;
  dataSource = new MatTableDataSource([]);


  expandedElement: Element;

  constructor(
    private migrationService: MigrationServiceService
  ) { }

  ngOnInit() {
    this.migrationService.getJSON().subscribe( data => {

      this.basicData = data['errors'][0]['errorList'];
      console.log(this.basicData);
      this.dataSource.data = this.basicData;
      this.isExpansionDetailRow = (i: number, row: Element) => row.hasOwnProperty('detailRow');

    });
  }

}





