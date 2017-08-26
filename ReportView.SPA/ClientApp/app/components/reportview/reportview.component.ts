import { Component, Input, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { isBrowser } from 'angular2-universal'
import { Observable, Subscription } from 'rxjs/Rx';

import { ReportViewService } from './reportview.service';
import { WebApiObservableService } from '../shared/webapi.service';
import { SafeHtmlPipe } from '../shared/safehtml.pipe';

@Component({
    moduleId: module.id,
    selector: 'report-view',
    template: 'reportview.component.html',
})
export class ReportViewComponent implements OnInit, AfterViewInit {
    @Input() reportPath: string;
    private sub: Subscription;
    private errorMessage: string;
    public hasPages: boolean;
    public reportContent: any;

    constructor(private service: ReportViewService) { }

    ngAfterViewInit() {
        this.viewReportPage(1, null);
    }

    ngOnInit() {
    }

    public showLoadingProgress(message) {
        this.hideLoadingProgress();

       /* $('.ReportViewerContent').hide();
        $('.ReportViewerContentContainer').append('<div class="loadingContainer"><div style="margin: 0 auto; width: 100%; text-align: center; vertical-align: middle;"><h2><i class="glyphicon glyphicon-refresh gly-spin"></i>' + message + '</h2></div></div>');*/
    }

    public hideLoadingProgress() {
       /* $('.loadingContainer').remove();
        $('.ReportViewerContent').show();*/
}

    public printReport() {
      /* var params = $('.ParametersContainer :input').serializeArray();
        var urlParams = $.param(params);

        window.open("/Report/PrintReport/?reportPath=@Model.ReportPath.UrlEncode()&" + urlParams, "_blank");
        */
        }

    public findText() {
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
    }

    public viewReportPage(page, afterReportLoadedCallback) {
        this.showLoadingProgress('Loading Report Page...');

        var ReportPath = this.reportPath;
        // var params = null;  //$('.ParametersContainer :input').serializeArray();
        var urlParams = null;   //$.param(params);
        var totalPages = null;  //parseInt($('#ReportViewerTotalPages').text());

        if (page == undefined || page == null || page < 1) {
            page = 1;
        } else if (page > totalPages) {
            page = totalPages;
        }

        this.service.getReportPage(ReportPath, page, urlParams)
            .subscribe(
            (data) => {
                this.updateReportContent(data);
                this.hideLoadingProgress();

                if (afterReportLoadedCallback && typeof (afterReportLoadedCallback) == "function") {
                    afterReportLoadedCallback();
                }
            },
            (error) => {
                this.errorMessage = <any>error
                this.hideLoadingProgress();
            });
    }

    public exportReport(element) {
        /*var params = $('.ParametersContainer :input').serializeArray();
        var urlParams = $.param(params);
        var format = $(element).attr('class').replace("Export", "");

        window.location.href = "/Report/ExportReport/?reportPath=@Model.ReportPath.UrlEncode()&format=" + format + "&" + urlParams;
        */
        }

    public updateReportContent(data) {
        if (data != undefined && data != null) {
            this.reportContent = data.Content;

            if (data.TotalPages <= 1) {
                this.hasPages = false;
            } else {
                this.hasPages = true;
            }
        }
    }

    ngOnDestroy() {
        //this.sub.unsubscribe();
    }

}