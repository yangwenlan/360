var swiper = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    centeredSlides: true,
    loop : true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

var swiper = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    slidesPerGroup:3,
});
var appdown=document.querySelector(".appdown");
var closebtn=document.querySelector(".closebtn");
closebtn.onclick=function(){
    appdown.style.display="none";
}
var back=document.querySelector(".back");
back.onclick=function(){
    var dd=document.body.scrollTop?document.body:document.documentElement;
    animate(dd,{scrollTop:0},300,Tween.Linear)
}