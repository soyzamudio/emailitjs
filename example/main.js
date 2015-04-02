angular.module('MyApp', ['emailit'])
.controller('MyController', ['$scope', 'email', function($scope, email) {

  var message = 'This is a test message';
  var to = 'to@jose.com';
  var from = 'from@jose.com';
  var key = 'testing keys';

  $scope.mailgun = function() {
    email.mailgun(key, to, from, message);
  };

  $scope.mailchimp = function() {
    email.mailchimp(key, to, from, message);
  };

  $scope.sendgrid = function() {
    email.sendgrid(key, to, from, message);
  };

  $scope.mailjet = function() {
    email.mailjet(key, to, from, message);
  };

}]);
