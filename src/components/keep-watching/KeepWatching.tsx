import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";



export default function KeepWatching(){
    
    return (
        <Link 
            href="player/{courseId}/${classId}"
            className="flex p-6 gap-2 bg-primary mx-4 my-6 items-center justify-center rounded-md hover:no-underline"
        >
            <div className="flex-1">
                <h1 className="font-extrabold line-clamp-1">NextJS, TailwindCSS e Typescript:</h1>
                <p className="line-clamp-1">#30 - Criando componente de continuar assistindo</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-1">
                <span>Continuar Assistindo</span>
                <MdPlayCircleOutline size={24}/>
            </div>
        </Link>
    );
}