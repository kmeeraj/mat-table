import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentDataTableModule, CovalentLayoutModule, CovalentStepsModule, CovalentTabSelectModule} from '@covalent/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule, MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSidenavModule,
  MatSortModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatTableModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentDataTableModule,
    CovalentTabSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
