import React from "react";
import img1 from "../../img/symptoms-1.webp";
import img2 from "../../img/symptoms-2.webp";
import img3 from "../../img/symptoms-3.webp";
import img4 from "../../img/symptoms-4.webp";
import img5 from "../../img/symptoms-5.webp";
import img6 from "../../img/symptoms-6.webp";
import img7 from "../../img/symptoms-7.webp";
// import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Symptoms() {
  return (
    <>
      <div className="symptoms">
        <div className="containerr my-5 py-5 text-light">
          <div className="text-center">
            <h1>check out Symptoms and Diagnosis of breast Cancer</h1>
          </div>
          <div className="div-1"></div>
          <div className="div-2"></div>
          <div className="div-3"></div>
          <div className="row text-center m-0 pt-5 pb-5 overflow-hidden">
            <div className="col-md-2 symw m-auto d-flex justify-content-center align-items-center">
              <div className="mod  ">
                <Link
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <img
                    src={img1}
                    alt="symptoms-1"
                    className="animate__fadeInLeft animate__animated"
                  />
                </Link>
                <div className="symptoms-1-text">
                  <h6>Lump</h6>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header m-auto">
                        <img src={img3} alt="symptoms-3" />
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-danger">
                        <p>
                          Whenever you feel even the slightest visible change in
                          the size and shape of your breasts, you should
                          immediately consult a doctor. This change may result
                          in one breast being smaller or larger than the other.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 symw m-auto d-flex justify-content-center align-items-center">
              <div className="mod  ">
                <Link
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <img
                    src={img2}
                    alt="symptoms-1"
                    className="animate__fadeInLeft animate__animated animate__slow"
                  />
                </Link>
                <div className="symptoms-1-text">
                  <h6>breast size and shape</h6>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header m-auto">
                        <img src={img3} alt="symptoms-3" />
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-danger">
                        <p>
                          Whenever you feel even the slightest visible change in
                          the size and shape of your breasts, you should
                          immediately consult a doctor. This change may result
                          in one breast being smaller or larger than the other.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 symw m-auto d-flex justify-content-center align-items-center">
              <div className="mod  ">
                <Link
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <img
                    src={img3}
                    alt="symptoms-1"
                    className="animate__fadeInLeft animate__animated animate__slow"
                  />
                </Link>
                <div className="symptoms-1-text">
                  <h6>breast size and shape</h6>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal3"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header m-auto">
                        <img src={img3} alt="symptoms-3" />
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-danger">
                        <p>
                          Whenever you feel even the slightest visible change in
                          the size and shape of your breasts, you should
                          immediately consult a doctor. This change may result
                          in one breast being smaller or larger than the other.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 symw m-auto d-flex justify-content-center align-items-center">
              <div className="mod  ">
                <Link
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  <img
                    src={img4}
                    alt="symptoms-1"
                    className="animate__fadeInLeft animate__animated animate__slow"
                  />
                </Link>
                <div className="symptoms-1-text">
                  <h6>change in skin texture</h6>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal4"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header m-auto">
                        <img src={img4} alt="symptoms-4" />
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-danger">
                        <p>
                          Breast cancer causes swelling in the skin cells due to
                          which the texture of the skin changes. Due to this,
                          crust may form around the nipple or any part of the
                          breast may become very dry and thick
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 symw m-auto d-flex justify-content-center align-items-center">
              <div className="mod  ">
                <Link
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                >
                  <img
                    src={img5}
                    alt="symptoms-1"
                    className="animate__fadeInLeft animate__animated animate__slow"
                  />
                </Link>
                <div className="symptoms-1-text">
                  <h6>changes in color</h6>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal5"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header m-auto">
                        <img src={img5} alt="symptoms-5" />
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-danger">
                        <p>
                          Due to breast cancer, there may be a change in the
                          color of the skin or it may turn blue. Due to this,
                          the skin may become red, purple or even blue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 symw m-auto d-flex justify-content-center align-items-center">
              <div className="mod  ">
                <Link
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                >
                  <img
                    src={img6}
                    alt="symptoms-1"
                    className="animate__fadeInLeft animate__animated animate__slow"
                  />
                </Link>
                <div className="symptoms-1-text">
                  <h6>changes in nipples</h6>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal6"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header m-auto">
                        <img src={img5} alt="symptoms-5" />
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-danger">
                        <p>
                          Due to breast cancer, there may be a change in the
                          color of the skin or it may turn blue. Due to this,
                          the skin may become red, purple or even blue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 symw m-auto ">
              <div className="mod  ">
                <Link
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal7"
                >
                  <img
                    src={img7}
                    alt="symptoms-1"
                    className="animate__fadeInLeft animate__animated animate__slow"
                  />
                </Link>
                <div className="symptoms-1-text">
                  <h6>discharge from nipple</h6>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal7"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header m-auto">
                        <img src={img7} alt="symptoms-7" />
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-danger">
                        <p>
                          It is normal to have a milky discharge from the nipple
                          when a woman is breastfeeding. But if at any time a
                          woman notices any kind of discharge other than this,
                          which may be normal liquid or milky to yellow, green
                          or red in color, then it would be better that she
                          should contact the doctor without wasting any more
                          time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="sym p-3 animate__fadeInLeft animate__animated">
                <h3>Symptoms of breast cancer</h3>
                <p>
                  Tumor/lump/flax in the breast or underarm. Changing the shape
                  or size of the breasts. Nipple shape or color change: crusts,
                  limping, bounce, excretion. Altering in the form of breast
                  skin: protrusion, peel, orange peel. Not ordinary pains.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="sym p-3 animate__jackInTheBox animate__animated">
                <h3>Risk factors</h3>
                <p>
                  Aging. Genetic factors. Sick history of (mother, sister, aunt,
                  and father). Personal history. Early puberty (13 years) and
                  late menopause (55 years). Exposure to radiation treatment (in
                  the case of illnesses such as lymphoma). Some merry breast
                  disease like LCIS or ADH.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="sym p-3 animate__fadeInRight animate__animated">
                <h3>Early detection of breast cancer</h3>
                <p>
                  Self-detection week through cycle. The rotational mammogram is
                  the most accurate. From the age of 40. From the age 35, if
                  there is a history of illness in the family, At any age if
                  there are symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
