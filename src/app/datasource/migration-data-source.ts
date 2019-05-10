import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MigrationDataSource extends DataSource <any> {
  data: any;
  constructor(data: Element[]) {
    super();
    this.data = data;
  }
  disconnect(collectionViewer: CollectionViewer): void {
  }

  connect(collectionViewer: CollectionViewer): Observable<any[] | ReadonlyArray<any>> {
    const rows = [];
    this.data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }
}
