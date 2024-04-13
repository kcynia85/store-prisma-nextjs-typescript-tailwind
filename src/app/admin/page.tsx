import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

// type DashboardCardProps = {
//   title: string;
//   subtitle: string;
//   body: string;
// };

const DashboardCard = () => {
  return  (
    <Card>
    <CardHeader>
      <CardTitle>Sales</CardTitle>
      <CardDescription>desc</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Text</p>
    </CardContent>
  </Card>
  );
};

export default DashboardCard;