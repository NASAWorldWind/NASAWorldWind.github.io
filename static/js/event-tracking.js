// Get elements by tag name and track outbound links

var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {

    var internal = (elements[i].host === 'worldwind.arc.nasa.gov') || (elements[i].host === 'NASAWorldWind.github.io');

    if (!internal) {
        elements[i].onclick = function handleOutboundLinkClicks(event) {

            var targetHref = event.currentTarget.href;

            ga('send', 'event', {
                eventCategory: 'Outbound Link',
                eventAction: 'click',
                eventLabel: targetHref,
                transport: 'beacon'
            });
        }
    }
}