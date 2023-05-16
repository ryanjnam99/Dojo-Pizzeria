var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function oracle() {
    var randomIndex = Math.floor(Math.random() * (lifesAnswers.length));
    return lifesAnswers[randomIndex];
}
console.log(oracle());



function d6(min, max) {
    var roll = Math.ceil(Math.random() * max);
    return roll;
}

var playerRoll = d6(1, 6);

function d6() {
    return Math.ceil(Math.random() * 6);
}
console.log(d6());

console.log("The player rolled: " + playerRoll);
var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor); // 1
console.log(ceiling); // 4
console.log(random); // Some random decimal between 0 and 1


var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

function flying() {
    for(let i = 0; i < pokémon.length; i++) {
        if(pokémon[i].types[1] == "flying") {
            console.log(pokémon[i].name);
        }
    }
}

flying();


function reversedPoison() {
    for(var i = pokémon.length-1; i >= 0; i--) {
        if((pokémon[i].types.length == 1) && (pokémon[i].types == "poison"))  {
        console.log(pokémon[i].name);
        }
    }
}
reversedPoison();




function divisibleByThree() {
    for (var i = 0; i < pokémon.length - 1; i++) {
        if (pokémon[i].id % 3 == 0) {
            console.log(pokémon[i].name);
        }
    }
}
divisibleByThree();

function twotypes() {
    for (var i = 0; i < pokémon.length; i++) {
        if (pokémon[i].types.length > 1) {
            console.log(pokémon[i].name);
        }
    }
}

twotypes();

function moreThanOneType() {
    for (var i = 0; i < pokémon.length; i++) {
        if (pokémon[i].types.length > 1) {
            console.log(pokémon[i].name);
        }
    }
}
moreThanOneType();

function poison() {
    for(var i = 0; i < pokémon.length; i++) {
        if((pokémon[i].types.length == 1) && (pokémon[i].types == "poison"))  {
        console.log(pokémon[i].name);
        }
    }
}
poison();

function flying() {
    for(let i = 0; i < pokémon.length; i++) {
        if(pokémon[i].types[1] == "flying") {
            console.log(pokémon[i].name);
        }
    }
}
flying();





