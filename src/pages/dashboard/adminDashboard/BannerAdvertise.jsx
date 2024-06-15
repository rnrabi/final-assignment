import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBannerAdvertise from "../../../hooks/useBannerAdvertise";


const BannerAdvertise = () => {
    const [allBanner] = useBannerAdvertise()
    const axiosSecure = useAxiosSecure();

    const handleToggle = async (e, image) => {
        const addRemove = e.target.checked;
        // //console.log(image)

        if (addRemove) {
            const { data } = await axiosSecure.put('/banner', { image })
            if (data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `add to banner`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            if (data.exist) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `already have been added banner`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        else {
            const { data } = await axiosSecure.delete(`/banner?image=${image}`)
            if (data.deletedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Remove from banner`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div>
            <h2 className="text-center font-bold text-2xl my-5">Banner advertisement</h2>
            <div className="overflow-x-auto">
                <table className="table">
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
                                    <input onChange={(e) => handleToggle(e, banner.image)} type="checkbox" className="toggle" />
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