import "./Home.scss"
import Hero from "../../components/hero/Hero"
import Nav from "../../layout/nav/Nav"
import Main from "../../components/main/Main"

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Main/>
        </>
    )
}

export default Home