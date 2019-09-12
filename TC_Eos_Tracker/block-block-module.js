(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-block-module"],{

/***/ "./src/app/block/block-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/block/block-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BlockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockRoutingModule", function() { return BlockRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/blocks.component */ "./src/app/block/blocks/blocks.component.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block/block/block.component.ts");
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
        component: _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_2__["BlocksComponent"]
    },
    {
        path: ':id',
        component: _block_block_component__WEBPACK_IMPORTED_MODULE_3__["BlockComponent"]
    },
    {
        path: ':id/transactions',
        component: _block_block_component__WEBPACK_IMPORTED_MODULE_3__["BlockComponent"]
    }
];
var BlockRoutingModule = /** @class */ (function () {
    function BlockRoutingModule() {
    }
    BlockRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlockRoutingModule);
    return BlockRoutingModule;
}());



/***/ }),

/***/ "./src/app/block/block.module.ts":
/*!***************************************!*\
  !*** ./src/app/block/block.module.ts ***!
  \***************************************/
/*! exports provided: BlockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockModule", function() { return BlockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _block_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-routing.module */ "./src/app/block/block-routing.module.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/blocks.component */ "./src/app/block/blocks/blocks.component.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block/block/block.component.ts");
/* harmony import */ var _block_information_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block/information/information.component */ "./src/app/block/block/information/information.component.ts");
/* harmony import */ var _block_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block/transactions/transactions.component */ "./src/app/block/block/transactions/transactions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BlockModule = /** @class */ (function () {
    function BlockModule() {
    }
    BlockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _block_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlockRoutingModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
            ],
            declarations: [
                _blocks_blocks_component__WEBPACK_IMPORTED_MODULE_4__["BlocksComponent"],
                _block_block_component__WEBPACK_IMPORTED_MODULE_5__["BlockComponent"],
                _block_information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"],
                _block_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_7__["TransactionsComponent"]
            ]
        })
    ], BlockModule);
    return BlockModule;
}());



/***/ }),

/***/ "./src/app/block/block/block.component.html":
/*!**************************************************!*\
  !*** ./src/app/block/block/block.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1 class=\"mat-headline\">\n    {{ 'Block' | translate }} #{{id$ | async}}\n  </h1>\n</mat-toolbar>\n<ng-container *ngIf=\"block$ | async as block; else loading\">\n  <mat-tab-group color=\"primary\" dynamicHeight=\"true\" *ngIf=\"!block.isError; else error\">\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon style=\"margin-right:5px;\">info</mat-icon>\n        {{ 'BlockInformation' | translate }}\n      </ng-template>\n      <app-block-information [block]=\"block.value\"></app-block-information>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon style=\"margin-right:5px;\">code</mat-icon>\n        {{ 'BlockchainRawData' | translate }}\n      </ng-template>\n      <prettyjson [obj]=\"block.value\"></prettyjson>\n      <!-- <div style=\"padding:10px;\">\n        <ngx-json-viewer [json]=\"block.value\" [expanded]=\"false\"></ngx-json-viewer>\n      </div> -->\n    </mat-tab>\n  </mat-tab-group>\n  <ng-template #error>\n    <app-error></app-error>\n  </ng-template>\n</ng-container>\n<ng-template #loading>\n  <app-spinner></app-spinner>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/block/block/block.component.scss":
/*!**************************************************!*\
  !*** ./src/app/block/block/block.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/block/block/block.component.ts":
/*!************************************************!*\
  !*** ./src/app/block/block/block.component.ts ***!
  \************************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
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




var BlockComponent = /** @class */ (function () {
    function BlockComponent(route, eosService) {
        this.route = route;
        this.eosService = eosService;
    }
    BlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return +params.id; }));
        this.block$ = this.id$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) { return _this.eosService.getBlockRaw(id); }));
    };
    BlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./block.component.html */ "./src/app/block/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.scss */ "./src/app/block/block/block.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_eos_service__WEBPACK_IMPORTED_MODULE_2__["EosService"]])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/block/block/information/information.component.html":
/*!********************************************************************!*\
  !*** ./src/app/block/block/information/information.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"block; else loading\" style=\"margin:10px;\">\n  <mat-card>\n    <mat-card-content class=\"table-container\">\n      <table>\n        <tr>\n          <td>{{ 'Block Number' | translate }}:</td>\n          <td>{{block.block_num}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Block Producer' | translate }}:</td>\n          <td>\n            <a [routerLink]=\"['/producers',block.producer]\">{{block.producer}}</a>\n          </td>\n        </tr>\n        <tr>\n          <td>{{ 'Timestamp' | translate }}:</td>\n          <td>{{block.timestamp | amFromUtc | date:'MMM d, y, h:mm:ss.SSS a'}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Block ID' | translate }}:</td>\n          <td>{{block.id}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Previous Block ID' | translate }}:</td>\n          <td>\n            <span *ngIf=\"block.block_num <= 1\">{{block.previous}}</span>\n            <a [routerLink]=\"['/blocks',block.block_num-1]\" *ngIf=\"block.block_num > 1\">{{block.previous}}</a>\n          </td>\n        </tr>\n        <tr>\n          <td>{{ 'Transaction Merkle Root' | translate }}:</td>\n          <td>{{block.transaction_mroot}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Action Merkle Root' | translate }}:</td>\n          <td>{{block.action_mroot}}</td>\n        </tr>\n        <tr>\n          <td>{{ 'Number of Transactions' | translate }}:</td>\n          <td>{{block.transactions.length}}</td>\n        </tr>\n      </table>\n    </mat-card-content>\n  </mat-card>\n  <div *ngIf=\"block.transactions.length\" style=\"margin-top:20px;\">\n    <app-block-transactions [block]=\"block\"></app-block-transactions>\n  </div>\n</div>\n<ng-template #loading>\n  <app-spinner></app-spinner>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/block/block/information/information.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/block/block/information/information.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2NrL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/block/block/information/information.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/block/block/information/information.component.ts ***!
  \******************************************************************/
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
    ], InformationComponent.prototype, "block", void 0);
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/block/block/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.scss */ "./src/app/block/block/information/information.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/block/block/transactions/transactions.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/block/block/transactions/transactions.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [dataSource]=\"block.transactions\" [title]=\"'Transactions' | translate\" [enablePager]=\"false\">\n  <table mat-table [dataSource]=\"block.transactions\">\n    <tr mat-header-row *matHeaderRowDef=\"transactionsColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: transactionsColumns;\"></tr>\n    <ng-container matColumnDef=\"index\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Index' | translate }}</th>\n      <td mat-cell *matCellDef=\"let i = index\">\n        {{i + 1}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Transaction ID' | translate }}</th>\n      <td mat-cell *matCellDef=\"let transaction\">\n        <a [routerLink]=\"['/transactions',block.block_num,transaction.trx.id||transaction.trx]\">\n          <id-64 [id]=\"transaction.trx.id || transaction.trx\"></id-64>\n        </a>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Status' | translate }}</th>\n      <td mat-cell *matCellDef=\"let transaction\">\n        {{transaction.status}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"cpu\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'CPU Usage' | translate }}</th>\n      <td mat-cell *matCellDef=\"let transaction\">\n        {{transaction.cpu_usage_us | number }} µs\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"net\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'NET Usage' | translate }}</th>\n      <td mat-cell *matCellDef=\"let transaction\">\n        {{transaction.net_usage_words | toKB | number:'1.0-3'}} KB\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef>{{ 'Actions' | translate }}</th>\n      <td mat-cell *matCellDef=\"let transaction\">\n        {{transaction.trx.transaction?.actions.length || 0}}\n      </td>\n    </ng-container>\n  </table>\n</app-table>\n"

/***/ }),

/***/ "./src/app/block/block/transactions/transactions.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/block/block/transactions/transactions.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhcnRoYW4vRGVza3RvcC9FT1MvVGVtcC9CbG9jayBFeHBsb3Jlci9FT1NUcmFja2VyLW1hc3Rlci9zcmMvYXBwL2Jsb2NrL2Jsb2NrL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ibG9jay9ibG9jay90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/block/block/transactions/transactions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/block/block/transactions/transactions.component.ts ***!
  \********************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
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

var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
        this.transactionsColumns = [
            'index',
            'id',
            'status',
            'cpu',
            'net',
            'actions'
        ];
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionsComponent.prototype, "block", void 0);
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/block/block/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.scss */ "./src/app/block/block/transactions/transactions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/block/blocks/blocks.component.html":
/*!****************************************************!*\
  !*** ./src/app/block/blocks/blocks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1 class=\"mat-headline\">\n    {{ 'Blocks' | translate }}\n  </h1>\n</mat-toolbar>\n<div style=\"margin:10px;\">\n  <div class=\"table-container mat-elevation-z1\" *ngIf=\"blocks$ | async as blocks; else loading\">\n    <table mat-table [dataSource]=\"blocks\" style=\"border:none;\">\n      <ng-container *ngIf=\"columnHeaders$ | async as blocksColumns\">\n        <tr mat-header-row *matHeaderRowDef=\"blocksColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: blocksColumns;\"></tr>\n      </ng-container>\n      <ng-container matColumnDef=\"block_num\">\n        <th mat-header-cell *matHeaderCellDef>{{ 'Block Number' | translate }}</th>\n        <td mat-cell *matCellDef=\"let block\">\n          <a [routerLink]=\"['/blocks',block.block_num]\">{{block.block_num}}</a>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"timestamp\">\n        <th mat-header-cell *matHeaderCellDef>{{ 'Timestamp' | translate }}</th>\n        <td mat-cell *matCellDef=\"let block\">\n          {{block.timestamp | amFromUtc | date:'MMM d, y, h:mm:ss.SSS a'}}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"producer\">\n        <th mat-header-cell *matHeaderCellDef>{{ 'Producer' | translate }}</th>\n        <td mat-cell *matCellDef=\"let block\">\n          <a [routerLink]=\"['/producers',block.producer]\">{{block.producer}}</a>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"transactions\">\n        <th mat-header-cell *matHeaderCellDef>{{ 'Transactions' | translate }}</th>\n        <td mat-cell *matCellDef=\"let block\">\n          {{block.transactions.length}}\n        </td>\n      </ng-container>\n    </table>\n    <mat-paginator [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize\" [length]=\"total\" (page)=\"onPaging($event)\"></mat-paginator>\n  </div>\n  <ng-template #loading>\n    <app-spinner></app-spinner>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/block/blocks/blocks.component.scss":
/*!****************************************************!*\
  !*** ./src/app/block/blocks/blocks.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2Nrcy9ibG9ja3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/block/blocks/blocks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/block/blocks/blocks.component.ts ***!
  \**************************************************/
/*! exports provided: BlocksComponent, BLOCK_COLUMNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksComponent", function() { return BlocksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_COLUMNS", function() { return BLOCK_COLUMNS; });
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





var BlocksComponent = /** @class */ (function () {
    function BlocksComponent(breakpointObserver, appService) {
        this.breakpointObserver = breakpointObserver;
        this.appService = appService;
        this.columnHeaders$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(BLOCK_COLUMNS);
        this.pageIndex = 0;
        this.pageSize = 10;
        this.total = 0;
    }
    BlocksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnHeaders$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches ? BLOCK_COLUMNS.filter(function (c) { return c !== 'timestamp'; }) : BLOCK_COLUMNS; }));
        this.blocks$ = this.appService.getBlocks(this.pageIndex, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (blocks) {
            _this.total = blocks[0].block_num;
        }));
    };
    BlocksComponent.prototype.onPaging = function (pageEvent) {
        this.pageIndex = pageEvent.pageIndex;
        this.blocks$ = this.appService.getBlocks(pageEvent.length - pageEvent.pageSize * pageEvent.pageIndex);
    };
    BlocksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./blocks.component.html */ "./src/app/block/blocks/blocks.component.html"),
            styles: [__webpack_require__(/*! ./blocks.component.scss */ "./src/app/block/blocks/blocks.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], BlocksComponent);
    return BlocksComponent;
}());

var BLOCK_COLUMNS = [
    'block_num',
    'timestamp',
    'producer',
    'transactions'
];


/***/ })

}]);
//# sourceMappingURL=block-block-module.js.map