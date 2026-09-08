import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/login/actions";

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const name = user?.user_metadata?.name ?? user?.email?.split("@")[0];

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="brand"><ShoppingBag size={25} /> Viva Store</Link>
        <nav className="nav" aria-label="Navegação principal">
          <Link href="/">Produtos</Link>
          {user ? (
            <>
              <span className="hello">Olá, {name}</span>
              <Link href="/admin">Admin</Link>
              <form action={logout}><button className="link-button">Sair</button></form>
            </>
          ) : <Link href="/login" className="button small">Entrar</Link>}
        </nav>
      </div>
    </header>
  );
}
