# Online spelprogramma

## Doel
Een online spelprogramma dat een tv-spel nabootst. Een presentator stelt meerkeuzevragen; drie spelers beantwoorden die en de andere deelnemers voorspellen welke spelers juist antwoorden.

## Doelgroep
Een presentator en een groep deelnemers die samen een spel spelen.

## Eerste versie
- De presentator maakt een spel aan en deelt een spelcode.
- Deelnemers voeren de code in en kiezen zelf een bijnaam.
- De presentator wijst drie deelnemers aan als spelers; de rest voorspelt.
- De presentator voert de meerkeuzevragen één voor één in en geeft het juiste antwoord aan.
- Spelers antwoorden op hun eigen toestel; de andere deelnemers voorspellen op hun eigen toestel.
- De stand wordt live bijgewerkt en automatisch gesorteerd op verdiende punten.
- Elke speler die juist antwoordt, krijgt een puntenpot van 100 punten. Die wordt gedeeld met de voorspellers die voor die speler kozen.

## Nog niet
- Een namenlijst uploaden.
- Vragen, deelnemers of scores bewaren om later verder te spelen.
- Accounts voor deelnemers.

## Platform
Een website die op computers en telefoons in de browser werkt, zodat iedereen vanaf het eigen toestel kan meedoen.

## Frameworks en bouwstenen
React met Vite voor de interactieve app. Firebase Realtime Database deelt de spelstand direct tussen toestellen. De app is bedoeld voor kleinschalig gebruik binnen de gratis gebruiksgrenzen van Firebase; groter gebruik kan een betaald plan vereisen.

## Opslag
Spelgegevens zijn alleen nodig tijdens één spel en worden verwijderd wanneer de presentator het spel beëindigt. Deelnemers gebruiken bijnamen. Plaats geen echte leerlingnamen of andere persoonsgegevens in de publieke repository of website, tenzij de school hiervoor een goedgekeurde oplossing heeft.

## Vormgeving
Gebruikt het design system in `design-system/`.

## Eisen
- De 100 punten worden gelijk verdeeld over de juist antwoordende speler en de voorspellers die voor die speler kozen. Scores worden naar beneden afgerond op hele punten; restpunten vervallen.

## Publicatie
De website wordt gratis gepubliceerd via GitHub Pages. Elke wijziging die in de hoofdbranch komt, publiceert de site automatisch. Firebase verzorgt apart de tijdelijke, live gedeelde spelgegevens.