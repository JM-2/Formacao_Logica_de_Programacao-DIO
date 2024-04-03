class Heroi{
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; //(ex: guerreiro, mago, monge, ninja )
    }
     
    atacar() {
        let ataque;

        switch(this.tipo) {
            case "mago":
                ataque = "magia";
                break;
        
            case "guerreiro":
                ataque = "espada";
                break;    
                
            case "monge":
                ataque = "artes marciais";
                break;       
        
            case "ninja":
                ataque = "shuriken";
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }

}

let heroi = new Heroi("Heroi", 20, "monge");
heroi.atacar();
