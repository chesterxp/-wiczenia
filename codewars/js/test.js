
gazeta_pl.Sport.addBanners = (function() {
    "use strict";
    console.log('banner działa');
    var class_profile;
    return {
        'init' : function() {
            var self = this,
                profile_place = '.mod.mSport_profile .node.node_mt:nth-child(5)';
                console.log(self);
                self.createPlace('.mod.mSport .node.node_mt:nth-child(5)','104-RECTANGLE-MOBI_MT', '104-RECTANGLE-MOBI');
                if(document.querySelectorAll(profile_place).length) self.createPlace(profile_place, '101-TOPBOARD-MOBI_MT', '101-TOPBOARD-MOBI');
        },
        'createPlace' : function(place, id, typeBaner) {
                var appendElem,                
                    self = this; 
                    place = document.querySelectorAll(place)   
                    appendElem = document.createElement("div");
                    appendElem.setAttribute("id", id);
                    appendElem.appendBefore(place[0]);  
            self.viewBanner(id, typeBaner);
        },
        'viewBanner' : function(newID, typeBaner) {

                    putBanDFP(typeBaner, newID)
        }
    };
})();;


//add related quiz to RTC
RTCQuiz.loadRTCQuiz($('.gazeta_rtc2012_body'));