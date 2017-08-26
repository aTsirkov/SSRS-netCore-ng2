import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WebApiObservableService } from '../shared/webapi.service'
import { Observable } from 'rxjs/Observable';
//import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { TreeviewItem } from 'ng2-dropdown-treeview';

import { ReportInfo, ReportParameterInfo, ParameterTypeEnum } from '../shared/reportparam.entityes';

const urlServer = '/api/ReportServer/';

@Injectable()
export class ReportViewService {
    constructor(private http: Http, private web: WebApiObservableService) { }

    public reportListInfo: ReplaySubject<Array<ReportInfo>> = new ReplaySubject<Array<ReportInfo>>();
    private _reportListInfo: Array<ReportInfo> = new Array<ReportInfo>();
    public repListEmpty: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    public getReport(index: number) {
        return this.reportListInfo[index];
    }

/*    public getReportInfo(reportPath: string): Observable<ReportInfo> {
        return this.web.getServiceWithComplexObjectAsQueryString(urlServer + 'getReportParams/', { reportPath: reportPath })
    }*/

    public getReportInfo(reportInfo: ReportInfo): Observable<ReportInfo> {
        return this.web.getServiceWithComplexObjectAsQueryString(urlServer + 'getReportParams/', { parameters: reportInfo })
    }


    /*addReport(reportPath: string) {
        this.repListEmpty.next(false);
        this.getReportInfo(reportPath)
            .subscribe(response => {
                this._reportListInfo.push(response);
                this.reportListInfo.next(this._reportListInfo)
            })
    }*/

    delReport(index: number) {
        this._reportListInfo.splice(index, 1);
        this.reportListInfo.next(this._reportListInfo);

        if (this._reportListInfo.length == 0) {
            this.repListEmpty.next(true);
        }

    }

    getNodes(): TreeviewItem[] {
        const item1 = new TreeviewItem(
            {
                value: 1,
                text: 'root1',
                children: [
                    { value: 2, text: 'child1' },
                    { value: 3, text: 'child2' }
                ]
            });
        const item2 = new TreeviewItem(
            {
                value: 4,
                text: 'root2',
                children: [
                    { value: 5, text: 'child2.1' },
                    {
                        value: 6,
                        text: 'child2.2',
                        children: [
                            { value: 7, text: 'subsub' }
                        ]
                    }
                ]
            });

        return [item1, item2];
    }

    public getMenuItems() {
        return this.http.get(urlServer + 'ReportsTreeList/')
            .map(response => response.json())
            .catch(this.handleError);
    }

    public getReportPage(reportPath, page, urlParams) {
        return this.web.getServiceWithComplexObjectAsQueryString(urlServer + 'getReportPage/', { reportPath: reportPath })
        /*return this.http.get(urlServer + 'getReportPage/')
            .map(response => response)
            .catch(this.handleError);*/
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || "Server error");
    } 
}
