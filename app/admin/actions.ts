"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function saveProduct(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const id = String(formData.get("id") ?? "");
  const produto = { nome: String(formData.get("nome")), descricao: String(formData.get("descricao") ?? ""), preco: Number(formData.get("preco")), estoque: Number(formData.get("estoque")), imagem_url: String(formData.get("imagem_url") ?? "") || null };
  const result = id ? await supabase.from("produtos").update(produto).eq("id", Number(id)) : await supabase.from("produtos").insert(produto);
  if (result.error) redirect(`/admin?erro=${encodeURIComponent(result.error.message)}`);
  revalidatePath("/"); revalidatePath("/admin"); redirect("/admin?sucesso=Produto salvo com sucesso.");
}

export async function deleteProduct(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const { error } = await supabase.from("produtos").delete().eq("id", Number(formData.get("id")));
  if (error) redirect(`/admin?erro=${encodeURIComponent(error.message)}`);
  revalidatePath("/"); revalidatePath("/admin"); redirect("/admin?sucesso=Produto excluído.");
}
