import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";


@Injectable()

export class CursosGuard implements CanActivateChild {
        canActivateChild(
            childRoute: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot
            ): 
            boolean | Observable<boolean> | Promise<boolean> {
                console.log("o Guarda de Rotas filhas de CURSOS está sendo chamado!");
                return true;
            // throw new Error("Method not implemented.");
        }
}