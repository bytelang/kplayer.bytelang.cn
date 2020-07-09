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
			{text: '添加QQ讨论群', link: '/more/qq_group'},
			{text: '插件下载', link: '/plugin/guide'},
			{text: '在github上编辑此站点', link: 'https://github.com/bytelang/kplayer.bytelang.cn', target: '_blank'}
		],
		sidebar: [
			{
				title: '入门',
				collapsable: false,
				children: [
					'/guide/install',
					'/guide/configuration',
					'/guide/run',
				]
			},
			{
				title: '配置文档',
				collapsable: false,
				children: [
					'/configuration/version',
					{
						title: 'player',
						collapsable: false,
						children: [
							{
								title: 'media',
								collapsable: false,
								children: [
									'/configuration/player/media/list',
									'/configuration/player/media/start'
								]
							},
							{
								title: 'decode',
								collapsable: false,
								children: [
									'/configuration/player/decode/type',
								]
							},
							{
								title: 'encode',
								collapsable: false,
								children: [
									'/configuration/player/encode/video_width',
									'/configuration/player/encode/video_height',
									'/configuration/player/encode/video_fps',
									'/configuration/player/encode/audio_sample_rate',
									'/configuration/player/encode/bit_rate',
									'/configuration/player/encode/quality',
								]
							},
							{
								title: 'output',
								collapsable: false,
								children: [
									'/configuration/player/output/type',
									'/configuration/player/output/auto_reconnect',
									'/configuration/player/output/path',
									'/configuration/player/output/cache',
								]
							},
							{
								title: 'connect',
								collapsable: false,
								children: [
									'/configuration/player/connect/type',
									'/configuration/player/connect/loop',
								]
							},
							{
								title: 'api',
								collapsable: false,
								children: [
									'/configuration/player/api/use_api',
									'/configuration/player/api/address',
									'/configuration/player/api/port',
								]
							},
							'/configuration/player/plugin/install',
						]
					},
				]
			},
			{
				title: '更多',
				collapsable: false,
				children: [
					'/more/q&a',
					'/more/complete',
					'/plugin/guide',
					'/guide/release',
				]
			}
		]
	}
};
