import AdminHeader from "@/component/adminHeader";

export default function adminLayout({children}){
    return(
        <>
        <AdminHeader/>
        {children}
        </>
    )
}