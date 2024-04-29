// TAB CONTROLS

const tabs = Array.from(document.querySelectorAll(".tab-button"));
const breadcrumbsLinks = Array.from(
  document.querySelectorAll("#breadcrumbs a")
);

const textArea = document.querySelector("textarea");
const textAreaContentList = new Array(tabs.length).fill("");

for (const tab of tabs) {
  const onClick = (e) => {
    const oldIndex = tabs.indexOf(document.querySelector(".tab-button.active"));

    for (const t of tabs) {
      t.classList.remove("active");
    }
    // set the clicked tab to active
    const target = e.currentTarget;
    target.classList.add("active");
    // set the breadcrumbs to the clicked tab
    breadcrumbsLinks.at(-1).textContent = target.textContent;
    // set the textarea content to the value stored in the clicked tab (virtual file)
    textAreaContentList[oldIndex] = textArea.value;
    textArea.value = textAreaContentList[tabs.indexOf(target)];
  };

  tab.addEventListener("click", onClick);
}

// OPEN TRAY

const tray = document.querySelector("#tray");
const trayButton = document.querySelector("#tray-button");
trayButton.addEventListener("click", () => {
  tray.classList.toggle("hide");
});
