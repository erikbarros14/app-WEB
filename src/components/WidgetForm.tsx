import { CloseButton } from "./CloseButton";



export function Widgetform () {
    return (
        <div  className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]md: w-auto ">
            <header>
            <span className="tex-xl leading-6" > deixe seu feedback </span>
            <CloseButton/> 
            </header>

            <div  className=" flex py-8 gap-2 w-full ">
             
            </div>

            <footer className="text-xs text-neutral-400" >
            Feitor por <a  className="underline underline-offset-2 " href="http://www.instagran.com/erikviana207" >erik barros</a>
            </footer>

        </div>
    )
} 