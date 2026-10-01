import type { LanguageCode } from "@/data/i18n";

export type ContactFormCopy = {
  name: string;
  email: string;
  business: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  optional: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderBusiness: string;
  placeholderMessage: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  directEmail: string;
  privacy: string;
  privacyLink: string;
  required: string;
  error: string;
  services: Array<{ value: string; label: string }>;
  budgets: Array<{ value: string; label: string }>;
  timelines: Array<{ value: string; label: string }>;
};

export const contactFormCopy: Record<LanguageCode, ContactFormCopy> = {
  en: {
    name: "Name",
    email: "Email",
    business: "Business or project",
    service: "What do you need?",
    budget: "Budget",
    timeline: "Timeline",
    message: "Tell me about it",
    optional: "Optional",
    placeholderName: "Your name",
    placeholderEmail: "you@example.com",
    placeholderBusiness: "Restaurant, salon, personal project...",
    placeholderMessage: "What are you trying to build, what do you already have, and what should the final result do?",
    submit: "Send enquiry",
    sending: "Sending...",
    successTitle: "Message received.",
    successBody: "Your enquiry is now recorded. I will reply by email.",
    directEmail: "Or email me directly",
    privacy: "I have read the privacy notice and understand these details will be used to reply to this enquiry.",
    privacyLink: "Privacy notice",
    required: "Please complete the required fields.",
    error: "Unable to send right now. Please email 16alves02@gmail.com directly.",
    services: [
      { value: "business-website", label: "Business website" },
      { value: "landing-page", label: "Landing page" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "custom-website", label: "Custom website" },
      { value: "other", label: "Not sure / other" },
    ],
    budgets: [
      { value: "under-500", label: "Under €500" },
      { value: "500-1000", label: "€500 - €1,000" },
      { value: "1000-2000", label: "€1,000 - €2,000" },
      { value: "2000-plus", label: "€2,000+" },
      { value: "not-sure", label: "Not sure yet" },
    ],
    timelines: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-month", label: "Within 1 month" },
      { value: "1-3-months", label: "1 - 3 months" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
  "pt-PT": {
    name: "Nome",
    email: "Email",
    business: "Negócio ou projeto",
    service: "O que precisas?",
    budget: "Orçamento",
    timeline: "Prazo",
    message: "Conta-me sobre o projeto",
    optional: "Opcional",
    placeholderName: "O teu nome",
    placeholderEmail: "tu@exemplo.com",
    placeholderBusiness: "Restaurante, salão, projeto pessoal...",
    placeholderMessage: "O que queres construir, o que já tens e o que o resultado final deve fazer?",
    submit: "Enviar pedido",
    sending: "A enviar...",
    successTitle: "Mensagem recebida.",
    successBody: "O teu pedido ficou registado e será respondido por email.",
    directEmail: "Ou envia-me um email diretamente",
    privacy: "Li a informação de privacidade e compreendo que estes dados serão usados para responder a este pedido.",
    privacyLink: "Privacidade",
    required: "Preenche os campos obrigatórios.",
    error: "Não foi possível enviar agora. Envia um email diretamente para 16alves02@gmail.com.",
    services: [
      { value: "business-website", label: "Website para negócio" },
      { value: "landing-page", label: "Landing page" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "custom-website", label: "Website personalizado" },
      { value: "other", label: "Não tenho a certeza / outro" },
    ],
    budgets: [
      { value: "under-500", label: "Até 500 €" },
      { value: "500-1000", label: "500 € - 1.000 €" },
      { value: "1000-2000", label: "1.000 € - 2.000 €" },
      { value: "2000-plus", label: "2.000 €+" },
      { value: "not-sure", label: "Ainda não sei" },
    ],
    timelines: [
      { value: "asap", label: "O mais rápido possível" },
      { value: "1-month", label: "Dentro de 1 mês" },
      { value: "1-3-months", label: "1 - 3 meses" },
      { value: "exploring", label: "Estou só a explorar" },
    ],
  },
  es: {
    name: "Nombre",
    email: "Email",
    business: "Negocio o proyecto",
    service: "¿Qué necesitas?",
    budget: "Presupuesto",
    timeline: "Plazo",
    message: "Cuéntame sobre el proyecto",
    optional: "Opcional",
    placeholderName: "Tu nombre",
    placeholderEmail: "tu@ejemplo.com",
    placeholderBusiness: "Restaurante, salón, proyecto personal...",
    placeholderMessage: "¿Qué quieres construir, qué tienes ya y qué debe hacer el resultado final?",
    submit: "Enviar consulta",
    sending: "Enviando...",
    successTitle: "Mensaje recibido.",
    successBody: "Tu consulta ha quedado registrada y responderé por email.",
    directEmail: "O escríbeme directamente",
    privacy: "He leído el aviso de privacidad y entiendo que estos datos se utilizarán para responder a esta consulta.",
    privacyLink: "Privacidad",
    required: "Completa los campos obligatorios.",
    error: "No se puede enviar ahora. Escribe directamente a 16alves02@gmail.com.",
    services: [
      { value: "business-website", label: "Sitio web para negocio" },
      { value: "landing-page", label: "Landing page" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "custom-website", label: "Sitio web personalizado" },
      { value: "other", label: "No estoy seguro / otro" },
    ],
    budgets: [
      { value: "under-500", label: "Menos de 500 €" },
      { value: "500-1000", label: "500 € - 1.000 €" },
      { value: "1000-2000", label: "1.000 € - 2.000 €" },
      { value: "2000-plus", label: "2.000 €+" },
      { value: "not-sure", label: "Todavía no lo sé" },
    ],
    timelines: [
      { value: "asap", label: "Lo antes posible" },
      { value: "1-month", label: "En 1 mes" },
      { value: "1-3-months", label: "1 - 3 meses" },
      { value: "exploring", label: "Solo estoy explorando" },
    ],
  },
  "zh-CN": {
    name: "姓名",
    email: "邮箱",
    business: "企业或项目",
    service: "你需要什么？",
    budget: "预算",
    timeline: "时间安排",
    message: "告诉我项目情况",
    optional: "可选",
    placeholderName: "你的姓名",
    placeholderEmail: "you@example.com",
    placeholderBusiness: "餐厅、美容院、个人项目……",
    placeholderMessage: "你想构建什么、已经有什么，以及最终结果需要实现什么？",
    submit: "发送需求",
    sending: "发送中……",
    successTitle: "已收到消息。",
    successBody: "你的需求已记录，我会通过邮箱回复。",
    directEmail: "也可以直接发邮件给我",
    privacy: "我已阅读隐私说明，并了解这些信息将用于回复本次咨询。",
    privacyLink: "隐私说明",
    required: "请填写必填字段。",
    error: "暂时无法发送。请直接发送邮件至 16alves02@gmail.com。",
    services: [
      { value: "business-website", label: "企业网站" },
      { value: "landing-page", label: "落地页" },
      { value: "ecommerce", label: "电子商务" },
      { value: "custom-website", label: "定制网站" },
      { value: "other", label: "还不确定 / 其他" },
    ],
    budgets: [
      { value: "under-500", label: "低于 €500" },
      { value: "500-1000", label: "€500 - €1,000" },
      { value: "1000-2000", label: "€1,000 - €2,000" },
      { value: "2000-plus", label: "€2,000+" },
      { value: "not-sure", label: "还不确定" },
    ],
    timelines: [
      { value: "asap", label: "尽快" },
      { value: "1-month", label: "1 个月内" },
      { value: "1-3-months", label: "1 - 3 个月" },
      { value: "exploring", label: "只是了解一下" },
    ],
  },
  fr: {
    name: "Nom",
    email: "E-mail",
    business: "Entreprise ou projet",
    service: "De quoi avez-vous besoin ?",
    budget: "Budget",
    timeline: "Délai",
    message: "Parlez-moi du projet",
    optional: "Optionnel",
    placeholderName: "Votre nom",
    placeholderEmail: "vous@exemple.com",
    placeholderBusiness: "Restaurant, salon, projet personnel...",
    placeholderMessage: "Que voulez-vous construire, qu'avez-vous déjà et que doit faire le résultat final ?",
    submit: "Envoyer la demande",
    sending: "Envoi...",
    successTitle: "Message reçu.",
    successBody: "Votre demande est enregistrée et je répondrai par e-mail.",
    directEmail: "Ou écrivez-moi directement",
    privacy: "J'ai lu la notice de confidentialité et je comprends que ces informations seront utilisées pour répondre à cette demande.",
    privacyLink: "Confidentialité",
    required: "Remplissez les champs obligatoires.",
    error: "Impossible d'envoyer pour le moment. Écrivez directement à 16alves02@gmail.com.",
    services: [
      { value: "business-website", label: "Site web professionnel" },
      { value: "landing-page", label: "Landing page" },
      { value: "ecommerce", label: "E-commerce" },
      { value: "custom-website", label: "Site web personnalisé" },
      { value: "other", label: "Je ne sais pas encore / autre" },
    ],
    budgets: [
      { value: "under-500", label: "Moins de 500 €" },
      { value: "500-1000", label: "500 € - 1 000 €" },
      { value: "1000-2000", label: "1 000 € - 2 000 €" },
      { value: "2000-plus", label: "2 000 €+" },
      { value: "not-sure", label: "Pas encore défini" },
    ],
    timelines: [
      { value: "asap", label: "Dès que possible" },
      { value: "1-month", label: "Sous 1 mois" },
      { value: "1-3-months", label: "1 - 3 mois" },
      { value: "exploring", label: "Je me renseigne seulement" },
    ],
  },
};
