
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

const inputFunc = () => {
    auto_grow(document.getElementById('string'))
    auto_grow(document.getElementById('regexp'))
    const regexTextArea = document.getElementById('regexp')
    const flagInput = document.getElementById('flag')
    const stringDiv = document.getElementById('string')

    const regexString = regexTextArea.value
    const flag = flagInput.value
    let string = stringDiv.value
    const regex = RegExp(regexString, flag)
    console.log(regex)

    string = string.replace(regex, (str) => { return `<b>${str}</b>` })
    console.log(string)
    document.getElementById('regexHighlightOutput').innerHTML = string
    // setCurrentCursorPosition(document.getElementById('string'),before)
}

document.getElementById("string").addEventListener("input", inputFunc, false);
document.getElementById('regexp').addEventListener('input',inputFunc,false);
document.getElementById('flag').addEventListener('input',inputFunc,false);
