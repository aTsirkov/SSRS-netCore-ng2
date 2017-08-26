import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TabViewModule, TabPanel } from 'primeng/primeng';

import { ReportViewComponent, ReportViewService } from '../reportview/index';
import { WebApiObservableService } from '../shared/webapi.service'

import { ReportInfo, ReportParameterInfo, ParameterTypeEnum } from '../shared/reportparam.entityes';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    constructor(private reportService: ReportViewService) {
    }

    private sub: Subscription;
    private tabs: Array<ReportInfo>;
    public tvIsNotEmpty: boolean = false;

    ngOnInit() {
        this.reportService.repListEmpty.subscribe(res =>
            this.tvIsNotEmpty = !res
        );

        this.sub = this.reportService.reportListInfo
            .subscribe(res => {
                this.tabs = res;
            });
    }

    ngAfterViewInit() { }

    tabClose(e) {
        this.reportService.delReport(e.index);
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
