'use server';

import { signIn, signOut } from "@/app/auth/auth";
import { revalidatePath } from "next/cache";


export const googleSignIn = async () => {
    console.log("signin with google clicked");
    await signIn('google', { redirectTo: '/' });
    revalidatePath('/');
}

export const logOut = async () => {
    await signOut({ redirectTo: '/' });
    revalidatePath('/');
}