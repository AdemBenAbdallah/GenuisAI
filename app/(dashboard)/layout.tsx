import NavbarPage from "@/components/Navbar";
import SidbarPage from "@/components/Sidbar";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <SidbarPage />
            </div>
            <main className="md:pl-72">
                <NavbarPage />
                {children}
            </main>
        </div>
    );
}