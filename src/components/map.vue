<template>
  <div id="map">
    <div id="mapc"></div>
    <img :src="src">
  </div>
</template>

<script>

// import TextIconOverlay from '../assets/map/js/TextIconOverlay_min.js';
// import MarkerClusterer from '../assets/map/js/MarkerClusterer_min.js'
export default {
  data () {
            return {
              value:'',
              isLikes:[],
              votelists:this.$store.state.votelists,
              id:this.$route.params.id,
              src:require ('../assets/map/img/position.png')
            }
        },
        computed: {
          filteredUsers: function () {
          }
        },
        methods:{
          searchToggle:function(obj, evt){
                },
        },
        mounted() {
            this.$nextTick(()=>{ 
                  var Clat,Clng;
                  var geolocation = new BMap.Geolocation();
                  geolocation.getCurrentPosition(function(r){
                   if(this.getStatus() == BMAP_STATUS_SUCCESS){
                      Clat=r.point.lat;
                      Clng=r.point.lng
                    }
                  })
                  //实例化地图
                  var map = new BMap.Map("mapc");
                  map.centerAndZoom(new BMap.Point(this.votelists[this.id].lng, this.votelists[this.id].lat), 16);
                  map.enableScrollWheelZoom();
                  map.enableContinuousZoom();
                  map.enableInertialDragging(); 

                  //添加覆盖物
                  var myIcon = new BMap.Icon(require ('../assets/map/img/position.png'), new BMap.Size(40, 40));
                  var marker = new BMap.Marker(new BMap.Point(this.votelists[this.id].lng, this.votelists[this.id].lat),{icon:myIcon})
                  map.addOverlay(marker);

                  //添加信息窗口
                  var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="'+this.votelists[this.id].src+'" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '<br>地址：'+this.votelists[this.id].addr+'<br/>人均：'+this.votelists[this.id].price+'元<br/>推荐人：'+this.votelists[this.id].name
                  '</div>';
                  var searchInfoWindow = 
                  new BMapLib.SearchInfoWindow(map, content, {
                  title  : this.votelists[this.id].order,  width  : 290,   height : 105,
                  enableAutoPan : true,     //自动平移
                  searchTypes   :[
                  BMAPLIB_TAB_SEARCH,   //周边检索
                  BMAPLIB_TAB_TO_HERE,  //到这里去
                  BMAPLIB_TAB_FROM_HERE //从这里出发
                  ]});


                    searchInfoWindow.open(marker);
                    marker.addEventListener("click", function(){
                       searchInfoWindow.open(marker) 
                    });



          })
        },
        created: function () {
          
        },
    }
</script>

<style>
#map{clear: both;width: 800px;margin:0 auto;margin-top:172px;}
#mapc{width: 600px;height: 600px;margin: 70px 100px}  

</style>
