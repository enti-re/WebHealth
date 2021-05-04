import {React,useState,useEffect} from 'react'
import * as Fa from 'react-icons/fa'
import * as Cg from 'react-icons/cg'
import './article.css'
import ArticleData1 from './ArticleData1';
import Sidebar from '../sidebar/sidebar'
import { Component } from 'react';
import axios from 'axios';
function ArticleIntro() {
    const [data,setdata] = useState({
        name: "",
        link: ""
    })
    
    const [arr,setarr] = useState([]);

     useEffect(async () => {
        const list = await axios.get("http://localhost:4000/app/articleData");
        setarr([...list.data])
      }, []);

    
    
    const handleChange = (event)=>{
        setdata({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        const obj = {
            articleName: data.name,
            articleLink: data.link
        }
        console.log(obj);
        await axios.post("http://localhost:4000/app/articleData",obj);
        const list = await axios.get("http://localhost:4000/app/articleData");
        setarr([...list.data])

        setdata({
            ...data,
            name: "",
            link: "",
        })
    }

    return (
        
        <div className="article">
        <Sidebar />
            <div className="article-grid">
                <div className="article-grid-item-1">
                    <h1>ARTICLES</h1>
                        <br />
                        <p>This page shares out best articles to read on topics like health, happiness and more. The central question that drives our work is, “How can we live better?” To answer that question, We will like to list some science-based ways to solve practical problems.
                        </p>
                    <div>
                    <div className="article-add">
                        <h1>List</h1>
                    </div>
                        <div className="article-list">
                        <div>
                                <form className="user-input" onSubmit={handleSubmit}>
                                    <input type = "text" name="name" value={data.name} onChange={handleChange} placeholder="Article Title" required autoComplete="off"/>
                                    <input type = "url" name="link" value={data.link} onChange={handleChange} placeholder="Link" required autoComplete="off"/>
                                    <button className="user-input-btn"><Cg.CgAddR color="#FFCC80" size={30} /></button>
                                </form>
                        </div>
                            <div className="article-list-ul">
                            {arr.map((item,index)=>{
                                return (
                                    <a href={item.articleLink} target="_blank"><li>{item.articleName}</li></a>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-grid-item-2">
                <div className="newsletter">
                    <h1>Monthly<span> Newsletter</span></h1>
                    <p>Subscibe to avail the benefit of Monthly Newsletter</p>
                    <div classname="text">
                        <input className="article-input" type="text" placeholder="Enter Your Email" />
                        <button className="article-button"><Fa.FaArrowRight /></button>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default ArticleIntro
