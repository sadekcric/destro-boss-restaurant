import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaBox, FaCalendarAlt, FaHome, FaList, FaMoneyCheck, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";

const DashBoard = () => {
  const [admin] = useAdmin();
  const isAdmin = admin;

  return (
    <div>
      <div className="flex ">
        <div className="w-[280px] h-screen bg-[#D1A054] text-black font-semibold text-xl">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mt-10">BISTRO BOSS</h3>
            <p className="tracking-[10px] text-center text-sm">RESTAURANT</p>
          </div>

          {isAdmin ? (
            // Admin Panel
            <>
              {/* Admin Link */}
              <ul className="pl-10 mb-8 space-y-5">
                {/* Admin Home */}
                <li>
                  <NavLink to="/dashboard/admin-home" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaHome />
                      <span>Admin Home</span>
                    </div>
                  </NavLink>
                </li>

                {/* Add items */}
                <li>
                  <NavLink to="/dashboard/add-item" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaUtensils />
                      <span>Add Item</span>
                    </div>
                  </NavLink>
                </li>

                {/* ManageItems */}
                <li>
                  <NavLink to="/dashboard/manage-items" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaList />
                      <span>Manage Items</span>
                    </div>
                  </NavLink>
                </li>

                {/* Manage Booking */}
                <li>
                  <NavLink to="/dashboard/manage-booking" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaBook />
                      <span>Manage Bookings</span>
                    </div>
                  </NavLink>
                </li>

                {/* All Users*/}
                <li>
                  <NavLink to="/dashboard/all-users" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaUsers />
                      <span>All Users</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              {/* User Link */}
              <ul className="pl-10 mb-8 space-y-5">
                {/* User Home */}
                <li>
                  <NavLink to="/dashboard/user-home" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaHome />
                      <span>User Home</span>
                    </div>
                  </NavLink>
                </li>

                {/* Reservation */}
                <li>
                  <NavLink to="/dashboard/reservation" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt />
                      <span>Reservation</span>
                    </div>
                  </NavLink>
                </li>

                {/* Payment History */}
                <li>
                  <NavLink to="/dashboard/payment-history" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaMoneyCheck />
                      <span>Payment History</span>
                    </div>
                  </NavLink>
                </li>

                {/* My Cart */}
                <li>
                  <NavLink to="/dashboard/cart" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaShoppingCart />
                      <span>My Cart</span>
                    </div>
                  </NavLink>
                </li>

                {/* Add Review */}
                <li>
                  <NavLink to="/dashboard/add-review" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaUsersViewfinder />
                      <span>Add Review</span>
                    </div>
                  </NavLink>
                </li>

                {/* My Booking */}
                <li>
                  <NavLink to="/dashboard/booking" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                    <div className="flex items-center gap-3">
                      <FaBox />
                      <span>My Booking</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </>
          )}

          <div className=" border-b border-white mx-10"></div>

          {/* Home */}
          <ul className="mt-8 ml-10">
            {/* User Home */}
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
                <div className="flex items-center gap-3">
                  <FaHome />
                  <span>Home</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
