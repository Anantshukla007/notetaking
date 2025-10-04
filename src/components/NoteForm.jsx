import React, { useState, useEffect } from "react";
import { Plus, Check } from "lucide-react";

export default function NoteForm({ notes, saveNotes, editNote, onCancel }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editNote) setText(editNote.text);
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editNote) {
      // Update existing note
      const updatedNotes = notes.map((n) =>
        n.id === editNote.id ? { ...n, text } : n
      );
      saveNotes(updatedNotes);
    } else {
      // Add new note
      const newNote = { id: Date.now(), text };
      saveNotes([newNote, ...notes]);
    }
    setText("");
    if (onCancel) onCancel();
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your note..."
          className="w-full p-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all resize-none bg-white shadow-sm"
          rows={3}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
              handleSubmit(e);
            }
          }}
        />
        <button
          onClick={handleSubmit}
          className="absolute bottom-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
        >
          {editNote ? <Check size={20} /> : <Plus size={20} />}
        </button>
      </div>
      {editNote && onCancel && (
        <button
          onClick={onCancel}
          className="mt-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          Cancel editing
        </button>
      )}
    </div>
  );
}