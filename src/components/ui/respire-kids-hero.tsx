"use client";

import {
  useEffect,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const FONT_HREFS = [
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,300;1,9..144,400;1,9..144,500&display=swap",
  "https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600&display=swap",
];

const DISPLAY = "'Fraunces', ui-serif, Georgia, Cambria, serif";
const SANS =
  "'General Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

function useWebFonts(enabled: boolean) {
  useEffect(() => {
    if (!enabled || typeof document === "undefined") return;

    for (const href of FONT_HREFS) {
      if (document.querySelector(`link[href="${href}"]`)) continue;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }, [enabled]);
}

export const RESPIRE_KIDS_COLORS = {
  greenDeep: "#14513A",
  green: "#3E9B6E",
  greenLight: "#A8E0BF",
  cream: "#FBF6EE",
  sand: "#F0E4D3",
  ink: "#12271F",
} as const;

const HERO_STYLES = `
@keyframes respire-kids-hero-rise {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: none; }
}
.respire-kids-hero-image {
  object-position: var(--respire-mobile-focus, 49% 42%);
}
@media (min-width: 768px) {
  .respire-kids-hero-image {
    object-position: var(--respire-focus, 50% 50%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .respire-kids-hero-rise {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
`;

const BUTTON_STYLES = `
@keyframes respire-kids-hero-sheen {
  from { transform: translateX(-140%) skewX(-16deg); }
  to   { transform: translateX(320%) skewX(-16deg); }
}
.respire-kids-hero-sheen { transform: translateX(-140%) skewX(-16deg); }
.respire-kids-hero-btn:hover .respire-kids-hero-sheen {
  animation: respire-kids-hero-sheen 0.85s cubic-bezier(0.32, 0, 0.24, 1);
}
.respire-kids-hero-btn::after {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 1;
  border-radius: inherit;
  opacity: 0;
  mix-blend-mode: overlay;
  background: radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%);
  transition: opacity 0.3s ease-in-out;
}
.respire-kids-hero-btn:hover::after { opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  .respire-kids-hero-btn:hover .respire-kids-hero-sheen { animation: none; }
}
`;

function rise(step: number): CSSProperties {
  return {
    animation: `respire-kids-hero-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${step * 0.09}s both`,
  };
}

export function RespireKidsAccent({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <em
      className={cn("inline-block italic", className)}
      style={{
        fontFamily: DISPLAY,
        fontWeight: 300,
        fontSize: "1.12em",
        lineHeight: 1,
        letterSpacing: "-0.01em",
        color: RESPIRE_KIDS_COLORS.cream,
        ...style,
      }}
    >
      {children}
    </em>
  );
}

export interface RespireKidsHeroButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  children?: ReactNode;
}

export function RespireKidsHeroButton({
  icon,
  children,
  className,
  style,
  ...rest
}: RespireKidsHeroButtonProps) {
  return (
    <a
      {...rest}
      className={cn(
        "respire-kids-hero-btn relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full",
        "px-7 py-3.5 text-base font-medium tracking-[-0.13px] text-white",
        "transition-transform duration-150 ease-out active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      )}
      style={{
        fontFamily: SANS,
        backgroundImage:
          "radial-gradient(101.79% 101.79% at 65.61% 81.79%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%), radial-gradient(114.65% 114.65% at 9.73% 17.27%, #3E9B6E 0%, #14513A 100%)",
        backgroundBlendMode: "overlay, normal",
        boxShadow:
          "20px 20px 24px rgba(20,81,58,0.28), inset -3px -3px 4px rgba(214,240,225,0.45), inset 4px 4px 4px rgba(10,52,36,0.18)",
        ...style,
      }}
    >
      <style>{BUTTON_STYLES}</style>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 blur-[1px]"
      >
        <span
          className="absolute -left-px -top-px z-20 h-full w-full"
          style={{
            opacity: 0.45,
            padding: 3,
            borderRadius: 9999,
            background:
              "linear-gradient(176.87deg, rgba(255,255,255,0.5) 8.56%, rgba(255,255,255,0) 85.04%)",
            WebkitMask:
              "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            maskComposite: "exclude",
          }}
        />
      </span>

      <span
        aria-hidden
        className="respire-kids-hero-sheen pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 blur-[5px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      {icon ? <span className="relative z-30 -mb-px">{icon}</span> : null}
      <span className="relative z-30">{children}</span>
    </a>
  );
}

export interface RespireKidsHeroProps {
  image?: string;
  sources?: Array<{ src: string; width: number }>;
  sizes?: string;
  imageAlt?: string;
  focus?: string;
  mobileFocus?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  ctaIcon?: ReactNode;
  note?: ReactNode;
  scrim?: number;
  minHeight?: string;
  loadFonts?: boolean;
  children?: ReactNode;
  className?: string;
}

type HeroStyle = CSSProperties & {
  "--respire-focus": string;
  "--respire-mobile-focus": string;
};

export function RespireKidsHero({
  image = "/respire-kids/hero-respire-kids-1774.jpg",
  sources,
  sizes = "100vw",
  imageAlt = "",
  focus = "50% 50%",
  mobileFocus = "49% 42%",
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "#",
  ctaIcon,
  note,
  scrim = 0.86,
  minHeight = "100svh",
  loadFonts = true,
  children,
  className,
}: RespireKidsHeroProps) {
  useWebFonts(loadFonts);
  const veil = Math.max(0, Math.min(1, scrim));
  const heroStyle: HeroStyle = {
    minHeight,
    fontFamily: SANS,
    "--respire-focus": focus,
    "--respire-mobile-focus": mobileFocus,
  };

  return (
    <section
      className={cn(
        "relative isolate flex w-full overflow-hidden bg-[#12271F]",
        className,
      )}
      style={heroStyle}
    >
      <style>{HERO_STYLES}</style>

      {/* The supplied image is intentionally panoramic, with its reading space on the left. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        srcSet={
          sources?.length
            ? sources.map((source) => `${source.src} ${source.width}w`).join(", ")
            : undefined
        }
        sizes={sources?.length ? sizes : undefined}
        alt={imageAlt}
        aria-hidden={imageAlt ? undefined : true}
        decoding="async"
        fetchPriority="high"
        className="respire-kids-hero-image absolute inset-0 z-0 h-full w-full object-cover"
      />

      {veil > 0 ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(90deg,
                rgba(10,40,28,${0.88 * veil}) 0%,
                rgba(10,40,28,${0.72 * veil}) 30%,
                rgba(10,40,28,${0.24 * veil}) 54%,
                rgba(10,40,28,0) 72%)`,
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(to_top,rgba(7,32,22,0.34),transparent_42%)] md:bg-none"
          />
        </>
      ) : null}

      <div
        className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-6 py-24 sm:px-10 md:px-14 lg:px-16"
        style={{ minHeight }}
      >
        <div className="flex w-full max-w-[34rem] flex-col items-start text-left">
          {eyebrow ? (
            <p
              className="respire-kids-hero-rise mb-5 text-xs font-medium uppercase tracking-[0.2em]"
              style={{ ...rise(0), color: RESPIRE_KIDS_COLORS.greenLight }}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1
            className="respire-kids-hero-rise max-w-[12ch] text-balance text-[clamp(2.8rem,6.4vw,5.6rem)] font-normal leading-[0.98] tracking-[-0.035em] text-white"
            style={{
              ...rise(1),
              fontFamily: SANS,
              textShadow: "0 2px 30px rgba(7,32,22,0.42)",
            }}
          >
            {title}
          </h1>

          {subtitle ? (
            <p
              className="respire-kids-hero-rise mt-6 max-w-[40ch] text-pretty text-[clamp(1rem,1.4vw,1.175rem)] font-normal leading-relaxed text-white"
              style={{
                ...rise(2),
                textShadow: "0 1px 18px rgba(7,32,22,0.5)",
              }}
            >
              {subtitle}
            </p>
          ) : null}

          <div
            className="respire-kids-hero-rise mt-9 flex flex-col items-start gap-3"
            style={rise(3)}
          >
            {children ??
              (ctaLabel ? (
                <RespireKidsHeroButton href={ctaHref} icon={ctaIcon}>
                  {ctaLabel}
                </RespireKidsHeroButton>
              ) : null)}

            {note ? (
              <p
                className="text-[13px] text-white/80"
                style={{ textShadow: "0 1px 10px rgba(7,32,22,0.9)" }}
              >
                {note}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RespireKidsHero;
