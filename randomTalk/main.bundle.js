webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, "input {\n  background:none;\n  border:none;\n  border-bottom: 1px solid #4C4C4C;\n  outline:none;\n  box-shadow:none;\n  color: white;\n  font-size:1.6em;\n  font-weight:300;\n  padding:1.2em 0;\n}\n\n#message {\n  margin-bottom: 15px;\n}\n\n#imageLink {\n  margin-bottom: 15px;\n}\n\ninput:focus {\n  background:none;\n  border:none;\n  border-bottom: 1px solid #4C4C4C;\n  outline:none;\n  box-shadow:none;\n}\n\n.or {\n  color: white;\n  font-size:1.6em;\n  font-weight:300;\n  padding: 1em 0;\n}\n\n.chat {\n  padding: 2em 0;\n}\n\n.chat-container {\n    display:block;\n    width:100%;\n}\n\n.chat-container a {\n    text-transform: uppercase;\n    font-weight:bold;\n    color:#816A98;\n    font-size:.8em;\n    letter-spacing:2px;\n}\n\n.chat-container p {\n    background:#323035;\n    padding:1.1em;\n    color:white;\n    margin: 10px 0 10px 0;\n}\n\n.button-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.profile-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n\n.shared-img-container {\n  padding: 1.5em 0;\n}\n\n@media (min-width: 320px) {\n  .shared-img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n}\n\n@media (1024px) {\n  .shared-img {\n    max-width: 600px;\n    max-height: 338px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div class=\"row columns\">\n  <div class=\"small-12 large-6 button-container\">\n    <button (click)=\"login()\">Login With Google</button>\n  </div>\n  <div class=\"small-12 large-6 button-container\">\n    <button (click)=\"logout()\" *ngIf=\"name\">Logout</button>\n  </div>\n</div>\n\n<div class=\"row columns\">\n  <input type=\"text\" id=\"message\" *ngIf=\"name\" placeholder=\"Chat here...\" (keyup.enter)=\"chatSend($event.target.value)\" [(ngModel)]=\"msgValue\" />\n  <span class=\"or\" *ngIf=\"name\">Or...</span>\n  <input type=\"text\" id=\"imageLink\" *ngIf=\"name\" placeholder=\"Share an Image or Gif url...\" (keyup.enter)=\"shareLinkSend($event.target.value)\" [(ngModel)]=\"msgLink\">\n  <div class=\"chat\">\n    <div class=\"chat-container\" *ngFor=\"let item of items | async\">\n      <span>\n        <img class=\"profile-img\" src=\"{{item.picture}}\" alt=\"\">\n        <a href=\"{{item.link}}\">{{item.name}}</a>\n      </span>\n      <div *ngIf=\"item.message\">\n        <p>{{item.message}}</p>\n      </div>\n      <div *ngIf=\"item.sharedLink\" class=\"shared-img-container\">\n        <img class=\"shared-img\" src=\"{{item.sharedLink}}\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(afd, afa) {
        this.afd = afd;
        this.afa = afa;
        this.name = '';
        this.msgValue = '';
        this.msgLink = '';
        this.picture = '';
        this.link = '';
        this.items = afd.list('/messages', {
            query: {
                limitToLast: 50
            }
        });
    }
    ;
    AppComponent.prototype.login = function () {
        var props = this;
        this.afa.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (response) {
            var data = response.additionalUserInfo.profile;
            props.name = data.name;
            props.picture = data.picture;
            if (data.link) {
                props.link = data.link;
            }
            else {
                props.link = '';
            }
        }, function (error) {
            console.log('reject');
        });
    };
    AppComponent.prototype.logout = function () {
        this.afa.auth.signOut();
        this.name = '';
    };
    AppComponent.prototype.chatSend = function (theirMessage) {
        this.items.push({ message: theirMessage, name: this.name, picture: this.picture, link: this.link });
        this.msgValue = '';
    };
    AppComponent.prototype.shareLinkSend = function (sharedLink) {
        console.log(sharedLink);
        this.items.push({ name: this.name, picture: this.picture, link: this.link, sharedLink: sharedLink });
        this.msgLink = '';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(166),
        styles: [__webpack_require__(160)],
        providers: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(60);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var firebaseConfig = {
    apiKey: "AIzaSyAOGpPTL47GC1UhpiO__qPygW3bnOMH-6U",
    authDomain: "diegoschatapp.firebaseapp.com",
    databaseURL: "https://diegoschatapp.firebaseio.com",
    projectId: "diegoschatapp",
    storageBucket: "diegoschatapp.appspot.com",
    messagingSenderId: "494098892871"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.bundle.js.map