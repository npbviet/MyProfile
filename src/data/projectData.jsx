import ClientShoppingImg from "../assets/images/projectImg/ClientShopping.png";
import AdminShoppingImg from "../assets/images/projectImg/AdminShopping.png";
import ClientBookingImg from "../assets/images/projectImg/ClientBooking.png";
import AdminBookingImg from "../assets/images/projectImg/AdminBooking.png";
import MovieAppImg from "../assets/images/projectImg/MovieApp.png";
import OrderFoodImg from "../assets/images/projectImg/OrderFood.png";

const projectData = [
  {
    title: "1.1. Website E-commerce",
    subtitle: "(Client App)",
    icon: "fa-solid fa-cart-shopping",
    brief: "An online shopping platform with smooth user experience...",
    details: {
      Describe:
        "A modern e-commerce website that allows users to browse technology products, manage cart, make payments, and track their orders.",
      "Typical functions": [
        "User authentication",
        "Product browsing & filtering",
        "Shopping cart & checkout",
        "Order history",
        "Responsive design",
      ],
      Frontend: "React.js, Vite, Socket.io",
      Backend: "Node.js + Express, MongoDB, Socket.io",
      "Team size": "1 (solo)",
      "Supporting tools":
        "Git, Postman, Redux, React Developer Tools, Nodemailer, Firebase,...",
      Github_FE: "https://github.com/npbviet/ECommerceClient",
      Github_BE: "https://github.com/npbviet/ECommerceServer",
    },
    videoUrl: "https://youtu.be/vkkLqVUXwTU",
    image: ClientShoppingImg,
  },
  {
    title: "1.2. Website E-commerce",
    subtitle: "(Admin App)",
    icon: "fa-solid fa-user-gear",
    brief: "A management dashboard for products, orders, and users...",
    details: {
      Describe:
        "Admin panel for managing the e-commerce platform, including product CRUD, order tracking, and user management.",
      "Typical functions": [
        "Role-based access control",
        "Add/Edit/Delete products",
        "Manage orders & users",
        "Sales statistics dashboard",
        "Image upload & preview",
      ],
      Frontend: "React.js, Vite, Socket.io, Boostrap",
      Backend: "Node.js + Express, MongoDB, Socket.io",
      "Team size": "1 (solo)",
      "Supporting tools":
        "Git, Postman, Redux, React Developer Tools, Firebase,...",
      Github_FE: "https://github.com/npbviet/ECommerceAdmin",
      Github_BE: "https://github.com/npbviet/ECommerceServer",
    },
    videoUrl: "https://youtu.be/YnZDnpijQmc",
    image: AdminShoppingImg,
  },

  {
    title: "2.1. Booking Website",
    subtitle: "(Client App)",
    icon: "fa-solid fa-calendar-check",
    brief: "A booking application for scheduling services online...",
    details: {
      Describe:
        "Users can browse available services, choose time slots, make appointments, and review their booking history.",
      "Typical functions": [
        "Service selection & time slot",
        "User login/register",
        "Booking confirmation",
        "Booking history",
        "Responsive UI",
      ],
      Frontend: "React.js, Vite",
      Backend: "Node.js + Express, MongoDB",
      "Team size": "1 (solo)",
      "Supporting tools":
        "Git, Postman, React Context, React Developer Tools, Firebase,...",
      Github_FE: "https://github.com/npbviet/BookingClientApp",
      Github_BE: "https://github.com/npbviet/BookingServer",
    },
    videoUrl: "https://youtu.be/koxbJmSzW3k",
    image: ClientBookingImg,
  },
  {
    title: "2.2. Booking Website",
    subtitle: "(Admin App)",
    icon: "fa-solid fa-user-gear",
    brief: "A control panel to manage services...",
    details: {
      Describe:
        "Admin can create and manage service lists, monitor bookings, and view statistics about business performance.",
      "Typical functions": [
        "Add/Edit/Delete services",
        "Manage availability",
        "Confirm/cancel bookings",
        "View client history",
        "Booking statistics",
      ],
      Frontend: "React.js, Vite",
      Backend: "Node.js + Express, MongoDB",
      "Team size": "1 (solo)",
      "Supporting tools":
        "Git, Postman, React Context, React Developer Tools, Firebase,...",
      Github_FE: "https://github.com/npbviet/BookingAdminApp",
      Github_BE: "https://github.com/npbviet/BookingServer",
    },
    videoUrl: "https://youtu.be/Ot4lefJkYZs",
    image: AdminBookingImg,
  },
  {
    title: "3. Movie Watch Website",
    subtitle: "",
    icon: "fa-solid fa-film",
    brief: "A platform to explore and watch movie trailers...",
    details: {
      Describe:
        "Users can browse movies by genre, view trailers, read descriptions, and explore cast information.",
      "Typical functions": [
        "Trailer streaming (YouTube API)",
        "Genre-based browsing",
        "Movie details and ratings",
        "Search functionality",
        "Cast information",
      ],
      Frontend: "React.js, Vite",
      Backend: "Node.js + Express, MongoDB",
      "Team size": "1 (solo)",
      "Supporting tools": "Git, Postman,  React Developer Tools, Firebase,...",
      Github_FE: "https://github.com/npbviet/MovieAppClient",
      Github_BE: "https://github.com/npbviet/MovieAppServer",
    },
    videoUrl: "https://youtu.be/OhPg01TYJjQ",
    image: MovieAppImg,
  },
  {
    title: "4. Order Food App",
    subtitle: "",
    icon: "fa-solid fa-utensils",
    brief: "A food delivery app that allows users to order meals online...",
    details: {
      Describe:
        "Users can browse menus by restaurants, place orders, and track order status in real-time.",
      "Typical functions": [
        "Browse food by restaurant",
        "Cart and checkout",
        "Track order status",
        "Login/register",
        "Location-based suggestions",
      ],
      Frontend: "React.js, Vite",
      Backend: "Node.js + Express, MongoDB",
      "Team size": "1 (solo)",
      "Supporting tools": "Git, React Developer Tools, ...",
      Github_FE: "https://github.com/npbviet/Order-Food",
    },
    videoUrl: "https://youtu.be/MvWfVTcnhkE",
    image: OrderFoodImg,
  },
];
export default projectData;
