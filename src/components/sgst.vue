<template>
  <div id="sgst">
    <div class="info">
        <section class="content bgcolor-4">
          <span class="input input--madoka">
            <input class="input__field input__field--madoka" type="text" id="input-31" v-model="name"/>
            <label class="input__label input__label--madoka" for="input-31">
              <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
              </svg>
              <span class="input__label-content input__label-content--madoka">推荐人</span>
            </label>
          </span>
          <span class="input input--madoka">
            <input class="input__field input__field--madoka" type="text" id="input-32" v-model="ordername"/>
            <label class="input__label input__label--madoka" for="input-32">
              <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
              </svg>
              <span class="input__label-content input__label-content--madoka">推荐餐厅</span>
            </label>
          </span>

          <span class="input input--madoka">
            <span class="input__label-content input__label-content--madoka" style="font-size: 1.4em;font-weight: bold;padding-left: 0.6em;">餐厅所在区</span>
            <select class="input__field input__field--madoka" type="text" id="input-35" style="color:#f6d88c!important" v-model="dir">
              <option>黄浦区</option>
              <option>卢湾区</option>
              <option>徐汇区</option>
              <option>长宁区</option>
              <option>静安区</option>
              <option>普陀区</option>
              <option>闸北区</option>
              <option>虹口区</option>
              <option>杨浦区</option>
              <option>浦东新区</option>
              <option>宝山区</option>
            <label class="input__label input__label--madoka" for="input-35">
              <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="  none">
                <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
              </svg>
              
            </label>
            </select >
          </span>

          <span class="input input--madoka">
            <input class="input__field input__field--madoka" type="text" id="input-33"  v-model="addr"/>
            <label class="input__label input__label--madoka" for="input-33">
              <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="  none">
                <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
              </svg>
              <span class="input__label-content input__label-content--madoka">餐厅地址</span>
            </label>
          </span>
          <span class="input input--madoka">
            <input class="input__field input__field--madoka" type="number" id="input-34" v-model="price"/>
            <label class="input__label input__label--madoka" for="input-34">
              <svg class="graphic graphic--madoka" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="  none">
                <path d="m0,0l404,0l0,77l-404,0l0,-77z"/>
              </svg>
              <span class="input__label-content input__label-content--madoka">人均消费</span>
            </label>
          </span>
      </section>
    </div>

    <div class="image-editor">
      <i class="iconfont shangchuan"></i>
      <p class="uoload">上传餐馆照片</p>
      <input type="file" class="cropit-image-input" style="margin-bottom:20px;opacity:0;cursor:pointer;z-index:3">
      <div class="cropit-preview"></div>
      <div class="image-size-label">
        调整大小
      </div>
      <i class="iconfont iconfontrementupian" id="pics"></i><input type="range" class="cropit-image-zoom-input"><i class="iconfont iconfontrementupian" id="picb"></i>
      <span class="rotate-ccw" @click="left"><i class="iconfont nishizhen"></i>向左旋转</span>
      <span class="rotate-cw" @click="right"><i class="iconfont shunshizhen90"></i>向右旋转</span>
<!--       <button class="export">Export</button> -->
    </div>
    <button class="submit" @click="submitobj">确认上传</button>
  </div>
</template>

<script>
import EXIF from 'exif-js'
import cropit from 'cropit'
export default {
  data () {
            return {
              name:"", ordername:"",dir:"杨浦区",addr:"",price:"",
              votelists:this.$store.state.votelists,
            }
        },
        methods:{
          right:function(){
            $('.image-editor').cropit('rotateCW');
          },
          left:function(){
            $('.image-editor').cropit('rotateCCW');
          },
          submitobj:function(){
            var that=this;
            var obj = {};
            var imageData = $('.image-editor').cropit('export');
            var myGeo = new BMap.Geocoder();
            if(that.name==''){alert('请填写推荐人')}else if(that.ordername==''){alert('请填写推荐餐厅')}
                else if(that.addr==''){alert('请填写餐厅地址')}
                else if(that.price==''){alert('请大概预估一下人均')}
                else if(imageData==''){alert('请上传餐厅照片')}
                else{
              myGeo.getPoint(that.addr, function(point){
               if (point) {
                  obj.id=that.votelists.length+1;
                  obj.name = that.name;
                  obj.order = that.ordername;
                  obj.like = 0;
                  obj.isLike = false;
                  obj.src = imageData;
                  obj.addr = that.dir+that.addr;
                  obj.type="";
                  obj.price = that.price;
                  obj.lat=point.lat;
                  obj.lng=point.lng;
                  console.log(obj);
                }else{
                  alert("您选择地址没有解析到结果!");
                }
              }, "上海市");
            }
          }
        },
        mounted() {
            this.$nextTick(()=>{
                $('.image-editor').cropit({
                imageState: {
                  src:'',
                }
              });          
          })
      }
    }
</script>

<style>
@import '../assets/sgst/css/component.css';
@import '../assets/sgst/css/demo.css';
@import '../assets/sgst/css/normalize.css';
@import '../assets/sgst/icon/iconfont.css';
.info{position: absolute;top: 34px;width: 360px;left: 41px}
.cropit-image-zoom-input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #272728;
    height: 5px;
    background: #eee;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    outline: none;
    margin-left: 25px;
    margin-top: -6px;
    margin-bottom: 10px; 
  }
input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                cursor: default;
                top: -5px;
                height: 15px;
                width: 15px;
                transform: translateY(0px);
                background: none repeat scroll 0 0 #888;
                border-radius: 15px;
            }
#sgst{clear: both;margin: 0 auto;width: 800px;position: relative;top: 20px}
.cropit-preview {

        width: 230px;
        height: 250px;
}
.cropit-preview-image-container {
        cursor: move;
}
.image-size-label {
  margin-top: 10px;
}
.image-editor{position: relative;left: 500px;top: 56px}
.rotate-ccw{position: relative;top: 3px;font-size: 18px;line-height: 36px;left: -40px;-moz-user-select:none;
user-select:none;}
.rotate-ccw i{font-size: 30px}
.rotate-cw{position: relative;top:5px;font-size: 18px;line-height: 36px;left: -34px;-moz-user-select:none;
user-select:none;}
.rotate-cw i{font-size: 26px}
#pics{position: relative;top: 7px;}
#picb{position: relative;top: -31px;left: 163px;font-size: 30px}
.shangchuan{position: absolute;;top: 3px;font-size: 30px;cursor: pointer}
.uoload{position: absolute;;left: 41px;font-weight: bold;top: 3px;cursor: pointer}
.submit{ position: relative;left: 335px;background: rgba(255,255,255,0.3);border: none;border-radius: 33px;width: 147px;height: 52px;top: 124px;color: white;font-size: 20px;font-weight: bold;}
input, .export {
  display: block;
}
button {
  margin-top: 10px;
}

</style>
