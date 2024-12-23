import { Console } from "console";
import { ProdutoController } from "./ProdutoController/ProdutoController";
import { Medicamento } from "./src/model/Medicamentos";
import { question } from "readline-sync";
import { Cosmetico } from "./src/model/Cosmetico";



const readlinesync = require('readline-sync');


        let opcao,tipo,preco,tipoMedicamento,id: number
        let nome,validade,generico,fragancia : string
        let tipoProduto = ["Medicamento", "cosmetico"]
        let tipoMedicamentoCL = ["comprimido", "Liquido"]
        let produto = new ProdutoController();

main()


export function main (){
 
        
        while (true){

           

    console.log("****************************************")
    console.log("   bem vindo a sua farmacia online" )
    console.log("****************************************")
    console.log("   Escolha as opçoes disponiveis       ")
    console.log("****************************************")
    console.log("       1 - criar produto               ")
    console.log("       2 - listar todos os produtos    ")
    console.log("       3 - Consultar Produto por Id    ")
    console.log("       4 - Atualizar Produto()         ")
    console.log("       5 - Deletar Produto()           ")
    console.log("       0 - Finalizar programa          ")        
    console.log('ESCOLHA A OPCAO DESEJADA : ')

    opcao = readlinesync.questionInt('')

            if(opcao < 0  || opcao > 5 ){
                console.log('ERRO NUMERO DIGITADO NAO PERMITIDO')
               
            }else if(opcao === 0){

                sobre()
                process.exit(0);
            }

            switch(opcao) {
                case 1:
                    if (opcao === 1){
                        nome = readlinesync.question('Nome do produto: ')
                        console.log('TIPO DO PRODUTO ')
                        console.log('------------------')
                        tipo = readlinesync.keyInSelect(tipoProduto, '', {
                            cancel: false,
                        }) + 1;

                        preco = readlinesync.questionFloat('Preco do Produto: ')
                        validade = readlinesync.question('Validade do produto d/m/aaaa ')
                        switch(tipo){
                            case 1 :
                                generico = readlinesync.question('Nome Generico do Medicamento, Por Favor! ')
                                
                                tipoMedicamento = readlinesync.keyInSelect(tipoMedicamentoCL, '', {
                                    cancel: false,
                                }) + 1
                                /*
                                switch (tipoMedicamento){
                                    case 1 :
                                        Console.log('liquido')
                                    break;    
                                }
                                */
                                produto.criarProduto(new Medicamento(produto.gerarId(),nome,tipo,preco,validade,generico,tipoMedicamento))
                                
                                keyPress()
                            break;


                            case 2:
                                fragancia = readlinesync.question('Qual a Fragania ? ')

                                produto.criarProduto(new Cosmetico(produto.gerarId(),nome,tipo,preco,validade,fragancia))
                                
                                keyPress()
                            break;    
                        }
                    
                    
                    
                    }
                    break;
                case 2:
                    if (opcao === 2 ){
                        produto.listarTodosOsProdutos();
                    }    
                    break;
                case 3:
                    if(opcao === 3 ){
                        id =readlinesync.questionInt('Qual o id do Produto? ')
                        produto.consultarProdutoPorId(id);
                    }   

                    keyPress()
                    break;
                case 4:
                    if( opcao === 4){
                        let produto = readlinesync.questionInt('Id do produto a ser atualizado');

                        produto.buscarNoArray(produto)
                        if(produto !== null){
                            nome = readlinesync.question('Nome do produto Novo: ');

                            tipo = produto.tipo;

                            preco = readlinesync.questionFloat('Novo preco do Produto ');

                            validade = readlinesync.question('Nova validade d/m/aaa');
                            switch(tipo){
                                case 1:
                                    generico = readlinesync.question('Novo nome do Génerico');
                                    
                                    tipoMedicamento = readlinesync.keyInSelect(tipoMedicamentoCL, '', {
                                        cancel: false,
                                    }) + 1;

                                    produto.atualizarProduto(new Medicamento(id,nome,tipo,preco,validade,generico,tipoMedicamento));
                                break;

                                case 2:
                                    fragancia = readlinesync.question('Nova Fragancia');

                                    produto.atualizarProduto(new Cosmetico(id,nome,tipo,preco,validade,fragancia));

                                    keyPress()
                                break;     
                            } 
                        }
                        
                    }   
          
          
                    break;
                }

        }

}




function keyPress(): void {
	
	console.log('\nPressione enter para continuar...')
	readlinesync.prompt()
}

function sobre (){

    console.log('Programa Fármacia criado 23/12/2024')
    console.log('criado por Wellerson pinheiros dos santos')
    console.log('Obrigado!')
}
   