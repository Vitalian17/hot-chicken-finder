
  var map;
      function markerPopulate() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: new google.maps.LatLng(36.16, -86.8),
          mapTypeId: 'roadmap'
        });

        for (var i = 0; i < locationCoords.length; i++) {
          var coords = locationCoords[i];
          var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      } 