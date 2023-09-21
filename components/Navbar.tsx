import { UserButton } from "@clerk/nextjs";

import MobileSidbar from "./mobile-sidebar";

export default function NavbarPage() {
    return (
        <div className="flex items-center p-4">
            <MobileSidbar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}