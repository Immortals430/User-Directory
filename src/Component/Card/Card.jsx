import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import "./Card.css"

export default function Card({ filterData }) {
  return (
    <main>
      <div className="grid">
        {filterData.map((elem) => (
          <div className="card" key={elem.id}>
            <div>{elem.name[0]}</div>
            <h1>{elem.name}</h1>
            <p><MdEmail /> {elem.email}</p>
            <p><FaPhone />{elem.phone}</p>   
            <p><MdWork /> {elem.company.name}</p>
            <p><FaGlobe /> {elem.website}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
