import { useState } from 'react'
// import StackCard from "./StackCard"

function Home() {
    // const [stackCard, setStackCard] = useState({
    //     id : '',
    //     title : "title",
    //     image : "image",
    //     description : "description"
    // })
    // const cardsToDisplay = () => {
    //     <StackCard
    //         key={stackCard.id}
    //         title={stackCard.title}
    //         image={stackCard.image}
    //         description={stackCard.description}
    //     />
    // }

    return(
        <div className="homepage">
            <div>
                <h1>Hello, my name is Brady Dorsey,</h1>
                <h1>I am a Software Engineer.</h1>
            </div>
            <div className="homeBodyText">
                <div>
                <h5>
                    I specialize in web development with a strong foundation 
                    in HTML, CSS, and JavaScript. I am currently attending
                    Flatiron School in the Software Engineering program where 
                    I study to improve my problem-solving skills and 
                    building interactive real-world applications.
                </h5>
                </div>
                <div className="homeStackText">
                    <div>
                        <h5>
                            Skills:
                        </h5>
                    </div>
                    <div>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Bootstrap
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                C++
                            </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home