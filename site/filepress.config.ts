import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/ember-dossier';

export default defineFilepressConfig({
	title: 'EmberDossier',
	description:
		'A living dossier that prioritizes what is still current. Present tense first.',
	tagline: 'Present tense first.',
	lede: 'A living dossier that prioritizes what’s still hot.',
	url: 'https://emberdossier.dev',
	author: 'Catalyst Forge LLC',
	logo: '/favicon.svg',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Skill', href: '/skill' },
		{ label: 'About', href: '/about' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'Skill', href: '/skill' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	topics: [
		{ label: 'Pattern', tag: 'pattern' },
		{ label: 'Agents', tag: 'agents' }
	]
});
