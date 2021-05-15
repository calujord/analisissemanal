export interface ErrorResonse {
    errors: Error[];
}

export interface Error {
    key: string;
    value: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toErrorResonse(json: string): ErrorResonse {
        return JSON.parse(json);
    }

    public static errorResonseToJson(value: ErrorResonse): string {
        return JSON.stringify(value);
    }
}
