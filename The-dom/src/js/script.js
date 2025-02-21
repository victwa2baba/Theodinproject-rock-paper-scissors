// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redP = document.createElement('p');
redP.classList.add("redP");
redP.style.color = "red";
redP.textContent = "Hey i'm red!";
container.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blue');
blueH3.style.color = 'blue';
blueH3.textContent = `I’m a blue h3!`;
container.appendChild(blueH3);

const fatherDiv = document.createElement('div');
fatherDiv.classList.add('many');
fatherDiv.setAttribute("style", "background: pink; border: black;");
fatherDiv.innerHTML = `
                        <h1>I'm a div</h1>
                        <p> ME TOO!</p>

                        `;
container.appendChild(fatherDiv);