import { NavLink, Outlet } from "react-router-dom";
import useRoll from "../../hooks/useRoll";


const Dashboard = () => {
  const { roll, isLoading } = useRoll()
  console.log(roll?.roll)
  if (!roll?.roll && isLoading) return <span>Spinner .... </span>
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-64 min-h-screen bg-slate-700">

          {/* Admin dashboard start */}
          {
            roll?.roll === 'admin' && <ul className="text-center text-xl">
              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/adminHome' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Home</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/manageUsers' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Manage Users</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/manageCategory' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Manage Category</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/paymentManagement' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Payment Management</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/salesReport' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Sales Report</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/bannerAdvertise' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Manage Banner Advertise</NavLink></li>
            </ul>
          }
          {/* Admin dashboard end */}



          {/* seller dashboard start */}
          {
            roll?.roll === 'seller' && <ul className="text-center text-xl">
              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerHome' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Home</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerMedicine' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Manage Medicine</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerPaymentHistory' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Payment History</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerAdvertisement' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Ask for Advertisement</NavLink></li>
            </ul>
          }
          {/* seller dashboard end */}




          {/* user dashboard start  */}
          {
            roll?.roll === 'user' && <ul className="text-center text-xl">
              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/userPaymentHistories' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ''}>Payment Histories</NavLink></li>
            </ul>
          }
          {/* user dashboard end */}


        </div>


        <div className="flex-1">
          <Outlet></Outlet>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;