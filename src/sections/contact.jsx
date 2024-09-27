import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading , setLoading] = useState(false);
    const [form, setForm] = useState({
        name:'',
        email:'',
        phone:'',
        message:'',
    });
    const handelChange = ({target: {name , value }}) => {
        setForm({...form, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_2m8knzn',
                'template_evzx95m',
                {
                    from_name: form.name,
                    to_name: 'Himanshu Jangid',
                    from_email: form.email,
                    to_email: 'jangidhimanshu2000@gmail.com',
                    message: form.message,
                    phone : form.phone,
                    email : form.email
                },
                'Yp47gV-zGWUleOIqb'
                )
            setLoading(false);
            alert('Your Message has been sent.');

            setForm({
                name:'',
                email:'',
                phone:'',
                message:'',
            });
        }catch(error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.');
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/contact_bg.jpg" alt="terminal background"
                    className="absolute inset-0 min-h-screen w-full rounded-lg"
                />
                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Interested in working together or have a question?
                        I&apos;m always open to discussing web development, coding projects, or any opportunities to collaborate.
                        Drop me a message, and let&apos;s connect!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7 ">

                        {/*label for full name*/}
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">Full Name:</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handelChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        {/*label for email address:*/}
                        <label htmlFor="email" className="space-y-3">
                            <span className="field-label">Email:</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handelChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>

                        {/*label for phone */}
                        <label htmlFor="phone" className="space-y-3">
                            <span className="field-label">Contact Number:</span>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handelChange}
                                required
                                className="field-input"
                                placeholder="+91 1234567890"
                                maxLength="16"
                            />
                        </label>

                        {/*label for message*/}
                        <label htmlFor="message" className="space-y-3">
                            <span className="field-label">Your Message:</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handelChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I'am Intrested in ..."
                            />
                        </label>

                        {/*Send Message Button*/}
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>

            </div>

        </section>
    )
}
export default Contact
