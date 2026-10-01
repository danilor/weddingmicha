export default {
    navigate: (el: string)=>{
        // Select the element
        const element = document.getElementById(el);
        if(element !== null) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start" // Aligns the top of the element to the top of the viewport
            });
        }else{
            console.error(`Element "${el}" not found.`);
        }
    }
}