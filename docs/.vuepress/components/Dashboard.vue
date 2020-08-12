<template>
	<div class="Dashboard">
		<div class="DashboardSidebar">
			<ul>
				<div v-for="(v,k) in items" :key="k">
					<li class="group-title">{{v.group_title}}</li>
					<ul>
						<li class="item" v-for="(cv,ck) in v.children" @click="ShowRun(cv)"
						    :class="{'active':run.path ===cv.path && run.method === cv.method}" :key="'c'+ck">{{cv.title}}
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
						<label for="query">请求参数</label>
						<small id="query" class="form-text text-muted">请求参数(QueryString)</small>
					</div>
					<div class="form-group" v-for="(v,k) in run.query" :key="k">
						<div class="row">
							<label class="col-md-2" for="data">{{v.key}}</label>
							<input class="col-md-10 shadow-lg bg-white rounded" :placeholder="v.placeholder" v-model="v.value"/>
						</div>
					</div>
					
					<hr>
					<!--表单参数-->
					<div class="form-group">
						<label for="data">表单参数</label>
						<small id="data" class="form-text text-muted">表单参数(PostData)</small>
					</div>
					<div class="form-group" v-for="(v,k) in run.data" :key="k">
						<div class="row">
							<label class="col-md-2" for="data">{{v.key}}</label>
							<input class="col-md-10 shadow-lg bg-white rounded" :placeholder="v.placeholder" v-model="v.value"/>
						</div>
					</div>
					<div class="form-group">
						<button class="btn btn-success" type="button" @click="Submit">提交</button>
					</div>
				</form>
			</div>
			<div class="response">
				<pre class="language-json">{{response}}</pre>
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
				prefix: '/v1',
				items: [
					{
						group_title: '媒体资源',
						children: [
							{
								title: '获取当前推流资源列表',
								method: 'get',
								path: '/media',
								query: [],
								data: [],
							},
							{
								title: '新增推流媒体资源',
								path: '/media',
								method: 'post',
								query: [],
								data: [
									{key: 'path', type: 'string', required: true, placeholder: '服务器本地媒体资源绝对路径'},
									{key: 'index', type: 'number', required: false, placeholder: '插入位置，默认为追加至列表底部'},
								],
							},
						]
					},
					{
						group_title: '播放器',
						children: [
							{
								title: '获取已运行时长',
								method: 'get',
								path: '/player/run-time',
								query: [],
								data: [],
							},
							{
								title: '获取当前播放器状态',
								method: 'get',
								path: '/player/status',
								query: [],
								data: [],
							},
							{
								title: '获取当前播放媒体文件',
								method: 'get',
								path: '/player/media/current',
								query: [],
								data: [],
							},
							{
								title: '跳过当前播放媒体文件',
								method: 'post',
								path: '/player/media/current/skip',
								query: [],
								data: [],
							},
							{
								title: '暂停当前播放媒体文件',
								method: 'post',
								path: '/player/media/current/pause',
								query: [],
								data: [],
							},
							{
								title: '继续当前播放媒体文件',
								method: 'post',
								path: '/player/media/current/continue',
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
								path: '/output',
								query: [],
								data: [],
							},
							{
								title: '添加输出资源',
								method: 'post',
								path: '/output',
								query: [],
								data: [
									{key: 'path', type: 'string', required: true, placeholder: '有效的rtmp或文件绝对路径'},
								],
							},
							{
								title: '删除输出资源',
								method: 'delete',
								path: '/output',
								query: [
									{key: 'hash', type: 'string', required: true, placeholder: '输出流hash'},
								],
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
								path: '/plugin',
								query: [],
								data: [],
							},
							{
								title: '添加插件',
								method: 'post',
								path: '/plugin',
								query: [],
								data: [
									{key: 'file_name', type: 'string', required: true, placeholder: '插件命名名称'},
									{key: 'params', type: 'json', required: false, placeholder: '插件参数(json格式)'},
								],
							},
							{
								title: '删除插件',
								method: 'delete',
								path: '/plugin',
								query: [
									{key: 'name', type: 'string', required: true, placeholder: '插件名称'},
								],
								data: [],
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
					this.response = data.data;
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
	
	.group-title{
		color: #999;
	}
	
	.group-title:hover{
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
	
	/deep/ form{
		width: 100%;
	}
</style>