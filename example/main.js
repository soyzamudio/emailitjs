angular.module('MyApp', ['emailit'])
.controller('MyController', ['$scope', 'email', function($scope, email) {

  var mailchimpKey = 'DV6iDBf0ZF_bcscqfJalXw';
  var user = 'soyzamudio';
  var key = 'tuturutu1';

  $scope.mail = {};

  $scope.mailgun = function() {
    email.mailgun(key, $scope.mail.to, $scope.mail.from, $scope.mail.message, $scope.mail.subject);
  };

  $scope.mandrill = function() {
    email.mandrill(mailchimpKey, $scope.mail.to, $scope.mail.from, $scope.mail.message, $scope.mail.subject)
    .then(function(response) {
      console.log(response);
    });
  };

  $scope.sendgrid = function() {
    email.sendgrid(user, key, $scope.mail.to, $scope.mail.from, $scope.mail.message, $scope.mail.subject)
    .then(function(response) {
      console.log(response);
    });
  };

  $scope.mailjet = function() {
    email.mailjet(key, $scope.mail.to, $scope.mail.from, $scope.mail.message);
  };

}]);
