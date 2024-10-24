# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Keysha Manucan

  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://store.epicgames.com/en-US/

  #### Screenshot(s) van de eerste pagina (small screen): 
  EpicGames Store  
  <img src="readme-images/IMG_6870.jpeg" width="200px" alt="De homepage van de EpicGames website. De pagina heeft 3 verschillende tabs: Discover, Browse en News. Elk tab weergeeft verschillende soorten informatie">

  #### Screenshot(s) van de tweede pagina (small screen):
  EpicGames Unreal Engine  
  <img src="readme-images/IMG_6872.jpeg" width="200px" alt="EpicGames Unreal Engine pagina met informatie over Unreal Engine en hoe je het kan gebruiken.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  Screenreader test: 
  - "Back to top" knop in de footer zorgt ervoor dat je weer helemaal bovenaan de pagina komt, maar de screenreader leest niet vanaf het begin van de pagina maar weer verder waar die was bij de footer. 

  <img src="readme-images/SA_screenreader.png" width="300px" alt="Screenshot van de footer van de EpicGames website, element fortnite is gemarkeerd.">

  - Knoppen naar volgende en vorige werken op de slider, maar de screenreader vertelt niet of je op de volgende/vorige slide bent.

  <img src="readme-images/SA2_screenreader.png" width="300px" alt="Screenshot van de End of Summer Sale Spotlight slider.">


  WCAG checklist:
  - De HTML validator geeft heel veel errors over de pagina aan. 
  - De pagina voeldoet niet aan de media (video en audio) eisen.
  - De website steunt geen dark en light mode.
  - De video op de Unreal Engine pagina kan niet worden gepauseerd.
  - De website voldoet niet aan de prefers-reduced-motion media query. 

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/Pagina_1.jpg" width="375px" alt="breakdown van de homepagina">
  De eerste pagina dat ik ga uitwerken: Epic Games Store.

  <img src="readme-images/Pagina_2.jpg" width="375px" alt="breakdown van de Unreal Engine pagina">
  De tweede pagina dat ik ga uitwerken: Unreal Engine.


  ### dynamisch deel (bijv menu): 
  <img src="readme-images/Menu.jpg" width="375px" alt="breakdown van de menu van beide pagina's">
  De menu van beide pagina's dat ik ga uitwerken.

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

Vragen die ik wil stellen tijdens het voortgangsgesprek:
- Hoe open ik een andere tab/section op dezelfde pagina?
De eerste pagina dat ik wil uitwerken is de Homepagina van de site zelf. 
Op de homepagina zijn er drie verschillende categorieën waaruit je kan kiezen: Discover, Browse en News.
Elke tab laat verschillende soorten content zien, maar je blijft op dezelfde pagina.

<img src="readme-images/IMG_6901.jpeg" width="200px" alt="Discover tab van de pagina">
<img src="readme-images/IMG_6902.jpeg" width="200px" alt="Dropdown waar alle tabs en categorieën te zien zijn">
<img src="readme-images/IMG_6903.jpeg" width="200px" alt="Browse tab van de pagina">
<img src="readme-images/IMG_6904.jpeg" width="200px" alt="News tab van de pagina">

Vraag aan docent:
Op mijn pagina is een download button te zien, moet ik dit ook laten werken?
<img src="readme-images/IMG_6905.jpeg" width="400px" alt="Blauwe install button">


  ### Agenda voor meeting
  samen met je groepje opstellen

  Diya:
  - Rating
  - Verschillende tabs openen op dezelfde pagina

  Thi: 
  - Lijnen naast de titel
  - Foto's veranderen wanneer je erover heen hovert

  Giulietta:
  - Bubbels komen uit de cursor
  - Veranderen van focus, van responsive naar surface plane

  Keysha: 
  - Verschillende tabs openen op dezelfde pagina
  - Tabel samenvoegen in carousel

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Section switch -> Hoeft niet te maken
  - Hover werkte niet -> Hover werkt niet op telefoon hover
  - Hover image, transition, opacity
  - Grid maken voor je lijst of in je lijst
  - h2::before{}
  - <h1><img src="" alt="website titel"></h1>

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  
  Tijdens de les liet ik aan de docent zien wat ik had. Ik liet allebei mijn carousellen zien en wat ik had gebruikt en gedaan om de carousel te maken. De docent vertelde mij dat het niet toegestaan was om een library te gebruiken, hierdoor moet ik op een andere manier uitzoeken hoe je een carousel moet maken zonder library. 

  <img src="readme-images\Schermafbeelding 2024-10-01 195446.png" width="200px" alt="Schermafbeelding van carousel">
  <img src="readme-images\Schermafbeelding 2024-10-01 200931.png" width="400px" alt="Schermafbeelding van gebruikte library">

  Epic games heeft twee rijen aan navigatie op mobiel. De normale navigatie en de navigatie op de store pagina.

   <img src="readme-images\epic_nav.png" width="200px" alt="Schermafbeelding van de epic games website zelf">

   Dit probeerde ik na te maken. Ik wilde grid hiervoor gebruiken. Ten eerste heb ik twee containers met behulp van div om de verschillende secties heen gezet, ik maakte gebruik van div omdat ik niet wist welke andere container ik moest gebruiken. 

  <img src="readme-images\div_container.png" width="200px" alt="Schermafbeelding van mijn code"> 

  Maar dit zorgde ervoor dat het er chaotischer uitzag en wist ik niet helemaal hoe ik verder moest.

  <img src="readme-images\nav_fixen.png" width="200px" alt="Schermafbeelding van mijn gecodeerde website">

  Wat wil ik vragen tijdens het 2e voortgang gesprek:
  - Hoe verander je de kleur van een svg?
  - Hoe krijg ik de tweede nav balk?
  - Waarom is er aan de boven kant van mijn site een kleine pijl te zien?
    
  ### Agenda voor meeting
  samen met je groepje opstellen

  Diya:
  - Carousel maken
  - Problemen met nth-of-child

  Thi: 
  - Navigatie button op de juiste plek
  - Img size

  Giulietta:
  - Video op achtergrond goed krijgen
  - Classes en id's
  - Nav sticky maken

  Keysha: 
  - Hoe verander je de kleur van een svg?
  - Hoe krijg ik de tweede nav balk?
  - Waarom is er aan de boven kant van mijn site een kleine pijl te zien?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Font downloaden op google: Reset refresh. Inspect -> Network -> Font
  - nth-of-type telt van 1t/m verder
  - Mag twee navs
  - Position: fixed, om elementen vast te zetten. top: 0, right: 0, left: 0,
  - Sluitmenu naar rechts
  - Justify-self: end;

  - Lelijke manier icoon veranderen: 
  filter: invert(1); van wit naar zwart of andersom

  - Mooie manier icoon veranderen:
  SVG openen in studio code, de link pakken en in je html zetten. SVG benoemen in de CSS en kleur veranden (fill: kleur;)

  ### Stand van zaken

  Momenteel heb ik twee problemen waar ik de oplossing niet voor weet. 
  Ik krijg een error op mijn code bij <button area-hidden="true">. Ik heb deze code vorig jaar bij mijn vorige website gebruikt en toen gaf die geen error maar nu wel. 

  <img src="readme-images\error_blocked_area_hidden.png" width="400px" alt="Schermafbeelding van error code blocked area hidden">

  Verder verscijnt de tekst dat in mijn nav zit in op de pagina, terwijl het "hidden" moet blijven. Als ik op de toolbar klik dan verschijnt hij niet. Waar zou dit aan kunnen liggen?

  <img src="readme-images\probleem_2.png" width="400px" alt="Schermafbeelding van probleem met nav bar">
  <img src="readme-images\probleem_1.png" width="400px" alt="Schermafbeelding van probleem met nav bar">



</details>




## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  html validator error codes: 
  - H1 mag niet in een button element
  - SVG's errors en warnings
  - H6 mag niet in een ul element

    

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
