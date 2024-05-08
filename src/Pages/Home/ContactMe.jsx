import { useState, useRef, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import options from "../../data/selectOptionsForm";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import { Link } from "react-scroll";

export default function ContactMe() {
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const navigate = useNavigate();

 function handleDisabledBtn(e) {
   const checkBox = document.getElementById("checkbox")
   if (checkBox.checked) {
     setDisabledBtn(false)
   }else{
    setDisabledBtn(true)
  }
  };
  
  // useEffect(() => , []);
  
  const sendEmail = (e) => {
    emailjs.init(`${process.env.REACT_APP_EMAILJS_API_KEY}`);
    const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`
    const templateId = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`
    const publicApiKey = `${process.env.REACT_APP_EMAILJS_API_KEY}`
    try {
      setLoading(true);
      emailjs.sendForm(serviceId, templateId,
        form.current, publicApiKey);
    } catch (error) {
      console.log(error);
    } finally {
      toast("Message was sent successfully!");
      setTimeout(document.getElementById("contactForm").reset(), 500)
      setLoading(false);
      setDisabledBtn(true);
    }
    
};

  return (
    <section id="contactMe" className="contactSection">
      <div>
        <p className="subTitle">Get in touch</p>
        <h2>Contact me</h2>
        <p className="textLG">
          Fill the form below to contact me. Fields marked with <span className="redStar">*</span> are required.
        </p>
      </div>

      <form 
        ref={form}
        className="contactFormContainer" id="contactForm"
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
      }}>
        <div className="container">
          <label htmlFor="firstName" className="contactLabel">
            <span className="textMD">First Name<span className="redStar">*</span></span>
            <input
              type="text"
              className="contactInput textMD"
              name="firstName"
              id="firstName"

              required
              autoComplete="off"
 
            />
          </label>
          <label htmlFor="lastName" className="contactLabel">
            <span className="textMD">Last Name<span className="redStar">*</span></span>
            <input
              type="text"
              className="contactInput textMD"

              name="lastName"
              id="lastName"
                          required
              autoComplete="off"

            />
          </label>
          <label htmlFor="email" className="contactLabel">
            <span className="textMD">Email<span className="redStar">*</span></span>
            <input
              type="email"

              className="contactInput textMD"
              name="email"
              id="email"
                          required
              autoComplete="off"
    
            />
          </label>
          <label htmlFor="phoneNumber" className="contactLabel">
            <span className="textMD">Phone number</span>
            <input
              type="tel"
              className="contactInput textMD"
              name="phoneNumber"

              id="phoneNumber"
              autoComplete="off"

            />
          </label>
        </div>
        <label htmlFor="chooseTopic" className="contactLabel">
          <span className="textMD">Choose a topic</span>
          <select id="chooseTopic" name="chooseTopic" className="contactInput textMD"
          >
            {options?.map((item, index) => 
              <option key={index} value={item.value}>{item.label}</option>
            )}
            
          </select>
        </label>
        <label htmlFor="message" className="contactLabel">
          <span className="textMD">Message<span className="redStar">*</span></span>
          <textarea
            className="contactInput textMD"
            id="message"
            name="message"
            rows={8}
            placeholder="Type your message..."
            autoComplete="off"
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkboxLabel">
          <input type="checkbox" required name="checkbox" id="checkbox"  autoComplete="off" onChange={handleDisabledBtn}/>
          <span className="textSM">I accept {" "}
            <Link to="/termsofservice"
                  onClick={()=>navigate("/termsofservice")}
                className="textSM navigationLink"
              >the Terms</Link>

          </span>
        </label>
        <div>
          <button type="submit" className={`btn btnPrimary contactFormBtn ${disabledBtn === true ? "disabledButton" : ""}`}
            disabled={disabledBtn}>
            Submit
          </button>
        </div>
      </form>
      
       <ToastContainer />
    </section>
  );
}
