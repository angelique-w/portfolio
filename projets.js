/*Display projects cards*/
let arrayProjects = [
    {
        id: "card1",
        idModal: "modal1",
        idCloseModal: "closeModal1",
        title: "Portfolio Personnel",
        imageMin: "./images/images-projets/portfolioMin.png",
        imageMax: "./images/images-projets/portfolioMax.png",
        description:
            "Prise en main de JavaScript Vanilla et manipulation du DOM via ce portfolio.",
        descriptionModal:
            "Il me semblait important de prendre en main le JavaScript Vanilla avant d'entamer l'apprentissage d'un de ses frameworks. La réalisation de ce portfolio a été pour moi l'occasion de mettre en pratique le JavaScript Vanilla, de manipuler le DOM par ce biais et d'appréhender la POO.",
        url: "",
        techno: "HTML - CSS - JavaScript Vanilla",
        isProjectIndividial: true
    },
    {
        id: "card2",
        idModal: "modal2",
        idCloseModal: "closeModal2",
        title: "Porfolio session Wild Code School",
        imageMin: "./images/images-projets/portfolioWild.png",
        imageMax: "./images/images-projets/portfolioWild.png",
        description:
            "Réalisation du portfolio de la session septembre 2019 - février 2020 de la Wild Code School.",
        descriptionModal:
            "Ce portfolio a été notre premier projet réalisé dans le cadre de la Wild Code School. Nous étions une équipe de 4. Nous avons ainsi appréhendé le travail de groupe, l'intérêt d'utiliser des outils de gestion de version (dans ce cas précis Github) la répartition des tâches, pour présenter un projet dans un délais imparti.",
        url: "https://wcs-sept2019-portfolio.netlify.com/",
        techno: "HTML - CSS - JavaScript Vanilla",
        isProjectIndividial: false
    },
    {
        id: "card3",
        idModal: "modal3",
        idCloseModal: "closeModal3",
        title: "CrazyClicker",
        imageMin: "./images/images-projets/crazyclickers.png",
        imageMax: "./images/images-projets/crazyclickers.png",
        description:
            "Réalisation d'un jeu de navigateur : clicker game avec classement des joueurs en temps réel selon leur score.",
        descriptionModal:
            "Ce projet consiste en un jeu de navigateur, un clicker game, avec classement des joueurs en temps réel. La division de notre promotion entre un parcours JavaScript et un parcours PHP, avec bien évidemment des joutes verbales concernant la puissance de nos langages respectifs, a fait émerger l'envie chez notre client (notre formateur), de pouvoir s'inscire au sein d'une team (JavaScript ou PHP) pour se défouler sur la team adverse via des clicks. Par la suite, nous avons mis en place la possibilité de créer de nouvelles teams auxquelles appartenir ou bien sur lesquelles se défouler. Ce projet a été réalisé en équipe (3 collaborateurs) dans le cadre de la Wild Code School. Une demande client a été formulée avec un délais de livraison imposé. Nous avons fourni un wireframe, validé les attentes et besoins du client et utilisé la méthodologie Scrum pour encadrer notre travail. Ce projet nous a permis de mettre en pratique la librairie étudiée durant notre cursus, React, de travailler l'intégration via Reactstrap et de mettre en place des requêtes Axios auprès d'une API.",
        url: "https://crazyclicker.netlify.com/",
        techno: "React - API Rest (Axios) - ReactStrap - CSS",
        isProjectIndividial: false
    },
    {
        id: "card4",
        idModal: "modal4",
        idCloseModal: "closeModal4",
        title: "Hacklloween",
        imageMin: "./images/images-projets/wildMonsters.jpg",
        imageMax: "./images/images-projets/wildMonsters.jpg",
        description:
            "Développement d'un jeu de combat durant un hackthon de 24h en collaboration avec une équipe PHP.",
        descriptionModal:
            "Nous avons participé à un hackathon de 24h avec un collègue JavaScript, en partenariat avec 3 collaborateurs PHP. Notre sujet de départ était une API contenant des monstres présentant différentes caractéristiques. Nous avons choisi de développer un jeu de combat de monstres que nous avons pu rendre fonctionnel dans le temps imparti. Dans le cadre de ce projet, j'ai principalement travaillé sur la fonctionnalité permettant de créer un nouveau monstre customisé. Nous avons pris le temps par la suite de finaliser les derniers détails pour le rendre plus agréable à l'utilisation et plus ludique.",
        url: "wildmonstersbattle.herokuapp.com",
        techno: "React - Reacstrap - API Rest - CSS",
        isProjectIndividial: false
    },
    {
        id: "card5",
        idModal: "modal5",
        idCloseModal: "closeModal5",
        title: "ResoLab",
        imageMin: "./images/images-projets/resolab.png",
        imageMax: "./images/images-projets/resolab.png",
        description:
            "Création d'un prototype de réseau social à visée éducative pour Antic Pays-Basque. Mis en test au sein de 5 écoles locales.",
        descriptionModal:
            "Les enfants de moins de 13 ans sont massivement présents sur les réseaux sociaux. Or tous les parents ne sont pas en mesure de les accompagner dans l’apprentissage des codes sociaux numériques. Le projet RESOLAB vise donc à prévenir les comportements à risque des adolescents sur les Réseaux Sociaux en adaptant au monde « numérique », les espaces d’expérimentation qui existent dans le monde « physique ». (cf. <a href='https://www.antic-paysbasque.com/projets/resolab/'>Site Antic Pays-Basque</a>)</br>Ainsi, notre client nous demande de créer une plateforme reprenant les codes des réseaux sociaux actuels (notamment celui d'Instagram). Il s'agit d'un premier prototype leur permettant d'expérimenter le dispositif au sein d'écoles patenaires locales.</br>Une authentification est mise en place, l'utilisateur est identifié en tant qu'écolier, modérateur ou administrateur, impliquant des possibilités d'actions différentes sur la plateforme. Les utilisateurs peuvent poster des publications, liker, commenter et intéragir entre-eux via un système de discussion instantanée. Les contenus indésirables peuvent être alertés et les modérateurs en sont informés. Un modérateur peut prendre en charge une alerte et résoudre le problème directement via le réseau social, choisir de bloquer ou débloquer le contenu alerté. Un backoffice est mis en place afin de permettre aux administrateurs d'enregistrer de nouvelles classes et étudiants.",
        url: "",
        techno:
            "React - Material UI - Node.js - Express - Sequelize - Redux - API Rest - PHP",
        isProjectIndividial: false
    },
    {
        id: "card6",
        idModal: "modal6",
        idCloseModal: "closeModal6",
        title: "Application de gestion",
        imageMin: "./images/images-projets/visuel-a-venir.png",
        imageMax: "./images/images-projets/visuel-a-venir.png",
        description:
            "Réalisation en cours d'une application pour fluidifier la gestion administrative et pédagogique d'une association culturelle.",
        descriptionModal:
            "Membre d'une association de joueurs de cornemuse écossaise, Piperade SWPA, je me suis engagée dans la mise en place d'une solution informatique permettant d'alléger et de fluidifier la gestion administrative, des ressources humaines, des supports pédagogiques ainsi que la planification des prestations. Le développement de ce type d'outil représente une grande source de motivation et est très enthousiasmant. Le projet n'en est qu'a son démarrage mais ce sera pour moi l'opportunité de mettre en pratique le langage Python, que j'avais commencé à étudier notamment dans le cadre de l'apprentissage de l'algorithmie et que je souhaitais pouvoir appréhender de façon plus concrète.",
        url: "",
        techno: "",
        isProjectIndividial: true
    }
];

class Projet {
    constructor(
        id,
        idModal,
        idCloseModal,
        title,
        imageMin,
        imageMax,
        description,
        descriptionModal,
        url,
        techno
    ) {
        this.id = id;
        this.idModal = idModal;
        this.idCloseModal = idCloseModal;
        this.title = title;
        this.imageMin = imageMin;
        this.imageMax = imageMax;
        this.description = description;
        this.descriptionModal = descriptionModal;
        this.url = url;
        this.techno = techno;
    }

    displayProject(projet) {
        const voirProjet =
            projet.url !== ""
                ? `<a href=${projet.url} target="_blank">Voir le projet</a>`
                : "";
        const cardProjet = `<div id=${projet.id} class="card" title="En savoir plus">
            <img class="img-card" src=${projet.imageMin} alt=${projet.title} />
            <h2 class="padding-card">${projet.title}</h2>
            <p class="padding-card">${projet.description}</p>
            <p class="padding-card technos">${projet.techno}</p>
        </div>
        <div id=${projet.idModal} class="modal">
            <div class="modal-content flex-column">
                <span id=${projet.idCloseModal} class="close">&times;</span>
                <div class="container-modal-content">
                    <div class="container-img-modal">
                        <img class="img-modal" src=${projet.imageMax} alt=${projet.title} />
                    </div>
                    <div class="container-description-modal">
                        <h2 class="">${projet.title}</h2>
                        <p class="text-justify">${projet.descriptionModal}</p>
                        <p class="technos">Techno utilisées : ${projet.techno}</p>
                        ${voirProjet}
                    </div>
                </div>
            </div>
        </div>`;

        document
            .getElementById("container-projects")
            .insertAdjacentHTML("beforeend", cardProjet);

        const modal = document.getElementById(`${projet.idModal}`);
        const card = document.getElementById(`${projet.id}`);
        const xclose = document.getElementById(`${projet.idCloseModal}`);
        card.onclick = () => {
            modal.style.display = "block";
        };
        xclose.onclick = () => {
            modal.style.display = "none";
        };
    }
}

arrayProjects.forEach(projet => {
    const newProjet = new Projet(
        `${projet.id}`,
        `${projet.idModal}`,
        `${projet.idCloseModal}`,
        `${projet.title}`,
        `${projet.imageMin}`,
        `${projet.imageMax}`,
        `${projet.description}`,
        `${projet.descriptionModal}`,
        `${projet.url}`,
        `${projet.techno}`
    );
    newProjet.displayProject(projet);
});

/*Horizontal scroll buttons*/
const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function() {
    document.getElementById("container-projects").scrollLeft += 430;
};

buttonLeft.onclick = function() {
    document.getElementById("container-projects").scrollLeft -= 430;
};
