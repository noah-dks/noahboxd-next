"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { Controller, useForm } from "react-hook-form";
import z from "zod";

function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data);
    //what happens after
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="w-1/3 mt-20 sm:max-w-md bg-slate-900 text-white">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription className="text-white/70">Login to an existing user</CardDescription>
        </CardHeader>

        <CardContent>
          <form id="login" onSubmit={form.handleSubmit(onSubmit)} >
            <FieldGroup>
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="login-username">Username</FieldLabel>
                    <Input
                      {...field}
                      id="login-username"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="JohnDoe123"
                      
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="login-password">Password</FieldLabel>
                    <Input
                      {...field}
                      id="login-password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      type="password"
                      placeholder="********"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation={"responsive"}>
            <Button
              className="cursor-pointer font-bold"
              type="submit"
              form="login"
            >
              Login
            </Button>
            <Button variant={"ghost"} className="hover:bg-white/50">
              <Link href={"/register"}>Dont have an account?</Link>
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Login;
