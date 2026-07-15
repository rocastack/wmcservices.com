import React from 'react';

export const LanguageSwitch = ({ isEnglish, toggleLang }) => (
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
