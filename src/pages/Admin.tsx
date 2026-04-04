import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Trash2, RefreshCw } from "lucide-react";

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string | null;
  motivo: string;
  origem: string | null;
  created_at: string;
}

const motivoLabels: Record<string, string> = {
  consulta: "Agendar consulta",
  familiar: "Consulta para familiar",
  empresa: "Empresa / palestra",
  outro: "Outro",
};

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/admin/login");
      } else {
        setSession(true);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin/login");
      } else {
        setSession(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (session) fetchLeads();
  }, [session]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setLeads(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remover este lead?")) return;
    await supabase.from("leads").delete().eq("id", id);
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-xl text-foreground">Leads</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              title="Atualizar"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <p className="font-body text-sm text-muted-foreground mb-6">
          {leads.length} lead{leads.length !== 1 ? "s" : ""} recebido{leads.length !== 1 ? "s" : ""}
        </p>

        {loading ? (
          <p className="font-body text-sm text-muted-foreground">Carregando...</p>
        ) : leads.length === 0 ? (
          <p className="font-body text-sm text-muted-foreground">Nenhum lead recebido ainda.</p>
        ) : (
          <div className="space-y-4">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground py-3 pr-4">Nome</th>
                    <th className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground py-3 pr-4">E-mail</th>
                    <th className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground py-3 pr-4">Telefone</th>
                    <th className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground py-3 pr-4">Motivo</th>
                    <th className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground py-3 pr-4">Data</th>
                    <th className="py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="font-body text-sm text-foreground py-4 pr-4">{lead.nome}</td>
                      <td className="font-body text-sm text-foreground py-4 pr-4">{lead.email}</td>
                      <td className="font-body text-sm text-muted-foreground py-4 pr-4">{lead.telefone || "—"}</td>
                      <td className="font-body text-sm text-muted-foreground py-4 pr-4">{motivoLabels[lead.motivo] || lead.motivo}</td>
                      <td className="font-body text-xs text-muted-foreground py-4 pr-4">
                        {new Date(lead.created_at).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {leads.map((lead) => (
                <div key={lead.id} className="border border-border p-4 bg-card">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-body text-sm font-medium text-foreground">{lead.nome}</p>
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-body text-sm text-foreground">{lead.email}</p>
                  {lead.telefone && (
                    <p className="font-body text-sm text-muted-foreground">{lead.telefone}</p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-body text-xs text-muted-foreground">
                      {motivoLabels[lead.motivo] || lead.motivo}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {new Date(lead.created_at).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
