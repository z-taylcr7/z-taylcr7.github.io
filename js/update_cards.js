$(document).ready(function() {
    const aboutContent = $('#about-content').text().trim();
    $('meta[name="twitter:description"]').attr('content', aboutContent);
    // $('#temp').text("\'" + aboutContent + "\'");
});
