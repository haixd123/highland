import axios from "axios"
import { useState, useEffect } from "react"
import "./BlogRender.scss"


const BlogRender: any = () => {
    const [data, setData] = useState([])
    const newsSlug = localStorage.getItem('newsSlug')

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/postsNews')
        if (response.status === 200) {
            setData(response.data)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return data.map((record: any) => {
        if (record.slug === newsSlug) {
            return (
                <>
                    <div dangerouslySetInnerHTML={{ __html: record.content }} />
                </>
            )
        }
    })
}

export default BlogRender