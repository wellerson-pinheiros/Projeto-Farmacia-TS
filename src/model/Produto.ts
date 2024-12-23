 export abstract class Produto {

	
    private _id: number;
    private _nome:string;
    private _tipo: number;
    private _preco: number;
	private _validade:string
	constructor(id: number , nome : string, tipo: number, preco: number, validade: string){
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
		this._validade = validade;
    }

    
	public get id(): number {
		return this._id;
	}

 
	public get nome(): string {
		return this._nome;
	}

    
	public get tipo(): number {
		return this._tipo;
	}

   
	public get preco(): number {
		return this._preco;
	}

    public get validade(): string{
		return this._validade
	}

	public set id(value: number) {
		this._id = value;
	}

    
	public set nome(value: string) {
		this._nome = value;
	}

    
	public set tipo(value: number) {
		
		this._tipo = value;
	}

   
	public set preco(value: number) {
		this._preco = value;
	}

    


	public set validade(value: string){
		this._validade = value;
	}

		
	

			public visualizar() :void{

				let tipo: string;
		
				switch(this._tipo){
					case 1:
						tipo = "Medicamento";
					break;
					case 2:
						tipo = "Cosmetico";
					break;
					
					default:
						tipo = "Tipo Inválido!";
				}







        console.log("      DADOS DO PRODUTO ")
        console.log('***********************************')
        console.log("O id do produto é " + this._id)
        console.log("O produto" + this._nome)
        console.log("o tipo do prudoto " + this._tipo)
        console.log('o preço do produto : ' + this._preco.toFixed(2))

    }


		}