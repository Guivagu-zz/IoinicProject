
angular.module('starter.services', [])

.service('country', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data


  return {
    all: function() {
      var countries;
      return $http.get('http://192.168.1.136:9990/country').then(function(result) {
      countries = result.data;
      return countries;
      });
    }
  }
})

.service('city', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  return {
    all: function(countryReq) {

      var cities;
      //Might use a resource here that returns a JSON array
      return $http({
        method: 'POST',
        url: 'http://192.168.1.136:9990/city',
        data: {'country': countryReq,
                'caca': "relleneo"
              }
      }).then(function successCallback(result) {
        cities = result.data;
        return cities;
      });


    }
  };
})

.service('Bar', function($http) {

  return {
    all: function(cityReq) {

      var bares;
      //Might use a resource here that returns a JSON array
      return $http({
        method: 'POST',
        url: 'http://192.168.1.136:9990/bar',
        data: {'city': cityReq,
                'caca': "relleneo"
              }
      }).then(function successCallback(result) {
        bares = result.data;
        return bares;
      });


    }
  };

})

.service('People', function($http) {

  // Some fake testing data

  return {
    all: function(barReq,cityReq,countryReq) {

      var textEvent;
      //Might use a resource here that returns a JSON array

      return $http({
        method: 'POST',
        url: 'http://192.168.1.136:9999/events',
        data: { 'bar': barReq,
                'city': cityReq,
                'country': countryReq
              }
      }).then(function successCallback(result) {
        textEvent = result.data;
        return textEvent;
      });


    }
  };
})

.service('Offer', function($http) {


  return {
    all: function(barReq,cityReq,countryReq) {

      var offer;
      //Might use a resource here that returns a JSON array

      return $http({
        method: 'POST',
        url: 'http://192.168.1.136:9999/offers',
        data: { 'bar': barReq,
                'city': cityReq,
                'country': countryReq
              }
      }).then(function successCallback(result) {
        offer = result.data;
        return offer;
      });


    }
  };

})

.service('Info', function($http){
  return {
    all: function(barReq,cityReq,countryReq) {
      var info;
      //Might use a resource here that returns a JSON array

      return $http({
        method: 'POST',
        url: 'http://192.168.1.136:9999/info',
        data: { 'bar': barReq,
                'city': cityReq,
                'country': countryReq
              }
      }).then(function successCallback(result) {
        info = result.data;
        return info;
      });


    }
  };
})

.service('Chat', function($http) {

  return {
    all: function(barReq,cityReq,countryReq) {
      var info;
      //Might use a resource here that returns a JSON array

      return $http({
        method: 'POST',
        url: 'http://192.168.1.136:9999/chat',
        data: { 'bar': barReq,
                'city': cityReq,
                'country': countryReq
              }
      }).then(function successCallback(result) {
        chat = result.data;
        return chat;
      });


    }
  };

})


.service('ChatPush', function($http) {

  return {
    all: function(barReq,cityReq,countryReq,message) {
      var info;
      //Might use a resource here that returns a JSON array

      return $http({
        method: 'POST',
        url: 'http://192.168.1.136:9999/chatPush',
        data: { 'bar': barReq,
                'city': cityReq,
                'country': countryReq,
                'message': message
              }
      }).then(function successCallback(result) {
        chat = result.data;
        return chat;
      });


    }
  };

})
