// TAB CONTROLS
const nav = document.querySelector("nav");
const breadcrumbsLinks = Array.from(
  document.querySelectorAll("#breadcrumbs a")
);
const textArea = document.querySelector("textarea");

const tabs = {
  "main.py": document.querySelector(".tab-button[name='main.py']"),
  "script.js": document.querySelector(".tab-button[name='script.js']"),
  "style.css": document.querySelector(".tab-button[name='style.css']"),
  "index.html": document.querySelector(".tab-button[name='index.html']"),
};

const virtualFiles = {
  "main.py":
    "def main() -> None:\n    print('Hello, World!')\n\nif __name__ == '__main__':\n    main()",
  "script.js":
    "function main () {\n    console.log('Hello, World!');\n}\n\nmain();",
  "style.css":
    "@charset 'UTF-8'\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}",
  "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`,
};

for (const tab of Object.values(tabs)) {
  tab.addEventListener("click", tabOnClick);
}

for (const btn of document.querySelectorAll(".close-button")) {
  btn.addEventListener("click", tabOnClose);
}

activateTextArea();

function tabOnClick(e) {
  const file = e.currentTarget.name;
  activateTab(file);
}

function tabOnClose(e) {
  const file = e.currentTarget.parentNode.querySelector(".tab-button").name;
  deleteTab(file);
}

function activateTextArea() {
  textArea.value = virtualFiles[Object.keys(tabs)[0]];
}

function activateTab(newFile) {
  const oldFile = document.querySelector(".tab-button.active").name;
  const tabItems = Array.from(document.querySelectorAll(".tab-button"));

  const oldIndex = tabItems.findIndex((tabItem) => tabItem.name === oldFile);
  const newIndex = tabItems.findIndex((tabItem) => tabItem.name === newFile);

  tabItems[oldIndex].classList.remove("active");
  tabItems[newIndex].classList.add("active");

  // set the breadcrumbs to the clicked tab
  breadcrumbsLinks.at(-1).textContent = tabs[newFile].name;
  // save the old tab's content
  virtualFiles[oldFile] = textArea.value;
  // update the textarea content to the new tab's content
  textArea.value = virtualFiles[newFile];
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
    activateTab(fileButton.name);
  };
  fileButton.addEventListener("click", onClick);
}
