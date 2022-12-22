export interface formInterface {
    [key: string]: string | boolean
}

export interface formErrorInterface {
    [key: string]: { error: boolean, message: string }
}

export interface formValidationInterface {
    [key: string]: {
        regex: RegExp,
        message: string
    }
}