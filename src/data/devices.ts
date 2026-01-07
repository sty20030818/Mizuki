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
			image: "/images/device/oneplus13t.png",
			specs: "白色 / 12G + 256GB",
			description: "成功人士的标配",
			link: "https://www.apple.com/",
		},
		{
			name: "小米 11Pro",
			image: "/images/device/oneplus13t.png",
			specs: "绿色 / 12G + 1TB",
			description: "小米 11Pro",
			link: "https://www.mi.com/",
		},
	],
	电脑: [
		{
			name: "Mac mini M4",
			image: "/images/device/mt3000.png",
			specs: "1000Mbps / 2.5G",
			description: "Mac mini M4",
			link: "https://www.apple.com/",
		},
	],
};
