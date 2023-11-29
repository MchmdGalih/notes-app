import React from "react";
import NoteInput from "./NoteForm";
import NoteList from "./NoteList";

const AppBody = ({ notes, addNewNote, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);
  return (
    <div className="note-app__body">
      <NoteInput addNewNote={addNewNote} />
      <h2>Active Notes</h2>
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      {archivedNotes.length >= 0 && (
        <>
          <h2>Archive Notes</h2>
          <NoteList
            notes={archivedNotes}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        </>
      )}
    </div>
  );
};

export default AppBody;
