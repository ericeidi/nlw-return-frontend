import { useState } from "react";
import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccesStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt:'imagem de um inseto',
        }
    },
    IDEA: {
        title: 'Ideia',
         image: {
            source: ideaImageUrl,
            alt:'imagem de uma lampada',
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt:'imagem de um balao de pensamento',
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <div className="bg-white dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccesStep
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            ) : (
              <>
               {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ) : ( 
                    <FeedbackContentStep
                        feedbackType={feedbackType} 
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={() => setFeedbackSent(true)}
                    />
                )}          
              </>      
            )}
            <footer className="text-xs text-[#71717A] dark:text-neutral-400">
                Feito com 🎉 por <a className="underline underline-offset-2"href="https://github.com/ericeidi" target="_blank">Eric Eidi Nishimura</a>
            </footer>
        </div>
    )
}