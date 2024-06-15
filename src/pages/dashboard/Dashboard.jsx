import { NavLink, Outlet } from "react-router-dom";
import useRoll from "../../hooks/useRoll";
import { Helmet } from "react-helmet-async";
import { FaCartPlus } from "react-icons/fa";
import useMyCarts from "../../hooks/useMyCarts";
import { IoHome } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdCategory } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa6";
import { GiMedicinePills } from "react-icons/gi";


const Dashboard = () => {
  const { roll, isLoading } = useRoll()
  // //console.log(roll?.roll)
  const [myCarts] = useMyCarts()
  if (!roll?.roll && isLoading) return <span>Spinner .... </span>
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="flex justify-between">
        <div className="w-64 min-h-screen bg-slate-700">

          {/* Admin dashboard start */}
          {
            roll?.roll === 'admin' && <ul className="text-center text-xl">
              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/adminHome' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <IoHome></IoHome> Admin Home</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/manageUsers' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><HiUserGroup></HiUserGroup> Manage Users</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/manageCategory' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><MdCategory></MdCategory> Manage Category</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/paymentManagement' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><RiSecurePaymentLine></RiSecurePaymentLine> Payment Management</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/salesReport' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><FcSalesPerformance></FcSalesPerformance> Sales Report</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/bannerAdvertise' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><RiAdvertisementFill></RiAdvertisementFill> Manage Banner Advertise</NavLink></li>

              <div className="divider divider-neutral"></div>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <IoHome></IoHome> Home</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/shop' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <FaShopify></FaShopify> Shop</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/myCart' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ' flex items-center justify-center gap-3'}><FaCartPlus />{myCarts?.length}</NavLink></li>
            </ul>
          }
          {/* Admin dashboard end */}



          {/* seller dashboard start */}
          {
            roll?.roll === 'seller' && <ul className="text-center text-xl">
              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerHome' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><IoHome></IoHome> Seller Home</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerMedicine' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><GiMedicinePills></GiMedicinePills> Manage Medicine</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerPaymentHistory' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><RiSecurePaymentLine></RiSecurePaymentLine> Payment History</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/sellerAdvertisement' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <RiAdvertisementFill></RiAdvertisementFill> Ask for Advertisement</NavLink></li>

              <div className="divider divider-neutral"></div>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <IoHome></IoHome> Home</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/shop' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <FaShopify></FaShopify> Shop</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/myCart' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ' flex items-center justify-center gap-3'}><FaCartPlus />{myCarts?.length}</NavLink></li>
            </ul>
          }
          {/* seller dashboard end */}




          {/* user dashboard start  */}
          {
            roll?.roll === 'user' && <ul className="text-center text-xl">
              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <IoHome></IoHome> Home</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/shop' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}> <FaShopify></FaShopify> Shop</NavLink></li>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/myCart' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200' : ' flex items-center justify-center gap-3'}><FaCartPlus />{myCarts?.length}</NavLink></li>

              <div className="divider divider-neutral"></div>

              <li className="bg-slate-500 p-2 rounded-lg mb-2"><NavLink to='/dashboard/userPaymentHistories' className={({ isActive }) => isActive ? 'font-bold underline  w-full  text-slate-200 flex items-center justify-center gap-3' : 'flex items-center justify-center gap-3'}><RiSecurePaymentLine></RiSecurePaymentLine> Payment Histories</NavLink></li>
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