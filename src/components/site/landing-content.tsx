"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";

/* --- Small line-art icons, matching the rest of the site's stroke style --- */

function IconLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M12 2 L4 6 v6 c0 5 3.5 8.5 8 10 c4.5 -1.5 8 -5 8 -10 V6 z" />
    </svg>
  );
}
function IconCheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M9 12 l2 2 l4 -4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
function IconRefresh(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 12 a9 9 0 1 0 9 -9" />
      <path d="M3 12 l4 -4 M3 12 l4 4" />
    </svg>
  );
}
function IconNoFragrance(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10 h18" />
    </svg>
  );
}
function IconCross(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M6 6 l12 12 M18 6 l-12 12" />
    </svg>
  );
}
function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} {...props}>
      <path d="M4 12 l6 6 L20 6" />
    </svg>
  );
}
function IconGrab(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M8 3 v4 M16 3 v4" />
      <rect x="6" y="9" width="12" height="12" rx="3" />
    </svg>
  );
}
function IconFoam(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M12 3 c4 4 6 7 6 10 a6 6 0 1 1 -12 0 c0 -3 2 -6 6 -10 Z" />
    </svg>
  );
}
function IconRecharge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 12 a9 9 0 1 0 3 -6.7" />
      <path d="M3 4 v5 h5" />
    </svg>
  );
}

/** Product swatch icons — stand-ins for real packshots, in the same stroke style as the rest of the page. */
function IconBottle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M10 2 h4 v3 l2 2 v13 a2 2 0 0 1 -2 2 h-4 a2 2 0 0 1 -2 -2 V7 l2 -2 Z" />
      <path d="M9 12 h6" />
    </svg>
  );
}
function IconPouch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M7 3 h10 l1 6 c1 4 1 9 -2 11 a6 6 0 0 1 -8 0 c-3 -2 -3 -7 -2 -11 Z" />
      <path d="M9 3 v3 M15 3 v3" />
    </svg>
  );
}
function IconTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M9 2 h6 l1 3 -1 2 H9 l-1 -2 Z" />
      <path d="M8 7 h8 l1 12 a2 2 0 0 1 -2 3 H9 a2 2 0 0 1 -2 -3 Z" />
    </svg>
  );
}
function IconSoap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="9" width="18" height="9" rx="4" />
      <path d="M8 9 c0 -3 2 -5 4 -5 s4 2 4 5" />
    </svg>
  );
}
function IconPack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M12 3 l9 5 -9 5 -9 -5 Z" />
      <path d="M3 8 v8 l9 5 9 -5 V8" />
      <path d="M12 13 v8" />
    </svg>
  );
}

/** Adds `is-visible` to every `.reveal` element inside once it scrolls into view. */
function useReveal() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

function LaunchForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div>
      <form
        className="launch-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!email.trim()) return;
          setStatus("Merci ! On vous prévient dès l'ouverture de Respire Kids.");
          setEmail("");
        }}
      >
        <label htmlFor="launch-email" className="sr-only">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="launch-email"
          name="email"
          placeholder="ton-email@exemple.fr"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Je rejoins la liste
        </button>
      </form>
      <p className="launch-status" role="status" aria-live="polite">
        {status}
      </p>
      <p className="launch-parents">
        Réservé aux futurs et jeunes parents — pas de spam, un e-mail au lancement.
      </p>
    </div>
  );
}

export function LandingContent() {
  const rootRef = useReveal();

  return (
    <div className="site" ref={rootRef}>
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="#main">
            respire <span>kids</span>
          </a>
          <nav className="primary-nav" aria-label="Navigation principale">
            <a href="#gamme">La gamme</a>
            <a href="#promesse">Notre promesse</a>
            <a href="#rituel">Le rituel</a>
            <a href="#ou-trouver">Où nous trouver</a>
          </nav>
          <div className="header-actions">
            <a className="btn btn-primary btn-sm" href="#lancement">
              Liste de lancement
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="trust-strip">
          <div className="wrap">
            <div className="trust-item">
              <span className="ico">
                <IconLeaf width={18} height={18} />
              </span>
              98{" "}% d&apos;origine naturelle
            </div>
            <div className="trust-item">
              <span className="ico">
                <IconCheckCircle width={18} height={18} />
              </span>
              Formulé sous contrôle pédiatrique
            </div>
            <div className="trust-item">
              <span className="ico">
                <IconRefresh width={18} height={18} />
              </span>
              Flacon rechargeable à l&apos;infini
            </div>
            <div className="trust-item">
              <span className="ico">
                <IconNoFragrance width={18} height={18} />
              </span>
              Sans parfum allergène
            </div>
          </div>
        </section>

        <section className="labels" id="promesse">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="kicker">Notre promesse</span>
              <h2>Une étiquette qu&apos;on peut vraiment lire.</h2>
              <p>
                Entre deux boires, personne n&apos;a le temps de déchiffrer une liste de trente
                composants. On a fait le tri à votre place.
              </p>
            </div>
            <div className="compare">
              <div className="compare-card bad reveal">
                <h3>Ce qu&apos;on trouve trop souvent</h3>
                <ul>
                  <li>
                    <IconCross />
                    Une liste INCI de 30 composants et plus, sans traduction
                  </li>
                  <li>
                    <IconCross />
                    Un parfum synthétique non détaillé, potentiellement allergène
                  </li>
                  <li>
                    <IconCross />
                    Des sulfates agressifs pour les yeux et la peau des tout-petits
                  </li>
                  <li>
                    <IconCross />
                    Un flacon plastique à usage unique, jeté après un mois
                  </li>
                </ul>
              </div>
              <div className="compare-card good reveal">
                <h3>Ce qu&apos;on lit sur Respire Kids</h3>
                <ul>
                  <li>
                    <IconCheck />
                    98{" "}% d&apos;ingrédients d&apos;origine naturelle
                  </li>
                  <li>
                    <IconCheck />
                    Sans parfum allergène, formulé sous contrôle pédiatrique
                  </li>
                  <li>
                    <IconCheck />
                    Une mousse douce, obtenue sans sulfates agressifs
                  </li>
                  <li>
                    <IconCheck />
                    Un flacon incassable, rechargé à vie grâce à l&apos;éco-recharge
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="gamme" id="gamme">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="kicker">La gamme</span>
              <h2>Quatre essentiels pour le rituel du bain.</h2>
              <p>
                Un flacon qu&apos;on ne rachète jamais, une recharge qu&apos;on glisse dedans, et deux
                soins pour la peau — pensés ensemble, du gel à la crème.
              </p>
            </div>
            <div className="product-grid">
              <div className="product-card reveal">
                <div className="swatch">
                  <IconBottle />
                </div>
                <h3>Gel lavant 2-en-1</h3>
                <p className="desc">
                  Corps et cheveux, flacon pompe incassable et ergonomique de 400{" "}ml, forme
                  pensée pour être attrapée dès 3{" "}ans.
                </p>
                <div className="price-row">
                  <span className="price">
                    11<span className="cents">,90{" "}€</span>
                  </span>
                  <span className="price-note">400{" "}ml</span>
                </div>
              </div>

              <div className="product-card reveal">
                <div className="swatch">
                  <IconPouch />
                </div>
                <h3>Éco-recharge gel lavant</h3>
                <p className="desc">
                  Sachet de 500{" "}ml, fluide ou poudre, pour remplir à nouveau le même
                  flacon principal sans en racheter un neuf.
                </p>
                <div className="price-row">
                  <span className="price">
                    8<span className="cents">,90{" "}€</span>
                  </span>
                  <span className="price-note">500{" "}ml</span>
                </div>
              </div>

              <div className="product-card reveal">
                <div className="swatch">
                  <IconTube />
                </div>
                <h3>Crème hydratante</h3>
                <p className="desc">
                  Beurre de karité et avocat, tube recyclé, pour apaiser les peaux sèches
                  après le bain.
                </p>
                <div className="price-row">
                  <span className="price">
                    13<span className="cents">,50{" "}€</span>
                  </span>
                  <span className="price-note">Tube</span>
                </div>
              </div>

              <div className="product-card reveal">
                <div className="swatch">
                  <IconSoap />
                </div>
                <h3>Savon doux</h3>
                <p className="desc">
                  Nettoyant visage &amp; corps à l&apos;huile d&apos;amande douce, format solide de
                  100{" "}g, zéro emballage plastique.
                </p>
                <div className="price-row">
                  <span className="price-note">Inclus dans le pack découverte</span>
                </div>
              </div>

              <div className="product-card pack reveal">
                <span className="badge-best">Le plus complet</span>
                <div className="swatch">
                  <IconPack />
                </div>
                <h3>Pack découverte</h3>
                <p className="desc">
                  L&apos;essentiel de la gamme Respire Kids pour un premier rituel du bain complet,
                  à prix réduit.
                </p>
                <div className="price-row">
                  <span className="price">
                    29<span className="cents">,90{" "}€</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rituel" id="rituel">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="kicker">Le rituel</span>
              <h2>Trois gestes, en toute autonomie.</h2>
              <p>
                Le même flacon accompagne l&apos;enfant du premier bain à la grande section —
                il suffit de le recharger.
              </p>
            </div>
            <div className="steps">
              <div className="step reveal">
                <span className="num" aria-hidden="true">
                  01
                </span>
                <div className="icon-wrap">
                  <IconGrab width={24} height={24} />
                </div>
                <h3>Attraper</h3>
                <p>
                  Une forme ronde et des couleurs vives que la main d&apos;un enfant de 3{" "}ans
                  repère et saisit seule sur le bord de la baignoire.
                </p>
              </div>
              <div className="step reveal">
                <span className="num" aria-hidden="true">
                  02
                </span>
                <div className="icon-wrap">
                  <IconFoam width={24} height={24} />
                </div>
                <h3>Presser &amp; mousser</h3>
                <p>
                  Une pompe souple libère une mousse douce, obtenue naturellement, sans sulfate
                  agressif pour la peau ni les yeux.
                </p>
              </div>
              <div className="step reveal">
                <span className="num" aria-hidden="true">
                  03
                </span>
                <div className="icon-wrap">
                  <IconRecharge width={24} height={24} />
                </div>
                <h3>Recharger</h3>
                <p>
                  Le sachet éco-recharge remplit à nouveau le même flacon incassable —
                  rien à jeter, rien à racheter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="communaute" id="ou-trouver">
          <div className="wrap">
            <div className="comm-grid">
              <div className="reveal">
                <span className="kicker">Construit avec les parents</span>
                <h2>Une gamme testée avant d&apos;être vendue.</h2>
                <div className="comm-list">
                  <div className="item">
                    <span className="dot" />
                    <div>
                      <h4>Co-créée avec la communauté Respire</h4>
                      <p>
                        Les formules et le packaging sont testés et commentés par des parents
                        avant leur mise en rayon.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <span className="dot" />
                    <div>
                      <h4>Portée par de jeunes parents</h4>
                      <p>
                        Des partenariats avec des créateurs eux-mêmes parents, sur Instagram et
                        TikTok, pour en parler sans filtre.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <span className="dot" />
                    <div>
                      <h4>Déjà dans les mains de nos client·es</h4>
                      <p>
                        Des échantillons Respire Kids glissés dans les commandes de la gamme
                        adulte, pour découvrir la gamme avant son lancement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="channel-card reveal">
                <h3>Où nous trouver</h3>
                <ul className="channel-list">
                  <li>
                    respire.co <span className="channel-tag now">Disponible</span>
                  </li>
                  <li>
                    Abonnement éco-recharges <span className="channel-tag now">Disponible</span>
                  </li>
                  <li>
                    Pharmacies partenaires <span className="channel-tag soon">Bientôt</span>
                  </li>
                  <li>
                    Monoprix &amp; Sephora <span className="channel-tag soon">Bientôt</span>
                  </li>
                  <li>
                    Magasins bio <span className="channel-tag soon">Bientôt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="lancement">
          <div className="wrap">
            <div className="launch-cta reveal">
              <svg
                className="launch-blob"
                width={260}
                height={260}
                style={{ right: -60, top: -80 }}
                viewBox="0 0 200 200"
              >
                <circle cx={100} cy={100} r={100} fill="#FBF6EC" />
              </svg>
              <svg
                className="launch-blob"
                width={140}
                height={140}
                style={{ left: -30, bottom: -50 }}
                viewBox="0 0 200 200"
              >
                <circle cx={100} cy={100} r={100} fill="#FBF6EC" />
              </svg>
              <div className="launch-inner">
                <div>
                  <h2>Sois averti·e dès l&apos;ouverture.</h2>
                  <p className="lede">
                    Laisse ton e-mail pour recevoir la date de lancement de Respire Kids et les
                    premiers conseils du rituel du bain.
                  </p>
                </div>
                <LaunchForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="brand" href="#main">
                respire <span>kids</span>
              </a>
              <p>Respire Kids est une gamme de Respire, fabriquée en France.</p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Gamme</h4>
                <a href="#gamme">Gel lavant 2-en-1</a>
                <a href="#gamme">Éco-recharge</a>
                <a href="#gamme">Crème hydratante</a>
                <a href="#gamme">Savon doux</a>
              </div>
              <div className="footer-col">
                <h4>À propos</h4>
                <a href="#promesse">Notre promesse</a>
                <a href="#rituel">Le rituel</a>
                <a href="#ou-trouver">Où nous trouver</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© Respire Kids</span>
            <span>Mentions légales · Confidentialité</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingContent;
