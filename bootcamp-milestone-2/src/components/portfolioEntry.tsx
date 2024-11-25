import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { PortfolioObject } from '@/database/portfolioSchema';

export default function PortfolioEntry(props: PortfolioObject) {

    // console.log(props);

    return (
        <div className="project">
                <Link href={props.url}>
                    <Image src={props.image} alt={props.imageAlt} width="504" height="378"></Image>
                </Link>

                <div className="project-details">
                    <p className="project-name">{props.name}</p>
                    <p className="project-description">{props.description}</p>
                    <Link href={props.url}>Learn more!!!</Link>
                </div>


            </div>


    );
}