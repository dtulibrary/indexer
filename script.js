var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

  $scope.websites = [
  {
    url: "http://unstable.docker.cvt.dk:80",
    name: "Grafana ",
    person: "Viktor"
  },
  {
    url: "http://unstable.docker.cvt.dk:8080",
    name: "Jenkins",
    person: "Viktor"
  },
  {
    url: "http://unstable.docker.cvt.dk:8083",
    name: "InfluxDB query interface",
    person: "Viktor"
  },
  {
    url: "http://unstable.docker.cvt.dk:5002",
    name: "Docker Registry frontend",
    person: "Viktor"
  },
  {
    url: "http://unstable.docker.cvt.dk:5000",
    name: "Docker Registry (no browser)",
    person: "Viktor"
  },
  {
    url: "http://unstable.docker.cvt.dk:8000",
    name: "This index page",
    person: "Viktor"
  }
  ];
})
