import Title from "@/components/common/Title";
import ServiceCard from "@/components/services/ServiceCard";

export default function ServicesPage(){
    return(
        <div className="max-h-full py-10 px-10 flex flex-col items-center">
            <div>
                <Title title="Découvrez nos services" />
            </div>
            <p className="text-gray-800 mb-10">Découvrez le service numérique qui correspond à vos besoins</p>
            <input 
                type="text" 
                placeholder="rechercher"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <div className=" mt-8 p-5 grid grid-cols-3 gap-5">
                <ServiceCard 
                    icon={ "test" }
                    title={ "Développement de site internet et E-commerce" }
                    description={"wertyuioiuytrewsdfghjiuytrertyuikjhgfdwertyujuytresdcvbnmjkuytrertyujikhgtrertyujkhgfdertyjhgtrfedrtyujkhgfrdeert"}
                />
                <ServiceCard 
                    icon={ "test" }
                    title={ "Développement de site internet et E-commerce" }
                    description={"wertyuioiuytrewsdfghjiuytrertyuikjhgfdwertyujuytresdcvbnmjkuytrertyujikhgtrertyujkhgfdertyjhgtrfedrtyujkhgfrdeert"}
                />
                <ServiceCard 
                    icon={ "test" }
                    title={ "Développement de site internet et E-commerce" }
                    description={"wertyuioiuytrewsdfghjiuytrertyuikjhgfdwertyujuytresdcvbnmjkuytrertyujikhgtrertyujkhgfdertyjhgtrfedrtyujkhgfrdeert"}
                />
                <ServiceCard 
                    icon={ "test" }
                    title={ "Développement de site internet et E-commerce" }
                    description={"wertyuioiuytrewsdfghjiuytrertyuikjhgfdwertyujuytresdcvbnmjkuytrertyujikhgtrertyujkhgfdertyjhgtrfedrtyujkhgfrdeert"}
                />
                <ServiceCard 
                    icon={ "test" }
                    title={ "Développement de site internet et E-commerce" }
                    description={"wertyuioiuytrewsdfghjiuytrertyuikjhgfdwertyujuytresdcvbnmjkuytrertyujikhgtrertyujkhgfdertyjhgtrfedrtyujkhgfrdeert"}
                />
            </div>
        </div>
    )
}