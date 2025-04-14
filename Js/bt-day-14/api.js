const baseUrl = "http://localhost:3000"
const baseUrlJobs = "http://localhost:3000/jobs"

const getData = async (endpoint) => {
    const response = await fetch(`${baseUrl}/${endpoint}`)
    return await response.json()
}

const postData = async (endpoint, payload) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'post',
        body: JSON.stringify(payload)
    })
    return await response.json()
}

const deleteData = async (id) =>{
    const response = await fetch(`${baseUrlJobs}/${id}`,{
        method: 'delete',
    })
    return await response.json()
}

const putData = async (id, payload) => {
    const response = await fetch(`${baseUrlJobs}/${id}`,{
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    return await response.json()
}

export {
    getData,
    postData,
    putData,
    deleteData
}