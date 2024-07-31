import React, { useState } from "react";
import "../../css/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="image" src="/img/logo.jpeg" alt="Logo" />
        </div>
        <div className="slogan">"BULANLAR ARAYANLARDIR. HAK İLE BULUŞMA ARAYIŞ'LA OLUR."</div>

        <div className={`menu ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
          <div className="menudiv bar1"></div>
          <div className="menudiv bar2"></div>
          <div className="menudiv bar3"></div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Hakkımızda</li>
            <li>Sayılarımız</li>
            <li>Sosyal Medya Hesaplarımız</li>
            <li>Dergi Satın Al</li>
            <li>Bize Ulaşın</li>
          </ul>
        </div>
      )}
    </>
  );
}
