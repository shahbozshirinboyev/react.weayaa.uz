import React from "react";

function NewsModal({ news }) {
  console.log(news);
  return (
    <>
      <button
        onClick={() => {
          document.getElementById(`news_${news.id}`).showModal();
        }}
        className="text-mainColor btn btn-sm mt-3 bg-mainColor bg-opacity-20 border-0 hover:bg-mainColor hover:text-white"
      >
        Read more
      </button>

      <dialog id={`news_${news.id}`} className="modal">
        <div className="modal-box p-0 max-w-3xl">
          {/* Modal header Start */}
          <form
            method="dialog"
            className="border-b-[2px] h-[60px] grid grid-cols-2 items-center px-[24px] "
          >
            <span className="text-custom-green-dark font-bold text-mainColor">
              {news.title}
            </span>
            <div className="text-end">
              <button className="btn btn-sm border-0 btn-circle text-center items-center text-mainColor bg-mainColor bg-opacity-20 hover:bg-mainColor hover:text-white">
                <i className="bi bi-x-lg flex justify-center items-center"></i>
              </button>
            </div>
          </form>
          {/* Modal header End */}
          <div className="px-4">
            <img src={news.img} alt="" className="rounded-lg my-4" />
            <span className="px-2 py-1 rounded-xl text-mainColor bg-mainColor bg-opacity-20 border-0 text-sm font-semibold">{news.date}</span>
            <p className="text-mainColor py-2 pb-4">{news.info}</p>
            {news.liks && <button className="btn btn-sm mb-4 mt-2 text-mainColor bg-mainColor bg-opacity-20"><i class="bi bi-link-45deg"></i><span>Link</span></button>}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default NewsModal;
