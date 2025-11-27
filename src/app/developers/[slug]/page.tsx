"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

interface Developer {
    id: string;
    name: string;
    bio: string;
    skills: string[];
}

const DeveloperDetailPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [developer, setDeveloper] = useState<Developer | null>(null);

    useEffect(() => {
        if (slug) {
            // Fetch developer details based on slug
            fetch(`/api/developers/${slug}`)
                .then((response) => response.json())
                .then((data) => setDeveloper(data))
                .catch((error) => console.error("Error fetching developer data:", error));
        }
    }, [slug]);

    if (!developer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{developer.name}</h1>
            <p>{developer.bio}</p>
            <h2>Skills</h2>
            <ul>
                {developer.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default DeveloperDetailPage;