$(document).ready(function(){
    flag = 0;
    $("#icon").click(function(){
        if(flag==0){
            $("#main").css('box-shadow','inset 0px 0px 0px 30px black, inset 0px -70px 0px 30px black');
            $("#main").css('background-color','rgba(0,0,0,0.2)');
            h1.style.marginTop = '100px';
            $("#m1").animate({top:'40%'},200);
            $("#m2").animate({top:'40%'},200);
            $("#m3").animate({top:'40%'},200);
            $("#m4").animate({top:'40%'},200);
            brother.style.opacity = 0.8;
            img1.style.opacity = 1;
            img3.style.opacity = 1;
            img1.style.marginRight = 10 + 'px';
            img3.style.marginLeft = 10 + 'px';
            flag = 1;
        }
        else{
            $("#main").css('box-shadow','inset 0px 0px 0px 0px black, inset 0px 0px 0px 0px black');
            $("#main").css('background-color','rgba(0,0,0,0)');
            h1.style.marginTop = '50px';
            $("#m1").animate({top:'100%'},200);
            $("#m2").animate({top:'100%'},200);
            $("#m3").animate({top:'100%'},200);
            $("#m4").animate({top:'100%'},200);
            brother.style.opacity = 0;
            img1.style.opacity = 0;
            img3.style.opacity = 0;
            img1.style.marginRight = 200 + 'px';
            img3.style.marginLeft = 200 + 'px';
            flag = 0;
        }
    })
})
