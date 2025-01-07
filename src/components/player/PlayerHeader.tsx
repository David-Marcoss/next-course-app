import Link from "next/link";
import { MdHome } from "react-icons/md";


interface IPlayerHeaderProps{
    classTitle: string,
    courseTitle: string,
}

export default function PlayerHeader({classTitle, courseTitle}: IPlayerHeaderProps){
    
    return (
        <div 
            className="flex p-4 gap-2 bg-paper items-center justify-start"
        >
            <Link href="/">
                <MdHome size={34}/>
            </Link>
            
            <div className="flex flex-col">
                <h1 className="font-extrabold line-clamp-1">{classTitle}</h1>
                <Link 
                    className="line-clamp-1"
                    href="cursos/123"
                >
                    {courseTitle}
                 </Link>
            </div>
        </div>
    );
}