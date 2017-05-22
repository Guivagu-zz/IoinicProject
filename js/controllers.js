
var countryReq = "";
var cityReq = "";
var barReq = "";

angular.module('starter.controllers', ['ionic'])

.controller('IntroCtrl', function($scope,$state) {

  $scope.comenzar = function() {
    $state.go('country');
  };

  $scope.reg = function() {
    $state.go('registro');
  };

})

.controller('RegCtrl', function($scope,$state) {

})

.controller('TabCtrl', function($scope,$state) {

})

.controller('CountryCtrl', function($scope,$state,country) {

  country.all().then(function(country){
  $scope.country = country;
});

  $scope.countryfunc = function(country) {
    countryReq = country;
    $state.go('city', {'countr': country });
  };

})

.controller('CityCtrl', function($scope,$state,$stateParams,city) {
  city.all($stateParams.countr).then(function(city){
    $scope.city = city;
  });
  $scope.country = $stateParams.countr;
  $scope.cityfunc = function(city) {
    $state.go('bar', {'city': city , 'countr': $stateParams.countr});
  };

})

.controller('BarCtrl', function($scope,$state,$stateParams,Bar) {
  Bar.all($stateParams.city).then(function(bar){
    $scope.bar = bar;
  });
  $scope.city = $stateParams.city;
  $scope.country = $stateParams.countr;
  $scope.barfunc = function(bar) {
    barReq = bar.Ref;
    cityReq = $stateParams.city;
    countryReq = $stateParams.countr;

    $state.go('tab.offer');
  };

})

.controller('ChatCtrl', function($scope, $state, $stateParams,$ionicHistory, Chat, ChatPush) {
  Chat.all(barReq,cityReq,countryReq).then(function(chat){
  $scope.chat = chat;
});

$scope.sendBomb = function(){
  if ( this.bomb != "" ){
    ChatPush.all(barReq,cityReq,countryReq,this.bomb).then(function(chat){
    $scope.chat = chat;
    });
    this.bomb = "";
  }

};

$scope.goHome = function() {
  $ionicHistory.goBack()
};

})

.controller('PeopleCtrl', function($scope,$state, $ionicHistory, People) {
  // $scope.textEvent = People.all(barReq,cityReq,countryReq);
    People.all(barReq,cityReq,countryReq).then(function(textEvent){
		$scope.textEvent = textEvent;
	});

  $scope.goHome = function() {
    $ionicHistory.goBack()
  };

})


.controller('InfoCtrl', function($scope,$state,$ionicHistory, Info) {
  Info.all(barReq,cityReq,countryReq).then(function(info){
  $scope.info = info;
});

$scope.goHome = function() {
  $ionicHistory.goBack()
};

})

.controller('OfferCtrl', function($scope,$state,$ionicHistory,Offer) {

    Offer.all(barReq,cityReq,countryReq).then(function(offer){
    $scope.offer = offer;
  });

  $scope.goHome = function() {
    $ionicHistory.goBack()
  };
});
