export let PortfolioMenuData: any[] = [
	{
		id: 'profile',
		title: 'Profil',
		position: 'a',
		content: 'Découvrez les informations générales sur mon profil.'
	},
	{
		id: 'experiences',
		title: 'Expérience',
		position: 'b',
		content:
			"Explorez mon parcours professionnel et les rôles clés que j'ai occupés au fil des ans."
	},
	{
		id: 'formations',
		title: 'Formation',
		position: 'c',
		content:
			'Un aperçu de mon parcours académique et des formations en ligne qui ont enrichi mes compétences.'
	},
	{
		id: 'competences',
		title: 'Compétences',
		position: 'd',
		content:
			'Découvrez les compétences techniques et interpersonnelles qui me définissent en tant que professionnel.'
	},
	{
		id: 'book',
		title: 'Book',
		position: 'e',
		content:
			'Feuilletez une sélection de mes travaux qui illustrent mon expertise et mon approche créative.'
	}
];

export let profilData = [
	{
		id: 'a',
		title: 'Front-end',
		paragraphs: []
	},
	{
		id: 'b',
		title: 'Générale',
		paragraphs: [
			'<b>Nom:</b> FABIEN',
			'<b>Prénom:</b> Pierre',
			'<b>Sex:</b> Masculin',
			'<b>Date de naissance:</b> 22.07.1993',
			'<b>Nationalité:</b> Française',
			'<b>Lieu de naissance:</b> Montauban',
			'<b>Lieu habitation:</b> Toulouse, Jolimont',
			'<b>Permis:</b> catégorie B',
			'<b>Loisir:</b> Skate/Snow, production musicale'
		]
	},
	{
		id: 'c',
		title: 'Le chemin vers le front-end:',
		paragraphs: [
			`Depuis mes débuts dans la création multimédia en 2010, j'ai entrepris un voyage continu vers l'innovation, explorant les intersections entre la technologie et la créativité. Initialement fasciné par des outils comme Photoshop, Illustrator et After Effects, j'ai rapidement trouvé ma voie dans le développement web. De WordPress à Symfony, en passant par ReactJS et récemment SvelteKit/NodeJS, chaque nouvelle technologie a enrichi mes compétences et nourri ma passion pour la création numérique.`,
			`Mon engagement envers l'innovation s'étend au-delà du développement web. Mes récentes expériences avec Three.js, guidées par des experts comme Bruno Simon, m'ont ouvert de nouveaux horizons dans l'exploration d'expériences utilisateur immersives en 3D. Cette démarche vise à repousser les limites de l'interaction utilisateur sur le web en mariant esthétique visuelle et fonctionnalité de manière inattendue.`,
			`Cherchant à continuellement élargir mes compétences, j'ai consolidé mon rôle de développeur frontend chez Hubeecar, où j'ai approfondi ma maîtrise de TypeScript, ReactJS et GraphQL. J'ai ainsi développé un ensemble de compétences intégrées, essentielles pour créer des solutions web qui anticipent les besoins des utilisateurs plutôt que d'y répondre a posteriori.`,
			`Grâce au développement d'un boilerplate créatif, j'ai jeté les bases d'une approche holistique du développement web, combinant expertise frontend et backend pour créer des applications web complètes, performantes et sécurisées. Je suis impatient de mettre cette expérience au service de nouveaux défis, de collaborer avec des esprits passionnés et de contribuer à des projets qui redéfinissent les normes en matière d'expérience utilisateur.`
		]
	}
];

export let experienceData = [
	{
		date: 'sept.2017 - nov.2018',
		title: ' Amadeus Mobile',
		poste: 'Web designer - intégrateur',
		items: ['PhotoShop - Wordpress - Prestashop - Symfony', 'HTML - SCSS - JQuery - PHP']
	},
	{
		date: 'mar.2019',
		title: ' Auto-Entrepreneur',
		poste: 'Développeur Fullstack',
		items: [
			'Création site Projet360.com',
			'Synfony 4, jQuery, JS',
			'Découverte de ReactJs, Meteor, GSAP'
		]
	},
	{
		date: 'dec.2020 - oct.2022',
		title: ' Caplaser',
		poste: 'Développeur web - intégrateur',
		items: ['Wordpress, Prestashop, Intégration', 'HTML, JS, PHP, SCSS']
	},
	{
		date: 'fev.2022',
		title: ' Awards',
		poste: 'Développeur créatif - Inkorporation.fr',
		items: [
			'Inkorporation.fr',
			'Awwwards - 7.39',
			'cssdesignawards - Special Kudos award, Best UI-UX-Innovation',
			'cssWinner: Site of the Day',
			'cssNectar: Site of the Day',
			'designNominees: Site of the Day'
		]
	},
	{
		date: 'sept.2022 - oct.2022',
		title: 'La jungle',
		poste: 'Développeur web, intégrateur',
		items: ['Twig, JS, BEM CSS, HTML, JS, SCSS']
	},
	{
		date: 'mar.2023 - sept.2023',
		title: 'Hubeecar',
		poste: 'Développeur web front-end',
		items: ['ReactJs - Typescript - MaterialUI - GraphQl', 'Methode Agile - Git ']
	},
	{
		date: 'fev.2024',
		title: 'Awards',
		poste: 'Développeur créatif - XplicitDrink.com',
		items: ['XplicitDrink.com', 'cssWinner: Site of the Day', 'cssNectar: Site of the Day']
	},
	{
		date: 'sept.2023 - fev.2024',
		title: 'Boilerplate',
		poste: 'Développeur Fullstack',
		items: [
			'SvelteKit - GraphQL - NodeJs',
			'FrontEnd: cursor, darkmode, notifications, transition de page, preloader, PWA, smoothScroll, traduction, ThreeJs',
			'BackEnd: account, role, handleError, session cookies, token, rateLimite, black listed token, websocket',
			'PlayWright, Docker, GraphQL'
		]
	}
];

// Structure de données pour les portfolioFourth
export let formationData = [
	{
		key: 'a',
		headline: 'FormaSup82',
		description: `
		Bac+ 2, Design de pages Web, des ressources numériques / multimédia et d'information Septembre 2016 à 2017.<br><br>
		Web designer, intégrateur, développeur web.<br><br>
		Une promo exceptionnelle ! Nous étions tous soudés pour apprendre les bases du développement web. Nous avons découvert le HTML et le CSS ainsi que Wordpress. Durant cette reconversion, j'ai réalisé un stage chez RezoPouce, avec Olivier Fillol comme maître de stage. Il m'a initié à Twig et m'a expliqué les fondamentaux de PHP avec Symfony. RezoPouce est une association basée à Moissac, qui facilite la mise en relation dans le domaine rural pour le covoiturage.
		`
	},
	{
		key: 'b',
		headline: '56',
		description: 'Cours sur Udémy: Sveltekit, React, NextJs, NodeJs, threeJs, MeteorJs, GSAP,...'
	},
	{
		key: 'c',
		headline: '2',
		description:
			'Cours sur Awwwards: <br>-Merging WebGL and HTML worlds, <br>-Building an immersive creative website from scratch without frameworks'
	},
	{
		key: 'd',
		headline: 'ThreeJs Journey ',
		description: `Le meilleurs pédagogue pour comprendre la 3D. J'ai nommé Bruno Simon.`
	}
];

export let competencesData: any[] = [
	{
		id: 'a',
		title: 'FrontEnd',
		content: `
		<b>Langages</b>:<br/>
			HTML - JSX<br/>
			Javascript<br/>
			PHP<br/>
			SCSS<br/>
			<b>Librairies & frameworks</b>:<br/>
			React<br/>
			PlayWright<br/>
			SvelteKit<br/>
			ThreeJs<br/>
			GSAP<br/>
			`,
		imageUrl:
			'/img/competences/frontend.webp'
	},
	{
		id: 'b',
		title: 'BackEnd',
		content: `
			NodeJs<br/>
			GraphQL<br/>
			`,
		imageUrl:
			'/img/competences/backend.webp'
	},
	{
		id: 'c',
		title: 'Design',
		content: `
			Photoshop<br/>
			Illustrator<br/>
			Figma
			`,
		imageUrl:
			'/img/competences/design.webp'
	},
	{
		id: 'd',
		title: 'Gestion',
		content: `
			Git<br/>
			GitHub<br/>
			GitLab<br/>
			Docker<br/>
			ClickUp<br/>
			`,
		imageUrl:
			'/img/competences/gestion.webp'
	}
];

export let bookData = [
	{
		id: 'a',
		title: 'Inkorporation.fr',
		subtitle: `Le premier site que j'ai présenter aux compétitions de design web !`,
		imageUrl: '/img/book/ink.webp'
	},
	{
		id: 'b',
		title: 'xplicitdrink.com',
		subtitle: 'Mon premier projet 3D visant à personnaliser une cannette !',
		imageUrl: '/img/book/xpli.webp'
	},
	{
		id: 'c',
		title: 'Boilerplate Sveltekit/NodeJs',
		subtitle: `Je suis tombé amoureux de sveltekit, c'est pourquoi j'ai réalisé un boilerplate avec celui-ci`,
		imageUrl: ''
	},
	{
		id: 'd',
		title: 'Mon portfolio',
		subtitle: 'Le voici, vous être devant actuellement.',
		imageUrl: '/img/book/act.webp'
	}
];
