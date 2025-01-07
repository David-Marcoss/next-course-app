
import PlayerContent from "@/components/player/PlayerContent";
import PlayerHeader from "@/components/player/PlayerHeader";

const classes = [
    {
        title: "Aula #30 - Criando componente de continuar assistindo",
        classUrl: "player/${}/${}",
        reproducing: true
    },
    {
        title: "Aula #30 - Criando componente de continuar assistindo",
        classUrl: "player/${}/${}"
    },
    {
        title: "Aula #30 - Criando componente de continuar assistindo",
        classUrl: "player/${}/${}"
    },
];

export default function PlayerPage(){

    return (
        <>
            <PlayerHeader 
                classTitle="Aula #30 - Criando componente de continuar assistindo" 
                courseTitle="Curso de NextJS, TailwindCSS e Typescript"
            />
            
            <PlayerContent playerClassGroup={[
                {
                    title: "Modulo 1",
                    classes: classes,
                    classGroupNumber: 1
                },
                {
                    title: "Modulo 2",
                    classes: classes,
                    classGroupNumber: 2
                },
                {
                    title: "Modulo 3",
                    classes: classes,
                    classGroupNumber: 3
                },
                {
                    title: "Modulo 4",
                    classes: classes,
                    classGroupNumber: 4
                },
                {
                    title: "Modulo 5",
                    classes: classes,
                    classGroupNumber: 5
                },
                {
                    title: "Modulo 6",
                    classes: classes,
                    classGroupNumber: 6
                },
                {
                    title: "Modulo 7",
                    classes: classes,
                    classGroupNumber: 8
                },
                {
                    title: "Modulo 9",
                    classes: classes,
                    classGroupNumber: 9
                },
                
            ]}/>
        </>
    );
}