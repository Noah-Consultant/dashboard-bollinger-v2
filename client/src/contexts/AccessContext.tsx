/**
 * AccessContext.tsx — Gestion du Lead Magnet freemium
 * Design: Art Déco Prestige Noir & Or
 *
 * État global géré via sessionStorage (expire à la fermeture de l'onglet).
 * Mot de passe : "full-access"
 */

import { createContext, useContext, useState, ReactNode } from "react";

const CORRECT_PASSWORD = "full-access";
const STORAGE_KEY = "bollinger-access";

interface AccessContextType {
  isFullAccess: boolean;
  unlock: (password: string) => boolean;
  lock: () => void;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const AccessContext = createContext<AccessContextType | null>(null);

export function AccessProvider({ children }: { children: ReactNode }) {
  const [isFullAccess, setIsFullAccess] = useState<boolean>(
    () => sessionStorage.getItem(STORAGE_KEY) === "granted"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unlock = (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "granted");
      setIsFullAccess(true);
      setIsModalOpen(false);
      return true;
    }
    return false;
  };

  const lock = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setIsFullAccess(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AccessContext.Provider value={{ isFullAccess, unlock, lock, openModal, closeModal, isModalOpen }}>
      {children}
    </AccessContext.Provider>
  );
}

export function useAccess() {
  const ctx = useContext(AccessContext);
  if (!ctx) throw new Error("useAccess must be used within AccessProvider");
  return ctx;
}
