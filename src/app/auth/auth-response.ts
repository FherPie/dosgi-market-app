export interface AuthResponse {
    user: {
        id_entidades: number;
        userid: string;
        email: string;
        access_token: string,
        expires_in: number
    }
}
