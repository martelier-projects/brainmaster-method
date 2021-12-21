---
indexPage: false
title: Vitality Check
permalink: /vitality-check/
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
      ## Wat krijg je bij de Vitality Check?


      Voor slechts €30,- krijg je persoonlijk advies tijdens een coachsessie. Na het maken van de online test kan je een digitale coachsessie inplannen.
  - type: text-media
    show: true
    order: image-text
    component: text-media
    title: Waarom een Vitality Check?
    imgSrc: /assets/images/gesprek-laptop.jpg
    sections:
      - text: Ontdek met deze online test hoe vitaal jij momenteel bent en waar jij
          behoefte aan hebt. Ik, coach Pjotr, geef je graag een aantal tips en
          adviezen, waarmee jij weer een aantal stappen vooruit kan maken. Als
          daar ook een coachingstraject uit voortkomt, dan gaan we samen dat
          avontuur aan!
        title: Waarom een Vitality Check?
      - title: Coaching is niet voor iedereen
        text: Niet iedereen heeft behoefte aan coaching. Mogelijk kan ik ook helpen met
          een paar goede tips en adviezen. Met de vitality check kan ik bepalen
          hoe ik jou het best kan helpen. Tijdens een adviesgesprek wordt
          vanzelf duidelijk waar jij tegenaan loopt en kan ik je tips geven hoe
          je daar beter mee kan omgaan.
      - text: Ik ben goed in wat ik doen, maar ik kan niet alles. Wellicht heb jij
          behoefte aan hulp die ik niet in huis heb. Met de vitality check kan
          ik erachter komen óf ik jou kan helpen. Als blijkt dat een
          coachingstraject voor jou geen oplossing is, dan help ik je graag
          verder op weg. Ik kan je bijvoorbeeld doorverwijzen naar zorgverlener
          van wie ik weet, dat hij of zij in huis heeft waar jij behoefte aan
          hebt.
        title: Ik kan niet alles oplossen
    imgAlt: /
  - type: embed
    show: true
    component: embed
    embed: >-
      <div id="smart-button-container">
            <div style="text-align: center;">
              <div id="paypal-button-container"></div>
            </div>
          </div>
        <script src="https://www.paypal.com/sdk/js?client-id=AWkod0ivAzE5B97AL4my60Et0tJJJmf3mkmI1O2zVA90T2c4MIwOxBl-DA56WrrOzzKKTWSgTI3e7X0f&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
        <script>
          function initPayPalButton() {
            paypal.Buttons({
              style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'paypal',
                
              },

              createOrder: function(data, actions) {
                return actions.order.create({
                  purchase_units: [{"description":"Vitality Check","amount":{"currency_code":"EUR","value":1.21,"breakdown":{"item_total":{"currency_code":"EUR","value":1},"shipping":{"currency_code":"EUR","value":0},"tax_total":{"currency_code":"EUR","value":0.21}}}}]
                });
              },

              onApprove: function(data, actions) {
                return actions.order.capture().then(function(orderData) {
                  
                  // Full available details
                  console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                  // Show a success message within this page, e.g.
                  const element = document.getElementById('paypal-button-container');
                  element.innerHTML = '';
                  element.innerHTML = '<h3>Thank you for your payment!</h3>';

                  // Or go to another URL:  actions.redirect('thank_you.html');
                  
                });
              },

              onError: function(err) {
                console.log(err);
              }
            }).render('#paypal-button-container');
          }
          initPayPalButton();
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
