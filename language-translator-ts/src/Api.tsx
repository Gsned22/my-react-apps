import React from 'react'
import axios from 'axios'

const searchImages = async (term: any) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9vggkUdF732qiokXQMD3effpaBEzjmfZZMmD1QYKz4E'
        },
        params: {
            query: term
        }
    })

    return response.data.results
}

export default searchImages;