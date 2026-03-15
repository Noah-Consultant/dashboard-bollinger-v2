/**
 * LockedSection.tsx — Composant Lead Magnet
 * Design: Art Déco Prestige Noir & Or
 *
 * Flou overlay sur les sections premium + déverrouillage par mot de passe "full-access"
 * Affiche le contenu réel mais flouté quand verrouillé.
 */

import { useState, ReactNode } from "react";
import { Lock, Unlock, Eye, X, AlertCircle } from "lucide-react";
import { useAccess } from "@/contexts/AccessContext";

interface LockedSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  children: ReactNode;
}

export function LockedSection({
  title,
  description,
  ctaText = "Accéder au rapport complet",
  children,
}: LockedSectionProps) {
  const { isFullAccess, unlock, openModal } = useAccess();

  if (isFullAccess) {
    return <>{children}</>;
  }

  return (
    <div className="locked-section-wrap">
      {/* Contenu réel — rendu mais flouté */}
      <div className="locked-content" aria-hidden="true">
        {children}
      </div>

      {/* Overlay avec CTA */}
      <div className="locked-overlay">
        <div style={{
          textAlign: "center",
          padding: "2rem",
          maxWidth: "360px",
        }}>
          {/* Icône cadenas Art Déco */}
          <div style={{
            width: "56px",
            height: "56px",
            borderRadius: "0.15rem",
            background: "oklch(0.72 0.12 75 / 0.12)",
            border: "1px solid oklch(0.72 0.12 75 / 0.40)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem",
          }}>
            <Lock size={24} style={{ color: "oklch(0.72 0.12 75)" }} />
          </div>

          {/* Titre */}
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "oklch(0.95 0.008 80)",
            marginBottom: "0.5rem",
          }}>
            {title}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "0.82rem",
            color: "oklch(0.60 0.010 75)",
            marginBottom: "1.25rem",
            lineHeight: 1.5,
          }}>
            {description}
          </p>

          {/* CTA Button */}
          <button
            className="btn-gold"
            onClick={openModal}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Eye size={14} />
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Password Modal ───────────────────────────────────────────────────────────

export function PasswordModal() {
  const { isModalOpen, closeModal, unlock } = useAccess();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const success = unlock(password);
      if (!success) {
        setError("Mot de passe incorrect. Contactez-nous pour obtenir l'accès complet.");
        setIsLoading(false);
      }
    }, 400);
  };

  const handleClose = () => {
    closeModal();
    setPassword("");
    setError("");
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={handleClose}>
      <div className="modal-box animate-fade-up" onClick={(e) => e.stopPropagation()}>
        {/* Barre décorative dorée */}
        <div className="modal-deco-top" />

        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "none",
            color: "oklch(0.55 0.010 75)",
            cursor: "pointer",
            padding: "0.25rem",
            transition: "color 200ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.85 0.008 75)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.010 75)")}
        >
          <X size={18} />
        </button>

        {/* Icône */}
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "0.15rem",
          background: "oklch(0.72 0.12 75 / 0.12)",
          border: "1px solid oklch(0.72 0.12 75 / 0.30)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
        }}>
          <Unlock size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
        </div>

        {/* Titre */}
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "oklch(0.95 0.008 80)",
          marginBottom: "0.4rem",
        }}>
          Accès Rapport Complet
        </h2>
        <p style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "0.82rem",
          color: "oklch(0.55 0.010 75)",
          marginBottom: "1.5rem",
          lineHeight: 1.5,
        }}>
          Saisissez votre mot de passe pour débloquer les 7 sections premium du dashboard CI Bollinger.
        </p>

        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{
              display: "block",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "oklch(0.60 0.010 75)",
              marginBottom: "0.5rem",
            }}>
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe..."
              className="b-search"
              autoFocus
            />
          </div>

          {/* Erreur */}
          {error && (
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              background: "oklch(0.60 0.20 25 / 0.10)",
              border: "1px solid oklch(0.60 0.20 25 / 0.30)",
              borderRadius: "0.15rem",
              padding: "0.6rem 0.75rem",
              marginBottom: "1rem",
            }}>
              <AlertCircle size={14} style={{ color: "oklch(0.70 0.15 25)", flexShrink: 0, marginTop: "1px" }} />
              <p style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "0.78rem",
                color: "oklch(0.70 0.15 25)",
                lineHeight: 1.4,
              }}>
                {error}
              </p>
            </div>
          )}

          <button
            type="submit"
            className="btn-gold"
            disabled={isLoading || !password}
            style={{
              width: "100%",
              opacity: (!password || isLoading) ? 0.6 : 1,
              cursor: (!password || isLoading) ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? "Vérification..." : "Déverrouiller l'accès complet"}
          </button>
        </form>

        {/* CTA contact */}
        <div style={{
          marginTop: "1.25rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid oklch(0.72 0.12 75 / 0.10)",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "0.75rem",
            color: "oklch(0.45 0.008 75)",
          }}>
            Pas encore d'accès ?{" "}
            <a
              href="mailto:contact@agence.com"
              style={{
                color: "oklch(0.72 0.12 75)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Contactez-nous →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
