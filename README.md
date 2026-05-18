# 🤖 Regelbasierter Genderautomat

Ein interaktiver, regelbasierter Web-Prototyp zur automatisierten Transformation von Texten in gendersensible Sprache. Diese Anwendung wurde speziell im Rahmen einer Fallstudie für den Kontext der Technischen Redaktion in einem Fachverlag entwickelt.

Die Anwendung ermöglicht es, ungelenke maskuline Formen in technischen Dokumentationen effizient und automatisiert durch empfohlene, geschlechtergerechte Schreibweisen (mit Gender-Doppelpunkt) zu ersetzen.

---

## Kern-Features

* **Automatisches Gendern:** Filtert Texte mithilfe dynamischer Regulärer Ausdrücke (Regex) unter strikter Einhaltung von Wortgrenzen (`\b`), um fehlerhafte Ersetzungen bei zusammengesetzten Wörtern (z. B. *Kundennummer*) zu verhindern.
* **Beispieltexte laden:** Über dedizierte Steuerungselemente lassen sich drei fiktive, nicht-gegenderte Beispielanleitungen direkt zur Demonstration in das System laden.
* **Robuste Sicherheitsarchitektur:** Integrierter Schutz gegen DOM-based Cross-Site-Scripting (XSS) durch eine eigens implementierte Bereinigung (`sanitize()`), die auf browsernativen Mechanismen (`textContent`) basiert.
* **Responsive Design:** Eine fließende, geräteübergreifende Benutzeroberfläche (optimiert für Desktop, Tablets und Smartphones im Hoch-/Querformat) mittels Bootstrap-Grid-System.
* **Datentrennung via JSON:** Einfache Wartung und Erweiterbarkeit des Wortschatzes durch die Auslagerung des Regelwerks und der Beispieltexte in separate JSON-Dateien.

---

## Tech Stack & Bibliotheken

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Responsive Framework:** Bootstrap v5.3 (Anbindung via CDN)
* **Datenstruktur:** JSON (für Ersetzungsregeln und Demotexte)
* **Versionierung:** Git & GitHub

---

## Installation & Lokaler Start

Da es sich um eine reine Client-Side-Webanwendung handelt, ist **keine aufwändige Installation** oder Server-Umgebung (wie Node.js) erforderlich. Du kannst das Projekt direkt im Browser ausführen:

1. **Repository klonen:**
   ```bash
   git clone [https://github.com/DEIN-GITHUB-NAME/DEIN-REPOSITORY-NAME.git](https://github.com/DEIN-GITHUB-NAME/DEIN-REPOSITORY-NAME.git)
2. **Verzeichnis öffnen:**
Navigieren Sie in den lokalen Projektordner, der die Datei index.html enthält.
3. **Anwendung ausführen:**
Öffnen Sie die Datei index.html per Doppelklick in einem aktuellen Webbrowser (z. B. Google Chrome, Mozilla Firefox, Microsoft Edge oder Safari).
