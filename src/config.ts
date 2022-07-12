export const SITE = {
	title: 'Knighthood',
	description: 'Understand all aspects of Employee Management, Payroll, Statutory Compliances and Taxes',
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
		{ text: 'Statutory Compliances', link: 'docs/Compliance' },
		{ text: 'Minimum Wages', link: 'docs/Min-Wages' },
		{ text: 'EPF', link: 'docs/EPF' },
		{ text: 'ESI', link: 'docs/ESI' },
		{ text: 'Bonus', link: 'docs/Bonus' },
		{ text: 'Gratuity', link: 'docs/Gratuity' },
		{ text: 'Labor Welfare Fund', link: 'docs/LWF' },
		{ text: 'Professional Tax', link: 'docs/PT' },

		{ text: 'Employment Contracts', header: true },
		{ text: 'Employee', link: 'docs/Employee' },
		{ text: 'Principal Employer', link: 'docs/PrincipalEmployer' },
		{ text: 'Contractual Employee', link: 'docs/Contractor' },
		{ text: 'Gig Worker', link: 'docs/Gig-Worker' },
		{ text: 'Fixed Term Employment', link: 'docs/Fixed-Term' },
		{ text: 'Short Term Enmployment', link: 'docs/Short-Term' },

		{ text: 'Payroll', header: true },
		{ text: 'Introduction', link: 'docs/Payroll' },
		{ text: 'Salary Structure', link: 'docs/Salary-Structure' },
		{ text: 'Additional Info', link: 'docs/Payroll-Info' },
		{ text: 'Pre-Payroll Activities', link: 'docs/Pre-Payroll' },
		{ text: 'Payroll Activities', link: 'docs/Payroll-Process' },
		{ text: 'Post Payroll Activities', link: 'docs/Post-Payroll' },
		{ text: 'Leaves, Attendance and LOP', link: 'docs/Leaves' },

		{ text: 'Income Tax', header: true },
		{ text: 'TDS', link: 'docs/TDS' },
		{ text: 'Tax Regime', link: 'docs/Regime' },
		{ text: 'Deductions', link: 'docs/Deduction' },
		{ text: 'Flexible Benefits', link: 'docs/Benefits' },
		{ text: 'Salary Optimisation', link: 'docs/Salary' },
		{ text: 'Form 16', link: 'docs/Form16' },
		
		{ text: 'Warehouse', header: true },
		{ text: 'Infrastructure', link: 'docs/Warehouse-Infra' },
		{ text: 'Daily Operations', link: 'docs/warehouse-Ops' },
		{ text: 'Hiring', link: 'docs/Warehouse-People' },
		{ text: 'Cost Management', link: 'docs/Warehouse-Cost' },

	],
};
