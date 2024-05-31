import { Doc } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import  queryString  from 'query-string';






interface ListItemProps{
    title: string;
    subCategory: Doc<"subcategories">
}

export const ListItem=({title, subCategory}: ListItemProps)=>{
    const router=useRouter();
    console.log("subCategory.name"+subCategory.name);
    const handleClick=()=>{
        const url=queryString.stringifyUrl(
            {
                url: "/",
                query:{
                    filter: subCategory.name
                    }
             },
             {
                skipEmptyString: true, skipNull: true
            }
        );
        router.push(url);
    }
    return (
        <button
            className="select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            onClick={handleClick}
        >
            <div className="text-sm text-gray-700 font-medium leading-none">{title}</div>
        </button>
    )
}