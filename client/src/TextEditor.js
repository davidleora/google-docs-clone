import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function TextEditor() {
    const quillRef = useRef(null);

    useEffect(() => {
        if (!quillRef.current) {
            quillRef.current = new Quill("#container", { theme: "snow" });
        }
    }, []);
    return <div id="container"></div>;
}
