/**
 * Created by JuddHome on 4/15/17.
 */


// This is a function to shorten the URL

function shortUrl() {
    // Here is the AlphaNumeric String
    const alphaNumeric = 'ABCDEEFGHIJKLMNOPQRSTUVWXYZabcdeefghijklmnopqrstuvwxyz1234567890';
    const urlLength = 6;

    let genURL = '';

    for (let i = 0; i < urlLength; i += 1) {
        const rand = Math.round(Math.random() * alphaNumeric.length - 1);
        genURL += alphaNumeric.charAt(rand);
    }


    return genURL;
}

// This exports the function
exports.shortUrl = shortUrl;
