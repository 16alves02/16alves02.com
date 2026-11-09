import { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';

const copy = {
  'pt-PT': { contact: 'Contactar', consentTitle: 'Privacidade e conteúdo externo', consentText: 'O leitor do jogo RAW. é fornecido pela itch.io. Só será carregado se aceitares conteúdo externo. A tua escolha fica guardada neste navegador.', accept: 'Aceitar conteúdo externo', reject: 'Rejeitar', settings: 'Preferências de privacidade', privacy: 'Privacidade', terms: 'Termos', load: 'Carregar leitor externo', external: 'Abrir na itch.io', blocked: 'O leitor externo está desativado. Podes abri-lo diretamente na itch.io.', close: 'Fechar' },
  en: { contact: 'Contact', consentTitle: 'Privacy and external content', consentText: 'The RAW. game player is provided by itch.io. It will only load if you allow external content. Your choice is saved in this browser.', accept: 'Allow external content', reject: 'Reject', settings: 'Privacy preferences', privacy: 'Privacy', terms: 'Terms', load: 'Load external player', external: 'Open on itch.io', blocked: 'The external player is disabled. You can open it directly on itch.io.', close: 'Close' },
  es: { contact: 'Contacto', consentTitle: 'Privacidad y contenido externo', consentText: 'El reproductor del juego RAW. lo proporciona itch.io. Solo se cargará si aceptas contenido externo. Tu elección se guarda en este navegador.', accept: 'Aceptar contenido externo', reject: 'Rechazar', settings: 'Preferencias de privacidad', privacy: 'Privacidad', terms: 'Términos', load: 'Cargar reproductor externo', external: 'Abrir en itch.io', blocked: 'El reproductor externo está desactivado. Puedes abrirlo directamente en itch.io.', close: 'Cerrar' },
  fr: { contact: 'Contact', consentTitle: 'Confidentialité et contenu externe', consentText: 'Le lecteur du jeu RAW. est fourni par itch.io. Il ne sera chargé que si vous autorisez le contenu externe. Votre choix est enregistré dans ce navigateur.', accept: 'Autoriser le contenu externe', reject: 'Refuser', settings: 'Préférences de confidentialité', privacy: 'Confidentialité', terms: 'Conditions', load: 'Charger le lecteur externe', external: 'Ouvrir sur itch.io', blocked: 'Le lecteur externe est désactivé. Vous pouvez l’ouvrir directement sur itch.io.', close: 'Fermer' },
  it: { contact: 'Contatto', consentTitle: 'Privacy e contenuti esterni', consentText: 'Il lettore del gioco RAW. è fornito da itch.io. Verrà caricato solo se autorizzi i contenuti esterni. La scelta viene salvata in questo browser.', accept: 'Accetta contenuti esterni', reject: 'Rifiuta', settings: 'Preferenze privacy', privacy: 'Privacy', terms: 'Termini', load: 'Carica lettore esterno', external: 'Apri su itch.io', blocked: 'Il lettore esterno è disattivato. Puoi aprirlo direttamente su itch.io.', close: 'Chiudi' },
  de: { contact: 'Kontakt', consentTitle: 'Datenschutz und externe Inhalte', consentText: 'Der RAW.-Spieler wird von itch.io bereitgestellt. Er wird nur geladen, wenn du externe Inhalte erlaubst. Deine Auswahl wird in diesem Browser gespeichert.', accept: 'Externe Inhalte erlauben', reject: 'Ablehnen', settings: 'Datenschutzeinstellungen', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', load: 'Externen Player laden', external: 'Auf itch.io öffnen', blocked: 'Der externe Player ist deaktiviert. Du kannst ihn direkt auf itch.io öffnen.', close: 'Schließen' },
  ja: { contact: 'お問い合わせ', consentTitle: 'プライバシーと外部コンテンツ', consentText: 'RAW. のゲームプレーヤーは itch.io によって提供されます。外部コンテンツを許可した場合のみ読み込まれます。選択内容はこのブラウザーに保存されます。', accept: '外部コンテンツを許可', reject: '拒否', settings: 'プライバシー設定', privacy: 'プライバシー', terms: '利用規約', load: '外部プレーヤーを読み込む', external: 'itch.io で開く', blocked: '外部プレーヤーは無効です。itch.io で直接開くことができます。', close: '閉じる' },
};

const STORAGE_KEY = '16alves02-external-content-consent';
const CHANGE_EVENT = '16alves02:privacy-change';

function getChoice() {
  try { return window.localStorage.getItem(STORAGE_KEY); } catch { return null; }
}

export function ExternalGameEmbed({ language = 'en' }) {
  const [choice, setChoice] = useState(getChoice);

  useEffect(() => {
    const sync = () => setChoice(getChoice());
    window.addEventListener(CHANGE_EVENT, sync);
    return () => window.removeEventListener(CHANGE_EVENT, sync);
  }, []);

  const allow = () => {
    try { window.localStorage.setItem(STORAGE_KEY, 'accepted'); } catch { /* Storage may be disabled. */ }
    setChoice('accepted');
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const t = copy[language] || copy.en;
  return (
    <div className="raw-itch-embed">
      <div className="raw-embed-heading">
        <span className="raw-embed-mark">RAW.</span>
        <span className="raw-embed-caption">INTERACTIVE CONVERSATION GAME / ITCH.IO</span>
      </div>
      {choice === 'accepted' ? (
        <iframe
          src="https://itch.io/embed/5239051?bg_color=F7F5F0&fg_color=171717&link_color=E5483F&border_color=E5E2DC"
          width="100%"
          height="167"
          title="RAW. by ALV16 STUDIOS"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="raw-embed-consent-placeholder">
          <p>{t.blocked}</p>
          <button type="button" className="button button-dark" onClick={allow}>{t.load}</button>
        </div>
      )}
      <a className="raw-embed-external" href="https://alv16studios.itch.io/raw-conversation-game" target="_blank" rel="noopener noreferrer">
        {t.external} <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function SiteUtilities({ language, onContact }) {
  const t = copy[language] || copy.en;
  const [choice, setChoice] = useState(getChoice);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(choice === null);
  }, [choice]);

  useEffect(() => {
    const sync = () => setChoice(getChoice());
    window.addEventListener(CHANGE_EVENT, sync);
    return () => window.removeEventListener(CHANGE_EVENT, sync);
  }, []);

  const saveChoice = (value) => {
    try { window.localStorage.setItem(STORAGE_KEY, value); } catch { /* Storage may be disabled. */ }
    setChoice(value);
    setVisible(false);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const openSettings = () => {
    setVisible(true);
    setChoice(getChoice());
  };

  return (
    <>
      <div className="mobile-contact-cta">
        <button type="button" className="button button-dark" onClick={onContact}>
          <MessageCircle size={17} aria-hidden="true" /> {t.contact}
        </button>
      </div>
      <nav className="footer-legal-links" aria-label={t.settings}>
        <a href="/privacy.html">{t.privacy}</a>
        <a href="/terms.html">{t.terms}</a>
        <button type="button" onClick={openSettings}><ShieldCheck size={14} aria-hidden="true" /> {t.settings}</button>
      </nav>
      {visible && (
        <section className="privacy-consent" role="dialog" aria-modal="false" aria-labelledby="privacy-consent-title">
          <div className="privacy-consent-copy">
            <strong id="privacy-consent-title">{t.consentTitle}</strong>
            <p>{t.consentText} <a href="/privacy.html">{t.privacy}</a>.</p>
          </div>
          <div className="privacy-consent-actions">
            <button type="button" className="privacy-reject" onClick={() => saveChoice('rejected')}>{t.reject}</button>
            <button type="button" className="button button-dark" onClick={() => saveChoice('accepted')}>{t.accept}</button>
          </div>
        </section>
      )}
    </>
  );
}
