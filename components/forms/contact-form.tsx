"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const storeModal = useModalStore();
  const t = useTranslations("contactForm");
  const formSchema = z.object({
    name: z.string().min(3, { message: t("nameError") }),
    email: z.string().email(t("emailError")),
    message: z.string().min(10, { message: t("messageError") }),
    social: z.string().url().optional().or(z.literal("")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });
async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    // Read the response as TEXT first
    const rawResponse = await response.text();

    console.log("================================");
    console.log("CONTACT STATUS:", response.status);
    console.log("CONTACT RESPONSE:", rawResponse);
    console.log("================================");

    let result: { success?: boolean; error?: string } = {};

    try {
      result = JSON.parse(rawResponse);
    } catch {
      result = {
        error: rawResponse || "Empty response from server",
      };
    }

    if (!response.ok) {
      console.error("CONTACT API ERROR:", result.error);

      storeModal.onOpen({
        title: t("errorTitle"),
        description:
          result.error || t("serverError", { status: response.status }),
        icon: null,
      });

      return;
    }

    // Only reset after successful sending
    form.reset();

    storeModal.onOpen({
      title: t("successTitle"),
      description: t("successDescription"),
      icon: Icons.successAnimated,
    });
  } catch (error) {
    console.error("FETCH ERROR:", error);

    storeModal.onOpen({
      title: t("errorTitle"),
      description:
        error instanceof Error
          ? error.message
          : t("connectionError"),
      icon:null,
    });
  }
}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("name")}</FormLabel>

              <FormControl>
                <Input
                  placeholder={t("namePlaceholder")}
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
              <FormLabel>{t("email")}</FormLabel>

              <FormControl>
                <Input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("message")}</FormLabel>

              <FormControl>
                <Textarea
                  placeholder={t("messagePlaceholder")}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("social")}</FormLabel>

              <FormControl>
                <Input
                  placeholder={t("socialPlaceholder")}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? t("sending") : t("submit")}
        </Button>
      </form>
    </Form>
  );
}