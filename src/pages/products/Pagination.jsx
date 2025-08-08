import "./pagination.css"
const Pagination = ({ pages, currPage, setCurrPage }) => {
    const pagesArray = []
    for (var i = 1; i <= pages; i++) {
        pagesArray.push(i)
    }
    return (
        <div className="pagination">
            <button
                onClick={() => setCurrPage((prev) => prev - 1)}
                className="page previous"
                disabled={currPage === 1}
            >
                <i className="bi bi-arrow-right"></i>
                السابق
            </button>
            {
                pagesArray.map(page => (
                    <div onClick={() => setCurrPage(page)} key={page} className={currPage === page ? "page active" : "page"}>
                        {page}
                    </div>
                ))
            }
            <button
                onClick={() => setCurrPage((prev) => prev + 1)}
                className="page next"
                disabled={currPage === pages}
            >
                التالی
                <i className="bi bi-arrow-left"></i>
            </button>
        </div>
    )
}

export default Pagination