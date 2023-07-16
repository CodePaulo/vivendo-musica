import IMG from "../img/Guitarristas-Improvisando.webp";

function getDataUSer (tokenUser){
    const dataUser = {
        id: 123456789,
        pictureProfile: IMG,
        name: "Paulo Sérgio da Silva Silveira",
        timeLogin: "16:43 11/06/2023",
        email: "paulosergioemp@outlook.com",
        password: "teste123"
    }
    const dataUserNull = {
        id: "",
        pictureProfile: "",
        name: "Realize Login",
        timeLogin: "",
        email: "",
        password: ""
    }
    if(tokenUser){
        return dataUser
    }else{
        return dataUserNull
    }

}

export default getDataUSer