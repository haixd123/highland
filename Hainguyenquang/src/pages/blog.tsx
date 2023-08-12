import React, { Component, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

document.querySelector('#ad')

const BlogPage = () => {
    const [textEditor, setTextEditor] = useState("<p>Hello from CKEditor 5!</p>")
    console.log('textEditor: ', textEditor);
    const fetchData = async () => {
        const response = await axios.post('http://localhost:3000/postsDataNews', textEditor)
        // console.log('response: ', response);
        if(response.status === 201) {

        }
    }
    
    useEffect(() => {
        fetchData();
      }, [textEditor]);
    return (
        <>
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data={textEditor}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    const test = JSON.stringify(data)
                    setTextEditor(test)
                    
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>

        <div dangerouslySetInnerHTML={{__html: textEditor}} />
        </>
    );

}

export default BlogPage;