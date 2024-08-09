import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../shadcncomponents/ui/table";
import { Button } from "../shadcncomponents/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../shadcncomponents/ui/card";

const UpcomingClasses = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming classes</CardTitle>
          <CardDescription>For next 7 days</CardDescription>
        </CardHeader>
        <CardContent className="gap-[13px]">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Class name</TableHead>
                <TableHead>Staff name</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Graphic Designing</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <img
                      src="guy-profile.jpg"
                      alt="Guy Hawkins"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>Guy Hawkins</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Book now
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingClasses;
