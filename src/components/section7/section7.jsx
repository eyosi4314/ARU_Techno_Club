import React, { useState } from "react";
import "./Section7.css";
import webDev from "../../assets/images/web_development.jpg";
import { auth, db } from "../../utility/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function section7() {
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!fullName.trim() || !email.trim() || !password) {
      setError("Please provide your full name, email and a password.");
      return;
    }

    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      // Set display name
      await updateProfile(user, { displayName: fullName });

      // Save additional profile info to Firestore
      await db.collection("users").doc(user.uid).set({
        fullName,
        department,
        batch,
        phone,
        interest,
        message,
        email,
        createdAt: new Date().toISOString(),
      });

      setSuccess("Registration successful — welcome to ARU Techno Club!");
      // clear form
      setFullName("");
      setDepartment("");
      setBatch("");
      setEmail("");
      setPhone("");
      setInterest("");
      setMessage("");
      setPassword("");
    } catch (err) {
      console.error(err);
      // Provide friendly error message
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Address</h3>
                <p>Ethiopia , Asela, Arsi University Main Campus </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <a href="tel://1234567920">+ 25109090909</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a href="mailto:info@yoursite.com">
                    ARU_techno_Club@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Website</h3>
                <p>
                  <a href="#">ARU_Techno_Club.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last registration-card">
              <div className="registration-header mb-3">
                <h2>Join ARU Techno Club</h2>
                <p className="muted">
                  Register to participate in activities, workshops and receive
                  updates.
                </p>
              </div>

              {/* Feedback messages */}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Department"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Batch/year"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      className="form-control"
                      placeholder="Phone (optional)"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Area of interest</option>
                      <option>Web Development</option>
                      <option>AI & Machine Learning</option>
                      <option>Cybersecurity</option>
                      <option>Competitive Programming</option>
                      <option>Design</option>
                      <option>Data Science</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    cols={30}
                    rows={4}
                    className="form-control"
                    placeholder="Tell us a bit about yourself (optional)"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Password (min 6 chars)"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 d-flex align-items-end">
                    <small className="muted">
                      We'll use this email to sign in to club updates.
                    </small>
                  </div>
                </div>

                <div className="form-row align-items-center">
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-primary btn-register"
                      disabled={loading}
                    >
                      {loading ? "Registering..." : "Register Now"}
                    </button>
                  </div>
                  <div className="form-group mb-0 ml-3 muted small">
                    By registering you agree to receive updates. Unsubscribe
                    anytime.
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="registration-visual w-100 d-flex align-items-stretch">
                <div
                  className="registration-image"
                  style={{
                    backgroundImage: `url(${webDev})`,
                  }}
                >
                  <div className="img-overlay">
                    <h3>Web Development</h3>
                    <p className="small muted">Explore projects & workshops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default section7;
