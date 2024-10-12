export default function AdminDashboard() {
  const notices = [
    {
      id: 1,
      title: "General Meeting",
      content: "Annual general meeting will be held...",
      date: "2024-10-05",
    },
    {
      id: 2,
      title: "New Website Design",
      content: "New website design will be implemented...",
      date: "2024-10-15",
    },
    {
      id: 3,
      title: "Meeting Reminder",
      content: "Meeting with client will be scheduled...",
      date: "2024-10-20",
    },
    {
      id: 4,
      title: "Project Update",
      content: "Project progress report will be submitted...",
      date: "2024-10-25",
    },
  ];

  return (
    <div className=" maxWidth min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Manage Notices</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <ul>
              {notices.map((notice) => (
                <li key={notice.id} className="mb-4">
                  <h3 className="text-lg font-bold">{notice.title}</h3>
                  <p>{notice.content}</p>
                  <p className="text-sm text-gray-500">
                    Posted on: {notice.date}
                  </p>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Add Notice
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
