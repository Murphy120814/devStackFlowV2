"use client";
import React from "react";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "../../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { useTheme } from "@/context/ThemeProvider";
import { AnswerSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
export default function Answer() {
  const editorRef = React.useRef(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { mode } = useTheme();
  const form = useForm<z.infer<typeof AnswerSchema>>({
    resolver: zodResolver(AnswerSchema),
    defaultValues: {
      answer: "",
    },
  });

  const handleCreateAnswer = () => {};
  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10 mt-6"
        onSubmit={form.handleSubmit(handleCreateAnswer)}>
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormControl className="mt-3.5">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                  onInit={(evt, editor) =>
                    // @ts-ignore
                    (editorRef.current = editor)
                  }
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=""
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "codesample",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks |" +
                      "codesample | bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | ",
                    content_style: "body { font-family:Inter; font-size:16px }",
                    skin: mode === "dark" ? "oxide-dark" : "oxide",
                    content_css: mode === "dark" ? "dark" : "light",
                  }}
                />
              </FormControl>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="primary-gradient w-fit text-white"
            disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
