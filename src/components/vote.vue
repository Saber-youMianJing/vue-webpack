<template>
  <div id="vote">
    <section class="container">
    <form @submit="submitFn($event)">
            <div class="search-wrapper">
                <div class="input-holder">
                    <input type="text" class="search-input" v-model="value" placeholder="Type to search" />
                    <button class="search-icon" @click="searchToggle('.search-icon',$event);"><span></span></button>
                </div>
                <span class="close" @click="searchToggle('.close',$event)"></span>
                <div class="result-container">

                </div>
            </div>
        </form>
  </section>

  <button class="likesubmit" @click="update">提交</button>

  <div id="votelist">
      <ul class="votecli" >
        <li v-for="(v,k) in filteredUsers">
          <img class="img" :src="v.src">
          <p>{{v.order}}</p>
          <p>推荐人：{{v.name}} | 人均：{{v.price}}</p>
          <p>{{v.type}}|{{v.addr}}</p>
        <div :class="[v.isLike?'heartAnimation':'','heart']"  :id="'like'+k"  @click="heart(v)"></div> <div class="likeCount" id="likeCount1">{{v.like}}</div>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>


export default {
  data () {
            return {
              value:'',
              isLikes:[],
              votelists:this.$store.state.votelists,
            }
        },
        computed: {
          filteredUsers: function () {
            var self = this
            return self.votelists.filter(function (user) {
              return user.name.indexOf(self.value.toLowerCase()) !== -1||user.order.indexOf(self.value.toLowerCase()) !== -1||user.type.indexOf(self.value.toLowerCase()) !== -1||user.addr.indexOf(self.value.toLowerCase()) !== -1||user.price.indexOf(self.value.toLowerCase()) !== -1
            })
          }
        },
        methods:{
          searchToggle:function(obj, evt){
                    var obj=$(obj);
                    var container = $(obj).closest('.search-wrapper');

                  if(!container.hasClass('active')){
                        container.addClass('active');
                        evt.preventDefault();
                  }
                  else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
                        container.removeClass('active');
                        // clear input
                        container.find('.search-input').val('');
                        // clear and hide result container when we press close
                        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
                  }
                },
            submitFn:function(evt){
                    evt.preventDefault();
                },
            heart:function(obj){

                    $(obj).css("background-position","")
                    if(obj.isLike == false){      
                    obj.like+=1;
                    obj.isLike = true;
                    }else{
                    obj.like-=1;
                    obj.isLike = false;
                    // $("#like"+index).css("background-position","left");
                    }
            },
            getCookie:function(name){
              var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
              if(arr=document.cookie.match(reg))
              return unescape(arr[2]);
              else
              return null;
            },
            setCookie:function (name,value){
              var Days = 1;
              var exp = new Date();
              exp.setTime(exp.getTime() + Days*24*60*60*1000);
              document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
            },
            update:function(){
              var islikes=0;
              for (var i = 0; i <this.votelists.length; i++) {
                if (this.votelists[i].isLike) {
                  islikes++;
                }
              };
              if(islikes==0){
                alert("请点赞至少一个餐厅")
              }else if (islikes>3) {
                alert("最多只能点赞3个餐厅")
              }else if (this.getCookie("numvote")==1){
                for (var i = 0; i <this.votelists.length; i++) {
                  if (this.votelists[i].isLike) {
                    this.$store.state.count.push(i)
                  }
                }
                this.setCookie("numvote","0")
                 alert("投票成功~")
              }else if (this.getCookie("numvote")==0) {
                alert("今天已经投过票了哦")
              }
            }
        },
        mounted() {
            this.$nextTick(()=>{  
              for (var i = 0; i <this.$store.state.count.length; i++) {
                  this.votelists[this.$store.state.count[i]].isLike=true;
                }
          })
        },
        created: function () {
          if(!this.getCookie("numvote")){
            this.setCookie("numvote","1")
          }
          
        },
    }
</script>

<style>
 @import '../assets/vote/css/style.css';
  @import '../assets/vote/css/search-form.css';
#vote{width: 800px;margin: 0 auto;clear: both;overflow-y:scroll;overflow-x:hidden;position: relative;height: 685px}
#votelist{clear: both;margin: 0 auto;position: relative;z-index: 1;left: -45px;top:100px;font-family: "SimHei"}
.votecli{list-style: none}
.votecli p{font-size: 17px;line-height: 30px}
#votelist li{background-color: rgba(255,255,255,0.14);margin-bottom: 5px;border-radius: 11px;padding-left: 120px;position: relative;}
.container{position: relative;top: 48px;left: 189px}
#vote .name{letter-spacing: 5px}
.img{position: absolute;top:10px;left: 28px;width: 70px}
.likesubmit{ position: absolute;left: 30%;background: rgba(255,255,255,0.3);border: none;border-radius: 33px;width: 147px;height: 52px;top: 13px;color: white;font-size: 20px;font-weight: bold;cursor: pointer;}
::-webkit-scrollbar{background-color: transparent;}
</style>
