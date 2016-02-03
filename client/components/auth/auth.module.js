'use strict';

angular.module('conferencesApp.auth', [
  'conferencesApp.constants',
  'conferencesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
