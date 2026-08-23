"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/common/Section";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useAppDispatch } from "@/store/hooks";
import { register } from "@/store/slices/authSlice";

export default function RegisterClient() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    dispatch(register({ name, email }));
    router.push("/");
  };

  return (
    <Section title="Register" subtitle="Create your Luxe Jewels account.">
      <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-4">
        <Input
          label="Full Name"
          placeholder="Jane Doe"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
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
        <Input
          type="password"
          label="Confirm Password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <Button type="submit" variant="dark" fullWidth>
          Create Account
        </Button>
        <p className="text-xs text-muted">
          Already have an account?{" "}
          <Link href="/login" className="text-ink underline underline-offset-4 hover:text-gold">
            Login
          </Link>
        </p>
      </form>
    </Section>
  );
}
