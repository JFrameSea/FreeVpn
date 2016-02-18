<template>
    <table class="table  table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>VpnName</th>
          <th>ip</th>
          <th>评价分数</th>
          <th>ping</th>
          <th>国家</th>
          <th>下载</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for = "datalist in VpnData | paginates page.start page.limit">
          <td>{{datalist[15]}}</td>
          <td>{{datalist[0]}}</td>
          <td>{{datalist[1]}}</td>
          <td>{{datalist[2]}}</td>
          <td>{{datalist[3]}}</td>
          <td>{{datalist[6]}}</td>
          <td><a href="http://wechat.rumia.me/{{datalist[14]}}">OpenVpn配置文件下载</a></td>
        </tr>
      </tbody>
    </table>
    <div class="row">
			<div class="col-md-12 center">
				<ul class="pager">
				  	<li>
				  		<button @click="paginate('previous')" :disabled="page.start <= 0">
				  			Previous
				  		</button>
				  	</li>
				  	<li>
				  		<button @click="paginate('next')" :disabled="page.limit >= page.total">
				  			Next
				  		</button>
				  	</li>
				</ul>
			</div>
		</div>
</template>
<script>
export default {
  data (response) {
    return {
      VpnData: [],
      page: {
        start: 0,
        limit: null,
        pagination: 10,
        total: null
      }
    }
  },
  created () {
    this.page.limit = parseInt(this.page.pagination, 10)
  },
  watch: {
    pagination () {
      this.page.limit = parseInt(this.page.pagination, 10)
      if (this.page.limit !== this.page.start && this.page.start > 0) {
        this.page.start = parseInt(this.page.pagination, 10)
        this.page.limit = this.page.start + parseInt(this.page.pagination, 10)
      }
    }
  },
  methods: {
    paginate (direction) {
      if (direction === 'next') {
        this.page.start += parseInt(this.page.pagination, 10)
        this.page.limit += parseInt(this.page.pagination, 10)
      }else if (direction === 'previous') {
        this.page.limit -= parseInt(this.page.pagination, 10)
        this.page.start -= parseInt(this.page.pagination, 10)
      }

    }
  },
  ready () {
    this.$http({
      url: 'http://wechat.rumia.me/vpn_json',
      method: 'get'
    }).then(function (response) {
      this.VpnData = response.data
      this.page.total = response.data.length
    }, function (response) {
      this.VpnData = 'Api数据获取异常'
    })
  }
}
</script>
<style>
.pager button {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    color: #337AB7;
    padding: 7px 13px;
    text-align: center;
}

.pager button:hover {
    background: #eee;
    cursor: pointer;
    outline: none;
}

.pager button:disabled {
    background: #eee;
    color: #bbb;
}
</style>
