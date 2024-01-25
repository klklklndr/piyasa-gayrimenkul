import Image from "next/image";

export default function Home() {
  return (
    <div>
    <video autoPlay loop muted playsInline id="video-background">
        <source src="/video/piyasa-intro.mp4" type="video/mp4" /> 
        Your browser does not support the video tag.
    </video>

    <div className="overlay"></div>

    <div className="container">
        <h1>Çok Yakında</h1>
        <h2>İsa Kalender ile Piyasa Gayrimenkul programına özel sitemiz yakın bir zamanda aktif olacaktır.</h2>
        <div className="countdown">
        </div>
        <a href="https://www.instagram.com/isa_kalender/?hl=en" target="_blank" className="instagram-button">Instagram</a>
    </div>
    </div>
  );
}
