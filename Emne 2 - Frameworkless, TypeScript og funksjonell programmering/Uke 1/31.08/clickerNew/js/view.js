import { model } from "./model.js";
import { doClick, buyUpgrade } from "./controller.js";

// function updateView() {
//     const smiley = model.smileyIndex === 0 ? '😀' : '😁';

//     const upgradeBtnHtml = model.points < 10 ? '' : /*HTML*/`
//         <button id="upgradeButton">
//             Kjøp oppgradering (10 poeng)
//         </button>
//     `;

//     document.getElementById('app').innerHTML = /*HTML*/`
//         <div id="image" >${smiley}</div>

//         <div id="pointsInfo">
//             Poeng: ${model.points}
//         </div>
//         ${upgradeBtnHtml}
//     `;

//     const image = document.getElementById("image");

//     image.addEventListener("click", doClick);

//     const upgradeButton = document.getElementById("upgradeButton");

//     if (upgradeButton) {
//         upgradeButton.addEventListener("click", buyUpgrade);
//     }
// }

function updateView() {
    
    const smileyDiv = document.createElement("div");

    smileyDiv.textContent = model.smileyIndex === 0 ? "😀" : "😁";

    smileyDiv.addEventListener("click", doClick);

    const pointsDiv = document.createElement("div");
    pointsDiv.textContent = `Poeng: ${model.points}` ;
    
    const app = document.getElementById("app");

    app.replaceChildren(smileyDiv, pointsDiv);

    if (model.points >= 10) {
        const upgradeButton = document.createElement("button");
        upgradeButton.textContent = "Kjøp oppgradering (10 poeng)" ;
        upgradeButton.addEventListener("click", buyUpgrade);

        app.append(upgradeButton);
    }
}

export { updateView };

// 😁