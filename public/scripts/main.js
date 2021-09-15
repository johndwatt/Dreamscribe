console.log("Main.js connected");

/* Navbar dropdown menu*/
$('#menu').on('click', function() {
    $('.navbar__list').toggleClass('hidden');
});

/* Reset error on reload */
window.addEventListener('load', function() {
    let error = undefined;
});

/* Get join date function */
const getJoinDateStr = function (date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let joinDateStr = `${month}/${day}/${year}`;
    return joinDateStr;
}