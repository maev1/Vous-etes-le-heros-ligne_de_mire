"use strict";

console.log("ici");
let chapterObj = {
    ObjChapterArrivee: {
        subtitle : "arrivée",
        text : "Vous arrivez dans le pays où vous allez vous battre afin de défendre votre pays pour les prochaines semaines et vous avez le choix entre aller vous reposez pour reprendre des force avant d'aller vous battre ou bien d'aller directement sur le champ de bataille.",
        img : "assets/chapitre_1.jpg",
        option : [ 
            ( { text: "aller se battre", action: 'goToChapter("ObjChapterAllerSeBattre")' }),
            ( { text: "aller se reposer", action: 'goToChapter("ObjChapterRepos")' }),
         ],
    },

    ObjChapterAllerSeBattre: {
        subtitle : "allons se battre",
        text : "Vous avez décidé d'aller vous battre au lieu de vous reposer, vous êtes en route vers le terrain.",
        img : "assets/chapitre_2.jpg",
        option : [ 
            ( { text: "continuer", action: 'goToChapter("ObjChaptereEnfant")' }),
        ],
    },

    ObjChapterRepos: {
        subtitle : "repos",
        text : "Vous avez décidé de rester au campement pour vous reposer mais lors de votre repos, le camps c'est fait attaquer et vous avez sucombé à vos blessure.",
        img : "assets/chapitre_3.jpg",
        option : [ 
            ( { text: "recommencer", action: 'goToChapter("ObjChapterArrivee")' }),
        ],
    },
    
/// Je sais pas encore a quoi sert le ce chapitre
    ObjChapterGuerre: {
        subtitle : "la guerre",
        text : "Vous êtes en guerre et vous défendez!",
        img : "assets/chapitre_4.jpg",
    },
/////////////////////////////////////////////////

    ObjChaptereEnfant: {
        subtitle : "l'enfant",
        text : "Vous vous défendez et soudainement repérer un enfant dans votre ligne de mire, celui-ci porte une grenade et se dirige vers vos coéquipiers.",
        img : "assets/chapitre_5.jpg",
        option : [ 
            ( { text: "l'ignorer", action: 'goToChapter("ObjChapterIgnorer")' }),
            ( { text: "l'ignole tuer", action: 'goToChapter("ObjChapterPresVictoire")' }),
        ],
    },

    ObjChapterIgnorer: {
    subtitle : "Ignorer",
    text : "Vous avez ignoré l'enfant et il a réussi à tuer et blesser gravement vos coéquipiers, vous ne pouvez pas vous défendre avec aussi peu d'allier. Vous vous faites tuer.",
    img : "assets/chapitre_6.jpg",
    option : [ 
        ( { text: "recommencer", action: 'goToChapter("ObjChapterArrivee")' }),
    ],
    
},

ObjChapterPresVictoire: {
    subtitle : "près de la victoire",
    text : "Vous avez tué l'enfant et vos amis ne sont plus en danger, vous devez fuire rapidement avant que les renforts ennemis arrivent.",
    img : "assets/chapitre_7.jpg",
    option : [ 
        ( { text: "prendre le matériel avant de fuire", action: 'goToChapter("ObjChapterPrendreMateriel")' }),
        ( { text: "continer de se battre avant de fuire", action: 'goToChapter("ObjChapterBattreAvantFuite")' }),
        ( { text: "attendre", action: 'goToChapter("ObjChapterAttente")' }),
    ],
},

///je sais pas a quoi sert ce chapitre
ObjChapterFuite: {
    subtitle : "la fuite",
    text : "Les ennemis s'approchent qu'allez vous faire?",
    img : "assets/chapitre_8.jpg",
    opion : [ 
        ( { text: "recommencer", action: 'goToChapter("ObjChapterArrivee")' }),
    ],
},
///////////////////////////////////////


ObjChapterAttente: {
    subtitle : "l'attente",
    text : "Vous avez attendu trop longtemps avant de fuire et les forces ennemis vous ont rattrapé. vous êtes mort.",
    img : "assets/chapitre_9.jpg",
    option : [ 
        ( { text: "recommencer", action: 'goToChapter("ObjChapterArrivee")' }),
    ],
},

ObjChapterPrendreMateriel: {
    subtitle : "prendre le matériel",
    text : "Vous prenez le matériel avant de fuire.",
    img : "assets/chapitre_10.jpg",
    option : [ 
        ( { text: "continuer", action: 'goToChapter("ObjChapterEmbuscade")' }),
    ],
},


ObjChapterBattreAvantFuite: {
    subtitle : "se battre avant la fuite",
    text : "Vous continuer de vous battre avant de prendre la fuite.",
    img : "assets/chapitre_11.jpg",
    option : [ 
        ( { text: "l'embuscade", action: 'goToChapter("ObjChapterEmbuscade")' }),
    ],
},


ObjChapterEmbuscade: {
    subtitle : "l'embuscade",
    text : "Vous vous retrouvez dans une embuscade en vous dirigeant vers votre campement, vous avez choisi de prendre le matériel, ce qui vous a permis d'avoir les munitions nécessaire.",
    img : "assets/chapitre_12.jpg",
    //mettre option si tu réussis ou non
},

ObjChapterVictoire: {
    subtitle : "victoire",
    text : "Vous avez réussi a survivre félicitation!",
    img : "assets/chapitre_13.jpg",
},

ObjChapterDefaite: {
    subtitle : "la défaite",
    text : "Vous y étiez presque mais malheureusement vous êtes mort dans l'embuscade.",
    img : "assets/chapitre_14.jpg",
},

}

//////




//////

function goToChapter(chapterName){

    let q0 = document.getElementsByClassName("question")[0];
    st0.innerHTML = chapterObj[chapterName]["subtitle"];

    let t0 = document.getElementsByClassName("texte")[0];
    sy0.innerHTML = chapterObj[chapterName]["text"];

    ///truc que la prof a fait
    console.log(chapterObj[chapterName].subtitle);
    console.log(chapterObj[chapterName].text);
    //////////////////////////

    const node = document.getElementsByClassName('bouton')[0];
    //comprendre ce truc
    node.querySelectorAll('*').forEach(n => n.remove());
    ////////////////////

    const tableauOptions = chapterObj[chapterName].options;
    let nbBoutons = tableauOption.length;

    for (let i = 0;i < nbBoutons; i++) {
        let btn = document.getElementsByClassName('boutons')[0];
        let nouveauBtn = document.createElement("button");
        nouveauBtn.innerText = tableauOptions[i].text;
        nouveauBtn.type = "button";
        nouveauBtn.className = "clsbtn";
        nouveauBtn.setAttribute("onclick",tableauOptions[i].action);

        btn.appendChild(nouveauBtn);
    }
}
