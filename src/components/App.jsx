import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


function App(){
    const [noteList, setNoteList] = useState([{title:"This is an example", content: "This is the content "},{title:"This is a title", content: "This is another content"}, {title:"Follow me on:", content: "Instagram, LinkedIn"}]);

    function addNote(newNote){
        setNoteList(prevNotes => 
            [...prevNotes, newNote]
        )
    }
    function deleteNote(id){

        setNoteList((prevNotes) => {
            return prevNotes.filter((noteItem, index) =>{
                return index !== id})
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {noteList.map((noteItem, index) => {
                return <Note  key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
            })}
            <Footer />
        </div>
    )
}

export default App;