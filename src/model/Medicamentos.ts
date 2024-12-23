import { stringify } from "querystring";
import { Produto } from "./Produto";

export class Medicamento extends Produto{
    private _generico :string;
    private _tipoMedicamento :number;



	constructor(id: number , nome : string, tipo: number, preco: number, validade: string,generico:string, tipoMedicamento:number) {
	
    super(id,nome,tipo,preco,validade)
    this._generico = generico;
    this._tipoMedicamento = tipoMedicamento;
    
   }


   
	public get generico(): string {
		return this._generico;
	}

    
	public get tipoMedicamento(): number {
		return this._tipoMedicamento;
	}

   
	public set generico(value: string) {
		this._generico = value;
	}

    
	public set tipoMedicamento(value: number) {
		this._tipoMedicamento = value;
	}

    public visualizar(): void {
        let tipoMedicamento : string 

        switch(this._tipoMedicamento){
            case 1 :
                tipoMedicamento = 'Comprimido'
            break;
            case 2 :
                tipoMedicamento = "Liquido"
        }

        super.visualizar()
        console.log('Nome Generico : ' + this._generico);
        console.log('tipo do medicamento : ' + this._tipoMedicamento);
 

    }
    
}