import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      remainingTitleChars: 50,
    };

    this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
    this.onBodyEventhandler = this.onBodyEventhandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleEventHandler(e) {
    const titleValue = e.target.value;
    const maxTitleLength = 50;
    const remainingTitleChars = maxTitleLength - titleValue.length;
    if (remainingTitleChars >= 0) {
      this.setState(() => ({
        title: titleValue,
        remainingTitleChars: remainingTitleChars,
      }));
    }
  }

  onBodyEventhandler(e) {
    this.setState(() => ({
      body: e.target.value,
    }));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNewNote(this.state);
    this.setState({
      title: "",
      body: "",
      textlength: 0,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>New Note</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Character left: {this.state.remainingTitleChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            name="noteBody"
            placeholder="Your Notes here ..."
            value={this.state.body}
            onChange={this.onBodyEventhandler}
          ></textarea>
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
