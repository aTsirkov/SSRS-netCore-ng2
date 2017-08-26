(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(6);
	var core_1 = __webpack_require__(4);
	var angular2_universal_1 = __webpack_require__(7);
	var app_module_1 = __webpack_require__(8);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var __compiler__ = __webpack_require__(3);
	var core_1 = __webpack_require__(4);
	var patch = false;
	if (!core_1.__core_private__['ViewUtils']) {
	    patch = true;
	    core_1.__core_private__['ViewUtils'] = core_1.__core_private__['view_utils'];
	}
	if (!__compiler__.__compiler_private__) {
	    patch = true;
	    (__compiler__).__compiler_private__ = {
	        SelectorMatcher: __compiler__.SelectorMatcher,
	        CssSelector: __compiler__.CssSelector
	    };
	}
	var __universal__ = __webpack_require__(5);
	if (patch) {
	    __universal__.ViewUtils = core_1.__core_private__['view_utils'];
	    __universal__.CssSelector = __compiler__.CssSelector;
	    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/compiler");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(9);
	var forms_1 = __webpack_require__(10);
	//import { RouterModule } from '@angular/router'
	var app_routes_1 = __webpack_require__(11);
	var angular2_universal_1 = __webpack_require__(7);
	var app_component_1 = __webpack_require__(38);
	var safehtml_pipe_1 = __webpack_require__(42);
	var panelmenu_component_1 = __webpack_require__(43);
	var home_component_1 = __webpack_require__(49);
	var reportview_component_1 = __webpack_require__(51);
	var empty_component_1 = __webpack_require__(13);
	var report1_component_1 = __webpack_require__(53);
	var report2_component_1 = __webpack_require__(14);
	var primeng_1 = __webpack_require__(31);
	var panel_1 = __webpack_require__(57);
	var panelmenu_1 = __webpack_require__(58);
	var dialog_1 = __webpack_require__(59);
	var calendar_1 = __webpack_require__(60);
	var primeng_2 = __webpack_require__(31);
	var primeng_3 = __webpack_require__(31);
	var primeng_4 = __webpack_require__(31);
	var primeng_5 = __webpack_require__(31);
	var primeng_6 = __webpack_require__(31);
	var primeng_7 = __webpack_require__(31);
	var ng2_dropdown_treeview_1 = __webpack_require__(30);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            safehtml_pipe_1.SafeHtmlPipe,
	            empty_component_1.EmptyComponent,
	            panelmenu_component_1.PanelMenuComponent,
	            home_component_1.HomeComponent,
	            reportview_component_1.ReportViewComponent,
	            report1_component_1.Report1Component,
	            report2_component_1.Report2Component
	        ],
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            forms_1.ReactiveFormsModule,
	            angular2_universal_1.UniversalModule,
	            app_routes_1.routing,
	            ng2_dropdown_treeview_1.DropdownTreeviewModule.forRoot(),
	            primeng_1.SharedModule,
	            panel_1.PanelModule,
	            panelmenu_1.PanelMenuModule,
	            dialog_1.DialogModule,
	            calendar_1.CalendarModule,
	            primeng_2.ToolbarModule,
	            primeng_3.PaginatorModule,
	            primeng_3.SplitButtonModule,
	            primeng_4.TabViewModule,
	            primeng_5.RadioButtonModule,
	            primeng_6.FieldsetModule,
	            primeng_7.MultiSelectModule
	        ],
	        providers: []
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("@angular/platform-browser");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var router_1 = __webpack_require__(12);
	var empty_component_1 = __webpack_require__(13);
	var report2_component_1 = __webpack_require__(14);
	exports.routes = [
	    { path: '', redirectTo: '/empty', pathMatch: 'full' },
	    { path: 'empty', component: empty_component_1.EmptyComponent },
	    { path: 'STARLIMS-SSRS/Журнал аналитического контроля Test', component: report2_component_1.Report2Component },
	    { path: 'Folder1/Report', component: report2_component_1.Report2Component }
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(exports.routes);


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var EmptyComponent = (function () {
	    function EmptyComponent() {
	    }
	    return EmptyComponent;
	}());
	EmptyComponent = __decorate([
	    core_1.Component({
	        selector: 'empty',
	        template: ''
	    })
	], EmptyComponent);
	exports.EmptyComponent = EmptyComponent;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(12);
	var forms_1 = __webpack_require__(10);
	var reportview_service_1 = __webpack_require__(15);
	var primeng_1 = __webpack_require__(31);
	var ng2_dropdown_treeview_1 = __webpack_require__(30);
	var reportparam_entityes_1 = __webpack_require__(32);
	var tree_nodes_1 = __webpack_require__(33);
	var Report2Component = (function () {
	    function Report2Component(service, router, treeNodes, fb) {
	        var _this = this;
	        this.service = service;
	        this.router = router;
	        this.treeNodes = treeNodes;
	        this.fb = fb;
	        this.dateStart = new forms_1.FormControl("", forms_1.Validators.required);
	        this.dateEnd = new forms_1.FormControl("", forms_1.Validators.required);
	        this.ct = new forms_1.FormControl("", forms_1.Validators.required); // SelectItem[];
	        this.prodgr = new forms_1.FormControl("", forms_1.Validators.required); // : SelectItem[];
	        this.rep = new reportparam_entityes_1.ReportInfo();
	        this.display = false;
	        this.selectedValue = '1';
	        this.config = {
	            isShowAllCheckBox: true,
	            isShowFilter: true,
	            isShowCollapseExpand: false,
	            maxHeight: 500
	        };
	        this.DialogFrm = fb.group({
	            dateStart: this.dateStart,
	            dateEnd: this.dateEnd,
	            ct: this.ct,
	            prodgr: this.prodgr
	        });
	        this.rep.ReportPath = '/Folder1/Report';
	        //this.service.getReportInfo('/STARLIMS-SSRS/Журнал аналитического контроля Test')
	        this.service.getReportInfo(this.rep)
	            .subscribe(function (res) {
	            _this.display = true;
	            _this.repInfo = res.ReportParams.map(function (p) { p.Children = []; return p; });
	            _this.dateStart.setValue(new Date(_this.repInfo.find(function (p) { return p.Name === 'dateStart'; }).SelectedValues[0]));
	            _this.dateStart.valueChanges
	                .subscribe(function (val) {
	                console.log(val);
	            });
	            _this.dateEnd.setValue(new Date(_this.repInfo.find(function (p) { return p.Name === 'dateEnd'; }).SelectedValues[0]));
	            _this.dateEnd.valueChanges
	                .subscribe(function (val) {
	                console.log(val);
	            });
	            var treeArr = [];
	            treeArr = _this.repInfo.find(function (p) { return p.Name === 'ds'; }).ValidValues
	                .map(function (itm) {
	                var a = itm.Value.split('/');
	                return { value: a[0], parID: a[1], text: itm.Label };
	            });
	            _this.nodes = _this.treeNodes.transform(treeArr)
	                .map(function (itm) { return new ng2_dropdown_treeview_1.TreeviewItem(itm); });
	            _this.validControlTypes = _this.repInfo.find(function (p) { return p.Name === 'ct'; }).ValidValues
	                .map(function (itm) { return { label: itm.Label, value: itm.Value }; });
	            _this.validproductGroup = _this.repInfo.find(function (p) { return p.Name === 'prodgr'; }).ValidValues
	                .map(function (itm) { return { label: itm.Label, value: itm.Value }; });
	            var paramControl;
	            var paramControls;
	            _this.repInfo
	                .forEach(function (param) {
	                var Ctrl = new forms_1.FormControl(_this.DialogFrm.get(param.Name));
	                if (Ctrl && param.Dependencies) {
	                    param.Dependencies // определяем список контролов от которых он зависит
	                        .forEach(function (dep) {
	                        _this.repInfo.find(function (p) { return p.Name == dep; }).Children.push(param.Name);
	                    });
	                }
	            });
	            _this.repInfo
	                .forEach(function (param) {
	                if (_this.DialogFrm.get(param.Name) && param.Children.length > 0) {
	                    _this.DialogFrm.get(param.Name).valueChanges
	                        .subscribe(function (newval) {
	                        param.Children
	                            .forEach(function (child) {
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
	        });
	    }
	    Report2Component.prototype.controlTypeChanged = function ($event) {
	        /*this.productGroup = this.repInfo.ReportParams.find(p => p.Name === 'prodgr').ValidValues
	            .map(itm => { return { label: itm.Label, value: itm.Value } });*/
	    };
	    Report2Component.prototype.onSelectionChange = function (entry) {
	        /*this.fromDate = new Date();
	        switch (entry) {
	            case 1:
	                this.toDate.setDate(this.fromDate.getDate() - 30);
	                break;
	            case 2:
	                this.toDate.setDate(this.fromDate.getDate() - 1);
	                break;
	        }*/
	    };
	    Report2Component.prototype.closeDialog = function (showReport) {
	        this.display = false;
	        this.router.navigate(['/']);
	        //if (showReport) { this.service.addReport('/STARLIMS-SSRS/Журнал аналитического контроля Test'); }
	    };
	    return Report2Component;
	}());
	Report2Component = __decorate([
	    core_1.Component({
	        selector: 'report2',
	        template: __webpack_require__(34),
	        styles: [__webpack_require__(35)],
	        providers: [
	            primeng_1.SharedModule, primeng_1.DialogModule, primeng_1.CalendarModule
	        ]
	    }),
	    __metadata("design:paramtypes", [reportview_service_1.ReportViewService, router_1.Router, tree_nodes_1.TreeNodes, forms_1.FormBuilder])
	], Report2Component);
	exports.Report2Component = Report2Component;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(16);
	var webapi_service_1 = __webpack_require__(17);
	var Observable_1 = __webpack_require__(18);
	//import { Subscription } from 'rxjs/Subscription';
	var BehaviorSubject_1 = __webpack_require__(28);
	var ReplaySubject_1 = __webpack_require__(29);
	var ng2_dropdown_treeview_1 = __webpack_require__(30);
	var urlServer = '/api/ReportServer/';
	var ReportViewService = (function () {
	    function ReportViewService(http, web) {
	        this.http = http;
	        this.web = web;
	        this.reportListInfo = new ReplaySubject_1.ReplaySubject();
	        this._reportListInfo = new Array();
	        this.repListEmpty = new BehaviorSubject_1.BehaviorSubject(true);
	    }
	    ReportViewService.prototype.getReport = function (index) {
	        return this.reportListInfo[index];
	    };
	    /*    public getReportInfo(reportPath: string): Observable<ReportInfo> {
	            return this.web.getServiceWithComplexObjectAsQueryString(urlServer + 'getReportParams/', { reportPath: reportPath })
	        }*/
	    ReportViewService.prototype.getReportInfo = function (reportInfo) {
	        return this.web.getServiceWithComplexObjectAsQueryString(urlServer + 'getReportParams/', { parameters: reportInfo });
	    };
	    /*addReport(reportPath: string) {
	        this.repListEmpty.next(false);
	        this.getReportInfo(reportPath)
	            .subscribe(response => {
	                this._reportListInfo.push(response);
	                this.reportListInfo.next(this._reportListInfo)
	            })
	    }*/
	    ReportViewService.prototype.delReport = function (index) {
	        this._reportListInfo.splice(index, 1);
	        this.reportListInfo.next(this._reportListInfo);
	        if (this._reportListInfo.length == 0) {
	            this.repListEmpty.next(true);
	        }
	    };
	    ReportViewService.prototype.getNodes = function () {
	        var item1 = new ng2_dropdown_treeview_1.TreeviewItem({
	            value: 1,
	            text: 'root1',
	            children: [
	                { value: 2, text: 'child1' },
	                { value: 3, text: 'child2' }
	            ]
	        });
	        var item2 = new ng2_dropdown_treeview_1.TreeviewItem({
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
	    };
	    ReportViewService.prototype.getMenuItems = function () {
	        return this.http.get(urlServer + 'ReportsTreeList/')
	            .map(function (response) { return response.json(); })
	            .catch(this.handleError);
	    };
	    ReportViewService.prototype.getReportPage = function (reportPath, page, urlParams) {
	        return this.web.getServiceWithComplexObjectAsQueryString(urlServer + 'getReportPage/', { reportPath: reportPath });
	        /*return this.http.get(urlServer + 'getReportPage/')
	            .map(response => response)
	            .catch(this.handleError);*/
	    };
	    ReportViewService.prototype.handleError = function (error) {
	        return Observable_1.Observable.throw(error.json().error || "Server error");
	    };
	    return ReportViewService;
	}());
	ReportViewService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, webapi_service_1.WebApiObservableService])
	], ReportViewService);
	exports.ReportViewService = ReportViewService;


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(16);
	var Observable_1 = __webpack_require__(18);
	// Observable class extensions
	__webpack_require__(19);
	__webpack_require__(20);
	// Observable operators
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	var WebApiObservableService = (function () {
	    function WebApiObservableService(http) {
	        this.http = http;
	        this.headers = new http_1.Headers({
	            'Content-Type': 'application/json',
	            'Accept': 'q=0.8;application/json;q=0.9'
	        });
	        this.options = new http_1.RequestOptions({ headers: this.headers });
	    }
	    WebApiObservableService.prototype.getServiceWithComplexObjectAsQueryString = function (url, param) {
	        var params = new http_1.URLSearchParams();
	        for (var key in param) {
	            if (param.hasOwnProperty(key)) {
	                var val = param[key];
	                params.set(key, val);
	            }
	        }
	        this.options = new http_1.RequestOptions({ headers: this.headers, search: JSON.stringify(param) }); //params });
	        return this.http
	            .get(url, this.options)
	            .map(this.extractData)
	            .catch(this.handleError);
	    };
	    WebApiObservableService.prototype.extractData = function (res) {
	        var body = res.json();
	        return body || {};
	    };
	    WebApiObservableService.prototype.handleError = function (error) {
	        var errMsg = (error.message) ? error.message :
	            error.status ? error.status + " - " + error.statusText : 'Server error';
	        console.error(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    return WebApiObservableService;
	}());
	WebApiObservableService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], WebApiObservableService);
	exports.WebApiObservableService = WebApiObservableService;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/of");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/throw");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/debounceTime");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/distinctUntilChanged");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/do");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/filter");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/switchMap");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("rxjs/BehaviorSubject");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("rxjs/ReplaySubject");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("ng2-dropdown-treeview");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("primeng/primeng");

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ReportInfo = (function () {
	    function ReportInfo() {
	        this.ReportParams = new Array();
	    }
	    return ReportInfo;
	}());
	exports.ReportInfo = ReportInfo;
	var ReportParameterInfo = (function () {
	    function ReportParameterInfo() {
	        this.ValidValues = new Array();
	        this.SelectedValues = new Array();
	    }
	    return ReportParameterInfo;
	}());
	exports.ReportParameterInfo = ReportParameterInfo;
	var ParameterTypeEnum;
	(function (ParameterTypeEnum) {
	    ParameterTypeEnum[ParameterTypeEnum["Boolean"] = 0] = "Boolean";
	    ParameterTypeEnum[ParameterTypeEnum["DateTime"] = 1] = "DateTime";
	    ParameterTypeEnum[ParameterTypeEnum["Integer"] = 2] = "Integer";
	    ParameterTypeEnum[ParameterTypeEnum["Float"] = 3] = "Float";
	    ParameterTypeEnum[ParameterTypeEnum["String"] = 4] = "String";
	})(ParameterTypeEnum = exports.ParameterTypeEnum || (exports.ParameterTypeEnum = {}));
	var ValidValue = (function () {
	    function ValidValue(label, value) {
	        this.Label = label;
	        this.Value = value;
	    }
	    return ValidValue;
	}());
	var TreeItem = (function () {
	    function TreeItem() {
	    }
	    return TreeItem;
	}());
	exports.TreeItem = TreeItem;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var TreeNodes = (function () {
	    function TreeNodes() {
	    }
	    TreeNodes.prototype.transform = function (arr, args) {
	        return this.buildTree(arr);
	    };
	    TreeNodes.prototype.buildTree = function (elements, tree) {
	        var _this = this;
	        if (tree === void 0) { tree = []; }
	        elements.forEach(function (element) {
	            if (!element.parID) {
	                element.children = _this.getNestedChildren(elements, element.value);
	                tree.push(element);
	            }
	        });
	        return tree;
	    };
	    TreeNodes.prototype.getNestedChildren = function (elements, parent) {
	        var _this = this;
	        var out = [];
	        elements.forEach(function (element) {
	            if (element.parID == parent) {
	                var children = _this.getNestedChildren(elements, element.value);
	                if (children.length > 0) {
	                    element.children = children;
	                }
	                out.push(element);
	            }
	        });
	        return out;
	    };
	    return TreeNodes;
	}());
	TreeNodes = __decorate([
	    core_1.Injectable()
	], TreeNodes);
	exports.TreeNodes = TreeNodes;


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<p-dialog header={{id}} [(visible)]=\"display\" modal=\"modal\" responsive=\"true\" closable=\"false\">\r\n    <div class=\"ui-dialog-content\">\r\n        <div class=\"ui-g-12\">\r\n            <p-radioButton name=\"daterange\" value=1 label=\"за смену\" [(ngModel)]=\"selectedValue\" (click)=\"onSelectionChange(1)\"></p-radioButton>\r\n            <p-radioButton name=\"daterange\" value=2 label=\"за сутки\" [(ngModel)]=\"selectedValue\" (click)=\"onSelectionChange(2)\"></p-radioButton>\r\n            <p-radioButton name=\"daterange\" value=3 label=\"за месяц\" [(ngModel)]=\"selectedValue\" (click)=\"onSelectionChange(3)\"></p-radioButton>\r\n        </div>\r\n        <form [formGroup]=\"DialogFrm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"ui-g-6\">\r\n                <a>Дата начала:</a>\r\n                <p-calendar formControlName=\"dateStart\"\r\n                            [showIcon]=\"true\" appendTo=\"body\" dateFormat=\"dd.mm.yy\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2030\">\r\n                </p-calendar>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <a>Дата окончания:</a>\r\n                <p-calendar formControlName=\"dateEnd\"\r\n                            [showIcon]=\"true\" appendTo=\"body\" dateFormat=\"dd.mm.yy\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2030\">\r\n                </p-calendar>\r\n            </div>\r\n            <p-multiSelect formControlName=\"ct\" [options]=\"validControlTypes\" [(ngModel)]=\"selectedControlTypes\"></p-multiSelect>\r\n            <p-multiSelect formControlName=\"prodgr\" [options]=\"validproductGroup\" [(ngModel)]=\"selectedproductGroup\"></p-multiSelect>\r\n        </form>\r\n        <p-fieldset legend=\"Точка отбора\" [toggleable]=\"true\">\r\n            <leo-treeview [config]=\"config\" [items]=\"nodes\" (selectedChange)=\"values = $event\">\r\n            </leo-treeview>\r\n        </p-fieldset>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n            <button type=\"submit\" [disabled]=\"!DialogFrm.valid\">Submit</button>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"closeDialog(false)\" label=\"No\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" (click)=\"closeDialog(true)\" label=\"Yes\"></button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>\r\n\r\n"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(36);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var reportview_service_1 = __webpack_require__(15);
	var webapi_service_1 = __webpack_require__(17);
	var tree_nodes_1 = __webpack_require__(33);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.menuState = 'in';
	    }
	    AppComponent.prototype.toggleMenu = function () {
	        // 1-line if statement that toggles the value:
	        this.menuState = this.menuState === 'out' ? 'in' : 'out';
	    };
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(39),
	        styles: [__webpack_require__(40)],
	        animations: [
	            core_1.trigger('slideInOut', [
	                core_1.state('in', core_1.style({
	                    transform: 'translate3d(0, 0, 0)'
	                })),
	                core_1.state('out', core_1.style({
	                    transform: 'translate3d(100%, 0, 0)'
	                })),
	                core_1.transition('in => out', core_1.animate('400ms ease-in-out')),
	                core_1.transition('out => in', core_1.animate('400ms ease-in-out'))
	            ])
	        ],
	        providers: [reportview_service_1.ReportViewService, webapi_service_1.WebApiObservableService, tree_nodes_1.TreeNodes]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<p-toolbar>\r\n    <div class=\"ui-toolbar-group-right\">\r\n        <button pButton type=\"button\" icon=\"fa-align-justify\" (click)=\"toggleMenu()\"></button>\r\n    </div>\r\n</p-toolbar>\r\n<div style=\"top:40px\">\r\n    <panel-menu class=\"ui-panel\" [@slideInOut]=\"menuState\"></panel-menu>\r\n    <home></home>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(41);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(9);
	var SafeHtmlPipe = (function () {
	    function SafeHtmlPipe(sanitized) {
	        this.sanitized = sanitized;
	    }
	    SafeHtmlPipe.prototype.transform = function (value) {
	        return this.sanitized.bypassSecurityTrustHtml(value);
	    };
	    return SafeHtmlPipe;
	}());
	SafeHtmlPipe = __decorate([
	    core_1.Pipe({ name: 'safeHtml' }),
	    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
	], SafeHtmlPipe);
	exports.SafeHtmlPipe = SafeHtmlPipe;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var angular2_universal_1 = __webpack_require__(7);
	var panelmenu_service_1 = __webpack_require__(44);
	var reportview_service_1 = __webpack_require__(15);
	var router_1 = __webpack_require__(12);
	var PanelMenuComponent = (function () {
	    function PanelMenuComponent(service, reportService, router) {
	        var _this = this;
	        this.service = service;
	        this.reportService = reportService;
	        this.router = router;
	        if (angular2_universal_1.isBrowser) {
	            var serv = this.service.getMenuItems();
	            serv.subscribe(function (items) {
	                _this.items = items;
	                _this.getFolder(_this.items);
	            }, function (error) { return _this.errorMessage = error; });
	        }
	    }
	    PanelMenuComponent.prototype.getFolder = function (itm) {
	        var _this = this;
	        itm.forEach(function (i) {
	            if (i.items) {
	                _this.getFolder(i.items);
	            }
	            if (i.url) {
	                var cmd = i.url;
	                i.command = function (event) { _this.menuClick(cmd); };
	                i.url = null;
	            }
	        });
	    };
	    PanelMenuComponent.prototype.menuClick = function (reportPath) {
	        this.router.navigateByUrl(reportPath);
	        //this.reportService.addReport(reportPath);
	    };
	    PanelMenuComponent.prototype.ngOnInit = function () {
	    };
	    return PanelMenuComponent;
	}());
	PanelMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'panel-menu',
	        template: __webpack_require__(46),
	        styles: [__webpack_require__(47)],
	        providers: [panelmenu_service_1.PanelMenuService]
	    }),
	    __metadata("design:paramtypes", [panelmenu_service_1.PanelMenuService, reportview_service_1.ReportViewService, router_1.Router])
	], PanelMenuComponent);
	exports.PanelMenuComponent = PanelMenuComponent;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(16);
	var Rx_1 = __webpack_require__(45);
	var PanelMenuService = (function () {
	    function PanelMenuService(http) {
	        this.http = http;
	        this.url = '/api/ReportServer/';
	    }
	    PanelMenuService.prototype.getMenuItems = function () {
	        return this.http.get(this.url + 'ReportsTreeList/')
	            .map(function (response) { return response.json(); })
	            .catch(this.handleError);
	    };
	    PanelMenuService.prototype.handleError = function (error) {
	        return Rx_1.Observable.throw(error.json().error || "Server error");
	    };
	    return PanelMenuService;
	}());
	PanelMenuService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], PanelMenuService);
	exports.PanelMenuService = PanelMenuService;


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<p-panel header=\"Отчеты (Томск)\" [toggleable]=\"true\">\r\n    <p-panelMenu [model]=\"items\"></p-panelMenu>\r\n</p-panel>"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(48);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n   border-radius: 6px 6px 6px 6px;\r\n  -moz-border-radius: 6px 6px 6px 6px;\r\n  -webkit-border-radius: 6px 6px 6px 6px;\r\n  border: 2px solid #4297d7;\n  background: linear-gradient(to top, #ffffff, #79b7e7);\n  position: fixed;\n  left: auto;\n  top: 35px;\n  right: 0;\n  bottom: 0;\n  width: 20%;\n  min-width: 250px;\n  z-index: 9999;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\nul {\n  font-size: 18px;\n  line-height: 3;\n  font-weight: 400;\n\n  list-style: none;\n}\n", ""]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var reportview_service_1 = __webpack_require__(15);
	var HomeComponent = (function () {
	    function HomeComponent(reportService) {
	        this.reportService = reportService;
	        this.tvIsNotEmpty = false;
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.reportService.repListEmpty.subscribe(function (res) {
	            return _this.tvIsNotEmpty = !res;
	        });
	        this.sub = this.reportService.reportListInfo
	            .subscribe(function (res) {
	            _this.tabs = res;
	        });
	    };
	    HomeComponent.prototype.ngAfterViewInit = function () { };
	    HomeComponent.prototype.tabClose = function (e) {
	        this.reportService.delReport(e.index);
	    };
	    HomeComponent.prototype.ngOnDestroy = function () {
	        if (this.sub) {
	            this.sub.unsubscribe();
	        }
	    };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(50)
	    }),
	    __metadata("design:paramtypes", [reportview_service_1.ReportViewService])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<p-tabView *ngIf=\"tvIsNotEmpty\" (onClose)=\"tabClose($event)\">\r\n    <p-tabPanel *ngFor=\"let tab of tabs\" [header]=\"tab.Name\" [selected]=\"false\" [closable]=\"true\">\r\n        <div *ngIf=\"tab.ReportPath\" >\r\n            <report-view [reportPath]=\"tab.ReportPath\"></report-view>\r\n        </div>\r\n    </p-tabPanel>\r\n</p-tabView>\r\n"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var reportview_service_1 = __webpack_require__(15);
	var ReportViewComponent = (function () {
	    function ReportViewComponent(service) {
	        this.service = service;
	    }
	    ReportViewComponent.prototype.ngAfterViewInit = function () {
	        this.viewReportPage(1, null);
	    };
	    ReportViewComponent.prototype.ngOnInit = function () {
	        /*if (isBrowser) {
	            this.sub = this.route.params
	                .subscribe(params => {
	                    this.reportPath = params['id'];
	                    this.service.addReport(this.reportPath);
	                    var reportInfo = this.service.reportInfo.getValue
	                    console.log(reportInfo);
	                    //this.viewReportPage(1, null);
	                });
	        }*/
	    };
	    ReportViewComponent.prototype.showLoadingProgress = function (message) {
	        this.hideLoadingProgress();
	        /* $('.ReportViewerContent').hide();
	         $('.ReportViewerContentContainer').append('<div class="loadingContainer"><div style="margin: 0 auto; width: 100%; text-align: center; vertical-align: middle;"><h2><i class="glyphicon glyphicon-refresh gly-spin"></i>' + message + '</h2></div></div>');*/
	    };
	    ReportViewComponent.prototype.hideLoadingProgress = function () {
	        /* $('.loadingContainer').remove();
	         $('.ReportViewerContent').show();*/
	    };
	    ReportViewComponent.prototype.printReport = function () {
	        /* var params = $('.ParametersContainer :input').serializeArray();
	          var urlParams = $.param(params);
	  
	          window.open("/Report/PrintReport/?reportPath=@Model.ReportPath.UrlEncode()&" + urlParams, "_blank");
	          */
	    };
	    ReportViewComponent.prototype.findText = function () {
	        /*$('.ReportViewerContent').removeHighlight();
	        var searchText = $("#ReportViewerSearchText").val();
	        if (searchText != undefined && searchText != null && searchText != "") {
	            this.showLoadingProgress('Searching Report...');
	            var params = $('.ParametersContainer :input').serializeArray();
	            var urlParams = $.param(params);
	
	            var page = parseInt($('#ReportViewerCurrentPage').val());
	
	            $.get("/Report/FindStringInReport/?reportPath=@Model.ReportPath.UrlEncode()&page=" + page + "&searchText=" + searchText + "&" + urlParams).done(function (data) {
	                if (data > 0) {
	                    this.viewReportPage(data, function () {
	                        $('.ReportViewerContent').highlight(searchText);
	                        this.hideLoadingProgress();
	                    });
	                } else {
	                    $('.ReportViewerContent').highlight(searchText);
	                    this.hideLoadingProgress();
	                }
	            });
	        }*/
	    };
	    ReportViewComponent.prototype.viewReportPage = function (page, afterReportLoadedCallback) {
	        var _this = this;
	        this.showLoadingProgress('Loading Report Page...');
	        var ReportPath = this.reportPath;
	        // var params = null;  //$('.ParametersContainer :input').serializeArray();
	        var urlParams = null; //$.param(params);
	        var totalPages = null; //parseInt($('#ReportViewerTotalPages').text());
	        if (page == undefined || page == null || page < 1) {
	            page = 1;
	        }
	        else if (page > totalPages) {
	            page = totalPages;
	        }
	        this.service.getReportPage(ReportPath, page, urlParams)
	            .subscribe(function (data) {
	            _this.updateReportContent(data);
	            _this.hideLoadingProgress();
	            if (afterReportLoadedCallback && typeof (afterReportLoadedCallback) == "function") {
	                afterReportLoadedCallback();
	            }
	        }, function (error) {
	            _this.errorMessage = error;
	            _this.hideLoadingProgress();
	        });
	    };
	    ReportViewComponent.prototype.exportReport = function (element) {
	        /*var params = $('.ParametersContainer :input').serializeArray();
	        var urlParams = $.param(params);
	        var format = $(element).attr('class').replace("Export", "");
	
	        window.location.href = "/Report/ExportReport/?reportPath=@Model.ReportPath.UrlEncode()&format=" + format + "&" + urlParams;
	        */
	    };
	    ReportViewComponent.prototype.updateReportContent = function (data) {
	        if (data != undefined && data != null) {
	            this.reportContent = data.Content;
	            if (data.TotalPages <= 1) {
	                this.hasPages = false;
	            }
	            else {
	                this.hasPages = true;
	            }
	        }
	    };
	    ReportViewComponent.prototype.ngOnDestroy = function () {
	        //this.sub.unsubscribe();
	    };
	    return ReportViewComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], ReportViewComponent.prototype, "reportPath", void 0);
	ReportViewComponent = __decorate([
	    core_1.Component({
	        selector: 'report-view',
	        template: __webpack_require__(52),
	    }),
	    __metadata("design:paramtypes", [reportview_service_1.ReportViewService])
	], ReportViewComponent);
	exports.ReportViewComponent = ReportViewComponent;


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<p-toolbar>\r\n    <div class=\"ui-toolbar-group-left\">\r\n        <p-paginator rows=\"1\" totalRecords=\"120\" pageLinkSize=\"1\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-toolbar-group-left\">\r\n        <button pButton type=\"button\" icon=\"fa-refresh\"></button>\r\n        <p-splitButton icon=\"fa-floppy-o\" [model]=\"items\"></p-splitButton>\r\n        <button pButton type=\"button\" icon=\"fa-print\"></button>\r\n    </div>\r\n</p-toolbar>\r\n\r\n<div [innerHTML]=\"reportContent | safeHtml\"></div>"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(12);
	var reportview_service_1 = __webpack_require__(15);
	var primeng_1 = __webpack_require__(31);
	var ng2_dropdown_treeview_1 = __webpack_require__(30);
	var ProductTreeviewConfig = (function (_super) {
	    __extends(ProductTreeviewConfig, _super);
	    function ProductTreeviewConfig() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.isShowAllCheckBox = true;
	        _this.isShowFilter = true;
	        _this.isShowCollapseExpand = true;
	        _this.maxHeight = 400;
	        return _this;
	    }
	    return ProductTreeviewConfig;
	}(ng2_dropdown_treeview_1.TreeviewConfig));
	ProductTreeviewConfig = __decorate([
	    core_1.Injectable()
	], ProductTreeviewConfig);
	exports.ProductTreeviewConfig = ProductTreeviewConfig;
	var Report1Component = (function () {
	    function Report1Component(service, router) {
	        this.service = service;
	        this.router = router;
	        this.display = true;
	        this.config = {
	            isShowAllCheckBox: false,
	            isShowFilter: true,
	            isShowCollapseExpand: false,
	            maxHeight: 500
	        };
	        /*this.service.getReportInfo('/Визуализация качества пленки БТ/Report2')
	            .subscribe(res => {
	                this.repInfo = res;
	
	            })*/
	    }
	    Report1Component.prototype.closeDialog = function (showReport) {
	        this.display = false;
	        this.router.navigate(['/']);
	        //if (showReport) { this.service.addReport('/Визуализация качества пленки БТ/Report2'); }
	    };
	    return Report1Component;
	}());
	Report1Component = __decorate([
	    core_1.Component({
	        selector: 'report1',
	        template: __webpack_require__(54),
	        styles: [__webpack_require__(55)],
	        providers: [
	            primeng_1.SharedModule, primeng_1.DialogModule, primeng_1.CalendarModule
	        ]
	    }),
	    __metadata("design:paramtypes", [reportview_service_1.ReportViewService, router_1.Router])
	], Report1Component);
	exports.Report1Component = Report1Component;


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<p-dialog header={{id}} [(visible)]=\"display\" modal=\"modal\" responsive=\"true\" closable=\"false\">\r\n    <div class=\"ui-dialog-content\">\r\n        <p-calendar [(ngModel)]=\"fromDate\" [showIcon]=\"true\" appendTo=\"body\"\r\n                    [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2030\">\r\n        </p-calendar>\r\n        <span style=\"margin-left:35px\">{{fromDate|date}}</span>\r\n\r\n        <leo-treeview [config]=\"config\" [items]=\"nodes\" (selectedChange)=\"values = $event\">\r\n        </leo-treeview>\r\n\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n            Selected products:\r\n            <div *ngFor=\"let row of values\">{{row}}</div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"closeDialog(false)\" label=\"No\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" (click)=\"closeDialog(true)\" label=\"Yes\"></button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>\r\n\r\n"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(56);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("primeng/components/panel/panel");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("primeng/components/panelmenu/panelmenu");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("primeng/components/dialog/dialog");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("primeng/components/calendar/calendar");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWUzYzMzOWVhMTQ2YWRlMzI4NzUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvX3dvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiem9uZS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9lbXB0eS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9yZXBvcnQyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnR2aWV3LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvd2ViYXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUmVwbGF5U3ViamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1kcm9wZG93bi10cmVldmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvcHJpbWVuZ1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvcmVwb3J0cGFyYW0uZW50aXR5ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC90cmVlLm5vZGVzLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0Mi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnRzL3JlcG9ydDIuY29tcG9uZW50LmNzcz82NTUzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0Mi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3M/ZGRjMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2FmZWh0bWwucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcGFuZWxtZW51L3BhbmVsbWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1J4XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnUuY29tcG9uZW50LmNzcz84Mzk3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wYW5lbG1lbnUvcGFuZWxtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnR2aWV3LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnR2aWV3LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0MS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9yZXBvcnQxLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0MS5jb21wb25lbnQuY3NzPzE1NTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9yZXBvcnQxLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVuZy9jb21wb25lbnRzL3BhbmVsL3BhbmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVuZy9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUF1QjtBQUN2Qix3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3hCLE9BQU8sRUFBRSxLQUFLO2lCQUNkLDZGQUE2RjtpQkFDN0YsNkRBQTZEO2lCQUM3RCxRQUFRLEVBQUUsbUVBQW1FO2NBQ2hGO2FBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztpQkFDdEQsNkVBQTZFO2lCQUM3RSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNoQixDQUFDO1VBQ0osQ0FBQyxDQUFD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U0FDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVCLHlGQUF5RjtLQUM3RixDQUFDO0tBR0wsdUJBQUM7QUFBRCxFQUFDO0FBaENZLGlCQUFnQjtLQVI1QixnQkFBUyxDQUFDO1NBQ1AsUUFBUSxFQUFFLFNBQVM7U0FDbkIsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBMEIsQ0FBQztTQUM3QyxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLEVBQXlCLENBQUMsQ0FBQztTQUM1QyxTQUFTLEVBQUU7YUFDUCxzQkFBWSxFQUFFLHNCQUFZLEVBQUUsd0JBQWM7VUFDN0M7TUFDSixDQUFDO3NDQWtCK0Isc0NBQWlCLEVBQWtCLGVBQU07SUFqQjdELGdCQUFnQixDQWdDNUI7QUFoQ1ksNkNBQWdCOzs7Ozs7O0FDN0I3QixzQ0FBcUMsSUFBSSwwWEFBMFgsZUFBZSxtU0FBbVMsS0FBSyx3Yjs7Ozs7OztBQ0MxdEI7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBZ0MsS0FBSzs7QUFFckM7Ozs7Ozs7QUNQQSw0RDs7Ozs7O0FDQUEsb0U7Ozs7OztBQ0FBLDhEOzs7Ozs7QUNBQSxrRSIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNWUzYzMzOWVhMTQ2YWRlMzI4NzVcbiAqKi8iLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICcuL193b3JrYXJvdW5kJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJsZXQgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcclxuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBfX2NvcmVfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmxldCBwYXRjaCA9IGZhbHNlO1xyXG5pZiAoIV9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddKSB7XHJcbiAgICAgIHBhdGNoID0gdHJ1ZTtcclxuICAgICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIGlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XHJcbiAgICAgICAgICBwYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcclxuICAgICAgICAgICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcclxuICAgICAgICAgICAgICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHZhciBfX3VuaXZlcnNhbF9fID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XHJcbmlmIChwYXRjaCkge1xyXG4gICAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcclxuICAgICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxyXG4gICAgICAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcclxuICAgICAgICAgICAgfVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL193b3JrYXJvdW5kLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tcGlsZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiem9uZS5qc1wiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vL2ltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IHJvdXRpbmd9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuXG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmVkL3NhZmVodG1sLnBpcGUnO1xuaW1wb3J0IHsgUGFuZWxNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFJlcG9ydFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnR2aWV3LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEVtcHR5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9lbXB0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVwb3J0MUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0MS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVwb3J0MkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0Mi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xuaW1wb3J0IHsgQmxvY2tVSU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY29tcG9uZW50cy9ibG9ja3VpL2Jsb2NrdWknO1xuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwnO1xuaW1wb3J0IHsgUGFuZWxNZW51TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnUnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXInO1xuaW1wb3J0IHsgVG9vbGJhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFBhZ2luYXRvck1vZHVsZSwgU3BsaXRCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xuaW1wb3J0IHsgVGFiVmlld01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5pbXBvcnQgeyBGaWVsZHNldE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5pbXBvcnQgeyBNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5cbmltcG9ydCB7IERyb3Bkb3duVHJlZXZpZXdNb2R1bGUgfSBmcm9tICduZzItZHJvcGRvd24tdHJlZXZpZXcnO1xyXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFNhZmVIdG1sUGlwZSxcbiAgICAgICAgRW1wdHlDb21wb25lbnQsXG4gICAgICAgIFBhbmVsTWVudUNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgUmVwb3J0Vmlld0NvbXBvbmVudCxcbiAgICAgICAgUmVwb3J0MUNvbXBvbmVudCxcbiAgICAgICAgUmVwb3J0MkNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLFxuICAgICAgICByb3V0aW5nLFxuICAgICAgICBEcm9wZG93blRyZWV2aWV3TW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBQYW5lbE1vZHVsZSxcbiAgICAgICAgUGFuZWxNZW51TW9kdWxlLFxuICAgICAgICBEaWFsb2dNb2R1bGUsXG4gICAgICAgIENhbGVuZGFyTW9kdWxlLFxuICAgICAgICBUb29sYmFyTW9kdWxlLFxuICAgICAgICBQYWdpbmF0b3JNb2R1bGUsXG4gICAgICAgIFNwbGl0QnV0dG9uTW9kdWxlLFxuICAgICAgICBUYWJWaWV3TW9kdWxlLFxuICAgICAgICBSYWRpb0J1dHRvbk1vZHVsZSxcbiAgICAgICAgRmllbGRzZXRNb2R1bGUsXG4gICAgICAgIE11bHRpU2VsZWN0TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRW1wdHlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnRzL2VtcHR5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXBvcnQxQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9yZXBvcnQxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXBvcnQyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9yZXBvcnQyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2VtcHR5JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICB7IHBhdGg6ICdlbXB0eScsIGNvbXBvbmVudDogRW1wdHlDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdTVEFSTElNUy1TU1JTL9CW0YPRgNC90LDQuyDQsNC90LDQu9C40YLQuNGH0LXRgdC60L7Qs9C+INC60L7QvdGC0YDQvtC70Y8gVGVzdCcsIGNvbXBvbmVudDogUmVwb3J0MkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ0ZvbGRlcjEvUmVwb3J0JywgY29tcG9uZW50OiBSZXBvcnQyQ29tcG9uZW50IH1cbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzOiBhbnlbXSA9IFtcblxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9hcHAucm91dGVzLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlbXB0eScsXG4gICAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5Q29tcG9uZW50IHtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9lbXB0eS5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJ1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFJlcG9ydFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3J0dmlldy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSwgRGlhbG9nTW9kdWxlLCBDYWxlbmRhck1vZHVsZSwgUmFkaW9CdXR0b25Nb2R1bGUsIEZpZWxkc2V0TW9kdWxlLCBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSwgVHJlZXZpZXdDb25maWcgfSBmcm9tICduZzItZHJvcGRvd24tdHJlZXZpZXcnO1xyXG5cclxuaW1wb3J0IHsgUmVwb3J0SW5mbywgUmVwb3J0UGFyYW1ldGVySW5mbywgUGFyYW1ldGVyVHlwZUVudW0sIFRyZWVJdGVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlcG9ydHBhcmFtLmVudGl0eWVzJztcclxuaW1wb3J0IHsgVHJlZU5vZGVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3RyZWUubm9kZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JlcG9ydDInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmVwb3J0Mi5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yZXBvcnQyLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBTaGFyZWRNb2R1bGUsIERpYWxvZ01vZHVsZSwgQ2FsZW5kYXJNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydDJDb21wb25lbnQge1xyXG4gICAgRGlhbG9nRnJtOiBGb3JtR3JvdXA7XHJcbiAgICBkYXRlU3RhcnQgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICBkYXRlRW5kID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgY3QgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7ICAgICAvLyBTZWxlY3RJdGVtW107XHJcbiAgICBwcm9kZ3IgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7ICAgIC8vIDogU2VsZWN0SXRlbVtdO1xyXG5cclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVwSW5mbzogUmVwb3J0UGFyYW1ldGVySW5mb1tdO1xyXG4gICAgcHJpdmF0ZSByZXA6IFJlcG9ydEluZm8gPSBuZXcgUmVwb3J0SW5mbygpO1xyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nID0gJzEnO1xyXG5cclxuICAgIHZhbGlkQ29udHJvbFR5cGVzOiBTZWxlY3RJdGVtW107XHJcbiAgICB2YWxpZHByb2R1Y3RHcm91cDogU2VsZWN0SXRlbVtdO1xyXG5cclxuICAgIHNlbGVjdGVkQ29udHJvbFR5cGVzOiBzdHJpbmdbXTtcclxuICAgIHNlbGVjdGVkcHJvZHVjdEdyb3VwOiBzdHJpbmdbXTtcclxuXHJcbiAgICBub2RlczogVHJlZXZpZXdJdGVtW107XHJcbiAgICB2YWx1ZXM6IGFueVtdO1xyXG4gICAgY29uZmlnOiBUcmVldmlld0NvbmZpZyA9IHtcbiAgICAgICAgaXNTaG93QWxsQ2hlY2tCb3g6IHRydWUsXG4gICAgICAgIGlzU2hvd0ZpbHRlcjogdHJ1ZSxcbiAgICAgICAgaXNTaG93Q29sbGFwc2VFeHBhbmQ6IGZhbHNlLFxuICAgICAgICBtYXhIZWlnaHQ6IDUwMFxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBSZXBvcnRWaWV3U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB0cmVlTm9kZXM6IFRyZWVOb2RlcywgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLkRpYWxvZ0ZybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICAgZGF0ZVN0YXJ0OiB0aGlzLmRhdGVTdGFydCxcclxuICAgICAgICAgICAgZGF0ZUVuZDogdGhpcy5kYXRlRW5kLFxyXG4gICAgICAgICAgICBjdDogdGhpcy5jdCxcclxuICAgICAgICAgICAgcHJvZGdyOiB0aGlzLnByb2RnclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVwLlJlcG9ydFBhdGggPSAnL0ZvbGRlcjEvUmVwb3J0JztcclxuICAgICAgICAvL3RoaXMuc2VydmljZS5nZXRSZXBvcnRJbmZvKCcvU1RBUkxJTVMtU1NSUy/QltGD0YDQvdCw0Lsg0LDQvdCw0LvQuNGC0LjRh9C10YHQutC+0LPQviDQutC+0L3RgtGA0L7Qu9GPIFRlc3QnKVxyXG4gICAgICAgIHRoaXMuc2VydmljZS5nZXRSZXBvcnRJbmZvKHRoaXMucmVwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBJbmZvID0gcmVzLlJlcG9ydFBhcmFtcy5tYXAocCA9PiB7IHAuQ2hpbGRyZW4gPSBbXTsgcmV0dXJuIHAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlU3RhcnQuc2V0VmFsdWUobmV3IERhdGUodGhpcy5yZXBJbmZvLmZpbmQocCA9PiBwLk5hbWUgPT09ICdkYXRlU3RhcnQnKS5TZWxlY3RlZFZhbHVlc1swXSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlU3RhcnQudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUVuZC5zZXRWYWx1ZShuZXcgRGF0ZSh0aGlzLnJlcEluZm8uZmluZChwID0+IHAuTmFtZSA9PT0gJ2RhdGVFbmQnKS5TZWxlY3RlZFZhbHVlc1swXSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRW5kLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJlZUFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJlZUFyciA9IHRoaXMucmVwSW5mby5maW5kKHAgPT4gcC5OYW1lID09PSAnZHMnKS5WYWxpZFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoaXRtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpdG0uVmFsdWUuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGFbMF0sIHBhcklEOiBhWzFdLCB0ZXh0OiBpdG0uTGFiZWwgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlcyA9IHRoaXMudHJlZU5vZGVzLnRyYW5zZm9ybSh0cmVlQXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoaXRtID0+IHsgcmV0dXJuIG5ldyBUcmVldmlld0l0ZW0oaXRtKSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkQ29udHJvbFR5cGVzID0gdGhpcy5yZXBJbmZvLmZpbmQocCA9PiBwLk5hbWUgPT09ICdjdCcpLlZhbGlkVmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChpdG0gPT4geyByZXR1cm4geyBsYWJlbDogaXRtLkxhYmVsLCB2YWx1ZTogaXRtLlZhbHVlIH0gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZHByb2R1Y3RHcm91cCA9IHRoaXMucmVwSW5mby5maW5kKHAgPT4gcC5OYW1lID09PSAncHJvZGdyJykuVmFsaWRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGl0bSA9PiB7IHJldHVybiB7IGxhYmVsOiBpdG0uTGFiZWwsIHZhbHVlOiBpdG0uVmFsdWUgfSB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtQ29udHJvbDogeyBwYXJhbTogRm9ybUNvbnRyb2wsIGNoaWxkcmVuOiBGb3JtQ29udHJvbFtdIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1Db250cm9sczogYW55W107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcEluZm9cclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChwYXJhbSA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0L/QsNGA0LDQvNC10YLRgNCwINC+0YLRh9C10YLQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQ3RybDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5EaWFsb2dGcm0uZ2V0KHBhcmFtLk5hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEN0cmwgJiYgcGFyYW0uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbS5EZXBlbmRlbmNpZXMgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC+0L/RgNC10LTQtdC70Y/QtdC8INGB0L/QuNGB0L7QuiDQutC+0L3RgtGA0L7Qu9C+0LIg0L7RgiDQutC+0YLQvtGA0YvRhSDQvtC9INC30LDQstC40YHQuNGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZGVwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBJbmZvLmZpbmQocCA9PiBwLk5hbWUgPT0gZGVwKS5DaGlsZHJlbi5wdXNoKHBhcmFtLk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gocGFyYW0gPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LTQu9GPINC60LDQttC00L7Qs9C+INC/0LDRgNCw0LzQtdGC0YDQsCDQvtGC0YfQtdGC0LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuRGlhbG9nRnJtLmdldChwYXJhbS5OYW1lKSAmJiBwYXJhbS5DaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRpYWxvZ0ZybS5nZXQocGFyYW0uTmFtZSkudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShuZXd2YWwgPT4geyAgICAgICAgICAvLyDQv9C+0LTQv9C40YHRi9Cy0LDQtdC80YHRjyDQvdCwINC40LfQvNC10L3QtdC90LjRjyDQsiDRgNC+0LTQuNGC0LXQu9C1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLkNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBuZXcgdmFsaWRWYWx1ZXMgZm9yICcgKyBjaGlsZCArICdieSBuZXcgdmFsdWUgJyArIG5ld3ZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnZhciBwYXJDdHJsID0gdGhpcy5EaWFsb2dGcm0uZ2V0KGRlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gcGFyYW1Db250cm9scy5maW5kKGMgPT4gYy5OYW1lID09IGRlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1Db250cm9scy5wdXNoKHBhckN0cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJDdHJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbUNvbnRyb2xzLnB1c2goQ3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJDdHJsLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUobmV3dmFsID0+IHsgICAgICAgICAgLy8g0L/QvtC00L/QuNGB0YvQstCw0LXQvNGB0Y8g0L3QsCDQuNC30LzQtdC90LXQvdC40Y8g0LIg0YDQvtC00LjRgtC10LvQtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbS5WYWxpZFZhbHVlcyA9IG5ld3ZhbDsgLy8g0LjQt9C80LXQvdGP0LXQvCBPcHRpb25zINC30LDQstC40YHQuNC80L7Qs9C+INC60L7QvdGC0YDQvtC70LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovXHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb250cm9sVHlwZUNoYW5nZWQoJGV2ZW50KSB7XHJcbiAgICAgICAgLyp0aGlzLnByb2R1Y3RHcm91cCA9IHRoaXMucmVwSW5mby5SZXBvcnRQYXJhbXMuZmluZChwID0+IHAuTmFtZSA9PT0gJ3Byb2RncicpLlZhbGlkVmFsdWVzXHJcbiAgICAgICAgICAgIC5tYXAoaXRtID0+IHsgcmV0dXJuIHsgbGFiZWw6IGl0bS5MYWJlbCwgdmFsdWU6IGl0bS5WYWx1ZSB9IH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2VsZWN0aW9uQ2hhbmdlKGVudHJ5KSB7XHJcbiAgICAgICAgLyp0aGlzLmZyb21EYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9EYXRlLnNldERhdGUodGhpcy5mcm9tRGF0ZS5nZXREYXRlKCkgLSAzMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b0RhdGUuc2V0RGF0ZSh0aGlzLmZyb21EYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKHNob3dSZXBvcnQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgLy9pZiAoc2hvd1JlcG9ydCkgeyB0aGlzLnNlcnZpY2UuYWRkUmVwb3J0KCcvU1RBUkxJTVMtU1NSUy/QltGD0YDQvdCw0Lsg0LDQvdCw0LvQuNGC0LjRh9C10YHQutC+0LPQviDQutC+0L3RgtGA0L7Qu9GPIFRlc3QnKTsgfVxyXG4gICAgfVxyXG5cblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnRzL3JlcG9ydDIuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFdlYkFwaU9ic2VydmFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3dlYmFwaS5zZXJ2aWNlJ1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcy9SZXBsYXlTdWJqZWN0JztcblxuaW1wb3J0IHsgVHJlZXZpZXdJdGVtIH0gZnJvbSAnbmcyLWRyb3Bkb3duLXRyZWV2aWV3JztcblxuaW1wb3J0IHsgUmVwb3J0SW5mbywgUmVwb3J0UGFyYW1ldGVySW5mbywgUGFyYW1ldGVyVHlwZUVudW0gfSBmcm9tICcuLi9zaGFyZWQvcmVwb3J0cGFyYW0uZW50aXR5ZXMnO1xuXG5jb25zdCB1cmxTZXJ2ZXIgPSAnL2FwaS9SZXBvcnRTZXJ2ZXIvJztcclxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVwb3J0Vmlld1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSB3ZWI6IFdlYkFwaU9ic2VydmFibGVTZXJ2aWNlKSB7IH1cblxuICAgIHB1YmxpYyByZXBvcnRMaXN0SW5mbzogUmVwbGF5U3ViamVjdDxBcnJheTxSZXBvcnRJbmZvPj4gPSBuZXcgUmVwbGF5U3ViamVjdDxBcnJheTxSZXBvcnRJbmZvPj4oKTtcbiAgICBwcml2YXRlIF9yZXBvcnRMaXN0SW5mbzogQXJyYXk8UmVwb3J0SW5mbz4gPSBuZXcgQXJyYXk8UmVwb3J0SW5mbz4oKTtcbiAgICBwdWJsaWMgcmVwTGlzdEVtcHR5OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuXG4gICAgcHVibGljIGdldFJlcG9ydChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9ydExpc3RJbmZvW2luZGV4XTtcbiAgICB9XG5cbi8qICAgIHB1YmxpYyBnZXRSZXBvcnRJbmZvKHJlcG9ydFBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8UmVwb3J0SW5mbz4ge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWIuZ2V0U2VydmljZVdpdGhDb21wbGV4T2JqZWN0QXNRdWVyeVN0cmluZyh1cmxTZXJ2ZXIgKyAnZ2V0UmVwb3J0UGFyYW1zLycsIHsgcmVwb3J0UGF0aDogcmVwb3J0UGF0aCB9KVxuICAgIH0qL1xuXG4gICAgcHVibGljIGdldFJlcG9ydEluZm8ocmVwb3J0SW5mbzogUmVwb3J0SW5mbyk6IE9ic2VydmFibGU8UmVwb3J0SW5mbz4ge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWIuZ2V0U2VydmljZVdpdGhDb21wbGV4T2JqZWN0QXNRdWVyeVN0cmluZyh1cmxTZXJ2ZXIgKyAnZ2V0UmVwb3J0UGFyYW1zLycsIHsgcGFyYW1ldGVyczogcmVwb3J0SW5mbyB9KVxuICAgIH1cblxuXG4gICAgLyphZGRSZXBvcnQocmVwb3J0UGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucmVwTGlzdEVtcHR5Lm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLmdldFJlcG9ydEluZm8ocmVwb3J0UGF0aClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlcG9ydExpc3RJbmZvLnB1c2gocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0TGlzdEluZm8ubmV4dCh0aGlzLl9yZXBvcnRMaXN0SW5mbylcbiAgICAgICAgICAgIH0pXG4gICAgfSovXG5cbiAgICBkZWxSZXBvcnQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9yZXBvcnRMaXN0SW5mby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnJlcG9ydExpc3RJbmZvLm5leHQodGhpcy5fcmVwb3J0TGlzdEluZm8pO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBvcnRMaXN0SW5mby5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXBMaXN0RW1wdHkubmV4dCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0Tm9kZXMoKTogVHJlZXZpZXdJdGVtW10ge1xuICAgICAgICBjb25zdCBpdGVtMSA9IG5ldyBUcmVldmlld0l0ZW0oXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdyb290MScsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IDIsIHRleHQ6ICdjaGlsZDEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogMywgdGV4dDogJ2NoaWxkMicgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpdGVtMiA9IG5ldyBUcmVldmlld0l0ZW0oXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ3Jvb3QyJyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogNSwgdGV4dDogJ2NoaWxkMi4xJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdjaGlsZDIuMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiA3LCB0ZXh0OiAnc3Vic3ViJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cbiAgICAgICAgcmV0dXJuIFtpdGVtMSwgaXRlbTJdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNZW51SXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsU2VydmVyICsgJ1JlcG9ydHNUcmVlTGlzdC8nKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXBvcnRQYWdlKHJlcG9ydFBhdGgsIHBhZ2UsIHVybFBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYi5nZXRTZXJ2aWNlV2l0aENvbXBsZXhPYmplY3RBc1F1ZXJ5U3RyaW5nKHVybFNlcnZlciArICdnZXRSZXBvcnRQYWdlLycsIHsgcmVwb3J0UGF0aDogcmVwb3J0UGF0aCB9KVxyXG4gICAgICAgIC8qcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsU2VydmVyICsgJ2dldFJlcG9ydFBhZ2UvJylcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyovXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgXCJTZXJ2ZXIgZXJyb3JcIik7XHJcbiAgICB9IFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnR2aWV3LnNlcnZpY2UudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbi8vIE9ic2VydmFibGUgY2xhc3MgZXh0ZW5zaW9uc1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuLy8gT2JzZXJ2YWJsZSBvcGVyYXRvcnNcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViQXBpT2JzZXJ2YWJsZVNlcnZpY2Uge1xyXG4gICAgaGVhZGVyczogSGVhZGVycztcclxuICAgIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdxPTAuODthcHBsaWNhdGlvbi9qc29uO3E9MC45J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2aWNlV2l0aENvbXBsZXhPYmplY3RBc1F1ZXJ5U3RyaW5nKHVybDogc3RyaW5nLCBwYXJhbTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBsZXQgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gcGFyYW1ba2V5XTtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXQoa2V5LCB2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgc2VhcmNoOiBKU09OLnN0cmluZ2lmeShwYXJhbSkgfSk7IC8vcGFyYW1zIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldCh1cmwsIHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5IHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcclxuICAgICAgICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaGFyZWQvd2ViYXBpLnNlcnZpY2UudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIlxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCJcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCJcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWVcIlxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWRcIlxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIlxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1JlcGxheVN1YmplY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJ4anMvUmVwbGF5U3ViamVjdFwiXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1kcm9wZG93bi10cmVldmlld1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibmcyLWRyb3Bkb3duLXRyZWV2aWV3XCJcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9wcmltZW5nXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwcmltZW5nL3ByaW1lbmdcIlxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgY2xhc3MgUmVwb3J0SW5mbyB7XHJcbiAgICBwdWJsaWMgTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFJlcG9ydFBhdGg6IHN0cmluZztcclxuICAgIHB1YmxpYyBSZXBvcnRQYXJhbXM6IEFycmF5PFJlcG9ydFBhcmFtZXRlckluZm8+O1xyXG4gICAgcHVibGljIFRvdGFsUGFnZXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlJlcG9ydFBhcmFtcyA9IG5ldyBBcnJheTxSZXBvcnRQYXJhbWV0ZXJJbmZvPigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0UGFyYW1ldGVySW5mbyB7XHJcbiAgICBwdWJsaWMgTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIFByb21wdDogc3RyaW5nO1xyXG4gICAgcHVibGljIE11bHRpVmFsdWU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgVmFsaWRWYWx1ZXM6IEFycmF5PFZhbGlkVmFsdWU+O1xyXG4gICAgcHVibGljIFNlbGVjdGVkVmFsdWVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHVibGljIFR5cGU6IFBhcmFtZXRlclR5cGVFbnVtO1xyXG4gICAgcHVibGljIFByb21wdFVzZXI6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgQWxsb3dCbGFuazogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBEZXBlbmRlbmNpZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwdWJsaWMgQ2hpbGRyZW46IEFycmF5PHN0cmluZz47XHJcbiAgICBwdWJsaWMgTnVsbGFibGU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLlZhbGlkVmFsdWVzID0gbmV3IEFycmF5PFZhbGlkVmFsdWU+KCk7XHJcbiAgICAgICAgdGhpcy5TZWxlY3RlZFZhbHVlcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhcmFtZXRlclR5cGVFbnVtIHtcclxuICAgIEJvb2xlYW4sXHJcbiAgICBEYXRlVGltZSxcclxuICAgIEludGVnZXIsXHJcbiAgICBGbG9hdCxcclxuICAgIFN0cmluZ1xyXG59XHJcblxyXG5jbGFzcyBWYWxpZFZhbHVlIHtcclxuICAgIHB1YmxpYyBMYWJlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIFZhbHVlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlSXRlbSB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBwYXJJRDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NoYXJlZC9yZXBvcnRwYXJhbS5lbnRpdHllcy50c1xuICoqLyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlcyB7XHJcbiAgICB0cmFuc2Zvcm0oYXJyLCBhcmdzPzogYW55W10pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRyZWUoYXJyKVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVHJlZShlbGVtZW50cywgdHJlZSA9IFtdKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQucGFySUQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSB0aGlzLmdldE5lc3RlZENoaWxkcmVuKGVsZW1lbnRzLCBlbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgdHJlZS5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0cmVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5lc3RlZENoaWxkcmVuKGVsZW1lbnRzLCBwYXJlbnQpIHtcclxuICAgICAgICBsZXQgb3V0ID0gW11cclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnBhcklEID09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5nZXROZXN0ZWRDaGlsZHJlbihlbGVtZW50cywgZWxlbWVudC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7IGVsZW1lbnQuY2hpbGRyZW4gPSBjaGlsZHJlbjsgfVxyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2goZWxlbWVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIG91dFxyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3RyZWUubm9kZXMudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHAtZGlhbG9nIGhlYWRlcj17e2lkfX0gWyh2aXNpYmxlKV09XFxcImRpc3BsYXlcXFwiIG1vZGFsPVxcXCJtb2RhbFxcXCIgcmVzcG9uc2l2ZT1cXFwidHJ1ZVxcXCIgY2xvc2FibGU9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWktZy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPHAtcmFkaW9CdXR0b24gbmFtZT1cXFwiZGF0ZXJhbmdlXFxcIiB2YWx1ZT0xIGxhYmVsPVxcXCLQt9CwINGB0LzQtdC90YNcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFZhbHVlXFxcIiAoY2xpY2spPVxcXCJvblNlbGVjdGlvbkNoYW5nZSgxKVxcXCI+PC9wLXJhZGlvQnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxwLXJhZGlvQnV0dG9uIG5hbWU9XFxcImRhdGVyYW5nZVxcXCIgdmFsdWU9MiBsYWJlbD1cXFwi0LfQsCDRgdGD0YLQutC4XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRWYWx1ZVxcXCIgKGNsaWNrKT1cXFwib25TZWxlY3Rpb25DaGFuZ2UoMilcXFwiPjwvcC1yYWRpb0J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8cC1yYWRpb0J1dHRvbiBuYW1lPVxcXCJkYXRlcmFuZ2VcXFwiIHZhbHVlPTMgbGFiZWw9XFxcItC30LAg0LzQtdGB0Y/RhlxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkVmFsdWVcXFwiIChjbGljayk9XFxcIm9uU2VsZWN0aW9uQ2hhbmdlKDMpXFxcIj48L3AtcmFkaW9CdXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVxcXCJEaWFsb2dGcm1cXFwiIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVpLWctNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhPtCU0LDRgtCwINC90LDRh9Cw0LvQsDo8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxwLWNhbGVuZGFyIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0ZVN0YXJ0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd0ljb25dPVxcXCJ0cnVlXFxcIiBhcHBlbmRUbz1cXFwiYm9keVxcXCIgZGF0ZUZvcm1hdD1cXFwiZGQubW0ueXlcXFwiIFttb250aE5hdmlnYXRvcl09XFxcInRydWVcXFwiIFt5ZWFyTmF2aWdhdG9yXT1cXFwidHJ1ZVxcXCIgeWVhclJhbmdlPVxcXCIyMDAwOjIwMzBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWktZy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGE+0JTQsNGC0LAg0L7QutC+0L3Rh9Cw0L3QuNGPOjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPHAtY2FsZW5kYXIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXRlRW5kXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd0ljb25dPVxcXCJ0cnVlXFxcIiBhcHBlbmRUbz1cXFwiYm9keVxcXCIgZGF0ZUZvcm1hdD1cXFwiZGQubW0ueXlcXFwiIFttb250aE5hdmlnYXRvcl09XFxcInRydWVcXFwiIFt5ZWFyTmF2aWdhdG9yXT1cXFwidHJ1ZVxcXCIgeWVhclJhbmdlPVxcXCIyMDAwOjIwMzBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHAtbXVsdGlTZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJjdFxcXCIgW29wdGlvbnNdPVxcXCJ2YWxpZENvbnRyb2xUeXBlc1xcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkQ29udHJvbFR5cGVzXFxcIj48L3AtbXVsdGlTZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPHAtbXVsdGlTZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJwcm9kZ3JcXFwiIFtvcHRpb25zXT1cXFwidmFsaWRwcm9kdWN0R3JvdXBcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZHByb2R1Y3RHcm91cFxcXCI+PC9wLW11bHRpU2VsZWN0PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPHAtZmllbGRzZXQgbGVnZW5kPVxcXCLQotC+0YfQutCwINC+0YLQsdC+0YDQsFxcXCIgW3RvZ2dsZWFibGVdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGVvLXRyZWV2aWV3IFtjb25maWddPVxcXCJjb25maWdcXFwiIFtpdGVtc109XFxcIm5vZGVzXFxcIiAoc2VsZWN0ZWRDaGFuZ2UpPVxcXCJ2YWx1ZXMgPSAkZXZlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDwvbGVvLXRyZWV2aWV3PlxcclxcbiAgICAgICAgPC9wLWZpZWxkc2V0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHAtZm9vdGVyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWJ1dHRvbnBhbmUgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIURpYWxvZ0ZybS52YWxpZFxcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHBCdXR0b24gaWNvbj1cXFwiZmEtY2xvc2VcXFwiIChjbGljayk9XFxcImNsb3NlRGlhbG9nKGZhbHNlKVxcXCIgbGFiZWw9XFxcIk5vXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgcEJ1dHRvbiBpY29uPVxcXCJmYS1jaGVja1xcXCIgKGNsaWNrKT1cXFwiY2xvc2VEaWFsb2codHJ1ZSlcXFwiIGxhYmVsPVxcXCJZZXNcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvcC1mb290ZXI+XFxyXFxuPC9wLWRpYWxvZz5cXHJcXG5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnRzL3JlcG9ydDIuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3JlcG9ydDIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0Mi5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9yZXBvcnQyLmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlcG9ydFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3J0dmlldy9yZXBvcnR2aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViQXBpT2JzZXJ2YWJsZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvd2ViYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJlZU5vZGVzIH0gZnJvbSAnLi4vc2hhcmVkL3RyZWUubm9kZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3NsaWRlSW5PdXQnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnb3V0Jywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDEwMCUsIDAsIDApJ1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignaW4gPT4gb3V0JywgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdvdXQgPT4gaW4nLCBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcpKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbIFJlcG9ydFZpZXdTZXJ2aWNlLCBXZWJBcGlPYnNlcnZhYmxlU2VydmljZSwgVHJlZU5vZGVzIF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG1lbnVTdGF0ZTogc3RyaW5nID0gJ2luJztcblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIC8vIDEtbGluZSBpZiBzdGF0ZW1lbnQgdGhhdCB0b2dnbGVzIHRoZSB2YWx1ZTpcbiAgICAgICAgdGhpcy5tZW51U3RhdGUgPSB0aGlzLm1lbnVTdGF0ZSA9PT0gJ291dCcgPyAnaW4nIDogJ291dCc7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHAtdG9vbGJhcj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidWktdG9vbGJhci1ncm91cC1yaWdodFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIHBCdXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpY29uPVxcXCJmYS1hbGlnbi1qdXN0aWZ5XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KClcXFwiPjwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3AtdG9vbGJhcj5cXHJcXG48ZGl2IHN0eWxlPVxcXCJ0b3A6NDBweFxcXCI+XFxyXFxuICAgIDxwYW5lbC1tZW51IGNsYXNzPVxcXCJ1aS1wYW5lbFxcXCIgW0BzbGlkZUluT3V0XT1cXFwibWVudVN0YXRlXFxcIj48L3BhbmVsLW1lbnU+XFxyXFxuICAgIDxob21lPjwvaG9tZT5cXHJcXG48L2Rpdj5cXHJcXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdzYWZlSHRtbCcgfSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplZDogRG9tU2FuaXRpemVyKSB7IH1cbiAgICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVkLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NhZmVodG1sLnBpcGUudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7IFBhbmVsTW9kdWxlLCBQYW5lbE1lbnUsIFRyZWVNb2R1bGUsIFRyZWVOb2RlLCBNZW51SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFBhbmVsTWVudVNlcnZpY2UgfSBmcm9tICcuL3BhbmVsbWVudS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFJlcG9ydFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3J0dmlldy9yZXBvcnR2aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViQXBpT2JzZXJ2YWJsZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvd2ViYXBpLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwYW5lbC1tZW51JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3BhbmVsbWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9wYW5lbG1lbnUuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW1BhbmVsTWVudVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYW5lbE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGl0ZW1zOiBNZW51SXRlbVtdO1xyXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBNZW51SXRlbTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBQYW5lbE1lbnVTZXJ2aWNlLCBwcml2YXRlIHJlcG9ydFNlcnZpY2U6IFJlcG9ydFZpZXdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSAge1xyXG4gICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNlcnYgPSB0aGlzLnNlcnZpY2UuZ2V0TWVudUl0ZW1zKCk7XHJcbiAgICAgICAgICAgIHNlcnYuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Rm9sZGVyKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbGRlcihpdG06IE1lbnVJdGVtW10pIHtcclxuICAgICAgICBpdG0uZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Rm9sZGVyKGkuaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpLnVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNtZDogc3RyaW5nID0gaS51cmw7XHJcbiAgICAgICAgICAgICAgICBpLmNvbW1hbmQgPSAoZXZlbnQpID0+IHsgdGhpcy5tZW51Q2xpY2soY21kKTsgfTtcclxuICAgICAgICAgICAgICAgIGkudXJsID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbnVDbGljayhyZXBvcnRQYXRoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXBvcnRQYXRoKTtcclxuICAgICAgICAvL3RoaXMucmVwb3J0U2VydmljZS5hZGRSZXBvcnQocmVwb3J0UGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gLyogICBvblNlbGVjdChpdGVtOiBNZW51SXRlbSkge1xyXG4gICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgIHZhciBsaW5rID0gWycvbG91bmdlJywgdGhpcy5zZWxlY3RlZEl0ZW0uSURdO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcclxuICAgIH0gKi9cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnUuY29tcG9uZW50LnRzXG4gKiovIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFuZWxNZW51U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybCA9ICcvYXBpL1JlcG9ydFNlcnZlci8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWVudUl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgJ1JlcG9ydHNUcmVlTGlzdC8nKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8IFwiU2VydmVyIGVycm9yXCIpO1xyXG4gICAgfSBcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnUuc2VydmljZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJ4anMvUnhcIlxuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHAtcGFuZWwgaGVhZGVyPVxcXCLQntGC0YfQtdGC0YsgKNCi0L7QvNGB0LopXFxcIiBbdG9nZ2xlYWJsZV09XFxcInRydWVcXFwiPlxcclxcbiAgICA8cC1wYW5lbE1lbnUgW21vZGVsXT1cXFwiaXRlbXNcXFwiPjwvcC1wYW5lbE1lbnU+XFxyXFxuPC9wLXBhbmVsPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wYW5lbG1lbnUvcGFuZWxtZW51LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYW5lbG1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wYW5lbG1lbnUvcGFuZWxtZW51LmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggNnB4IDZweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4IDZweCA2cHggNnB4O1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHggNnB4IDZweCA2cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNDI5N2Q3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZmZmZmZiwgIzc5YjdlNyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiBhdXRvO1xcbiAgdG9wOiAzNXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjAlO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM7XFxuICBmb250LXdlaWdodDogNDAwO1xcblxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wYW5lbG1lbnUvcGFuZWxtZW51LmNvbXBvbmVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQgeyBUYWJWaWV3TW9kdWxlLCBUYWJQYW5lbCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5pbXBvcnQgeyBSZXBvcnRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vcmVwb3J0dmlldy9yZXBvcnR2aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcG9ydFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3J0dmlldy9yZXBvcnR2aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViQXBpT2JzZXJ2YWJsZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvd2ViYXBpLnNlcnZpY2UnXG5cbmltcG9ydCB7IFJlcG9ydEluZm8sIFJlcG9ydFBhcmFtZXRlckluZm8sIFBhcmFtZXRlclR5cGVFbnVtIH0gZnJvbSAnLi4vc2hhcmVkL3JlcG9ydHBhcmFtLmVudGl0eWVzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwb3J0U2VydmljZTogUmVwb3J0Vmlld1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgdGFiczogQXJyYXk8UmVwb3J0SW5mbz47XG4gICAgcHVibGljIHR2SXNOb3RFbXB0eTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0U2VydmljZS5yZXBMaXN0RW1wdHkuc3Vic2NyaWJlKHJlcyA9PlxuICAgICAgICAgICAgdGhpcy50dklzTm90RW1wdHkgPSAhcmVzXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yZXBvcnRTZXJ2aWNlLnJlcG9ydExpc3RJbmZvXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFicyA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7IH1cblxuICAgIHRhYkNsb3NlKGUpIHtcclxuICAgICAgICB0aGlzLnJlcG9ydFNlcnZpY2UuZGVsUmVwb3J0KGUuaW5kZXgpO1xyXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHAtdGFiVmlldyAqbmdJZj1cXFwidHZJc05vdEVtcHR5XFxcIiAob25DbG9zZSk9XFxcInRhYkNsb3NlKCRldmVudClcXFwiPlxcclxcbiAgICA8cC10YWJQYW5lbCAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFic1xcXCIgW2hlYWRlcl09XFxcInRhYi5OYW1lXFxcIiBbc2VsZWN0ZWRdPVxcXCJmYWxzZVxcXCIgW2Nsb3NhYmxlXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ0YWIuUmVwb3J0UGF0aFxcXCIgPlxcclxcbiAgICAgICAgICAgIDxyZXBvcnQtdmlldyBbcmVwb3J0UGF0aF09XFxcInRhYi5SZXBvcnRQYXRoXFxcIj48L3JlcG9ydC12aWV3PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvcC10YWJQYW5lbD5cXHJcXG48L3AtdGFiVmlldz5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJ1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7IFJlcG9ydFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9yZXBvcnR2aWV3LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWJBcGlPYnNlcnZhYmxlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC93ZWJhcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4uL3NoYXJlZC9zYWZlaHRtbC5waXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZXBvcnQtdmlldycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yZXBvcnR2aWV3LmNvbXBvbmVudC5odG1sJyksXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAgIEBJbnB1dCgpIHJlcG9ydFBhdGg6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGhhc1BhZ2VzOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlcG9ydENvbnRlbnQ6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFJlcG9ydFZpZXdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3UmVwb3J0UGFnZSgxLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvKmlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0UGF0aCA9IHBhcmFtc1snaWQnXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmFkZFJlcG9ydCh0aGlzLnJlcG9ydFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwb3J0SW5mbyA9IHRoaXMuc2VydmljZS5yZXBvcnRJbmZvLmdldFZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcG9ydEluZm8pO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMudmlld1JlcG9ydFBhZ2UoMSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dMb2FkaW5nUHJvZ3Jlc3MobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuaGlkZUxvYWRpbmdQcm9ncmVzcygpO1xyXG5cclxuICAgICAgIC8qICQoJy5SZXBvcnRWaWV3ZXJDb250ZW50JykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5SZXBvcnRWaWV3ZXJDb250ZW50Q29udGFpbmVyJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibG9hZGluZ0NvbnRhaW5lclwiPjxkaXYgc3R5bGU9XCJtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48aDI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2ggZ2x5LXNwaW5cIj48L2k+JyArIG1lc3NhZ2UgKyAnPC9oMj48L2Rpdj48L2Rpdj4nKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlTG9hZGluZ1Byb2dyZXNzKCkge1xyXG4gICAgICAgLyogJCgnLmxvYWRpbmdDb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAkKCcuUmVwb3J0Vmlld2VyQ29udGVudCcpLnNob3coKTsqL1xyXG59XHJcblxyXG4gICAgcHVibGljIHByaW50UmVwb3J0KCkge1xyXG4gICAgICAvKiB2YXIgcGFyYW1zID0gJCgnLlBhcmFtZXRlcnNDb250YWluZXIgOmlucHV0Jykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICAgICB2YXIgdXJsUGFyYW1zID0gJC5wYXJhbShwYXJhbXMpO1xyXG5cclxuICAgICAgICB3aW5kb3cub3BlbihcIi9SZXBvcnQvUHJpbnRSZXBvcnQvP3JlcG9ydFBhdGg9QE1vZGVsLlJlcG9ydFBhdGguVXJsRW5jb2RlKCkmXCIgKyB1cmxQYXJhbXMsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kVGV4dCgpIHtcclxuICAgICAgICAvKiQoJy5SZXBvcnRWaWV3ZXJDb250ZW50JykucmVtb3ZlSGlnaGxpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHNlYXJjaFRleHQgPSAkKFwiI1JlcG9ydFZpZXdlclNlYXJjaFRleHRcIikudmFsKCk7XHJcbiAgICAgICAgaWYgKHNlYXJjaFRleHQgIT0gdW5kZWZpbmVkICYmIHNlYXJjaFRleHQgIT0gbnVsbCAmJiBzZWFyY2hUZXh0ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZ1Byb2dyZXNzKCdTZWFyY2hpbmcgUmVwb3J0Li4uJyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSAkKCcuUGFyYW1ldGVyc0NvbnRhaW5lciA6aW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xyXG4gICAgICAgICAgICB2YXIgdXJsUGFyYW1zID0gJC5wYXJhbShwYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhZ2UgPSBwYXJzZUludCgkKCcjUmVwb3J0Vmlld2VyQ3VycmVudFBhZ2UnKS52YWwoKSk7XHJcblxyXG4gICAgICAgICAgICAkLmdldChcIi9SZXBvcnQvRmluZFN0cmluZ0luUmVwb3J0Lz9yZXBvcnRQYXRoPUBNb2RlbC5SZXBvcnRQYXRoLlVybEVuY29kZSgpJnBhZ2U9XCIgKyBwYWdlICsgXCImc2VhcmNoVGV4dD1cIiArIHNlYXJjaFRleHQgKyBcIiZcIiArIHVybFBhcmFtcykuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UmVwb3J0UGFnZShkYXRhLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5SZXBvcnRWaWV3ZXJDb250ZW50JykuaGlnaGxpZ2h0KHNlYXJjaFRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLlJlcG9ydFZpZXdlckNvbnRlbnQnKS5oaWdobGlnaHQoc2VhcmNoVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGluZ1Byb2dyZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2aWV3UmVwb3J0UGFnZShwYWdlLCBhZnRlclJlcG9ydExvYWRlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ1Byb2dyZXNzKCdMb2FkaW5nIFJlcG9ydCBQYWdlLi4uJyk7XHJcblxyXG4gICAgICAgIHZhciBSZXBvcnRQYXRoID0gdGhpcy5yZXBvcnRQYXRoO1xyXG4gICAgICAgIC8vIHZhciBwYXJhbXMgPSBudWxsOyAgLy8kKCcuUGFyYW1ldGVyc0NvbnRhaW5lciA6aW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xyXG4gICAgICAgIHZhciB1cmxQYXJhbXMgPSBudWxsOyAgIC8vJC5wYXJhbShwYXJhbXMpO1xyXG4gICAgICAgIHZhciB0b3RhbFBhZ2VzID0gbnVsbDsgIC8vcGFyc2VJbnQoJCgnI1JlcG9ydFZpZXdlclRvdGFsUGFnZXMnKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICBpZiAocGFnZSA9PSB1bmRlZmluZWQgfHwgcGFnZSA9PSBudWxsIHx8IHBhZ2UgPCAxKSB7XHJcbiAgICAgICAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA+IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgcGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0UmVwb3J0UGFnZShSZXBvcnRQYXRoLCBwYWdlLCB1cmxQYXJhbXMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlcG9ydENvbnRlbnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nUHJvZ3Jlc3MoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXJSZXBvcnRMb2FkZWRDYWxsYmFjayAmJiB0eXBlb2YgKGFmdGVyUmVwb3J0TG9hZGVkQ2FsbGJhY2spID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyUmVwb3J0TG9hZGVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxvYWRpbmdQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhwb3J0UmVwb3J0KGVsZW1lbnQpIHtcclxuICAgICAgICAvKnZhciBwYXJhbXMgPSAkKCcuUGFyYW1ldGVyc0NvbnRhaW5lciA6aW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xyXG4gICAgICAgIHZhciB1cmxQYXJhbXMgPSAkLnBhcmFtKHBhcmFtcyk7XHJcbiAgICAgICAgdmFyIGZvcm1hdCA9ICQoZWxlbWVudCkuYXR0cignY2xhc3MnKS5yZXBsYWNlKFwiRXhwb3J0XCIsIFwiXCIpO1xyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1JlcG9ydC9FeHBvcnRSZXBvcnQvP3JlcG9ydFBhdGg9QE1vZGVsLlJlcG9ydFBhdGguVXJsRW5jb2RlKCkmZm9ybWF0PVwiICsgZm9ybWF0ICsgXCImXCIgKyB1cmxQYXJhbXM7XHJcbiAgICAgICAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVJlcG9ydENvbnRlbnQoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhICE9IHVuZGVmaW5lZCAmJiBkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRDb250ZW50ID0gZGF0YS5Db250ZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuVG90YWxQYWdlcyA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1BhZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1BhZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgLy90aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnR2aWV3LmNvbXBvbmVudC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8cC10b29sYmFyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1aS10b29sYmFyLWdyb3VwLWxlZnRcXFwiPlxcclxcbiAgICAgICAgPHAtcGFnaW5hdG9yIHJvd3M9XFxcIjFcXFwiIHRvdGFsUmVjb3Jkcz1cXFwiMTIwXFxcIiBwYWdlTGlua1NpemU9XFxcIjFcXFwiPjwvcC1wYWdpbmF0b3I+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1aS10b29sYmFyLWdyb3VwLWxlZnRcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBwQnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWNvbj1cXFwiZmEtcmVmcmVzaFxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICA8cC1zcGxpdEJ1dHRvbiBpY29uPVxcXCJmYS1mbG9wcHktb1xcXCIgW21vZGVsXT1cXFwiaXRlbXNcXFwiPjwvcC1zcGxpdEJ1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gcEJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGljb249XFxcImZhLXByaW50XFxcIj48L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9wLXRvb2xiYXI+XFxyXFxuXFxyXFxuPGRpdiBbaW5uZXJIVE1MXT1cXFwicmVwb3J0Q29udGVudCB8IHNhZmVIdG1sXFxcIj48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnR2aWV3LmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCdcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBSZXBvcnRWaWV3U2VydmljZSB9IGZyb20gJy4uL3JlcG9ydHZpZXcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUsIERpYWxvZ01vZHVsZSwgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuaW1wb3J0IHsgVHJlZXZpZXdJdGVtLCBUcmVldmlld0NvbmZpZyB9IGZyb20gJ25nMi1kcm9wZG93bi10cmVldmlldyc7XHJcblxyXG5pbXBvcnQgeyBSZXBvcnRJbmZvLCBSZXBvcnRQYXJhbWV0ZXJJbmZvLCBQYXJhbWV0ZXJUeXBlRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZXBvcnRwYXJhbS5lbnRpdHllcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VHJlZXZpZXdDb25maWcgZXh0ZW5kcyBUcmVldmlld0NvbmZpZyB7XHJcbiAgICBpc1Nob3dBbGxDaGVja0JveCA9IHRydWU7XHJcbiAgICBpc1Nob3dGaWx0ZXIgPSB0cnVlO1xyXG4gICAgaXNTaG93Q29sbGFwc2VFeHBhbmQgPSB0cnVlO1xyXG4gICAgbWF4SGVpZ2h0ID0gNDAwO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmVwb3J0MScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yZXBvcnQxLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3JlcG9ydDEuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFNoYXJlZE1vZHVsZSwgRGlhbG9nTW9kdWxlLCBDYWxlbmRhck1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0MUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlcEluZm86IFJlcG9ydEluZm87XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZnJvbURhdGU6IERhdGU7XHJcbiAgICB0b0RhdGU6IERhdGU7XHJcblxyXG4gICAgbm9kZXM6IFRyZWV2aWV3SXRlbVtdO1xyXG4gICAgdmFsdWVzOiBhbnlbXTtcclxuICAgIGNvbmZpZzogVHJlZXZpZXdDb25maWcgPSB7XG4gICAgICAgIGlzU2hvd0FsbENoZWNrQm94OiBmYWxzZSxcbiAgICAgICAgaXNTaG93RmlsdGVyOiB0cnVlLFxuICAgICAgICBpc1Nob3dDb2xsYXBzZUV4cGFuZDogZmFsc2UsXG4gICAgICAgIG1heEhlaWdodDogNTAwXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFJlcG9ydFZpZXdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLyp0aGlzLnNlcnZpY2UuZ2V0UmVwb3J0SW5mbygnL9CS0LjQt9GD0LDQu9C40LfQsNGG0LjRjyDQutCw0YfQtdGB0YLQstCwINC/0LvQtdC90LrQuCDQkdCiL1JlcG9ydDInKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcEluZm8gPSByZXM7XHJcblxyXG4gICAgICAgICAgICB9KSovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKHNob3dSZXBvcnQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgLy9pZiAoc2hvd1JlcG9ydCkgeyB0aGlzLnNlcnZpY2UuYWRkUmVwb3J0KCcv0JLQuNC30YPQsNC70LjQt9Cw0YbQuNGPINC60LDRh9C10YHRgtCy0LAg0L/Qu9C10L3QutC4INCR0KIvUmVwb3J0MicpOyB9XHJcbiAgICB9XHJcblxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0MS5jb21wb25lbnQudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHAtZGlhbG9nIGhlYWRlcj17e2lkfX0gWyh2aXNpYmxlKV09XFxcImRpc3BsYXlcXFwiIG1vZGFsPVxcXCJtb2RhbFxcXCIgcmVzcG9uc2l2ZT1cXFwidHJ1ZVxcXCIgY2xvc2FibGU9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidWktZGlhbG9nLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPHAtY2FsZW5kYXIgWyhuZ01vZGVsKV09XFxcImZyb21EYXRlXFxcIiBbc2hvd0ljb25dPVxcXCJ0cnVlXFxcIiBhcHBlbmRUbz1cXFwiYm9keVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFttb250aE5hdmlnYXRvcl09XFxcInRydWVcXFwiIFt5ZWFyTmF2aWdhdG9yXT1cXFwidHJ1ZVxcXCIgeWVhclJhbmdlPVxcXCIyMDAwOjIwMzBcXFwiPlxcclxcbiAgICAgICAgPC9wLWNhbGVuZGFyPlxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjM1cHhcXFwiPnt7ZnJvbURhdGV8ZGF0ZX19PC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgPGxlby10cmVldmlldyBbY29uZmlnXT1cXFwiY29uZmlnXFxcIiBbaXRlbXNdPVxcXCJub2Rlc1xcXCIgKHNlbGVjdGVkQ2hhbmdlKT1cXFwidmFsdWVzID0gJGV2ZW50XFxcIj5cXHJcXG4gICAgICAgIDwvbGVvLXRyZWV2aWV3PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgcm9sZT1cXFwiYWxlcnRcXFwiPlxcclxcbiAgICAgICAgICAgIFNlbGVjdGVkIHByb2R1Y3RzOlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgcm93IG9mIHZhbHVlc1xcXCI+e3tyb3d9fTwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8cC1mb290ZXI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aS1kaWFsb2ctYnV0dG9ucGFuZSB1aS13aWRnZXQtY29udGVudCB1aS1oZWxwZXItY2xlYXJmaXhcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBwQnV0dG9uIGljb249XFxcImZhLWNsb3NlXFxcIiAoY2xpY2spPVxcXCJjbG9zZURpYWxvZyhmYWxzZSlcXFwiIGxhYmVsPVxcXCJOb1xcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHBCdXR0b24gaWNvbj1cXFwiZmEtY2hlY2tcXFwiIChjbGljayk9XFxcImNsb3NlRGlhbG9nKHRydWUpXFxcIiBsYWJlbD1cXFwiWWVzXFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L3AtZm9vdGVyPlxcclxcbjwvcC1kaWFsb2c+XFxyXFxuXFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3JlcG9ydHZpZXcvcmVwb3J0cy9yZXBvcnQxLmNvbXBvbmVudC5odG1sXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yZXBvcnQxLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcmVwb3J0dmlldy9yZXBvcnRzL3JlcG9ydDEuY29tcG9uZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9yZXBvcnR2aWV3L3JlcG9ydHMvcmVwb3J0MS5jb21wb25lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lbmcvY29tcG9uZW50cy9wYW5lbC9wYW5lbFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicHJpbWVuZy9jb21wb25lbnRzL3BhbmVsL3BhbmVsXCJcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9jb21wb25lbnRzL3BhbmVsbWVudS9wYW5lbG1lbnVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9wYW5lbG1lbnUvcGFuZWxtZW51XCJcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2dcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nXCJcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIlxuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9