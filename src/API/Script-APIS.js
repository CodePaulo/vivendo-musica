//API dados do usuario
const dataUser = {
    id: "",
    pictureProfile: "",
    name: "",
    email: "",
    password: ""
}
//API depoimentos mais comentados
const depoimentsMoreComents = [
    {
        id: "",
        nameUser: "",
        nameMusic: "",
        nameArtist: "",
        amountComents: "",
        pictureProfile: "",
        depoiment: ""
    }
]
//API depoimentos mais acessados
const depoimentsMoreAcessed = [
    {
        id: "",
        nameUser: "",
        nameMusic: "",
        nameArtist: "",
        amountAcessed: "",
        pictureProfile: "",
        depoiment: ""
    }
]
//API que retorna as musicas com a inicial que foi solicitada
//API depoimentos mais comentados
const musicFilted = [
    {
        id: "",
        nameArtist: "",
        pictureProfile: ""
    }
]
//API que retorna a lista de musica com os albuns
const musics = [
    {
        nameAlbum: "",
        yearAlbum: "",
        musics: ["", "", "", "", ""]
    }
]
//API para o componente que contem o video e o titulo da musica
const videoMusic = {
    id: "",
    pictureProfile: "",
    nameMusic: "",
    nameArtist: "",
    linkVideo: ""
}
//API que retorna a letra da musica solicitada
const lyrics = {
    id: "",
    originalLyrics: "",
    translateLyrics: ""
}
//API que retorna uma previa com todos os depoimentos referente a musica
const depoimentsOfMusic = [
    {
        id: "",
        pictureProfile: "",
        nameUser: "",
        depoiment: ""
    }
]
//API que retorna um depoimento em especifico
const depoiment = {
    id: "",
    pictureProfile: "",
    nameUser: "",
    depoiment: ""
}
//API que retorna os comentarios de um depoimento
const coments = {
    amountComents: "",
    listComents: [
        {
            id: "",
            pictureProfile: "",
            nameUSer: "",
            timeComent: "",
            coment: "",
            amountResponse: ""
        }
    ]
}
//API que retorna as reposta de um determinado usuario
const responses = [
    {
        id: "",
        pictureProfile: "",
        nameUser: "",
        timeResponses: "",
        reponse: ""
    }
]