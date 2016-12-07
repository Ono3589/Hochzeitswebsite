'use strict';

angular.module('wedding')
    .config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.translations('de', DE_KEYS);
        $translateProvider.translations('it', IT_KEYS);
        $translateProvider.preferredLanguage(navigator.language);  // returns "de"
        // $translateProvider.determinePreferredLanguage();
    })
;
