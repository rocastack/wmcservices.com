import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from "framer-motion";
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
    <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Facebook3DIcon = () => (
  <a className="social-3d-icon social-3d-fb" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <div className="layer">
      <span />
      <span />
      <span />
      <span />
      <span className="svg-container">
        <svg viewBox="0 0 40 40" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
          <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)" y2="407.5726" y1="406.6018" x2="-277.375" x1="-277.375" id="a">
            <stop stopColor="#0062e0" offset={0} />
            <stop stopColor="#19afff" offset={1} />
          </linearGradient>
          <path d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" fill="url(#a)" />
          <path d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z" fill="#fff" />
        </svg>
      </span>
    </div>
    <div className="text">Facebook</div>
  </a>
);

const LinkedIn3DIcon = () => (
  <a className="social-3d-icon social-3d-in" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <div className="layer">
      <span />
      <span />
      <span />
      <span />
      <span className="svg-container">
        <svg viewBox="0 0 448 512" width="25" height="25">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      </span>
    </div>
    <div className="text">LinkedIn</div>
  </a>
);

const Instagram3DIcon = () => (
  <a className="social-3d-icon social-3d-ig" href="https://www.instagram.com/wmcworldservice?igsh=NmY5eXJ4OHN3cnN1" target="_blank" rel="noopener noreferrer">
    <div className="layer">
      <span />
      <span />
      <span />
      <span />
      <span className="svg-container">
        <svg fill="white" viewBox="0 0 448 512" width="25" height="25" xmlns="http://www.w3.org/2000/svg">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </span>
    </div>
    <div className="text">Instagram</div>
  </a>
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
    nav: { about: "Nosotros", services: "Servicios", contact: "Contacto", careers: "Empleo" },
    hero: {
      title: "<span class='text-highlight'>BPO & Contact Center</span>",
      subtitle: "Transformamos tus contactos en motores de crecimiento. Combinamos talento humano especializado, lead generation y tecnología de vanguardia.",
      ctaPrimary: "Solicitar Propuesta",
      ctaSecondary: "Empleo",
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
      title: "Maximizamos tu operación",
      desc: "Mediante consultoría experta e infraestructura de vanguardia.",
      services: [
        {
          title: "Experiencia Omnicanal", tag: "CONTACT CENTER",
          desc: "Unificamos todas sus vías de comunicación (voz, chat, email y redes sociales) bajo una sola interfaz, asegurando una trazabilidad total y una respuesta coherente para sus clientes."
        },
        {
          title: "Gestión Integral", tag: "CALL CENTER",
          desc: "Potenciamos tu operación con tecnología de vanguardia. Gestionamos el ciclo de vida completo de tu cliente: ventas, seguimiento posventa, cobranzas, resolución de quejas y tickets."
        },
        {
          title: "Estrategia Activa", tag: "TELEMARKETING",
          desc: "Maximizamos tu alcance con llamadas enfocadas en la promoción de productos, cierre de ventas y captura de feedback directo para mejorar su oferta de valor."
        },
        {
          title: "Disponibilidad 24/7", tag: "OPERATIVA CONTINUA",
          desc: "Maximizamos la conversión de tus campañas con negociadores expertos. Atención inmediata 24/7 para que aproveches cada centavo de tu inversión."
        }
      ]
    },
    banner: {
      title: "¿Buscas crecer profesionalmente?",
      desc: "Únete a nuestro equipo y desarrolla tu carrera en un entorno dinámico.",
      btn: "Únete a nuestro equipo"
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
      btnSuccess: "¡Recibido con Éxito!",
      rights: "WMC Services. Todos los derechos reservados.",
      company: "Compañía",
      connect: "Conectar",
      brandDesc: "Infraestructura global de contact center y BPO de próxima generación. Elevando los estándares de interacción corporativa mediante operaciones síncronas.",
      developedBy: "Desarrollado por",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    },
    contact: {
      sectionTitle: "Contactanos para subir al siguiente nivel",
      sectionSubtitle: "Conecte con nuestro equipo para soluciones corporativas.",
      formHeaderTitle: "Impulse su Operación Hoy",
      formHeaderDesc: "Cuéntenos sobre sus necesidades y un especialista en escalamiento BPO se pondrá en contacto con usted en breve.",
      phCompany: "Empresa",
      phName: "Nombre",
      phPhone: "Teléfono",
      phEmail: "Correo",
      selService: "Servicio de interés",
      optContactCenter: "Contact Center",
      optCallCenter: "Call Center",
      optTelemarketing: "Telemarketing",
      optOther: "Otro",
      selStations: "Número de estaciones",
      opt1_5: "1 a 5 estaciones",
      opt6_15: "6 a 15 estaciones",
      opt16_50: "16 a 50 estaciones",
      opt50Plus: "Más de 50 estaciones",
      btnStart: "Iniciar Operaciones",
      btnLoading: "Procesando...",
      btnSuccess: "¡Solicitud Recibida!",
      hqTag: "Sede Central",
      hqTitle: "WMC Services HQs",
      hqAddress: "Avenida 23 de Enero, Centro Comercial Fiat, Piso 1 (frente al Parque La Federación),<br />Barinas, Venezuela.",
      salesSupport: "Ventas y Soporte"
    },
    modal: {
      title: "Únete a nuestro equipo",
      subtitle: "Déjanos tus datos y nos pondremos en contacto contigo.",
      phName: "Nombre Completo",
      phPhone: "WhatsApp de Contacto",
      selAvailability: "Disponibilidad",
      optMorning: "Mañana",
      optAfternoon: "Tarde",
      optNight: "Nocturno",
      optFullTime: "Tiempo Completo",
      optAnyShift: "Cualquier Turno",
      langLabel: "Idiomas (Opcional)",
      langEnglish: "Inglés",
      langFrench: "Francés",
      langPortuguese: "Portugués",
      phLinkedin: "Link de LinkedIn (Opcional)",
      phPortfolio: "Link de portafolio (Opcional)",
      dropzoneFile: "Arrastra tu CV en PDF aquí o haz clic para subir",
      btnSubmit: "Enviar Solicitud"
    }
  },
  en: {
    nav: { about: "About Us", services: "Services", contact: "Contact", careers: "Careers" },
    hero: {
      title: "<span class='text-highlight'>BPO & Contact Center</span>",
      subtitle: "We transform your contacts into engines of growth. We combine specialized human talent, lead generation, and cutting-edge technology.",
      ctaPrimary: "Schedule Meeting",
      ctaSecondary: "Join our team",
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
      desc2: "We combine advanced technology with structured human processes to ensure measurable results and a return on investment in customer experience.",
      list: [
        "Absolute traceability of commercial interactions.",
        "Cost reduction through operational efficiency.",
        "Agile integration for a unified experience."
      ]
    },
    proposal: {
      subtitle: "Our Proposal",
      title: "We Maximize Your Operations",
      desc: "Through expert consulting and cutting-edge infrastructure.",
      services: [
        {
          title: "Omnichannel Experience", tag: "CONTACT CENTER",
          desc: "We unify all your communication channels (voice, chat, email, and social media) under a single interface, ensuring total traceability and a coherent response for your clients."
        },
        {
          title: "Comprehensive Management", tag: "CALL CENTER",
          desc: "We empower your operation with cutting-edge technology. We manage the entire lifecycle of your customer: sales, after-sales follow-up, collections, complaint resolution, and tickets."
        },
        {
          title: "Active Strategy", tag: "TELEMARKETING",
          desc: "We maximize your reach with calls focused on product promotion, closing sales, and capturing direct feedback to improve your value proposition."
        },
        {
          title: "24/7 Availability", tag: "CONTINUOUS OPERATIONS",
          desc: "We maximize the conversion of your campaigns with expert negotiators. Immediate 24/7 attention so you make the most of every cent of your investment."
        }
      ]
    },
    banner: {
      title: "Looking to grow professionally?",
      desc: "Join our team and develop your career in a dynamic environment.",
      btn: "Join our team"
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
      btnSuccess: "Successfully Received!",
      rights: "WMC Services. All rights reserved.",
      company: "Company",
      connect: "Connect",
      brandDesc: "Next-generation global contact center and BPO infrastructure. Raising the standards of corporate interaction through synchronous operations.",
      developedBy: "Developed by",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    contact: {
      sectionTitle: "Contact us to reach the next level",
      sectionSubtitle: "Connect with our team for corporate solutions.",
      formHeaderTitle: "Boost your Operation Today",
      formHeaderDesc: "Tell us about your needs and a BPO scaling specialist will contact you shortly.",
      phCompany: "Company",
      phName: "Name",
      phPhone: "Phone",
      phEmail: "Email",
      selService: "Service of interest",
      optContactCenter: "Contact Center",
      optCallCenter: "Call Center",
      optTelemarketing: "Telemarketing",
      optOther: "Other",
      selStations: "Number of stations",
      opt1_5: "1 to 5 stations",
      opt6_15: "6 to 15 stations",
      opt16_50: "16 to 50 stations",
      opt50Plus: "More than 50 stations",
      btnStart: "Start Operations",
      btnLoading: "Processing...",
      btnSuccess: "Request Received!",
      hqTag: "Headquarters",
      hqTitle: "WMC Services HQs",
      hqAddress: "23 de Enero Avenue, Fiat Shopping Center, 1st Floor (in front of La Federación Park),<br />Barinas, Venezuela.",
      salesSupport: "Sales & Support"
    },
    modal: {
      title: "Join our team",
      subtitle: "Leave us your details and we will contact you.",
      phName: "Full Name",
      phPhone: "WhatsApp Number",
      selAvailability: "Availability",
      optMorning: "Morning",
      optAfternoon: "Afternoon",
      optNight: "Night",
      optFullTime: "Full Time",
      optAnyShift: "Any Shift",
      langLabel: "Languages (Optional)",
      langEnglish: "English",
      langFrench: "French",
      langPortuguese: "Portuguese",
      phLinkedin: "LinkedIn Link (Optional)",
      phPortfolio: "Portfolio Link (Optional)",
      dropzoneFile: "Drop your PDF CV here or click to upload",
      btnSubmit: "Submit Application"
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: [0.16, 1, 0.3, 1] } }
};

const useCountUp = (end, isInView, duration = 1500) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return count;
};

const AnimatedMetric = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const animatedNum = useCountUp(stat.num !== undefined ? stat.num : 0, isInView);

  return (
    <motion.div variants={fadeUpVariant} className="metric-item" ref={ref}>
      <h2 className="metric-value">
        {stat.num !== undefined ? (
          <span>{stat.prefix || ""}{animatedNum}{stat.suffix || ""}</span>
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
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const handleNavClick = (e, targetId, tab = null) => {
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
    const formData = new FormData(e.target);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => setFormState('success'))
      .catch((error) => {
        console.error(error);
        setFormState('idle');
      });
  };

  const handleCareersSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    const formData = new FormData(e.target);
    // Para archivos necesitamos fetch multipart estándar sin cambiar headers
    fetch('/', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        setFormState('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setFormState('idle');
          setUploadedFileName("");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setFormState('idle');
      });
  };

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-blue"></div>
      <div className="ambient-glow glow-gold"></div>

      <div className={`navbar-wrapper ${isNavHidden ? 'nav-hidden' : ''}`}>
        <nav className={`pill-navbar ${isScrolled ? 'glass-nav scrolled' : 'transparent-nav'}`} style={{ position: 'relative' }}>
          {/* Corner Logo (Bigger, aligned with margin) */}
          <div className={`nav-logo corner-logo ${isScrolled ? 'hidden' : ''}`} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <img src="/logo.webp" alt="WMC Logo" className="logo-img hero-logo-size" />
          </div>

          <div className={`nav-logo ${!isScrolled ? 'invisible' : ''}`} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <img src="/logo.webp" alt="WMC Logo" className="logo-img" style={{ height: '32px', width: 'auto' }} />
          </div>

          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.nav.about}</a></li>
            <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>{t.nav.services}</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact', 'commercial_contact')}>{t.nav.contact}</a></li>
            <li><a href="#careers-banner" onClick={(e) => handleNavClick(e, 'careers-banner')}>{t.nav.careers}</a></li>
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
              <div className="nav-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
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
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', 'commercial_contact')}>
                  {t.nav.contact}
                  <ChevronRight size={16} className="link-chevron" />
                </a>
              </li>
              <li>
                <a href="#careers-banner" onClick={(e) => handleNavClick(e, 'careers-banner')}>
                  {t.nav.careers}
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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
        >
          {/* El navegador intentará cargar primero el WebM (más rápido y ligero) */}
          <source src="/video.webm" type="video/webm" />
          {/* Si el navegador no soporta WebM, cargará el MP4 como plan B */}
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
        <div className="container hero-grid single-column">
          {/* Main Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-text-column left-aligned"
          >
            {t.hero.badge && (
              <motion.div variants={fadeUpVariant} className="hero-badge left-aligned">
                {t.hero.badge}
              </motion.div>
            )}

            <motion.h1
              variants={fadeUpVariant}
              className="hero-title left-aligned"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />

            <motion.p variants={fadeUpVariant} className="hero-subtitle left-aligned">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="hero-cta-group left-aligned">
              <button className="hero-cool-btn" onClick={(e) => handleNavClick(e, 'contact', 'commercial_contact')}>
                {t.hero.ctaPrimary}
              </button>
              {t.hero.ctaSecondary && (
                <button className="hero-cool-btn secondary" onClick={(e) => handleNavClick(e, 'careers-banner')}>
                  {t.hero.ctaSecondary}
                </button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="metrics container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
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
          viewport={{ once: true, margin: "-150px" }}
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
          viewport={{ once: true, margin: "-150px" }}
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
          viewport={{ once: true, margin: "-150px" }}
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
                <a href="mailto:wmcworldservices@gmail.com " className="glass-detail-row">
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

        {/* Careers Banner (Moved to end of contact section) */}
        <div id="careers-banner" className="careers-banner section container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-150px" }}
            className="careers-banner-card"
          >
            <div className="banner-content">
              <h2 className="banner-title">{t.banner.title}</h2>
              <p className="banner-desc">{t.banner.desc}</p>
            </div>
            <div className="banner-action">
              <button className="banner-btn" onClick={() => setIsModalOpen(true)}>
                {t.banner.btn} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </button>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Talent Modal */}
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
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Columna 2: Navegación Interna */}
          <div className="footer-links-column">
            <h5 className="footer-column-title">{t.footer.company}</h5>
            <ul className="footer-navigation-list">
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.nav.about}</a></li>
              <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>{t.nav.services}</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.nav.contact}</a></li>
              <li><a href="#careers-banner" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>{t.nav.careers}</a></li>
            </ul>
          </div>

          {/* Columna 3: Redes / Legal Micro */}
          <div className="footer-links-column">
            <h5 className="footer-column-title">{t.footer.connect}</h5>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', paddingBottom: '30px' }}>
              <LinkedIn3DIcon />
              <Instagram3DIcon />
              <Facebook3DIcon />
            </div>
          </div>

        </div>

        {/* Cierre de Copyright y Créditos */}
        <div className="container footer-credits-bar">
          <div className="footer-copyright-micro">
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
            <span className="credits-divider" style={{ margin: '0 10px', opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              {t.footer.developedBy} <a href="mailto:rocastack@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>rocastack@gmail.com</a>
            </span>
          </div>
          <div className="credits-right">
            <a href="#privacy" className="legal-link-footer">{t.footer.privacy}</a>
            <span className="credits-divider">·</span>
            <a href="#terms" className="legal-link-footer">{t.footer.terms}</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=584245937012&text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios.&type=phone_number&app_absent=0"
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

