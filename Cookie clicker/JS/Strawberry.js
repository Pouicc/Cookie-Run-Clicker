let score = 0
let upgradePrix = 10
let apgradePrix = 100
let lvlPrix = 10000
let upgrade = 1
let apgrade = 0
let upgradeModif = 1.2
let apgradeModif = 1.4
let autoplay = true

function FraiseAugm() {
    score = score + 1 * upgrade;
    document.getElementById("score").textContent = "Cookies : " + score.toFixed(0);
}

document.getElementById("CookieClic").addEventListener("click",FraiseAugm);

function FraiseUpgr() {
    if (score >= upgradePrix) {
        upgrade = upgrade + 1;
        score = score - upgradePrix;
        upgradePrix = upgradePrix * upgradeModif;
        document.getElementById("bouton").textContent = "Améliorer Clic : " + upgradePrix.toFixed(0) + " cookies";
        document.getElementById("score").textContent = "Cookies : " + score.toFixed(0);
        document.getElementById("clic").textContent = "Cookies par clic : " + upgrade.toFixed(0);
    }
}

document.getElementById("bouton").addEventListener("click",FraiseUpgr);

function FraiseApgr() {
    if (score >= apgradePrix) {
        apgrade = apgrade + 1;
        score = score - apgradePrix;
        apgradePrix = apgradePrix * apgradeModif;
        document.getElementById("Auto").textContent = "Améliorer Auto : " + apgradePrix.toFixed(0) + " cookies";
        document.getElementById("score").textContent = "Cookies : " + score.toFixed(0);
        document.getElementById("Aclic").textContent = "Cookies par seconde : " + apgrade.toFixed(0);
    }
}

document.getElementById("Auto").addEventListener("click",FraiseApgr);

setInterval(() => {
    if (autoplay == true) {
        score = score + 1 * apgrade;
        document.getElementById("score").textContent = "Cookies : " + score.toFixed(0);
    }
},1000)

function LvlSup() {
    if (score >= lvlPrix) {
        document.location.href='Ninja.html'
    }
}

document.getElementById("suivant").addEventListener("click",LvlSup);