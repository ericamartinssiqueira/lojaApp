import Image from "next/image";
import type { Produto } from "@/lib/types";

export default function ProductCard({ produto }: { produto: Produto }) {
  return (
    <article className="product-card">
      <div className="product-image">
        {produto.imagem_url ? (
          <Image src={produto.imagem_url} alt={produto.nome} fill sizes="(max-width: 700px) 100vw, 33vw" />
        ) : <span>Sem imagem</span>}
      </div>
      <div className="product-info">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao || "Produto selecionado especialmente para você."}</p>
        <div className="product-bottom">
          <strong>{Number(produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
          <span>{produto.estoque > 0 ? `${produto.estoque} em estoque` : "Esgotado"}</span>
        </div>
      </div>
    </article>
  );
}
