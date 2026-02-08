import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" })
    .refine((val) => !/@\d/.test(val), {
      message: "Email domain cannot start with a number after @",
    }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
