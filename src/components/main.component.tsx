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
import {useEffect, useState} from "react";

import APIService from "../services/API.service.ts";
import Loading from "./loading.component.tsx";
import type {UserType} from "../types/User.type.ts";

function Main(){

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [User, setUser] = useState<UserType | null>(null);

    useEffect(() => {

        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);
        const uuid = urlParams.get('id');

        APIService.validUUID(uuid || 'invalid').then((response) => {
            console.log('API Response:', response);
            setIsLoading(false);
            setIsValid(response.status === 200);
            setUser(response.data as UserType);
        }).catch((error) => {
            console.log('API Error:', error);
            setIsLoading(false);
            setIsValid(false);
        });

    },[]);


    return(
        <div>
            {isLoading ? <Loading /> : (
                <div>
                    <div id="page">
                        {isValid && <Navigation />}
                        <Header isValid={isValid} />
                        {isValid && <People />}
                        {isValid && <Time />}
                        {isValid && <DressCode />}
                        <Story />
                        <Gallery />
                        {/*<Numbers />*/}
                        {/*<Wishes />*/}
                        {/*<Services />*/}
                        {/*<Map />*/}
                        {isValid && User && <Honeymoon />}
                        {isValid && User && <RSVP User={User} />}
                        <Footer />
                    </div>
                    <GoToTop />
                </div>
            )}
        </div>
    );
}

export default Main;