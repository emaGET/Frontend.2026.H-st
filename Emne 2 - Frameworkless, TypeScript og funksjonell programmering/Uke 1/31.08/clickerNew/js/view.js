import { model } from "./model.js";
import { doClick, buyUpgrade } from "./controller.js";

function updateView() {
    const smiley = model.smileyIndex === 0 ? '😀' : '😁';

    const upgradeBtnHtml = model.points < 10 ? '' : /*HTML*/`
        <button id="upgradeButton">
            Kjøp oppgradering (10 poeng)
        </button>
    `;

    document.getElementById('app').innerHTML = /*HTML*/`
        <div id="image" >${smiley}</div>

        <div id="pointsInfo">
            Poeng: ${model.points}
        </div>
        ${upgradeBtnHtml}
    `;

    const image = document.getElementById("image");

    image.addEventListener("click", doClick);

    const upgradeButton = document.getElementById("upgradeButton");

    if (upgradeButton) {
        upgradeButton.addEventListener("click", buyUpgrade);
    }
}

export { updateView } ;

// 😁