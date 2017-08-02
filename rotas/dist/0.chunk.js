webpackJsonp([0],{

/***/ "../../../../../src/app/alunos/aluno-detalhe/aluno-detalhe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/aluno-detalhe/aluno-detalhe.component.html":
/***/ (function(module, exports) {

module.exports = "<h4> Detalhes do aluno: </h4>\n\n\n\n<p>Nome do Aluno:{{ aluno.nome }} </p>\n<p>Id do Aluno: {{ aluno.id }}</p>\n<p>Email do Aluno:{{ aluno.email }} </p>\n\n<br>\n\n<button class=\"waves-effect waves-light btn green\" (click)=editarAluno()>Editar</button>\n\n\n\n<!-- Logo abaixo vamos colocar as informacoes em um formulario -->"

/***/ }),

/***/ "../../../../../src/app/alunos/aluno-detalhe/aluno-detalhe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_alunos_alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoDetalheComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunoDetalheComponent = (function () {
    function AlunoDetalheComponent(_activatedRoute, //i ActivatedRoute serve para pegar os dados da rota ativa
        _router, // o router serve para usar o navigate
        //com o activated route, eu me inscrevo nos parâmetros da rota e obtenho o que quiser
        _alunosService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._alunosService = _alunosService;
    }
    AlunoDetalheComponent.prototype.editarAluno = function () {
        //let aluno = this.aluno;
        this._router.navigate(['/alunos', this.aluno.id, 'edit']);
    };
    AlunoDetalheComponent.prototype.ngOnInit = function () {
        //inscrição no activated route para obter o id, que é o que a rota contém
        // não consigo pegar coisas além do id, q está na rota
        var _this = this;
        //console.log(this._activatedRoute);
        /* Esse código abaixo foi jogado pra dentro do resolver
          this.inscricao = this._activatedRoute.params.subscribe(
            (valor) => {
              let idAluno = valor['id'];
              this.aluno = this._alunosService.getAluno(idAluno);
            }
          ); */
        // E agora eu chamo o resolver...
        console.log('O NgOnInit do Aluno-detalhe.component.ts está sendo executado!');
        this.inscricao = this._activatedRoute.data.subscribe(function (informacao) {
            console.log('Recebendo o Objeto Aluno do Resolver!');
            // observemos que informacao retorna um objeto do tipo aluno, então..
            _this.aluno = informacao.aluno;
            // IMPORTANTE: Esse segundo informacao.aluno, é exatamente o retorno do resolver 
            // quando a guarda de rotas for chamada em alunos.routing.module
            // resolve: { aluno: AlunoDetalheResolver } -> linha 34 do arquivo de rotas
        });
    };
    AlunoDetalheComponent.prototype.ngOnDestroy = function () {
        //desinscrição no activated route
        this.inscricao.unsubscribe();
    };
    return AlunoDetalheComponent;
}());
AlunoDetalheComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-aluno-detalhe',
        template: __webpack_require__("../../../../../src/app/alunos/aluno-detalhe/aluno-detalhe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alunos/aluno-detalhe/aluno-detalhe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_alunos_alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_alunos_alunos_service__["a" /* AlunosService */]) === "function" && _c || Object])
], AlunoDetalheComponent);

var _a, _b, _c;
//# sourceMappingURL=aluno-detalhe.component.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/aluno-form/aluno-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/aluno-form/aluno-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h4>Criar/Editar Cadastro</h4>\n    <div class=\"col s6\">\n        <div class=\"row\">\n            <div class=\"input-field col s6\">\n                <input disabled placeholder=\"#\" id=\"idAluno\" type=\"text\" class=\"validate\" [(ngModel)]=\"aluno.id\">\n                <label for=\"idAluno\" class=\"active\">Id do Aluno</label>\n            </div>\n\n        </div>\n        <!-- o angular tem suporte a form pra verificar se ele mudou, mas no momento vamos fazer manualmente -->\n        <div class=\"row\">\n            <div class=\"input-field col s6\">\n                <input id=\"nome\" type=\"text\" class=\"validate\" [(ngModel)]=\"aluno.nome\" (input)=\"onInput()\">\n                <label for=\"nome\" class=\"active\">Nome</label>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"input-field col s6\">\n                <input id=\"email\" type=\"email\" class=\"validate\" [(ngModel)]=\"aluno.email\">\n                <label for=\"email\" class=\"active\">Email</label>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/alunos/aluno-form/aluno-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_alunos_alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunoFormComponent = (function () {
    function AlunoFormComponent(_activatedRoute, //i ActivatedRoute serve para pegar os dados da rota ativa
        _router, // o router serve para usar o navigate
        //com o activated route, eu me inscrevo nos parâmetros da rota e obtenho o que quiser
        alunosService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.alunosService = alunosService;
        this.formMudou = false;
    }
    AlunoFormComponent.prototype.ngOnInit = function () {
        //inscrição no activated route para obter o id, que é o que a rota contém
        // não consigo pegar coisas além do id, q está na rota
        var _this = this;
        //console.log(this._activatedRoute);
        this.inscricao = this._activatedRoute.params.subscribe(function (valor) {
            var idAluno = valor['id'];
            _this.aluno = _this.alunosService.getAluno(idAluno);
        });
    };
    AlunoFormComponent.prototype.ngOnDestroy = function () {
        //desinscrição no activated route
        this.inscricao.unsubscribe();
    };
    AlunoFormComponent.prototype.onInput = function () {
        this.formMudou = true;
        console.log('mudou');
    };
    AlunoFormComponent.prototype.podeDesativar = function () {
        if (this.formMudou) {
            return confirm('Tem certeza que deseja sair dessa página?');
            //se o usuário clicar em OK, retorna TRUE; caso contrário retorna FALSE
        }
    };
    return AlunoFormComponent;
}());
AlunoFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-aluno-form',
        template: __webpack_require__("../../../../../src/app/alunos/aluno-form/aluno-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alunos/aluno-form/aluno-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_alunos_alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_alunos_alunos_service__["a" /* AlunosService */]) === "function" && _c || Object])
], AlunoFormComponent);

var _a, _b, _c;
//# sourceMappingURL=aluno-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- aqui começa o grid -->\n    <div class=\"col s5\">\n        <ul class=\"collection with-header\">\n            <li class=\"collection-header\">\n                <h4>Lista de Alunos</h4>\n            </li>\n            <li class=\"collection-item\" *ngFor=\"let aluno of alunos\" [routerLink]=\"[aluno.id]\">\n                <div>{{aluno.nome}}<a [routerLink]=\"[aluno.id]\" class=\"secondary-content \"><i class=\"material-icons \">send</i></a></div>\n            </li>\n\n            <!-- no caso do routerlink acima, coloquei link tanto no li como no ícone :) -->\n            <!-- [routerLink]=\"['/alunos',aluno.id] como já estou dentro de alunos e estou usando rotas filhores, não\n            preciso colocar o caminho completo -->\n\n        </ul>\n    </div>\n    <!--\n    <div class=\"col s1\">\n\n    </div>\n\n-->\n\n    <div class=\"row s6\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_alunos_alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlunosComponent = (function () {
    function AlunosComponent(_alunosService) {
        this._alunosService = _alunosService;
        this.alunos = [];
    }
    AlunosComponent.prototype.ngOnInit = function () {
        this.alunos = this._alunosService.getAlunos();
        // console.log(this.alunos);
    };
    return AlunosComponent;
}());
AlunosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-alunos',
        template: __webpack_require__("../../../../../src/app/alunos/alunos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alunos/alunos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_alunos_alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_alunos_alunos_service__["a" /* AlunosService */]) === "function" && _a || Object])
], AlunosComponent);

var _a;
//# sourceMappingURL=alunos.component.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_alunos_deactivate_guard__ = __webpack_require__("../../../../../src/app/guards/alunos-deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_alunos_alunos_component__ = __webpack_require__("../../../../../src/app/alunos/alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aluno_form_aluno_form_component__ = __webpack_require__("../../../../../src/app/alunos/aluno-form/aluno-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aluno_detalhe_aluno_detalhe_component__ = __webpack_require__("../../../../../src/app/alunos/aluno-detalhe/aluno-detalhe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_alunos_alunos_routing_module__ = __webpack_require__("../../../../../src/app/alunos/alunos.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_alunos_alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_alunos_guards_aluno_detalhe_resolver__ = __webpack_require__("../../../../../src/app/alunos/guards/aluno-detalhe.resolver.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosModule", function() { return AlunosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AlunosModule = (function () {
    function AlunosModule() {
    }
    return AlunosModule;
}());
AlunosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_alunos_alunos_component__["a" /* AlunosComponent */],
            __WEBPACK_IMPORTED_MODULE_5__aluno_form_aluno_form_component__["a" /* AlunoFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__aluno_detalhe_aluno_detalhe_component__["a" /* AlunoDetalheComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_alunos_alunos_routing_module__["a" /* AlunosRoutingModule */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8_app_alunos_alunos_service__["a" /* AlunosService */],
            __WEBPACK_IMPORTED_MODULE_0__guards_alunos_deactivate_guard__["a" /* AlunosDeactivateGuard */],
            __WEBPACK_IMPORTED_MODULE_9_app_alunos_guards_aluno_detalhe_resolver__["a" /* AlunoDetalheResolver */]
        ]
    })
], AlunosModule);

//# sourceMappingURL=alunos.module.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_alunos_guard__ = __webpack_require__("../../../../../src/app/guards/alunos.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_alunos_alunos_component__ = __webpack_require__("../../../../../src/app/alunos/alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_alunos_aluno_detalhe_aluno_detalhe_component__ = __webpack_require__("../../../../../src/app/alunos/aluno-detalhe/aluno-detalhe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_alunos_aluno_form_aluno_form_component__ = __webpack_require__("../../../../../src/app/alunos/aluno-form/aluno-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_guards_alunos_deactivate_guard__ = __webpack_require__("../../../../../src/app/guards/alunos-deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_alunos_guards_aluno_detalhe_resolver__ = __webpack_require__("../../../../../src/app/alunos/guards/aluno-detalhe.resolver.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/* Observemos que nesse caso ele roteia de um componente de Alunos pra Outros componentes
const alunosRoutes: Routes = [
    {  path: 'alunos', component: AlunosComponent },
    {  path: 'alunos/novo', component: AlunoFormComponent },
    {  path: 'alunos/:id', component: AlunoDetalheComponent },
    {  path: 'alunos/:id/edit', component: AlunoFormComponent }
];
*/
// Utilizando rotas filhas, renderizo a rota pai e a filha. Ou seja: Alunos, e o outro componente!
// Declarar da maneira de cima ou de baixo, depende da necessidade do projeto
var alunosRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3_app_alunos_alunos_component__["a" /* AlunosComponent */],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_0__guards_alunos_guard__["a" /* AlunosGuard */]],
        children: [
            //deixei vazio acima por conta do lazy loading. Se fosse normal, preencheria com alunos
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_5_app_alunos_aluno_form_aluno_form_component__["a" /* AlunoFormComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4_app_alunos_aluno_detalhe_aluno_detalhe_component__["a" /* AlunoDetalheComponent */],
                resolve: { aluno: __WEBPACK_IMPORTED_MODULE_7_app_alunos_guards_aluno_detalhe_resolver__["a" /* AlunoDetalheResolver */] } // adicionado após implementar o guarda resolver. "aluno" poderia ter qualquer nome
            },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_5_app_alunos_aluno_form_aluno_form_component__["a" /* AlunoFormComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_6_app_guards_alunos_deactivate_guard__["a" /* AlunosDeactivateGuard */]] }
        ] }
]; // observermos que nas rotas filhas não preciso colocar alunos/novo
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
var AlunosRoutingModule = (function () {
    function AlunosRoutingModule() {
    }
    return AlunosRoutingModule;
}());
AlunosRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(alunosRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], AlunosRoutingModule);

//# sourceMappingURL=alunos.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlunosService = (function () {
    function AlunosService() {
        this.alunos = [
            { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
            { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
            { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
        ];
    }
    AlunosService.prototype.getAlunos = function () {
        return this.alunos;
    };
    AlunosService.prototype.getAluno = function (idAluno) {
        // Trata-se de um array de objeto a ser varrido por um for; Se usar o filter, retorna um object
        for (var index = 0; index < this.alunos.length; index++) {
            if (this.alunos[index].id == idAluno) {
                console.log(this.alunos[index]);
                return this.alunos[index];
            }
        }
        return null;
    };
    return AlunosService;
}());
AlunosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AlunosService);

//# sourceMappingURL=alunos.service.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/guards/aluno-detalhe.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_alunos_alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoDetalheResolver; });
// Essa guarda server para garantir que a consulta ajax ao servidor irá finalizar antes
// que o componente aluno detalhe seja renderizado, ou seja, que o serviço irá concluir seu papel
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlunoDetalheResolver = (function () {
    // Team é o tipo do objeto que será resolvido
    // Devo observar que preciso resolver um objeto do tipo Aluno. Ele que será consultado do server
    // no construtor, irei usar o serviço alunosService. Preciso aplicar esse guarda enquanto o 
    // serviço termina seu papel
    function AlunoDetalheResolver(_alunosService) {
        this._alunosService = _alunosService;
    }
    AlunoDetalheResolver.prototype.resolve = function (route, state) {
        // Aqui eu trago a lógica do NgOnInit do aluno-detalhe.component.ts para que o resolver
        // carregue o objeto
        var idAluno = route.params['id'];
        console.log('Estou executando o resolver!');
        // estou pegando o id do aluno pela rota ativa, passando pro serviço carregar o aluno
        return this._alunosService.getAluno(idAluno);
        // depois disso, passo o resolve pra rota ':id'. Ou seja, quando o usuário clicar em um aluno
        // ele chama o guarda de rotas para carregar o aluno
        // Dúvida: e o serviço não faz mais o serviço de carregar o aluno?  NÃO!!!!
        // DEVO REMOVER O CODIGO DO NGONINIT        
    };
    return AlunoDetalheResolver;
}());
AlunoDetalheResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])() // NÃO ESQUECER DE COLOCAR NO PROVIDER
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_alunos_alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_alunos_alunos_service__["a" /* AlunosService */]) === "function" && _a || Object])
], AlunoDetalheResolver);

var _a;
//# sourceMappingURL=aluno-detalhe.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/guards/alunos-deactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosDeactivateGuard; });
var AlunosDeactivateGuard = (function () {
    function AlunosDeactivateGuard() {
    }
    // Será implementado um guarda de desativação de rotas, para o AlunoFormComponent
    // bastante útil para forms
    AlunosDeactivateGuard.prototype.canDeactivate = function (component, // passo para o candeactivate o form! 
        currentRoute, currentState
        // nextState?: RouterStateSnapshot
    ) {
        //  console.log("Estou verificando rota de desativação!");
        //  console.log(component.podeMudarRota());
        return component.podeDesativar();
        // ao invés de chamar um atributo, posso chamar uma função
        //  return !component.formMudou; 
        // throw new Error("Method not implemented.");
    };
    return AlunosDeactivateGuard;
}());

//# sourceMappingURL=alunos-deactivate.guard.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map