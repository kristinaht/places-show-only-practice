//business logic for AllPlaces
function AllPlaces (){
  this.places = [];
  this.currentId = 0;
}

AllPlaces.prototype.addPlace = function(place){
  place.id=this.assignId();
  this.places.push(place);
}

AllPlaces.prototype.assignId = function(){
  this.currentId++;
  return this.currentId;
}

AllPlaces.prototype.findPlace = function(id) {
  for(var i=0;i<this.places.length;i++){
    if(this.places[i].id == id){
    return this.places[i];
  }
}
  return false;
}

//business logic for Place

function Place (placeName, placeLandmark, placeYear){
  this.placeName = placeName;
  this.placeLandmark = placeLandmark;
  this.placeYear = placeYear;
}


var allPlaces = new AllPlaces();

var place1 = new Place("Uruguay", "Montevideo", "2019");
var place2 = new Place ("Oregon", "Portland", "2020");

allPlaces.addPlace(place1);
allPlaces.addPlace(place2);


//User Interface logic

$(document).ready(function(){
  $("#click-or").click(function(){
    // $(".info").fadeOut();
    // $(".info", this).fadeToggle();
    $(".info-or").prepend("<span> I went to " + allPlaces.places[0].placeLandmark + " in " + allPlaces.places[0].placeName + ". I was tere in " + allPlaces.places[0].placeYear + "</span>").toggle();
    // alert("hello");
  })
})
