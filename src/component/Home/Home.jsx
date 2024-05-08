import { Outlet } from 'react-router-dom'
import img1 from '../../img/symptoms-1.webp'
import img2 from '../../img/symptoms-2.webp'
import img3 from '../../img/symptoms-3.webp'
import img4 from '../../img/symptoms-4.webp'
import img5 from '../../img/symptoms-5.webp'
import img6 from '../../img/symptoms-6.webp'

import 'animate.css'
import { AiFillYoutube } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../App.css'
import Bahey from '../../img/Bahey.webp'
import Children from "../../img/Children's Cancer Hospital or Hospital 57357.webp"
import National from '../../img/National-Cancer-Institute.webp'
import chatboot from '../../img/chatboot.webp'
import home from '../../img/home-image-removebg-preview.png'
import img7 from '../../img/symptoms-7.webp'
import './Home.module.css'
// import { toast } from "react-toastify";
import { useEffect } from 'react'
export default function Home({ crrUser }) {
  // let Cart = useContext(CartContext);

  useEffect(() => {
    toast("I Can help you?", {
      position: "bottom-right",
      className: "foo-bar",
      theme: "colored",
      style: {
        width: 230,
        // border: `2px solid red`,
        bottom: "85px",
        right: "-25px",
      },
    });
    // تأخير الدالة حتى يتم الانتهاء من عملية التقديم
  }, []);
  const changeClass = (even) => {
    even.currentTarget.classList.remove("animate__infinite");
    // console.log("hell");
  };
  return (
    <>
      <Outlet />

      <div>
        {/* <!-- start home page  --> */}

        <div className="chatboot ">
          <img
            src={chatboot}
            alt="chatboot"
            className="chatboot-img  animate__bounce animate__slow animate__animated animate__infinite"
            onClick={(even) => changeClass(even)}
          />
          <div className="chatboott"></div>
        </div>

        <div className="home vh-100 mb-5">
          <div className="container vh-100 d-flex align-items-center justify-content-around">
            <div className="row m-0 d-flex align-items-center justify-content-around ">
              <div className="col-md-6 d-flex align-items-center justify-content-between mt-5">
                <div className="home-text text-home w-100">
                  <h1 className="animate__animated animate__bounceInDown">
                    Breast cancer
                  </h1>

                  <h2 className="animate__animated animate__bounceInLeft">
                    awareness month
                  </h2>
                  <p className="animate__animated animate__bounceInUp">
                    Breast cancer is a type of malignant tumor originating in
                    breast cells. It can manifest as abnormal cell growth within
                    the breast varying in severity.
                  </p>
                  <div className="btn-login">
                    <button
                      className="mt-3  home-button animate__animated animate__wobble"
                      // onClick={Cart}
                    >
                      <Link
                        to="/BreastCancerAwareness/Login"
                        className="text-light btn-login1"
                      >
                        Login
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="img-home w-100 animate__flipInY animate__animated animate__delay-1.5s">
                  <img
                    src={home}
                    className="w-100 wow flipInY"
                    alt="img in home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end home page  --> */}
      </div>
      {/* start Symptoms */}
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
      {/* <Symptoms /> */}
      {/* end Symptoms */}
      {/* Treatment */}
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
                      {" "}
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
                          rel="noreferrer"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على Facebook"
                        >
                          <BiLogoFacebook />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__fast social-media__item  social-media__item--twitter">
                        <a
                          href="https://twitter.com/BaheyaHospital"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link fs-5"
                          aria-label="تابعنا على Twitter"
                        >
                          <BsTwitter />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slow  social-media__item social-media__item--instagram">
                        <a
                          href="https://www.instagram.com/baheyafoundation/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link"
                          aria-label="تابعنا على Instagram"
                        >
                          <BsInstagram />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slower   social-media__item social-media__item--youtube">
                        <a
                          href="https://www.youtube.com/channel/UCqmBdlOIbImeCvgDlzK3n_Q"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على YouTube"
                        >
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li className=" animate__fast animate__fadeInRight animate__animated animate__slow animate__delay-1s social-media__item social-media__item--linkedin">
                        <a
                          href="https://www.linkedin.com/company/baheya-foundation"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link"
                          aria-label="تابعنا على linked in"
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
                          rel="noreferrer"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على Facebook"
                        >
                          <BiLogoFacebook />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__slower social-media__item  social-media__item--twitter">
                        <a
                          href="https://twitter.com/thenci"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link fs-5"
                          aria-label="تابعنا على Twitter"
                        >
                          <BsTwitter />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__slow  social-media__item social-media__item--instagram">
                        <a
                          href="https://www.instagram.com/nationalcancerinstitute/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link"
                          aria-label="تابعنا على Instagram"
                        >
                          <BsInstagram />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__fast social-media__item social-media__item--youtube">
                        <a
                          href="https://www.youtube.com/NCIgov"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على YouTube"
                        >
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li className="animate__fadeInLeft animate__animated animate__faster social-media__item social-media__item--linkedin">
                        <a
                          href="https://www.linkedin.com/company/nationalcancerinstitute/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link"
                          aria-label="تابعنا على linked in"
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
                          rel="noreferrer"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على Facebook"
                        >
                          <BiLogoFacebook />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__fast  social-media__item  social-media__item--twitter">
                        <a
                          href="https://twitter.com/Hospital57357"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link fs-5"
                          aria-label="تابعنا على Twitter"
                        >
                          <BsTwitter />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slow  social-media__item social-media__item--instagram">
                        <a
                          href="https://www.instagram.com/57357hospital"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link"
                          aria-label="تابعنا على Instagram"
                        >
                          <BsInstagram />
                        </a>
                      </li>
                      <li className="animate__fadeInRight animate__animated animate__slower social-media__item social-media__item--youtube">
                        <a
                          href="https://www.youtube.com/channel/UCNhkYdkQYbwYHffTqU2ypCw"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link fs-4"
                          aria-label="تابعنا على YouTube"
                        >
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li className="animate__fast animate__fadeInRight animate__animated animate__slow animate__delay-1s social-media__item social-media__item--linkedin">
                        <a
                          href="https://www.linkedin.com/in/hospital-57357-a0009a34/?locale=en_US"
                          target="_blank"
                          rel="noreferrer"
                          className="social-media__link"
                          aria-label="تابعنا على linked in"
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
      {/* Treatment */}
      {/* FAQs */}
      <div className="faqs my-5">
        <div className="container my-5">
          <div className="row">
            <div>
              <h2 className="mt-5 text-center">
                The most famous breast cancer treatment hospitals in Egypt
              </h2>
              <div className="div-123"></div>
              <div className="div-23"></div>
              <div className="div-33 mb-5"></div>
            </div>
            <div className="col-md-12">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item animate__animated animate__fadeInLeft">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What is breast cancer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Breast cancer is a type of cancer that develops in the
                      cells of the breasts. It can occur in both men and women,
                      but is much more common in women. Breast cancer can begin
                      in different parts of the breast, such as the ducts that
                      carry milk to the nipple or the cells that produce milk.
                      It is important to detect and treat breast cancer early,
                      as it can spread to other parts of the body if left
                      untreated. Treatment options for breast cancer may include
                      surgery, radiation therapy, chemotherapy, hormone therapy,
                      targeted therapy, or a combination of these.
                    </div>
                  </div>
                </div>
                <div className="accordion-item animate__animated animate__fadeInRight">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      What are the risk factors for breast cancer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      1. Gender: Being female is the most significant risk
                      factor for breast cancer. 2. Age: The risk of developing
                      breast cancer increases with age, with most cases
                      occurring in women over the age of 50. 3. Family history:
                      Having a close relative, such as a mother, sister, or
                      daughter, who has been diagnosed with breast cancer can
                      increase your risk. 4. Genetic mutations: Inherited
                      mutations in the BRCA1 and BRCA2 genes can significantly
                      increase the risk of developing breast cancer. 5. Personal
                      history: Women who have had breast cancer in one breast
                      are at an increased risk of developing cancer in the other
                      breast.
                    </div>
                  </div>
                </div>
                <div className="accordion-item animate__animated animate__fadeInLeft">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How is breast cancer diagnosed?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      1. Mammogram: A mammogram is an X-ray of the breast tissue
                      that can detect lumps or abnormalities that may be
                      indicative of breast cancer. 2. Breast ultrasound: An
                      ultrasound uses sound waves to create images of the breast
                      tissue and can help determine if a lump is solid or
                      fluid-filled. 3. Breast MRI: Magnetic resonance imaging
                      (MRI) uses magnetic fields and radio waves to create
                      detailed images of the breast tissue, which can help
                      detect abnormalities that may not be visible on a
                      mammogram or ultrasound. 4. Biopsy: A biopsy is the
                      definitive way to diagnose breast cancer. During a biopsy,
                      a small sample of tissue is removed from the suspicious
                      area in the breast and examined under a microscope to
                      determine if cancer cells are present. 5. Blood tests:
                      Blood tests may be done to check for certain markers that
                      can indicate the presence of breast cancer, such as levels
                      of certain proteins or tumor markers.
                    </div>
                  </div>
                </div>

                <div className="accordion-item animate__animated animate__fadeInRight">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThre"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What are the symptoms of breast cancer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThre"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Some common symptoms of breast cancer include: 1. A lump
                      or thickening in the breast or underarm area 2. Changes in
                      the size, shape, or appearance of the breast 3. Nipple
                      discharge or changes in the nipple, such as inversion or
                      retraction 4. Skin changes on the breast, such as redness,
                      dimpling, or puckering 5. Persistent breast pain or
                      tenderness 6. Swelling or a lump in the armpit 7. Changes
                      in the texture or color of the skin on the breast It is
                      important to note that not all breast lumps are cancerous,
                      and some breast cancers may not cause any symptoms at all.
                      It is recommended to perform regular breast self-exams and
                      to seek medical attention if you notice any changes or
                      abnormalities in your breasts.
                    </div>
                  </div>
                </div>
                <div className="accordion-item animate__animated animate__fadeInLeft">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThr"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      At what age should women start screening for breast
                      cancer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThr"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Women should start screening for breast cancer at age 40,
                      with annual mammograms recommended starting at age 45.
                      However, it is important for women to discuss their
                      individual risk factors and screening recommendations with
                      their healthcare provider to determine the best screening
                      plan for them.
                    </div>
                  </div>
                </div>
                <div className="accordion-item animate__animated animate__fadeInRight">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThrr"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How is breast cancer treated
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThrr"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Breast cancer can be treated in several ways, depending on
                      the type and stage of the cancer. Some common treatments
                      for breast cancer include: 1. Surgery: Surgery is often
                      the first step in treating breast cancer. The type of
                      surgery will depend on the size and location of the tumor.
                      Options may include lumpectomy (removal of the tumor and a
                      small amount of surrounding tissue) or mastectomy (removal
                      of the entire breast). 2. Radiation therapy: Radiation
                      therapy uses high-energy rays to kill cancer cells. It is
                      often used after surgery to destroy any remaining cancer
                      cells and reduce the risk of the cancer coming back. 3.
                      Chemotherapy: Chemotherapy uses drugs to kill cancer
                      cells. It is often used in combination with surgery and/or
                      radiation therapy to treat breast cancer. Chemotherapy may
                      be given before surgery to shrink the tumor, or after
                      surgery to kill any remaining cancer cells. 4. Hormone
                      therapy: Hormone therapy is used to treat breast cancers
                      that are hormone receptor-positive. These cancers rely on
                      hormones like estrogen to grow. Hormone therapy works by
                      blocking the effects of these hormones or lowering hormone
                      levels in the body. 5. Targeted therapy: Targeted therapy
                      is a type of treatment that targets specific genes,
                      proteins, or pathways that are involved in the growth and
                      spread of cancer cells. It is often used in combination
                      with other treatments for breast cancer.
                    </div>
                  </div>
                </div>
                <div className="accordion-item animate__animated animate__fadeInLeft">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThreee"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Can men get breast cancer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThreee"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, men can get breast cancer, although it is much less
                      common in men than in women. According to the American
                      Cancer Society, about 2,650 new cases of invasive breast
                      cancer will be diagnosed in men in the United States in
                      2021. Men should be aware of the signs and symptoms of
                      breast cancer and seek medical attention if they notice
                      any changes in their breast tissue.
                    </div>
                  </div>
                </div>
                <div className="accordion-item animate__animated animate__fadeInRight">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTh"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Is breast cancer hereditary?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTh"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Breast cancer can be hereditary in some cases. About 5-10%
                      of breast cancer cases are thought to be hereditary,
                      meaning they are caused by inherited gene mutations that
                      increase the risk of developing breast cancer. The most
                      well-known genes associated with hereditary breast cancer
                      are BRCA1 and BRCA2. If someone has a close family member
                      (such as a parent, sibling, or child) who has been
                      diagnosed with breast cancer, especially at a young age,
                      they may have an increased risk of developing the disease
                      themselves. It is important for individuals with a family
                      history of breast cancer to speak with a healthcare
                      provider about genetic testing and screening options.
                    </div>
                  </div>
                </div>
                <div className="accordion-item animate__animated animate__fadeInLeft">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What is the prognosis for breast cancer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      The prognosis for breast cancer depends on several
                      factors, including the stage of the cancer at diagnosis,
                      the type of breast cancer, the presence of hormone
                      receptors, and the overall health of the patient. In
                      general, the earlier the cancer is detected and treated,
                      the better the prognosis. For early-stage breast cancer,
                      the five-year survival rate is typically high, with many
                      patients living cancer-free for many years after
                      treatment. However, for advanced or metastatic breast
                      cancer, the prognosis is less favorable, and the five-year
                      survival rate is lower. It is important for patients to
                      work closely with their healthimport from 'react'; care
                      team to develop aimport from 'react'; personalized
                      treatment plan and to monitor their progress closely.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs */}
      {/*start cheek  */}
      <div>
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
                    className="select-image btn btn-primary w-75 my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
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
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="send">
              <button className="send-img btn btn-success my-4 mx-1 col-sx-6 col-sm-2 col-md-12 col-lg-2 col-xl-3">
                send image
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* forget pass */}

      {/* forget pass */}
    </>
  );
}
