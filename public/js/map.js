mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from MApbox's core styles, or make your own style
        //style URL
        center:  listing.geometry.coordinates, //starting postition [llng, lat]
         zoom: 10, // starting zoom
      });

      const marker = new mapboxgl.Marker({color: "red"})
      .setLungLat(listing.geometry.coordinates) //Listing.geometry.coordinates
      .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`
        
      ))
      .addTo(map);