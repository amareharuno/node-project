// import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from "@angular/core";
// import { trigger, state, style, transition, animate } from "@angular/animations";
//
// @Component({
//     selector: 'app-info-panel',
//     templateUrl: './info-panel.component.html',
//     animations: [trigger(
//         'slideToggle',
//         [
//             state('void', style({transform: 'translateX(100%)'})),
//             state('hidden', style({transform: 'translateX(100%)'})),
//             state('visible', style({transform: 'translateX(0)'})),
//             transition('void => visible', animate('200ms ease-out')),
//             transition('hidden => visible', animate('200ms ease-in')),
//             transition('visible => hidden', animate('200ms ease-out'))
//         ])],
// })
//
// export class InfoPanelComponent implements OnInit {
//     private scrollBarWidth: number;
//     private $body: JQuery;
//     private slideToggleExpression: string;
//
//     constructor() {
//     }
//
//     @Input() visible: boolean;
//
//     @Output()
//     public visibleChange = new EventEmitter();
//
//     ngOnInit() {
//         this.scrollBarWidth = this.getScrollbarWidth();
//         this.$body = $(document.body);
//     };
//
//     stopPropogation(event) {
//         event.preventDefault();
//         event.stopImmediatePropagation();
//     }
//
//     ngOnChanges(changes: SimpleChanges) {
//         if (changes.visible && changes.visible.currentValue) {
//             this.onShowPanel();
//         }
//     }
//
//     ngOnDestroy() {
//         this.$body.css({
//             'overflow': 'auto',
//             'paddingRight': 0,
//         });
//     }
//
//     onShowPanel() {
//         this.$body.css({
//             'overflow': 'hidden',
//             'paddingRight': this.scrollBarWidth,
//         });
//         this.slideToggleExpression = 'visible';
//     }
//
//     onHidePanel() {
//         this.slideToggleExpression = 'hidden';
//         this.ngOnDestroy();
//     }
//
//     onClosePanel() {
//         this.onHidePanel();
//     }
//
//     slideToggleDone(e: any) {
//         if (e.toState === 'hidden') {
//             this.visibleChange.emit(false);
//             return;
//         }
//
//         this.visibleChange.emit(this.visible);
//     }
//
//     getScrollbarWidth() {
//         let scrollDiv, scrollbarWidth;
//         scrollDiv = document.createElement("div");
//         scrollDiv.className = "scroll-bar-measure";
//         document.body.appendChild(scrollDiv);
//         scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
//         document.body.removeChild(scrollDiv);
//         return scrollbarWidth;
//     }
//
// }
