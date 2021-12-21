---
indexPage: false
title: Vitality Check
permalink: /vitality-check/74823ghdsj12ynev/
layout: layouts/theme-page.njk
header:
  illustration: none
  text: Iedereen zit anders in elkaar én iedere situatie is anders. Niet iedereen
    zal behoefte aan coaching hebben én ik kan ook niet iedereen helpen. Doe
    vandaag nog deze online test en kom erachter waar jouw behoefte ligt!
  links:
    - label: Doe de vitality check
      href: "#JotFormIFrame-213332280609349"
    - label: Gratis Adviesgesprek
      href: /adviesgesprek/
sections:
  - type: rich-text
    show: true
    component: rich-text
    text: >-
      ## Waarom een Vitality Check?


      Ontdek met deze online test hoe vitaal jij momenteel bent en waar jij behoefte aan hebt. Ik, coach Pjotr, geef je graag een aantal tips en adviezen, waarmee jij weer een aantal stappen vooruit kan maken. Als daar ook een coachingstraject uit voortkomt, dan gaan we samen dat avontuur aan!


      ### Coaching is niet voor iedereen


      Niet iedereen heeft behoefte aan coaching. Mogelijk kan ik ook helpen met een paar goede tips en adviezen. Met de vitality check kan ik bepalen hoe ik jou het best kan helpen. Tijdens een adviesgesprek wordt vanzelf duidelijk waar jij tegenaan loopt en kan ik je tips geven hoe je daar beter mee kan omgaan. 


      ### Ik kan niet alles oplossen


      Ik ben goed in wat ik doen, maar ik kan niet alles. Wellicht heb jij behoefte aan hulp die ik niet in huis heb. Met de vitality check kan ik erachter komen óf ik jou kan helpen. Als blijkt dat een coachingstraject voor jou geen oplossing is, dan help ik je graag verder op weg. Ik kan je bijvoorbeeld doorverwijzen naar zorgverlener van wie ik weet, dat hij of zij in huis heeft waar jij behoefte aan hebt.
  - type: embed
    show: true
    component: embed
    embed: >-2
      
          <iframe
            id="JotFormIFrame-213332280609349"
            title="Vitality Check"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allowfullscreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/213332280609349"
            frameborder="0"
            style="
            min-width: 100%;
            height:539px;
            border:none;"
            scrolling="no"
          >
          </iframe>
          <script type="text/javascript">
            var ifr = document.getElementById("JotFormIFrame-213332280609349");
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
            };
            if (window.addEventListener) {
              window.addEventListener("message", handleIFrameMessage, false);
            } else if (window.attachEvent) {
              window.attachEvent("onmessage", handleIFrameMessage);
            }
            </script>
  - type: rich-text
    show: true
    component: rich-text
    text: "## Heb je al alle drie de online testjes gedaan?"
  - type: topics
    showTopics: true
    component: topics
    topics:
      - title: Bioritme-test
        href: /slaap/bioritme-test/
        text: Slaap is heel persoonlijk. Hoe je slaapt, heeft alles te maken met je
          bioritme. Ken je jouw bioritme al? Doe de online test.
        icon: Module
      - title: Stress-scan
        href: /weerbaar/stress-test/
        text: Hoe hoog is jouw risico op een burn-out? Doe vandaag nog de stress-scan en
          ontdek hoe hoog jouw stressniveau is.
        icon: Module
      - text: "Wat voor emoties heb jij vandaag ervaren? Doe vandaaag nog de emotiemeter
          en kom erachter of je een 'goede' of een 'slechte' dag hebt gehad. "
        title: Emotiemeter
        href: /weerbaar/emotie-test/
        icon: Module
  - type: preview
    component: preview
    title: Wat is vitaliteitscoaching?
    description: "Wil je meer weten over vitaliteitscoaching? Kom erachter wat
      vitaliteitscoaching is en wat het voor jou kan betekenen. "
    linkLabel: Meer weten
    url: /coaching/
    image: /assets/images/mock.jpg
  - type: calandy-button
    buttonType: adviesgesprek
    component: calandy-button
seo:
  title: Vitality Check
  description: Vitality Check
---
