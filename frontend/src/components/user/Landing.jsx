function Landing(props){
    return (
        <div className="landing-main">
            {(props.name || "DEMO USER")}
        </div>
    )
}
export default Landing;