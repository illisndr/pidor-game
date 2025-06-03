document.getElementById("start-btn").addEventListener("click", startGame);

let player = {
    name: "Игрок",
    age: 18,
    money: 1000,
    health: 100,
    happiness: 50
};

let events = [
    { text: "Ты поступил в университет. Учёба или работа?", choices: ["Учёба", "Работа"], outcomes: { "Учёба": { money: -500, happiness: 20 }, "Работа": { money: 1000, happiness: -10 } } },
    { text: "Ты заболел. Лечиться или ждать?", choices: ["Лечиться", "Ждать"], outcomes: { "Лечиться": { money: -300, health: 20 }, "Ждать": { health: -30 } } }
];

function startGame() {
    let container = document.getElementById("event-container");
    container.innerHTML = "";
    events.forEach(event => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${event.text}</p>`;
        event.choices.forEach(choice => {
            let button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", () => handleChoice(event.outcomes[choice]));
            div.appendChild(button);
        });
        container.appendChild(div);
    });
}

function handleChoice(outcome) {
    player.money += outcome.money || 0;
    player.health += outcome.health || 0;
    player.happiness += outcome.happiness || 0;

    document.getElementById("status").textContent = `Деньги: ${player.money}, Здоровье: ${player.health}, Счастье: ${player.happiness}`;
}
