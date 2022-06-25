import { useState, createRef } from "react";
import { send as sendEmail } from "@emailjs/browser";
import { PaperPlaneTilt, CircleNotch } from "phosphor-react";
import type { FormEvent } from "react";

import "./styles.scss";
import { Links } from "../../components/Links";


export function Contact() {
  const formRef = createRef<HTMLFormElement>();
  const buttonRef = createRef<HTMLButtonElement>();
  const appRef = createRef<HTMLDivElement>();

  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (!name || !email || !subject || !message) {
      buttonRef.current?.classList.add("error");

      // timeout needs to be same value on error animations
      setTimeout(() => buttonRef.current?.classList.remove("error"), 400);
      return;
    }

    setIsLoading(true);

    sendEmail(
      "service_w6ayj3i",
      "template_wscx905",
      {
        name,
        email,
        subject,
        message,
      },
      "tTfSOba7i6Lq8zrQ2"
    )
      .then((res) => {
        if (res.status !== 200) return Promise.reject();

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        alert("Unhandled error, report it to me please");
      })
      .finally(() => {
        setIsLoading(false);
        setEmailSent(true);
        appRef.current?.classList.add("remove-bg");
      });
  }

  return (
    <div ref={appRef} className="contact">
      {!emailSent ? (
        <>
          <form ref={formRef} onSubmit={handleSubmit}>
            <h1>Contact me!</h1>
            <div className="personal-info">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Email subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Tell me, I'm curious..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button ref={buttonRef} type="submit">
              {!isLoading ? (
                <PaperPlaneTilt className="icon submit" />
              ) : (
                <CircleNotch className="icon submit loading" />
              )}
            </button>
          </form>
          <Links />
        </>
      ) : (
        <>
          <h1 className="big" style={{ color: "#ededff" }}>
            Thanks!
          </h1>
          <Links className="big" />
        </>
      )}
    </div>
  );
}
