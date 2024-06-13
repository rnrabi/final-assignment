import { useState } from "react";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ManageUser = () => {
    const [allUsers, isLoading, refetch] = useUsers()
    console.log(allUsers)
    const axiosSecure = useAxiosSecure()
    const [selectUserId, setSelectUserId] = useState(null)
    const [selectUserRoll, setSelectUserRoll] = useState(null)
    // const [selectUserRoll, setSelectUserRoll] = useState(null)

    const handleSelected = (e) => {
        console.log(e.target.value)
        const roll = e.target.value;
        setSelectUserRoll(roll)
    }
    const handleUpdate = async () => {
        console.log(selectUserId, selectUserRoll)
        const updateUser = {
            id: selectUserId,
            roll: selectUserRoll
        }
        const { data } = await axiosSecure.put(`/user/${selectUserId}`, updateUser)
        console.log(data)
        if (data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Updated User",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }

    }


    const openModal = (id) => {
        setSelectUserId(id)
        document.getElementById('my_modal_3').showModal()
    }

    if (isLoading) return <p>Loading.....</p>
    return (
        <div>
            <Helmet>
                <title>Dashboard | ManageUser</title>
            </Helmet>
            <h2 className="text-center text-2xl font-bold">All users here</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((user, idx) => <tr key={user._id}>
                                <td>{idx + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.roll}</td>
                                <td>
                                    <button className="btn" onClick={() => openModal(user._id)}>Update</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}


                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box h-1/2">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
                        </form>


                        <div>
                            <h2>Change the role</h2>
                            <select onBlur={handleSelected} className="select select-bordered w-full max-w-xs">
                                <option>User</option>
                                <option>Seller</option>
                                <option>Admin</option>
                            </select>
                            <div className="flex justify-evenly mt-10">
                                <button onClick={() => handleUpdate()} className="btn">Update</button>
                                <button className="btn">No</button>
                            </div>
                        </div>

                        {/* <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">Change Role</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div> */}

                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default ManageUser;