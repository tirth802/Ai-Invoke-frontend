
import Header from "@/shared/components/layout/Header";

export default function WorkspaceLayout({
    children
}:{
    children: React.ReactNode}
){
    return(
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header/>
            <main className="flex-1">
                 {children}
            </main>
           
        </div>
    )
}