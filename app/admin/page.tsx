import { redirect } from "next/navigation";
import { Package, Boxes, CircleDollarSign } from "lucide-react";
import ProductForm from "@/components/ProductForm";
import AdminProductList from "@/components/AdminProductList";
import { createClient } from "@/lib/supabase/server";
import type { Produto } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ editar?: string; erro?: string; sucesso?: string }> }) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const { data } = await supabase.from("produtos").select("*").order("criado_em", { ascending: false });
  const produtos = (data ?? []) as Produto[];
  const produtoEmEdicao = produtos.find((item) => String(item.id) === params.editar);
  const estoqueTotal = produtos.reduce((soma, item) => soma + item.estoque, 0);
  const valorTotal = produtos.reduce((soma, item) => soma + item.estoque * Number(item.preco), 0);

  return <section className="container section admin-page"><div className="admin-heading"><div><span className="eyebrow">Painel administrativo</span><h1>Visão geral dos produtos</h1></div></div>
    {params.erro && <div className="alert error">{params.erro}</div>}{params.sucesso && <div className="alert success">{params.sucesso}</div>}
    <div className="stats"><div><Package /><span>Produtos<strong>{produtos.length}</strong></span></div><div><Boxes /><span>Itens em estoque<strong>{estoqueTotal}</strong></span></div><div><CircleDollarSign /><span>Valor do estoque<strong>{valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong></span></div></div>
    <div className="admin-grid"><ProductForm produto={produtoEmEdicao} /><div><h2>Todos os produtos</h2><AdminProductList produtos={produtos} /></div></div>
  </section>;
}
