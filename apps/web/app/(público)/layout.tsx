import React from "react";
import { NavbarLogin } from "../common/NavbarLogin";
import { Footer } from "../common/Footer";
// Cambiado a export default function
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarLogin /> {/* Un navbar simple, tal vez solo con el logo */}
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
