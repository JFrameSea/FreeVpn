<template>
  <div>
    <table class="table  table-bordered">
      <thead>
        <tr>
          <th><a href="#"  v-on:click= "SortBy('Id')" >id</a></th>
          <th><a href="#"  v-on:click= "SortBy('VpnName') " >VpnName</a></th>
          <th><a href="#"  v-on:click= "SortBy('Ip') " >ip</a></th>
          <th><a href="#"  v-on:click= "SortBy('Score') " >评价分数</a></th>
          <th><a href="#"  v-on:click= "SortBy('Ping') " >ping</a></th>
          <th><a href="#"  v-on:click= "SortBy('Country') " >国家</a></th>
          <th><a href="#"  v-on:click= "SortBy('Id') " >下载</a></th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for = "datalist in VpnData | paginates page.start page.limit | orderBy SortKey -1 ">
          <td>{{datalist['id']}}</td>
          <td>{{datalist['VpnName']}}</td>
          <td>{{datalist['Ip']}}</td>
          <td>{{datalist['Score']}}</td>
          <td>{{datalist['Ping']}}</td>
          <td>{{datalist['Country']}}</td>
          <td><a href="{{datalist['Path']}}">OpenVpn配置文件下载</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="row">
		<div class="col-md-12 center">
      <ul class="pager">
        <li>
            <button @click="paginate('previous')" :disabled="page.start <= 0">Previous</button>
			  	</li>
          <li>
            <button @click="paginate('next')" :disabled="page.limit >= page.total">Next</button>
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
      SortKey: null,
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

    },
    SortBy (key) {
      this.SortKey = key
    }
  },
  ready () {
    this.$http({
      url: 'http://wechat.rumia.me/vpn_json',
      method: 'get'
    }).then(function (response) {
      this.VpnData = response.data
      this.page.total = response.data.length
    }, function () {
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
