const express = require('express');

const app = express();

app.get('/api/customers',(req,res) => {
    const customers = [
        {id: 1, firstName: 'Sagar', lastName: 'Kharbe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Tarun', lastName: 'Rao'},
      ];
    res.json(customers);
});

const port = 5000;
 
app.listen(port,()=> console.log(`Server started on port ${port}`)
)

