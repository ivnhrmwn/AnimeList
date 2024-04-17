const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleFirstPage = () => {
        setPage((prevState) => prevState = 1)
        scrollTop()
    }

    const handleLastPage = () => {
        setPage((prevState) => prevState = lastPage)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page <= 1 ? null :
            <>
                <button className="transition-all hover:text-color-accent underline" onClick={handleFirstPage}>FirstPage</button>
                <button className="transition-all hover:text-color-accent underline" onClick={handlePrevPage}>Prev</button>
            </>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
            <>
                <button className="transition-all hover:text-color-accent underline" onClick={handleNextPage}>Next</button>
                <button className="transition-all hover:text-color-accent underline" onClick={handleLastPage}>LastPage</button>
            </>
            }
        </div>
    )
}

export default Pagination