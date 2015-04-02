angular.module('emailit', [])
.factory('email', [function() {

  function mailchimp(key, to, from, message) {
    console.log('In Mailchimp');
    console.log(key, to, from, message);
  }

  function mailgun(key, to, from, message) {
    console.log('In Mailgun');
    console.log(key, to, from, message);
  }

  function sendgrid(key, to, from, message) {
    console.log('In SendGrid');
    console.log(key, to, from, message);
  }

  function mailjet(key, to, from, message) {
    console.log('In MailJet');
    console.log(key, to, from, message);
  }

  return {mailgun:mailgun, mailchimp:mailchimp, sendgrid:sendgrid, mailjet:mailjet};
}]);
