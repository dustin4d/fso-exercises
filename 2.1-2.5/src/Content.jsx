import Part from './Part.jsx'

const Content = ({content}) => {
    return (
        <>
            {content.map((part) => 
                <Part key={part.id} 
                      partName={part.name} 
                      partExercises={part.exercises}/>
                )}
        </>
    )
}

export default Content