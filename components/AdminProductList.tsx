import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import type { Produto } from "@/lib/types";
import { deleteProduct } from "@/app/admin/actions";

export default function AdminProductList({ produtos }: { produtos: Produto[] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Produto</th><th>Preço</th><th>Estoque</th><th>Ações</th></tr></thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td><strong>{produto.nome}</strong><small>{produto.descricao}</small></td>
              <td>{Number(produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
              <td>{produto.estoque}</td>
              <td className="actions">
                <Link href={`/admin?editar=${produto.id}`} className="icon-button" title="Editar"><Pencil size={17} /></Link>
                <form action={deleteProduct}><input type="hidden" name="id" value={produto.id} /><button className="icon-button danger" title="Excluir"><Trash2 size={17} /></button></form>
              </td>
            </tr>
          ))}
          {!produtos.length && <tr><td colSpan={4} className="empty">Nenhum produto cadastrado.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
