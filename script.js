let chapitre1 = {
    subtitle : "arrivée",
    text : "Vous arrivez dans le pays où vous allez vous battre afin de défendre votre pays pour les prochaines semaines et vous avez le choix entre aller vous reposez pour reprendre des force avant d'aller vous battre ou bien d'aller directement sur le champ de bataille.",
    img : "assets/chapitre_1.jpg",
};

let chapitre2 = {
    subtitle : "allons se battre",
    text : "Vous avez décidé d'aller vous battre au lieu de vous reposer, vous êtes en route vers le terrain.",
    img : "assets/chapitre_2.jpg",
};

let chapitre3 = {
    subtitle : "repos",
    text : "Vous avez décidé de rester au campement pour vous reposer mais lors de votre repos, le camps c'est fait attaquer et vous avez sucombé à vos blessure.",
    img : "assets/chapitre_3.jpg",
};

let chapitre4 = {
    subtitle : "la guerre",
    text : "Vous êtes en guerre et vous défendez!",
    img : "assets/chapitre_4.jpg",
};

let chapitre5 = {
    subtitle : "l'enfant",
    text : "Vous vous défendez et soudainement repérer un enfant dans votre ligne demire, celui-ci pourte une grenade et se dirige vers vos coéquipiers.",
    img : "assets/chapitre_5.jpg",
};

let chapitre6 = {
    subtitle : "Ignorer",
    text : "Vous avez ignoré l'enfant et il a réussi à tuer et blesser gravement vos coéquipiers, vous ne pouvez pas vous dfendre avec aussi peu d'allier. Vous vous faites tuer.",
    img : "assets/chapitre_6.jpg",
};

let chapitre7 = {
    subtitle : "près de la victoire",
    text : "Vous avez tué l'enfant et vos amis ne sont plus en danger, vous devez fuire rapidement avant que les renforts ennemis arrivent.",
    img : "assets/chapitre_7.jpg",
};

let chapitre8 = {
    subtitle : "la fuite",
    text : "Les ennemis s'approchent qu'allez vous faire?",
    img : "assets/chapitre_8.jpg",
};

let chapitre9 = {
    subtitle : "l'attente",
    text : "Vous avez attendu trop longtemps avant de fuire et les forces ennemis vous ont rattrapé. vous êtes mort.",
    img : "assets/chapitre_9.jpg",
};

let chapitre10 = {
    subtitle : "prendre le matériel",
    text : "Vous prenez le matériel avant de fuire.",
    img : "assets/chapitre_10.jpg",
};

let chapitre11 = {
    subtitle : "se battre avant la fuite",
    text : "Vous continuer de vous battre avant de prendre la fuite.",
    img : "assets/chapitre_11.jpg",
};

let chapitre12 = {
    subtitle : "l'embuscade",
    text : "Vous vous retrouvez dans une embuscade en vous dirigeant vers votre campement, vous avez choisi de prendre le matériel, ce qui vous a permis d'avoir les munitions nécessaire.",
    img : "assets/chapitre_12.jpg",
};

let chapitre13 = {
    subtitle : "victoire",
    text : "Vous avez réussi a survivre félicitation!",
    img : "assets/chapitre_13.jpg",
};

let chapitre14 = {
    subtitle : "la défaite",
    text : "Vous y étiez presque mais malheureusement vous êtes mort dans l'embuscade.",
    img : "assets/chapitre_14.jpg",
};


//////

let chapterObj = {
    beginningObj : {
        subtitle : "arrivée",
        text : "Vous arrivez dans le pays où vous allez vous battre afin de défendre votre pays pour les prochaines semaines et vous avez le choix entre aller vous reposez pour reprendre des force avant d'aller vous battre ou bien d'aller directement sur le champ de bataille.",
        img : "assets/chapitre_1.jpg",
        options: [{
            text: "Choix 1",
            action: "goToChapter('firstChoiceObj')"
        },  {
            text: "choix 2",
            action: "goToChapter('secondChoiceObj')"
        }]
    }
}


//////

function goToChapter(){

    console.log(chapterObj.chapitre_1.subtitle);
    console.log(chapterObj.chapitre_1.text);
}
