import React, { Component, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { Button, Input } from 'antd';
import { postAPI } from '../api';

document.querySelector('#ad')

const BlogPage = () => {
    const [textEditor, setTextEditor] = useState("test")
    const fetchData = async () => {

        const response = await postAPI({
            path: 'http://localhost:3000/postsDataNews',
            body: {
            //   id: id,
              "title": textEditor,
            }
      
          });
        // console.log('response: ', response);
        if(response.status === 201) {
        }
    }
    // useEffect(() => {
    //     fetchData();
    //   }, submit);
    return (
        <>
        <div className="App">
            <CKEditor
                editor={ClassicEditor}
                data={textEditor}
                onReady={editor => {
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setTextEditor(data)
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>
        <Button onClick={() => fetchData()}>Submit</Button>

        <div dangerouslySetInnerHTML={{__html: textEditor}} />
        </>
    );

}

export default BlogPage;