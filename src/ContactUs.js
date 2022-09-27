import  './ContactCss.css'

function ContactUs(){
    return <div class="container">  
    <form action="https://formspree.io/f/mpzbnday" id="contact"  method="POST">
      <h3>Contacta con nosotros</h3>
      <h4>Le contestaremos en 24 horas.</h4>
      <fieldset>
        <input placeholder="Nombre" type="text" tabindex="1" required />
      </fieldset>
      <fieldset>
        <input placeholder="Email" type="email" tabindex="2"  name="email" required/>
      </fieldset>
      <fieldset>
        <input placeholder="Teléfono (optional)" type="tel" tabindex="3" />
      </fieldset>
      <fieldset>
        <textarea placeholder="Escriba un mensaje..." tabindex="5"  name="message"required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Enviando"> Enviar</button>
      </fieldset>
     
    </form>
  </div>


}
export default ContactUs;