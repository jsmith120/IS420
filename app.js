
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function vegetableDropDown(btn) {
    var vegDropdown = document.getElementById('vegetableDropdown');
    document.getElementById( 'Diseases' ).classList.remove( 'show' );
    var contents = "";
    vegArray = Object.keys(vegetable);
    for (var i = 0; i < vegArray.length; i++) {
        contents += "<a href='#' onClick='populateVegetable(\"" + vegArray[ i ] + "\")'>" + vegetable[vegArray[i]].name + "</a>";
    }

    vegDropdown.innerHTML = contents;
    vegDropdown.className = "dropdown-content show";
    document.getElementById('Vegetables').className = "tabcontent show";

}

function diseaseDropDown(btn) {
    var disDropdown = document.getElementById('diseaseDropdown');
    document.getElementById( 'Vegetables' ).classList.remove('show');
    var contents = "";
    disArray = Object.keys(disease);
    for (var i = 0; i < disArray.length; i++) {
        contents += "<a href='#' onClick='populateDisease(\"" + disArray[ i ] + "\")'>" + disease[ disArray[ i ] ].name + "</a>";
    }
    disDropdown.innerHTML = contents;
    disDropdown.className = "dropdown-content show";
    document.getElementById('Diseases').className = "tabcontent show";
}

function populateVegetable(veg) {
    document.getElementById( "disease-container" ).style.display = 'none';
    document.getElementById( "heading" ).innerHTML = vegetable[ veg ].name;
    var img = document.getElementById( "displayImg" );
    img.src = vegetable[ veg ].pictureUrl;
    img.style.maxWidth='500px';
    document.getElementById( "description-body" ).innerHTML = vegetable[ veg ].description;
    document.getElementById( "uses-body" ).innerHTML = vegetable[ veg ].uses;
    document.getElementById("veg-container").style.display = 'block';
}

function populateDisease( d ) {
    document.getElementById( "veg-container" ).style.display = 'none';
    document.getElementById( "dis-heading" ).innerHTML = disease[ d ].name;
    document.getElementById( "disease-description-body" ).innerHTML = disease[ d ].description;
    var content = "<div><div>";
    var vegs = disease[ d ].vegetables;
    for  (var i = 0; i < vegs.length; i++) {
        var key = vegs[i].key;
        var url = vegetable[ key ].pictureUrl;
        var veg = vegetable[ key ].name;
        content += `<div class="veg-uses"><div class='image'><img class='theImage' src="${url}" /></div>`;
        content += `<div><h2>${veg}</h2><div>${disease[d].vegetables[i].use}</div></div></div>`;
        content += "</div>"
    }
    document.getElementById("disease-uses-body").innerHTML = content;

    document.getElementById( "disease-container" ).style.display = 'block';
}