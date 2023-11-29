import React from "react";
import NoteItems from "./NoteItems";

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <>
      <div className="notes-list">
        {notes.map((list) => (
          <NoteItems
            key={list.id}
            id={list.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...list}
          />
        ))}
      </div>
      {notes.length === 0 && (
        <p className="notes-list__empty-message">No notes here.</p>
      )}
    </>
  );
};

export default NoteList;
