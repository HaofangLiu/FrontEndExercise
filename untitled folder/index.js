import Game from "./game/Game.js";

//Login
const els = {
  login: document.querySelector(".login"),
  loginBtn: document.querySelector(".btn-login"),
  loginText: document.querySelector(".inputClass"),
  showContainer: document.querySelector(".container"),
  userName: document.querySelector(".container h3"),
  heroUl: document.querySelector(".hero ul"),
  skillUl: document.querySelector(".skill ul")
};

const game = new Game();

els.loginBtn.onclick = function() {
  els.login.style.display = "none";
  els.showContainer.style.display = "block";
  const userName = els.loginText.value;
  game.login(userName);
  game.loadHeros();
  els.userName.innerHTML = `Your name is : ${game.player.name}`;
  game.player.heros.forEach(heros => {
    const li = document.createElement("li");
    li.innerHTML = `Hero Name: ${heros.name} <img scr = './sources/heros/${heros.icon}' />`;
    console.log(heros.icon);
    li.onclick = function() {
      heros.skills.forEach(skill => {
        const skillLi = document.createElement("li");
        skillLi.innerHTML = `Skill name: ${skill.name} <img scr = './sources/skills/${skill.icon}' />`;
        console.log(skill.icon);
        els.skillUl.appendChild(skillLi);
      });
    };
    els.heroUl.appendChild(li);
  });
  console.log(game);
};
