"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const copy = {
  en: {
    title: "Privacy notice",
    intro: "This page explains what 16alves02 stores when you use the website.",
    analyticsTitle: "Optional analytics",
    analytics:
      "If you allow analytics, the site records first-party page views, clicks, language choice, device category and a temporary session identifier so the private dashboard can show how the site is being used. The analytics endpoint does not store IP addresses.",
    contactTitle: "Contact enquiries",
    contact:
      "When you send the contact form, the submitted details are stored so the enquiry can be reviewed and answered. The information includes your name, email, project context and message. Your email is used to reply and may also receive an automatic confirmation when that feature is enabled.",
    providerTitle: "Service providers",
    provider:
      "Website infrastructure may use services such as Supabase for the database and Resend for transactional email. Their processing is subject to their own terms and privacy documentation.",
    rightsTitle: "Your choices",
    rights:
      "You can reject optional analytics in the site banner. For questions about a contact enquiry, email Leonardo Alves at 16alves02@gmail.com.",
    updated: "Last updated: 1 October 2026",
  },
  "pt-PT": {
    title: "Informação de privacidade",
    intro:
      "Esta página explica que informação a 16alves02 guarda quando utilizas o website.",
    analyticsTitle: "Analítica opcional",
    analytics:
      "Se permitires a analítica, o site regista páginas vistas, cliques, idioma escolhido, tipo de dispositivo e um identificador temporário de sessão para que o painel privado mostre como o site está a ser utilizado. O endpoint de analítica não guarda o endereço IP.",
    contactTitle: "Pedidos de contacto",
    contact:
      "Quando envias o formulário de contacto, os dados submetidos são guardados para que o pedido possa ser analisado e respondido. A informação inclui nome, email, contexto do projeto e mensagem. O email é utilizado para responder e pode receber uma confirmação automática quando essa funcionalidade estiver ativa.",
    providerTitle: "Prestadores de serviços",
    provider:
      "A infraestrutura pode utilizar serviços como o Supabase para a base de dados e o Resend para email transacional. O tratamento realizado por esses serviços está sujeito aos respetivos termos e informações de privacidade.",
    rightsTitle: "As tuas escolhas",
    rights:
      "Podes recusar a analítica opcional no aviso do site. Para questões sobre um pedido de contacto, podes escrever para Leonardo Alves em 16alves02@gmail.com.",
    updated: "Última atualização: 1 de outubro de 2026",
  },
  es: {
    title: "Aviso de privacidad",
    intro:
      "Esta página explica qué información almacena 16alves02 cuando utilizas el sitio.",
    analyticsTitle: "Analítica opcional",
    analytics:
      "Si permites la analítica, el sitio registra páginas vistas, clics, idioma, tipo de dispositivo y un identificador temporal de sesión para el panel privado. El endpoint de analítica no almacena la dirección IP.",
    contactTitle: "Consultas de contacto",
    contact:
      "Cuando envías el formulario, los datos se almacenan para poder revisar y responder a la consulta. Se incluyen nombre, email, contexto del proyecto y mensaje. El email se utiliza para responderte y puede recibir una confirmación automática cuando la función esté activada.",
    providerTitle: "Proveedores de servicios",
    provider:
      "La infraestructura puede utilizar servicios como Supabase para la base de datos y Resend para el email transaccional. Cada proveedor está sujeto a sus propias condiciones y documentación de privacidad.",
    rightsTitle: "Tus opciones",
    rights:
      "Puedes rechazar la analítica opcional desde el aviso del sitio. Para preguntas sobre una consulta, puedes escribir a Leonardo Alves en 16alves02@gmail.com.",
    updated: "Última actualización: 1 de octubre de 2026",
  },
  "zh-CN": {
    title: "隐私说明",
    intro: "本页面说明你使用 16alves02 网站时会保存哪些信息。",
    analyticsTitle: "可选分析",
    analytics:
      "如果你允许分析，网站会记录页面访问、点击、语言、设备类别和临时会话标识，以便私有管理后台了解网站使用情况。网站分析接口不会保存 IP 地址。",
    contactTitle: "联系咨询",
    contact:
      "当你提交联系表单时，提交的信息会被保存，以便查看和回复。信息包括姓名、邮箱、项目背景和留言。邮箱用于回复，也可能在自动确认功能开启时收到确认邮件。",
    providerTitle: "服务提供商",
    provider:
      "网站基础设施可能使用 Supabase 作为数据库，使用 Resend 发送事务邮件。相关服务受各自的条款和隐私文件约束。",
    rightsTitle: "你的选择",
    rights:
      "你可以在网站提示中拒绝可选分析。如果你需要了解与咨询相关的个人数据，可以联系 Leonardo Alves：16alves02@gmail.com。",
    updated: "最后更新：2026 年 10 月 1 日",
  },
  fr: {
    title: "Notice de confidentialité",
    intro:
      "Cette page explique quelles informations 16alves02 conserve lorsque vous utilisez le site.",
    analyticsTitle: "Statistiques facultatives",
    analytics:
      "Si vous autorisez les statistiques, le site enregistre les pages vues, clics, langue, type d'appareil et un identifiant de session temporaire pour le tableau de bord privé. L'endpoint d'analyse ne stocke pas l'adresse IP.",
    contactTitle: "Demandes de contact",
    contact:
      "Lorsque vous envoyez le formulaire, les informations sont conservées pour examiner et répondre à la demande. Elles comprennent le nom, l'e-mail, le contexte du projet et le message. L'e-mail sert à répondre et peut recevoir une confirmation automatique lorsque cette fonction est activée.",
    providerTitle: "Prestataires",
    provider:
      "L'infrastructure peut utiliser Supabase pour la base de données et Resend pour les e-mails transactionnels. Chaque prestataire est soumis à ses propres conditions et informations de confidentialité.",
    rightsTitle: "Vos choix",
    rights:
      "Vous pouvez refuser les statistiques facultatives depuis le bandeau du site. Pour toute question sur une demande, contactez Leonardo Alves à 16alves02@gmail.com.",
    updated: "Dernière mise à jour : 1 octobre 2026",
  },
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const current = copy[language];

  return (
    <main className="min-h-screen bg-[#080706] text-[#F5F2ED]">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8">
        <Link
          href="/"
          className="text-xs text-[#77716A] hover:text-[#F5F2ED]"
        >
          16alves02
        </Link>

        <p className="section-eyebrow mt-12">Privacy</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
          {current.title}
        </h1>
        <p className="mt-6 text-base leading-8 text-[#A29B92]">
          {current.intro}
        </p>

        <div className="mt-12 space-y-10">
          <PolicySection
            title={current.analyticsTitle}
            body={current.analytics}
          />
          <PolicySection
            title={current.contactTitle}
            body={current.contact}
          />
          <PolicySection
            title={current.providerTitle}
            body={current.provider}
          />
          <PolicySection title={current.rightsTitle} body={current.rights} />
        </div>

        <p className="mt-12 text-xs text-[#625D56]">{current.updated}</p>
      </div>
    </main>
  );
}

function PolicySection({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="border-t border-white/8 pt-6">
      <h2 className="text-xl font-semibold tracking-[-0.025em]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[#8F8981]">{body}</p>
    </section>
  );
}
