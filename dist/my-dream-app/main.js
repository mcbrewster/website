(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_cardlayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/cardlayout.component */ "./src/app/card/cardlayout.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./links/links.component */ "./src/app/links/links.component.ts");






var routes = [{ path: 'projects', component: _card_cardlayout_component__WEBPACK_IMPORTED_MODULE_3__["CardLayoutComponent"] }, { path: 'graph', component: _graph_graph_component__WEBPACK_IMPORTED_MODULE_4__["GraphComponent"] }, { path: "links", component: _links_links_component__WEBPACK_IMPORTED_MODULE_5__["LinksComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"pt-5 px-5\">\n  <h1 class=\"title\">Margaret Brewster</h1>\n  <h6>University of Waterloo Systems Design Engineering</h6>\n</div>\n<div class=\"row p-5\">\n  <div class=\"col-12 p-0\">\n  <ul class=\"p-0\">\n  <li class=\"one\"><a on-mouseover='flip()' (click)=\"active='projects'\" [class.clicked]=\"active=='projects'\" routerLink=\"/projects\" href=\"#\">Projects</a></li>\n <li class=\"two\" (click)=\"active='graph'\" [class.clicked]=\"active=='graph'\"><a routerLink=\"/graph\"   href=\"#\">skills</a></li>\n <li class=\"three\" (click)=\"active='links'\" [class.clicked]=\"active=='links'\"><a routerLink=\"/links\"  href=\"#\">Links</a></li>\n <li class=\"four\" (click)=\"active='resume'\" [class.clicked]=\"active=='resume'\"><a  href=\"..\\assets\\resume.pdf\">Resume</a></li>\n    <hr />\n  </ul>\n</div>\n</div>\n<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  font: 300 100% 'Helvetica Neue', Helvetica, Arial; }\n\n.title {\n  text-align: center; }\n\nul li {\n  display: inline;\n  text-align: center; }\n\na {\n  display: inline-block;\n  width: 25%;\n  padding: .75rem 0;\n  margin: 0;\n  text-decoration: none;\n  color: #333; }\n\n.two:hover ~ hr, .two.clicked ~ hr {\n  margin-left: 25%; }\n\n.three:hover ~ hr, .three.clicked ~ hr {\n  margin-left: 50%; }\n\n.four:hover ~ hr, .four.clicked ~ hr {\n  margin-left: 75%; }\n\nhr {\n  height: .25rem;\n  width: 25%;\n  margin: 0;\n  background: #86a3aa;\n  border: none;\n  transition: .3s ease-in-out; }\n\nh6 {\n  text-align: center;\n  font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJldGJyZXdzdGVyL1dlYnN0b3JtUHJvamVjdHMvd2Vic2l0ZS9teS1kcmVhbS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpREFBaUQsRUFBQTs7QUFFbkQ7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUJBQThCO0VBQzlCLFlBQVk7RUFDWiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250OiAzMDAgMTAwJSAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsO1xuICB9XG4gIC50aXRsZXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICB9XG4gIFxuICB1bCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcGFkZGluZzogLjc1cmVtIDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLnR3bzpob3ZlciB+IGhyLCAudHdvLmNsaWNrZWQgfiBociB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICBcbiAgLnRocmVlOmhvdmVyIH4gaHIsIC50aHJlZS5jbGlja2VkIH4gaHIge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgXG4gIC5mb3VyOmhvdmVyIH4gaHIsIC5mb3VyLmNsaWNrZWQgfiBociB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICBcbiAgXG4gIGhyIHtcbiAgICBoZWlnaHQ6IC4yNXJlbTtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTM0LCAxNjMsIDE3MCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIGg2e1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-dream-app';
    }
    AppComponent.prototype.flip = function () {
        this.child.flip();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "child", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");
/* harmony import */ var _card_cardlayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/cardlayout.component */ "./src/app/card/cardlayout.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./links/links.component */ "./src/app/links/links.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__["GraphComponent"],
                _card_cardlayout_component__WEBPACK_IMPORTED_MODULE_7__["CardLayoutComponent"],
                _links_links_component__WEBPACK_IMPORTED_MODULE_8__["LinksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [ngClass]=\"{'change': flipx}\" class=\"flip-card\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front \">\n        <h2 class=\"h5\">{{project.name}}</h2>\n      </div>\n      <div class=\"flip-card-back\">\n          <a [href]=\"project.link\"><img [src]=\"project.image\" alt=\"Avatar\" style=\"width:100%;height:100%;\"></a>\n        \n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  padding-top: 40%; }\n\n.flip-card {\n  background-color: transparent;\n  width: 100%;\n  height: 200px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */ }\n\n/* This container is needed to position the front and back side */\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: -webkit-transform 0.8s;\n  transition: transform 0.8s;\n  transition: transform 0.8s, -webkit-transform 0.8s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.change .flip-card-inner {\n  -webkit-transform: rotateY(360deg);\n          transform: rotateY(360deg); }\n\n/* Position the front and back side */\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n\n/* Style the front side (fallback if image is missing) */\n\n.flip-card-front {\n  background-color: white;\n  color: black; }\n\n/* Style the back side */\n\n.flip-card-back {\n  background-color: dodgerblue;\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip-card-click {\n  background-color: dodgerblue;\n  color: white;\n  -webkit-transform: rotateY(360deg);\n          transform: rotateY(360deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJldGJyZXdzdGVyL1dlYnN0b3JtUHJvamVjdHMvd2Vic2l0ZS9teS1kcmVhbS1hcHAvc3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQ0YsRUFBQTs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsYUFBYTtFQUViLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFBRSxnREFBQSxFQUFpRDs7QUFHeEUsaUVBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIsb0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5Qiw4RUFBQTs7QUFDQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBSTVCLHFDQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3REFBd0QsRUFBQTs7QUFHMUQsd0RBQUE7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdkLHdCQUFBOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDAlXG59XG4uZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7IC8qIFJlbW92ZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cbn1cblxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4vKiBEbyBhbiBob3Jpem9udGFsIGZsaXAgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgZmxpcCBib3ggY29udGFpbmVyICovXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXJ7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uY2hhbmdlIC5mbGlwLWNhcmQtaW5uZXJ7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xufVxuXG5cbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xuLmZsaXAtY2FyZC1mcm9udCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWNhcmQtY2xpY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.title = 'my-carddream-app';
        this.flipx = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "project", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card/cardlayout.component.html":
/*!************************************************!*\
  !*** ./src/app/card/cardlayout.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card-container px-5'>\n    <div class=\"row\">\n        <div class=\"col-4 p-1\"><app-card [project]=\"projects[0]\" ref='child' ></app-card></div>\n        <div class=\"col-4 p-1\"><app-card [project]=\"projects[1]\"  ref='child' ></app-card></div>\n        <div class=\"col-4 p-1\"><app-card [project]=\"projects[2]\" ref='child' ></app-card></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4 p-1\"><app-card [project]=\"projects[3]\" ref='child'></app-card></div>\n        <div  class=\"col-4 p-1 \"><app-card [project]=\"projects[4]\" ref='child'></app-card></div>\n        <div  class=\"col-4 p-1\"><app-card [project]=\"projects[5]\" ref='child'></app-card></div>\n      \n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/card/cardlayout.component.scss":
/*!************************************************!*\
  !*** ./src/app/card/cardlayout.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZGxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/card/cardlayout.component.ts":
/*!**********************************************!*\
  !*** ./src/app/card/cardlayout.component.ts ***!
  \**********************************************/
/*! exports provided: CardLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLayoutComponent", function() { return CardLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardLayoutComponent = /** @class */ (function () {
    function CardLayoutComponent() {
        this.projects = [{ name: "Hyatt",
                link: "https://careers.hyatt.com/en-US/careers",
                image: "../assets/hyatt.PNG" },
            { name: "Waterloop",
                link: "https://teamwaterloop.ca/",
                image: "../assets/waterloop.PNG" },
            { name: "Awire",
                link: "https://awiretech.com/",
                image: "../assets/awire.PNG" },
            { name: " Shaw News Room",
                link: "http://newsroom.shaw.ca/",
                image: "../assets/shaw.PNG" },
            { name: " Shaw.ca",
                link: "http://shaw.ca/",
                image: "../assets/shawca.PNG" },
            { name: "VCA",
                link: "http://varsitycommunityassociation.ca/en/",
                image: "../assets/community.PNG" }];
    }
    CardLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardlayout',
            template: __webpack_require__(/*! ./cardlayout.component.html */ "./src/app/card/cardlayout.component.html"),
            styles: [__webpack_require__(/*! ./cardlayout.component.scss */ "./src/app/card/cardlayout.component.scss")]
        })
    ], CardLayoutComponent);
    return CardLayoutComponent;
}());



/***/ }),

/***/ "./src/app/graph/graph.component.html":
/*!********************************************!*\
  !*** ./src/app/graph/graph.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"igFrameBar\">\n    <div class=\"igData igData1\"></div>\n    <div class=\"igData igData2\"></div>\n    <div class=\"igData igData3\"></div>\n    <div class=\"igData igData4\"></div>\n    <div class=\"igData igData5\"></div>\n    <div class=\"igData igData6\"></div>\n    <div class=\"igData igData7\"></div>\n    <div class=\"igData igData8\"></div>\n    <div class=\"igData igData9\"></div>\n    <div class=\"igData igData10\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/graph/graph.component.scss":
/*!********************************************!*\
  !*** ./src/app/graph/graph.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,100,500);\n.igFrameBar {\n  width: 100%;\n  height: 300px;\n  position: relative;\n  background: #f2f2f2;\n  margin: 20% auto 0px auto;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n.igFrameBar:before {\n  content: \"\";\n  width: 100%;\n  height: 1px;\n  background: #fff;\n  position: absolute;\n  top: 50%; }\n.igFrameBar:after {\n  content: \"\";\n  width: 100%;\n  height: 50%;\n  background: transparent;\n  position: absolute;\n  top: 25%;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff; }\n.igData {\n  width: 35px;\n  position: absolute;\n  bottom: 1px;\n  margin: 20% auto 0px auto;\n  z-index: 99;\n  float: left; }\n.igData1 {\n  background: #6d798a;\n  height: 0px;\n  left: 2%;\n  -webkit-animation: showBar1 1.2s 0.1s forwards;\n  animation: showBar1 1.2s 0.1s forwards; }\n.igData2 {\n  background: #8fa9ad;\n  height: 0px;\n  left: 12%;\n  -webkit-animation: showBar2 1.2s 0.2s forwards;\n  animation: showBar2 1.2s 0.2s forwards; }\n.igData3 {\n  background: #7d99a1;\n  height: 0px;\n  left: 22%;\n  -webkit-animation: showBar3 1.2s 0.3s forwards;\n  animation: showBar3 1.2s 0.3s forwards; }\n.igData4 {\n  background: #a4bdbe;\n  height: 0px;\n  left: 32%;\n  -webkit-animation: showBar4 1.2s 0.4s forwards;\n  animation: showBar4 1.2s 0.4s forwards; }\n.igData5 {\n  background: #688d8b;\n  height: 0px;\n  left: 42%;\n  -webkit-animation: showBar5 1.2s 0.5s forwards;\n  animation: showBar5 1.2s 0.5s forwards; }\n.igData6 {\n  background: #78a19a;\n  height: 0px;\n  left: 52%;\n  -webkit-animation: showBar6 1.2s 0.6s forwards;\n  animation: showBar6 1.2s 0.6s forwards; }\n.igData7 {\n  background: #d6ecfa;\n  height: 0px;\n  left: 62%;\n  -webkit-animation: showBar7 1.2s 0.7s forwards;\n  animation: showBar7 1.2s 0.7s forwards; }\n.igData8 {\n  background: #bde4e6f5;\n  height: 0px;\n  left: 72%;\n  -webkit-animation: showBar8 1.2s 0.8s forwards;\n  animation: showBar8 1.2s 0.8s forwards; }\n.igData9 {\n  background: #dae9f4;\n  height: 0px;\n  left: 82%;\n  -webkit-animation: showBar9 1.2s 0.9s forwards;\n  animation: showBar9 1.2s 0.9s forwards; }\n.igData10 {\n  background: #d3e0f7;\n  height: 0px;\n  left: 92%;\n  -webkit-animation: showBar10 1.2s 1s forwards;\n  animation: showBar10 1.2s 1s forwards; }\n.igData:before {\n  position: absolute;\n  top: -16px;\n  font-size: 12px;\n  color: #333;\n  font-family: \"roboto\";\n  font-weight: 300; }\n.igData1:before {\n  content: \"90%\"; }\n.igData2:before {\n  content: \"80%\"; }\n.igData3:before {\n  content: \"50%\"; }\n.igData4:before {\n  content: \"60%\"; }\n.igData5:before {\n  content: \"75%\"; }\n.igData6:before {\n  content: \"60%\"; }\n.igData7:before {\n  content: \"40%\"; }\n.igData8:before {\n  content: \"10%\"; }\n.igData9:before {\n  content: \"70%\"; }\n.igData10:before {\n  content: \"60%\"; }\n.igData:after {\n  position: absolute;\n  bottom: -55px;\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n  color: #666;\n  font-size: 14px;\n  text-align: left;\n  font-family: \"roboto\";\n  font-weight: 300;\n  width: 150px; }\n.igData1:after {\n  content: \"HTML\"; }\n.igData2:after {\n  content: \"CSS/Sass\"; }\n.igData3:after {\n  content: \"Java\"; }\n.igData4:after {\n  content: \"C++\"; }\n.igData5:after {\n  content: \"Angular.js\"; }\n.igData6:after {\n  content: \"React.js\"; }\n.igData7:after {\n  content: \"Visual Basic\"; }\n.igData8:after {\n  content: \".Net\"; }\n.igData9:after {\n  content: \"Photoshop\"; }\n.igData10:after {\n  content: \"invision\"; }\n@-webkit-keyframes showBar1 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 90%; } }\n@-webkit-keyframes showBar2 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 80%; } }\n@-webkit-keyframes showBar3 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 50%; } }\n@-webkit-keyframes showBar4 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 60%; } }\n@-webkit-keyframes showBar5 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 75%; } }\n@-webkit-keyframes showBar6 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 60%; } }\n@-webkit-keyframes showBar7 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 40%; } }\n@-webkit-keyframes showBar8 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 10%; } }\n@-webkit-keyframes showBar9 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 70%; } }\n@-webkit-keyframes showBar10 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 60%; } }\n@keyframes showBar1 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 90%; } }\n@keyframes showBar2 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 80%; } }\n@keyframes showBar3 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 50%; } }\n@keyframes showBar4 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 60%; } }\n@keyframes showBar5 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 75%; } }\n@keyframes showBar6 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 60%; } }\n@keyframes showBar7 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 40%; } }\n@keyframes showBar8 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 10%; } }\n@keyframes showBar9 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 70%; } }\n@keyframes showBar10 {\n  0% {\n    height: 0px; }\n  100% {\n    height: 60%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJldGJyZXdzdGVyL1dlYnN0b3JtUHJvamVjdHMvd2Vic2l0ZS9teS1kcmVhbS1hcHAvc3JjL2FwcC9ncmFwaC9ncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBWTtBQWFaO0VBQ0UsV0FOUztFQU9ULGFBTlc7RUFPWCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixxQ0FBMkI7VUFBM0IsNkJBQTJCLEVBQUE7QUFFN0I7RUFDRSxXQUFVO0VBQ1YsV0FBVTtFQUNWLFdBQVU7RUFDVixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixRQUFPLEVBQUE7QUFFVDtFQUNFLFdBQVU7RUFDVixXQUFVO0VBQ1YsV0FBVTtFQUNWLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsUUFBTztFQUNQLDBCQUF5QjtFQUN6Qiw2QkFBNEIsRUFBQTtBQUU5QjtFQUNFLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLHlCQUF3QjtFQUN4QixXQUFVO0VBQ1YsV0FBVSxFQUFBO0FBR1I7RUFDRyxtQkF2Q087RUF3Q1AsV0FBVTtFQUNWLFFBQStCO0VBQy9CLDhDQUEyRDtFQUUzRCxzQ0FBbUQsRUFBQTtBQU50RDtFQUNHLG1CQXZDZTtFQXdDZixXQUFVO0VBQ1YsU0FBK0I7RUFDL0IsOENBQTJEO0VBRTNELHNDQUFtRCxFQUFBO0FBTnREO0VBQ0csbUJBdkN1QjtFQXdDdkIsV0FBVTtFQUNWLFNBQStCO0VBQy9CLDhDQUEyRDtFQUUzRCxzQ0FBbUQsRUFBQTtBQU50RDtFQUNHLG1CQXZDK0I7RUF3Qy9CLFdBQVU7RUFDVixTQUErQjtFQUMvQiw4Q0FBMkQ7RUFFM0Qsc0NBQW1ELEVBQUE7QUFOdEQ7RUFDRyxtQkF2Q3VDO0VBd0N2QyxXQUFVO0VBQ1YsU0FBK0I7RUFDL0IsOENBQTJEO0VBRTNELHNDQUFtRCxFQUFBO0FBTnREO0VBQ0csbUJBdkMrQztFQXdDL0MsV0FBVTtFQUNW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V0FBVyxFQUFBO0VBQ2pCO0lBQU8sV0FqR2tCLEVBQUEsRUFBQTtBQStGdkI7RUFDRjtJQUFNLFdBQVcsRUFBQTtFQUNqQjtJQUFPLFdBakdzQixFQUFBLEVBQUE7QUErRjNCO0VBQ0Y7SUFBTSxXQUFXLEVBQUE7RUFDakI7SUFBTyxXQWpHMEIsRUFBQSxFQUFBO0FBK0YvQjtFQUNGO0lBQU0sV0FBVyxFQUFBO0VBQ2pCO0lBQU8sV0FqRzhCLEVBQUEsRUFBQTtBQStGbkM7RUFDRjtJQUFNLFdBQVcsRUFBQTtFQUNqQjtJQUFPLFdBakdrQyxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncmFwaC9ncmFwaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCwxMDAsNTAwKTtcblxuLy9Vc2VyIERlZmluZWRcbiRkYXRhTnVtOjEwOyBcbiRuYW1lOlwiSFRNTFwiIFwiQ1NTL1Nhc3NcIiBcIkphdmFcIiBcIkMrK1wiIFwiQW5ndWxhci5qc1wiIFwiUmVhY3QuanNcIiBcIlZpc3VhbCBCYXNpY1wiIFwiLk5ldFwiIFwiUGhvdG9zaG9wXCIgXCJpbnZpc2lvblwiO1xuJGRhdGE6OTAlIDgwJSA1MCUgNjAlIDc1JSA2MCUgNDAlIDEwJSA3MCUgNjAlO1xuXG4vL0dlbmVyYWwgU2V0dGluZ3NcbiR3aWR0aDoxMDAlO1xuJGhlaWdodDozMDBweDtcbiRjb2xvcjojNmQ3OThhICM4ZmE5YWQgIzdkOTlhMSAjYTRiZGJlICM2ODhkOGIgIzc4YTE5YSAjZDZlY2ZhICNiZGU0ZTZmNSAjZGFlOWY0ICNkM2UwZjc7XG5cblxuLmlnRnJhbWVCYXJ7XG4gIHdpZHRoOiR3aWR0aDtcbiAgaGVpZ2h0OiRoZWlnaHQ7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiNmMmYyZjI7XG4gIG1hcmdpbjoyMCUgYXV0byAwcHggYXV0bztcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC01MCUpO1xufVxuLmlnRnJhbWVCYXI6YmVmb3Jle1xuICBjb250ZW50OlwiXCI7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxcHg7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDo1MCU7XG59XG4uaWdGcmFtZUJhcjphZnRlcntcbiAgY29udGVudDpcIlwiO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6NTAlO1xuICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjI1JTtcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmZjtcbn1cbi5pZ0RhdGF7XG4gIHdpZHRoOjM1cHg7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBib3R0b206MXB4O1xuICBtYXJnaW46MjAlIGF1dG8gMHB4IGF1dG87XG4gIHotaW5kZXg6OTk7XG4gIGZsb2F0OmxlZnQ7XG59XG5AZm9yICRpIGZyb20gMSB0aHJvdWdoICRkYXRhTnVtIHtcbiAgICAuaWdEYXRhI3skaX0ge1xuICAgICAgIGJhY2tncm91bmQ6bnRoKCRjb2xvciwkaSk7XG4gICAgICAgaGVpZ2h0OjBweDtcbiAgICAgICBsZWZ0OiR3aWR0aC8oJGRhdGFOdW0pICogJGkgLSA4O1xuICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzaG93QmFyI3skaX0gMS4ycyAkaSouMXMgZm9yd2FyZHM7XG4gICAgICAgLW1vei1hbmltYXRpb246IHNob3dCYXIjeyRpfSAxLjJzICRpKi4xcyBmb3J3YXJkcztcbiAgICAgICBhbmltYXRpb246IHNob3dCYXIjeyRpfSAxLjJzICRpKi4xcyBmb3J3YXJkcztcbiAgICB9XG59XG4uaWdEYXRhOmJlZm9yZXtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDotMTZweDtcbiAgZm9udC1zaXplOjEycHg7XG4gIGNvbG9yOiMzMzM7XG4gIGZvbnQtZmFtaWx5Olwicm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OjMwMDtcbn1cbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGRhdGFOdW0ge1xuICAgIC5pZ0RhdGEjeyRpfTpiZWZvcmUge1xuICAgICAgICBjb250ZW50Om50aCgkZGF0YSwkaSkrXCJcIjtcbiAgICB9XG59XG4uaWdEYXRhOmFmdGVye1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOi01NXB4O1xuICB0cmFuc2Zvcm06cm90YXRlKDMwZGVnKTtcbiAgY29sb3I6IzY2NjtcbiAgZm9udC1zaXplOjE0cHg7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgZm9udC1mYW1pbHk6XCJyb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6MzAwO1xuICB3aWR0aDoxNTBweDtcbn1cbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGRhdGFOdW0ge1xuICAgIC5pZ0RhdGEjeyRpfTphZnRlcntcbiAgICAgICAgY29udGVudDpudGgoJG5hbWUsJGkpK1wiXCI7XG4gICAgfVxufVxuXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoICRkYXRhTnVtIHtcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzaG93QmFyI3skaX0ge1xuICAgIDAlICAge2hlaWdodDogMHB4O31cbiAgICAxMDAlICB7aGVpZ2h0OiBudGgoJGRhdGEsJGkpO31cbiAgfVxufVxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZGF0YU51bSB7XG4gICAgICBALW1vei1rZXlmcmFtZXMgc2hvd0JhciN7JGl9IHtcbiAgICAwJSAgIHtoZWlnaHQ6IDBweDt9XG4gICAgMTAwJSAge2hlaWdodDogbnRoKCRkYXRhLCRpKTt9XG4gIH1cbn1cbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGRhdGFOdW0ge1xuICAgICAgQGtleWZyYW1lcyBzaG93QmFyI3skaX0ge1xuICAgIDAlICAge2hlaWdodDogMHB4O31cbiAgICAxMDAlICB7aGVpZ2h0OiBudGgoJGRhdGEsJGkpO31cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/graph/graph.component.ts":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphComponent = /** @class */ (function () {
    function GraphComponent() {
        this.title = 'my-carddream-app';
        this.flipx = false;
    }
    GraphComponent.prototype.flip = function () {
        this.flipx = !this.flipx;
    };
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.scss */ "./src/app/graph/graph.component.scss")]
        })
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/links/links.component.html":
/*!********************************************!*\
  !*** ./src/app/links/links.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n<a href=\"https://github.com/mcbrewster\"><h2><i class=\"fab fa-github p-2 \"></i>Git hub </h2></a>\n<a href=\"www.linkedin.com/in/margaret-brewster-20098b149\"><h2><i class=\"fab fa-linkedin-in p-2 \"></i>Connect with me</h2></a>\n<a href=\"https://devpost.com/mcbrewster\"><h2><i class=\"fab fa-dev p-2 i3\"></i>Hackathon Projects</h2></a>\n<a href = \"mailto: mvbrewst@edu.uwaterloo.ca\"><h2><i class=\"far fa-envelope-open p-2 \"></i> Get in touch</h2></a>\n</div>"

/***/ }),

/***/ "./src/app/links/links.component.scss":
/*!********************************************!*\
  !*** ./src/app/links/links.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 25px;\n  font-size: 21px;\n  text-align: center;\n  animation: fadein 2s;\n  -moz-animation: fadein 2s;\n  /* Firefox */\n  -webkit-animation: fadein 2s;\n  /* Safari and Chrome */\n  -o-animation: fadein 2s;\n  /* Opera */ }\n\na {\n  color: #86a3aa; }\n\na:hover {\n  color: black; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJldGJyZXdzdGVyL1dlYnN0b3JtUHJvamVjdHMvd2Vic2l0ZS9teS1kcmVhbS1hcHAvc3JjL2FwcC9saW5rcy9saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFBRSxZQUFBO0VBQzNCLDRCQUE0QjtFQUFFLHNCQUFBO0VBQzlCLHVCQUF1QjtFQUFFLFVBQUEsRUFBVzs7QUFFeEM7RUFDRSxjQUF5QixFQUFBOztBQUUzQjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNJO0lBQ0ksVUFBUyxFQUFBO0VBRWI7SUFDSSxVQUFTLEVBQUEsRUFBQTs7QUFXakI7RUFBNEIsc0JBQUE7RUFDeEI7SUFDSSxVQUFTLEVBQUE7RUFFYjtJQUNJLFVBQVMsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIE9wZXJhICovXG59XG5he1xuICBjb2xvcjogcmdiKDEzNCwgMTYzLCAxNzApOyBcbn1cbmE6aG92ZXJ7XG4gIGNvbG9yOmJsYWNrOyBcbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHsgLyogT3BlcmEgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/links/links.component.ts":
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.scss */ "./src/app/links/links.component.scss")]
        })
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/margaretbrewster/WebstormProjects/website/my-dream-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map