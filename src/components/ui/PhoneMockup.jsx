import React from 'react';
import { PhoneOff, Phone } from 'lucide-react';

export const PhoneMockup = () => {
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
