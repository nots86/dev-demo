import React from "react";
import Lines from "./page";
import './line.css'
import Link from "next/link";


export default function LinesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="main-layout">
            <div className="sidebar-right">
                <Link href="/new-line" legacyBehavior>
                <button className="new-line-btn">
                    <span style={{marginRight: "px"}}>+</span>
                    New Line</button>
                </Link>
            </div>
            <div className="content-wrapper">{children}</div>
        </main>
    );
  }