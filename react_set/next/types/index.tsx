export interface form {
    [key: string]: string | boolean
}

export interface formError {
    [key: string]: { error: boolean, message: string }
}

export interface formValidation {
    [key: string]: {
        regex: RegExp,
        message: string
    }
}