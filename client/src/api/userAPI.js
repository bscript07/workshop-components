const baseURL = `http://localhost:3030/jsonstore/users`;

export const getAll = async () => {
    try {
        const response = await fetch(baseURL);
        const result = await response.json();
        const users = Object.values(result);

        return users;

    } catch (error) {
        console.log(error);
    }

}