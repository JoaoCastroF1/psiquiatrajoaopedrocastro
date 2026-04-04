import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Credenciais inválidas.");
      setLoading(false);
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-2xl text-foreground mb-8 text-center">
          Painel Administrativo
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border border-border rounded px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent border border-border rounded px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          {error && (
            <p className="font-body text-sm text-destructive">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground py-3 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
