/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FloatingMenu } from "@tiptap/extension-floating-menu";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ initialValue, onChange }: any) => {
  const editor = useEditor({
    extensions: [StarterKit, FloatingMenu],
    content: initialValue,
    onUpdate: ({ editor }: any) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  return (
    <div className="">
      <EditorContent editor={editor} />
    </div>
  );
};

export { Tiptap };
