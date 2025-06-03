document.getElementById("start-btn").addEventListener("click", startGame);

let player = {
    name: prompt("Введите имя персонажа:"),
    age: 18,
    money: 1000,
    health: 100,
    happiness: 50,
    energy: 100,
    skills: 0
};

let events = [
    { text: "Ты выбрал карьеру. Кем ты хочешь стать?", choices: ["Программист", "Музыкант", "Врач"], outcomes: { "Программист": { money: 2000, skills: 20 }, "Музыкант": { happiness: 30, money: 1000 }, "Врач": { money: 3000, health: 20 } } },
    { text: "Ты встретил интересного человека. Начать отношения?", choices: ["Да", "Нет"], outcomes: { "Да": { happiness: 40 }, "Нет": { happiness: -5 } } },
    { text: "Ты решил прокачать навыки. Заняться спортом или учёбой?", choices: ["Спорт", "Учёба"], outcomes: { "Спорт": { health: 30 }, "Учёба": { skills: 30 } } },
    { text: "Ты выиграл в лотерею! Сохранить деньги или потратить?", choices: ["Сохранить", "Потратить"], outcomes: { "Сохранить": { money: 5000 }, "Потратить": { happiness: 50 } } }
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
    player.energy -= 10;
    player.skills += outcome.skills || 0;

    document.getElementById("status").textContent = `Деньги: ${player.money}, Здоровье: ${player.health}, Счастье: ${player.happiness}, Энергия: ${player.energy}, Навыки: ${player.skills}`;
}
