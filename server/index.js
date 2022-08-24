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
            res.send();
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
    const ebp=req.body.ebp;
    const egp=req.body.egp;
    const ewin=req.body.ewin;
    const eimg=req.body.eimg;
    const edrive=req.body.edrive;
    const elocation=req.body.elocation;
    const evid=req.body.evid;
    const likes=req.body.likes;
    console.log(req.body)

    db.query('INSERT INTO event (eid,ename,rid,edesc,edate,etime,ebp,egp,ewin,eimg,edrive,elocation,evid,likes)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,0)',
    [eid,ename,rid,edesc,edate,etime,ebp,egp,ewin,eimg,edrive,elocation,evid],
    (err,result) =>{
        if(err){
            console.log(err);
        } else{
            res.send();
        }
    
    }
    );
    db.query('UPDATE nevent SET ne=ne+1 WHERE rid=?',
    [rid],
    (err,result) =>{
        if(err){
            console.log(err);}
    });
});

app.get('/getregionaloffice',(req,res)=>{
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


    db.query("SELECT * FROM login WHERE username = ? AND password = ?",
    [username,password],
    (err,result)=>{
        if(err){
            res.send({err: err});
        }        
        else if(result.length>0 ) {
            res.send(result);
        } else{
            res.send({message: "Wrong username/password combination"});

        }
    });
});

app.put("/updateevent", (req,res) => {
    const eid = req.body.eid;
    const ename = req.body.ename;
    const rid = req.body.rid;
    const edesc = req.body.edesc;
    const estartdate = req.body.estartdate;
    const eenddate = req.body.eenddate;
    const etime = req.body.etime;
    const ebp = req.body.ebp;
    const egp = req.body.egp;
    const ewin = req.body.ewin;
    const eimg = req.body.eimg;
    const elocation = req.body.elocation;
    const evid = req.body.evid;

    const sqlupdate = "UPDATE event SET ename=?,rid=?,edesc=?,estartdate=?,eenddate=?,etime=?,ebp=?,egp=?,ewin=?,eimg=?,elocation=?,evid=? WHERE eid=? ; ";

    db.query(sqlupdate, [ename,rid,edesc,estartdate,eenddate,etime,ebp,egp,ewin,eimg,elocation,evid,eid],(err,result) => {
        if(err){
            console.log(err);
        }
        
    });
});

app.get("/getEvents",(req,res)=>{
    db.query("SELECT * from event",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/updateregionaloffice", (req,res) => {
    const rname = req.body.rname;
    const rid = req.body.rid;
    const rdesc = req.body.rdesc;
    const rimage = req.body.rimage;
    const rlocation = req.body.rlocation;

    const sqlupdate = "UPDATE rooffice SET rname=?,rdesc=?,rimage=?,rlocation=? WHERE rid=? ; ";

    db.query(sqlupdate, [rname,rdesc,rimage,rlocation,rid],(err,result) => {
        if(err){
            console.log(err);
        }
        
    });
});

app.get('/chart1',(req,res)=>{
    db.query("SELECT ne from nevent",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.get('/chart2',(req,res)=>{
    db.query("SELECT EXTRACT(year FROM edate) AS year, SUM(ebp) AS boys,SUM(egp) as girls FROM event GROUP BY EXTRACT(year FROM edate)",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.listen(3001,()=>{
    console.log("server is running on port 3001");
});
