"use strict";
(self["webpackChunkDX_Admin_FE"] = self["webpackChunkDX_Admin_FE"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 7217);



class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [["bdColor", "rgba(0, 0, 0, 0.7)", "template", "<i class='fa-solid fa-circle-notch fa-spin fa-3x primary-clr'></i>"], [1, "page"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-svg-icon */ 2183);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/token.service */ 8128);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/excel.service */ 8219);
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/helper.service */ 1785);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);






















function jwtOptionsFactory(tokenService) {
  return {
    tokenGetter: () => {
      return tokenService.token;
    },
    allowedDomains: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.allowedDomains
  };
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__.ExcelService, _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_6__.HelperService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule.forRoot({
    jwtOptionsProvider: {
      provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JWT_OPTIONS,
      useFactory: jwtOptionsFactory,
      deps: [_shared_services_token_service__WEBPACK_IMPORTED_MODULE_3__.TokenService]
    }
  }), angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__.AngularSvgIconModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot({
    timeOut: 3000,
    closeButton: true,
    positionClass: 'toast-top-center'
  }), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__.AngularSvgIconModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'login',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent
}];
class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/token.service */ 8128);





class AuthComponent {
  constructor(router, activatedRoute, tokenService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.tokenService = tokenService;
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.unsubscribe)).subscribe(params => {
      let redirectUrl = params['redirectUrl'];
      if (params?.['token']) {
        localStorage.clear();
        localStorage.setItem('redirectUrl', redirectUrl);
        this.tokenService.setToken(params['token']);
        this.router.navigate(['/']);
      }
    });
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) {
  return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService));
};
AuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AuthComponent,
  selectors: [["app-auth"]],
  decls: 0,
  vars: 0,
  template: function AuthComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
})();

/***/ }),

/***/ 8219:
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelService": () => (/* binding */ ExcelService)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs */ 4498);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper.service */ 1785);





class ExcelService {
  constructor(_helperService) {
    this._helperService = _helperService;
  }
  exportToExcelJs1(exportToExcelOptions) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_1__.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
    // Add main heading if provided
    if (exportToExcelOptions.mainHeading) {
      const mainHeadingRow = worksheet.addRow([exportToExcelOptions.mainHeading]);
      mainHeadingRow.font = {
        bold: true,
        size: 18,
        color: {
          argb: 'ff000000'
        }
      };
      worksheet.addRow([]); // Add an empty row for spacing
    }
    // Function to add a section
    const addSection = section => {
      // Add section heading
      if (section.heading.length) {
        const headingRow = worksheet.addRow(section.heading);
        headingRow.font = {
          bold: true,
          size: 14,
          color: {
            argb: 'ff000000'
          }
        };
      }
      // Display data as key-value pairs or in table format
      if (section.showAsKeyValue) {
        section.headers.forEach((header, index) => {
          const row = worksheet.addRow([header, section.data[index]]);
          row.getCell(1).font = {
            bold: true
          }; // Make key (header) bold
        });
      } else {
        const headerRow = worksheet.addRow(section.headers); // Add section headers
        if (this._helperService.hasValue(section.headerStyle)) {
          headerRow.eachCell((cell, colNumber) => {
            let font = {};
            for (let key in section.headerStyle) {
              let value = section?.headerStyle[key];
              if (key !== 'fgColor') {
                if (value) {
                  font[key] = value;
                }
              }
            }
            cell.font = font;
            cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: section?.headerStyle?.fgColor
            };
            worksheet.getColumn(colNumber).width = 20;
          });
        } else headerRow.font = {
          bold: true,
          size: 12,
          color: {
            argb: 'ff000000'
          }
        };
        // Add nested headers dynamically (if present)
        if (section.nestedHeaders && section.nestedHeaders.length) {
          const emptySpace = Array(section.headers.length).fill(''); // Create empty cells for main headers
          const nestedHeaderRow = worksheet.addRow([...emptySpace, ...section.nestedHeaders]);
          nestedHeaderRow.font = {
            bold: true,
            size: 12,
            color: {
              argb: 'ff000000'
            }
          };
        }
        // Loop through each item in the data array
        section.data.forEach(item => {
          // Dynamically construct the main row based on section.headerKeyMapping
          const mainRowData = section.mainKeyMapping.map(key => lodash__WEBPACK_IMPORTED_MODULE_2__.get(item, key)); // Map data keys to headers
          const mainRow = worksheet.addRow(mainRowData); // Add dynamic main row
          // If the item has nested data
          if (item.nestedData && section.nestedHeaders && section.nestedKeyMapping) {
            item.nestedData.forEach(nestedItem => {
              // Create an array of nested row data based on nestedKeyMapping
              const nestedRow = section.nestedKeyMapping.map(key => nestedItem[key]);
              worksheet.addRow([...Array(section.headers.length).fill(''), ...nestedRow]);
            });
          } else if (item.nestedData && section.nestedKeyMapping) {
            item.nestedData.forEach(nestedItem => {
              const nestedRow = section.nestedKeyMapping.map(key => nestedItem[key]);
              worksheet.addRow([...Array(section.skipNestedColumn).fill(''), ...nestedRow]);
            });
          }
          // Add gap after each data row
          if (section?.dataRowGap > 0) {
            for (var i = 0; i < section?.dataRowGap; i++) {
              worksheet.addRow([]);
            }
          }
        });
      }
      worksheet.addRow([]); // Add gap after each section
    };
    // Loop through each section and add it to the worksheet
    exportToExcelOptions.sections.forEach(section => {
      addSection(section);
    });
    // Generate Excel file
    if (!exportToExcelOptions.blob) {
      workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = exportToExcelOptions.fileName + '.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      });
      return false;
    } else {
      return this.exportToExcelFunc(workbook, exportToExcelOptions);
    }
  }
  exportToExcelFunc(workbook, exportToExcelOptions) {
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const buffer = yield workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      return blob;
    })();
  }
}
ExcelService.ɵfac = function ExcelService_Factory(t) {
  return new (t || ExcelService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService));
};
ExcelService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ExcelService,
  factory: ExcelService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1785:
/*!***************************************************!*\
  !*** ./src/app/shared/services/helper.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class HelperService {
  constructor(_datePipe, _router) {
    this._datePipe = _datePipe;
    this._router = _router;
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    this.fileToBase64 = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            if (file.type !== 'application/pdf') {
              resolve({
                fileType: file.type,
                base64: reader.result,
                file,
                fileName: file.name
              });
            } else {
              resolve({
                fileType: file.type,
                file,
                fileName: file.name
              });
            }
          };
          reader.onerror = e => reject(e);
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  dateFormate(input, format) {
    let value = !format && 'yyyy-MM-dd' || format;
    return this._datePipe.transform(input, value);
  }
  trim(value) {
    for (var key in value) {
      if (value[key] && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(value[key])) {
        value[key] = value[key].trim();
      } else if (value[key] === null || value[key] === undefined) {
        value[key] = '';
      }
    }
    return value;
  }
  allKeysHaveValue(obj) {
    for (const key in obj) {
      if (!obj[key]) {
        return false;
      }
    }
    return true;
  }
  hasValue(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
        return true; // At least one key has a value
      }
    }

    return false; // No key has a value
  }

  convertFormGroupToFormData(formGroup, preventAppendingControls) {
    // preventAppendingControls param sometime you don't need to append control to formdata then you need to pass that control name in that param;
    const formData = new FormData();
    Object.keys(formGroup.controls).forEach(controlName => {
      let isExists = preventAppendingControls?.includes(controlName);
      if (!isExists) {
        const control = formGroup.get(controlName);
        formData.append(controlName, control?.value);
      }
    });
    return formData;
  }
  checkInvalidImageFormat(data, returnObj = false) {
    let invalidError = '';
    let invalidExtentions = false;
    let files;
    let getFiles = data.map(x => {
      return x.file;
    });
    if (getFiles[0] !== undefined) files = getFiles;else files = data;
    for (let file of files) {
      if (!this.fileTypes.includes(file.type)) {
        invalidExtentions = true;
        invalidError = 'This file not support, supported formates: JPEG, JPG, PNG, PDF';
        break;
      }
    }
    if (returnObj) return {
      invalidExtentions,
      invalidError
    };else return invalidExtentions;
  }
  navigateToRouteWithQueryString(routeName, queryParams) {
    if (queryParams == undefined || queryParams == null) this._router.navigate([routeName]);else this._router.navigate([routeName], queryParams);
  }
  navigateToRoute(routeName, params) {
    if (!params) this._router.navigate([routeName]);else this._router.navigate([routeName, params]);
  }
  getAttachmentName(url) {
    return url.split('/').pop();
  }
  downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = fileName;
    // Create a click event to trigger the download
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    });
    link.dispatchEvent(clickEvent);
  }
}
HelperService.ɵfac = function HelperService_Factory(t) {
  return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
HelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: HelperService,
  factory: HelperService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8128:
/*!**************************************************!*\
  !*** ./src/app/shared/services/token.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class TokenService {
  get token() {
    let accessToken = localStorage.getItem('token') || sessionStorage.getItem('token') || '';
    if (!accessToken && !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      accessToken = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.generalToken;
    }
    return accessToken;
  }
  setToken(accessToken) {
    localStorage.setItem('token', accessToken);
  }
}
TokenService.ɵfac = function TokenService_Factory(t) {
  return new (t || TokenService)();
};
TokenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TokenService,
  factory: TokenService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  // apiUrl: 'http://adminstagebe.markaziatest.com/api',
  // apiUrl2: 'http://treasurystagebe.markaziatest.com/api',
  apiUrl: 'https://dxdevmasterold.markaziaapis.com/api',
  apiUrl2: 'https://dxdevtreasury.markaziaapis.com/api',
  allowedDomains: ['dxdevmasterold.markaziaapis.com', 'dxdevtreasury.markaziaapis.com'],
  portalUrl: 'https://dxdevportal.markaziahub.com/',
  version: '1.0.0',
  googleMapKey: 'AIzaSyAAQ7GPIxJs5PTBccmO9OZwBUy464p59bY',
  generalToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5MDAwOTciLCJ1bmlxdWVfbmFtZSI6IlN1cGVyIEFkbWluICBBQkMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6Ijc3NTg1NTA3NzciLCJCcmFuY2hJZCI6IjAiLCJSb2xlIjoiMzYiLCJDaXR5IjoiQW1tYW4gR292ZXJub3JhdGUiLCJSZWdpc3RlciI6IiIsIlBlcm1pc3Npb25zIjoiW10iLCJCcmFuY2giOiJ7XCJCcmFuY2hJZFwiOjAsXCJCcmFuY2hOYW1lXCI6XCJTQyBCYXlhZGVyXCJ9IiwibmJmIjoxNjg2MzMxODM5LCJleHAiOjE2ODg5MjM4MzksImlhdCI6MTY4NjMzMTgzOX0.PsQ_-jcWB7hTQDAmrKx9JGK_zFWNwaS3bODlfe_KF2I'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map