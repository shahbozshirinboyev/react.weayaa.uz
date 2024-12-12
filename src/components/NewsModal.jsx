import React from 'react'

function NewsModal({ news }) {
    const showid = () => {
        console.log(news.id)
    }
    return (
        <>
            <button onClick={() => { document.getElementById(`news_${news.id}`).showModal() }} className="border border-mainColor border-opacity-40 text-mainColor w-[120px] rounded-lg px-2 py-1 mt-4">
                Read More
            </button>



            <dialog id={`news_${news.id}`} className="modal">
                <div className="modal-box p-0 max-w-3xl">
                    {/* Modal header Start */}
          <form
            method="dialog"
            className="border-b-[2px] h-[60px] grid grid-cols-2 items-center px-[24px] "
          >
            <span className="text-custom-green-dark font-bold">
              {news}
            </span>
            <div className="text-end">
              <button className="btn btn-sm border-0 btn-circle text-center items-center ">
              <i className="bi bi-x-lg flex justify-center items-center"></i>
              </button>
            </div>
          </form>
          {/* Modal header End */}
                    <></>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </>
    )
}

export default NewsModal