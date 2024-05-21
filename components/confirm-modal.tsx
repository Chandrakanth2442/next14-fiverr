import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";



interface ConfirmModalProps{
    children: React.ReactNode;
    onConfirm:()=>void;
    disabled: boolean;
    header: string;
    description?: string
};


export const ConfirmModal=({
    children,
    onConfirm,
    disabled,
    header,
    description,
}: ConfirmModalProps)=>{


    const handleConfirm=()=>{
        onConfirm();
    }

    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter
                    disabled={disabled}
                    onClick={handleConfirm}
                >
                    Confirm
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )


}
