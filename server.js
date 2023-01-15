const express = require('express');
const app = express();
const axios = require('axios');
const { Router } = require('express');
const PORT = 3000;

async function fetchData(id) {
    const URL = `https://dummy.restapiexample.com/api/v1/employee/${id}`;
    const result = await axios.get(URL);
    console.log('Request Send');
    console.log(result);
    return result.data;
}

app.get('/getData/:id', async(req,res) => {
    const { id } = req.params;
    const result = await fetchData(id);
    return res.status(200).json({
        data: result
    })
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));