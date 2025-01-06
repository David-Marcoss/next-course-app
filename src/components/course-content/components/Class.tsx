import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

export interface IClassProps{
    title: string
    classUrl: string
}

export default function Class({title, classUrl}: IClassProps){

    return(
        <Link 
            href={classUrl}
            className="flex gap-4 w-full p-4 bg-background items-center hover:no-underline"
        >
            <MdPlayCircleOutline size={34}/>
            <span className="text-lg"> {title}</span>
        </Link>
    );
}