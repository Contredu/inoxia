import React from "react";
import { Navbar } from "../common/Navbar"
import { Footer } from "../common/Footer";

export const TiendaLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
}
