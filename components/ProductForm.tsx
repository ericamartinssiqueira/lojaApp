import type { Produto } from "@/lib/types";
import { saveProduct } from "@/app/admin/actions";

export default function ProductForm({ produto }: { produto?: Produto }) {
  return (
    <form action={saveProduct} className="admin-form">
      <h2>{produto ? "Editar produto" : "Cadastrar produto"}</h2>
      {produto && <input type="hidden" name="id" value={produto.id} />}
      <label>Nome<input name="nome" defaultValue={produto?.nome} required /></label>
      <label>Descrição<textarea name="descricao" rows={3} defaultValue={produto?.descricao ?? ""} /></label>
      <div className="form-row">
        <label>Preço (R$)<input name="preco" type="number" min="0" step="0.01" defaultValue={produto?.preco} required /></label>
        <label>Estoque<input name="estoque" type="number" min="0" defaultValue={produto?.estoque ?? 0} required /></label>
      </div>
      <label>URL da imagem<input name="imagem_url" type="url" defaultValue={produto?.imagem_url ?? ""} placeholder="https://..." /></label>
      <div className="form-actions">
        <button className="button" type="submit">{produto ? "Salvar alterações" : "Cadastrar produto"}</button>
        {produto && <a className="button secondary" href="/admin">Cancelar</a>}
      </div>
    </form>
  );
}
