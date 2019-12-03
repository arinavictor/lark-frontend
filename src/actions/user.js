
const newUserUrl = "http://localhost:9000/users"
const authUrl = "http://localhost:9000/login"
const BASE_URL = "http://localhost:9000"


export const postUser = (dispatch, user) => {
       return fetch(newUserUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(response => response.json())
            .then(response => {
                if (response.user) {
                    localStorage.setItem("token", response.token)
                    dispatch(loginUser(response.user))
                } else {
                   console.log("error", response.error)
                }
            })
      
}


export const userLoginFetch = (dispatch, user) => {
       return fetch(authUrl, {
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

                } else {
                   console.log("error", response.error)
                }
            })
    
}

export const validateUser = (dispatch) => {
    fetch(`${BASE_URL}/profile`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then(response => response.json())
    .then(response => dispatch(loginUser(response.user)))
}

export const logoutUser = (dispatch) => { 
    localStorage.removeItem("token")
    dispatch({ type: 'LOGOUT_USER'})
}

const loginUser = userObj => ({
    type: "LOGIN_USER",
    payload: userObj
})
