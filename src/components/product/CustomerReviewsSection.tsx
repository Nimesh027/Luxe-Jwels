"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import ReviewCard from "@/components/common/ReviewCard";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { StarIcon, CheckCircleIcon } from "@/components/icons";

export default function CustomerReviewsSection() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setIsReviewModalOpen(false);
      setNewReviewText("");
    }, 1800);
  };

  return (
    <Section className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="font-display text-h3 text-ink">Verified Customer Reviews</h3>
          <p className="text-caption text-muted mt-1">
            4.9 out of 5 stars based on 128 verified handcrafted purchases
          </p>
        </div>
        <Button variant="outline" onClick={() => setIsReviewModalOpen(true)} className="shrink-0">
          Write a Review
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReviewCard
          name="Ananya R."
          location="Mumbai"
          title="Exceptional Craftsmanship!"
          quote="The finish on this gold jewellery piece is immaculate. It came with the BIS hallmark certification card and arrived right on time."
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
      <Modal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        title="Write a Product Review"
      >
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
                  <Button
                    key={star}
                    variant="unstyled"
                    onClick={() => setNewRating(star)}
                    className="hover:scale-110 transition-transform cursor-pointer p-0.5"
                  >
                    <StarIcon
                      size={24}
                      filled={star <= newRating}
                      className={star <= newRating ? "text-gold" : "text-border"}
                    />
                  </Button>
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
      </Modal>
    </Section>
  );
}
