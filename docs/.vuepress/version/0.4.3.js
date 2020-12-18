let version = "v0.4.3";
module.exports =
	[
		{
			title: `入门 [${version}]`,
			collapsable: false,
			children: [
				`/${version}/guide/install`,
				`/${version}/guide/configuration`,
				`/${version}/guide/run`,
				`/${version}/guide/features`,
			]
		},
		`/${version}/option/option`,
		{
			title: `配置文档`,
			collapsable: false,
			children: [
				`/${version}/configuration/version`,
				{
					title: `player`,
					collapsable: false,
					children: [
						{
							title: `media`,
							collapsable: false,
							children: [
								`/${version}/configuration/player/media/list`,
								`/${version}/configuration/player/media/start`
							]
						},
						{
							title: `decode`,
							collapsable: false,
							children: [
								`/${version}/configuration/player/decode/type`,
							]
						},
						{
							title: `encode`,
							collapsable: false,
							children: [
								`/${version}/configuration/player/encode/video_width`,
								`/${version}/configuration/player/encode/video_height`,
								`/${version}/configuration/player/encode/video_fps`,
								`/${version}/configuration/player/encode/audio_sample_rate`,
								`/${version}/configuration/player/encode/bit_rate`,
								`/${version}/configuration/player/encode/quality`,
							]
						},
						{
							title: `output`,
							collapsable: false,
							children: [
								`/${version}/configuration/player/output/type`,
								`/${version}/configuration/player/output/auto_reconnect`,
								`/${version}/configuration/player/output/path`,
								`/${version}/configuration/player/output/cache_use`,
								`/${version}/configuration/player/output/cache_path`,
							]
						},
						{
							title: `connect`,
							collapsable: false,
							children: [
								`/${version}/configuration/player/connect/type`,
								`/${version}/configuration/player/connect/loop`,
							]
						},
						{
							title: `api`,
							collapsable: false,
							children: [
								`/${version}/configuration/player/api/use_api`,
								`/${version}/configuration/player/api/address`,
								`/${version}/configuration/player/api/port`,
							]
						},
						`/${version}/configuration/player/plugin/install`,
					]
				},
			]
		},
		{
			title: `更多`,
			collapsable: false,
			children: [
				`/more/q&a`,
				`/more/complete`,
				`/more/plugin`,
				`/more/release`,
			]
		}
	];