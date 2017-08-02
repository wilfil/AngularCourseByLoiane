import { Observable } from 'rxjs/Rx';

import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';




@Injectable()

export class AlunosGuard implements CanActivateChild {
        canActivateChild(
            childRoute: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
            ):
            boolean | Observable<boolean> | Promise<boolean> {

            console.log("o Guarda de Rotas filhas de ALUNOS está sendo chamado: AlunosGuard!" );

            // POSSO INJETAR UM SERVIÇO NO GUARDA DE ROTAS, PARA IR FAZER A VERIFICAÇÃO NO SERVIDOR
            // NESSE CASO O RETORNO SERIA ASSINCRONO, AJAX, RETORNANDO O OBSERVABLE

            /*  EXEMPLO INTERESSANTE PARA RETIRAR INFORMAÇÃO DA ROTA FILHA
            console.log(childRoute);
            console.log(state);

            if (state.url.includes('edit')) {
                alert('usuário sem acesso');
                // poderia tb retirar o botão editar
                return false;}
            */


            if (state.url.includes('edit')) {
             /*   console.log('observable');
                return Observable.of(false); // mesma coisa do exemplo acima, mas com observable  */
            }

            return true;
            // throw new Error("Method not implemented.");
        }
}
