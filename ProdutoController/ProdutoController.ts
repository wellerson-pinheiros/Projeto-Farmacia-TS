import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Produto } from "../src/model/Produto";

export class ProdutoController implements ProdutoRepository {

    private produtos = new Array<Produto>();

    public id: number = 0;

    criarProduto(produto: Produto): Produto {
        produto.id = this.gerarId();
        this.produtos.push(produto)
        return produto;
    }
    listarTodosOsProdutos():void {
        this.produtos.forEach(produto => produto.visualizar());
    }

    consultarProdutoPorId(id: number): void {
        let busca = this.buscarNoArray(id)
        if(busca !== null) {
            busca.visualizar()
        } else{
            console.log('Erro! Produto não encontrado')
        }
    }
    atualizarProduto(id: number, produto: Produto): void {
        let buscaProduto = this.buscarNoArray(id)
        if(buscaProduto !== null){
            this.produtos[this.produtos.indexOf(buscaProduto)] = produto;
            console.log('O Produto' + produto.id +  ' foi atualizado com sucesso')
        }else{
            console.log('Produto não encontrado')
        }
    }

    deletarProduto(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.produtos.splice(this.produtos.indexOf(buscaProduto), 1);
        	console.log("O Produto id: " + id + 
                        " foi apagado com sucesso!");
        }else
        console.log("\nO Produto id: " + id + 
                    " não foi encontrado!");
    }
    // métodos auxiliares


    
     public gerarId():number { // gerando um Id aleatorio
        return ++this.id
    }

    //Ver se um produto está disponivel no array

     
    public buscarNoArray(id: number): Produto | null { // busca de um produto no array produtos declarado no começo do código

        for (let produto of this.produtos) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }

}

