import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";





interface ActionsProps{
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    storageId: string;
}


export const Actions=({
    children,
    side,
    sideOffset,
    storageId,
}: ActionsProps)=>{

    const {onOpen}=useRenameModal();
    const {mutate, pending}=useApiMutation(api.gigMedia.remove);
    const OnDelete=()=>{
        mutate({storageId})
        .then(()=>toast.success("Board Deleted"))
        .catch(()=>toast.error("Failed to delete"))
    };
    return(
        <div className="z-10 cursor-pointer text-black absolute top-2 right-2">

            <ConfirmModal
                header="Delete board?"
                description="This will delete the board and all of its contents."
                disabled={pending}
                onConfirm={OnDelete}
            >
            <Button
            variant="destructive"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
        >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
        </Button>

            </ConfirmModal>
        </div>
    )


}