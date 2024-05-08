import React from "react";
import img from "../../img/99-removebg-preview.png";
export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6">
              <div className="content-img">
                <img src={img} className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <form className="contact-all my-5 p-4">
                <div className="mb-3">
                  {/* <label htmlFor="exampleInputEmail1" className="form-label">
                    your Name
                  </label> */}
                  <input
                    type="text"
                    className="form-control border-bottom"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="your Name"
                  />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="exampleInputPassword1" className="form-label">
                    Email
                  </label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Email@example.com"
                  />
                  {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="exampleInputPassword3" className="form-label">
                    Phone
                  </label> */}
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword3"
                    placeholder="Phone"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-25">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
