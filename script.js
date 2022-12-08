"use strict";


let chaptersObj = {
    ObjChapterArrivee: {
        subtitle: "arrivée",
        text: "Vous arrivez dans le pays où vous allez vous battre afin de défendre votre pays pour les prochaines semaines et vous avez le choix entre aller vous reposez pour reprendre des force avant d'aller vous battre ou bien d'aller directement sur le champ de bataille.",
        img: "assets/chapitre_1.png",
        hasVideo: false,
        alt: "image d'avion",
        class: "arrive",
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
        video: "assets/video_1.mp4",
        hasVideo: true,
        alt: "image de soldats dans un camion",
        class: "AllerSeBattre",
        options: [
            {
                text: "continuer",
                action: 'goToChapter(chaptersObj.ObjChaptereEnfant)'
            }
        ]
    },

    ObjChapterRepos: {
        subtitle: "repos",
        text: "Vous avez décidé de rester au campement pour vous reposer mais lors de votre repos, le camps c'est fait attaquer et vous avez sucombé à vos blessure.",
        img: "assets/chapitre_3.jpg",
        hasVideo: false,
        alt: "image de colliers militaire",
        class: "Repos",
        options: [
            {
                text: "recommencer",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ]
    },

    ObjChaptereEnfant: {
        subtitle: "l'enfant",
        text: "Vous vous défendez et soudainement repérer un enfant dans votre ligne de mire, celui-ci porte un fusil et se dirige vers vos coéquipiers.",
        img: "assets/chapitre_5.png",
        hasVideo: false,
        alt: "image d'enfant avec un fusil",
        class: "Enfant",
        options: [
            {
                text: "l'ignorer",
                action: 'goToChapter(chaptersObj.ObjChapterIgnorer)'
            },
            {
                text: "le tuer",
                action: 'goToChapter(chaptersObj.ObjChapterPresVictoire)'
            }
        ]
    },

    ObjChapterIgnorer: {
        subtitle: "Ignorer",
        text: "Vous avez ignoré l'enfant et il a réussi à tuer et blesser gravement vos coéquipiers, vous ne pouvez pas vous défendre avec aussi peu d'allier. Vous vous faites tuer.",
        img: "assets/chapitre_6.jpg",
        hasVideo: false,
        alt: "image de deux soldats",
        class: "Ignorer",
        options: [
            {
                text: "recommencer",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ]

    },

    ObjChapterPresVictoire: {
        subtitle: "près de la victoire",
        text: "Vous avez tué l'enfant et vos amis ne sont plus en danger, vous devez fuire rapidement avant que les renforts ennemis arrivent.",
        hasVideo: true,
        video: "assets/video_2.mp4",
        alt: "image d'un soldat camouflé",
        class: "PresVictoire",
        options: [
            {
                text: "prendre le matériel",
                action: 'goToChapter(chaptersObj.ObjChapterPrendreMateriel)'
            },
            {
                text: "continer de se battre",
                action: 'goToChapter(chaptersObj.ObjChapterBattreAvantFuite)'
            },
            {
                text: "attendre",
                action: 'goToChapter(chaptersObj.ObjChapterAttente)'
            }
        ]
    },


    ObjChapterAttente: {
        subtitle: "l'attente",
        text: "Vous avez attendu trop longtemps avant de fuire et les forces ennemis vous ont rattrapé. vous êtes mort.",
        img: "assets/chapitre_9.jpg",
        hasVideo: false,
        class: "Attente",
        options: [
            {
                text: "recommencer",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ]
    },

    //trouve la cle
    ObjChapterPrendreMateriel: {
        subtitle: "prendre le matériel",
        text: "Vous prenez le matériel et fuyez.",
        img: "assets/chapitre_10.jpg",
        hasVideo: false,
        class: "PrendreMateriel",
        options: [
            {
                text: "continuer",
                action: 'goToChapter(chaptersObj.ObjChapterEmbuscade)'
            }
        ]
    },


    ObjChapterBattreAvantFuite: {
        subtitle: "se battre avant la fuite",
        text: "Vous continuer de vous battre avant de prendre la fuite.",
        img: "assets/chapitre_11.jpg",
        hasVideo: false,
        class: "BattreAvantFuite",
        options: [
            {
                text: "l'embuscade",
                action: 'goToChapter(chaptersObj.ObjChapterEmbuscade)'
            }
        ]
    },


    ObjChapterEmbuscade: {
        subtitle: "l'embuscade",
        text: "Vous vous retrouvez dans une embuscade en vous dirigeant vers votre campement, vous avez choisi de prendre le matériel, ce qui vous a permis d'avoir les munitions nécessaire.",
        img: "assets/chapitre_12.jpg",
        hasVideo: false,
        class: "Embuscade",
        options: [
            {
                text: "Avez-vous assez de munitions?",
                action: 'isKeyFounded()'
            }
        ]
    },

    ObjChapterVictoire: {
        subtitle: "victoire",
        text: "Vous avez survécu félicitation!",
        img: "assets/chapitre_13.jpg",
        hasVideo: false,
        class: "Victoire",
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
        hasVideo: false,
        class: "Defaite",
        options: [
            {
                text: "Avez-vous echoue",
                action: 'goToChapter(chaptersObj.ObjChapterArrivee)'
            }
        ]
    },

};



let goToChapter = function (chapterObj, firstTime = false) {

    let sonActivation = document.getElementById("son");
    
    
    if (!firstTime && sonActivation.checked) {

        let audio = new Audio("assets/gunshot.mp3");
        audio.volume = 0.5;
        audio.play();

    }

    

    //loader le texte
    let sousTitreHTML = document.getElementsByClassName("chapter-titre")[0];
    sousTitreHTML.innerHTML = chapterObj.subtitle;

    let questionHTML = document.getElementsByClassName("question")[0];
    questionHTML.innerHTML = chapterObj.text;

    //body
    let bodyHTML = document.querySelector("body");
    bodyHTML.setAttribute("class", chapterObj.class);
    
    let imgVideoContainerHTML = document.getElementsByClassName("imgOuVideoContainer")[0];

    var child = imgVideoContainerHTML.lastElementChild; 
    while (child) {
        imgVideoContainerHTML.removeChild(child);
        child = imgVideoContainerHTML.lastElementChild;
    }

    // loader l'image ou la video
    if (chapterObj.hasVideo) {

        let videoHTML = document.createElement("video");
        videoHTML.className = "video";
        videoHTML.src = chapterObj.video;
        videoHTML.loop = true;
        videoHTML.autoplay = true;
        videoHTML.muted = true;

        imgVideoContainerHTML.appendChild(videoHTML);

    }

    else {

        let imgHTML = document.createElement("img");
        imgHTML.id = "image";
        imgHTML.src = chapterObj.img;

        imgVideoContainerHTML.appendChild(imgHTML);

    }

    
    //Loop dans tableau f. pour créer les boutons
    const tableauOptions = chapterObj.options;
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

    // Si arrive au chapitre contenant la cle, trouve la cle
    if (chapterObj == chaptersObj.ObjChapterPrendreMateriel) {
        keyfounded = true;
    }

    // Sauvegarde le niveau actuel
    localStorage.setItem("ChapterName", JSON.stringify(chapterObj));
    localStorage.setItem("KeyFounded", keyfounded);

};




//sert a savoir si la cle a ete recupere
let keyfounded = false;


//si la cle est trouve
let isKeyFounded = function () {
    if (keyfounded) {
        goToChapter(chaptersObj.ObjChapterVictoire);
        keyfounded = false;
    } 
    else {
        goToChapter(chaptersObj.ObjChapterDefaite);
        keyfounded = false;
    }
}




let save = localStorage.getItem("ChapterName");
if (save != null)  {

    keyfounded = localStorage.getItem("KeyFounded");
    goToChapter(JSON.parse(save), true);

}
else {
    goToChapter(chaptersObj.ObjChapterArrivee, true);
} 

        
// Reset game
function resetGame() {

    keyfounded = false;
    goToChapter(chaptersObj.ObjChapterArrivee);

}

let btnRemoveGame = document.getElementById("btnEfface");
btnRemoveGame.setAttribute("onclick", "resetGame()");


