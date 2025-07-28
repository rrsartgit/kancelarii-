import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">⚖️ PrawoAsystent AI</h1>
          <nav className="nav">
            <a href="#features">Funkcje</a>
            <a href="#about">O nas</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h2 className="hero-title">
              Sztuczna Inteligencja dla <span className="highlight">Prawników</span>
            </h2>
            <p className="hero-subtitle">
              Automatyzuj tworzenie dokumentów, analizuj sprawy i zarządzaj wiedzą prawną 
              z pomocą najnowszych technologii AI
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Rozpocznij za darmo</button>
              <button className="btn btn-secondary">Zobacz demo</button>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h3 className="section-title">Kluczowe Funkcjonalności</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h4>Generator Snippetów</h4>
                <p>Twórz precyzyjne klauzule prawne w sekundach dzięki AI</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎙️</div>
                <h4>Analiza Audio</h4>
                <p>Transkrypcja rozpraw z identyfikacją mówców</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h4>Wyszukiwanie RAG</h4>
                <p>Inteligentne odpowiedzi na pytania prawne</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛒</div>
                <h4>Marketplace</h4>
                <p>Kupuj i sprzedawaj zweryfikowane wzorce</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Monitor Prawa</h4>
                <p>Automatyczne śledzenie zmian w przepisach</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h4>Analiza Umów</h4>
                <p>Porównywanie wersji z oceną ryzyka</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Oszczędność czasu</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Kancelarii</div>
              </div>
              <div className="stat">
                <div className="stat-number">10k+</div>
                <div className="stat-label">Snippetów</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 PrawoAsystent AI. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}

export default App