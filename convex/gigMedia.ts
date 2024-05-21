import { v } from "convex/values";
import { mutation } from "./_generated/server";



//this is another way to handle mutation function without using args and only handler
export const generateUploadUrl=mutation(async(ctx)=>{
    return await ctx.storage.generateUploadUrl();
})
//this is how saving an image which is being uploaded, to the database
export const sendImage=mutation({
    args:{
        storageId: v.id("_storage"),
        format: v.string(),
        gigId: v.id("gigs")
    },
    handler: async(ctx, args)=>{
        //check how many images are already uploaded
        const gigMedia = await ctx.db
            .query("gigMedia")
            .withIndex("by_gigId", (q) => q.eq("gigId", args.gigId))
            .collect();
    if(gigMedia.length>=5){
        throw new Error("You can upload up to 5 media files. Please delete a media file before uploading a new one")
    }

    await ctx.db.insert("gigMedia",{
        storageId: args.storageId,
        format: args.format,
        gigId: args.gigId
    })
    } 
})

export const remove=mutation({
    args:{
        storageId: v.id("_storage")
    },
    handler: async(ctx, args)=>{
        const media = await ctx.db
            .query("gigMedia")
            .withIndex("by_storageId", (q) => q.eq("storageId", args.storageId))
            .unique();
        if(!media){
            throw new Error("Media not found")
        }

        await ctx.db.delete(media._id);
        await ctx.storage.delete(args.storageId)
    }
})