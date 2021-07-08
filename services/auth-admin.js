export default async function authAdmin({ username, password }) {
    const data = { username: username, password: password };
    try {
        const response = await fetch("http://localhost:8080/auth", {
            method: "post",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Request-Method":
                    "GET, POST, DELETE, PUT, OPTIONS",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const res = await response.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}
