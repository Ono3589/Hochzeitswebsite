'use strict';

angular.module('wedding', ['pascalprecht.translate'])

    .controller('weddingCtrl', function($scope, $translate) {

        $scope.switchLang = function(langKey) {
            $translate.use(langKey);
        };
    })

;