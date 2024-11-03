import Package from "../GymPackage/GymPackage"


const Packages = () => {

    const GymPackages = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Free fitness assessment",
                "Group classes (limited)",
                "Access to locker rooms"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Free fitness assessment",
                "Unlimited group classes",
                "Access to locker rooms",
                "Discount on personal training"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "All Standard Membership features",
                "Access to sauna and steam rooms",
                "Free guest passes (2/month)",
                "Priority booking for classes",
                "One complimentary personal training session"
            ]
        }
    ]


    return (
        <div>
            <h1 className="text-white text-center text-5xl my-8 font-bold">Best Prices in Town</h1>
            <div className="grid grid-cols-3">
                {
                    GymPackages.map(option => <Package key={option.id} option={option}></Package>)
                }

            </div>
        </div>
    )

}

export default Packages