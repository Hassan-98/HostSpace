// PreLoader Script
$(function(){
    setTimeout(function(){$(".loader").fadeOut(800)},2000)
});

// Navbar Scrolling Script
$(function(){
    $(window).scroll(function(){
        if( $(window).scrollTop() != 0){
            $("nav").css({
                "background":"var(--nav)",
                "padding":"0px 30px",
                "box-shadow":"1px 1px 6px rgba(0,0,0,.5)"
            });
        }
        else {
            $("nav").css({
                "background":"none",
                "padding":"20px 30px",
                "box-shadow":"none"
            });
        }

    });
});

// Open Colors Settings Script
$(".settings button").click(function(){
    $(this).siblings(".colors").toggleClass("closed");
});

// Apply Colors Settings Script
$(".main").click(function(){
    $(":root").css({
        "--mc1":"#4D1D85",
        "--mc2":"#d35400",
        "--overlay":"rgba(78, 29, 133, 0.9)",
        "--nav":"rgba(17, 0, 37, 0.9)"
    });
    $("header .header div input, header .header div select").css("box-shadow","1px 1px 10px rgba(0, 0, 0, 0.6)");
});

$(".red").click(function(){
    $(":root").css({
        "--mc1":"#c3200f",
        "--mc2":"#02a081",
        "--overlay":"#c32110de",
        "--nav":"#bf2412e0"
    });
    $("header .header div input, header .header div select").css("box-shadow","1px 1px 10px rgba(0, 0, 0, 0.6)");
});

$(".bnw").click(function(){
    $(":root").css({
        "--mc1":"#000",
        "--mc2":"#1995AD",
        "--overlay":"rgba(0,0,0,0.9)",
        "--nav":"rgba(0,0,0,0.95)"
    });
    $("header .header div input, header .header div select").css("box-shadow","1px 1px 10px rgba(255, 255, 255, 0.2)");
});

$(".green").click(function(){
    $(":root").css({
        "--mc1":"#137105",
        "--mc2":"#262626",
        "--overlay":"#137105e6",
        "--nav":"#2d981ef2"
    });
    $("header .header div input, header .header div select").css("box-shadow","1px 1px 10px rgba(0, 0, 0, 0.6)");
});

// Services Page Tabs
$(".buttons button").click(function(){
    $(".buttons button").removeClass("active");
    $(this).addClass("active");

    var heading = $(".text h2"),
        tabImg = $(".image"),
        tabText = $(".text");

    if( $(this).attr("class") == "hosting active" ){
        heading.text("Choose your hosting");
        tabImg.addClass("active");
        tabText.addClass("active");
        setTimeout(function(){
            tabImg.removeClass("active");
            tabText.removeClass("active");
        },500);
    }
    else if ( $(this).attr("class") == "domain active" ){
        heading.text("Choose your domain");
        tabImg.addClass("active");
        tabText.addClass("active");
        setTimeout(function(){
            tabImg.removeClass("active");
            tabText.removeClass("active");
        },500);
    }
    else if ( $(this).attr("class") == "cloud active" ){
        heading.text("Cloud Computing");
        tabImg.addClass("active");
        tabText.addClass("active");
        setTimeout(function(){
            tabImg.removeClass("active");
            tabText.removeClass("active");
        },500);
    }
    else if ( $(this).attr("class") == "resellers active" ){
        heading.text("Resellers");
        tabImg.addClass("active");
        tabText.addClass("active");
        setTimeout(function(){
            tabImg.removeClass("active");
            tabText.removeClass("active");
        },500);
    }
    else if ( $(this).attr("class") == "storing active" ){
        heading.text("Storing Resources");
        tabImg.addClass("active");
        tabText.addClass("active");
        setTimeout(function(){
            tabImg.removeClass("active");
            tabText.removeClass("active");
        },500);
    }
});