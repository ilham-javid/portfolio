import React, { useState } from "react";
import "./Qualification.css";

function Qualification() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qf section" id="portfolio">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qf__container container">
        <div className="qf__tabs">
          <div
            className={
              toggle === 1
                ? "qf__button qf__active button--flex"
                : "qf__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qf__icon"></i> Education
          </div>

          <div
            className={
              toggle === 2
                ? "qf__button qf__active button--flex"
                : "qf__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qf__icon"></i> Experience
          </div>
        </div>

        <div className="qf__sections">
          <div
            className={
              toggle === 1 ? "qf__content qf__content-active" : "qf__content"
            }
          >
            <div className="qf__data">
              <div>
                <h3 className="qf__title">BICT (Hons) Software Technology</h3>
                <span className="qf__subtitle">
                  University Of Sri Jayewardenepura
                </span>
                <div className="qf__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2023
                </div>
              </div>
              <div>
                <span className="qf__rounder"></span>
                <span className="qf__line"></span>
              </div>
            </div>

            <div className="qf__data">
              <div></div>

              <div>
                <span className="qf__rounder"></span>
                <span className="qf__line"></span>
              </div>

              <div>
                <h3 className="qf__title">Diploma in English</h3>
                <span className="qf__subtitle">
                  Government Sath Sahana Foundation
                </span>
                <div className="qf__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>
            </div>

            <div className="qf__data">
              <div>
                <h3 className="qf__title">Diploma in IT</h3>
                <span className="qf__subtitle">British Business College</span>
                <div className="qf__calendar">
                  <i className="uil uil-calendar-alt"></i> 2011
                </div>
              </div>

              <div>
                <span className="qf__rounder"></span>
                <span className="qf__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2 ? "qf__content qf__content-active" : "qf__content"
            }
          >
            <div className="qf__data">
              <div>
                <h3 className="qf__title">Software Engineer Internship</h3>
                <span className="qf__subtitle">
                  Eyepax IT Consulting (Pvt) Ltd - Colombo 03
                </span>
                <div className="qf__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qf__rounder"></span>
                <span className="qf__line"></span>
              </div>
            </div>

            <div className="qf__data">
              <div></div>

              <div>
                <span className="qf__rounder"></span>
                <span className="qf__line"></span>
              </div>

              <div>
                <h3 className="qf__title">Customer Care Executive</h3>
                <span className="qf__subtitle">
                  Infotech Connect System - Badulla
                </span>
                <div className="qf__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
