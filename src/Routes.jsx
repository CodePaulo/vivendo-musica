import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pags/Home";
import Experiences from "./Pags/Experiences"
import Songs from "./Pags/Songs"
import Music from "./Pags/Music";
import Lyrics from "./components/Music/Lyrics";
import Stories from "./components/Music/Stories";
import ExperiencesMusic from "./components/Music/ExperiencesMusic";
import NotFound from "./Pags/NotFound";

const artistTeste = [
    {
        name: "Linkin Park",
        music: "Given Up",
        url: "https://www.youtube.com/embed/0xyxtzD54rM",
        originalLyrics: `Wake in a sweat again
Another day's been laid to waste
In my disgrace
Stuck in my head again
Feels like I'll never leave this place
There's no escape

I'm my own worst enemy

I've given up, i'm sick of feeling
Is there nothing you can say?
Take this all away, i'm suffocating
Tell me what the fuck is wrong with me

I don't know what to take
Thought I was focused, but I'm scared
I'm not prepared
I hyperventilate
Looking for help somehow, somewhere
And no one cares

I'm my own worst enemy

I've given up
I'm sick of feeling, is there nothing you can say?
Take this all away, i'm suffocating
Tell me what the fuck is wrong with me?

God

Put me out of my misery
Put me out of my misery
Put me out of my
Put me out of my fucking misery

I've given up, i'm sick of feeling
Is there nothing you can say?
Take this all away, i'm suffocating
Tell me what the fuck is wrong with me?`,
        translationLyrics: `Acordo suado de novo
Outro dia foi feito para desperdiçar
Em minha desgraça
Preso na minha cabeça novamente
Parece que nunca vou sair desse lugar
Não posso escapar

Eu sou meu pior inimigo

Eu desisti, eu estou farto disso
Não há nada que você possa dizer?
Leve isso embora, eu estou sufocando
Me diga que diabos está de errado comigo?

Não sei o que fazer
Pensei que estava concentrado, mas estou com medo
Não estou pronto
Estou ofegante
Procurando ajuda, de algum modo, e lugar
E ninguém liga
        
Eu sou meu pior inimigo
        
Eu desisti, eu estou farto disso
Não há nada que você possa dizer?
Leve isso embora, eu estou sufocando
Me diga que diabos está de errado comigo?
        
Deus!!!
        
Me tire dessa tortura!
Me tire dessa tortura!
Me tire dessa
Me tire dessa maldita torura!!!
        
Eu desisti, eu estou farto disso
Não há nada que você possa dizer?
Leve isso embora, eu estou sufocando
Me diga que diabos está de errado comigo?`
    },{
        name: "Guns N' Roses",
        music: "Patience",
        url: "https://www.youtube.com/embed/ErvgV4P6Fzc",
        originalLyrics: `One, two, one, two, three, four

Shed a tear 'cause I'm missin' you
I'm still alright to smile
Girl, I think about you every day now
Was a time when I wasn't sure
But you set my mind at ease
There is no doubt you're in my heart now
        
Said "woman take it slow, and it'll work itself out fine"
All we need is just a little patience
Said "sugar make it slow and we'll come together fine"
All we need is just a little patience (Patience)
        
Mm, yeah
        
I sit here on the stairs
'Cause I'd rather be alone
If I can't have you right now, I'll wait dear
Sometimes I get so tense but I can't speed up the time
But you know love there's one more thing to consider
        
Said "woman take it slow and things will be just fine"
You and I'll just use a little patience
Said "sugar take the time 'cause the lights are shining bright"
        
You and I've got what it takes to make it
We won't fake it, I'll never break it
'Cause I can't take it
        
Little patience, mm yeah, mm yeah
Need a little patience, yeah
Just a little patience, yeah
Some more patience, yeah (I've been walking the streets at night)
        
Just trying to get it right (A little patience, yeah)
It's hard to see with so many around
You know I don't like being stuck in the crowd (Could use some patience, yeah)
And the streets don't change but maybe the names
I ain't got time for the game 'cause I need you (Gotta have more patience, yeah)
Yeah, yeah, yeah but I need you (All need more patience)
Oh, I need you (All need some patience)
Oh, I need you (Just a little patience)
Ooh this time (Is all you need)`,
        translationLyrics: `Um, dois, um, dois, três, quatro
        
Derramei uma lágrima porque estou sentindo sua falta
Ainda me sinto bem o suficiente para sorrir
Garota, eu penso em você todos os dias agora
Houve um tempo que eu não tinha certeza
Mas você acalmou minha mente
Não há duvida, você está em meu coração agora
        
Eu disse: Mulher, pega leve
Tudo vai se resolver bem por si mesmo
Tudo que precisamos é de um pouco de paciência
Eu disse: Doçura, vá com calma
E vamos ficar bem juntos
Só precisamos de um pouco de paciência (paciência)
        
Mm, yeah
        
Eu sento aqui nas escadas pois eu quero ficar sozinho
Se eu não puder te ter agora, eu esperarei, querida
Às vezes, eu fico tão tenso
Mas eu não posso acelerar o tempo
Mas você sabe, amor, há mais uma coisa para considerar
        
Eu disse: Mulher, pega leve
As coisas vão ficar bem
Você e eu só temos que ter um pouco de paciência
Eu disse: Doçura, não se apresse
Pois as luzes estão brilhando
Você e eu temos aquilo que é necessário para dar certo
        
Não fingiremos
Nós nunca romperemos
Pois eu não suportaria
        
Um pouco de paciência, sim
Precisa de um pouco de paciência, sim
Só um pouco de paciência, sim
Um pouco mais de paciência, sim
        
Eu estive caminhando nas ruas à noite
Tentando entender tudo
(Só um pouco de paciência)
É difícil ver com tantos por perto
Você sabe que eu não gosto de ficar preso na multidão
(Só um pouco de paciência)`
    }
]
const formartLink = name => {
    const nameFormated = name.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase()
        .replace(/ /g, "-")
        .replace(/'/g, "")
    return nameFormated
}
const RoutesApp = () => {
    return(
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/experiencias-dos-usuarios-com-as-musicas" element={<Experiences />} />
            <Route exact path="/musicas" element={<Songs />} />
            {artistTeste.map((artist, indice) => (
                <React.Fragment key={indice} >
                    <Route
                        key={`${formartLink(artist.name)}/${formartLink(artist.music)}/letra`}
                        exact
                        path={`/${formartLink(artist.name)}/${formartLink(artist.music)}/letra`}
                        element={<Music
                            artist={artist.name}
                            nameMusic={artist.music}
                            urlVideo={artist.url}
                            path={`/${formartLink(artist.name)}/${formartLink(artist.music)}`}
                            Element={
                                <Lyrics
                                    originalLyrics={artist.originalLyrics}
                                    translationLyrics={artist.translationLyrics}
                                />
                            }
                        />}
                    />
                    <Route
                        key={`${formartLink(artist.name)}/${formartLink(artist.music)}/experiencias`}
                        exact
                        path={`/${formartLink(artist.name)}/${formartLink(artist.music)}/experiencias`}
                        element={
                            <Music
                                artist={artist.name}
                                nameMusic={artist.music}
                                urlVideo={artist.url}
                                path={`/${formartLink(artist.name)}/${formartLink(artist.music)}`}
                                Element={<ExperiencesMusic />}
                            />
                        }
                    />
                    <Route
                        key={`${formartLink(artist.name)}/${formartLink(artist.music)}/historia`}
                        exact
                        path={`/${formartLink(artist.name)}/${formartLink(artist.music)}/historia`}
                        element={
                            <Music
                                artist={artist.name}
                                nameMusic={artist.music}
                                urlVideo={artist.url}
                                path={`/${formartLink(artist.name)}/${formartLink(artist.music)}`}
                                Element={<Stories />}
                            />
                        }
                    />
                </React.Fragment>
            ))}
        </Routes>
    )
}


export default RoutesApp