const timeElement = document.querySelector("#time");
const nameElement = document.getElementById("name");
const timerElement = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

// chrome.action.setBadgeText(
//   {
//     text: "TIME",
//   },
//   () => console.log("Finished setting badge Text")
// );

chrome.storage.sync.get(["name"], (res) => {
  if (!res.name) return;
  nameElement.textContent = `Your name is: ${res.name}`;
});

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});

stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
    timer: 0,
  });
});

function updateTimeElements() {
  const currentTime = new Date().toLocaleTimeString();

  timeElement.textContent = `The time is: ${currentTime}`;

  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `Timer is at ${time} seconds`;
  });
}
updateTimeElements();
setInterval(updateTimeElements, 1000);
