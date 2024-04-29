const tabs = Array.from(document.querySelectorAll(".tab-button"));

for (const tab of tabs) {
  const onClick = (e) => {
    for (const t of tabs) {
      t.classList.remove("active");
    }

    const target = e.currentTarget;
    target.classList.add("active");
  };

  tab.addEventListener("click", onClick);
}
