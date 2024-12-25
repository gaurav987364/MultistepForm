import { z } from "zod";

export const FormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must contain at least 2 characters." })
    .max(20, { message: "Name must contain a maximum of 20 characters." }),
  email: z.string()
    .email("Not a valid email address.")
    .min(5, { message: "Email must contain at least 5 characters." })
    .nonempty("Email is required."),
  address: z.string()
    .min(5, "Address must be at least 5 characters long.")
    .max(100, "Address must not exceed 100 characters."),
  city: z.string()
    .min(2, "City name must be at least 2 characters long.")
    .max(50, "City name must not exceed 50 characters.")
    .regex(/^[a-zA-Z\s]+$/, "City name must only contain letters and spaces."),
  state: z.string()
    .length(2, "State must be a 2-letter code (e.g., CA, NY).")
    .regex(/^[A-Z]{2}$/, "State must be uppercase (e.g., CA, NY)."),
});

export type FormDataType = z.infer<typeof FormSchema>;
