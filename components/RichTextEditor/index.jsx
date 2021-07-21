import { useState } from "react";
import { Editor, EditorState } from "draft-js";

export default function RichTextEditor() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    return (
        <div>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    );
}
