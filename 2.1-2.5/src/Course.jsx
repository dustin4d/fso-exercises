import Header from './Header.jsx'
import Content from './Content.jsx'

const Course = ({course}) => {
    return (
        <div>
            <Header header={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course