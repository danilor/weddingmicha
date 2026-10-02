import Navigation from "./navigation.component.tsx";
import Header from "./header.component.tsx";
import People from "./people.component.tsx";
import Time from "./time.component.tsx";
import Story from "./story.component.tsx";
import Gallery from "./gallery.component.tsx";
import RSVP from "./RSVP.component.tsx";
import Footer from "./footer.component.tsx";
import GoToTop from "./GoToTop.component.tsx";
import Honeymoon from "./honeymoon.component.tsx";
import DressCode from "./dresscode.component.tsx";
// import Map from "./map.compoment.tsx";

function Main(){

    return(
        <div>
            <div id="page">
                <Navigation />
                <Header />
                <People />
                <Time />
                <DressCode />
                <Story />
                <Gallery />
                {/*<Numbers />*/}
                {/*<Wishes />*/}
                {/*<Services />*/}
                {/*<Map />*/}
                <Honeymoon />
                <RSVP />


                <Footer />










            </div>

            <GoToTop />
        </div>
    );
}

export default Main;