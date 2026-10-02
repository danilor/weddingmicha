/**
 * This is the server. It should be extremely basic just to validate the information from the client.
 * It should not be used for any other purpose.
 */

/**
 * REQUIREMENTS
 */
import express from 'express';
import cors from 'cors';
// @ts-ignore
import ResponseWrapper from "./server/wrapper/Response.wrapper.ts";
// @ts-ignore
import DataWrapper from "./server/wrapper/Data.wrapper.ts";

/**
 * CONSTANTS
 */
const app = express();
const PORT = process.env.PORT || 3000;


/**
 * MIDDLEWARE
 */

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());
app.use(express.json());


// Adds headers: Access-Control-Allow-Origin: http://example.com, Vary: Origin
app.get('/api/valid/:uuid', (req, res, next) => {

    const uuid = req.params.uuid; // This is the UUID from the client. You can use it to validate the request.

    DataWrapper.getUserByUUID(uuid).then((user) => {

        console.log('==USER==', user);
        if (!user) {
            return ResponseWrapper.respondError(res, "User not found");
        } else {
            return ResponseWrapper.respondSuccess(res, user);
        }


    }).catch((error: any) => {
        console.error('==ERROR==', error);
        return ResponseWrapper.respondError(res, error.message);
    });


});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
