import { Component, Injectable } from "@angular/core";
import { isBrowser } from 'angular2-universal'
import { Observable, Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { ReportViewService } from '../reportview.service';

import { SharedModule, DialogModule, CalendarModule } from 'primeng/primeng';

import { TreeviewItem, TreeviewConfig } from 'ng2-dropdown-treeview';

import { ReportInfo, ReportParameterInfo, ParameterTypeEnum } from '../../shared/reportparam.entityes';

@Injectable()
export class ProductTreeviewConfig extends TreeviewConfig {
    isShowAllCheckBox = true;
    isShowFilter = true;
    isShowCollapseExpand = true;
    maxHeight = 400;
}

@Component({
    selector: 'report1',
    template: require('./report1.component.html'),
    styles: [require('./report1.component.css')],
    providers: [
        SharedModule, DialogModule, CalendarModule
    ]
})
export class Report1Component {
    private id: string;
    private repInfo: ReportInfo;

    public display: boolean = true;
    fromDate: Date;
    toDate: Date;

    nodes: TreeviewItem[];
    values: any[];
    config: TreeviewConfig = {
        isShowAllCheckBox: false,
        isShowFilter: true,
        isShowCollapseExpand: false,
        maxHeight: 500
    };

    constructor(private service: ReportViewService, private router: Router) {
        /*this.service.getReportInfo('/Визуализация качества пленки БТ/Report2')
            .subscribe(res => {
                this.repInfo = res;

            })*/
    }

    public closeDialog(showReport: boolean) {
        this.display = false;
        this.router.navigate(['/']);
        //if (showReport) { this.service.addReport('/Визуализация качества пленки БТ/Report2'); }
    }


}