import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, UploadCloud } from 'lucide-react';

export const CareersModal = ({
  isModalOpen,
  setIsModalOpen,
  t,
  formState,
  handleCareersSubmit,
  uploadedFileName,
  setUploadedFileName
}) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <motion.div
            className="modal-content saas-form-wrapper"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <h3 className="modal-title">{t.modal.title}</h3>
            <p className="modal-subtitle">{t.modal.subtitle}</p>

            <form name="careers" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleCareersSubmit} className="saas-form modal-form">
              <input type="hidden" name="form-name" value="careers" />
              <p className="hidden" style={{ display: 'none' }}>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div className="saas-row">
                <div className="saas-input-group">
                  <input type="text" name="name" required placeholder={t.modal.phName} className="saas-input" />
                </div>
                <div className="saas-input-group">
                  <input type="tel" name="phone" required placeholder={t.modal.phPhone} className="saas-input" />
                </div>
              </div>

              <div className="saas-input-group">
                <select name="availability" required className="saas-input" defaultValue="" style={{ appearance: 'auto' }}>
                  <option value="" disabled>{t.modal.selAvailability}</option>
                  <option value="manana">{t.modal.optMorning}</option>
                  <option value="tarde">{t.modal.optAfternoon}</option>
                  <option value="nocturno">{t.modal.optNight}</option>
                  <option value="tiempo_completo">{t.modal.optFullTime}</option>
                  <option value="cualquier_turno">{t.modal.optAnyShift}</option>
                </select>
              </div>

              <div className="saas-input-group">
                <label className="checkbox-group-label">{t.modal.langLabel}</label>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input type="checkbox" name="lang" value="english" />
                    <span className="checkbox-custom"></span>
                    {t.modal.langEnglish}
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="lang" value="french" />
                    <span className="checkbox-custom"></span>
                    {t.modal.langFrench}
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" name="lang" value="portuguese" />
                    <span className="checkbox-custom"></span>
                    {t.modal.langPortuguese}
                  </label>
                </div>
              </div>

              <div className="saas-row">
                <div className="saas-input-group">
                  <input type="url" name="linkedin" placeholder={t.modal.phLinkedin} className="saas-input" />
                </div>
                <div className="saas-input-group">
                  <input type="url" name="portfolio" placeholder={t.modal.phPortfolio} className="saas-input" />
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
                onClick={() => document.getElementById('cv-upload-modal').click()}
              >
                <input type="file" name="cv" id="cv-upload-modal" accept=".pdf" className="hidden-input" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) setUploadedFileName(e.target.files[0].name);
                }} />
                <UploadCloud size={28} className="dropzone-icon" />
                <p className="dropzone-text">
                  {uploadedFileName ? <span className="file-name">{uploadedFileName}</span> : t.modal.dropzoneFile}
                </p>
              </div>

              <button type="submit" className="saas-submit-btn" disabled={formState !== 'idle'}>
                {formState === 'idle' ? (
                  <span>{t.modal.btnSubmit}</span>
                ) : formState === 'submitting' ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <span className="success-text"><CheckCircle2 size={18} /> {t.contact.btnSuccess}</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
