// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "stone-blog",
		title: "StoneBlog",
		description:
			"这是一个基于 Monorepo 架构的现代化全栈博客系统，采用前后端分离设计，提供优雅的公共博客界面和完善的管理后台功能",
		image: "/images/projects/StoneBlog.png",
		category: "web",
		techStack: [
			"Vue.js",
			"TypeScript",
			"Tailwind CSS",
			"Pinia",
			"Vite",
			"Nuxt UI",
			"GSAP",
			"Node.js",
			"Express",
			"DrizzleORM",
			"PostgreSQL",
			"Redis",
			"Zod",
		],
		status: "in-progress",
		// liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/sty20030818/StoneFish.blog", // 更改为GitHub链接
		// visitUrl: "https://blog.example.com", // 添加前往项目链接
		startDate: "2025-10-27",
		// endDate: "2025-12-06",
		featured: true,
		tags: [
			"博客系统",
			"Vue.js",
			"TypeScript",
			"Tailwind CSS",
			"Pinia",
			"Vite",
			"Nuxt UI",
			"GSAP",
			"Node.js",
			"Express",
			"DrizzleORM",
			"PostgreSQL",
			"Redis",
			"Zod",
		],
	},
	{
		id: "stone-os",
		title: "StoneOS",
		description: "这是一个基于 Nuxt 的 Web 操作系统",
		image: "/images/projects/StoneOS2.png",
		category: "web",
		techStack: ["Nuxt", "TypeScript", "Tailwind CSS", "Pinia", "Vite"],
		status: "in-progress",
		// liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/sty20030818/StoneOS", // 更改为GitHub链接
		// visitUrl: "https://blog.example.com", // 添加前往项目链接
		startDate: "2025-11-23",
		// endDate: "2025-12-06",
		featured: false,
		tags: ["Web 操作系统", "Nuxt", "TypeScript", "Tailwind CSS"],
	},
	{
		id: "stone-hub",
		title: "StoneHub",
		description: "这是一个基于 Nuxt 的,展示项目经验与技术能力的个人站点。",
		image: "/images/projects/StoneHub.png",
		category: "web",
		techStack: ["Nuxt", "TypeScript", "Tailwind CSS", "Pinia", "Vite"],
		status: "in-progress",
		// liveDemo: "https://portfolio.example.com",
		sourceCode: "https://github.com/sty20030818/StoneHub",
		// visitUrl: "https://portfolio.example.com", // 添加前往项目链接
		startDate: "2025-11-23",
		// endDate: "2025-12-06",
		featured: false,
		tags: ["个人站点", "Nuxt", "TypeScript", "Tailwind CSS"],
	},
	{
		id: "stone-kit",
		title: "StoneKit",
		description:
			"这是一个基于 Tauri 的工具箱。当前提供 SVG 文本转换为 Base64 / Data URL,以及图片压缩 的本地工具。",
		image: "/images/projects/StoneKit2.png",
		category: "desktop",
		techStack: ["Tauri", "TypeScript", "Rust", "Vue", "Tailwind CSS"],
		status: "in-progress",
		sourceCode: "https://github.com/sty20030818/StoneKit",
		startDate: "2025-12-23",
		featured: true,
		tags: ["工具箱", "Tauri", "TypeScript", "Rust", "Vue", "Tailwind CSS"],
	},
	{
		id: "stone-flow",
		title: "StoneFlow",
		description:
			"这是一个基于 Tauri 的轻量桌面任务管理工具，目标是让你用更少的操作把「收集 → 规划 → 执行 → 完成」串起来。",
		image: "/images/projects/StoneFlow.png",
		category: "desktop",
		techStack: ["Tauri", "TypeScript", "Rust", "Vue", "Tailwind CSS"],
		status: "in-progress",
		sourceCode: "https://github.com/sty20030818/StoneFlow",
		startDate: "2025-12-24",
		featured: false,
		tags: [
			"任务管理",
			"TODO List",
			"Tauri",
			"TypeScript",
			"Rust",
			"Vue",
			"Tailwind CSS",
		],
	},
	{
		id: "badminton-frontend",
		title: "Badminton Frontend",
		description:
			"这是一个基于 Vue 3 开发的羽毛球平台前端项目，旨在为用户提供羽毛球相关的在线服务。项目采用现代化的前端技术栈，注重用户体验和开发效率。",
		image: "/images/projects/badminton-frontend.png",
		category: "web",
		techStack: ["Vue", "JavaScript", "Tailwind CSS", "Pinia", "Vite"],
		status: "in-progress",
		// liveDemo: "https://blog.example.com",
		sourceCode:
			"https://github.com/sty20030818/Badminton-platform-frontend",
		// visitUrl: "https://blog.example.com",
		startDate: "2025-03-11",
		// endDate: "2025-12-06",
		featured: false,
		tags: [
			"羽毛球平台",
			"Vue",
			"JavaScript",
			"Tailwind CSS",
			"Pinia",
			"Vite",
		],
	},
	{
		id: "badminton-backend",
		title: "Badminton Backend",
		description:
			"这是一个基于 Node.js + Express + MySQL 开发的羽毛球约球平台后端服务。该平台旨在为羽毛球爱好者提供一个便捷的约球、组队和场地预约的平台。",
		image: "/images/projects/badminton-backend.png",
		category: "web",
		techStack: ["Node.js", "Express", "MySQL", "JavaScript"],
		status: "in-progress",
		// liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/sty20030818/Badminton-platform-backend",
		// visitUrl: "https://blog.example.com",
		startDate: "2025-03-11",
		// endDate: "2025-12-06",
		featured: false,
		tags: ["羽毛球平台", "Node.js", "Express", "MySQL", "JavaScript"],
	},
];

// 获取项目统计信息
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// 按类别获取项目
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// 获取精选项目
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// 获取所有技术栈
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};

