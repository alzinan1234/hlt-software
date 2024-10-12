"use client";

export default function Dashboard() {
  const payments = [
    { date: "2024-10-01", amount: 500 },
    { date: "2024-09-01", amount: 500 },
    {
      date: "2024-08-01",
      amount: 500,
    },
    {
      date: "2024-08-01",
      amount: 500,
    },
    {
      date: "2024-08-01",
      amount: 500,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">User Dashboard</h1>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Number:</strong> 01788499970
            </p>
            <p>
              <strong>Membership Date:</strong> 2023-08-15
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Monthly Payments</h2>
          <div className="bg-white p-6 shadow-md rounded-md">
            <ul>
              {payments.map((payment, idx) => (
                <li key={idx} className="flex justify-between py-2 border-b">
                  <span>{payment.date}</span>
                  <span>${payment.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
