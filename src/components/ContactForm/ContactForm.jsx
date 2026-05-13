import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  // Update state to include separate name fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(formData.firstName);
    //    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      {submitted && (
        <div className="success-message">
          <h3>Success!</h3>
          <p>Your message has been submitted, {submittedName}.</p>
          <button className="ok-btn" onClick={() => setSubmitted(false)}>
            OK
          </button>
        </div>
      )}
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-fields">
          <div className="form-group">
            <label>First Name</label>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <div>
              <textarea
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
