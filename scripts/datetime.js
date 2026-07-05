function updateDateTimeAndLocation() {
  var dt = document.getElementById('datetime');
  var loc = document.getElementById('location');
  if (dt) dt.textContent = new Date().toString();
  if (loc) {
    try {
      loc.textContent = 'Time zone: ' + Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
      loc.textContent = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateDateTimeAndLocation();
  setInterval(updateDateTimeAndLocation, 1000);
});
