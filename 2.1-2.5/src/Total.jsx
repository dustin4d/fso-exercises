const Total = ({total}) => {
    return(
        <>
            <p>Total Component</p>
            <p>
                Total Exercises: {total.reduce((acc, currentVal) => {
                    console.log(currentVal.exercises)
                    return acc + currentVal.exercises
                }, 0)}
            </p>
        </>
    )
}

export default Total