<template>
  <div id="ramdon">
    <div id="gua1" style="width:295px;;margin:0 auto;" >
      <img id="gua1_img" src="../assets/random/img/gua_image.png" style="position: absolute;margin-top:130px;margin-left:160px;width:300px"/>
      <canvas id="front" class="myCanvas" style="position:absolute;no-repeat" />
    </div>
    <div style="width:400px;margin:0 auto">
      <div id="notify" style="width:295px;height:101px;margin:0 470px;position:relative;top:300px;margin-left:214px">
        <img id="nImg" src="../assets/random/img/notice_bg.png" style="position: absolute;width:400px"/>
      <div id="nImg_div" style="position: absolute;color:white;font-size: 17px;font-family: '黑体'" align="center">
        <div style="width:245px;height:101px;padding:55px 0px 0px 80px;" align="left">想不出次神马？刮开看看吧</div>
      </div>
      </div>
      <img id="nImg1" src="../assets/random/img/xiaodangjia.png" style="position: absolute;width:321px;margin-left:-181px"/>
    </div>
  </div>
</template>

<script>


export default {
   data () {
            return {
              img:'',
              likes:'',
              data:{name:'默认',order:'崔家木炭烤肉',like:0,isLike:false,src:require('../assets/vote/img/5.jpg'),addr:'蒙自路169号智造局内(徐家汇路蒙自路口)',type:"韩国烧烤",price:"64",lat:31.206379,lng:121.477885}

            }
            
        },
        computed:{
          
        },
        methods:{
          
        },
        mounted() {
            this.$nextTick(()=>{    
              var gua = 1,re = 2;
              var imgSrc;
              var order="今天午饭吃"+this.data.order;
              var orderimg=new Image();
              orderimg.src=this.data.src;
              $("#gua1_img").bind("load", function(){
                var body_width = $(window).width();
                var body_height = $(window).height();
                $("#gua1_img").width(300).height(159);
                var height = 141;
                var width  = 285;             
                $("#gua1").css({"margin-top":"20px"});
                var gua1_img_width = $("#gua1_img").width();
                $("#front").css({"margin-top":139.3+"px","margin-left":167.5+"px"});
                if(gua > 0){
                  bodys(height,width);
                }
              });


              function bodys(height,width){
                var canvas=document.getElementsByClassName('myCanvas')[0];
                var ctx=canvas.getContext('2d');
                canvas.style.position = 'absolute';  
                
                function callCanvasApps(){
                    ctx.fillStyle = "transparent";
                    ctx.fillRect(0, 0, 285, 143);
                    ctx.fillStyle = "white";
                    ctx.font = "20px Sans-Serif";
                    ctx.textBaseline = "top";
                    ctx.fillText (order,50,25);
                    ctx.drawImage(orderimg, 110, 55,70,70);
                    imgSrc = canvas.toDataURL();  
                  }
                
                orderimg.addEventListener('load',function(e){ 
                callCanvasApps();
                
                var w = width, h = height;             
                var offsetX = canvas.offsetLeft, offsetY = canvas.offsetTop;             
                var mousedown = false; 
                function layer(ctx){                   
                  ctx.fillStyle = 'gray';                 
                  ctx.fillRect(0, 0, w, h);             
                }   
                function eventDown(e){                 
                  e.preventDefault();                 
                  mousedown=true;             
                }   
                function eventUp(e){            
                  e.preventDefault();                 
                  mousedown=false;             
                }               
                function eventMove(e){                 
                  e.preventDefault();                 
                  if(mousedown){                     
                    if(e.changedTouches){                         
                      e=e.changedTouches[e.changedTouches.length-1];                     
                    }                     
                    var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,                         
                    y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;                     
                    if(ctx){                    
                      ctx.beginPath();
                      ctx.arc(x, y, 15, 0, Math.PI * 2);                         
                      ctx.fill();  
                      ctx.font = 'bold 24px consolas';              
                    }                
                  }             
                }               
                canvas.width=w;             
                canvas.height=h;
                layer(ctx);               
                ctx.globalCompositeOperation = 'destination-out';               
                canvas.addEventListener('touchstart', eventDown);             
                canvas.addEventListener('touchend', eventUp);             
                canvas.addEventListener('touchmove', eventMove);             
                canvas.addEventListener('mousedown', eventDown);             
                canvas.addEventListener('mouseup', eventUp);             
                canvas.addEventListener('mousemove', eventMove);       
                canvas.style.backgroundImage='url('+imgSrc+')';
                (document.body.style);
                }) 
              }  
            })
        }
    }
</script>

<style>
#ramdon{clear: both;}
.word{position: relative;margin: 0 auto;font-size: 20px}
</style>
