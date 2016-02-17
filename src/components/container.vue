<template>
  <div  id ="container">
    <div class="row col-md-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">面板</h3>
        </div>
        <div class="panel-body">
          <strong>Author Email</strong> : shinemotec#gmail.com<br/>
          <strong>Author Blog</strong> :<a href="http://19930401.com">19930401.com</a><br/>
          <strong>Resource</strong> : <a>Github</a><br/>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">友情链接</h3>
        </div>
        <div class="panel-body">
          <a href="http://19930401.com">19930401.com</a><br/>
          <a href="http://90its.cn">90its.cn</a><br/>
        </div>
      </div>
    </div>
    <div class="row col-md-offset-1 col-md-8" >
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Vpn数据</h3>
        </div>
        <div class="panel-body">
            <Vpn></Vpn>
        </div>
    </div>
  </div>
</template>
<script>
import Vpn from './vpn'
export default {
  components: {
    Vpn
  }
}
</script>
