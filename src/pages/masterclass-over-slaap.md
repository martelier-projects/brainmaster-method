---
indexPage: true
title: Slaap Masterclass
permalink: /masterclass/slaap/
layout: layouts/default-template.njk
header:
  illustration: slaap
  links: []
sections:
  - type: embed
    show: true
    component: embed
    embed: >-
      <div id="eventbrite-widget-container-239883105827"></div>


      <script src="https://www.eventbrite.nl/static/widgets/eb_widgets.js"></script>


      <script type="text/javascript">
          var exampleCallback = function() {
              console.log('Order voltooid.');
          };

          window.EBWidgets.createWidget({
              // Required
              widgetType: 'checkout',
              eventId: '239883105827',
              iframeContainerId: 'eventbrite-widget-container-239883105827',

              // Optional
              iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
              onOrderComplete: exampleCallback  // Method called when an order has successfully completed
          });
      </script>
seo:
  title: Masterclass
  description: masterclass
---
