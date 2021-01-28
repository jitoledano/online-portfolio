import React, {useState, useEffect} from 'react'
import sanityClient from '../../client';
import{
    ProjectCards,
    ProjectWrapper,
    ProjectHeaderOne,
    ProjectContainer,
    ProjectTitle,
    ProjectImage,
    ProjectDescription,
    ProjectGit
} from './projectsElements'

const Projects = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            github,
            tags,
            "mainImg": mainImage.asset->url
        }`).then((data) => setProjectData(data))
        .catch(console.err);
    }, []);
    

    return (
        <ProjectContainer id='projects'>
            <ProjectHeaderOne>My Projects Page</ProjectHeaderOne>
            <ProjectWrapper>
                {projectData && projectData.map((project, index) => (
                <ProjectCards key={index}>
                    <ProjectImage src={project.mainImg} ></ProjectImage>
                    <ProjectTitle href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener norefferer">
                        {project.title}                        
                    </ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectGit href={project.github}
                    alt="github link"
                    target="_blank"
                    rel="noopener noreffere">Check out the Git Repo here!</ProjectGit>
                </ProjectCards>
                ))}
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects
