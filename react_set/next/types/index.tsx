export interface form {
    [key: string]: string | boolean
}

export interface formError {
    [key: string]: { error: boolean, message: string }
}