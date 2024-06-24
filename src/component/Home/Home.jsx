import { Outlet } from 'react-router-dom'
import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import img1 from '../../img/symptoms-1.webp'
import img2 from '../../img/symptoms-2.webp'
import img3 from '../../img/symptoms-3.webp'
import img4 from '../../img/symptoms-4.webp'
import img5 from '../../img/symptoms-5.webp'
import img6 from '../../img/symptoms-6.webp'
import robot from '../../img/robot-assistant.png'
import self1 from "../../img/self-1.jpg";
import self3 from "../../img/self-3.png";
import self5 from "../../img/self-5.jpg";
import self6 from "../../img/self-6.png";
import self7 from "../../img/self-7.png";
import self8 from "../../img/self-8.png";
import self9 from "../../img/self-9.png";
import Chart from "chart.js/auto";

import 'animate.css'
import { AiFillYoutube } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsArrowUpCircleFill,
} from "react-icons/bs";
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
import { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink} from "react-router-dom";
export default function Home({ crrUser }) {
  // const ScrollToTopButton = () => {
  //   const scrollToTop = () => {
  //     scroll.scrollToTop();
  //   }
  // };
  // let Cart = useContext(CartContext);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");
      const barColors = [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ];

      chartInstance.current = new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: [
            "Netherlands: 99.0",
            "Cyprus 104.5",
            "New Zealand: 92.4",
            "Australia: 94.0",
            "Germany: 91.6",
            "Germany: 91.6",
            "France 105.4",
            "United Kingdom: 94.2",
            "Ireland: 92.0",
            "Belgium: 101.1",
          ],
          datasets: [
            {
              label: "Data",
              data: [12, 18, 6, 7, 4, 2, 19, 8, 5, 15],
              backgroundColor: barColors,
            },
          ],
        },
      });

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);


  const handleCloseChatbox = () => {
    setIsChatVisible(false);
  };

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
  };

  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  const [message, setMessage] = useState(""); // حالة لإدارة قيمة الحقل النصي
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const [messages, setMessages] = useState([]); // حالة لإدارة الرسائل
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: "treatment", type: "outgoing" }]);
      setMessage("");

      // لإضافة رسالة واردة بشكل تلقائي (يمكنك تعديل هذا الجزء حسب الحاجة)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `1. Surgery
Purpose: To remove the tumor and some surrounding healthy tissue.
Types:
Curative Surgery: Removes the entire tumor when localized.
Debulking Surgery: Removes part of the tumor when complete removal is not possible.
Palliative Surgery: Relieves symptoms and improves quality of life.
Reconstructive Surgery: Restores appearance or function after primary surgery.
2. Radiation Therapy
Purpose: Uses high doses of radiation to kill cancer cells or shrink tumors.
Types:
External Beam Radiation: Delivered from outside the body.
Internal Radiation (Brachytherapy): Places radioactive material inside the body near cancer cells.
Systemic Radiation: Uses radioactive substances that travel in the blood to target cancer cells.
3. Chemotherapy
Purpose: Uses drugs to kill rapidly dividing cancer cells.
Methods:
Intravenous (IV): Delivered through a vein.
Oral: Taken by mouth.
Intramuscular or Subcutaneous: Injected into a muscle or under the skin.
Intrathecal: Delivered into the cerebrospinal fluid.
4. Immunotherapy
Purpose: Boosts the body’s immune system to fight cancer.
Types:
Checkpoint Inhibitors: Help the immune system recognize and attack cancer cells.
CAR T-cell Therapy: Modifies T-cells to attack cancer cells.
Cancer Vaccines: Stimulate the immune system to attack cancer cells.
5. Targeted Therapy
Purpose: Uses drugs to target specific molecules involved in cancer growth and spread.
Types:
Monoclonal Antibodies: Bind to specific targets on cancer cells.
Small Molecule Inhibitors: Interfere with specific pathways or proteins involved in cancer growth.
          `, type: "incoming" },
        ]);
      }, 1000);
    }
  };

  const [datachat, SetDatachat] = useState(false);
  const chatbotData = () => {
    SetDatachat(!datachat);
  };

  // const [Treatment, SetTreatment] = useState(false);
  //spinner
  const [isLoading, setIsLoading] = useState(false);
  const handleTreatment = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Treatment information...", type: "outgoing" },
    ]);

    setIsLoading(true); // عرض الـ spinner

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `1. Surgery
Purpose: To remove the tumor and some surrounding healthy tissue.
Types:
Curative Surgery: Removes the entire tumor when localized.
Debulking Surgery: Removes part of the tumor when complete removal is not possible.
Palliative Surgery: Relieves symptoms and improves quality of life.
Reconstructive Surgery: Restores appearance or function after primary surgery.
2. Radiation Therapy
Purpose: Uses high doses of radiation to kill cancer cells or shrink tumors.
Types:
External Beam Radiation: Delivered from outside the body.
Internal Radiation (Brachytherapy): Places radioactive material inside the body near cancer cells.
Systemic Radiation: Uses radioactive substances that travel in the blood to target cancer cells.
3. Chemotherapy
Purpose: Uses drugs to kill rapidly dividing cancer cells.
Methods:
Intravenous (IV): Delivered through a vein.
Oral: Taken by mouth.
Intramuscular or Subcutaneous: Injected into a muscle or under the skin.
Intrathecal: Delivered into the cerebrospinal fluid.
4. Immunotherapy
Purpose: Boosts the body’s immune system to fight cancer.
Types:
Checkpoint Inhibitors: Help the immune system recognize and attack cancer cells.
CAR T-cell Therapy: Modifies T-cells to attack cancer cells.
Cancer Vaccines: Stimulate the immune system to attack cancer cells.
5. Targeted Therapy
Purpose: Uses drugs to target specific molecules involved in cancer growth and spread.
Types:
Monoclonal Antibodies: Bind to specific targets on cancer cells.
Small Molecule Inhibitors: Interfere with specific pathways or proteins involved in cancer growth.
          `,
          type: "incoming",
        },
      ]);
      setIsLoading(false); // إخفاء الـ spinner
    }, 2000); // تأخير لمدة ثانيتين
  };
  const handleSymptoms = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Symptoms information...", type: "outgoing" },
    ]);

    setIsLoading(true); // عرض الـ spinner

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `1- Lump in the Breast or Armpit:

A new lump or mass in the breast or underarm area is one of the most common signs of breast cancer. These lumps are often hard and painless, but some can be tender or painful.
2- Changes in Breast Size or Shape:

Any unexplained change in the size, shape, or appearance of the breast may indicate breast cancer.
3- Skin Changes on the Breast:

Redness, dimpling, puckering, or thickening of the breast skin that resembles the texture of an orange peel.
4- Nipple Changes:

Inversion (turning inward) of the nipple, changes in the nipple shape, or discharge (other than breast milk) that is clear, bloody, or another unusual color.
5- Breast Pain:

While breast pain is more commonly associated with benign conditions, persistent pain or discomfort in one part of the breast can be a symptom of breast cancer.
6- Swelling:

Swelling of all or part of the breast, even if no lump is felt.
7- Lymph Node Changes:

Swelling or lumps in the lymph nodes under the arm or around the collarbone, which may indicate the spread of breast cancer.

        `,
          type: "incoming",
        },
      ]);
      setIsLoading(false); // إخفاء الـ spinner
    }, 2000); // تأخير لمدة ثانيتين
  };

  const handlehospitals = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "famous breast cancer hospitals in Egypt...", type: "outgoing" },
    ]);

    setIsLoading(true); // عرض الـ spinner

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `1- National Cancer Institute, Cairo University:

Located in Cairo, this institute is renowned for its comprehensive cancer care and research. It offers specialized treatment for breast cancer, including surgery, chemotherapy, radiation therapy, and supportive care.
2- Magrabi Hospitals & Centers:

Magrabi hospitals have a strong reputation for providing high-quality healthcare services across Egypt. They offer multidisciplinary breast cancer treatment programs that include surgery, chemotherapy, and radiation therapy.
3- Cairo Oncology Center:

Located in Cairo, this center specializes in oncology and provides advanced treatment options for breast cancer, including surgery, radiation therapy, and targeted therapies.
4- 57357 Hospital (Children's Cancer Hospital Egypt):

Although primarily focused on pediatric oncology, 57357 Hospital also offers specialized services for adult cancer patients, including breast cancer. It is known for its state-of-the-art facilities and comprehensive approach to cancer treatment.
5- Dar El Fouad Hospital:

Dar El Fouad Hospital in Cairo is equipped with modern technology and offers a range of oncology services, including breast cancer treatment. It has a dedicated team of oncologists and support staff.
          `,
          type: "incoming",
        },
      ]);
      setIsLoading(false); // إخفاء الـ spinner
    }, 2000); // تأخير لمدة ثانيتين
  };
  const handleCause = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Factors that cause breast cancer?...", type: "outgoing" },
    ]);

    setIsLoading(true); // عرض الـ spinner

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `1. Genetic Factors:
BRCA1 and BRCA2 Mutations: Inherited mutations in these genes increase the risk of breast and ovarian cancers.
Family History: Having a first-degree relative (parent, sibling, child) with breast cancer increases the risk.
2. Hormonal Factors:
Estrogen Exposure: Prolonged exposure to estrogen over a lifetime, such as early menstruation (before age 12), late menopause (after age 55), or hormone replacement therapy.
Reproductive Factors: Starting periods early or having a late first pregnancy or never having been pregnant.
3. Lifestyle Factors:
Alcohol Consumption: Regular and excessive alcohol consumption increases the risk.
Obesity: Being overweight or obese, especially after menopause.
Physical Inactivity: Lack of regular physical activity.
Diet: High-fat diets or diets lacking in fruits and vegetables may contribute.
4. Environmental Factors:
Exposure to Radiation: High doses of radiation, such as from previous radiation therapy to the chest.
Environmental Pollutants: Some chemicals in the environment may mimic estrogen or otherwise affect hormone function.
5. Other Risk Factors:
Age: Risk increases with age, with most breast cancers occurring in women over 50.
Personal History: Previous breast cancer or certain non-cancerous breast diseases.
Race and Ethnicity: White women have a slightly higher risk, but African American women are more likely to die from breast cancer at any age.
6. Unknown Factors:
Other Genetic Mutations: Besides BRCA1 and BRCA2, other genetic mutations and variations may contribute.
Immune System: Changes in the immune system may play a role.
Endocrine Disruptors: Chemicals that interfere with hormone function.
7. Risk Reduction Strategies:
While some risk factors cannot be changed, such as age and family history, adopting a healthy lifestyle can help reduce the risk of breast cancer:

Maintain a healthy weight.
Be physically active.
Limit alcohol consumption.
Avoid hormone replacement therapy, if possible.
Consider genetic counseling and testing if there is a strong family history.
Understanding these factors can help individuals make informed decisions about their health and potentially reduce their risk of developing breast cancer. Regular screening and early detection remain crucial for improving outcomes in breast cancer treatment.
          `,
          type: "incoming",
        },
      ]);
      setIsLoading(false); // إخفاء الـ spinner
    }, 2000); // تأخير لمدة ثانيتين
  };

  const handleFAQs = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "FAQs information...", type: "outgoing" },
    ]);

    setIsLoading(true); // عرض الـ spinner

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `1. What is breast cancer?
Breast cancer is a type of cancer that develops in the cells of the breast. It typically begins in the ducts or lobules and can spread to other parts of the body.

2. What are the risk factors for breast cancer?
Gender: Being female.
Age: Risk increases with age.
Family History: Having close relatives with breast cancer.
Genetic Mutations: BRCA1 and BRCA2 mutations.
Hormonal Factors: Early menstruation, late menopause, hormone replacement therapy.
Lifestyle Factors: Alcohol consumption, obesity, lack of physical activity.
3. What are the common symptoms of breast cancer?
A lump in the breast or underarm.
Changes in breast size, shape, or appearance.
Skin changes such as redness or dimpling.
Nipple changes or discharge.
Breast pain or discomfort.
4. How is breast cancer diagnosed?
Physical Examination: By a healthcare provider.
Imaging Tests: Mammograms, ultrasounds, MRIs.
Biopsy: Removing a sample of breast tissue for testing.
5. What are the stages of breast cancer?
Stage 0: Non-invasive, confined to the ducts.
Stage I: Small tumor, localized.
Stage II: Larger tumor or spread to a few nearby lymph nodes.
Stage III: More extensive lymph node involvement, larger tumor.
Stage IV: Metastatic, cancer has spread to other parts of the body.
        `,
          type: "incoming",
        },
      ]);
      setIsLoading(false); // إخفاء الـ spinner
    }, 2000); // تأخير لمدة ثانيتين
  };
  const DiseaseTest = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "FAQs information...", type: "outgoing" },
    ]);

    setIsLoading(true); // عرض الـ spinner

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `1. What is breast cancer?
Breast cancer is a type of cancer that develops in the cells of the breast. It typically begins in the ducts or lobules and can spread to other parts of the body.

2. What are the risk factors for breast cancer?
Gender: Being female.
Age: Risk increases with age.
Family History: Having close relatives with breast cancer.
Genetic Mutations: BRCA1 and BRCA2 mutations.
Hormonal Factors: Early menstruation, late menopause, hormone replacement therapy.
Lifestyle Factors: Alcohol consumption, obesity, lack of physical activity.
3. What are the common symptoms of breast cancer?
A lump in the breast or underarm.
Changes in breast size, shape, or appearance.
Skin changes such as redness or dimpling.
Nipple changes or discharge.
Breast pain or discomfort.
4. How is breast cancer diagnosed?
Physical Examination: By a healthcare provider.
Imaging Tests: Mammograms, ultrasounds, MRIs.
Biopsy: Removing a sample of breast tissue for testing.
5. What are the stages of breast cancer?
Stage 0: Non-invasive, confined to the ducts.
Stage I: Small tumor, localized.
Stage II: Larger tumor or spread to a few nearby lymph nodes.
Stage III: More extensive lymph node involvement, larger tumor.
Stage IV: Metastatic, cancer has spread to other parts of the body.
        `,
          type: "incoming",
        },
      ]);
      setIsLoading(false); // إخفاء الـ spinner
    }, 2000); // تأخير لمدة ثانيتين
  };


    const handleClick = () => {
      window.open("https://5a8cb65cb7680e8cd3.gradio.live/", "_blank");
    };
  console.log(message);
  return (
    <>
      <Outlet />

      <div>
        {/* <!-- start home page  --> */}
        {isChatVisible && (
          <div className="chatbot">
            <header id="UP-chatbot d-flex align-items-center justify-content-around">
              <h2>Chatbot</h2>
              <button
                onClick={handleCloseChatbox}
                className="close-btn material-symbols-outlined w-25 text-light bg-transparent"
              >
                close
              </button>
            </header>
            <ul className="chatbox">
              <li className="chat incoming">
                <span className="material-symbols-outlined">
                  <img src={robot} alt="robot" />
                </span>
                <p>
                  {/* Hi there 👋 */}
                  {/* <br /> */}I can help you today!
                </p>
              </li>

              <li className="chat incoming">
                <span className="material-symbols-outlined">
                  <img src={robot} alt="robot" />
                </span>
                <div className="div-chat p-2">
                  <button className="start-chatt" onClick={chatbotData}>
                    Start
                  </button>
                </div>
              </li>
              {datachat && (
                <div className="mt-3">
                  <li className="chat incoming">
                    <span className="material-symbols-outlined">
                      <img src={robot} alt="robot" />
                    </span>
                    <div className="alldata">
                      <ul className="p-0">
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chat"
                              onClick={handleTreatment}
                            >
                              Treatment
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chat"
                              onClick={handleSymptoms}
                            >
                              Symptoms
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chattt"
                              onClick={handlehospitals}
                            >
                              famous breast cancer hospitals
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chattt"
                              onClick={handleCause}
                            >
                              Factors that cause breast cancer?
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chattt"
                              onClick={handleClick}
                            >
                              Personal x-ray test?
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button className="start-chat" onClick={handleFAQs}>
                              FAQs
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              )}

              {messages.map((msg, index) => (
                <li key={index} className={`chat ${msg.type}`}>
                  <p>{msg.text}</p>
                </li>
              ))}
              {/* {datachat && (
                <div className="mt-3">
                  <li className="chat incoming">
                    <span className="material-symbols-outlined">
                      <img src={robot} alt="robot" />
                    </span>
                    <div className="alldata">
                      <ul className="p-0">
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chat"
                              onClick={handleTreatment}
                            >
                              Treatment
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chat"
                              onClick={handleSymptoms}
                            >
                              Symptoms
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chattt"
                              onClick={handlehospitals}
                            >
                              famous breast cancer hospitals
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button
                              className="start-chattt"
                              onClick={handleCause}
                            >
                              Factors that cause breast cancer?
                            </button>
                          </div>
                        </li>
                        <li className="chat incoming">
                          <div className="div-chatt p-2">
                            <button className="start-chat" onClick={handleFAQs}>
                              FAQs
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              )} */}
              {isLoading && (
                <li className="chat incoming">
                  <div className="dots-div">
                    <section className="dots-container">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </section>
                  </div>
                </li>
              )}
              {/* <div className="up-chat">
                <Link to="UP-chatbot" smooth={true} duration={500}>
                  <BsArrowUpCircleFill />
                </Link>
              </div> */}
            </ul>
            <div className="chat-input">
              <textarea
                placeholder="Enter a message..."
                spellCheck="false"
                required
                value={message} // ربط القيمة بحالة الحقل النصي
                onChange={handleInputChange} // تحديث الحالة عند تغيير القيمة
                // defaultValue={""}
              />
              <span
                id="send-btn"
                className="material-symbols-rounded"
                onClick={handleSendMessage}
              >
                <LuSendHorizonal color="#FD70C0" />
              </span>
            </div>
          </div>
        )}
        <div className="chatboot">
          <img
            id="img-chat"
            src={chatboot}
            alt="chatboot"
            className="chatboot-img animate__bounce animate__slow animate__animated animate__infinite"
            onClick={toggleChatVisibility}
            // onClick={(even) => changeClass(even)}
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
                      <NavLink
                        to="/BreastCancerAwareness/Login"
                        className="text-light btn-login1"
                      >
                        Login
                      </NavLink>
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
                        <img src={img1} alt="symptoms-3" />
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
                  <h6>Swelling in the armpits</h6>
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
                        <img src={img2} alt="symptoms-3" />
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
                        <img src={img6} alt="symptoms-5" />
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
      <div className="treat-all mt-5">
        <div className="container ">
          <div className="row ">
            <div>
              <h2 className="text-light mt-5 text-center">
                Learn how to perform a breast self-examination
              </h2>
              <div className="div-12"></div>
              <div className="div-22"></div>
              <div className="div-3"></div>
            </div>
            <div className="mt-2 ">
              <div className="row mt-2 tret1">
                <div className="tret-imgg overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated">
                  <img src={self1} className="w-25 img-fluid" alt="Bahey.jpg" />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInRight animate__delay-1s animate__fast animate__animated">
                    <h3>The first step is in front of the mirror</h3>
                    <p>
                      Make sure by looking at the shape, color and size of the
                      breasts that it is normal for you, Don Change, or no
                      difference between the breasts and note the presence of
                      any visible signs.
                    </p>
                  </div>
                  <div className="ul-all"></div>
                </div>
              </div>
              <div className="row mt-2 tret1">
                <div className="tret-imgg overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated animate__delay-1s">
                  <img src={self3} className="w-25 img-fluid" alt="Bahey.jpg" />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInRight animate__delay-1s animate__fast animate__animated">
                    <h3>The second step is in front of the mirror</h3>
                    <p>
                      Raise your hands up and make sure that there are no
                      previous changes Notice any abnormal secretions or blood
                      coming out of the right or left nipples without nipple
                      juice.
                    </p>
                  </div>
                  <div className="ul-all"></div>
                </div>
              </div>
              <div className="row mt-2 tret1">
                <div className="tret-imgg overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated animate__delay-1s animate__slow">
                  <img src={self5} className="w-25 img-fluid" alt="Bahey.jpg" />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInRight animate__delay-1s animate__fast animate__animated">
                    <h3>The third step is on the bed</h3>
                    <p>
                      Lie on the bed and place a pillow under the shoulder of
                      the side you will examine. Use the left hand to examine
                      the right breast and the right hand to examine the left
                      breast.
                    </p>
                  </div>
                  <div className="ul-all"></div>
                </div>
              </div>
              <div className="row mt-2 tret1">
                <div className="tret-imgg overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated animate__delay-1s animate__slower">
                  <img src={self6} className="w-25 img-fluid" alt="Bahey.jpg" />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInRight animate__delay-1s animate__fast animate__animated">
                    <h3>The fourth step is using the hand</h3>
                    <p>
                      Using the palm of your fingers and in a circular motion,
                      examine the breast (skin and tissue).
                    </p>
                  </div>
                  <div className="ul-all"></div>
                </div>
              </div>
              <div className="row mt-2 tret1">
                <div className="tret-imgg overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated">
                  <img src={self7} className="w-25 img-fluid" alt="Bahey.jpg" />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInRight animate__delay-1s animate__fast animate__animated">
                    <h3>The five step for women</h3>
                    <p>
                      Make sure to check your breasts Completely From the
                      collarbone up your stomach, From armpit to mid the chest.
                    </p>
                  </div>
                  <div className="ul-all"></div>
                </div>
              </div>
              <div className="row mt-2 tret1">
                <div className="tret-imgg overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated">
                  <img src={self8} className="w-25 img-fluid" alt="Bahey.jpg" />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInRight animate__delay-1s animate__fast animate__animated">
                    <h3>The Six step for women</h3>
                    <p>
                      Make sure by looking at the shape, color and size of the
                      breasts that it is normal for you, Don Change, or no
                      difference between the breasts and note the presence of
                      any visible signs.
                    </p>
                  </div>
                  <div className="ul-all"></div>
                </div>
              </div>
              <div className="row mt-2 tret1">
                <div className="tret-imgg overflow-hidden col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 animate__fadeInRight animate__animated">
                  <img src={self9} className="w-25 img-fluid" alt="Bahey.jpg" />
                </div>
                <div className="col-sx-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 ">
                  <div className="tret-text p-1 animate__fadeInRight animate__delay-1s animate__fast animate__animated">
                    <h3>The seven step for women</h3>
                    <p>
                      -You can also move- Fingers down and up vertically - and
                      do not forget the lower part of the breast in case of
                      drooping breasts - and do not forget to examine afterwards
                      Armpit.
                    </p>
                  </div>
                  <div className="ul-all"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      {/* chart */}
      <div className="allCart">
        <canvas ref={chartRef} className="chart" />
      </div>
      {/* chart */}
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
                          <button
                            type="button"
                            onClick={handleClick}
                            className="btn btn-primary"
                          >
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
      </div>

      {/* forget pass */}

      {/* forget pass */}
    </>
  );
}

