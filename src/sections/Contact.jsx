import React from 'react'
import  {useRef} from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({target : {name, value}}) => {
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = async (e) => {
        //Service ID: service_94s05cw
        e.preventDefault();
        setLoading(true);
        try
        {
            await emailjs.send(
                "service_94s05cw",
                "template_8q6tfbd",
                {
                    tittle: "Reaching out from my portfolio",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                "RrS8mN7LUmOoE8Qc8"
            )

            setLoading(false);
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
        catch (error){
            setLoading(false);
            console.log(error);
            alert("Something went wrong, please try again later!");
        }

    }

    return (
        <section className={"c-space my-20"} id="contact">
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <img src={"/assets/terminal.png"} alt={"terminal background"} className={"absolute inset-0 min-h-screen"}></img>

                <div className={"contact-container"}>
                    <h3 className={"head-text"}>
                        Let's talk!
                    </h3>
                    <p className={"text-lg text-white-600 mt-3"}>
                        Whether you want to build a game from scratch, improve an existing one, or keep a live game running smoothly with bug fixes, balance patches, and live ops — I’m here to help.
                        With hands-on experience in every stage of game development,
                        I'm always open to new collaborations and challenges. Let’s build something players will love.
                    </p>

                    <form ref = {formRef} onSubmit = {handleSubmit}  className={"mt-12 flex flex-col space-y-7"}>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Full Name</span>
                            <input
                                type={"text"}
                                name={"name"}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={"John Doe"}
                            />
                        </label>

                        <label className={"space-y-3"}>
                            <span className={"field-label"}>E-Mail</span>
                            <input
                                type={"text"}
                                name={"email"}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={"johnDoe@mail.com"}
                            />
                        </label>

                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Your Message</span>
                            <textarea
                                name={"message"}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className={"field-input"}
                                placeholder={"Hi, I'm interested in..."}
                            />
                        </label>

                        <button className={"field-btn"} type={"submit"} disabled={loading} onClick={handleSubmit}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src={"/assets/arrow-up.png"} alt={"arrow"} className={"field-btn_arrow"}/>
                        </button>
                    </form>
                </div>

            </div>


        </section>
    )
}
export default Contact
