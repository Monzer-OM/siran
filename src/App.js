import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function App() {
  const weeklyTrips = [
    { city: "طرابزون", img: "/img/trabzon.jpg" },
    { city: "كابادوكيا", img: "/img/cappadocia.jpg" },
    { city: "أنطاليا", img: "/img/antalya.jpg" },
    { city: "مرميس", img: "/img/cappadocia.jpg" },
  ];

  const dailyTrips = [
    { city: "صبنجا ومعشوقية", img: "/img/cappadocia.jpg" },
    { city: "بورصا", img: "/img/cappadocia.jpg" },
    { city: "جزر الاميرات", img: "/img/cappadocia.jpg" },
    { city: "سهرة البوسفور", img: "/img/cappadocia.jpg" },
    { city: "شيلا اغوا", img: "/img/cappadocia.jpg" },
    { city: "ازميت", img: "/img/cappadocia.jpg" },
    { city: "يالوفا", img: "/img/cappadocia.jpg" },
  ];

  const specialServices = [
    { city: "نقل من والى المطار", img: "/img/cappadocia.jpg" },
    { city: "سيارات خاصة", img: "/img/cappadocia.jpg" },
    { city: "يخت خاص", img: "/img/cappadocia.jpg" },
    { city: "كوخ خاص", img: "/img/cappadocia.jpg" },
    { city: "حجوزات فنادق", img: "/img/cappadocia.jpg" },
    { city: "حجوزات طيران", img: "/img/cappadocia.jpg" },
  ];

  const controlsSiran = useAnimation();
  const controlsTravel = useAnimation();
  const controlsLogo = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controlsSiran.start({ opacity: 1, x: 0, transition: { duration: 1.2 } });
      await controlsTravel.start({ opacity: 1, x: 0, transition: { duration: 1 } });
      await controlsLogo.start({ opacity: 1, scale: 1, transition: { duration: 0.7 } });
    }

    sequence();

    const interval = setInterval(() => {
      controlsSiran.set({ opacity: 0, x: 50 });
      controlsTravel.set({ opacity: 0, x: 50 });
      controlsLogo.set({ opacity: 0, scale: 0.8 });
      sequence();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function renderTripSection(title, items, type) {
    return (
      <section id={type} style={{ background: type === 'weekly' ? '#fff' : '#f9f9f9', padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "30px" }}>{title}</h2>
        <div style={{ maxWidth: "800px", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {items.map((trip, idx) => (
            <div key={idx} style={{ width: "300px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", overflow: "hidden", background: "#fff" }}>
              <img src={trip.img} alt={trip.city} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#0077b6" }}>{trip.city}</h3>
                <p style={{ fontSize: "14px", color: "#555" }}>اكتشف {trip.city} معنا في تجربة لا تنسى.</p>
                <div style={{ textAlign: "center", marginTop: "15px" }}>
                  <a href={`https://wa.me/905058029560?text=مرحبا، أود الاستفسار عن ${type === 'special' ? 'خدمة' : 'رحلة'} ${trip.city}`} target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundColor: "#f06522", color: "#fff", padding: "12px 24px", fontSize: "14px", borderRadius: "30px", border: "none", cursor: "pointer", fontFamily: "'Cairo', sans-serif" }}>
                      احجز عبر الواتساب
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: "rtl", background: "#FFFFFF", minHeight: "100vh" }}>
      <nav style={{ backgroundColor: "#f06522", padding: "10px 20px", display: "flex", justifyContent: "center", gap: "25px", position: "fixed", top: 0, width: "100%", zIndex: 999, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={navButtonStyle}>الرئيسية</button>
        <button onClick={() => scrollToSection("daily")} style={navButtonStyle}>الرحلات اليومية</button>
        <button onClick={() => scrollToSection("weekly")} style={navButtonStyle}>الرحلات الأسبوعية</button>
        <button onClick={() => scrollToSection("special")} style={navButtonStyle}>الخدمات الخاصة</button>
      </nav>

      <div style={{ height: "50px" }}></div>

      <header style={{ maxWidth: "800px", margin: "50px auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={controlsLogo} style={{ width: "120px", borderRadius: "12px" }}>
          <img src="/logo.png" alt="سيران ترافل" style={{ width: "100%", borderRadius: "12px" }} />
        </motion.div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <motion.h1 initial={{ opacity: 0, x: 50 }} animate={controlsTravel} style={{ fontSize: "45px", color: "#f06522", margin: 0, textAlign: "right" }}>Travel</motion.h1>
          <motion.h1 initial={{ opacity: 0, x: 50 }} animate={controlsSiran} style={{ fontSize: "45px", color: "#f06522", margin: 0, marginLeft: "10px", textAlign: "right" }}>Siran</motion.h1>
        </div>
      </header>

      <section style={{ maxWidth: "800px", margin: "auto", padding: "0 20px", textAlign: "center" }}>
        <motion.h2 style={{ fontSize: "32px", color: "#0077b6", marginTop: 0 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          مغامرتك تبدأ مع <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }} style={{ color: "#f06522", display: "inline-block" }}>سيران</motion.span> ترافل
        </motion.h2>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          نقدم لكم أفضل العروض السياحية داخل تركيا وخارجها، رحلات مميزة، حجوزات فندقية، جولات خاصة، وخدمة احترافية.
        </p>
      </section>

      {renderTripSection("برامجنا السياحية اليومية – جولات مميزة ليوم واحد", dailyTrips, "daily")}
      {renderTripSection("برامجنا السياحية الاسبوعية – مع اقامة فندقية", weeklyTrips, "weekly")}
      {renderTripSection("خدماتنا الخاصة – من النقل الى الحجوزات", specialServices, "special")}

      <footer style={{ background: "#333333", color: "white", padding: "30px 20px", marginTop: "50px" }}>
        <div style={{ maxWidth: "800px", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
            <h3>سيران ترافل</h3>
            <p>أفضل خدمات السفر والسياحة في تركيا.</p>
          </div>
          <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
            <h3>تواصل معنا</h3>
            <p>هاتف: 05058029560</p>
            <p>واتساب: +905058029560</p>
            <p>البريد الإلكتروني: info@sirantravel.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const navButtonStyle = {
  background: "none",
  border: "none",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
  fontFamily: "'Cairo', sans-serif",
  padding: "8px 16px",
  borderRadius: "6px",
  transition: "background-color 0.3s ease",
};
