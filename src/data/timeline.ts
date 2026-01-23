// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // 如果为空，表示当前
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify 图标名称
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "学习软件工程",
		description: "目前就读软件工程专业，专注于 Web 开发与软件工程。",
		type: "education",
		startDate: "2021-09-01",
		endDate: "2025-06-30",
		location: "绍兴",
		organization: "浙江工业大学之江学院",
		skills: ["C++", "Java", "JavaScript", "HTML/CSS", "MySQL"],
		achievements: ["大一 C++ 程序设计课程 满绩点"],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	// {
	// 	id: "mizuki-blog-project",
	// 	title: "Mizuki 个人博客项目",
	// 	description:
	// 		"使用 Astro 框架开发的个人博客网站，作为前端技术学习的实践项目。",
	// 	type: "project",
	// 	startDate: "2024-06-01",
	// 	endDate: "2024-08-01",
	// 	skills: ["Astro", "TypeScript", "Tailwind CSS", "Git"],
	// 	achievements: [
	// 		"掌握现代前端开发技术栈",
	// 		"学习响应式设计与用户体验优化",
	// 		"完成从设计到部署的完整流程",
	// 	],
	// 	links: [
	// 		{
	// 			name: "GitHub 仓库",
	// 			url: "https://github.com/example/mizuki-blog",
	// 			type: "project",
	// 		},
	// 		{
	// 			name: "在线演示",
	// 			url: "https://mizuki-demo.example.com",
	// 			type: "website",
	// 		},
	// 	],
	// 	icon: "material-symbols:code",
	// 	color: "#7C3AED",
	// 	featured: true,
	// },
	{
		id: "summer-internship-2024",
		title: "前端开发工程师",
		description: "在灵玑参与 Web 应用的前端开发。",
		type: "work",
		startDate: "2025-03-11",
		// endDate: "2024-08-31",
		location: "杭州",
		organization: "灵玑人工智能(杭州)有限公司",
		position: "前端开发工程师",
		skills: [
			"Vue.js",
			"TypeScript",
			"tailwindcss",
			"Git",
			"Figma",
			"Node.js",
			"SAAS",
		],
		achievements: ["完成灵玑AI 前端SAAS 的开发", "学习团队协作与代码规范"],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	// {
	// 	id: "web-development-course",
	// 	title: "完成 Web 开发在线课程",
	// 	description: "完成全栈 Web 开发在线课程，系统学习前后端开发技术。",
	// 	type: "achievement",
	// 	startDate: "2024-01-15",
	// 	endDate: "2024-05-30",
	// 	organization: "Mooc 网站",
	// 	skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
	// 	achievements: [
	// 		"获得课程结业证书",
	// 		"完成 5 个实战项目",
	// 		"掌握全栈开发基础",
	// 	],
	// 	links: [
	// 		{
	// 			name: "课程证书",
	// 			url: "https://certificates.example.com/web-dev",
	// 			type: "certificate",
	// 		},
	// 	],
	// 	icon: "material-symbols:verified",
	// 	color: "#059669",
	// },
	// {
	// 	id: "student-management-system",
	// 	title: "学生管理系统课程项目",
	// 	description: "数据库课程期末项目，开发完整的学生信息管理系统。",
	// 	type: "project",
	// 	startDate: "2023-11-01",
	// 	endDate: "2023-12-15",
	// 	skills: ["Java", "MySQL", "Swing", "JDBC"],
	// 	achievements: [
	// 		"获得课程项目优秀成绩",
	// 		"实现完整的 CRUD 功能",
	// 		"学习数据库设计与优化",
	// 	],
	// 	icon: "material-symbols:database",
	// 	color: "#EA580C",
	// },
	// {
	// 	id: "programming-contest",
	// 	title: "校内程序设计竞赛",
	// 	description: "参加校内程序设计竞赛，提升算法与编程能力。",
	// 	type: "achievement",
	// 	startDate: "2023-10-20",
	// 	location: "北京理工大学",
	// 	organization: "计算机学院",
	// 	skills: ["C++", "Algorithms", "Data Structures"],
	// 	achievements: [
	// 		"获得校内竞赛三等奖",
	// 		"提升算法思维能力",
	// 		"夯实编程基础",
	// 	],
	// 	icon: "material-symbols:emoji-events",
	// 	color: "#7C3AED",
	// },
	{
		id: "part-time-tutor",
		title: "兼职编程辅导老师",
		description: "为高中学生提供编程辅导，帮助学习 C++ 基础。",
		type: "work",
		startDate: "2022-09-01",
		endDate: "2023-01-31",
		position: "编程辅导老师",
		skills: ["C++", "Teaching", "Communication"],
		achievements: [
			"帮助 3 名学生掌握 C++ 基础",
			"提升表达与沟通能力",
			"获得教学经验",
		],
		icon: "material-symbols:school",
		color: "#059669",
	},
	// {
	// 	id: "high-school-graduation",
	// 	title: "高中毕业",
	// 	description:
	// 		"以优异成绩高中毕业，考入北京理工大学计算机科学与技术专业。",
	// 	type: "education",
	// 	startDate: "2019-09-01",
	// 	endDate: "2022-06-30",
	// 	location: "山东济南",
	// 	organization: "济南市第一中学",
	// 	achievements: [
	// 		"高考成绩：620",
	// 		"获得市级三好学生称号",
	// 		"获得省级数学竞赛二等奖",
	// 	],
	// 	icon: "material-symbols:school",
	// 	color: "#2563EB",
	// },
	// {
	// 	id: "first-programming-experience",
	// 	title: "初次接触编程",
	// 	description: "在高中信息技术课首次接触编程，开始学习 Python 基础语法。",
	// 	type: "education",
	// 	startDate: "2021-03-01",
	// 	skills: ["Python", "Basic Programming Concepts"],
	// 	achievements: [
	// 		'完成第一个 "Hello World" 程序',
	// 		"学习基本循环与条件语句",
	// 		"培养对编程的兴趣",
	// 	],
	// 	icon: "material-symbols:code",
	// 	color: "#7C3AED",
	// },
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// 获取精选时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};

