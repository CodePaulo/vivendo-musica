const depoiments = []

for(let i = 0; i < 10; i++){
    depoiments.push({
        id: i,
        nameUser: "Igor Gomes",
        nameMusic: "Buried Alived",
        nameArtist: "Avenged Seven Fould",
        amountComents: 955 * (i + 1),
        pictureProfile: "",
        depoiment: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível.'
    })
}

function MostCommentedTestimonials (){
    return depoiments
}

export default MostCommentedTestimonials