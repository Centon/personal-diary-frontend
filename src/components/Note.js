import React, {useState} from "react";
import { Link } from "react-router-dom";
import User from "../services/User";
import server from "../services/Server"
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});
const Note = ({ note, notes, setNotes }) => {
  const date = new Date(note.date).toDateString();
  const time = new Date(note.date).toLocaleTimeString();
  const [showModal, setShowModal] = useState(false);
  const user = User.getCurrentUser();
  const username = user.username;
  const deleteNote = (id) => {
    server
      .delete(`/${username}/remove/${id}`)
      .then(() => {
        setNotes(notes.filter(note => note._id !== id));
      })
  };

