const wrapper = document.querySelector(".wrapper");
function createRoomCards(rooms) {
  let roomsTemp=[];
  for (const room of rooms) {
    const roomElement = `<div class="card">
       <img class="card-img" src=${room.image} alt="room-photo">
       <h2 class="card-header">${room.name}</h2>
       <p class="card-detail">${room.features} <br>Capacity:${room.capacity} Guests</p>
       <a class="card-btn" >Book this room</a>
   </div>`;
   roomsTemp.push(roomElement);
  }
  const roomCards=roomsTemp.join('');
  console.log(roomCards)
  return roomCards;
}


window.addEventListener("DOMContentLoaded", async () => {
  const result = await fetch("/rooms", {
    method: "GET",
  });
  const rooms = await result.json();
  console.log(rooms);
  wrapper.innerHTML=createRoomCards(rooms);
});
