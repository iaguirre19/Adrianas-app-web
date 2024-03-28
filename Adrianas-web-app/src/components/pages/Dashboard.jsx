import Header from "../dashboardComponents/headerNav/Header";
import UserPanel from "../dashboardComponents/insights-panel/UserInsightsPanel";
import "../../styles/dashboard-styles/DashboardStyles.css";

const Dashboard = () => {
  const userData = {
    name: "Merlina",
    lastName: "Adams Rodriguez",
    profilePicture: "/src/assets/images/profile-picture.jpg",
    notifications: {
      counter: 2,
      textNotifications: [
        {
          title: "Your last bill is overdue.",
          message: " Please pay it as soon as possible to avoid late fees.",
          type: "billing",
          date: "04/05/24",
        },
        {
          title: "Your next payment is due soon.",
          message:
            "Your next payment is due soon. Please be prepared to make it on time.",
          type: "reminder",
          date: "03/06/24",
        },
      ],
    },
  };

  return (
    <div className="dashboard">
      <Header userData={userData} />
      <div className="user-greeting">
        <h2>{`Wellcome Back, ${userData.name}`}</h2>
      </div>
      <UserPanel />     
    </div>
  );
};

export default Dashboard;
