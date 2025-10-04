import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import NoteForm from "./NoteForm";

export default function NoteItem({ note, notes, saveNotes }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    const filtered = notes.filter((n) => n.id !== note.id);
    saveNotes(filtered);
  };

  if (isEditing) {
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-200">
        <NoteForm
          editNote={note}
          notes={notes}
          saveNotes={(updatedNotes) => {
            saveNotes(updatedNotes);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className="group bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-200">
      <div className="flex justify-between items-start gap-4">
        <p className="flex-1 text-gray-700 whitespace-pre-wrap leading-relaxed">
          {note.text}
        </p>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            title="Edit note"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete note"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}