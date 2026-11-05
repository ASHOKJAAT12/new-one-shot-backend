class ApiError extends Error {
    constructor(message, statusCode, error = [], stack ="") {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.data = NULL;
        this.success = false;
        if ( stack ) {
            this.stack = stack;
        } else {
            this.captureStackTrace(this,this.constructor);
        }
    } 
    
}

export { ApiError};