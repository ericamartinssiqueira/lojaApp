import { login, signup } from "./actions";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ erro?: string; sucesso?: string; mensagem?: string }> }) {
  const params = await searchParams;
  return (
    <section className="auth-page"><div className="auth-card"><span className="eyebrow">Área do cliente</span><h1>Entre na Viva Store</h1><p>Acesse sua conta ou crie um usuário para administrar os produtos.</p>
      {(params.erro || params.mensagem) && <div className="alert error">{params.erro || params.mensagem}</div>}
      {params.sucesso && <div className="alert success">{params.sucesso}</div>}
      <form className="login-form"><label>Nome <input name="name" placeholder="Seu nome (para cadastro)" /></label><label>E-mail <input name="email" type="email" required placeholder="voce@email.com" /></label><label>Senha <input name="password" type="password" minLength={6} required placeholder="Mínimo de 6 caracteres" /></label><button formAction={login} className="button">Entrar</button><button formAction={signup} className="button secondary">Criar conta</button></form>
      <small>Para um projeto real, limite o cadastro e atribua administradores por perfil.</small>
    </div></section>
  );
}
