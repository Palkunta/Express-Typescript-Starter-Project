// here ES module system is used so we have to use import instead of require
// then what about commonjs module system ? is it still supported in typescript ? yes it is supported but we have to use require instead of import.
//then which one should we use ? it depends on your project requirements and preferences. If you are working on a modern JavaScript project and want to take advantage of the latest features, you may want to use ES modules. However, if you are working on a legacy project or need to support older environments, you may want to use CommonJS modules. Ultimately, the choice is up to you and your team.

import express from 'express';


const PORT = 3000; //implicitly typed as number, because we assigned a number value to it. TypeScript can infer the type of a variable based on the value assigned to it. In this case, since we assigned the number 3000 to the constant PORT, TypeScript infers that PORT is of type number. Therefore, we don't need to explicitly declare the type of PORT as number, as it is already inferred by TypeScript.


const app = express();


app.get("/ping", (req,res) => {
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});