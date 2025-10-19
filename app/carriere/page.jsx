'use client';

export default function Carriere(){
    return(
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Message avec fond dégradé */}
                <div className="bg-gradient-to-r from-blue-800 to-green-600 text-white p-12 rounded-xl shadow-lg">
                    <h1 className="text-4xl font-bold mb-6">
                        Page Carrière
                    </h1>
                    <p className="text-xl mb-4">
                        🚧 En cours de développement 🚧
                    </p>
                    <p className="text-lg opacity-90">
                        Notre section carrière n'est pas encore disponible. 
                        <br />
                        Nous travaillons actuellement sur la mise en place de notre backoffice 
                        pour vous offrir la meilleure expérience de recrutement.
                    </p>
                    <p className="text-lg mt-6 opacity-90">
                        Revenez très bientôt pour découvrir nos offres d'emploi !
                    </p>
                </div>
            </div>
        </div>
    )
}