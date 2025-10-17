export default function ExpertisesCard({title, stat, statLabel}){
    return(
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 flex hover:scale-105 hover:shadow-lg transition-all">
            <div className="p-3 flex-1">
                <h3 className="text-lg text-gray-800">{title}</h3>
            </div>
            <div className="border-l-2 border-gray-300 p-3 text-end">
                <span className="text-4xl font-bold text-green-500">{stat}</span>
                <p className="text-gray-800">{statLabel}</p>
            </div>
        </div>
    )
}