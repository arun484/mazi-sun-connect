import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { 
  TrendingUp, 
  Zap, 
  DollarSign, 
  Target, 
  AlertTriangle,
  Monitor,
  Camera,
  Settings,
  BarChart3,
  Battery,
  Sun
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Admin = () => {
  const { user } = useAuth();
  const [financialData, setFinancialData] = useState([]);
  const [plantPerformance, setPlantPerformance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch financial data
        const { data: financial } = await supabase
          .from('financial_data')
          .select('*')
          .order('month', { ascending: true });

        // Fetch plant performance data
        const { data: performance } = await supabase
          .from('plant_performance')
          .select('*')
          .order('date', { ascending: false })
          .limit(30);

        setFinancialData(financial || []);
        setPlantPerformance(performance || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sample data for charts when no real data is available
  const sampleFinancialData = [
    { month: '2024-01', revenue: 850000, expenses: 320000, net_profit: 530000 },
    { month: '2024-02', revenue: 920000, expenses: 340000, net_profit: 580000 },
    { month: '2024-03', revenue: 1100000, expenses: 360000, net_profit: 740000 },
    { month: '2024-04', revenue: 1050000, expenses: 350000, net_profit: 700000 },
    { month: '2024-05', revenue: 1200000, expenses: 380000, net_profit: 820000 },
    { month: '2024-06', revenue: 1150000, expenses: 370000, net_profit: 780000 }
  ];

  const samplePerformanceData = [
    { date: '2024-06-01', energy_generated_kwh: 8500, efficiency_percentage: 85.2, target: 8800 },
    { date: '2024-06-02', energy_generated_kwh: 8200, efficiency_percentage: 82.1, target: 8800 },
    { date: '2024-06-03', energy_generated_kwh: 8900, efficiency_percentage: 89.1, target: 8800 },
    { date: '2024-06-04', energy_generated_kwh: 8600, efficiency_percentage: 86.4, target: 8800 },
    { date: '2024-06-05', energy_generated_kwh: 8400, efficiency_percentage: 84.3, target: 8800 },
    { date: '2024-06-06', energy_generated_kwh: 8750, efficiency_percentage: 87.5, target: 8800 },
    { date: '2024-06-07', energy_generated_kwh: 8300, efficiency_percentage: 83.2, target: 8800 }
  ];

  const displayFinancialData = financialData.length > 0 ? financialData : sampleFinancialData;
  const displayPerformanceData = plantPerformance.length > 0 ? plantPerformance : samplePerformanceData;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Please log in to access the admin dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {user.email}. Here's your solar plant overview.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Today's Generation</p>
                        <p className="text-2xl font-bold">8,650 kWh</p>
                      </div>
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+5.2% from yesterday</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                        <p className="text-2xl font-bold">₹11.5L</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+12.5% vs target</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Plant Efficiency</p>
                        <p className="text-2xl font-bold">87.3%</p>
                      </div>
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="text-xs">Optimal</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">System Status</p>
                        <p className="text-2xl font-bold text-green-500">Operational</p>
                      </div>
                      <Battery className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                        All Systems Normal
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Power Generation Trend (Last 7 Days)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={displayPerformanceData.slice(0, 7)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="energy_generated_kwh" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          name="Generated (kWh)"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="target" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          name="Target (kWh)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Overview (Monthly)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={displayFinancialData.slice(-6)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" />
                        <Bar dataKey="expenses" fill="hsl(var(--accent))" name="Expenses" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="financial" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Revenue (YTD)</p>
                        <p className="text-3xl font-bold">₹63.7L</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Net Profit (YTD)</p>
                        <p className="text-3xl font-bold">₹41.5L</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Profit Margin</p>
                        <p className="text-3xl font-bold">65.2%</p>
                      </div>
                      <BarChart3 className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Trend Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={displayFinancialData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        name="Revenue (₹)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="expenses" 
                        stroke="hsl(var(--destructive))" 
                        strokeWidth={2}
                        name="Expenses (₹)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="net_profit" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={3}
                        name="Net Profit (₹)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Daily Target</p>
                        <p className="text-2xl font-bold">8,800 kWh</p>
                      </div>
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Today's Achievement</p>
                        <p className="text-2xl font-bold text-green-500">8,650 kWh</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">98.3%</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Monthly Target</p>
                        <p className="text-2xl font-bold">264,000 kWh</p>
                      </div>
                      <Sun className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Month Achievement</p>
                        <p className="text-2xl font-bold text-primary">172,500 kWh</p>
                      </div>
                      <Badge variant="secondary">65.3%</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Power Generation vs Target</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={displayPerformanceData.slice(0, 10)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="energy_generated_kwh" fill="hsl(var(--primary))" name="Generated (kWh)" />
                      <Bar dataKey="target" fill="hsl(var(--accent))" name="Target (kWh)" opacity={0.7} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="h-5 w-5" />
                      Live Video Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="font-semibold">Under Construction</p>
                        <p className="text-sm text-muted-foreground">Live video feeds coming soon</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Camera 1 - Main Gate</span>
                        <Badge variant="outline">Offline</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Camera 2 - Panel Array A</span>
                        <Badge variant="outline">Offline</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Camera 3 - Control Room</span>
                        <Badge variant="outline">Offline</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      SCADA System Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <Monitor className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="font-semibold">Under Construction</p>
                        <p className="text-sm text-muted-foreground">SCADA integration in progress</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Inverter Monitoring</span>
                        <Badge variant="outline">Pending</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Weather Station</span>
                        <Badge variant="outline">Pending</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Grid Connection Status</span>
                        <Badge variant="outline">Pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>System Alerts & Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800">Scheduled Maintenance Due</p>
                        <p className="text-sm text-yellow-700">Panel cleaning scheduled for next week</p>
                        <Button size="sm" variant="outline" className="mt-2">Schedule Now</Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Monitor className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-800">System Update Available</p>
                        <p className="text-sm text-blue-700">New monitoring software version available</p>
                        <Button size="sm" variant="outline" className="mt-2">Update System</Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                      <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-800">Performance Milestone Achieved</p>
                        <p className="text-sm text-green-700">Exceeded monthly generation target by 5.2%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;