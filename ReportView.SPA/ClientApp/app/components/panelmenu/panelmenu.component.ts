import { Component, OnInit } from "@angular/core";
import { isBrowser } from 'angular2-universal';
import { Observable } from 'rxjs/Rx';

import { PanelModule, PanelMenu, TreeModule, TreeNode, MenuItem } from 'primeng/primeng';
import { PanelMenuService } from './panelmenu.service';

import { ReportViewService } from '../reportview/reportview.service';
import { WebApiObservableService } from '../shared/webapi.service';

import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'panel-menu',
    template: 'panelmenu.component.html',
    styles: ['panelmenu.component.css'],
    providers: [PanelMenuService]
})
export class PanelMenuComponent implements OnInit {
    public items: MenuItem[];
    private errorMessage: string;
    private selectedItem: MenuItem;
    
    constructor(private service: PanelMenuService, private reportService: ReportViewService, private router: Router)  {
        if (isBrowser) {
            var serv = this.service.getMenuItems();
            serv.subscribe(
                (items) => {
                    this.items = items;
                    this.getFolder(this.items);
                },
                (error) => this.errorMessage = <any>error
            );
        }
    }

    getFolder(itm: MenuItem[]) {
        itm.forEach(i => {
            if (i.items) {
                this.getFolder(i.items);
            }
            if (i.url) {
                var cmd: string = i.url;
                i.command = (event) => { this.menuClick(cmd); };
                i.url = null;
            }
        });
    }

    menuClick(reportPath) {
        this.router.navigateByUrl(reportPath);
        //this.reportService.addReport(reportPath);
    }

    ngOnInit() {
        
    }

 /*   onSelect(item: MenuItem) {
         this.selectedItem = item;
         var link = ['/lounge', this.selectedItem.ID];
         this.router.navigate(link);
    } */
}