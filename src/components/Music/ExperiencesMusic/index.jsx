import React, { useState } from "react";
import "./style.css";
import ExperiencesBox from "../../Experiences/ExperienceBox";
import Title from "../../main/Title";
import Links from "../../main/Links";
import IMG from "../../../img/guns-n-roses.jpg"  

const numberViewExperience = 4
const depoiments = []
for(let i = 0; i < 414; i++){
    depoiments.push({
        id: i + 1,
        depoiment: `A expressão Lorem ipsum em design gráfico e editoração 
        é um texto padrão em latim utilizado na produção gráfica para 
        preencher os espaços de texto em publicações para testar e 
        ajustar aspectos visuais antes de utilizar conteúdo real. 
        A expressão Lorem ipsum em design gráfico e editoração 
        é um texto padrão em latim utilizado na produção gráfica para 
        preencher os espaços de texto em publicações para testar e 
        ajustar aspectos visuais antes de utilizar conteúdo real.`,
        nameUser: "Paulo Sérgio da Silva Silveira",
        pictureProfile: IMG,
        nameMusic: "Given Up",
        nameArtist: "Linkin Park",
        amountComents : 350 * i
    })
}
const totalPags = Math.ceil(depoiments.length / numberViewExperience)
const pags = pagView => {
    const arrPags = []
    let initialValue = 0
    let finalValue = 0

    if(totalPags > 7){
        if(pagView <= 4){
            initialValue = 1
            finalValue = 5
        }else if(totalPags - pagView <= 3){
            initialValue = totalPags - 4
            finalValue = totalPags
        }else{
            initialValue = pagView - 1
            finalValue = pagView + 1
        }
    }else{
        initialValue = 1
        finalValue = totalPags
    }

    for(let i = initialValue; i <= finalValue; i++){
        arrPags.push(i)
    }

    return arrPags
}
const dataDepoiments = pagView => {
    const finalValue = (pagView * (numberViewExperience - 1)) + (pagView - 1)
    const initialValue = finalValue - (numberViewExperience - 1)

    return depoiments.filter((item, indice) => indice >= initialValue && indice <= finalValue)
}
const historyPagView = pag => window.history.pushState("", "", "?id=" + pag)
const searchParams  = new URLSearchParams(window.location.search)
const initialPagView = searchParams.get("id") ? parseInt(searchParams.get("id")) : 1

const ExperiencesMusic = () => {
    const [pagView, setPagView] = useState(initialPagView)
    const optionsPag = totalPags > 1 ? pags(pagView) : []
    const depoimentsView = dataDepoiments(pagView)
    const handlePagView = pag => {
        setPagView(pag)
        historyPagView(pag)
    }
    
    return(
        <div className="experiences">
            <Title title={"Expêriencias com a música Given Up"} />
            <div className="more-experiences" style={totalPags < 7 ? {width: 40 * totalPags} : {maxWidth: 220}}>
                {optionsPag[0] >= 3 &&
                    <React.Fragment>
                        <li key={1} onClick={() => handlePagView(1)} className={1 === pagView ? "selected" : ""}>{1}</li>
                        <li key="..." className="no-style">...</li>
                    </React.Fragment>
                }
                {optionsPag.map(pag => (
                    <li key={pag} onClick={() => handlePagView(pag)} className={pag === pagView ? "selected" : ""}>{pag}</li>
                ))}
                {optionsPag[optionsPag.length - 1] < totalPags - 2 &&
                    <React.Fragment>
                        <li key="..." className="no-style" >...</li>
                        <li key={totalPags} onClick={() => handlePagView(totalPags)} className={totalPags === pagView ? "selected" : ""} >{totalPags}</li>
                    </React.Fragment>
                }
            </div>
            <div className="contains-experiences">
                {totalPags > 0 ? (
                    depoimentsView.map((data, indice) => (
                        <ExperiencesBox 
                            key={indice} 
                            title={data.nameMusic} 
                            nameUser={data.nameUser} 
                            amountComents={data.amountComents}
                            content={data.id + " " + data.depoiment}
                            pictureProfile={data.pictureProfile}
                        />
                    ))
                ) : (
                    <React.Fragment>
                        <span>Essa música ainda não possui depoimentos... </span>
                        <Links destiny={"#"} text="Seja o primeiro a escrever um depoimento!" />
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default ExperiencesMusic