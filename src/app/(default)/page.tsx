import KeepWatching from "@/components/keep-watching/KeepWatching";
import Section from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codando: Página Inicial",
  description: "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco.",
};


const courses = [
  {
    title:"Curso de API Rest, Node e Typescript 1",
    courseUrl:"/cursos/wqgyug72734",
    imageUrl:"https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
    description:`Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
    Links mencionados no vídeo:
    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
    🗨️ Discord`
  },
  {
    title:"Curso de API Rest, Node e Typescript 2",
    courseUrl:"/cursos/wqgyug72735",
    imageUrl:"https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
    description:`Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
    Links mencionados no vídeo:
    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
    🗨️ Discord`
  },
  {
    title:"Curso de API Rest, Node e Typescript 3",
    courseUrl:"/cursos/wqgyug72737",
    imageUrl:"https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
    description:`Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
    Links mencionados no vídeo:
    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
    🗨️ Discord`
  },
  {
    title:"Curso de API Rest, Node e Typescript 4",
    courseUrl:"/cursos/wqgyug72731",
    imageUrl:"https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
    description:`Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
    Links mencionados no vídeo:
    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
    🗨️ Discord`
  },
  {
    title:"Curso de API Rest, Node e Typescript 5",
    courseUrl:"/cursos/wqgyug72739",
    imageUrl:"https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
    description:`Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
    Links mencionados no vídeo:
    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
    🗨️ Discord`
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-full min-[910px]:max-w-[910]">

        <KeepWatching />
        <Section title="Cursos em destaque" variant="h-list" items={courses}/>
      </div>
    </main>
  );
}
