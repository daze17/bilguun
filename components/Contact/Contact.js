import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs, { init } from 'emailjs-com';
import styles from './Contact.module.css'

init(process.env.USER_ID);

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      alert(`Thank you for your message from ${data.email}`);
      const templateId = process.env.TEMPLATE_ID;
      const serviceID = process.env.SERVICE_ID;
      sendFeedback(serviceID, templateId, { name: data.username, textmessage: data.textmessage, email: data.email, number: data.contact_number })
  }
    const sendFeedback = (serviceID, templateId, variables) => {
    emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }
    return (
        <div>
            <div className={styles.slant_container}>
                <svg
                    className={styles.slant}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    >
                    <polygon points="0,100 100,0 100,100" />
                </svg>
            </div>
            <div className={styles.container} id="contact">
                    <div className={styles.wrapper}>
                            <div className={styles.text}>
                                <h1 className="title" data-aos="fade-up">CONTACT</h1>
                                    <form className={styles.contact_form} onSubmit={handleSubmit(onSubmit)}> 
                                    
                                    <input type="text" placeholder="Your Name"
                                    {...register("username", {required: 'empty',
                                                  minLength: {
                                                    value: 2,
                                                    message: 'too short'
                                                  },
                                                  maxLength: {
                                                    value: 34,
                                                    message: 'too long'
                                                  }
                                                  })} />
                                    {errors.username && <p className={styles.error_text}>{errors.username.message}</p>}
                                    <input type="text" placeholder="Email"
                                                                {...register("email", {required: true,
                                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                                })} /> 
                                    {errors.email && <p className={styles.error_text}>Имэйл буруу байна</p>}
                                    <input type="text" placeholder="Phone number" name="contact_number" id="contact_number" {...register} />
                                    <textarea placeholder="Send message!" 
                                    {...register("textmessage", {required: 'Enter text!',
                                                   minLength: {
                                                     value: 5,
                                                     message: "too short"
                                                   }
                                    })} />
                                    {errors.textmessage && <p className={styles.error_text}>{errors.textmessage.message}</p>}
                                    <button type="submit"> Send </button>
                                    </form>
                            </div>
                    </div>
                </div>        
        </div>
    )
}
