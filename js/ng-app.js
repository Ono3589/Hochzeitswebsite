'use strict';

angular.module('wedding', ['pascalprecht.translate', 'ngSanitize'])

    .controller('weddingCtrl', function($scope, $translate) {
        $scope.langKeys = ['de', 'it'];
        $scope.currentLang = $translate.use();

        $scope.switchLang = function(langKey) {
            $translate.use(langKey);
            $scope.currentLang = langKey;
        };
    })

;