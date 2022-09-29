---
indexPage: false
title: Begin met de Vitality Check
permalink: /vitality-check/74823ghdsj12ynev/
layout: layouts/default-template.njk
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


      ### Coaching is niet voor iedereen noodzakelijk


      Met de Vitality Check kan ik bepalen, hoe ik jou het best kan helpen.  Voor lang niet iedereen blijkt coaching namelijk noodzakelijk. Mogelijk heb je voldoende aan een paar - voor jou - geschikte tips en adviezen. 


      ### Ik kan je helpen, maar niet alles oplossen


      A﻿ls je het coachingstraject aangaat, heb ik er alle vertrouwen in dat ik je kan helpen om energieker, gezonder en vitaler te worden. Maar ik kan niet alles. Met de Vitality Check kan ik erachter komen óf ik jou kan helpen. Wellicht heb jij behoefte aan specialistische hulp, die ik niet in huis heb. Als blijkt dat een coachingstraject jou niet voldoende gaat helpen, dan zal ik je doorverwijzen naar een zorgverlener van wie ik weet, dat hij of zij in huis heeft, waar jij behoefte aan hebt.
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
    text: >-
      ## Plan een coachsessie


      Je mag zelf een afspraak met mij, coach Pjotr, inplannen. De coachsessie duurt anderhalf uur en zal plaatsvinden via een videobelgesprek.
  - type: embed
    show: true
    component: embed
    embed: >-
      <!-- Calendly inline widget begin -->

      <div class="calendly-inline-widget" data-url="https://calendly.com/pjotr-peulen/coachsessie-vitality-check?hide_gdpr_banner=1&primary_color=eb5c36" style="min-width:320px;height:630px;"></div>

      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

      <!-- Calendly inline widget end -->
  - type: rich-text
    show: true
    component: rich-text
    text: >-
      ## Deelnemen aan het gesprek


      Zodra het tijd is voor de coachsessie kan je onderstaande knop gebruiken om deel te nemen.
  - type: buttons
    component: buttons
    buttons:
      - label: Deelnemen aan coachsessie
        link: /videobellen/
  - type: preview
    component: preview
    title: Wat is vitaliteitscoaching?
    description: "Wil je meer weten over vitaliteitscoaching? Kom erachter wat
      vitaliteitscoaching is en wat het voor jou kan betekenen. "
    linkLabel: Meer weten
    url: /coaching/
    image: /assets/images/mock.jpg
seo:
  title: Vitality Check
  description: Vitality Check
---
