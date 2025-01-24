import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  provider: "aws" | "azure" | "gcp";
  type: string;
  status: "running" | "stopped" | "error";
  metric?: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, provider, type, status, metric, icon }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            provider === "aws" && "bg-aws-primary/20",
            provider === "azure" && "bg-azure-primary/20",
            provider === "gcp" && "bg-gcp-primary/20"
          )}>
            {icon}
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-400">{type}</p>
          </div>
        </div>
        <div className={cn(
          "px-2 py-1 rounded-full text-xs",
          status === "running" && "bg-green-500/20 text-green-400",
          status === "stopped" && "bg-yellow-500/20 text-yellow-400",
          status === "error" && "bg-red-500/20 text-red-400"
        )}>
          {status}
        </div>
      </div>
      {metric && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-sm text-gray-400">Current Usage</p>
          <p className="text-lg font-semibold">{metric}</p>
        </div>
      )}
    </div>
  );
}