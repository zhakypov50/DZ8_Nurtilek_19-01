document.querySelector("#generate").addEventListener("click", () => {
    generate();
});
document.querySelector("#generate1").addEventListener("click", () => {
    generate();
});
document.querySelector("#generate2").addEventListener("click", () => {
    generate();
});

generate = () => {
    let quotes = {
        "- Нуртилек Жакыпов 1":
            '"Если у вас нет мужества, нет смысла иметь волю."',
        "- Нуртилек Жакыпов 2":
            '"Ты либо да, либо нет!"',
        "- Нуртилек Жакыпов 3":
            '"Hard work, pays off."',
        "- Нуртилек Жакыпов 4":
            '"Не беспокойтесь о том, чтобы стать успешным, а работайте над тем, чтобы стать значимым, и успех придет сам собой"',
        "- Нуртилек Жакыпов 5":
            '"Обрести успех - значит начать действовать"',
        "- Нуртилек Жакыпов 6":
            '"Вы должны рассматривать неудачу как начало и середину, но никогда не воспринимать ее как конец"',
        "- Нуртилек Жакыпов 7":
            '"Тяжелые времена рождают сильных людей"',
        "- Нуртилек Жакыпов 8":
            '"доверься своему создателю"',
        "- Нуртилек Жакыпов 9":
            '"что бы не произошло, всегда оствайся человеком"',
        "- Нуртилек Жакыпов 10":
            '"не важно где учишься , главное то что ты учишься в GeekTech"',
        "- Нуртилек Жакыпов 11":
            '"дорогу осилит только идущий"',
        "- Нуртилек Жакыпов 12":
            '"NEVER GIVE UP"',
        "- Нуртилек Жакыпов 13":
            '"самое сложное для человека, каждый день оставаться человеком"',
    };

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    let button = document.getElementById("generate1");
    button.onclick = function () {
        quotes.history.back()
    }

    let button2 = document.getElementById("generate2");
    button2.onclick = function () {
        quotes.history.go()
    }

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};
