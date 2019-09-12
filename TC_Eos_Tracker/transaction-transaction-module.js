(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-transaction-module"],{

/***/ "./src/app/transaction/transaction-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/transaction/transaction-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRoutingModule", function() { return TransactionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transaction/transactions/transactions.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction/transaction.component.ts");
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
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__["TransactionsComponent"]
    },
    {
        path: ':blockId/:id',
        component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_3__["TransactionComponent"]
    }
];
var TransactionRoutingModule = /** @class */ (function () {
    function TransactionRoutingModule() {
    }
    TransactionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TransactionRoutingModule);
    return TransactionRoutingModule;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.module.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.module.ts ***!
  \***************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-routing.module */ "./src/app/transaction/transaction-routing.module.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transaction/transactions/transactions.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction/transaction.component.ts");
/* harmony import */ var _transaction_information_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction/information/information.component */ "./src/app/transaction/transaction/information/information.component.ts");
/* harmony import */ var _transaction_data_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction/data/data.component */ "./src/app/transaction/transaction/data/data.component.ts");
/* harmony import */ var _transaction_actions_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transaction/actions/actions.component */ "./src/app/transaction/transaction/actions/actions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TransactionModule = /** @class */ (function () {
    function TransactionModule() {
    }
    TransactionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionRoutingModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
            ],
            declarations: [
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsComponent"],
                _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_5__["TransactionComponent"],
                _transaction_information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"],
                _transaction_data_data_component__WEBPACK_IMPORTED_MODULE_7__["DataComponent"],
                _transaction_actions_actions_component__WEBPACK_IMPORTED_MODULE_8__["ActionsComponent"]
            ]
        })
    ], TransactionModule);
    return TransactionModule;
}());



/***/ }),

/***/ "./src/app/transaction/transaction/actions/actions.component.html":
/*!************************************************************************!*\
  !*** ./src/app/transaction/transaction/actions/actions.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [dataSource]=\"transaction.trx.trx.actions\" [title]=\"'Actions' | translate\" [enablePager]=\"false\">\n  <table mat-table [dataSource]=\"transaction.trx.trx.actions\">\n    <tr mat-header-row *matHeaderRowDef=\"actionsColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: actionsColumns;\"></tr>\n    <ng-container matColumnDef=\"index\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Index' | translate }}</th>\n      <td mat-cell *matCellDef=\"let action; let i = index\">\n        <a [routerLink]=\"['/actions',transaction.block_num,transaction.id,i]\">{{i + 1}}</a>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"account\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Account' | translate }}</th>\n      <td mat-cell *matCellDef=\"let action\">\n        <a [routerLink]=\"['/accounts',action.account]\">{{action.account}}</a>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"authorization\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Authorizations' | translate }}</th>\n      <td mat-cell *matCellDef=\"let action\">\n        <span *ngFor=\"let auth of action.authorization\">\n          {{auth.actor}}@{{auth.permission}}\n        </span>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Name' | translate }}</th>\n      <td mat-cell *matCellDef=\"let action\">\n        {{action.name}}\n      </td>\n    </ng-container>\n  </table>\n</app-table>\n"

/***/ }),

/***/ "./src/app/transaction/transaction/actions/actions.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/transaction/transaction/actions/actions.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhcnRoYW4vRGVza3RvcC9FT1MvVGVtcC9CbG9jayBFeHBsb3Jlci9FT1NUcmFja2VyLW1hc3Rlci9zcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uL2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uL2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/transaction/transaction/actions/actions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/transaction/transaction/actions/actions.component.ts ***!
  \**********************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.actionsColumns = [
            'index',
            'account',
            'authorization',
            'name'
        ];
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionsComponent.prototype, "transaction", void 0);
    ActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-actions',
            template: __webpack_require__(/*! ./actions.component.html */ "./src/app/transaction/transaction/actions/actions.component.html"),
            styles: [__webpack_require__(/*! ./actions.component.scss */ "./src/app/transaction/transaction/actions/actions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transaction/data/data.component.html":
/*!******************************************************************!*\
  !*** ./src/app/transaction/transaction/data/data.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"transaction?.raw; else loading\">\n  <prettyjson [obj]=\"transaction.raw\"></prettyjson>\n</div>\n<ng-template #loading>\n  <app-spinner></app-spinner>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/transaction/transaction/data/data.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/transaction/transaction/data/data.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uL2RhdGEvZGF0YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/transaction/transaction/data/data.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/transaction/transaction/data/data.component.ts ***!
  \****************************************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataComponent = /** @class */ (function () {
    function DataComponent() {
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataComponent.prototype, "transaction", void 0);
    DataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-data',
            template: __webpack_require__(/*! ./data.component.html */ "./src/app/transaction/transaction/data/data.component.html"),
            styles: [__webpack_require__(/*! ./data.component.scss */ "./src/app/transaction/transaction/data/data.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transaction/information/information.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/transaction/transaction/information/information.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"transaction; else loading\" style=\"margin:10px;\">\n  <mat-card>\n    <mat-card-content class=\"table-container\">\n      <table>\n        <tr>\n          <td>{{ 'Transaction ID' | translate }}:</td>\n          <td>{{transaction.id}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Block Number' | translate }}:</td>\n          <td>\n            <a [routerLink]=\"['/blocks',transaction.block_num]\">{{transaction.block_num}}</a>\n          </td>\n        </tr>\n        <tr>\n          <td>{{ 'Timestamp' | translate }}:</td>\n          <td>{{transaction.block_time | amFromUtc | date:'MMM d, y, h:mm:ss.SSS a'}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Irreversible' | translate }}:</td>\n          <td>{{transaction.last_irreversible_block > transaction.block_num}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Pending' | translate }}:</td>\n          <td>{{transaction.trx.trx?.delay_sec > 0}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Status' | translate }}:</td>\n          <td>{{transaction.trx.receipt.status}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'CPU Usage' | translate }}:</td>\n          <td>{{transaction.trx.receipt.cpu_usage_us | number }} µs</td>\n        </tr>\n        <tr>\n          <td>{{ 'NET Usage' | translate }}:</td>\n          <td>{{transaction.trx.receipt.net_usage_words | toKB | number:'1.0-3'}} KB</td>\n        </tr>\n        <tr>\n          <td>{{ 'Number of Actions' | translate }}:</td>\n          <td>{{transaction.trx.trx?.actions?.length || 0}}</td>\n        </tr>\n      </table>\n    </mat-card-content>\n  </mat-card>\n  <div *ngIf=\"transaction.trx.trx?.actions?.length\" style=\"margin-top:20px;\">\n    <app-transaction-actions [transaction]=\"transaction\"></app-transaction-actions>\n  </div>\n</div>\n<ng-template #loading>\n  <app-spinner></app-spinner>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/transaction/transaction/information/information.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/transaction/transaction/information/information.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transaction/transaction/information/information.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/transaction/transaction/information/information.component.ts ***!
  \******************************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InformationComponent.prototype, "transaction", void 0);
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/transaction/transaction/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.scss */ "./src/app/transaction/transaction/information/information.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transaction/transaction.component.html":
/*!********************************************************************!*\
  !*** ./src/app/transaction/transaction/transaction.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1 class=\"mat-headline\">\n    {{ 'Transaction' | translate }}\n  </h1>\n</mat-toolbar>\n<ng-container *ngIf=\"transaction$ | async as transaction; else loading\">\n  <mat-tab-group color=\"primary\" dynamicHeight=\"true\" *ngIf=\"!transaction.isError; else error\">\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon style=\"margin-right:5px;\">info</mat-icon>\n        {{ 'Transaction Information' | translate }}\n      </ng-template>\n      <app-transaction-information [transaction]=\"transaction.value\"></app-transaction-information>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon style=\"margin-right:5px;\">code</mat-icon>\n        {{ 'BlockchainRawData' | translate }}\n      </ng-template>\n      <div style=\"margin:10px;\">\n        <ngx-json-viewer [json]=\"transaction.value\" [expanded]=\"true\"></ngx-json-viewer>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n  <ng-template #error>\n    <app-error></app-error>\n  </ng-template>\n</ng-container>\n<ng-template #loading>\n  <app-spinner></app-spinner>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/transaction/transaction/transaction.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/transaction/transaction/transaction.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transaction/transaction/transaction.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/transaction/transaction/transaction.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_eos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/eos.service */ "./src/app/services/eos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(route, eosService) {
        this.route = route;
        this.eosService = eosService;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transaction$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.eosService.getTransactionRaw(+params.blockId, params.id); }));
    };
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/transaction/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/transaction/transaction/transaction.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_eos_service__WEBPACK_IMPORTED_MODULE_2__["EosService"]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transactions/transactions.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/transaction/transactions/transactions.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1 class=\"mat-headline\">\n    {{ 'Transactions' | translate }}\n  </h1>\n</mat-toolbar>\n<div style=\"margin:10px;\">\n  <ng-container *ngIf=\"blocks$ | async as blocks; else loading\">\n    <mat-accordion [multi]=\"true\">\n      <mat-expansion-panel [disabled]=\"block.transactions.length === 0\" *ngFor=\"let block of blocks\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Block #{{block.block_num}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{block.transactions.length}} transactions\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <div class=\"table-container mat-elevation-z1\">\n            <table mat-table [dataSource]=\"block.transactions\" style=\"border:none;\">\n              <ng-container *ngIf=\"columnHeaders$ | async as columnHeaders\">\n                <tr mat-header-row *matHeaderRowDef=\"columnHeaders\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: columnHeaders;\"></tr>\n              </ng-container>\n              <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef>{{ 'Transaction ID' | translate }}</th>\n                <td mat-cell *matCellDef=\"let transaction\">\n                  <a [routerLink]=\"['/transactions',block.block_num,transaction.trx.id||transaction.trx]\">\n                    <id-64 [id]=\"transaction.trx.id || transaction.trx\"></id-64>\n                  </a>\n                </td>\n              </ng-container>\n              <ng-container matColumnDef=\"cpu\">\n                <th mat-header-cell *matHeaderCellDef>{{ 'CPU Usage' | translate }}</th>\n                <td mat-cell *matCellDef=\"let transaction\">\n                  {{transaction.cpu_usage_us | number }} µs\n                </td>\n              </ng-container>\n              <ng-container matColumnDef=\"net\">\n                <th mat-header-cell *matHeaderCellDef>{{ 'NET Usage' | translate }}</th>\n                <td mat-cell *matCellDef=\"let transaction\">\n                  {{transaction.net_usage_words | toKB | number:'1.0-3'}} KB\n                </td>\n              </ng-container>\n              <ng-container matColumnDef=\"actions\">\n                <th mat-header-cell *matHeaderCellDef>{{ 'Actions' | translate }}</th>\n                <td mat-cell *matCellDef=\"let transaction\">\n                  {{transaction.trx.transaction?.actions?.length || 0}}\n                </td>\n              </ng-container>\n            </table>\n          </div>\n        </ng-template>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <mat-paginator [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize\" [length]=\"total\" (page)=\"onPaging($event)\" style=\"margin-top:16px;\"></mat-paginator>\n  </ng-container>\n  <ng-template #loading>\n    <app-spinner></app-spinner>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/transaction/transactions/transactions.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/transaction/transactions/transactions.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/transaction/transactions/transactions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/transaction/transactions/transactions.component.ts ***!
  \********************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(breakpointObserver, appService) {
        this.breakpointObserver = breakpointObserver;
        this.appService = appService;
        this.columnHeaders$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(DEFAULT_HEADERS);
        this.pageIndex = 0;
        this.pageSize = 10;
        this.total = 0;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnHeaders$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches ? XSMALL_HEADERS : DEFAULT_HEADERS; }));
        this.blocks$ = this.appService.getBlocks(this.pageIndex, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (blocks) {
            _this.total = blocks[0].block_num;
        }));
    };
    TransactionsComponent.prototype.onPaging = function (pageEvent) {
        this.pageIndex = pageEvent.pageIndex;
        this.blocks$ = this.appService.getBlocks(pageEvent.length - pageEvent.pageSize * pageEvent.pageIndex);
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transaction/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.scss */ "./src/app/transaction/transactions/transactions.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());

var DEFAULT_HEADERS = [
    'id',
    'cpu',
    'net',
    'actions'
];
var XSMALL_HEADERS = [
    'id',
    'actions'
];


/***/ })

}]);
//# sourceMappingURL=transaction-transaction-module.js.map