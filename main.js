document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems2 = document.querySelectorAll('.slider');
    var instances2 = M.Slider.init(elems2, { indicators: false });
    var elems3 = document.querySelectorAll('.autocomplete');
    var instances3 = M.Autocomplete.init(elems3)
});