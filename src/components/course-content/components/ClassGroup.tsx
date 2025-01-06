import { MdArrowRight } from "react-icons/md";
import Class, { IClassProps } from "./Class";

interface IClassGroup{
    title: string,
    classes: IClassProps[]
}


export default function ClassGroup({classes,title}:IClassGroup){

    return(

        <div className="flex flex-col">
            <button 
                className="flex w-full p-4 bg-paper items-center border-b border-background"
            >
                <MdArrowRight size={34}/>
                <span className="text-lg"> {title}</span>
            </button>

            <div className="flex flex-col">

                { classes.map((classItem, index) => (
                    <Class key={index} {...classItem} />
                ))}

            </div>

        </div>
    );

}