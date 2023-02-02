

const listItems = document.getElementsByClassName("list__item");
const listTexts = document.getElementsByClassName("list__text");
const notificationsNum = document.getElementById("notifications_num");
const btnRead = document.getElementById("btn_read");

let activeListItems = 0;

for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].classList.contains("active")) {
    activeListItems++;
  }
}

notificationsNum.innerText = activeListItems;

btnRead.addEventListener("click", function() {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("active");
  }

  for (let i = 0; i < listTexts.length; i++) {
    listTexts[i].classList.remove("active");
  }

  notificationsNum.innerText = 0;
  activeListItems = 0;
});






