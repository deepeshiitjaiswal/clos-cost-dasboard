# Cloud Cost Dashboard

A modern, interactive dashboard for comparing cloud service costs across AWS, Azure, and Google Cloud Platform. Built with React, TypeScript, and Recharts.

## Features

- 📊 Interactive cost comparison graphs
- 📋 Detailed cost comparison tables
- 🎨 Modern UI with responsive design
- 💰 Real-time cost analysis
- 🔄 Support for multiple cloud providers (AWS, Azure, GCP)

## Technologies Used

- React 18+
- TypeScript
- Vite
- Recharts for data visualization
- Tailwind CSS for styling
- Shadcn UI components

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deepeshiitjaiswal/clos-cost-dasboard.git
cd clos-cost-dasboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t cloud-cost-dashboard .
```

2. Run the container:
```bash
docker run -p 80:80 cloud-cost-dashboard
```

The application will be available at `http://localhost:80`

## Project Structure

```
src/
├── components/         # React components
│   ├── CostComparison.tsx    # Main cost comparison component
│   ├── DashboardSidebar.tsx  # Dashboard navigation
│   └── ui/                   # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── pages/             # Page components
```

## Features in Detail

### Cost Comparison Graph
- Visual comparison of cloud service costs
- Interactive tooltips with detailed information
- Support for various service categories
- Real-time cost updates

### Detailed Comparison Table
- Comprehensive cost breakdown
- Sortable columns
- Detailed service descriptions
- Cost metrics in USD

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Deepesh - [@deepeshiitjaiswal](https://github.com/deepeshiitjaiswal)

Project Link: [https://github.com/deepeshiitjaiswal/clos-cost-dasboard](https://github.com/deepeshiitjaiswal/clos-cost-dasboard)
