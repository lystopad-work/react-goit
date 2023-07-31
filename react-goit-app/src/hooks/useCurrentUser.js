import {useEffect, useState} from "react";

export const useCurrentUser = (token) => {

    const [isUserValid, setIsUserValid] = useState(false)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const isTokenValid = token === accessToken

        if (token) setIsUserValid(isTokenValid)
    }, []);


    return isUserValid
}