//sidenav
const sideNav = document.querySelector('.sidenav');
sidenav.init(Nav,{});

// Slider
const slider = document.querySelector('.slider');
 slider.init(slider, {
  height: 500,
  indicators: false,
  interval: 5000,
  transition: 5000
});

// Search Autocomplete
const autoComplete = document.querySelector('.autocomplete');
autoComplete.init(autoComplete,{
  data : {
    "Banglore": null,
    "Chennai": null,
    "Delhi": null,
    "Mumbai": null,
    "Pune": null,
    "Kolkata": null,
    "Jaipur": null,
    "Ahmadabad": null
  }
});

// Photo Gallery - Material materialboxed
const photoBox = document.querySelectorAll('.materialboxed');
materialbox.init(photoBox, {});