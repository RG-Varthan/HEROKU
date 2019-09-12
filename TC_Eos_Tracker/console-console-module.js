(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["console-console-module"],{

/***/ "./src/app/console/console-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/console/console-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ConsoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleRoutingModule", function() { return ConsoleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _console_console_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/console.component */ "./src/app/console/console/console.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _console_console_component__WEBPACK_IMPORTED_MODULE_2__["ConsoleComponent"]
    }
];
var ConsoleRoutingModule = /** @class */ (function () {
    function ConsoleRoutingModule() {
    }
    ConsoleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsoleRoutingModule);
    return ConsoleRoutingModule;
}());



/***/ }),

/***/ "./src/app/console/console.module.ts":
/*!*******************************************!*\
  !*** ./src/app/console/console.module.ts ***!
  \*******************************************/
/*! exports provided: ConsoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleModule", function() { return ConsoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _console_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console-routing.module */ "./src/app/console/console-routing.module.ts");
/* harmony import */ var _console_console_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console/console.component */ "./src/app/console/console/console.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConsoleModule = /** @class */ (function () {
    function ConsoleModule() {
    }
    ConsoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _console_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsoleRoutingModule"]
            ],
            declarations: [
                _console_console_component__WEBPACK_IMPORTED_MODULE_3__["ConsoleComponent"]
            ]
        })
    ], ConsoleModule);
    return ConsoleModule;
}());



/***/ }),

/***/ "./src/app/console/console/console.component.html":
/*!********************************************************!*\
  !*** ./src/app/console/console/console.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1 class=\"mat-headline\">\n    {{ 'Console' | translate }}\n  </h1>\n  <span style=\"flex:1 1 auto;\"></span>\n  <span class=\"mat-caption\" *ngIf=\"apiEndpoint$ | async as apiEndpoint\">\n    {{apiEndpoint}}\n  </span>\n</mat-toolbar>\n<div style=\"margin:10px;\">\n  <h3 class=\"mat-title\">CHAIN</h3>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          get_info\n        </mat-panel-title>\n        <mat-panel-description>\n          Returns an object containing various details about the blockchain.\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <ng-template matExpansionPanelContent>\n        Body:\n        <pre>{{'{}'}}</pre>\n      </ng-template>\n      <mat-action-row>\n        <button mat-raised-button color=\"accent\" (click)=\"getInfo()\">Run</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          get_block\n        </mat-panel-title>\n        <mat-panel-description>\n          Returns an object containing various details about a specific block on the blockchain.\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <ng-template matExpansionPanelContent>\n        Body:\n        <pre>block_num_or_id (string)</pre>\n      </ng-template>\n      <mat-action-row>\n        <button mat-raised-button color=\"accent\" (click)=\"getBlock(189)\">Run</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <div class=\"mat-elevation-z1\" *ngIf=\"result$ | async as result\" style=\"margin:16px 0;padding:10px;background-color:#fff;\">\n    <ngx-json-viewer [json]=\"result\" [expanded]=\"false\"></ngx-json-viewer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/console/console/console.component.scss":
/*!********************************************************!*\
  !*** ./src/app/console/console/console.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnNvbGUvY29uc29sZS9jb25zb2xlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/console/console/console.component.ts":
/*!******************************************************!*\
  !*** ./src/app/console/console/console.component.ts ***!
  \******************************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_eos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/eos.service */ "./src/app/services/eos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsoleComponent = /** @class */ (function () {
    function ConsoleComponent(eosService) {
        this.eosService = eosService;
    }
    ConsoleComponent.prototype.ngOnInit = function () {
        this.apiEndpoint$ = this.eosService.apiEndpoint$;
    };
    ConsoleComponent.prototype.getInfo = function () {
        this.result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.eosService.eos.getInfo({}));
    };
    ConsoleComponent.prototype.getBlock = function (block_num_or_id) {
        this.result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.eosService.eos.getBlock(block_num_or_id));
    };
    ConsoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-console',
            template: __webpack_require__(/*! ./console.component.html */ "./src/app/console/console/console.component.html"),
            styles: [__webpack_require__(/*! ./console.component.scss */ "./src/app/console/console/console.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_eos_service__WEBPACK_IMPORTED_MODULE_2__["EosService"]])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ })

}]);
//# sourceMappingURL=console-console-module.js.map