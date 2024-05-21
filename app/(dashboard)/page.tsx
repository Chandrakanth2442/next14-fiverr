'use client'

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";

interface DashboardProps{

    searchParams:{
        search?: string;
        favorite?: string;
        filter?: string;
    };
};


const Dashboard=({
    searchParams
}: DashboardProps)=>{
    const store=useMutation(api.users.store);
    useEffect(()=>{
        const storeUser=async()=>{
            await store({})
        }
        storeUser();
    }, [store])


    return(
        ///<GigList 
        ///query={searchParams}

        
        ////>
        <div>Hi</div>

    )
}

export default Dashboard;