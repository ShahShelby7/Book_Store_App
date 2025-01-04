import { books } from "../booksList";
import Card from "./Card";

export default function Course(){
    return(
        <>
        <div className="max-w-screen-2xl min-h-screen container mx-auto md:px-16 px-4">
            {/* welcome content div */}
            <div className="mt-40 item-center justify-center text-center">
                <h1 className="text-2xl md:text-4xl">We are delighted to welcome you <span className="text-red-500">Here ' ^ '</span></h1>
                <p className="mt-8">Here are some paid book courses for you specially Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iste laborum numquam quae. Odit, in nemo perspiciatis omnis beatae ratione, laboriosam dolore temporibus libero error totam, modi voluptate aut officia</p>
                <button className=" mt-8 btn bg-red-500 text-white"><a href="/">Back</a></button> {/*or you can use <Link to="/ >button</Link> */}
            </div>
            {/* cards div */}
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {books.map(item=>(
                    <Card book={item} key={item.id}/>
                ))}
            </div>
        </div>
        </>
    )
}