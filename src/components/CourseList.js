import React, { useState, useEffect } from 'react';
import './CourseList.css'

function CourseList() {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        let data = [{
            name: "Engineering"
        },
        {
            name: "Degree"
        },
        {
            name: "Diploma"
        }
        ]
        // fetch('api')
        //   .then((response) => response.json())
        //   .then((data) => setCourses(data));
        setCourses(data)
    }, []);

    return (
        <div className='course-container'>
            {/* <h1 className='course-header'>Course List</h1> */}
            <ul className='course-list'>
            <h1 className='course-header'>Course List</h1>
                {courses.map((course) => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
