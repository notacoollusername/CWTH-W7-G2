
document.body.classList.add("light");
const body=document.querySelector('body');
document.getElementById("theme-change").addEventListener('click', e => {
    console.log(body);
    let theme=body.getAttribute("data-theme")
    console.log(theme);
    if (theme === 'dark' ) {
        document.body.setAttribute("data-theme","light");
        } else {
            document.body.setAttribute("data-theme","dark");
        }
    

})