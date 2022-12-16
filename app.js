// OD1) console.log(numPlanets) = 8
// OD1) console.log(yearNeptuneDiscovered) = 1846

// OD2) console.log(discoveryYears) = {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// OD3) Your name is Alejandro and you like purple
// OD3) Your name is Melissa and you like greed
// OD3) Your name is undefined and you like green

// AD1) Maya
// AD1) Marisa
// AD1) Chi

// AD2) "Raindrops on roses"
// AD2) "whiskers on kittens"
// AD2) ["Bright copper kettles", "Warm woolen mittens", "Brown paper packages tied up with strings"]

// AD3) [10, 30,20]

// ES2015D)
const obj = {
    numbers: {
        a: 1
        b: 2
    }
};

const { a, b } = obj.numbers;

// ES2015AS)
[arr[0], arr[1] = arr[1], arr[0]];

// raceResults()
raceResults(['Tom', 'margaret', 'allison', 'david', 'pierre']);

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });