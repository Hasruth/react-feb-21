import Cards from "./cards"

//to intergate bootstrap we have two ways
//1 CDN (Content Delivery Network )links
//2 Via npm (node package manager) package
//to install npm package use command i.e "npm install react-bootstrap bootstrap" (refer react.dev doument)
//after installing bootstrap import css command in app.js/index.js copy from react-bootstarp doc



const Content = () => {
    return (
        <div>
            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                       <Cards/>
                    </div>
                    <div className="col-sm-4">
                        <Cards/>
                    </div>
                    <div className="col-sm-4">
                        <Cards/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Content