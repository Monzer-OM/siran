import React from "react";

export default function App() {
  const trips = [
    { city: "أنطاليا", img: "/img/antalya.jpg" },
    { city: "طرابزون", img: "/img/trabzon.jpg" },
    { city: "كابادوكيا", img: "/img/cappadocia.jpg" },
  ];

  return (
<div style={{ fontFamily: "'Cairo', sans-serif", direction: "rtl", background: "#FFFFFF", minHeight: "100vh" }}>
  <header style={{ textAlign: "center", padding: "50px 20px" }}>
    
    {/* Flex container for logo and title */}
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "800px",
      margin: "0 auto 20px auto"
    }}>
      <img src="/logo.png" alt="سيران ترافل" style={{ width: "160px" }} />
      <h1 style={{ fontSize: "45px", color: "#f06522", margin: 0 }}>Siran Travel</h1>
    </div>

    <h1 style={{ fontSize: "32px", color: "#0077b6" }}>رحلتك تبدأ مع سيران ترافل</h1>
    <p style={{ fontSize: "18px", maxWidth: "600px", margin: "auto", marginTop: "10px" }}>
      نقدم لكم أفضل العروض السياحية داخل تركيا وخارجها، رحلات مميزة، حجوزات فندقية، جولات خاصة، وخدمة احترافية.
    </p>
  </header>





<section style={{ background: "white", padding: "40px 20px" }}>
  <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "30px" }}>عروض رحلات تركيا ✈️</h2>
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
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <a href={`https://wa.me/905058029560?text=مرحبا، أود الاستفسار عن رحلة إلى ${trip.city}`} target="_blank" rel="noopener noreferrer">
              <button style={{
                backgroundColor: "#25D366",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "14px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cairo"
              }}>
                احجز عبر الواتساب
              </button>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>تواصل معنا الآن واحجز رحلتك! 📱</h2>
        <p style={{ color: "#444", marginBottom: "20px" }}>نحن جاهزون للرد على جميع استفساراتك وتقديم أفضل الأسعار عبر الواتساب مباشرة.</p>
        <a href="https://wa.me/905058029560" target="_blank" rel="noopener noreferrer">
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

     <footer style={{ background: "#111", color: "#fff", padding: "40px 20px", direction: "rtl" }}>
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1000px",
    margin: "auto"
  }}>
    
    {/* Contact Us */}
    <div style={{ flex: "1", minWidth: "250px", marginBottom: "30px" }}>
      <h3 style={{ marginBottom: "15px" }}>اتصل بنا</h3>
      <p style={{ margin: "5px 0" }}>T: +90 505 802 9560</p>
      <p style={{ margin: "5px 0" }}>E: info@sirantravel.com</p>
      <div style={{ marginTop: "10px" }}>
        <a href="#" style={{ color: "#fff", marginRight: "10px" }}><i className="fab fa-instagram" /></a>
        <a href="#" style={{ color: "#fff" }}><i className="fab fa-facebook-f" /></a>
      </div>
    </div>

    

    {/* Secure Payment */}
    <div style={{ flex: "1", minWidth: "250px", marginBottom: "30px" }}>
      <h3 style={{ marginBottom: "15px" }}>ادفع معنا بأمان</h3>
      <p>يتم تشفير الدفع وإرساله بأمان باستخدام بروتوكول SSL.</p>
      <div style={{ marginTop: "10px" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" style={{ height: "30px", marginRight: "10px" }} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" style={{ height: "30px", marginRight: "10px" }} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={{ height: "30px", marginRight: "10px" }} />
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div style={{
    borderTop: "1px solid #333",
    marginTop: "20px",
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "14px"
  }}>
    .Copyright © 2025 Siran Travel All Rights Reserved
  </div>


</footer>

    </div>
  );
}
