"use strict";


let chaptersObj = {
    ObjChapterArrivee: {
        subtitle: "arrivée",
        text: "Vous arrivez dans le pays où vous allez vous battre afin de défendre votre pays pour les prochaines semaines et vous avez le choix entre aller vous reposez pour reprendre des force avant d'aller vous battre ou bien d'aller directement sur le champ de bataille.",
        img: "assets/chapitre_2.png",
        alt: "image d'avion",
        options: [
            {
                text: "aller se battre",
                action: 'goToChapter(chaptersObj.ObjChapterAllerSeBattre)'
            },
            {
                text: "aller se reposer",
                action: 'goToChapter(chaptersObj.ObjChapterRepos)'
            }
        ]
    },

    ObjChapterAllerSeBattre: {
        subtitle: "allons se battre",
        text: "Vous avez décidé d'aller vous battre au lieu de vous reposer, vous êtes en route vers le terrain.",
        img: "assets/chapitre_2.png",
        alt: "image de soldats dans un camion",
        options: [
            {
                text: "continuer",
                action: 'goToChapter(chaptersObj.ObjChaptereEnfant)'
            }
        ],
    },

    ObjChapterRepos: {
        subtitle: "repos",
        text: "Vous avez décidé de rester au campement pour vous reposer mais lors de votre repos, le camps c'est fait attaquer et vous avez sucombé à vos blessure.",
        img: "assets/chapitre_3.jpg",
        alt: "image de colliers militaire",
        options: [
            {
                text: "recommencer",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ],
    },

    /// Je sais pas encore a quoi sert le ce chapitre
    ObjChapterGuerre: {
        subtitle: "la guerre",
        alt: "image de soldat avec un fusil",
        text: "Vous êtes en guerre et vous défendez!",
        img: "assets/chapitre_4.jpg",
    },
    /////////////////////////////////////////////////

    ObjChaptereEnfant: {
        subtitle: "l'enfant",
        text: "Vous vous défendez et soudainement repérer un enfant dans votre ligne de mire, celui-ci porte un fusil et se dirige vers vos coéquipiers.",
        img: "assets/chapitre_5.png",
        alt: "image d'enfant avec un fusil",
        options: [
            {
                text: "l'ignorer",
                action: 'goToChapter(chaptersObj.ObjChapterIgnorer)'
            },
            {
                text: "le tuer",
                action: 'goToChapter(chaptersObj.ObjChapterPresVictoire)'
            }
        ],
    },

    ObjChapterIgnorer: {
        subtitle: "Ignorer",
        text: "Vous avez ignoré l'enfant et il a réussi à tuer et blesser gravement vos coéquipiers, vous ne pouvez pas vous défendre avec aussi peu d'allier. Vous vous faites tuer.",
        img: "assets/chapitre_6.jpg",
        alt: "image de deux soldats",
        options: [
            {
                text: "recommencer",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ],

    },

    ObjChapterPresVictoire: {
        subtitle: "près de la victoire",
        text: "Vous avez tué l'enfant et vos amis ne sont plus en danger, vous devez fuire rapidement avant que les renforts ennemis arrivent.",
        img: "assets/chapitre_7.jpg",
        alt: "image d'un soldat camouflé",
        options: [
            {
                text: "prendre le matériel avant de fuire",
                action: 'goToChapter(chaptersObj.ObjChapterPrendreMateriel)'
            },
            {
                text: "continer de se battre avant de fuire",
                action: 'goToChapter(chaptersObj.ObjChapterBattreAvantFuite)'
            },
            {
                text: "attendre",
                action: 'goToChapter(chaptersObj.ObjChapterAttente)'
            }
        ],
    },

    ///je sais pas a quoi sert ce chapitre
    ObjChapterFuite: {
        subtitle: "la fuite",
        text: "Les ennemis s'approchent qu'allez vous faire?",
        img: "assets/chapitre_8.jpg",
        opions: [
            {
                text: "recommencer",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ],
    },
    ///////////////////////////////////////


    ObjChapterAttente: {
        subtitle: "l'attente",
        text: "Vous avez attendu trop longtemps avant de fuire et les forces ennemis vous ont rattrapé. vous êtes mort.",
        img: "assets/chapitre_9.jpg",
        options: [
            {
                text: "recommencer",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ],
    },

    ObjChapterPrendreMateriel: {
        subtitle: "prendre le matériel",
        text: "Vous prenez le matériel avant de fuire.",
        img: "assets/chapitre_10.jpg",
        options: [
            {
                text: "continuer",
                action: 'goToChapter(chaptersObj.ObjChapterEmbuscade)'
            }
        ],
    },


    ObjChapterBattreAvantFuite: {
        subtitle: "se battre avant la fuite",
        text: "Vous continuer de vous battre avant de prendre la fuite.",
        img: "assets/chapitre_11.jpg",
        options: [
            {
                text: "l'embuscade",
                action: 'goToChapter(chaptersObj.ObjChapterEmbuscade)'
            }
        ],
    },


    ObjChapterEmbuscade: {
        subtitle: "l'embuscade",
        text: "Vous vous retrouvez dans une embuscade en vous dirigeant vers votre campement, vous avez choisi de prendre le matériel, ce qui vous a permis d'avoir les munitions nécessaire.",
        img: "assets/chapitre_12.jpg",
        //mettre option si tu réussis ou non
        options: [
            {
                text: "Avez-vous assez de munitions?",
                action: 'isKeyFounded("beginningObj")'
            }
        ],
    },

    ObjChapterVictoire: {
        subtitle: "victoire",
        text: "Vous avez réussi a survivre félicitation!",
        img: "assets/chapitre_13.jpg",
        options: [
            {
                text: "Avez-vous reussi",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ]
    },

    ObjChapterDefaite: {
        subtitle: "la défaite",
        text: "Vous y étiez presque mais malheureusement vous êtes mort dans l'embuscade.",
        img: "assets/chapitre_14.jpg",
        options: [
            {
                text: "Avez-vous echoue",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ]
    },

};


let goToChapter = function (chapterName) {


    //loader le texte
    let sousTitreHTML = document.getElementsByClassName("chapter-titre")[0];
    sousTitreHTML.innerHTML = chapterName.subtitle;

    let questionHTML = document.getElementsByClassName("chapter-question")[0];
    questionHTML.innerHTML = chapterName.text;



    // loader l'image
    let imageHTML = document.getElementsByClassName("image");
    imageHTML.src = chapterName.img;


    //Loop dans tableau f. pour créer les boutons
    const tableauOptions = chapterName.options;
    let nbBoutons = tableauOptions.length;

    let btnContainerHTML = document.getElementsByClassName("btnContainer")[0];

    var child = btnContainerHTML.lastElementChild; 
    while (child) {
        btnContainerHTML.removeChild(child);
        child = btnContainerHTML.lastElementChild;
    }


    for (let i = 0; i < nbBoutons; i++) {

        let btnHTML = document.createElement("a");
        btnHTML.className = "bouton";
        btnHTML.innerHTML = tableauOptions[i].text;
        btnHTML.setAttribute("onclick", tableauOptions[i].action);

        btnContainerHTML.appendChild(btnHTML);

    }

};




//sert a savoir si la cle a ete recupere
let keyfounded = false;

let changeStateKeyFounded = function () {
    keyfounded = true;
    goToChapter("ObjChapterEmbuscade");

    //pas dans les instructions
    //let imgCle = document.querySelector(".ico-key").classList.add("isVisible");
}

//si la cle est trouve
let isKeyFounded = function () {
    if (keyfounded) {
        goToChapter("ObjChapterVictoire");
    } else {
        goToChapter("ObjChapterDefaite");
    }
}




goToChapter(chaptersObj.ObjChapterArrivee);







