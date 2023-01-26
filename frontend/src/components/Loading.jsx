import "./Loading.css"

const Loading = () => {
    return(
        <section className="d-flex justify-content-center">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Loading;