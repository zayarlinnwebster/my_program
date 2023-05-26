const commandEle = document.getElementById("command");
const terminalEle = document.getElementById("terminal");
// fjjpouirwprjouvt


commandEle.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        outputCommand()
    }
});

terminalEle.addEventListener("click", function (event) {
    commandEle.focus();
})

function outputCommand() {
    if (!commandEle.value) {
        return;
    }

    const outputDivEle = document.createElement("div");
    const arrowEle = document.createElement("span");
    const preCommandEle = document.createElement("span");
    const outputEle = document.createElement("pre");

    arrowEle.classList.add("arrow");
    arrowEle.innerHTML = ">";

    preCommandEle.classList.add("pre-command");
    preCommandEle.innerHTML = commandEle.value;

    outputDivEle.appendChild(arrowEle);
    outputDivEle.appendChild(preCommandEle);
    outputDivEle.appendChild(outputEle);

    let outputText = "";

    if (command.includes(commandEle.value)) {
        outputText = availableCommand[commandEle.value];
    } else if (commandEle.value.substring(0, 2) == "go" && command.includes(commandEle.value.substring(3))) {
        if (commandEle.value.substring(3) == "cv" || commandEle.value.substring(3) == "help") {
            outputText = commandEle.value + ": not available"
        } else {
            window.location.href = commandEle.value.substring(3) + ".html";
        }
    } else {
        outputText = commandEle.value + ": command not found"
    }

    terminalEle.insertBefore(outputDivEle, terminalEle.children[terminalEle.children.length - 1])
    typeWriter(outputText, outputEle);
    commandEle.value = "";
}

function typeWriter(text, element, duration = 30) {
    let charIndex = 0;
    const typing = setInterval(() => {
        element.textContent += text.charAt(charIndex);
        charIndex++;
        if (charIndex >= text.length) {
            clearInterval(typing);
        }
        terminalEle.scrollTop = terminalEle.scrollHeight;
    }, duration);
}