'use client'

import { Id } from '@/convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import "@blocknote/core/fonts/inter.css";
import {useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { toast } from 'sonner';
import { AlertOctagon } from 'lucide-react';




interface DescriptionProps{
    gigId: Id<"gigs">
    initialContent?: string;
    editable: boolean;
    className?: string;
}


export const Description=({
    gigId,
    initialContent,
    editable,
    className
}: DescriptionProps)=>{

        const update=useMutation(api.gig.updateDescription);
        const editor=useCreateBlockNote({
                
        });


        const handleChange=()=>{
            if(editor.document){
                const contentLength=JSON.stringify(editor.document).length;
                if(contentLength<20000){
                        update({
                            id: gigId,
                            description: JSON.stringify(editor.document, null, 2)
                        });
                }
                else{
                    toast.error('Content is too long. Not saved',{
                        duration: 2000,
                        icon: <AlertOctagon />
                    })
                }
            }
        };

        return(
            <BlockNoteView
                editor={editor}
                editable={editable}
                theme="light"
                onChange={handleChange}
                className={className}
            >

            </BlockNoteView>
        )

}