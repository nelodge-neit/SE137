// TAB CONTROLS
const nav = document.querySelector("nav");
const tabs = Array.from(document.querySelectorAll(".tab-button"));
const breadcrumbsLinks = Array.from(
  document.querySelectorAll("#breadcrumbs a")
);

const textArea = document.querySelector("textarea");
const textAreaContentList = new Array(tabs.length).fill("");

textAreaContentList[0] =
  "def main() -> None:\n    print('Hello, World!')\n\nif __name__ == '__main__':\n    main()";
textAreaContentList[1] =
  "function main () {\n    console.log('Hello, World!');\n}\n\nmain();";
textAreaContentList[2] =
  "@charset 'UTF-8'\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}";
textAreaContentList[3] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

for (const tab of tabs) {
  tab.addEventListener("click", tabOnClick);
}
activateTextArea();

function tabOnClick(e) {
  const newIndex = tabs.indexOf(e.currentTarget);
  activateTab(newIndex);
}

function createTabButton() {
  const tabButton = document.createElement("button");
  tabButton.classList.add("tab-button");
  tabButton.classList.add("roboto-sm");
  tabButton.classList.add("white-700");
  tabButton.textContent = `Tab ${tabs.length + 1}`;
  tabButton.addEventListener("click", tabOnClick);
  return tabButton;
}

function activateTextArea() {
  console.log("activateTextArea");
  textArea.value = textAreaContentList[0];
}

function activateTab(newIndex) {
  const oldIndex = tabs.indexOf(document.querySelector(".tab-button.active"));

  if (tabs.length <= newIndex) {
    const newButton = createTabButton();
    nav.appendChild(newButton);
    tabs.push(newButton);
  }

  tabs[oldIndex].classList.remove("active");
  tabs[newIndex].classList.add("active");

  // set the breadcrumbs to the clicked tab
  breadcrumbsLinks.at(-1).textContent = tabs[newIndex].textContent;
  // save the old tab's content
  textAreaContentList[oldIndex] = textArea.value;
  // update the textarea content to the new tab's content
  textArea.value = textAreaContentList[newIndex];
}

// OPEN TRAY

const tray = document.querySelector("#tray");
const trayButton = document.querySelector("#tray-button");
trayButton.addEventListener("click", () => {
  tray.classList.toggle("hide");
});

// DROPDOWN CHANGE TABS
const filesButtons = Array.from(
  document.querySelectorAll("#files-list .dropdown-button")
);

for (const fileButton of filesButtons) {
  const onClick = () => {
    const newIndex = filesButtons.indexOf(fileButton);
    activateTab(newIndex);
  };
  fileButton.addEventListener("click", onClick);
}
