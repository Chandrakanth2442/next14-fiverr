import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { ContentEditor } from "./content-editor";



interface OffersEditorProps{
    gigId: Id<"gigs">
}


export const OffersEditor=({
    gigId
}: OffersEditorProps)=>{
    const offers=useQuery(api.offers.get, {gigId});
    if(offers===undefined) return <div>Loading Offers.......</div>
    const basicOffer=offers.find((offer)=>offer.tier==="Basic");

    const standardOffer=offers.find((offer)=>offer.tier==="Standard");
    const premiumOffer=offers.find((offer)=>offer.tier==="Premium");
    return(
        <Tabs defaultValue="Basic" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="Basic">
                    Basic
                </TabsTrigger>
                <TabsTrigger value="Standard">
                    Basic
                </TabsTrigger>
                <TabsTrigger value="Premium">
                    Basic
                </TabsTrigger>
            </TabsList>
            <TabsContent value="Basic">
                <ContentEditor gigId={gigId} offer={basicOffer} tier="Basic" />
            </TabsContent>
            <TabsContent value="Standard">
                <ContentEditor gigId={gigId} offer={standardOffer} tier="Standard" />
            </TabsContent>
            <TabsContent value="Premium">
                <ContentEditor gigId={gigId} offer={premiumOffer} tier="Premium" />
            </TabsContent>
        </Tabs>
    )
}