import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/ember-dossier';

export default defineFilepressConfig({
	title: 'EmberDossier',
	description:
		'A living dossier that prioritizes what is still current. Present tense first.',
	tagline: 'Present tense first.',
	lede: 'A living dossier that prioritizes what’s still hot.',
	url: 'https://emberdossier.com',
	author: 'Catalyst Forge LLC',
	logo: '/logo.svg',
	ogImage: '/logo.svg',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Skill', href: '/skill' },
		{ label: 'Sample', href: '/sample' },
		{ label: 'About', href: '/about' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'npm', href: 'https://www.npmjs.com/package/get-ember-dossier' },
		{ label: 'Skill', href: '/skill' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	topics: [
		{ label: 'Pattern', tag: 'pattern' },
		{ label: 'Agents', tag: 'agents' }
	]
});
