<template>
  <div id="no1">
    <div class="well">
      <div class="well-item" v-for="(v,k) in data">
        <div class="correct"><img  class="" :src="v.src"/></div>
        <div class="opposite">
          <div class="">
            <div :class="'opposite-content'+(k+1)">
              <div class="opposite-content-text">
                  今天吃{{v.order}}！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="robin_circle">
      <div :class="'r_out r_out'+k" v-for="(v,k) in data">
         <div class="r_in">
           <div :class="'r_c c'+(k+1)"></div>
           <div class="r_num">{{v.like/likes*100}}%</div>
         </div>
         <p class="r_name">{{v.order}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
        data () {
            return {
              likes:'',
              data:[
              {order:'小肥羊',like:7,src:require('../assets/no1/img/pro1.jpg'),like:7},
              {order:'达美乐',like:2,src:require('../assets/no1/img/pro2.jpg'),like:2},
              {order:'东北人家',like:1,src:require('../assets/no1/img/pro3.jpg'),like:1}]
            }
            
        },
        computed:{
          
        },
        methods:{
          
        },
        mounted() {
            this.$nextTick(()=>{    
                $(".well-item").hover(function(){
                  $(this).find(".correct").children().removeClass();
                  $(this).find(".opposite").children().removeClass();
                  $(this).find(".correct").children().addClass("test");
                  $(this).find(".opposite").children().addClass('test2');
                },function(){
                  $(this).find(".correct").children().removeClass();
                  $(this).find(".opposite").children().removeClass();
                  $(this).find(".correct").children().addClass("test2");
                  $(this).find(".opposite").children().addClass('test');
                });

                var likes=this.data[0].like+this.data[1].like+this.data[2].like;
                this.likes=likes;
                $(".c1").animate({
                  height: this.data[0].like/likes*100+'%'
                },1000);
                $(".c2").animate({
                  height: this.data[1].like/likes*100+'%'
                },1000)
                $(".c3").animate({
                  height: this.data[2].like/likes*100+'%'
                },1000)
                      })
                    }
        }
</script>

<style>
 @import '../assets/no1/css/animate.css';
#no1 {position: relative;clear: both;top:65px;} 
#no1 ul { list-style-type: none;}
#no1 h1 { width: 800px; margin: 40px auto 100px; font: 32px "Microsoft Yahei"; text-align: center; color: #D3D3D3; }
.robin_circle{position: relative;margin: 0 auto;width: 810px;margin-top: 84px}
.robin_circle .r_out {width:200px; height:200px; border:8px solid #d9d9d9; background:#fff; box-shadow:3px 3px 5px #bfbfbf; -webkit-box-shadow:3px 3px 5px #bfbfbf; -moz-box-shadow:3px 3px 5px #bfbfbf; -ms-box-shadow:3px 3px 5px #bfbfbf; border-radius:50%; -webkit-border-radius:50%; -moz-border-radius:50%; -ms_border-radius:50%; display:inline-block; margin-right:42px; position:relative;}
.r_out0{margin-left: 22px}
.robin_circle .r_out p {position:absolute; bottom:-63px; color:#fff; text-align:center; margin:0 auto; width:100%; font-size:20px; line-height:1.5; font-weight:bold;}

.robin_circle .r_in {width:180px; height:180px; border:10px solid #fff; border-radius:50%; -webkit-border-radius:50%; -moz-border-radius:50%; -ms_border-radius:50%; overflow:hidden!important; position:relative;transform: rotate(180deg);-webkit-transform:rotate(180deg)}
.robin_circle .r_c {width:180px; height:180px; height:0;}
.robin_circle .c1 {background:#fbad4c;}
.robin_circle .c2 {background:#87d7a5;}
.robin_circle .c3 {background:#00adc7;}
.robin_circle .r_num {color:#404040; font-size:40px; line-height:1.5; font-weight:bold; position:absolute; top:50%; margin-top:-25px; text-align:center; width:100%;transform: rotate(180deg);-webkit-transform:rotate(180deg)}

</style>
