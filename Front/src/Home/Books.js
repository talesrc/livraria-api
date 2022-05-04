import './Books.css';
function Books(){
    return(
        <div className="main-div">

            <h1>DESTAQUES DA SEMANA: </h1>

            <div className="box">
                <a href="src/Home/Books"><img src="o auto da compadecida.jpg" alt="livro o auto da compadecida" className="book"/></a>
                <h2><a href="src/Home/Books">O Auto da Compadecida</a></h2>
            </div>

            <div className="box">
                <a href="src/Home/Books"><img src="it.jpeg" alt="livro it: a coisa" className="book"/></a>
                <h2><a href="src/Home/Books">It: a coisa</a></h2>
            </div>

            <div className="box">
                <a href="src/Home/Books"><img src="a revolução dos bichos.jpg" alt="Livro a revolução dos bichos" className="book"/></a>
                <h2><a href="src/Home/Books">A Revolução dos Bichos</a></h2>
            </div>
        </div>
    );
}

export default Books;