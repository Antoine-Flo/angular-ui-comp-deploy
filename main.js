(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\acer\Desktop\angular-ui-components\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Px97":
/*!**************************************************!*\
  !*** ./src/app/paginator/paginator.component.ts ***!
  \**************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0, a1) { return { active: a0, greyhover: a1 }; };
function PaginatorComponent_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_5_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.currentPage = i_r2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, i_r2 === ctx_r3.currentPage, i_r2 !== ctx_r3.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
} }
function PaginatorComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginatorComponent_ng_container_5_li_1_Template, 3, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkWindowIndex(i_r2));
} }
const _c1 = function (a0) { return { disabled: a0 }; };
class PaginatorComponent {
    constructor() {
        this.currentPage = 0;
        this.images = [
            {
                title: 'Some photo',
                url: 'https://picsum.photos/id/1003/300',
            },
            {
                title: 'Another one',
                url: 'https://picsum.photos/id/1002/300',
            },
            {
                title: 'Beautiful',
                url: 'https://picsum.photos/id/10/300',
            },
            {
                title: 'I like that',
                url: 'https://picsum.photos/id/1000/300',
            },
            {
                title: 'Some photo',
                url: 'https://picsum.photos/id/1003/300',
            },
            {
                title: 'Another one',
                url: 'https://picsum.photos/id/1002/300',
            },
            {
                title: 'Beautiful',
                url: 'https://picsum.photos/id/10/300',
            },
            {
                title: 'I like that',
                url: 'https://picsum.photos/id/1000/300',
            },
            {
                title: 'Some photo',
                url: 'https://picsum.photos/id/1003/300',
            },
            {
                title: 'Another one',
                url: 'https://picsum.photos/id/1002/300',
            },
            {
                title: 'Beautiful',
                url: 'https://picsum.photos/id/10/300',
            },
            {
                title: 'I like that',
                url: 'https://picsum.photos/id/1000/300',
            },
        ];
    }
    checkWindowIndex(i) {
        if (i - this.currentPage < 4 && i - this.currentPage >= 0)
            return true;
        if (this.images.length - i < 5 && this.images.length - this.currentPage < 4)
            return true;
        return false;
    }
}
PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) { return new (t || PaginatorComponent)(); };
PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorComponent, selectors: [["app-paginator"]], decls: 11, vars: 8, consts: [[1, "nav"], [1, "nav__list"], [1, "nav__item", "greyhover", 3, "ngClass"], [1, "nav__link", "simplehover", 3, "click"], [4, "ngFor", "ngForOf"], [1, "img"], ["alt", "", 1, "img_content", 3, "src"], ["class", "nav__item", 3, "ngClass", 4, "ngIf"], [1, "nav__item", 3, "ngClass"], [1, "nav__link", 3, "click"]], template: function PaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_Template_a_click_3_listener() { return ctx.currentPage = ctx.currentPage - 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Prev ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginatorComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_Template_a_click_7_listener() { return ctx.currentPage = ctx.currentPage + 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.currentPage === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.currentPage === ctx.images.length - 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.images[ctx.currentPage].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".nav[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: grid;\n  justify-content: center;\n}\n.nav__list[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n}\n.nav__item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.nav__item[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid lightgrey;\n}\n.nav__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 30px;\n  text-decoration: none;\n  color: inherit;\n  font-family: sans-serif;\n  font-size: 15px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.greyhover[_ngcontent-%COMP%]:hover {\n  background-color: whitesmoke;\n}\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: grey;\n}\n.active[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background-color: royalblue;\n  color: white;\n}\n.img[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.img_content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2luYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFHRTtFQUNFLGlDQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBRko7QUFNQTtFQUNFLDRCQUFBO0FBSEY7QUFNQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSkoiLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAmX19saXN0IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5ncmV5aG92ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG4gICZfY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator/paginator.component */ "Px97");
/* harmony import */ var _drag_ndrop_drag_ndrop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-ndrop/drag-ndrop.component */ "kg1o");



class AppComponent {
    constructor() {
        this.title = 'angular-ui-components';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [[1, "wrap"], [1, "header"], [1, "header__title"], [1, "header__intro"], [1, "components"], [1, "components__component"], [1, "components__title", "subtitle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Angular UI Components Collection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Un recueil en vrac de side-projects relativements utiles (et parfois pas dutout). Tout le code est disponible sur GitHub bien entendu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Photo paginator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-paginator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Drag'N'Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-drag-ndrop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"], _drag_ndrop_drag_ndrop_component__WEBPACK_IMPORTED_MODULE_2__["DragNDropComponent"]], styles: [".wrap[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 90%;\n  max-width: 1200px;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 100px 0;\n}\n\n.header__title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n}\n\n.header__intro[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n\n.components[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.components__component[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n  padding: 30px;\n  border-radius: 5px;\n  box-shadow: 0 1.7px 10.1px rgba(0, 0, 0, 0.008), 0 4px 24.2px rgba(0, 0, 0, 0.012), 0 7.5px 45.6px rgba(0, 0, 0, 0.015), 0 13.4px 81.3px rgba(0, 0, 0, 0.018), 0 25.1px 152.1px rgba(0, 0, 0, 0.022), 0 60px 364px rgba(0, 0, 0, 0.03);\n}\n\n.components__component[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.components__title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQURGOztBQUdFO0VBQ0ksb0JBQUE7RUFDRixhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzT0FDQTtBQUhKOztBQVdJO0VBQ0ksc0JBQUE7QUFUUjs7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFYSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgbWFyZ2luOiAxMDBweCAwO1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19pbnRybyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY29tcG9uZW50cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdhcDogMjBweDtcclxuXHJcbiAgJl9fY29tcG9uZW50IHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgMCAxLjdweCAxMC4xcHggcmdiYSgwLCAwLCAwLCAwLjAwOCksXHJcbiAgICAwIDRweCAyNC4ycHggcmdiYSgwLCAwLCAwLCAwLjAxMiksXHJcbiAgICAwIDcuNXB4IDQ1LjZweCByZ2JhKDAsIDAsIDAsIDAuMDE1KSxcclxuICAgIDAgMTMuNHB4IDgxLjNweCByZ2JhKDAsIDAsIDAsIDAuMDE4KSxcclxuICAgIDAgMjUuMXB4IDE1Mi4xcHggcmdiYSgwLCAwLCAwLCAwLjAyMiksXHJcbiAgICAwIDYwcHggMzY0cHggcmdiYSgwLCAwLCAwLCAwLjAzKVxyXG4gIDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginator/paginator.component */ "Px97");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _drag_ndrop_drag_ndrop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag-ndrop/drag-ndrop.component */ "kg1o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__["PaginatorComponent"],
        _drag_ndrop_drag_ndrop_component__WEBPACK_IMPORTED_MODULE_6__["DragNDropComponent"]], imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "kg1o":
/*!****************************************************!*\
  !*** ./src/app/drag-ndrop/drag-ndrop.component.ts ***!
  \****************************************************/
/*! exports provided: DragNDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragNDropComponent", function() { return DragNDropComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { backgroundColor: a0 }; };
function DragNDropComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.num, "");
} }
class DragNDropComponent {
    constructor() {
        this.list = [
            {
                num: 1,
                color: `hsl(0, 47%, 58%)`
            },
            {
                num: 2,
                color: `hsl(200, 47%, 58%)`,
            },
            {
                num: 3,
                color: `hsl(130, 47%, 58%)`,
            },
            {
                num: 4,
                color: `hsl(50, 47%, 58%)`,
            },
            {
                num: 5,
                color: `hsl(300, 47%, 58%)`,
            },
            {
                num: 6,
                color: `hsl(90, 47%, 58%)`,
            },
        ];
    }
    ngOnInit() { }
    dropped(e) {
        console.log(e.previousIndex);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.list, e.previousIndex, e.currentIndex);
    }
}
DragNDropComponent.ɵfac = function DragNDropComponent_Factory(t) { return new (t || DragNDropComponent)(); };
DragNDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DragNDropComponent, selectors: [["app-drag-ndrop"]], decls: 3, vars: 1, consts: [[1, "wrap"], ["cdkDropList", "", 1, "list", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "list__item", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "list__item", 3, "ngStyle"]], template: function DragNDropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DragNDropComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.dropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DragNDropComponent_div_2_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".wrap[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.list[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.cdk-drag[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  list-style: none;\n  padding: 18px;\n  font-size: 1.2em;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  height: 20px !important;\n  margin: 0 !important;\n  opacity: 0.8;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyYWctbmRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImRyYWctbmRyb3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uY2RrLWRyYWcge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IC4xO1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map