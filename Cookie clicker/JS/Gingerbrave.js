let score = 0
let upgradePrix = 10
let lvlPrix = 2000
let upgrade = 1
let upgradeModif = 1.2

function BraveAugm() {
    score = score + 1 * upgrade;
    document.getElementById("score").textContent = "Cookies : " + score.toFixed(0);
}

document.getElementById("CookieClic").addEventListener("click",BraveAugm);

function BraveUpgr() {
    if (score >= upgradePrix) {
        upgrade = upgrade + 1;
        score = score - upgradePrix;
        upgradePrix = upgradePrix * upgradeModif;
        document.getElementById("bouton").textContent = "Améliorer Clic : " + upgradePrix.toFixed(0) + " cookies";
        document.getElementById("score").textContent = "Cookies : " + score.toFixed(0);
        document.getElementById("clic").textContent = "Cookies par clic : " + upgrade.toFixed(0);
    }
}

document.getElementById("bouton").addEventListener("click",BraveUpgr);

function LvlSup() {
    if (score >= lvlPrix) {
        document.location.href='Strawberry.html'
    }
}

document.getElementById("suivant").addEventListener("click",LvlSup);

