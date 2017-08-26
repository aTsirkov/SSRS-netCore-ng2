import { Component, Injectable, Input } from "@angular/core";
import { isBrowser } from 'angular2-universal'
import { Observable, Subscription, BehaviorSubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ReportViewService } from '../reportview.service';

import { SharedModule, DialogModule, CalendarModule, RadioButtonModule, FieldsetModule, SelectItem } from 'primeng/primeng';

import { TreeviewItem, TreeviewConfig } from 'ng2-dropdown-treeview';

import { ReportInfo, ReportParameterInfo, ParameterTypeEnum, TreeItem } from '../../shared/reportparam.entityes';
import { TreeNodes } from '../../shared/tree.nodes';

@Component({
    moduleId: module.id,
    selector: 'report2',
    template: 'report2.component.html',
    styles: ['report2.component.css'],
    providers: [
        SharedModule, DialogModule, CalendarModule
    ]
})
export class Report2Component {
    DialogFrm: FormGroup;
    dateStart = new FormControl("", Validators.required);
    dateEnd = new FormControl("", Validators.required);
    ct = new FormControl("", Validators.required);     // SelectItem[];
    prodgr = new FormControl("", Validators.required);    // : SelectItem[];

    private id: string;
    private repInfo: ReportParameterInfo[];
    private rep: ReportInfo = new ReportInfo();

    public display: boolean = false;

    selectedValue: string = '1';

    validControlTypes: SelectItem[];
    validproductGroup: SelectItem[];

    selectedControlTypes: string[];
    selectedproductGroup: string[];

    nodes: TreeviewItem[];
    values: any[];
    config: TreeviewConfig = {
        isShowAllCheckBox: true,
        isShowFilter: true,
        isShowCollapseExpand: false,
        maxHeight: 500
    };

    constructor(private service: ReportViewService, private router: Router, private treeNodes: TreeNodes, private fb: FormBuilder) {
        this.DialogFrm = fb.group({
            dateStart: this.dateStart,
            dateEnd: this.dateEnd,
            ct: this.ct,
            prodgr: this.prodgr
        });
        this.rep.ReportPath = '/Folder1/Report';
        //this.service.getReportInfo('/STARLIMS-SSRS/Журнал аналитического контроля Test')
        this.service.getReportInfo(this.rep)
            .subscribe(res => {
                this.display = true;
                this.repInfo = res.ReportParams.map(p => { p.Children = []; return p });

                this.dateStart.setValue(new Date(this.repInfo.find(p => p.Name === 'dateStart').SelectedValues[0]));
                this.dateStart.valueChanges
                    .subscribe(val => {
                        console.log(val);
                    });

                this.dateEnd.setValue(new Date(this.repInfo.find(p => p.Name === 'dateEnd').SelectedValues[0]));
                this.dateEnd.valueChanges
                    .subscribe(val => {
                        console.log(val);
                    });

                var treeArr = [];
                treeArr = this.repInfo.find(p => p.Name === 'ds').ValidValues
                    .map(itm => {
                        var a = itm.Value.split('/');
                        return { value: a[0], parID: a[1], text: itm.Label }
                    });
                this.nodes = this.treeNodes.transform(treeArr)
                    .map(itm => { return new TreeviewItem(itm) });

                this.validControlTypes = this.repInfo.find(p => p.Name === 'ct').ValidValues
                    .map(itm => { return { label: itm.Label, value: itm.Value } });

                this.validproductGroup = this.repInfo.find(p => p.Name === 'prodgr').ValidValues
                    .map(itm => { return { label: itm.Label, value: itm.Value } });
                
                var paramControl: { param: FormControl, children: FormControl[] };
                var paramControls: any[];
                this.repInfo
                    .forEach(param => {                             // для каждого параметра отчета
                        var Ctrl: FormControl = new FormControl(this.DialogFrm.get(param.Name));
                        if (Ctrl && param.Dependencies) {
                            param.Dependencies                          // определяем список контролов от которых он зависит
                                .forEach(dep => {
                                    this.repInfo.find(p => p.Name == dep).Children.push(param.Name);
                                });
                        }
                    });

                this.repInfo
                    .forEach(param => {                             // для каждого параметра отчета
                        if (this.DialogFrm.get(param.Name) && param.Children.length > 0) {
                            this.DialogFrm.get(param.Name).valueChanges
                                .subscribe(newval => {          // подписываемся на изменения в родителе
                                    param.Children
                                        .forEach(child => {
                                            console.log('get new validValues for ' + child + 'by new value ' + newval);
                                        });

                                });
                        }
                    });

                                                    /*var parCtrl = this.DialogFrm.get(dep);
                                    var p = paramControls.find(c => c.Name == dep);
                                    if (!p) {
                                        paramControls.push(parCtrl);
                                    }
                                    if (parCtrl) {
                                        paramControls.push(Ctrl);
                                        parCtrl.valueChanges
                                            .subscribe(newval => {          // подписываемся на изменения в родителе
                                                param.ValidValues = newval; // изменяем Options зависимого контрола
                                            });
                                    }*/


            })
    }

    controlTypeChanged($event) {
        /*this.productGroup = this.repInfo.ReportParams.find(p => p.Name === 'prodgr').ValidValues
            .map(itm => { return { label: itm.Label, value: itm.Value } });*/
    }

    public onSelectionChange(entry) {
        /*this.fromDate = new Date();
        switch (entry) {
            case 1:
                this.toDate.setDate(this.fromDate.getDate() - 30);
                break;
            case 2:
                this.toDate.setDate(this.fromDate.getDate() - 1);
                break;
        }*/
    }

    public closeDialog(showReport: boolean) {
        this.display = false;
        this.router.navigate(['/']);
        //if (showReport) { this.service.addReport('/STARLIMS-SSRS/Журнал аналитического контроля Test'); }
    }


}