import history from '../history'

const newUserUrl = "http://localhost:9000/users"
const authUrl = "http://localhost:9000/login"


export const postUser = (dispatch, user) => {
        fetch(newUserUrl, {
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


export const userLoginFetch = (dispatch, user) => {
    console.log("user obj", user)
        fetch(authUrl, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json' 
            },
            body: JSON.stringify({user})
        })
            .then(response => response.json())
            .then(response => {
                if (response.token) {
                    localStorage.setItem("token", response.token)
                    dispatch(loginUser(response.user))
                    history.push('/landing')

                } else {
                    console.log("response", response)
                   console.log("error", response.error)
                }
            })
    
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

const loginUser = userObj => ({
    type: "LOGIN_USER",
    payload: userObj
})
