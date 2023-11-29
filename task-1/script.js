const div = document.createElement("div");
div.className = "content";
div.style.backgroundColor = "#CC00CC";

const label = document.createElement("label");
label.setAttribute("for", "password");
label.textContent = "You can write your password here if you like..  ";

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("name", "password");

div.append(label, passwordInput);

document.body.appendChild(div);
