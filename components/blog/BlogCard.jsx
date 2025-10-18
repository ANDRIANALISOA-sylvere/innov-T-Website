import Image from "next/image";
import Link from "next/link";

export default function BlogCard({id,image, title}){

    
    return(
        <div className="p-3 bg-gradient-to-br from-blue-50 to-green-50
         rounded-2xl text-center shadow-lg transition-all duration-300 w-fit
         hover:scale-101 hover:shadow-xl"> 
            <Image
                className="mb-4 transition-transform duration-300 hover:scale-101 rounded-2xl"
                src={image}
                alt="image"
                width={300}
                height={500}
            />
            <h2 className="font-semibold text-lg transition-colors duration-30 px-2">
                {title}
            </h2>

            <button className="mt-6 cursor-pointer px-8 py-3 bg-blue-800 hover:bg-blue-700 
            text-white rounded-full transition-all duration-300 mx-auto">
                <Link href={`/blog/${id}`}>voir plus d'info</Link>
            </button>
        </div>
    )

}