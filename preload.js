window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for(const dependancy of ["chrome", "node", "electron"]) {
        replaceText(`${dependancy}-version`, process.versions[dependancy])
    }
})
