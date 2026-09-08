export type Produto = {
  id: number;
  nome: string;
  descricao: string | null;
  preco: number;
  estoque: number;
  imagem_url: string | null;
  criado_em: string;
};
