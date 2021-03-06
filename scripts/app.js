/* global Controllers */
"use strict";

var monsterListApp = angular.module("monsterListApp", ["ui.router", "ngTouch"]);

monsterListApp.config(function ($stateProvider, $urlRouterProvider) {
	// Default
	$urlRouterProvider.otherwise("/main");

	// Main menu page
	$stateProvider.state("main", Controllers.main);
});
