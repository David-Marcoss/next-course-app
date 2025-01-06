import CourseHeader from "@/components/course-header/CourseHeader";
import StartCourse from "@/components/start-course/StartCourse";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params; // Garante que params é resolvido antes do uso
    return {
        title: `Curso ${id}`,
    };
}

interface IProps {
    params: { id: string };
}

const course =  {
    title:"Curso de API Rest, Node e Typescript 3",
    courseUrl:"/cursos/wqgyug72738",
    imageUrl:"https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
    description:`Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
    Links mencionados no vídeo:
    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
    🗨️ Discord`
};

export default async function CourseDetailPage({ params }: IProps) {
    const { id } = await params;

    return (
        <main className="flex flex-col items-center">
            <div className="w-full min-[910px]:max-w-[910px] flex flex-col gap-4 px-4 my-6 lg:p-0 md:flex-row-reverse">

                <div className="flex-1">
                    <StartCourse 
                        title={course.title}
                        urlImage={course.imageUrl}
                        idClass="1"
                        idCourse={id}
                    />
                </div>
                
                <div className="flex-[2]">
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />

                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />

                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                    <CourseHeader 
                        title={course.title}
                        courseUrl={course.courseUrl}
                        description={course.description}
                        imageUrl={course.imageUrl}
                    />
                </div>
            </div>
        </main>
    );
}
