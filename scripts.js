$('#toggleDarkMode').bootstrapToggle({
    on: '<i class="fas fa-sun light-mode-toggle"></i>',
    off: '<i class="fas fa-moon dark-mode-toggle"></i>'
});
$(document).ready(function(){
    if($('#toggleDarkMode').is(":checked")){
        $("html").toggleClass("light-mode");
    } else {
        $("html").toggleClass("dark-mode");
    }
});

$('#toggleDarkMode').on("change", function(){
    if($('#toggleDarkMode').is(":checked")){
        $("html").removeClass("dark-mode");
        $("html").toggleClass("light-mode");
    } else {
        $("html").removeClass("light-mode");
        $("html").toggleClass("dark-mode");
    }
});
    