export default async function apiService(url, method = 'GET', body = null) {
    try {
        const options = {
            method,
            body: method === 'POST' ? JSON.stringify(body) : null,
            headers: {
                'Content-Type': 'application/json',
            },
            
        };

        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
