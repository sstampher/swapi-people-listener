
async function info(person){

    let namesArr = [];
    const response = await fetch('https://swapi.co/api/people/');
    const data = await response.json();

    if(person){
        for(let i=0;i<data.results.length;i++){
            if(data.results[i].name === person){
            const infoCategories = Object.keys(data.results[i]);
            let infoCategoriesList = infoCategories.map(item => `<li>${item}</li>`)

            const infoCategoriesText = Object.values(data.results[i]);
            let infoCategoriesTextList = infoCategoriesText.map(item => `<li>${item}</li>`)


            personInfo.innerHTML = `<ul id="traits">${infoCategoriesList.join(' ')}</ul>
                                    <ul id="traits">${infoCategoriesTextList.join(' ')}</ul>`
       }
    }
    }                             
                                    

    for(let i=0;i<data.results.length;i++){
    namesArr.push(`<li>${data.results[i].name}</li>`);
    }
    return namesArr.join(' ');
}
info();


let people = document.getElementById('people');
let personInfo = document.getElementById('personInfo');

async function displayPeople(){
    return people.innerHTML = `${await info()}`;
}

displayPeople();

async function displayInfo(e){
    let personName = e.target.innerHTML;
    console.log(await info(personName));
}

people.addEventListener('click', displayInfo);
