import PrimaryTitle from "@/components/PrimaryTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Dashboard() {
  return (
    <div className="mx-auto flex h-screen w-full flex-col gap-6 p-4 text-center">
      <PrimaryTitle text="Dashboard" />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Dashboard;
