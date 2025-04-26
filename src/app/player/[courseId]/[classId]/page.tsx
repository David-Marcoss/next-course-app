"use client";
import PlayerContent from "@/components/player/PlayerContent";
import PlayerHeader from "@/components/player/PlayerHeader";

const classes = [
  {
    classUrl: "player/${}/${}",
    title: "aula teste 1",
    onCheck: () => console.log("da te cule"),
    onPlay: () => console.log("da te cule"),
  },
  {
    classUrl: "player/${}/${}",
    title: "aula teste 2",
    onCheck: () => console.log("da te cule"),
    onPlay: () => console.log("da te cule"),
  },
  {
    classUrl: "player/${}/${}",
    title: "aula teste 3",
    onCheck: () => console.log("da te cule"),
    onPlay: () => console.log("da te cule"),
  },
];

export default function PlayerPage() {
  return (
    <>
      <PlayerHeader
        classTitle="Aula #30 - Criando componente de continuar assistindo"
        courseTitle="Curso de NextJS, TailwindCSS e Typescript"
      />

      <PlayerContent
        playerClassGroup={[
          {
            title: "Modulo 1",
            classGroupNumber: 1,
            classes: classes
          },
          {
            title: "Modulo 2",
            classes: classes,
            classGroupNumber: 2,
          },
          {
            title: "Modulo 3",
            classes: classes,
            classGroupNumber: 3,
          },
          {
            title: "Modulo 4",
            classes: classes,
            classGroupNumber: 4,
          },
          {
            title: "Modulo 5",
            classes: classes,
            classGroupNumber: 5,
          },
          {
            title: "Modulo 6",
            classes: classes,
            classGroupNumber: 6,
          },
          {
            title: "Modulo 7",
            classes: classes,
            classGroupNumber: 8,
          },
          {
            title: "Modulo 9",
            classes: classes,
            classGroupNumber: 9,
          },
        ]}
      />
    </>
  );
}
