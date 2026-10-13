"use client";

import React from "react";

export type ShapeSlug =
  | "round"
  | "oval"
  | "emerald"
  | "princess"
  | "cushion"
  | "pear"
  | "radiant"
  | "marquise"
  | "asscher"
  | "heart"
  | "baguette"
  | "tapered-baguette"
  | string;

export interface DiamondFacetSvgProps {
  shapeSlug: ShapeSlug;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  clarityGradeIdx?: number;
  showInclusions?: boolean;
}

export function normalizeShapeSlug(slug: string): string {
  if (!slug) return "round";
  const s = slug.toLowerCase().trim();
  if (s.includes("oval")) return "oval";
  if (s.includes("emerald")) return "emerald";
  if (s.includes("princess")) return "princess";
  if (s.includes("cushion")) return "cushion";
  if (s.includes("pear")) return "pear";
  if (s.includes("radiant")) return "radiant";
  if (s.includes("marquise")) return "marquise";
  if (s.includes("asscher")) return "asscher";
  if (s.includes("heart")) return "heart";
  if (s.includes("tapered")) return "tapered-baguette";
  if (s.includes("baguette")) return "baguette";
  return "round";
}

export function DiamondFacetSvg({
  shapeSlug,
  fill = "rgba(184,150,90,0.06)",
  stroke = "#B8965A",
  strokeWidth = 1,
  className = "w-full h-full",
  style,
  clarityGradeIdx = 0,
  showInclusions = false,
}: DiamondFacetSvgProps) {
  const norm = normalizeShapeSlug(shapeSlug);

  // Inclusions rendering helper
  const renderInclusions = () => {
    if (!showInclusions || clarityGradeIdx <= 0) return null;
    return (
      <g className="inclusions pointer-events-none">
        {clarityGradeIdx >= 1 && (
          <circle cx="56" cy="46" r="1.2" fill="#2E1C0C" opacity="0.45" />
        )}
        {clarityGradeIdx >= 2 && (
          <circle cx="58" cy="45" r="2.2" fill="#2E1C0C" opacity="0.65" />
        )}
        {clarityGradeIdx >= 3 && (
          <>
            <circle cx="42" cy="56" r="2.2" fill="#2E1C0C" opacity="0.75" />
            <line
              x1="62"
              y1="50"
              x2="68"
              y2="56"
              stroke="#2E1C0C"
              strokeWidth="1"
              opacity="0.7"
            />
          </>
        )}
        {clarityGradeIdx >= 4 && (
          <>
            <circle cx="50" cy="62" r="3" fill="#2E1C0C" opacity="0.85" />
            <circle cx="36" cy="40" r="2.5" fill="#2E1C0C" opacity="0.8" />
          </>
        )}
      </g>
    );
  };

  switch (norm) {
    case "oval":
      return (
        <svg
          viewBox="0 0 100 120"
          className={className}
          style={style}
          fill="none"
        >
          {/* Outer Ellipse */}
          <ellipse
            cx="50"
            cy="60"
            rx="38"
            ry="52"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.2}
          />
          {/* Table Ellipse */}
          <ellipse
            cx="50"
            cy="60"
            rx="19"
            ry="27"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
            strokeDasharray="none"
          />
          {/* Star and Bezel Facet Lines */}
          <line
            x1="50"
            y1="8"
            x2="50"
            y2="33"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="50"
            y1="87"
            x2="50"
            y2="112"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="12"
            y1="60"
            x2="31"
            y2="60"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="69"
            y1="60"
            x2="88"
            y2="60"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          {/* Diagonal Radials */}
          <line
            x1="22"
            y1="24"
            x2="36"
            y2="41"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="78"
            y1="24"
            x2="64"
            y2="41"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="22"
            y1="96"
            x2="36"
            y2="79"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="78"
            y1="96"
            x2="64"
            y2="79"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          {/* Inner Facet Cross */}
          <line
            x1="36"
            y1="41"
            x2="64"
            y2="79"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.4"
          />
          <line
            x1="64"
            y1="41"
            x2="36"
            y2="79"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.4"
          />
          {renderInclusions()}
        </svg>
      );

    case "emerald":
      return (
        <svg
          viewBox="0 0 100 120"
          className={className}
          style={style}
          fill="none"
        >
          {/* Outer Cut-Corner Octagon */}
          <polygon
            points="22,10 78,10 92,26 92,94 78,110 22,110 8,94 8,26"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Outer Step 1 */}
          <polygon
            points="27,19 73,19 83,31 83,89 73,101 27,101 17,89 17,31"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          {/* Middle Step 2 */}
          <polygon
            points="32,28 68,28 75,37 75,83 68,92 32,92 25,83 25,37"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.75"
          />
          {/* Inner Table (Hall of Mirrors) */}
          <polygon
            points="37,37 63,37 68,43 68,77 63,83 37,83 32,77 32,43"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
            fill="rgba(184,150,90,0.02)"
          />
          {/* 8 Corner Facet Lines Connecting Steps to Table */}
          <line
            x1="8"
            y1="26"
            x2="32"
            y2="43"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="22"
            y1="10"
            x2="37"
            y2="37"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="78"
            y1="10"
            x2="63"
            y2="37"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="92"
            y1="26"
            x2="68"
            y2="43"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="92"
            y1="94"
            x2="68"
            y2="77"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="78"
            y1="110"
            x2="63"
            y2="83"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="22"
            y1="110"
            x2="37"
            y2="83"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="8"
            y1="94"
            x2="32"
            y2="77"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          {/* Center Keel Line */}
          <line
            x1="50"
            y1="48"
            x2="50"
            y2="72"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          {renderInclusions()}
        </svg>
      );

    case "princess":
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
        >
          {/* Outer Square */}
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Center Table Square */}
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Corner Diagonal Lines */}
          <line
            x1="10"
            y1="10"
            x2="30"
            y2="30"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          <line
            x1="90"
            y1="10"
            x2="70"
            y2="30"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          <line
            x1="90"
            y1="90"
            x2="70"
            y2="70"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          <line
            x1="10"
            y1="90"
            x2="30"
            y2="70"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          {/* Cross & Chevrons in Table */}
          <line
            x1="30"
            y1="30"
            x2="70"
            y2="70"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          <line
            x1="70"
            y1="30"
            x2="30"
            y2="70"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          <polygon
            points="50,30 70,50 50,70 30,50"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          {/* Outer Edge Chevrons */}
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="30"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="90"
            y1="50"
            x2="70"
            y2="50"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="50"
            y1="90"
            x2="50"
            y2="70"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="10"
            y1="50"
            x2="30"
            y2="50"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          {renderInclusions()}
        </svg>
      );

    case "cushion":
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
        >
          {/* Outer Pillow Shape (Curved Square) */}
          <path
            d="M 28 10 C 42 7, 58 7, 72 10 C 88 14, 93 28, 90 42 C 93 58, 93 64, 90 72 C 88 86, 76 93, 72 90 C 58 93, 42 93, 28 90 C 12 86, 7 74, 10 68 C 7 54, 7 42, 10 32 C 12 16, 24 9, 28 10 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Inner Pillow Table */}
          <path
            d="M 37 28 C 45 26, 55 26, 63 28 C 71 31, 73 38, 72 45 C 73 52, 73 56, 72 61 C 71 67, 65 72, 63 72 C 55 74, 45 74, 37 72 C 29 69, 27 63, 28 59 C 27 52, 27 46, 28 41 C 29 33, 35 29, 37 28 Z"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Star & Corner Facet Lines */}
          <line
            x1="10"
            y1="32"
            x2="28"
            y2="41"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="28"
            y1="10"
            x2="37"
            y2="28"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="72"
            y1="10"
            x2="63"
            y2="28"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="90"
            y1="42"
            x2="72"
            y2="45"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="90"
            y1="72"
            x2="72"
            y2="61"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="72"
            y1="90"
            x2="63"
            y2="72"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="28"
            y1="90"
            x2="37"
            y2="72"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="10"
            y1="68"
            x2="28"
            y2="59"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          {/* Inner Facet Cross */}
          <line
            x1="37"
            y1="28"
            x2="63"
            y2="72"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.4"
          />
          <line
            x1="63"
            y1="28"
            x2="37"
            y2="72"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="4"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          {renderInclusions()}
        </svg>
      );

    case "pear":
      return (
        <svg
          viewBox="0 0 100 125"
          className={className}
          style={style}
          fill="none"
        >
          {/* Outer Teardrop Silhouette */}
          <path
            d="M 50 10 C 66 32, 88 56, 88 78 C 88 98, 71 112, 50 112 C 29 112, 12 98, 12 78 C 12 56, 34 32, 50 10 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Inner Teardrop Table */}
          <path
            d="M 50 36 C 58 48, 70 62, 70 76 C 70 88, 61 96, 50 96 C 39 96, 30 88, 30 76 C 30 62, 42 48, 50 36 Z"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Radiating Facet Lines from Apex */}
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="36"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.8"
          />
          <line
            x1="34"
            y1="32"
            x2="42"
            y2="48"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="66"
            y1="32"
            x2="58"
            y2="48"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          {/* Lower Belly Facet Lines */}
          <line
            x1="12"
            y1="78"
            x2="30"
            y2="76"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="88"
            y1="78"
            x2="70"
            y2="76"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="22"
            y1="98"
            x2="37"
            y2="88"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="78"
            y1="98"
            x2="63"
            y2="88"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="50"
            y1="96"
            x2="50"
            y2="112"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          {/* Center Culet */}
          <circle
            cx="50"
            cy="76"
            r="3.5"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.5"
          />
          {renderInclusions()}
        </svg>
      );

    case "radiant":
      return (
        <svg
          viewBox="0 0 100 120"
          className={className}
          style={style}
          fill="none"
        >
          {/* Cut-Corner Outer Outline */}
          <polygon
            points="22,12 78,12 90,26 90,94 78,108 22,108 10,94 10,26"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Inner Cut-Corner Table */}
          <polygon
            points="32,28 68,28 76,37 76,83 68,92 32,92 24,83 24,37"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Radiant Cut Brilliant Star Facets */}
          <line
            x1="10"
            y1="26"
            x2="24"
            y2="37"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="22"
            y1="12"
            x2="32"
            y2="28"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="78"
            y1="12"
            x2="68"
            y2="28"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="90"
            y1="26"
            x2="76"
            y2="37"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="90"
            y1="94"
            x2="76"
            y2="83"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="78"
            y1="108"
            x2="68"
            y2="92"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="22"
            y1="108"
            x2="32"
            y2="92"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="10"
            y1="94"
            x2="24"
            y2="83"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          {/* Internal Brilliant Star Facet Lattice */}
          <polygon
            points="50,28 76,60 50,92 24,60"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.6"
          />
          <line
            x1="24"
            y1="37"
            x2="76"
            y2="83"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.4"
          />
          <line
            x1="76"
            y1="37"
            x2="24"
            y2="83"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.4"
          />
          {renderInclusions()}
        </svg>
      );

    case "marquise":
      return (
        <svg
          viewBox="0 0 100 130"
          className={className}
          style={style}
          fill="none"
        >
          {/* Navette / Football Outline */}
          <path
            d="M 50 8 C 76 28, 90 44, 90 65 C 90 86, 76 102, 50 122 C 24 102, 10 86, 10 65 C 10 44, 24 28, 50 8 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Inner Rhomboid Table */}
          <polygon
            points="50,34 72,65 50,96 28,65"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Star Lines from Tips */}
          <line
            x1="50"
            y1="8"
            x2="50"
            y2="34"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.75"
          />
          <line
            x1="50"
            y1="96"
            x2="50"
            y2="122"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.75"
          />
          {/* Waist Facet Lines */}
          <line
            x1="10"
            y1="65"
            x2="28"
            y2="65"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="72"
            y1="65"
            x2="90"
            y2="65"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          {/* Diagonal Star Facets */}
          <line
            x1="28"
            y1="42"
            x2="39"
            y2="50"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          <line
            x1="72"
            y1="42"
            x2="61"
            y2="50"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          <line
            x1="28"
            y1="88"
            x2="39"
            y2="80"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          <line
            x1="72"
            y1="88"
            x2="61"
            y2="80"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          <circle
            cx="50"
            cy="65"
            r="3"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.5"
          />
          {renderInclusions()}
        </svg>
      );

    case "asscher":
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
        >
          {/* Cropped-Corner Square Octagon */}
          <polygon
            points="28,10 72,10 90,28 90,72 72,90 28,90 10,72 10,28"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Outer Step 1 */}
          <polygon
            points="32,18 68,18 82,32 82,68 68,82 32,82 18,68 18,32"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          {/* Middle Step 2 */}
          <polygon
            points="36,26 64,26 74,36 74,64 64,74 36,74 26,64 26,36"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          {/* Table (Step 3) */}
          <polygon
            points="40,34 60,34 66,40 66,60 60,66 40,66 34,60 34,40"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Iconic Asscher "Windmill" Diagonals */}
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.75"
          />
          <line
            x1="90"
            y1="10"
            x2="10"
            y2="90"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.75"
          />
          <circle
            cx="50"
            cy="50"
            r="3"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
          />
          {renderInclusions()}
        </svg>
      );

    case "heart":
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
        >
          {/* Outer Heart Silhouette */}
          <path
            d="M 50 30 C 44 14, 26 10, 16 22 C 6 34, 8 50, 20 64 C 32 76, 44 84, 50 94 C 56 84, 68 76, 80 64 C 92 50, 94 34, 84 22 C 74 10, 56 14, 50 30 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Inner Heart Table */}
          <path
            d="M 50 44 C 47 34, 38 32, 32 38 C 26 44, 28 52, 36 60 C 42 66, 48 72, 50 78 C 52 72, 58 66, 64 60 C 72 52, 74 44, 68 38 C 62 32, 53 34, 50 44 Z"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
          />
          {/* Cleft Line */}
          <line
            x1="50"
            y1="30"
            x2="50"
            y2="44"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          {/* Tip Line */}
          <line
            x1="50"
            y1="78"
            x2="50"
            y2="94"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          {/* Lobe Radial Facets */}
          <line
            x1="16"
            y1="22"
            x2="32"
            y2="38"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="84"
            y1="22"
            x2="68"
            y2="38"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="8"
            y1="50"
            x2="28"
            y2="52"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="92"
            y1="50"
            x2="72"
            y2="52"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          {renderInclusions()}
        </svg>
      );

    case "tapered-baguette":
      return (
        <svg
          viewBox="0 0 100 120"
          className={className}
          style={style}
          fill="none"
        >
          {/* Tapered Outer Trapezoid */}
          <polygon
            points="14,12 86,12 72,108 28,108"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Step 1 */}
          <polygon
            points="22,22 78,22 66,98 34,98"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          {/* Step 2 Table */}
          <polygon
            points="30,32 70,32 60,88 40,88"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Corner Bevel Lines */}
          <line
            x1="14"
            y1="12"
            x2="30"
            y2="32"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          <line
            x1="86"
            y1="12"
            x2="70"
            y2="32"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          <line
            x1="72"
            y1="108"
            x2="60"
            y2="88"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          <line
            x1="28"
            y1="108"
            x2="40"
            y2="88"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          {renderInclusions()}
        </svg>
      );

    case "baguette":
      return (
        <svg
          viewBox="0 0 100 120"
          className={className}
          style={style}
          fill="none"
        >
          {/* Rectangular Step Cut */}
          <rect
            x="16"
            y="10"
            width="68"
            height="100"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.3}
          />
          {/* Step 1 */}
          <rect
            x="24"
            y="20"
            width="52"
            height="80"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.8}
            opacity="0.8"
          />
          {/* Table */}
          <rect
            x="32"
            y="30"
            width="36"
            height="60"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Corner Bevel Lines */}
          <line
            x1="16"
            y1="10"
            x2="32"
            y2="30"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          <line
            x1="84"
            y1="10"
            x2="68"
            y2="30"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          <line
            x1="84"
            y1="110"
            x2="68"
            y2="90"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          <line
            x1="16"
            y1="110"
            x2="32"
            y2="90"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            opacity="0.7"
          />
          {renderInclusions()}
        </svg>
      );

    case "round":
    default:
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
        >
          {/* Outer Circle */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth * 1.2}
          />
          {/* Center Table Octagon */}
          <polygon
            points="36,22 64,22 78,36 78,64 64,78 36,78 22,64 22,36"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.9}
          />
          {/* Star Facets (Connecting table points to outer circle) */}
          <line
            x1="50"
            y1="6"
            x2="50"
            y2="22"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="50"
            y1="78"
            x2="50"
            y2="94"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="6"
            y1="50"
            x2="22"
            y2="50"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          <line
            x1="78"
            y1="50"
            x2="94"
            y2="50"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.6}
            opacity="0.7"
          />
          {/* Diagonal Corner Radials */}
          <line
            x1="19"
            y1="19"
            x2="36"
            y2="22"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="19"
            y1="19"
            x2="22"
            y2="36"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="81"
            y1="19"
            x2="64"
            y2="22"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="81"
            y1="19"
            x2="78"
            y2="36"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="19"
            y1="81"
            x2="36"
            y2="78"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="19"
            y1="81"
            x2="22"
            y2="64"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="81"
            y1="81"
            x2="64"
            y2="78"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          <line
            x1="81"
            y1="81"
            x2="78"
            y2="64"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.5}
            opacity="0.6"
          />
          {/* Inner Facet Cross */}
          <line
            x1="22"
            y1="36"
            x2="78"
            y2="64"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.35"
          />
          <line
            x1="78"
            y1="36"
            x2="22"
            y2="64"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.4}
            opacity="0.35"
          />
          {/* Central Culet */}
          <circle
            cx="50"
            cy="50"
            r="4"
            stroke={stroke}
            strokeWidth={strokeWidth * 0.7}
            fill="rgba(184,150,90,0.1)"
          />
          {renderInclusions()}
        </svg>
      );
  }
}

/**
 * Cut Profile Component (Well Cut vs Too Shallow vs Too Deep)
 * Displays shape-tailored side profile ray-tracing diagrams.
 */
export interface DiamondCutProfileSvgProps {
  shapeSlug: string;
  variant: "ideal" | "shallow" | "deep";
  isSelected?: boolean;
}

export function DiamondCutProfileSvg({
  shapeSlug,
  variant,
  isSelected = false,
}: DiamondCutProfileSvgProps) {
  const norm = normalizeShapeSlug(shapeSlug);
  const stroke = isSelected ? "#B8965A" : "#A6927D";
  const bgFill = isSelected ? "rgba(184,150,90,0.08)" : "rgba(184,150,90,0.02)";
  const lightRayColor = isSelected ? "#B8965A" : "#8A7968";

  // Step Cuts: Emerald, Asscher, Baguette
  const isStepCut =
    norm === "emerald" ||
    norm === "asscher" ||
    norm === "baguette" ||
    norm === "tapered-baguette";

  if (isStepCut) {
    if (variant === "ideal") {
      return (
        <svg viewBox="0 0 80 85" className="w-16 h-20" fill="none">
          {/* Ideal Step Profile */}
          <polygon
            points="12,18 68,18 78,28 58,80 22,80 2,28"
            stroke={stroke}
            strokeWidth="1.5"
            fill={bgFill}
          />
          {/* Table */}
          <line x1="12" y1="18" x2="68" y2="18" stroke={stroke} strokeWidth="1.5" />
          {/* Stepped Pavilion Tier 1 */}
          <line x1="7" y1="42" x2="73" y2="42" stroke={stroke} strokeWidth="0.8" opacity="0.6" />
          {/* Stepped Pavilion Tier 2 */}
          <line x1="14" y1="60" x2="66" y2="60" stroke={stroke} strokeWidth="0.8" opacity="0.6" />
          {/* Girdle */}
          <line x1="2" y1="28" x2="78" y2="28" stroke={stroke} strokeWidth="1" opacity="0.7" />
          {/* Culet */}
          <line x1="22" y1="80" x2="58" y2="80" stroke={stroke} strokeWidth="1.2" />
          {/* Light Rays Returning Upward */}
          <path
            d="M 30,18 L 30,42 L 50,60 L 50,18"
            stroke={lightRayColor}
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        </svg>
      );
    }
    if (variant === "shallow") {
      return (
        <svg viewBox="0 0 80 65" className="w-16 h-14" fill="none">
          {/* Too Shallow Step Cut - Wide & Thin */}
          <polygon
            points="8,16 72,16 78,24 62,56 18,56 2,24"
            stroke={stroke}
            strokeWidth="1.5"
            fill={bgFill}
          />
          <line x1="8" y1="16" x2="72" y2="16" stroke={stroke} strokeWidth="1.5" />
          <line x1="2" y1="24" x2="78" y2="24" stroke={stroke} strokeWidth="0.8" opacity="0.6" />
          <line x1="18" y1="56" x2="62" y2="56" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" />
          {/* Light Ray leaking straight through floor (Windowing) */}
          <line x1="40" y1="16" x2="40" y2="62" stroke={lightRayColor} strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );
    }
    // Deep Step Cut
    return (
      <svg viewBox="0 0 80 105" className="w-16 h-24" fill="none">
        {/* Too Deep Step Cut - Narrow Top, Heavy Base */}
        <polygon
          points="20,16 60,16 74,26 54,100 26,100 6,26"
          stroke={stroke}
          strokeWidth="1.5"
          fill={bgFill}
        />
        <line x1="20" y1="16" x2="60" y2="16" stroke={stroke} strokeWidth="1.5" />
        <line x1="6" y1="26" x2="74" y2="26" stroke={stroke} strokeWidth="0.8" opacity="0.6" />
        <line x1="14" y1="55" x2="66" y2="55" stroke={stroke} strokeWidth="0.7" opacity="0.5" />
        <line x1="26" y1="100" x2="54" y2="100" stroke={stroke} strokeWidth="1" />
        {/* Light escaping out the side */}
        <path d="M 40,16 L 40,55 L 70,75" stroke={lightRayColor} strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }

  // Brilliant Cuts (Round, Oval, Princess, Cushion, Pear, Marquise, Heart, Radiant)
  if (variant === "ideal") {
    return (
      <svg viewBox="0 0 80 90" className="w-16 h-20" fill="none">
        <polygon
          points="40,5 75,30 60,85 20,85 5,30"
          stroke={stroke}
          strokeWidth="1.5"
          fill={bgFill}
        />
        <line x1="5" y1="30" x2="40" y2="5" stroke={stroke} strokeWidth="0.8" />
        <line x1="75" y1="30" x2="40" y2="5" stroke={stroke} strokeWidth="0.8" />
        <line x1="5" y1="30" x2="20" y2="85" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
        <line x1="75" y1="30" x2="60" y2="85" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
        <line x1="20" y1="85" x2="60" y2="85" stroke={stroke} strokeWidth="0.8" />
        {/* Total Internal Reflection Ray */}
        <path
          d="M 32,5 L 20,85 L 60,65 L 50,5"
          stroke={lightRayColor}
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>
    );
  }

  if (variant === "shallow") {
    return (
      <svg viewBox="0 0 80 65" className="w-16 h-14" fill="none">
        <polygon
          points="40,5 75,25 65,60 15,60 5,25"
          stroke={stroke}
          strokeWidth="1.5"
          fill={bgFill}
        />
        <line x1="5" y1="25" x2="75" y2="25" stroke={stroke} strokeWidth="0.5" opacity="0.3" />
        <line x1="15" y1="60" x2="65" y2="60" stroke={stroke} strokeWidth="0.8" strokeDasharray="3 2" />
        {/* Light leaking out bottom */}
        <line x1="40" y1="5" x2="40" y2="62" stroke={lightRayColor} strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    );
  }

  // Deep
  return (
    <svg viewBox="0 0 80 110" className="w-16 h-24" fill="none">
      <polygon
        points="40,5 72,28 58,105 22,105 8,28"
        stroke={stroke}
        strokeWidth="1.5"
        fill={bgFill}
      />
      <line x1="8" y1="28" x2="72" y2="28" stroke={stroke} strokeWidth="0.5" opacity="0.3" />
      <line x1="22" y1="105" x2="58" y2="105" stroke={stroke} strokeWidth="0.8" />
      {/* Light escaping out opposite flank */}
      <path d="M 38,5 L 30,60 L 68,85" stroke={lightRayColor} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

export interface DiamondBlueprintSvgProps {
  shapeSlug: string;
  tablePercent?: string;
  depthPercent?: string;
  culetSize?: string;
  girdleThickness?: string;
  className?: string;
}

export function DiamondBlueprintSvg({
  shapeSlug,
  tablePercent = "54% – 58%",
  depthPercent = "61% – 63%",
  culetSize = "None to Very Small",
  girdleThickness = "Medium",
  className = "w-full max-w-md h-auto",
}: DiamondBlueprintSvgProps) {
  const norm = normalizeShapeSlug(shapeSlug);

  const renderShapeBlueprintProfile = () => {
    switch (norm) {
      case "heart":
        return (
          <g>
            {/* Heart Blueprint Profile with distinct cleft */}
            <path
              d="M 105,48 C 125,38, 150,42, 170,58 C 190,42, 215,38, 235,48 L 268,90 L 170,185 L 72,90 Z"
              fill="rgba(184,150,90,0.06)"
              stroke="#B8965A"
              strokeWidth="1.6"
            />
            {/* Girdle Line */}
            <line x1="72" y1="90" x2="268" y2="90" stroke="#B8965A" strokeWidth="1" opacity="0.6" />
            {/* Cleft Dip Line */}
            <line x1="170" y1="58" x2="170" y2="90" stroke="#B8965A" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
            {/* Pavilion Facet Radials */}
            <line x1="105" y1="90" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.4" strokeDasharray="2 2" />
            <line x1="235" y1="90" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.4" strokeDasharray="2 2" />
          </g>
        );

      case "pear":
        return (
          <g>
            {/* Teardrop Blueprint Profile with pointed left flank and curved right belly */}
            <path
              d="M 85,68 L 120,48 L 225,48 L 268,90 L 170,185 L 75,90 Z"
              fill="rgba(184,150,90,0.06)"
              stroke="#B8965A"
              strokeWidth="1.6"
            />
            <line x1="75" y1="90" x2="268" y2="90" stroke="#B8965A" strokeWidth="1" opacity="0.6" />
            <line x1="120" y1="48" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
            <line x1="225" y1="48" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
          </g>
        );

      case "marquise":
        return (
          <g>
            {/* Navette Winged Profile */}
            <path
              d="M 60,90 L 115,48 L 225,48 L 280,90 L 170,185 Z"
              fill="rgba(184,150,90,0.06)"
              stroke="#B8965A"
              strokeWidth="1.6"
            />
            <line x1="60" y1="90" x2="280" y2="90" stroke="#B8965A" strokeWidth="1" opacity="0.6" />
            <line x1="115" y1="48" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
            <line x1="225" y1="48" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
          </g>
        );

      case "princess":
        return (
          <g>
            {/* Square Inverted Pyramid Profile */}
            <polygon
              points="100,50 240,50 272,88 170,185 68,88"
              fill="rgba(184,150,90,0.06)"
              stroke="#B8965A"
              strokeWidth="1.6"
            />
            <line x1="68" y1="88" x2="272" y2="88" stroke="#B8965A" strokeWidth="1" opacity="0.6" />
            <line x1="100" y1="50" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.4" strokeDasharray="2 2" />
            <line x1="240" y1="50" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.4" strokeDasharray="2 2" />
          </g>
        );

      case "emerald":
      case "asscher":
      case "baguette":
      case "tapered-baguette":
        return (
          <g>
            {/* Step Cut Tiered Profile */}
            <polygon
              points="105,50 235,50 265,90 225,175 115,175 75,90"
              fill="rgba(184,150,90,0.06)"
              stroke="#B8965A"
              strokeWidth="1.6"
            />
            <line x1="75" y1="90" x2="265" y2="90" stroke="#B8965A" strokeWidth="1" opacity="0.6" />
            <line x1="90" y1="125" x2="250" y2="125" stroke="#B8965A" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
            <line x1="105" y1="150" x2="235" y2="150" stroke="#B8965A" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
          </g>
        );

      case "cushion":
      case "oval":
        return (
          <g>
            {/* Pillow / Oval Curved Profile */}
            <path
              d="M 110,48 Q 170,44 230,48 L 268,90 L 170,185 L 72,90 Z"
              fill="rgba(184,150,90,0.06)"
              stroke="#B8965A"
              strokeWidth="1.6"
            />
            <line x1="72" y1="90" x2="268" y2="90" stroke="#B8965A" strokeWidth="1" opacity="0.6" />
            <line x1="110" y1="48" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
            <line x1="230" y1="48" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
          </g>
        );

      case "round":
      default:
        return (
          <g>
            {/* Round Brilliant Profile */}
            <polygon
              points="115,50 225,50 270,90 170,185 70,90"
              fill="rgba(184,150,90,0.06)"
              stroke="#B8965A"
              strokeWidth="1.6"
            />
            <line x1="70" y1="90" x2="270" y2="90" stroke="#B8965A" strokeWidth="1" opacity="0.6" />
            <line x1="115" y1="50" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
            <line x1="225" y1="50" x2="170" y2="185" stroke="#B8965A" strokeWidth="0.6" opacity="0.3" strokeDasharray="2 2" />
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 340 220" className={className} fill="none">
      {/* Blueprint grid background */}
      <defs>
        <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(184,150,90,0.08)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="340" height="220" fill="url(#blueprint-grid)" rx="12" />
      <rect width="340" height="220" stroke="rgba(184,150,90,0.25)" strokeWidth="1" rx="12" />

      {/* Axis Lines */}
      <line x1="170" y1="20" x2="170" y2="200" stroke="rgba(184,150,90,0.25)" strokeDasharray="3 3" strokeWidth="0.8" />
      <line x1="20" y1="90" x2="320" y2="90" stroke="rgba(184,150,90,0.25)" strokeDasharray="3 3" strokeWidth="0.8" />

      {/* Shape-specific Diamond Profile */}
      {renderShapeBlueprintProfile()}

      {/* Dimension Line: Table % */}
      <line x1="110" y1="34" x2="230" y2="34" stroke="#B8965A" strokeWidth="1.2" />
      <line x1="110" y1="30" x2="110" y2="38" stroke="#B8965A" strokeWidth="1.2" />
      <line x1="230" y1="30" x2="230" y2="38" stroke="#B8965A" strokeWidth="1.2" />
      <text x="170" y="28" fill="#B8965A" fontSize="9" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
        TABLE {tablePercent}
      </text>

      {/* Dimension Line: Total Depth % */}
      <line x1="290" y1="50" x2="290" y2="180" stroke="#B8965A" strokeWidth="1.2" />
      <line x1="286" y1="50" x2="294" y2="50" stroke="#B8965A" strokeWidth="1.2" />
      <line x1="286" y1="180" x2="294" y2="180" stroke="#B8965A" strokeWidth="1.2" />
      <text
        x="302"
        y="118"
        fill="#B8965A"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.08em"
        transform="rotate(90, 302, 118)"
        textAnchor="middle"
      >
        DEPTH {depthPercent}
      </text>

      {/* Callout: Girdle */}
      <line x1="45" y1="90" x2="68" y2="90" stroke="#B8965A" strokeWidth="0.8" />
      <circle cx="70" cy="90" r="2" fill="#B8965A" />
      <text x="42" y="86" fill="#8C765C" fontSize="8" fontWeight="600" textAnchor="end" letterSpacing="0.05em">
        GIRDLE
      </text>
      <text x="42" y="97" fill="#1A1009" fontSize="7.5" fontWeight="600" textAnchor="end">
        {girdleThickness.split(" ")[0]}
      </text>

      {/* Callout: Culet */}
      <line x1="170" y1="185" x2="170" y2="202" stroke="#B8965A" strokeWidth="0.8" />
      <circle cx="170" cy="185" r="2" fill="#B8965A" />
      <text x="170" y="212" fill="#8C765C" fontSize="8" fontWeight="600" textAnchor="middle" letterSpacing="0.05em">
        CULET: {culetSize}
      </text>

      {/* Technical Blueprint Badge */}
      <text x="24" y="202" fill="rgba(184,150,90,0.6)" fontSize="7.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.1em">
        SCALE 1:1 • GIA SPEC
      </text>
    </svg>
  );
}

export interface RingMountSvgProps {
  settingType: "solitaire" | "halo" | "three-stone" | "bezel";
  shapeSlug: string;
  className?: string;
}

export function RingMountSvg({
  settingType,
  shapeSlug,
  className = "w-24 h-24",
}: RingMountSvgProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      {/* Curved Ring Band / Shank */}
      <path
        d="M 24,78 C 24,106 96,106 96,78"
        stroke="#C5A059"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 28,78 C 28,102 92,102 92,78"
        stroke="#E6CA85"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {settingType === "solitaire" && (
        <g>
          {/* Solitaire Prongs */}
          <path d="M 38,76 L 46,45" stroke="#B8965A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 82,76 L 74,45" stroke="#B8965A" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="42" y1="62" x2="78" y2="62" stroke="#B8965A" strokeWidth="1.2" opacity="0.5" />
          {/* Main Stone */}
          <g transform="translate(42, 22) scale(0.36)">
            <DiamondFacetSvg shapeSlug={shapeSlug} fill="#FAF7EE" stroke="#B8965A" strokeWidth={1.5} />
          </g>
          {/* Prong Tips */}
          <circle cx="46" cy="45" r="2.2" fill="#D4AF37" />
          <circle cx="74" cy="45" r="2.2" fill="#D4AF37" />
        </g>
      )}

      {settingType === "halo" && (
        <g>
          {/* Halo Basket Base */}
          <path d="M 36,78 L 44,55" stroke="#B8965A" strokeWidth="2" />
          <path d="M 84,78 L 76,55" stroke="#B8965A" strokeWidth="2" />
          {/* Pavé Halo Outer Ring with diamond dots */}
          <ellipse cx="60" cy="42" rx="25" ry="22" stroke="#B8965A" strokeWidth="1.2" fill="rgba(184,150,90,0.06)" />
          {/* Pavé micro-diamonds */}
          {[
            [38, 42], [42, 28], [51, 22], [60, 20], [69, 22], [78, 28], [82, 42],
            [78, 56], [69, 62], [60, 64], [51, 62], [42, 56]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.5" fill="#FAF7EE" stroke="#B8965A" strokeWidth="0.6" />
          ))}
          {/* Main Center Stone */}
          <g transform="translate(45, 27) scale(0.3)">
            <DiamondFacetSvg shapeSlug={shapeSlug} fill="#FFFFFF" stroke="#B8965A" strokeWidth={1.5} />
          </g>
        </g>
      )}

      {settingType === "three-stone" && (
        <g>
          {/* Three-Stone Basket */}
          <path d="M 32,78 L 40,58" stroke="#B8965A" strokeWidth="2" />
          <path d="M 88,78 L 80,58" stroke="#B8965A" strokeWidth="2" />
          {/* Left Side Accent Stone */}
          <g transform="translate(30, 36) scale(0.2)">
            <DiamondFacetSvg shapeSlug="round" fill="#FAF7EE" stroke="#B8965A" strokeWidth={1.5} />
          </g>
          {/* Right Side Accent Stone */}
          <g transform="translate(70, 36) scale(0.2)">
            <DiamondFacetSvg shapeSlug="round" fill="#FAF7EE" stroke="#B8965A" strokeWidth={1.5} />
          </g>
          {/* Main Center Stone */}
          <g transform="translate(44, 22) scale(0.32)">
            <DiamondFacetSvg shapeSlug={shapeSlug} fill="#FFFFFF" stroke="#B8965A" strokeWidth={1.5} />
          </g>
        </g>
      )}

      {settingType === "bezel" && (
        <g>
          {/* Bezel Struts */}
          <path d="M 36,78 L 44,52" stroke="#B8965A" strokeWidth="2.5" />
          <path d="M 84,78 L 76,52" stroke="#B8965A" strokeWidth="2.5" />
          {/* Solid Gold Bezel Collar */}
          <ellipse cx="60" cy="42" rx="22" ry="20" stroke="#C5A059" strokeWidth="3" fill="rgba(184,150,90,0.12)" />
          {/* Main Stone nestled flush inside bezel */}
          <g transform="translate(44, 26) scale(0.32)">
            <DiamondFacetSvg shapeSlug={shapeSlug} fill="#FAF7EE" stroke="#B8965A" strokeWidth={1.3} />
          </g>
        </g>
      )}
    </svg>
  );
}

export interface DiamondVitalGraphicProps {
  type: "fire" | "ratio" | "facets" | "style";
  className?: string;
}

export function DiamondVitalGraphic({
  type,
  className = "w-9 h-9",
}: DiamondVitalGraphicProps) {
  if (type === "fire") {
    return (
      <svg viewBox="0 0 40 40" className={className} fill="none">
        {/* Optical Dispersion Sunburst Rays */}
        <line x1="20" y1="4" x2="20" y2="10" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="30" x2="20" y2="36" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="4" y1="20" x2="10" y2="20" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="20" x2="36" y2="20" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="9" x2="13" y2="13" stroke="#B8965A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="31" y1="9" x2="27" y2="13" stroke="#B8965A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="9" y1="31" x2="13" y2="27" stroke="#B8965A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="31" y1="31" x2="27" y2="27" stroke="#B8965A" strokeWidth="1.2" strokeLinecap="round" />
        <polygon points="20,12 28,20 20,28 12,20" fill="rgba(184,150,90,0.18)" stroke="#B8965A" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="2" fill="#B8965A" />
      </svg>
    );
  }

  if (type === "ratio") {
    return (
      <svg viewBox="0 0 40 40" className={className} fill="none">
        {/* Proportional Silhouette Box with Dimension Arrows */}
        <rect x="10" y="8" width="20" height="24" rx="3" stroke="#B8965A" strokeWidth="1.3" fill="rgba(184,150,90,0.08)" />
        {/* Width arrow */}
        <line x1="10" y1="4" x2="30" y2="4" stroke="#B8965A" strokeWidth="1" />
        <path d="M 12,2 L 10,4 L 12,6" stroke="#B8965A" strokeWidth="0.8" />
        <path d="M 28,2 L 30,4 L 28,6" stroke="#B8965A" strokeWidth="0.8" />
        {/* Height arrow */}
        <line x1="34" y1="8" x2="34" y2="32" stroke="#B8965A" strokeWidth="1" />
        <path d="M 32,10 L 34,8 L 36,10" stroke="#B8965A" strokeWidth="0.8" />
        <path d="M 32,30 L 34,32 L 36,30" stroke="#B8965A" strokeWidth="0.8" />
      </svg>
    );
  }

  if (type === "facets") {
    return (
      <svg viewBox="0 0 40 40" className={className} fill="none">
        {/* 3D Facet Matrix Lattice */}
        <polygon points="20,6 34,14 34,28 20,36 6,28 6,14" stroke="#B8965A" strokeWidth="1.2" fill="rgba(184,150,90,0.06)" />
        <line x1="20" y1="6" x2="20" y2="36" stroke="#B8965A" strokeWidth="0.8" opacity="0.6" />
        <line x1="6" y1="14" x2="34" y2="28" stroke="#B8965A" strokeWidth="0.8" opacity="0.4" />
        <line x1="6" y1="28" x2="34" y2="14" stroke="#B8965A" strokeWidth="0.8" opacity="0.4" />
        <circle cx="20" cy="21" r="3" fill="#B8965A" opacity="0.7" />
      </svg>
    );
  }

  // Style Family
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      {/* Gemological Geometry Shield Emblem */}
      <path d="M 20,6 L 33,11 C 33,24 20,34 20,34 C 20,34 7,24 7,11 Z" stroke="#B8965A" strokeWidth="1.3" fill="rgba(184,150,90,0.08)" />
      <path d="M 14,17 L 20,13 L 26,17 L 20,27 Z" stroke="#B8965A" strokeWidth="0.9" fill="rgba(184,150,90,0.15)" />
    </svg>
  );
}
