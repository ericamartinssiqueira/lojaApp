import ProductCard from "@/components/ProductCard";
import { createClient } from "@/lib/supabase/server";
import type { Produto } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.from("produtos").select("*").order("criado_em", { ascending: false });
  const produtos = (data ?? []) as Produto[];

  return (
    <>
      <section className="hero"><div className="container"><span className="eyebrow">Nova coleção</span><h1>Escolhas que combinam com você.</h1><p>Produtos especiais, design contemporâneo e uma experiência simples do começo ao fim.</p><a href="#produtos" className="button">Ver produtos</a></div></section>
      <section className="container section" id="produtos"><div className="section-title"><div><span className="eyebrow">Nossa seleção</span><h2>Produtos em destaque</h2></div><span>{produtos.length} produto(s)</span></div>
        {produtos.length ? <div className="product-grid">{produtos.map((produto) => <ProductCard key={produto.id} produto={produto} />)}</div> : <div className="empty-state"><h3>A loja está sendo preparada</h3><p>Entre como administrador e cadastre o primeiro produto.</p></div>}
      </section>
    </>
  );
}
