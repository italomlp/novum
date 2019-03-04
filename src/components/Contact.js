import React from 'react';

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          name="contact"
          action="/contactSuccess/"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar" className="special" />
            </li>
            <li>
              <input type="reset" value="Limpar" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:contato@igorzahir.com">contato@igorzahir.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-instagram" />
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/igorzahir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @igorzahir
            </a>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
