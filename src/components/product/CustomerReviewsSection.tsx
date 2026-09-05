"use client";

import { useState } from "react";
import { StarIcon, CheckCircleIcon, CloseIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";
import SectionTitle from "@/components/common/SectionTitle";
import ReviewCard from "@/components/common/ReviewCard";
import Section from "../common/Section";

export default function CustomerReviewsSection() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setIsReviewModalOpen(false);
      setReviewSubmitted(false);
      setNewReviewText("");
    }, 1800);
  };

  return (
    <Section>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SectionTitle
          title="Customer Reviews"
          description={
            <span className="flex items-center gap-3 mt-1">
              <Rating value={5} />
              <span className="text-small font-semibold text-ink">4.9 out of 5</span>
              <span className="text-caption text-muted">(124 verified ratings)</span>
            </span>
          }
          align="left"
          className="mb-0"
        />

        <Button variant="outline" onClick={() => setIsReviewModalOpen(true)} className="shrink-0">
          Write a Review
        </Button>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ReviewCard
          name="Ananya R."
          location="Mumbai"
          title="Superb Craftsmanship!"
          quote="The finish on this 18K yellow gold diamond piece is beyond expectations. Came with official hallmark certificate. Express delivery in 2 days!"
          date="2 weeks ago"
          rating={5}
          verified={true}
        />
        <ReviewCard
          name="Vikram S."
          location="New Delhi"
          title="Stunning Diamond Sparkle"
          quote="Bought this for my anniversary. The packaging and velvet box felt ultra luxurious. The diamond setting catches light beautifully."
          date="1 month ago"
          rating={5}
          verified={true}
        />
      </div>

      {/* Write a Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl bg-surface p-6 shadow-xl border border-border">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-display text-h4 font-medium text-ink">Write a Product Review</h3>
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
                className="text-muted hover:text-ink p-1 cursor-pointer"
                aria-label="Close review modal"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            {reviewSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircleIcon size={36} className="text-emerald-600 mx-auto" />
                <h4 className="font-display text-h5 font-medium text-ink">Thank you!</h4>
                <p className="text-caption text-muted">Your verified review has been published.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-caption font-semibold uppercase tracking-wider text-ink mb-1.5">
                    Your Rating
                  </label>
                  <div className="flex gap-2 text-gold cursor-pointer">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="hover:scale-110 transition-transform cursor-pointer p-0.5"
                      >
                        <StarIcon
                          size={24}
                          filled={star <= newRating}
                          className={star <= newRating ? "text-gold" : "text-border"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-caption font-semibold uppercase tracking-wider text-ink mb-1.5">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share your thoughts about quality, craftsmanship, and fit..."
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    className="w-full rounded-xl border border-border p-3 text-caption text-ink focus:border-wine focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsReviewModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="dark" type="submit">
                    Submit Review
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
