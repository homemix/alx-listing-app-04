interface Property {
    id: number;
    title: string;
    price: number;
    location: string;
    image: string;
}

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-bold">{property.title}</h2>
                <p className="text-gray-600">{property.location}</p>

                <p className="mt-2 text-indigo-600 font-semibold">
                    ${property.price} / night
                </p>
            </div>
        </div>
    );
}
