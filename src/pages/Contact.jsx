import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_q6s1255",       // from EmailJS
      "template_u7zqm0u",      // from EmailJS
      form.current,
      "ZhnWdN60345ysrw7f"        // from EmailJS
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Try again.");
      }
    );
  };

  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg">
        <input name="user_name" type="text" placeholder="Name" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input name="user_email" type="email" placeholder="Email" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea name="message" placeholder="Message" rows="5" required className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Connect</h3>
        <div className="flex space-x-4 mt-2">
          <a href="https://github.com/jackmp18" className="text-blue-600 hover:underline" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/jack-page-6177831b5/" className="text-blue-600 hover:underline" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
