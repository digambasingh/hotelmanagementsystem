import React, { useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setShowModal(true); // Show modal
        event.target.reset(); // Clear the form
      } else {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Success</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Your message has been sent successfully!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}

      <div className="container contact">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <form onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value="b9a8644d-628e-49d5-89dd-6d6b5d8c5ff1" />
              <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>

                <div className="form-group my-4">
                  <div className="row">
                    <div className="col-md-6 my-2">
                      <input type="text" name="firstName" className="form-control form-control-lg" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6 my-2">
                      <input type="text" name="lastName" className="form-control form-control-lg" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <div className="row">
                    <div className="col-md-6 my-2">
                      <input type="email" name="email" className="form-control form-control-lg" placeholder="Email Address" required />
                    </div>
                    <div className="col-md-6 my-2">
                      <input type="tel" name="phone" className="form-control form-control-lg" placeholder="Phone Number" required />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <div className="row">
                    <div className="col-12">
                      <textarea name="message" className="form-control" rows="5" placeholder="Your message" required></textarea>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="btn btn-outline-dark btn-lg" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
