import React from 'react'
import { GrSend } from "react-icons/gr";
import { FaSquarePhoneFlip } from "react-icons/fa6";


export default function Contact() {
  return (
    <div className="flex items-center justify-center">
      <div id="contact">
        <h2 className="sub-title text-center">Contact Me</h2>
        <div className="container">
          <div className="row">
            <div className="contact-left">
        
              <p className="flex gap-6 items-center">
                <span>
                  <GrSend size={20} color="#00FF89" />
                </span>
                <span>ndemaemmanuel82@gmail.com</span>
              </p>
              <p className="flex gap-6 items-center">
                <span>
                  <FaSquarePhoneFlip size={20} color="#00FF89" />
                </span>
                <span>+2349016249442</span>
              </p>    
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="contact-right">
              <form action="" method="post">
                <input type="text" name="name" placeholder="Your Name Here" />
                <input
                  type="email"
                  name="name"
                  placeholder="Enter Your Email Here"
                />
                <textarea
                  name="message"
                  id=""
                  rows={6}
                  placeholder="Your message here..."
                ></textarea>
                <button className="see subscription">
                  Subscribe to my Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
