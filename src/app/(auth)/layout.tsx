"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import "./styles.css";

const navLinks = [
  {
    name: "Register",
    path: "/register",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Forgot Password",
    path: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.path);
            return (
              <li key={link.path}>
                <Link href={link.path} className={isActive ? "active" : ""}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
