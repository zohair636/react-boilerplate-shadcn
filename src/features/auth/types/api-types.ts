export interface LoginApiResponse {
    accessToken: string;
    user: {
        name: string;
        email: string;
        phone: string;
        is_active: boolean;
    }
}