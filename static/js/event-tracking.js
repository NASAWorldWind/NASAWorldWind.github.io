// Get elements by tag name and track outbound links

var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {

    var internal = (elements[i].host === 'worldwind.arc.nasa.gov'));

    if (!internal) {
        elements[i].onclick = function handleOutboundLinkClicks(event) {

            var findHref = function (element) {
                if (element.href) {
                    return element.href;
                } else if (element.parentElement) {
                    return findHref(element.parentElement);
                } else {
                    return null;
                }

            };

            var targetHref = findHref(event.target);

            ga('send', 'event', {
                eventCategory: 'Outbound Link',
                eventAction: 'click',
                eventLabel: targetHref,
                transport: 'beacon'
            });
        }
    }
}