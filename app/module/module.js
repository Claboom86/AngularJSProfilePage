"use strict";
angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider)=> {
        $routeProvider
            .when("/profile", {
                template: "<profile></profile>"
            })
            .when("/edit", {
                template: "<edit></edit>"
            })
            .when("/", {
                template: "<profile></profile>"
            })
    }]);
