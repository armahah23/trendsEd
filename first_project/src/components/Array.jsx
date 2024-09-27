


function Array() {
    let Car = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

    let feed = [
        {
            name: "john",
            post: "I love to code",
            likes: {
                love: 10,
                sad: 2,
                angry: 1,
                happy: 5,
                care: 3,
            }
        },
        {
            name: "Kavi",
            post: "Very rushed day",
            likes: {
                love: 10,
                sad: 2,
                angry: 1,
                happy: 5,
                care: 3,
            }
        },
        {
            name: "Sutharsan",
            post: "No one can stop me",
            likes: {
                love: 20,
                sad: 2,
                angry: 21,
                happy: 5,
                care: 3,
            }
        },

    ]
    

  return (
    <>
    <h1>Car Items Available in store</h1>
        {Car.map((car)=>(<ul key={car}>
        <li><h3 >{car}</h3></li></ul>))}

        {/* News Feed */}
        <h1>News Feed</h1>
        {feed.map((news)=>(
            <table key={news.name} style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                width: "50%",
                borderCollapse: "collapse"
            }}>
                <tbody>
                    <tr style={{textTransform:"uppercase"}}>
                        <td style={{border: "1px solid black"}}>{news.name}</td>
                        <td style={{border: "1px solid black"}}>{news.post}</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Likes</td>
                        <td style={{border: "1px solid black"}}>
                            <ul>
                                <li>Love: {news.likes.love}</li>
                                <li>Sad: {news.likes.sad}</li>
                                <li>Angry: {news.likes.angry}</li>
                                <li>Happy: {news.likes.happy}</li>
                                <li>Care: {news.likes.care}</li>
                            </ul>
                        </td>
                    </tr> 
                </tbody>
            </table>
        ))}
    </>
  )
}

export default Array