export default function authAdmin({ username, password }) {
    const data = { username: username, password: password };

    fetch("https://vast-scrubland-50324.herokuapp.com/auth", {
        method: "post",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((result) => result.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
            return;
        });
}
