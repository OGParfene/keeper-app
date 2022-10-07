import React, {useState} from "react";

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name,value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        })
    }

    function expand(){
      setExpanded(true);
    }


  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" value={note.title} placeholder="Title" onChange={handleChange}/>}
        <textarea name="content" value={note.content} onChange={handleChange} onClick={expand} placeholder="Take a note..." rows={isExpanded ? 3 : 1}/>
        {isExpanded && <button onClick={submitNote}>Add</button>}
      </form>
    </div>
  );
}

export default CreateArea;