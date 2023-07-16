const musicsAll = []

for(let i = 0; i < 10; i++){
    musicsAll.push({
        id: i,
        nameAlbum: "Chinese Democracy",
        year: 2008,
        musics: [
            {
                id: 0,
                nameMusic: "Chinese Democracy"
            },{
                id: 1,
                nameMusic: "Shackle's Revange"
            },{
                id: 2,
                nameMusic: "Better"
            },{
                id: 3,
                nameMusic: "Street Of Dreams"
            }
        ]
    })
}

function allMusic(){
    return musicsAll
}

export default allMusic