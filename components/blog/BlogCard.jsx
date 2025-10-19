import Image from "next/image";
import Link from "next/link";

export default function BlogCard({id, image, title}){
    
    return(
        <div className="bg-gradient-to-br from-blue-800 to-green-600
         rounded-2xl text-center shadow-lg transition-all duration-300 
         hover:scale-105 hover:shadow-xl w-[280px]"> 
            {/* Image avec padding harmonisé et taille réduite */}
            <div className="p-2"> 
                <div className="w-full h-[280px] relative overflow-hidden rounded-xl">
                    <Image
                        className="transition-transform duration-300 hover:scale-105"
                        src={image}
                        alt="image"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
            
            <h2 className="font-semibold text-lg text-white px-4 mb-3">
                {title}
            </h2>

            {/* Bouton avec fond bleu */}
            <div className="pb-3">
                <Link href={`/blog/${id}`}>
                    <button className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 
                    text-white rounded-full transition-all duration-300 text-sm font-medium">
                        Voir plus d'info
                    </button>
                </Link>
            </div>
        </div>
    )
}