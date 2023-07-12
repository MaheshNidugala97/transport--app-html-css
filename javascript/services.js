function dropdownFunction() {
  document.getElementById("dropdown-countrycode").classList.toggle("show");
}

function openAddLuggage() {
  // alert("Your screen resolution is: " + window.screen.width);
  document
    .getElementById("id_extra_luggage")
    .classList.add("add-extra-luggage-section");
  document
    .getElementById("id_add_luggage")
    .classList.add("add-luggage-section");
  document
    .getElementById("id_add_more_baggage")
    .classList.add("add-more-baggage-section");
  document
    .getElementById("id_arrow_right_image")
    .classList.add("change_to_down_arrow");
  document
    .getElementById("id_span_your_booking")
    .classList.add("align_span_your_booking");
  document
    .getElementById("id_booking_details")
    .classList.add("align_booking_details");
  document.getElementById("id_adults").classList.add("align_adults");
  document.getElementById("id_total").classList.add("align_total");
  document.getElementById("id_voucher").classList.add("align_voucher");
  document.getElementById("id_button").classList.add("align_button");
}

window.onclick = function (event) {
  if (!event.target.matches(".div_down_arrow")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  if (!event.target.matches(".div_arrow_right_image")) {
    document
      .getElementById("id_extra_luggage")
      .classList.remove("add-extra-luggage-section");
    document
      .getElementById("id_add_luggage")
      .classList.remove("add-luggage-section");
    document
      .getElementById("id_add_more_baggage")
      .classList.remove("add-more-baggage-section");
    document
      .getElementById("id_arrow_right_image")
      .classList.remove("change_to_down_arrow");
    document
      .getElementById("id_span_your_booking")
      .classList.remove("align_span_your_booking");
    document
      .getElementById("id_booking_details")
      .classList.remove("align_booking_details");
    document.getElementById("id_adults").classList.remove("align_adults");
    document.getElementById("id_total").classList.remove("align_total");
    document.getElementById("id_voucher").classList.remove("align_voucher");
    document.getElementById("id_button").classList.remove("align_button");
  }
};

function countdown(elementName, minutes, seconds) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  function updateTimer() {
    msLeft = endTime - +new Date();
    if (msLeft < 1000) {
      element.innerHTML = alert("Time is up");
    } else {
      time = new Date(msLeft);
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML =
        (hours ? hours + ":" + twoDigits(mins) : mins) +
        ":" +
        twoDigits(time.getUTCSeconds());
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  }

  element = document.getElementById(elementName);
  endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}

countdown("ten-countdown", 10, 0);

function openNav() {
  document.getElementById("mySidebar").style.width = "400px";
  document.getElementById("id_body").classList.add("disable_scrolling");
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("id_body").classList.remove("disable_scrolling");
}
