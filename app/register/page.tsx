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
import { signUp } from "@/lib/auth-client";
import { registerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

function RegisterPage() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    const result = await signUp.email({
      email: data.email,
      username: data.username,
      name: data.name,
      password: data.password,
    });

    console.log(result);

    if (result.error) {
      toast.error("Registration failed", {
        description: result.error.message || "Unable to register",
      });
      return;
    }
    toast.success("Registration successful");
    form.reset();
    redirect("/movies");
  }

  return (
    <div className="flex justify-center">
      <Card className="w-1/3 mt-10 sm:max-w-md bg-cardbg text-primarytext">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription className="text-secondtext">
            Register a new user!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form id="register" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="register-email"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="johndoe@example.com"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-name">Name</FieldLabel>
                    <Input
                      {...field}
                      id="register-name"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="John Doe"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-username">
                      Username
                    </FieldLabel>
                    <Input
                      {...field}
                      id="register-username"
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
                    <FieldLabel htmlFor="register-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="register-password"
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
              form="register"
            >
              Register
            </Button>
            <Button variant={"ghost"} className="hover:bg-white/50">
              <Link href={"/login"}>Already have an account?</Link>
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
export default RegisterPage;
