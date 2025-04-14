const baseUrl = 'https://api-todolist-multiuser.onrender.com/Luc/todos';

const getData = async () => {
    const response = await fetch(`${baseUrl}`)
    return await response.json()
}

const postData = async (payload) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        console.error("POST failed", response.status);
        throw new Error("POST failed");
    }

    return await response.json();
};

const deleteData = async (id) =>{
    const response = await fetch(`${baseUrl}/${id}`,{
        method: 'delete',
    })
    return await response.json()
}

const putData = async (id, payload) => {
    const response = await fetch(`${baseUrl}/${id}`,{
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