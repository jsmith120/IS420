
console.log(vegetable);

console.log(disease);

function myFunctio() {
    document.getElementById("myDropdown").classList.toggle("show");
}

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

    // console.log(vegDropdown);
    console.log(Object.keys(vegetable));
    var contents = "";
    vegArray = Object.keys(vegetable);
    for (var i = 0; i < vegArray.length; i++) {
        contents += "<a href='" + vegArray[i] + "'>" + vegArray[i] + "</a>";
    }
    vegDropdown.innerHTML = contents;
    vegDropdown.className = "dropdown-content show";
    vegTab = document.getElementById('Vegetables').className = "tabcontent show";

}

function diseaseDropDown(btn) {
    var disDropdown = document.getElementById('diseaseDropdown');

    console.log(Object.keys(disease));
    var contents = "";
    disArray = Object.keys(disease);
    for (var i = 0; i < disArray.length; i++) {
        contents += "<a href='" + disArray[i] + "'>" + disArray[i] + "/a";
    }
    disDropdown.innerHTML = contents;
    disDropdown.className = "dropdown-contentshow";
    vegTab = document.getElementById('Diseases').className = "tabcontent show";
}
