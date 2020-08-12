let versions = [
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
			{text: 'API调用工具', link: '/' + versions[0] + '/dashboard/index.html'},
			{text: '在github上编辑此站点', link: 'https://github.com/bytelang/kplayer.bytelang.cn', target: '_blank'}
		],
		sidebar: {
			'/v0.3.6/': require('./version/0.3.6'),
			'/v0.3.7/': require('./version/0.3.7'),
			'/more/': require('./version/0.3.7'),
			'/*/dashboard': null,
		}
	}
};
