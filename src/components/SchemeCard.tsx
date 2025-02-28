
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface SchemeCardProps {
  title: string;
  description: string;
  eligibility: string[];
  benefits: string;
  department: string;
  deadline?: string;
  url: string;
  isNew?: boolean;
}

const SchemeCard = ({
  title,
  description,
  eligibility,
  benefits,
  department,
  deadline,
  url,
  isNew = false
}: SchemeCardProps) => {
  return (
    <Card className="overflow-hidden card-hover border">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          {isNew && (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">New</Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Benefits:</h4>
            <p className="text-sm text-muted-foreground">{benefits}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100 border-blue-200">
              {department}
            </Badge>
            {deadline && (
              <Badge variant="outline" className="bg-amber-50 text-amber-800 hover:bg-amber-100 border-amber-200">
                Deadline: {deadline}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" className="hover:bg-transparent hover:text-primary p-0 flex items-center" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Apply Now <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SchemeCard;
