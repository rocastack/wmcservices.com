# Código del Proyecto

### Archivo: `src/App.css`

```css
/* App.css - Ultra Minimal SaaS Component Styles */

/* Base App Container */
.app-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-background);
}

/* Abstract Wireframe Backgrounds (AccessGrid style curves) */
.bg-wireframe {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.03);
  z-index: -1;
  pointer-events: none;
}

.shape-1 {
  width: 120vw;
  height: 120vw;
  top: -60vw;
  left: -10vw;
}

.shape-2 {
  width: 80vw;
  height: 80vw;
  top: 40vh;
  right: -30vw;
}

.shape-3 {
  width: 150vw;
  height: 150vw;
  bottom: -100vw;
  left: -25vw;
}

/* Premium Button Component */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 9999px;
  /* Pill buttons */
  transition: all 0.2s ease;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.85rem;
}

.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
}

.btn-primary:hover {
  background-color: #0B5ED7;
  box-shadow: 0 4px 14px rgba(13, 110, 253, 0.3);
}

.btn-primary:disabled {
  background-color: var(--color-muted);
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.7;
}

.btn-outline {
  background-color: #FFFFFF;
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
}

.btn-outline:hover {
  background-color: rgba(0, 0, 0, 0.02);
  border-color: #CBD5E1;
}

/* Pill Navbar */
.navbar-wrapper {
  position: fixed;
  top: 1.5rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
  padding: 0 1rem;
}

.pill-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  /* Aligned with .container */
  padding: 0.55rem 0.55rem 0.55rem 2rem;
  border-radius: 9999px;
  background-color: #ffffff;
  /* Pure white background */
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}

.transparent-nav {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

.transparent-nav .nav-links a {
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.text-white {
  color: #ffffff !important;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.3rem;
  transition: all 0.4s ease;
}

.corner-logo {
  position: absolute;
  top: 0;
  left: 2rem;
  z-index: 200;
  transition: opacity 0.3s ease;
}

.hero-logo-size {
  height: 70px !important;
  width: auto;
}

.corner-logo.hidden {
  opacity: 0;
  pointer-events: none;
}

.nav-logo.invisible {
  opacity: 0;
  pointer-events: none;
}

.logo-icon {
  color: var(--color-accent);
  display: flex;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-size: 1.05rem;
  font-weight: 500;
  color: #111827;
  /* Near black color like AccessGrid */
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--color-accent);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.login-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-secondary);
}

.login-link:hover {
  color: var(--color-foreground);
}

/* Cool Hover Button (Hero) */
.hero-cool-btn {
  --color: #CFA144;
  /* Gold color matching highlight */
  font-family: inherit;
  display: inline-block;
  padding: 0 2rem;
  height: 3.5em;
  line-height: 3.2em;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 1.1rem;
  border-radius: 9999px;
  font-weight: 600;
  color: var(--color);
  background: transparent;
  text-decoration: none;
  text-align: center;
}

.hero-cool-btn:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: var(--color);
  height: 250px;
  width: 350px;
  border-radius: 50%;
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

.hero-cool-btn:hover {
  color: #fff;
}

.hero-cool-btn:hover:before {
  top: -50px;
  left: -50px;
}

.hero-cool-btn:active:before {
  background: #b58936;
  /* Darker gold when clicked */
  transition: background 0s;
}

/* Typography Utilities */
.section-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section-title-left {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.section-subtitle-large {
  font-size: 1.25rem;
  color: var(--color-secondary);
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
}

.section-subtitle-small {
  color: #CFA144;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Common SaaS Elements */
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.saas-shadow {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
}

/* 1. HERO SECTION (Jadoo Layout) */
.hero.jadoo-layout {
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero.jadoo-layout::before {
  display: none;
}

.hero-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}

/* Pastel Blob Removed */
.hero-pastel-blob {
  display: none;
}

/* Align Utilities for Hero */
.center-aligned {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-text-column {
  max-width: 800px;
  text-align: center;
}

.hero-badge.center-aligned {
  color: var(--color-accent);
  background: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0;
  margin-bottom: 1.5rem;
}

.hero-title.center-aligned {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
  color: #ffffff;
}

.text-highlight {
  position: relative;
  display: inline-block;
  color: #CFA144;
  text-decoration: underline;
  /* Subtle glow */
  filter: drop-shadow(0px 2px 4px rgba(207, 161, 68, 0.3));
}

.hero-subtitle.center-aligned {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #e5e7eb;
  margin-bottom: 2.5rem;
  max-width: 700px;
}

.btn-jadoo-primary {
  background-color: var(--color-accent) !important;
  /* Brand accent color */
  color: white !important;
  padding: 1rem 2rem !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2) !important;
}

.play-icon-wrapper {
  background-color: var(--color-accent);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(13, 110, 253, 0.3);
}

/* Phone Mockup */
.phone-mockup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.phone-mockup-frame {
  position: relative;
  display: flex;
  justify-content: center;
  height: 540px;
  width: 270px;
  border: 10px solid #111827;
  /* border-black */
  border-radius: 40px;
  background-color: #f9fafb;
  /* Multi-layered SaaS shadows for extreme depth */
  box-shadow:
    0 2px 5px rgba(1, 29, 65, 0.05),
    0 10px 20px rgba(1, 29, 65, 0.06),
    0 30px 40px rgba(1, 29, 65, 0.08),
    0 50px 80px rgba(1, 29, 65, 0.15),
    30px 30px 60px rgba(1, 29, 65, 0.1);
  overflow: hidden;
}

.phone-notch {
  position: absolute;
  top: 0;
  width: 45%;
  height: 24px;
  background-color: #111827;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 20;
}

.phone-btn-power {
  position: absolute;
  right: -14px;
  top: 130px;
  width: 4px;
  height: 50px;
  background-color: #111827;
  border-radius: 4px;
}

.phone-btn-vol {
  position: absolute;
  right: -14px;
  bottom: 220px;
  width: 4px;
  height: 80px;
  background-color: #111827;
  border-radius: 4px;
}

/* Incoming Call UI */
.phone-screen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 1.5rem 3rem 1.5rem;
  background: linear-gradient(180deg, #000E20 0%, #0f172a 100%);
  color: white;
}

.call-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.caller-avatar {
  width: 80px;
  height: 80px;
  background-color: #001B3A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.caller-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #ffffff;
  /* Override global h3 color */
}

.caller-status {
  font-size: 0.9rem;
  color: #94a3b8;
}

.call-actions {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.call-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.call-btn:hover {
  transform: scale(1.05);
}

.call-btn.reject {
  background-color: #ef4444;
  /* red */
}

.call-btn.accept {
  background-color: #22c55e;
  /* green */
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }

  70% {
    box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

@media (max-width: 968px) {
  .phone-mockup-wrapper {
    margin-top: 3rem;
  }

  .hero-title.center-aligned {
    font-size: 3.5rem;
  }
}

/* 2. METRICS SECTION */
.metrics {
  margin-top: 3rem;
  margin-bottom: 0.2rem;
  position: relative;
  z-index: 20;
}

.metrics-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 2rem;
  border-radius: 24px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.metric-item {
  position: relative;
}

.metric-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 15%;
  height: 70%;
  width: 1px;
  background: #dce0e5;
  box-shadow: 1px 0 0 #ffffff;
}

.metric-value {
  font-size: 3.5rem;
  color: var(--color-foreground);
  margin-bottom: 0.25rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.metric-label {
  font-size: 0.85rem;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

/* 3. PROFILE SECTION */
.profile-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.profile-image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4/5;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-description {
  color: var(--color-secondary);
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
}

.premium-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.premium-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: var(--color-foreground);
  font-size: 1rem;
  font-weight: 500;
}

.list-icon-wrapper {
  background: #fef3c7;
  /* Color de la mancha del hero */
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
}

.list-icon {
  color: #CFA144;
}

/* 4. PROPOSAL SECTION */
.proposal {
  background-color: #001B3A;
  background-image: none;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 5rem 2rem !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.proposal .section-title {
  color: #ffffff;
}

.proposal .section-subtitle-large {
  color: #e2e8f0;
}

.service-card-saas {
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 3rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card-saas:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.proposal-header {
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.service-header-saas {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.service-icon-minimal {
  color: #CFA144;
}

.service-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 0.35rem 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  background: #FFFFFF;
}

.service-title-minimal {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.service-desc-minimal {
  color: var(--color-secondary);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}

/* 5. CONTACT SECTION */
.footer-contact {
  position: relative;
  overflow: hidden;
  padding-bottom: 4rem;
  background-color: #111827;
  background-image: linear-gradient(rgba(0, 27, 58, 0.65), rgba(0, 27, 58, 0.65)), url('/contact-bg.png');
  background-size: cover;
  background-position: 50% 20%;
}

.contact-bg-shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: #001B3A;
  clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
  z-index: 0;
}

.contact-container {
  position: relative;
  z-index: 1;
  padding-top: 3rem;
}

.contact-header {
  margin-bottom: 2rem;
  color: #ffffff;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.contact-subtitle {
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  color: #e2e8f0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

/* Retro Window Form */
.retro-window {
  background: #e2e8f0;
  border: 2px solid #000000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.05);
}

.retro-window-header {
  background: #CFA144;
  border-bottom: 2px solid #000000;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.retro-window-controls {
  display: flex;
  gap: 0.75rem;
  color: #ffffff;
}

.retro-window-body {
  padding: 2.5rem;
}

.retro-contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.retro-form-group {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.retro-form-group label {
  font-weight: 700;
  font-size: 1.1rem;
  color: #000000;
  min-width: 90px;
  padding-top: 0.5rem;
}

.retro-form-group input,
.retro-form-group textarea {
  flex: 1;
  border: 1px solid #94a3b8;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: 1rem;
  color: #000000;
  background-color: #e2e8f0;
  width: 100%;
}

.retro-form-group input:focus,
.retro-form-group textarea:focus {
  outline: none;
  border-color: #001B3A;
  box-shadow: 0 0 0 3px rgba(51, 65, 85, 0.2);
}

.retro-form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.retro-submit-btn {
  background-color: #CFA144;
  color: #ffffff;
  font-weight: 600;
  padding: 0.75rem 2.5rem;
  border-radius: 9999px;
  border: none;
  transition: transform 0.2s, background-color 0.2s;
  cursor: pointer;
}

.retro-submit-btn:hover {
  background-color: #b58936;
  transform: translateY(-2px);
}

.retro-submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Contact Info Panel */
.contact-info-panel {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
}

.contact-details-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3.5rem;
}

.contact-detail-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.contact-social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.example-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.example-2 .icon-content {
  margin: 0 10px;
  position: relative;
}

.example-2 .icon-content::after {
  content: "";
  display: block;
  height: 0px;
  transition: height 0.3s ease-in-out;
  pointer-events: none;
}

.example-2 .icon-content:hover::after {
  height: 10px;
}

.example-2 .icon-content .tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
  z-index: 10;
}

.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}

.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #e2e8f0;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgba(0, 0, 0, 0.12);
  color: white;
}

.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
}

.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}

.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="whatsapp"] .filled,
.example-2 .icon-content a[data-social="whatsapp"]~.tooltip {
  background-color: #128c7e;
}

.example-2 .icon-content a[data-social="facebook"] .filled,
.example-2 .icon-content a[data-social="facebook"]~.tooltip {
  background-color: #3b5998;
}

.example-2 .icon-content a[data-social="instagram"] .filled,
.example-2 .icon-content a[data-social="instagram"]~.tooltip {
  background: linear-gradient(45deg,
      #405de6,
      #5b51db,
      #b33ab4,
      #c135b4,
      #e1306c,
      #fd1f1f);
}

.social-icon {
  color: #001B3A;
  transition: transform 0.2s, color 0.2s;
}

.social-icon:hover {
  color: #000E20;
  transform: translateY(-3px);
}

/* RESPONSIVE DESIGN */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }

  .metrics-wrapper {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }

  .metric-item:nth-child(2)::after {
    display: none;
  }

  .metric-item:nth-child(1)::after,
  .metric-item:nth-child(3)::after {
    height: 60%;
    top: 20%;
  }

  .profile-layout,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .contact-info-panel {
    padding-left: 0;
  }

  .retro-form-group {
    flex-direction: column;
    gap: 0.25rem;
  }

  .retro-form-group label {
    padding-top: 0;
  }

  .nav-links,
  .nav-actions {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 3rem;
  }

  .login-link {
    display: none;
  }

  .hero-cta-group {
    flex-direction: column;
    width: 100%;
  }

  .hero-cta-group .btn {
    width: 100%;
  }

  .metrics {
    margin-top: 0;
  }

  .metrics-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  .metric-item::after {
    display: none !important;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .retro-window-body {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 2.5rem;
  }
}

/* Language Switch Component */
.lang-switch-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-secondary);
}

.lang-label {
  transition: opacity 0.3s, filter 0.3s;
  font-size: 1.25rem;
  /* Larger for emojis */
  opacity: 0.4;
  filter: grayscale(100%);
  user-select: none;
}

.lang-label.active {
  opacity: 1;
  filter: grayscale(0%);
}

.switch-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.switch-toggle {
  isolation: isolate;
  position: relative;
  height: 24px;
  width: 48px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f0f3f5;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.switch-state {
  display: none;
}

.switch-indicator {
  height: 100%;
  width: 200%;
  background: #ffffff;
  border-radius: 12px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.switch-state:checked~.switch-indicator {
  transform: translate3d(25%, 0, 0);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-foreground);
  padding: 0.5rem;
}

@media (max-width: 1024px) {
  .mobile-menu-btn {
    display: block;
  }
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 200;
  padding: 1rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.mobile-menu-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* The white card inside */
.mobile-menu-card {
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(-20px) scale(0.95);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-overlay.active .mobile-menu-card {
  transform: translateY(0) scale(1);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.mobile-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.mobile-nav-links a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-foreground);
  text-decoration: none;
}

.mobile-nav-links a:hover {
  color: var(--color-accent);
}

.link-chevron {
  color: #CBD5E1;
  /* Light grey chevron */
}

.mobile-menu-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-border);
  margin: 1.5rem 0;
}

.mobile-lang-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Floating WhatsApp Button */
.floating-whatsapp {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.floating-whatsapp::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #25D366;
  z-index: -1;
  animation: pulse-whatsapp 2s infinite ease-out;
}

@keyframes pulse-whatsapp {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

.floating-whatsapp:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
  color: white;
}

.floating-whatsapp svg {
  width: 32px;
  height: 32px;
  margin-top: 1px;
}

@media (max-width: 768px) {
  .floating-whatsapp {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 50px;
    height: 50px;
  }

  .floating-whatsapp svg {
    width: 28px;
    height: 28px;
  }
}

/* =========================================
   MODERN CONTACT SECTION (SaaS ESTHETIC)
   ========================================= */

.modern-contact-section {
  padding: 6rem 0;
  background-color: #e4e4e7;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.contact-bg-pattern {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  background-image: repeating-linear-gradient(0deg,
      transparent,
      transparent 19px,
      rgba(75, 85, 99, 0.08) 19px,
      rgba(75, 85, 99, 0.08) 20px,
      transparent 20px,
      transparent 39px,
      rgba(75, 85, 99, 0.08) 39px,
      rgba(75, 85, 99, 0.08) 40px),
    repeating-linear-gradient(90deg,
      transparent,
      transparent 19px,
      rgba(75, 85, 99, 0.08) 19px,
      rgba(75, 85, 99, 0.08) 20px,
      transparent 20px,
      transparent 39px,
      rgba(75, 85, 99, 0.08) 39px,
      rgba(75, 85, 99, 0.08) 40px),
    radial-gradient(circle at 20px 20px,
      rgba(55, 65, 81, 0.12) 2px,
      transparent 2px),
    radial-gradient(circle at 40px 40px,
      rgba(55, 65, 81, 0.12) 2px,
      transparent 2px);
  background-size:
    40px 40px,
    40px 40px,
    40px 40px,
    40px 40px;
}

.contact-bento-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: stretch;
}

/* Panel Interactivo (Izquierda) */
.contact-interaction-panel {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

/* Selector de Pestañas (Framer Motion) */
.contact-tabs-wrapper {
  display: flex;
  background: rgba(0, 0, 0, 0.03);
  padding: 0.35rem;
  border-radius: 12px;
  margin-bottom: 2.5rem;
  position: relative;
  width: fit-content;
}

.contact-tab {
  position: relative;
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 1;
}

.contact-tab.active {
  color: #111;
  font-weight: 600;
}

.tab-indicator {
  position: absolute;
  inset: 0;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: -1;
}

.tab-label {
  position: relative;
  z-index: 2;
}

/* Formularios Minimalistas */
.contact-form-container {
  flex-grow: 1;
}

.saas-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.saas-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.saas-input-group {
  position: relative;
}

.saas-input {
  width: 100%;
  padding: 0.8rem 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #111;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.3s ease;
}

.saas-input::placeholder {
  color: #999;
}

.saas-input:hover {
  border-bottom-color: rgba(207, 161, 68, 0.5);
}

.saas-input:focus {
  border-bottom-color: #CFA144;
  box-shadow: 0 1px 0 0 #CFA144;
}

/* Chips / Selectores */
.saas-chips-group {
  margin-top: 0.5rem;
}

.chips-label {
  display: block;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.8rem;
  font-weight: 500;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.saas-chip {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: #555;
  background: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.saas-chip:hover {
  background: #f1f3f5;
}

.saas-chip.selected {
  background: #CFA144;
  color: #111111;
  font-weight: 600;
  border-color: #CFA144;
}

/* File Dropzone */
.file-dropzone {
  border: 1.5px dashed rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.file-dropzone:hover,
.file-dropzone.dragging {
  border-color: #0D6EFD;
  background: rgba(13, 110, 253, 0.02);
}

.file-dropzone.has-file {
  border-style: solid;
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.05);
}

.dropzone-icon {
  color: #999;
  transition: color 0.3s ease;
}

.file-dropzone:hover .dropzone-icon,
.file-dropzone.dragging .dropzone-icon {
  color: #0D6EFD;
}

.file-dropzone.has-file .dropzone-icon {
  color: #10b981;
}

.dropzone-text {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}

.file-name {
  color: #111;
  font-weight: 600;
}

.hidden-input {
  display: none;
}

/* Botón Premium */
.saas-submit-btn {
  background: #111;
  color: #ffffff;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
}

.saas-submit-btn:hover:not(:disabled) {
  background: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.saas-submit-btn:disabled {
  background: #f1f3f5;
  color: #999;
  cursor: not-allowed;
}

.success-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #10b981;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Panel de Información Glassmorphism (Derecha) */
.contact-info-glass-panel {
  background: linear-gradient(135deg, rgba(250, 250, 250, 0.8), rgba(245, 245, 245, 0.4));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 24px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
}

.glass-panel-header {
  margin-bottom: 3rem;
}

.glass-panel-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.5rem;
}

.glass-panel-header p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
}

.glass-details-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.glass-detail-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
}

.glass-detail-row:hover {
  transform: translateX(4px);
}

.glass-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555555;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.glass-detail-row:hover .glass-icon-box {
  color: #CFA144;
  border-color: rgba(207, 161, 68, 0.3);
  box-shadow: 0 4px 15px rgba(207, 161, 68, 0.12);
}

.glass-detail-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.glass-detail-text span {
  font-size: 0.85rem;
  color: #666;
}

.glass-detail-text strong {
  font-size: 1.05rem;
  font-weight: 600;
  color: #111;
}

@media (max-width: 1024px) {
  .contact-bento-container {
    grid-template-columns: 1fr;
  }

  .contact-interaction-panel,
  .contact-info-glass-panel {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .saas-row {
    grid-template-columns: 1fr;
  }
}

/* Premium Info Card */
.info-card-premium {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.info-card-premium:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.info-tag-micro {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #CFA144;
  margin-bottom: 0.5rem;
}

.info-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1.2rem;
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.2rem;
}

.info-icon-active {
  color: #CFA144;
  margin-top: 0.2rem;
}

.info-text {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

.info-status-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 99px;
  width: fit-content;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  position: relative;
}

.pulse-dot::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 2px solid #10b981;
  animation: pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.status-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: #10b981;
}

.digital-channels {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* =========================================
   PREMIUM MINIMAL FOOTER STYLES
   ========================================= */

.saas-premium-footer {
  background-color: #0a0a0a;
  padding: 5rem 0 2.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 10;
}

.footer-inner-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* Columna de Marca */
.footer-brand-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.footer-logo-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-mini-logo {
  height: 28px;
  width: auto;
}

.footer-brand-name {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.footer-brand-desc {
  font-size: 0.9rem;
  color: #a1a1aa;
  line-height: 1.6;
  max-width: 340px;
}

/* Indicador de Estado del Sistema */
.system-status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 0.4rem 0.75rem;
  border-radius: 99px;
  width: fit-content;
  margin-top: 0.5rem;
}

.status-pulse-green {
  width: 6px;
  height: 6px;
  background-color: #10b981;
  border-radius: 50%;
  position: relative;
}

.status-pulse-green::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1.5px solid #10b981;
  animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.system-status-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: #34d399;
}

/* Columnas de Enlaces */
.footer-column-title {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.footer-navigation-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.footer-navigation-list a {
  font-size: 0.9rem;
  color: #a1a1aa;
  font-weight: 500;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.footer-navigation-list a:hover {
  color: #0D6EFD;
}

/* Links Sociales con Flecha Dinámica */
.footer-social-link-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.footer-link-arrow {
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
  color: #0D6EFD;
}

.footer-social-link-item:hover .footer-link-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Barra Inferior de Créditos */
.footer-credits-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  font-size: 0.8rem;
  color: #71717a;
  font-weight: 500;
}

.credits-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.legal-link-footer {
  color: #a1a1aa;
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-link-footer:hover {
  color: #ffffff;
}

.credits-divider {
  color: rgba(255, 255, 255, 0.2);
  user-select: none;
}

/* Ajustes de Responsividad */
@media (max-width: 968px) {
  .footer-inner-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-brand-desc {
    max-width: 100%;
  }

  .footer-credits-bar {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
```

### Archivo: `src/App.jsx`

```javascript
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import {
  Headset,
  MessageSquare,
  PhoneCall,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
  Play,
  Menu,
  X,
  User,
  PhoneOff,
  MapPin,
  Minus,
  Square,
  UploadCloud,
  CheckCircle2
} from 'lucide-react';
import './App.css';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 2 13.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size = 28 }) => (
  <svg xmlSpace="preserve" viewBox="0 0 24 24" className="social-icon" fill="currentColor" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
  </svg>
);

const InstagramIcon = ({ size = 28 }) => (
  <svg xmlSpace="preserve" viewBox="0 0 16 16" className="social-icon" fill="currentColor" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const WhatsappIcon = ({ size = 28 }) => (
  <svg xmlSpace="preserve" viewBox="0 0 24 24" className="social-icon" fill="currentColor" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const PremiumPhoneIcon = ({ size = 28, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" color={color} xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PremiumMailIcon = ({ size = 28, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" color={color} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PremiumLocationIcon = ({ size = 28, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" color={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16 16.8 19 12.866 19 9.5C19 5.35786 15.866 2 12 2C8.13401 2 5 5.35786 5 9.5C5 12.866 8 16.8 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PhoneMockup = () => {
  return (
    <div className="phone-mockup-wrapper">
      <div className="phone-mockup-frame">
        <span className="phone-notch" />
        <span className="phone-btn-power" />
        <span className="phone-btn-vol" />

        <div className="phone-screen">
          <div className="call-info">
            <div className="caller-avatar" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
              <img src="/logo.webp" alt="WMC Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className="caller-name">Soporte WMC</h3>
            <p className="caller-status">Llamada entrante...</p>
          </div>

          <div className="call-actions">
            <button className="call-btn reject">
              <PhoneOff size={24} color="#ffffff" />
            </button>
            <button className="call-btn accept">
              <Phone size={24} color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const translations = {
  es: {
    nav: { about: "Nosotros", services: "Servicios", contact: "Contacto" },
    hero: {
      title: "Escala tu atención<br /><span class='text-highlight'>multiplica</span> tus ventas.",
      subtitle: "La inmediatez y la precisión definen a las grandes marcas. WMC SERVICES es el aliado corporativo para convertir cada interacción en una oportunidad de fidelización.",
      ctaPrimary: "Optimice su Atención",
      timeBadge: "1 min"
    },
    metrics: [
      { num: 24, suffix: "/7", label: "Soporte Activo" },
      { num: 100, suffix: "%", label: "Disponibilidad" },
      { num: 99, prefix: "+", suffix: "%", label: "Tasa de Respuesta" },
      { value: "Omni", label: "Canalidad Total" }
    ],
    profile: {
      subtitle: "Perfil Estratégico",
      title: "Modernizando el Vínculo Corporativo",
      desc: "Somos expertos en BPO y gestión de centros de contacto, enfocados en elevar el estándar de la relación empresa-cliente. Con una visión integral de las telecomunicaciones, WMC SERVICES permite que su empresa se enfoque en el core de su negocio.",
      desc2: "Combinamos tecnología avanzada con procesos humanos estructurados para garantizar resultados medibles y un retorno de inversión en la experiencia del cliente.",
      list: [
        "Trazabilidad absoluta de interacciones comerciales.",
        "Reducción de costos mediante eficiencia operativa.",
        "Integración ágil para una experiencia unificada."
      ]
    },
    proposal: {
      subtitle: "Nuestra Propuesta",
      title: "Pilares Operativos de Excelencia",
      desc: "Diseñamos módulos que se integran de forma natural al flujo de tu empresa.",
      services: [
        {
          title: "Experiencia Omnicanal", tag: "CONTACT CENTER",
          desc: "Unificamos voz, chat, email y redes sociales bajo una sola interfaz."
        },
        {
          title: "Gestión Integral", tag: "CALL CENTER",
          desc: "Gestionamos el ciclo de vida completo: ventas, posventa y resolución de tickets."
        },
        {
          title: "Estrategia Activa", tag: "TELEMARKETING",
          desc: "Maximizamos el alcance con llamadas enfocadas en promoción y cierres."
        },
        {
          title: "Disponibilidad 24/7", tag: "OPERATIVA CONTINUA",
          desc: "Garantizamos presencia ininterrumpida y profesional para su marca."
        }
      ]
    },
    footer: {
      desc: "Tecnología de vanguardia sumada a la calidez humana. Transforme la relación con sus clientes hoy mismo.",
      phoneLabel: "WhatsApp / Teléfono",
      emailLabel: "Correo Electrónico",
      formTitle: "Inicie la Conversación",
      formName: "Nombre Corporativo",
      formNamePlaceholder: "Ej. Juan Pérez - Empresa C.A.",
      formEmail: "Correo Electrónico",
      formEmailPlaceholder: "contacto@empresa.com",
      formReq: "Requerimiento",
      formReqPlaceholder: "Detalle sus necesidades operativas...",
      btnIdle: "Enviar Solicitud",
      btnSubmitting: "Procesando...",
      btnSuccess: "¡Recibido con Éxito!"
    }
  },
  en: {
    nav: { about: "About Us", services: "Services", contact: "Contact" },
    hero: {
      title: "Customer service<br />taken to another level.",
      subtitle: "In the digital age, immediacy and precision define great brands. WMC SERVICES is the corporate ally to turn every interaction into a loyalty opportunity.",
      ctaPrimary: "Optimize Your Service",
      ctaVideo: "Watch demo",
      timeBadge: "1 min"
    },
    metrics: [
      { num: 24, suffix: "/7", label: "Active Support" },
      { num: 100, suffix: "%", label: "Availability" },
      { num: 99, prefix: "+", suffix: "%", label: "Response Rate" },
      { value: "Omni", label: "Total Channeling" }
    ],
    profile: {
      subtitle: "Strategic Profile",
      title: "Modernizing the Corporate Bond",
      desc: "We are experts in BPO and contact center management, focused on raising the standard of the company-client relationship. With a comprehensive vision of telecommunications, WMC SERVICES allows your company to focus on its core business.",
      list: [
        "Absolute traceability of commercial interactions.",
        "Cost reduction through operational efficiency.",
        "Agile integration for a unified experience."
      ]
    },
    proposal: {
      subtitle: "Our Proposal",
      title: "Operational Pillars of Excellence",
      desc: "We design modules that integrate naturally into your company's workflow.",
      services: [
        {
          title: "Omnichannel Experience", tag: "CONTACT CENTER",
          desc: "We unify voice, chat, email, and social networks under a single interface."
        },
        {
          title: "Comprehensive Management", tag: "CALL CENTER",
          desc: "We manage the entire lifecycle: sales, after-sales, and ticket resolution."
        },
        {
          title: "Active Strategy", tag: "TELEMARKETING",
          desc: "We maximize reach with calls focused on promotion and closing deals."
        },
        {
          title: "24/7 Availability", tag: "CONTINUOUS OPERATIONS",
          desc: "We guarantee uninterrupted and professional presence for your brand."
        }
      ]
    },
    footer: {
      desc: "Cutting-edge technology combined with human warmth. Transform the relationship with your customers today.",
      phoneLabel: "WhatsApp / Phone",
      emailLabel: "Email",
      formTitle: "Start the Conversation",
      formName: "Corporate Name",
      formNamePlaceholder: "E.g. John Doe - Company Inc.",
      formEmail: "Email Address",
      formEmailPlaceholder: "contact@company.com",
      formReq: "Requirement",
      formReqPlaceholder: "Detail your operational needs...",
      btnIdle: "Send Request",
      btnSubmitting: "Processing...",
      btnSuccess: "Successfully Received!"
    }
  }
};

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const LanguageSwitch = ({ isEnglish, toggleLang }) => (
  <div className="lang-switch-wrapper">
    <span className={`lang-label ${!isEnglish ? 'active' : ''}`} title="Español">🇪🇸</span>
    <label className="switch-label">
      <div className="switch-toggle">
        <input
          className="switch-state"
          type="checkbox"
          checked={isEnglish}
          onChange={toggleLang}
        />
        <div className="switch-indicator" />
      </div>
    </label>
    <span className={`lang-label ${isEnglish ? 'active' : ''}`} title="English">🇺🇸</span>
  </div>
);

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const AnimatedMetric = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.div variants={fadeUpVariant} className="metric-item" ref={ref}>
      <h2 className="metric-value">
        {stat.num !== undefined ? (
          <NumberFlow
            value={isInView ? stat.num : 0}
            prefix={stat.prefix || ""}
            suffix={stat.suffix || ""}
          />
        ) : (
          stat.value
        )}
      </h2>
      <p className="metric-label">{stat.label}</p>
    </motion.div>
  );
};

function App() {
  const [formState, setFormState] = useState('idle');
  const [lang, setLang] = useState('es');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('commercial_contact');
  const [isDragging, setIsDragging] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5s para un movimiento suave y cinematográfico
      let start = null;

      // Easing function (easeInOutCubic) para empezar despacio, acelerar y frenar despacio
      const easeInOutCubic = (time, begin, change, duration) => {
        if ((time /= duration / 2) < 1) return change / 2 * time * time * time + begin;
        return change / 2 * ((time -= 2) * time * time + 2) + begin;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="app-container">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-blue"></div>
      <div className="ambient-glow glow-gold"></div>
      
      <div className="navbar-wrapper">
        <nav className={`pill-navbar ${isScrolled ? 'glass-nav scrolled' : 'transparent-nav'}`} style={{ position: 'relative' }}>
          {/* Corner Logo (Bigger, aligned with margin) */}
          <div className={`nav-logo corner-logo ${isScrolled ? 'hidden' : ''}`}>
            <img src="/logo.webp" alt="WMC Logo" className="logo-img hero-logo-size" />
          </div>

          <div className={`nav-logo ${!isScrolled ? 'invisible' : ''}`}>
            <img src="/logo.webp" alt="WMC Logo" className="logo-img" style={{ height: '32px', width: 'auto' }} />
          </div>

          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.nav.about}</a></li>
            <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>{t.nav.services}</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.nav.contact}</a></li>
          </ul>

          <div className="nav-actions">
            <LanguageSwitch isEnglish={lang === 'en'} toggleLang={toggleLang} />
          </div>

          <button
            className={`mobile-menu-btn ${!isScrolled ? 'text-white' : ''}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-card">

            {/* Header of mobile menu */}
            <div className="mobile-menu-header">
              <div className="nav-logo">
                <img src="/logo.webp" alt="WMC Logo" className="logo-img" style={{ height: '32px', width: 'auto' }} />
              </div>
              <button
                className="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <ul className="mobile-nav-links">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                  {t.nav.about}
                  <ChevronRight size={16} className="link-chevron" />
                </a>
              </li>
              <li>
                <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>
                  {t.nav.services}
                  <ChevronRight size={16} className="link-chevron" />
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  {t.nav.contact}
                  <ChevronRight size={16} className="link-chevron" />
                </a>
              </li>
            </ul>

            <div className="mobile-menu-divider"></div>

            {/* Language Switch */}
            <div className="mobile-lang-wrapper">
              <LanguageSwitch isEnglish={lang === 'en'} toggleLang={toggleLang} />
            </div>

          </div>
        </div>
      </div>

      <header className="hero jadoo-layout">
        <div className="container hero-grid single-column">
          {/* Main Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-text-column center-aligned"
          >
            {t.hero.badge && (
              <motion.div variants={fadeUpVariant} className="hero-badge center-aligned">
                {t.hero.badge}
              </motion.div>
            )}

            <motion.h1
              variants={fadeUpVariant}
              className="hero-title center-aligned"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />

            <motion.p variants={fadeUpVariant} className="hero-subtitle center-aligned">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="hero-cta-group center-aligned">
              <button className="hero-cool-btn">
                {t.hero.ctaPrimary}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="metrics container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-250px" }}
          variants={staggerContainer}
          className="metrics-wrapper"
        >
          {t.metrics.map((stat, i) => (
            <AnimatedMetric key={i} stat={stat} />
          ))}
        </motion.div>
      </section>

      <section id="about" className="profile section container" style={{ position: 'relative' }}>
        <div className="ambient-glow glow-blue" style={{ top: '-10%', left: '-20%' }}></div>
        <div className="ambient-glow glow-gold" style={{ top: '40%', right: '-30%' }}></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-250px" }}
          variants={staggerContainer}
          className="profile-layout"
        >
          <motion.div variants={fadeUpVariant} className="profile-image-wrapper saas-shadow">
            <img src="/1.webp" alt="WMC Office Environment" className="profile-image" />
          </motion.div>
          <motion.div variants={fadeUpVariant} className="profile-text">
            <div className="section-header">
              <h2 className="section-title-left">{t.profile.title}</h2>
            </div>
            <p className="profile-description">
              {t.profile.desc}
            </p>
            {t.profile.desc2 && (
              <p className="profile-description" style={{ marginTop: '1rem' }}>
                {t.profile.desc2}
              </p>
            )}

            <ul className="premium-list">
              {t.profile.list.map((item, i) => (
                <li key={i}>
                  <div className="list-icon-wrapper">
                    <ChevronRight size={18} className="list-icon" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section id="solutions" className="proposal section container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-250px" }}
          variants={staggerContainer}
          className="proposal-header center"
        >
          <motion.h2 variants={fadeUpVariant} className="section-title">{t.proposal.title}</motion.h2>
          <motion.p variants={fadeUpVariant} className="section-subtitle-large">
            {t.proposal.desc}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-250px" }}
          variants={staggerContainer}
          className="services-grid"
        >
          {t.proposal.services.map((service, i) => {
            const icons = [
              <MessageSquare key="msg" size={24} />,
              <Headset key="head" size={24} />,
              <PhoneCall key="phone" size={24} />,
              <Clock key="clock" size={24} />
            ];

            return (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className="service-card-saas"
              >
                <div className="service-header-saas">
                  <div className="service-icon-minimal">{icons[i]}</div>
                  <span className="service-tag">{service.tag}</span>
                </div>
                <h4 className="service-title-minimal">{service.title}</h4>
                <p className="service-desc-minimal">{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <footer id="contact" className="modern-contact-section section">
        <div className="ambient-glow glow-blue" style={{ top: '20%', left: '-15%' }}></div>
        <div className="ambient-glow glow-gold" style={{ bottom: '-10%', right: '-15%' }}></div>
        <div className="contact-bg-pattern"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="center"
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="section-title">Iniciemos una Conversación</h2>
            <p className="section-subtitle-large">Conecte con nuestro equipo para soluciones corporativas o únase a nuestro talento.</p>
          </motion.div>
        </div>
        <div className="container contact-bento-container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Izquierda: Panel Interactivo (60%) */}
          <div className="contact-interaction-panel">
            <div className="contact-tabs-wrapper">
              <button 
                className={`contact-tab ${activeTab === 'commercial_contact' ? 'active' : ''}`}
                onClick={() => setActiveTab('commercial_contact')}
              >
                {activeTab === 'commercial_contact' && (
                  <motion.div layoutId="tab-indicator" className="tab-indicator" />
                )}
                <span className="tab-label">Contacto Comercial</span>
              </button>
              <button 
                className={`contact-tab ${activeTab === 'talent_join' ? 'active' : ''}`}
                onClick={() => setActiveTab('talent_join')}
              >
                {activeTab === 'talent_join' && (
                  <motion.div layoutId="tab-indicator" className="tab-indicator" />
                )}
                <span className="tab-label">Únete al Equipo</span>
              </button>
            </div>

            <div className="contact-form-container">
              {activeTab === 'commercial_contact' ? (
                <motion.form 
                  key="commercial"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleContactSubmit} 
                  className="saas-form"
                >
                  <div className="saas-input-group">
                    <input type="text" required placeholder="Nombre Corporativo" className="saas-input" />
                  </div>
                  <div className="saas-input-group">
                    <input type="email" required placeholder="Correo de Empresa" className="saas-input" />
                  </div>
                  
                  <div className="saas-chips-group">
                    <span className="chips-label">Tipo de Servicio Requerido</span>
                    <div className="chips-container">
                      {['Contact Center', 'Call Center', 'Telemarketing'].map(service => (
                        <button 
                          type="button" 
                          key={service}
                          className={`saas-chip ${selectedService === service ? 'selected' : ''}`}
                          onClick={() => setSelectedService(service)}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="saas-submit-btn" disabled={formState !== 'idle'}>
                    {formState === 'idle' ? (
                      <span>Iniciar Operaciones</span>
                    ) : formState === 'submitting' ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <span className="success-text"><CheckCircle2 size={18} /> ¡Solicitud Recibida!</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.form 
                  key="talent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleContactSubmit} 
                  className="saas-form"
                >
                  <div className="saas-row">
                    <div className="saas-input-group">
                      <input type="text" required placeholder="Nombre Completo" className="saas-input" />
                    </div>
                    <div className="saas-input-group">
                      <input type="tel" required placeholder="WhatsApp de Contacto" className="saas-input" />
                    </div>
                  </div>

                  <div className="saas-chips-group">
                    <span className="chips-label">Disponibilidad Horaria</span>
                    <div className="chips-container">
                      {['Mañana', 'Tarde', 'Nocturno', 'Tiempo Completo'].map(shift => (
                        <button 
                          type="button" 
                          key={shift}
                          className={`saas-chip ${selectedAvailability === shift ? 'selected' : ''}`}
                          onClick={() => setSelectedAvailability(shift)}
                        >
                          {shift}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div 
                    className={`file-dropzone ${isDragging ? 'dragging' : ''} ${uploadedFileName ? 'has-file' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        setUploadedFileName(e.dataTransfer.files[0].name);
                      }
                    }}
                    onClick={() => document.getElementById('cv-upload').click()}
                  >
                    <input type="file" id="cv-upload" accept=".pdf" className="hidden-input" onChange={(e) => {
                      if (e.target.files && e.target.files[0]) setUploadedFileName(e.target.files[0].name);
                    }} />
                    <UploadCloud size={28} className="dropzone-icon" />
                    <p className="dropzone-text">
                      {uploadedFileName ? <span className="file-name">{uploadedFileName}</span> : 'Arrastra tu CV en PDF aquí o haz clic para subir'}
                    </p>
                  </div>

                  <button type="submit" className="saas-submit-btn" disabled={formState !== 'idle'}>
                    {formState === 'idle' ? (
                      <span>Enviar Postulación</span>
                    ) : formState === 'submitting' ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <span className="success-text"><CheckCircle2 size={18} /> ¡CV Recibido!</span>
                    )}
                  </button>
                </motion.form>
              )}
            </div>
          </div>

          {/* Derecha: Panel de Soporte (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-glass-panel"
          >
            <div className="info-card-premium">
              <span className="info-tag-micro">Sede Central</span>
              <h4 className="info-card-title">WMC Services HQs</h4>
              
              {/* MAPA DE GOOGLE INTEGRADO */}
              <div className="google-map-container" style={{ marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.865448348877!2d-70.216399!3d8.62512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b579bf685e13b%3A0x1d668270b2ed65cc!2sBarinas%2C%20Barinas%2C%20Venezuela!5e0!3m2!1ses!2sus!4v1690000000000!5m2!1ses!2sus" 
                  width="100%" 
                  height="180" 
                  style={{ border: 0, display: 'block' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              
              <div className="info-row">
                <MapPin size={18} className="info-icon-active" />
                <p className="info-text">
                  Av. Principal Corporativa, Edificio Onyx, Piso 3.<br />
                  Barinas, Venezuela.
                </p>
              </div>
            </div>
            
            {/* Canales Digitales abajo de la dirección */}
            <div className="digital-channels">
              <div className="glass-details-list">
                <a href="tel:+1234567890" className="glass-detail-row">
                  <div className="glass-icon-box"><Phone size={20} /></div>
                  <div className="glass-detail-text">
                    <span>Ventas y Soporte</span>
                    <strong>+1 (234) 567-890</strong>
                  </div>
                </a>
                <a href="mailto:corporativo@wmc.com" className="glass-detail-row">
                  <div className="glass-icon-box"><Mail size={20} /></div>
                  <div className="glass-detail-text">
                    <span>Correo Corporativo</span>
                    <strong>corporativo@wmc.com</strong>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </footer>

      {/* =========================================
          PREMIUM MINIMAL FOOTER
          ========================================= */}
      <footer className="saas-premium-footer">
        <div className="container footer-inner-grid">
          
          {/* Columna 1: Branding e Identidad */}
          <div className="footer-brand-column">
            <div className="footer-logo-wrapper">
              <img src="/logo.webp" alt="WMC Logo" className="footer-mini-logo" />
              <span className="footer-brand-name">WMC SERVICES</span>
            </div>
            <p className="footer-brand-desc">
              Infraestructura global de contact center y BPO de próxima generación. Elevando los estándares de interacción corporativa mediante operaciones síncronas.
            </p>
          </div>

          {/* Columna 2: Navegación Interna */}
          <div className="footer-links-column">
            <h5 className="footer-column-title">Compañía</h5>
            <ul className="footer-navigation-list">
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Nosotros</a></li>
              <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>Servicios Operativos</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Redes / Legal Micro */}
          <div className="footer-links-column">
            <h5 className="footer-column-title">Conectar</h5>
            <ul className="footer-navigation-list">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link-item">
                  LinkedIn <ArrowRight size={12} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link-item">
                  Instagram <ArrowRight size={12} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link-item">
                  Facebook <ArrowRight size={12} className="footer-link-arrow" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Cierre de Copyright y Créditos */}
        <div className="container footer-credits-bar">
          <div className="credits-left">
            <span>© {new Date().getFullYear()} WMC Services. Todos los derechos reservados.</span>
          </div>
          <div className="credits-right">
            <a href="#privacy" className="legal-link-footer">Política de Privacidad</a>
            <span className="credits-divider">·</span>
            <a href="#terms" className="legal-link-footer">Términos de Servicio</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=+112067101079&text=Save%20this%20to%20your%20Favorites%20-%20@wilsondesouza" 
        className="floating-whatsapp"
        aria-label="Contact us on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon size={32} />
      </a>
    </div>
  );
}

export default App;

```

### Archivo: `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Ultra Minimal SaaS Theme (AccessGrid Style) */
  --color-primary: #000000;
  --color-on-primary: #FFFFFF;
  --color-secondary: #475569;
  --color-accent: #0D6EFD;
  /* Vibrant Electric Blue */
  --color-on-accent: #FFFFFF;
  --color-background: #FFFFFF;
  /* Pure White */
  --color-foreground: #000000;
  --color-card: #FFFFFF;
  --color-muted: #64748B;
  --color-border: #E2E8F0;
  --color-ring: #0D6EFD;

  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


html,
body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-family);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-foreground);
  letter-spacing: -0.04em;
  /* Tight letter spacing for massive headers */
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  font-family: inherit;
  border: none;
  outline: none;
}

/* Glassmorphism for Navbar */
.glass-nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

/* Layout Utilities */
.container {
  width: 100%;
  max-width: 1100px;
  /* Tighter max width for SaaS feel */
  margin: 0 auto;
  padding: 0 2rem;
}

.section {
  padding: 5rem 0;
  /* Reduced from 10rem as requested */
}

.center {
  text-align: center;
}
```

### Archivo: `src/main.jsx`

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

### Archivo: `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/webp" href="/logo.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WMC Services</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

### Archivo: `package.json`

```json
{
  "name": "landing",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@number-flow/react": "^0.6.1",
    "framer-motion": "^12.42.2",
    "lucide-react": "^1.23.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
  "devDependencies": {
    "@babel/core": "^7.29.7",
    "@rolldown/plugin-babel": "^0.2.3",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "babel-plugin-react-compiler": "^1.0.0",
    "imagetracerjs": "^1.2.6",
    "oxlint": "^1.71.0",
    "potrace": "^2.1.8",
    "vite": "^8.1.1"
  }
}

```

### Archivo: `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})

```

