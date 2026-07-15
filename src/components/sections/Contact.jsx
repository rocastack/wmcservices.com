import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { Banner } from './Banner';

export const Contact = ({ t, formState, handleContactSubmit, setIsModalOpen }) => {
  return (
    <footer id="contact" className="modern-contact-section section">
      <div className="ambient-glow glow-blue" style={{ top: '20%', left: '-15%' }}></div>
      <div className="ambient-glow glow-gold" style={{ bottom: '-10%', right: '-15%' }}></div>
      <div className="contact-bg-pattern"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-150px" }}
          className="center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">{t.contact.sectionTitle}</h2>
          <p className="section-subtitle-large">{t.contact.sectionSubtitle}</p>
        </motion.div>
      </div>
      <div className="container contact-bento-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Izquierda: Panel Interactivo (60%) */}
        <div className="contact-interaction-panel">
          <div className="contact-form-header" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 1.6rem)', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
              {t.contact.formHeaderTitle}
            </h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.5 }}>
              {t.contact.formHeaderDesc}
            </p>
          </div>
          <div className="contact-form-container">
            <motion.form
              key="commercial"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleContactSubmit}
              className="saas-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden" style={{ display: 'none' }}>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div className="saas-row">
                <div className="saas-input-group">
                  <input type="text" name="company" required placeholder={t.contact.phCompany} className="saas-input" />
                </div>
                <div className="saas-input-group">
                  <input type="text" name="name" required placeholder={t.contact.phName} className="saas-input" />
                </div>
              </div>
              <div className="saas-row">
                <div className="saas-input-group">
                  <input type="tel" name="phone" required placeholder={t.contact.phPhone} className="saas-input" />
                </div>
                <div className="saas-input-group">
                  <input type="email" name="email" required placeholder={t.contact.phEmail} className="saas-input" />
                </div>
              </div>
              <div className="saas-input-group">
                <select name="service" required className="saas-input" defaultValue="" style={{ appearance: 'auto' }}>
                  <option value="" disabled>{t.contact.selService}</option>
                  <option value="contact_center">{t.contact.optContactCenter}</option>
                  <option value="call_center">{t.contact.optCallCenter}</option>
                  <option value="telemarketing">{t.contact.optTelemarketing}</option>
                  <option value="otro">{t.contact.optOther}</option>
                </select>
              </div>

              <div className="saas-input-group">
                <select name="stations" required className="saas-input" defaultValue="" style={{ appearance: 'auto' }}>
                  <option value="" disabled>{t.contact.selStations}</option>
                  <option value="1_5">{t.contact.opt1_5}</option>
                  <option value="6_15">{t.contact.opt6_15}</option>
                  <option value="16_50">{t.contact.opt16_50}</option>
                  <option value="mas_50">{t.contact.opt50Plus}</option>
                </select>
              </div>

              <button type="submit" className="saas-submit-btn" disabled={formState !== 'idle'}>
                {formState === 'idle' ? (
                  <span>{t.contact.btnStart}</span>
                ) : formState === 'submitting' ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <span className="success-text"><CheckCircle2 size={18} /> {t.contact.btnSuccess}</span>
                )}
              </button>
            </motion.form>
          </div>
        </div>

        {/* Derecha: Panel de Soporte (40%) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-150px" }}
          className="contact-info-glass-panel"
        >
          <div className="info-card-premium">
            <span className="info-tag-micro">{t.contact.hqTag}</span>
            <h4 className="info-card-title">{t.contact.hqTitle}</h4>

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
              <p className="info-text" dangerouslySetInnerHTML={{ __html: t.contact.hqAddress }} />
            </div>
          </div>

          {/* Canales Digitales abajo de la dirección */}
          <div className="digital-channels">
            <div className="glass-details-list">
              <a href="tel:+584245937012" className="glass-detail-row">
                <div className="glass-icon-box"><Phone size={20} /></div>
                <div className="glass-detail-text">
                  <span>{t.contact.salesSupport}</span>
                  <strong>+58 424 593 7012</strong>
                </div>
              </a>
              <a href="mailto:wmcworldservices@gmail.com" className="glass-detail-row">
                <div className="glass-icon-box"><Mail size={20} /></div>
                <div className="glass-detail-text">
                  <span>{t.footer.emailLabel}</span>
                  <strong>wmcworldservices@gmail.com</strong>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Banner t={t} setIsModalOpen={setIsModalOpen} />
    </footer>
  );
};
