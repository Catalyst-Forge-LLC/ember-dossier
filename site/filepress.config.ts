import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/ember-dossier';

export default defineFilepressConfig({
	title: 'EmberDossier',
	description:
		'A living dossier that prioritizes what is still current. Present tense first.',
	tagline: 'Present tense first.',
	lede: 'Briefing · present tense · sources',
	url: 'https://emberdossier.com',
	author: 'Catalyst Forge LLC',
	logo: '/logo.png',
	ogImage: '/logo.png',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Get started', href: '/skill' },
		{ label: 'Examples', href: '/examples' },
		{ label: 'About', href: '/about' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'See the rest of the Catalyst Forge shelf.', href: 'https://catalystforge.com/tools/' },
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'npm', href: 'https://www.npmjs.com/package/get-ember-dossier' },
		{ label: 'Get started', href: '/skill' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNpdkUGP1DAMhf9K9c6ZHXHNdQAJtCCk2RtCyE08aXbSJLLTWVWj_neULSDYm2U_P9uf77jBvjPINDMsPswjy_uiGllg0NbasymOQrLCQBu1RWFBrsUbwyBFx1m76sunp13hrrB3JMphodArT2vls5NYmxk-043-xKfzGQay5BZfp38tnh-eFQYXoZlfilxhEbhdYuIqrL00FW0xB1icUln8JZHw8I0CKzYDz1Vhv9-RYaEzp-QmdlcYVFiwj61IpDTIkliHS5GhLmOKOtGYeKhSlLGZvf3N4G7Q749u0Nh4CJxZqBX52_AilEN6JVf_389zTWWdObehlZKw_TAYl5h8J1XJXSnwz5kyBRZY1Fznjp-1wWLJPqpLRdnDwMU3qa0zmbnurKfWqtrjkfsn_f7JB1e6nXAt2gGs_-hCbNMydsXxRI3Squ3wsUjgw-PjaXc5_LbB9gsj-8Ao' },
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqdkMFuGzEMRH9F4KkBZDspetKtcNpT_iAoAq127CWslRYktYER-N8LbZq2h556I8jBDOe90UrhwVOJMyjQt3mAPFZVhpCnEStyXSAU6Bgt5qua-17lDPK0QpRroUD3-4f9F_KkFq0pBYrJeO2azAlFu_PXJaYJu8_7e_J04TJSoNREq-z0wjmTp6XJUjfxURANLrrURFDMu1TnRTChKK_wrqCZxOwGYZy4nJ1N0VxGHNW9sk1OkFDS1X3KvPb7-N7JnarM0e56mtQVJZYECm-ktUmfaDJbNBwOZ7apDftU58NH893WfPf0dDygc9qNv0Etbcis079A3TxxUZOWjGvRF0FM0xY5IWcKVGrpqArstcqFAvG8ZMZInk6coVc1zB-6myerNXebEwQlYaTw_MPT0MqYMb5EMT7FZPq-xlmg2uMMGTNMrn8iR6hxidtfXX7zNNUZSzz_TWLr-qtq50GeBEtVtrqZ_R8xk1ZStP6-ScPtJ3Md4y4' }
	],
	topics: [
		{ label: 'Pattern', tag: 'pattern' },
		{ label: 'Agents', tag: 'agents' }
	]
});
