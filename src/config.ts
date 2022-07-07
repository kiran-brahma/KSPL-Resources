export const SITE = {
	title: 'Knighthood',
	description: 'Understand all aspects of Employee Management',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: '/favicon.png',
		alt:
			'Company Logo' ,
	},
	twitter: 'Knighthood',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Employee Compliances', header: true },
		{ text: 'Statutory Compliances', link: 'en/Compliance' },
		{ text: 'Minimum Wages', link: 'en/Min-Wages' },
		{ text: 'EPF', link: 'en/EPF' },
		{ text: 'ESI', link: 'en/ESI' },
		{ text: 'Bonus', link: 'en/Bonus' },
		{ text: 'Gratuity', link: 'en/Gratuity' },
		{ text: 'Labor Welfare Fund', link: 'en/LWF' },
		{ text: 'Professional Tax', link: 'en/PT' },

		{ text: 'People Managagement', header: true },
		{ text: 'Employee', link: 'en/Employee' },
		{ text: 'Contractor', link: 'en/Contractor' },
		{ text: 'Gig Worker', link: 'en/Gig-Worker' },
		{ text: 'Fixed Term Employment', link: 'en/Fixed-Term' },
		{ text: 'Short Tern Enmployment', link: 'en/Short-Term' },

		{ text: 'Payroll', header: true },
		{ text: 'Introduction', link: 'en/Payroll' },
		{ text: 'Salary Structure', link: 'en/Salary-Structure' },
		{ text: 'Additional Info', link: 'en/Payroll-Info' },
		{ text: 'Pre-Payroll Activities', link: 'en/Pre-Payroll' },
		{ text: 'Payroll Activities', link: 'en/Payroll-Process' },
		{ text: 'Post Payroll Activities', link: 'en/Post-Payroll' },
		{ text: 'Leaves, Attendance and LOP', link: 'en/Leaves' },

		{ text: 'Income Tax', header: true },
		{ text: 'TDS', link: 'en/TDS' },
		{ text: 'Tax Regime', link: 'en/Regime' },
		{ text: 'Deductions', link: 'en/Deduction' },
		{ text: 'Flexible Benefits', link: 'en/Benefits' },
		{ text: 'Salary Optimisation', link: 'en/Salary' },
		{ text: 'Form 16', link: 'en/Form16' },
		
		{ text: 'Warehouse', header: true },
		{ text: 'Infrastructure', link: 'en/Warehouse-Infra' },
		{ text: 'Daily Operations', link: 'en/warehouse-Ops' },
		{ text: 'Hiring', link: 'en/Warehouse-People' },
		{ text: 'Cost Management', link: 'en/Warehouse-Cost' },

	],
};
