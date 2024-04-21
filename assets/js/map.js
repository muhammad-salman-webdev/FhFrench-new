((g) => {
  // Initialize variables
  var h, // Promise for loading Google Maps API
    a, // Script element for loading Google Maps API
    k, // Loop variable
    p = "The Google Maps JavaScript API", // Error message
    c = "google", // Google namespace
    l = "importLibrary", // Function name for importing Google Maps library
    q = "__ib__", // Callback function name
    m = document, // Document object
    b = window; // Window object

  // Ensure b[c] exists or create it as an empty object
  b = b[c] || (b[c] = {});

  // Ensure b.maps exists or create it as an empty object
  var d = b.maps || (b.maps = {}),
    // Set to keep track of imported libraries
    r = new Set(),
    // URL search parameters for API request
    e = new URLSearchParams(),
    // Function to load Google Maps API
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        // Create script element
        await (a = m.createElement("script"));

        // Set libraries parameter in URL
        e.set("libraries", [...r] + "");

        // Convert library keys to snake case and set as URL parameters
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );

        // Set callback parameter in URL
        e.set("callback", c + ".maps." + q);

        // Set script source URL
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;

        // Set callback function
        d[q] = f;

        // Handle script loading error
        a.onerror = () => (h = n(Error(p + " could not load.")));

        // Set nonce attribute if available
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";

        // Append script to document head
        m.head.append(a);
      }));

  // If importLibrary function already exists, log a warning
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : // Otherwise, define importLibrary function
      (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
  // Google Maps API configuration object
  key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", // API key
  v: "weekly", // API version
});

// Initialize map
let map;
async function initMap() {
  // Import Map class from Google Maps library
  const { Map } = await google.maps.importLibrary("maps");

  // Create map instance
  map = new Map(document.getElementById("map"), {
    // Map options
    center: {
      lat: 41.936461113232035,
      lng: -71.45538568514716,
    },
    zoom: 17,
  });

  // Add marker to the map
  new google.maps.Marker({
    position: {
      lat: 41.936461113232035,
      lng: -71.45538568514716,
    },
    map,
    title: "Lion Court 25 Procter Street London WC1V 6NY", // Marker title
  });
}

// Call initMap function
initMap();
