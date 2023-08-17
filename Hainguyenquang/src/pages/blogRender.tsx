import axios from "axios"
import { useState, useEffect } from "react"


const Blog2: any = () => {
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

export default Blog2