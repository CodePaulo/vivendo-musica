import React from "react";
import "./style.css";
import Body from "../../components/main/Body";
import Title from "../../components/main/Title";
import { Carousel } from "@trendyol-js/react-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import ExperienceBox from "../../components/Experiences/ExperienceBox";
import MostCommentedTestimonials from "../../API/MostCommentedTestimonials";
import MostAccessedTestimonials from "../../API/MostAccessedTestimonials";

const Experiences = () => {
    return(
        <Body>
            <Title title={"As Mais Comentadas"} />
            <Carousel
                show={3}
                slide={1}
                swiping={true}
                infinite={false}
                leftArrow={<FontAwesomeIcon icon={faChevronCircleLeft} className="icon left" />}
                rightArrow={<FontAwesomeIcon icon={faChevronCircleRight} className="icon right" />}
                className="carousel"
            >
                {MostCommentedTestimonials().map(depoiment => (
                    <ExperienceBox
                        key={depoiment.id}
                        content={depoiment.depoiment}
                        title={`${depoiment.nameMusic} - ${depoiment.nameArtist.split(' ').map(word => word[0]).join('')}`}
                        nameUser={depoiment.nameUser}
                        amountComents={depoiment.amountComents}
                        pictureProfile={depoiment.pictureProfile}
                    />
                ))}
            </Carousel>
            <Title title={"As Mais Acessadas"} />
            <Carousel
                show={3}
                slide={1}
                swiping={true}
                infinite={false}
                leftArrow={<FontAwesomeIcon icon={faChevronCircleLeft} className="icon left" />}
                rightArrow={<FontAwesomeIcon icon={faChevronCircleRight} className="icon right" />}
                className="carousel"
            >
                {MostAccessedTestimonials().map(depoiment => (
                    <ExperienceBox
                        key={depoiment.id}
                        content={depoiment.depoiment}
                        title={`${depoiment.nameMusic} - ${depoiment.nameArtist.split(' ').map(word => word[0]).join('')}`}
                        nameUser={depoiment.nameUser}
                        amountComents={depoiment.amountComents}
                        pictureProfile={depoiment.pictureProfile}
                    />
                ))}
            </Carousel>
        </Body>
    )
}

export default Experiences