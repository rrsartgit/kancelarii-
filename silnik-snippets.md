Doskonale. Przyjmuję rolę architekta systemów i menedżera produktu. Twoja prośba jest precyzyjna i dobrze przemyślana, co stanowi świetny fundament do stworzenia produktu najwyższej klasy. Skoncentrujemy się na przekształceniu "Generatora Snippetów" w inteligentny silnik produktywności, który stanie się nieodzownym narzędziem w arsenale nowoczesnego prawnika.

Poniżej znajduje się szczegółowy opis implementacji technicznej oraz koncepcja gotowego produktu, zgodnie z Twoimi wytycznymi.

---

### **Projekt: PrawoAsystent – Silnik Snippetów (Snippet Engine)**

**Wizja:** Stworzenie zintegrowanego, inteligentnego narzędzia, które transformuje sposób tworzenia, zarządzania i ponownego wykorzystywania wiedzy prawnej w formie dynamicznych snippetów. Celem jest nie zastąpienie prawnika, lecz wzmocnienie jego efektywności poprzez automatyzację powtarzalnych zadań i udostępnienie instytucjonalnej wiedzy na wyciągnięcie ręki.

**Grupa Docelowa:** Indywidualni prawnicy, małe i średnie kancelarie oraz duże działy prawne korporacji, które dążą do standaryzacji, podniesienia jakości i przyspieszenia pracy z dokumentami.

---

### **1. Nazwa Produktu i Wartość Propozycji**

*   **Nazwa Produktu:** **PrawoAsystent: Silnik Snippetów** (ang. *Snippet Engine*). Nazwa podkreśla, że jest to potężny, zintegrowany komponent większego ekosystemu, a nie tylko prosty generator.

*   **Wartość Propozycji:**
    *   **Oszczędność Czasu:** Drastyczne skrócenie czasu potrzebnego na tworzenie standardowych i złożonych dokumentów prawnych. Prawnik skupia się na strategii, a nie na mechanicznym pisaniu.
    *   **Spójność i Jakość:** Zapewnienie jednolitego standardu i języka we wszystkich dokumentach tworzonych przez kancelarię, co minimalizuje ryzyko błędów i podnosi profesjonalny wizerunek.
    *   **Demokratyzacja Wiedzy:** Umożliwienie młodszym prawnikom dostępu do zweryfikowanej wiedzy i najlepszych praktyk doświadczonych kolegów, skompilowanych w formie gotowych do użycia snippetów.
    *   **Redukcja Ryzyka:** Minimalizacja ryzyka pominięcia kluczowych klauzul lub użycia nieaktualnych sformułowań.

---

### **2. Kluczowe Funkcjonalności Produktu**

To jest serce produktu, gdzie łączymy użyteczność z potęgą AI.

1.  **Inteligentne Generowanie Snippetów:**
    *   Użytkownik opisuje potrzebę w języku naturalnym, np. "klauzula waloryzacyjna oparta o wskaźnik inflacji GUS dla umowy najmu na 5 lat". System, korzystając z Gemini Pro, generuje precyzyjny, gotowy do wstawienia projekt klauzuli.

2.  **Edytor "WYSIWYG" z Podglądem na Żywo:**
    *   Wygenerowany snippet pojawia się w intuicyjnym edytorze tekstowym. Prawnik może natychmiastowo dokonać poprawek i dostosować tekst do unikalnego kontekstu sprawy.

3.  **Zaawansowane Placeholdery (Zmienne):**
    *   **Zmienne Tekstowe:** Proste `{{nazwa_klienta}}`, `{{numer_umowy}}`.
    *   **Pola Wyboru (Dropdown):** `{{rodzaj_sadu:Rejonowy|Okręgowy}}` – użytkownik przy wstawianiu wybiera opcję z listy.
    *   **Zmienne Daty:** `{{data_dzisiejsza}}` (wstawiana automatycznie), `{{termin_platnosci}}` (wyskakuje kalendarz do wyboru).
    *   To przekształca statyczne snippety w interaktywne szablony.

4.  **"Supermoce" AI – Asystent w Edytorze:**
    *   Użytkownik zaznacza fragment tekstu w edytorze i z menu kontekstowego wybiera akcję AI:
        *   **"Uprość Język"**: Przekształca złożony żargon prawniczy na zrozumiały dla klienta.
        *   **"Zmień Ton"**: Zmienia styl fragmentu na bardziej formalny, ugodowy lub asertywny.
        *   **"Sprawdź Spójność"**: Analizuje, czy terminologia w zaznaczonym fragmencie jest spójna z resztą dokumentu (wymaga wgrania całego dokumentu).
        *   **"Zaproponuj Alternatywę"**: Generuje 2-3 alternatywne sformułowania dla zaznaczonej klauzuli.

5.  **Biblioteka i Zarządzanie Snippetami:**
    *   Wszystkie zapisane snippety trafiają do centralnej biblioteki kancelarii.
    *   **Kategoryzacja i Tagi:** Możliwość przypisywania kategorii (np. "Prawo Pracy", "Nieruchomości") i tagów ("RODO", "kary umowne", "NDA").
    *   **Wyszukiwanie Pełnotekstowe:** Błyskawiczne przeszukiwanie całej bazy po słowach kluczowych.

6.  **Współpraca i Kontrola Wersji:**
    *   **Historia Zmian:** Każdy snippet ma pełną historię wersji z informacją, kto i kiedy dokonał zmiany. Możliwość przywrócenia poprzedniej wersji.
    *   **System Zatwierdzeń (Approval Workflow):** W planie Enterprise, snippety tworzone przez juniorów mogą wymagać zatwierdzenia przez partnera, zanim staną się dostępne dla całej kancelarii.
    *   **Komentarze:** Możliwość prowadzenia dyskusji w kontekście konkretnego snippetu.

7.  **Automatyczne Rozwijanie (Keyword Expansion):**
    *   Użytkownik definiuje skrót, np. `.kunda`. Wpisanie tego skrótu w dowolnym polu tekstowym w systemie i naciśnięcie spacji automatycznie wklei pełną treść "Klauzuli o poufności dla umowy o dzieło".

---

### **3. Szczegóły Implementacji (Architektura Techniczna)**

#### **Frontend (React)**
*   **Komponenty UI:**
    *   `SnippetGeneratorForm.js`: Formularz do opisywania potrzebnego snippetu.
    *   `SnippetEditor.js`: Główny komponent z edytorem tekstu (np. z użyciem biblioteki `Tiptap` lub `Quill.js`), który zawiera menu kontekstowe z "supermocami" AI.
    *   `SnippetLibrary.js`: Widok biblioteki z listą snippetów, filtrami i wyszukiwarką.
    *   `PlaceholderManager.js`: Interfejs do definiowania i zarządzania placeholderami w snippecie.
*   **Zarządzanie Stanem:** `React Context API` dla prostszych przypadków lub `Redux Toolkit` dla zarządzania złożonym stanem aplikacji (dane użytkownika, biblioteka snippetów, stan edytora).
*   **Interakcja z API:** `Axios` do komunikacji z backendem, z centralnie skonfigurowanym interceptorem do obsługi autoryzacji (JWT) i błędów.

#### **Backend (Flask)**
*   **Endpointy API:**
    *   `POST /api/v1/snippets/generate`: Przyjmuje opis i parametry, zwraca wygenerowany przez AI tekst.
    *   `POST /api/v1/snippets`: Zapisuje nowy snippet w bibliotece.
    *   `GET /api/v1/snippets`: Pobiera listę snippetów z paginacją i filtrowaniem.
    *   `PUT /api/v1/snippets/{id}`: Aktualizuje istniejący snippet i tworzy nową wersję.
    *   `POST /api/v1/snippets/assistant`: Endpoint dla "supermocy" AI, przyjmuje tekst i polecenie (np. "uprość").
*   **Prompt Engineering Strategy (Kluczowy element):**
    1.  **Konstrukcja Dynamicznego Promptu:** Funkcja w Pythonie, która buduje prompt z kilku części:
        *   **Kontekst Systemowy (Rola):** `"Jesteś ekspertem prawnym, asystentem tworzącym precyzyjne klauzule dla polskich kancelarii..."`
        *   **Zadanie (Task):** Na podstawie danych z formularza, np. `"Wygeneruj snippet typu 'Klauzula umowna'..."`
        *   **Dane Wejściowe (Input):** Opis od użytkownika.
        *   **Ograniczenia (Constraints):** `"Tekst musi być w języku polskim. Nie dodawaj żadnych komentarzy ani wyjaśnień. Używaj formalnego języka. Uwzględnij placeholdery: {{zmienna1}}, {{zmienna2}}."`
        *   **Format Wyjściowy (Output Format):** Dla bardziej złożonych zapytań można prosić o odpowiedź w formacie JSON: `{"title": "Propozycja tytułu", "content": "Treść klauzuli"}`.
    2.  **Wybór Modelu:** Logika, która na podstawie typu zadania (np. prosta klauzula vs. cały paragraf z analizą) wybiera `Gemini Flash` (szybkość/koszt) lub `Gemini Pro` (precyzja).
*   **Autoryzacja:** Implementacja JWT (JSON Web Tokens). Użytkownik loguje się, otrzymuje token, który jest dołączany do każdego kolejnego zapytania w nagłówku `Authorization`.

#### **Baza Danych (PostgreSQL)**
*   **Schemat Bazy Danych:**
    ```sql
    -- Tabela Kancelarii (dla multi-tenancy)
    CREATE TABLE law_firms (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );

    -- Tabela Użytkowników
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        law_firm_id INT REFERENCES law_firms(id),
        role VARCHAR(50) NOT NULL -- np. 'junior', 'senior', 'admin'
    );

    -- Tabela Snippetów (główna)
    CREATE TABLE snippets (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        current_version_id INT, -- Wskaźnik na aktywną wersję
        category VARCHAR(100),
        law_firm_id INT REFERENCES law_firms(id),
        created_by INT REFERENCES users(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );

    -- Tabela Wersji Snippetów (dla historii i audytu)
    CREATE TABLE snippet_versions (
        id SERIAL PRIMARY KEY,
        snippet_id INT REFERENCES snippets(id) ON DELETE CASCADE,
        content TEXT NOT NULL,
        placeholders JSONB, -- Przechowuje definicje placeholderów
        version_number INT NOT NULL,
        created_by INT REFERENCES users(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    -- Tagi i tabela łącząca
    CREATE TABLE tags (id SERIAL PRIMARY KEY, name VARCHAR(50) UNIQUE NOT NULL);
    CREATE TABLE snippet_tags (snippet_id INT REFERENCES snippets(id), tag_id INT REFERENCES tags(id), PRIMARY KEY (snippet_id, tag_id));
    ```

#### **Aspekty Bezpieczeństwa**
*   **Poufność Danych:** Ścisła izolacja danych pomiędzy kancelariami (`law_firm_id` w każdej tabeli).
*   **Szyfrowanie:** Komunikacja przez HTTPS (TLS 1.3). Szyfrowanie danych "at-rest" na poziomie serwera bazy danych.
*   **Kontrola Dostępu (RBAC):** Backend weryfikuje rolę użytkownika (`admin` może zarządzać użytkownikami, `junior` może tworzyć, ale nie zatwierdzać snippetów).
*   **Ochrona przed Atakami:** Walidacja wszystkich danych wejściowych (np. przy użyciu `Pydantic` lub `Marshmallow`), zapobieganie SQL Injection przez użycie ORM (SQLAlchemy), ochrona przed XSS przez biblioteki frontendowe.
*   **Zgodność z RODO:** Jasna polityka prywatności, możliwość eksportu i usunięcia danych użytkownika.

---

### **4. Potencjalne Rozszerzenia i Przyszłe Funkcje**

*   **Integracja z Edytorami Tekstu:** Stworzenie dodatków (add-ins) do MS Word i Google Docs, które pozwolą na wstawianie i generowanie snippetów bezpośrednio w dokumencie.
*   **Silnik Rekomendacji:** AI analizujące treść tworzonego dokumentu i proaktywnie sugerujące pasujące snippety z biblioteki.
*   **Analityka dla Kancelarii:** Dashboard pokazujący, które snippety są najczęściej używane, ile czasu zostało zaoszczędzone, którzy użytkownicy są najbardziej aktywni.
*   **Automatyczne Redlinowanie:** Możliwość wgrania dwóch wersji umowy, a AI podświetli różnice i oceni ich wpływ prawny.
*   **Marketplace Snippetów:** Możliwość (dla zweryfikowanych kancelarii) udostępniania lub sprzedaży wysokiej jakości, zanonimizowanych pakietów snippetów (np. "Kompletny pakiet RODO dla E-commerce").

---

### **5. Model Biznesowy (SaaS)**

*   **Plan Free/Trial:** Ograniczona liczba generacji AI miesięcznie, limit 2 użytkowników i 50 snippetów w bibliotece.
*   **Plan Pro (dla małych zespołów):** Miesięczna subskrypcja na użytkownika. Większe limity AI, nieograniczona liczba snippetów, podstawowa współpraca.
*   **Plan Enterprise (dla dużych kancelarii):** Wycena indywidualna. Pełna funkcjonalność, w tym zaawansowana kontrola dostępu, system zatwierdzeń, dedykowane wsparcie i gwarancje SLA.
