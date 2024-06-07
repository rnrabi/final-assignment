import useBannerAdvertise from "../../../hooks/useBannerAdvertise";


const BannerAdvertise = () => {
    const [allBanner] = useBannerAdvertise()
    console.log(allBanner)

    const handleToggle = e=>{
        console.log(e.target.checked)
    }


    return (
        <div>
            <h2>This is banner advertise</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Seller Email</th>
                            <th>Add/Remove slide</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBanner?.map(banner => <tr key={banner._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={banner.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {banner.name}
                                </td>
                                <td>{banner.description}</td>
                                <td>{banner.sellerEmail}</td>
                                <th>
                                    <input onChange={handleToggle} type="checkbox" className="toggle" />
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BannerAdvertise;