```
NOTICE!!
THIS PROJECT IS NOT FINISHED, THIS IS JUST THE README FILE FOR FUTURE REFERENCE
```

# eMailit.js [![Build Status](https://travis-ci.org/soyzamudio/open-market.svg?branch=master)](https://travis-ci.org/soyzamudio/open-market)

With `eMailit.js` you don't have to worry about going through the hassle of setting up a mailing provider and the terrible process of understanding their API docs.

With a single line of code you will be able to select the mailing provider you need and pass in the information you need to be sent and you are **done**!

# Providers

We are working hard to add as many providers as we can, this is the list of providers with which you can use `eMailit.js`:

* [MailChimp](http://malchimp.com)
* [MailGun](http://mailgun.com)
* [SendGrid](http://sendgrid.com)
* [MailJet](http://mailjet.com)

# Installing

Using bower:

```
bower install --save emailit
```

Using npm:

```
npm install --save emailit
```

Manual installation:

1. Download the files
2. Copy emailit.js to your project's folder

# Getting API Keys

#### Coming Soon.

# Usage

`eMailit.js` is extremely easy to use. Add the script to your `index.html`

```javascript
<script src='vendor/emailit/emailit.js'></script>
```

Inject it into your dependencies:

```javascript
angular.module('MyApp', ['emailit'])
```

And to use it simple select your provider and pass it in the variables required:

```javascript
angular.module('MyApp', ['emailit'])
.controller('MyController', ['$scope', 'email', function($scope, email) {
  // REPLACE mailgun WITH ANY PROVIDER: mailgun, mailchimp, sendgrid, mailjet
  email.mailgun(API KEY, TO_EMAIL, FROM_EMAIL, MESSAGE_TO_SEND, function(err, response) {
    // DO WHATEVER AFTER THE EMAIL IS SENT...
  });
}]);
```

# Author

Jose Zamudio<br>
jose@josezamudio.me<br>
[@soyzamudio](http://twitter.com/soyzamudio)<br>
http://josezamudio.me

# Contributions

You are welcome to create issues and pull requests!

# License

> The MIT License
>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
>
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
