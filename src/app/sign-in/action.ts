"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(email: string, password: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return error;
  }

  redirect("/");
}

export async function signup(email: string, password: string, emailRedirectTo: string) {
  const supabase = createClient();

  // Having email ratelimit issue so email confirmation disabled
  const { error } = await supabase.auth.signUp({
    email,
    password,
    // options: {
    //   emailRedirectTo,
    // }
  });
  if (error) {
    return error;
  }

  redirect("/");
}

export async function signout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut()
  redirect("/");
}

export async function getUser() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser()
  if(!error){
    return data?.user
  }
  return null;
}

export async function forgotPassword(email: string, origin: string) {
  const supabase = createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/update-password`
  })
}

export async function updatePassword(newPassword: string) {
  const supabase = createClient();
  const response = await supabase.auth.updateUser({
    password: newPassword
  })
  return response;
}
