import React from "react"
import Bahey from "../../img/Bahey.webp"
import Children from "../../img/Children's Cancer Hospital or Hospital 57357.webp"
import National from "../../img/National-Cancer-Institute.webp"
// import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
export default function Treatment() {
  return (
    <>
      <div className="treat-all mt-5">
        <div className="container ">
          <div className="row ">
            <div>
              <h2 className="text-light mt-5 text-center">
                The most famous breast cancer treatment hospitals in Egypt
              </h2>
              <div className="div-12"></div>
              <div className="div-22"></div>
              <div className="div-3"></div>
            </div>
            <div className="mt-2 ">
              <div className="row m-0 tret1">
                <div className="tret-img overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInLeft animate__animated">
                  <img
                    src={Bahey}
                    className="w-100 img-fluid"
                    alt="Bahey.jpg"
                  />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInDown animate__animated">
                    <h3>Bahia Zayed Hospital</h3>
                    <p>
                      
                      is an integrated medical institution for early detection
                      of breast cancer, its treatment, and providing the latest
                      methods of prevention in addition to psychological support
                      for women during their treatment stages. The Zayed
                      Hospital project for early detection of breast cancer aims
                      to serve more than half a million women annually.
                    </p>
                  </div>
                  <div className="ul-all">
                    <ul className="mt-4 d-flex social-media social-media--no-radius list--unstyled overflow-hidden">
                      <li className="social-media__item animate__fadeInRight animate__animated animate__faster">
                        <a
                          href="https://www.facebook.com/BaheyaFoundation"
                          target="_blank"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على Facebook" rel="noreferrer"
                        >
                          <BiLogoFacebook />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__fast social-media__item  social-media__item--twitter">
                        <a
                          href="https://twitter.com/BaheyaHospital"
                          target="_blank"
                          className="social-media__link fs-5"
                          aria-label="تابعنا على Twitter" rel="noreferrer"
                        >
                          <BsTwitter />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slow  social-media__item social-media__item--instagram">
                        <a
                          href="https://www.instagram.com/baheyafoundation/"
                          target="_blank"
                          className="social-media__link"
                          aria-label="تابعنا على Instagram" rel="noreferrer"
                        >
                          <BsInstagram />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slower   social-media__item social-media__item--youtube">
                        <a
                          href="https://www.youtube.com/channel/UCqmBdlOIbImeCvgDlzK3n_Q"
                          target="_blank"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على YouTube" rel="noreferrer"
                        >
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li className=" animate__fast animate__fadeInRight animate__animated animate__slow animate__delay-1s social-media__item social-media__item--linkedin">
                        <a
                          href="https://www.linkedin.com/company/baheya-foundation"
                          target="_blank"
                          className="social-media__link"
                          aria-label="تابعنا على linked in" rel="noreferrer"
                        >
                          <BsLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 my-2">
              <div className="row m-0 tret2 ">
                <div className="col-sx-6 col-sm-6 col-md-12 col-lg-6 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInDown animate__animated">
                    <h3>National Cancer Institute</h3>
                    <p>
                      {" "}
                      is an integrated medical institution for early detection
                      of breast cancer, its treatment, and providing the latest
                      methods of prevention in addition to psychological support
                      for women during their treatment stages. The Zayed
                      Hospital project for early detection of breast cancer aims
                      to serve more than half a million women annually.
                    </p>
                  </div>
                  <div>
                    <ul className="mt-4 d-flex social-media social-media--no-radius list--unstyled overflow-hidden">
                      <li className="social-media__item animate__fast animate__fadeInLeft animate__animated animate__slow animate__delay-1s ">
                        <a
                          href="https://www.facebook.com/cancer.gov"
                          target="_blank"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على Facebook" rel="noreferrer"
                        >
                          <BiLogoFacebook />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__slower social-media__item  social-media__item--twitter">
                        <a
                          href="https://twitter.com/thenci"
                          target="_blank"
                          className="social-media__link fs-5"
                          aria-label="تابعنا على Twitter" rel="noreferrer"
                        >
                          <BsTwitter />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__slow  social-media__item social-media__item--instagram">
                        <a
                          href="https://www.instagram.com/nationalcancerinstitute/"
                          target="_blank"
                          className="social-media__link"
                          aria-label="تابعنا على Instagram" rel="noreferrer"
                        >
                          <BsInstagram />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__fast social-media__item social-media__item--youtube">
                        <a
                          href="https://www.youtube.com/NCIgov"
                          target="_blank"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على YouTube" rel="noreferrer"
                        >
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__faster social-media__item social-media__item--linkedin">
                        <a
                          href="https://www.linkedin.com/company/nationalcancerinstitute/"
                          target="_blank"
                          className="social-media__link"
                          aria-label="تابعنا على linked in" rel="noreferrer"
                        >
                          <BsLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tret-img overflow-hidden col-sx-6 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated">
                  <img
                    src={Children}
                    className="w-100"
                    height={"331.43px"}
                    alt="Children's Cancer Hospital or Hospital 57357.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="row m-0 tret3">
                <div className="tret-img overflow-hidden  col-sx-6 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInLeft animate__animated">
                  <img
                    src={National}
                    className="w-100"
                    alt="National Cancer Institute.jpg"
                  />
                </div>
                <div className="col-sx-6 col-sm-6 col-md-12 col-lg-5 col-xl-6">
                  <div className="tret-text p-1 animate__animated animate__fadeInDown">
                    <h3>Children's Cancer Hospital or Hospital 57357</h3>
                    <p>
                      {" "}
                      is one of the largest children's hospitals in the world,
                      located in Cairo, Egypt, and specializes in treating
                      children's cancers. This hospital is distinguished by the
                      fact that it was built through donations, with a large
                      propaganda campaign that accompanied its construction.
                    </p>
                  </div>
                  <div>
                    <ul className="mt-4 d-flex social-media social-media--no-radius list--unstyled overflow-hidden">
                      <li className="animate__fadeInRight animate__animated animate__faster social-media__item">
                        <a
                          href="https://www.facebook.com/57357Egypt"
                          target="_blank"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على Facebook" rel="noreferrer"
                        >
                          <BiLogoFacebook />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__fast  social-media__item  social-media__item--twitter">
                        <a
                          href="https://twitter.com/Hospital57357"
                          target="_blank"
                          className="social-media__link fs-5"
                          aria-label="تابعنا على Twitter" rel="noreferrer"
                        >
                          <BsTwitter />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slow  social-media__item social-media__item--instagram">
                        <a
                          href="https://www.instagram.com/57357hospital"
                          target="_blank"
                          className="social-media__link"
                          aria-label="تابعنا على Instagram" rel="noreferrer"
                        >
                          <BsInstagram />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slower social-media__item social-media__item--youtube">
                        <a
                          href="https://www.youtube.com/channel/UCNhkYdkQYbwYHffTqU2ypCw"
                          target="_blank"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على YouTube" rel="noreferrer"
                        >
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li className="animate__fast animate__fadeInRight animate__animated animate__slow animate__delay-1s social-media__item social-media__item--linkedin">
                        <a
                          href="https://www.linkedin.com/in/hospital-57357-a0009a34/?locale=en_US"
                          target="_blank"
                          className="social-media__link"
                          aria-label="تابعنا على linked in" rel="noreferrer"
                        >
                          <BsLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
