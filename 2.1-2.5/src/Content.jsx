import Part from './Part.jsx'

const Content = ({parts}) => {
    return (
        <>
            {parts.map((part) => 
                <Part key={part.id} //Required by React
                      partName={part.name} 
                      partExercises={part.exercises}/>
                )}
        </>
    )
}

export default Content