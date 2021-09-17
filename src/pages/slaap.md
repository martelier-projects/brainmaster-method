---
indexPage: false
permalink: /slaap/
layout: layouts/theme-page.njk
text: "Voel je gezonder, energieker en gelukkiger in enkele weken door een uniek
  wetenschappelijk perspectief op mentaal welzijn. Laagdrempelig en volledig
  digitaal. "
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
  - type: preview
    component: preview
    title: Titlessss
    description: Description
    linkLabel: Link label
    linkUrl: /
    image: /assets/images/car-1.jpg
  - type: topics
    showTopics: true
    component: topics
    topics:
      - title: Topic 1
        text: en abonnement is gericht op duurzame veranderingen. Na het afronden van
          een coachingstraject blijf je werken aan een vitaal leven. Je houdt
          toegang to
        icon: Kennismaking
        href: /
      - title: Topic 2
        text: en abonnement is gericht op duurzame veranderingen. Na het afronden van
          een coachingstraject blijf je werken aan een vitaal leven. Je houdt
          toegang to
        icon: Slapen
      - title: Topic 3
        text: en abonnement is gericht op duurzame veranderingen. Na het afronden van
          een coachingstraject blijf je werken aan een vitaal leven. Je houdt
          toegang to
        icon: Traject
  - type: text-media
    show: true
    order: text-image
    component: text-media
    image: /assets/images/artboard-2.png
    title: Ik word te vaak moe wakker
    imgAlt: image
    imgCaption: "“Als ’s ochtends die nare wekker gaat kan ik maar met moeite uit
      bed komen. Ik ben lang wazig en ik heb echt koffie nodig om wakker te
      worden. De hele dag zit ik laag in mijn energie en pas aan het einde van
      de dag leef ik een beetje op.”  Herkenbaar? Ontdek hoe je voorgoed
      afrekent met die dodelijke vermoeidheid en hoe jij ’s ochtends weer met
      een lach op je gezicht aan de dag kan beginnen. "
illustration: home
title: Word weer energiek wakker zonder slaapmedicatie
links:
  - label: This is the label
    href: /
seo:
  title: Slaap
  description: Slaap
---
