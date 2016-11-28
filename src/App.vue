<template>
  <div id="app">
    <header class="header">
        <hgroup>
            <h1>午饭次什么</h1>
            <br>
            <h2>What's for lunch today</h2>
        </hgroup>
    </header>
    <div id="wrapper">
      <div id="menu">
        <ul>
          <li><router-link to="/vote">我要投票</router-link></li>
          <li><router-link to="/view">查看菜系</router-link></li>
          <li><router-link to="/sgst">我要推荐</router-link> </li>
          <li><router-link to="/no1">众望所归NO.1</router-link> </li>
          <li><router-link to="/random">今日随机推荐</router-link> </li>
          <li><router-link to="/mood">饭后心情</router-link> </li>
        </ul>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import easing from './assets/js/easing.js'
import init from './assets/js/init.js'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import './assets/css/jq22.css';

#app{overflow: hidden;height: 100%;width: 100%}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
 /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 600px;
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(0);
  }
}

</style>
