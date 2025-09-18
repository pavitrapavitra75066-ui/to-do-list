const seats = document.querySelectorAll(".seat");
const selectedSeatText = document.getElementById("selectedSeat");
const reserveBtn = document.getElementById("reserveBtn");
let selectedSeat = null;

seats.forEach(seat => {
  seat.addEventListener("click", () => {
    if (seat.classList.contains("reserved")) return;

    seats.forEach(s => s.classList.remove("selected"));
    seat.classList.add("selected");
    selectedSeat = seat;
    selectedSeatText.textContent = seat.getAttribute("data-seat");
  });
});

reserveBtn.addEventListener("click", () => {
  if (!selectedSeat) {
    alert("Please select a seat.");
    return;
  }

  selectedSeat.classList.remove("selected");
  selectedSeat.classList.add("reserved");
  selectedSeatText.textContent = "None";
  selectedSeat = null;
});
