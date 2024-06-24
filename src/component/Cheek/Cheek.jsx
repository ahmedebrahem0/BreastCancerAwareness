import React from "react";
import "../../index";
export default function Cheek() {
  const handleClick = () => {
    window.open("https://5a8cb65cb7680e8cd3.gradio.live/", "_blank");
  };
  return (
    <>
      <div className="cheek container my-5" id="Contact">
        <div className="row cheek-all">
          <div className="col-md-12 my-3">
            <div className="mb-3 my-5 wow bounceIn">
              <h2 className="animate__zoomIn animate__animated animate__delay-1s">
                Fill up this form to get a call back from our Doctor
              </h2>
            </div>
            <div className="mb-3 ">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label animate__fadeInLeft animate__animated animate__delay-1s"
              >
                {/* <i className="fa-solid fa-phone text-danger mx-1" /> */}
                Name
              </label>
              <input
                type="text"
                className="form-control  col-sx-6 col-sm-6 col-md-6"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text" />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label mx-2  animate__rotateInDownLeft animate__animated animate__delay-1s"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control col-sx-6 col-sm-6 col-md-6"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text" />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail3"
                className="form-label mx-2 animate__rotateInDownLeft animate__animated animate__delay-1s"
              >
                Phone
              </label>
              <input
                type="text"
                className="form-control col-sx-6 col-sm-6 col-md-6 col-lg-2 col-xl-2"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text" />
            </div>
            <div className="gender col-sx-12 col-sm-12 col-md-12 col-lg-2 col-xl-6 d-flex justify-content-between align-items-center bg-body-tertiary my-2">
              <h4>Gender :</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="goo"
                />
                <label
                  className="form-check-label animate__fadeInLeft animate__animated animate__delay-1s"
                  htmlFor="goo"
                >
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label
                  className="form-check-label animate__fadeInLeft animate__animated animate__delay-1s"
                  htmlFor="flexRadioDefault2"
                >
                  Female
                </label>
              </div>
            </div>
            <div className="gender col-sx-12 col-sm-12 col-md-12 col-lg-2 col-xl-6 d-flex justify-content-between align-items-center my-2">
              <h4>lactaing :</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefaul"
                  id="flexRadio"
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.1s"
                  htmlFor="flexRadio"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefaul"
                  id="flexRadioDef"
                  defaultChecked
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.1s"
                  htmlFor="flexRadioDef"
                >
                  No
                </label>
              </div>
            </div>
            <div className="gender col-sx-12 col-sm-12 col-md-12 col-lg-2 col-xl-6 d-flex justify-content-between align-items-center bg-body-tertiary my-2">
              <h4>contraception :</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefau"
                  id="flexRad"
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.2s"
                  htmlFor="flexRad"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefau"
                  id="flexR"
                  defaultChecked
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.2s"
                  htmlFor="flexR"
                >
                  No
                </label>
              </div>
            </div>
            <div className="gender genderr col-sx-6 col-sm-12 col-md-12 col-lg-2 col-xl-6 d-flex justify-content-between align-items-center my-2">
              <h4>Marital Status :</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDef"
                  id="flexRadioDefas"
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.3s"
                  htmlFor="flexRadioDefas"
                >
                  Married
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDef"
                  id="flexRadioDoc"
                  defaultChecked
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.3s"
                  htmlFor="flexRadioDoc"
                >
                  Single
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDef"
                  id="flexRadioDuo"
                  defaultChecked
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.3s"
                  htmlFor="flexRadioDuo"
                >
                  Divorced
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDef"
                  id="flexDoo"
                  defaultChecked
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.3s"
                  htmlFor="flexDoo"
                >
                  Widow
                </label>
              </div>
            </div>
            <div className="gender col-sx-12 col-sm-12 col-md-12 col-lg-2 col-xl-6 d-flex justify-content-between align-items-center bg-body-tertiary my-2">
              <h6>Menstural History</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDe"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.5s"
                  htmlFor="flexRadioDefault1"
                >
                  Regular
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDe"
                  id="flexRadioDefall"
                  defaultChecked
                />
                <label
                  className="form-check-label  animate__fadeInLeft animate__animated animate__delay-1.5s"
                  htmlFor="flexRadioDefall"
                >
                  notRegular
                </label>
              </div>
            </div>
            <div className="textarea my-4 col-sx-12 col-sm-12 col-md-12 col-lg-2 col-xl-6">
              <h4>Special Habits</h4>
              <div className="form-floating">
                <textarea
                  className="form-control "
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea">Comments</label>
              </div>
            </div>
          </div>
          <div className="row img-area2 bg-light d-flex justify-content-center align-items-center rounded-3 p-4 mx-4 select-img">
            <div className="col-md-12 w-100">
              <div className="img-area light bg-body-secondary rounded-3 d-flex justify-content-center align-items-center flex-column">
                <input type="file" id="file" accept="image/*" hidden />
                <i className="fa-solid fa-cloud-arrow-up text-dark fs-1 text my-3 unload" />
                <h4 className="uplod">Upload image</h4>
                <button
                  type="button"
                  onClick={handleClick}
                  className="select-image btn btn-primary w-75 my-3"
                  // data-bs-toggle="modal"
                  // data-bs-target="#exampleModal"
                >
                  Select image
                </button>

                {/* <!-- Modal  */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  {/* <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Result from Our Doctor
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Benign the cells are not yet cancerout, but they have
                        the potential to become malignant consult the doctor
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="send">
            {/* <button
              onClick={handleClick}
              className="send-img btn btn-success my-4 mx-1 col-sx-6 col-sm-2 col-md-12 col-lg-2 col-xl-3"
            >
              send image
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
