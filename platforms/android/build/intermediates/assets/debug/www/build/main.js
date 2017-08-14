webpackJsonp([0],{

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_api_service__ = __webpack_require__(447);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_settings_service__ = __webpack_require__(714);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_settings_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sql_storage_service__ = __webpack_require__(715);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__sql_storage_service__["a"]; });



//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["c" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["h" /* TournamentsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["g" /* TeamsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["e" /* TeamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["d" /* StandingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["f" /* TeamHomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["b" /* MapPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM' })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["c" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["h" /* TournamentsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["g" /* TeamsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["e" /* TeamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["d" /* StandingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["f" /* TeamHomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pages__["b" /* MapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__ = __webpack_require__(446);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__ = __webpack_require__(716);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(717);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__game_game__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__ = __webpack_require__(718);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teams_teams__ = __webpack_require__(720);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__teams_teams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__standings_standings__ = __webpack_require__(721);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__standings_standings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__ = __webpack_require__(722);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(723);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__map_map__["a"]; });








//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, appApi, userSettings, loadingController, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appApi = appApi;
        this.userSettings = userSettings;
        this.loadingController = loadingController;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["c" /* MyTeamsPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.refreshFavorites();
            _this.events.subscribe('favorites:changed', function () { return _this.refreshFavorites(); });
            //---------------------------------------------
            _this.userSettings.initStorage().then(function () {
                console.log("initStorage...");
                //this.rootPage = MyTeamsPage;
                //this.refreshFavorites();
                //this.events.subscribe('favorites:changed', () => this.refreshFavorites());
            });
        });
    };
    /*openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }*/
    MyApp.prototype.refreshFavorites = function () {
        this.favoriteTeams = this.userSettings.getAllFavorites();
    };
    MyApp.prototype.goHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["c" /* MyTeamsPage */]);
    };
    MyApp.prototype.goToTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["h" /* TournamentsPage */]);
    };
    MyApp.prototype.goToTeam = function (favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.appApi.getTournamentsData(favorite.tournamentId)
            .subscribe(function (t) { return _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["f" /* TeamHomePage */], favorite.team); });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="cDarkorange">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-list-header>Navigate</ion-list-header>\n\n      <button menuClose ion-item (click)="goHome()">Home</button>\n\n      <button menuClose ion-item (click)="goToTournaments()">Find a Tournaments</button>\n\n    </ion-list>\n\n    <ion-list *ngIf="favoriteTeams">\n\n       <ion-list-header>Favorites</ion-list-header>\n\n       <button menuClose ion-item *ngFor="let fab of favoriteTeams" (click)="goToTeam(fab)">\n\n            {{fab.team.name}}\n\n       </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\app\app.html"*/,
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__shared_shared__["a" /* AppApi */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared__["c" /* UserSettings */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_6__shared_shared__["c" /* UserSettings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyTeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var MyTeamsPage = (function () {
    // favorites =[
    //   {
    //     team: {id: 6182, name: 'HC Elite 7th', coach: 'Michelotti'},
    //     tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
    //     tournamentName: 'March Madness Tournament' 
    //   },
    //   {
    //     team: {id: 805, name: 'HC Elite', coach: 'Michelotti'},
    //     tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
    //     tournamentName: 'Holiday Hoops Challenge'       
    //   }
    // ];
    function MyTeamsPage(navCtrl, navParams, appApi, userSettings, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.userSettings = userSettings;
        this.loadingController = loadingController;
        this.favorites = [];
    }
    MyTeamsPage.prototype.favoriteTapped = function ($event, favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.appApi.getTournamentsData(favorite.tournamentId)
            .subscribe(function (t) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TeamHomePage */], favorite.team); });
    };
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTeamsPage');
    };
    MyTeamsPage.prototype.goToTournaments = function () {
        console.log('Goto TournamentsPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["h" /* TournamentsPage */]);
    };
    MyTeamsPage.prototype.ionViewDidEnter = function () {
        this.favorites = this.userSettings.getAllFavorites();
        console.log(this.favorites);
    };
    return MyTeamsPage;
}());
MyTeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-teams',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\my-teams\my-teams.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Ping Pong Madness</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>My Teams</ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card *ngIf="!favorites">\n\n    <ion-card-header class="my-teams-header">No Followed Teams</ion-card-header>\n\n    <ion-card-content>\n\n      <p>You are not currently following any teams.</p>\n\n      <p>First select a tournament, then you can follow teams from their team page.</p>\n\n\n\n      <button ion-button full (click)="goToTournaments()">\n\n          <ion-icon name="search" padding></ion-icon>\n\n          Find a Tournament\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="favorites">\n\n    <ion-card-content>\n\n      <ion-list>\n\n          <ion-list-header class="my-teams-header">Followed Teams</ion-list-header>\n\n          <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event, item)">\n\n            <ion-icon name="star"></ion-icon>\n\n            {{item.team.name}}\n\n            <p>{{item.tournamentName}}</p>\n\n          </button>\n\n      </ion-list>\n\n      <p>To follow more teams, select a tournament, \n\n        then you can follow teams from their team page.</p>\n\n\n\n      <button ion-button full (click)="goToTournaments()">\n\n          <ion-icon name="search" padding></ion-icon>\n\n          Find a Tournament\n\n      </button>      \n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n    <!--<ion-list>\n\n      <ion-list-header>Followed Teams</ion-list-header>\n\n      <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event, item)">\n\n        <ion-icon name="star"></ion-icon>\n\n        {{item.team.name}}\n\n        <p>{{item.tournamentName}}</p>\n\n      </button>\n\n    </ion-list>\n\n    \n\n    <p>To follow more teams, select a tournament, \n\n      then you can follow teams from their team page.</p>\n\n\n\n    <button ion-button full (click)="goToTournaments()">\n\n        <ion-icon name="search" padding></ion-icon>\n\n        Find a Tournament\n\n    </button>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\my-teams\my-teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["c" /* UserSettings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppApi = (function () {
    function AppApi(http) {
        this.http = http;
        this.baseUrl = 'https://game-schedule.firebaseio.com/';
        this.currentTourney = {};
        this.tourneyData = {};
    }
    AppApi.prototype.getTournaments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + "/tournaments.json")
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    AppApi.prototype.getTournamentsData = function (tourneyId, forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!forceRefresh && this.tourneyData[tourneyId]) {
            this.currentTourney = this.tourneyData[tourneyId];
            console.log("Just return the data");
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.currentTourney);
        }
        console.log("Data is not available");
        return this.http.get(this.baseUrl + "/tournaments-data/" + tourneyId + ".json")
            .map(function (response) {
            _this.currentTourney = response.json();
            return _this.currentTourney;
        });
    };
    // getTournamentsData(tourneyId): Observable<any> {
    //     return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    //             .map((response: Response) => {
    //                 this.currentTourney = response.json();
    //                 return this.currentTourney;
    //             });                 
    // }
    AppApi.prototype.getCurrentTourney = function () {
        return this.currentTourney;
    };
    AppApi.prototype.refreshCurrentTourney = function () {
        return this.getTournamentsData(this.currentTourney.tournament.id, true);
    };
    return AppApi;
}());
AppApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AppApi);

//# sourceMappingURL=app-api.service.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as storageForage from 'localforage';



var win = window;
var UserSettings = (function () {
    function UserSettings(events) {
        // if (win.sqlitePlugin) {
        //     this.sql = new SqlStorage();
        //     console.log(this.sql);
        // } else {
        //     console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
        // }        
        this.events = events;
        this.storage = new __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */](window.localStorage);
    }
    UserSettings.prototype.favoriteTeam = function (team, tournamentId, tournamentName) {
        var item = { team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        };
        //this.storage.set(team.id, JSON.stringify(item));
        //storageForage.setItem(team.id, JSON.stringify(item));
        window.localStorage.setItem(team.id, JSON.stringify(item));
        this.events.publish('favorites:changed');
        //console.log(this.sql);         
    };
    UserSettings.prototype.unfavoriteTeam = function (team) {
        //this.storage.remove(team.id);
        //storageForage.removeItem(team.id);
        window.localStorage.removeItem(team.id);
        this.events.publish('favorites:changed');
    };
    UserSettings.prototype.isFavoriteTeam = function (teamId) {
        //return this.storage.get(teamId).then(value => value ? true : false);
        //return storageForage.getItem(teamId).then(value => value ? true : false);
        return window.localStorage.getItem(teamId);
    };
    UserSettings.prototype.getAllFavorites = function () {
        var items = [];
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forIn"](window.localStorage, function (v, k) {
            items.push(JSON.parse(v));
        });
        return items.length ? items : null;
    };
    UserSettings.prototype.initStorage = function () {
        if (win.sqlitePlugin) {
            this.db = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]();
            this.sqlStorage = new __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* SqlStorage */](this.db);
            return this.sqlStorage.initializeDatabase();
        }
        // else {
        //     console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
        //     return new Promise(resolve => resolve());
        // }
        // if (this.sql){
        //     return this.sql.initializeDatabase();
        // } else {
        //     return new Promise(resolve => resolve());
        // }
    };
    return UserSettings;
}());
UserSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
], UserSettings);

//# sourceMappingURL=user.settings.service.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqlStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DATABASE_FILE_NAME = 'data.db';
var SqlStorage = (function () {
    function SqlStorage(db) {
        this.db = db;
        console.log(this.sql);
    }
    SqlStorage.prototype.getAll = function () {
        return this.sql.executeSql('SELECT key, value FROM kv', []).then(function (data) {
            var results = [];
            for (var i = 0; i < data.rows.length; i++) {
                results.push(JSON.parse(data.rows.item(i).value));
            }
            return results;
        });
    };
    SqlStorage.prototype.get = function (key) {
        return this.sql.executeSql('select key, value from kv where key = ? limit 1', [key]).then(function (data) {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    };
    SqlStorage.prototype.remove = function (key) {
        return this.sql.executeSql('delete from kv where key = ?', [key]);
    };
    SqlStorage.prototype.set = function (key, value) {
        return this.sql.executeSql('insert or replace into kv(key, value) values (?, ?)', [key, value]).then(function (data) {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    };
    /**
     * Should be called after deviceready event is fired
     */
    SqlStorage.prototype.initializeDatabase = function () {
        var _this = this;
        this.db = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
        return this.db.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        }).then(function (sql) {
            _this.sql = sql;
            return sql.executeSql('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)', []).then(function (data) {
                console.log('**after CREATE TABLE check...', data);
                sql.executeSql('SELECT * from kv', []).then(function (data) {
                    console.log('**executing query: SELECT * from kv ', data);
                });
            });
        });
    };
    return SqlStorage;
}());
SqlStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
], SqlStorage);

//# sourceMappingURL=sql-storage.service.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TournamentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var TournamentsPage = (function () {
    function TournamentsPage(navCtrl, navParams, appApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.loadingController = loadingController;
    }
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TournamentsPage');
        var loader = this.loadingController.create({
            content: "Fetching tournaments...",
        });
        loader.present().then(function () {
            _this.appApi.getTournaments().then(function (data) {
                _this.tournaments = data;
                loader.dismiss();
            });
        });
        console.log(this.tournaments);
    };
    TournamentsPage.prototype.itemTapped = function ($event, tourney) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["g" /* TeamsPage */], tourney);
    };
    return TournamentsPage;
}());
TournamentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tournaments',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\tournaments\tournaments.html"*/'<!--\n\n  Generated template for the TournamentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Select a Tournament</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of tournaments" (click)="itemTapped($even, item)">\n\n        {{item.name}}\n\n    </button>  \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\tournaments\tournaments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], TournamentsPage);

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var GamePage = (function () {
    function GamePage(navCtrl, navParams, appApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.game = this.navParams.data;
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
        this.game.gameTime = Date.parse(this.game.time);
    };
    GamePage.prototype.teamTapped = function (teamId) {
        var tourneyData = this.appApi.getCurrentTourney();
        var team = tourneyData.teams.find(function (t) { return t.id === teamId; });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TeamHomePage */], team);
    };
    GamePage.prototype.goToDirection = function () {
        var tourneyData = this.appApi.getCurrentTourney();
        var location = tourneyData.locations[this.game.locationId];
        window.location = 'geo:${location.latitude},${location.longitude};u=35';
    };
    GamePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* MapPage */], this.game);
    };
    GamePage.prototype.isWinner = function (score1, score2) {
        return Number(score1) > Number(score2);
    };
    return GamePage;
}());
GamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-game',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\game\game.html"*/'<!--\n\n  Generated template for the GamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Game</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-row>\n\n    <ion-col col-6 text-center class="divider-col">\n\n      <button ion-button clear full (click)="teamTapped(game.team1Id)">Home</button>\n\n    </ion-col>\n\n    <ion-col col-6 text-center>\n\n      <button ion-button clear full (click)="teamTapped(game.team2Id)">Away</button>\n\n    </ion-col>    \n\n  </ion-row>\n\n\n\n  <ion-row center>\n\n    <ion-col col-6 text-center class="divider-col" (click)="teamTapped(game.team1Id)">\n\n      <h4>{{game.team1}}</h4>\n\n    </ion-col>\n\n    <ion-col col-6 text-center (click)="teamTapped(game.team2Id)">\n\n      <h4>{{game.team2}}</h4>\n\n    </ion-col>    \n\n  </ion-row>\n\n\n\n  <ion-row baseline class="top-buttom-border">\n\n    <ion-col col-4 text-center (click)="teamTapped(game.team1Id)">\n\n      <h1>{{game.team1Score}}</h1>\n\n    </ion-col>\n\n    <ion-col col-4 text-center>\n\n      <ion-label>Score</ion-label>\n\n    </ion-col>    \n\n    <ion-col col-4 text-center (click)="teamTapped(game.team2Id)">\n\n      <h1>{{game.team2Score}}</h1>\n\n    </ion-col>    \n\n  </ion-row>\n\n  \n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-icon outline name="calendar" item-left></ion-icon>\n\n      {{game.time | date:\'M/d/yy\'}}{{game.time | date:\'shortTime\'}}\n\n    </ion-item>\n\n    <ion-row>\n\n      <ion-col col-7>\n\n        <ion-label>{{game.location}}</ion-label>        \n\n      </ion-col>\n\n      <ion-col col-5 text-right>\n\n        <button ion-button outline (click)="goToMap()">\n\n          <ion-icon name="map"></ion-icon>\n\n        </button>\n\n        <button ion-button outline (click)="goToDirection()">\n\n          <ion-icon name="navigate"></ion-icon>\n\n        </button>        \n\n      </ion-col>        \n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\game\game.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */]])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */




var TeamDetailPage = (function () {
    function TeamDetailPage(navCtrl, navParams, appApi, alertController, toastController, userSettings) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.alertController = alertController;
        this.toastController = toastController;
        this.userSettings = userSettings;
        this.dateFilter = __WEBPACK_IMPORTED_MODULE_3_moment__().format('YYYY-MM-DD');
        this.isFollowing = false;
        this.team = this.navParams.data;
    }
    TeamDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeamDetailPage');
        this.tourneyData = this.appApi.getCurrentTourney();
        this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](this.tourneyData.games)
            .filter(function (g) { return g.team1Id === _this.team.id || g.team2Id === _this.team.id; })
            .map(function (g) {
            var isTeam1 = (g.team1Id == _this.team.id);
            var opponentName = isTeam1 ? g.team2 : g.team1;
            var scoreDisplay = _this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
            return {
                gameId: g.id,
                opponent: opponentName,
                time: Date.parse(g.time),
                location: g.location,
                locationUrl: g.locationUrl,
                scoreDisplay: scoreDisplay,
                homeAway: (isTeam1 ? "vs." : "at")
            };
        })
            .value();
        this.allGames = this.games;
        this.teamStanding = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.tourneyData.standings, { 'teamId': this.team.id });
        //this.userSettings.isFavoriteTeam(this.team.id).then(value => this.isFollowing = value);
        if (this.userSettings.isFavoriteTeam(this.team.id)) {
            this.isFollowing = true;
        }
    };
    TeamDetailPage.prototype.getScoreDisplay = function (isTeam1, team1Score, team2Score) {
        if (team1Score && team2Score) {
            var teamScore = (isTeam1 ? team1Score : team2Score);
            var opponentScore = (isTeam1 ? team2Score : team1Score);
            var winIndicator = teamScore > opponentScore ? "W:" : "L:";
            return winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    };
    TeamDetailPage.prototype.gameClicked = function ($event, game) {
        var sourceGame = this.tourneyData.games.find(function (g) { return g.id === game.gameId; });
        this.navCtrl.parent.parent.push(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* GamePage */], sourceGame);
    };
    TeamDetailPage.prototype.dateChanged = function () {
        var _this = this;
        if (this.useDateFilter) {
            this.games = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.allGames, function (g) { return __WEBPACK_IMPORTED_MODULE_3_moment__(g.time).isSame(_this.dateFilter, 'day'); });
        }
        else {
            this.games = this.allGames;
        }
    };
    TeamDetailPage.prototype.getScoreWorL = function (game) {
        return game.scoreDisplay ? game.scoreDisplay[0] : '';
    };
    TeamDetailPage.prototype.getScoreDisplayBadgeClass = function (game) {
        return game.scoreDisplay.indexOf('W:') === 0 ? 'badge-primary' : 'badge-danger';
    };
    TeamDetailPage.prototype.touggleFollow = function () {
        var _this = this;
        if (this.isFollowing) {
            var confirm_1 = this.alertController.create({
                title: 'Unfollow!',
                message: 'Are you sure you want to unfollow?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.isFollowing = false;
                            _this.userSettings.unfavoriteTeam(_this.team);
                            var toast = _this.toastController.create({
                                message: 'You have unfollowed this team.',
                                duration: 2000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    },
                    {
                        text: 'No'
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            this.isFollowing = true;
            this.userSettings.favoriteTeam(this.team, this.tourneyData.tournament.id, this.tourneyData.tournament.name);
        }
    };
    TeamDetailPage.prototype.refreshAll = function (refresher) {
        var _this = this;
        this.appApi.refreshCurrentTourney().subscribe(function () {
            refresher.complete();
            _this.ionViewDidLoad();
        });
    };
    return TeamDetailPage;
}());
TeamDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-team-detail',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-detail\team-detail.html"*/'<!--\n\n  Generated template for the TeamDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <ion-navbar></ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="refreshAll($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col *ngIf="teamStanding" col-6>\n\n          <h2>Record: {{teamStanding.wins}} - {{teamStanding.losses}}</h2>\n\n          <p>Coach: {{team.coach}}</p>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n          <button ion-button outline (click)="touggleFollow()" *ngIf="!isFollowing">\n\n              <ion-icon name="star" class="padding-right-3"></ion-icon>\n\n              Add Favorite\n\n          </button>\n\n          <button ion-button (click)="touggleFollow()" *ngIf="isFollowing">\n\n              <ion-icon name="star"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item>\n\n        <ion-label color="primary">Date Filter :</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY" \n\n                      pickerFormat="MM/DD/YYYY"\n\n                      [(ngModel)]="dateFilter"\n\n                      (ionChange)="dateChanged()"\n\n                      [(disabled)]="!useDateFilter">\n\n        </ion-datetime>\n\n        <ion-toggle [(ngModel)]="useDateFilter"\n\n                    (ionChange)="dateChanged()">\n\n        </ion-toggle>        \n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let game of games" (click)="gameClicked($event, game)">\n\n      <ion-grid>\n\n        <ion-row align-items-start>\n\n          <ion-col col-3 align-self-start>\n\n            <p>{{game.time | date:\'M/d/yy\'}}</p>\n\n            <p>{{game.time | date:\'shortTime\'}}</p>\n\n          </ion-col>\n\n          <ion-col col-6 align-self-start>\n\n            <p>{{game.homeAway}} {{game.opponent}}</p>\n\n            <p>{{game.location}}</p>\n\n          </ion-col>\n\n          <ion-col col-2 align-self-start>\n\n            <h4>{{game.scoreDisplay}}</h4>\n\n            <ion-badge [ngClass]="getScoreDisplayBadgeClass(game)">{{getScoreWorL(game)}}</ion-badge>\n\n          </ion-col>                    \n\n        </ion-row>\n\n        </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-detail\team-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__shared_shared__["c" /* UserSettings */]])
], TeamDetailPage);

//# sourceMappingURL=team-detail.js.map

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 274,
	"./af.js": 274,
	"./ar": 275,
	"./ar-dz": 276,
	"./ar-dz.js": 276,
	"./ar-kw": 277,
	"./ar-kw.js": 277,
	"./ar-ly": 278,
	"./ar-ly.js": 278,
	"./ar-ma": 279,
	"./ar-ma.js": 279,
	"./ar-sa": 280,
	"./ar-sa.js": 280,
	"./ar-tn": 281,
	"./ar-tn.js": 281,
	"./ar.js": 275,
	"./az": 282,
	"./az.js": 282,
	"./be": 283,
	"./be.js": 283,
	"./bg": 284,
	"./bg.js": 284,
	"./bn": 285,
	"./bn.js": 285,
	"./bo": 286,
	"./bo.js": 286,
	"./br": 287,
	"./br.js": 287,
	"./bs": 288,
	"./bs.js": 288,
	"./ca": 289,
	"./ca.js": 289,
	"./cs": 290,
	"./cs.js": 290,
	"./cv": 291,
	"./cv.js": 291,
	"./cy": 292,
	"./cy.js": 292,
	"./da": 293,
	"./da.js": 293,
	"./de": 294,
	"./de-at": 295,
	"./de-at.js": 295,
	"./de-ch": 296,
	"./de-ch.js": 296,
	"./de.js": 294,
	"./dv": 297,
	"./dv.js": 297,
	"./el": 298,
	"./el.js": 298,
	"./en-au": 299,
	"./en-au.js": 299,
	"./en-ca": 300,
	"./en-ca.js": 300,
	"./en-gb": 301,
	"./en-gb.js": 301,
	"./en-ie": 302,
	"./en-ie.js": 302,
	"./en-nz": 303,
	"./en-nz.js": 303,
	"./eo": 304,
	"./eo.js": 304,
	"./es": 305,
	"./es-do": 306,
	"./es-do.js": 306,
	"./es.js": 305,
	"./et": 307,
	"./et.js": 307,
	"./eu": 308,
	"./eu.js": 308,
	"./fa": 309,
	"./fa.js": 309,
	"./fi": 310,
	"./fi.js": 310,
	"./fo": 311,
	"./fo.js": 311,
	"./fr": 312,
	"./fr-ca": 313,
	"./fr-ca.js": 313,
	"./fr-ch": 314,
	"./fr-ch.js": 314,
	"./fr.js": 312,
	"./fy": 315,
	"./fy.js": 315,
	"./gd": 316,
	"./gd.js": 316,
	"./gl": 317,
	"./gl.js": 317,
	"./gom-latn": 318,
	"./gom-latn.js": 318,
	"./he": 319,
	"./he.js": 319,
	"./hi": 320,
	"./hi.js": 320,
	"./hr": 321,
	"./hr.js": 321,
	"./hu": 322,
	"./hu.js": 322,
	"./hy-am": 323,
	"./hy-am.js": 323,
	"./id": 324,
	"./id.js": 324,
	"./is": 325,
	"./is.js": 325,
	"./it": 326,
	"./it.js": 326,
	"./ja": 327,
	"./ja.js": 327,
	"./jv": 328,
	"./jv.js": 328,
	"./ka": 329,
	"./ka.js": 329,
	"./kk": 330,
	"./kk.js": 330,
	"./km": 331,
	"./km.js": 331,
	"./kn": 332,
	"./kn.js": 332,
	"./ko": 333,
	"./ko.js": 333,
	"./ky": 334,
	"./ky.js": 334,
	"./lb": 335,
	"./lb.js": 335,
	"./lo": 336,
	"./lo.js": 336,
	"./lt": 337,
	"./lt.js": 337,
	"./lv": 338,
	"./lv.js": 338,
	"./me": 339,
	"./me.js": 339,
	"./mi": 340,
	"./mi.js": 340,
	"./mk": 341,
	"./mk.js": 341,
	"./ml": 342,
	"./ml.js": 342,
	"./mr": 343,
	"./mr.js": 343,
	"./ms": 344,
	"./ms-my": 345,
	"./ms-my.js": 345,
	"./ms.js": 344,
	"./my": 346,
	"./my.js": 346,
	"./nb": 347,
	"./nb.js": 347,
	"./ne": 348,
	"./ne.js": 348,
	"./nl": 349,
	"./nl-be": 350,
	"./nl-be.js": 350,
	"./nl.js": 349,
	"./nn": 351,
	"./nn.js": 351,
	"./pa-in": 352,
	"./pa-in.js": 352,
	"./pl": 353,
	"./pl.js": 353,
	"./pt": 354,
	"./pt-br": 355,
	"./pt-br.js": 355,
	"./pt.js": 354,
	"./ro": 356,
	"./ro.js": 356,
	"./ru": 357,
	"./ru.js": 357,
	"./sd": 358,
	"./sd.js": 358,
	"./se": 359,
	"./se.js": 359,
	"./si": 360,
	"./si.js": 360,
	"./sk": 361,
	"./sk.js": 361,
	"./sl": 362,
	"./sl.js": 362,
	"./sq": 363,
	"./sq.js": 363,
	"./sr": 364,
	"./sr-cyrl": 365,
	"./sr-cyrl.js": 365,
	"./sr.js": 364,
	"./ss": 366,
	"./ss.js": 366,
	"./sv": 367,
	"./sv.js": 367,
	"./sw": 368,
	"./sw.js": 368,
	"./ta": 369,
	"./ta.js": 369,
	"./te": 370,
	"./te.js": 370,
	"./tet": 371,
	"./tet.js": 371,
	"./th": 372,
	"./th.js": 372,
	"./tl-ph": 373,
	"./tl-ph.js": 373,
	"./tlh": 374,
	"./tlh.js": 374,
	"./tr": 375,
	"./tr.js": 375,
	"./tzl": 376,
	"./tzl.js": 376,
	"./tzm": 377,
	"./tzm-latn": 378,
	"./tzm-latn.js": 378,
	"./tzm.js": 377,
	"./uk": 379,
	"./uk.js": 379,
	"./ur": 380,
	"./ur.js": 380,
	"./uz": 381,
	"./uz-latn": 382,
	"./uz-latn.js": 382,
	"./uz.js": 381,
	"./vi": 383,
	"./vi.js": 383,
	"./x-pseudo": 384,
	"./x-pseudo.js": 384,
	"./yo": 385,
	"./yo.js": 385,
	"./zh-cn": 386,
	"./zh-cn.js": 386,
	"./zh-hk": 387,
	"./zh-hk.js": 387,
	"./zh-tw": 388,
	"./zh-tw.js": 388
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 719;

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */



var TeamsPage = (function () {
    function TeamsPage(navCtrl, navParams, appApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.loadingController = loadingController;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TeamsPage');
        var selectedTourney = this.navParams.data;
        var loader = this.loadingController.create({
            content: "Fetching teams...",
            spinner: 'dots'
        });
        loader.present().then(function () {
            _this.appApi.getTournamentsData(selectedTourney.id).subscribe(function (data) {
                _this.allTeams = data.teams;
                _this.allTeamDivisions =
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](data.teams)
                        .groupBy('division')
                        .toPairs()
                        .map(function (item) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["zipObject"](['divisionName', 'divisionTeams'], item); })
                        .value();
                _this.teams = _this.allTeamDivisions;
                loader.dismiss();
            });
        });
    };
    TeamsPage.prototype.itemTapped = function ($event, team) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["f" /* TeamHomePage */], team);
    };
    TeamsPage.prototype.updateTeam = function () {
        var queryTextLower = this.queryText.toLowerCase();
        var filteredTeams = [];
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.allTeamDivisions, function (td) {
            var teams = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](td.divisionTeams, function (t) { return t.name.toLowerCase().includes(queryTextLower); });
            if (teams.length) {
                filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
            }
        });
        this.teams = filteredTeams;
    };
    return TeamsPage;
}());
TeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-teams',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\teams\teams.html"*/'<!--\n\n  Generated template for the TeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Teams</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar>\n\n    <ion-searchbar placeholder="Search"\n\n                    [(ngModel)]="queryText"\n\n                    (ionInput)="updateTeam()">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-group *ngFor="let division of teams">\n\n      <ion-item-divider color="secondary">{{division.divisionName}}</ion-item-divider>\n\n      <button ion-item *ngFor="let team of division.divisionTeams" (click)="itemTapped($event, team)">\n\n          {{team.name}}\n\n      </button>\n\n    </ion-item-group>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\teams\teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* AppApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], TeamsPage);

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


var StandingsPage = (function () {
    function StandingsPage(navCtrl, navParams, appApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
        this.divisionFilter = 'division';
        this.team = this.navParams.data;
    }
    StandingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StandingsPage');
        var tourneyData = this.appApi.getCurrentTourney();
        this.standings = tourneyData.standings;
        // this.allStandings = 
        //   _.chain(this.standings)
        //    .groupBy('division')
        //    .toPairs()
        //    .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
        //    .value();
        console.log('standings: ', this.standings);
        //  console.log('division standings: ', this.allStandings);
        this.allStandings = tourneyData.standings;
        this.filterDivision();
    };
    StandingsPage.prototype.filterDivision = function () {
        var _this = this;
        if (this.divisionFilter === 'all') {
            this.standings = this.allStandings;
        }
        else {
            this.standings = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.allStandings, function (s) { return s.division === _this.team.division; });
        }
    };
    StandingsPage.prototype.getHeader = function (record, recordIndex, records) {
        if (recordIndex === 0 || record.division !== records[recordIndex - 1].division) {
            return record.division;
        }
        return null;
    };
    return StandingsPage;
}());
StandingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-standings',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\standings\standings.html"*/'<!--\n\n  Generated template for the StandingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar></ion-navbar>\n\n\n\n    <ion-toolbar>\n\n      <ion-segment color="Primary" [(ngModel)]="divisionFilter" (ionChange)="filterDivision($event)">\n\n        <ion-segment-button value="division">\n\n          Division\n\n        </ion-segment-button>\n\n        <ion-segment-button value="all">\n\n          All\n\n        </ion-segment-button>        \n\n      </ion-segment>        \n\n    </ion-toolbar>      \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list [virtualScroll]="standings" [approxItemHeight]="\'132px\'" [headerFn]="getHeader">\n\n    <ion-item-divider color="secondary" *virtualHeader="let header">\n\n        {{header}}\n\n    </ion-item-divider>    \n\n    <ion-item *virtualItem="let team">\n\n          <ion-row>\n\n            <ion-col>\n\n              <h2 color="primary">{{team.teamName}}</h2>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h4>Wins</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>Losses</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>Games</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>SW</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>SL</h4>\n\n            </ion-col>\n\n            <!--<ion-col>\n\n              <h4>Diff</h4>\n\n            </ion-col>           -->\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h4>{{team.wins}}</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>{{team.losses}}</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>{{team.games}}</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>{{team.setWon}}</h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <h4>{{team.setLost}}</h4>\n\n            </ion-col>\n\n            <!--<ion-col>\n\n              <h4>{{team.pointsDiff}}</h4>\n\n            </ion-col>           -->\n\n          </ion-row>      \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\standings\standings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* AppApi */]])
], StandingsPage);

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

var TeamHomePage = (function () {
    function TeamHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDetailTab = __WEBPACK_IMPORTED_MODULE_2__pages__["e" /* TeamDetailPage */];
        this.standingsTab = __WEBPACK_IMPORTED_MODULE_2__pages__["d" /* StandingsPage */];
        this.team = this.navParams.data;
    }
    TeamHomePage.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    TeamHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamHomePage');
    };
    return TeamHomePage;
}());
TeamHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-team-home',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-home\team-home.html"*/'<!--\n\n  Generated template for the TeamHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{team.name}}</ion-title>\n\n    <ion-buttons end>    \n\n        <button ion-button icon-only (click)="goHome()">\n\n          <ion-icon name="home"></ion-icon>\n\n        </button>\n\n    </ion-buttons>    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-tabs>\n\n  <ion-tab tabTitle="Team" [root]="teamDetailTab" [rootParams]="team" tabIcon="tennisball"></ion-tab>\n\n  <ion-tab tabTitle="Standings" [root]="standingsTab"  [rootParams]="team" tabIcon="podium"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\team-home\team-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TeamHomePage);

//# sourceMappingURL=team-home.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AgmCoreModule } from 'angular2-google-maps/core';
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

var MapPage = (function () {
    function MapPage(navCtrl, navParams, appApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appApi = appApi;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        var game = this.navParams.data;
        var tourneyData = this.appApi.getCurrentTourney();
        var location = tourneyData.locations[game.locationId];
        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: game.location
        };
    };
    MapPage.prototype.getDirection = function () {
        window.location = 'geo:${this.map.lat},${this.map.lng};u=35';
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="map-page" *ngIf="map">\n\n    <ion-fab bottom left class="fab-map">\n\n      <button ion-fab (click)="getDirection()">\n\n        <ion-icon name="navigate"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    <sebm-google-map id="map" [latitude]="map.lat" [longitude]="map.lng" [zoom]="map.zoom">\n\n      <sebm-google-map-marker [latitude]="map.lat" [longitude]="map.lng">\n\n        <sebm-google-map-info-window>\n\n          <strong>{{map.markerLabel}}</strong>\n\n        </sebm-google-map-info-window>          \n\n      </sebm-google-map-marker>\n\n    </sebm-google-map>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tchowdhu\Documents\TestIonic\ping-pong-madness\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* AppApi */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ })

},[389]);
//# sourceMappingURL=main.js.map