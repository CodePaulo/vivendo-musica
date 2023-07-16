import React from "react";
import "./style.css";
import Title from "../../components/main/Title";
import FeatureSongs from "../../components/Home/Featured-Songs"
import Body from "../../components/main/Body";
import FeaturedArtist from "../../components/Home/Featured-Artist";
import GunsNroses from "../../img/guns-n-roses.jpg";
import OtherBand from "../../img/Guitarristas-Improvisando.webp"

const Home = () => {
    return(
        <Body>
            <div className="background">
                <h1>Vivendo Música</h1>
            </div>
            <Title title="Músicas Mais Escutadas no Mês" />
            <div className="contem-featured-song">
                <FeatureSongs title="1. Quer Voar" artist="-Matuê" to="#" />
                <FeatureSongs title="2. Morena" artist="-Luan Santana" to="#" />
                <FeatureSongs title="3. Ficha Limpa" artist="-Gusttavo Lima" to="#" />
                <FeatureSongs title="4. Faxina" artist="-Guilherme & Benuto, part. Barões..." to="#" />
                <FeatureSongs title="5. Baby Me Atende" artist="-Matheus Fernandes, part. Dilsinho" to="#" />
                <FeatureSongs title="6. Nota de Repúdio" artist="-Gusttavo Lima" to="#" />
                <FeatureSongs title="7. Zero Saudade" artist="-Os Barões da Pisadinha" to="#" />
                <FeatureSongs title="8. Fim Da Noite" artist="-Zé Vaqueiro" to="#" />
                <FeatureSongs title="9. Porre" artist="-Dilsinho" to="#" />
                <FeatureSongs title="10. Beijo Do Vampiro" artist="-Os Barões da Pisadinha" to="#" />
            </div>
            <Title title="Artistas em Destaque" />
            <div className="contem-artist">
                <FeaturedArtist img={GunsNroses} title="Guns N' Roses" to="#" />
                <FeaturedArtist title="Linkin Park" to="#" />
                <FeaturedArtist img={OtherBand} title="Sisten Of A Dawn" to="#" />
                <div className="clear-float"></div>
            </div>
        </Body>
    )
}

export default Home