var myApp = angular.module('palaioApp', ['gridshore.c3js.chart']);

myApp.controller('palaioController', [
    '$scope',
    function ($scope) {
        
        //$(document).ready(function () {
        //    $('button').click(function () {
        //        var stripes = $('#stripe_top');
        //        stripes.css("border-top", '5px dashed black');
        //        stripes.animate({transform: 'rotate(90deg)'}, 'slow');
        //    });
        //});

        $scope.menu_visible = false;

        $scope.controlNav = function () {
            var nav = document.getElementById("myNav");
            var ver = document.getElementById("version");
            var con_msg = document.getElementById("construction_msg");

            if ($scope.menu_visible === false) {
                $scope.menu_visible = true;

                nav.style.width = "100%";
                ver.style.color = "white";
                con_msg.style.display = "block";
            }
            else {
                $scope.menu_visible = false;
                nav.style.width = "0%";
                ver.style.color = "black";
                con_msg.style.display = "none";
            };
        };

        window.onscroll = function (e) {
            console.log("scrolling");
        }


    }
]);

