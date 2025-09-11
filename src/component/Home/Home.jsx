import { Outlet } from "react-router-dom";
import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import img1 from "../../img/symptoms-1.webp";
import img2 from "../../img/symptoms-2.webp";
import img3 from "../../img/symptoms-3.webp";
import img4 from "../../img/symptoms-4.webp";
import img5 from "../../img/symptoms-5.webp";
import img6 from "../../img/symptoms-6.webp";
import robot from "../../img/robot-assistant.png";
import self1 from "../../img/self-1.jpg";
import self3 from "../../img/self-3.png";
import self5 from "../../img/self-5.jpg";
import self6 from "../../img/self-6.png";
import self7 from "../../img/self-7.png";
import self8 from "../../img/self-8.png";
import self9 from "../../img/self-9.png";
import Chart from "chart.js/auto";

import "animate.css";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsArrowUpCircleFill,
} from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css";
import Bahey from "../../img/Bahey.webp";
import Children from "../../img/Children's Cancer Hospital or Hospital 57357.webp";
import National from "../../img/National-Cancer-Institute.webp";
import chatboot from "../../img/chatboot.webp";
import home from "../../img/home-image-removebg-preview.png";
import img7 from "../../img/symptoms-7.webp";
import "./Home.module.css";
// import { toast } from "react-toastify";
import { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
/**
 * مكون الصفحة الرئيسية مع الـ chatbot المحسن
 * يحتوي على:
 * - نظام chatbot ذكي للرد على الأسئلة
 * - ميزات البحث وحفظ المحادثات
 * - تأثيرات بصرية متقدمة
 * - واجهة مستخدم محسنة
 */
export default function Home({ crrUser }) {
  // مراجع للرسم البياني
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
    // إعادة إظهار الأزرار عند إغلاق الـ chatbot
    setShowButtons(true);
    // إعادة تعيين المحادثة
    setMessages([
      { text: "مرحباً! أنا مساعدك الذكي لسرطان الثدي 🤖", type: "incoming" },
    ]);
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

  // === حالات الـ chatbot ===
  const [isChatVisible, setIsChatVisible] = useState(false); // إظهار/إخفاء الـ chatbot
  const [message, setMessage] = useState(""); // النص المدخل من المستخدم
  const [messages, setMessages] = useState([
    { text: "مرحباً! أنا مساعدك الذكي لسرطان الثدي 🤖", type: "incoming" },
  ]); // قائمة الرسائل
  const [isLoading, setIsLoading] = useState(false); // حالة التحميل
  const [isTyping, setIsTyping] = useState(false); // حالة الكتابة التدريجية
  const [typingText, setTypingText] = useState(""); // النص أثناء الكتابة
  const [searchTerm, setSearchTerm] = useState(""); // مصطلح البحث
  const [showSearch, setShowSearch] = useState(false); // إظهار شريط البحث
  const [savedChats, setSavedChats] = useState([]); // المحادثات المحفوظة
  const [showSavedChats, setShowSavedChats] = useState(false); // إظهار قائمة المحادثات المحفوظة
  const [showButtons, setShowButtons] = useState(true); // إظهار/إخفاء أزرار الخيارات
  const chatboxRef = useRef(null); // مرجع لقائمة الرسائل للتمرير داخلها

  /**
   * تبديل إظهار/إخفاء الـ chatbot
   */
  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  /**
   * تحديث النص المدخل من المستخدم
   */
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  /**
   * نظام ذكي للرد على الرسائل النصية
   * يحلل رسالة المستخدم ويجد الرد المناسب بناءً على الكلمات المفتاحية
   * @param {string} userMessage - رسالة المستخدم
   * @returns {object} - كائن يحتوي على النص ونوع الرسالة
   */
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // كلمات مفتاحية للعلاج
    if (
      message.includes("علاج") ||
      message.includes("treatment") ||
      message.includes("كيفية العلاج")
    ) {
      return {
        text: `🔬 **طرق علاج سرطان الثدي:**

**1. الجراحة:**
• الجراحة الاستئصالية: لإزالة الورم بالكامل
• الجراحة التجميلية: لاستعادة شكل الثدي
• استئصال الغدد الليمفاوية

**2. العلاج الإشعاعي:**
• العلاج الإشعاعي الخارجي
• العلاج الإشعاعي الداخلي (البراكي ثيرابي)

**3. العلاج الكيميائي:**
• عبر الوريد أو الفم
• يقتل الخلايا السرطانية سريعة الانقسام

**4. العلاج المناعي:**
• يقوي جهاز المناعة لمحاربة السرطان
• العلاج الموجه للخلايا السرطانية

**5. العلاج الهرموني:**
• لمنع تأثير الهرمونات على الخلايا السرطانية`,
        type: "incoming",
      };
    }

    // كلمات مفتاحية للأعراض
    if (
      message.includes("أعراض") ||
      message.includes("symptoms") ||
      message.includes("علامات")
    ) {
      return {
        text: `⚠️ **أعراض سرطان الثدي:**

**الأعراض الشائعة:**
• كتلة أو تورم في الثدي أو تحت الإبط
• تغير في حجم أو شكل الثدي
• تغيرات في جلد الثدي (احمرار، تجعد)
• تغيرات في الحلمة (انقلاب، إفرازات)
• ألم مستمر في الثدي
• تورم في الغدد الليمفاوية

**متى يجب استشارة الطبيب:**
• عند ملاحظة أي من هذه الأعراض
• إجراء فحص دوري للثدي
• المتابعة مع طبيب الأورام`,
        type: "incoming",
      };
    }

    // كلمات مفتاحية للمستشفيات
    if (
      message.includes("مستشفى") ||
      message.includes("hospital") ||
      message.includes("مركز") ||
      message.includes("طبيب")
    ) {
      return {
        text: `🏥 **أفضل مستشفيات سرطان الثدي في مصر:**

**1. المعهد القومي للأورام - جامعة القاهرة**
• متخصص في علاج الأورام
• أحدث التقنيات العلاجية

**2. مستشفى 57357**
• رائد في علاج السرطان
• خدمات متكاملة للمرضى

**3. مستشفيات مجربى**
• شبكة مستشفيات متطورة
• أطباء متخصصون في الأورام

**4. مركز القاهرة للأورام**
• متخصص في علاج سرطان الثدي
• برامج علاجية شاملة

**5. مستشفى دار الفؤاد**
• تقنيات حديثة
• فريق طبي متخصص`,
        type: "incoming",
      };
    }

    // كلمات مفتاحية للأسباب
    if (
      message.includes("سبب") ||
      message.includes("cause") ||
      message.includes("عوامل") ||
      message.includes("خطر")
    ) {
      return {
        text: `🔍 **عوامل خطر سرطان الثدي:**

**العوامل الوراثية:**
• طفرات جينية (BRCA1, BRCA2)
• تاريخ عائلي للمرض

**العوامل الهرمونية:**
• التعرض الطويل للإستروجين
• بداية مبكرة للدورة الشهرية
• انقطاع متأخر للطمث

**عوامل نمط الحياة:**
• شرب الكحول
• السمنة
• قلة النشاط البدني
• النظام الغذائي غير الصحي

**عوامل أخرى:**
• التقدم في العمر
• التعرض للإشعاع
• التاريخ المرضي السابق`,
        type: "incoming",
      };
    }

    // كلمات مفتاحية للأسئلة الشائعة
    if (
      message.includes("سؤال") ||
      message.includes("faq") ||
      message.includes("معلومات") ||
      message.includes("معرفة")
    ) {
      return {
        text: `❓ **الأسئلة الشائعة:**

**1. ما هو سرطان الثدي؟**
مرض يحدث عندما تنمو خلايا الثدي بشكل غير طبيعي.

**2. من هم الأكثر عرضة؟**
النساء فوق 50 عام، خاصة من لديهن تاريخ عائلي.

**3. كيف يتم التشخيص؟**
• الفحص السريري
• الماموجرام
• الموجات فوق الصوتية
• الخزعة

**4. هل يمكن الوقاية؟**
نعم، من خلال:
• الفحص الدوري
• نمط حياة صحي
• تجنب عوامل الخطر`,
        type: "incoming",
      };
    }

    // رد افتراضي
    return {
      text: `مرحباً! أنا مساعدك الذكي لسرطان الثدي 🤖

يمكنني مساعدتك في:
• معلومات عن العلاج
• الأعراض والعلامات
• المستشفيات المتخصصة
• عوامل الخطر
• الأسئلة الشائعة

اكتب سؤالك وسأجيب عليك فوراً! 💕`,
      type: "incoming",
    };
  };

  /**
   * تأثير الكتابة التدريجية للرسائل
   * يكتب النص حرفاً بحرف لإعطاء تأثير طبيعي
   * @param {string} text - النص المراد كتابته
   * @param {function} callback - دالة تنفيذ عند انتهاء الكتابة
   */
  const typeMessage = (text, callback) => {
    setIsTyping(true);
    setTypingText("");
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 30); // سرعة الكتابة
  };

  /**
   * إرسال رسالة المستخدم والحصول على رد البوت
   * يدعم تأثير الكتابة التدريجية
   */
  const handleSendMessage = () => {
    if (message.trim()) {
      // إخفاء الأزرار عند إرسال رسالة
      setShowButtons(false);

      // إضافة رسالة المستخدم بدون إعادة إدراج رسالة الترحيب
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, type: "outgoing" },
      ]);

      const userMessage = message;
      setMessage("");

      // عرض مؤشر التحميل
      setIsLoading(true);

      // الحصول على رد البوت مع تأثير الكتابة
      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        setIsLoading(false);

        // إضافة رسالة البوت مع تأثير الكتابة
        setMessages((prevMessages) => [
          ...prevMessages,
          { ...botResponse, text: "", isTyping: true },
        ]);

        // بدء تأثير الكتابة
        typeMessage(botResponse.text, () => {
          setMessages((prevMessages) =>
            prevMessages.map((msg, index) =>
              index === prevMessages.length - 1
                ? { ...msg, isTyping: false, text: botResponse.text }
                : msg
            )
          );
        });
      }, 1000);
    }
  };

  // const [Treatment, SetTreatment] = useState(false);
  //spinner

  /**
   * تصفية الرسائل بناءً على مصطلح البحث
   */
  const filteredMessages = messages.filter((msg) =>
    msg.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // التمرير التلقائي داخل صندوق الرسائل فقط
  useEffect(() => {
    const list = chatboxRef.current;
    if (list) {
      list.scrollTo({ top: list.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isLoading, isTyping]);

  /**
   * حفظ المحادثة الحالية في localStorage
   */
  const saveChat = () => {
    if (messages.length > 0) {
      const chatData = {
        id: Date.now(),
        title: `محادثة ${new Date().toLocaleDateString("ar-EG")}`,
        messages: [...messages],
        timestamp: new Date().toISOString(),
      };
      setSavedChats([...savedChats, chatData]);
      localStorage.setItem(
        "savedChats",
        JSON.stringify([...savedChats, chatData])
      );
      toast.success("تم حفظ المحادثة بنجاح!");
    }
  };

  /**
   * تحميل المحادثات المحفوظة من localStorage
   */
  const loadSavedChats = () => {
    const saved = localStorage.getItem("savedChats");
    if (saved) {
      setSavedChats(JSON.parse(saved));
    }
  };

  /**
   * تحميل محادثة محفوظة محددة
   * @param {number} chatId - معرف المحادثة
   */
  const loadChat = (chatId) => {
    const chat = savedChats.find((c) => c.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setShowSavedChats(false);
      toast.success("تم تحميل المحادثة");
    }
  };

  /**
   * حذف محادثة محفوظة
   * @param {number} chatId - معرف المحادثة
   */
  const deleteChat = (chatId) => {
    const updatedChats = savedChats.filter((c) => c.id !== chatId);
    setSavedChats(updatedChats);
    localStorage.setItem("savedChats", JSON.stringify(updatedChats));
    toast.success("تم حذف المحادثة");
  };

  // تحميل المحادثات المحفوظة عند بدء التطبيق
  useEffect(() => {
    loadSavedChats();
  }, []);
  /**
   * دالة محسنة للتعامل مع أزرار الـ chatbot
   * تقلل من التكرار في الكود وتوحد طريقة التعامل مع الأزرار
   * @param {string} buttonType - نوع الزر (treatment, symptoms, hospitals, causes, faqs)
   */
  const handleButtonClick = (buttonType) => {
    // إخفاء الأزرار عند الضغط على أي منها
    setShowButtons(false);

    const responses = {
      treatment: {
        text: "معلومات عن العلاج...",
        response: `🔬 **طرق علاج سرطان الثدي:**

**1. الجراحة:**
• الجراحة الاستئصالية: لإزالة الورم بالكامل
• الجراحة التجميلية: لاستعادة شكل الثدي
• استئصال الغدد الليمفاوية

**2. العلاج الإشعاعي:**
• العلاج الإشعاعي الخارجي
• العلاج الإشعاعي الداخلي (البراكي ثيرابي)

**3. العلاج الكيميائي:**
• عبر الوريد أو الفم
• يقتل الخلايا السرطانية سريعة الانقسام

**4. العلاج المناعي:**
• يقوي جهاز المناعة لمحاربة السرطان
• العلاج الموجه للخلايا السرطانية

**5. العلاج الهرموني:**
• لمنع تأثير الهرمونات على الخلايا السرطانية`,
      },
      symptoms: {
        text: "معلومات عن الأعراض...",
        response: `⚠️ **أعراض سرطان الثدي:**

**الأعراض الشائعة:**
• كتلة أو تورم في الثدي أو تحت الإبط
• تغير في حجم أو شكل الثدي
• تغيرات في جلد الثدي (احمرار، تجعد)
• تغيرات في الحلمة (انقلاب، إفرازات)
• ألم مستمر في الثدي
• تورم في الغدد الليمفاوية

**متى يجب استشارة الطبيب:**
• عند ملاحظة أي من هذه الأعراض
• إجراء فحص دوري للثدي
• المتابعة مع طبيب الأورام`,
      },
      hospitals: {
        text: "مستشفيات متخصصة...",
        response: `🏥 **أفضل مستشفيات سرطان الثدي في مصر:**

**1. المعهد القومي للأورام - جامعة القاهرة**
• متخصص في علاج الأورام
• أحدث التقنيات العلاجية

**2. مستشفى 57357**
• رائد في علاج السرطان
• خدمات متكاملة للمرضى

**3. مستشفيات مجربى**
• شبكة مستشفيات متطورة
• أطباء متخصصون في الأورام

**4. مركز القاهرة للأورام**
• متخصص في علاج سرطان الثدي
• برامج علاجية شاملة

**5. مستشفى دار الفؤاد**
• تقنيات حديثة
• فريق طبي متخصص`,
      },
      causes: {
        text: "عوامل الخطر...",
        response: `🔍 **عوامل خطر سرطان الثدي:**

**العوامل الوراثية:**
• طفرات جينية (BRCA1, BRCA2)
• تاريخ عائلي للمرض

**العوامل الهرمونية:**
• التعرض الطويل للإستروجين
• بداية مبكرة للدورة الشهرية
• انقطاع متأخر للطمث

**عوامل نمط الحياة:**
• شرب الكحول
• السمنة
• قلة النشاط البدني
• النظام الغذائي غير الصحي

**عوامل أخرى:**
• التقدم في العمر
• التعرض للإشعاع
• التاريخ المرضي السابق`,
      },
      faqs: {
        text: "الأسئلة الشائعة...",
        response: `❓ **الأسئلة الشائعة:**

**1. ما هو سرطان الثدي؟**
مرض يحدث عندما تنمو خلايا الثدي بشكل غير طبيعي.

**2. من هم الأكثر عرضة؟**
النساء فوق 50 عام، خاصة من لديهن تاريخ عائلي.

**3. كيف يتم التشخيص؟**
• الفحص السريري
• الماموجرام
• الموجات فوق الصوتية
• الخزعة

**4. هل يمكن الوقاية؟**
نعم، من خلال:
• الفحص الدوري
• نمط حياة صحي
• تجنب عوامل الخطر`,
      },
    };

    const response = responses[buttonType];
    if (response) {
      // إضافة اختيار المستخدم بدون إعادة إدراج رسالة الترحيب
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.text, type: "outgoing" },
      ]);

      setIsLoading(true);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.response, type: "incoming" },
        ]);
        setIsLoading(false);
      }, 1500);
    }
  };

  // دوال محسنة للأزرار
  const handleTreatment = () => handleButtonClick("treatment");
  const handleSymptoms = () => handleButtonClick("symptoms");

  const handlehospitals = () => handleButtonClick("hospitals");
  const handleCause = () => handleButtonClick("causes");
  const handleFAQs = () => handleButtonClick("faqs");

  /**
   * إعادة إظهار أزرار الخيارات
   */
  const showOptionsButtons = () => {
    setShowButtons(true);
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
              <div className="header-controls d-flex gap-2">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="control-btn"
                  title="البحث في المحادثة"
                >
                  🔍
                </button>
                <button
                  onClick={saveChat}
                  className="control-btn"
                  title="حفظ المحادثة"
                >
                  💾
                </button>
                <button
                  onClick={() => setShowSavedChats(!showSavedChats)}
                  className="control-btn"
                  title="المحادثات المحفوظة"
                >
                  📁
                </button>
                <button
                  onClick={handleCloseChatbox}
                  className="close-btn"
                  title="إغلاق"
                >
                  ✕
                </button>
              </div>
            </header>

            {/* شريط البحث */}
            {showSearch && (
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="ابحث في المحادثة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="search-close-btn"
                >
                  ✕
                </button>
              </div>
            )}

            {/* قائمة المحادثات المحفوظة */}
            {showSavedChats && (
              <div className="saved-chats-panel">
                <div className="saved-chats-header">
                  <h4>المحادثات المحفوظة</h4>
                  <button
                    onClick={() => setShowSavedChats(false)}
                    className="close-saved-btn"
                  >
                    ✕
                  </button>
                </div>
                <div className="saved-chats-list">
                  {savedChats.length === 0 ? (
                    <p className="no-chats">لا توجد محادثات محفوظة</p>
                  ) : (
                    savedChats.map((chat) => (
                      <div key={chat.id} className="saved-chat-item">
                        <div className="chat-info">
                          <h5>{chat.title}</h5>
                          <p>
                            {new Date(chat.timestamp).toLocaleString("ar-EG")}
                          </p>
                        </div>
                        <div className="chat-actions">
                          <button
                            onClick={() => loadChat(chat.id)}
                            className="load-btn"
                          >
                            تحميل
                          </button>
                          <button
                            onClick={() => deleteChat(chat.id)}
                            className="delete-btn"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            <ul className="chatbox" ref={chatboxRef}>
              {/* أزرار الخيارات - تظهر فقط في البداية */}
              {showButtons && (
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
                            العلاج
                          </button>
                        </div>
                      </li>
                      <li className="chat incoming">
                        <div className="div-chatt p-2">
                          <button
                            className="start-chat"
                            onClick={handleSymptoms}
                          >
                            الأعراض
                          </button>
                        </div>
                      </li>
                      <li className="chat incoming">
                        <div className="div-chatt p-2">
                          <button
                            className="start-chattt"
                            onClick={handlehospitals}
                          >
                            المستشفيات المتخصصة
                          </button>
                        </div>
                      </li>
                      <li className="chat incoming">
                        <div className="div-chatt p-2">
                          <button
                            className="start-chattt"
                            onClick={handleCause}
                          >
                            عوامل الخطر
                          </button>
                        </div>
                      </li>
                      <li className="chat incoming">
                        <div className="div-chatt p-2">
                          <button
                            className="start-chattt"
                            onClick={handleClick}
                          >
                            فحص شخصي
                          </button>
                        </div>
                      </li>
                      <li className="chat incoming">
                        <div className="div-chatt p-2">
                          <button className="start-chat" onClick={handleFAQs}>
                            الأسئلة الشائعة
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {(searchTerm ? filteredMessages : messages).map((msg, index) => (
                <li key={index} className={`chat ${msg.type}`}>
                  {msg.type === "incoming" && (
                    <span className="material-symbols-outlined">
                      <img
                        src={robot}
                        alt="robot"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                  )}
                  <p>
                    {msg.isTyping ? typingText : msg.text}
                    {msg.isTyping && <span className="typing-cursor">|</span>}
                  </p>
                </li>
              ))}
              {/* زر إعادة إظهار الخيارات - يوضع أسفل الرسائل دائماً */}
              {!showButtons && messages.length > 2 && (
                <li className="chat incoming">
                  <span className="material-symbols-outlined">
                    <img src={robot} alt="robot" />
                  </span>
                  <div className="div-chat p-2">
                    <button
                      className="start-chatt"
                      onClick={showOptionsButtons}
                      style={{
                        background:
                          "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                        fontSize: "0.9rem",
                        padding: "10px 20px",
                      }}
                    >
                      🔄 عرض الخيارات مرة أخرى
                    </button>
                  </div>
                </li>
              )}
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
            <div
              className="col-md-2 symw m-auto d-flex justify-content-center align-items-center
            animate__fadeInLeft animate__animated
            "
            >
              <div className="mod  ">
                <button
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <img src={img1} alt="symptoms-1" className="" />
                </button>
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
            <div
              className="col-md-2 symw m-auto d-flex justify-content-center align-items-center
            animate__fadeInLeft animate__animated animate__slow
            "
            >
              <div className="mod  ">
                <button
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <img src={img2} alt="symptoms-1" className="" />
                </button>
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
            <div
              className="col-md-2 symw m-auto d-flex justify-content-center align-items-center
            animate__fadeInLeft animate__animated animate__slow
            "
            >
              <div className="mod  ">
                <button
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <img src={img3} alt="symptoms-1" className="" />
                </button>
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
            <div
              className="col-md-2 symw m-auto d-flex justify-content-center align-items-center
            animate__fadeInLeft animate__animated animate__slow
            "
            >
              <div className="mod  ">
                <button
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  <img src={img4} alt="symptoms-1" className="" />
                </button>
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
            <div
              className="col-md-2 symw m-auto d-flex justify-content-center align-items-center
            animate__fadeInLeft animate__animated animate__slow
            "
            >
              <div className="mod  ">
                <button
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                >
                  <img src={img5} alt="symptoms-1" className="" />
                </button>
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
            <div
              className="col-md-2 symw m-auto d-flex justify-content-center align-items-center
            animate__fadeInLeft animate__animated animate__slow
            "
            >
              <div className="mod  ">
                <button
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                >
                  <img src={img6} alt="symptoms-1" className="" />
                </button>
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
            <div className="col-md-2 symw m-auto animate__fadeInLeft animate__animated animate__slow">
              <div className="mod  ">
                <button
                  type="button"
                  className="symw"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal7"
                >
                  <img src={img7} alt="symptoms-1" className="" />
                </button>
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
