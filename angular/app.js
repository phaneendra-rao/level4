
// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('soccerApp', ['ngRoute']);


// this is without $scope
myApp.controller('mainController',['$http',function($http) {

  //create a context
  var main = this;

  // i knew the result is going to be array, so i declared an empty array to initialize
  this.allMatches = [];
  console.log(this.blogs);

this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';


  this.loadAllMatches = function(){

      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.allMatches = response.data;
          console.log(main.allMatches);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all blogs

  this.loadAllMatches();


   this.searchTeams = function (item)
   {
    if(this.searchTeams == undefined)
    {
      return true;
    }
    else
    {
      if(item.team1.name.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0 || item.team2.name.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0 || item.team1.code.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0 || item.team2.code.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0)
      {
        return true;
      }
    }

    return false;
   }





}]); // end controller







myApp.controller('mainController2',['$http',function($http) {

  //create a context
  var main = this;

  // i knew the result is going to be array, so i declared an empty array to initialize
  this.allMatches = [];
  console.log(this.blogs);

this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';


  this.loadAllMatches = function(){

      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.allMatches = response.data;
          console.log(main.allMatches);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end loadAllMatches

  this.loadAllMatches();


   this.searchTeams = function (item)
   {
    if(this.searchTeams == undefined)
    {
      return true;
    }
    else
    {
      if(item.team1.name.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0 || item.team2.name.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0 || item.team1.code.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0 || item.team2.code.toLowerCase().indexOf(this.searchTeams.toLowerCase()) >=0)
      {
        return true;
      }
    }

    return false;
   }





}]); // end controller


myApp.controller('singleMatchViewController',['$http','$routeParams',function($http,$routeParams) {

  //create a context
  var main = this;
  this.flag=true;

  this.matchName='';
  this.matchData = [];
  this.teamWon='';
  this.teamLose='';

  this.season = $routeParams.season;
  this.date = $routeParams.date;
  this.code1 = $routeParams.code1;
  this.code2 = $routeParams.code2;


  this.matchName='';
  this.team1Name='';
  this.team1Code='';
  this.team2Code='';
  this.team2Name='';
  this.team1Score='';
  this.team2Score='';
  this.matchDate='';

 console.log(this.season);
  console.log(this.date);
  console.log(this.code1);
  console.log(this.code2);

if(this.season=='season1')
{
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
  this.goBackBtn='#/';
}

if(this.season=='season2')
{
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  this.goBackBtn='#/season2';
}



  this.loadSingleMatch = function(){

      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(

        function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          //console.log(response.data.rounds.length);
   console.log(response);

            for(var i=0; i<response.data.rounds.length; i++)
            {
              if(main.flag)
              {
                for(var j=0; j<response.data.rounds[i].matches.length; j++)
                {
                  if(main.flag)
                  {
                    if((response.data.rounds[i].matches[j].date==main.date) && (response.data.rounds[i].matches[j].team1.code==main.code1) && (response.data.rounds[i].matches[j].team2.code==main.code2))
                    {
                      //console.log(response.data.rounds[i].matches[j].date);
                      //console.log(response.data.rounds[i].matches[j].team1.code);
                      //console.log(response.data.rounds[i].matches[j].team2.code);
                      //console.log("yes..! funny.. :)");
                      main.matchName=response.data.rounds[i].name;
                      main.team1Name=response.data.rounds[i].matches[j].team1.name;
                      main.team1Code=response.data.rounds[i].matches[j].team1.code;

                      main.team2Name=response.data.rounds[i].matches[j].team2.name;
                      main.team2Code=response.data.rounds[i].matches[j].team2.code;

                      main.team1Score=response.data.rounds[i].matches[j].score1;
                      main.team2Score=response.data.rounds[i].matches[j].score2;
                      main.matchDate=response.data.rounds[i].matches[j].date;




                      if(main.team1Score > main.team2Score)
                      {
                        main.teamWon=main.team1Name;
                        main.teamLose=main.team2Name;

                        //console.log(main.teamWon);
                        //console.log(main.teamLose);
                      }

                      if(main.team1Score < main.team2Score)
                      {
                        main.teamWon=main.team2Name;
                        main.teamLose=main.team1Name;

                        //console.log(main.teamWon);
                        //console.log(main.teamLose);
                      }

                      if(main.team1Score == main.team2Score)
                      {
                        main.teamWon='Draw Match';
                        main.teamLose='Draw Match';

                        //console.log(main.teamWon);
                        //console.log(main.teamLose);
                      }
                    //  console.log(main.matchName);
                    //  console.log(main.matchData);
                      main.flag=false;
                    }
                  }
                }
              }

            }

         //console.log("hello Funny.. :)");
         //console.log(response);
        },function errorCallback(response){
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end loadSingleMatch

this.loadSingleMatch();


}]); // end controller


myApp.controller('totalMatchStats',['$http','$routeParams',function($http,$routeParams) {

  //create a context
  var main = this;
  this.flag=true;

  this.uniqueTeamNames = [];
  this.teamStats = new Array();

  //this.uniqueObj = [];

  this.season = $routeParams.season;

if(this.season=='season1')
{
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
  this.goBackBtn='#/';
}

if(this.season=='season2')
{
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  this.goBackBtn='#/season2';
}



  this.loadTotalStats = function(){

      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(

        function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);

          console.log(response);

          for(var i=0; i<response.data.rounds.length; i++)
          {
            for(var j=i; j<response.data.rounds[i].matches.length; j++)
            {
             if(main.uniqueTeamNames.indexOf(response.data.rounds[i].matches[j].team1.name) === -1)
             {
    		       main.uniqueTeamNames.push(response.data.rounds[i].matches[j].team1.name);
               //console.log(main.uniqueTeamNames);
               //console.log("hello");
             }
             if(main.uniqueTeamNames.indexOf(response.data.rounds[i].matches[j].team2.name) === -1)
             {
               main.uniqueTeamNames.push(response.data.rounds[i].matches[j].team2.name);
             }
             //console.log(j);
            }
          }
console.log(main.uniqueTeamNames);

var sn=0;
        for(var i=0; i<main.uniqueTeamNames.length; i++)
        {

           var matchesPlayed=0;
           var matches_won=0;
           var matches_lose=0;
           var matches_draw=0;
           var singleTeamStats= new Object();
          for(var j=0; j<response.data.rounds.length; j++)
          {
            for(var k=0; k<response.data.rounds[j].matches.length; k++)
            {
                 if(main.uniqueTeamNames[i]===response.data.rounds[j].matches[k].team1.name)
                 {
                    matchesPlayed++;
                    if(response.data.rounds[j].matches[k].score1 > response.data.rounds[j].matches[k].score2)
                    {
                      matches_won++;
                    }

                    if(response.data.rounds[j].matches[k].score1 == response.data.rounds[j].matches[k].score2)
                    {
                       matches_draw++;
                    }

                    if(response.data.rounds[j].matches[k].score1 < response.data.rounds[j].matches[k].score2)
                    {
                        matches_lose++;
                    }
                 }

                 if(main.uniqueTeamNames[i]===response.data.rounds[j].matches[k].team2.name)
                 {
                    matchesPlayed++;
                    if(response.data.rounds[j].matches[k].score1 < response.data.rounds[j].matches[k].score2)
                    {
                      matches_won++;
                    }
                    if(response.data.rounds[j].matches[k].score1 == response.data.rounds[j].matches[k].score2)
                    {
                      matches_draw++;
                    }
                    if(response.data.rounds[j].matches[k].score1 > response.data.rounds[j].matches[k].score2)
                    {
                      matches_lose++;
                    }
                 }


            }
          }
          sn++;
          singleTeamStats.Sno=sn;
          singleTeamStats.Team_name=main.uniqueTeamNames[i];
          singleTeamStats.Matches_Played=matchesPlayed;
          singleTeamStats.Matches_won=matches_won;
          singleTeamStats.Matches_draw=matches_draw;
          singleTeamStats.Matches_lose=matches_lose;

          main.teamStats.push(singleTeamStats);


        }


        console.log(main.teamStats);



         //console.log("hello Funny.. :)");
         //console.log(response);
        },function errorCallback(response){
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end loadTotalStats

this.loadTotalStats();


}]); // end controller
