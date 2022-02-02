const timeElement = document.querySelector("#time");
const currentTime = new Date().toLocaleTimeString();
const nameElement = document.getElementById("name");

timeElement.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => console.log("Finished setting badge Text")
);

chrome.storage.sync.get(["name"], (res) => {
  if (!res.name) return;
  nameElement.textContent = `Your name is: ${res.name}`;
});
