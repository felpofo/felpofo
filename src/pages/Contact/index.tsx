import React, { useState, createRef } from "react";
import { send as sendEmail } from "@emailjs/browser";
import { CaretDoubleRight, CaretLeft, CaretRight, CircleNotch, House } from "phosphor-react";
import { Link } from "react-router-dom";
import cx from "classnames";

import { Header } from "../../components/Header";

import "./styles.scss";

export function Contact() {
  const blobRef = createRef<SVGSVGElement>();

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
      })
      .catch(() => {
        setQuestion(9);
      })
      .finally(() => {
        setIsSendingEmail(false);
      });
  }

  return (
    <div className="contact">
      <Header pagetitle="Contact">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Header>

      <section className={`color-${question}`}>
        {question === 1 && (
          <>
            <div className="question">
              <div className="texts">
                <p>What is your name?</p>
                <p>I really wanna know</p>
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
            {name &&
              contact &&
              subject &&
              message &&
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

        {question === 0 && ( // thanks screen
          <div className="thanks">
            <p>Thanks!</p>
          </div>
        )}

        {question === 9 && ( // error screen
          <div className="failed">
            <p>An error occurred. Maybe directly contact me can help.</p>
          </div>
        )}

        {question !== 1 && (
          <Link className="back-to-home" to="/">
            <House size="3rem" />
          </Link>
        )}

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className={cx("blob", `color${question}`)}
          ref={blobRef}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"></stop>
              <stop offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M451.77435,331.68776Q380.0333,413.37552,297.8522,408.1811Q215.67111,402.98668,163.20108,360.14446Q110.73105,317.30225,116.40549,253.17111Q122.07993,189.03996,169.7144,146.88551Q217.34887,104.73105,314.55328,76.47669Q411.75769,48.22232,467.63654,149.11116Q523.51539,250,451.77435,331.68776Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z"
            ></animate>
          </path>
        </svg>
      </section>
    </div>
  );
}
