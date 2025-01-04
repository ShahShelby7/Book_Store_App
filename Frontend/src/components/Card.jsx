export default function Card({book}){
    return(
        <div className="mt-10">
            {/* card from tailwind */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 mr-5">
                <figure>
                    <img className="h-40"
                    src={book.imgURL}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {book.title}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Written By {book.name}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline mt-4 hover:bg-red-500 hover:text-white-500">${book.price}</div>
                        <div className="btn h-5 w-30 rounded-full hover:bg-red-500 hover:text-white-500">Buy Now</div>
                    </div>
                </div>
                </div>
        </div>
    )
}