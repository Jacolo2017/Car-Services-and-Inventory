function AutomobileList(automobiles) {
    return (
        <div>
            <div className='row' style={{paddingTop: '80px'}}>
                <div className="container">
                    <h1>Automobiles</h1>
            </div>
        </div>
        <table className="my-5 table table-striped">
            <thead>
                <tr>
                    <th>Vin</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>

                {automobiles.automobiles.map(automobile => {
                    return (
                        <tr key = {automobile.href}>
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.name}</td>
                            <td>{automobile.model.manufacturer.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}
export default AutomobileList;


// on line 15 the second automobiles is the pluralized form of the model name