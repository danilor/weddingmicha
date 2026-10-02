import ScrollService from "../services/Scroll.service.ts";

export default function GoToTop() {
    return (
        <div className="gototop">
            <a href="#" className="" onClick={() => ScrollService.navigate("main_navigation")}><i className="zi-arrow-up2"></i></a>
        </div>
    );
}