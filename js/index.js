


$(".navbar li").click( function(){

    $(this).addClass("active").siblings().removeClass("active")
})



$(".btn-booking").mouseenter( function(){

    $(".btn-booking").addClass("animate__animated animate__heartBeat")
})
$(".btn-booking").mouseleave( function(){

    $(".btn-booking").removeClass("animate__animated animate__heartBeat")
})


$("#bottomHaeder .bg-primary").mouseenter( function(){

    $("#bottomHaeder .bg-primary").addClass("animate__animated animate__bounce")
})
$("#bottomHaeder .bg-primary").mouseleave( function(){

    $("#bottomHaeder .bg-primary").removeClass("animate__animated animate__bounce")
})

$("#bottomHaeder .bg-info").mouseenter( function(){

    $("#bottomHaeder .bg-info").addClass("animate__animated animate__bounce")
})
$("#bottomHaeder .bg-info").mouseleave( function(){

    $("#bottomHaeder .bg-info").removeClass("animate__animated animate__bounce")
})

$("#bottomHaeder .bg-orange").mouseenter( function(){

    $("#bottomHaeder .bg-orange").addClass("animate__animated animate__bounce")
})
$("#bottomHaeder .bg-orange").mouseleave( function(){

    $("#bottomHaeder .bg-orange").removeClass("animate__animated animate__bounce")
})







let heighNav = $(".nav-top-info").innerHeight();
$("#header").css("marginTop",heighNav)

$(window).scroll( function(infoScroll){

    let heighDoc = $(document).scrollTop();

    if( heighDoc > 100 )
    {
        $(".nav-top-info").css("boxShadow" , " 0px 0px 20px rgb(0, 0, 0, .5)");
    }
    else
    {
        $(".nav-top-info").css("boxShadow" , "none");
    }

})





$('#check .owl-carousel').owlCarousel({
    rtl:true,
    dots:true,
    loop:true,
    margin:10,
    autoplay:true,
    animateIn:"animate__animated animate__flipInX",
    animateOut:"animate__animated animate__slideOutDown",
    responsive:{
        0:{
            items:1
        }
    }
})


let items = document.querySelectorAll(".body-speciDawi .col-xl-3");

for (let i = 0; i < items.length; i++) {
    
    $(items[i]).mouseenter( function(){

        $(items[i]).addClass("animate__animated animate__pulse");
    })

    $(items[i]).mouseleave( function(){

        $(items[i]).removeClass("animate__animated animate__pulse");
    })
}

$(".body-speciDawi .btn-orange").mouseenter( function(){

    $(".body-speciDawi .btn-orange").addClass("animate__animated animate__heartBeat");
})
$(".body-speciDawi .btn-orange").mouseleave( function(){

    $(".body-speciDawi .btn-orange").removeClass("animate__animated animate__heartBeat");
})