$(document).ready(function () {
//draggable function
$(function () {
    $("#position-box").draggable();
});
$(function () {
    $("#position-box2").draggable();
});
$(function () {
    $("#resizable-box").draggable();
});

//resizable function
$(function () {
    $("#resizable-box").resizable({
        autoHide: true
    });
});

//active on top
$("#resizable-box").draggable({
    start: function () {
        $("#resizable-box").css("z-index", "99");
        $(".desktop-folders").find("div.folder-style").css("z-index", "5");
    },
    drag: function () {},
    stop: function () {}
});

$(".desktop-folders").find("div.folder-style").draggable({
    start: function () {
        $("#resizable-box").css("z-index", "5");
        $(".desktop-folders").find("div.folder-style").css("z-index", "99");
    },
    drag: function () {},
    stop: function () {}
});

//tooltip function
$(function () {
    $(".dock-icons").tooltip({
        position: {
            my: "center bottom-20",
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $(this)
                    .addClass(feedback.vertical);
            }
        },
        show: {
            duration: 8
        },
        hide: {
            duration: 8
        },
    });
});

//menu bar
$("ul.parent > li").hover(function () {
    $(this).find("ul.child").show().menu({
        icons: {
            submenu: 'ui-icon-blank'
        }
    });
}, function () {
    $(this).find("ul.child").hide()
});

//sidebar items linked to proper div content
$(".item-selected").on("click", function (event) {
    var clickedItem = ($(event.target).text()).replace(/\s+/g, '-').toLowerCase();
    $("#main-box").find("div.hide").css("display", "none");
    $('#sidebar-' + clickedItem + '').css("display", "flex");
});

//current time
var date = new Date();
var time = date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
});
document.getElementById("current-time").innerHTML = time;

//change font color on hover
$("#main-nav-menu > li").mouseover(function () {
    $(this).find("a").css("color", "white");
}).mouseleave(function () {
    $(this).find("a").css("color", "black");
});

//change apple icon color
$("#main-nav-menu > li:first-of-type").hover(function () {
    $("#apple-icon").attr('src', 'images/apple-logo-white.png');
}, function () {
    $("#apple-icon").attr('src', 'images/logo.svg');
});

//red button closes finder window
$("#red-cross").on("click", function () {
    $("#resizable-box").css("display", "none");
});

//double click on folder opens finder
$(".desktop-folders").find("div.folder-style").dblclick(function () {
    $("#resizable-box").css("display", "block");
});

//dock function
    $('.main-nav-list img').resizeOnApproach({
        elementDefault: 70,
        elementClosest: 90,
        triggerDistance: 100
    });
});