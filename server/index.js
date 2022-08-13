const express=require("express");
const app=express();
const mysql=require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'',
    database:'sih',
});

app.post('/create',(req,res) => {
    const rid=req.body.rid;
    const rname=req.body.rname;
    const rimage=req.body.rimage;
    const rlocation=req.body.rlocation;
    const rdesc=req.body.rdesc;
    console.log(req.body)

    db.query('INSERT INTO rooffice (rid,rname,rimage,rlocation,rdesc)VALUES (?,?,?,?,?)',
    [rid,rname,rimage,rlocation,rdesc],
    (err,result) =>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }

    }
    );
});

app.post('/insertevent',(req,res) => {
    const eid=req.body.eid;
    const ename=req.body.ename;
    const rid=req.body.rid;
    const edesc=req.body.edesc;
    const edate=req.body.edate;
    const etime=req.body.etime;
    const enp=req.body.enp;
    const ewin=req.body.ewin;
    const eimg=req.body.eimg;
    const elocation=req.body.elocation;
    const evid=req.body.evid;
    console.log(req.body)

    db.query('INSERT INTO event (eid,ename,rid,edesc,edate,etime,enp,ewin,eimg,elocation,evid)VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [eid,ename,rid,edesc,edate,etime,enp,ewin,eimg,elocation,evid],
    (err,result) =>{
        if(err){
            console.log(err);
        } else{
            res.send("Events are inserted");
        }

    }
    );
});

app.get('/employees',(req,res)=>{
    db.query("SELECT * from rooffice",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/validate',(req,res)=>{
    const username = req.body.username; 
    const password = req.body.password;


    db.query("SELECT * FROM login WHERE username = ? AND password=?",
    [username,password],
    (err,result)=>{
        if(err){
            res.send({err: err});
        } 
        
        if(result.length >0 ) {
            res.send(result);
        } else{
            res.send({message: "Wrong username/pasword  combination"});

        }
    });
});

app.listen(3001,()=>{
    console.log("server is running on port 3001");
});
