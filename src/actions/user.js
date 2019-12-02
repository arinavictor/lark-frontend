const newUserUrl = "http://localhost:9000/users"
const authUrl = "http://localhost:9000/login"

export const postUser = user => {
    return dispatch => {
        return fetch(newUserUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(response => response.json())
            .then(data => {
                if (data.status >= 400) {
                    throw new Error("Couldn't create user")
                } else {
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })
    }  
}

const loginUser = userObj => ({
    type: "LOGIN_USER",
    payload: userObj
})


export const userLoginFetch = user => {
    return dispatch => {
        return fetch(authUrl, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json' 
            },
            body: JSON.stringify({user})
        })
            .then(response => response.json())
            .then(response => {
                if (response.message) {
                    console.error(response.message)
                } else {
                    console.log(response.token)
                    // localStorage.setItem("token", data.jwt)
                    // dispatch(loginUser)
                }
            })
    }
}