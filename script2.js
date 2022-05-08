let receipts = [
    {name:'Tiramisu', sugar:35}, 
    {name:'Cheesecake', sugar:35},
    {name:'Apple Pie', sugar:35}
];

function suggestionsList(){
    document.getElementsByClassName('suggestions').style.display = "block";
    var input = searchinput.value; /* input = constante = valeur entrée par l'utilisateur */
    const result = receipts.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())); /* => désigne une fonction anonyme/ item = objet / toLocaleLowercase = convertit en minuscule */
    let suggestion = ''; /* on commence à créer notre liste de suggestion en fonction du filtre appliqué */
    result.forEach(resultItem => /* forEach = appliquer la fonction sur chaque élément du tableau */
        suggestion +=`
            <div class="suggestion">${resultItem.name}</div>
        `
    )

    document.getElementsByClassName('suggestions').innerHTML = suggestion;
};

var searchinput = document.getElementsByClassName('search');

for (var i=0; i < searchinput.length; ++i){
    searchinput[i].keyup = suggestionsList;
}