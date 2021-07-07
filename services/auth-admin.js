export default function authAdmin({ username, password }) {
    const data = { username: username, password: password };

    fetch("https://vast-scrubland-50324.herokuapp.com/auth", {
        method: "post",
        mode: "cors",

        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
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
