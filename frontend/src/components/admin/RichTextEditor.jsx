import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Bold, Italic, Strikethrough, Heading1, Heading2, List, ListOrdered, Quote, Code, Image as ImageIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('URL Image:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const activeClass = "bg-primary text-white border-primary";
  const inactiveClass = "bg-background text-muted-foreground border-border hover:bg-white/5";

  return (
    <div className="flex flex-wrap gap-1 p-2 bg-card border-b border-border">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('bold') ? activeClass : inactiveClass)}
      >
        <Bold size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('italic') ? activeClass : inactiveClass)}
      >
        <Italic size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('strike') ? activeClass : inactiveClass)}
      >
        <Strikethrough size={16} />
      </button>
      <div className="w-px h-8 bg-border mx-1"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('heading', { level: 1 }) ? activeClass : inactiveClass)}
      >
        <Heading1 size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('heading', { level: 2 }) ? activeClass : inactiveClass)}
      >
        <Heading2 size={16} />
      </button>
      <div className="w-px h-8 bg-border mx-1"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('bulletList') ? activeClass : inactiveClass)}
      >
        <List size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('orderedList') ? activeClass : inactiveClass)}
      >
        <ListOrdered size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('blockquote') ? activeClass : inactiveClass)}
      >
        <Quote size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={cn("p-2 border rounded transition-colors", editor.isActive('codeBlock') ? activeClass : inactiveClass)}
      >
        <Code size={16} />
      </button>
      <div className="w-px h-8 bg-border mx-1"></div>
      <button
        type="button"
        onClick={addImage}
        className={inactiveClass + " p-2 border rounded"}
      >
        <ImageIcon size={16} />
      </button>
    </div>
  );
};

export default function RichTextEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none min-h-[400px] p-4 focus:outline-none focus:ring-0',
      },
    },
  });

  useEffect(() => {
    if (editor && content && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
      <MenuBar editor={editor} />
      <div className="bg-background">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
