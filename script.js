let receipts = [
    {name:'Tiramisu', sugar:35}, 
    {name:'Cheesecake', sugar:35},
    {name:'Apple Pie', sugar:35}
]; /* Création d'une liste de recettes pré-enregistrées */


var searchinput = document.getElementsByClassName('search');

for (var num=0; max=searchinput.length, num<max; num++){
    searchinput[num].addEventListener('keyup', function(){
        var suggestionsList = document.getElementsByClassName('suggestions');
        for (var num2=0; max2=suggestions.lenght, num2<max2; num++){
            const input = searchinput.value;
            const result = receipts.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())); 
            let suggestion = ''; 
            result.forEach(resultItem =>
                suggestion +=`
                    <div class="suggestion">${resultItem.name}</div>
                `
            )
    /* créer une var suggestionList */
    /* suggestions.lenght = any résoudre le pb*/ 
            document.getElementsByClassName('suggestions').innerHTML = suggestion;
        };
    }, false);

}
       