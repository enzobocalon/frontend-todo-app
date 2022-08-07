export const getMessages = async () => {
    const response = await fetch('http://localhost:8000/activity')
    const data = await response.json();
    return data
}

export const postMessages = async (message) => {
    const request = await fetch ('http://localhost:8000/activity', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json', 
        },
        body: JSON.stringify({
            message: message,
            completed: false,
            isDeleatable: true
        })
    })
}

export const deleteMessages = async (id) => {
    const request = await fetch (`http://localhost:8000/activity/${id}`, {
        method: 'DELETE', 
    })
}

export const updateMessage = async (id, message, check) => {
    const request = await fetch (`http://localhost:8000/activity/${id}`, {
        method: 'PATCH', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            message: message,
            completed: check,
            isDeleatable: true
        })
    })
}