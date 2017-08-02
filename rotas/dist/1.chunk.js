webpackJsonp([1],{

/***/ "../../../../../src/app/cursos/curso-detalhe/curso-detalhe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cursos/curso-detalhe/curso-detalhe.component.html":
/***/ (function(module, exports) {

module.exports = "<p> O ID do curso é: {{ id }} </p>\n<p> O curso selecionado é: {{ cursoSelecionado?.nome }}</p>\n<!-- não posso esquecer do operador Elvis, pois o curso pode não existir -->"

/***/ }),

/***/ "../../../../../src/app/cursos/curso-detalhe/curso-detalhe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cursos_service__ = __webpack_require__("../../../../../src/app/cursos/cursos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoDetalheComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CursoDetalheComponent = (function () {
    function CursoDetalheComponent(_activatedRoute, _cursosService, _router) {
        // a boa prática é usar o código do OnInit e Destroy.
        //this.id = this._activatedRoute.snapshot.params['id'];
        // Na linha acima, como se trata de um objeto e nem sempre o id esta dentro de value, uso a notação []
        // console.log(this._activatedRoute);
        this._activatedRoute = _activatedRoute;
        this._cursosService = _cursosService;
        this._router = _router;
    }
    CursoDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        //quero me inscrever no params pra escutar o que está acontecendo com ele
        this.inscription = this._activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.cursoSelecionado = _this._cursosService.getCurso(_this.id);
            if (_this.cursoSelecionado == null) {
                _this._router.navigate(['/cursos/naoEncontrado']);
            }
        });
    };
    CursoDetalheComponent.prototype.ngOnDestroy = function () {
        this.inscription.unsubscribe();
    };
    return CursoDetalheComponent;
}());
CursoDetalheComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'app-curso-detalhe',
        template: __webpack_require__("../../../../../src/app/cursos/curso-detalhe/curso-detalhe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cursos/curso-detalhe/curso-detalhe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__cursos_service__["a" /* CursosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__cursos_service__["a" /* CursosService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CursoDetalheComponent);

var _a, _b, _c;
//# sourceMappingURL=curso-detalhe.component.js.map

/***/ }),

/***/ "../../../../../src/app/cursos/curso-nao-encontrado/curso-nao-encontrado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cursos/curso-nao-encontrado/curso-nao-encontrado.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  curso-nao-encontrado works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/cursos/curso-nao-encontrado/curso-nao-encontrado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoNaoEncontradoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CursoNaoEncontradoComponent = (function () {
    function CursoNaoEncontradoComponent() {
    }
    CursoNaoEncontradoComponent.prototype.ngOnInit = function () {
    };
    return CursoNaoEncontradoComponent;
}());
CursoNaoEncontradoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-curso-nao-encontrado',
        template: __webpack_require__("../../../../../src/app/cursos/curso-nao-encontrado/curso-nao-encontrado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cursos/curso-nao-encontrado/curso-nao-encontrado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CursoNaoEncontradoComponent);

//# sourceMappingURL=curso-nao-encontrado.component.js.map

/***/ }),

/***/ "../../../../../src/app/cursos/cursos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cursos/cursos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    Lista de Cursos\n</p>\n\n\n<p>Página: {{ pagina }}</p>\n\n<div class=\"collection\">\n    <a class=\"collection-item\" *ngFor=\"let curso of cursos\" [routerLink]=\"['/cursos',curso.id]\"> \n    {{ curso.nome }}\n  </a>\n</div>\n<button class=\"waves-effect waves-light btn green\" (click)=\"proximaPagina()\">Próxima página</button>\n\n "

/***/ }),

/***/ "../../../../../src/app/cursos/cursos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cursos_service__ = __webpack_require__("../../../../../src/app/cursos/cursos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CursosComponent = (function () {
    function CursosComponent(_cursosService, _activatedRoute, _router // Esse router é para usar o navigate e fazer a navegação pelas páginas
    ) {
        this._cursosService = _cursosService;
        this._activatedRoute = _activatedRoute;
        this._router = _router; // Esse router é para usar o navigate e fazer a navegação pelas páginas
        this.cursos = [];
    }
    CursosComponent.prototype.proximaPagina = function () {
        this.pagina++;
        this._router.navigate(['/cursos'], { queryParams: { 'pagina': this.pagina } });
    };
    CursosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cursos = this._cursosService.getCursos();
        // console.log(this._activatedRoute);
        this.inscricao = this._activatedRoute.queryParams.subscribe(function (nomeQueEuQuiser) { return _this.pagina = nomeQueEuQuiser['pagina']; });
    };
    CursosComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return CursosComponent;
}());
CursosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
        selector: 'app-cursos',
        template: __webpack_require__("../../../../../src/app/cursos/cursos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cursos/cursos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cursos_service__["a" /* CursosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cursos_service__["a" /* CursosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] // Esse router é para usar o navigate e fazer a navegação pelas páginas
         !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] // Esse router é para usar o navigate e fazer a navegação pelas páginas
        ) === "function" && _c || Object])
], CursosComponent);

var _a, _b, _c;
//# sourceMappingURL=cursos.component.js.map

/***/ }),

/***/ "../../../../../src/app/cursos/cursos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_cursos_cursos_service__ = __webpack_require__("../../../../../src/app/cursos/cursos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_cursos_cursos_component__ = __webpack_require__("../../../../../src/app/cursos/cursos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__curso_detalhe_curso_detalhe_component__ = __webpack_require__("../../../../../src/app/cursos/curso-detalhe/curso-detalhe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__curso_nao_encontrado_curso_nao_encontrado_component__ = __webpack_require__("../../../../../src/app/cursos/curso-nao-encontrado/curso-nao-encontrado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_cursos_cursos_routing_module__ = __webpack_require__("../../../../../src/app/cursos/cursos.routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosModule", function() { return CursosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { RouterModule } from "@angular/router";  -> removi porque estou recebendo do 
// CursosRoutingModule

var CursosModule = (function () {
    function CursosModule() {
    }
    return CursosModule;
}());
CursosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3_app_cursos_cursos_component__["a" /* CursosComponent */],
            __WEBPACK_IMPORTED_MODULE_4__curso_detalhe_curso_detalhe_component__["a" /* CursoDetalheComponent */],
            __WEBPACK_IMPORTED_MODULE_5__curso_nao_encontrado_curso_nao_encontrado_component__["a" /* CursoNaoEncontradoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_cursos_cursos_routing_module__["a" /* CursosRoutingModule */]
            //RouterModule
        ],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_cursos_cursos_service__["a" /* CursosService */]]
    })
], CursosModule);

//# sourceMappingURL=cursos.module.js.map

/***/ }),

/***/ "../../../../../src/app/cursos/cursos.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursos_component__ = __webpack_require__("../../../../../src/app/cursos/cursos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curso_nao_encontrado_curso_nao_encontrado_component__ = __webpack_require__("../../../../../src/app/cursos/curso-nao-encontrado/curso-nao-encontrado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__curso_detalhe_curso_detalhe_component__ = __webpack_require__("../../../../../src/app/cursos/curso-detalhe/curso-detalhe.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var cursosRoutes = [
    //    {  path: 'cursos', component: CursosComponent },
    // Vou alterar a linha acima por conta do lazy loading
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__cursos_component__["a" /* CursosComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__curso_detalhe_curso_detalhe_component__["a" /* CursoDetalheComponent */] },
    { path: 'naoEncontrado', component: __WEBPACK_IMPORTED_MODULE_3__curso_nao_encontrado_curso_nao_encontrado_component__["a" /* CursoNaoEncontradoComponent */] }
];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
var CursosRoutingModule = (function () {
    function CursosRoutingModule() {
    }
    return CursosRoutingModule;
}());
CursosRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(cursosRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CursosRoutingModule);

//# sourceMappingURL=cursos.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/cursos/cursos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CursosService = (function () {
    function CursosService() {
    }
    CursosService.prototype.getCursos = function () {
        return [
            { id: 1, nome: 'Angular 2' },
            { id: 2, nome: 'Mongo DB' },
            { id: 3, nome: 'Express JS' }
        ];
    };
    CursosService.prototype.getCurso = function (id) {
        /* return this.getCursos().filter(
          (valor) => valor.id == id
        ); */
        // Essa função acima está retornando um objeto, e não um elemento de um array
        var cursos = this.getCursos();
        for (var i = 0; i < cursos.length; i++) {
            if (cursos[i].id == id)
                return cursos[i];
        }
        return null;
        // nesse segundo caso ela está retornando direto o elemento do Array
    };
    return CursosService;
}());
CursosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CursosService);

//# sourceMappingURL=cursos.service.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map