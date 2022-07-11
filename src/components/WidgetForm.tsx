import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImageUrl from '../image/bug.svg'
import ideaImageUrl from '../image/idea.svg'
import thoughtImageUrl from '../image/thought.svg'

const feedbacktyp = {

        BUG: {
            title : 'problema',
            image : {
                source : bugImageUrl,
                alt: ''
            }
        },
        IDEA : {
            title: 'idea',
            image: {
                source : ideaImageUrl,
                alt : '',
            }
        },
        OTHER : {
            title : 'outros',
            image : {
                source :  thoughtImageUrl,
                alt : '',
            }
        }

}

type Feedbacktype = keyof typeof feedbacktyp ;

export function Widgetform () {
    const [feedbacktype , setFeedbacktype]= useState <Feedbacktype |null> (null)
    return (
        <div  className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]md: w-auto ">
            <header>
            <span className="tex-xl leading-6" > deixe seu feedback </span>
            <CloseButton/> 
            </header>

          {!feedbacktype ? (

              <div  className=" flex py-8 gap-2 w-full ">
             { Object.entries(feedbacktyp).map( ([ key, value ] ) =>{
              return (
              <button  
               key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none " 
                onClick={() => setFeedbacktype(key as Feedbacktype)}
                type="button"
                   >
                    <img  src= {value.image.source}></img>

                   <span> {value.title} </span>
                       </button>
                     )
                     } ) }
                       </div>
               ) : (
                <p>yaeee</p>
               ) 
             }

            <footer className="text-xs text-neutral-400" >
            Feitor por <a  className="underline underline-offset-2 " href="http://www.instagran.com/erikviana207" >erik barros</a>
            </footer>

        </div>
    )
} 