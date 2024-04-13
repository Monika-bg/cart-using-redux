import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER RUNNING AT PORT ${process.env.PORT}`);
});
