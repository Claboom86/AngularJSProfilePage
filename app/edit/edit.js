"use strict";
const edit = {
    templateUrl: "app/edit/edit.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.userProfile = angular.copy(ProfileService.getUserProfile());
        vm.edit = (person) => {
            ProfileService.setUserProfile(person);
        };
    }]
}

angular
    .module("App")
    .component("edit", edit);