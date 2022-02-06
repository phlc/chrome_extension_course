const nameInput = document.querySelector("#name-input");
const saveBtn = document.querySelector("#save-btn");
const timeInput = document.querySelector("#time-input");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({
    name,
    notificationTime,
  });
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  if (!res.name) return;
  nameInput.value = res.name;
  timeInput.value = res.notificationTime ?? 1000;
});
