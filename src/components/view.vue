<template>
    <div id="view">
      <!--   <header class="header">
        <hgroup>
            <h1>菜系列表</h1>
            <h2>What's for lunch today</h2>
        </hgroup>
        </header> -->

        <section class="demo">

          <dl class="list nigiri" @click="click('.nigiri')">
              <dt>第二页</dt>
              <dd v-for="(item,index) in order" v-if="index>=5&&index<10"><router-link :to="'/map'+index">{{item.order}}</router-link></dd>
          </dl>
  
          <dl class="list maki" @click="click('.maki')">
              <dt>第一页</dt>
              <dd v-for="(item,index) in order" v-if="index<5" ><router-link :to="'/map'+index">{{item.order}}</router-link></dd>  
          </dl>
  
          <dl class="list sashimi" @click="click('.sashimi')">
              <dt>第三页</dt>
              <dd v-for="(item,index) in order" v-if="index>=10" ><router-link :to="'/map'+index">{{item.order}}</router-link></dd>  
          </dl>
        <a href="#" class="toggle">查看全部菜单</a>
    </section>

    <div class="warning">
        <div class="message">
            <h1>CSS 3D Not Detected :(</h1>
            <p>I couldn't detect your browser's CSS 3D capabilities. If I'm wrong, please  file an issue , otherwise, try a  sexier browser </p>
        </div>
    </div>
  </div>
</template>
<script>
import makisu from '../assets/view/js/makisu.js'

export default {
        data () {
            return {
              order:this.$store.state.votelists,
              quick:this.$store.state.votelists,
 

            }
        },
        computed: {
          firstpage: function () {
            var self = this
            return self.order.filter(function (user) {
              return self.order.legnth<=5
            })
          }
        },   
        methods:{
          click:function(a){
            $(a).makisu( 'open' );
          }
        },
        mounted() {
            this.$nextTick(()=>{     
                 if ( $.fn.makisu.enabled ) {
                    var $sashimi = $( '.sashimi' );
                    var $nigiri = $( '.nigiri' );
                    var $maki = $( '.maki' );
                    // Create Makisus
                  $nigiri.makisu({
                      selector: 'dd',
                      overlap: 0.85,
                      speed: 1.7
                  });
                  $maki.makisu({
                      selector: 'dd',
                      overlap: 0.6,
                      speed: 0.85
                  });
                  $sashimi.makisu({
                      selector: 'dd',
                      overlap: 0.2,
                      speed: 0.5
                  });
                  // Open all
                  // $( '.list' ).makisu( 'open' );
                  // Toggle on click
                  $( '.toggle' ).on( 'click', function() {
                    $( '.list' ).makisu( 'open' );
                   });
                  // Disable all links
                  $( '.demo a' ).click( function( event ) {
                    event.preventDefault();
                  });
              } else {
                $( '.warning' ).show();
              } 
          })
        },
    }
</script>

<style>
  @import 'http://fonts.googleapis.com/css?family=Days+One';
  @import '../assets/view/css/style.css';
  #view{clear: both}

</style>
