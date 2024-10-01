"use client";
import Container from "../shared-components/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsLetterSchema } from "@/lib/form-schema";
import Link from "next/link";

export default function SignUp() {
  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      name: "",
      email: "",
      option: "",
    },
  });

  return (
    <Container variant="rounded-primary">
      <div>
        <h1 className="text-shade font-medium capitalize text-2xl sm:text-3xl lg:text-4xl leading-6 mb-8">
          Sign-up for updates
        </h1>
        <p className="text-tint">
          To receive updates from Momtan Organization, about our latest
          programs, reports, campaigns and webinars,etc.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              console.log(values);
            })}
            className="grid grid-cols-1 gap-4 items-end sm:grid-cols-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="option"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="text-shade">
                      <SelectTrigger>
                        <SelectValue placeholder="Please choose one option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={"Friends and family"}>
                        Friends and family
                      </SelectItem>
                      <SelectItem value={"Youtube"}>Youtube</SelectItem>
                      <SelectItem value={"Social media"}>
                        Social media
                      </SelectItem>
                      <SelectItem value={"One of our programs or events"}>
                        One of our programs or events
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}
