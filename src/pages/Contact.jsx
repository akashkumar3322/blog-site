import "../styles/Contact.css";
import Swal from "sweetalert2";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function Contact() {
  console.log("contact component loadeed successfully");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch(
        `https://${
          import.meta.env.VITE_SANITY_PROJECT_ID
        }.api.sanity.io/v2023-10-31/data/mutate/production`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SANITY_TOKEN}`,
          },
          body: JSON.stringify({
            mutations: [
              {
                create: {
                  _type: "contactMessage",
                  name: formdata.name,
                  email: formdata.email,
                  message: formdata.message,
                  createdAt: new Date().toISOString(),
                },
              },
            ],
          }),
        }
      );
      const data = await res.json();
      console.log("sanity resonse", data);
      if (res.ok && !data.error) {
        Swal.fire("message sent!", "We’ll get back to you soon.", "success");
        form.reset();
      } else {
        Swal.fire("Error", "Failed to save message.", "error");
        console.error("Sanity error", data);
      }
    } catch (error) {
      console.log("Error form submission ", error);
      Swal.fire("error", "There was an error submitting the form");
    }
  };
  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      style={{
        textDecoration: "none",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <motion.div className="contact-container">
        <h2>📬 Get in Touch</h2>
        <p>Feel free to contact me by filling the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </motion.section>
  );
}
