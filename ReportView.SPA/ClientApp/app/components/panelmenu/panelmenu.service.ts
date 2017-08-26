import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { MenuItem } from 'primeng/primeng';

@Injectable()
export class PanelMenuService {
    private url = '/api/ReportServer/';

    constructor(public http: Http) { }

    public getMenuItems() {
        return this.http.get(this.url + 'ReportsTreeList/')
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || "Server error");
    } 
}