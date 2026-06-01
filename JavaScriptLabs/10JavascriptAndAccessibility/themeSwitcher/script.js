const themes = [
  { name: "dark", message: "The dark theme has been successfully applied." },
  { name: "light", message: "The light theme has been successfully applied." }
];

const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const statusMessage = document.getElementById("status");
const body = document.body;
const menuItems = document.querySelectorAll('#theme-dropdown li[role="menuitem"]');

themeSwitcherButton.addEventListener("click", () => {
  const isHidden = themeDropdown.hasAttribute("hidden");
  
  if (isHidden) {
    themeDropdown.removeAttribute("hidden");
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});

menuItems.forEach(item => {
  item.addEventListener("click", (event) => {
    const selectedThemeName = event.target.textContent.toLowerCase();
    
    themes.forEach(theme => {
      body.classList.remove(`theme-${theme.name}`);
    });
    
    body.classList.add(`theme-${selectedThemeName}`);
    
    const matchedTheme = themes.find(theme => theme.name === selectedThemeName);
    if (matchedTheme) {
      statusMessage.textContent = matchedTheme.message;
    }
    
    themeDropdown.setAttribute("hidden", "");
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  });
});