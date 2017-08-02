// Nesse arquivo irei tipar a classe Aluno, para que possa usar o Intellisense, e etc..

export class Aluno {  //chamado de model ou entidade

    constructor( 
     //poderia ser PRIVATE também  - Observar que os atributos ficam dentro dos parênteses
       public  nome: string,
       public  id: number,
       public  email: string

    ){}
}