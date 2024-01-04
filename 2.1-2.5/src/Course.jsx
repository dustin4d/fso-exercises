import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({courses}) => {
    return (
        <div>
            <Header header={courses.name}/>
            <Content parts={courses.parts}/>
            <Total total={courses.parts}/>
        </div>
    )
}

export default Course