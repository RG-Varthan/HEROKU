(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~block-block-module~transaction-transaction-module"],{

/***/ "./node_modules/@angular/material/esm5/paginator.es5.js":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/paginator.es5.js ***!
  \**************************************************************/
/*! exports provided: MatPaginatorModule, PageEvent, MatPaginatorBase, _MatPaginatorBase, MatPaginator, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MAT_PAGINATOR_INTL_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return MatPaginatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return PageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorBase", function() { return MatPaginatorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatPaginatorBase", function() { return _MatPaginatorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return MatPaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return MatPaginatorIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return MAT_PAGINATOR_INTL_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */
var MatPaginatorIntl = /** @class */ (function () {
    function MatPaginatorIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * A label for the page size selector.
         */
        this.itemsPerPageLabel = 'Items per page:';
        /**
         * A label for the button that increments the current page.
         */
        this.nextPageLabel = 'Next page';
        /**
         * A label for the button that decrements the current page.
         */
        this.previousPageLabel = 'Previous page';
        /**
         * A label for the button that moves to the first page.
         */
        this.firstPageLabel = 'First page';
        /**
         * A label for the button that moves to the last page.
         */
        this.lastPageLabel = 'Last page';
        /**
         * A label for the range of items within the current page and the length of the whole list.
         */
        this.getRangeLabel = function (page, pageSize, length) {
            if (length == 0 || pageSize == 0) {
                return "0 of " + length;
            }
            length = Math.max(length, 0);
            var /** @type {?} */ startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var /** @type {?} */ endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " of " + length;
        };
    }
    MatPaginatorIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MatPaginatorIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatPaginatorIntl_Factory() { return new MatPaginatorIntl(); }, token: MatPaginatorIntl, providedIn: "root" });
    return MatPaginatorIntl;
}());
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatPaginatorIntl();
}
/**
 * \@docs-private
 */
var /** @type {?} */ MAT_PAGINATOR_INTL_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatPaginatorIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatPaginatorIntl]],
    useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The default page size if there is no page size and there are no provided page size options.
 */
var /** @type {?} */ DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
var  /**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
PageEvent = /** @class */ (function () {
    function PageEvent() {
    }
    return PageEvent;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatPaginatorBase = /** @class */ (function () {
    function MatPaginatorBase() {
    }
    return MatPaginatorBase;
}());
var /** @type {?} */ _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinInitialized"])(MatPaginatorBase);
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
var MatPaginator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatPaginator, _super);
    function MatPaginator(_intl, _changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._intl = _intl;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._pageIndex = 0;
        _this._length = 0;
        _this._pageSizeOptions = [];
        _this._hidePageSize = false;
        _this._showFirstLastButtons = false;
        /**
         * Event emitted when the paginator changes the page size or page index.
         */
        _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._intlChanges = _intl.changes.subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        return _this;
    }
    Object.defineProperty(MatPaginator.prototype, "pageIndex", {
        get: /**
         * The zero-based page index of the displayed list of items. Defaulted to 0.
         * @return {?}
         */
        function () { return this._pageIndex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value), 0);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "length", {
        get: /**
         * The length of the total number of items that are being paginated. Defaulted to 0.
         * @return {?}
         */
        function () { return this._length; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSize", {
        get: /**
         * Number of items to display on a page. By default set to 50.
         * @return {?}
         */
        function () { return this._pageSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value), 0);
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSizeOptions", {
        get: /**
         * The set of provided page size options to display to the user.
         * @return {?}
         */
        function () { return this._pageSizeOptions; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSizeOptions = (value || []).map(function (p) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(p); });
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "hidePageSize", {
        get: /**
         * Whether to hide the page size selection UI from the user.
         * @return {?}
         */
        function () { return this._hidePageSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "showFirstLastButtons", {
        get: /**
         * Whether to show the first/last buttons UI to the user.
         * @return {?}
         */
        function () { return this._showFirstLastButtons; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatPaginator.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initialized = true;
        this._updateDisplayedPageSizeOptions();
        this._markInitialized();
    };
    /**
     * @return {?}
     */
    MatPaginator.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlChanges.unsubscribe();
    };
    /** Advances to the next page if it exists. */
    /**
     * Advances to the next page if it exists.
     * @return {?}
     */
    MatPaginator.prototype.nextPage = /**
     * Advances to the next page if it exists.
     * @return {?}
     */
    function () {
        if (!this.hasNextPage()) {
            return;
        }
        var /** @type {?} */ previousPageIndex = this.pageIndex;
        this.pageIndex++;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move back to the previous page if it exists. */
    /**
     * Move back to the previous page if it exists.
     * @return {?}
     */
    MatPaginator.prototype.previousPage = /**
     * Move back to the previous page if it exists.
     * @return {?}
     */
    function () {
        if (!this.hasPreviousPage()) {
            return;
        }
        var /** @type {?} */ previousPageIndex = this.pageIndex;
        this.pageIndex--;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move to the first page if not already there. */
    /**
     * Move to the first page if not already there.
     * @return {?}
     */
    MatPaginator.prototype.firstPage = /**
     * Move to the first page if not already there.
     * @return {?}
     */
    function () {
        // hasPreviousPage being false implies at the start
        if (!this.hasPreviousPage()) {
            return;
        }
        var /** @type {?} */ previousPageIndex = this.pageIndex;
        this.pageIndex = 0;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move to the last page if not already there. */
    /**
     * Move to the last page if not already there.
     * @return {?}
     */
    MatPaginator.prototype.lastPage = /**
     * Move to the last page if not already there.
     * @return {?}
     */
    function () {
        // hasNextPage being false implies at the end
        if (!this.hasNextPage()) {
            return;
        }
        var /** @type {?} */ previousPageIndex = this.pageIndex;
        this.pageIndex = this.getNumberOfPages();
        this._emitPageEvent(previousPageIndex);
    };
    /** Whether there is a previous page. */
    /**
     * Whether there is a previous page.
     * @return {?}
     */
    MatPaginator.prototype.hasPreviousPage = /**
     * Whether there is a previous page.
     * @return {?}
     */
    function () {
        return this.pageIndex >= 1 && this.pageSize != 0;
    };
    /** Whether there is a next page. */
    /**
     * Whether there is a next page.
     * @return {?}
     */
    MatPaginator.prototype.hasNextPage = /**
     * Whether there is a next page.
     * @return {?}
     */
    function () {
        var /** @type {?} */ numberOfPages = this.getNumberOfPages();
        return this.pageIndex < numberOfPages && this.pageSize != 0;
    };
    /** Calculate the number of pages */
    /**
     * Calculate the number of pages
     * @return {?}
     */
    MatPaginator.prototype.getNumberOfPages = /**
     * Calculate the number of pages
     * @return {?}
     */
    function () {
        return Math.ceil(this.length / this.pageSize) - 1;
    };
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     * @param {?} pageSize
     * @return {?}
     */
    MatPaginator.prototype._changePageSize = /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        // Current page needs to be updated to reflect the new page size. Navigate to the page
        // containing the previous page's first item.
        var /** @type {?} */ startIndex = this.pageIndex * this.pageSize;
        var /** @type {?} */ previousPageIndex = this.pageIndex;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;
        this._emitPageEvent(previousPageIndex);
    };
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     * @return {?}
     */
    MatPaginator.prototype._updateDisplayedPageSizeOptions = /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     * @return {?}
     */
    function () {
        if (!this._initialized) {
            return;
        }
        // If no page size is provided, use the first page size option or the default page size.
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ?
                this.pageSizeOptions[0] :
                DEFAULT_PAGE_SIZE;
        }
        this._displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
        }
        // Sort the numbers using a number-specific sort function.
        this._displayedPageSizeOptions.sort(function (a, b) { return a - b; });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Emits an event notifying that a change of the paginator's properties has been triggered.
     * @param {?} previousPageIndex
     * @return {?}
     */
    MatPaginator.prototype._emitPageEvent = /**
     * Emits an event notifying that a change of the paginator's properties has been triggered.
     * @param {?} previousPageIndex
     * @return {?}
     */
    function (previousPageIndex) {
        this.page.emit({
            previousPageIndex: previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
        });
    };
    MatPaginator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-paginator',
                    exportAs: 'matPaginator',
                    template: "<div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [aria-label]=\"_intl.itemsPerPageLabel\" (selectionChange)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipDisabled]=\"!hasPreviousPage()\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasPreviousPage()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipDisabled]=\"!hasPreviousPage()\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasPreviousPage()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipDisabled]=\"!hasNextPage()\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasNextPage()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipDisabled]=\"!hasNextPage()\" [matTooltipPosition]=\"'above'\" [disabled]=\"!hasNextPage()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/></svg></button></div></div>",
                    styles: [".mat-paginator{display:block}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center;min-height:48px}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}"],
                    host: {
                        'class': 'mat-paginator',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatPaginator.ctorParameters = function () { return [
        { type: MatPaginatorIntl, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    MatPaginator.propDecorators = {
        "pageIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "length": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageSizeOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hidePageSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showFirstLastButtons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "page": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return MatPaginator;
}(_MatPaginatorBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatPaginatorModule = /** @class */ (function () {
    function MatPaginatorModule() {
    }
    MatPaginatorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                    ],
                    exports: [MatPaginator],
                    declarations: [MatPaginator],
                    providers: [MAT_PAGINATOR_INTL_PROVIDER],
                },] },
    ];
    return MatPaginatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=paginator.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/tooltip.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/tooltip.es5.js ***!
  \************************************************************/
/*! exports provided: MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MatTooltip, TooltipComponent, matTooltipAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return MatTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return SCROLL_THROTTLE_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return TOOLTIP_PANEL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return getMatTooltipInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return MatTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return matTooltipAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Animations used by MatTooltip.
 */
var /** @type {?} */ matTooltipAnimations = {
    /** Animation that transitions a tooltip in and out. */
    tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Time in ms to throttle repositioning after scroll events.
 */
var /** @type {?} */ SCROLL_THROTTLE_MS = 20;
/**
 * CSS class that will be attached to the overlay panel.
 */
var /** @type {?} */ TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @param {?} position
 * @return {?}
 */
function getMatTooltipInvalidPositionError(position) {
    return Error("Tooltip position \"" + position + "\" is invalid.");
}
/**
 * Injection token that determines the scroll handling while a tooltip is visible.
 */
var /** @type {?} */ MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["InjectionToken"]('mat-tooltip-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition({ scrollThrottle: SCROLL_THROTTLE_MS }); };
}
/**
 * \@docs-private
 */
var /** @type {?} */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_TOOLTIP_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
    useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
};
/**
 * Injection token to be used to override the default options for `matTooltip`.
 */
var /** @type {?} */ MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["InjectionToken"]('mat-tooltip-default-options', {
    providedIn: 'root',
    factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/**
 * @return {?}
 */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
    return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500,
    };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.google.com/components/tooltips.html
 */
var MatTooltip = /** @class */ (function () {
    function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, _scrollStrategy, _dir, _defaultOptions) {
        var _this = this;
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._scrollStrategy = _scrollStrategy;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        /**
         * The default delay in ms before showing the tooltip after show is called
         */
        this.showDelay = this._defaultOptions.showDelay;
        /**
         * The default delay in ms before hiding the tooltip after hide is called
         */
        this.hideDelay = this._defaultOptions.hideDelay;
        this._message = '';
        this._manualListeners = new Map();
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        var /** @type {?} */ element = _elementRef.nativeElement;
        // The mouse events shouldn't be bound on iOS devices, because
        // they can prevent the first tap from firing its click event.
        if (!_platform.IOS) {
            this._manualListeners.set('mouseenter', function () { return _this.show(); });
            this._manualListeners.set('mouseleave', function () { return _this.hide(); });
            this._manualListeners
                .forEach(function (listener, event) { return _elementRef.nativeElement.addEventListener(event, listener); });
        }
        else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            // When we bind a gesture event on an element (in this case `longpress`), HammerJS
            // will add some inline styles by default, including `user-select: none`. This is
            // problematic on iOS, because it will prevent users from typing in inputs. If
            // we're on iOS and the tooltip is attached on an input or textarea, we clear
            // the `user-select` to avoid these issues.
            element.style.webkitUserSelect = element.style.userSelect = '';
        }
        // Hammer applies `-webkit-user-drag: none` on all elements by default,
        // which breaks the native drag&drop. If the consumer explicitly made
        // the element draggable, clear the `-webkit-user-drag`.
        if (element.draggable && element.style['webkitUserDrag'] === 'none') {
            element.style['webkitUserDrag'] = '';
        }
        _focusMonitor.monitor(element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
            // Note that the focus monitor runs outside the Angular zone.
            if (!origin) {
                _ngZone.run(function () { return _this.hide(0); });
            }
            else if (origin === 'keyboard') {
                _ngZone.run(function () { return _this.show(); });
            }
        });
    }
    Object.defineProperty(MatTooltip.prototype, "position", {
        get: /**
         * Allows the user to define the position of the tooltip relative to the parent element
         * @return {?}
         */
        function () { return this._position; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._position) {
                this._position = value;
                if (this._overlayRef) {
                    this._updatePosition();
                    if (this._tooltipInstance) {
                        /** @type {?} */ ((this._tooltipInstance)).show(0);
                    }
                    this._overlayRef.updatePosition();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTooltip.prototype, "disabled", {
        get: /**
         * Disables the display of the tooltip.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            // If tooltip is disabled, hide immediately.
            if (this._disabled) {
                this.hide(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTooltip.prototype, "message", {
        get: /**
         * The message to be displayed in the tooltip
         * @return {?}
         */
        function () { return this._message; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message);
            // If the message is not a string (e.g. number), convert it to a string and trim it.
            this._message = value != null ? ("" + value).trim() : '';
            if (!this._message && this._isTooltipVisible()) {
                this.hide(0);
            }
            else {
                this._updateTooltipMessage();
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTooltip.prototype, "tooltipClass", {
        get: /**
         * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
         * @return {?}
         */
        function () { return this._tooltipClass; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tooltipClass = value;
            if (this._tooltipInstance) {
                this._setTooltipClass(this._tooltipClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the tooltip when destroyed.
     */
    /**
     * Dispose the tooltip when destroyed.
     * @return {?}
     */
    MatTooltip.prototype.ngOnDestroy = /**
     * Dispose the tooltip when destroyed.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = null;
        }
        // Clean up the event listeners set in the constructor
        if (!this._platform.IOS) {
            this._manualListeners.forEach(function (listener, event) {
                return _this._elementRef.nativeElement.removeEventListener(event, listener);
            });
            this._manualListeners.clear();
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.message);
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
    };
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    /**
     * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    MatTooltip.prototype.show = /**
     * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.showDelay; }
        if (this.disabled || !this.message) {
            return;
        }
        var /** @type {?} */ overlayRef = this._createOverlay();
        this._detach();
        this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
        this._tooltipInstance = overlayRef.attach(this._portal).instance;
        this._tooltipInstance.afterHidden()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
            .subscribe(function () { return _this._detach(); });
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage(); /** @type {?} */
        ((this._tooltipInstance)).show(delay);
    };
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    /**
     * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    MatTooltip.prototype.hide = /**
     * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        if (delay === void 0) { delay = this.hideDelay; }
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    };
    /** Shows/hides the tooltip */
    /**
     * Shows/hides the tooltip
     * @return {?}
     */
    MatTooltip.prototype.toggle = /**
     * Shows/hides the tooltip
     * @return {?}
     */
    function () {
        this._isTooltipVisible() ? this.hide() : this.show();
    };
    /** Returns true if the tooltip is currently visible to the user */
    /**
     * Returns true if the tooltip is currently visible to the user
     * @return {?}
     */
    MatTooltip.prototype._isTooltipVisible = /**
     * Returns true if the tooltip is currently visible to the user
     * @return {?}
     */
    function () {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    };
    /** Handles the keydown events on the host element. */
    /**
     * Handles the keydown events on the host element.
     * @param {?} e
     * @return {?}
     */
    MatTooltip.prototype._handleKeydown = /**
     * Handles the keydown events on the host element.
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this._isTooltipVisible() && e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]) {
            e.stopPropagation();
            this.hide(0);
        }
    };
    /** Handles the touchend events on the host element. */
    /**
     * Handles the touchend events on the host element.
     * @return {?}
     */
    MatTooltip.prototype._handleTouchend = /**
     * Handles the touchend events on the host element.
     * @return {?}
     */
    function () {
        this.hide(this._defaultOptions.touchendHideDelay);
    };
    /**
     * Create the overlay config and position strategy
     * @return {?}
     */
    MatTooltip.prototype._createOverlay = /**
     * Create the overlay config and position strategy
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._overlayRef) {
            return this._overlayRef;
        }
        // Create connected position strategy that listens for scroll events to reposition.
        var /** @type {?} */ strategy = this._overlay.position()
            .flexibleConnectedTo(this._elementRef)
            .withTransformOriginOn('.mat-tooltip')
            .withFlexibleDimensions(false)
            .withViewportMargin(8);
        var /** @type {?} */ scrollableAncestors = this._scrollDispatcher
            .getAncestorScrollContainers(this._elementRef);
        strategy.withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (change) {
            if (_this._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && _this._tooltipInstance.isVisible()) {
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip.
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip.
                    _this._ngZone.run(function () { return _this.hide(0); });
                }
            }
        });
        this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
        });
        this._updatePosition();
        this._overlayRef.detachments()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
            .subscribe(function () { return _this._detach(); });
        return this._overlayRef;
    };
    /**
     * Detaches the currently-attached tooltip.
     * @return {?}
     */
    MatTooltip.prototype._detach = /**
     * Detaches the currently-attached tooltip.
     * @return {?}
     */
    function () {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this._tooltipInstance = null;
    };
    /**
     * Updates the position of the current tooltip.
     * @return {?}
     */
    MatTooltip.prototype._updatePosition = /**
     * Updates the position of the current tooltip.
     * @return {?}
     */
    function () {
        var /** @type {?} */ position = /** @type {?} */ (((this._overlayRef)).getConfig().positionStrategy);
        var /** @type {?} */ origin = this._getOrigin();
        var /** @type {?} */ overlay = this._getOverlayPosition();
        position.withPositions([
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, origin.main, overlay.main),
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, origin.fallback, overlay.fallback)
        ]);
    };
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     * @return {?}
     */
    MatTooltip.prototype._getOrigin = /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     * @return {?}
     */
    function () {
        var /** @type {?} */ isLtr = !this._dir || this._dir.value == 'ltr';
        var /** @type {?} */ position = this.position;
        var /** @type {?} */ originPosition;
        if (position == 'above' || position == 'below') {
            originPosition = { originX: 'center', originY: position == 'above' ? 'top' : 'bottom' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            originPosition = { originX: 'start', originY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            originPosition = { originX: 'end', originY: 'center' };
        }
        else {
            throw getMatTooltipInvalidPositionError(position);
        }
        var _a = this._invertPosition(originPosition.originX, originPosition.originY), x = _a.x, y = _a.y;
        return {
            main: originPosition,
            fallback: { originX: x, originY: y }
        };
    };
    /** Returns the overlay position and a fallback position based on the user's preference */
    /**
     * Returns the overlay position and a fallback position based on the user's preference
     * @return {?}
     */
    MatTooltip.prototype._getOverlayPosition = /**
     * Returns the overlay position and a fallback position based on the user's preference
     * @return {?}
     */
    function () {
        var /** @type {?} */ isLtr = !this._dir || this._dir.value == 'ltr';
        var /** @type {?} */ position = this.position;
        var /** @type {?} */ overlayPosition;
        if (position == 'above') {
            overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
        }
        else if (position == 'below') {
            overlayPosition = { overlayX: 'center', overlayY: 'top' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            overlayPosition = { overlayX: 'end', overlayY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            overlayPosition = { overlayX: 'start', overlayY: 'center' };
        }
        else {
            throw getMatTooltipInvalidPositionError(position);
        }
        var _a = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY), x = _a.x, y = _a.y;
        return {
            main: overlayPosition,
            fallback: { overlayX: x, overlayY: y }
        };
    };
    /**
     * Updates the tooltip message and repositions the overlay according to the new message length
     * @return {?}
     */
    MatTooltip.prototype._updateTooltipMessage = /**
     * Updates the tooltip message and repositions the overlay according to the new message length
     * @return {?}
     */
    function () {
        var _this = this;
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;
            this._tooltipInstance._markForCheck();
            this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (_this._tooltipInstance) {
                    /** @type {?} */ ((_this._overlayRef)).updatePosition();
                }
            });
        }
    };
    /**
     * Updates the tooltip class
     * @param {?} tooltipClass
     * @return {?}
     */
    MatTooltip.prototype._setTooltipClass = /**
     * Updates the tooltip class
     * @param {?} tooltipClass
     * @return {?}
     */
    function (tooltipClass) {
        if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;
            this._tooltipInstance._markForCheck();
        }
    };
    /**
     * Inverts an overlay position.
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    MatTooltip.prototype._invertPosition = /**
     * Inverts an overlay position.
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x: x, y: y };
    };
    MatTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[matTooltip]',
                    exportAs: 'matTooltip',
                    host: {
                        '(longpress)': 'show()',
                        '(keydown)': '_handleKeydown($event)',
                        '(touchend)': '_handleTouchend()',
                    },
                },] },
    ];
    /** @nocollapse */
    MatTooltip.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"], },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [MAT_TOOLTIP_SCROLL_STRATEGY,] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [MAT_TOOLTIP_DEFAULT_OPTIONS,] },] },
    ]; };
    MatTooltip.propDecorators = {
        "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['matTooltipPosition',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['matTooltipDisabled',] },],
        "showDelay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['matTooltipShowDelay',] },],
        "hideDelay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['matTooltipHideDelay',] },],
        "message": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['matTooltip',] },],
        "tooltipClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['matTooltipClass',] },],
    };
    return MatTooltip;
}());
/**
 * Internal component that wraps the tooltip's content.
 * \@docs-private
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */
        this._visibility = 'initial';
        /**
         * Whether interactions on the page should close the tooltip
         */
        this._closeOnInteraction = false;
        /**
         * Subject for notifying that the tooltip has been hidden from the view
         */
        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Stream that emits whether the user has a handset-sized display.
         */
        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Handset);
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
     * @return {?}
     */
    TooltipComponent.prototype.show = /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
     * @return {?}
     */
    function (delay) {
        var _this = this;
        // Cancel the delayed hide if it is scheduled
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
        }
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this._closeOnInteraction = true;
        this._showTimeoutId = setTimeout(function () {
            _this._visibility = 'visible';
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
        }, delay);
    };
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param {?} delay Amount of milliseconds to delay showing the tooltip.
     * @return {?}
     */
    TooltipComponent.prototype.hide = /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param {?} delay Amount of milliseconds to delay showing the tooltip.
     * @return {?}
     */
    function (delay) {
        var _this = this;
        // Cancel the delayed show if it is scheduled
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(function () {
            _this._visibility = 'hidden';
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
        }, delay);
    };
    /** Returns an observable that notifies when the tooltip has been hidden from view. */
    /**
     * Returns an observable that notifies when the tooltip has been hidden from view.
     * @return {?}
     */
    TooltipComponent.prototype.afterHidden = /**
     * Returns an observable that notifies when the tooltip has been hidden from view.
     * @return {?}
     */
    function () {
        return this._onHide.asObservable();
    };
    /** Whether the tooltip is being displayed. */
    /**
     * Whether the tooltip is being displayed.
     * @return {?}
     */
    TooltipComponent.prototype.isVisible = /**
     * Whether the tooltip is being displayed.
     * @return {?}
     */
    function () {
        return this._visibility === 'visible';
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype._animationStart = /**
     * @return {?}
     */
    function () {
        this._closeOnInteraction = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipComponent.prototype._animationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ toState = /** @type {?} */ (event.toState);
        if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
        if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
        }
    };
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.google.com/components/tooltips.html#tooltips-interaction
     */
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.google.com/components/tooltips.html#tooltips-interaction
     * @return {?}
     */
    TooltipComponent.prototype._handleBodyInteraction = /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.google.com/components/tooltips.html#tooltips-interaction
     * @return {?}
     */
    function () {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    };
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     * @return {?}
     */
    TooltipComponent.prototype._markForCheck = /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    TooltipComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{selector: 'mat-tooltip-component',
                    template: "<div class=\"mat-tooltip\" [ngClass]=\"tooltipClass\" [class.mat-tooltip-handset]=\"(_isHandset | async)!.matches\" [@state]=\"_visibility\" (@state.start)=\"_animationStart()\" (@state.done)=\"_animationDone($event)\">{{message}}</div>",
                    styles: [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:2px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media screen and (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].OnPush,
                    animations: [matTooltipAnimations.tooltipState],
                    host: {
                        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
                        // won't be rendered if the animations are disabled or there is no web animations polyfill.
                        '[style.zoom]': '_visibility === "visible" ? 1 : null',
                        '(body:click)': 'this._handleBodyInteraction()',
                        'aria-hidden': 'true',
                    }
                },] },
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"], },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"], },
    ]; };
    return TooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatTooltipModule = /** @class */ (function () {
    function MatTooltipModule() {
    }
    MatTooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    imports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"],
                    ],
                    exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"]],
                    declarations: [MatTooltip, TooltipComponent],
                    entryComponents: [TooltipComponent],
                    providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
                },] },
    ];
    return MatTooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=tooltip.es5.js.map


/***/ })

}]);
//# sourceMappingURL=default~account-account-module~block-block-module~transaction-transaction-module.js.map