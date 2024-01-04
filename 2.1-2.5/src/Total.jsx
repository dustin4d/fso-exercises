const Total = ({total}) => {
    return(
        <>
            <p>Total Component</p>
            <p>
                Total Exercises: {total.reduce((acc, currentVal) => {
                    return acc + currentVal.exercises
                }, 0)}
            </p>
        </>
    )
}

export default Total