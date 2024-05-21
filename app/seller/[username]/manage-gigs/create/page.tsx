"use client"


import { useMutation } from "convex/react";
import { CreateForm } from "./create-form";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";


interface createGigProps{
    params:{
        username: string; 
    }

}


const CreateGig=({
    params
}: createGigProps)=>{

    const insertCategories=useMutation(api.seedCategories.create);
    const insertSubcategories=useMutation(api.seedSubCategories.create);

    useEffect(()=>{
        insertCategories({});
    })
    useEffect(()=>{
        insertSubcategories({});
    })


    return (
        <div className='flex justify-center'>
            <CreateForm 
                username={params.username}

            
            />
        </div>

    );
}


export default CreateGig;