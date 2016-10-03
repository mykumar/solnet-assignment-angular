(function() {
  'use strict';

  angular
    .module('company')
    .controller('DashBoardController', DashBoardController);

  /** @ngInject */
  function DashBoardController() {
    var vm = this;

    vm.duglabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    vm.dugdata = [200, 500, 100];
    vm.dugdata2 = [500, 200, 100];

    vm.belowdata = [300, 500, 100];

    vm.belowcolors = [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ];

    vm.peidata = [300, 500, 100];
    vm.piewcolors = [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ];

    vm.lastlabels =["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];

    vm.lastdata = [300, 500, 100, 40, 120];



    vm.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    vm.series = ['Page Views', 'Visitors'];
    vm.data = [
        [23, 10, 13, 24, 12, 21, 19, 10, 26],
        [7, 13, 8, 10, 18, 11, 17, 9, 17]
    ];
    vm.onClick = function(points, evt) {
        // console.log(points, evt);
    };
    vm.onHover = function(points) {
        if (points.length > 0) {
            // console.log('Point', points[0].value);
        } else {
            // console.log('No point');
        }
    };
    vm.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1)",
            pointColor: "rgba(255,110,64,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255,110,64,1)"
    }, { // dark grey
            fillColor: "rgba(103,58,183,1)",
            strokeColor: "rgba(103,58,183,1.0)",
            pointColor: "rgba(103,58,183,1.0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(103,58,183,1.0)"
    }];

     vm.options = {
            scaleShowVerticalLines: false,
            scaleShowLabels: true,
            scaleLineWidth: 1,
            scaleLineColor: "rgba(0,0,0,0.1)",
            scaleShowHorizontalLines: false,
            scaleGridLineWidth : 1,
            scaleShowGridLines : false,
            scaleGridLineColor : "rgba(0,0,0,0)",
            pointDotRadius : 5,
            pointHitDetectionRadius : 10

        };

  }
})();
