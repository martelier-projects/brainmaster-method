---
indexPage: false
permalink: /slaap/
layout: layouts/theme-page.njk
text: "Voel je gezonder, energieker en gelukkiger in enkele weken door een uniek
  wetenschappelijk perspectief op mentaal welzijn. Laagdrempelig en volledig
  digitaal. "
title: Word weer energiek wakker zonder slaapmedicatie
header:
  text: Maak op een duurzame manier een einde aan slapeloze nachten en ga weer met
    energie de dag tegemoet, zonder hulp van medicatie.
  illustration: home
  links:
    - label: Doe de bioritme test
      href: /
sections:
  - type: rich-text
    show: true
    component: rich-text
    text: >-
      ## Word jij moe wakker óf ben je bang om naar bed te gaan?


      Er zijn twee slechte slapers. Zij die te vaak moe wakker worden en met tegenzin aan de dag beginnen. En slechte slapers die al heel lang niet goed slapen en daarom bang zijn om naar bed te gaan, bang om weer een nacht nauwelijks te slapen. Wat voor slaper ben jij?
  - imgSrc: /assets/images/artboard-2.png
    imgCaption: ""
    imgAlt: "- "
    sections:
      - text: >-
          “Als ’s ochtends die nare wekker gaat kan ik maar met moeite uit bed
          komen. Ik ben lang wazig en ik heb echt koffie nodig om wakker te
          worden. De hele dag zit ik laag in mijn energie en pas aan het einde
          van de dag leef ik een beetje op.”


          Herkenbaar? Ontdek hoe je voorgoed afrekent met die dodelijke vermoeidheid en hoe jij ’s ochtends weer met een lach op je gezicht aan de dag kan beginnen.
        title: Ik word toe vaak moe wakker
      - title: Energiek aan de dag beginnen
        text: >-
          Geniet weer van iedere dag, wanneer je firs wakker wordt. Begin de dag
          weer met een schone lei en laat je zorgen achter je. Wordt eindelijk
          echt uitgerust wakker en laat de druk van je afglijden. De ochtenden
          worden weer jouw moment om te presteren. 


          De oplossing lijkt vaak voor de hand te liggen. Je moet langer slapen. Helaas makkelijker gezegd dan gedaan. En toch leidt langer slapen niet altijd tot meer energie.
      - title: "Langer slapen werkt niet "
        text: "Alleen met voldoende diepe slaap kan je lichaam herstellen. Na een
          stressvolle en chaotische dag heb je niet zozeer lange slaap nodig,
          maar diepe slaap. Diepe slaap repareert letterlijk de schade en
          schoont de troep in je hersenen op. "
    order: text-image
    title: Ik word moe wakker
    type: text-media
    component: text-media
    show: true
  - type: embed
    show: true
    component: embed
    embed: >-
      <script type="text/javascript"
      src="[https://form.jotform.com/jsform/212432325111337](https://form.jotform.com/jsform/212432325111337)"></script>

      <iframe
            id="JotFormIFrame-212432325111337"
            title="Bioritme Test"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allowfullscreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/212432325111337"
            frameborder="0"
            style="
            min-width: 100%;
            height:539px;
            border:none;"
            scrolling="no"
          >
          </iframe>
          <script type="text/javascript">
            var ifr = document.getElementById("JotFormIFrame-212432325111337");
            if (ifr) {
              var src = ifr.src;
              var iframeParams = [];
              if (window.location.href && window.location.href.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
              }
              if (src && src.indexOf("?") > -1) {
                iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                src = src.substr(0, src.indexOf("?"))
              }
              iframeParams.push("isIframeEmbed=1");
              ifr.src = src + "?" + iframeParams.join('&');
            }
            window.handleIFrameMessage = function(e) {
              if (typeof e.data === 'object') { return; }
              var args = e.data.split(":");
              if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
              if (!iframe) { return; }
              switch (args[0]) {
                case "scrollIntoView":
                  iframe.scrollIntoView();
                  break;
                case "setHeight":
                  iframe.style.height = args[1] + "px";
                  break;
                case "collapseErrorPage":
                  if (iframe.clientHeight > window.innerHeight) {
                    iframe.style.height = window.innerHeight + "px";
                  }
                  break;
                case "reloadPage":
                  window.location.reload();
                  break;
                case "loadScript":
                  if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
                  var src = args[1];
                  if (args.length > 3) {
                      src = args[1] + ':' + args[2];
                  }
                  var script = document.createElement('script');
                  script.src = src;
                  script.type = 'text/javascript';
                  document.body.appendChild(script);
                  break;
                case "exitFullscreen":
                  if      (window.document.exitFullscreen)        window.document.exitFullscreen();
                  else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
                  else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
                  else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
                  else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
                  break;
              }
              var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
              if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
                iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
              }
            };
            window.isPermitted = function(originUrl, whitelisted_domains) {
              var url = document.createElement('a');
              url.href = originUrl;
              var hostname = url.hostname;
              var result = false;
              if( typeof hostname !== 'undefined' ) {
                whitelisted_domains.forEach(function(element) {
                    if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                        result = true;
                    }
                });
                return result;
              }
            }
            if (window.addEventListener) {
              window.addEventListener("message", handleIFrameMessage, false);
            } else if (window.attachEvent) {
              window.attachEvent("onmessage", handleIFrameMessage);
            }
            </script>
  - type: text-media
    show: true
    order: text-image
    component: text-media
    title: "Bang om naar bed te gaan "
    imgSrc: /assets/images/artboard-2.png
    imgAlt: "-"
    sections:
      - title: "Angst om naar bed te gaan "
        text: >-
          “Al ruim voordat ik naar bed ga begint het. De angst slaat letterlijk
          in. Bang dat ik weer niet kan slapen. Bang dat ik weer de hele nacht
          wakker zal liggen. Na al die onsuccesvolle pogingen om beter te
          slapen, vervliegt de hoop.”


          Herken jij jezelf hierin? Helaas kot dit maar te vaak voor. Toch kan ook jij weer het vertrouwen herwinnen in je slaapvermogen en zonder angst naar bed gaan.
      - title: Slaap weer als een roos
        text: >
          Iedereen heeft van nature het vermogen om te slapen. Ook jij kon
          vroeger zonder problemen de hele nacht doorslapen. Ga weer zonder
          zorgen naar bed en verlang weer naar die fijne geur van je schone
          lakens. Val weer zonder problemen binnen een half uur in slaap. 


          Je natuurlijke slaapvermogen kan je weer terugkrijgen. Slapeloze nachten hebben namelijk altijd een oorzaak. Vaak is de oorzaak meerledig. Hierdoor is de oorzaak vaak complex.
      - title: "101 slaapsaboteurs "
        text: >-
          Slaapproblemen zijn meerledig en de oplossing is vaak complex. Alleen
          wanneer aan alle 101 voorwaarden wordt voldaan zal het probleem
          verholpen zijn. Hierdoor zal de moed je halverwege vaak in de schoenen
          zinken. 


          Slaapproblemen zijn persoonlijk en verdienen een persoonlijke aanpak. We rekenen stap voor stap af met de stoorzenders, zowel biologisch als psychologisch.
  - type: preview
    component: preview
    title: Onderzoek of slaapcoaching voor jou is
    description: "Ontdek hoe je voorgoed afrekent met extreme vermoeidheid en je een
      energieker gevoel krijgt die je de hele dag vasthoudt. Jouw slaapprobleem
      is uniek en verdient dus een persoonlijke aanpak. Samen kunnen we
      onderzoeken hoe slaapcoaching jou kan helpen. Met gratis adviesgesprek zet
      jij de eerste stap naar een zorgeloze nachtrust. "
    linkLabel: Ja, dit wil ik!
    linkUrl: /slaap/adviesgesprek/
    image: /assets/images/mock.jpg
illustration: home
links:
  - label: This is the label
    href: /
seo:
  title: Slaap
  description: Slaap
---
