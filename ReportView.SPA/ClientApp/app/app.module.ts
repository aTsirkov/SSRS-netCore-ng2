import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { RouterModule } from '@angular/router'
import { routing} from './app.routes';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'

import { SafeHtmlPipe } from './components/shared/safehtml.pipe';
import { PanelMenuComponent } from './components/panelmenu/panelmenu.component';
import { HomeComponent } from './components/home/home.component';

import { ReportViewComponent, EmptyComponent, Report1Component, Report2Component } from './components/reportview/index';

import { SharedModule } from 'primeng/primeng';
import { BlockUIModule } from 'primeng/components/blockui/blockui';
import { PanelModule } from 'primeng/components/panel/panel';
import { PanelMenuModule } from 'primeng/components/panelmenu/panelmenu';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ToolbarModule } from 'primeng/primeng';
import { PaginatorModule, SplitButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';

import { DropdownTreeviewModule } from 'ng2-dropdown-treeview';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        SafeHtmlPipe,
        EmptyComponent,
        PanelMenuComponent,
        HomeComponent,
        ReportViewComponent,
        Report1Component,
        Report2Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        UniversalModule,
        routing,
        DropdownTreeviewModule.forRoot(),
        SharedModule,
        PanelModule,
        PanelMenuModule,
        DialogModule,
        CalendarModule,
        ToolbarModule,
        PaginatorModule,
        SplitButtonModule,
        TabViewModule,
        RadioButtonModule,
        FieldsetModule,
        MultiSelectModule
    ],
    providers: [
    ]
})
export class AppModule {
}
