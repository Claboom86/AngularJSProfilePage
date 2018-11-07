"use strict";
function ProfileService($location) {
    const self = this;
    self.userProfile = { name: "Grant Chirpus", 
        info: "grant@grandcircus.co", 
        bio: "I am pretty cool."};
    self.getUserProfile = () => {
        return self.userProfile;
        $location.path("/edit");
    };
    self.setUserProfile = (person) => {
        self.userProfile = person;
        
    };
}

angular
    .module("App")
    .service("ProfileService", ProfileService);