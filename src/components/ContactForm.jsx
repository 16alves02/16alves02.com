import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, LoaderCircle } from 'lucide-react';

export default function ContactForm({ language = 'en' }) {
  const pt = language === 'pt-PT';
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [state, setState] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function submit(event) {
    event.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    setFeedback('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || (pt ? 'Não foi possível enviar a mensagem.' : 'The message could not be sent.'));
      setState('sent');
      const notificationSent = data.notificationSent === true;
      setFeedback(notificationSent
        ? (pt ? 'Mensagem enviada. Obrigado pelo contacto.' : 'Message sent. Thank you for getting in touch.')
        : (pt ? 'Mensagem guardada, mas a notificação por email ainda não está disponível.' : 'Message saved, but the email notification service is not configured yet.'));
      setValues({ name: '', email: '', subject: '', message: '', website: '' });
    } catch (error) {
      setState('error');
      setFeedback(error.message || (pt ? 'Ocorreu um erro. Tenta novamente.' : 'Something went wrong. Please try again.'));
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-heading">
        <span>{pt ? 'FORMULÁRIO DE CONTACTO' : 'CONTACT FORM'}</span>
        <p>{pt ? 'Também podes escrever diretamente para alv16studios@gmail.com.' : 'You can also email alv16studios@gmail.com directly.'}</p>
      </div>
      <div className="contact-form-grid">
        <label>{pt ? 'Nome' : 'Name'}<input name="name" autoComplete="name" required maxLength={100} value={values.name} onChange={update} placeholder={pt ? 'O teu nome' : 'Your name'} /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={update} placeholder="name@example.com" /></label>
        <label className="contact-form-wide">{pt ? 'Assunto' : 'Subject'}<input name="subject" required maxLength={140} value={values.subject} onChange={update} placeholder={pt ? 'O motivo do contacto' : 'What is this about?'} /></label>
        <label className="contact-form-wide">{pt ? 'Mensagem' : 'Message'}<textarea name="message" required minLength={10} maxLength={5000} rows={5} value={values.message} onChange={update} placeholder={pt ? 'Escreve a tua mensagem...' : 'Write your message...'} /></label>
      </div>
      <label className="contact-form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} /></label>
      <div className="contact-form-actions">
        <button type="submit" disabled={state === 'sending'}>{state === 'sending' ? <LoaderCircle className="spin" size={16} /> : state === 'sent' ? <CheckCircle2 size={16} /> : <ArrowUpRight size={16} />}{state === 'sending' ? (pt ? 'A enviar...' : 'Sending...') : (pt ? 'Enviar mensagem' : 'Send message')}</button>
        <span role="status" aria-live="polite" className={state === 'error' ? 'form-feedback is-error' : 'form-feedback'}>{feedback}</span>
      </div>
    </form>
  );
}
