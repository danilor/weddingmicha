import type {ResponseType} from "../model/response.type";

const ResponseWrapper: any = {


    returnResponse(res: any, response: ResponseType, code: number) {
        return res.status(code).json(response);
    },

    // @ts-ignore
    respond(res: any, code: number, message: string, data: any) {

        const response: ResponseType = {
            status: code,
            error: false,
            message: message,
            data: data
        }
        return this.returnResponse(res, response, code);
    },

    // @ts-ignore
    respondSuccess(res: any, data: any){
      return this.respond(res, 200, "Success", data);
    },

    // @ts-ignore
    respondError(res: any, message: string){
        return this.respond(res, 500, message, {});
    }

};
export default ResponseWrapper;