import React from "react";
import "./style.css"
import Title from "../../main/Title";
import InputComents from "../InputComents";
import Coment from "../Coment";

const coments = [
    {
        name:"Paulo Sérgio da Silva Silveira",
        profilePicture: "",
        timeComent: "23:19:00 09/07/2023",
        coment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere tellus eu turpis auctor aliquet. Fusce non sollicitudin augue, non sollicitudin lacus. Nulla et nisl nec erat vehicula blandit. Ut eu tortor vel tellus venenatis ornare. Donec lobortis.",
        responses: []
    },{
        name:"Marcus Paulo",
        profilePicture: "",
        timeComent: "23:19:00 09/07/2023",
        coment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere tellus eu turpis auctor aliquet. Fusce non sollicitudin augue, non sollicitudin lacus. Nulla et nisl nec erat vehicula blandit. Ut eu tortor vel tellus venenatis ornare. Donec lobortis feugiat eros et bibendum. In ornare libero non ligula porta, ac ullamcorper tortor ultricies. Sed molestie eleifend ipsum, lacinia viverra mauris congue gravida. Phasellus lacinia ante vel aliquet ultrices. Praesent vestibulum volutpat est, a sodales nisl faucibus ut. Proin consequat aliquam ante, quis laoreet enim auctor a. Pellentesque gravida mollis lectus, ac tincidunt urna placerat et. Aliquam hendrerit enim magna, sed volutpat nisi rhoncus ac. Nulla rutrum, erat quis ornare mattis, urna lectus elementum arcu, at congue erat felis at lorem.",
        responses: [
            {
                name:"Marcus Paulo Vieira",
                profilePicture: "",
                timeComent: "01:19:00 30/07/2023",
                coment: "Foda de mais sua historia.. Parabéns!!",
            }
        ]
    },{
        name:"Marcus Paulo",
        profilePicture: "",
        timeComent: "23:19:00 09/07/2023",
        coment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere tellus eu turpis auctor aliquet. Fusce non sollicitudin augue, non sollicitudin lacus. Nulla et nisl nec erat vehicula blandit. Ut eu tortor vel tellus venenatis ornare. Donec lobortis feugiat eros et bibendum. In ornare libero non ligula porta, ac ullamcorper tortor ultricies. Sed molestie eleifend ipsum, lacinia viverra mauris congue gravida. Phasellus lacinia ante vel aliquet ultrices. Praesent vestibulum volutpat est, a sodales nisl faucibus ut. Proin consequat aliquam ante, quis laoreet enim auctor a. Pellentesque gravida mollis lectus, ac tincidunt urna placerat et. Aliquam hendrerit enim magna, sed volutpat nisi rhoncus ac. Nulla rutrum, erat quis ornare mattis, urna lectus elementum arcu, at congue erat felis at lorem.",
        responses: []
    }
]
for(let i = 0; i < 15; i++){
    coments[0].responses.push(
        {
            name:"Marcus Paulo Vieira",
            profilePicture: "",
            timeComent: "01:19:00 30/07/2023",
            coment: "Foda de mais sua historia.. Parabéns!!",
        }
    )
}
const amountComents = coments.length
const Stories = ({ pictureProfile }) => {
    return(
        <div className="stories">
            <div className="contains-title">
                <h2 className="title">História da Música</h2>
                <div className="profile">
                    {pictureProfile && <div>foto</div>}
                </div>
            </div>
            <div className="history">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere tellus eu turpis auctor aliquet. Fusce non sollicitudin augue, non sollicitudin lacus. Nulla et nisl nec erat vehicula blandit. Ut eu tortor vel tellus venenatis ornare. Donec lobortis feugiat eros et bibendum. In ornare libero non ligula porta, ac ullamcorper tortor ultricies. Sed molestie eleifend ipsum, lacinia viverra mauris congue gravida. Phasellus lacinia ante vel aliquet ultrices. Praesent vestibulum volutpat est, a sodales nisl faucibus ut. Proin consequat aliquam ante, quis laoreet enim auctor a. Pellentesque gravida mollis lectus, ac tincidunt urna placerat et. Aliquam hendrerit enim magna, sed volutpat nisi rhoncus ac. Nulla rutrum, erat quis ornare mattis, urna lectus elementum arcu, at congue erat felis at lorem.</p>
                <br />
                <p>Aenean imperdiet fringilla ultricies. Suspendisse ut nisl nisl. Ut porttitor malesuada tincidunt. Nulla tincidunt malesuada erat nec consequat. Donec vulputate, odio nec dignissim convallis, orci libero porttitor orci, quis pretium orci odio quis augue. Sed eu erat ut ante maximus aliquam nec ac tellus. Nunc at libero sed sem mollis efficitur a id ipsum. Etiam elementum est metus, eget malesuada felis elementum mollis. Sed vitae vehicula ex, in cursus mauris. Donec at fringilla leo, in tristique diam. Etiam risus tortor, tempus et felis bibendum, maximus condimentum velit. Mauris quis gravida mauris, eget tempor velit. Curabitur tempus turpis in porta bibendum. Ut viverra nisl at tortor venenatis, ac iaculis odio efficitur.</p>
                <br />
                <p>Etiam imperdiet tortor ac varius bibendum. Curabitur id porttitor felis. Suspendisse a leo molestie lacus sollicitudin pulvinar. Sed sit amet ex rhoncus, sodales risus ut, blandit turpis. Vestibulum porttitor enim et enim egestas, at auctor odio lobortis. Nulla vel auctor augue. Donec hendrerit nulla sit amet quam ornare, ut dapibus neque ullamcorper. Suspendisse scelerisque laoreet egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
            <Title title={"Comentários"} />
            <p className="amountComents">
                {amountComents === 1 ? `${amountComents} comentário` : `${amountComents} comentários`}
            </p>
            <InputComents />
            {coments.map((coment, indice) => (
                <Coment
                    key={indice}
                    name={coment.name}
                    profilePicture={coment.profilePicture}
                    timeComent={coment.timeComent}
                    coment={coment.coment}
                    amountComents={coment.responses.length}
                    responses={coment.responses.map((response, indice) => (
                        <Coment
                            key={indice}
                            name={response.name}
                            profilePicture={response.profilePicture}
                            timeComent={response.timeComent}
                            coment={response.coment}
                        />
                    ))}
                />
            ))}
        </div>
    )
}

export default Stories