$(document).ready(function() {
    // Load the JSON data (assuming the file is named authors.json)
    $.getJSON('assets/authors.json', function(data) {
        // Extract authors from the JSON object
        const authorHomepages = data.authors;

        // Select each authors span and process them individually
        $('span.authors').each(function() {
            // Store the current span being processed
            const authorsSpan = $(this);

            // Get the authors' text, split by commas, and trim extra spaces
            const authorsList = authorsSpan.html().split(',').map(author => author.trim());
            console.log(authorsList);

            // Clear the current span's content
            authorsSpan.html('');

            // Iterate through each author and append their name as a link
            authorsList.forEach((author, index) => {
                // Remove the extra spaces and asterisks from the author's name
                author = author.replace(/\s+/g, ' ').trim();
                const asteriskIndex = author.indexOf('*');
                const asterisk = asteriskIndex !== -1 ? author.slice(asteriskIndex) : '';
                author = author.replace(/\*/g, '').trim();

                // Check if the author exists in the JSON and create a link
                if (author == 'Yichao Zhong') {
                    const authorBold = $('<b></b>').text(author);
                    authorsSpan.append(authorBold);
                }
                else if (authorHomepages[author]) {
                    const authorLink = $('<a></a>').attr('href', authorHomepages[author]).text(author);
                    authorsSpan.append(authorLink);
                } else {
                    // If the author is not in the JSON, just add the plain name
                    authorsSpan.append(author);
                }
                // Add the asterisk back to the author's name
                authorsSpan.append(asterisk);
                // Add a comma separator if it's not the last author
                if (index < authorsList.length - 1) {
                    authorsSpan.append(', ');
                }
            });
        });
    });
});
