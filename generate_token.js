const jwt = require('jsonwebtoken');

exports.readmeLogin = function(req, res) {
    const secret = 'secret_here'

    const payload = {
        name: 'Name',

        email: 'solutions@leapyear.io',
        password: "cRQ3wwvDeQm3JFWdd6hy",
        isAdmin: true,

        iat: Math.floor(Date.now() / 1000) - 30,
    };

    const options = {
        expiresIn: '90d'
    }

    const auth_token = jwt.sign(payload, secret, options);
    const readmeUrl = 'https://guides.leapyear.io/';

    console.log(`${readmeUrl}?auth_token=${auth_token}`);
    return auth_token;
};

(function() {
    var token = exports.readmeLogin();
    // var decoded = jwt.verify(token, 'fgnbsFUwfTAGQ6fgrpw1');
    // console.log(decoded)
}());
