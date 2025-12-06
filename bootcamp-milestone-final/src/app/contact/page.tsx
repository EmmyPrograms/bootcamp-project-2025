"use client";
import React from "react";
import emailjs from "@emailjs/browser";


const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;


export default function ContactPage() {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = React.useState(false);
  const [status, setStatus] = React.useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    setIsSending(true);
    setStatus(null);

    if(!formRef.current){
      setIsSending(false);
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }
  


  return (
    <div className="flex flex-col items-center gap-8">
      <title>Contact</title>
      <h1>
        <i>Feel free to contact!</i>
      </h1>
      <form ref={formRef} onSubmit={handleSubmit} className=" panel">
        <label htmlFor="text"> Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="input"
          required
        />
        <label htmlFor="reply-to"> Email: </label>
        <input
          type="email"
          id="reply-to"
          name="reply-to"
          placeholder="Your Email"
          className="input"
          required
        />
        <textarea
          id="message"
          name = "message"
          placeholder="Your Message: "
          className="input h-32 outline-none w-full"
          required
        />
        <div className="flex flex-col items-center gap-4">
          <button className = "hoverPrimary" type="submit" id="submit-button" disabled={isSending}>
          Submit
        </button>
        {status === "success" && (
          <p>
            Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p>
            Something went wrong. Please try again later.
          </p>
        )}

        </div>
      </form>
      <div className="text=base font-normal text-secondary leading-normal">
        <p>Phone: (916)218-0827</p>
        <p>Email: ameliaharris492@gmail.com</p>
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
