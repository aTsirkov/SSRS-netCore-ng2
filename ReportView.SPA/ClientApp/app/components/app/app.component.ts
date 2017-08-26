import { Component, trigger, state, style, transition, animate } from '@angular/core';

import { ReportViewService } from '../reportview/reportview.service';
import { WebApiObservableService } from '../shared/webapi.service';
import { TreeNodes } from '../shared/tree.nodes';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: 'app.component.html',
    styles: ['app.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ])
    ],
    providers: [ ReportViewService, WebApiObservableService, TreeNodes ]

})
export class AppComponent {
    menuState: string = 'in';

    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}
