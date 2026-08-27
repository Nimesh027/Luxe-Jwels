"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Input from "@/components/ui/Input";

export default function ForgotPasswordClient() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-0px)] bg-[#0f0e0d] text-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-wine/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-lg bg-[#161412] border border-gold/25 rounded-2xl shadow-2xl overflow-hidden relative z-10 p-6 sm:p-10 lg:p-12">
        {/* Top Brand Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="font-display text-lg tracking-[0.25em] text-cream uppercase font-semibold">
              LUXE JEWELS
            </span>
            <p className="text-[11px] text-cream/50 tracking-wider uppercase mt-0.5 font-light">
              Password Recovery
            </p>
          </div>

          <Link
            href="/login"
            className="flex items-center gap-1.5 text-xs text-gold/90 hover:text-gold transition-colors font-medium"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2" />
            </svg>
            <span>Back to Login</span>
          </Link>
        </div>

        {!isSubmitted ? (
          <>
            {/* Heading */}
            <div className="mb-8">
              <h1 className="font-display text-2xl sm:text-3xl text-cream font-normal tracking-wide">
                Forgot Your Password?
              </h1>
              <p className="text-xs sm:text-sm text-cream/60 mt-1 font-light leading-relaxed">
                Enter your registered email address below. We&apos;ll send a secure password reset link to your inbox.
              </p>
            </div>

            {/* FORGOT PASSWORD FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                label="Registered Email Address"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={error}
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
                    <span>Sending Instructions...</span>
                  </>
                ) : (
                  <span>Send Recovery Link</span>
                )}
              </button>
            </form>
          </>
        ) : (
          /* SUCCESS CONFIRMATION SCREEN */
          <div className="text-center py-4 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 text-gold flex items-center justify-center mx-auto text-2xl">
              📩
            </div>

            <div>
              <h2 className="font-display text-2xl text-cream font-normal">
                Check Your Inbox
              </h2>
              <p className="text-xs sm:text-sm text-cream/70 mt-2 leading-relaxed max-w-sm mx-auto font-light">
                We have sent password recovery instructions to{" "}
                <span className="text-gold font-medium">{email}</span>. Please check your email inbox and follow the link provided.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-cream/60 font-light">
              Didn&apos;t receive the email? Check your spam folder or{" "}
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-gold underline underline-offset-2 hover:text-cream font-medium cursor-pointer"
              >
                try another email address
              </button>.
            </div>

            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-cream font-medium text-xs uppercase tracking-wider transition-colors"
              >
                Return To Sign In
              </Link>
            </div>
          </div>
        )}

        {/* Bottom Security Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-cream/40">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            256-Bit Encrypted
          </span>
          <span>BIS Hallmarked</span>
          <span>Insured Delivery</span>
        </div>
      </div>
    </div>
  );
}
