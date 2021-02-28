(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "Jp/u");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "WJhm");




class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 2, vars: 0, consts: [["nz-button", "", "nzType", "primary"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "T2Lb":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function() { return WelcomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ "+j1i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




const routes = [
    { path: '', component: _welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
];
class WelcomeRoutingModule {
}
WelcomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
WelcomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "TtBp":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var src_app_nz_zorro_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/nz-zorro.module */ "K8Me");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-routing.module */ "T2Lb");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ "+j1i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class WelcomeModule {
}
WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); }, imports: [[_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"], src_app_nz_zorro_module__WEBPACK_IMPORTED_MODULE_0__["NgZorroAntdModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]], imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"], src_app_nz_zorro_module__WEBPACK_IMPORTED_MODULE_0__["NgZorroAntdModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module.js.map