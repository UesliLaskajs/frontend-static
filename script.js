document.addEventListener('DOMContentLoaded', function () {
    var select = document.querySelector('#options-type-select');
    var glide = new Glide('#options-type', {
        type: select.value,
        focusAt: 'center',
        perView: 3
    });

    select.addEventListener('change', function (event) {
        glide.update({
            type: event.target.value
        });
    });

    glide.mount();
});


document.addEventListener("DOMContentLoaded", function () {
    let toggles = document.querySelectorAll(".link_text"); 
    
    toggles.forEach(function (toggle) { 
        toggle.addEventListener("click", function () {
            let dropDownContent = toggle.querySelector(".link_dropdowns"); 
            if (dropDownContent.style.display === "none" || dropDownContent.style.display === "") {
                dropDownContent.style.display = "block"; 
            } else {
                dropDownContent.style.display = "none"; 
            }
        });
    });
});
