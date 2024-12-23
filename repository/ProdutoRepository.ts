import { Produto } from "../src/model/Produto";

export interface ProdutoRepository {

    // Métodos CRUD

     criarProduto(produto : Produto) : void;
     listarTodosOsProdutos() : void;
     consultarProdutoPorId(id:number): void
     atualizarProduto(id:number, produto : Produto): void
     deletarProduto(id:number):void


}