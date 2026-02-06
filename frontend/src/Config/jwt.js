import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds

    if(decodedToken.exp < currentTime){
        return true;
    }
    return false;
}