import React from "react";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";
import style from "./Chart.module.css";

const data = [
  { name: " A", value: 14 },
  { name: " B", value: 8 },
  { name: " C", value: 2 },
];

const COLORS = ["rgb(78, 183, 143)", "rgb(220, 153, 37) ", "rgb(223, 46, 81) "];
const Chart = () => {
  return (
    <>
      <div className={` ${style.chart}`}>
        <div>
          <div className="pb-2 mx-auto">
            <strong>Payroll Status Of This Month</strong>
          </div>
          <ResponsiveContainer width="100%" maxHeight={400} aspect={1}>
            <PieChart width={320} height={160}>
              <Pie
                data={data}
                cx={100}
                cy={80}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                stroke="none"
                dataKey="value"
              >
                <Label
                  position="center"
                  formatter={() => 24}
                  fill="white"
                  value={400}
                  style={{ fontWeight: 700, fontSize: 25 }}
                />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="">
          <ul className="p-0">
            <span>18</span>
            <li className="off-white">vishal</li>
            <span>8</span>
            <li className="off-white">Delayed Clearance</li>
            <span>2</span>
            <li className="off-white">vishal</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Chart;
