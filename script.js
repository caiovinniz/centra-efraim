document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
  const response = document.getElementById('form-response');
  response.style.display = 'block';
  setTimeout(() => {
    response.style.display = 'none';
  }, 5000);
});

function initMap() {
  const location = { lat: -23.532, lng: -46.635 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Central Efraim",
  });
}
