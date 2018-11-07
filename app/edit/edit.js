"use strict";
const edit = {
    templateUrl: "app/edit/edit.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.edit = (person) => {
            ProfileService.setUserProfile(person);
        };
    }]
}

angular
    .module("App")
    .component("edit", edit);