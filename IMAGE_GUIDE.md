# Handleiding voor het Toevoegen van Afbeeldingen

## Achtergrondafbeelding Toevoegen

Om een aangepaste achtergrondafbeelding toe te voegen aan de hero sectie van de homepagina:

1. Plaats je achtergrondafbeelding in de `/public` map met de naam `background.jpg` (of een andere naam naar keuze)

2. Open het bestand `app/styles/global.css`

3. Zoek naar de `.section-hero` sectie (rond regel 119)

4. Verwijder de commentaarmarkeringen (`/*` en `*/`) van de volgende regels:
   ```css
   background-image: url('/background.jpg');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   ```

5. *Optioneel:* Voor betere leesbaarheid van tekst over de achtergrondafbeelding, kun je ook de overlay activeren door de commentaarmarkeringen te verwijderen van:
   ```css
   .section-hero::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background: rgba(255, 255, 255, 0.85);
       z-index: 0;
   }
   
   .section-hero .container {
       position: relative;
       z-index: 1;
   }
   ```

## Docentfoto Toevoegen

Om de foto van de docent toe te voegen:

1. Plaats je docentfoto in de `/public` map met de naam `teacher-photo.jpg`

2. De foto wordt automatisch weergegeven op de homepagina in de "Ontmoet je Instructeur" sectie

3. De placeholder-tekst onder de foto verdwijnt automatisch zodra je een echte afbeelding toevoegt

## Aanbevolen Afbeeldingsformaten

- **Achtergrondafbeelding**: Minimaal 1920x1080px, JPEG of PNG formaat
- **Docentfoto**: Minimaal 800x800px, JPEG formaat, portretoriëntatie werkt het best

## Opmerking

Alle tekst op de website is nu in het Nederlands. De TypeScript lintfouten die je mogelijk ziet in `contact.tsx` en `book.tsx` zijn pre-existente type-definities kwesties en beïnvloeden de functionaliteit niet.
