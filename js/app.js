// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('intro', {
    cache: false,
  url: '/intro',
  templateUrl: 'templates/intro.html',
  controller: 'IntroCtrl'
})

.state('registro', {
  cache: false,
url: '/registro',
templateUrl: 'templates/registro.html',
controller: 'RegCtrl'
})

.state('country', {
  cache: false,
url: '/country',
templateUrl: 'templates/country.html',
controller: 'CountryCtrl'
})

.state('city', {
  cache: false,
url: '/city/?countr',
templateUrl: 'templates/city.html',
controller: 'CityCtrl'
})

.state('bar', {
  cache: false,
url: '/bar/?city?countr',
templateUrl: 'templates/bar.html',
controller: 'BarCtrl'
})

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabCtrl'
  })


  // Each tab has its own nav history stack:

  .state('tab.chat', {
    cache: false,
    url: '/chat',
    views: {
      'tab-chat': {
        templateUrl: 'templates/tab-chat.html',
        controller: 'ChatCtrl'
      }
    }
  })

  .state('tab.people', {
      cache: false,
      url: '/people',
      views: {
        'tab-people': {
          templateUrl: 'templates/tab-people.html',
          controller: 'PeopleCtrl'
        }
      }
    })

    .state('tab.info', {
      cache: false,
        url: '/info',
        views: {
          'tab-info': {
            templateUrl: 'templates/tab-info.html',
            controller: 'InfoCtrl'
          }
        }
      })


  .state('tab.offer', {
    cache: false,
    url: '/offer',
    views: {
      'tab-offer': {
        templateUrl: 'templates/tab-offer.html',
        controller: 'OfferCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');

});
