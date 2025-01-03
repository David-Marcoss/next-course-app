import { MdShare } from "react-icons/md";
import { ICardProps } from "../card/Card";
import CollapsibleText from "./components/CollapsibleText";
import CopyContent from "./components/CopyContent";


export default function CourseHeader({title,description}: ICardProps ){

    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-extrabold">{title}</h1>
                
                <CollapsibleText numberVisibleLines={3}>
                    {description}
                </CollapsibleText>

                <div className="flex items-center gap-2">
                    <CopyContent title="Copie o link abaixo" content="https://codarse.com/cursos/PL29TaWXah3iZqMoLjUU8EoKXQXjuc50F1">
                        <button className="flex items-center bg-paper gap-4 px-4 py-2 rounded-full text-lg">
                            <MdShare size={14}/>
                            compartilhar
                        </button>
                    </CopyContent>
                    <span className="text-lg">
                        19 Aulas
                    </span>
                </div>

            </div>
        </div>
    );
}