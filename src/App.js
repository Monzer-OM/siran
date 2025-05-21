import React from "react";

export default function App() {
  const trips = [
    { city: "أنطاليا", img: "/img/antalya.jpg" },
    { city: "طرابزون", img: "/img/trabzon.jpg" },
    { city: "كابادوكيا", img: "/img/cappadocia.jpg" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", direction: "rtl", background: "#f0f8ff", minHeight: "100vh" }}>
<header style={{ textAlign: "center", padding: "50px 20px" }}>
  <img src="/logo.png" alt="سيران ترافل" style={{ width: "160px", marginBottom: "20px" }} />
  <h1 style={{ fontSize: "32px", color: "#0077b6" }}>سيران ترافل - رحلات لا تُنسى 🌍</h1>
  <p style={{ fontSize: "18px", maxWidth: "600px", margin: "auto", marginTop: "10px" }}>
    نقدم لكم أفضل العروض السياحية داخل تركيا وخارجها، رحلات مميزة، حجوزات فندقية، جولات خاصة، وخدمة احترافية.
  </p>
</header>


      <section style={{ background: "white", padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "30px" }}>عروض الرحلات الحالية ✈️</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {trips.map((trip, idx) => (
            <div key={idx} style={{
              width: "300px",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              background: "#fff"
            }}>
              <img src={trip.img} alt={trip.city} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>رحلة إلى {trip.city}</h3>
                <p style={{ fontSize: "14px", color: "#555" }}>اكتشف سحر {trip.city} معنا في جولة منظمة وممتعة تشمل الإقامة والتنقلات.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>تواصل معنا الآن واحجز رحلتك! 📱</h2>
        <p style={{ color: "#444", marginBottom: "20px" }}>نحن جاهزون للرد على جميع استفساراتك وتقديم أفضل الأسعار عبر الواتساب مباشرة.</p>
        <a href="https://wa.me/00905341234567" target="_blank" rel="noopener noreferrer">
          <button style={{
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer"
          }}>
            تواصل عبر الواتساب
          </button>
        </a>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", fontSize: "14px", color: "#999" }}>
        © {new Date().getFullYear()} سيران ترافل - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
