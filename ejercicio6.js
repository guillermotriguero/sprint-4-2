// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques.

// - Usar.forEach() per obtenir aquest array.

// - Usar.map() per obtenir aquest array.

var tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];


// Con forEach

const nombresEach = [];

tasks.forEach((task) => nombresEach.push(task.name));

console.log(nombresEach);


/// Con .map

const nombresMap = tasks.map(function (task) {
    return task.name;
});

console.log(nombresMap);


