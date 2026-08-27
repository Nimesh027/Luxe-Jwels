"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import { useAppDispatch } from "@/store/hooks";
import { register } from "@/store/slices/authSlice";

export default function RegisterClient() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please verify your entries.");
      return;
    }
    if (!agreeTerms) {
      setError("Please accept the terms and conditions to proceed.");
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      dispatch(register({ name, email }));
      setIsLoading(false);
      router.push("/");
    }, 600);
  };

  const handleDemoRegister = () => {
    setName("Victoria Sterling");
    setEmail("victoria.sterling@luxe-jewels.com");
    setPassword("LuxeJewels2026!");
    setConfirmPassword("LuxeJewels2026!");
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      dispatch(
        register({
          name: "Victoria Sterling",
          email: "victoria.sterling@luxe-jewels.com",
        })
      );
      setIsLoading(false);
      router.push("/");
    }, 500);
  };

  const isPasswordMatch = password && confirmPassword && password === confirmPassword;
  const isPasswordMismatch = confirmPassword && password !== confirmPassword;

  return (
    <div className="min-h-[calc(100vh-0px)] bg-[#0f0e0d] text-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-wine/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-lg bg-[#161412] border border-gold/25 rounded-2xl shadow-2xl overflow-hidden relative z-10 p-6 sm:p-10 lg:p-12">
        {/* Top Brand & Mode Switcher */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="font-display text-lg tracking-[0.25em] text-cream uppercase font-semibold">
              LUXE JEWELS
            </span>
            <p className="text-[11px] text-cream/50 tracking-wider uppercase mt-0.5 font-light">
              Member Registration
            </p>
          </div>

          {/* Navigation Switcher Pills */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs">
            <Link
              href="/login"
              className="px-4 py-1.5 rounded-full text-cream/70 hover:text-cream transition-colors duration-200"
            >
              Login
            </Link>
            <span className="px-4 py-1.5 rounded-full bg-gold text-ink font-medium shadow-xs">
              Register
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-6">
          <h1 className="font-display text-2xl sm:text-3xl text-cream font-normal tracking-wide">
            Join The World Of Luxe
          </h1>
          <p className="text-xs sm:text-sm text-cream/60 mt-1 font-light leading-relaxed">
            Create your account to unlock bespoke jewellery services &amp; member privileges.
          </p>
        </div>

        {/* REGISTER FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <Input
            type="text"
            label="Full Name"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            leadingIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />

          {/* Email Address */}
          <Input
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            leadingIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />

          {/* Password */}
          <Input
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            leadingIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
            trailingIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-cream/40 hover:text-cream/80 cursor-pointer"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            }
          />

          {/* Confirm Password */}
          <Input
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            error={isPasswordMismatch ? "Passwords do not match." : undefined}
            helperText={isPasswordMatch ? "✓ Passwords match." : undefined}
            leadingIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          {/* Terms Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded-md border border-white/20 bg-white/5 text-gold focus:ring-0 focus:ring-offset-0 cursor-pointer accent-gold"
              />
              <span className="text-xs text-cream/70 group-hover:text-cream transition-colors leading-relaxed">
                I agree to the{" "}
                <span className="text-gold underline underline-offset-2">Terms of Service</span>{" "}
                and{" "}
                <span className="text-gold underline underline-offset-2">Privacy Policy</span>, and wish to receive VIP offers.
              </span>
            </label>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold to-[#b59247] hover:from-[#dcb96b] hover:to-gold text-ink font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 transform active:scale-[0.99] shadow-lg shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-ink" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Creating Account...</span>
              </>
            ) : (
              <span>Create Luxury Account</span>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-5 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <span className="relative bg-[#161412] px-3 text-[11px] uppercase tracking-widest text-cream/40 font-light">
            Or Sign Up With
          </span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleDemoRegister}
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-cream text-xs font-medium transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={handleDemoRegister}
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-cream text-xs font-medium transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-cream" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.6-1.07 1-2.54.83-4.02-1.2.09-2.67.84-3.5 1.81-.58.68-1.1 1.77-.96 3.22 1.34.1 2.73-.66 3.63-1.01z" />
            </svg>
            <span>Apple</span>
          </button>
        </div>

        {/* Bottom Security Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-cream/40">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            100% Encrypted
          </span>
          <span>Hallmarked Gold</span>
          <span>Insured Shipping</span>
        </div>
      </div>
    </div>
  );
}
