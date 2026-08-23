"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/common/Section";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";

export default function LoginClient() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    dispatch(login({ name: email.split("@")[0], email }));
    router.push("/");
  };

  return (
    <Section title="Login" subtitle="Welcome back to Luxe Jewels.">
      <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Input
          type="password"
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <Button type="submit" variant="dark" fullWidth>
          Login
        </Button>
        <p className="text-xs text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-ink underline underline-offset-4 hover:text-gold">
            Register
          </Link>
        </p>
      </form>
    </Section>
  );
}
