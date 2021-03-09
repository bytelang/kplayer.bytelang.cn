let versions = [
	'v0.4.7',
	'v0.4.6',
	'v0.4.3',
	'v0.3.8',
	'v0.3.7',
	'v0.3.6',
];

let choose_version_fn = ()=>{
	let choose_version = [];
	for(let key in versions){
		choose_version.push(
			{text: versions[key], link: `/${versions[key]}/guide/install`}
		);
	}
	return choose_version;
};

module.exports = {
	title: 'Kplayer - 专注于服务端推流而生',
	description: 'Kplayer - 专注于服务端推流而生',
	// theme: 'antdocs',
	markdown: {
		lineNumbers: true
	},
	head: [
		[
			"script",
			{},
			`
      var _hmt = _hmt || [];
          (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?3eedd7241cd30c908c8beba527aaa6b1";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
      })();
			`
		]
	],
	themeConfig: {
		sidebarDepth: 6,
		displayAllHeaders: true,
		nav: [
			{
				text: '选择版本',
				items: choose_version_fn(),
			},
			{text: '添加QQ讨论群', link: '/more/qq_group'},
			{text: '插件下载', link: '/more/plugin'},
			{
				text: 'API调用工具',
				items: [
					{
						text: 'v1.1',
						link: '/more/dashboard/v1.1',
					},
					{
						text: 'v1',
						link: '/more/dashboard/v1',
					}
				],
			},
			{text: '在github上编辑此站点', link: 'https://github.com/bytelang/kplayer.bytelang.cn', target: '_blank'}
		],
		sidebar: {
			'/v0.3.6/': require('./version/0.3.6'),
			'/v0.3.7/': require('./version/0.3.7'),
			'/v0.3.8/': require('./version/0.3.8'),
			'/v0.4.3/': require('./version/0.4.3'),
			'/v0.4.6/': require('./version/0.4.6'),
			'/v0.4.7/': require('./version/0.4.7'),
			'/more/': require('./version/0.4.7'),
			'/more/dashboard': null,
		}
	}
};
