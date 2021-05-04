const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const gymDataTemplate = require('../models/GymDataModels');
const ArticleDataTemplate = require('../models/ArticleDataModels');



router.post('/signup',(req,res)=>{
    const signedUpUser = new signUpTemplateCopy({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    signedUpUser.save()
    .then(data=> {res.json(data)})
    .catch(error=> {res.json(error.message)});
})


router.post('/login', async(req,res)=>{

    try{
        const username = req.body.username;
        const password = req.body.password;
        console.log(username);
        console.log(password);
        const  user = await signUpTemplateCopy.findOne({username});
        console.log(user);
        if(user.password === password){
            res.send({
                msg: "Valid Credential",
                username: username,
            });
            // res.send(username,password);
        }
        else{
            res.send("Invalid Credential");
        }
    } catch(error){
        res.send("invalid");
    }
})

router.post('/gymData',async(req,res)=>{
    const gymDataUser = new gymDataTemplate({
        gymName: req.body.gymName,
        gymDescription: req.body.gymDescription,
        gymLocation: req.body.gymLocation,
    })

    gymDataUser.save()
    .then(data=> {res.json(data)})
    .catch(error=> {res.json(error.message)});
})


router.post('/articleData',async(req,res)=>{
    const articleData = new ArticleDataTemplate({
        articleName: req.body.articleName,
        articleLink: req.body.articleLink,
    })
    
    articleData.save()
    .then(data => {res.json(data)})
    .catch(error => {res.json(error.message)});
})

router.get('/gymData',async(req,res)=>{
    const gym=await gymDataTemplate.find()
    .select("-__v")
    .sort("gymName");
    console.log(gym);
    res.send(gym);
})

router.get('/articleData',async(req,res)=>{
    const article=await ArticleDataTemplate.find()
    .select("-__v")
    .sort("articleName");
    console.log(article);
    res.send(article)
})

module.exports = router