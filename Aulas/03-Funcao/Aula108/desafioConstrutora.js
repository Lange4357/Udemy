function Pessoa(nome = "Vazio"){
    this.nome = nome

    this.GetNome = () => nome

    this.Falar = () => console.log(`Meu nome é ${this.GetNome()}`)

}


const P1 = new Pessoa

P1.Falar()

const P2 = new Pessoa("Gabriel")

P2.Falar()
