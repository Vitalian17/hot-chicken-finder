var yelpKey = "UkaLHk-lT2l73VMIoJSF6Iu7lh2ZocrRtzJ2OOacNV7cSTTL5Yge7PN3p0dpcAr1IDd1v2VY7L22UnjJPsFTKRIrxflMcZxAEpRYEDwK-IdByTHo7ortF1YYimXVXXYx";
var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";



$("#hot-button").on("click", function(event){
    event.preventDefault();
    $.ajax({
        method: "GET",
        url: yelpURL + "?location=Nashville&term=hot chicken",
        cache: true,
        crossDomain: true,
        headers: {
            Authorization: "Bearer " + yelpKey,
            "Access-Control-Allow-Origin": "*",
            "x-requested-with": "xmlhttprequest"
        }
    }).then(function(yelpResults){
        console.log(yelpResults);
        var fullResults = yelpResults.businesses;

        for (let i = 0; i < fullResults.length; i++){
            var resultDiv = $("<div>").addClass("result-container");
            var resultTitle = $("<h2>").text(fullResults[i].name);
            var resultAddress = $("<div>");
            for (let j = 0; j < fullResults[i].location.display_address.length; j++) {
                resultAddress.append("<p>" + fullResults[i].location.display_address[j] + "</p>");
            }
            var phoneNumber = $("<p>").text(fullResults[i].display_phone);
            resultDiv.append(resultTitle, resultAddress, phoneNumber);
            $("#results").append(resultDiv);
            console.log(fullResults[i].coordinates)
            
            var coords = fullResults[i].coordinates;
            var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: fullResults[i].name
            })
            marker.addListener('click', function() {
            map.setZoom(20);
            map.setCenter(marker.getPosition());
        });
        }
    })
})