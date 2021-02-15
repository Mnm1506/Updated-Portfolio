const colorBtn = document.getElementsByClassName("theme-dot");
const themeStyle = document.getElementById("theme-style");
const setColor = (mode) => {
    themeStyle.href = `${mode}.css`
    localStorage.setItem("theme", mode)
};

let theme = localStorage.getItem("theme");
if (theme === null) {
    setColor("style")
} else {
    setColor(theme)
};

for (let i = 0; i < colorBtn.length; i++) {
    colorBtn[i].addEventListener("click", () => {
        let mode = colorBtn[i].dataset.mode 
        setColor(mode)
    });
};