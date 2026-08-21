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
		{ label: 'Examples', href: '/examples' },
		{ label: 'About', href: '/about' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'npm', href: 'https://www.npmjs.com/package/get-ember-dossier' },
		{ label: 'Skill', href: '/skill' },
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNpdkUFrAjEQhf_K8s5R6TW3IhQsbSnorZQyuzvG1GwSJrPKVvzvJUoFext47_G-mTnhAPtgEGlgWDjWGQ8ty6xPpXgWGOiUqxR8KyQTDIqSjgUW1Kk_MAyC7ziW6npdba6Obg97QqDoRnJV2UyZ1534rKZ5pgP9zcv1GgYyRvUXhLfU8_y7wGArNPAxyf4KtvWBs3Cp0i4V9dHBYhnS2G8DCTfv5LjgbNBzLrAfJ8QK6Vvhn0qZYfG4ano-cEh54KiNphT2XnE2V_O_mpqo2_quKV65cRxZSJPcAkeh6MLlTvmepucc0nRrwfnToB196OtdMnV7cvw1UCTHAosc81DZhXMqXpNMsNip5mIXC-d1N7bzLg2LJSmFqejsKYnj2cvLcnH_sPMvR1Wfxw' },
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNq1k99r20gQx_-VQX1JjGW7oRyH7umaNuW4UAop9xIFs5bG1hJ5V-yubEzbv-ve7y-7mVn9sJ3koYESkkgzo_n5_XxLdkn2dpoYtcUkS3C7QpeW1nuNLpkmJe6wtg09Z8m1Cqo--AA31m2QnDt0XltDrsXs7ewdWXxQofVkUEXQO46pdYHGc-o_G1VUmF7NFmR-1KYkW9E6b13qH3Vdk7VpXWMl-NqhCggKKMKhCVMo7LZxWFEySjwFg21wqoaV07jWZgOhUgFqVKWHvQ4VOKTCxQEuar1jfzcTrK3bqnDJ1ZzdoVGmoILfEm9bx09JFULjs_l8Q1na1YzqzvvJU5k8vb29np8vqmlXtfbVc4v6MU208cG1tBNr_JJGKyopWSGNnSXGGl6VwbC37pEMetvUGkuyrXWNnlLhto-jbMHamtOskVZTUFx2_zBNVq0payyXygW9pv37aMaNQ--5XMAatxjcYSxZog_aKOmLwyl5ZbfYqM3xJmTWblTeB33okA6lg5Vkr9uYU3v6Nk3T3Mj9l9L0shNVBrmoapEnuWFxZnCSIDeDNDM4XXhuznK84xxRmhlEZeamE2YGoy5zw7LM4FiVuelEycl-uSq50f4AGby0_9yM6x-jfmL7NNSg_Sw3AFH8r8wFMIj_6SmeKj8WZOlnwDLk1076GXTKZ9so_T7uXPeS6f4hN0-kP3ii-uV1kP9Y9lj-mcRv0KCjG8fcJT1lcLW4-i1d_J5eLdjWRViatVKmTFUbKuu45YL-6q72kGfJZx8XK5qSFmekX45ctboOy9VB9HWyPEiHz_b7_azonGv2yWlYLcJPbt7AHWeGG05NH56dKDffgX7oH8XLL1smkw89Q5MJ-c_KdzH_RJgkQmjqHXdClNgjVL3jNqIlnpGu3vs3MSauY8zYmZvJjWAAYvoDeu14wgihstRZsNB6BI_KFdVcBMHsgKyUZLQnlog5A4ShNkIYDTWbyI7ewJfIMr_9epa7kgNpL53hTuAjxyvoi0v90vP37BGljb-OOATh8MV2GE2yMyQx_edIJ9k6PKP5ZgD0KFqKfZW7jKCy-YIj-qW8j8DCAOyTiI8C7ks9fu1ZPunzwxHO5Ij5YlOCyeRTT2U84L0wI8g8XDxP6CX89y91S4jC6gD3p8sdP3qez0uSXfLjf6QZV0s' }
	],
	topics: [
		{ label: 'Pattern', tag: 'pattern' },
		{ label: 'Agents', tag: 'agents' }
	]
});
