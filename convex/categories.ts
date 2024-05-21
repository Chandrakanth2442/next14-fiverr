import { query } from "./_generated/server";



export const get=query({

    handler: async(ctx)=>{
        const categories=await ctx.db.query("categories").collect();

        const categoriesWithSubcategoriesRelations=categories
                    .map((category)=>{
                        return ctx.db
                                .query("subcategories")
                                .withIndex("by_category" as never, (q)=>
                                q.eq("categoryId" as never, category._id as never))
                                .collect()
                                .then((subcategories)=>{
                                    return{
                                        ...category,
                                        subcategories: subcategories
                                    };
                                });
                    })
           const categoriesWithSubcategories=await Promise.all(categoriesWithSubcategoriesRelations);  
           return categoriesWithSubcategories;

    }
})