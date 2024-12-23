import { Produto } from "./Produto";


export class Cosmetico extends Produto{
    private _fragancia: string;


	constructor(id: number , nome : string, tipo: number, preco: number, validade: string, fragancia: string) {
        super(id,nome,tipo,preco,validade)
        this._fragancia = fragancia;
	}

  
	public get fragancia(): string {
		return this._fragancia;
	}

  
	public set fragancia(value: string) {
		this._fragancia = value;
	}



    public visualizar(): void {
        super.visualizar()
        console.log("A fragancia do produto é : " + this._fragancia)
    }
}