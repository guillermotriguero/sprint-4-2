var users =
    [{ firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }];



const nombre = users.map(function (user) {
    return user.firstName;
});

console.log(nombre);






// var tasks = [
//     {
//         'name': 'Start React web',
//         'duration': 120
//     },
//     {
//         'name': 'Work out',
//         'duration': 60
//     },
//     {
//         'name': 'Procrastinate on facebook',
//         'duration': 240
//     }
// ];
