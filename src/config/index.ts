import { NavItem } from '@/types/nav-item';
import {
	IconClipboardText,
	IconComponents,
	IconDashboard,
	IconLock,
	IconMoodSmile,
} from '@tabler/icons-react';

export const navLinks: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },
	{
		label: 'Inventory',
		icon: IconClipboardText,
		initiallyOpened: true,
		links: [
			{
				label: 'New Inventory',
				link: '/inventory/new',
			},
			{
				label: 'List Inventory',
				link: '/inventory/list',
			},
		],
	},

	// {
	// 	label: 'Components',
	// 	icon: IconComponents,
	// 	initiallyOpened: false,
	// 	links: [
	// 		{
	// 			label: 'Table',
	// 			link: '/dashboard/table',
	// 		},
	// 		{
	// 			label: 'Form',
	// 			link: '/dashboard/form',
	// 		},
	// 	],
	// },
	// {
	// 	label: 'Auth',
	// 	icon: IconLock,
	// 	initiallyOpened: true,
	// 	links: [
	// 		{
	// 			label: 'Login',
	// 			link: '/login',
	// 		},
	// 		{
	// 			label: 'Register',
	// 			link: '/register',
	// 		},
	// 	],
	// },
	// {
	// 	label: 'Sample',
	// 	icon: IconMoodSmile,
	// 	initiallyOpened: false,
	// 	links: [
	// 		{
	// 			label: 'Landing',
	// 			link: '/',
	// 		},
	// 	],
	// },
];
