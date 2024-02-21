

const ConditionRender = () => {
    let arrayofObjects = [
        {
            name: "harish",
            marks: 90,
            id: 1
        },

        {
            name: "rakesh",
            marks: 75,
            id: 2
        },
        {
            name: "suresh",
            marks: 65,
            id: 3
        },
        {
            name: "ramesh",
            marks: 77,
            id: 4
        },
        {
            name: "rajesh",
            marks: 20,
            id: 5
        },

    ]


    //list rendering
    //to render the list we use map method
    //here map method is used to itearte and return the JSX(which is responsible for UI)
    //while using map we will get WARNINHG:Each child in a list should have the unique "key" prop
    //at parent we should write key inside {} mention which is unique in list

    return (
        <div>
            {
                arrayofObjects.map((val) => {
                    const { name, marks, id } = val
                    return (

                        < div key={id}>
                            <h4>Name :{name}</h4>
                            <h4>Marks Obtained : {marks}</h4>
                            {marks > 80 ? <h5>A+ grade </h5> : marks > 70 ? <h5>A grade</h5> : marks > 50 ? <h5>B+ grade</h5> : marks > 40 ? <h5>Pass</h5 > : <h5>Better luck nect time</h5>}
                            <hr />

                        </div>
                    )

                })
            }
        </div >
    )
}


export default ConditionRender