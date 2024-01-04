import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {
    return (
        <div>
            <Header header={course.name}/>
            <Content parts={course.parts}/>
            <Total total={course.parts}/>
        </div>
    )
}

export default Course