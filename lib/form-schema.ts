import { z } from "zod";

export const newsLetterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Please enter your name. - 3 characters minimum" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(1, { message: "Please enter your email address." }),
  option: z.string().min(1, { message: "Please choose one option." }),
});
