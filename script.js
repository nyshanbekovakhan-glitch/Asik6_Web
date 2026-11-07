$(document).ready(function() {
    $("body").css("font-family", "Arial, sans-serif");
    $("#name").css("color","royalblue");
    $(".headline").css("font-size","22px");
    $("#changeText").click(function() {
        $("#title").text("Hello! Welcome to Khanzada's Portfolio!");
    });
    $("#lightTheme").click(function() {
        $("body").css({"background-color": "white", "color": "black"});
        $("#profile").css("background-color", "white");
    });
    $("#darkTheme").click(function() {
        $("body").css({"background-color": "black", "color": "white"});
        $("#profile").css("background-color", "black");
    });
    $("#hide").click(function(){
        $("#info").hide();
    });
    $("#show").click(function(){
        $("#info").show();
    });
    $("#toggle").click(function(){
        $("#info").toggle();
    });
    $("#fadeIn").click(function(){
        $(".gallery-item").fadeIn();
    });
    $("#fadeOut").click(function(){
        $(".gallery-item").fadeOut();
    });
    $("#fadeToggle").click(function(){
        $(".gallery-item").fadeToggle();
    });
    $(".slide-heading").click(function(){
        $(this).next(".slide-panel").slideDown(500);
    });
    $(".slide-heading").dblclick(function() {
        $(this).next(".slide-panel").slideUp(500);
    });
    $(".slide-heading").mouseleave(function() {
        $(this).next(".slide-panel").slideToggle();
    });
    $("#add-skill").click(function() {
        let skill=$("#skill-input").val().trim();
        if(skill!=="") {
            $("#skill-list").append("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });
    $("#prepend-skill").click(function() {
        let skill=$("#skill-input").val().trim();
        if(skill!=="") {
            $("#skill-list").prepend("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });
    $("#remove-skill").click(function() {
        $("#skill-list li:last").remove();
    });
    $("#change-link").click(function() {
    $("#social-link").attr("href", "https://www.linkedin.com/in/khanzada-nyshanbek-9862b6411/");
    $("#social-link").text("Visit My LinkedIn");
    });
    $("#un").keyup(function() {
        let name = $(this).val();
        $("#pn").text("Name: " + name);
    });
    $("#ue").keyup(function() {
        let email = $(this).val();
        $("#pe").text("Email: " + email);
    });
    let isAnimated = false;
    $("#animate-skills").click(function() {
    if (isAnimated === false) {
        $("#java").animate({ 
            width: "85%" }, 1000);
        $("#python").animate({ 
            width: "70%" }, 1000);
        $("#html").animate({ 
            width: "95%" }, 1000);
        $("#javascript").animate({ 
            width: "60%" }, 1000);
        isAnimated = true;
    }else{
        $(".bar div").stop().animate({
            width: "0%" }, 1000);
        isAnimated = false;
    }
});
    console.log("jQuery is ready!");
});
