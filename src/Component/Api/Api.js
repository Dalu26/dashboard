async function getApi(url, type, headers ) {
    const response = await fetch(url, { method: type, headers })
    let data = response.json()
    return data
 }