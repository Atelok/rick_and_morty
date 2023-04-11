import rick from "../RICK AND MORTY ARTICLE.jpg"
import morty from "../RICK AND MORTY ARTICLE 2.png"
import style from "./Article.module.css"

const Article = () => {
return(
    
        <article className={style.article}>
            <img src={rick} alt="rickymorty" />
            <img src={morty} alt="rickymorty2" />
        </article>

)

}

export default Article;