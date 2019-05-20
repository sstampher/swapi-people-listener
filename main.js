
async function info(){
    let namesArr = [];
    const response = await fetch('https://swapi.co/api/people/');
    const data = await response.json();
    for(let i=0;i<data.results.length;i++){
    namesArr.push(`<li>${data.results[i].name}</li>`);
    }
    return namesArr.join(' ');
    //people.innerHTML = `${namesArr.join(' ')}`;
}

info();

let people = document.getElementById('people');


async function displayPeople(){
    return people.innerHTML = `${await info()}`;
}

displayPeople();

