// 技能数据配置文件
// 用于管理技能展示页面的数据

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify 图标名称
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // 关联的项目 ID
	certifications?: string[];
	color?: string; // 技能卡片主题色
}

export const skillsData: Skill[] = [
	// 前端技能
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"现代 JavaScript 开发，包括 ES6+ 语法、异步编程与模块化开发。",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 6 },
		projects: [],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "JavaScript 的类型安全超集，提升代码质量与开发效率。",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		projects: [],
		color: "#3178C6",
	},
	{
		id: "react",
		name: "React",
		description:
			"用于构建用户界面的 JavaScript 库，包含 Hooks、Context 与状态管理。",
		icon: "logos:react",
		category: "frontend",
		level: "advanced",
		experience: { years: 0, months: 6 },
		projects: ["portfolio-website", "task-manager-app"],
		color: "#61DAFB",
	},
	{
		id: "vue",
		name: "Vue.js",
		description: "渐进式 JavaScript 框架，易学易用，适合快速开发。",
		icon: "logos:vue",
		category: "frontend",
		level: "intermediate",
		experience: { years: 2, months: 2 },
		projects: ["data-visualization-tool"],
		color: "#4FC08D",
	},
	// {
	// 	id: "angular",
	// 	name: "Angular",
	// 	description: "Google 推出的企业级前端框架，完整的单页应用解决方案。",
	// 	icon: "logos:angular-icon",
	// 	category: "frontend",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 9 },
	// 	projects: ["enterprise-dashboard"],
	// 	color: "#DD0031",
	// },
	// {
	// 	id: "nextjs",
	// 	name: "Next.js",
	// 	description: "生产级 React 框架，支持 SSR、SSG 与全栈开发。",
	// 	icon: "logos:nextjs-icon",
	// 	category: "frontend",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 4 },
	// 	projects: ["e-commerce-frontend", "blog-platform"],
	// 	color: "#616161", // 更改为深灰色，避免纯黑色
	// },
	{
		id: "nuxtjs",
		name: "Nuxt.js",
		description: "直观的 Vue.js 框架，支持服务端渲染与静态站点生成。",
		icon: "logos:nuxt-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["vue-ssr-app"],
		color: "#00DC82",
	},
	{
		id: "astro",
		name: "Astro",
		description: "现代静态站点生成器，支持多框架集成与优秀性能。",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 0, months: 3 },
		projects: ["mizuki-blog"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description: "用于快速构建现代界面的实用优先 CSS 框架。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 2 },
		projects: ["mizuki-blog", "portfolio-website"],
		color: "#06B6D4",
	},
	{
		id: "sass",
		name: "Sass/SCSS",
		description: "CSS 预处理器，提供变量、嵌套、Mixin 等高级特性。",
		icon: "logos:sass",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["legacy-website", "component-library"],
		color: "#CF649A",
	},
	// {
	// 	id: "webpack",
	// 	name: "Webpack",
	// 	description: "面向现代 JavaScript 应用的静态模块打包器。",
	// 	icon: "logos:webpack",
	// 	category: "frontend",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 10 },
	// 	projects: ["custom-build-tool", "spa-application"],
	// 	color: "#8DD6F9",
	// },
	{
		id: "vite",
		name: "Vite",
		description: "新一代前端构建工具，冷启动快、热更新迅速。",
		icon: "logos:vitejs",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["vue-project", "react-project"],
		color: "#646CFF",
	},

	// 后端技能
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"基于 Chrome V8 引擎的 JavaScript 运行时，用于服务端开发。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description: "通用编程语言，适用于 Web 开发、数据分析、机器学习等。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		color: "#3776AB",
	},
	// {
	// 	id: "java",
	// 	name: "Java",
	// 	description: "主流企业级开发语言，跨平台且面向对象。",
	// 	icon: "logos:java",
	// 	category: "backend",
	// 	level: "intermediate",
	// 	experience: { years: 2, months: 0 },
	// 	projects: ["enterprise-system", "microservices-api"],
	// 	color: "#ED8B00",
	// },
	// {
	// 	id: "csharp",
	// 	name: "C#",
	// 	description: "微软开发的现代面向对象语言，适用于 .NET 生态。",
	// 	icon: "devicon:csharp",
	// 	category: "backend",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 6 },
	// 	projects: ["desktop-application", "web-api"],
	// 	color: "#239120",
	// },
	// {
	// 	id: "go",
	// 	name: "Go",
	// 	description: "Google 开发的高效语言，适合云原生与微服务开发。",
	// 	icon: "logos:go",
	// 	category: "backend",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 8 },
	// 	projects: ["microservice-demo"],
	// 	color: "#00ADD8",
	// },
	{
		id: "rust",
		name: "Rust",
		description: "注重安全、速度与并发的系统编程语言，无垃圾回收器。",
		icon: "logos:rust",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["system-tool", "performance-critical-app"],
		color: "#CE422B",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"高性能系统编程语言，广泛用于游戏开发、系统软件与嵌入式开发。",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 6, months: 4 },
		projects: ["game-engine", "system-optimization"],
		color: "#00599C",
	},
	// {
	// 	id: "c",
	// 	name: "C",
	// 	description: "低层系统编程语言，是操作系统与嵌入式开发的基础。",
	// 	icon: "logos:c",
	// 	category: "backend",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 2 },
	// 	projects: ["embedded-system", "kernel-module"],
	// 	color: "#A8B9CC",
	// },
	// {
	// 	id: "kotlin",
	// 	name: "Kotlin",
	// 	description:
	// 		"JetBrains 开发的现代语言，与 Java 完全兼容，是 Android 开发首选之一。",
	// 	icon: "logos:kotlin-icon",
	// 	category: "backend",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 8 },
	// 	projects: ["android-app", "kotlin-backend"],
	// 	color: "#7F52FF",
	// },
	// {
	// 	id: "swift",
	// 	name: "Swift",
	// 	description:
	// 		"Apple 开发的现代语言，用于 iOS、macOS、watchOS、tvOS 开发。",
	// 	icon: "logos:swift",
	// 	category: "backend",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 6 },
	// 	projects: ["ios-app", "macos-tool"],
	// 	color: "#FA7343",
	// },
	// {
	// 	id: "ruby",
	// 	name: "Ruby",
	// 	description: "动态的开源语言，强调简洁与效率，是 Rails 框架的基础。",
	// 	icon: "logos:ruby",
	// 	category: "backend",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 4 },
	// 	projects: ["web-prototype"],
	// 	color: "#CC342D",
	// },
	// {
	// 	id: "php",
	// 	name: "PHP",
	// 	description: "广泛使用的服务端脚本语言，特别适合 Web 开发。",
	// 	icon: "logos:php",
	// 	category: "backend",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 6 },
	// 	projects: ["cms-system", "e-commerce-backend"],
	// 	color: "#777BB4",
	// },
	{
		id: "express",
		name: "Express.js",
		description: "快速、极简的 Node.js Web 应用框架。",
		icon: "simple-icons:express",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["data-visualization-tool"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	// {
	// 	id: "spring",
	// 	name: "Spring Boot",
	// 	description: "Java 生态中最流行的企业级应用开发框架。",
	// 	icon: "logos:spring-icon",
	// 	category: "backend",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 4 },
	// 	projects: ["enterprise-system", "rest-api"],
	// 	color: "#6DB33F",
	// },
	// {
	// 	id: "django",
	// 	name: "Django",
	// 	description: "高层次的 Python Web 框架，开发高效，设计简洁务实。",
	// 	icon: "logos:django-icon",
	// 	category: "backend",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 6 },
	// 	projects: ["blog-backend"],
	// 	color: "#092E20",
	// },

	// 数据库技能
	{
		id: "mysql",
		name: "MySQL",
		description: "全球最受欢迎的开源关系型数据库，广泛用于 Web 应用。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	{
		id: "postgresql",
		name: "PostgreSQL",
		description: "强大的开源关系型数据库管理系统。",
		icon: "logos:postgresql",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 5 },
		projects: ["e-commerce-platform"],
		color: "#336791",
	},
	{
		id: "redis",
		name: "Redis",
		description: "高性能内存数据结构存储，可作为数据库、缓存与消息代理。",
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["e-commerce-platform", "real-time-chat"],
		color: "#DC382D",
	},
	{
		id: "mongodb",
		name: "MongoDB",
		description: "文档型 NoSQL 数据库，数据模型灵活。",
		icon: "logos:mongodb-icon",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		color: "#47A248",
	},
	{
		id: "sqlite",
		name: "SQLite",
		description: "轻量级嵌入式关系型数据库，适用于移动应用与小型项目。",
		icon: "simple-icons:sqlite",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["mobile-app", "desktop-tool"],
		color: "#003B57",
	},
	// {
	// 	id: "firebase",
	// 	name: "Firebase",
	// 	description:
	// 		"Google 的移动与 Web 应用开发平台，提供实时数据库与认证服务。",
	// 	icon: "simple-icons:firebase",
	// 	category: "database",
	// 	level: "intermediate",
	// 	experience: { years: 0, months: 10 },
	// 	projects: ["task-manager-app"],
	// 	color: "#FFCA28",
	// },

	// 工具
	{
		id: "git",
		name: "Git",
		description: "分布式版本控制系统，是代码管理与团队协作的必备工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "轻量但强大的代码编辑器，拥有丰富插件生态。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
	},
	// {
	// 	id: "webstorm",
	// 	name: "WebStorm",
	// 	description:
	// 		"JetBrains 专业的 JavaScript 与 Web 开发 IDE，具备智能代码辅助。",
	// 	icon: "logos:webstorm",
	// 	category: "tools",
	// 	level: "advanced",
	// 	experience: { years: 2, months: 0 },
	// 	projects: ["react-project", "vue-project"],
	// 	color: "#00CDD7",
	// },
	// {
	// 	id: "intellij",
	// 	name: "IntelliJ IDEA",
	// 	description:
	// 		"JetBrains 旗舰 IDE，Java 开发首选，提供强大的智能编码辅助。",
	// 	icon: "logos:intellij-idea",
	// 	category: "tools",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 8 },
	// 	projects: ["java-enterprise", "spring-boot-app"],
	// 	color: "#616161", // 更改为深灰色，避免纯黑色
	// },
	// {
	// 	id: "pycharm",
	// 	name: "PyCharm",
	// 	description:
	// 		"JetBrains 专业的 Python IDE，提供智能代码分析与调试功能。",
	// 	icon: "logos:pycharm",
	// 	category: "tools",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 4 },
	// 	projects: ["python-web-app", "data-analysis"],
	// 	color: "#21D789",
	// },
	// {
	// 	id: "rider",
	// 	name: "Rider",
	// 	description:
	// 		"JetBrains 跨平台 .NET IDE，支持 C#、VB.NET、F# 等语言开发。",
	// 	icon: "logos:rider",
	// 	category: "tools",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 8 },
	// 	projects: ["dotnet-api", "desktop-app"],
	// 	color: "#616161", // 更改为深灰色，避免纯黑色
	// },
	// {
	// 	id: "goland",
	// 	name: "GoLand",
	// 	description: "JetBrains 专业 Go 语言 IDE，提供智能编码辅助与调试工具。",
	// 	icon: "logos:goland",
	// 	category: "tools",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 6 },
	// 	projects: ["go-microservice"],
	// 	color: "#3D7BF7",
	// },
	{
		id: "docker",
		name: "Docker",
		description: "容器化平台，简化应用部署与环境管理。",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#2496ED",
	},
	// {
	// 	id: "kubernetes",
	// 	name: "Kubernetes",
	// 	description: "容器编排平台，用于自动化部署、伸缩与管理容器化应用。",
	// 	icon: "logos:kubernetes",
	// 	category: "tools",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 4 },
	// 	projects: ["microservices-deployment"],
	// 	color: "#326CE5",
	// },
	{
		id: "nginx",
		name: "Nginx",
		description: "高性能 Web 服务器与反向代理服务器。",
		icon: "logos:nginx",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["web-server-config", "load-balancer"],
		color: "#009639",
	},
	// {
	// 	id: "apache",
	// 	name: "Apache HTTP Server",
	// 	description: "全球最受欢迎的 Web 服务器软件，稳定可靠的 HTTP 服务器。",
	// 	icon: "logos:apache",
	// 	category: "tools",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 6 },
	// 	projects: ["traditional-web-server", "php-hosting"],
	// 	color: "#D22128",
	// },
	// {
	// 	id: "openresty",
	// 	name: "OpenResty",
	// 	description:
	// 		"基于 Nginx 与 LuaJIT 的高性能 Web 平台，支持动态 Web 应用开发。",
	// 	icon: "simple-icons:nginx",
	// 	category: "tools",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 8 },
	// 	projects: ["api-gateway", "dynamic-routing"],
	// 	color: "#00A693",
	// },
	// {
	// 	id: "tomcat",
	// 	name: "Apache Tomcat",
	// 	description:
	// 		"Java Servlet 容器与 Web 服务器，是 Java Web 应用的标准部署环境。",
	// 	icon: "logos:tomcat",
	// 	category: "tools",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 4 },
	// 	projects: ["java-web-app", "servlet-container"],
	// 	color: "#F8DC75",
	// },
	// {
	// 	id: "aws",
	// 	name: "AWS",
	// 	description: "亚马逊云平台，提供全面的云计算解决方案。",
	// 	icon: "logos:aws",
	// 	category: "tools",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 0 },
	// 	projects: ["cloud-deployment", "serverless-app"],
	// 	color: "#FF9900",
	// },
	{
		id: "linux",
		name: "Linux",
		description: "开源操作系统，是服务器部署与开发环境的首选。",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},
	{
		id: "postman",
		name: "Postman",
		description: "API 开发与测试工具，简化 API 设计、测试与文档编写。",
		icon: "logos:postman-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["api-testing", "api-documentation"],
		color: "#FF6C37",
	},
	// {
	// 	id: "figma",
	// 	name: "Figma",
	// 	description: "协作式界面设计工具，用于 UI/UX 设计与原型制作。",
	// 	icon: "logos:figma",
	// 	category: "tools",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 6 },
	// 	color: "#F24E1E",
	// },
	// {
	// 	id: "photoshop",
	// 	name: "Photoshop",
	// 	description: "专业的图像编辑与设计软件。",
	// 	icon: "logos:adobe-photoshop",
	// 	category: "tools",
	// 	level: "intermediate",
	// 	experience: { years: 2, months: 6 },
	// 	projects: ["ui-design", "image-processing"],
	// 	color: "#31A8FF",
	// },

	// 其他技能
	// {
	// 	id: "graphql",
	// 	name: "GraphQL",
	// 	description:
	// 		"API 查询语言与运行时，提供更高效、强大且灵活的数据获取方式。",
	// 	icon: "logos:graphql",
	// 	category: "other",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 6 },
	// 	projects: ["modern-api"],
	// 	color: "#E10098",
	// },
	// {
	// 	id: "elasticsearch",
	// 	name: "Elasticsearch",
	// 	description: "分布式搜索与分析引擎，用于全文检索与数据分析。",
	// 	icon: "logos:elasticsearch",
	// 	category: "other",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 4 },
	// 	projects: ["search-system"],
	// 	color: "#005571",
	// },
	// {
	// 	id: "jest",
	// 	name: "Jest",
	// 	description: "专注于简洁易用的 JavaScript 测试框架。",
	// 	icon: "logos:jest",
	// 	category: "other",
	// 	level: "intermediate",
	// 	experience: { years: 1, months: 2 },
	// 	projects: ["unit-testing", "integration-testing"],
	// 	color: "#C21325",
	// },
	// {
	// 	id: "cypress",
	// 	name: "Cypress",
	// 	description: "面向 Web 应用的现代端到端测试框架。",
	// 	icon: "logos:cypress-icon",
	// 	category: "other",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 8 },
	// 	projects: ["e2e-testing"],
	// 	color: "#17202C",
	// },
];

// 获取技能统计信息
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// 按类别获取技能
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// 获取高级技能
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// 计算总经验年限
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};

