<template>
  <div class="Dashboard">
    <div class="DashboardSidebar">
      <ul>
        <div v-for="(v,k) in items" :key="k">
          <li class="group-title">{{ v.group_title }}</li>
          <ul>
            <li class="item" v-for="(cv,ck) in v.children" @click="ShowRun(cv)"
                :class="{'active':run.path ===cv.path && run.method === cv.method}" :key="'c'+ck">{{ cv.title }}
            </li>
          </ul>
        </div>
      </ul>
    </div>
    <div class="DashboardContent">
      <div class="request">
        <form>
          <div class="form-group">
            <label for="host">请求地址</label>
            <input class="shadow-lg bg-white rounded" placeholder="请输入kplayer api的请求地址" v-model="host"/>
            <small id="host" class="form-text text-muted">kplayer监听的完整服务器地host与端口</small>
          </div>

          <hr>

          <div class="form-group">
            <label for="host">请求方法</label>
            <input class="shadow-lg bg-white rounded" style="background: #eee !important;" disabled
                   v-model="run.method"/>
            <small id="path1" class="form-text text-muted">接口请求地址</small>
          </div>

          <hr>

          <div class="form-group">
            <label for="path2">请求路径</label>
            <input class="shadow-lg bg-white rounded" style="background: #eee !important;" disabled v-model="run.path"/>
            <small id="path2" class="form-text text-muted">接口请求地址</small>
          </div>

          <hr>

          <div class="form-group">
            <label for="query">请求参数</label>
            <small id="query" class="form-text text-muted">请求参数(QueryString), *号为必选参数</small>
          </div>
          <div class="form-group" v-for="(v,k) in run.query" :key="k">
            <div class="row">
              <label class="col-md-3" for="data">
                <span v-if="v.required" class="text-danger">*</span>
                {{ v.key }}
              </label>
              <input class="col-md-8 shadow-lg bg-white rounded" :placeholder="v.placeholder" v-model="v.value"/>
            </div>
          </div>

          <hr>
          <!--表单参数-->
          <div class="form-group">
            <label for="data">表单参数</label>
            <small id="data" class="form-text text-muted">表单参数(PostData), *号为必选参数</small>
          </div>
          <div class="form-group" v-for="(v,k) in run.data" :key="k">
            <div class="row">
              <label class="col-md-3" for="data">
                <span v-if="v.required" class="text-danger">*</span>
                {{ v.key }}
              </label>
              <input class="col-md-8 shadow-lg bg-white rounded" :placeholder="v.placeholder" v-model="v.value"/>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-success" type="button" @click="Submit">提交</button>
          </div>
        </form>
      </div>
      <div class="response">
        <pre class="language-json">{{ response }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "DashboardSidebar",
  data(){
    return {
      host: 'http://127.0.0.1:4156',
      run: {},
      response: '{}',
      prefix: '',
      items: [
        {
          group_title: '主程序',
          children: [
            {
              title: '获取当前版本信息',
              method: 'get',
              path: '/version',
              query: [],
              data: [],
            }
          ]
        },
        {
          group_title: '媒体资源',
          children: [
            {
              title: '获取当前推流资源列表',
              method: 'get',
              path: '/v1.1/media',
              query: [],
              data: [],
            },
            {
              title: '新增推流媒体资源',
              path: '/v1.1/media',
              method: 'post',
              query: [],
              data: [
                {key: 'type', type: 'string', required: true, placeholder: '输入资源类型，类型可为solo与remix'},
                {key: 'path', type: 'string', required: false, placeholder: '服务器本地媒体资源绝对路径，类型为solo是必选'},
                {key: 'video', type: 'string', required: false, placeholder: '服务器本地视频流媒体资源绝对路径，类型为remix是必选'},
                {key: 'audio', type: 'string', required: false, placeholder: '服务器本地音频流媒体资源绝对路径，类型为remix是必选'},
                {key: 'index', type: 'number', required: false, placeholder: '插入位置，默认为追加至列表底部'},
              ],
            },
            {
              title: '删除推流媒体资源',
              path: '/v1.1/media/{unique}',
              method: 'delete',
              query: [],
              data: [],
            }
          ]
        },
        {
          group_title: '播放器',
          children: [
            {
              title: '获取已运行时长',
              method: 'get',
              path: '/v1.1/player/run-time',
              query: [],
              data: [],
            },
            {
              title: '获取当前播放器状态',
              method: 'get',
              path: '/v1.1/player/status',
              query: [],
              data: [],
            },
            {
              title: '获取当前播放画面',
              method: 'get',
              path: '/v1.1/player/snapshot',
              query: [],
              data: [],
              type: "image",
            },
            {
              title: '获取当前播放媒体文件',
              method: 'get',
              path: '/v1.1/player/media/current',
              query: [],
              data: [],
            },
            {
              title: '跳过当前播放媒体文件',
              method: 'post',
              path: '/v1.1/player/media/current/skip',
              query: [],
              data: [],
            },
            {
              title: '暂停当前播放媒体文件',
              method: 'post',
              path: '/v1.1/player/media/current/pause',
              query: [],
              data: [],
            },
            {
              title: '继续当前播放媒体文件',
              method: 'post',
              path: '/v1.1/player/media/current/continue',
              query: [],
              data: [],
            },
          ]
        },
        {
          group_title: '输出资源',
          children: [
            {
              title: '获取输出资源列表',
              method: 'get',
              path: '/v1.1/output',
              query: [],
              data: [],
            },
            {
              title: '添加输出资源',
              method: 'post',
              path: '/v1.1/output',
              query: [],
              data: [
                {key: 'path', type: 'string', required: true, placeholder: '有效的rtmp或文件绝对路径'},
              ],
            },
            {
              title: '删除输出资源',
              method: 'delete',
              path: '/v1.1/output/{unqie}',
              query: [],
              data: [],
            }
          ]
        },
        {
          group_title: '插件',
          children: [
            {
              title: '获取已加载插件列表',
              method: 'get',
              path: '/v1.1/plugin',
              query: [],
              data: [],
            },
            {
              title: '添加插件',
              method: 'post',
              path: '/v1.1/plugin',
              query: [],
              data: [
                {key: 'file', type: 'string', required: true, placeholder: '插件命名名称'},
                {key: 'params', type: 'json', required: false, placeholder: '插件参数(json格式)'},
                {key: 'unique', type: 'string', required: false, placeholder: '插件自定义唯一标识'},
              ],
            },
            {
              title: '删除插件',
              method: 'delete',
              path: '/v1.1/plugin/{unqiue}',
              query: [],
              data: [],
            },
            {
              title: '更新插件参数(v0.4.6+)',
              method: 'post',
              path: '/v1.1/plugin/params',
              query: [],
              data: [
                {key: 'unique', type: 'string', required: true, placeholder: '插件唯一标识'},
                {key: 'params', type: 'json', required: true, placeholder: '需更改参数; 示例: {font_size: 20}'},
              ],
            },
          ]
        }
      ],
    }
  },
  methods: {
    ShowRun(item){
      this.run = item;
    },
    Submit(){
      // 构建data
      let data = {};
      for(let key in this.run.data){
        if(this.run.data[key].type === "number" && this.run.data[key].value !== undefined){
          data[this.run.data[key].key] = parseInt(this.run.data[key].value);
        }else if(this.run.data[key].type === "json" && this.run.data[key].value !== undefined){
          data[this.run.data[key].key] = JSON.parse(this.run.data[key].value);
        }else{
          data[this.run.data[key].key] = this.run.data[key].value;
        }
      }

      // 构建params
      let params = {};
      for(let key in this.run.query){
        if(this.run.query[key].type === "number" && this.run.query[key].value !== undefined){
          params[this.run.query[key].key] = this.run.query[key].value;
        }else if(this.run.query[key].type === "json" && this.run.query[key].value !== undefined){
          params[this.run.query[key].key] = JSON.parse(this.run.query[key].value);
        }else{
          params[this.run.query[key].key] = this.run.query[key].value;
        }
      }

      axios({
        method: this.run.method,
        baseURL: this.host + this.prefix,
        url: this.run.path,
        params,
        data,
      }).then(data=>{
        let mime = data.headers['content-type'];
        if(mime === 'image/jpeg'){
          window.open(data.config.baseURL+data.config.url);
        }else{
          this.response = data.data;
        }
      }).catch(err=>{
        if(err.response !== undefined){
          if(err.response.status === 422 || err.response.status === 400){
            this.response = err.response.data;
          }else{
            this.response = err.response;
          }
        }else{
          this.response = err;
        }
      });
    }
  },
  created(){
    this.run = this.items[0].children[0];
  }
}
</script>

<style scoped>
.Dashboard {
  display: flex;
}

.group-title {
  color: #999;
}

.group-title:hover {
  color: #999 !important;
  cursor: default !important;
}

.Dashboard .DashboardSidebar {
  display: flex;
  flex: 1;
}

.Dashboard .DashboardSidebar ul {
  list-style: none;
}

.Dashboard .DashboardSidebar ul li {
  border-left: 0.25rem solid #fff;
  padding: 0.25rem 0 0.25rem 2rem;
  cursor: pointer;
}

.Dashboard .DashboardSidebar ul li:hover {
  color: #3eaf7c;
}

.Dashboard .DashboardSidebar li.active {
  border-left: 0.25rem solid #3eaf7c;
  color: #3eaf7c;
  font-weight: 600;
}

.Dashboard .DashboardContent {
  display: flex;
  flex: 3;
}

.DashboardContent {
  display: flex;
}

.DashboardContent .request {
  display: flex;
  flex: 1;
  border-right: 1px solid #eee;
  padding: 1rem 2rem;
}

.DashboardContent .request input {
  width: 80%;
  height: 2rem;
  border: 1px solid #999;
}

.DashboardContent .response {
  width: 30rem;
  display: flex;
  flex: 1;
  padding: 1rem 2rem;
}


pre {
  width: 100%;
  font-size: 11px;
}

/deep/ form {
  width: 100%;
}
</style>