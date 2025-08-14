import { APP_DEVELOPER } from "@/lib/constants";



const Footer = () => {
    const currentYear = new Date().getFullYear();

    return ( <footer className="border-t">
        <div className="p-5 flex-center">
            {currentYear} {APP_DEVELOPER}. All Rights Reserved
        </div>
    </footer> );
}
 
export default Footer;