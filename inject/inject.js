// Anonymous "self-invoking" function
(function () {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function () {
        var $ = window.jQuery;
        // Use $ here...
        console.log($);
        documentReady();
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();



function documentReady() {
    var sidebar = '<div id="mySidenav" class="sidenav">' +
        '<a href="javascript:void(0)" class="closebtn">&times;</a>' +
        '<a href="#">About</a>' +
        '<a href="#">Services</a>' +
        '<a href="#">Clients</a>' +
        '<a href="#">Contact</a>' +
        '</div>';

    /* Set the width of the side navigation to 250px */
    window.openNav = function () {        
        document.getElementById("mySidenav").style.width = "250px";
    }

    window.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    }

    //append side nav.
    document.querySelector("body").innerHTML += sidebar;

    //Append button
    $("body").append('<input type="button" value=">>" style="    color: #020202;    position: absolute;    top: 430px;    left: 0;">');

    $("input:last").click(openNav);
    $(".closebtn").click(closeNav);

}


