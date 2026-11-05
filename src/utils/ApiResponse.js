class ApiResponse {
    constructor (
        message = "",
        statusCode,
        data,
        success
    ) {
        this.message = message;
        this.statusCode = statusCode < 400 ? statusCode : 200;
        this.data = data;
        this.success = success;
    }
}


export { ApiResponse };