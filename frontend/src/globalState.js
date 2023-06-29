import { create } from "zustand";

const useGlobalState = create((set) => ({
    signupFaild: null,
    logInFailed: null,
    user: null,
    setSignupFailed: (error) => set({ signupFailed: error }),
    setLogInFailed: (error) => set({ logInFailed: error }),
    setLogInUserData: (data) => set({ user: data }),
}));

export default useGlobalState;
