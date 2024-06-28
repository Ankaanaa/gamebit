import "./Post.scss"


const Post = (props) => {
    return (
        <article className={`post ${props.lastBlockClass ? props.lastBlockClass: ""}`}>
            <a href="#" className="post__a">
                <div className="post__img"><img className="post__icn" src={props.img} alt="" /></div>
                <h3 className="post__text">{props.text}</h3>
            </a>
        </article>
    )
}



export default Post;