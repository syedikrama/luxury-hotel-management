// This file contains additional components for HMS Dashboard based on your requirements

import { useState, useEffect } from "react";
import RoomCards from "./RoomCards/RoomCards"
// import { RoomCards } from "./RoomCards/RoomCards";
// import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data for the revenue chart
const revenueData = [
  { name: "Mon", revenue: 400 },
  { name: "Tue", revenue: 300 },
  { name: "Wed", revenue: 500 },
  { name: "Thu", revenue: 700 },
  { name: "Fri", revenue: 600 },
  { name: "Sat", revenue: 800 },
  { name: "Sun", revenue: 650 },
];

const DashboardExtra = () => {
  const [checkIns, setCheckIns] = useState(0);
  const [checkOuts, setCheckOuts] = useState(0);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);

  useEffect(() => {
    // Dummy data fetching simulation
    setCheckIns(8);
    setCheckOuts(5);
    setMaintenanceRequests([
      { id: 1, room: "202", issue: "AC not working" },
      { id: 2, room: "105", issue: "Water leakage" },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4">
      {/* Check-in / Check-out summary */}
      <RoomCards>
        <CardContent className="p-4">
          <h4 className="text-lg font-semibold mb-2">Today's Summary</h4>
          <p>✅ Check-ins: {checkIns}</p>
          <p>🚪 Check-outs: {checkOuts}</p>
        </CardContent>
      </RoomCards>

      {/* Maintenance Requests */}
      <RoomCards>
        <CardContent className="p-4">
          <h4 className="text-lg font-semibold mb-2">Maintenance Issues</h4>
          <ul className="space-y-1 text-sm">
            {maintenanceRequests.map((req) => (
              <li key={req.id}>🔧 Room {req.room}: {req.issue}</li>
            ))}
          </ul>
        </CardContent>
      </RoomCards>

      {/* Revenue Chart */}
      <RoomCards className="col-span-1 xl:col-span-1 xl:col-start-3">
        <CardContent className="p-4">
          <h4 className="text-lg font-semibold mb-2">Weekly Revenue</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#f39c12" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </RoomCards>

      {/* Quick Actions */}
      <RoomCards className="col-span-full">
        <CardContent className="flex flex-wrap gap-4 p-4">
          <h4 className="text-lg font-semibold w-full">Quick Actions</h4>
          <Button variant="outline">➕ New Booking</Button>
          <Button variant="outline">🧾 Generate Invoice</Button>
          <Button variant="outline">📊 Monthly Report</Button>
          <Button variant="outline">➕ Add Room</Button>
          <Button variant="outline">👤 Add Staff</Button>
        </CardContent>
      </RoomCards>
    </div>
  );
};

export default DashboardExtra;
