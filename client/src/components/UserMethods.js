import axios from 'axios'

export const singUp = newUser => {
    return axios
        .post('http://localhost:5000/signup', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
           
            console.log('added new user')
    })
    .catch(error => {
        console.log(error.response)
    });    
}

export const login = newUser => {
    return axios
        .post('http://localhost:5000/login', {
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
              }
      
              return res.data;
            })
            .catch(err => {
                console.log(err)
    })
}

export const logOut = () => {
    localStorage.removeItem("user");
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}
// export const getProfile = user => {
//     return axios
//         .get('users/profile', {
//     })
//         .then(res => {
//             console.log(res)
//             return res.data
//         })
//         .catch(err => {
//             console.log(err)
//     })
// }
