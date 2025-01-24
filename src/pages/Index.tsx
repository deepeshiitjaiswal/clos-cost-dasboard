import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ServiceCard } from "@/components/ServiceCard";
import { CostComparison } from "@/components/CostComparison";
import { Server, Database, Cloud, HardDrive, Globe, Lock, Cpu, Box, BrainCircuit } from "lucide-react";

const services = [
  // Compute Services
  {
    title: "AWS Lambda",
    provider: "aws" as const,
    type: "Compute",
    status: "running" as const,
    metric: "1M free requests/month",
    icon: <Cloud className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "EC2",
    provider: "aws" as const,
    type: "Compute",
    status: "running" as const,
    metric: "750 hours/month",
    icon: <Server className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "ECS",
    provider: "aws" as const,
    type: "Container",
    status: "running" as const,
    metric: "Free tier eligible",
    icon: <Box className="h-5 w-5 text-aws-primary" />,
  },
  // Storage Services
  {
    title: "S3",
    provider: "aws" as const,
    type: "Storage",
    status: "running" as const,
    metric: "5GB Standard Storage",
    icon: <HardDrive className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "EBS",
    provider: "aws" as const,
    type: "Storage",
    status: "running" as const,
    metric: "30GB free",
    icon: <HardDrive className="h-5 w-5 text-aws-primary" />,
  },
  // Database Services
  {
    title: "RDS",
    provider: "aws" as const,
    type: "Database",
    status: "running" as const,
    metric: "750 hours/month",
    icon: <Database className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "DynamoDB",
    provider: "aws" as const,
    type: "Database",
    status: "running" as const,
    metric: "25GB storage",
    icon: <Database className="h-5 w-5 text-aws-primary" />,
  },
  // Network Services
  {
    title: "CloudFront",
    provider: "aws" as const,
    type: "CDN",
    status: "running" as const,
    metric: "1TB data transfer/month",
    icon: <Globe className="h-5 w-5 text-aws-primary" />,
  },
  // Security Services
  {
    title: "IAM",
    provider: "aws" as const,
    type: "Security",
    status: "running" as const,
    metric: "Always Free",
    icon: <Lock className="h-5 w-5 text-aws-primary" />,
  },
  // Machine Learning
  {
    title: "Amazon SageMaker",
    provider: "aws" as const,
    type: "Machine Learning",
    status: "running" as const,
    metric: "250 hours/month",
    icon: <BrainCircuit className="h-5 w-5 text-aws-primary" />,
  },
  // Azure and GCP services
  {
    title: "EC2 Instance",
    provider: "aws" as const,
    type: "Compute",
    status: "running" as const,
    metric: "CPU: 75%",
    icon: <Server className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "S3 Storage",
    provider: "aws" as const,
    type: "Storage",
    status: "running" as const,
    metric: "Usage: 2.1TB",
    icon: <HardDrive className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "Azure VM",
    provider: "azure" as const,
    type: "Compute",
    status: "running" as const,
    metric: "Memory: 60%",
    icon: <Server className="h-5 w-5 text-azure-primary" />,
  },
  {
    title: "Azure Blob Storage",
    provider: "azure" as const,
    type: "Storage",
    status: "running" as const,
    metric: "Usage: 1.8TB",
    icon: <HardDrive className="h-5 w-5 text-azure-primary" />,
  },
  {
    title: "Google Compute Engine",
    provider: "gcp" as const,
    type: "Compute",
    status: "running" as const,
    metric: "CPU: 82%",
    icon: <Server className="h-5 w-5 text-gcp-primary" />,
  },
  {
    title: "Google Cloud Storage",
    provider: "gcp" as const,
    type: "Storage",
    status: "running" as const,
    metric: "Usage: 1.5TB",
    icon: <HardDrive className="h-5 w-5 text-gcp-primary" />,
  },
  {
    title: "RDS Database",
    provider: "aws" as const,
    type: "Database",
    status: "running" as const,
    metric: "IOPS: 1000",
    icon: <Database className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "Azure SQL",
    provider: "azure" as const,
    type: "Database",
    status: "running" as const,
    metric: "IOPS: 850",
    icon: <Database className="h-5 w-5 text-azure-primary" />,
  },
  {
    title: "Cloud SQL",
    provider: "gcp" as const,
    type: "Database",
    status: "running" as const,
    metric: "IOPS: 920",
    icon: <Database className="h-5 w-5 text-gcp-primary" />,
  },
  {
    title: "AWS Lambda",
    provider: "aws" as const,
    type: "Serverless",
    status: "running" as const,
    metric: "Invocations: 1.2K/min",
    icon: <Cloud className="h-5 w-5 text-aws-primary" />,
  },
  {
    title: "Azure Functions",
    provider: "azure" as const,
    type: "Serverless",
    status: "running" as const,
    metric: "Invocations: 950/min",
    icon: <Cloud className="h-5 w-5 text-azure-primary" />,
  },
  {
    title: "Cloud Functions",
    provider: "gcp" as const,
    type: "Serverless",
    status: "running" as const,
    metric: "Invocations: 1K/min",
    icon: <Cloud className="h-5 w-5 text-gcp-primary" />,
  }
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Cloud Services Dashboard</h1>
              <p className="text-gray-400">Monitor your cloud resources and costs across providers</p>
            </div>
            <SidebarTrigger />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                provider={service.provider}
                type={service.type}
                status={service.status}
                metric={service.metric}
                icon={service.icon}
              />
            ))}
          </div>

          <CostComparison />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
