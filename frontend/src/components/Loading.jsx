import "./Loading.css"

const Loading = () => {
    return(
        <section className="d-flex justify-content-center">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Loading;