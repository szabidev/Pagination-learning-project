import "./contact.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const ContactInfo = () => {
  return (
    <div className={`${roboto.className} contact__info `}>
      <div className="contact__info--form">
        <h1 className="contact__info--form-title">Get in touch</h1>
        <div className="contact__info--form-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address..."
            required
            autoComplete="email"
          />
        </div>
        <div className="contact__info--form-name">
          <div className="first-name">
            <label htmlFor="first">First Name</label>
            <input type="text" id="first" name="first" required />
          </div>
          <div className="last-name">
            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" name="last" required />
          </div>
        </div>
        <div className="contact__info--form-message">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows={10}
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        <div className="contact__info--form-btn">
          <button className="submit__btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
