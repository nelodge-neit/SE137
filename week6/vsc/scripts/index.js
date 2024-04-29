// TAB CONTROLS

const tabs = Array.from(document.querySelectorAll(".tab-button"));

for (const tab of tabs) {
  const onClick = (e) => {
    for (const t of tabs) {
      t.classList.remove("active");
    }

    const target = e.currentTarget;
    target.classList.add("active");

    const breadcrumbs = document.querySelector("#breadcrumbs");
    breadcrumbs.innerHTML = `<a href="#">${target.textContent}</a>`;
  };

  tab.addEventListener("click", onClick);
}

// OPEN TRAY

const trayButton = document.querySelector("#tray-button");
trayButton.addEventListener("click", () => {
  console.log("click!");
  const tray = document.querySelector("#tray");
  tray.classList.toggle("hide");
});
