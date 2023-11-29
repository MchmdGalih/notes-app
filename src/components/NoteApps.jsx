import React from "react";
import Header from "./Header";
import { getInitialData } from "../utils";
import AppBody from "./NoteBody";
import Footer from "./Footer";

class NoteApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      unfilteredNotes: getInitialData(),
    };
    this.onDeletedHandler = this.onDeletedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArciveHandler = this.onArciveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date(),
          archived: false,
        },
      ],
      unfilteredNotes: [
        ...prevState.unfilteredNotes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date(),
          archived: false,
        },
      ],
    }));
  }

  onDeletedHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArciveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      );

      return {
        notes: updatedNotes,
        unfilteredNotes: updatedNotes,
      };
    });
  }

  onSearchHandler(text) {
    if (text.length !== 0 && text.trim() !== "") {
      this.setState({
        notes: this.state.unfilteredNotes.filter(
          (note) =>
            note.title.toLowerCase().includes(text.toLowerCase()) ||
            note.body.toLowerCase().includes(text.toLowerCase())
        ),
      });
    } else {
      this.setState({
        notes: this.state.unfilteredNotes,
      });
    }
  }
  render() {
    return (
      <div className="note-app">
        <Header onSearch={this.onSearchHandler} />
        <AppBody
          addNewNote={this.onAddNoteHandler}
          notes={this.state.notes}
          onDelete={this.onDeletedHandler}
          onArchive={this.onArciveHandler}
        />
        <Footer />
      </div>
    );
  }
}

export default NoteApps;
