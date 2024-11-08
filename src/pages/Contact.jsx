import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

// Iconos
import { MdAttachEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

// react-hot-toast
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3e575q3",
        "template_ckrhb49",
        form.current,
        "6g6pR3r6bYXHsN6gj"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Notificación de éxito
          toast.success("¡Mensaje enviado exitosamente!", {
            duration: 5000,
          });
        },
        (error) => {
          console.log(error.text);
          // Notificación de error
          toast.error("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact">
        <h1>Contacto</h1>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdAttachEmail className="contact_option-icon" />
              <h4>Correo</h4>
              <h5>Contactar</h5>
              <a className="mensaje" href="mailto:tahayk3@gmail.com">
                Enviar un mensaje
              </a>
            </article>

            <article className="contact_option">
              <SiMessenger className="contact_option-icon" />
              <h4>Messenger</h4>
              <h5>Contactar</h5>
              <a className="mensaje" href="https://m.me/cristian.tahay.9">
                Enviar un mensaje
              </a>
            </article>

            <article className="contact_option">
              <BsWhatsapp className="contact_option-icon" />
              <h4>WhatsApp</h4>
              <h5>Contactar</h5>
              <a
                className="mensaje"
                href="https://api.whatsapp.com/send?phone=50236007835"
              >
                Enviar un mensaje
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Nombre y apellido"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electronico"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="12"
              placeholder="Consulta"
              required
            ></textarea>
            <button type="submit" className="btn-send">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;