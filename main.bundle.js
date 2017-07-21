webpackJsonp([1,4],{

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(699);


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_event_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventComponent = (function () {
    function CreateEventComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-create-event',
            template: __webpack_require__(965),
            styles: [__webpack_require__(958)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CreateEventComponent);
    return CreateEventComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/create-event.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-error-404',
            template: __webpack_require__(966),
            styles: [__webpack_require__(959)]
        }), 
        __metadata('design:paramtypes', [])
    ], Error404Component);
    return Error404Component;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/error-404.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvent(+this.route.snapshot.params['id']).subscribe(function (event) {
            _this.event = event;
        });
    };
    EventDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-event-details',
            template: __webpack_require__(968),
            styles: [__webpack_require__(961)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], EventDetailsComponent);
    return EventDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event-details.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_event_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventResolver = (function () {
    function EventResolver(eventService) {
        this.eventService = eventService;
    }
    /**
     * resolve
     */
    EventResolver.prototype.resolve = function (route) {
        // return this.eventService.getEvent(+route.params['id']);
    };
    EventResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_event_service__["a" /* EventService */]) === 'function' && _a) || Object])
    ], EventResolver);
    return EventResolver;
    var _a;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event-resolver.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_event_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventListResolver = (function () {
    function EventListResolver(eventService) {
        this.eventService = eventService;
    }
    /**
     * resolve
     */
    EventListResolver.prototype.resolve = function () {
        return this.eventService.getEvents();
    };
    EventListResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_event_service__["a" /* EventService */]) === 'function' && _a) || Object])
    ], EventListResolver);
    return EventListResolver;
    var _a;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event-list-resolver.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventListComponent = (function () {
    function EventListComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.events = this.route.snapshot.data['events'];
    };
    EventListComponent.prototype.handleEventClicked = function (data) {
        console.log(data);
    };
    EventListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-event-list',
            template: __webpack_require__(969),
            styles: [__webpack_require__(962)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], EventListComponent);
    return EventListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event-list.component.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 698;


/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(857);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.hostUrl = 'https://laravel-rest52.dev'; // URL to web API
        this.basePath = '/api/v1'; // URL to web API
    }
    EventService.prototype.getEvents = function () {
        return this.http.get("" + this.hostUrl + this.basePath + "/event")
            .map(function (response) {
            var body = response.json();
            return body['events'] || {};
        })
            .catch(this.handleError);
    };
    EventService.prototype.getEvent = function (id) {
        return this.http.get("" + this.hostUrl + this.basePath + "/event/" + id).map(function (response) {
            var body = response.json();
            return body.event;
        }).catch(this.handleError);
    };
    EventService.prototype.saveEvent = function (event) {
        // TODO
    };
    EventService.prototype.handleError = function (error) {
        console.log(error);
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(errMsg);
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EventService);
    return EventService;
    var _a;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event.service.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(964),
            styles: [__webpack_require__(957)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/app.component.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Must export the config
var firebaseConfig = {
    apiKey: "AIzaSyDfe_6ZnNOqYNj_wI94yb3auon-OElc98g",
    authDomain: "events-app-aab92.firebaseapp.com",
    databaseURL: "https://events-app-aab92.firebaseio.com",
    projectId: "events-app-aab92",
    storageBucket: "events-app-aab92.appspot.com",
    messagingSenderId: "412783532389"
};
var AppConfig = (function () {
    function AppConfig(http) {
        this.http = http;
        this.config = null;
        this.env = null;
    }
    /**
     * Use to get the data found in the second file (config file)
     */
    AppConfig.prototype.getConfig = function (key) {
        return this.config[key];
    };
    /**
     * Use to get the data found in the first file (env file)
     */
    AppConfig.prototype.getEnv = function (key) {
        return this.env[key];
    };
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    AppConfig.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('env.json').map(function (res) { return res.json(); }).catch(function (error) {
                console.log('Configuration file "env.json" could not be read');
                resolve(true);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
            }).subscribe(function (envResponse) {
                _this.env = envResponse;
                var request = null;
                switch (envResponse['env']) {
                    case 'production':
                        {
                            request = _this.http.get('config.' + envResponse['env'] + '.json');
                        }
                        break;
                    case 'development':
                        {
                            request = _this.http.get('config.' + envResponse['env'] + '.json');
                        }
                        break;
                    case 'default':
                        {
                            console.error('Environment file is not set or invalid');
                            resolve(true);
                        }
                        break;
                }
                if (request) {
                    request
                        .map(function (res) { return res.json(); })
                        .catch(function (error) {
                        console.error('Error reading ' + envResponse['env'] + ' configuration file');
                        resolve(error);
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
                    })
                        .subscribe(function (responseData) {
                        _this.config = responseData;
                        resolve(true);
                    });
                }
                else {
                    console.error('Env config file "env.json" is not valid');
                    resolve(true);
                }
            });
        });
    };
    AppConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AppConfig);
    return AppConfig;
    var _a;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/app.config.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event_list_event_list_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__event_card_event_card_component__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__event_details_event_details_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_event_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__create_event_create_event_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__error_404_error_404_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_event_details_event_route_activator_service__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_event_list_event_list_resolver_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_event_details_event_resolver_component__ = __webpack_require__(480);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__event_list_event_list_component__["a" /* EventListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__event_card_event_card_component__["a" /* EventCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__event_details_event_details_component__["a" /* EventDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__create_event_create_event_component__["a" /* CreateEventComponent */],
                __WEBPACK_IMPORTED_MODULE_18__error_404_error_404_component__["a" /* Error404Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_19_app_event_details_event_route_activator_service__["a" /* EventRouteActivator */],
                __WEBPACK_IMPORTED_MODULE_20_app_event_list_event_list_resolver_component__["a" /* EventListResolver */],
                __WEBPACK_IMPORTED_MODULE_21_app_event_details_event_resolver_component__["a" /* EventResolver */],
                __WEBPACK_IMPORTED_MODULE_6__app_config__["b" /* AppConfig */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/app.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_list_event_list_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_details_event_details_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_create_event_create_event_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_error_404_error_404_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_event_list_event_list_resolver_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_event_details_event_resolver_component__ = __webpack_require__(480);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });






var appRoutes = [
    { path: 'events/new', component: __WEBPACK_IMPORTED_MODULE_2_app_create_event_create_event_component__["a" /* CreateEventComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_0__event_list_event_list_component__["a" /* EventListComponent */], resolve: { events: __WEBPACK_IMPORTED_MODULE_4_app_event_list_event_list_resolver_component__["a" /* EventListResolver */] } },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_3_app_error_404_error_404_component__["a" /* Error404Component */] },
    { path: 'events/:id', component: __WEBPACK_IMPORTED_MODULE_1__event_details_event_details_component__["a" /* EventDetailsComponent */], resolve: { event: __WEBPACK_IMPORTED_MODULE_5_app_event_details_event_resolver_component__["a" /* EventResolver */] } },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/app.routes.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_event_model__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_event_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_event_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventCardComponent = (function () {
    function EventCardComponent() {
        this.eventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    EventCardComponent.prototype.handleClickMe = function () {
        this.eventClick.emit('clicked');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_event_model__["IEvent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_event_model__["IEvent"]) === 'function' && _a) || Object)
    ], EventCardComponent.prototype, "selectedEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], EventCardComponent.prototype, "eventClick", void 0);
    EventCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-event-card',
            template: __webpack_require__(967),
            styles: [__webpack_require__(960)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventCardComponent);
    return EventCardComponent;
    var _a;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event-card.component.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRouteActivator; });
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
 * EventRouteActivator
 */
var EventRouteActivator = (function () {
    function EventRouteActivator(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouteActivator.prototype.canActivate = function (route) {
        var eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    };
    EventRouteActivator = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], EventRouteActivator);
    return EventRouteActivator;
    var _a, _b;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event-route-activator.service.js.map

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/event.model.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(970),
            styles: [__webpack_require__(963)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/navbar.component.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/xolisa/PersonalDevelopment/events-app/src/environment.js.map

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 497,
	"./af.js": 497,
	"./ar": 503,
	"./ar-dz": 498,
	"./ar-dz.js": 498,
	"./ar-ly": 499,
	"./ar-ly.js": 499,
	"./ar-ma": 500,
	"./ar-ma.js": 500,
	"./ar-sa": 501,
	"./ar-sa.js": 501,
	"./ar-tn": 502,
	"./ar-tn.js": 502,
	"./ar.js": 503,
	"./az": 504,
	"./az.js": 504,
	"./be": 505,
	"./be.js": 505,
	"./bg": 506,
	"./bg.js": 506,
	"./bn": 507,
	"./bn.js": 507,
	"./bo": 508,
	"./bo.js": 508,
	"./br": 509,
	"./br.js": 509,
	"./bs": 510,
	"./bs.js": 510,
	"./ca": 511,
	"./ca.js": 511,
	"./cs": 512,
	"./cs.js": 512,
	"./cv": 513,
	"./cv.js": 513,
	"./cy": 514,
	"./cy.js": 514,
	"./da": 515,
	"./da.js": 515,
	"./de": 517,
	"./de-at": 516,
	"./de-at.js": 516,
	"./de.js": 517,
	"./dv": 518,
	"./dv.js": 518,
	"./el": 519,
	"./el.js": 519,
	"./en-au": 520,
	"./en-au.js": 520,
	"./en-ca": 521,
	"./en-ca.js": 521,
	"./en-gb": 522,
	"./en-gb.js": 522,
	"./en-ie": 523,
	"./en-ie.js": 523,
	"./en-nz": 524,
	"./en-nz.js": 524,
	"./eo": 525,
	"./eo.js": 525,
	"./es": 527,
	"./es-do": 526,
	"./es-do.js": 526,
	"./es.js": 527,
	"./et": 528,
	"./et.js": 528,
	"./eu": 529,
	"./eu.js": 529,
	"./fa": 530,
	"./fa.js": 530,
	"./fi": 531,
	"./fi.js": 531,
	"./fo": 532,
	"./fo.js": 532,
	"./fr": 535,
	"./fr-ca": 533,
	"./fr-ca.js": 533,
	"./fr-ch": 534,
	"./fr-ch.js": 534,
	"./fr.js": 535,
	"./fy": 536,
	"./fy.js": 536,
	"./gd": 537,
	"./gd.js": 537,
	"./gl": 538,
	"./gl.js": 538,
	"./he": 539,
	"./he.js": 539,
	"./hi": 540,
	"./hi.js": 540,
	"./hr": 541,
	"./hr.js": 541,
	"./hu": 542,
	"./hu.js": 542,
	"./hy-am": 543,
	"./hy-am.js": 543,
	"./id": 544,
	"./id.js": 544,
	"./is": 545,
	"./is.js": 545,
	"./it": 546,
	"./it.js": 546,
	"./ja": 547,
	"./ja.js": 547,
	"./jv": 548,
	"./jv.js": 548,
	"./ka": 549,
	"./ka.js": 549,
	"./kk": 550,
	"./kk.js": 550,
	"./km": 551,
	"./km.js": 551,
	"./ko": 552,
	"./ko.js": 552,
	"./ky": 553,
	"./ky.js": 553,
	"./lb": 554,
	"./lb.js": 554,
	"./lo": 555,
	"./lo.js": 555,
	"./lt": 556,
	"./lt.js": 556,
	"./lv": 557,
	"./lv.js": 557,
	"./me": 558,
	"./me.js": 558,
	"./mi": 559,
	"./mi.js": 559,
	"./mk": 560,
	"./mk.js": 560,
	"./ml": 561,
	"./ml.js": 561,
	"./mr": 562,
	"./mr.js": 562,
	"./ms": 564,
	"./ms-my": 563,
	"./ms-my.js": 563,
	"./ms.js": 564,
	"./my": 565,
	"./my.js": 565,
	"./nb": 566,
	"./nb.js": 566,
	"./ne": 567,
	"./ne.js": 567,
	"./nl": 569,
	"./nl-be": 568,
	"./nl-be.js": 568,
	"./nl.js": 569,
	"./nn": 570,
	"./nn.js": 570,
	"./pa-in": 571,
	"./pa-in.js": 571,
	"./pl": 572,
	"./pl.js": 572,
	"./pt": 574,
	"./pt-br": 573,
	"./pt-br.js": 573,
	"./pt.js": 574,
	"./ro": 575,
	"./ro.js": 575,
	"./ru": 576,
	"./ru.js": 576,
	"./se": 577,
	"./se.js": 577,
	"./si": 578,
	"./si.js": 578,
	"./sk": 579,
	"./sk.js": 579,
	"./sl": 580,
	"./sl.js": 580,
	"./sq": 581,
	"./sq.js": 581,
	"./sr": 583,
	"./sr-cyrl": 582,
	"./sr-cyrl.js": 582,
	"./sr.js": 583,
	"./ss": 584,
	"./ss.js": 584,
	"./sv": 585,
	"./sv.js": 585,
	"./sw": 586,
	"./sw.js": 586,
	"./ta": 587,
	"./ta.js": 587,
	"./te": 588,
	"./te.js": 588,
	"./tet": 589,
	"./tet.js": 589,
	"./th": 590,
	"./th.js": 590,
	"./tl-ph": 591,
	"./tl-ph.js": 591,
	"./tlh": 592,
	"./tlh.js": 592,
	"./tr": 593,
	"./tr.js": 593,
	"./tzl": 594,
	"./tzl.js": 594,
	"./tzm": 596,
	"./tzm-latn": 595,
	"./tzm-latn.js": 595,
	"./tzm.js": 596,
	"./uk": 597,
	"./uk.js": 597,
	"./uz": 598,
	"./uz.js": 598,
	"./vi": 599,
	"./vi.js": 599,
	"./x-pseudo": 600,
	"./x-pseudo.js": 600,
	"./yo": 601,
	"./yo.js": 601,
	"./zh-cn": 602,
	"./zh-cn.js": 602,
	"./zh-hk": 603,
	"./zh-hk.js": 603,
	"./zh-tw": 604,
	"./zh-tw.js": 604
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 933;


/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = ".event-form {\n  width: 500px;\n}\n\n.event-full-width {\n  width: 100%;\n}"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = ".errorMessage { margin-top: 150px;\nfont-size: 170px;\ntext-align: center;\n}"

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 400px;\n}\n\n.example-header-image {\n  background-size: cover;\n}"

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = ".container { padding-left: 20px; padding-right: 20px; }\n.evem-image { height: 100px; }"

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<br/>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 965:
/***/ (function(module, exports) {

module.exports = "<h1>New Event</h1>\n<hr>\n<div >\n  <form #newEventForm=\"ngForm\" class=\"event-form\" (ngSubmit)=\"saveEvent(newEventForm.value)\" autocomplete=\"off\" novalidate>\n    <md-input-container>\n      <input mdInput (ngModel)=\"name\" name=\"name\" required id=\"name\" placeholder=\"Event title\" >\n    </md-input-container>\n    <md-input-container>\n      <input mdInput (ngModel)=\"date\" name=\"date\" required id=\"eventDate\" type=\"date\" placeholder=\"Event Date (dd/mm/yyyy)\" >\n    </md-input-container>\n     <md-input-container>\n      <input mdInput (ngModel)=\"time\" name=\"time\" required id=\"eventTime\" type=\"time\" placeholder=\"Event Time\" >\n    </md-input-container>\n     <md-input-container>\n      <input mdInput (ngModel)=\"entryFee\" name=\"entryFee\" required id=\"entryFee\" type=\"text\" type=\"number\" placeholder=\"event entryFee...\" >\n    </md-input-container>\n\n    <div ngModelGroup=\"location\">\n      <div class=\"form-group\">\n        <label for=\"address\">Event Location:</label>\n        <input (ngModel)=\"address\" name=\"address\" id=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address of event...\" />\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <input (ngModel)=\"city\" name=\"city\" id=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City...\" />\n        </div>\n        <div class=\"col-md-6\" >\n          <input (ngModel)=\"country\" name=\"country\" id=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country...\" />\n        </div>\n      </div>\n    </div>\n    \n\n    <div class=\"form-group\">\n      <label for=\"onlineUrl\">Online Url:</label>\n      <input (ngModel)=\"onlineUrl\" name=\"onlineUrl\" id=\"onlineUrl\" type=\"text\" class=\"form-control\" placeholder=\"Online Url...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'alert alert-danger': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\n      <label for=\"imageUrl\">Image:</label>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required\">Required</em>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern\">Must be a png or jpg url</em>\n      <input (ngModel)=\"imageUrl\" name=\"imageUrl\" required  id=\"imageUrl\" type=\"text\" class=\"form-control\" placeholder=\"url of image...\" />\n      <img [src]=\"newEventForm.controls.imageUrl.value\" *ngIf=\"newEventForm.controls.imageUrl?.valid\"/>\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" [disabled]=\"newEventForm.invalid\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ 966:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"errorMessage\">404'd</h1>"

/***/ }),

/***/ 967:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedEvent\" class=\"example-card\" color=\"primary\" [routerLink]=\"['/events', selectedEvent.id]\">\n  <h2>{{selectedEvent.title}} details!</h2>\n  <div><label>id: </label>{{selectedEvent.id}}</div>\n  <div>\n    <label>title: </label>\n    <input [(ngModel)]=\"selectedEvent.title\" placeholder=\"title\"/>\n    <pre>Date: {{selectedEvent.time | date:'yMMMd'}}</pre>\n    <pre>Time: {{selectedEvent.time | date:'shortTime'}}</pre>\n    <pre>Venue: {{selectedEvent.location}}</pre>\n    <pre>Entry Fee: R{{selectedEvent.price}}</pre>\n    <p>\n      {{selectedEvent.extraDetails}}\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 968:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img [src]=\"event?.imageUrl\" [alt]=\"event?.title\" class=\"event.image\">\n\n  <div class=\"row\">\n    <div class=\"col-md-11\">\n      <h2>{{event?.title}}</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div><strong>Date: </strong>{{event?.time | date:'yMMMd'}}</div>\n      <div><strong>Time: </strong>{{event?.time | date:'shortTime'}}</div>\n      <div><strong>Venue: </strong>{{event?.venue}}</div>\n      <div><strong>Entry Fee: </strong>R{{event?.price}}</div>\n    </div>\n    <div class=\"col-md-6\">\n      <address>\n        <strong>Address:</strong> <br/>\n        {{event?.location?.address}}\n        {{event?.location?.city}}, {{event?.location?.country}}\n      </address>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 969:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"list-group\" align=\"center\">\n    <br/>\n    <br/>\n    <div *ngFor=\"let event of events\">\n        <app-event-card [selectedEvent]=event (eventClick)=\"handleEventClicked($event)\"></app-event-card>\n        <br/>\n    </div>\n</div>\n"

/***/ }),

/***/ 970:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>Event App</span>\n \n    <span class=\"example-spacer\"></span>\n      <md-chip-list  class=\"mat-chip-list-stacked\">\n      <md-chip [routerLink]=\"['/events']\">All Events</md-chip>\n      <md-chip [routerLink]=\"['/events/new']\">Create Event</md-chip>\n    </md-chip-list>\n\n</md-toolbar>"

/***/ })

},[1219]);
//# sourceMappingURL=main.bundle.map
