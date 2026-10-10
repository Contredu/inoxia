import React from "react";
import { Footer } from "../common/Footer";
import { NavbarLogin } from "../common/NavbarLogin";

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarLogin /> {/* Un navbar simple, tal vez solo con el logo */}
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
