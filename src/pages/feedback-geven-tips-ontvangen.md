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
      ## Feedback & Tips


      Wat leuk dat je hebt deelgenomen aan een van mijn sessies. Je bent op deze pagina terecht gekomen omdat je hebt meegedaan aan of een van mijn masterclasses, teamsessies of workshops. Zou je kort willen vertellen wat je van de sessie vond? Daar maak je mij heel blij mee! Je kan dan ook gelijk aangeven of je de adviezen en tips wil ontvangen waar ik tijdens de sessie over vertelde.
  - type: embed
    show: true
    component: embed
    embed: >-2
      
          <iframe
            id="JotFormIFrame-220413922468050"
            title="Feedback & Funnel Formulier"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allowfullscreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/220413922468050"
            frameborder="0"
            style="
            min-width: 100%;
            height:539px;
            border:none;"
            scrolling="no"
          >
          </iframe>
          <script type="text/javascript">
            var ifr = document.getElementById("JotFormIFrame-220413922468050");
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
  - type: buttons
    component: buttons
    buttons:
      - label: Ik wil feedback geven & tips krijgen
        link: https://form.jotform.com/220413922468050
  - type: preview
    component: preview
    title: Online Testjes
    description: "Doe één van de drie gratis online testjes: Bioritme-test,
      Stress-scan óf Emotiemeter."
    linkLabel: Bekijk testjes
    url: /online-testjes/
    image: /assets/images/hand-laptop-pen.jpg
  - type: preview
    component: preview
    title: Blogposts over Slaap
    description: "Wil je meer weten over slaap? Lees dan een van mijn blogposts over
      slaap. "
    linkLabel: Blog lezen
    url: /blog/
    image: /assets/images/sleep-optimalization.jpg
  - type: preview
    component: preview
    title: Ontdek vitaliteitscoaching
    description: Voel je gezonder, energieker en gelukkiger door persoonlijke
      coaching. Weten wat het kan betekenen? Lees meer over vitaliteitscoaching.
    linkLabel: Ik wil meer weten
    url: /coaching/
    image: /assets/images/mock.jpg
seo:
  title: Feedback & Tips
  description: Feedback & Tips
---
