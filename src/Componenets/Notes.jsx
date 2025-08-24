import React from "react";


const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: "Note",
      tag: "To Do",
      text: "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
      associations: "1 Association(s)",
      author: "John Doe",
      date: "Jul 12, 2023, 11:54 am",
    },
    {
      id: 2,
      type: "Note",
      tag: "To Do",
      text: "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
      associations: "1 Association(s)",
      author: "John Doe",
      date: "Jul 12, 2023, 11:54 am",
    },
    {
      id: 3,
      type: "Note",
      tag: "To Do",
      text: "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.",
      associations: "1 Association(s)",
      author: "John Doe",
      date: "Jul 12, 2023, 11:54 am",
    },
  ];

  return (
    <div className="activity-feed">
      {/* Top icons */}
      <div className="icon-row">
        <button className="icon-btn active"><i class='bxr  bx-note '  ></i> </button>
        <button className="icon-btn"><i class='bxr  bx-phone-ring'  ></i> </button>
        <button className="icon-btn"><i class='bxr  bx-check-circle'  ></i> </button>
        <button className="icon-btn"><i class='bxr  bx-calendar-event'  ></i> </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab active">All</button>
        <button className="tab">Notes & Calls</button>
        <button className="tab">Tasks</button>
        <button className="tab">Meeting</button>
        <button className="tab">Files</button>
      </div>

      {/* Activity list */}
      <div className="activity-list">
        {activities.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <div className="activity-header">
              <span className="flex items-center gap-2 type">
                <span className="icon-btn"><i class='bxr  bx-note bx-xs'  ></i></span>{activity.type}</span>
              <span className="tag">{activity.tag}</span>
            </div>
            <p className="activity-text">{activity.text}</p>
            <a href="#" className="link">
              {activity.associations}
            </a>
            <div className="activity-footer">
              <span className=" author"><i class='bxr  bx-user-circle bx-xs'  ></i>  {activity.author}</span>
              <span className="  date"><i class='bxr  bx-clock-3 bx-xs'  ></i>  {activity.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
