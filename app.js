
/*window.setInterval(function() {
$('.blinkText').toggle();
}, 300);*/

/*$(document).ready(function() {
    $("#datepicker").datepicker();
  });*/

  
var api_key = 'ri0EZkle2DPanZWtyS8oZFgC4coub86CDtV5OiYV';

var nasa_url = 'https://api.nasa.gov/planetary/apod';

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: nasa_url,
    data: {
      date: searchTerm,
      api_key: api_key,
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}

function displayNasaSearchData(data) {
var results = $('.results');
results.empty();
var imageLink = data.url;
var heading = data.title;
var descp =data.explanation;
var date= data.date;
var elem = '<h2 style= "color: white"> '+ heading +' </h2><div id="picture-div"><img style= "height: 400px; width: 400px;" class="img-responsive nasa-img" src="'+ imageLink +'" /></a></div><div id="text-div"><p style= "color: white" > '+ descp +' </p></div>';
results.append(elem);
}


function watchSubmit() {
  $('#search').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('#datepicker').val();
    getDataFromApi(query, displayNasaSearchData);
  });
}

$(function(){watchSubmit();});


