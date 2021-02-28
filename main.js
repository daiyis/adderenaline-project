(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\adderenaline-project\src\main.ts */"zUnb");


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

/***/ "Hhmg":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "D4Yc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_0__["NzIconModule"]] }); })();


/***/ }),

/***/ "K8Me":
/*!************************************!*\
  !*** ./src/app/nz-zorro.module.ts ***!
  \************************************/
/*! exports provided: NgZorroAntdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgZorroAntdModule", function() { return NgZorroAntdModule; });
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/affix */ "v1Dh");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ "5Izy");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "yTpB");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "r19J");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "anqq");
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/back-top */ "IYs4");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ "EcpC");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "rJp6");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/calendar */ "WPSl");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ "YdS3");
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/carousel */ "wQFA");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "3ZFI");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "CYS+");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "oBm0");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/comment */ "A7zk");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "W0Pu");
/* harmony import */ var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/trans-button */ "9Cd2");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "Jp/u");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "lAiz");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "ce6n");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ "SBNi");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "iC8E");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "phDe");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/empty */ "mW00");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/form */ "wf2+");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/grid */ "tYkK");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rgb0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/input */ "px0D");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "eCGT");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/list */ "zTFG");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/mention */ "JK0T");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/menu */ "/L1H");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/message */ "JXeA");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/modal */ "NFMk");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/notification */ "0CZq");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "qU0y");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "vZsH");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "SHEi");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/popover */ "FPpa");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/progress */ "RVNi");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/radio */ "kS4m");
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/rate */ "NDed");
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/result */ "5A4h");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/select */ "jTf7");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "N2O2");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/slider */ "ozKM");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/spin */ "fb/r");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "OvZZ");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-zorro-antd/steps */ "z+yo");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-zorro-antd/switch */ "DQmg");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-zorro-antd/table */ "haRT");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "1+nf");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-zorro-antd/tag */ "XFzh");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "YRt3");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "p+Sl");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "W4B1");
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ng-zorro-antd/transfer */ "HhpN");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ng-zorro-antd/tree */ "SN7N");
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ "fwnu");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ng-zorro-antd/typography */ "VbP7");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ng-zorro-antd/upload */ "gaRz");
/* harmony import */ var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-zorro-antd/resizable */ "s2Rw");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "S/WK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/core */ "8Y7J");



































































class NgZorroAntdModule {
}
NgZorroAntdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵdefineNgModule"]({ type: NgZorroAntdModule });
NgZorroAntdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵdefineInjector"]({ factory: function NgZorroAntdModule_Factory(t) { return new (t || NgZorroAntdModule)(); }, imports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_29__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_30__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_31__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_32__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_33__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_34__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_35__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_37__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_38__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_39__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_40__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_41__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_42__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_44__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_45__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_46__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_47__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_48__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_49__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_50__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_51__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_52__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_53__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_54__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_55__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_56__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_57__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_58__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__["NzTreeModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_64__["NzResizableModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_65__["NzPipesModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_66__["ɵɵsetNgModuleScope"](NgZorroAntdModule, { exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__["NzAffixModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"],
        ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__["NzAutocompleteModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__["NzBackTopModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbModule"],
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__["NzCalendarModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__["NzCarouselModule"],
        ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__["NzCascaderModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__["NzCollapseModule"],
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__["NzCommentModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__["NzDatePickerModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__["NzDescriptionsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__["NzEmptyModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzGridModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_29__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_30__["NzInputNumberModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_31__["NzLayoutModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_32__["NzListModule"],
        ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_33__["NzMentionModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_34__["NzMenuModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_35__["NzMessageModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__["NzModalModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_37__["NzNotificationModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_38__["NzPageHeaderModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_39__["NzPaginationModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_40__["NzPopconfirmModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_41__["NzPopoverModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_42__["NzProgressModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_43__["NzRadioModule"],
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_44__["NzRateModule"],
        ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_45__["NzResultModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_46__["NzSelectModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_47__["NzSkeletonModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_48__["NzSliderModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_49__["NzSpinModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_50__["NzStatisticModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_51__["NzStepsModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_52__["NzSwitchModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_53__["NzTableModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_54__["NzTabsModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_55__["NzTagModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_56__["NzTimePickerModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_57__["NzTimelineModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_58__["NzToolTipModule"],
        ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"],
        ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_59__["NzTransferModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_60__["NzTreeModule"],
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_61__["NzTreeSelectModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_62__["NzTypographyModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_63__["NzUploadModule"],
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveModule"],
        ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_64__["NzResizableModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_65__["NzPipesModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ "/L1H");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");






class AppComponent {
    constructor() {
        this.isCollapsed = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 4, consts: [[1, "app-layout"], ["nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 1, "menu-sidebar", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [1, "sidebar-logo"], ["href", "https://ng.ant.design/", "target", "_blank"], ["src", "https://ng.ant.design/assets/img/logo.svg", "alt", "logo"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "inline", 3, "nzInlineCollapsed"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Dashboard", "nzIcon", "dashboard"], ["nz-menu-item", "", "nzMatchRouter", ""], ["routerLink", "/welcome"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Form", "nzIcon", "form"], [1, "app-header"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], [1, "inner-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-sider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCollapsedChange", function AppComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submissions portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Workplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Basic Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_27_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCollapsed", ctx.isCollapsed)("nzTrigger", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzSiderComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzSubMenuComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzHeaderComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n\n.sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n\n.inner-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlFQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uYXBwLWxheW91dCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tZW51LXNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYm94LXNoYWRvdzogMnB4IDAgNnB4IHJnYmEoMCwyMSw0MSwuMzUpO1xufVxuXG4uaGVhZGVyLXRyaWdnZXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MscGFkZGluZyAwcztcbn1cblxuLnRyaWdnZXI6aG92ZXIge1xuICBjb2xvcjogIzE4OTBmZjtcbn1cblxuLnNpZGViYXItbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAxNTI5O1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuXG4uc2lkZWJhci1sb2dvIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNpZGViYXItbG9nbyBoMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogQXZlbmlyLEhlbHZldGljYSBOZXVlLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5uei1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwyMSw0MSwuMDgpO1xufVxuXG5uei1jb250ZW50IHtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4uaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rgb0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/menu */ "/L1H");
/* harmony import */ var _nz_zorro_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nz-zorro.module */ "K8Me");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "8Y7J");















Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuModule"],
            _nz_zorro_module__WEBPACK_IMPORTED_MODULE_12__["NgZorroAntdModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuModule"],
        _nz_zorro_module__WEBPACK_IMPORTED_MODULE_12__["NgZorroAntdModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', loadChildren: () => __webpack_require__.e(/*! import() | pages-welcome-welcome-module */ "pages-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ./pages/welcome/welcome.module */ "TtBp")).then(m => m.WelcomeModule) }
];
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
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