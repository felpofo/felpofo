import React, { useState } from "react";
import { send as sendEmail } from "@emailjs/browser";
import { CaretDoubleRight, CaretLeft, CaretRight, CircleNotch, House } from "phosphor-react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";

import "./styles.scss";

export function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const [question, setQuestion] = useState(1);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const previousQuestion = () => setQuestion((value) => (value -= 1));
  const nextQuestion = () => setQuestion((value) => (value += 1));

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") nextQuestion();
  }

  function handleSendEmail() {
    setIsSendingEmail(true);

    const service = "service_w6ayj3i";
    const template = "template_wscx905";
    const apiKey = "tTfSOba7i6Lq8zrQ2";

    const content = { name, contact, subject, message };

    sendEmail(service, template, content, apiKey)
      .then(() => {
        setQuestion(0);
        setEmailSent(true);
      })
      .catch(() => {
        setQuestion(0);
        setError(true);
      })
      .finally(() => {
        setIsSendingEmail(false);
      });
  }

  return (
    <div className="contact">
      <Header pageTitle="Contact">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Header>

      <section>
        {question === 1 && (
          <>
            <div className="question">
              <div className="texts">
                <p>What is your name?</p>
                <p>i really wanna know</p>
              </div>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            {(name || contact || subject || message) && (
              <CaretRight
                size="3rem"
                className="next"
                onClick={nextQuestion}
                style={{ cursor: "pointer" }}
              />
            )}
          </>
        )}

        {question === 2 && (
          <>
            <div className="question">
              <div className="texts">
                <p>How can i contact you?</p>
                <p>your email or link wharever</p>
              </div>
              <div>
                <input
                  type="text"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            <CaretLeft
              size="3rem"
              className="previous"
              onClick={previousQuestion}
              style={{ cursor: "pointer" }}
            />
            {(contact || subject || message) && (
              <CaretRight
                size="3rem"
                className="next"
                onClick={nextQuestion}
                style={{ cursor: "pointer" }}
              />
            )}
          </>
        )}

        {question === 3 && (
          <>
            <div className="question">
              <div className="texts">
                <p>Why are you coming?</p>
                <p>email subject</p>
              </div>
              <div>
                <input
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            <CaretLeft
              size="3rem"
              className="previous"
              onClick={previousQuestion}
              style={{ cursor: "pointer" }}
            />
            {(subject || message) && (
              <CaretRight
                size="3rem"
                className="next"
                onClick={nextQuestion}
                style={{ cursor: "pointer" }}
              />
            )}
          </>
        )}

        {question === 4 && (
          <>
            <div className="question">
              <div className="texts">
                <p>What do you wanna tell to me?</p>
                <p>email message</p>
              </div>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <CaretLeft
              size="3rem"
              className="previous"
              onClick={previousQuestion}
              style={{ cursor: "pointer" }}
            />
            {(name && contact && subject && message) &&
              (isSendingEmail ? (
                <CircleNotch size="3rem" className="next loading" />
              ) : (
                <CaretDoubleRight
                  size="3rem"
                  className="next"
                  onClick={handleSendEmail}
                  style={{ cursor: "pointer" }}
                />
              ))}
          </>
        )}

        {emailSent && (
          <div className="thanks">
            <p>Thanks!</p>
            <Link to="/">
              <House size="2rem" />
            </Link>
          </div>
        )}

        {error && (
          <div className="failed">
            <p>An error occurred. Try again later or contact me directly.</p>
          </div>
        )}
      </section>
    </div>
  );
}
