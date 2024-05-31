import { SellerNavbar } from "./_components/seller-navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const SellerLayout = ({ children }: DashboardLayoutProps) => {
    // Log the children prop to the console
    console.log("Children:", children);

    return (
        <main className="h-full">
            <SellerNavbar />
                {children}
        </main>
    );
}

export default SellerLayout;
