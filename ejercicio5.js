// Modifica la funció 'a()' per a reemplaçar la promesa per aync / await:
// function a() {

//     b().then() = > {
//         doMoreWork();
//     }
// }

function b() {
    // tasques asíncrones , que triguen una estona..
}


async function a() {

    let b = await b();
    let moreWork = await doMoreWork();

    console.log(moreWork);
}