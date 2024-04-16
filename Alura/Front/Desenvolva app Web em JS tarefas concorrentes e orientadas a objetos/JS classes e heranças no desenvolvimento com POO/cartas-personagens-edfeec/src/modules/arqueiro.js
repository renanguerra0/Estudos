import { Personagem } from "./personagem.js";


export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza
    static descricao = 'Você tem o meu arco!'
    
    constructor(nome, descricao, destreza){
        super(nome, descricao)
        this.destreza = destreza
        
    }

    obterInsignia(){
        if(this.destreza >= 5){
            return `Demoninador de flechas`
        }
        return super.obterInsignia()
    }
};