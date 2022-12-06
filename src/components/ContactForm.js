import React  from "react"

const ContactForm = () => {


return (
    <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    className='contact form'>
        <input type="hidden" name="form-name" value="contact" />
        <div className='input'>
            <label>Nombre completo</label>
            <input type="text" name="name" />
        </div>
        
        <div className='input'>
            <label>Correo</label>
            <input type="email" name="email" />
        </div>
        
        <div className='input'>
            <label>Mensaje</label>
            <textarea name="message"></textarea>
        </div>
        
        
        <input type="submit"  className='contact-btn'/>
    </form>
)

}

export default ContactForm