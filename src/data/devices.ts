// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "iPhone 16 Pro",
			image: "/images/device/iphone-16-pro-white.png",
			specs: "白色 / 8G + 256GB",
			description: "钛金属设计、 新一代超瓷晶面板、 亚光质感玻璃背板",
			link: "https://www.apple.com/",
		},
		{
			name: "小米 11 Pro",
			image: "/images/device/xiaomi-11-pro.png",
			specs: "墨绿色 / 12G + 1TB",
			description: "骁龙888、定制1/1.12″超大底、2K+120Hz AMOLED屏",
			link: "https://www.mi.com/mi11Pro",
		},
	],
	电脑: [
		{
			name: "Mac mini M4",
			image: "/images/device/mac-mini-m4.jpeg",
			specs: "16G + 256GB",
			description: "Design. Looks small. Lives large.",
			link: "https://www.apple.com/",
		},
	],
};
