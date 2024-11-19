$(document).ready(function() {

    $.getJSON('assets/emails.json', function(data) {
        const emailsInfo = data.emails;

        function fillEmail(id, emailAddress) {
            const entry = $('#' + id);
            const $a = $('<a></a>')
                .attr('href', 'mailto:' + emailAddress)
                .attr('class', 'text-light')
                .text(emailAddress);
            entry.append($a);
        }

        fillEmail('email-to-fill-0', emailsInfo['Yichao-Zhong-0']);
        fillEmail('email-to-fill-1', emailsInfo['Yichao-Zhong-1']);
        fillEmail('email-to-fill-2', emailsInfo['Yichao-Zhong-2']);
    });
});
