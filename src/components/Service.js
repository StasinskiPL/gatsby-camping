import React from 'react'
import Image from "gatsby-image";

const Service = ({name,description,image}) => {
    const fixed = image.localFiles[0].childImageSharp.fixed;
    return (
        <article className="service">
            <div className="service-inner">
                    <Image fixed={fixed} className="service-icon"/>
                    <h3>{name}</h3>
                    <p>{description}</p>
            </div>
        </article>
    )
}

export default Service
