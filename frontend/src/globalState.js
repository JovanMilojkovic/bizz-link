import { create } from "zustand";

const useGlobalState = create((set) => ({
    signupFailed: null,
    logInFailed: null,
    user: null,
    isLoggedIn: false,
    userToken: null,
    setSignupFailed: (error) => set({ signupFailed: error }),
    setLogInFailed: (error) => set({ logInFailed: error }),
    setLogInUserData: (data) => set({ user: data }),
    setIsLoggedIn: (value) => set({ isLoggedIn: value }),
    setUserToken: (token) => set({ userToken: token }),
}));

export default useGlobalState;
