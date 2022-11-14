import { useState } from "react";
import { send as sendEmail } from "@emailjs/browser";
import { CaretDoubleRight, CaretLeft, CircleNotch } from "phosphor-react";

import { Header } from "../../components/Header";
import { Question } from "../../components/Question";
import { BlobAnimation } from "../../components/BlobAnimation";

import "./styles.scss";

enum Questions {
  INITIAL = 0,
  NAME = 1,
  CONTACT = 2,
  SUBJECT = 3,
  MESSAGE = 4,
  ERROR = 8,
  THANKS = 9,
}

export function Contact() {
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const [question, setQuestion] = useState(Questions.INITIAL);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const previousQuestion = () => setQuestion((value) => --value);
  const nextQuestion = () => setQuestion((value) => ++value);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (question !== Questions.MESSAGE && event.key === "Enter") {
      switch (question) {
      case Questions.INITIAL:
        nextQuestion();
        break;
      case Questions.NAME:
        if (name) nextQuestion();
        break;
      case Questions.CONTACT:
        if (contact) nextQuestion();
        break;
      case Questions.SUBJECT:
        if (subject) nextQuestion();
        break;
      }
    } else if (event.key === "Escape" && question > Questions.NAME)
      previousQuestion();
  }

  function handleSendEmail() {
    const {
      VITE_EMAILJS_SERVICE_ID: service,
      VITE_EMAILJS_TEMPLATE_ID: template,
      VITE_EMAILJS_API_KEY: apiKey,
    } = import.meta.env;
    

    const content = { name, contact, subject, message };

    setIsSendingEmail(true);

    sendEmail(service, template, content, apiKey)
      .then(() => {
        setQuestion(Questions.THANKS);
      })
      .catch((err) => {
        console.log(err);
        setQuestion(Questions.ERROR);
      })
      .finally(() => {
        setIsSendingEmail(false);
      });
  }

  return (
    <div className="contact">
      <Header/>

      <section className={`color-${question}`}>
        {question === Questions.INITIAL && (
          <Question>
            <p>First off all</p>
            <p>
              Thank you for recognizing my work, I did my best in this project
              to be as original as possible, the details, the words,
              everything was thought carefully to be as beautiful as possible.
            </p>
            <p>I could write more here, but I don&rsquo;t know what to put, so...</p>
            <button className="go-to-the-real-contact-page" onClick={nextQuestion}>Take me to the real contact page</button>
          </Question>
        )}

        {question === Questions.NAME && (
          <Question value={name} setvalue={setName} handlekeydown={handleKeyDown}>
            <p>What is your name?</p>
          </Question>
        )}

        {question === Questions.CONTACT && (
          <>
            <Question value={contact} setvalue={setContact} handlekeydown={handleKeyDown}>
              <p>How can I contact you?</p>
            </Question>
            <CaretLeft
              size="3rem"
              className="previous"
              onClick={previousQuestion}
              style={{ cursor: "pointer" }}
            />
          </>
        )}

        {question === Questions.SUBJECT && (
          <>
            <Question value={subject} setvalue={setSubject} handlekeydown={handleKeyDown}>
              <p>Why are you coming?</p>
            </Question>
            <CaretLeft
              size="3rem"
              className="previous"
              onClick={previousQuestion}
              style={{ cursor: "pointer" }}
            />
          </>
        )}

        {question === Questions.MESSAGE && (
          <>
            <Question textarea={true} value={message} setvalue={setMessage} handlekeydown={handleKeyDown}>
              <p>What do you want?</p>
            </Question>
            <CaretLeft
              size="3rem"
              className="previous"
              onClick={previousQuestion}
              style={{ cursor: "pointer" }}
            />
            {isSendingEmail ? (
              <CircleNotch size="3rem" className="next loading"/>
            ) : (
              <CaretDoubleRight
                className="next"
                size="3rem"
                onClick={handleSendEmail}
                style={{
                  opacity: message ? 1 : 0.25,
                  cursor: message ? "pointer" : "not-allowed",
                }}
              />
            )}
          </>
        )}

        {question === Questions.THANKS && (
          <Question>
            <p>Thank you for getting in touch with me!</p>
            <p>I really appreciate that you&rsquo;re interested in my work.</p>
            <p>:D</p>
            <p className="go-back">Press &rsquo;enter&rsquo; to go back</p>
          </Question>
        )}

        {question === Questions.ERROR && (
          <Question>
            <p>Sorry! An error occurred!</p>
            <p>You can try send again this form, but if it doesn&rsquo;t work,
              you can always <a href="mailto:felipepitolpuhl@gmail.com">email me</a>.</p>
            <p className="go-back">Press &rsquo;enter&rsquo; to go back</p>
          </Question>
        )}

        <BlobAnimation/>
      </section>
    </div>
  );
}
