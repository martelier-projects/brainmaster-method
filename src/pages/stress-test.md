---
indexPage: false
title: Hoe hoog is jouw risico op een burn-out?
permalink: /weerbaar/stress-test/
layout: layouts/theme-page.njk
header:
  illustration: home
  text: Als je te lang en te vaak gestrest bent, kun je overspannen raken. Ben je
    te lang overspannen, dan is de kans op een burn-out groter. En dat wil je
    natuurlijk voorkomen. Doe nu de stress-scan en ontdek hoe hoog jouw
    stressniveau is.
  links:
    - label: Adviesgesprek
      href: /weerbaar/adviesgesprek/
    - label: Doe de emotiemeter
      href: /weerbaar/emotie-test/
sections:
  - type: embed
    show: true
    component: embed
    embed: >-
      <iframe
            id="JotFormIFrame-212433463411344"
            title="Stress Test"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allowfullscreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/212433463411344"
            frameborder="0"
            style="
            min-width: 100%;
            height:539px;
            border:none;"
            scrolling="no"
          >
          </iframe>
          <script type="text/javascript">
            var ifr = document.getElementById("JotFormIFrame-212433463411344");
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
  - type: preview
    component: preview
    title: Herontdek jouw mentale balans
    description: "Iedereen zit weleens wat minder goed in z'n vel. Stress hoort bij
      het leven, maar het mag je niet belemmeren in je dagelijkse bezigheden.
      Naast gepieker en stress kunnen negatieve emoties en gedachten je ook in
      de weg staan. Waar loop jij tegen aan: stress of negatieve gedachten?"
    linkLabel: Maak een keuze
    url: /weerbaar/
    image: /assets/images/mock.jpg
seo:
  title: Weerbaar - Stress test
  description: Weerbaar - Stress test
---
