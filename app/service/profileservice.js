"use strict";
function ProfileService($location) {
    const self = this;
    self.userProfile = { name: "Grant Chirpus", 
        info: "grant@grandcircus.co", 
        bio: "I am pretty cool."};
    self.getUserProfile = () => {
        return self.userProfile;
    };
    self.setUserProfile = (person) => {
        self.userProfile = person;
        $location.path("/profile");
    };
    self.loadEdit = () => {
        $location.path("/edit");
    };
}

angular
    .module("App")
    .service("ProfileService", ProfileService);