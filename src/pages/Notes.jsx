import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Search, LogOut } from "lucide-react";
import NoteForm from "../components/NoteForm";
import NoteItem from "../components/NoteItem";

export default function Notes() {
  const { user, logout } = useAuth0();
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    if (user) {
      const savedNotes = JSON.parse(localStorage.getItem(user.sub)) || [];
      setNotes(savedNotes);
    }
  }, [user]);

  const saveNotes = (newNotes) => {
    setNotes(newNotes);
    localStorage.setItem(user.sub, JSON.stringify(newNotes));
  };


  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="max-w-3xl mx-auto px-4 py-8">

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                My Notes
              </h1>
              <p className="text-gray-600 mt-1">Hello, {user.name}! 👋</p>
            </div>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
            >
              <LogOut size={18} />
              <span>Log Out</span>
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search your notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all bg-white"
            />
          </div>
        </div>


        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Create New Note</h2>
          <NoteForm notes={notes} saveNotes={saveNotes} />
        </div>

        <div className="space-y-3">
          {filteredNotes.length ? (
            filteredNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                notes={notes}
                saveNotes={saveNotes}
              />
            ))
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-white">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-500 text-lg">
                {search ? "No notes found matching your search" : "No notes yet. Create your first note above!"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}