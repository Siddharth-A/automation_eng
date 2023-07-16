function deleteNote(noteID){
    fetch('/delete-note', {
        method: 'POST',
        nody:JSON.stringify({noteID:noteID}),
    }).then((_res) => {
        window.location.href = "/";
    });
}