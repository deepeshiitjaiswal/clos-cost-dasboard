import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Updated cost data with more services
const costData = [
  {
    service: "Compute\n(vCPU/hour)",
    aws: 0.0464,
    azure: 0.0448,
    gcp: 0.0456,
    description: "Virtual CPU cost per hour for general purpose instances"
  },
  {
    service: "Memory\n(GB/hour)",
    aws: 0.0058,
    azure: 0.0055,
    gcp: 0.0057,
    description: "Memory cost per GB per hour"
  },
  {
    service: "Storage\n(GB/month)",
    aws: 0.023,
    azure: 0.021,
    gcp: 0.020,
    description: "Block storage cost per GB per month"
  },
  {
    service: "Data Transfer\n(GB)",
    aws: 0.09,
    azure: 0.087,
    gcp: 0.085,
    description: "Outbound data transfer cost per GB"
  },
  {
    service: "Load Balancer\n(hour)",
    aws: 0.025,
    azure: 0.023,
    gcp: 0.024,
    description: "Load balancer cost per hour"
  },
  {
    service: "Database\n(vCPU/hour)",
    aws: 0.277,
    azure: 0.265,
    gcp: 0.270,
    description: "Managed database service cost per vCPU hour"
  }
];

const CustomBarLabel = ({ x, y, width, value }: any) => {
  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill="#888"
      textAnchor="middle"
      fontSize={12}
    >
      ${value.toFixed(4)}
    </text>
  );
};

const ChartTooltipContent = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              Service
            </span>
            <span className="font-bold">{label.replace('\\n', ' ')}</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {payload.map((entry: any) => (
              <div key={entry.name} className="flex flex-col">
                <span
                  className="text-[0.70rem] uppercase text-muted-foreground"
                  style={{ color: entry.color }}
                >
                  {entry.name}
                </span>
                <span className="font-bold">${entry.value.toFixed(4)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function CostComparison() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Cloud Services Cost Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={costData} 
              margin={{ top: 40, right: 40, left: 60, bottom: 40 }}
              barSize={30}
              barGap={2}
            >
              <XAxis 
                dataKey="service" 
                angle={0}
                textAnchor="middle"
                height={60}
                interval={0}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                label={{ 
                  value: 'Cost (USD)', 
                  angle: -90, 
                  position: 'insideLeft',
                  offset: -45,
                  style: { textAnchor: 'middle' }
                }}
                tick={{ fontSize: 12 }}
              />
              <Bar 
                dataKey="aws" 
                name="AWS" 
                fill="#FF9900"
                label={<CustomBarLabel />}
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="azure" 
                name="Azure" 
                fill="#008AD7"
                label={<CustomBarLabel />}
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="gcp" 
                name="Google Cloud" 
                fill="#4285F4"
                label={<CustomBarLabel />}
                radius={[4, 4, 0, 0]}
              />
              <Legend 
                verticalAlign="top"
                height={36}
                iconType="circle"
              />
              <Tooltip 
                content={<ChartTooltipContent />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Detailed Cost Comparison</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[150px]">Service</TableHead>
                  <TableHead className="min-w-[100px]">AWS</TableHead>
                  <TableHead className="min-w-[100px]">Azure</TableHead>
                  <TableHead className="min-w-[100px]">Google Cloud</TableHead>
                  <TableHead className="min-w-[200px]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costData.map((item) => (
                  <TableRow key={item.service}>
                    <TableCell className="font-medium">{item.service.replace('\\n', ' ')}</TableCell>
                    <TableCell>${item.aws.toFixed(4)}</TableCell>
                    <TableCell>${item.azure.toFixed(4)}</TableCell>
                    <TableCell>${item.gcp.toFixed(4)}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}