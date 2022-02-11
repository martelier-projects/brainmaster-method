---
indexPage: true
title: Feedback geven & Tips ontvangen
permalink: /feedback-en-tips/
layout: layouts/default-template.njk
header:
  illustration: none
sections:
  - type: in-page-nav
    component: in-page-nav-for-flexibles
  - type: rich-text
    show: true
    component: rich-text
    text: >-
      ## Wat is een Vitality Check?


      De Vitality Check is een korte online test. Ik, coach Pjotr, leer je namelijk graag beter kennen! Ontdek met deze online test hoe vitaal jij momenteel bent en waar jij behoefte aan hebt. Heb je behoefte aan vitaliteitscoaching, dan is dit een mooie voorbereiding.


      ### Coaching is niet voor iedereen noodzakelijk


      Met de Vitality Check kan ik bepalen hoe ik jou het beste kan helpen. Voor lang niet iedereen blijkt coaching noodzakelijk. Mogelijk heb je voldoende aan een paar -voor jou- geschikte tips en adviezen.


      ### Ik kan je helpen, maar niet alles oplossen


      Als je het coachingstraject aangaat, heb ik er alle vertrouwen in dat ik je kan helpen om energieker, gezonder en vitaler te worden, maar ik kan niet alles. Met de Vitality Check kan ik erachter komen óf ik jou kan helpen. Wellicht heb jij behoefte aan specifieke hulp die ik niet in huis heb. Als blijkt dat een coachingstraject jou niet of onvoldoende gaat helpen, dan zal ik je doorverwijzen naar een zorgverlener van wie ik weet, dat hij of zij in huis heeft waar jij behoefte aan hebt.
  - type: rich-text
    show: true
    component: rich-text
    text: "## Doe de online test"
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
  - type: preview
    component: preview
    title: Online Intake
    description: Ga terug naar de online intake nadat je de vitality check hebt gedaan.
    linkLabel: Terug
    url: /online-intake/
    image: /assets/images/hand-laptop-pen.jpg
seo:
  title: .c
  description: d
---
